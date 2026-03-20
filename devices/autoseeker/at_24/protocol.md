---
slug: /autoseeker/at_24/protocol
id: at_24-protocol
sidebar_label: Protocol
title: Autoseeker - AT-24 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Autoseeker AT-24 and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - Autoseeker AT-24 protocol
  - Autoseeker AT-24 GPS protocol
  - Autoseeker AT-24 communication protocol
  - Autoseeker AT-24 tracking protocol
  - Autoseeker Plaspy compatibility
  - AT-24 GPS tracker protocol
  - vehicle tracking protocol Autoseeker
  - fleet tracking Autoseeker AT-24
  - Autoseeker tracker protocol Plaspy
  - AT-24 protocol integration
---

# Autoseeker - AT-24 Protocol

This page covers the public protocol context for using the Autoseeker AT-24 tracker with the Plaspy platform. It describes how the device communicates at a high level, what role the tracker reporting protocol plays when delivering telemetry to Plaspy, and which connection settings you will commonly use for integration. The AT-24 is a compact 4G tracker with features such as ACC detection, remote immobilizer control, geofencing, and a backup battery, and those capabilities are exposed to Plaspy via the device reporting protocol.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports correctly to the Plaspy endpoint. For Plaspy integrations the public server endpoint is d.plaspy.com and the public server IP is 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888. All devices connected to Plaspy use the same port, and because Plaspy automatically detects tracker protocols, most users do not need to select a protocol manually inside Plaspy when the device is pointed to the correct endpoint and transport.

## Protocol Overview

At a general level the tracker protocol defines how the AT-24 formats and sends position, status, and event data so that Plaspy can ingest and present those updates. The protocol is the bridge between the device hardware and Plaspy services, conveying location fixes, input state changes, and event triggers that drive alerts, reports, and remote controls in the platform.

- Transmits GNSS positions and timestamped location updates so Plaspy can map and log movement.
- Reports device status and inputs such as ACC on/off, low power, and backup battery events for vehicle state monitoring.
- Sends event notifications like geofence entries, overspeed conditions, and SOS presses so Plaspy can issue alerts and record audit trails.
- Enables command oriented features exposed by the device such as remote immobilizer control where supported and permitted.
- Uses cellular data connectivity and the tracker reporting protocol to reach the Plaspy ingestion endpoint for real time processing.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single, shared endpoint and port and determines the device protocol automatically based on the reporting traffic arriving there. When an AT-24 is configured to report to Plaspy it will reach the Plaspy endpoint and the platform will match the incoming data to a supported protocol profile so the device can be ingested without a manual protocol selection.

- Plaspy accepts device reports at d.plaspy.com and at the public IP 54.85.159.138 on port 8888.
- All devices use the same port on Plaspy which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol from the incoming connection, so manual protocol selection is usually unnecessary.
- Ensure the device is configured to point to the Plaspy endpoint using the correct transport and credentials if required by the device.
- If a device does not appear to be detected, verify reporting settings on the tracker and consult the device manufacturer documentation.

## Transport and Connection Context

Transport and connection choices are part of the practical integration details. The AT-24 can report over cellular data and supports standard reporting paths; depending on the firmware and configuration it may use UDP or TCP to deliver its telemetry to Plaspy. The critical public Plaspy connection facts are the domain d.plaspy.com, the address 54.85.159.138, and port 8888.

- The AT-24 may be configured to use UDP or TCP on port 8888 depending on device support and settings.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 to reach Plaspy.
- Plaspy uses the same port for all supported devices which reduces per device configuration complexity.
- Cellular data connectivity is required to transport reports from the tracker to Plaspy in real time.
- Choose the transport (UDP or TCP) supported by your tracker firmware and network environment to optimize reliability.

## Protocol Compatibility Notes

- Firmware variations can change how a specific AT-24 unit reports fields or event types; verify the firmware release notes when diagnosing discrepancies.
- Hardware revisions or optional accessory modules may introduce differences in supported inputs or telemetry fields.
- Some behaviors such as remote immobilizer commands, voice monitoring, or SOS behavior can be dependent on device configuration and regional regulations.
- Selecting UDP versus TCP in device settings can affect delivery characteristics; use the transport that matches the device firmware recommendations.
- Always confirm that the tracker is configured to report to the Plaspy endpoint d.plaspy.com or the public IP 54.85.159.138 on port 8888.
- Validate compatibility and expected features against the manufacturer documentation before deploying large numbers of devices.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the AT-24 helps ensure reliable setup, efficient troubleshooting, and accurate event handling on Plaspy. Knowing what the device is expected to send and which connection settings to use lets operators confirm that telemetry and control messages reach Plaspy and behave as intended.

- Helps diagnose why a device is not appearing in Plaspy when reporting is misconfigured.
- Clarifies which events and inputs from the tracker will appear as alerts or fields in Plaspy dashboards.
- Makes it easier to validate remote features such as the immobilizer and to confirm safe operating workflows.
- Supports planning for fleet scale deployment by identifying firmware or hardware variants that require different handling.
- Reduces time spent in trial and error by matching device settings to Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-24 with Plaspy provides organizations with compact, discreet tracking hardware combined with a platform that ingests and normalizes tracker telemetry for monitoring, alerts, and reporting. The AT-24’s 4G connectivity, backup battery, ACC detection, and immobilizer capability supply the kinds of real time events and status changes that fleet managers and security teams rely on for operational oversight and anti-theft response.

If you want to learn more about how Plaspy handles tracker integrations, visit https://www.plaspy.com for platform information and deployment guidance. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol documentation and firmware notes with the manufacturer at https://autoseekergps.com/.
