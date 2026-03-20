---
slug: /xirgo/xt31/protocol
id: xt31-protocol
sidebar_label: Protocol
title: Xirgo - XT31 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT31 integration and communication with the Plaspy platform
keywords:
  - Xirgo XT31 protocol
  - Xirgo XT31 GPS protocol
  - XT31 Plaspy compatibility
  - Xirgo cargo monitoring protocol
  - XT31 tracker protocol
  - Xirgo XT31 communication
  - XT31 vehicle tracking protocol
  - Xirgo IoT gateway protocol
  - XT31 trailer telematics
  - Plaspy device protocol
---

# Xirgo - XT31 Protocol

This page covers the public protocol context for using the Xirgo XT31 with Plaspy. It focuses on how the XT31, an industrial IoT gateway and cargo monitoring solution for trailers and containers, communicates with a fleet management backend in a way that allows Plaspy to ingest cargo telemetry, event updates, and historical status information for operational use.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data arrives. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general protocol context and integration guidance rather than firmware specific details.

## Protocol Overview

The XT31 operates as an IoT gateway that reports cargo condition, sensor telemetry, and event driven updates to a backend server. The device protocol governs how the XT31 identifies itself, delivers telemetry packets, and signals events so Plaspy can normalize and present the data alongside GPS tracker feeds.

- Defines the means for the XT31 to report cargo status, sensor readings, and event notifications to Plaspy.
- Enables device identification and session continuity so Plaspy can associate incoming data with the correct asset.
- Supports real time and historical reporting so Plaspy can generate alerts, dashboards, and logs for operators.
- Allows integration of gateway aggregated sensor data with GPS location feeds for a unified operational view.
- Focuses on transportable, event driven updates that facilitate automated workflows and analytics in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared public endpoint and port and determines the originating device protocol automatically. When an XT31 is configured to report to the Plaspy endpoint, the platform will detect and normalize the incoming feed so no manual protocol selection is typically required inside Plaspy.

- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.
- The Plaspy server endpoint for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Devices configured to report to the Plaspy endpoint will be identified and associated with the correct asset in the platform.
- In most cases you do not need to manually set a protocol in Plaspy if the device is correctly pointed to the Plaspy endpoint.
- Proper device configuration and correct reporting credentials ensure Plaspy can register and process XT31 messages consistently.

## Transport and Connection Context

The XT31 can be configured to send telemetry and events over standard transport layers depending on device capability and configuration. For communication with Plaspy, the important connection details are the shared host and consistent port that Plaspy uses for all devices.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and operational needs.
- Plaspy accepts incoming device traffic on port 8888 for all devices, including the XT31.
- The device can point to the Plaspy server domain d.plaspy.com or the public IP 54.85.159.138 as the reporting endpoint.
- Transport selection may affect delivery guarantees and packet behavior but not the fact that Plaspy receives data on the same port for every device.
- Ensure any network firewalls or carrier APN settings allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or change telemetry fields and event behaviors that affect how data appears in Plaspy.
- Hardware revisions or optional sensor modules on the XT31 may alter the set of available telemetry streams.
- Manufacturer configuration options may allow switching transport between UDP and TCP or changing reporting intervals and event thresholds.
- For reliable integration, confirm the XT31 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- While Plaspy automatically detects incoming protocols, proper device configuration and correct device identifiers are still required for consistent asset matching.
- Always validate compatibility for your specific XT31 firmware revision and sensor configuration against official manufacturer documentation.

## Why Protocol Understanding Matters

Understanding the XT31 communication protocol helps ensure successful setup, reliable data flow, and effective troubleshooting when integrating device telemetry into Plaspy. Clear expectations about transport, reporting behavior, and protocol variability reduce integration friction and improve operational outcomes.

- Helps diagnose connectivity and data parsing issues between the device and Plaspy.
- Informs decisions about choosing TCP versus UDP for your deployment based on reliability and latency needs.
- Guides configuration of reporting intervals, event thresholds, and which sensor streams are transmitted to Plaspy.
- Supports planning for firmware updates and hardware changes that may impact telemetry availability.
- Enables more effective coordination with manufacturer support when device behavior differs from expectations.

## Why Use Plaspy with This Protocol

Using the XT31 with Plaspy brings cargo centric telemetry and gateway aggregation into a unified fleet management view. The XT31 complements GPS tracker feeds by delivering cargo condition, capacity assessments, and event driven updates that Plaspy can visualize, alert on, and include in operational workflows.

Plaspy provides centralized ingestion and normalization of XT31 telemetry alongside location and vehicle data, helping teams improve routing, asset utilization, and security workflows. To learn more about how Plaspy works with devices like the XT31 visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and implementation guidance consult the official manufacturer documentation at https://xirgo.com/.
