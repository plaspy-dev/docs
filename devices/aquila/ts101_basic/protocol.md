---
slug: /aquila/ts101_basic/protocol
id: ts101_basic-protocol
sidebar_label: Protocol
title: Aquila - TS101-Basic Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Aquila TS101-Basic and how it communicates with Plaspy for reliable GPS tracking
keywords:
  - Aquila TS101-Basic protocol
  - Aquila TS101-Basic GPS protocol
  - Aquila TS101 Basic tracking protocol
  - Aquila GPS tracker protocol
  - TS101-Basic Plaspy compatibility
  - Plaspy device protocol
  - vehicle tracking Aquila TS101-Basic
  - fleet management tracker protocol
  - Aquila tracking compatibility
  - GPS tracker Plaspy integration
---

# Aquila - TS101-Basic Protocol

This page covers the public protocol context for using the Aquila TS101-Basic tracker with Plaspy. It summarizes how the device communicates at a high level, what to expect when pointing the tracker at Plaspy, and which connection settings are used for reporting. The content is intentionally non-sensitive and intended to help with setup, compatibility checks, and basic troubleshooting.

The TS101-Basic is a compact vehicle tracker with tamper protection, an IP65 enclosure, internal antennas, and offline storage for up to 10,000 records. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Confirm device specific behavior with the manufacturer documentation when needed.

## Protocol Overview

The protocol is the device reporting method that allows the TS101-Basic to identify itself to a server and deliver position, status, and event data for use in Plaspy. At a high level the protocol governs how the tracker packages and sends telemetry and how server acknowledgements and command exchanges are handled.

- Enables the tracker to report location, time, and status updates to a remote server for real time monitoring.
- Carries device identity and session information so Plaspy can associate incoming data with a registered asset.
- Supports buffered reporting so stored records on the TS101-Basic can be transmitted when connectivity is restored.
- Conveys event and tamper information useful for fleet security and operational alerts.
- Works over standard network transports so the tracker can integrate with Plaspy without device specific network routing.

## How Plaspy Detects the Protocol

Plaspy receives tracker connections at a single shared endpoint and inspects incoming data to determine the correct handling. In most cases you do not need to choose a protocol manually inside Plaspy as long as the tracker is configured to report to the Plaspy endpoint.

- Plaspy automatically detects the tracker protocol when the device reports to the platform.
- All devices supported by Plaspy use the same network port on the server.
- If the TS101-Basic is configured to send data to the Plaspy endpoint, the platform will identify the tracker type and process incoming messages.
- Users typically only need to set the tracker reporting address and transport on the device itself for basic integration.

## Transport and Connection Context

Connection settings determine how the TS101-Basic reaches the Plaspy server and which transport is used for reporting. These are public Plaspy connection facts that you can configure on the device or validate with network tools.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888 depending on the device network support and chosen settings
- All devices in Plaspy use the same port which simplifies device configuration across a mixed fleet
- Pointing the tracker to d.plaspy.com or 54.85.159.138 on the configured transport is the standard way to deliver reports to Plaspy

## Protocol Compatibility Notes

- Firmware revisions can alter message timing, available fields, and optional features; verify the tracker firmware level when validating compatibility.
- Hardware revisions or alternative TS101-Basic builds may introduce differences in supported transports or event reporting.
- Manufacturer side configuration options can change default server and port values; ensure the device is set to the Plaspy endpoint.
- Transport selection between UDP and TCP affects delivery guarantees and should match the device capabilities and network environment.
- Buffering behavior and offline record retransmission depend on device storage settings and firmware logic.
- Always confirm behavior against the official manufacturer documentation for the exact device batch and firmware.

## Why Protocol Understanding Matters

Understanding the basic protocol behavior helps ensure reliable setup, effective troubleshooting, and predictable long term operation when using the TS101-Basic with Plaspy. A clear view of how data flows between device and server reduces integration time and improves fleet visibility.

- Speeds initial setup by focusing configuration on server address and transport settings required by Plaspy.
- Helps diagnose connectivity issues by checking whether the device is reaching d.plaspy.com or 54.85.159.138 on port 8888.
- Clarifies expectations for when stored records will be uploaded after outages or power loss.
- Guides decisions about using UDP or TCP based on network conditions and delivery needs.
- Assists support conversations by separating device level behavior from platform processing that Plaspy performs automatically.

## Why Use Plaspy with This Protocol

Using the Aquila TS101-Basic with Plaspy gives organizations a practical path to vehicle visibility, tamper awareness, and historical record access for fleet and asset management. The TS101-Basic design features such as IP65 casing, tamper switch, and internal antennas make it suitable for many installation scenarios, and Plaspy processes reported data to deliver maps, alerts, and reporting features that support operational oversight.

If you want to learn more about how Plaspy works with devices like the TS101-Basic visit https://www.plaspy.com. For the most current device specific protocol information, firmware notes, and installation guidance check the manufacturer site at https://www.itriangle.in/ since protocol support and firmware behavior can change over time.
