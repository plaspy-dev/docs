---
slug: /sinotrack/st_902l/protocol
id: st_902l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for SinoTrack ST-902L integration with Plaspy using shared server settings and transport options
keywords:
  - SinoTrack ST 902L protocol
  - ST 902L GPS protocol
  - SinoTrack Plaspy compatibility
  - ST 902L communication protocol
  - OBD II tracker protocol
  - 4G GPS tracker protocol
  - vehicle tracking protocol
  - fleet tracking Plaspy
  - GPS tracker server configuration
  - tracker alarm reporting
---

# SinoTrack - ST-902L Protocol

This page describes the public protocol context for using the SinoTrack ST-902L with the Plaspy platform. It focuses on how the device communicates at a high level, how to point the tracker at Plaspy, and what to expect from the shared connection settings that Plaspy offers. The goal is to provide practical protocol context while avoiding device internals or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy ingestion endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so configuration and troubleshooting should account for those variables.

## Protocol Overview

The protocol used by the ST-902L is the set of rules that govern how the tracker sends location, telemetry, and alarm data to a remote server. In practical terms for Plaspy integration, the protocol defines how the device identifies itself, reports position updates, and communicates event-driven alarms so Plaspy can display and act on the data.

- Enables the tracker to transmit GPS fixes and vehicle telemetry to a remote server for ingestion.
- Carries event notifications such as geo-fence breaches, over-speed, shock, and low battery to downstream systems.
- Provides device identification data so Plaspy can associate incoming messages with the correct asset.
- Supports configuration of server address and transport so the device can be pointed to Plaspy for immediate use.
- Allows fallbacks such as SMS for initial provisioning and APN setup where cellular data is not yet configured.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared ingestion endpoint and port for incoming tracker connections and uses that endpoint to detect the protocol automatically. When an ST-902L is configured to report to Plaspy, the platform can recognize the device type and map incoming data to the correct device record without manual protocol selection by the user.

- Point the device server settings to d.plaspy.com or the Plaspy ingestion address and the platform will accept reports.
- Plaspy uses the same port for all supported devices, simplifying device configuration across a fleet.
- When the device reports to the Plaspy endpoint, automatic detection aligns the incoming stream with Plaspy parsers and device records.
- Users typically do not need to choose a protocol inside Plaspy if the tracker is correctly configured to report to the Plaspy endpoint.
- Confirm device registration in Plaspy after pointing the ST-902L at the platform to ensure data appears as expected.

## Transport and Connection Context

The ST-902L can send data over cellular networks and supports common transport options. For Plaspy integration, you will configure the device to use the Plaspy server address and transport that match your deployment and network conditions.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 when direct IP is preferred for provisioning.
- Plaspy uses port 8888 for ingestion and maintains the same port across all supported devices for consistency.
- Choose UDP for lightweight reporting where supported, or TCP if a persistent connection and delivery behavior is preferred by the tracker.
- Ensure the device APN and SIM are active and that the carrier allows the selected transport to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences can change available commands, message frequency, or event reporting behavior; always note the device firmware when troubleshooting.
- Hardware revisions or regional variants may alter supported radio bands, transport options, or optional features.
- Manufacturer-side configuration methods such as SMS commands or an initial provisioning portal are often used to set APN, server address, and transport.
- Transport selection (UDP vs TCP) should match what the specific device firmware supports and what the carrier permits.
- Validate compatibility by confirming the device can reach d.plaspy.com or 54.85.159.138 on port 8888 and that reports appear in Plaspy after configuration.
- Keep a record of device IMEI and firmware version for support and long term fleet management.

## Why Protocol Understanding Matters

A clear understanding of how the ST-902L communicates helps with successful setup, reliable operation, and efficient troubleshooting when using Plaspy. Knowing which connection options and reporting behaviors the tracker uses reduces configuration errors and speeds diagnosis when data is not arriving as expected.

- Ensures correct APN and server settings are applied so data reaches Plaspy reliably.
- Helps choose the right transport mode and carrier settings for stable connectivity.
- Makes it easier to interpret event timing, heartbeat intervals, and alarm triggers in Plaspy.
- Reduces time spent in support by guiding firmware checks and configuration verification steps.
- Supports consistent fleet rollout by documenting the exact provisioning steps for each vehicle.

## Why Use Plaspy with This Protocol

Using the SinoTrack ST-902L with Plaspy gives fleet managers and vehicle owners a straightforward path to real-time tracking, alarm handling, and historical route analysis without extensive rewiring or custom server setup. The ST-902L’s OBD II form factor and SMS configuration options make it practical to provision devices and point them to Plaspy for immediate visibility across a fleet.

For more information about Plaspy and how the platform ingests and displays device data, learn more at https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer instructions, verify information with the SinoTrack official documentation at https://www.sinotrackgps.com/ as device implementations may change over time.
