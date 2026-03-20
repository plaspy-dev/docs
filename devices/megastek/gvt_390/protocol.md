---
slug: /megastek/gvt_390/protocol
id: gvt_390-protocol
sidebar_label: Protocol
title: Megastek - GVT-390 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Megastek GVT 390 compatibility with Plaspy server connection settings and integration
keywords:
  - Megastek GVT 390 protocol
  - Megastek GVT 390 GPS protocol
  - GVT 390 Plaspy compatibility
  - Megastek tracking protocol
  - GPS tracker communication
  - Plaspy device integration
  - vehicle tracking Megastek
  - fleet tracking GVT 390
  - asset tracking protocol
  - tracker connection settings
---

# Megastek - GVT-390 Protocol

This page describes the public protocol context for using the Megastek GVT-390 tracker with the Plaspy platform. It summarizes how the device communicates in general terms, the relevant connection endpoints Plaspy uses, and practical considerations for successfully reporting GVT-390 data to Plaspy without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is intended as general guidance rather than a firmware specific reference.

## Protocol Overview

The communication protocol on the GVT-390 governs how the tracker reports position, alarms, and I/O state to a remote server and how it can receive configuration commands. For Plaspy integration, the protocol role is limited to enabling reliable delivery of the tracker telemetry and status data that Plaspy consumes and presents.

- Transfers location and timestamped telemetry from the GVT-390 to a server for processing and display
- Conveys alarm events such as SOS, geo fence, overspeed, low battery, and motion alerts to the server
- Reports digital and analog input states and output control signals so Plaspy can reflect device I O status
- Uses the device cellular modem to transmit data over the configured transport to the platform endpoint
- Provides hooks for remote configuration commands and acknowledgements depending on device firmware

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by the device. In most cases, when the GVT-390 is configured to report to the Plaspy endpoint, no manual protocol selection inside Plaspy is required.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The platform port used for all devices is 8888 and Plaspy uses the same port for every supported tracker
- Plaspy automatically detects the tracker protocol when telemetry arrives at the server endpoint
- Users typically only need to ensure the device is configured to report to the Plaspy endpoint to enable detection

## Transport and Connection Context

The GVT-390 can use the device cellular link to transmit data to the platform over either UDP or TCP depending on the device configuration and firmware capabilities. For Plaspy, the focus is on pointing the tracker at the correct network endpoint and port so telemetry is reliably delivered.

- Devices may be configured to use UDP or TCP on port 8888
- Trackers can point to the Plaspy domain d.plaspy.com or direct to the server IP 54.85.159.138
- All Plaspy supported devices share the same port so configuration is consistent across models
- Choice of UDP versus TCP depends on device firmware options and user preference for reliability versus lower overhead
- Verify the transport mode in the device configuration to match network and operator characteristics

## Protocol Compatibility Notes

- Firmware versions can change message sets and available remote commands; always check the device firmware level when troubleshooting
- Hardware revisions or regional variants of the GVT-390 may implement protocol features differently
- Manufacturer configuration options determine whether the device sends periodic reports, event driven messages, or both
- Transport selection between UDP and TCP affects delivery characteristics and should be chosen according to use case
- Some advanced features such as voice monitoring or SD logger data are dependent on firmware support and may not be exposed via the standard telemetry channel
- Validate compatibility and recommended settings against manufacturer documentation when performing initial configuration

## Why Protocol Understanding Matters

Understanding how the GVT-390 communicates helps ensure reliable setup, efficient troubleshooting, and predictable device behavior over time. Knowing the role of transport, firmware, and reporting modes reduces integration time and operational surprises.

- Helps confirm that the device is reporting to the correct Plaspy endpoint and port
- Aids in diagnosing missing telemetry or event reports by checking transport and firmware behavior
- Informs decisions about reporting intervals, power saving modes, and data volume for cellular costs
- Clarifies how inputs, outputs, and alarms map to fields visible in Plaspy
- Makes it easier to coordinate updates when manufacturer firmware or feature sets change

## Why Use Plaspy with This Protocol

Using the Megastek GVT-390 with Plaspy gives teams a straightforward way to collect location, alarm, and I O data from the tracker and turn it into operational insight. Plaspy’s shared endpoint and automatic protocol detection simplify onboarding so a correctly configured GVT-390 can begin reporting without manual protocol selection.

If you want to learn more about Plaspy and how it can integrate with the GVT-390, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions, review documentation from the device maker at https://www.megastek.com/. Protocol support and firmware behavior can change over time, so verifying the latest information with the manufacturer is recommended.
