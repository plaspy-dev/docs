---
slug: /tzone/tz_rd05/protocol
id: tz_rd05-protocol
sidebar_label: Protocol
title: TZone - TZ-RD05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TZone TZ RD05 RFID reader and how it communicates with Plaspy for device integration and monitoring
keywords:
  - TZone TZ RD05 protocol
  - TZone TZ RD05 RFID protocol
  - TZ RD05 protocol Plaspy
  - TZ RD05 communication protocol
  - TZone RFID reader protocol
  - TZ RD05 integration Plaspy
  - TZ RD05 device compatibility
  - TZone TZ RD05 tracking protocol
  - TZ RD05 protocol documentation
  - TZone protocol setup
---

# TZone - TZ-RD05 Protocol

This page describes the public protocol context for using the TZone TZ-RD05 with Plaspy. It focuses on how the device commonly communicates with a backend platform, the role of the reporting protocol, and practical integration considerations using Plaspy as the receiving service. The TZ-RD05 is a 2.4G RFID reader with RS485 and LAN interfaces, ceiling mount form factor, and features intended for asset and tag management across varied environments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page presents publicly safe protocol context rather than device internals.

## Protocol Overview

The communication protocol for the TZ-RD05 governs how the reader reports tag events and status to a backend and how the backend may issue configuration or health checks. For integration with Plaspy, the protocol's public role is to enable reliable transport of identification events, timestamps, and basic device state to the centralized platform so those events become usable for monitoring and operations.

- Provides a transportable representation of tag read events and reader state for ingestion by Plaspy
- Enables the device to present identification and status information so the platform can associate reads with assets
- Supports configuration and firmware update workflows at the device or local network layer when available
- Defines how the reader initiates and maintains a connection to a remote server for continuous reporting
- Allows the backend to correlate event timestamps, signal quality, and other metadata needed for operational use

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many device types using shared network settings and to automatically determine the correct protocol for each device that reports to the platform. When a TZ-RD05 is configured to send data to Plaspy, the platform matches incoming device traffic to supported protocol handlers so users typically do not need to select a protocol manually in Plaspy.

- Plaspy receives device traffic at the public endpoint d.plaspy.com and also accepts direct connections to 54.85.159.138
- Connections are accepted on port 8888 which Plaspy uses as the shared port for all supported devices
- Devices may be configured to use either UDP or TCP on port 8888 depending on device capabilities and network setup
- When a device properly reports to the Plaspy endpoint, the platform automatically detects the tracker protocol for ingestion
- Users usually only need to ensure the device is pointed to the Plaspy endpoint and that the chosen transport is allowed by local networking

## Transport and Connection Context

The TZ-RD05 provides LAN connectivity and may be integrated into an existing network so it can report events to a remote server. For communication with Plaspy, the practical connection context centers on network reachability and the transport selected on the device.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138
- Plaspy uses the same port for all devices so outbound network rules should allow traffic to port 8888
- Local interfaces such as RS485 are used for onsite integrations while LAN handles remote reporting to Plaspy
- Ensure that network firewalls and NAT allow the reader to initiate outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware editions can change message behavior and available fields; verify which firmware is running on your TZ-RD05 before relying on specific behavior
- Hardware revisions or model variants sometimes alter available interfaces or default transport settings
- Manufacturer side settings and default server endpoints may differ from site to site; confirm device configuration points to the Plaspy endpoint
- Select the transport mode (UDP or TCP) supported by both the device firmware and your network topology
- Use the device serial firmware upgrade path when available to apply fixes that impact protocol compatibility
- Validate behavior in a test environment before wide scale deployment to confirm Plaspy ingestion and event mapping

## Why Protocol Understanding Matters

Understanding the communication protocol helps operations and technical teams successfully set up devices, troubleshoot connectivity issues, and maintain long term reliability when feeding data into Plaspy. A clear grasp of how the TZ-RD05 reports tag reads and status enables faster incident resolution and more accurate device management.

- Reduces setup time by ensuring devices are pointed correctly to d.plaspy.com or 54.85.159.138 on port 8888
- Helps pinpoint network or transport related problems when devices fail to appear in Plaspy
- Supports informed decisions about firmware updates and hardware replacements that affect protocol behavior
- Enables correct mapping of reader events to assets and workflows inside Plaspy
- Improves reliability by aligning device configuration with platform expectations

## Why Use Plaspy with This Protocol

Integrating the TZone TZ-RD05 with Plaspy gives organizations a centralized platform for ingesting and using RFID reader events alongside other telemetry. Plaspy’s automatic protocol detection and shared connection settings simplify bringing networked readers online and reduce per device configuration work when multiple device types are present.

If you want to learn more about Plaspy and how it can collect and manage device data, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with TZone at http://www.tzonedigital.com/
