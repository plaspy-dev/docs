---
slug: /minifinder/nano/protocol
id: nano-protocol
sidebar_label: Protocol
title: MiniFinder - Nano Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for MiniFinder Nano integration with Plaspy including connection settings and compatibility guidance
keywords:
  - MiniFinder Nano protocol
  - MiniFinder Nano GPS protocol
  - MiniFinder Nano protocol Plaspy
  - MiniFinder Nano communication protocol
  - MiniFinder Nano tracking protocol
  - MiniFinder Nano compatibility
  - MiniFinder Nano integration Plaspy
  - MiniFinder wearable GPS protocol
  - personal safety tracker protocol
  - Plaspy device protocol
---

# MiniFinder - Nano Protocol

This page describes the public protocol context for using the MiniFinder Nano tracker with Plaspy. It focuses on the communication and connection considerations required to deliver location, alarm, and sensor telemetry from the wearable Nano device into the Plaspy platform while avoiding vendor private details. Use this document as a practical reference for integration planning and troubleshooting alongside manufacturer materials.

Plaspy uses shared connection settings for all supported trackers and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the Nano can vary by firmware version, hardware revision, and manufacturer implementation, so final confirmation of protocol behavior should be done against MiniFinder documentation and device firmware release notes.

## Protocol Overview

The tracker reporting protocol is the set of rules the Nano uses to package and send GPS, sensor and alarm data to a backend server. In the context of Plaspy, the protocol's role is to ensure that the device can identify itself, transmit position and event data reliably, and allow Plaspy to present that information to operators and rules engines.

- Enables transmission of positional fixes and temporal metadata so Plaspy can display live location and history.
- Carries alarm and status events such as SOS presses, fall detection flags, and battery or connectivity states.
- Provides device identification and session context so Plaspy can associate incoming data with the correct asset or user profile.
- Supports transport over standard network protocols so the device can reach Plaspy through mobile networks or Wi‑Fi.
- Allows Plaspy to ingest telemetry for alerting, routing, and reporting without requiring users to manually map every field.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and uses automatic detection to classify incoming messages. In most deployments users do not need to pick a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint and network connectivity is correct.

- Plaspy listens for device traffic on d.plaspy.com and the public server address 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies device configuration and server routing.
- Plaspy automatically detects the tracker protocol when it receives properly formed telemetry from a device.
- Proper device configuration points the Nano to the Plaspy endpoint so automatic detection and association can occur.
- If a device fails to appear, check network reachability, transport settings, and that the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection and transport details determine how the Nano reaches Plaspy and are the most common source of setup issues. The MiniFinder Nano may be configured to use either UDP or TCP transport depending on the device configuration and carrier behavior. Ensure the device is pointed to the correct Plaspy endpoint and transport so data flows reliably.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy server port for all devices is 8888 and the Nano can be set to use UDP or TCP on that port.
- Plaspy uses the same port for every supported device to streamline setup and reduce configuration errors.
- Network firewalls and carrier APN settings must allow outbound UDP or TCP traffic to the Plaspy endpoint on port 8888.
- When testing, verify DNS resolution for d.plaspy.com as well as basic connectivity to the numeric server address.

## Protocol Compatibility Notes

- Firmware revisions can change the specific fields, event naming, or timing used by the Nano; always confirm behavior after firmware updates.
- Hardware revisions or regional variants of a wearable device may have small differences in how sensors or alarms are reported.
- Choice of transport (UDP versus TCP) can affect delivery semantics and may be constrained by network conditions or carrier policies.
- Plaspy’s automatic protocol detection reduces manual configuration, but device-side reporting settings must point to the Plaspy endpoint and port.
- Manufacturer cloud features and MiniFinder Live may provide additional data storage or configuration tooling that complements Plaspy integration.
- Validate any integration assumptions against MiniFinder official documentation for the specific Nano firmware and hardware revision.

## Why Protocol Understanding Matters

Understanding the communication protocol for the MiniFinder Nano helps with correct initial setup, reduces time to resolution for connectivity issues, and supports predictable behavior during firmware or network changes.

- Ensures devices are configured to report to d.plaspy.com or 54.85.159.138 using port 8888 as required by Plaspy.
- Helps troubleshoot transport level problems such as blocked ports, DNS resolution, or carrier restrictions.
- Clarifies how alarms, SOS events, and telemetry are delivered so Plaspy rules and notifications behave as expected.
- Guides decisions about whether to use UDP or TCP based on network reliability and carrier behavior.
- Reduces unexpected behavior after firmware updates by prompting validation of any protocol changes.

## Why Use Plaspy with This Protocol

Using the MiniFinder Nano with Plaspy gives organizations unified visibility into personal safety events and location telemetry alongside other tracked assets. Nano's wearable form factor, hybrid positioning and alarm capabilities make it suitable for eldercare, lone worker protection, and other people focused safety workflows where timely alerts and clear audit trails matter. Plaspy aggregates telemetry and events to support notifications, escalation rules, and historical reporting for compliance and operational review.

To learn more about Plaspy and how it integrates with wearable trackers like the MiniFinder Nano visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and manufacturer guidance, verify specifics on the MiniFinder website https://minifinder.se/ since firmware behavior and implementation details can change over time.
