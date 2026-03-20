---
slug: /cantrack/g900/protocol
id: g900-protocol
sidebar_label: Protocol
title: CanTrack - G900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack G900 and how it communicates with Plaspy for reliable GPS tracking
keywords:
  - CanTrack G900
  - CanTrack G900 protocol
  - G900 GPS protocol
  - CanTrack protocol
  - G900 tracking
  - GPS tracker G900
  - Plaspy compatibility
  - vehicle tracking G900
  - G900 communication
  - fleet management G900
---

# CanTrack - G900 Protocol

This page provides a public protocol overview for using the CanTrack G900 tracker with the Plaspy platform. It describes the communication context that enables the G900 to report location, alarms, and status to Plaspy without exposing private implementation specifics. The content is aimed at administrators and integrators who need to understand how the device connects and behaves at a high level.

The CanTrack G900 is compatible with Plaspy and supports real time tracking, overspeed alarm, power cut alarm, and an IP65 rated enclosure. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by device firmware, hardware revision, and manufacturer implementation, so device specifics should be validated against official CanTrack firmware notes when necessary.

## Protocol Overview

The G900 reporting protocol governs how the tracker sends telemetry and event messages to a remote server so Plaspy can display location and status information. In general terms, the protocol allows the device to identify itself, transmit GPS fixes and status events, and deliver alerts that the platform can interpret and surface to users.

- Identifies the device to the server so Plaspy can associate messages with the correct asset and account.
- Transmits GPS location, timestamp, and basic sensor or alarm states for use in tracking and alerts.
- Sends event notifications such as overspeed and power cut so the platform can trigger rules and notifications.
- Provides periodic reporting or heartbeat messages so device presence and connectivity can be monitored.
- Enables remote configuration when the device and manufacturer firmware support server side command flows.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and automatically detects the tracker protocol used by each device. When a G900 is pointed to Plaspy with the correct connection settings, the platform will recognize the device messages without requiring manual protocol selection in most cases.

- Plaspy listens on the shared domain d.plaspy.com and the public server address 54.85.159.138 for device reports.
- All devices supported by Plaspy use the same network port, so configuration is simplified for installers and fleet administrators.
- Plaspy will automatically detect the tracker protocol when the G900 is configured to report to the Plaspy endpoint.
- Users typically do not need to select a protocol inside Plaspy if the device is correctly configured to send data to the platform.
- If a device uses a nonstandard transport or custom firmware behavior, verifying device settings against manufacturer documentation helps resolve detection issues.

## Transport and Connection Context

The G900 can be configured to use either UDP or TCP transport depending on device firmware and installer preference. For Plaspy integration, both transports are accepted on the platform port so the device can be set up according to what the tracker and network environment support.

- Devices may be configured to point to d.plaspy.com or the numeric server address 54.85.159.138.
- Plaspy accepts device reports on port 8888 and that same port is used for all supported devices in the platform.
- The G900 may support selecting UDP or TCP as the transport protocol; choose the transport that matches device capabilities and network reliability needs.
- Network firewalls and carrier APN settings should allow outbound connections to the Plaspy server on port 8888 for successful reporting.
- When testing connectivity, confirm the device is pointed at the Plaspy endpoint and using the configured transport type.

## Protocol Compatibility Notes

- Firmware revisions can change the exact messages and fields the G900 sends; verify the G900 firmware version when troubleshooting protocol compatibility.
- Hardware revisions and optional features on the tracker can affect which telemetry or alarms are reported.
- Manufacturer configuration commands and transport defaults may vary by region or distributor supplied firmware.
- Choosing UDP or TCP can affect delivery characteristics; UDP is lightweight while TCP provides inbuilt delivery confirmation.
- Always confirm the device is configured to report to the Plaspy host and port as part of initial setup.
- Reference the manufacturer documentation for device specific options that influence reporting intervals and event generation.

## Why Protocol Understanding Matters

Understanding how the G900 communicates helps ensure reliable tracking, accurate alerting, and smooth integration into Plaspy. Knowing the connection and protocol context reduces setup time, speeds up troubleshooting, and supports long term reliability for fleet and asset management.

- Helps validate device configuration so telemetry appears correctly in Plaspy dashboards.
- Reduces time to diagnose connectivity issues related to transport or DNS versus protocol mismatches.
- Supports informed choices about reporting intervals, event thresholds, and transport selection.
- Enables administrators to coordinate firmware updates and configuration changes with predictable outcomes.
- Improves confidence when integrating multiple tracker models into a single Plaspy deployment.

## Why Use Plaspy with This Protocol

Using the CanTrack G900 with Plaspy provides organizations with centralized visibility into vehicle and asset movements, plus access to alarm and status events that support safety and security workflows. The combination of G900 hardware features and Plaspy's automated protocol detection makes it straightforward to bring devices online and begin monitoring assets.

Plaspy simplifies device onboarding by using the same port for all supported trackers and by automatically recognizing the reporting protocol when the G900 is pointed to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888. To learn more about Plaspy and how it supports fleet and asset tracking, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and implementation details, please verify information with the manufacturer at https://www.cantrackgps.com/.
