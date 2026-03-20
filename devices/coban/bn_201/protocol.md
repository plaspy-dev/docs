---
slug: /coban/bn_201/protocol
id: bn_201-protocol
sidebar_label: Protocol
title: Coban - BN-201 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Coban BN-201 tracker and how it communicates with Plaspy for real time pet tracking
keywords:
  - Coban BN-201 protocol
  - Coban BN-201 GPS protocol
  - Coban BN-201 tracking protocol
  - Coban pet tracker protocol
  - BN-201 Plaspy compatibility
  - Plaspy tracker protocol
  - GPS tracker communication
  - NB-IoT 2G tracker compatibility
  - pet GPS tracker integration
  - device reporting to Plaspy
---

# Coban - BN-201 Protocol

This page describes the public protocol context for integrating the Coban BN-201 pet tracker with Plaspy. It focuses on how the device communicates with a Plaspy server, what role that communication plays in real time location, geofence, and voice monitoring features, and what to consider when configuring the tracker for reliable operation. The details here are high level and intended to help with setup, troubleshooting, and platform compatibility checks.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact on-device behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes general transport and compatibility considerations rather than device internals.

## Protocol Overview

The BN-201 uses standard network and text messaging channels to report location, status, and event updates to a server. In the context of Plaspy, the device protocol defines how the tracker identifies itself, sends GNSS coordinates, reports alarms and geofence events, and exposes features such as remote voice monitoring.

- Translates GNSS fixes and device status into messages the server can interpret for map display and history.
- Delivers event notifications such as geofence entry/exit, low battery, or SOS to Plaspy for alerting.
- Carries auxiliary commands and responses that enable features like remote voice broadcast and listening.
- Supports multiple transport options (IP based and SMS) so the device can remain reachable under different network conditions.
- Provides the essential information Plaspy needs to present location, telemetry, and alerts without exposing firmware or binary internals.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many common tracker devices and to recognize the reporting format automatically when a device is pointed at the Plaspy endpoint. For most deployments the user does not need to select a protocol inside Plaspy as long as the tracker is configured to send data to the platform.

- Plaspy listens on a shared server endpoint so devices can report using a consistent destination.
- When a BN-201 is configured to report to the Plaspy endpoint, the platform inspects incoming messages and associates the device with the correct handling logic.
- Users generally only need to set the tracker reporting address and transport on the device; Plaspy handles protocol detection automatically.
- This automatic detection simplifies onboarding for devices like the BN-201 that support standard TCP, UDP, or SMS reporting.
- If a device is using SMS for configuration or fallback reporting, Plaspy processes SMS-originated data according to the published device reporting behavior.

## Transport and Connection Context

Connection choices affect battery use, reliability, and how quickly location updates arrive. The BN-201 supports common IP transports and SMS, and it can be configured to send reports to Plaspy using either UDP or TCP on the same port Plaspy uses for all supported devices.

- Devices may be configured to use UDP or TCP on port 8888 to report directly to Plaspy.
- Plaspy’s public server domain for device reports is d.plaspy.com and the associated IP address is 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and firewall rules.
- UDP is often used for periodic uplinks where minimal overhead is desired; TCP is available where a connection oriented transport is preferred.
- NB-IoT and 2G network connectivity on the BN-201 influence how often and reliably IP reports are delivered; SMS can be used as an alternate channel for configuration or fallback reporting.

## Protocol Compatibility Notes

- Firmware revisions can change how the BN-201 formats messages or supports certain features; always note firmware version when validating behavior.
- Hardware revisions or regional variants may alter supported bands, network fallbacks, or available commands.
- Choosing between NB-IoT and 2G will affect data cost, latency, and battery life; confirm which network the tracker will primarily use.
- SMS configuration and fallback behavior can differ by carrier and device firmware; test SMS flows during setup.
- The BN-201 supports TCP, UDP, and SMS reporting channels; ensure the device is pointed at the Plaspy endpoint using the required transport for your deployment.
- Validate any advanced features such as voice monitoring or geofence command support against the latest manufacturer documentation.

## Why Protocol Understanding Matters

Understanding the tracker’s communication protocol helps ensure reliable reporting, accurate location histories, and predictable alerting behavior when the BN-201 is used with Plaspy. Awareness of the reporting channel and configuration options speeds troubleshooting and supports optimal battery and network usage.

- Ensures the device is correctly pointed at the Plaspy endpoint so messages arrive without being dropped.
- Helps determine whether UDP or TCP is better suited for your update frequency and network conditions.
- Aids in diagnosing missing positions, delayed alerts, or telemetry gaps by correlating network behavior with expected message flows.
- Improves battery life planning by aligning reporting intervals and transport selection with NB-IoT or 2G characteristics.
- Clarifies how voice monitoring and remote broadcast features are triggered and reported so they behave as expected in Plaspy.

## Why Use Plaspy with This Protocol

Using the Coban BN-201 with Plaspy provides a practical solution for pet tracking and monitoring where compact hardware, long standby, and simple integration matter. Plaspy ingests the BN-201’s standard TCP, UDP, and SMS reports and presents live location, geofence alerts, history playback, and voice monitoring options in a unified platform, making it suitable for owners, pet services, and small fleets of companion-animal trackers.

Plaspy is built to simplify device onboarding by using a shared endpoint and a single port for all supported trackers while automatically detecting the reporting protocol. To learn more about Plaspy and how it supports devices like the BN-201 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify the manufacturer information at https://www.coban.net/.
