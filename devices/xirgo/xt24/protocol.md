---
slug: /xirgo/xt24/protocol
id: xt24-protocol
sidebar_label: Protocol
title: Xirgo - XT24 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT24 integration with Plaspy server and connection context
keywords:
  - Xirgo XT24 protocol
  - Xirgo XT24 GPS protocol
  - XT24 communication protocol
  - XT24 tracking protocol
  - Xirgo OBD tracker compatibility
  - Plaspy device integration
  - Plaspy protocol detection
  - vehicle telematics protocol
  - GPS tracker protocol guide
  - LTE Cat M1 tracker protocol
---

# Xirgo - XT24 Protocol

This page describes the public protocol context for using the Xirgo XT24 OBD GPS tracker with the Plaspy platform. It explains how the XT24's telemetry streams—GNSS position, OBD vehicle parameters, and accelerometer events—are delivered to Plaspy and what role the tracker communication protocol plays in that process.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. The XT24 is compatible with Plaspy out of the box, but exact protocol behavior and available telemetry can vary by firmware, hardware revision, and manufacturer implementation. For device specific firmware notes consult the manufacturer documentation.

## Protocol Overview

At a high level, the tracker protocol defines how the XT24 formats and transmits status, position, and vehicle-bus telemetry so Plaspy can ingest and present useful location and diagnostic data. The protocol is the bridge between the physical device and Plaspy services, enabling real time visibility and event driven workflows.

- Device identification and registration information that lets Plaspy associate messages with the correct vehicle record.
- Telemetry delivery of GNSS position, speed, and OBD PIDs so Plaspy can display location and vehicle parameters.
- Event and alarm reporting such as motion events from the 3 axis accelerometer for movement, impact, or tamper signals.
- Periodic heartbeats and status updates that communicate device health and connectivity to Plaspy.
- Optional command and response paths used by remote device management where supported by the device and manufacturer.

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker connections on a unified endpoint and automatically determines the device protocol from the incoming traffic pattern and registration information. In most deployments you do not need to select a protocol inside Plaspy if the XT24 is configured to report to the Plaspy endpoint.

- Plaspy listens on the public endpoint d.plaspy.com and the associated server IP 54.85.159.138 using port 8888.
- All devices supported by Plaspy use the same port for reporting which simplifies device configuration and large scale rollouts.
- Plaspy automatically detects the tracker protocol so a properly pointed XT24 will be identified without manual protocol selection.
- Ensure the XT24 is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 so messages reach the Plaspy ingest service.
- Both UDP and TCP transports are supported by devices depending on device and firmware configuration.

## Transport and Connection Context

Transport and connection choices affect how the XT24 delivers data to Plaspy but do not change the high level role of the protocol. The device may use either UDP or TCP on the shared Plaspy port depending on what the device firmware and carrier setup allow.

- XT24 may be configured to report over UDP or TCP on port 8888 based on device settings and firmware capabilities.
- Devices can be pointed at the Plaspy hostname d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices which reduces configuration complexity during deployment.
- Cellular network factors such as NAT, session timeouts, and carrier behavior can influence the reliability of TCP versus UDP for a particular deployment.
- When configuring a fleet, verify that SIM provisioning and APN settings permit outbound connections to d.plaspy.com on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change which OBD PIDs and OEM parameters the XT24 reports; expect variance between firmware versions.
- Hardware revisions or optional features on the XT24 may add or remove telemetry streams such as certain accelerometer events or backup battery reporting.
- Some vehicles expose only a subset of OBD PIDs; OBD telemetry availability depends on the vehicle as well as the tracker firmware.
- Transport selection between TCP and UDP may be constrained by carrier networks or by the device firmware configuration.
- Manufacturer side variations or regional firmware builds can cause subtle differences in how messages appear to Plaspy.
- Always validate compatibility for large rollouts by testing devices with representative vehicle models and firmware builds.

## Why Protocol Understanding Matters

Understanding the XT24 communication protocol helps ensure reliable setup, accurate telemetry, and efficient troubleshooting when integrating devices with Plaspy. A practical grasp of what the protocol delivers makes it easier to interpret device behavior and to scale deployments predictably.

- Faster commissioning because you can confirm the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport.
- Improved troubleshooting when connectivity, missing telemetry, or unexpected events occur.
- Clear expectations about which OBD parameters and accelerometer events will be available from a given hardware and firmware combination.
- Better planning for network behavior including keepalives, session persistence, and cellular provisioning implications.
- More reliable fleet operations through proactive validation of firmware differences and manufacturer notes.

## Why Use Plaspy with This Protocol

Using the Xirgo XT24 with Plaspy gives fleet operators a compact, plug and play option to collect GNSS position, vehicle telemetry from the OBD port, and motion events from an integrated accelerometer. The XT24’s direct OBD connection and LTE Cat M1 cellular link make it well suited for passenger and light duty vehicle fleets that need timely location, ignition status, and select engine parameters in a low power footprint.

Plaspy simplifies device configuration by listening on a single port and automatically detecting tracker protocols. To learn more about how Plaspy works with devices like the XT24 visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware changes, and manufacturer implementation details verify information on the Xirgo website at https://xirgo.com/.
