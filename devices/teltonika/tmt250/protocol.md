---
slug: /teltonika/tmt250/protocol
id: tmt250-protocol
sidebar_label: Protocol
title: Teltonika - TMT250 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika TMT250 and how it communicates with Plaspy for tracking and alerts
keywords:
  - Teltonika TMT250 protocol
  - Teltonika TMT250 GPS protocol
  - TMT250 Plaspy compatibility
  - Teltonika tracker communication
  - GPS tracker protocol guide
  - TMT250 Bluetooth LE integration
  - personal security GPS tracker
  - Plaspy device compatibility
  - tracking protocol overview
  - asset tracking protocol
---

# Teltonika - TMT250 Protocol

This page describes the public protocol context for using the Teltonika TMT250 with Plaspy. The TMT250 is an autonomous 2G mini GPS tracker designed for personal security, with features such as an emergency button, Bluetooth LE connectivity for external beacons and sensors, man down detection, and multiple sleep modes. The information here focuses on how the device communicates with Plaspy in non sensitive and operational terms to support setup and integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Public Plaspy connection details are: server domain d.plaspy.com, server IP 54.85.159.138, and port 8888. Devices may be configured to use either UDP or TCP on port 8888, and all devices in Plaspy use the same port.

## Protocol Overview

The protocol is the means by which the TMT250 reports location, status, events, and sensor data to a remote server such as Plaspy. At a high level the tracker uses its radio and network stack to establish connectivity, identify itself, and transmit the data required for monitoring and alerting. The protocol ties together GNSS fixes, cellular transport, BLE sensor inputs, and event triggers such as the emergency button or man down scenarios.

- Enables device identification and session setup so Plaspy can attribute incoming messages to the correct tracker.
- Carries GNSS position, time, and motion related events that Plaspy uses for display and geofencing.
- Transmits alarm and emergency events such as button press, man down, and no movement scenarios.
- Supports auxiliary sensor and BLE beacon data that the device can include in reports to Plaspy.
- Works over standard network transports so Plaspy can receive data reliably and provide alerts to users.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single public endpoint and port and inspects the incoming data to determine which tracker protocol is in use. This automatic detection simplifies configuration for most users: if the TMT250 is pointed to the Plaspy endpoint and using a compatible transport, Plaspy will identify the device and begin processing its reports.

- Plaspy listens on d.plaspy.com and 54.85.159.138 using port 8888 for device reports.
- The platform accepts both UDP and TCP connections on port 8888 so the device can use either transport.
- Because Plaspy uses the same port for all devices, users typically do not need to select a specific protocol inside Plaspy.
- Automatic detection reduces setup steps but depends on the device sending recognizable identification and event data.
- If a device is not detected automatically, confirming device settings and network reachability to d.plaspy.com or 54.85.159.138 is the first troubleshooting step.

## Transport and Connection Context

Connection context covers how the tracker reaches Plaspy and which network options are commonly used. The TMT250 supports cellular GPRS for data transfer and can be configured to report to Plaspy over either UDP or TCP. When configuring the device, point its reporting destination to the Plaspy endpoint so messages arrive on the single supported port.

- Devices may be configured to send data to the domain d.plaspy.com or the IP address 54.85.159.138.
- Plaspy receives data on port 8888 and accepts both UDP and TCP on that port.
- The TMT250’s BLE features (sensors and beacons) typically report locally to the device and are forwarded to Plaspy as part of the device’s network reports.
- Cellular connectivity and network operator behavior affect transport stability and should be considered during deployment.
- Verify APN and SIM configuration on the device so it can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- The TMT250 is compatible with Plaspy when configured to report to the Plaspy endpoint, but behavior can vary with firmware revisions.
- Bluetooth LE sensor reporting is handled locally by the device and then included in network reports; differences in BLE firmware can affect which sensor types are forwarded.
- Hardware revisions and module variants may introduce small protocol or feature differences; check the device settings after firmware updates.
- Transport selection between UDP and TCP can change delivery characteristics such as retransmission and ordering.
- Configuration methods like USB, Bluetooth, or FOTA can change device behavior; confirm settings after configuration or updates.
- Always validate critical features such as emergency button handling and man down events in a controlled environment before production use.
- Consult official Teltonika documentation for firmware specific notes and change logs.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure correct setup, faster troubleshooting, and consistent behavior over time. For devices like the TMT250 that provide safety alerts and sensor integration, knowing how and when data is transmitted to Plaspy improves reliability and operational confidence.

- Helps verify the device is pointing to the correct Plaspy endpoint and using port 8888 with the intended transport.
- Enables targeted troubleshooting when events such as emergency alerts or sensor reports do not appear in Plaspy.
- Informs decisions about reporting intervals and sleep modes to balance battery life and responsiveness.
- Clarifies how BLE sensor data and local events are represented in platform reports.
- Supports validation after firmware updates or configuration changes to confirm expected behavior.

## Why Use Plaspy with This Protocol

Using the Teltonika TMT250 with Plaspy gives organizations and individuals a straightforward way to receive location updates, emergency alerts, and sensor data in a single platform. Plaspy’s automatic protocol detection and unified port handling reduce the configuration burden, allowing users to focus on device placement, event policies, and alerting rules rather than low level transport details.

To learn more about Plaspy and how it can work with devices like the TMT250 visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions consult the official Teltonika documentation at https://www.teltonika-gps.com/ to verify behavior for your firmware and hardware revision.
