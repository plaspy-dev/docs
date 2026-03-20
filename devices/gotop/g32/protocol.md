---
slug: /gotop/g32/protocol
id: g32-protocol
sidebar_label: Protocol
title: GOTOP - G32 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP G32 and how the device communicates with Plaspy for reliable pet tracking
keywords:
  - GOTOP G32 protocol
  - GOTOP G32 GPS protocol
  - GOTOP G32 communication protocol
  - GOTOP G32 tracking protocol
  - GOTOP tracker Plaspy
  - pet GPS tracker protocol
  - G32 Plaspy compatibility
  - GOTOP G32 integration
  - GPS tracker protocol guide
  - G32 connectivity
---

# GOTOP - G32 Protocol

This page covers the public protocol context for using the GOTOP G32 tracker with Plaspy. It describes, at a high level, how the G32 communicates location and event data to Plaspy and what to expect when integrating the device. The information here focuses on connection and protocol context that is safe to publish while helping technical users and integrators understand the role of the tracker protocol in delivering usable telemetry to a central platform.

The G32 is a compact pet tracker designed for cats and dogs that supports SMS and 4G reporting, AGPS-assisted fixes, GPRS blind-area data re-upload, and configurable alarms. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly pointed to Plaspy. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so device-specific details should be validated against GOTOP documentation when necessary.

## Protocol Overview

The G32 reporting protocol is the device side mechanism that transmits position, status, and alarm events from the tracker to a remote server such as Plaspy. In practice, the protocol lets the tracker identify itself, deliver timestamps and coordinates, and include event flags that the server can interpret as geofence, movement, low battery, or other alerts. The protocol also supports temporary buffering and later re-upload of points when connectivity is restored to preserve continuity.

- Enables transmission of location and event data from the G32 to a remote endpoint for real time display and storage.
- Carries identifying information so Plaspy can associate incoming reports with the correct device record.
- Conveys alarm and telemetry flags such as geofence triggers, movement events, and battery status for immediate notification.
- Supports data continuity features such as blind-area re-upload so historical tracks are reconstructed after signal loss.
- Works over the device transport layer so Plaspy can ingest messages and present them on maps, timelines, and alert workflows.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a common endpoint and uses automatic protocol detection so most users do not need to select a protocol manually. When a G32 is configured to report to Plaspy, the platform inspects the incoming session and maps the device to the appropriate processing rules. This automatic detection simplifies setup for teams deploying many different device models.

- Plaspy accepts reports at the domain d.plaspy.com and the server IP 54.85.159.138.
- The platform listens on port 8888 and uses the same port for all supported devices.
- Devices may be configured to use either UDP or TCP on port 8888 depending on model capabilities and settings.
- Plaspy automatically detects the tracker protocol when the device is correctly pointed to the Plaspy endpoint.
- In most cases the user does not need to select a protocol inside Plaspy if the tracker is reporting to d.plaspy.com on the configured port.

## Transport and Connection Context

Connection details determine how the G32 sends its reporting messages to Plaspy and how reliably those messages arrive. The G32 supports cellular reporting modes and can be configured to use the network transport that best fits the deployment. Choosing the correct transport and destination address is an important part of successful device integration with Plaspy.

- The G32 may be configured to send data via UDP or TCP on port 8888 depending on firmware and settings.
- When pointing the device to Plaspy, devices may use the domain d.plaspy.com or the numeric server address 54.85.159.138.
- Port 8888 is the shared listening port used by Plaspy for all device models to simplify configuration.
- Using the correct APN and cellular settings on the device ensures packets are routed to Plaspy reliably over the chosen transport.
- If the device buffers points during signal loss, it will re-upload buffered data when cellular connectivity resumes so Plaspy can recover full tracks.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available fields, and supported transports; validate the G32 firmware level when troubleshooting compatibility.
- Hardware revisions or variant SKUs may affect which transports or features are available on a specific unit.
- Some G32 deployments may rely on SMS fallback or manufacturer cloud forwarding in addition to direct IP reporting; check how your unit is configured to report.
- Transport selection between UDP and TCP can impact delivery guarantees and should match device capabilities and network conditions.
- Plaspy’s shared port and automatic detection reduce the need for manual protocol selection, but device-side destination settings must point to Plaspy.
- Always cross check device settings and Plaspy account device identifiers to ensure incoming reports are associated with the intended device record.

## Why Protocol Understanding Matters

A practical understanding of the G32 communication protocol helps with getting devices online quickly, diagnosing reporting issues, and ensuring consistent historical data. Knowing how the device reports and what triggers alarms makes it easier to confirm correct behavior in Plaspy and to interpret alerts and location history accurately.

- Speeds up initial setup by ensuring devices point to d.plaspy.com or 54.85.159.138 on port 8888 using an approved transport.
- Helps isolate connectivity issues between the device, cellular network, and Plaspy when reports are missing or delayed.
- Clarifies why buffered points and blind-area re-upload matter for reconstructing movement history after outages.
- Assists with validating that alarm types from the device appear correctly in Plaspy notification rules.
- Supports informed decisions about device placement, APN selection, and firmware updates to maintain reliable telemetry.

## Why Use Plaspy with This Protocol

Using the G32 together with Plaspy provides a convenient way to centralize pet tracking, alarms, and historical playback in a single platform. Plaspy aggregates the G32’s location updates and events, making it simpler to manage geofence rules, movement alerts, and low-battery notifications for one device or many devices at scale. For pet owners and small operations that need dependable visibility, the combination of G32 hardware features and Plaspy’s platform capabilities delivers practical monitoring without complex configuration.

To learn more about Plaspy and how it handles device connectivity and alerts, visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware notes, and manufacturer configuration instructions, please verify details on the GOTOP website https://www.gotop.cc/ as device implementations and firmware can change over time.
