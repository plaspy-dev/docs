---
slug: /xexun/tk_103/protocol
id: tk_103-protocol
sidebar_label: Protocol
title: Xexun - TK-103 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xexun TK 103 GPS tracker and how it communicates with Plaspy servers for integration
keywords:
  - Xexun TK-103 protocol
  - Xexun TK-103 GPS protocol
  - TK-103 tracker Plaspy
  - Xexun tracker protocol
  - TK-103 communication protocol
  - Xexun GPS tracking
  - vehicle tracking TK-103
  - fleet management TK-103
  - Plaspy device compatibility
  - GPS tracker protocol Plaspy
---

# Xexun - TK-103 Protocol

This page describes the public protocol context for using the Xexun TK-103 GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in general terms, explains relevant connection settings, and highlights practical considerations for integration and troubleshooting without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to Plaspy. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides a high level, safe overview rather than firmware specific commands.

## Protocol Overview

The TK-103 communicates position, status, and alarm events to a remote server using the tracker reporting protocol implemented by the device firmware. That protocol defines how the tracker identifies itself, how regular location updates and alarms are reported, and how optional features such as remote monitoring and historical tracking are communicated to a backend platform like Plaspy.

- Enables the tracker to present identification and session information to the server so data can be associated with a device account.
- Carries periodic location reports and situational data such as movement, speed indicators, and geofence events.
- Transmits alarm and status notifications including SOS, low battery, vibration, and power loss to allow timely responses.
- Supports optional features such as remote monitoring, SD card data upload, and dual SIM switching depending on device firmware.
- Provides the data Plaspy needs to store, display, and analyze location history and real time telemetry for fleet and asset monitoring.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports from many tracker models and automatically detects the tracker protocol when data arrives at the Plaspy endpoint. In most cases, users only need to configure the device to report to Plaspy and Plaspy will determine the correct handler for incoming messages.

- Devices should be pointed to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy listens on a single, shared port for all devices to simplify device configuration.
- The port used by Plaspy for all devices is 8888, and Plaspy automatically detects the tracker protocol once data is received.
- When a device is correctly reporting, users typically do not need to select a protocol manually inside Plaspy.
- Proper device identification and consistent reporting intervals help Plaspy classify and process tracker messages reliably.

## Transport and Connection Context

The TK-103 can be configured to send reports over either UDP or TCP depending on the device firmware and user configuration. Understanding the transport and destination settings is important for correct device routing to Plaspy and for network configuration in corporate or cellular environments.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the Plaspy server domain d.plaspy.com or to the IP address 54.85.159.138 as the reporting endpoint.
- All devices in Plaspy use the same port to simplify configuration and reduce setup errors.
- Selecting UDP versus TCP affects delivery behavior and may be controlled by the tracker configuration or SIM provider network.
- Ensure any firewalls or carrier settings allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and behavior; verify firmware level when troubleshooting integration.
- Hardware revisions or optional modules on a TK-103 can alter feature availability such as SD card logging or remote cut off functions.
- Manufacturer side settings and default APN or SMS configuration can affect whether the device reports successfully to a remote server.
- Transport selection between UDP and TCP may be limited by device firmware or local network restrictions.
- Dual SIM and automatic network switching on the TK-103 can improve coverage but may introduce additional testing paths for reliable reporting.
- Always validate compatibility against official manufacturer documentation for the exact hardware and firmware version in use.

## Why Protocol Understanding Matters

A practical understanding of the TK-103 reporting protocol helps installers and administrators set up devices correctly, diagnose connectivity issues, and interpret the data seen in Plaspy. Knowing the communication context reduces time to operational readiness and improves long term reliability.

- Ensures devices are configured to point to d.plaspy.com or 54.85.159.138 and to use port 8888 so Plaspy can receive reports.
- Helps distinguish transport issues from protocol or firmware related behavior when messages are not arriving.
- Guides decisions about using UDP or TCP based on network conditions and firmware support.
- Supports correct mapping of device alarms and event types to Plaspy alerting and reporting workflows.
- Reduces configuration errors by aligning device reporting intervals and identification settings with Plaspy expectations.

## Why Use Plaspy with This Protocol

Using the Xexun TK-103 with Plaspy gives organizations a practical path to real time visibility and historical tracking for vehicles and valuable equipment. Plaspy accepts reports from the tracker at the shared Plaspy endpoint and port, automatically detects the device protocol, and surfaces location, alarms, and status for operational monitoring and fleet management.

If you want to learn more about Plaspy and how the platform works with devices like the TK-103, visit https://www.plaspy.com. For the most current protocol specifics, firmware notes, and device manuals, please verify details with the manufacturer at https://www.xexun.com/.
