---
slug: /cantrack/gf20/protocol
id: gf20-protocol
sidebar_label: Protocol
title: CanTrack - GF20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the CanTrack GF20 and how it communicates with Plaspy for tracking and alerts
keywords:
  - CanTrack GF20
  - GF20 protocol
  - CanTrack GPS tracker protocol
  - GF20 Plaspy compatibility
  - CanTrack GF20 communication
  - GF20 tracking protocol
  - CanTrack GF20 GPS protocol
  - GF20 geo fence
  - CanTrack voice listen feature
  - GF20 battery alarm
---

# CanTrack - GF20 Protocol

This page covers the public protocol context for using the CanTrack GF20 mini magnet GPS tracker with Plaspy. It explains how the device communicates in general terms, what role the tracker reporting protocol plays when sending location and event data to Plaspy, and which connection settings are used for integration without exposing private implementation details.

The GF20 is a compact device supporting real GPS, LBS, and AGPS position reporting, optional voice remote listen, geo fences, low battery and vibration alarms, multiple working modes, and onboard memory for storing data when GSM is unavailable. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the GF20 defines how the tracker reports position, alarms, and auxiliary events to a remote server so the platform can interpret those messages as usable telemetry. In practice this means the device regularly transmits location updates and special event notifications so Plaspy can display status, movement, and alerts in the platform.

- Carries core telemetry such as GPS or LBS based location fixes and timestamps for Plaspy to map.
- Encodes device state and event types like geo fence breach, low battery, vibration, and remote voice listen requests.
- Provides identification data so Plaspy can associate received messages with the correct GF20 unit and customer account.
- Supports temporary data buffering on the device when cellular connectivity is lost so no history is lost.
- Works over common transport channels so the tracker can send data to Plaspy endpoints for automated processing.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a single shared endpoint and uses built in detection to identify the incoming tracker protocol automatically. Because Plaspy automatically detects the tracker protocol, end users normally do not need to select a protocol manually in the platform when the device is configured to report to Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies device configuration across different models.
- If the GF20 is pointed to the Plaspy endpoint and the device is functioning, Plaspy will detect and process its protocol automatically.
- Proper device identity and reporting intervals help Plaspy match messages to devices for reliable tracking.

## Transport and Connection Context

Connection context refers to how the GF20 reaches the Plaspy platform rather than the internal message structure used once connected. The GF20 may use either UDP or TCP depending on its firmware and configuration, and it can be pointed to Plaspy by domain name or by IP address.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Using the shared port 8888 across devices reduces configuration complexity when deploying multiple tracker types.
- Network considerations such as NAT, carrier blocking, or unstable cellular links can affect transport reliability and should be considered during setup.
- Confirm the GF20 is registered or identified correctly in Plaspy after initial reporting to ensure data flows as expected.

## Protocol Compatibility Notes

- Firmware revisions can change how and which messages the GF20 sends, so behavior may vary between devices running different firmware.
- Hardware revisions or optional features such as voice listen may affect available events and required configuration.
- Some configuration options on the GF20 can switch transport mode between UDP and TCP; verify the device is set to the transport that matches your network needs.
- Manufacturer supplied SMS or app commands may be used to point the device at the Plaspy endpoint; consult manufacturer instructions for command syntax.
- When using geo fences or low battery alerts, validate that those event types are enabled and tested with the current firmware.
- Always validate compatibility and behavior against the most recent official documentation from CanTrack.

## Why Protocol Understanding Matters

A practical understanding of the GF20 communication protocol helps ensure devices are configured correctly, that Plaspy receives meaningful telemetry, and that event notifications behave as expected during real operations.

- Enables accurate setup so the device reports to d.plaspy.com or 54.85.159.138 on the correct port.
- Helps diagnose connectivity issues related to transport selection, cellular network, or endpoint configuration.
- Guides testing for event types such as geo fence alerts, low battery warnings, vibration alarms, and voice listen behavior.
- Aids in planning for device data retention and expected reporting intervals when GSM connectivity is intermittent.
- Reduces integration time by aligning device configuration with Plaspy expectations and automatic detection.

## Why Use Plaspy with This Protocol

Using the CanTrack GF20 with Plaspy gives organizations a straightforward way to collect discreet short term tracking and event data from compact magnet trackers. The GF20’s mix of GPS, LBS, AGPS, and onboard memory makes it well suited for temporary asset monitoring where persistent visibility and event alerts are important.

To learn more about Plaspy and how it processes tracker data visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration commands consult the manufacturer at https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
