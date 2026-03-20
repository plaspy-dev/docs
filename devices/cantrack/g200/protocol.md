---
slug: /cantrack/g200/protocol
id: g200-protocol
sidebar_label: Protocol
title: CanTrack - G200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G200 GPS tracker integration with Plaspy server settings and compatibility guidance
keywords:
  - CanTrack G200 protocol
  - CanTrack G200 GPS protocol
  - G200 protocol Plaspy
  - CanTrack G200 tracking
  - CanTrack GPS tracker protocol
  - Plaspy compatibility
  - G200 GPS tracker integration
  - vehicle tracking G200
  - fleet tracking CanTrack
  - G200 communication protocol
---

# CanTrack - G200 Protocol

This page provides a public overview of the communication context for the CanTrack G200 magnet GPS tracker when used with the Plaspy platform. It summarizes how the tracker generally reports location and event data, what role the tracker protocol plays in that exchange, and practical compatibility considerations for integration with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects tracker protocols when devices report to the Plaspy endpoint. Exact protocol behavior for the G200 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive details and guidance rather than firmware specific command definitions.

## Protocol Overview

The tracker protocol defines the messages a G200 device sends and how the server interprets them so location, alarms, and status updates become actionable in Plaspy. At a high level the protocol enables the device to identify itself, report position fixes and LBS information, and signal events such as movement, vibration, or tamper conditions.

- Allows the G200 to transmit GPS or LBS location reports that Plaspy can map and display
- Conveys device identity and basic status so incoming reports are associated with the correct asset
- Carries event notifications such as speeding, geofence breaches, vibration alarms, and anti tamper alerts
- Supports intermittent reporting and memory storage behavior for periods when GSM connectivity is lost
- Works with the tracker power modes to balance reporting frequency and battery life

## How Plaspy Detects the Protocol

Plaspy receives raw tracker traffic at a unified endpoint and applies automatic detection so most devices do not require manual protocol selection in the Plaspy interface. When a G200 is configured to send reports to the Plaspy endpoint, Plaspy will identify the incoming report format and associate it with the correct device record as long as the device is reporting correctly.

- Plaspy listens on a shared server endpoint for supported trackers
- The public Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- Plaspy uses the same port for all devices which simplifies device configuration and onboarding
- In most cases users only need to point the device to the Plaspy endpoint and the platform handles protocol detection automatically
- If a device does not appear in Plaspy, check device reporting settings, APN and SIM connectivity, and firmware revision for behavior changes

## Transport and Connection Context

Transport selection for the G200 depends on the device firmware and local configuration. The device may be configured to send reports over UDP or TCP to the Plaspy server, and the connection context determines how the device reaches the Plaspy endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Plaspy’s public server domain is d.plaspy.com and its public server IP is 54.85.159.138
- The port used for Plaspy device traffic is 8888 and Plaspy uses the same port for all supported devices
- Choose UDP for simpler, lower overhead reporting or TCP when reliability of delivery is required by the device firmware
- Ensure APN and SIM settings on the G200 are correct so it can resolve d.plaspy.com or reach the numeric IP address

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available events, and transport choices; verify firmware notes for device specific behavior
- Hardware revisions or different production batches may affect available features such as power modes or magnet sensor behavior
- Some G200 features such as memory storage for offline scenarios and power saving modes influence when and how reports are sent to the platform
- Transport protocol selection (UDP vs TCP) is a device level option and may require corresponding configuration on the tracker side
- Validate compatibility by testing a device against the Plaspy endpoint before wide deployment
- Consult the manufacturer documentation for any device configuration commands or special reporting modes that influence compatibility

## Why Protocol Understanding Matters

Knowing how the G200 communicates helps administrators successfully register, diagnose, and maintain devices in Plaspy. Even though Plaspy automatically detects protocols at the shared endpoint, practical familiarity with the device reporting behavior reduces onboarding friction and shortens troubleshooting time.

- Helps confirm that the device is pointing to d.plaspy.com or to 54.85.159.138 on port 8888
- Guides troubleshooting for non reporting devices by clarifying expected report frequency and event types
- Aids planning for battery and power saving tradeoffs based on the device reporting mode
- Supports decisions on transport selection and SIM settings for reliable connectivity
- Enables informed coordination with the device manufacturer for firmware or configuration issues

## Why Use Plaspy with This Protocol

Using Plaspy with the CanTrack G200 provides organizations with consolidated visibility into mobile assets that benefit from long battery life, strong magnet mounting, and event reporting features such as vibration and anti tamper alarms. Plaspy’s unified endpoint approach and automatic protocol detection reduce configuration complexity so devices that are properly pointed to the platform typically begin reporting without manual protocol selection.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions for the CanTrack G200, please consult the manufacturer documentation at https://www.cantrackgps.com/ as protocol support and device behavior can change over time.
