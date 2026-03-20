---
slug: /autoseeker/at_13/protocol
id: at_13-protocol
sidebar_label: Protocol
title: Autoseeker - AT-13 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Autoseeker AT-13 and how it communicates with Plaspy for vehicle tracking
keywords:
  - Autoseeker AT-13 protocol
  - Autoseeker AT-13 GPS protocol
  - Autoseeker AT-13 Plaspy compatibility
  - Autoseeker GPS tracker protocol
  - AT-13 tracking protocol
  - vehicle tracking Autoseeker
  - tracker protocol Plaspy
  - GPS tracker communication
  - magnetic GPS tracker AT-13
  - AT-13 remote monitoring
---

# Autoseeker - AT-13 Protocol

This page provides a public overview of the communication context for the Autoseeker AT-13 when used with Plaspy. It summarizes how the device reports location and status information in general terms and explains what to expect when configuring the AT-13 to send data to the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed at the Plaspy endpoint. Exact protocol behavior for the AT-13 can vary with firmware version, hardware revision, and manufacturer configuration, so this page focuses on general, non sensitive protocol context that helps with setup and troubleshooting.

## Protocol Overview

The AT-13 uses a device reporting protocol to transmit GPS position, device status, and telemetry so a server like Plaspy can interpret and present the information. The public protocol context centers on how the tracker establishes transport to the server, identifies itself, and delivers periodic and event driven reports without exposing implementation details.

- Enables the tracker to send location, timestamp, and basic status data that Plaspy can display and log
- Provides identifiers and fields that allow the platform to associate messages with a specific device
- Supports periodic reporting and event triggers so position updates and alerts can be delivered to Plaspy
- Allows for remote queries and status checks when supported by the device and manufacturer
- Acts as the bridge between the physical tracker and Plaspy analytics and visualization tools

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections to a single shared endpoint and port and uses that input to automatically determine the tracker protocol so users normally do not need to select a protocol manually. If the AT-13 is correctly configured to report to the Plaspy endpoint, the platform will recognize the incoming data stream and map it to the device record.

- Plaspy listens on a common endpoint d.plaspy.com and on the IP 54.85.159.138 for incoming tracker traffic
- All devices supported by Plaspy use the same port so a single port configuration simplifies device setup
- The common port for Plaspy is 8888 and the device may be configured using either UDP or TCP to that port
- When the AT-13 reports to the Plaspy endpoint the platform will automatically detect the tracker protocol
- Users typically only need to configure the device to point to d.plaspy.com or 54.85.159.138 and use port 8888

## Transport and Connection Context

The AT-13 can be set to use network transport options that match the device firmware and the environment where it will be deployed. Transport selection affects reliability, latency, and firewall requirements, and it is important to match the device configuration to the Plaspy server settings.

- Devices may be configured to send data over UDP or TCP to port 8888 depending on device support and settings
- Plaspy accepts connections at d.plaspy.com and at the numeric address 54.85.159.138 so either hostname or IP can be used
- All Plaspy devices share the same listening port which simplifies NAT and firewall rules for fleets
- Choose UDP when lower overhead and simpler connection behavior is preferred and TCP when ordered delivery and connection reliability are needed, if supported by the tracker
- Ensure outbound device traffic to port 8888 is allowed on the network where the AT-13 is operating

## Protocol Compatibility Notes

- Firmware and software revisions on the AT-13 can change message frequency, available fields, and supported transport modes
- Hardware variants or production runs may introduce differences in behavior that affect compatibility
- Manufacturer configuration options such as reporting interval, sleep modes, and alarm triggers will affect how and when data is sent to Plaspy
- Transport selection between UDP and TCP should match the device capability and the chosen configuration on the tracker
- Validate compatibility against the manufacturer documentation and release notes for the AT-13 before wide deployment
- When in doubt, test a single device to verify it reports correctly to d.plaspy.com or 54.85.159.138 on port 8888

## Why Protocol Understanding Matters

Knowing the public protocol context helps ensure the AT-13 can be configured correctly, reduces setup time, and improves reliability when used with Plaspy. A practical understanding of how the tracker communicates allows faster troubleshooting and better long term operation for monitoring and fleet use.

- Facilitates initial device configuration so the tracker points to d.plaspy.com or 54.85.159.138 on port 8888
- Helps diagnose connectivity issues by confirming transport type and server endpoint are correct
- Clarifies how firmware and configuration options influence reporting behavior and battery life
- Supports better planning for network and firewall rules when deploying multiple devices
- Enables targeted troubleshooting steps for missed reports, device sleep behavior, or unexpected reporting intervals

## Why Use Plaspy with This Protocol

The Autoseeker AT-13 is well suited for discreet vehicle monitoring thanks to its compact magnetic form and long standby battery. When paired with Plaspy, organizations gain a centralized platform that automatically recognizes the AT-13 reporting stream and integrates its data into tracking, alerts, and historical playback. This combination is useful for fleet operators, vehicle owners, and organizations that need reliable visibility into vehicle location and status.

To learn more about using Plaspy with compatible trackers and to review platform features, visit https://www.plaspy.com. For the most current device and firmware specific protocol details, configuration instructions, and manufacturer advisories consult the Autoseeker documentation at https://autoseekergps.com/ which may contain the latest updates to device behavior and settings.
