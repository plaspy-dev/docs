---
slug: /eelink/tk419/protocol
id: tk419-protocol
sidebar_label: Protocol
title: EElink - TK419 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EElink TK419 and how it communicates with Plaspy platforms
keywords:
  - EElink TK419 protocol
  - EElink TK419 GPS protocol
  - EElink TK419 Plaspy compatibility
  - EElink TK419 communication protocol
  - EElink TK419 tracking protocol
  - EElink vehicle tracker protocol
  - TK419 fleet tracking
  - TK419 GPS tracker Plaspy
  - EELINK protocol integration
  - vehicle telematics protocol
---

# EElink - TK419 Protocol

This page describes the public protocol context for using the EElink TK419 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, how that communication is used for live location and alerts, and what practitioners should consider when integrating TK419 units into a Plaspy deployment. The TK419 is a compact 4G tracker designed for fleet and asset security and reports GNSS positions and telemetry to compatible platforms using the manufacturer protocol.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, but exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation. Verify device specific details with the manufacturer when needed.

## Protocol Overview

The TK419 communicates position, input states, alarms and basic telemetry to a remote server using EElink's device reporting mechanisms. At a high level the device protocol defines how the tracker identifies itself, reports GNSS fixes and status, and signals alarm or IO events so a platform like Plaspy can convert those messages into map updates, alerts and logs.

- Provides device identity and state so Plaspy can attribute incoming messages to a specific tracker and asset.
- Transports GNSS position and timestamp information to enable live location on Plaspy maps.
- Sends alarm and IO events such as ACC status, crash or vibration alerts, geofence triggers, and backup battery notifications.
- Allows remote configuration options through platform, app or SMS mechanisms exposed by the device and manufacturer.
- Enables relay control and other actuator actions to be initiated from the platform when supported by the device.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and automatically detects the tracker protocol from the device traffic. When a TK419 is pointed to the Plaspy ingestion endpoint, the platform matches incoming messages to known protocol patterns and to registered devices so manual protocol selection is usually not required for a properly configured unit.

- Point the tracker to d.plaspy.com or 54.85.159.138 and use port 8888 so Plaspy can receive reports.
- Devices may use either UDP or TCP on port 8888 depending on device settings and network conditions.
- The initial message from a tracker typically contains a device identifier and status fields that Plaspy uses to associate the source with an asset record.
- If a device is configured correctly and the identifier is reachable, Plaspy automatically detects the tracker protocol and maps subsequent messages.
- In most installations the user does not need to manually select a protocol inside Plaspy when the tracker is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport choices and correct endpoint configuration are central to reliable reporting. TK419 units support cellular data links and can be configured to send their reports to Plaspy over either UDP or TCP. Use the shared Plaspy endpoint and port described above to simplify deployments across many units.

- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen settings.
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct IP configuration.
- The port is 8888 and Plaspy uses the same port for all supported devices to streamline ingestion.
- Choose TCP for persistent connections when the device and network support it, or UDP where low overhead is preferred for short reports.
- Ensure firewall and APN settings allow outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888 from the device SIM.

## Protocol Compatibility Notes

- Firmware versions can add, change or deprecate message fields and reporting behavior; confirm the tracker firmware when diagnosing differences.
- Hardware revisions sometimes alter available IO options or alarm wiring, affecting which telemetry is reported to Plaspy.
- Manufacturer configuration options such as transport choice, reporting interval and alarm thresholds can change the timing and content of reports.
- Device support for remote commands or relay control may depend on regional firmware builds and carrier constraints.
- When integrating at scale, validate a sample device end to end with Plaspy before mass deployment.
- If you rely on SMS based configuration or fallback commands, verify those mechanisms with the current TK419 documentation from the manufacturer.

## Why Protocol Understanding Matters

Understanding the TK419 communication protocol helps ensure a reliable deployment, speeds troubleshooting and makes it easier to align device behavior with operational needs in Plaspy. Knowledge of what the device reports and how it signals events allows teams to configure alerts, rules and dashboards that reflect real-world behavior.

- Reduces time to resolve reporting gaps by clarifying whether an issue is transport, configuration, or firmware related.
- Ensures alarms and IO states map correctly into Plaspy alerts and reports for accurate incident handling.
- Helps choose appropriate transport and reporting intervals for battery life, data usage and timeliness.
- Guides validation steps for new firmware or hardware revisions before wide rollout.
- Improves the reliability of automation that depends on ACC, relay control or other digital inputs.

## Why Use Plaspy with This Protocol

Using TK419 with Plaspy provides a straightforward path from device reports to actionable fleet monitoring and alerting. Plaspy ingests GNSS positions, IO states and alarms to present live maps, event timelines and rules based notifications that operators use for theft prevention, driver monitoring and operational oversight. TK419's compact design, multi GNSS support and optional immobilizer relay make it a practical choice where discreet installation and dependable reporting are required.

To learn more about Plaspy and how it integrates with trackers like the TK419 visit https://www.plaspy.com. For the most current protocol details, firmware notes and device documentation confirm specifics with the manufacturer at https://www.eelink.com.cn/. Protocol support and firmware behavior can change over time so always verify device specific details with the official manufacturer resources.
