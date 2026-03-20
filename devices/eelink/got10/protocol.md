---
slug: /eelink/got10/protocol
id: got10-protocol
sidebar_label: Protocol
title: EElink - GOT10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the EElink GOT10 OBD tracker with Plaspy using shared Plaspy connection settings
keywords:
  - EElink GOT10 protocol
  - EElink GOT10 GPS protocol
  - EElink GOT10 communication protocol
  - EElink GOT10 tracking protocol
  - EElink GOT10 OBD tracker
  - GOT10 OBD protocol
  - GOT10 CAN BUS data
  - Plaspy device compatibility
  - Plaspy GPS tracker setup
  - fleet management OBD tracker
---

# EElink - GOT10 Protocol

This page documents the public protocol context for using the EElink GOT10 OBD tracker with Plaspy. It explains how the GOT10 reports vehicle location and CAN BUS diagnostics to Plaspy in broad, non-sensitive terms and highlights the configuration and connectivity points most relevant to integration and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by GOT10 firmware version, hardware revision, and manufacturer implementation, so this page focuses on general communication roles and compatibility guidance rather than firmware specific internals.

## Protocol Overview

The GOT10 uses its OBD-II connection to capture CAN BUS frames and OBD diagnostics, then forwards telemetry and diagnostics to a remote server so fleet management platforms like Plaspy can display location, engine data, and faults. The protocol in this context is the device reporting and telemetry exchange that enables those capabilities rather than a single named public standard.

- Enables the GOT10 to identify itself and the vehicle context to Plaspy so location and vehicle telemetry can be associated in the platform.
- Carries position updates and time series CAN BUS and OBD diagnostic values so Plaspy can display live tracking and historical reports.
- Transmits diagnostic trouble codes and operational telemetry that support alerting and maintenance workflows in Plaspy.
- Provides a transportable reporting mechanism that can use either UDP or TCP depending on device configuration and network conditions.
- Supports periodic status or heartbeat reporting to indicate device online state and help Plaspy detect active devices.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from supported devices at a single shared endpoint and automatically determines the incoming tracker protocol so most users do not need to select a protocol manually in the platform. Proper device configuration to point at the Plaspy endpoint is the common requirement for automatic detection to work.

- Point the GOT10 to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 so reports arrive at the platform.
- Use port 8888 for device reporting; Plaspy uses the same port for all supported devices which simplifies configuration.
- The device may be configured to send data over UDP or TCP on port 8888 depending on device firmware and network preferences.
- When the GOT10 reports to the Plaspy endpoint, Plaspy uses the incoming data to determine the appropriate parsing and mapping automatically.
- In most cases, no manual protocol selection within Plaspy is required if the device is correctly pointed to the Plaspy endpoint and uses the supported transport.

## Transport and Connection Context

Connection details are an important part of successful integration. The GOT10 typically forwards telemetry from the vehicle to the cloud using either UDP or TCP depending on the unit configuration and network environment. Plaspy listens on a single well known port for all devices which reduces configuration complexity.

- Devices may be configured to report to d.plaspy.com or to the numeric address 54.85.159.138.
- Port 8888 is the operational port for all Plaspy device reporting and should be used for GOT10 configuration.
- The GOT10 can use UDP or TCP on port 8888 depending on device support and the selected transport option.
- Using the domain name d.plaspy.com allows DNS based routing and can be preferable when network environments change.
- Ensure network firewalls and mobile data plans permit outbound traffic to the Plaspy endpoint on port 8888 for reliable reporting.

## Protocol Compatibility Notes

- Firmware differences may change which OBD and CAN signals are reported, so compare the device firmware notes to the fields expected in Plaspy.
- Hardware revisions or optional device variants can affect available telemetry such as supported CAN PIDs or diagnostic information.
- The choice of UDP versus TCP can influence delivery behavior; select the transport that best fits the vehicle network and operator needs.
- Vehicle make and model determine which CAN BUS parameters are available through the OBD port; not all vehicles expose the same sensors.
- Manufacturer configuration commands or server settings must be used exactly as specified by EElink to ensure the device reports to Plaspy correctly.
- Validate compatibility against the official EElink documentation for device specific instructions, firmware notes, and any manufacturer advisories.

## Why Protocol Understanding Matters

Understanding how the GOT10 communicates with Plaspy helps fleet administrators and integrators configure devices correctly, interpret incoming telemetry, and troubleshoot connectivity or data mapping issues. A clear view of the communication context reduces setup time and increases confidence in operational reporting.

- Ensures the GOT10 is pointed to the correct Plaspy endpoint and transport so data arrives reliably.
- Helps identify why specific CAN BUS or OBD fields may be missing based on firmware, vehicle support, or configuration.
- Assists in diagnosing connectivity issues by confirming DNS resolution to d.plaspy.com or reachability to 54.85.159.138 on port 8888.
- Supports informed choices about transport selection and network configuration for mobile or constrained networks.
- Improves the effectiveness of Plaspy alerts and reports by aligning device telemetry with platform expectations.

## Why Use Plaspy with This Protocol

Using the EElink GOT10 with Plaspy gives fleet operators a unified view of vehicle location and diagnostic telemetry without extra wiring. The OBD-II plug-and-play form factor simplifies deployment across mixed fleets while enabling CAN BUS and OBD diagnostics to be streamed into the same operational dashboards used for tracking, alerting, and reporting.

Plaspy’s single endpoint approach and automatic protocol detection make it straightforward to get started: point the GOT10 to d.plaspy.com or 54.85.159.138 using port 8888 over UDP or TCP as appropriate, and Plaspy will handle protocol detection and data mapping. For additional device specifics, firmware behavior, and the latest manufacturer guidance, please review the official EElink documentation at https://www.eelink.com.cn/ and learn more about Plaspy at https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time so verify current information with the manufacturer.
