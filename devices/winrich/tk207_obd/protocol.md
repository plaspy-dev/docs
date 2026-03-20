---
slug: /winrich/tk207_obd/protocol
id: tk207_obd-protocol
sidebar_label: Protocol
title: Winrich - TK207 OBD Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Winrich TK207 OBD tracker with Plaspy for reliable vehicle tracking
keywords:
  - Winrich TK207 OBD protocol
  - TK207 OBD GPS protocol
  - Winrich TK207 OBD Plaspy compatibility
  - TK207 OBD tracking protocol
  - Winrich OBD tracker communication
  - TK207 OBD vehicle diagnostics
  - Winrich GPS tracker protocol
  - TK207 OBD OBDII tracker
  - Plaspy compatible devices
  - Fleet management TK207 OBD
---

# Winrich - TK207 OBD Protocol

This page describes the public protocol context for using the Winrich TK207 OBD tracker with the Plaspy platform. It focuses on how the device communicates general telemetry and OBD data to a backend server, what role the tracker reporting protocol plays in that flow, and what integrators and fleet managers should consider when connecting TK207 OBD devices to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides high level, non sensitive guidance and integration context rather than vendor command reference.

## Protocol Overview

The tracker reporting protocol is the device's language for delivering GPS positions, status updates, and vehicle OBD parameters to a remote server. For the TK207 OBD, the protocol enables the device to periodically or event driven send location and diagnostic data so that Plaspy can record, display, and alert on that information for fleet and vehicle monitoring.

- Carries positional telemetry and time stamped updates that Plaspy uses for mapping and history
- Transmits vehicle OBD parameters and diagnostic data when supported by the vehicle ECU
- Conveys event and alarm signals such as geofence, overspeed, ACC and power loss for real time monitoring
- Supports remote reporting over mobile networks using GPRS and can fall back to SMS for some management functions
- Allows the device to identify itself so Plaspy can associate incoming messages with the correct asset record

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports on a single, shared endpoint and port and applies automatic detection to match those reports to a device type. In typical setups you do not need to choose a protocol manually in Plaspy if the device is configured to send data to the Plaspy endpoint.

- Plaspy listens for device reports on the shared server endpoint d.plaspy.com
- The platform also accepts direct connections to the server IP 54.85.159.138
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol
- The TK207 OBD device may be configured to use either UDP or TCP to report to Plaspy
- When correctly pointed to the Plaspy endpoint, incoming messages are associated with the device record without manual protocol selection

## Transport and Connection Context

Connection and transport settings determine how the TK207 OBD reaches Plaspy over the mobile network. The device supports network reporting and may be configured to use a domain name or direct IP address depending on installer preference and device configuration options.

- Devices can target the Plaspy domain d.plaspy.com for hostname based routing
- Direct reporting to 54.85.159.138 is also supported where DNS is not used
- The TK207 OBD may be configured to use UDP or TCP on port 8888 for reporting to Plaspy
- Plaspy uses port 8888 for all supported devices so port consistency simplifies integration
- Choose TCP when reliable delivery is required and UDP when lower latency or lower overhead is preferred and supported by the device

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available fields; confirm firmware level when diagnosing differences
- Hardware revisions and vehicle ECU compatibility affect which OBD parameters are available from the tracker
- Manufacturer side settings and default server targets may vary by batch; verify or reconfigure the device server settings to point at Plaspy
- Transport choice (UDP vs TCP) must match the device configuration and any carrier NAT or firewall constraints
- Plaspy automatic protocol detection reduces the need to manually select a protocol inside the platform, but correct server address and transport are required
- Consult the device documentation and release notes for firmware specific protocol variations

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable initial setup, efficient troubleshooting, and sustained operation of TK207 OBD devices in Plaspy. Knowing what the device sends, how it connects, and what can vary with firmware and vehicle makes support and scale much easier.

- Confirms correct server and transport configuration for reliable reporting
- Helps interpret which OBD parameters are expected from a given vehicle and firmware
- Makes it easier to diagnose connectivity issues related to TCP UDP or carrier network behavior
- Aids in configuring alerting thresholds and data retention in Plaspy based on expected message cadence
- Supports planning for fleet scale deployment by clarifying device network behavior and data usage

## Why Use Plaspy with This Protocol

Using the Winrich TK207 OBD with Plaspy gives organizations a straightforward path to combine GPS location with vehicle diagnostic information for better visibility and operational oversight. The plug and play OBDII form factor reduces installation time, and when configured to report to Plaspy the tracker can feed routing, maintenance, and security workflows with timely data.

Learn more about Plaspy and how it works with compatible trackers at https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer site http://www.winrichgroup.com/en/ before finalizing deployments.
