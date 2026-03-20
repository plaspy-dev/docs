---
slug: /xexun/tk_102/protocol
id: tk_102-protocol
sidebar_label: Protocol
title: Xexun - TK-102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting the Xexun TK 102 tracker with Plaspy using shared Plaspy connection settings
keywords:
  - Xexun TK 102 protocol
  - Xexun TK 102 GPS protocol
  - TK 102 communication protocol
  - TK 102 tracking protocol
  - Xexun tracker Plaspy compatibility
  - GPS tracker protocol Plaspy
  - vehicle tracking Xexun TK 102
  - TK 102 GPRS SD backup
  - Xexun firmware variations
  - Plaspy device integration
---

# Xexun - TK-102 Protocol

This page describes the public protocol context relevant to using the Xexun TK-102 tracker with Plaspy. It focuses on how the tracker communicates with a remote server, what role the communication protocol plays in reliable reporting, and which shared connection settings Plaspy expects for receiving data from this model.

Plaspy uses a common endpoint and port across supported devices and automatically detects the tracker protocol when a device reports to the service. Exact behavior of the TK-102 on the wire can vary by firmware, hardware revision, and manufacturer implementation, so the guidance here is intentionally high level and non proprietary while highlighting the shared Plaspy connection settings that make integration straightforward.

## Protocol Overview

The protocol used by a TK-102 tracker defines how the device identifies itself, reports position and status, and sends alerts or telemetry so a fleet platform like Plaspy can make the data actionable. This page does not reproduce manufacturer protocol internals but explains the practical role the communication protocol plays in day to day integration and operation.

- Enables the tracker to send GPS locations and status updates to a remote server so Plaspy can display and store positions.
- Carries device identity information that allows Plaspy to map incoming messages to a specific TK-102 unit.
- Transports alert and telemetry events such as SOS, movement, overspeed, and low battery so rules and notifications can be triggered.
- Can be configured to use the device SD memory as a backup for GPRS data when network connectivity is intermittent.
- Supports both real time reporting and on demand polling modes depending on device configuration and firmware capabilities.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections and data on a single shared endpoint and port for all supported trackers, and it automatically identifies the tracker protocol from the incoming data. In most cases the user does not need to manually select a protocol inside Plaspy when the device is pointed to the correct Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the public Plaspy server.
- The Plaspy server public IP is 54.85.159.138 for direct IP configuration if preferred.
- Plaspy listens on port 8888 for tracker traffic and all devices use the same port across the platform.
- Devices compatible with Plaspy may be configured to report using either UDP or TCP on port 8888 depending on device support and user preference.
- When a properly configured TK-102 reports to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will automatically detect and associate the device protocol for processing.

## Transport and Connection Context

Connection choices such as UDP versus TCP, and whether the device reports to a domain name or direct IP, affect how the TK-102 reaches Plaspy but do not change the fact that Plaspy uses a single shared port and automatic protocol detection for incoming data. The following points summarize practical connection context for TK-102 devices.

- The TK-102 may be set to report to d.plaspy.com or directly to 54.85.159.138.
- Port 8888 is the inbound port Plaspy exposes for device connections and reporting.
- Devices can be configured to use UDP or TCP on port 8888 depending on firmware and user configuration options.
- Using the domain name d.plaspy.com allows devices to adapt to backend IP changes without reconfiguration on the device.
- If network or carrier restrictions require it, configuring the device to use the explicit IP 54.85.159.138 is also supported.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions of the TK-102 can change how certain commands and reports behave; verify behavior on the specific unit you are deploying.
- Some TK-102 features such as SD card GPRS backup, mode switching, and voice surveillance depend on firmware and may alter reporting patterns.
- Whether the device uses UDP or TCP can affect delivery characteristics and should be chosen based on network reliability and device capability.
- Manufacturer side variations in default settings or SMS configuration commands may require updating device settings to point to d.plaspy.com or 54.85.159.138 on port 8888.
- Confirm any manufacturer imposed limits on authorized numbers, message length, or telemetry intervals when planning large deployments.
- Always validate that the device is sending its identifier so Plaspy can match incoming data to the correct device record.

## Why Protocol Understanding Matters

Understanding the TK-102 communication protocol at a high level helps with setup, troubleshooting, and ongoing operations when integrating devices with Plaspy. Knowing the transport context and common variability across firmware makes it easier to get devices reliably reporting.

- Simplifies initial configuration by ensuring the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport selection.
- Helps diagnose reporting gaps by distinguishing network, transport, and device configuration causes.
- Informs decisions about using SD card data backup and non server based options when GPRS connectivity is unreliable.
- Supports predictable alerting and rule definition in Plaspy when you know which events the device is capable of emitting.
- Reduces deployment time by clarifying how device identity and status are communicated to the platform.

## Why Use Plaspy with This Protocol

Using the Xexun TK-102 with Plaspy gives organizations a practical way to centralize location, alerting, and historical position data from small trackers. Plaspy's automatic protocol detection and shared connection settings reduce the setup burden for individual devices, while platform features enable monitoring, geofence alerts, and operational oversight across a fleet.

If you want to learn more about how Plaspy handles device reporting and platform capabilities, visit https://www.plaspy.com. For the most current and device specific protocol and firmware details, please verify information on the manufacturer site https://www.xexun.com/ since protocol support and firmware behavior can change over time.
