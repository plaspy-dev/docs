---
slug: /thingsys/ts_vb20/protocol
id: ts_vb20-protocol
sidebar_label: Protocol
title: ThingSys - TS-VB20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ThingSys TS-VB20 and how it communicates with Plaspy for vehicle telemetry and diagnostics
keywords:
  - ThingSys TS-VB20 protocol
  - ThingSys TS-VB20 GPS protocol
  - TS-VB20 Plaspy compatibility
  - TS-VB20 OBDII tracker protocol
  - ThingSys GPS tracker protocol
  - TS-VB20 communication protocol
  - vehicle tracking protocol Plaspy
  - fleet management TS-VB20
  - OBDII telemetry protocol
  - Plaspy compatible trackers
---

# ThingSys - TS-VB20 Protocol

This page provides a public, non sensitive overview of the communication context for the ThingSys TS-VB20 when used with Plaspy. It focuses on how the TS-VB20 OBDII plug and play tracker communicates vehicle location and ECU telemetry to Plaspy, what the protocol role is in that flow, and what to check when connecting devices to the Plaspy endpoint. The device description used here reflects the TS-VB20 design as an OBDII plug in tracker with GPS AGPS LBS positioning, ECU diagnostics, and GPRS connectivity.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The TS-VB20 can be configured to report to the Plaspy endpoint, but exact protocol behavior and message timing can vary by firmware version hardware revision and manufacturer implementation. This page explains the public protocol context for reliable integration while encouraging verification of device specific details with ThingSys documentation.

## Protocol Overview

The TS-VB20 communication protocol governs how the tracker reports position telemetry ECU derived diagnostics and status information to a remote server such as Plaspy. At a high level the protocol defines how the device identifies itself how routine location updates and diagnostic reports are transmitted and how certain event signals are presented so Plaspy can interpret and display them.

- Enables regular location updates using GPS AGPS and LBS so Plaspy can map vehicle position.
- Carries ECU derived telemetry and diagnostic fields so Plaspy can display basic vehicle health and fuel related metrics.
- Sends event indicators for ignition state tamper and driving events that trigger alerts and reporting in Plaspy.
- Provides device identity and session information so Plaspy can associate incoming data with the correct asset record.
- Uses a transport layer to deliver telemetry to Plaspy reliably over mobile data networks.

## How Plaspy Detects the Protocol

Plaspy automatically recognizes supported tracker protocols when devices are configured to report to the shared Plaspy endpoint. In most cases users do not need to manually select a protocol in Plaspy if the device is pointed to the correct server and port and the device is compatible with the platform.

- Plaspy exposes a common endpoint at d.plaspy.com which devices can be configured to report to.
- The Plaspy server is also reachable by IP at 54.85.159.138 for environments that require direct addressing.
- Plaspy listens on a single port for all devices and protocols which simplifies device configuration and provisioning.
- When a compatible tracker like the TS-VB20 reports to the Plaspy endpoint the platform detects the protocol automatically.
- Proper device configuration to report to the Plaspy endpoint is typically the only setup step required for Plaspy to ingest device telemetry.

## Transport and Connection Context

Transport and connection choices determine how the TS-VB20 sends protocol messages to Plaspy. The TS-VB20 supports mobile GPRS communication and can be configured to use different transport modes depending on device firmware and network conditions.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and configuration.
- For Plaspy integration point the device can target the domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices which reduces configuration complexity across a fleet.
- Connection stability and mobile network availability influence how frequently telemetry is delivered and how Plaspy receives updates.
- Ensure the tracker APN and cellular configuration are set correctly so the TS-VB20 can reach the Plaspy endpoint over GPRS.

## Protocol Compatibility Notes

- Firmware variations across TS-VB20 units can change message frequency available diagnostic fields and supported transport options.
- Different hardware revisions or firmware builds may expose slightly different OBDII parameter sets and driving event logic.
- Network constraints such as 2G GPRS availability and carrier limitations can affect reporting reliability and latency.
- Selecting UDP or TCP on the device may change delivery characteristics though both transport options are supported for reporting to Plaspy on port 8888.
- Validate that the device is configured to point to d.plaspy.com or 54.85.159.138 and uses port 8888 to ensure proper ingestion by Plaspy.
- Always cross check compatibility details against ThingSys documentation for device firmware specific notes.

## Why Protocol Understanding Matters

A practical understanding of the TS-VB20 communication protocol and connection context helps ensure a smooth deployment with Plaspy and supports faster troubleshooting when issues arise. Knowing what the device sends how it identifies itself and which transport settings to use reduces integration time and improves operational reliability.

- Ensures correct server domain or IP and port settings so data reaches Plaspy reliably.
- Helps interpret reported fields for location ECU diagnostics and event triggers in Plaspy.
- Speeds troubleshooting by narrowing issues to transport network device configuration or firmware differences.
- Guides configuration choices such as UDP versus TCP on port 8888 for the desired delivery behavior.
- Aids planning for fleet rollouts by highlighting firmware or hardware revision differences that could affect data available to Plaspy.

## Why Use Plaspy with This Protocol

Using the TS-VB20 with Plaspy provides a low friction path to integrated vehicle telemetry and monitoring. The plug and play OBDII form factor combined with GPS AGPS LBS positioning and ECU level diagnostics makes the TS-VB20 a practical option for fleets and private vehicles that require fast installation and actionable telemetry. When the device is correctly configured to report to Plaspy the platform consolidates location driving events and basic vehicle health metrics into alerts reports and visualizations that support operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support firmware behavior and specific device implementation details can change over time so verify the latest device documentation and firmware notes on the manufacturer site https://www.thingsys.com/ before large scale deployment.
