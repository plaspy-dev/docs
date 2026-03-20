---
slug: /tk_star/tk920/protocol
id: tk920-protocol
sidebar_label: Protocol
title: TK-Star - TK920 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the TK920 GPS tracker with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - TK-Star TK920 protocol
  - TK-Star TK920 GPS protocol
  - TK920 tracker protocol
  - TK920 communication protocol
  - TK920 tracking protocol
  - TK-Star GPS tracker compatibility
  - TK920 Plaspy compatibility
  - Plaspy GPS tracker support
  - vehicle tracking TK920
  - asset tracking TK920
---

# TK-Star - TK920 Protocol

This page describes the public protocol context for using the TK-Star TK920 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms, how the shared Plaspy connection settings are used, and what to consider when integrating the TK920 for real time tracking and alerting. The TK920 is a rugged 4G tracker built for long term vehicle and asset monitoring with multi constellation positioning and long battery life, and this document explains the communication context rather than low level firmware internals.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a unit is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so while Plaspy handles protocol detection and ingestion, some device specific behavior will depend on the TK920 firmware and settings provided by TK Star.

## Protocol Overview

The communication protocol defines how the TK920 reports its identity, location, and event data to Plaspy and how server acknowledgements and control messages are exchanged at a high level. This page keeps descriptions general and public facing, emphasizing the role of the protocol in delivering reliable telemetry and alerts to Plaspy without exposing device internals.

- Enables periodic and event driven location updates from the TK920 to the Plaspy platform so position and status appear in dashboards.
- Conveys alarm and sensor events such as vibration, geo fence, movement, and overspeed to Plaspy for notification and rule processing.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct asset or vehicle record.
- Supports transport over standard network sockets so the tracker can use cellular connectivity to reach Plaspy servers.
- Provides a predictable stream of telemetry that Plaspy consumes and stores for live monitoring and historical route review.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and telemetry on a single shared endpoint and port and performs automatic protocol identification so most users do not need to select a specific protocol inside Plaspy. Properly configured devices that point at the Plaspy endpoint will typically be recognized and ingested without manual protocol selection.

- Plaspy server domain for tracker reporting is d.plaspy.com which resolves to the platform endpoint.
- Plaspy server IP is 54.85.159.138 which can be used in device configuration where DNS is unavailable.
- Plaspy listens on port 8888 for tracker connections and uses the same port across all supported devices.
- The tracker may be configured to use either UDP or TCP targeting port 8888 depending on device capability and network conditions.
- Automatic detection reduces setup steps for users but device side reporting must be configured to point to the Plaspy endpoint for detection to succeed.

## Transport and Connection Context

Transport and connection choices determine how the TK920 sends its telemetry to Plaspy. This section clarifies the supported connection contexts and practical considerations for pointing a device at Plaspy for reliable delivery.

- The TK920 can be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on site preferences or DNS availability.
- Devices may use UDP or TCP on port 8888 to send telemetry and event messages to Plaspy.
- Plaspy uses the same port for all devices, simplifying server-side configuration and firewall rules.
- Choice of UDP versus TCP can affect delivery guarantees and network behavior; select the transport supported by the device and network.
- Ensure mobile data APN and cellular connectivity are functioning so the tracker can reach the Plaspy endpoint over the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions can alter message timing, supported reports, or available alarms; check the device firmware level when validating behavior.
- Hardware revisions and regional SKU differences occasionally change supported connectivity options or sensor behavior.
- Manufacturer configuration instructions and default server settings vary by production batch and vendor firmware customization.
- Choosing UDP or TCP on the device may be required to match the device firmware capability and network characteristics.
- Always validate a sample device by pointing it at d.plaspy.com or 54.85.159.138 on port 8888 and confirming Plaspy detects and ingests the data.
- When combining the TK920 with other telemetry sources, verify how additional inputs are reported to Plaspy to avoid conflicts.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, predictable behavior in production, and efficient troubleshooting if telemetry does not appear as expected. Knowledge of connection context and common variations can reduce integration time and minimize downtime.

- Helps confirm device configuration such as server address and transport so data reaches Plaspy reliably.
- Makes it easier to interpret device behavior differences that stem from firmware or hardware revisions.
- Aids in troubleshooting connectivity issues by clarifying whether a network, transport, or device setting is the root cause.
- Supports planning for large deployments by standardizing device configuration to use the Plaspy endpoint and port.
- Improves confidence when validating alarms and event delivery during acceptance testing.

## Why Use Plaspy with This Protocol

Using the TK920 with Plaspy provides a practical solution for organizations that need persistent, long battery life tracking combined with durable hardware for field conditions. Plaspy consolidates incoming location, alarm, and status data from the TK920 into dashboards, alerts, and historical route tools that are useful for fleet managers, security teams, and operations staff.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and manufacturer guidance verify details on the official TK Star site at https://www.tk-star.com/ since protocol support and firmware behavior can change over time.
