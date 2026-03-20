---
slug: /gotop/vt_393/protocol
id: vt_393-protocol
sidebar_label: Protocol
title: GOTOP - VT-393 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP VT-393 GPS tracker and how it communicates with Plaspy for fleet tracking
keywords:
  - GOTOP VT-393 protocol
  - GOTOP VT-393 GPS protocol
  - VT-393 GPS tracker
  - GOTOP GPS protocol
  - VT-393 Plaspy compatibility
  - vehicle tracking protocol
  - fleet tracking GOTOP
  - GPS tracker communication
  - tracker protocol guide
  - GOTOP VT-393 camera tracking
---

# GOTOP - VT-393 Protocol

This page documents the public protocol context for using the GOTOP VT-393 tracker with the Plaspy platform. It focuses on high level communication facts and how the tracker reports location, status, alarms, and media when integrated into a fleet management system. Where useful, the VT-393 hardware capabilities such as camera support, bidirectional communication, SD card storage, and OTA firmware updates are mentioned only to provide operational context for protocol behavior.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so real world behavior may differ between units and over time.

## Protocol Overview

The VT-393 communication protocol is the method by which the device reports telemetry, events, and other data to a backend server and receives commands or updates. In practice, the protocol enables identification of the device, periodic or event driven location updates, alarm and sensor messages, and optional media or log transfers that the VT-393 can produce.

- Enables the device to identify itself to a remote server and establish ongoing reporting sessions
- Carries GPS position, timestamp, speed, and status indicators for fleet monitoring
- Transmits alarms and sensor readings such as harsh braking, geofence events, and fuel inputs
- Supports bidirectional messages so remote commands and acknowledgements can be exchanged
- Can be used in conjunction with media uploads or SD card references when camera features are active

## How Plaspy Detects the Protocol

Plaspy receives device connections at a shared endpoint and port and uses automated detection to interpret incoming tracker messages. When a VT-393 is pointed to Plaspy's endpoint with correct network configuration, Plaspy will identify the tracker protocol without manual protocol selection in most cases.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- The Plaspy endpoint listens on port 8888 for device reports
- Devices may be configured to use either UDP or TCP to report to Plaspy on port 8888
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol
- Users typically do not need to manually choose a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint

## Transport and Connection Context

Connection transport and addressing are separate from the protocol itself but are essential for getting the VT-393 to communicate with Plaspy. The VT-393 can be configured to send data over cellular data using either UDP or TCP depending on device firmware and operator settings.

- The device may be configured using UDP or TCP on port 8888
- Devices can be pointed at the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138
- Port 8888 is used by Plaspy for all compatible devices to simplify configuration
- Transport selection (UDP vs TCP) can affect delivery characteristics but does not change the high level role of the protocol
- Confirm that the device APN and GPRS settings are correct so the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware version can change message timing, available fields, or optional features such as camera uploads and OTA behavior
- Hardware revisions or optional modules may add or remove features that affect which protocol messages are used
- Manufacturer configuration defaults may differ between regions and can alter transport type or reporting intervals
- Two way communication features require correct inbound addressing and sometimes additional configuration for remote commands
- Transport selection should match the device configuration and network characteristics for reliable reporting
- Always validate device behavior in a controlled environment before large scale deployment

## Why Protocol Understanding Matters

Understanding how the VT-393 communicates helps ensure reliable setup, accurate reporting, and effective troubleshooting when integrating with Plaspy. Clear expectations about messages, transport, and firmware behavior reduce deployment friction and improve long term operational reliability.

- Helps verify the tracker is correctly reporting position, alarms, and sensor data to Plaspy
- Aids in troubleshooting connectivity issues such as misconfigured APN, wrong server address, or incorrect transport
- Ensures two way commands and firmware OTA work as expected when required by operations
- Improves reliability by aligning device reporting intervals and event triggers with fleet needs
- Supports informed decisions when firmware updates or hardware changes are introduced

## Why Use Plaspy with This Protocol

Using the GOTOP VT-393 with Plaspy provides a practical path for organizations that need ongoing vehicle visibility, alarm monitoring, media assisted verification, and centralized fleet oversight. The VT-393’s camera and multiple I O options complement typical telemetry so Plaspy can present location, event, and sensor data in a single platform for operational use.

To learn more about how Plaspy handles device connections and protocol detection, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions consult the official GOTOP documentation at https://www.gotop.cc/ as manufacturer behavior can change over time and should be verified with the vendor.
