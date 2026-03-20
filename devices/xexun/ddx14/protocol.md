---
slug: /xexun/ddx14/protocol
id: ddx14-protocol
sidebar_label: Protocol
title: Xexun - DDX14 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Xexun DDX14 with Plaspy for reliable supervised tracking and alarm delivery
keywords:
  - Xexun DDX14 protocol
  - Xexun DDX14 GPS protocol
  - DDX14 Plaspy compatibility
  - DDX14 communication protocol
  - Xexun tracker protocol
  - GPS tracker protocol Plaspy
  - ankle bracelet tracking protocol
  - tamper proof GPS tracker
  - device integration Plaspy
  - tracking device telemetry
---

# Xexun - DDX14 Protocol

This page summarizes the public protocol context for using the Xexun DDX14 GPS Beidou ankle bracelet with Plaspy. It explains how the tracker communicates in general terms, what connection settings are used to reach Plaspy, and how protocol understanding supports reliable integration and operations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation. The information on this page is intended as public guidance; always consult manufacturer documentation for the most current, device specific details.

## Protocol Overview

The DDX14 reporting protocol lets the device deliver location, alarm, and status telemetry from the wearer to a central platform like Plaspy. In practical terms the protocol defines how the tracker assembles and transmits position fixes, tamper alarms, proximity events, and stored data so the server can ingest and act on those events for real time monitoring and historical playback.

- Enables the tracker to identify itself and report location and alarm telemetry to a remote endpoint.
- Carries tamper and strap loop alarms so Plaspy can generate immediate alerts and voice prompts.
- Supports blind zone storage and retransmit so offline data is preserved and forwarded after network recovery.
- Transmits fused positioning data that may include GPS, Beidou, WiFi and LBS sources for improved fixes.
- Allows optional proximity events from UWB modules to be reported when paired with base stations.

## How Plaspy Detects the Protocol

Plaspy provides a single, shared endpoint and port for device reporting and uses that endpoint to receive data from many tracker models. When a properly configured DDX14 reports to Plaspy, the platform automatically detects the tracker protocol so users normally do not need to select a protocol manually inside Plaspy.

- Plaspy automatically detects the tracker protocol when the device reports to the platform.
- All devices in Plaspy use the same port for reporting, simplifying device configuration.
- Proper device configuration to report to the Plaspy endpoint is usually sufficient for automatic detection.
- Plaspy ingests telemetry and alarms from supported trackers to drive real time monitoring and notifications.
- If a device is not appearing, typical troubleshooting focuses on network reachability and correct server settings rather than manual protocol selection.

## Transport and Connection Context

The DDX14 sends telemetry over cellular networks to reach the Plaspy ingestion endpoint. Plaspy exposes a consistent network target that most devices can be configured to use; the DDX14 may be pointed to either the Plaspy domain or the Plaspy server IP depending on local provisioning.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port so the DDX14 uses port 8888 like other supported trackers
- Choose UDP or TCP depending on device configuration options and network considerations

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, and alarm behavior; verify the device firmware level when validating compatibility.
- Hardware revisions or optional modules such as UWB can add events and telemetry that must be supported by the receiving platform.
- Manufacturer side configuration or provisioning instructions determine whether the device sends to a domain name or a numeric server address.
- Cellular network availability and regional radio firmware affect how and when the device transmits stored data.
- Choosing UDP versus TCP can affect delivery characteristics in marginal networks; follow manufacturer guidance for recommended transport.
- Always confirm device specific settings and supported features against the official Xexun documentation.

## Why Protocol Understanding Matters

Understanding how the tracker talks to the server helps ensure successful setup, reliable alerts, and predictable behavior in production supervision workflows. Even when Plaspy automatically detects the protocol, knowing the high level communication context reduces setup friction and speeds troubleshooting.

- Ensures device reporting is pointed to the correct Plaspy endpoint and port for immediate ingestion.
- Helps administrators interpret alarm timing and stored data retransmit after blind zones.
- Guides transport selection and network planning for stable connectivity in the deployment area.
- Makes it easier to verify that optional features like UWB proximity and tamper circuits are being reported.
- Supports coordination with field technicians and manufacturers when diagnosing discrepancies.

## Why Use Plaspy with This Protocol

Using the DDX14 with Plaspy provides a managed platform for supervising individuals who require tamper resistant and precise proximity monitoring. Plaspy collects the DDX14 telemetry and presents it in dashboards, alerts, and historical playback to support case officers, caregivers, and supervisors in real time and over time.

Plaspy accepts reports from the DDX14 when the device is configured to report to the Plaspy endpoint and port. To learn more about Plaspy and how it supports device integrations and monitoring workflows visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation guidance verify information with the manufacturer at https://www.xexun.com/.
