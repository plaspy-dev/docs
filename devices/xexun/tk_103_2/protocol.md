---
slug: /xexun/tk_103_2/protocol
id: tk_103_2-protocol
sidebar_label: Protocol
title: Xexun - TK-103-2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating Xexun TK 103 2 with Plaspy for device communication and compatibility
keywords:
  - Xexun TK-103-2 protocol
  - Xexun TK-103-2 GPS protocol
  - Xexun TK-103-2 communication
  - TK-103-2 tracking protocol
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - vehicle tracking protocol Xexun
  - TK-103-2 integration Plaspy
  - tracker reporting protocol
  - fleet tracking Xexun
---

# Xexun - TK-103-2 Protocol

This page explains the public protocol context for using the Xexun TK-103-2 GPS tracker with Plaspy. It focuses on how the tracker communicates with a Plaspy server endpoint and what to consider when integrating this model into a fleet or asset monitoring workflow. The content draws on the device description and general protocol principles without exposing private implementation details.

The Xexun TK-103-2 is a versatile device used for private vehicles, leasing fleets, outdoor equipment anti theft tracking, and corporate vehicle management. Features commonly referenced for this model include real time location queries, scheduled interval tracking, multiple alarm types, historical track playback, geofencing, remote upgrade capability, dual SIM operation, and optional local storage. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol for the TK-103-2 defines how the tracker sends location, status, and alarm information to a remote server and how the server can issue configuration or query commands. For integration with Plaspy, the focus is on ensuring the device can report to the Plaspy endpoint and that the server receives the data required for location, event, and alarm processing.

- Enables the device to report periodic location updates and immediate location inquiries to a remote service.
- Transmits alarm and status events so Plaspy can surface alerts for speed, vibration, power loss, SOS, and other conditions.
- Carries identification and device state information so the platform can associate incoming reports with the correct asset.
- Supports remote configuration and firmware management where the manufacturer and device permit such operations.
- Provides the data elements Plaspy needs for historical playback, geofence evaluation, and fleet monitoring dashboards.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and identifies the tracker protocol based on the device behavior and reported data. Because many trackers share a common reporting pattern, Plaspy is designed to automatically detect the protocol so users do not typically need to select a protocol manually in the platform when a device is correctly configured.

- Plaspy listens on a single shared endpoint and port for all devices to simplify device configuration.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138, using port 8888 as the receiver.
- Plaspy automatically detects the tracker protocol from the incoming device traffic and associates messages with the correct device record.
- When a tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will handle protocol detection and data processing.
- Users typically need only to point the tracker to the Plaspy endpoint and verify network connectivity for automatic protocol recognition.

## Transport and Connection Context

Connection transport and addressing determine how the TK-103-2 reaches the Plaspy endpoint. The general practice is to configure the device to report to the Plaspy server domain or IP and to select the transport mode supported by the device and network.

- The device may be configured using UDP or TCP on port 8888 depending on device support and local network configuration.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 if a fixed IP is preferred.
- All devices in Plaspy use the same port to simplify configuration and firewall rules for fleet deployments.
- Choose UDP for lightweight periodic reporting where supported, or TCP where a reliable session oriented transport is preferred and supported by the device.
- Verify mobile network or SIM operator settings if using dual SIM features to ensure uninterrupted reporting to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported features, and available alarms; always confirm the firmware level on the device.
- Hardware revisions and optional accessories such as external antennas or SD storage can affect behavior and available data fields.
- Manufacturer side settings or regional firmware variants may introduce differences in how certain alarms or remote commands are implemented.
- Transport selection between UDP and TCP can affect delivery behavior and should match device configuration and network constraints.
- Dual SIM devices may switch networks and IP addresses; ensure the device stays configured to report to d.plaspy.com or 54.85.159.138 so Plaspy receives updates consistently.
- Validate compatibility and available features against the official Xexun documentation for model specific and firmware specific details.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable reporting, accurate event handling, and quicker troubleshooting when integrating the TK-103-2 with Plaspy. Awareness of how the tracker communicates with the Plaspy endpoint reduces setup time and improves long term stability.

- Ensures the device is configured to send the right types of reports and alarms to Plaspy for operational monitoring.
- Helps identify why a device might not appear in Plaspy when network, transport, or addressing settings are misaligned.
- Supports decisions about transport mode selection and network firewall rules when deploying at scale.
- Aids in interpreting device behavior differences due to firmware updates or manufacturer configuration changes.
- Improves confidence when validating historical playback, geofence events, and alarm deliveries in the Plaspy interface.

## Why Use Plaspy with This Protocol

Using the Xexun TK-103-2 with Plaspy gives organizations centralized visibility into vehicle and equipment location, alarms, and historical movement. Plaspy’s platform processes incoming reports from compatible trackers, enabling fleet oversight, geofence monitoring, alerting, and playback of historical routes for operational decision making.

If you want to learn more about how Plaspy works with GPS trackers like the TK-103-2, visit https://www.plaspy.com. For the most current device protocol specifics, firmware notes, and manufacturer instructions verify details on the official Xexun website https://www.xexun.com/ since protocol support and firmware behavior can change over time.
