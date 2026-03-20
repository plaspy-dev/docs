---
slug: /navtelekom/s_4513/protocol
id: s_4513-protocol
sidebar_label: Protocol
title: Navtelekom - СМАРТ S-4513 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Navtelekom СМАРТ S 4513 and how the tracker connects to Plaspy for real time tracking and telemetry
keywords:
  - Navtelekom СМАРТ S-4513 protocol
  - Navtelekom S 4513 GPS protocol
  - СМАРТ S 4513 communication protocol
  - Navtelekom tracker Plaspy compatibility
  - S 4513 GPS tracker integration
  - Navtelekom telemetry protocol
  - vehicle tracking Plaspy compatibility
  - fleet management Navtelekom S 4513
  - GNSS tracker protocol guide
  - S 4513 connectivity Plaspy
---

# Navtelekom - СМАРТ S-4513 Protocol

This page describes the public protocol context for using the Navtelekom СМАРТ S-4513 tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, high level terms so fleet managers and integrators can understand the connection model, common configuration points, and what to check when onboarding devices.

The SMART S-4513 is a compact GLONASS GPS vehicle tracker with a 4G modem, dual SIM redundancy, built in GNSS and GSM antennas, and a backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page explains the transport and detection context used by Plaspy and highlights practical compatibility considerations without exposing private implementation details.

## Protocol Overview

The tracker reporting protocol defines how the S-4513 packages location, telemetry, and event data and sends it to a remote server such as Plaspy. For integration purposes you only need to understand the role the protocol plays in identifying the device, carrying position and sensor telemetry, and supporting operational features like inputs and outputs reporting.

- Transfers GNSS based position and timestamp information to the server for live maps and history playback.
- Sends digital and analog input states so Plaspy can interpret ignition, door, alarm, and sensor events.
- Streams fuel and sensor telemetry gathered via analog, MODBUS, RS-485, or Bluetooth to be mapped into Plaspy modules.
- Provides device identifiers and metadata that allow Plaspy to associate incoming messages with the correct asset.
- Supports event driven messages triggered by on device logic so Plaspy can generate alerts and automated workflows.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models without requiring users to manually select a protocol in most cases. Plaspy receives incoming connections on a shared endpoint and examines incoming traffic to match it to a supported tracker format so properly configured devices will be handled automatically.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on tracker capabilities and user configuration.
- Plaspy automatically detects the tracker protocol so manual protocol selection is usually not required when the device points to the Plaspy endpoint.
- If a device is not detected automatically, reviewing device reporting settings and manufacturer documentation is the recommended next step.

## Transport and Connection Context

Connection context covers how the S-4513 reaches Plaspy rather than internal packet layouts. The S-4513 can use available cellular data to open either UDP or TCP sessions toward the Plaspy ingestion endpoint. Knowing the server address, transport options, and port used by Plaspy is typically enough to configure the tracker to report correctly.

- The device may be configured using UDP or TCP on port 8888.
- Devices may point to d.plaspy.com or 54.85.159.138 as the destination server.
- All devices in Plaspy use the same port which simplifies device configuration across a fleet.
- Cellular connectivity and dual SIM support on the S-4513 improve uptime for outbound reporting.
- Short power interruptions are mitigated by the internal backup battery which helps maintain connectivity for brief outages.

## Protocol Compatibility Notes

- Firmware variations between device batches can change available features and message behavior; validate the firmware version when troubleshooting.
- Hardware revisions or optional accessories such as external sensors may alter the telemetry set and require adjustments in Plaspy mapping.
- Transport selection matters for network environments that restrict UDP or TCP; confirm the tracker is set to the transport supported by the operator.
- Manufacturer side settings and remote configuration tools may be required to point the device to d.plaspy.com or the Plaspy server IP.
- Plaspy automatically detects the tracker protocol but proper device identifiers and reporting cadence are required for reliable detection.
- Always cross check capabilities and commands with official manufacturer documentation for model specific details.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure successful setup, reliable reporting, and efficient troubleshooting when operating the S-4513 with Plaspy. Knowing what the protocol is responsible for reduces integration time and helps teams diagnose where an issue originates.

- Ensures correct destination server settings so the tracker can reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps map device inputs and sensor channels into Plaspy so telemetry is usable in dashboards and reports.
- Guides selection between UDP and TCP based on network policy and reliability needs.
- Aids in identifying mismatches caused by firmware or hardware differences that affect message content.
- Improves troubleshooting by clarifying whether an issue is network transport, configuration, or device side.

## Why Use Plaspy with This Protocol

Using the Navtelekom СМАРТ S-4513 with Plaspy provides a straightforward path to continuous location and telemetry streaming for fleets and asset managers. The S-4513 hardware features such as dual SIM redundancy, GLONASS GPS, diverse I O options, and a backup battery complement Plaspy capabilities for live tracking, event alerts, and sensor driven workflows. Together they deliver the visibility and control organizations need for vehicle monitoring and operational oversight.

To learn more about how Plaspy works with cellular GNSS trackers and fleet telemetry, visit https://www.plaspy.com. For the latest device specific protocol references, firmware notes, and configuration guides consult the manufacturer at https://www.navtelecom.ru/ as protocol support and firmware behavior can change over time.
