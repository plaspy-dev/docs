---
slug: /topten/mt05/protocol
id: mt05-protocol
sidebar_label: Protocol
title: TopTen - MT05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for TopTen MT05 GPS tracker compatibility with Plaspy tracking platform
keywords:
  - TopTen MT05 protocol
  - TopTen MT05 GPS
  - MT05 tracking protocol
  - MT05 Plaspy compatibility
  - MT05 communication protocol
  - TopTen GPS tracker protocol
  - vehicle tracking MT05
  - GPS tracker integration Plaspy
  - fleet tracking TopTen MT05
  - MT05 telemetry protocol
---

# TopTen - MT05 Protocol

This page covers the public protocol context for using the TopTen MT05 mini GPS tracker with the Plaspy platform. It explains, at a high level, how the MT05 communicates location and status data to Plaspy and what role the device reporting protocol plays in making that data usable for tracking, alarms, and vehicle monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an MT05 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the practical details of message timing and feature support may differ between individual devices.

## Protocol Overview

The MT05 tracking protocol is the device's method of packaging and sending telemetry such as GPS position, engine state, alarms, and odometer information to a remote server. For integration with Plaspy, the important public context is how the tracker reports useful location and status fields and how those fields are mapped to monitoring and alerting features in the platform.

- Transmits core telemetry used by Plaspy for mapping and status displays including position and movement indicators.
- Sends alarm and status events that Plaspy can surface as notifications such as overspeed, movement, or power loss.
- Reports engine on/off and other digital inputs that Plaspy can interpret for vehicle state and remote controls.
- Provides odometer and movement data that Plaspy can use for distance reporting and trip history.
- Allows configuration of reporting mode and transport so devices can point at the Plaspy endpoint for live reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and uses the content and connection behavior to identify the device protocol automatically. In most cases, a user does not need to choose a protocol inside Plaspy if the MT05 is configured to report to the Plaspy address.

- Plaspy server domain for devices is d.plaspy.com and the known server IP is 54.85.159.138.
- Plaspy listens on port 8888 for device reports and all devices supported by Plaspy use the same port.
- Devices can be configured to use either UDP or TCP to reach Plaspy depending on device capabilities.
- When an MT05 reports to the Plaspy endpoint, the platform will detect and parse supported message types for display and alerts.
- Proper device configuration to point to the Plaspy endpoint is typically all that is required for automatic protocol detection.

## Transport and Connection Context

Connection choices on the MT05 affect how the device delivers data to Plaspy but do not change the high level purpose of the protocol. The MT05 may be set up to send reports over either UDP or TCP to the Plaspy endpoint and port, allowing flexible deployment in diverse network environments.

- The MT05 may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- Devices can be pointed at d.plaspy.com or the IP address 54.85.159.138 as the server destination.
- Plaspy accepts device reports on port 8888 for all supported trackers, which simplifies device setup.
- Network conditions, firewalls, or carrier NAT may require choosing TCP or UDP based on reliability and latency considerations.
- Ensure the tracker is configured to use the Plaspy endpoint so automatic detection and parsing can occur.

## Protocol Compatibility Notes

- The MT05 is compatible with Plaspy when configured to report to the Plaspy endpoint, but behavior can vary by firmware revision.
- Hardware revisions or optional features on a specific MT05 build can affect which events and fields are reported.
- Transport selection (UDP vs TCP) is device configurable and can influence reliability in specific network environments.
- Manufacturer configuration defaults might need adjustment to point the device to d.plaspy.com or 54.85.159.138 on port 8888.
- Always validate feature mapping like alarms, engine cutoff, and odometer reporting against the device you have on hand.
- When in doubt, consult the manufacturer documentation for firmware specific notes that affect protocol behavior.

## Why Protocol Understanding Matters

Understanding the MT05 communication protocol helps ensure a smooth setup, predictable behavior in production, and faster troubleshooting when things go wrong. Having a clear view of what the tracker reports and how Plaspy receives it improves configuration, monitoring, and long term reliability.

- Helps confirm the device is pointing to the correct Plaspy endpoint and port for automatic detection.
- Enables targeted troubleshooting when expected events such as alarms or engine state are not appearing in Plaspy.
- Guides decisions about using UDP or TCP to balance latency and reliability for your deployment.
- Clarifies which telemetry fields the platform can expect from the device for reporting and alerts.
- Reduces time to operational readiness by aligning device settings with Plaspy requirements.

## Why Use Plaspy with This Protocol

Using the TopTen MT05 with Plaspy gives organizations a straightforward way to turn the device's GPS, alarm, and engine status telemetry into actionable tracking, notifications, and historical reports. Plaspy's automatic protocol detection and single port endpoint reduce setup complexity so fleets and vehicle owners can focus on operational use rather than low level integration.

If you want to learn more about Plaspy features and supported integrations, visit https://www.plaspy.com. For the latest device specific protocol notes, firmware behaviors, and manufacturer documentation for the MT05, please verify details with the official TopTen site http://www.t10.cn as implementations and firmware can change over time.
