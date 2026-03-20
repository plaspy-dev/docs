---
slug: /eelink/gpt46/protocol
id: gpt46-protocol
sidebar_label: Protocol
title: EElink - GPT46 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for EElink GPT46 integration with Plaspy for reliable asset tracking
keywords:
  - EElink GPT46 protocol
  - EElink GPT46 GPS protocol
  - EElink GPT46 Plaspy compatibility
  - GPT46 communication protocol
  - GPT46 tracking protocol
  - Plaspy device integration
  - LTE Cat M1 GPS tracker
  - BLE host asset tracker
  - fleet tracking protocol
  - logistics asset monitoring
---

# EElink - GPT46 Protocol

This page summarizes the public protocol context for using the EElink GPT46 tracker with Plaspy. It focuses on how the device reports location and telemetry to the Plaspy platform and what that communication means for deployment and troubleshooting. The content here is intended for technical readers planning integrations, installers, and operations teams who need to understand how the tracker connects to a cloud endpoint.

The GPT46 is a long-standby LTE Cat M1 and NB1 tracker with BLE host functionality designed for industrial asset and logistics monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact device behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always cross check device firmware notes and manufacturer guidance when preparing large deployments.

## Protocol Overview

At a high level the tracker reporting protocol defines how the GPT46 packages location fixes, telemetry, and sensor context and forwards those messages to a cloud endpoint so Plaspy can consume them. The protocol governs the timing of reports, device identification, and the framing of the data that Plaspy maps into dashboards and alert rules.

- Enables the GPT46 to send GPS fixes, device state, and paired BLE sensor data to Plaspy for mapping and analysis.
- Carries device identity and status information so Plaspy can associate reports with the correct asset record.
- Supports periodic check ins and event driven messages so operators receive timely updates for movement or sensor alerts.
- Allows Plaspy to translate incoming telemetry into usable fields such as location, battery state, and sensor readings.
- Acts as the interface layer between the field device and Plaspy without exposing device firmware internals.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and port and uses that common channel to identify the device protocol automatically. In most deployments you do not have to manually select a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint with the correct connection settings.

- Plaspy listens on the shared server address d.plaspy.com for incoming device reports.
- The public Plaspy server IP is 54.85.159.138 and the platform uses port 8888 for device connections.
- Devices may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy.
- All devices supported by Plaspy use the same port, simplifying device configuration and firewall rules.
- Plaspy automatically detects the tracker protocol so properly configured devices are generally recognized without manual protocol selection.

## Transport and Connection Context

The GPT46 can report to a cloud endpoint over LTE Cat M1 or NB1 networks and may use either UDP or TCP transport depending on device configuration and firmware capabilities. Connection context is important for firewall configuration, carrier routing, and ensuring reliable message delivery to Plaspy.

- The device may be set to point to the domain d.plaspy.com for hostname based routing to the Plaspy platform.
- Alternately the device can be configured to report directly to the public IP 54.85.159.138 if needed for network setups.
- Plaspy receives device traffic on port 8888 and this is the common port used across all supported devices.
- Transport choice may be UDP or TCP on port 8888 depending on the tracker configuration and network behavior.
- Verify carrier network behavior for LTE Cat M1 or NB1 as it can affect reconnection and message timing.

## Protocol Compatibility Notes

- GPT46 is designed for compatibility with Plaspy but behavior can differ across firmware versions and regional hardware variants.
- BLE host features add sensor context but require correct pairing and configuration on the device to include those readings in reports.
- Selecting UDP versus TCP may change delivery characteristics and should be tested for your deployment scenario.
- Carrier provisioning and the device band support for LTE Cat M1 or NB1 vary by market and can affect connectivity.
- Firmware updates or manufacturer configuration utilities can change reporting intervals and message content.
- Always validate a sample device end to end before rolling out large numbers of units.

## Why Protocol Understanding Matters

Understanding the protocol that the GPT46 uses to report to Plaspy helps ensure a successful installation, predictable telemetry behavior, and faster troubleshooting when issues occur. It also helps operations teams make informed choices about transport, power management, and sensor integrations.

- Simplifies initial setup by matching device reporting settings to Plaspy connection requirements.
- Reduces troubleshooting time when devices fail to appear by confirming transport, host, and port settings.
- Helps plan battery life and reporting cadence to meet operational requirements without excessive maintenance.
- Clarifies how BLE sensor data is included so integrators can design end to end workflows for alerts and monitoring.
- Supports compatibility checks when firmware revisions or carrier changes are introduced.

## Why Use Plaspy with This Protocol

Using the GPT46 with Plaspy gives organizations centralized visibility into assets that benefit from long standby, low power cellular telemetry and BLE sensor augmentation. The combination supports real time monitoring, historical playback, and alerting that are useful for fleet, logistics, and anti theft use cases without frequent on site maintenance.

To learn more about Plaspy and how it receives tracker data, visit https://www.plaspy.com. For the most current device specific protocol notes, firmware behavior, and implementation details consult the manufacturer at https://www.eelink.com.cn/ since protocol support and firmware features can change over time.
