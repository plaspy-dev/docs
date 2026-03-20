---
slug: /cantrack/c32plus/protocol
id: c32plus-protocol
sidebar_label: Protocol
title: CanTrack - C32Plus Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for configuring the CanTrack C32Plus tracker with Plaspy for reliable reporting and compatibility.
keywords:
  - CanTrack C32Plus protocol
  - CanTrack C32Plus GPS protocol
  - CanTrack C32Plus communication
  - CanTrack C32Plus tracking
  - Plaspy tracker compatibility
  - GT06 compatibility
  - C32Plus Plaspy setup
  - vehicle tracking GPS tracker
  - fleet management tracker
  - GPS tracker protocol guide
---

# CanTrack - C32Plus Protocol

This page provides the public protocol context for using the CanTrack C32Plus tracker with Plaspy. It summarizes how the device communicates with Plaspy, the role of the tracker reporting protocol, and practical connection details installers and administrators need to know when integrating the C32Plus with Plaspy for real time tracking and telemetry.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public and non sensitive integration details rather than firmware specific internals.

## Protocol Overview

The C32Plus reports location, alarms, and telemetry over cellular GPRS and is documented as compatible with GT06 style reporting when configured for TCP IP transport. In general terms, the tracker reporting protocol defines how the device identifies itself to the server, how location and event data are packaged, and which fields Plaspy can use to present real time status and historical traces.

- Enables the tracker to announce identity and session context to the server so Plaspy can attribute data to the correct device.
- Transports GPS fixes, alarms such as ignition or power removal, and auxiliary telemetry that Plaspy maps to dashboards and alerts.
- Allows offline buffering on the device to upload queued records once GPRS connectivity is restored.
- Supports remote commands where enabled by the manufacturer, which Plaspy can forward after device configuration.
- Governs heartbeat and reporting intervals that affect frequency of updates and event delivery to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections and telemetry on a shared endpoint and port and uses that incoming data to identify the tracker protocol automatically. For most installations, if the tracker is pointed at the Plaspy endpoint and uses a supported transport, no manual protocol selection is required inside Plaspy.

- Plaspy provides a single reporting endpoint for devices to point to, simplifying configuration for installers.
- All devices use the same port on Plaspy so tracking units do not need unique port assignments.
- Plaspy automatically detects the tracker protocol from the incoming connection and the data the device sends.
- If a device is misconfigured at the unit level, protocol detection may not succeed until the device reporting address and transport match Plaspy settings.
- Proper device identity and stable GPRS connectivity help Plaspy associate incoming messages with the correct vehicle or asset.

## Transport and Connection Context

The C32Plus may be configured to use either UDP or TCP transport depending on device support and configuration choices. For Plaspy integration, point the tracker to the Plaspy server address using the shared port for reporting so data can reach Plaspy reliably.

- Plaspy server domain is d.plaspy.com and can be used as the device reporting host.
- Plaspy server IP is 54.85.159.138 which is an alternative reporting target if DNS is not available.
- The port used for device reporting to Plaspy is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices supported by Plaspy use the same port which simplifies fleet wide configuration.
- Choice of UDP or TCP affects delivery characteristics but does not change the fact that data must be pointed at Plaspy for automatic protocol detection.

## Protocol Compatibility Notes

- Manufacturer firmware versions can alter message timing, available telemetry fields, or optional remote commands; always confirm firmware behavior for your unit.
- Hardware revisions or regional SKUs may exhibit subtle differences in supported messages or transport behavior.
- Some C32Plus units are documented as GT06 compatible; use the manufacturer documentation to verify exact protocol variants your device implements.
- Transport selection between UDP and TCP should match the device configuration and the intended reliability and latency profile.
- Confirm that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy can receive and detect the protocol.
- Validate optional features like remote immobilizer or OTA updates against the device firmware level and manufacturer guidance.

## Why Protocol Understanding Matters

Understanding how the C32Plus communicates with Plaspy reduces integration friction, helps diagnose delivery problems, and supports predictable behavior during firmware updates or hardware changes. Clear expectations around transport, identity, and reporting cadence make deployments more reliable and easier to support.

- Speeds initial setup by ensuring devices point to the correct Plaspy endpoint and use the supported transport on port 8888.
- Helps troubleshoot missing or delayed updates by checking transport type, server target, and firmware version.
- Clarifies how alarms and telemetry map into Plaspy events and dashboards for operational use.
- Informs decisions about enabling optional remote commands and how those actions are handled by device firmware.
- Supports planning for intermittent connectivity by aligning device buffering behavior with Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Pairing the CanTrack C32Plus with Plaspy provides a practical route to real time vehicle visibility, alarms, and telemetry for fleets and light vehicle operations. The C32Plus form factor and wide voltage range make it suitable for scooters, motorcycles, and small vehicles while its GT06 compatible reporting and offline buffering help maintain data continuity to Plaspy across variable cellular coverage.

To learn more about Plaspy and how it handles device connectivity and protocol detection, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information with the manufacturer at https://www.cantrackgps.com/ before finalizing deployment plans.
