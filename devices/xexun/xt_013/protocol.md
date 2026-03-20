---
slug: /xexun/xt_013/protocol
id: xt_013-protocol
sidebar_label: Protocol
title: Xexun - XT-013 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xexun XT-013 GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - Xexun XT-013 protocol
  - Xexun XT-013 GPS protocol
  - Xexun XT-013 tracking protocol
  - Xexun tracker protocol
  - XT-013 Plaspy compatibility
  - Xexun GPS communication
  - XT-013 device protocol
  - vehicle tracking XT-013
  - asset tracker XT-013
  - Plaspy device integration
---

# Xexun - XT-013 Protocol

This page describes the public protocol context for using the Xexun XT-013 GPS tracker with Plaspy. It focuses on how the device communicates to a fleet server, what to expect in general terms from the tracker reporting behavior, and how that reporting integrates with Plaspy for real time location, movement, geofence, overspeed, and battery alerts.

The XT-013 is a compact waterproof tracker with a built in antenna and battery, and it includes features such as move alerts, geofence events, overspeed notifications, and low battery alerts. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol defines how the XT-013 sends position updates, status events, and alerts to a remote server. In general terms the protocol enables the tracker to identify itself to the server, transmit location and telemetry, and report discrete events that applications can surface as alerts or history.

- Provides identification and periodic reporting so the server can associate messages with a device
- Transmits location coordinates and basic telemetry such as battery and movement status
- Sends event notifications for alarms like movement, geofence entry or exit, and overspeed
- Allows the tracker to be addressed by the server for optional remote commands and acknowledgements
- Enables Plaspy to record location history and trigger configured alerts for monitoring and operations

## How Plaspy Detects the Protocol

Plaspy receives tracker messages on a single shared endpoint and automatically detects the device protocol so manual selection is usually not required. If the XT-013 is configured to report to Plaspy and uses the supported transport, Plaspy will match incoming messages to the appropriate protocol handler.

- Plaspy listens on the shared server endpoint d.plaspy.com and the public server IP 54.85.159.138
- All devices in Plaspy use the same port for reporting to simplify device configuration
- Plaspy automatically detects the tracker protocol from incoming traffic patterns so users generally do not need to pick a protocol in the platform
- Proper device configuration to point reports to Plaspy is the typical requirement for detection to succeed
- Detection is focused on identifying valid tracker messages and mapping them to device records rather than exposing firmware internals

## Transport and Connection Context

The XT-013 can be configured to use either UDP or TCP depending on device capability and the chosen configuration. Connection settings direct the tracker to Plaspy’s shared endpoint so messages arrive at the platform for automatic processing.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- The tracker may use UDP or TCP on port 8888 depending on device support and configuration
- Plaspy uses port 8888 for all supported devices to provide a single, consistent reporting port
- Choosing UDP or TCP affects delivery behavior but does not change the high level event semantics reported by the tracker
- Ensure APN and network settings are correct on the SIM to allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, and event behavior; verify the firmware level when troubleshooting
- Hardware revisions sometimes change radio or power characteristics without changing the outward reporting format
- Manufacturer settings or OEM variations may alter default server or transport choices; confirm device configuration before assuming compatibility
- Transport selection (UDP versus TCP) should match the device configuration and network environment
- Validate geofence, overspeed thresholds, and low battery reporting with the specific firmware installed on the unit
- When in doubt, consult the official Xexun documentation for device specific command sets and configuration procedures

## Why Protocol Understanding Matters

Understanding how the XT-013 communicates helps ensure reliable setup, accurate alerts, and predictable long term behavior when used with Plaspy. Practical knowledge of reporting intervals, transport, and event types speeds troubleshooting and optimization.

- Helps confirm the device is pointing to the correct Plaspy endpoint and transport
- Makes it easier to interpret why certain events appear or do not appear in the platform
- Guides decisions about reporting frequency to balance battery life and update granularity
- Supports rapid diagnosis of connectivity issues versus device configuration problems
- Assists in validating that geofence and overspeed alerts match operational expectations

## Why Use Plaspy with This Protocol

Using the Xexun XT-013 with Plaspy provides a practical way to centralize location data, receive timely movement and geofence alerts, and maintain historical tracking for fleet and asset oversight. The XT-013’s compact and waterproof design along with its built in battery and alerting features make it well suited for discreet asset tracking and vehicle monitoring when paired with a platform like Plaspy.

To learn more about Plaspy and how it handles device connectivity and protocol detection, visit https://www.plaspy.com. For the most current firmware details, configuration commands, and manufacturer specific documentation for the XT-013, verify information on the official Xexun website https://www.xexun.com/ as protocol behavior and device implementation can change over time.
