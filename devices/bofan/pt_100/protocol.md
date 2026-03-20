---
slug: /bofan/pt_100/protocol
id: pt_100-protocol
sidebar_label: Protocol
title: Bofan - PT-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Bofan PT 100 tracker with Plaspy using shared connection settings
keywords:
  - Bofan PT 100 protocol
  - Bofan PT 100 GPS protocol
  - Bofan PT 100 communication protocol
  - Bofan PT 100 tracking protocol
  - PT 100 Plaspy compatibility
  - Bofan tracker protocol
  - PT 100 vehicle tracking
  - Bofan GPS tracker protocol
  - Plaspy device compatibility
  - vehicle GPS communication
---

# Bofan - PT-100 Protocol

This page describes the public protocol context for using the Bofan PT-100 GPS tracker with Plaspy. It summarizes how the tracker communicates at a high level, the role of device reporting, and the relevant connection settings used by Plaspy. The goal is to help technical users and integrators understand how the PT-100 can send location and alert data to Plaspy without exposing private implementation or firmware internals.

The PT-100 is a compact, low cost vehicle tracker that supports SMS and live tracking via GPRS, position logging for thousands of waypoints, SOS and geo fence alerts, low power and cut power notifications, overspeed alerts, and optional engine cut control. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly configured to report to the Plaspy endpoint. Exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so it is important to validate device-specific behavior against manufacturer documentation.

## Protocol Overview

The protocol is the set of rules and message exchanges that allow the PT-100 to report position, status, and alerts to a remote server like Plaspy. In practical terms, the tracker uses cellular connectivity to send periodic location updates, event notifications, and stored waypoints so Plaspy can display and process vehicle telemetry.

- Enables real time or interval location reporting from the PT-100 to a remote server for live tracking and history.
- Carries alert events such as SOS presses, geo fence triggers, overspeed, low battery, and power cut to the platform.
- Provides identification and device state information so Plaspy can associate messages with a specific PT-100 unit and maintain history.
- Supports both immediate event reporting and periodic batch uploads of logged waypoints for historical analysis.
- Allows remote control actions supported by the device, such as engine cut commands, when initiated through an integrated platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a shared endpoint and uses that input to automatically determine the tracker protocol in supported devices. For a properly configured PT-100 reporting to Plaspy, the platform generally recognizes the message type and maps it to the corresponding device record so users do not need to manually select a protocol in most cases.

- Plaspy listens on a single shared port for device traffic and uses the incoming connection to identify the device protocol automatically.
- When a PT-100 is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is usually unnecessary.
- Detection is based on the presence of recognizable device identifiers and message patterns in the incoming traffic, not on user configuration inside Plaspy.
- Proper device configuration to point at the Plaspy endpoint is the most common requirement for automatic detection to succeed.
- If detection does not occur, typical next steps are to verify device reporting settings, transport type, and manufacturer configuration for that unit.

## Transport and Connection Context

The PT-100 can report via cellular data and supports both UDP and TCP transport depending on device firmware and configuration. Plaspy accepts connections for supported devices at a single server endpoint and port so devices need to be configured to reach that address and transport for successful reporting.

- Devices may be configured to point to either the Plaspy domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy accepts device traffic on port 8888 and all devices supported by Plaspy use the same port.
- The PT-100 may be set to use either UDP or TCP on port 8888 depending on the unit settings and firmware capabilities.
- Confirm whether a specific PT-100 unit is configured for UDP or TCP when troubleshooting connectivity to Plaspy.
- Ensure the vehicle SIM plan and APN settings allow GPRS data so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message behavior and available features; two PT-100 units with different firmware may behave differently.
- Hardware revisions and factory settings may alter default transport (UDP versus TCP) or server address formats.
- Some features such as SMS reporting versus GPRS live tracking require different configuration paths and may not be fully equivalent for integration.
- Transport choice (UDP or TCP) affects how messages are delivered and should be configured to match the device capability and the chosen integration approach.
- Validate compatibility by testing a device on the Plaspy endpoint and reviewing manufacturer documentation for the exact firmware build.
- When possible, test in a controlled environment before deploying at scale to confirm event reporting, geofence alerts, and waypoint uploads function as expected.

## Why Protocol Understanding Matters

Understanding how the PT-100 communicates helps ensure reliable setup, effective troubleshooting, and predictable long term operation when integrated with Plaspy. Clear knowledge of the communication context reduces setup time and improves confidence that alerts and historical data will be delivered.

- Speeds initial configuration by ensuring the right server address, transport, and reporting mode are used.
- Helps isolate connectivity versus format issues when messages do not appear in Plaspy.
- Enables informed decisions about reporting intervals, battery management, and data usage for fleet deployments.
- Improves ability to verify that alerts such as SOS, geo fence, and power cut are received and handled by the platform.
- Supports lifecycle planning for firmware updates, device replacement, and compatibility checks.

## Why Use Plaspy with This Protocol

Using the Bofan PT-100 with Plaspy gives organizations a straightforward path to capture real time location, alerts, and historical waypoints from a cost effective vehicle tracker. Plaspy’s automatic protocol detection and shared connection settings simplify onboarding so teams can focus on monitoring, alerting, and operational workflows rather than low level protocol selection.

Plaspy provides a unified endpoint for device reporting and supports the common transport options used by the PT-100. To learn more about Plaspy and how it can be used with devices like the PT-100, visit https://www.plaspy.com. Protocol support and firmware behavior can change over time, so please verify the latest device specific protocol details and firmware information with the manufacturer at https://www.bofancloud.com/ before large scale deployment.
