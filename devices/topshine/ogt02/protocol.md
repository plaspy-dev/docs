---
slug: /topshine/ogt02/protocol
id: ogt02-protocol
sidebar_label: Protocol
title: TopShine - OGT02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for TopShine OGT02 OBD2 GPS tracker and how it communicates with Plaspy for real time tracking and telemetry
keywords:
  - TopShine OGT02 protocol
  - TopShine OGT02 GPS protocol
  - TopShine OGT02 protocol for Plaspy
  - TopShine OGT02 communication protocol
  - TopShine OGT02 tracking protocol
  - TopShine OGT02 OBD2 tracker
  - OGT02 Plaspy compatibility
  - OGT02 GPS tracker protocol
  - TopShine OBD2 protocol
  - vehicle tracking OGT02 Plaspy
---

# TopShine - OGT02 Protocol

This page provides public protocol context for using the TopShine OGT02 with Plaspy. It summarizes how the plug and play 4G OBD2 tracker reports location, movement, and available OBD telemetry to Plaspy, and what to consider when pointing devices at Plaspy servers for real time tracking and alerts. The content here is intended for integrators, fleet managers, and technical evaluators who need clear, non sensitive protocol context for device onboarding.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available telemetry can vary by device firmware, hardware revision, and manufacturer implementation, so this page focuses on public, practical guidance rather than firmware specific internals. The OGT02 supports GPRS and SMS working modes and sends GPS, accelerometer events, and OBD data where available to Plaspy compatible endpoints.

## Protocol Overview

The OGT02 communicates telematics to a remote server so that Plaspy can ingest position, event alerts, and vehicle telemetry. At a high level the tracker protocol defines how the device identifies itself, timestamps and packages position reports, reports motion or impact events, and forwards OBD derived values to the platform for display and alerts.

- Enables regular location reporting so Plaspy can display live position and historical tracks.
- Transmits movement and accelerometer events used by Plaspy to trigger displacement and impact alerts.
- Sends OBD telemetry such as odometer and vehicle PIDs when available for vehicle health reporting.
- Carries basic device identification so Plaspy can associate the stream with the correct fleet asset.
- Supports multiple transport modes for global connectivity so devices can work over cellular networks and SMS as needed.

## How Plaspy Detects the Protocol

Plaspy receives inbound device connections on a single shared endpoint and automatically infers the tracker protocol from the incoming data and metadata. When an OGT02 is configured to report to Plaspy, users generally do not need to manually select a protocol inside Plaspy as long as the device is pointed to the correct Plaspy endpoint and port.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available.
- The port used by Plaspy is 8888 and all devices supported by Plaspy use the same port.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capability.
- When the OGT02 is properly configured to report to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol for ingestion.

## Transport and Connection Context

Connection context describes how the OGT02 reaches the Plaspy servers rather than the internal packet structure. The tracker can operate over cellular data channels and can be set to use different transport layers supported by the device firmware.

- The OGT02 may be configured using UDP or TCP on port 8888 depending on device support and operator configuration.
- Devices can point to d.plaspy.com or to the Plaspy server IP 54.85.159.138 as the destination host.
- Plaspy uses port 8888 for all supported devices to simplify deployment and network rules.
- Where SMS is used as a fallback reporting mode, SMS delivers limited telemetry compared with GPRS data sessions.
- Network level considerations such as APN settings, firewall rules, and carrier restrictions can affect connectivity and should be validated during deployment.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or transport defaults; verify firmware notes for device specific behavior.
- Hardware revisions or regional SKUs may alter supported cellular bands and consequently the device reporting behavior in certain networks.
- Manufacturer configurable transport mode choices determine whether the device reports via UDP or TCP on port 8888.
- OBD PID availability depends on the vehicle make, model, and OBD support; not all vehicles expose the same telemetry.
- Plaspy automatically detects the tracker protocol when the device reports to the shared endpoint, but correct device configuration is required on the tracker side.
- Always validate device reporting in a controlled environment before large scale rollout to confirm telemetry mapping and event behavior.

## Why Protocol Understanding Matters

Understanding how the OGT02 communicates helps ensure a reliable connection to Plaspy and improves troubleshooting efficiency during deployment and operation. Knowing which transport, reporting mode, and telemetry the device uses lets teams align network settings, validate alerts, and interpret the data Plaspy presents.

- Ensures correct APN and network settings so the device can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Helps correlate device reported events with Plaspy alerts for faster incident investigation.
- Guides decisions around transport selection UDP versus TCP based on network reliability and firewall configuration.
- Clarifies expectations for available OBD telemetry so reports in Plaspy match vehicle capabilities.
- Supports predictable onboarding and scaling by documenting device firmware and configuration choices.

## Why Use Plaspy with This Protocol

Using the TopShine OGT02 with Plaspy gives organizations an easy to deploy OBD2 option for real time location, movement alerts, and vehicle telemetry without complex wiring. The plug and play form factor speeds rollout across a fleet while Plaspy centralizes live tracking, geofence alerts, and historical playback so teams can monitor assets and respond to events efficiently.

If you want to learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions please verify information on the official TopShine website https://www.gztopshine.com/. Protocol support and firmware behavior can change over time so checking manufacturer documentation will ensure your deployment matches the latest device capabilities.
