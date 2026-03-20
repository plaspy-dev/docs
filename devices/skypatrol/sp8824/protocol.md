---
slug: /skypatrol/sp8824/protocol
id: sp8824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP8824 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the SkyPatrol SP8824 and how it communicates with Plaspy for reliable personal tracking
keywords:
  - SkyPatrol SP8824 protocol
  - SkyPatrol SP8824 GPS protocol
  - SP8824 Plaspy compatibility
  - SkyPatrol tracker protocol
  - SP8824 communication protocol
  - SP8824 tracking protocol
  - personal GPS tracker protocol
  - asset tracker protocol
  - Plaspy device compatibility
  - GPS tracker telemetry
---

# SkyPatrol - SP8824 Protocol

This page summarizes the public protocol context for using the SkyPatrol SP8824 personal tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so integrators and technical users can understand the role of the tracker reporting protocol without exposing implementation internals. The SP8824 is a compact LTE Cat M1 personal tracker with an integrated GPS antenna, a 3 axis accelerometer for motion detection, and extended battery standby designed for discreet everyday monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. For Plaspy deployments, devices are typically pointed at the Plaspy server d.plaspy.com or its public IP 54.85.159.138 using port 8888. The SP8824 may be configured to use either UDP or TCP on port 8888 depending on device settings and carrier behavior. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by a GPS tracker defines how the device packages identification, location, motion, and basic telemetry for transmission to a server. For the SP8824, the device protocol enables the tracker to report position fixes, motion events from the accelerometer, and battery or status updates so Plaspy can present those events in its dashboard and alerting systems.

- Carries device identity and session context so incoming messages are associated with the correct tracker record.
- Transmits GPS position and timestamp information so Plaspy can reconstruct location history and recent movement.
- Reports motion and activity triggers from the 3 axis accelerometer to support alerts and inactivity monitoring.
- Conveys basic device status such as battery level and last seen time to enable health monitoring in Plaspy.
- Supports operation over cellular uplink so the SP8824 can deliver updates while conserving power through adaptive reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and port and uses that incoming data stream to determine the tracker protocol in use. In most cases a properly configured SP8824 will report to Plaspy without additional manual protocol selection inside the platform.

- Devices report to the Plaspy server domain d.plaspy.com or to the IP address 54.85.159.138.
- All Plaspy devices use the same server port, port 8888, simplifying device configuration.
- The tracker may be configured to use either UDP or TCP on port 8888 depending on device and network preferences.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint, reducing initial setup steps.
- If a tracker is not appearing, verify device reporting settings and that the device is pointing at the Plaspy endpoint and port.

## Transport and Connection Context

Connection and transport choices affect how the SP8824 reaches the Plaspy platform but do not change the high level role of the device protocol. The SP8824 supports cellular uplink and can be set to send messages using either UDP or TCP to Plaspy on port 8888.

- Plaspy accepts connections and messages at d.plaspy.com and the IP 54.85.159.138 on port 8888.
- The SP8824 may use UDP or TCP on port 8888 depending on provisioning, firmware options, and network conditions.
- Using UDP may reduce overhead for frequent small updates while TCP may be selected where reliability of delivery is preferred.
- Ensure the device APN and cellular provisioning permit outbound connections to the Plaspy server and port.
- Confirm any in network firewalls or carrier restrictions allow traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features; always check the device firmware level.
- Hardware revisions or regional variants may alter supported bands or default transport settings that affect reporting.
- Manufacturer configuration commands and provisioning methods may differ across SP8824 units and firmware builds.
- Transport choice between UDP and TCP may require matching settings on the device and a network path that supports the selected protocol.
- Plaspy automatically detects the protocol but correct device addressing to d.plaspy.com or 54.85.159.138 and port 8888 is required for successful detection.
- Validate device behavior in a controlled test before broad deployment to ensure expected reporting cadence and event mapping.

## Why Protocol Understanding Matters

Understanding how the SP8824 communicates helps with reliable initial setup, efficient troubleshooting, and long term maintenance of devices on Plaspy. Knowing what the tracker sends and how it connects reduces setup time and improves operational confidence.

- Allows quicker diagnosis when devices do not appear in Plaspy by narrowing checks to addressing and transport.
- Helps plan battery and reporting intervals to balance update frequency against power consumption.
- Supports correct mapping of accelerometer events and telemetry to Plaspy alerts and workflows.
- Facilitates firmware update planning and verifying that critical fields remain compatible after updates.
- Reduces time to integrate new units or regional hardware variants by clarifying common network and addressing requirements.

## Why Use Plaspy with This Protocol

Pairing the SkyPatrol SP8824 with Plaspy provides a straightforward path to real time location, motion alerts, and basic telemetry for personal and small asset monitoring. Plaspy normalizes incoming SP8824 data so caregivers, families, and small organizations can view position history, receive entry and exit notifications, and monitor device health without managing low level protocol details.

To learn more about how Plaspy supports devices like the SP8824, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer website https://www.skypatrol.com/ before large scale deployment.
