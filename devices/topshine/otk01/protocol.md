---
slug: /topshine/otk01/protocol
id: otk01-protocol
sidebar_label: Protocol
title: TopShine - OTK01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine OTK01 and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - TopShine OTK01 protocol
  - TopShine OTK01 GPS protocol
  - TopShine OTK01 Plaspy
  - OTK01 GPS tracker
  - OTK01 communication protocol
  - OBD II tracker protocol
  - vehicle tracking Plaspy
  - fleet tracking OTK01
  - AGPS OTK01
  - GPRS reporting OTK01
---

# TopShine - OTK01 Protocol

This page describes the public protocol context for using the TopShine OTK01 tracker with Plaspy. It focuses on how the device communicates with Plaspy for real time location, telemetry, event reporting and historical uploads without disclosing private implementation details. Use this documentation as a protocol-oriented reference to understand device behavior and what to expect when integrating OTK01 units into Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the OTK01 can vary by firmware version, hardware revision and manufacturer implementation, so this page emphasizes high level communication concepts and practical setup notes rather than firmware internals.

## Protocol Overview

The OTK01 uses standard mobile data reporting and SMS fallbacks to deliver GPS position and OBD derived telemetry to a remote tracking server. The device is designed for plug and play OBD II installation and reports core telemetry such as latitude and longitude, speed, direction, odometer, ACC status and tamper/power events that Plaspy consumes for live tracking and alerts.

- The tracker protocol enables the OTK01 to report position and vehicle telemetry to Plaspy for real time monitoring.
- Identification and device metadata are included in reported messages so the platform can attribute data to the correct asset.
- Event and alarm reporting provides instant notification for ACC on off, power cut and tamper conditions.
- Onboard data logging allows waypoint storage when connectivity is interrupted and delayed upload when service resumes.
- GPRS is used as the primary transport for continuous reporting with SMS available for command responses and fallback reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a shared endpoint and identifies the tracker type from the incoming data and connection behavior. In most deployments you do not need to choose a protocol in the Plaspy interface if the device is configured to report to Plaspy correctly.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- Plaspy automatically detects the tracker protocol when an OTK01 reports to the server
- All devices in Plaspy use the same port so device sends are routed to the same listening endpoint
- Users typically configure the device to report to the Plaspy endpoint and let the platform detect and parse supported formats

## Transport and Connection Context

The OTK01 can use packet based mobile data (GPRS) or SMS for reporting depending on how the unit is configured and the operational needs. Connection transport and DNS or numeric endpoint selection determine how the device reaches Plaspy servers.

- The device may be configured using UDP or TCP on port 8888 depending on device support and network setup
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting endpoint
- All Plaspy supported devices use the same port to simplify server side routing and firewall configuration
- GPRS is the primary transport for frequent updates while SMS is a fallback or remote command channel
- Network reliability and operator restrictions can affect which transport is most suitable in a given region

## Protocol Compatibility Notes

- Firmware variations can change message timing, supported fields and available commands; confirm compatibility against the device firmware version.
- Hardware revisions or regional SKU differences may alter supported transports or telemetry sets; verify the exact model and revision.
- Some OTK01 units may prefer UDP for reduced overhead while others use TCP; ensure device transport matches your network policy.
- SMS command sets and diagnostic responses are manufacturer supplied and may not be identical across firmware releases.
- Plaspy will attempt automatic protocol detection but validating device reporting to d.plaspy.com or 54.85.159.138 on port 8888 is a recommended step during setup.
- When integrating at scale, test a small subset of units first to confirm behavior for reporting intervals, event triggers and logger uploads.

## Why Protocol Understanding Matters

Having a clear, high level understanding of the OTK01 communication protocol helps ensure reliable setup, faster troubleshooting and predictable long term operation with Plaspy. Knowing how the tracker reports, which transports it uses and what telemetry to expect reduces integration friction and improves operational uptime.

- Enables correct device configuration to point to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion
- Helps diagnose connectivity issues by understanding whether the device is using GPRS or SMS and which transport mode is configured
- Clarifies expected telemetry fields such as GPS coordinates, speed, direction, odometer and ACC status for rule creation
- Aids in planning for offline behavior by understanding onboard data logger capacity and delayed upload patterns
- Supports firmware and device lifecycle decisions by highlighting where manufacturer updates can affect reporting

## Why Use Plaspy with This Protocol

Pairing the TopShine OTK01 with Plaspy gives organizations straightforward vehicle visibility, reliable event notifications and accessible historical playback without complex installation. The OBD II plug and play design of the OTK01 reduces deployment time while providing OBD sourced telemetry that enhances fleet monitoring and operational insights within Plaspy.

To learn more about Plaspy and how the platform ingests and presents OTK01 telemetry, visit https://www.plaspy.com. For the most current device specific protocol, firmware behavior and implementation details confirm the official manufacturer documentation at https://www.gztopshine.com/ as protocol support and device behavior can change over time.
