---
slug: /tk_star/tk750/protocol
id: tk750-protocol
sidebar_label: Protocol
title: TK-Star - TK750 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for TK-Star TK750 and Plaspy compatibility
keywords:
  - TK-Star TK750 protocol
  - TK750 GPS protocol
  - TK-Star GPS tracker
  - TK750 Plaspy compatibility
  - TK-Star TK750 communication
  - TK750 tracking protocol
  - TK-Star tracker integration
  - GPS tracker protocol Plaspy
  - vehicle tracking TK750
  - fleet management TK750
---

# TK-Star - TK750 Protocol

This page summarizes the public protocol context for using the TK-Star TK750 tracker with Plaspy. It explains how the device communicates in general terms, and how Plaspy accepts and processes tracker data for live tracking, alerts, and route history. The description here focuses on connectivity and protocol-level context that helps operators integrate the TK750 into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed to the Plaspy endpoint. Devices configured to report to d.plaspy.com or 54.85.159.138 on port 8888 can use either UDP or TCP depending on device support and configuration. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so consult manufacturer documentation for device specific details.

## Protocol Overview

The TK750 tracker uses a device communication protocol to deliver GNSS positions, status diagnostics, and alarm events to a server such as Plaspy. The protocol governs how the tracker identifies itself, reports telemetry, and signals events so Plaspy can display live data and trigger configured alarms or commands.

- Enables periodic and event driven transmission of location and telemetry from the TK750 to a backend server.
- Allows the tracker to include identification and status information so Plaspy can associate reports with the correct device.
- Carries alarm and event indicators such as vibration, geofence, overspeed, and immobilization states for timely handling.
- Supports both real time updates and historical route reconstruction when the server stores received messages.
- Operates over standard network transport so the tracker can work with Plaspy’s shared server endpoint.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a centralized endpoint and automatically detects the tracker protocol based on the incoming data and device behavior. When a TK750 is configured to report to the Plaspy server, no manual protocol selection is typically required inside the platform as long as the device sends data to the correct Plaspy endpoint.

- Plaspy accepts connections at the domain d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same server port, which is 8888.
- Plaspy can accept reports from devices using either UDP or TCP on port 8888 depending on tracker configuration.
- When properly configured, the user generally only needs to set the device to report to the Plaspy server and provide the device identifier to the Plaspy account.
- Automatic protocol detection reduces the need for manual mapping of every device type in many standard setups.

## Transport and Connection Context

Connection setup for the TK750 is handled at the network transport layer and determines how the device reaches the Plaspy server. The TK750 supports multiple cellular access technologies and can be configured to report over UDP or TCP to the shared Plaspy port. Pointing a device to the Plaspy address is a common first step for integration.

- Devices may be configured to report to d.plaspy.com or directly to the IP 54.85.159.138.
- The transport port used by Plaspy for all supported devices is 8888.
- TK750 units can use either UDP or TCP on port 8888 depending on firmware and configuration options.
- Using the correct server address and transport protocol is essential for the device to reach Plaspy and for automatic detection to operate.
- Network factors such as carrier NAT, APN settings, and device power cycles can affect connectivity and should be validated during setup.

## Protocol Compatibility Notes

- Firmware revisions can change the exact reporting behavior of the TK750 and influence compatibility with any cloud platform.
- Hardware variants and regional SKUs may include different radio support or feature sets that affect which transport options are available.
- Manufacturer configuration commands and default SMS settings can affect how a unit is pointed to the Plaspy server.
- Selecting UDP versus TCP can be driven by coverage, latency, and device firmware capabilities.
- Plaspy’s shared port and automatic protocol detection simplify integration, but you should confirm that the device is configured to send to d.plaspy.com or 54.85.159.138 on port 8888.
- Validate device IMEI and reporting interval settings when adding new units to avoid duplicate or missing data streams.
- Always cross check compatibility against the manufacturer documentation for model and firmware specific notes.

## Why Protocol Understanding Matters

Understanding how the TK750 communicates helps installers and fleet managers set up devices reliably, troubleshoot connectivity, and maintain consistent long term tracking performance in Plaspy. A clear grasp of transport and reporting behavior reduces setup time and improves incident response.

- Ensures devices are pointed to the correct Plaspy endpoint and use the supported transport on port 8888.
- Helps identify connectivity issues related to APN, carrier restrictions, or incorrect server settings.
- Improves alarm configuration by matching device event reports to platform rules and notifications.
- Supports predictable historical data retention and route playback on the Plaspy server.
- Aids in planning firmware updates and hardware rollouts by anticipating protocol variations.

## Why Use Plaspy with This Protocol

Using the TK750 with Plaspy provides an operationally efficient path for live tracking, anti-theft alerts, and fleet oversight. The device’s multi-constellation GNSS with LBS and Wi‑Fi assistance, combined with vibration sensing and immobilization features, maps well to Plaspy workflows for real-time monitoring and incident response. Organizations operating motorcycles, rental vehicles, light trucks, or mixed fleets can benefit from centralized visibility and configurable alerts.

To learn more about Plaspy and how it integrates with devices like the TK750 visit https://www.plaspy.com. For the most current protocol details, firmware notes, and device specific implementation guidance verify information with the manufacturer at https://www.tk-star.com/ since protocol support and firmware behavior can change over time.
