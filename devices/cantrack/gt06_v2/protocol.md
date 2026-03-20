---
slug: /cantrack/gt06_v2/protocol
id: gt06_v2-protocol
sidebar_label: Protocol
title: CanTrack - GT06 v2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack GT06 v2 integration with Plaspy and common connection settings for reliable GPS reporting
keywords:
  - CanTrack GT06 v2 protocol
  - CanTrack GT06 v2 GPS protocol
  - CanTrack GT06 v2 tracking protocol
  - GT06 v2 communication
  - GT06 v2 compatibility
  - CanTrack protocol Plaspy
  - GPS tracker Plaspy compatibility
  - vehicle tracking GT06 v2
  - fleet management CanTrack
  - GT06 v2 GPRS tracking
---

# CanTrack - GT06 v2 Protocol

This page covers the public protocol context for using the CanTrack GT06 v2 tracker with Plaspy. It summarizes how the device commonly reports location and status information over GSM GPRS networks and how that reporting is consumed by Plaspy for real time monitoring, alarms, and location history. The GT06 v2 is a compact vehicle tracker that can report position by GPRS and send alerts by SMS; this documentation focuses on the public communication context rather than firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Devices configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 will reach the Plaspy endpoint. The exact runtime behavior of any individual GT06 v2 unit can vary with firmware version, hardware revision, and manufacturer implementation, so protocol behavior should be validated with official CanTrack documentation for firmware specific details.

## Protocol Overview

The GT06 v2 communication protocol is the set of rules and message sequences that allow the tracker to deliver GPS position, status, and alarms from the device to an internet endpoint such as Plaspy. In practical terms, the protocol enables the device to identify itself, report telemetry, and deliver event-driven messages so that location services and alerts can be acted on by fleet or asset management systems.

- Allows the tracker to report GPS coordinates, time, and basic status to a remote server for real time tracking.
- Carries alarm and event notifications such as overspeed, SOS, ACC status, and power loss to a backend platform.
- Provides identifying information so Plaspy can associate incoming reports with a specific device installation.
- Supports periodic and event-driven reporting to balance location accuracy and data usage.
- Enables remote control or configuration commands where supported by the device and network operator.
- Serves as the basis for alarm handling, geofencing, and historical playback in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and port and applies automatic detection to determine the incoming tracker protocol. When a GT06 v2 is configured to report to Plaspy, users generally do not need to select a protocol manually inside Plaspy; the platform recognizes the format and associates the device automatically.

- Plaspy listens for device reports on the shared server endpoint d.plaspy.com and the server IP 54.85.159.138.
- All devices in Plaspy use the same port, which is port 8888, simplifying device configuration.
- Devices may be configured to use either UDP or TCP to send reports to Plaspy depending on the tracker configuration and network behavior.
- When a properly formatted report arrives, Plaspy uses built in detection routines so manual protocol selection is typically unnecessary.
- Proper device identification and configuration on the tracker side ensures reports are attributed correctly in Plaspy.

## Transport and Connection Context

The GT06 v2 can transmit location data over the GSM GPRS network and can be set up to send that data to an internet server. In the Plaspy context, the primary transport details are intentionally consistent across supported devices to streamline configuration.

- The device may be configured using UDP or TCP on port 8888 to reach Plaspy.
- Plaspy can be addressed by hostname d.plaspy.com or by the server IP 54.85.159.138 when configuring the tracker GPRS settings.
- Plaspy uses the same port for all devices, reducing configuration errors and simplifying deployment.
- Choice of UDP versus TCP can affect delivery behavior; select the transport supported by the specific GT06 v2 firmware and network conditions.
- Ensure APN and GPRS credential settings on the device are correct so the tracker can establish a data session and deliver reports to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences between GT06 v2 units can change available message types, reporting intervals, and supported remote commands.
- Hardware revisions or optional features (for example two way calling or cut engine outputs) may affect which signals are reported or controllable remotely.
- Manufacturer configuration defaults may use SMS reporting by default; switching to GPRS reporting requires updating device settings to point to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport selection matters: some installations prefer UDP for lower overhead while others use TCP for reliable delivery where supported.
- Always validate device identification details so Plaspy can match incoming reports to the correct asset.
- Consult CanTrack firmware release notes when troubleshooting differences in behavior between devices.

## Why Protocol Understanding Matters

Understanding how the GT06 v2 communicates helps ensure reliable setup, effective troubleshooting, and predictable operation in Plaspy. Awareness of transport choices, firmware variation, and reporting behavior improves deployment success and operational monitoring.

- Enables faster setup by confirming the tracker is pointing to the correct Plaspy endpoint and port.
- Helps troubleshoot missing or delayed reports by checking transport, APN, and device firmware behavior.
- Supports informed decisions about reporting intervals and event triggers to balance data usage and position accuracy.
- Assists in interpreting alarms and device status fields when verifying sensor wiring and configuration.
- Improves long term reliability by aligning firmware and device revisions with expected platform behavior.

## Why Use Plaspy with This Protocol

Using a CanTrack GT06 v2 with Plaspy gives organizations a straightforward path to real time vehicle visibility, event notifications, and centralized historical tracking. Plaspy receives and normalizes incoming reports so fleet managers can view location, receive alarms, and run reports without managing custom server endpoints for each device model.

To learn more about how Plaspy handles device connections and fleet features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware changes, and manufacturer guidance, verify information with CanTrack at https://www.cantrackgps.com/ as device behavior and protocol support can change over time.
