---
slug: /eelink/tk119/protocol
id: tk119-protocol
sidebar_label: Protocol
title: EElink - TK119 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EElink TK119 compatibility with Plaspy tracking platform
keywords:
  - EElink TK119 protocol
  - EElink TK119 GPS protocol
  - EElink TK119 communication protocol
  - TK119 tracking protocol
  - EElink tracker Plaspy compatibility
  - MoveLink EELINK protocol
  - vehicle GPS tracker protocol
  - fleet management tracker protocol
  - GPS tracker Plaspy integration
  - TK119 telemetry protocol
---

# EElink - TK119 Protocol

This page describes the public protocol context for using the EElink TK119 tracker with the Plaspy fleet management platform. It focuses on how the tracker communicates in general terms, the role of its MoveLink EELINK reporting behavior, and how Plaspy receives location, telemetry, and alarm events without exposing vendor private internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides practical context for integration while encouraging verification against EElink documentation.

## Protocol Overview

The TK119 uses a standard tracker reporting approach to send GNSS position, status, and alarm events to backend platforms such as Plaspy. The device-level protocol governs how the tracker identifies itself, reports periodic and event-driven data, and supports command and control flows when remote actions are allowed.

- Enables delivery of location updates and telemetry from the tracker to the Plaspy backend for real time tracking and history.
- Identifies the device to the platform so Plaspy can associate reports to the correct vehicle and account.
- Transmits event signals such as ACC changes, geofence breaches, crash or vibration alerts, and low battery notifications.
- Supports remote control primitives at the device level such as relay activation when permitted by the tracker and operator policies.
- Works with cellular transport to bridge GNSS data and device events to the Plaspy server for processing and visualization.

## How Plaspy Detects the Protocol

Plaspy receives incoming tracker connections on a shared server endpoint and automatically determines the appropriate protocol based on the data the device sends. In most cases, properly configuring the device to point at the Plaspy endpoint is sufficient and there is no need to manually select a protocol inside Plaspy.

- Plaspy listens for device reports at the public endpoint d.plaspy.com and also accepts connections to 54.85.159.138 to reach the same backend.
- Plaspy uses port 8888 as the common listening port for all supported devices so device configuration can be standardized.
- Devices configured to send data to the Plaspy endpoint will be identified automatically by the platform and associated with the correct account when reporting credentials match.
- Users typically do not need to pick a protocol manually in Plaspy if the tracker is configured to report to the Plaspy server.
- If a device does not appear online, checking server endpoint, transport selection, and firmware configuration are practical first steps.

## Transport and Connection Context

Connection and transport selection determine how the TK119 sends its reports to Plaspy. The device can be set to use either primary transport modes depending on its configuration and network environment. These details are connection level and do not require exposing packet fields.

- The TK119 may be configured to use UDP or TCP on port 8888 depending on device support and installer preference.
- Devices can point to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 to deliver reports.
- Plaspy uses the same port for all devices which simplifies device configuration and diagnostic checks.
- Choice of UDP versus TCP can affect delivery characteristics under poor cellular coverage but does not change the high level protocol semantics seen by Plaspy.
- Ensure the tracker APN and outgoing data permissions are correct for reliable delivery to the Plaspy endpoint.

## Protocol Compatibility Notes

- TK119 is compatible with Plaspy when configured to report to the Plaspy endpoint using the device reporting mode supported by the unit.
- Protocol behavior can differ between firmware revisions; verify the tracker firmware if you encounter unexpected reporting or missing fields.
- Hardware revisions and optional accessories such as relays or external sensors can change available telemetry and event types.
- Transport selection UDP versus TCP should match the tracker configuration and any server-side expectations for reliability.
- Network conditions, APN settings, and SIM restrictions can affect visibility even when protocol settings are correct.
- Always cross reference EElink documentation for model and firmware specific instructions before wide deployment.

## Why Protocol Understanding Matters

Knowing how the TK119 communicates with Plaspy helps ensure a smooth setup, reliable reporting, and quicker troubleshooting when events or telemetry do not arrive as expected. A practical understanding reduces integration time and supports operational continuity.

- Speeds initial setup by ensuring the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 as required by Plaspy.
- Helps diagnose connectivity issues by separating transport problems from protocol or firmware issues.
- Informs decisions about UDP versus TCP depending on coverage and delivery needs.
- Supports predictable handling of alarms and relay control by understanding what events the tracker reports.
- Makes firmware upgrade planning safer because you can validate behavior changes against known protocol expectations.

## Why Use Plaspy with This Protocol

Using the TK119 with Plaspy provides a practical path to real time visibility, alarm handling, and operational reporting for fleets and vehicle assets. Plaspy ingests position and event data sent by the TK119, turning raw reports into map views, alerts, and historical routes that support daily operations and incident response.

To learn more about Plaspy and how the platform integrates with devices such as the EElink TK119, visit https://www.plaspy.com. For the most current device specific protocol guidance, firmware notes, and implementation details consult the EElink manufacturer site at https://www.eelink.com.cn/ as protocol support and firmware behavior can change over time.
