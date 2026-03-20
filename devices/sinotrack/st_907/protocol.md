---
slug: /sinotrack/st_907/protocol
id: st_907-protocol
sidebar_label: Protocol
title: SinoTrack - ST-907 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SinoTrack ST-907 and guidance on configuring the tracker to report to Plaspy
keywords:
  - SinoTrack ST-907 protocol
  - SinoTrack ST-907 GPS protocol
  - ST-907 Plaspy compatibility
  - SinoTrack protocol
  - ST-907 tracker configuration
  - GPS tracker communication
  - ST-907 GPRS SMS reporting
  - Plaspy supported devices
  - vehicle tracking protocol
  - fleet tracking SinoTrack
---

# SinoTrack - ST-907 Protocol

This page provides a public protocol overview for using the SinoTrack ST-907 tracker with Plaspy. It covers the high level communication context, how the device reports position and alarms, and what to check when configuring the tracker to report to Plaspy. The focus is on publicly available, non sensitive information to help installers and fleet administrators understand how the ST-907 communicates with a third party platform.

The ST-907 reports position and alarms over SMS and GPRS and supports SMS configuration for APN and server IP and port. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always confirm device specific details with the official manufacturer documentation when preparing a deployment.

## Protocol Overview

At a high level the ST-907 communication protocol defines how the tracker identifies itself, reports GPS and alarm data, and accepts remote configuration when permitted. For integration with a third party server such as Plaspy, the key protocol role is delivering usable telemetry and event messages over the cellular data channel or SMS.

- Enables the tracker to report location, speed, and alarm events to an external server for processing and display.
- Allows remote configuration of server IP and port plus APN settings via SMS so the device can point to a chosen platform.
- Provides event reporting for overspeed, geofence, and relay based immobilizer actions that platforms can interpret as alarms.
- Uses cellular data reporting over GPRS as the primary transport with SMS as a fallback or configuration channel.
- Supplies an IMEI or device identifier so the receiving platform can associate incoming messages with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared ingestion endpoint and automatically detects the tracker protocol based on incoming connections and reported identifiers. In most cases you do not need to manually select a protocol inside Plaspy when the ST-907 is correctly configured to report to the platform.

- Plaspy accepts connections at the public domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies configuration across different tracker models.
- The Plaspy port for device reporting is 8888 and the device may be configured to use UDP or TCP on that port.
- When the ST-907 points to the Plaspy endpoint with the correct APN and server settings, Plaspy detects the protocol automatically.
- Typical setup requires only configuring the tracker to report to Plaspy rather than selecting a protocol in the platform UI.

## Transport and Connection Context

The ST-907 can use either GPRS data or SMS depending on configuration and availability. For real time tracking the device commonly uses GPRS to send reports to a configured server; SMS is useful for initial setup and as a fallback for critical alerts.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- The device may use UDP or TCP transport to communicate with Plaspy on port 8888 depending on device settings and network conditions.
- Plaspy uses the same port for all supported trackers which reduces per device configuration complexity.
- GPRS reporting is the primary method for real time telemetry while SMS can be used for initialization and emergency notifications.
- Verify APN, username, and password settings on the SIM so the tracker can attach to the carrier network and reach Plaspy.

## Protocol Compatibility Notes

- ST-907 compatibility with Plaspy depends on configuring the tracker to send data to Plaspy server IP or domain and the correct port.
- Firmware versions and hardware revisions can change message timing, available events, or configuration command formats.
- Manufacturer default servers or free platforms may be enabled by default; change the server IP and port via SMS to point the ST-907 to Plaspy.
- Transport choice TCP versus UDP may be selectable on the device and can affect behavior in different network environments.
- SMS based configuration commands are commonly used to set APN and server parameters on the ST-907 prior to GPRS reporting.
- Always validate device behavior after configuration and confirm that the tracker is visible in Plaspy before full deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, predictable reporting, and reliable alarm delivery when using the ST-907 with Plaspy. Clear protocol context reduces troubleshooting time and supports long term operational reliability.

- Helps identify whether connection issues are related to APN, transport selection, or server addressing.
- Enables correct initialization steps such as SMS commands to set APN and server IP and port for Plaspy reporting.
- Assists in interpreting alarm behavior and ensuring events like geofence and overspeed are forwarded as intended.
- Supports selection of the appropriate transport type and SIM plan for coverage and data reliability.
- Reduces deployment delays by clarifying what behaviors are device side versus platform side.

## Why Use Plaspy with This Protocol

Using the SinoTrack ST-907 with Plaspy provides a straightforward path to real time visibility, alerting, and operational monitoring for vehicles. The ST-907’s GPRS reporting and SMS configuration make it practical to point devices to a shared Plaspy endpoint and begin receiving location and alarm data without per device port changes.

To learn more about Plaspy and how the platform handles tracker ingestion and device management visit https://www.plaspy.com. For the most current device specific protocol commands, firmware notes, and SMS initialization syntax consult the manufacturer documentation at https://www.sinotrackgps.com/ since protocol support and firmware behavior can change over time.
