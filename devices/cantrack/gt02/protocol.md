---
slug: /cantrack/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: CanTrack - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the CanTrack GT02 GPS tracker with Plaspy for real time vehicle tracking
keywords:
  - CanTrack GT02 protocol
  - CanTrack GT02 GPS
  - CanTrack GT02 tracking
  - CanTrack GT02 compatibility
  - CanTrack GT02 communication
  - CanTrack GT02 GPRS
  - CanTrack tracker Plaspy
  - GT02 vehicle tracking
  - GPS tracker protocol Plaspy
  - fleet tracking CanTrack GT02
---

# CanTrack - GT02 Protocol

This page documents the public protocol context for using the CanTrack GT02 tracker with Plaspy. It explains how the GT02 typically reports location and status using GSM GPRS and GPS sources, and how that reporting is interpreted at a server endpoint for live vehicle tracking and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact message behavior can vary by GT02 firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical integration considerations.

## Protocol Overview

The tracker communication protocol defines how the GT02 sends telemetry and event information to a remote server and how that data is represented for mapping and alerting. In general terms, the protocol enables the device to identify itself, send position and status updates, and transmit alarm or configuration events so Plaspy can present meaningful tracking data.

- Carries periodic location updates plus event driven reports such as overspeed or power loss
- Conveys device identity and timestamp information so Plaspy can associate messages with the right asset
- Supports both real time GPRS reporting to an internet server and SMS based location reporting for fallback scenarios
- Enables remote monitoring features such as live tracking and alert delivery when Plaspy receives and decodes reports
- Allows the GT02 to send diagnostic and status flags that help distinguish normal reports from alarm conditions

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically selects the appropriate protocol handler for reported devices. When a GT02 is configured to point at the Plaspy endpoint, users normally do not have to pick a protocol manually inside Plaspy.

- Plaspy accepts incoming reports on a shared server endpoint and uses device identification from reports to route messages
- All devices in Plaspy use the same port so device registration and onboarding are simplified
- Plaspy automatically detects the tracker protocol when messages arrive at the common endpoint
- If a device is configured to send to the Plaspy endpoint it should be recognized without manual protocol selection
- Proper device configuration at the tracker side is the most common requirement for successful detection

## Transport and Connection Context

The GT02 can transmit data via GPRS to an internet server using either UDP or TCP depending on the device configuration and firmware capabilities. Plaspy provides a single public endpoint and port where properly configured devices can deliver reports.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host
- Plaspy server IP is 54.85.159.138 which can be used as an alternative to the domain
- The port is 8888 and the device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port which simplifies device side settings
- Choose UDP or TCP on the GT02 according to the tracker firmware and network environment

## Protocol Compatibility Notes

- GT02 protocol behavior can differ across firmware releases so message timing and available fields may vary
- Hardware revisions or optional wiring variants can affect available sensors and event types reported by the device
- Some GT02 features such as SMS reporting and voice monitoring are separate transport paths from GPRS reporting and may require different configuration
- Selecting UDP or TCP on the device may change delivery characteristics but does not change the high level reporting purpose
- Validate the device reporting host and port are set to the Plaspy endpoint to enable automatic detection
- Always confirm compatibility details against manufacturer guidance for the specific GT02 unit and firmware

## Why Protocol Understanding Matters

Knowing how the GT02 communicates helps ensure reliable data delivery, accurate mapping, and timely alerts when the device is used with Plaspy. A practical understanding of the reporting behavior reduces setup time and improves troubleshooting when messages do not appear as expected.

- Ensures the tracker is configured to report to d.plaspy.com or the Plaspy server IP and correct port
- Helps diagnose why a device might not appear in Plaspy due to transport or server address misconfiguration
- Allows operators to match expected alarm types and reporting intervals to Plaspy alerts and dashboards
- Supports planning for data usage and connectivity when choosing between UDP and TCP reporting modes
- Simplifies field troubleshooting by focusing on common points of failure such as network registration and reporting host

## Why Use Plaspy with This Protocol

Using the CanTrack GT02 with Plaspy centralizes vehicle location, alarm handling, and historical tracking in a single platform. Plaspy’s shared endpoint approach reduces per device configuration complexity, and automatic protocol detection helps devices begin reporting with minimal manual mapping inside the platform.

If you want to explore how Plaspy works with trackers like the GT02, learn more at https://www.plaspy.com. For device specific protocol variants, firmware notes, and the latest technical details from the manufacturer, verify current information at https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
