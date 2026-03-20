---
slug: /gotop/c790/protocol
id: c790-protocol
sidebar_label: Protocol
title: GOTOP - C790 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for GOTOP C790 tracker with Plaspy compatibility and connection details
keywords:
  - GOTOP C790 protocol
  - GOTOP C790 GPS protocol
  - GOTOP C790 Plaspy
  - GOTOP GPS tracker protocol
  - vehicle tracking protocol
  - GPS tracker communication
  - fleet tracking GOTOP
  - GOTOP C790 compatibility
  - GOTOP C790 tracking protocol
  - Plaspy tracker support
---

# GOTOP - C790 Protocol

This page describes the public protocol context for using the GOTOP C790 vehicle tracker with the Plaspy platform. It focuses on high level communication and integration points that are relevant to configuring, reporting, and monitoring the device with Plaspy while avoiding sensitive implementation specifics.

The GOTOP C790 combines satellite positioning with GPRS communication and supports features such as remote fuel cutoff, ACC detection, SOS input, geofence alerts, and multiple alarm types. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy server domain is d.plaspy.com. Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port. Plaspy automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so verify device specific documentation when needed.

## Protocol Overview

The tracker protocol defines how the C790 reports location, status, and event information to a remote server and how remote commands for features such as remote cut off or parameter changes are delivered. For integration with Plaspy the protocol is treated as the transport of telemetry and control signals between the device and the platform.

- Enables the C790 to report GPS or Beidou positioning and GPRS connectivity status to Plaspy
- Carries device identification and session details so Plaspy can associate reports with the correct unit
- Conveys alarms and event notifications such as SOS, vibration, over speed, and power loss
- Allows remote control actions supported by the device like fuel cut off when authorized and routed through Plaspy
- Supports telemetry useful for history, playback, and geofence alerts visible in Plaspy
- Works over standard network transport so the same Plaspy endpoint can accept multiple device types

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and uses that input to determine which tracker protocol is sending data. In most cases a properly configured C790 that reports to the Plaspy endpoint will be detected automatically, removing the need for manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- The device may be configured using UDP or TCP on port 8888 depending on device options
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a format manually
- Proper device ID and APN settings on the tracker help Plaspy associate incoming reports with the correct unit
- If detection does not occur, checking device reporting destination and network connectivity is the first troubleshooting step

## Transport and Connection Context

Connection settings determine how the C790 reaches Plaspy and whether the device uses UDP or TCP for reporting. For Plaspy the important public connection details are fixed so administrators can point devices to the correct host and port for automatic handling by the platform.

- Devices may be configured to report to d.plaspy.com or to 54.85.159.138
- The device may be configured using UDP or TCP on port 8888 depending on device support
- The port is 8888 and all devices in Plaspy use the same port for reporting
- Using the correct APN and GPRS profile on the C790 ensures it can reach the Plaspy endpoint
- Network conditions such as mobile data signal and operator settings can affect delivery and should be validated
- For devices behind NAT or on restricted networks confirm outbound traffic to the Plaspy endpoint is permitted

## Protocol Compatibility Notes

- Firmware versions on the C790 can change which commands and events are available or how they are reported
- Hardware revisions or model variants may expose different I/O, alarms, or optional features
- Transport selection between UDP and TCP is device configurable and affects reliability and session behavior
- Manufacturer side settings such as default server address or APN presets may require adjustment for Plaspy reporting
- Validate compatibility by confirming the device can successfully register and send test reports to the Plaspy endpoint
- When in doubt consult official GOTOP documentation for model specific behavior and firmware release notes
- Keep device firmware and configuration records to help reproduce any integration issues

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and installers ensure reliable device reporting, enable supported features, and troubleshoot connectivity or behavior issues when using Plaspy.

- Faster setup by confirming correct server, transport, and APN settings before deployment
- More effective troubleshooting when reports are missing or events do not appear in Plaspy
- Clear expectations about which device features can be managed remotely through the platform
- Better planning for firmware updates that may change reporting or command behavior
- Improved fleet reliability by matching device capability to operational requirements
- Easier coordination with manufacturers when device behavior diverges from expected operation

## Why Use Plaspy with This Protocol

Using Plaspy with a GOTOP C790 tracker gives organizations a platform to collect location and event data, review historical trips, and act on critical alerts from the device. The combination of common transport settings and automatic protocol detection simplifies device onboarding and reduces configuration overhead.

If you want to learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and hardware details please verify information on the manufacturer site https://www.gotop.cc/ as protocol support and firmware behavior can change over time.
