---
slug: /navtelekom/smart_s_2423/protocol
id: smart_s_2423-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2423 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom SMART S-2423 compatibility with Plaspy for device integration and transport settings
keywords:
  - Navtelekom SMART S-2423 protocol
  - Navtelekom SMART S-2423 GPS protocol
  - Navtelekom SMART S-2423 Plaspy
  - SMART S-2423 communication protocol
  - SMART S-2423 tracking protocol
  - Navtelekom tracker compatibility
  - GPS tracker Plaspy integration
  - GLONASS GPS tracker Navtelekom
  - vehicle tracking SMART S-2423
  - fleet tracking Navtelekom
---

# Navtelekom - SMART S-2423 Protocol

This page provides a public and practical overview of the communication protocol context for the Navtelekom SMART S-2423 when used with Plaspy. It explains how the tracker reports position, telemetry and event data to the platform in non sensitive terms and clarifies the connection settings commonly used to integrate the device into Plaspy deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary between firmware versions, hardware revisions and manufacturer configuration, so this page focuses on how the device communicates at a high level rather than on firmware specific frames or proprietary internals.

## Protocol Overview

The SMART S-2423 uses its GNSS receiver and GSM modem to gather location and telemetry, then transmits that information to a remote server addressed to Plaspy. The protocol in this public context refers to the device reporting format and command exchange that allows location fixes, sensor readings and status events to be collected by Plaspy for maps, alerts and historical reporting.

- Enables positional reporting from the integrated GLONASS and GPS receiver for live and historical location data.
- Carries telemetry and sensor information from interfaces such as RS-485, 1-Wire and Bluetooth for richer diagnostics.
- Conveys event states from universal inputs and configurable outputs so ignition, door and alarm events appear in Plaspy alerts.
- Provides a stable channel for remote configuration updates and firmware management when used with manufacturer tools such as NTC Configurator and DRC.
- Acts as the bridge between the device hardware and Plaspy so the platform can ingest and normalize device data for visualization and automations.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared public endpoint and automatically determines the tracker protocol so users normally do not need to select a protocol manually. Proper device configuration to report to the Plaspy endpoint is the primary requirement for the automatic detection and parsing workflow.

- Plaspy listens on a single port used by all supported devices and automatically detects the tracker protocol.
- When the SMART S-2423 is configured to point to the Plaspy endpoint the platform will identify the device reporting format without manual selection.
- Detection is based on the incoming connection and the data stream sent by the device rather than requiring a user to register a protocol setting.
- Users should ensure device reporting settings match the expected Plaspy endpoint and transport mode for reliable detection.
- If a device is not being detected, verify configuration, firmware level and that the device can reach the Plaspy endpoint over the chosen transport.

## Transport and Connection Context

The SMART S-2423 may be configured to use UDP or TCP depending on device support and deployment preferences. Plaspy provides a single server endpoint for device reporting and the device should be configured to use that endpoint and the shared port used by all Plaspy devices.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct addressing.
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network requirements.
- Choose UDP for lower overhead where allowed or TCP for persistent connections based on your connectivity and reliability needs.
- Ensure your network and SIM plan permit outbound connections to the Plaspy endpoint and port to avoid blocked reporting.

## Protocol Compatibility Notes

- Firmware differences can change how the SMART S-2423 formats certain fields or responds to commands; verify firmware release notes when troubleshooting.
- Hardware revisions and regional variants can introduce minor protocol behavior changes that affect how Plaspy parses telemetry or events.
- Transport selection between UDP and TCP may influence delivery reliability and should match device capability and deployment constraints.
- Manufacturer tools such as NTC Configurator and DRC are useful for ensuring device settings and firmware are consistent with Plaspy expectations.
- Always validate device settings against the manufacturer documentation and confirm the device is pointed to the Plaspy endpoint for automatic detection.
- If you operate large fleets, test a small number of units after changes to firmware or configuration before rolling out at scale.

## Why Protocol Understanding Matters

Understanding how the SMART S-2423 communicates helps ensure reliable setup, faster troubleshooting and predictable long term operation within Plaspy. A practical awareness of reporting behavior and transport context reduces integration time and improves data quality for fleet operations.

- Facilitates correct configuration of the device to point at the Plaspy endpoint and use the shared port.
- Helps interpret device reported telemetry and map inputs to Plaspy dashboards and alerts.
- Speeds troubleshooting when location updates or sensor data are missing by focusing checks on transport, firmware and configuration.
- Improves planning for firmware and lifecycle management using manufacturer tools and remote management.
- Supports reliable automation and control workflows by ensuring event states and outputs are reported and acted on consistently.

## Why Use Plaspy with This Protocol

Using the SMART S-2423 with Plaspy gives organizations a straightforward path to ingest GLONASS and GPS location fixes, combine them with telemetry from RS-485 and 1-Wire interfaces, and surface status from universal inputs and configurable outputs. This combination is useful for fleet visibility, asset monitoring and operational controls without requiring extensive gateway or protocol conversion work.

Plaspy provides a single endpoint that simplifies device on boarding and reduces configuration complexity across mixed fleets. To learn more about Plaspy and how it can integrate with devices like the SMART S-2423 visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time and you should verify the latest device specific information on the manufacturer site https://www.navtelecom.ru/.
