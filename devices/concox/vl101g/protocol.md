---
slug: /concox/vl101g/protocol
id: vl101g-protocol
sidebar_label: Protocol
title: Concox - VL101G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Concox VL101G tracker with Plaspy for fleet tracking and telematics
keywords:
  - Concox VL101G protocol
  - Concox VL101G GPS protocol
  - VL101G Plaspy compatibility
  - Concox VL101G communication
  - VL101G tracking protocol
  - Concox telematics
  - VL101G vehicle tracker
  - Plaspy supported devices
  - GPS tracker protocol
  - fleet management tracker
---

# Concox - VL101G Protocol

This page describes the public protocol context for using the Concox VL101G GPS tracker with Plaspy. It explains how the tracker typically reports position, telemetry, and vehicle I O events to Plaspy and what to expect from the device to platform communication without delving into private implementation specifics.

Plaspy uses a shared connection endpoint and port for all supported devices and automatically detects the tracker protocol when the device is reporting to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior such as message frequency, telemetry channels, and optional features may differ between units.

## Protocol Overview

The tracker protocol is the set of rules the VL101G follows to send GNSS fixes, telemetry, and I O events from the vehicle to a cloud endpoint. For Plaspy integration the protocol determines how the VL101G identifies itself, reports position and status, and delivers the telemetry channels that the platform maps into dashboards, alerts, and historical records.

- Enables sending GNSS position fixes and timestamps that Plaspy uses for real time tracking and history.
- Conveys vehicle telemetry and digital input events such as ignition state, alarms, and sensor readings.
- Supports buffered storage and uplink of records when cellular coverage is restored, preserving history for Plaspy ingestion.
- Provides status updates and heartbeats so Plaspy can track device availability and connectivity.
- Allows control signals and remote actions to be associated with device I O channels when supported by hardware and firmware.

## How Plaspy Detects the Protocol

Plaspy operates a unified ingestion endpoint and port for device reporting and performs protocol identification automatically when a compatible tracker reports there. In most cases a VL101G configured to report to Plaspy will be recognized and begin delivering usable data without manual protocol selection inside the platform.

- Plaspy uses a shared server endpoint and a single port for all devices which simplifies device configuration.
- When a VL101G is pointed at the Plaspy endpoint, the platform detects the tracker protocol automatically.
- Users typically do not need to select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.
- Proper device configuration and current firmware help ensure the tracker reports the expected telemetry channels to Plaspy.
- If a device does not immediately appear, validating network settings and manufacturer documentation is the recommended next step.

## Transport and Connection Context

Connection transport determines how the VL101G sends protocol messages to Plaspy. The VL101G supports common cellular uplink modes and can be configured to use either UDP or TCP depending on device firmware and installer preference. For Plaspy integration use the shared Plaspy server endpoint and port.

- Devices may be configured to report to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The network port used for reporting to Plaspy is 8888 and this same port is used for all devices in Plaspy.
- The VL101G can be set to use either UDP or TCP on port 8888 depending on device firmware and configuration options.
- Cellular uplink (LTE Cat 1 with 2G fallback for the VL101G) carries the tracker protocol messages to the Plaspy endpoint.
- Confirm APN, SIM, and network registration settings on the device so it can reach d.plaspy.com or the server IP.

## Protocol Compatibility Notes

- Firmware revisions may enable or disable certain telemetry channels and I O behaviors. Always check the unit firmware level.
- Hardware revisions or variant SKUs can change available inputs, outputs, or wireless fallbacks which affect reported data.
- Transport selection between UDP and TCP can affect behavior in poor networks; follow manufacturer guidance for recommended transport for your deployment.
- Plaspy’s automatic protocol detection reduces manual configuration but does not replace validating device settings and network reachability.
- Manufacturer configuration examples and command sets are authoritative for device-side setup and should be consulted for advanced features.
- When integrating immobilizer or relay control, ensure wiring and safety policies follow vehicle and legal requirements and confirm supported commands with the manufacturer.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with successful setup, faster troubleshooting, and consistent long term operation when using the VL101G with Plaspy. Knowing what the device is expected to send and how it connects reduces configuration errors and clarifies which telemetry channels will be available in Plaspy.

- Ensures correct device configuration for APN, transport selection, and target endpoint so the tracker reports to Plaspy.
- Helps diagnose connectivity issues by confirming the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888.
- Clarifies which telemetry channels and I O events the platform will receive based on firmware and hardware revision.
- Guides decisions about transport mode selection and expected behavior in varying network conditions.
- Supports planning for offline buffering and data continuity during coverage gaps or power loss.

## Why Use Plaspy with This Protocol

Using the Concox VL101G with Plaspy gives organizations a practical way to turn high accuracy GNSS, vehicle telemetry, and I O events into operational insights. Plaspy ingests the VL101G reporting stream to provide real time location, alerts for ignition and tamper events, driving behavior analytics, and historical reporting useful for fleet optimization, rental operations, and security workflows.

Plaspy simplifies integration by using a single, shared ingestion endpoint and port across all supported devices and by automatically detecting the tracker protocol when a device reports to the Plaspy endpoint. To learn more about Plaspy and how it works with devices like the VL101G visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance confirm the latest information at the official Concox site https://www.iconcox.com/.
