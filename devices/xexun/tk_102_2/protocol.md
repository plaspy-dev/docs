---
slug: /xexun/tk_102_2/protocol
id: tk_102_2-protocol
sidebar_label: Protocol
title: Xexun - TK-102-2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xexun TK-102-2 integration with Plaspy server and shared connection settings
keywords:
  - Xexun TK-102-2 protocol
  - Xexun TK102-2 GPS protocol
  - TK-102-2 tracking protocol
  - Xexun protocol Plaspy
  - TK102-2 compatibility
  - GPS tracker protocol
  - vehicle tracking Xexun
  - Plaspy tracker compatibility
  - TK-102-2 communication
  - Xexun tracker documentation
---

# Xexun - TK-102-2 Protocol

This page describes the public protocol context for using the Xexun TK-102-2 GPS tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, what role the tracker reporting protocol plays in integration, and which shared connection settings Plaspy uses to receive device data. The technical details here are deliberately high level to avoid exposing sensitive internals while still explaining what matters for successful setup and operation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available command sets can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes compatibility and transport context rather than firmware specific commands. Public Plaspy connection facts used by many trackers include the server domain d.plaspy.com, server IP 54.85.159.138, and port 8888.

## Protocol Overview

The tracker protocol is the set of rules the TK-102-2 uses to send location, status, and alert information to a remote server like Plaspy. In practice, the protocol enables the device to identify itself, report GPS coordinates and event states, and support alerts that map to platform features such as geofencing and overspeed notifications.

- Enables device identification and association with a Plaspy account or tenant
- Transports GPS location and time information to the Plaspy endpoint
- Carries device status and alert signals such as movement, overspeed, and low battery
- Supports remote and local tracking modes; TK-102-2 also provides local storage via SD card for offline logging
- Allows Plaspy to present actionable tracking data without requiring manual protocol selection

## How Plaspy Detects the Protocol

Plaspy is configured to receive incoming reports on a shared endpoint and port and can detect many common tracker protocols automatically. This reduces user configuration steps: when the TK-102-2 is pointed at the Plaspy endpoint and is broadcasting or connecting with its standard reporting settings, Plaspy will attempt to identify the protocol and process the incoming data.

- Plaspy receives device data at d.plaspy.com and at the server IP 54.85.159.138
- All devices in Plaspy use the same port, which simplifies device setup and routing
- Plaspy automatically detects the tracker protocol when the device reports to the platform
- Users typically do not need to select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint
- Detection is subject to the data the device sends; firmware and reporting mode can affect how readily the platform identifies the protocol

## Transport and Connection Context

Transport context covers how the TK-102-2 connects to Plaspy rather than the internal packet layout. The TK-102-2 can be configured to communicate over the network in more than one way, and Plaspy supports these common transport modes on its shared port.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and user configuration
- The Plaspy server endpoint can be referenced by domain name d.plaspy.com or by the server IP 54.85.159.138
- Plaspy uses the same port for all supported devices which simplifies firewall and routing rules
- Choose TCP if reliable delivery is required and the device firmware supports it; UDP may be used for lower overhead real time reporting
- Ensure the device is configured to send reports to the Plaspy endpoint and port so automatic detection can occur

## Protocol Compatibility Notes

- Firmware variations can change message timing, available fields, and optional features; always confirm the device firmware level when validating compatibility
- Hardware revisions and local configuration options (for example SMS versus IP reporting) may alter how the device communicates with servers
- Some TK-102-2 units support non server based tracking or local SD card logging; those modes do not replace IP reporting to Plaspy but can supplement it for offline recording
- Transport selection between TCP and UDP can affect delivery and detection; verify which transport your device is set to use
- Manufacturer settings such as IMEI reporting and the server address must be configured correctly for Plaspy to associate incoming data with the correct device
- Validate compatibility against official Xexun documentation and any device specific manuals before large scale deployment

## Why Protocol Understanding Matters

Knowing how the TK-102-2 communicates helps administrators and integrators set up devices correctly, diagnose connection issues, and ensure alerts and tracking features behave as expected inside Plaspy. A basic awareness of the protocol role and transport choices reduces setup time and improves operational reliability.

- Ensures the device is pointed to the correct Plaspy endpoint and port for automatic detection
- Helps choose the appropriate transport mode for your network conditions and reliability needs
- Aids troubleshooting when location updates or alerts do not appear in Plaspy
- Clarifies how local features like SD card logging interact with server based tracking
- Supports planning for firmware updates and validation of new hardware revisions

## Why Use Plaspy with This Protocol

Using the Xexun TK-102-2 with Plaspy provides a practical way to combine a capable GPS tracker with a platform that centralizes location, alerts, and device oversight. Plaspy’s automatic protocol detection and shared connection settings reduce the manual setup burden, while platform features translate device reports into actionable monitoring and reporting for vehicles, assets, or personnel.

To learn more about Plaspy and how it can be used with devices like the TK-102-2 visit https://www.plaspy.com. For the latest device specific protocol and firmware details, consult the manufacturer documentation at https://www.xexun.com/ since protocol support and firmware behavior can change over time and should be verified against official sources.
