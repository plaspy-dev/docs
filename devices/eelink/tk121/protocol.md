---
slug: /eelink/tk121/protocol
id: tk121-protocol
sidebar_label: Protocol
title: EElink - TK121 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for EElink TK121 GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - EElink TK121 protocol
  - EElink TK121 GPS
  - EElink TK121 communication
  - EElink TK121 MoveLink
  - TK121 Plaspy compatibility
  - TK121 tracking protocol
  - vehicle GPS tracker protocol
  - Plaspy tracker integration
  - GPS tracker connection settings
  - fleet tracking protocol
---

# EElink - TK121 Protocol

This page describes the public protocol context for using the EElink TK121 GPS tracker with Plaspy. It focuses on how the device reports location and event data to Plaspy, the role of the tracker reporting protocol in that exchange, and the practical connection settings used to route telemetry to the Plaspy platform.

The TK121 is reported compatible with MoveLink protocol 1.9 and 2.0 and offers GPS with LBS fallback, AGPS support, and real-time telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware revision, hardware revision, and manufacturer implementation, so device behavior seen in the field may differ between firmware versions and configuration states.

## Protocol Overview

The tracker protocol defines how the TK121 encodes and transmits position, status, and alarm information so that Plaspy can interpret and present the data. At a high level, the protocol enables device identification, periodic and event-driven uplinks, and remote parameter updates when allowed by the device.

- Carries GNSS position reports and cell based fallback location data for display in Plaspy.
- Conveys device state and telematics such as ignition status, battery condition, and alarm events.
- Enables remote parameter updates and configuration when the device and manufacturer firmware allow remote commands.
- Provides a predictable reporting cadence and event triggers so Plaspy can process live position feeds and alerts.
- When available, MoveLink 1.9 and 2.0 compatibility means the device uses the manufacturer defined reporting structure to deliver telemetry to servers like Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a single shared endpoint and automatically determines the tracker protocol used by an incoming device stream. In most cases a properly configured TK121 that reports to the Plaspy endpoint will be recognized without manual protocol selection inside the Plaspy platform.

- Plaspy exposes a single server endpoint that all devices use to report telemetry.
- Plaspy automatically detects the tracker protocol from the incoming device traffic so manual protocol choice is rarely required.
- Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection.
- If multiple protocol versions are supported by the device (for example MoveLink variants), Plaspy will interpret the incoming reports based on the observed format.
- Users should verify device reporting is reaching the Plaspy endpoint if automatic detection does not occur.

## Transport and Connection Context

Connection setup is a networking concern separate from the protocol framing. TK121 devices can be configured to use either UDP or TCP transport depending on device capabilities and configuration, and must be directed to the Plaspy server address and port for proper delivery.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the service listens on port 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and deployment needs.
- All devices in Plaspy use the same port for incoming telemetry.
- Confirm the TK121 is set to point to d.plaspy.com or the server IP and the correct transport type for your network environment.

## Protocol Compatibility Notes

- TK121 ships with support for MoveLink protocol 1.9 and 2.0 as reported by the manufacturer and is compatible with Plaspy when configured to report to the Plaspy endpoint.
- Firmware revisions can change message timing, feature availability, and configuration commands; always confirm the firmware version if behavior differs from expectations.
- Hardware revisions or optional feature sets (for example relay or additional IO) can affect which telemetry fields are present in reports.
- Network transport choice (UDP vs TCP) may affect delivery characteristics such as reliability and latency; choose based on coverage and operational needs.
- Manufacturer parameter settings, SMS configuration, or mobile app commands may be required to point the device to Plaspy and enable remote reporting.
- Validate compatibility against official EElink documentation when precise behavior is required for a production deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the TK121 helps streamline initial setup, improves troubleshooting when telemetry is missing, and supports long term operational reliability when devices are updated or replaced.

- Ensures device configuration is pointed at the correct Plaspy endpoint and transport so data reaches the platform.
- Helps diagnose whether missing data is caused by network, transport, configuration, or device firmware issues.
- Guides decisions about transport selection and network allowances for reliable telemetry delivery.
- Clarifies what events and telemetry the device can send to Plaspy so platform features and alerts can be configured appropriately.
- Aids planning for firmware updates or hardware swaps by highlighting which fields and features are protocol dependent.

## Why Use Plaspy with This Protocol

Using the TK121 with Plaspy gives organizations a consistent way to centralize location, ignition state, and alarm telemetry for operational visibility, incident response, and fleet management workflows. Plaspy ingests the TK121 reporting stream and presents live positions, alarms, and status data so teams can monitor assets and respond to events from a single platform.

If you want to learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer configuration instructions, verify current information at the EElink official site https://www.eelink.com.cn/. Protocol support and firmware behavior can change over time, so always confirm device implementation with the manufacturer before relying on specific firmware behavior in production.
