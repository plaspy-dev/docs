---
slug: /globalsat/dg_388/protocol
id: dg_388-protocol
sidebar_label: Protocol
title: GlobalSat - DG-388 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat DG 388 and Plaspy compatibility
keywords:
  - GlobalSat DG 388 protocol
  - GlobalSat DG 388 GPS protocol
  - DG 388 tracking protocol
  - DG 388 Plaspy compatibility
  - GlobalSat GPS logger protocol
  - DG 388 telemetry
  - vehicle tracking DG 388
  - Plaspy GPS protocol
  - GPS data logger protocol
  - DG 388 route import
---

# GlobalSat - DG-388 Protocol

This page describes the public protocol context for using the GlobalSat DG-388 with Plaspy. It focuses on how the DG-388 can contribute telemetry and route history into Plaspy workflows and explains the network and file transfer context that matters for successful integration without exposing private implementation details.

The DG-388 is primarily a standalone GNSS data logger that records time, date, speed, altitude and coordinates for later export. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation, so consider the DG-388 description here as a general protocol context rather than a firmware specific specification.

## Protocol Overview

The protocol for a GPS tracker describes how the device identifies itself, how telemetry is packaged, and how that data is delivered to a service such as Plaspy. For the DG-388, which is optimized for offline logging and later export, the relevant protocol considerations include both the export formats used by the vendor PC tool and the general network reporting conventions used by live trackers when applicable.

- Defines how the device conveys location, time, speed, altitude and any event markers so Plaspy can reconstruct routes and telemetry.
- Enables device identification and session grouping so imported tracks are associated with the correct asset or user in Plaspy.
- Supports event and interval metadata such as motion events or logging mode so Plaspy can filter and analyze tracks effectively.
- For live reporting devices, the protocol determines the transport behavior and message cadence that Plaspy expects to ingest.
- For data loggers like the DG-388, the export file format and metadata mapping are the practical protocol surface for historical import into Plaspy.

## How Plaspy Detects the Protocol

Plaspy is built to accept telemetry from many devices and automatically detect the tracker protocol when a device connects to the platform endpoint. In most cases a properly configured device that reports to Plaspy does not require manual protocol selection in the platform.

- Plaspy server endpoint is reachable at d.plaspy.com and at the public IP 54.85.159.138 for device reporting.
- Plaspy accepts connections on a single shared port across supported trackers which simplifies device configuration.
- The shared port used by Plaspy is 8888 and all devices in Plaspy use that same port.
- Devices may send data to Plaspy using UDP or TCP on port 8888 depending on device support and configuration.
- When a compatible message arrives at the Plaspy endpoint the platform automatically detects the tracker protocol and routes data to the appropriate parser and storage pipeline.
- In practice, if a device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 and uses a supported transport, manual selection of a protocol inside Plaspy is typically not required.

## Transport and Connection Context

Transport context explains how a device reaches Plaspy over the network and how files are exchanged when devices are offline. While the DG-388 is mainly a USB export device, understanding common transport options helps when comparing it to live trackers or when integrating hybrid workflows.

- Devices may be configured to use UDP or TCP for reporting to Plaspy on port 8888.
- Plaspy accepts telemetry at d.plaspy.com and the equivalent IP address 54.85.159.138.
- Plaspy uses the same port 8888 for all devices, which simplifies firewall and router rules for deployments.
- For the DG-388 specifically, the typical workflow is local logging and PC tool export rather than continuous network reporting.
- When converting exported tracks for Plaspy import, ensure exported files include the standard telemetry fields Plaspy expects such as timestamps and coordinates.
- If a device with live reporting capability is being used alongside a DG-388, point that device to d.plaspy.com or 54.85.159.138 on port 8888 and select UDP or TCP according to the device documentation.

## Protocol Compatibility Notes

- The DG-388 is primarily a GNSS data logger with PC export rather than a live cellular tracker; compatibility for historical import depends on the export file formats supported by the GlobalSat PC tool.
- Firmware revisions and hardware batches can alter available logging modes, metadata fields, or export behaviors; confirm the device firmware level when troubleshooting import issues.
- Manufacturer settings or optional configuration utilities may change how event markers or motion triggers are recorded in exported data.
- Transport selection (UDP vs TCP) matters only for live reporting devices; the DG-388 uses file export for offline workflows.
- When combining DG-388 historical imports with live Plaspy telemetry from other devices, ensure timestamp formats and time zones align for accurate route reconstruction.
- Always validate export files against Plaspy import requirements and the current GlobalSat documentation.

## Why Protocol Understanding Matters

Understanding how a tracker communicates with Plaspy helps ensure reliable imports, correct attribution of tracks to assets, and efficient troubleshooting when telemetry is missing or malformed. Even for offline loggers like the DG-388, being familiar with the protocol surface and export behavior streamlines integration and analytics.

- Helps confirm that exported track files contain required fields such as timestamp and coordinates for Plaspy ingestion.
- Aids in diagnosing mismatches caused by firmware changes, timestamp formats or missing event metadata.
- Ensures network reporting devices are configured to use d.plaspy.com or 54.85.159.138 and port 8888 with the correct transport.
- Reduces configuration errors by aligning device export settings and Plaspy import expectations.
- Improves long term reliability by documenting firmware versions, export workflows and any post processing used before upload to Plaspy.

## Why Use Plaspy with This Protocol

Using the GlobalSat DG-388 alongside Plaspy is a practical approach when accurate historical route data is required without continuous cellular connectivity. The DG-388 provides high resolution GNSS logging and flexible interval modes that make it simple to collect long duration tracks and then export those sessions for analysis, archival and reporting within Plaspy.

Plaspy adds value by ingesting exported tracks or live telemetry and presenting route history, timelines, and analytic reports that complement operational monitoring. To learn more about how Plaspy handles device protocols and telemetry ingestion, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and export tool details verify information on the manufacturer site https://www.globalsat.com.tw/.
