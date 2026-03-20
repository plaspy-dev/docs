---
slug: /ruptela/fm_plug4/protocol
id: fm_plug4-protocol
sidebar_label: Protocol
title: Ruptela - FM-Plug4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Ruptela FM-Plug4 and how it communicates with Plaspy for vehicle tracking integration
keywords:
  - Ruptela FM-Plug4 protocol
  - Ruptela FM Plug4 GPS protocol
  - FM Plug4 Plaspy compatibility
  - Ruptela tracker protocol
  - FM Plug4 communication
  - Ruptela vehicle tracking
  - FM Plug4 OBD tracker
  - Ruptela protocol Plaspy
  - FM Plug4 tracking protocol
  - Ruptela GPS protocol
---

# Ruptela - FM-Plug4 Protocol

This page describes the public protocol context for using the Ruptela FM-Plug4 tracker with Plaspy. It focuses on how the device reports location and telemetry to a fleet management platform and what to expect when integrating the FM-Plug4 for vehicle monitoring, theft alerts, OBD-II fault reporting (FM-Plug4+), and related features.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol so most FM-Plug4 units can begin reporting without manual selection inside the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration, so this page stays at a public, implementation-agnostic level and encourages checking manufacturer documentation for firmware specific details.

## Protocol Overview

The protocol is the set of rules the FM-Plug4 uses to report data such as GPS position, movement alerts, OBD-II error reports (on FM-Plug4+), and status events to a remote server. In integration with Plaspy, the protocol enables the device to identify itself, transmit telemetry that Plaspy can interpret, and trigger alerts that fleet managers rely on.

- Transports GPS positions, event notifications, and basic diagnostics from the device to the server.
- Carries identity and session information so Plaspy can associate incoming messages with the correct vehicle and device.
- Sends discrete event types such as theft alerts, device removal, towing alerts, and OBD-II fault notifications where supported.
- Supports both persistent and connectionless transports depending on device configuration, allowing flexible installation scenarios.
- Provides the data points Plaspy maps to vehicle location, status, and driver behavior dashboards.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and identifies the device protocol from the messages it receives. Because Plaspy supports automatic protocol detection, end users normally do not need to choose a protocol in the platform when the device is properly configured to report to the Plaspy endpoint.

- Plaspy automatically detects the tracker protocol when the FM-Plug4 reports to the platform.
- The same Plaspy endpoint and port are used for all supported devices which simplifies deployment.
- When a device is configured to send data to Plaspy, the platform inspects incoming reports and matches them to supported protocol patterns.
- Users typically only need to set the device reporting address and transport; Plaspy handles detection and parsing on the server side.
- For unusual firmware variants or customized configurations, validating the device report settings against Plaspy connection details is recommended.

## Transport and Connection Context

Connecting the FM-Plug4 to Plaspy requires pointing the device to the Plaspy server using the platform's shared network settings. Devices may be configured to use either UDP or TCP on the same port, and both domain name and IP address forms are commonly supported by device configuration menus.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The port for Plaspy connections is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which standardizes connection settings across models.
- Choose UDP or TCP according to device firmware and network reliability considerations; the device configuration determines which transport is used.
- Point the FM-Plug4 reporting address to d.plaspy.com or to 54.85.159.138 depending on your provisioning approach and network constraints.

## Protocol Compatibility Notes

- Firmware revisions can add or change supported message types and configuration parameters; verify the FM-Plug4 firmware level when troubleshooting.
- Hardware variants such as FM-Plug4 versus FM-Plug4+ introduce functional differences for features like internal battery and OBD-II error reporting.
- Transport selection (UDP versus TCP) may affect message delivery behavior and should be chosen based on network reliability and device capability.
- Manufacturer configuration options such as reporting intervals, alarms, and SMS-based settings can alter what the tracker sends to Plaspy.
- Plaspy’s automatic detection covers common public protocol behaviors, but custom or heavily modified firmware may require validation.
- Always validate device reporting settings against official Ruptela documentation and your deployment requirements before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the FM-Plug4 communicates helps ensure a reliable connection to Plaspy and reduces integration friction during setup, troubleshooting, and routine maintenance.

- Makes initial setup smoother by aligning device reporting settings with Plaspy endpoint details.
- Helps diagnose connectivity or data visibility issues faster by narrowing checks to transport, endpoint, and firmware.
- Supports proper interpretation of events such as theft alerts, towing detection, and OBD-II fault messages where supported.
- Informs decisions about using UDP or TCP based on network characteristics and message criticality.
- Assists fleet administrators in planning firmware updates and validating behavior changes after upgrades.

## Why Use Plaspy with This Protocol

Using the Ruptela FM-Plug4 with Plaspy provides a practical path to vehicle visibility, alerts, and operational insights without complex per-device configuration. The FM-Plug4’s plug and play design, portability between vehicles, and optional OBD-II diagnostics (on FM-Plug4+) pair well with Plaspy’s centralized handling of incoming tracker data and automatic protocol detection to lower deployment overhead.

To learn more about Plaspy and how it integrates with devices like the Ruptela FM-Plug4, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and configuration instructions, verify details on the manufacturer site https://ruptela.com/ because protocol support and firmware behavior may change over time.
