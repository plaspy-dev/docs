---
slug: /lk_gps/tk905/protocol
id: tk905-protocol
sidebar_label: Protocol
title: LK-GPS - TK905 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for LK-GPS TK905 and how it communicates with Plaspy for reliable vehicle tracking and alerting
keywords:
  - LK-GPS TK905 protocol
  - LK-GPS TK905 GPS protocol
  - TK905 tracking protocol
  - LK-GPS Plaspy compatibility
  - TK905 communication protocol
  - GPS tracker TK905 Plaspy
  - vehicle tracking TK905
  - TK905 protocol integration
  - TK905 firmware compatibility
  - TK905 tracker protocol
---

# LK-GPS - TK905 Protocol

This page describes the public protocol context for using the LK-GPS TK905 tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, what connection settings are used for Plaspy ingestion, and practical considerations for successful deployment without exposing device internals or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior for the TK905 can vary by firmware version, hardware revision, and manufacturer implementation, so this page aims to explain the communication role and integration context rather than device firmware specifics.

## Protocol Overview

The TK905 communicates position, movement events, and alarms to an online server so a platform like Plaspy can ingest and present that data. The protocol governs how the device reports identity, GPS coordinates, timestamps, and event notifications so received messages are usable by a tracking service.

- Enables the tracker to report location and event data to remote servers for mapping and history.
- Carries device identity and status information so Plaspy can attribute messages to the correct tracker.
- Delivers alarm and telemetry signals such as overspeed or shock events for alerting and notification workflows.
- Supports transport over standard mobile data channels so the tracker can reach Plaspy from cellular networks.
- Provides a consistent reporting mechanism that Plaspy can parse to display live location and event history.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a shared endpoint and port and automatically detects the tracker protocol from the incoming connection and payload. In most typical setups there is no need for the user to manually select a protocol inside Plaspy if the TK905 is configured to report to the Plaspy endpoint.

- Plaspy listens on a single, common port for all supported devices and automatically detects the tracker protocol.
- Devices pointed to the Plaspy endpoint will be identified and associated by their reported device ID or IMEI data.
- Users usually only need to configure the device to report to the Plaspy host to begin integration.
- If a tracker does not appear, check device reporting settings, APN, or whether the device is configured to use TCP or UDP to reach the Plaspy endpoint.
- Plaspy’s automatic detection reduces manual protocol selection and simplifies onboarding for mixed fleets.

## Transport and Connection Context

The TK905 can be configured to use UDP or TCP for reporting depending on device support and the chosen configuration. For Plaspy integration, devices should be pointed to the Plaspy server and port so reports arrive at the centralized ingestion endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the listening port is 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port so a single outbound setting works for mixed device fleets.
- Confirm the tracker APN, mobile data, and reporting interval to ensure messages can reach d.plaspy.com or 54.85.159.138 successfully.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change the exact message content and supported commands; verify behavior if reports fail to appear.
- Some TK905 units allow switching between UDP and TCP; choose the transport that matches the device capabilities and network conditions.
- Manufacturer-side variations in configuration commands or default settings may require SMS or local configuration to point the device to Plaspy.
- Validate the device reporting interval and power management settings to balance battery life and reporting frequency.
- Network restrictions or APN restrictions from the mobile provider can affect delivery of tracking messages.
- Always cross-check device behavior against the official manufacturer documentation when in doubt.

## Why Protocol Understanding Matters

Understanding how the TK905 communicates helps ensure reliable setup, accurate troubleshooting, and predictable long term operation when using Plaspy. Knowing which transport the device uses, how it identifies itself, and what events it reports lets administrators tune reporting intervals, alerts, and power settings to match operational needs.

- Ensures devices are correctly configured to report to the Plaspy endpoint d.plaspy.com and the correct port.
- Helps diagnose why a device may not appear in Plaspy due to APN, transport selection, or firmware differences.
- Allows optimization of reporting intervals to preserve battery life while maintaining required tracking granularity.
- Supports consistent mapping of device IDs to assets for fleet management and historical reporting.
- Reduces integration time by clarifying what the platform expects from incoming tracker messages.

## Why Use Plaspy with This Protocol

Using the TK905 with Plaspy gives organizations discreet, battery efficient tracking combined with a centralized platform for location visualization, alerting, and basic telemetry. Plaspy receives the device reports and presents them through maps and history tools so operations teams can monitor movement, respond to alarms like overspeed or shock, and maintain a concise audit trail for assets.

If you want to learn more about how Plaspy works with devices like the TK905 and see platform capabilities, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol and firmware information with the manufacturer at https://www.lk-gps.com.
