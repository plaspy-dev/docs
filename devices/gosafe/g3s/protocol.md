---
slug: /gosafe/g3s/protocol
id: g3s-protocol
sidebar_label: Protocol
title: Gosafe - G3S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Gosafe G3S GPS tracker and how it communicates with Plaspy for fleet tracking and monitoring
keywords:
  - Gosafe G3S protocol
  - Gosafe G3S GPS protocol
  - Gosafe G3S Plaspy
  - Gosafe GPS tracker protocol
  - G3S tracking protocol
  - Gosafe fleet tracking
  - G3S communication protocol
  - Plaspy tracker compatibility
  - vehicle tracking protocol
  - Gosafe device integration
---

# Gosafe - G3S Protocol

This page provides a public, non sensitive overview of the communication context for using the Gosafe G3S tracker with Plaspy. It is intended to explain how the device reports location and status data to Plaspy and the role of the tracker protocol in enabling that communication without exposing firmware internals or proprietary details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior for a G3S unit can vary by firmware version, hardware revision, and manufacturer implementation, so integrators should treat this information as high level protocol context rather than a definitive specification.

## Protocol Overview

The protocol for a vehicle tracker like the Gosafe G3S is the set of rules and messages the device uses to identify itself and deliver telemetry to a server. With Plaspy, the protocol enables devices to send position updates, status indicators, and event notifications to a centralized fleet platform so those messages become actionable for monitoring and dispatch.

- Allows the device to identify itself and associate reports with a specific vehicle or unit
- Transmits location and basic telemetry so Plaspy can display position and movement
- Sends event and alarm indicators used for geofence, ignition, and other alerts
- Enables basic two way interaction where supported for command acknowledgements or configuration feedback
- Provides the consistent data stream Plaspy needs to normalize device reports across many tracker models

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and uses that incoming data to determine the tracker protocol automatically. In most deployments you do not need to select a protocol in Plaspy manually if the device is configured to report to the Plaspy endpoint correctly.

- Plaspy accepts reports on the domain d.plaspy.com and the server IP 54.85.159.138
- All devices supported by Plaspy use the same port which simplifies device configuration
- Plaspy automatically detects the tracker protocol from the incoming connection and reported data
- Users typically configure the device to send its server address and transport type only and Plaspy handles detection
- If a device reports but does not appear in Plaspy, check device endpoint, transport, and device configuration against manufacturer guidance

## Transport and Connection Context

Connection choices control how G3S devices deliver their reports to Plaspy but do not change the high level purpose of the protocol. The G3S may be configured to use either UDP or TCP depending on device capability and deployment needs, and it should point to the Plaspy endpoint so messages reach the platform.

- The G3S device may be configured to use UDP or TCP on port 8888
- Plaspy listens for tracker reports on port 8888 for all supported devices
- Devices can point to the hostname d.plaspy.com or to the server IP 54.85.159.138
- Using the hostname allows DNS based routing and easier endpoint updates if needed
- Choice of UDP versus TCP may affect delivery characteristics and should follow manufacturer guidance

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change which protocol features and message types a G3S supports
- Some manufacturer configurations or firmware builds may default to UDP or TCP; validate transport selection before deployment
- Plaspy uses a single listening port for simplicity but device configuration must match that port to reach the platform
- Manufacturer documentation may list device specific commands or configuration steps not covered in this public overview
- Validate device reporting by testing a single unit prior to large scale rollout to confirm behavior with current firmware
- When in doubt verify compatibility details against the device vendor resources

## Why Protocol Understanding Matters

Knowing how the G3S communicates helps ensure a smooth setup and reliable operation with Plaspy. A clear grasp of the reporting endpoint, transport, and how the device presents identification makes it easier to diagnose connectivity issues and confirm that tracking data flows correctly.

- Helps confirm that the device is pointing to d.plaspy.com or 54.85.159.138 and using port 8888
- Enables quicker troubleshooting when a device is not appearing in Plaspy
- Informs decisions about choosing UDP or TCP based on network environment and device behavior
- Prevents misconfiguration that can block device reports before they reach Plaspy
- Supports lifecycle tasks such as firmware updates and staged deployments with predictable outcomes

## Why Use Plaspy with This Protocol

Using the Gosafe G3S with Plaspy provides a straightforward way to convert device reports into location tracking, event monitoring, and operational insights. For service providers and enterprise fleets the combination of a compact G3S tracker and Plaspy visibility helps improve dispatch efficiency, asset recovery, and ongoing fleet management.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information with the manufacturer at https://gosafesystem.com/
