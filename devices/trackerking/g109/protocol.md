---
slug: /trackerking/g109/protocol
id: g109-protocol
sidebar_label: Protocol
title: TrackerKing - G109 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TrackerKing G109 compatibility with Plaspy for reliable vehicle tracking and integration
keywords:
  - TrackerKing G109 protocol
  - G109 GPS tracker
  - TrackerKing G109 Plaspy
  - G109 communication protocol
  - G109 tracking protocol
  - TrackerKing GPS protocol
  - G109 compatibility Plaspy
  - vehicle GPS tracker protocol
  - fleet tracking protocol
  - GPS tracker integration
---

# TrackerKing - G109 Protocol

This page provides a public, high level description of the communication context for using the TrackerKing G109 with Plaspy. It explains how the device reports location and telemetry to Plaspy and what role the device reporting protocol plays in delivering usable tracking data for vehicles and motorcycles.

Plaspy uses shared connection settings for supported devices and automatically detects the active tracker protocol when a device reports to the platform. Exact protocol behavior, available features, and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public protocol context rather than firmware internals.

## Protocol Overview

The tracker reporting protocol is the on device method for sending position, status, and event data from the G109 to a remote server such as Plaspy. In practice this protocol governs how the device identifies itself, communicates telemetry and alarms, and supports offline retransmission so operators receive continuous and historical data in Plaspy.

- Enables the G109 to deliver GPS position, ignition status, alarms, and mileage to Plaspy for real time mapping and history playback.
- Carries event notifications such as vibration, geo fence breach, overspeed, and power failure so Plaspy can trigger alerts and workflows.
- Supports blind area retransmission or local track logging so stored location records can be uploaded after coverage is restored.
- Includes device identification and status fields that allow Plaspy to associate incoming data with the correct vehicle and settings.
- Operates over standard transport channels so the same Plaspy endpoint can serve many different tracker models without manual selection.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on the shared Plaspy endpoint and automatically determines the tracker protocol based on the data the device sends. In most cases the installer or device configuration only needs to point the G109 at the Plaspy endpoint; Plaspy then associates the stream with the correct device and interprets the data for mapping, alerts, and history.

- Plaspy receives data on a single, uniform endpoint so users do not normally need to pick a protocol inside the platform.
- When a properly configured G109 reports to Plaspy, the platform automatically detects the tracker protocol and processes position and event reports.
- Proper device configuration to send reports to the Plaspy endpoint is the usual requirement for detection and successful integration.
- If a device sends standard telemetry and identification fields, Plaspy can attach those records to the registered vehicle and generate alerts and trip records.

## Transport and Connection Context

Connection details describe how the G109 reaches the Plaspy servers rather than the internal message formats. The G109 may be configured to use either UDP or TCP transport depending on the device capabilities and region. Plaspy provides a single server endpoint for device reporting: domain d.plaspy.com and IP 54.85.159.138 on port 8888, and all devices in Plaspy use the same port for incoming reports.

- Devices may be configured to report over UDP or TCP to port 8888 depending on installer preference and device support.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct endpoint configuration.
- The port used for device reporting on Plaspy is 8888 and the same port is used across supported devices.
- Ensuring the device is pointed to d.plaspy.com or the listed IP and the correct transport protocol is the main connectivity requirement.
- Network considerations such as carrier routing, APN settings, and firewall rules can affect connectivity and should be validated during installation.

## Protocol Compatibility Notes

- Firmware differences can change which telemetry fields or events a particular G109 unit sends, so firmware version matters for exact behavior.
- Hardware revisions or regional variants may alter available features such as supported 4G bands or I/O wiring, which affects integration.
- Manufacturer configuration options can determine whether the G109 uses UDP or TCP and what server address it reports to.
- Blind area retransmission and local logging behavior are useful but can vary by firmware and device settings.
- Confirm device reporting endpoint is set to the Plaspy server and port to allow automatic detection and processing.
- Always validate compatibility and feature support against the latest manufacturer release notes or documentation.

## Why Protocol Understanding Matters

Understanding how the G109 communicates helps ensure reliable reporting to Plaspy, faster troubleshooting, and predictable behavior for alerts and immobilization workflows. A practical grasp of the protocol and transport context reduces setup time and helps operators plan for maintenance and firmware updates.

- Ensures installers configure the device to the correct Plaspy endpoint and transport so data arrives as expected.
- Helps troubleshoot connectivity and missing data by checking transport, APN, and whether the device is reporting to d.plaspy.com or the Plaspy IP.
- Supports planning for firmware updates or hardware changes that may affect which telemetry fields are available.
- Improves confidence in alarm handling and remote control workflows when the device is known to send the required events.
- Aids in validating that blind area retransmission and history playback are available and functioning.

## Why Use Plaspy with This Protocol

Using the TrackerKing G109 together with Plaspy gives operators a resilient tracking setup that combines G109 hardware features with Plaspy’s centralized ingestion, mapping, and alerting. The G109’s long life backup battery, wide voltage range, and vehicle inputs such as ACC detection and remote immobilization complement Plaspy’s real time monitoring and historical reporting to support fleet management and anti theft workflows.

To learn more about how Plaspy can manage tracking, alerts, and historical reports for devices like the G109 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes with the manufacturer at https://trackerking.cn/.
