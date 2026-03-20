---
slug: /wanway/gs21/protocol
id: gs21-protocol
sidebar_label: Protocol
title: WanWay - GS21 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for WanWay GS21 integration with Plaspy using shared connection settings and automatic detection
keywords:
  - WanWay GS21 protocol
  - WanWay GS21 GPS protocol
  - WanWay GS21 communication protocol
  - WanWay GS21 tracking protocol
  - WanWay OBD II tracker protocol
  - GS21 Plaspy compatibility
  - Plaspy tracker protocol
  - vehicle tracking protocol WanWay
  - GPS tracker protocol integration
  - fleet tracking WanWay GS21
---

# WanWay - GS21 Protocol

This page provides public protocol context for using the WanWay GS21 OBD II GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used in the field, and how protocol-level behavior affects reporting and monitoring. The content is intended to help fleet managers, integrators, and technical users understand connectivity and reporting without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here describes common communication patterns and practical considerations rather than device internals.

## Protocol Overview

The communication protocol for the GS21 governs how the tracker reports location, status, and alerts to a remote server and how platform commands or acknowledgements may be exchanged. In practice this means the protocol defines identification, periodic reporting, and event notifications so Plaspy can present live location, history, and alarms to users.

- Enables the tracker to identify itself and establish a session with the Plaspy endpoint
- Carries GPS position reports and basic vehicle telemetry such as ignition or diagnostic signals
- Delivers alert events such as anti disassembly notifications, tamper alerts, or low battery to the platform
- Facilitates periodic heartbeat or keepalive messages so the platform can monitor device online status
- Supports the data flows used for trace playback, geo fence events, and remote diagnostics

## How Plaspy Detects the Protocol

Plaspy receives device reports on a single shared endpoint and automatically determines the tracker protocol based on incoming traffic patterns and the device presentation. In most cases a GS21 correctly configured to report to Plaspy will be recognized without manual protocol selection inside the platform.

- Plaspy accepts device connections at the domain d.plaspy.com and the IP 54.85.159.138
- The platform uses port 8888 for all supported devices and device types
- Devices may be configured to connect using either UDP or TCP on port 8888 depending on device support
- Plaspy automatically detects the tracker protocol so manual selection is not normally required when the device sends data to the Plaspy endpoint
- Proper device configuration of server address and transport is the typical setup step for automatic detection to work

## Transport and Connection Context

Connection and transport describe how the GS21 reaches the Plaspy servers rather than the internal packet format. The GS21 OBD II form factor and on device settings determine whether it reports over UDP or TCP and how frequently data is sent.

- Devices may be configured to use UDP or TCP on port 8888 to reach Plaspy
- The Plaspy server endpoint is d.plaspy.com and the equivalent server IP is 54.85.159.138
- Plaspy uses port 8888 universally for device reporting across supported trackers
- Transport selection may be configurable on the device or via manufacturer tools and can affect delivery characteristics
- Network conditions and mobile carrier behavior can influence whether UDP or TCP is the more reliable option for a given deployment

## Protocol Compatibility Notes

- Firmware revisions on the GS21 can change available reporting options and feature flags that affect protocol behavior
- Hardware or assembly revisions may alter how certain signals are exposed via OBD II and thus how the device reports them
- Some manufacturer supplied configuration tools allow selecting UDP or TCP for the server transport on port 8888
- Differences in regional firmware or carrier provisioning can lead to slight variations in event naming or frequency of reports
- Always validate transport settings and server address when provisioning devices to ensure they point to d.plaspy.com or 54.85.159.138 on port 8888
- Confirm feature availability such as built in battery reporting, anti disassembly alarms, and diagnostic outputs against official WanWay documentation

## Why Protocol Understanding Matters

A practical understanding of the GS21 communication protocol helps ensure successful installation, reliable reporting, and effective troubleshooting when devices are used with Plaspy. Knowing how the device connects and what to expect from its reports reduces integration friction and improves operational visibility.

- Helps verify that devices are pointing at the correct Plaspy server address and transport
- Assists in diagnosing connectivity issues that may be caused by carrier networks or transport selection
- Improves expectations for feature availability such as geofence reporting and tamper alerts across firmware versions
- Guides testing for device online status, heartbeat intervals, and historical trace uploads
- Supports smoother rollout and scaling across a fleet by clarifying common variables that affect reporting

## Why Use Plaspy with This Protocol

Using the WanWay GS21 with Plaspy gives organizations a streamlined way to collect vehicle location, status, and alert information from an OBD II form factor tracker. Plaspy’s single endpoint approach and automatic protocol detection simplify device onboarding and reduce the need for manual protocol selection, letting teams focus on operations and analytics rather than low level parsing.

If you want to learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and installation guidance for the WanWay GS21 please confirm current information on the manufacturer site https://www.wanwaytech.net/. Protocol support and firmware behavior can change over time so verifying device specifics with the manufacturer documentation is recommended.
