---
slug: /teltonika/fmc800/protocol
id: fmc800-protocol
sidebar_label: Protocol
title: Teltonika - FMC800 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Teltonika FMC800 integration with Plaspy using shared connection settings and automatic detection
keywords:
  - Teltonika FMC800 protocol
  - Teltonika FMC800 GPS protocol
  - Teltonika FMC800 Plaspy
  - FMC800 tracking protocol
  - FMC800 vehicle tracking
  - FMC800 OBD tracker
  - Plaspy compatibility Teltonika
  - FMC800 communication protocol
  - fleet tracking FMC800
  - FMC800 Bluetooth sensor integration
---

# Teltonika - FMC800 Protocol

This page covers the public protocol context for using the Teltonika FMC800 tracker with Plaspy. It summarizes how the device typically communicates with Plaspy in safe, non sensitive terms and highlights the role of the reporting protocol for fleet tracking, crash trace, and sensor telemetry coming from an OBD II plug and play tracker.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary between firmware revisions, hardware variants, and manufacturer implementation choices, so this page focuses on stable public facts about connectivity and integration rather than firmware specific internals.

## Protocol Overview

The tracker reporting protocol is the mechanism that carries position, telemetry, sensor, and event data from the FMC800 to Plaspy so that location and vehicle state are usable in the platform. For an FMC800, the protocol is responsible for identifying the device, delivering GNSS fixes, crash trace or accelerometer events, OBD and vehicle data, and Bluetooth LE sensor information to the server.

- Transports vehicle position and GNSS data to Plaspy for mapping and history.
- Sends accelerometer based crash trace and event information for incident analysis.
- Transmits OBD derived vehicle metrics and status when exposed by the device.
- Relays Bluetooth LE sensor data for external beacons and sensors paired with the tracker.
- Carries device identification and reporting intervals so Plaspy can associate data with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a single shared endpoint and port and performs automatic protocol detection for incoming device traffic. In most cases a properly configured FMC800 that points to the Plaspy endpoint will start delivering usable telemetry without the user selecting a protocol inside Plaspy.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device capability and settings.
- When a device reports to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy automatically detects the tracker protocol.
- Manual protocol selection in the platform is generally unnecessary if the device is correctly pointed at the Plaspy endpoint.

## Transport and Connection Context

Connection details describe how packets are delivered from the FMC800 to Plaspy and are independent from higher level message formats. The FMC800 supports cellular connectivity and can be configured to report over the network to the Plaspy endpoint using standard transport options.

- The device may be configured using UDP or TCP on port 8888 to send data to Plaspy.
- Devices can point to the Plaspy server domain d.plaspy.com or directly to 54.85.159.138 depending on how the APN and server settings are entered.
- All devices in Plaspy use the same port which simplifies server configuration for fleets.
- Cellular fallback behavior such as LTE Cat 1 with 2G fallback is a device capability and affects network availability but not the public connection target.
- Ensure the carrier APN and device server fields are set so the FMC800 can reach d.plaspy.com on port 8888.

## Protocol Compatibility Notes

- Firmware revisions on the FMC800 can change how certain events or optional data fields are reported; always confirm behavior for your firmware level.
- Hardware variants or regional SKUs may offer different radio bands or sensor options that affect what telemetry is available.
- Transport choice between UDP and TCP can affect delivery characteristics such as retransmission and ordering; select the transport supported by your device configuration.
- Bluetooth LE sensor support and OBD data availability depend on device configuration and any paired peripherals.
- Manufacturer provided configuration tools or SMS command sets may differ by firmware and should be used according to Teltonika guidance.
- Validate compatibility and available features against the latest manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

A basic understanding of the FMC800 reporting protocol helps with initial setup, validating that crash trace and sensor telemetry arrive as expected, and troubleshooting connectivity or data quality issues in Plaspy. It also informs decisions about transport selection, power and reporting intervals, and how to interpret events in the platform.

- Helps identify why particular telemetry such as crash trace or OBD parameters may be missing.
- Assists in choosing UDP or TCP based on network and reliability needs.
- Guides configuration of reporting intervals and data filters to match operational requirements.
- Improves troubleshooting when devices cannot reach d.plaspy.com or when entries do not appear on the platform.
- Supports informed firmware upgrade planning by anticipating changes in reported fields.

## Why Use Plaspy with This Protocol

Using the FMC800 with Plaspy gives organizations the ability to combine accurate GNSS positioning, crash trace insights from the onboard accelerometer, OBD telemetry, and Bluetooth LE sensor data into a single fleet visibility platform. Plaspy’s automatic protocol detection and single port endpoint model simplify getting devices online so operations teams can focus on workflows and analytics rather than low level protocol selection.

If you want to learn more about Plaspy and how the platform works with devices like the Teltonika FMC800 visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions consult the manufacturer documentation at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
