---
slug: /skypatrol/sp1824/protocol
id: sp1824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP1824 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SkyPatrol SP1824 compatibility with Plaspy servers and recommended connection context
keywords:
  - SkyPatrol SP1824 protocol
  - SkyPatrol SP1824 GPS protocol
  - SP1824 Plaspy compatibility
  - SP1824 tracking protocol
  - SkyPatrol GPS tracker protocol
  - Plaspy device protocol
  - SP1824 vehicle tracking
  - SP1824 OBD II telemetry
  - SP1824 accelerometer events
  - Plaspy fleet tracking
---

# SkyPatrol - SP1824 Protocol

This page describes the public protocol context for using the SkyPatrol SP1824 tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in broad, non sensitive terms and what to consider when pointing devices at Plaspy servers for real time tracking, telemetry, and event reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once data arrives at the platform. Exact behavior can vary by SP1824 firmware version, hardware revision, and manufacturer configuration, so this page aims to explain the role of the communication protocol and connection context rather than device internals.

## Protocol Overview

The SP1824 reporting protocol is the set of rules and expectations that let the device send location, motion events, and optional vehicle telemetry to a remote server such as Plaspy. The protocol governs how the tracker identifies itself, reports GPS fixes and sensor events, and maintains a reliable connection over cellular networks so Plaspy can ingest and present the data.

- Enables the SP1824 to report GPS position, accelerometer events, and optional OBD II telemetry to Plaspy
- Carries identification data so Plaspy can associate messages with the correct device record
- Transmits event-driven updates such as ignition changes, motion start, and power loss notifications
- Provides the data Plaspy needs for mapping, alerts, and historical reporting without exposing firmware internals
- Operates over standard transport channels so devices can reach Plaspy from typical cellular networks

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a single public endpoint and automatically determines the correct protocol handler for most supported devices. When an SP1824 is configured to send data to Plaspy, the platform associates the incoming stream with the device and begins parsing messages according to the detected protocol format.

- Plaspy accepts connections at d.plaspy.com and at the public server IP 54.85.159.138
- The platform listens on port 8888 for tracker traffic and uses the same port for all supported devices
- Devices can be configured to use either UDP or TCP on port 8888 depending on device capability and network needs
- In typical setups the user does not need to pick a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint
- Automatic detection reduces manual configuration but relies on devices using consistent identification and reporting behaviors

## Transport and Connection Context

Connectivity context is an important part of successful SP1824 integration with Plaspy. The tracker uses cellular data to send messages to the platform, and transport selection affects delivery characteristics such as ordering and reliability. Understanding the acceptable endpoints and transport options helps ensure the device can reach Plaspy in production networks.

- SP1824 devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- The supported transport for reporting is TCP or UDP on port 8888 depending on device configuration and network constraints
- Plaspy uses the same port 8888 for all devices to simplify configuration and server discovery
- Choose UDP for lower overhead and slightly reduced latency where packet loss is acceptable; choose TCP when delivery confirmation and ordering matter
- Verify APN and outbound data settings on the SIM or device to allow traffic to reach the Plaspy endpoints from the cellular network

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional telemetry behaviors that affect parsing on the server
- Hardware variants or regional models may expose different OBD II parameters or sensor options
- Transport selection between UDP and TCP can affect how the device behaves under poor network conditions
- Optional features such as OBD II telemetry and accelerometer events may require different configuration steps on the device
- Always validate a sample device end to end to confirm that Plaspy is receiving and interpreting the expected fields
- Consult manufacturer documentation for firmware specific notes that may alter public protocol expectations

## Why Protocol Understanding Matters

Knowing how the SP1824 communicates helps keep installations predictable and improves troubleshooting when messages are not arriving or events are not showing as expected in Plaspy. A basic grasp of the protocol and connection context reduces setup time and supports long term operational reliability.

- Ensures devices are pointed to the correct Plaspy endpoint and port so reports arrive reliably
- Helps isolate transport related issues such as blocked ports, NAT behavior, or carrier restrictions
- Clarifies which telemetry fields should appear in Plaspy and which are optional or firmware dependent
- Supports faster troubleshooting of missing events such as power loss alerts or motion triggers
- Guides decisions about using UDP or TCP depending on network performance and reliability needs

## Why Use Plaspy with This Protocol

Using the SP1824 with Plaspy gives organizations a straightforward path to vehicle visibility and operational telemetry without complex per device configuration. The combination of GPS location, accelerometer events, optional OBD II telemetry, and the Plaspy platform delivers practical tracking, event detection, and reporting suited to fleet management, rental fleets, and anti theft monitoring.

Plaspy provides a single, consistent ingest point for SP1824 messages so devices configured to report to d.plaspy.com or 54.85.159.138 on port 8888 will generally be recognized and processed automatically. To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the most current device and firmware specific protocol details and installation guidance, please verify information with the manufacturer at https://www.skypatrol.com/
