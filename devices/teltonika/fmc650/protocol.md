---
slug: /teltonika/fmc650/protocol
id: fmc650-protocol
sidebar_label: Protocol
title: Teltonika - FMC650 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Teltonika FMC650 with Plaspy for reliable GPS and vehicle telematics reporting
keywords:
  - Teltonika FMC650 protocol
  - Teltonika FMC650 GPS protocol
  - FMC650 Plaspy compatibility
  - FMC650 communication protocol
  - Teltonika vehicle tracker protocol
  - FMC650 telematics protocol
  - FMC650 CAN telemetry
  - FMC650 tachograph integration
  - Plaspy device protocol
  - Fleet tracking FMC650
---

# Teltonika - FMC650 Protocol

This page covers the public protocol context for using the Teltonika FMC650 tracker with Plaspy. It explains how the tracker communicates with the Plaspy backend in broad, non sensitive terms while using the FMC650 description as the basis for practical integration notes. The focus is on connection and protocol context rather than low level packet formats.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available messages can vary by FMC650 firmware version, hardware revision, regional variant, and manufacturer implementation, so this guide emphasizes general compatibility and connection details rather than firmware specific internals.

## Protocol Overview

The tracker reporting protocol is the channel the FMC650 uses to deliver GNSS positions, CAN telemetry, serial sensor data, tachograph information, and status messages to Plaspy. In practice the protocol identifies the device, conveys location and sensor values, and allows Plaspy to correlate incoming reports with a fleet record and telemetry dashboards.

- The protocol enables device identification and session context so Plaspy can map incoming traffic to the correct vehicle or asset.
- It carries GNSS fixes and time stamps that Plaspy uses for mapping and timeline reconstruction.
- Telemetry from CAN, RS232/RS485, and tachograph interfaces is reported over the same connection to provide richer vehicle insights.
- Status and heartbeat messages allow Plaspy to monitor device health and connectivity trends.
- The protocol is transport agnostic at a high level; the FMC650 can send the same logical reports over either UDP or TCP depending on configuration.

## How Plaspy Detects the Protocol

Plaspy receives reports from trackers at a shared endpoint and uses protocol detection logic to route and interpret those reports automatically. For most integrations you do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint using the common settings.

- Plaspy listens on a single port across all supported devices to simplify device configuration.
- The public Plaspy server endpoint for device reporting is d.plaspy.com and the known server IP is 54.85.159.138, using port 8888.
- Plaspy automatically detects the tracker protocol when the FMC650 or other device begins reporting to the Plaspy endpoint.
- Users typically configure the FMC650 to point to d.plaspy.com or the server IP and to use the shared port to enable automatic detection.
- Because Plaspy performs protocol detection, manual protocol selection inside the Plaspy back end is rarely required when the device is correctly configured to report to the platform.

## Transport and Connection Context

Connection and transport choices affect how the FMC650 delivers data but do not change the logical data the tracker reports. The FMC650 supports cell network reporting and can be set to use either UDP or TCP to reach Plaspy. Use consistent endpoint and port settings so Plaspy can accept and process reports.

- The FMC650 may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can be pointed at the Plaspy DNS name d.plaspy.com or the server IP 54.85.159.138 depending on local configuration preferences.
- Plaspy uses the same port across all supported devices to streamline deployments and reduce configuration errors.
- Choose UDP for lower overhead and sometimes lower latency, or TCP for connection oriented delivery where the device and network support it.
- Confirm any carrier or APN level restrictions that might affect UDP or TCP reachability before wide scale rollout.

## Protocol Compatibility Notes

- Firmware versions may change which messages or fields the FMC650 includes in reports; verify firmware release notes for protocol changes.
- Regional hardware variants can affect available cellular bands and may influence which transport behaviors are recommended by the manufacturer.
- Manufacturer configuration tools and menus may expose transport choices and server settings; use those tools to set d.plaspy.com or the Plaspy server IP and port 8888.
- When integrating CAN, tachograph, or serial devices, confirm which telemetry channels your firmware exposes to the reporting protocol.
- Network environment and carrier settings can alter delivery characteristics for UDP versus TCP; test both transports where practical.
- Always validate device appearance in Plaspy after configuration to confirm automatic protocol detection and data parsing.

## Why Protocol Understanding Matters

A practical understanding of the FMC650 communication protocol helps ensure reliable device setup, faster troubleshooting, and consistent telemetry in Plaspy. Knowing which connection settings the tracker uses and how Plaspy detects the protocol reduces setup time and helps diagnose common connectivity issues.

- Ensures the device is pointed at the correct Plaspy endpoint so automatic detection can occur.
- Helps isolate whether issues are network, transport, or firmware related during deployment.
- Guides selection between UDP and TCP based on network conditions and reporting needs.
- Clarifies expectations for which telemetry channels (CAN, RS232/RS485, tachograph) will be visible in Plaspy.
- Reduces downtime by enabling repeatable configuration steps for large fleet rollouts.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC650 with Plaspy provides a straightforward path to capture high quality GNSS fixes, vehicle diagnostics, tachograph data, and serial sensor readings into a single fleet platform. The FMC650’s rugged telematics interfaces and dual channel GNSS support make it well suited for heavy fleet, trailer, and specialized machinery use cases where continuous telemetry and compliance data are important.

To learn more about Plaspy and how it handles device reporting and fleet telemetry, visit https://www.plaspy.com. Please verify device specific protocol details, firmware behavior, and manufacturer implementation notes with the official Teltonika documentation at https://www.teltonika-gps.com/ since protocol support and firmware features can change over time.
