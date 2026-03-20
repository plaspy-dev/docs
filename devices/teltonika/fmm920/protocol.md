---
slug: /teltonika/fmm920/protocol
id: fmm920-protocol
sidebar_label: Protocol
title: Teltonika - FMM920 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMM920 and how it communicates with Plaspy for reliable tracking and telemetry
keywords:
  - Teltonika FMM920
  - FMM920 protocol
  - FMM920 GPS protocol
  - Teltonika FMM920 Plaspy
  - FMM920 communication
  - FMM920 tracking protocol
  - GPS tracker FMM920
  - fleet tracking Teltonika FMM920
  - FMM920 BLE sensors
  - Teltonika tracker protocol
---

# Teltonika - FMM920 Protocol

This page summarizes the public protocol context for using the Teltonika FMM920 tracker with Plaspy. It focuses on the communication and connection details that matter for integration and troubleshooting while avoiding device internals and sensitive implementation specifics. Use this as a reference for how the FMM920 typically communicates with Plaspy and what to check during setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior may vary with firmware version, hardware revision, regional device variants, and manufacturer configuration practices. For device specific protocol frames and firmware changes, consult the manufacturer documentation.

## Protocol Overview

The protocol for the FMM920 defines how the tracker reports position, telemetry, and events to a remote server so Plaspy can ingest and present that data. In public terms, the protocol covers identity exchange, periodic or event driven reporting, and telemetry payloads that carry location, sensor, and device state information to the cloud endpoint.

- Enables the tracker to report GNSS position, BLE sensor readings, and device state updates to Plaspy for real time monitoring.
- Provides a consistent channel for alerts and event notifications such as power loss, tamper, and backup battery status.
- Allows remote control actions initiated from a management platform to be routed to the device when allowed by the manufacturer features.
- Carries device identification and status information so Plaspy can associate incoming messages with the correct asset.
- Works alongside cellular connectivity and the device firmware to determine reporting intervals and conditions for data transmission.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device connections and uses the information in those connections to identify the tracker protocol. When a Teltonika FMM920 is pointed at the Plaspy endpoint and sends its reporting traffic, Plaspy will recognize the protocol and handle the messages appropriately without a manual protocol selection in most cases.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network configuration.
- When a device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy automatically detects the tracker protocol.
- Typical setup does not require selecting a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection transport and addressing are part of the public integration context for the FMM920. The tracker uses cellular networks to reach Plaspy and can be configured to use either UDP or TCP transport to the Plaspy endpoint. Understanding which transport is used helps ensure network and firewall rules allow proper device communication.

- Devices may point to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- The supported transport for reporting to Plaspy is UDP or TCP on port 8888 depending on device configuration and network requirements.
- Plaspy uses the same port 8888 for all supported devices to simplify deployments and firewall configuration.
- Choose UDP when minimal overhead and lower latency are priorities, or TCP when a reliable transport handshake is preferred, according to device capability and operator policy.
- Ensure carrier and local firewall rules allow outbound connections from devices to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware version and device configuration can change how and when telemetry is reported; always verify behavior for your firmware revision.
- Regional hardware variants or radio band differences do not change the public reporting endpoint but can affect connectivity in specific areas.
- Transport selection between UDP and TCP is a configuration option on the device and can affect delivery characteristics.
- Manufacturer side features such as BLE sensor support and remote actions depend on the device firmware and available hardware options.
- Validate compatibility by testing a small number of devices in your network before wide deployment.
- Refer to official Teltonika documentation for firmware specific details and supported features on your exact hardware revision.

## Why Protocol Understanding Matters

Understanding how the FMM920 communicates with Plaspy helps ensure reliable device onboarding, accurate telemetry ingestion, and efficient troubleshooting when networks or devices behave unexpectedly. Knowing the public protocol and connection context reduces setup time and improves operational confidence.

- Helps confirm devices are pointed to the correct Plaspy endpoint and using the supported transport.
- Simplifies firewall and carrier configuration by using the known Plaspy server domain and port.
- Aids in diagnosing intermittent connectivity by clarifying whether issues are network, transport, or device configuration related.
- Ensures BLE sensors and telemetry channels are mapped correctly into Plaspy for accurate reporting.
- Supports predictable fleet scaling by standardizing on the shared Plaspy endpoint and port across devices.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM920 with Plaspy provides a straightforward path to centralized tracking, telemetry aggregation, and operational visibility. The FMM920's compact form, BLE sensor support, backup battery reporting, and cellular options make it well suited for fleet anti theft workflows, shared vehicle programs, and sensor driven cargo monitoring when combined with a cloud platform that accepts standard device reports.

Plaspy's shared endpoint model and automatic protocol detection reduce the configuration steps required to onboard FMM920 devices. Because Plaspy uses the same port for all supported devices and can accept both UDP and TCP on port 8888, deployment and firewall planning are simplified for fleet operators.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device protocol details, firmware behavior, and manufacturer notes, verify information with Teltonika at https://www.teltonika-gps.com/ since firmware updates and device variants can change protocol behavior over time.
