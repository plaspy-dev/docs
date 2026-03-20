---
slug: /careu/ez2/protocol
id: ez2-protocol
sidebar_label: Protocol
title: CAREU - EZ2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CAREU EZ2 GPS tracker and how it communicates with Plaspy for fleet telemetry and tracking
keywords:
  - CAREU EZ2 protocol
  - CAREU EZ2 GPS protocol
  - CAREU EZ2 Plaspy compatibility
  - CAREU EZ2 communication protocol
  - CAREU EZ2 tracking protocol
  - CAREU tracker protocol
  - vehicle tracker protocol Plaspy
  - fleet tracking EZ2
  - CAN OBD II telemetry EZ2
  - Plaspy device protocol
---

# CAREU - EZ2 Protocol

This page describes the public protocol context for using the CAREU EZ2 GPS tracker with Plaspy. It focuses on how the device communicates at a high level, what role the tracker reporting protocol plays in delivering GPS and vehicle telemetry into Plaspy, and practical notes to help with configuration and validation. Technical details are presented in broad, non-sensitive terms to support integration planning and troubleshooting.

The CAREU EZ2 is a compact 4G LTE tracker with 2G fallback and U1Lite+ CAN/OBD II telemetry that streams location and vehicle diagnostics into Plaspy. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol. Public Plaspy connection endpoints include d.plaspy.com and IP 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888, and exact behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the CAREU EZ2 defines how the tracker packages and transmits position fixes, CAN/OBD II telemetry, and event data to a backend server such as Plaspy. At a high level the protocol ensures the device can identify itself, deliver time stamped telemetry, and signal vehicle events so Plaspy can render live location, diagnostics, and alerts for fleet operations.

- Enables transmission of GPS position and CAN/OBD II telemetry from the EZ2 to the server for real time tracking and historical reports.
- Carries device identification and session information so Plaspy can associate incoming messages with the correct asset record.
- Encodes status and event information such as ignition state, geofence crossings, and accessory inputs for event driven workflows.
- Supports periodic reporting and event driven messages so devices can balance reporting frequency with cellular usage.
- Allows remote configuration and firmware update workflows to be coordinated by the management platform.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and port and automatically detects the tracker protocol used by incoming devices. When an EZ2 is pointed at the Plaspy endpoint and sends its first reports, Plaspy's network services match the traffic to a supported device session so manual protocol selection in the user interface is typically unnecessary.

- Plaspy accepts connections at d.plaspy.com and 54.85.159.138 on port 8888 for device reporting.
- All devices reporting to Plaspy use the same port, simplifying device configuration across different tracker models.
- Plaspy supports both UDP and TCP transport for incoming device messages when the device is configured accordingly.
- If an EZ2 is configured to report to the Plaspy endpoint, users normally do not need to select a protocol inside Plaspy.
- Proper device identification and stable network connectivity help Plaspy associate incoming telemetry with the correct device record.

## Transport and Connection Context

Connection choices affect how the EZ2 sends packets to Plaspy but do not change the high level purpose of the tracker protocol. The EZ2 can operate over cellular networks and may be configured to use either UDP or TCP depending on device settings and regional carrier behavior. Pointing the device to Plaspy uses the same public connection settings for all supported devices.

- Devices may be configured to report to d.plaspy.com or directly to IP 54.85.159.138.
- Plaspy listens for device traffic on port 8888 and this port is used across supported devices.
- The EZ2 can use UDP or TCP on port 8888 depending on device configuration and firmware support.
- Selecting UDP or TCP is generally a device side configuration; choose the transport that best matches carrier stability and device firmware recommendations.
- Ensure APN and cellular configuration on the EZ2 are correct so the device can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware variations can change available telemetry fields, reporting frequency options, and event definitions between device revisions.
- Hardware revisions and regional module variants may alter supported cellular bands and fallback behavior, affecting connectivity but not the high level protocol purpose.
- Manufacturer configuration interfaces may expose choices for UDP versus TCP transport; confirm the chosen transport matches Plaspy endpoint expectations.
- Remote configuration and FOTA updates can modify protocol behavior over time; validate any changes after updates are applied.
- Always test device reporting to Plaspy in a controlled environment before wide deployment to confirm expected telemetry and events are delivered.
- Cross check device settings and Plaspy device records to ensure correct device identification and data mapping.

## Why Protocol Understanding Matters

Understanding the EZ2 communication protocol helps fleet managers and integrators set up devices correctly, diagnose connectivity and data mapping issues, and maintain reliable telemetry over the life of the deployment. Knowing how the tracker reports data and what can vary between firmware builds reduces time spent troubleshooting and ensures operational workflows perform as expected.

- Helps verify that GPS and CAN/OBD II telemetry fields required by Plaspy are being reported by the device.
- Informs decisions about UDP versus TCP based on carrier performance and message reliability needs.
- Aids troubleshooting when devices fail to appear in Plaspy or when telemetry is incomplete.
- Supports planning for firmware updates, remote configuration, and lifecycle management of deployed units.
- Clarifies expectations around event timing, data retention, and how Plaspy will render device state and alerts.

## Why Use Plaspy with This Protocol

Using the CAREU EZ2 with Plaspy provides a practical path to consolidate real time location, fuel and engine diagnostics, and event driven controls such as immobilization into a single operational interface. For logistics and fleet teams the combination of EZ2 telemetry and Plaspy dashboards can improve visibility, simplify compliance reporting, and enable faster incident response.

To learn more about Plaspy and how it integrates with vehicle trackers like the CAREU EZ2, visit https://www.plaspy.com. Protocol support and device behavior can change as manufacturers release new firmware or hardware revisions, so verify the latest device specific protocol and implementation details on the manufacturer site https://www.systech-iot.com/.
