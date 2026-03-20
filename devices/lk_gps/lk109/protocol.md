---
slug: /lk_gps/lk109/protocol
id: lk109-protocol
sidebar_label: Protocol
title: LK-GPS - LK109 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the LK GPS LK109 tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - LK GPS LK109 protocol
  - LK109 GPS tracker protocol
  - LK109 communication protocol
  - LK109 tracking protocol
  - LK GPS Plaspy compatibility
  - Plaspy device protocol
  - personal GPS tracker protocol
  - GPS tracker integration Plaspy
  - LK109 geofence and SOS
  - LK109 firmware compatibility
---

# LK-GPS - LK109 Protocol

This page describes the public protocol context for using the LK-GPS LK109 personal GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy at a connection and reporting level and what to keep in mind when integrating this device into fleet and personal tracking workflows.

The LK109 is a compact waterproof personal tracker with features such as SOS alarm, fall alarm, geofence, and built in GPS positioning with typical accuracy around 5 meters and high sensitivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always cross reference manufacturer documentation for device specific behavior.

## Protocol Overview

The tracker communication protocol is the set of rules the LK109 uses to identify itself to a server, report location and status, and receive commands or configuration updates. In public terms, the protocol enables the device to deliver usable location and event data to Plaspy without exposing device internals.

- The protocol carries identification and status information so Plaspy can map incoming reports to a specific LK109 device.
- It transports position fixes, timestamps, and event types such as SOS, fall alarm, and geofence triggers to the server.
- It supports common device management operations such as remote configuration through SMS or server reporting when the device firmware exposes those capabilities.
- The protocol behavior and available features depend on the device firmware and manufacturer settings rather than on Plaspy itself.
- Plaspy receives the reported data and normalizes it for display and alerts while keeping device specific differences abstracted for users.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many common tracker models while minimizing manual setup steps. When an LK109 is pointed to the Plaspy endpoint, the platform inspects the incoming reports and automatically determines the tracker protocol for processing.

- Plaspy uses a single shared endpoint for device reporting at d.plaspy.com and also accepts direct reports to the platform IP 54.85.159.138.
- All devices in Plaspy use the same port and that port is 8888 for device connections.
- The LK109 may be configured to use UDP or TCP on port 8888 depending on device support and user configuration.
- Because Plaspy automatically detects the tracker protocol, users typically do not need to select a protocol manually within Plaspy when the device is correctly configured to report to the Plaspy endpoint.
- If a tracker does not appear online, verification of reporting settings on the device and confirmation of manufacturer configuration is the usual next step.

## Transport and Connection Context

Physical transport and connection settings determine how the LK109 sends data to Plaspy. Understanding these connection options helps ensure the device can reach the Plaspy server reliably in the field.

- The LK109 can be configured to report using either UDP or TCP on port 8888 depending on the device firmware and configuration options.
- Device reporting can target the Plaspy domain d.plaspy.com or the direct server IP 54.85.159.138; both resolve to the same Plaspy ingress for device data.
- Port 8888 is the common port used by all devices in Plaspy, so there is no per device port configuration required on the server side.
- Network conditions, carrier NAT, and device APN settings affect whether UDP or TCP is more reliable for a given deployment.
- Confirm the device APN, SMS setup commands (if using SMS parameter setting), and any manufacturer guidance before switching transport modes.

## Protocol Compatibility Notes

- Firmware revisions may change available reporting fields, event names, or the timing of reports; always check the device firmware version when diagnosing differences.
- Hardware revisions or regional variants of the LK109 can lead to small protocol differences that affect how some features or fields are reported.
- The choice between UDP and TCP influences delivery semantics; some networks handle one transport more reliably than the other.
- Manufacturer configuration through SMS or a companion app can enable or disable specific alarms or reporting modes that affect protocol output.
- Do not assume feature parity across all LK109 units; validate the specific device in a test environment before wide deployment.
- When in doubt, consult official LK GPS documentation and release notes for firmware specific protocol behavior.

## Why Protocol Understanding Matters

Understanding how the LK109 communicates helps with initial setup, troubleshooting connectivity issues, and ensuring long term reliability for monitored assets and people.

- Clear knowledge of connection endpoints and transport options speeds up device provisioning and reduces downtime.
- Awareness of firmware and hardware variation helps pinpoint why a device may report differently than expected.
- Knowing which events the tracker can send, such as SOS, fall alarm, and geofence alerts, lets you configure Plaspy rules and notifications effectively.
- Understanding where to check APN and SMS parameter settings simplifies remote configuration and recovery.
- Good protocol context aids collaboration with manufacturer support when device behavior appears inconsistent.

## Why Use Plaspy with This Protocol

Using the LK109 with Plaspy gives organizations and caregivers a straightforward way to receive location updates and alarm events in a centralized platform. Plaspy normalizes device reports so teams can monitor position, geofence breaches, SOS events, and basic device health without needing to manage model specific server endpoints.

Plaspy provides a single reporting endpoint and port so administrators can standardize device configuration across mixed device fleets. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest LK109 protocol specifics, firmware notes, and device implementation details verify current information with the manufacturer at https://www.lk-gps.com.
