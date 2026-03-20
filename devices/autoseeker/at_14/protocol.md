---
slug: /autoseeker/at_14/protocol
id: at_14-protocol
sidebar_label: Protocol
title: Autoseeker - AT-14 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the Autoseeker AT-14 GPS tracker and how it communicates with Plaspy for vehicle and asset tracking
keywords:
  - Autoseeker AT-14 protocol
  - Autoseeker AT-14 GPS protocol
  - Autoseeker AT-14 communication protocol
  - Autoseeker AT-14 tracking protocol
  - Autoseeker GPS protocol
  - AT-14 tracker protocol
  - Autoseeker Plaspy compatibility
  - vehicle tracker AT-14 protocol
  - magnetic GPS tracker protocol
  - AT-14 2G tracking protocol
---

# Autoseeker - AT-14 Protocol

This page describes the public protocol context for using the Autoseeker AT-14 with Plaspy. It focuses on how the tracker reports location and status to the Plaspy platform in broad terms, helping technical users understand the role of the device reporting protocol when integrating the AT-14 into a fleet or asset monitoring workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so this page stays at a high level and encourages verification against manufacturer documentation when needed.

## Protocol Overview

The AT-14 communicates with a server to report position, movement, and basic status using the device's built in cellular connectivity. The protocol defines how the tracker identifies itself, when it sends updates, and which data fields are transmitted so a platform like Plaspy can convert raw messages into usable location and status records.

- Enables the tracker to transmit GPS location, time, and motion status to a remote server for processing.
- Provides device identification so Plaspy can associate incoming messages with the correct asset record.
- Encodes telemetry that allows monitoring of battery state, motion events, and periodic heartbeat reporting.
- Drives server side parsing so location points can be mapped, filtered, and stored by Plaspy.
- Supports configurable reporting intervals and event driven reports depending on tracker settings and firmware.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a single, shared endpoint and automatically recognizes the device reporting protocol so users generally do not need to select a protocol manually inside Plaspy. Proper device configuration to point to the Plaspy endpoint is the primary requirement for automatic detection.

- Plaspy listens for AT-14 reports on its public endpoint, d.plaspy.com, as well as the associated server address.
- All devices in Plaspy use the same port and Plaspy handles protocol differentiation automatically.
- When the AT-14 is configured to report to Plaspy, incoming messages are matched to the correct device record using identifiers provided by the tracker.
- Typical setup does not require manual protocol selection in Plaspy if the device is correctly pointed to the Plaspy endpoint and reporting.
- If a device does not appear, checking device reporting settings and firmware behavior is the first troubleshooting step.

## Transport and Connection Context

The AT-14 may use either UDP or TCP to send reports depending on the device configuration and firmware capabilities. Plaspy accepts connections on a single port to keep configuration straightforward across multiple tracker models.

- Devices may be configured to send data to d.plaspy.com or directly to the server IP 54.85.159.138.
- The transport may be UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy uses port 8888 for all supported devices to simplify setup and reduce per device configuration differences.
- When configuring the AT-14, ensure the correct transport type and endpoint are set so messages reach d.plaspy.com on port 8888.
- Network environments with restrictive firewalls should allow outbound UDP or TCP traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available telemetry fields; always check firmware release notes for differences.
- Hardware revisions or SKUs may implement slightly different reporting options or power management that affect message cadence.
- Manufacturer side configuration commands or provisioning steps may be required to enable reporting to a third party server like Plaspy.
- Transport selection (UDP vs TCP) must match the device configuration and any intermediary network constraints.
- Validate device identifiers and IMEI reporting to ensure Plaspy can associate incoming messages with the correct asset.
- Confirm battery and sleep mode settings, as long standby modes may alter how frequently the device reports.

## Why Protocol Understanding Matters

Understanding the AT-14 reporting protocol at a functional level helps ensure reliable setup, efficient troubleshooting, and predictable long term operation when the device is managed through Plaspy.

- Helps verify the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 so data reaches Plaspy.
- Allows administrators to match device configuration (UDP or TCP) to network policies and firewall rules.
- Supports faster troubleshooting by clarifying whether missing data is due to configuration, transport, or firmware differences.
- Assists in planning reporting intervals and battery life trade offs for long standby deployments.
- Improves confidence that automated detection in Plaspy will correctly identify the device when identifiers are present.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-14 with Plaspy provides a simple way to turn device reports into actionable location and status information for vehicle and asset monitoring. The AT-14’s compact design, strong magnetic mounting, long standby battery, and 2G connectivity make it suitable for a range of use cases from trailers and containers to light vehicles and equipment, and Plaspy handles the server side ingestion and visibility.

Learn more about how Plaspy works with GPS trackers and fleet devices at https://www.plaspy.com. For the most current, device specific protocol details, firmware notes, and manufacturer instructions, please verify information on the Autoseeker website https://autoseekergps.com/ as protocol support and firmware behavior can change over time.
