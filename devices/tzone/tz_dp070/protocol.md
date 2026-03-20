---
slug: /tzone/tz_dp070/protocol
id: tz_dp070-protocol
sidebar_label: Protocol
title: TZone - TZ-DP070 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TZone TZ DP070 temperature monitor and how it communicates with Plaspy for reporting and device integration
keywords:
  - TZone TZ DP070 protocol
  - TZone TZ DP070 communication
  - TZ DP070 Plaspy compatibility
  - TZone temperature monitor protocol
  - TZ DP070 RF transmission
  - TZ DP070 RFID integration
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - TZ DP070 network configuration
  - TZone device documentation
---

# TZone - TZ-DP070 Protocol

This page provides a public overview of the communication context for the TZone TZ-DP070 temperature monitor when used with Plaspy. It explains the general role of the tracker reporting protocol, connection endpoints and transport options, and how the TZ-DP070 can send temperature and related sensor data to a Plaspy server for monitoring and analysis. Technical details here are intentionally high level and focus on integration context rather than manufacturer private internals.

The TZ-DP070 is a WinCE6.0 based temperature monitor that receives sensor data over RS485, supports RFID tag integration and 2.4G RF wireless transmission, and offers Ethernet and USB connectivity for network reporting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy accepts device reports to the shared endpoint at d.plaspy.com (54.85.159.138) on port 8888, and devices may be configured to use either UDP or TCP on that port. Exact protocol behavior can vary with firmware, hardware revision, and manufacturer implementation, so always validate device settings against current manufacturer documentation.

## Protocol Overview

The tracker protocol governs how the TZ-DP070 packages and transmits identifying information and sensor readings so that a platform like Plaspy can consume and present the data. At a high level the protocol covers device identity, sensor payloads (temperature, tag id, status), transport selection, and heartbeat or keepalive reporting to maintain an active session with the server.

- Enables the TZ-DP070 to identify itself and deliver temperature and RFID tag data in a machine readable form
- Carries periodic reports and event driven updates so Plaspy can display real time and historical values
- Signals device status and connectivity so Plaspy can monitor device health
- Works with the device network stack to transmit data over Ethernet or wireless interfaces toward the Plaspy endpoint
- Allows configuration commands from provisioning tools when supported by the device and firmware

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and automatically determines the appropriate tracker protocol based on the incoming connection and data pattern. In most cases devices that are correctly configured to report to Plaspy will not require manual protocol selection inside the platform.

- Plaspy listens for device reports at d.plaspy.com and at the IP address 54.85.159.138
- All devices supported by Plaspy send reports to the same port so server side detection can be applied consistently
- Devices may be configured to use either UDP or TCP when reporting to Plaspy on port 8888
- When the TZ-DP070 is pointed to the Plaspy endpoint, Plaspy applies automatic detection to interpret the incoming messages
- Users generally only need to ensure the device is configured to report to the Plaspy endpoint and use the correct transport protocol

## Transport and Connection Context

Connection and transport details are important for ensuring the TZ-DP070 can reach Plaspy reliably. The device supports multiple physical interfaces and may use different transport modes depending on configuration and firmware capabilities. The relevant Plaspy connection settings are consistent across devices to simplify setup.

- Devices may report to d.plaspy.com or directly to 54.85.159.138
- Plaspy accepts connections on port 8888 and this same port is used for all supported devices
- The TZ-DP070 can be configured to use UDP or TCP for reporting depending on the device configuration
- If the device has Ethernet available, configure the network parameters and reporting endpoint accordingly
- Wireless or intermediary gateways that forward RF sensor data should be configured to forward reports to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and optional features; always check the device firmware version when validating behavior
- Hardware variants and accessory modules such as RFID readers or RF gateways can affect how sensor data is exposed to the network
- Transport selection between UDP and TCP may affect reliability and NAT traversal depending on network topology
- Manufacturer tooling or provisioning interfaces might offer different configuration options across releases
- Plaspy’s automatic detection reduces the need for manual protocol selection but proper endpoint and transport configuration on the device is still required
- Validate compatibility and feature support against the official manufacturer documentation for your TZ-DP070 unit

## Why Protocol Understanding Matters

A practical understanding of the TZ-DP070 reporting protocol and connection context helps ensure reliable setup and simplifies troubleshooting when a device does not appear in Plaspy. Knowing what the device is expected to send and how it reaches the Plaspy endpoint reduces configuration errors and speeds up resolution.

- Confirms the device is pointed to the correct Plaspy endpoint and using the required transport
- Helps diagnose connectivity issues such as firewall or NAT problems that may block UDP or TCP on port 8888
- Allows assessment of firmware impact on available telemetry fields and reporting cadence
- Guides decisions when integrating RFID or external sensor data into the Plaspy data model
- Supports long term maintenance planning by tracking firmware and hardware revision differences

## Why Use Plaspy with This Protocol

Using Plaspy with the TZ-DP070 provides a centralized platform to collect, visualize, and act on temperature and tag data from deployments that require monitoring and historical records. Plaspy’s automatic protocol detection and consistent endpoint simplify initial setup so teams can focus on operations and data analysis rather than device parsing details.

If you want to learn more about Plaspy and how it can integrate with devices like the TZone TZ-DP070, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes with the manufacturer at http://www.tzonedigital.com/ as these details can change over time.
