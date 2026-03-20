---
slug: /topshine/ogt01/protocol
id: ogt01-protocol
sidebar_label: Protocol
title: TopShine - OGT01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine OGT01 showing how the tracker communicates with Plaspy for GPS and OBD telemetry
keywords:
  - TopShine OGT01 protocol
  - TopShine OGT01 GPS protocol
  - TopShine OGT01 Plaspy compatibility
  - OGT01 OBD II tracking
  - OGT01 communication protocol
  - TopShine vehicle tracking
  - OGT01 telemetry integration
  - GPS tracker protocol Plaspy
  - fleet tracking OGT01
  - OBD telemetry Plaspy
---

# TopShine - OGT01 Protocol

This page summarizes the public protocol context for using the TopShine OGT01 OBD II car tracking device with the Plaspy platform. It focuses on how the tracker reports location, vehicle diagnostics, and event data to Plaspy in high level, non-sensitive terms so fleet managers and integrators can understand connectivity and expected behavior.

The OGT01 is a plug-and-play OBD II tracker with built-in GPS and GSM antennas, a 2 MB data logger, and a backup battery for limited reporting when vehicle power is lost. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. The OGT01 can report via GPRS using TCP or UDP and also supports SMS for fallback reporting.

## Protocol Overview

The OGT01 reporting protocol governs how the device identifies itself, transmits GPS location, and carries OBD telemetry and event alerts to a remote server. On a public level, the protocol's role is to ensure Plaspy receives usable position and vehicle parameter information that can be displayed, stored, and acted on.

- Enable device identification so Plaspy can associate incoming telemetry with the correct unit and vehicle.
- Deliver periodic and event-driven GPS position updates to support real time tracking and geofencing.
- Transport OBD diagnostics and sensor telemetry such as engine status, fuel metrics, and fault codes for fleet analytics.
- Provide fallbacks and buffering behavior, for example offline logging in GSM blind spots and syncing when connectivity resumes.
- Support both TCP and UDP GPRS channels as well as SMS reporting where the device firmware implements these options.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a single shared endpoint and uses the content and connection characteristics to determine the appropriate protocol handler automatically. In most cases you do not need to manually select a protocol inside Plaspy if the OGT01 is properly configured to report to the Plaspy endpoint.

- Plaspy accepts device reports at d.plaspy.com and at the corresponding server IP 54.85.159.138 on the platform port 8888.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint, minimizing manual configuration steps.
- Because Plaspy uses the same port for all supported devices, a correctly addressed device will typically begin streaming data without per-device port changes.
- If a device supports SMS reporting, Plaspy can ingest those messages or use SMS as a transitional channel when GPRS connectivity is unavailable.
- Users usually only need to configure the device to point to the Plaspy endpoint; Plaspy handles protocol identification and routing.

## Transport and Connection Context

Transport selection and server addressing are foundational to getting the OGT01 connected to Plaspy. The device may be configured to use either UDP or TCP over the platform port, and it can point at a domain name or a numeric server address depending on installer preference and firmware options.

- The OGT01 may be configured to use UDP or TCP on port 8888 for GPRS reporting to Plaspy.
- Devices can be directed to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 as an alternate address for the same endpoint.
- All devices supported by Plaspy use the same platform port 8888, simplifying deployment and firewall rules.
- TCP is commonly used for reliable session delivery while UDP may be available for lower latency, subject to device firmware support and network behavior.
- SMS can act as a fallback reporting channel when GPRS is unavailable, with stored data uploaded later when a GPRS link is restored.

## Protocol Compatibility Notes

- Firmware revisions can change command sets, reporting intervals, and transport defaults; verify device firmware level when troubleshooting.
- Hardware revisions or regional variants of the OGT01 may differ in supported GSM bands or reported OBD parameters.
- The installer should confirm whether the device firmware defaults to TCP or UDP and adjust network rules if necessary.
- OBD parameter availability may depend on the vehicle ECU and OBD software support; not all vehicles expose the same set of metrics.
- Internal data logger behavior and capacity (for example the OGT01 2 MB logger) affects how historical data is buffered and uploaded after outages.
- Manufacturer platform features and demo credentials are separate from Plaspy; always reconcile manufacturer documentation with your Plaspy configuration.

## Why Protocol Understanding Matters

Understanding how the OGT01 communicates helps accelerate setup, reduces time spent troubleshooting, and improves long term reliability for fleet operations using Plaspy. Clarity on transport and reporting behavior lets administrators validate connectivity, interpret incoming data, and plan for offline or degraded scenarios.

- Ensures correct server address and transport selection so the device reaches Plaspy reliably.
- Helps interpret missing or delayed telemetry by distinguishing network issues from device configuration or firmware behavior.
- Guides decisions about data retention, synchronization after outages, and expectations for OBD parameter coverage.
- Enables more effective firewall and network configurations by using the single Plaspy platform port.
- Improves integration with alerts and automations in Plaspy by ensuring event-driven reports are delivered as expected.

## Why Use Plaspy with This Protocol

Using the TopShine OGT01 with Plaspy gives organizations vehicle-level visibility and the ability to combine GPS position data with OBD telemetry for richer operational insights. The OGT01's plug-and-play OBD II form factor, onboard diagnostics, and offline logger make it practical for fast deployments where continuous monitoring and fuel or engine data are important.

Plaspy centralizes incoming OGT01 telemetry into dashboards, geofence and alerting rules, and exportable reports that support fleet optimization, theft detection, and maintenance planning. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint. To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information on the TopShine website https://www.gztopshine.com/ which may be updated over time.
