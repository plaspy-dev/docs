---
slug: /teltonika/fmb240/protocol
id: fmb240-protocol
sidebar_label: Protocol
title: Teltonika - FMB240 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMB240 GPS tracker compatibility and Plaspy connection settings
keywords:
  - Teltonika FMB240 protocol
  - FMB240 GPS protocol
  - Teltonika FMB240 Plaspy
  - FMB240 communication protocol
  - FMB240 tracking protocol
  - Teltonika GPS tracker protocol
  - CAN bus telemetry Plaspy
  - Bluetooth LE tracker Plaspy
  - vehicle tracking protocol Plaspy
  - fleet management FMB240
---

# Teltonika - FMB240 Protocol

This page covers the public protocol context for using the Teltonika FMB240 tracker with Plaspy. It explains how the device communicates at a high level, which connection endpoints Plaspy exposes for reporting, and which aspects of the tracker protocol are relevant for successful integration into a fleet management workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The FMB240 is a compact IP67-rated tracker with built-in CAN bus reading and Bluetooth LE that can feed location and telemetry into Plaspy; verify firmware and variant details before deployment since manufacturer status and behavior can change.

## Protocol Overview

The protocol in this context is the device reporting and control interface used by the FMB240 to send GPS, CAN-derived telemetry, and sensor data to a remote server. It defines how the tracker identifies itself, how telemetry is reported, and how optional features such as Bluetooth sensor pairing and CAN channels are represented to the server.

- Enables the FMB240 to report location, timestamps, and CAN-sourced vehicle parameters to Plaspy for real-time tracking and history.
- Conveys telemetry from Bluetooth LE sensors and internal inputs so Plaspy can visualize and alert on environmental data.
- Carries device identification and basic status information so the platform can associate incoming messages with the correct asset.
- Supports both configuration and operational reporting modes depending on device settings and installer choices.
- Serves as the boundary between device firmware behavior and Plaspy’s data normalization and presentation layers.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared public endpoint and automatically determines the tracker protocol based on the incoming connection and payload characteristics. In most cases, users simply configure the device to report to the Plaspy endpoint and the platform handles protocol recognition without manual selection.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- If a device is properly pointed at the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required

## Transport and Connection Context

Connection transport determines how the FMB240 establishes a session with Plaspy but does not change the high-level reporting intent. Devices can be configured to use different transport types and the same Plaspy endpoint handles both connection styles for supported models.

- The device may be configured using UDP or TCP on port 8888
- Devices may be pointed to d.plaspy.com or 54.85.159.138 for reporting
- All devices in Plaspy use the same port which simplifies device-side configuration
- Transport choice (UDP vs TCP) depends on device firmware, installer configuration, and network conditions
- Use the Plaspy endpoint details above when configuring reporting on the FMB240 so messages reach the platform for automatic detection

## Protocol Compatibility Notes

- Firmware revisions can affect which telemetry fields are available and how CAN messages are reported; check firmware version when validating behavior.
- Hardware variants such as LV-CAN200 or ALL-CAN300 options influence available CAN channels and supported vehicle networks.
- Manufacturer packaging and order codes may vary the included I/O or accessories that affect installation and data availability.
- Transport selection (UDP vs TCP) is an installer decision and may impact reliability on specific mobile networks.
- Plaspy’s automatic detection minimizes the need for user-selected protocol settings, but device-side reporting must target the Plaspy endpoint exactly.
- Confirm support status and product availability with the manufacturer, especially for devices listed with an End of Life notice.

## Why Protocol Understanding Matters

Understanding how the FMB240 communicates with Plaspy helps ensure a reliable installation, accurate telemetry mapping, and efficient troubleshooting when devices do not behave as expected. Awareness of protocol and transport considerations leads to better outcomes in deployment and operations.

- Ensures correct device reporting endpoint and transport settings so data reaches Plaspy reliably
- Helps map CAN channels and Bluetooth sensor data to the appropriate fields in Plaspy for reporting and alerts
- Aids troubleshooting when telemetry is missing by separating network, transport, and firmware causes
- Guides firmware and configuration updates that may change available telemetry or reporting behavior
- Supports informed decisions about hardware variants and installation wiring that affect data collection

## Why Use Plaspy with This Protocol

Using the Teltonika FMB240 with Plaspy provides a concise way to combine GPS location, CAN-derived vehicle diagnostics, and Bluetooth sensor telemetry into a single fleet management view. For organizations managing mixed fleets, the FMB240’s compact form factor, CAN support, and environmental sensing options make it a practical choice when consolidated telemetry and operational visibility are required.

To learn more about Plaspy and how it integrates with devices like the FMB240 visit https://www.plaspy.com. For device specific protocol documents, firmware notes, and up to date manufacturer details verify information at https://www.teltonika-gps.com/ because protocol support and firmware behavior can change over time.
