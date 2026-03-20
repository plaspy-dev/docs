---
slug: /arusnavi/arnavi_l2_cigarette_lighter_version_with_panic_button/protocol
id: arnavi_l2_cigarette_lighter_version_with_panic_button-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Arusnavi Arnavi L2 cigarette lighter tracker and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Arusnavi Arnavi L2 protocol
  - Arnavi L2 GPS tracker communication
  - Arnavi L2 Plaspy compatibility
  - Arnavi L2 panic button tracking
  - cigarette lighter GPS tracker protocol
  - Arusnavi tracker protocol overview
  - Arnavi L2 telemetry and events
  - Plaspy device integration
  - GNSS tracker for fleet management
  - Arnavi L2 BLE sensor integration
---

# Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Protocol

This page summarizes the public protocol context for using the Arusnavi Arnavi L2 cigarette lighter tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, implementation neutral terms to help fleet managers and technical integrators understand the connection and reporting behavior without exposing private details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by device firmware, hardware revision, and manufacturer implementation, so this document emphasizes general protocol roles and practical configuration considerations rather than low level packet formats.

## Protocol Overview

The communicator protocol in the Arnavi L2 enables the device to deliver GNSS positions, telemetry, events, and sensor data to a remote server for use by Plaspy. The protocol defines how the tracker identifies itself, reports telemetry and alarms, and uploads stored records after offline periods.

- Provides periodic GNSS position and movement telemetry for real time visibility on Plaspy.
- Sends event notifications such as panic button presses, tow or impact alerts from the accelerometer, and ignition changes.
- Transmits BLE sensor readings and accessory telemetry to be associated with the device stream.
- Uploads black box log data stored locally when connectivity is restored to ensure continuity of trip history.
- Supports remote configuration and firmware update workflows through server configured endpoints.
- May be available in multiple server protocol flavors supported by the manufacturer including INTERNAL EXTERNAL USER_AG and EGTS depending on device setup.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a shared endpoint and port and automatically determines the correct protocol to use for each reporting tracker. When the Arnavi L2 is configured to report to Plaspy, manual protocol selection inside the platform is typically not required.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on port 8888 for incoming tracker connections and uses the same port for all devices.
- Devices configured to point to d.plaspy.com or the server IP and to use the supported transport will be accepted by Plaspy.
- Plaspy automatically detects the tracker protocol once the device connects and begins reporting.
- Users should ensure the device is configured to report to the Plaspy endpoint and that SIM APN and network access are valid.
- If a device supports multiple manufacturer protocols, confirm the active server protocol setting in the device configuration to match expected behavior.

## Transport and Connection Context

Connection transport for the Arnavi L2 is governed by the device modem capabilities and its configuration on the manufacturer side. The tracker can be set to use either UDP or TCP transport depending on support and requirements.

- The Arnavi L2 may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- Devices can be pointed to the Plaspy reporting host using d.plaspy.com or the numeric server IP 54.85.159.138.
- All devices reporting to Plaspy use the same port, simplifying firewall and server configuration.
- Transport selection can affect behavior under mobile networks and firewall rules, so choose the transport that best fits carrier and infrastructure constraints.
- Ensure the device APN, SIM status, and GPRS connectivity are functioning to enable reliable reporting.
- BLE and local interfaces remain independent of the cellular transport and are used for additional sensor data and local configuration.

## Protocol Compatibility Notes

- Firmware and configuration versions may change available protocol features or server protocol names and must be validated for each device batch.
- Hardware revisions can introduce different modem or sensor behavior that affects reporting cadence or event handling.
- The device supports multiple manufacturer server protocols such as INTERNAL EXTERNAL USER_AG and EGTS which may be selectable on the device.
- Transport choice between UDP and TCP can affect delivery characteristics and should be coordinated with carrier and server settings.
- Remote configuration and firmware updates can modify the device reporting behavior; verify update policies before large scale deployment.
- Always confirm compatibility and recommended settings against Arusnavi official documentation for the specific firmware and hardware revision.

## Why Protocol Understanding Matters

Knowing how the Arnavi L2 reports and which transport and protocol settings it uses helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy.

- Ensures devices are configured to report to the correct Plaspy endpoint using d.plaspy.com or the server IP.
- Helps diagnose connectivity issues related to APN, carrier restrictions, or firewall rules for port 8888.
- Clarifies how events such as panic button presses and accelerometer alerts are expected to appear in Plaspy.
- Guides decisions on UDP versus TCP transport to match reliability and latency expectations.
- Supports planning for offline logging upload behavior so trip history remains complete after coverage gaps.
- Enables better coordination between on vehicle configuration and Plaspy account settings for fleet scale deployments.

## Why Use Plaspy with This Protocol

Using the Arnavi L2 with Plaspy gives organizations a streamlined way to bring plug and play GPS telemetry, panic alerts, BLE sensor data, and offline logging into a single fleet management platform. The cigarette lighter form factor and integrated panic button make the device a practical choice for short term rentals, rideshare, and mixed fleet scenarios where fast installation and removal are priorities.

Plaspy simplifies device onboarding by exposing a single reporting endpoint at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detecting the tracker protocol so configured devices begin reporting without manual protocol selection. To learn more about how Plaspy can work with your fleet and the Arnavi L2, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.arusnavi.ru.
