---
slug: /gotop/d22/protocol
id: d22-protocol
sidebar_label: Protocol
title: GOTOP - D22 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for GOTOP D22 integration with Plaspy including connection and compatibility guidance
keywords:
  - GOTOP D22
  - GOTOP D22 protocol
  - GOTOP D22 GPS tracker
  - GOTOP D22 compatibility
  - GOTOP D22 Plaspy
  - vehicle tracking protocol
  - fleet management tracker
  - GPS tracker communication
  - Plaspy device protocol
  - GPS tracking integration
---

# GOTOP - D22 Protocol

This page summarizes the public protocol context for using the GOTOP D22 GPS tracker with Plaspy. It focuses on how the device communicates with a Plaspy server endpoint and what aspects of the tracker reporting are relevant for successful integration, monitoring, and troubleshooting on the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy. Exact protocol behavior and available features can vary by D22 firmware version, hardware revision, and manufacturer implementation, so this page provides general, non-sensitive guidance and practical considerations for connecting the D22 to Plaspy.

## Protocol Overview

The communication protocol of the D22 governs how the device reports position, status, alarms, and telemetry to a remote server and how the server may send commands or acknowledgements back to the device. For integration with Plaspy, the protocol's role is primarily to carry readable, time stamped location and event information that can be interpreted by the platform.

- Enables the D22 to send periodic location updates and satellite fix data to a remote endpoint.
- Transmits device identification and status so Plaspy can associate messages with the correct asset.
- Carries alarm and sensor events such as overspeed, movement, SOS, door status, and power alerts to the platform.
- Supports fallback behaviors such as offline storage and supplementary uploads when the device regains coverage.
- Allows two way interactions where supported by the device, for example remote control or confirmation messages.

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a shared server endpoint and automatically detects the tracker protocol used by incoming connections. When the D22 is pointed at Plaspy, the platform examines the incoming traffic at a connection level to match it to one of the supported tracker types without requiring manual protocol selection by the user.

- Plaspy receives device traffic on the public endpoint d.plaspy.com and at IP address 54.85.159.138.
- All devices reporting to Plaspy use the same server port, which simplifies device configuration.
- Plaspy automatically detects the tracker protocol when messages arrive for parsing and routing.
- In most cases, you do not need to choose a protocol inside Plaspy if the D22 is configured correctly to report to the Plaspy endpoint.
- If a device uses an uncommon firmware variant or nonstandard settings, confirming the device reporting configuration can help ensure automatic detection succeeds.

## Transport and Connection Context

The D22 can communicate over cellular data and supports standard network transports to send telemetry to a server. For Plaspy integration the key transport points are consistent across devices and are intended to be straightforward to configure on the tracker side.

- The device may be configured to use UDP or TCP depending on device support and configuration choices.
- Plaspy listens for device connections on port 8888 for all supported devices.
- Devices may be configured to point at the Plaspy domain d.plaspy.com or the numeric server address 54.85.159.138 to reach the platform.
- Using the correct transport type and server address in the D22 settings is necessary for timely delivery of location and alarm messages.
- Network reliability, carrier behavior, and APN settings can affect whether UDP or TCP is preferable for a given deployment.

## Protocol Compatibility Notes

- GOTOP D22 compatibility with Plaspy has been verified, but exact feature availability can vary by firmware and hardware revision.
- Firmware updates from the manufacturer may change protocol message content or optional features; always check device firmware notes before large rollouts.
- Hardware variants or market-specific versions of the D22 can implement slightly different reporting options or sensor wiring for external accessories.
- Selecting TCP versus UDP on the device may affect message reliability and latency depending on the network environment.
- Ensure the device reporting host and port are set to the Plaspy endpoint and port for correct routing to the platform.
- When in doubt, compare the device configuration menu and manufacturer documentation with the expected Plaspy connection settings.

## Why Protocol Understanding Matters

A practical understanding of the D22 communication protocol helps administrators and integrators set up devices reliably, interpret device behavior in the field, and troubleshoot connectivity or reporting issues with Plaspy.

- Faster setup by knowing which fields and reporting modes the device uses to identify itself to the platform.
- Improved troubleshooting when messages do not arrive or alarms are not received, by checking transport, APN, and endpoint settings.
- Better planning for firmware upgrades and how they may affect telemetry or optional features.
- More reliable fleet operations by matching device transport selection and reporting interval to operational needs.
- Clearer expectations about which events and sensors the tracker will forward to Plaspy based on device configuration.

## Why Use Plaspy with This Protocol

Using the GOTOP D22 with Plaspy gives organizations a way to centralize vehicle location, status, and alarm reporting within a managed fleet platform. The D22’s built in GPS/BDS positioning, alarm suite, offline storage, and optional external inputs make it suitable for a range of vehicle monitoring and security workflows that Plaspy can collect and present.

If you want to learn more about Plaspy and how it accepts and handles device data, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance from the manufacturer, verify information on the official GOTOP website https://www.gotop.cc/ as protocol support and firmware behavior can change over time.
