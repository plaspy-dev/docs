---
slug: /suntech/st4315/protocol
id: st4315-protocol
sidebar_label: Protocol
title: Suntech - ST4315 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST4315 compatibility with Plaspy for GPS tracking and telemetry
keywords:
  - Suntech ST4315 protocol
  - Suntech ST4315 GPS protocol
  - Suntech ST4315 communication protocol
  - Suntech ST4315 tracking protocol
  - ST4315 Plaspy compatibility
  - Suntech GPS tracker protocol
  - vehicle tracking ST4315
  - fleet management ST4315
  - ST4315 telemetry
  - Suntech ST4315 integration
---

# Suntech - ST4315 Protocol

This page describes the public protocol context for using the Suntech ST4315 series tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and what aspects to check when integrating the ST4315 into a fleet or asset system. The intention is to provide useful integration guidance without exposing private or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact message timing and behavior can vary by ST4315 firmware version, hardware revision, and manufacturer implementation. The ST4315 family offers multi network cellular options, buffered logging, and multiple I O interfaces, which influence how the device is configured to report to Plaspy.

## Protocol Overview

The ST4315 communication protocol enables the tracker to deliver GNSS positions, telemetry, and event data to a remote server such as Plaspy. At a public level, the protocol provides device identification, periodic and event-driven position reporting, and delivery of telemetry that Plaspy can ingest for mapping, alerts, and historical reports.

- Provides device identification so Plaspy can associate incoming messages with the correct vehicle or asset.
- Delivers GNSS position and timestamp data used for real time tracking and historical playback.
- Transmits event and input state information for geofence alerts, ignition state, and digital I O events.
- Supports buffered storage on the device to preserve records during connectivity loss and upload them when the connection restores.
- Enables optional telemetry fields for sensors attached via RS232, 1 Wire, or BLE on supported variants.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker connections and selects the appropriate interpretation automatically. When an ST4315 is configured to report to Plaspy, the platform will associate the incoming stream with the correct device and extract position and telemetry data for use in the Plaspy service.

- Plaspy server domain for reporting is d.plaspy.com as the public endpoint for devices.
- Plaspy also accepts connections to the server IP 54.85.159.138 for environments that require numeric addressing.
- The listening port used by Plaspy for tracker connections is 8888 and is the same for all supported devices.
- Devices may be configured to use either UDP or TCP transport to reach Plaspy on port 8888.
- Plaspy automatically detects the tracker protocol once the device begins reporting, so users typically do not need to select a protocol manually in the platform.

## Transport and Connection Context

Connection context describes how the ST4315 reaches Plaspy rather than the exact message layout. The tracker supports multiple cellular transports and can be set up to send its data to the Plaspy endpoint using the agreed network transport and port.

- ST4315 variants support LTE Cat M1, NB‑IoT and EGPRS for network connectivity; transport to Plaspy is TCP or UDP depending on configuration.
- Devices may be pointed to d.plaspy.com or directly to 54.85.159.138 when DNS resolution is not desired.
- All devices that report to Plaspy use port 8888 for their TCP or UDP transmissions.
- Buffered logging on the ST4315 holds records locally (device dependent) for upload when the connection is available.
- Ensure the tracker APN and network settings are correct for the chosen cellular technology to allow outbound connections to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change timing, available telemetry fields, and behavior of event reporting; verify firmware notes when diagnosing differences.
- Hardware variants in the ST4315 family (for example variant pinouts and optional interfaces) may expose different sensor or I O capabilities that affect integration.
- Transport selection between UDP and TCP is configurable on the device; pick the transport that matches operational requirements and network reliability.
- Manufacturer defaults or provisioning tools may point devices to a different server by default; update the reporting endpoint to d.plaspy.com or 54.85.159.138 and port 8888 for Plaspy.
- Buffering behavior and maximum stored records are model dependent; confirm limits when planning for extended offline intervals.
- Always validate device behavior against the most recent manufacturer documentation before large scale deployments.

## Why Protocol Understanding Matters

Understanding how the ST4315 communicates helps ensure reliable data flow to Plaspy, simplifies troubleshooting, and reduces deployment time. Even though Plaspy automatically detects protocols, knowing the connection context, transport options, and device capabilities helps installers and operators avoid common configuration issues.

- Confirms the tracker is pointed to the Plaspy endpoint and using port 8888 so data reaches the platform.
- Helps identify whether TCP or UDP is more appropriate for a particular network environment.
- Clarifies expectations for buffered record uploads during and after connectivity outages.
- Aids in mapping device inputs and peripheral telemetry to meaningful fields in Plaspy.
- Speeds troubleshooting when position or telemetry updates are missing or delayed.

## Why Use Plaspy with This Protocol

Using the ST4315 with Plaspy brings a practical combination of rugged hardware and a platform that automatically adapts to incoming tracker protocols. For fleet and asset managers the integration supports real time tracking, event monitoring, and historical data recovery after outages, all using the same Plaspy endpoint and port for simplicity.

If you want to learn more about Plaspy and how it handles device communication, visit https://www.plaspy.com to explore the platform and integration guides. For the latest device specific protocol details, firmware notes, and variant specifications for the ST4315 series consult the manufacturer at http://www.suntechint.com/ to verify current information.
