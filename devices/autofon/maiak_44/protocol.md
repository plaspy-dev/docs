---
slug: /autofon/maiak_44/protocol
id: maiak_44-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon Маяк 4.4 and how it communicates with Plaspy for location reporting and basic telemetry
keywords:
  - AutoFon Маяк 4.4 protocol
  - AutoFon Маяк 4.4 GPS protocol
  - AutoFon Mayak 4.4 Plaspy compatibility
  - Mayak 4.4 tracking protocol
  - AutoFon tracker protocol
  - GPS tracker communication AutoFon
  - Mayak 4.4 SMS GPRS reporting
  - AutoFon vehicle tracker integration
  - Mayak 4.4 telemetry protocol
  - Plaspy compatible trackers
---

# AutoFon - Маяк 4.4 Protocol

This page summarizes the public protocol context for using the AutoFon Маяк 4.4 tracker with Plaspy. It explains how this compact, low-power device transmits location and status information via SMS and periodic GPRS reporting and how those reports are ingested by Plaspy for mapping, alerts, and basic remote control workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the Маяк 4.4 can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, high-level communication context rather than firmware internals or private packet formats.

## Protocol Overview

The communication protocol for the Маяк 4.4 defines how the unit identifies itself to a remote server, reports GPS and LBS-based location, sends alarm and life-signal messages, and accepts control commands via SMS. In practice the device uses SMS plus interval GPRS packets to deliver usable location and telemetry to back-end services such as Plaspy.

- Enables periodic position and status reporting via GPRS packets and SMS messages suitable for intermittent reporting and long battery life.
- Carries basic telemetry such as power state, alarm input triggers, and life-sign/status notifications that Plaspy can display and alert on.
- Supports remote control by sending and receiving authorized SMS commands for functions like auxiliary channel control and audio monitoring.
- Allows device identification and basic session context so Plaspy can associate incoming reports with the correct monitored asset.
- Optimized for low data usage and long standby, making the protocol suitable for covert or low-maintenance deployments.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a shared endpoint and matches incoming traffic to known tracker behaviors. For the Маяк 4.4, users typically do not need to pick a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint and the device's firmware uses standard SMS/GPRS reporting modes.

- Plaspy listens on a shared domain and port for all supported devices; the Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The Plaspy platform uses the same port for all devices; the port is 8888 and Plaspy automatically detects the tracker protocol.
- When a device sends its periodic GPRS packet or an alarm SMS to the configured endpoint, Plaspy associates the connection with a device record and applies protocol detection.
- Users generally configure the tracker to report to the Plaspy endpoint; once reporting begins, protocol identification and parsing occur automatically.
- If a device is configured correctly but reports are not appearing, check device reporting settings, network connectivity, and authorized number configuration.

## Transport and Connection Context

The Маяк 4.4 can report using SMS and intermittent GPRS sessions. For GPRS packet reporting to Plaspy, the device may be set to use either UDP or TCP depending on the unit configuration and firmware capabilities. These transport choices affect how the device opens sessions to the Plaspy endpoint but do not change the high level data the tracker provides.

- Devices may be configured to send GPRS packets to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy server listens on port 8888; the device may use UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port, which simplifies device setup and network firewall rules.
- SMS remains an alternative path for alerting and remote control and is independent of GPRS transport selection.
- Network reliability, APN settings, and SIM configuration influence whether GPRS or SMS is used for a particular report.

## Protocol Compatibility Notes

- The Маяк 4.4 is compatible with Plaspy when configured to report via SMS or interval GPRS, but exact behavior can vary with firmware level.
- Different hardware revisions and firmware versions may add or remove optional fields, alter reporting intervals, or change command syntax.
- Transport selection (UDP vs TCP) can be configured on the device; choose the transport supported by the current firmware and your network environment.
- Some features described in manufacturer materials, such as remote audio monitoring or auxiliary channel control, rely on SMS command delivery rather than continuous data streaming.
- Verify APN settings, authorized SMS numbers, and life-signal intervals when commissioning devices to ensure reliable reporting to Plaspy.
- Always consult official AutoFon documentation for firmware-specific behaviors and configuration details.

## Why Protocol Understanding Matters

A practical understanding of how the Маяк 4.4 communicates helps installers and operators ensure reliable reporting, efficient battery use, and timely alerting in Plaspy. Knowing what to expect from the device protocol makes troubleshooting faster and helps align device settings with operational needs.

- Helps choose appropriate reporting intervals and balance battery life with location freshness.
- Aids in diagnosing missing reports by distinguishing SMS failures from GPRS session issues.
- Clarifies which functions use SMS versus GPRS so control commands and audio monitoring are issued correctly.
- Ensures correct APN and transport configuration so the device reaches the Plaspy endpoint reliably.
- Supports planning for firmware or hardware differences across device batches and fielded units.

## Why Use Plaspy with This Protocol

Using the AutoFon Маяк 4.4 with Plaspy is a practical option when you need discreet, long-life asset tracking with basic telemetry and remote control capabilities. Plaspy can ingest intermittent GPRS packets and SMS alerts from the device, display location on maps, create alert rules for alarm inputs and life-sign failures, and send authorized control commands by SMS when needed.

To learn more about Plaspy and how Plaspy works with devices like the Маяк 4.4, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration options, verify information on the manufacturer website https://www.autofon.ru/ as protocol support and firmware behavior can change over time.
