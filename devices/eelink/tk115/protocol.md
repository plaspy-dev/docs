---
slug: /eelink/tk115/protocol
id: tk115-protocol
sidebar_label: Protocol
title: EElink - TK115 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for EElink TK115 communication with Plaspy for reliable fleet tracking and telemetry
keywords:
  - EElink TK115 protocol
  - EElink TK115 GPS protocol
  - TK115 Plaspy compatibility
  - TK115 communication protocol
  - TK115 tracking protocol
  - EElink tracker protocol Plaspy
  - GPS tracker protocol integration
  - vehicle tracking TK115
  - fleet management EElink TK115
  - tracker telemetry protocol
---

# EElink - TK115 Protocol

This page describes the public protocol context for using the EElink TK115 tracker with Plaspy. It explains how the tracker communicates at a high level, what to expect when integrating the device into Plaspy, and which connection settings are commonly used for successful reporting and monitoring.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical integration guidance rather than firmware internals.

## Protocol Overview

The TK115 uses a device reporting protocol to deliver location, status, and alarm data to a central server. In practice this protocol governs how the device identifies itself, when it sends position updates and events, and how Plaspy receives and interprets that information for tracking and alerting.

- Enables the tracker to send GPS and LBS coordinates plus basic telemetry such as ACC/ignition and battery state.
- Carries alarm events such as displacement, vibration, geofence, and speed violations to downstream systems.
- Provides a stable channel for remote parameter updates and optional remote control actions when supported by the device.
- Bridges the tracker and Plaspy so telemetry can be presented in dashboards, reports, and automation workflows.
- Abstracts device-specific reporting details so Plaspy can ingest usable data across multiple tracker models.

## How Plaspy Detects the Protocol

Plaspy operates a single public endpoint that receives device reports and automatically identifies the tracker protocol from incoming messages. When a TK115 is configured to report to Plaspy, the platform will examine the incoming connection and use its detection capabilities to map the device to the correct processing logic.

- Devices should be configured to report to d.plaspy.com or to the Plaspy server IP address 54.85.159.138.
- Plaspy listens on port 8888 for incoming tracker connections and uses the same port for all supported devices.
- The device may be set to use UDP or TCP on port 8888 depending on device support and configuration.
- In most cases the user does not need to manually select a protocol inside Plaspy if the tracker is correctly pointed at the Plaspy endpoint.
- Automatic detection reduces setup steps and helps accommodate a variety of tracker models and firmware variations.

## Transport and Connection Context

The TK115 can be configured to communicate over standard cellular data links and typically supports both UDP and TCP reporting modes. Choosing the right transport and ensuring the tracker points to the Plaspy endpoint are key steps for reliable connectivity.

- Point the device at the Plaspy domain d.plaspy.com or at the server IP 54.85.159.138 as an alternative target.
- Configure the tracker to use port 8888 for reporting; Plaspy uses the same port for all devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on the tracker firmware and operator preference.
- Ensure mobile data connectivity and APN settings on the device are valid so the tracker can reach the Plaspy endpoint.
- Verify that carrier or network APN firewalls do not block outbound UDP or TCP traffic to port 8888.

## Protocol Compatibility Notes

- Firmware differences can change message timing, optional fields, or available alarms between device revisions.
- Hardware revisions or optional accessories such as relays and extra sensors may expose additional telemetry not present on all units.
- Transport selection between UDP and TCP can affect reliability and retransmission behavior; choose the mode supported by your fleet and device firmware.
- Manufacturer remote configuration capabilities vary; some parameters may be adjustable over the air while others require local setup.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.
- Confirm that any manufacturer supplied setup instructions are followed to ensure proper format of the first report so Plaspy can detect the device.

## Why Protocol Understanding Matters

Knowing how the TK115 communicates helps you set up devices correctly, troubleshoot connectivity or reporting issues, and plan for firmware or hardware variations in production deployments. A practical understanding of the reporting context reduces time to value and improves operational reliability.

- Helps ensure correct server entry and transport selection so devices reliably reach Plaspy.
- Speeds troubleshooting by narrowing issues to network, transport, or configuration layers rather than platform parsing.
- Clarifies expectations for what telemetry and alarms the device can deliver to Plaspy.
- Supports planning for firmware updates and hardware revisions in large deployments.
- Enables more predictable automation and alerting by aligning device behavior with platform workflows.

## Why Use Plaspy with This Protocol

Using the TK115 with Plaspy gives fleet operators and security teams centralized visibility into vehicle locations, ignition status, and alarm events. The TK115's compact form factor, ACC detection, optional relay, and backup power make it well suited to two wheelers and light vehicles, while Plaspy provides the ingestion, display, and automation capabilities operators need for tracking and incident response.

If you want to learn more about Plaspy and how it works with devices like the EElink TK115, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions, review the official EElink documentation at https://www.eelink.com.cn/ as device implementations and firmware behavior can change over time.
