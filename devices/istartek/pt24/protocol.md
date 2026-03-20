---
slug: /istartek/pt24/protocol
id: pt24-protocol
sidebar_label: Protocol
title: iStartek - PT24 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iStartek PT24 and its communication with Plaspy cloud platform
keywords:
  - iStartek PT24 protocol
  - iStartek PT24 GPS protocol
  - PT24 tracker protocol
  - PT24 Plaspy compatibility
  - PT24 communication protocol
  - iStartek GPS tracker protocol
  - PT24 tracking protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - PT24 telemetry protocol
---

# iStartek - PT24 Protocol

This page describes the public protocol context for using the iStartek PT24 Solar GPS Tracker with Plaspy. It focuses on how the PT24 communicates with Plaspy cloud services in broad, non-sensitive terms and explains the role of the device reporting protocol in successful device integration and operation.

Plaspy accepts connections to a single shared endpoint and automatically detects the tracker protocol when the device reports correctly. Exact behavior can vary by device firmware, hardware revision, and manufacturer implementation, so this document keeps protocol discussion at a high level while highlighting the connection settings Plaspy exposes for public use.

## Protocol Overview

The PT24 uses a device reporting protocol to deliver location, event, and sensor telemetry to a remote server. That protocol is the mechanism by which the tracker identifies itself to the cloud, reports positional data and alerts, and enables downstream services like mapping and notifications.

- The protocol defines how the PT24 sends location updates, sensor events, and alarm signals to the server.
- Identification and device identity information are included so Plaspy can attribute incoming messages to the correct asset.
- Telemetry such as tamper, SIM removal, SOS, G sensor events, and light sensor readings is carried by the same reporting channel to support alerts.
- Reporting behavior (intervals, sleep modes, and event triggers) interacts with the protocol to balance power use and reporting needs.
- Plaspy receives these reports and converts them into live location, historical playback, and alerting features for users.

## How Plaspy Detects the Protocol

Plaspy operates a shared server endpoint that accepts incoming tracker reports and determines the appropriate handling for each device. When a properly configured PT24 points to the Plaspy endpoint, the platform will detect and process the device protocol automatically.

- Devices should be configured to report to d.plaspy.com or to the Plaspy server IP address 54.85.159.138.
- Plaspy listens on port 8888 and uses that single port for all supported devices.
- The platform automatically detects the tracker protocol when data arrives on the shared endpoint, so manual protocol selection in Plaspy is typically not required.
- Proper device identification (IMEI or device ID) and matching configuration on the device side ensures the Plaspy platform attributes messages correctly.
- If a device is not being detected, verify network settings, outbound transport selection, and firmware reporting configuration on the tracker.

## Transport and Connection Context

The PT24 supports standard cellular uplink methods and can be configured to use different transport layers depending on firmware and settings. Plaspy exposes a simple connection target so devices can send telemetry reliably from the field.

- The device may be configured to use either UDP or TCP transport to reach Plaspy.
- Plaspy accepts device connections on port 8888 for both UDP and TCP; this is the same port used across all Plaspy supported devices.
- Devices can be pointed at the hostname d.plaspy.com or directly at the server IP 54.85.159.138 if DNS is not available.
- Transport choice (UDP vs TCP) affects reliability and retransmission behavior at the network level but does not change the high level role of the device protocol.
- Ensure the tracker’s APN and cellular settings allow outbound connections to port 8888 and that any carrier firewalls permit the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions may add, change, or remove protocol features; always check the tracker firmware version when validating behavior.
- Hardware revisions and optional sensor suites can affect which telemetry fields are present in reports.
- Manufacturer-side configuration options may change command names or event flags; consult iStartek documentation for firmware-specific details.
- Transport selection between UDP and TCP can be set on the device and should match the intended reliability and power tradeoffs.
- Plaspy uses the same listening port for all devices and automatically detects incoming protocols, but correct device-side configuration is required for detection.
- Validate compatibility by testing a device in a controlled environment before broad deployment.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps ensure reliable setup, faster troubleshooting, and predictable long term behavior when using PT24 devices with Plaspy. A basic familiarity with how telemetry is reported and how the platform receives it reduces configuration errors and helps teams interpret device state more effectively.

- It speeds initial setup by clarifying which server and transport settings to apply on the device.
- Troubleshooting connectivity, missing reports, or misattributed data is easier when you know where to check device reporting settings.
- Power management and reporting frequency decisions are informed by how the protocol carries event vs periodic data.
- Awareness of firmware and hardware differences prevents surprises when rolling out devices at scale.
- It supports more accurate expectations for alerting, geofencing, and sensor-driven events in the cloud platform.

## Why Use Plaspy with This Protocol

Pairing the PT24 with Plaspy gives organizations a practical path to convert long-duration, field-ready telemetry into operational insight. Plaspy ingests the PT24’s location, tamper, SOS, and sensor events and surfaces them in dashboards, geofence rules, and alert workflows that are useful for animal welfare, asset protection, and remote operations.

Plaspy’s shared endpoint approach keeps device configuration straightforward: point PT24 devices at d.plaspy.com or 54.85.159.138 and use port 8888 with UDP or TCP as supported. Plaspy automatically detects the tracker protocol and applies the appropriate handling so users can focus on rules, notifications, and analytics instead of per-device protocol selection.

Learn more about Plaspy on the main website https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes at the manufacturer site https://istartek.com/.
