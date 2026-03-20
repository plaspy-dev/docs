---
slug: /teltonika/fmb130/protocol
id: fmb130-protocol
sidebar_label: Protocol
title: Teltonika - FMB130 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Teltonika FMB130 with Plaspy for reliable GPS telemetry and device connectivity
keywords:
  - Teltonika FMB130 protocol
  - Teltonika FMB130 GPS protocol
  - Teltonika FMB130 communication protocol
  - FMB130 Plaspy
  - FMB130 tracking protocol
  - Teltonika GPS protocol
  - vehicle tracker protocol
  - fleet tracking Plaspy
  - FMB130 telemetry
  - CAN fuel monitoring
---

# Teltonika - FMB130 Protocol

This page summarizes the public protocol context for using the Teltonika FMB130 tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in non sensitive, implementation neutral terms so you can understand connectivity, reporting behavior, and practical integration considerations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general, public aspects of the FMB130 reporting and how it connects to Plaspy rather than internal packet formats or private parsing logic.

## Protocol Overview

The device communication protocol defines how the FMB130 reports position, telemetry, and sensor data to a remote server. With Plaspy the important outcomes are reliable location updates, CAN sourced vehicle parameters, BLE sensor readings, and remote control signals being available to the platform.

- Enables the FMB130 to send GPS positions, speed and movement events to Plaspy for live tracking and historical reporting.
- Transports CAN derived telemetry such as fuel level, odometer, RPM and engine temperature into Plaspy dashboards and reports.
- Delivers Bluetooth Low Energy sensor telemetry and beacon data so BLE devices paired to the tracker appear in Plaspy.
- Supports remote control features such as engine blocking signals when authorized and exposed through the platform.
- Works over standard network transports so the tracker can reach Plaspy at the shared platform endpoint.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections and device reports on a common endpoint and port and uses automated detection routines to identify the tracker protocol. In practice this means a properly configured FMB130 needs only to be pointed at the Plaspy endpoint to begin communication without manual protocol selection inside Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol once the device connects and starts reporting.
- All devices in Plaspy use the same port for communications, simplifying device setup and firewall rules.
- Users typically do not need to select a protocol manually in Plaspy if the device is configured to report to the Plaspy endpoint.
- Proper device identification and reporting cadence help Plaspy map incoming data to the correct device record.

## Transport and Connection Context

Connection context is about how the FMB130 reaches the Plaspy endpoint on the network. The FMB130 supports common cellular transports and can be configured to use either UDP or TCP depending on device settings and deployment requirements.

- The device may be configured using UDP or TCP on port 8888.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Port 8888 is the shared port used by Plaspy for all supported devices, which reduces configuration differences across a mixed fleet.
- Transport choice between UDP and TCP can affect delivery characteristics such as retransmission and connection state, so verify the device network mode if you have strict connectivity requirements.
- Network readiness, APN configuration, and operator coverage are common practical factors that influence successful device reachability to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior or add optional fields; check device firmware notes when troubleshooting unexpected data.
- Hardware revisions and accessory modules such as CAN adapters or BLE sensors can introduce differences in available telemetry and configuration options.
- Manufacturer tools such as Teltonika Configurator or FOTA WEB are typical ways to adjust device connection settings and update firmware.
- Transport selection (UDP versus TCP) matters for network and firewall configuration when devices are deployed at scale.
- Confirm any vehicle interface wiring and CAN adapter compatibility before mass deployment to ensure the expected parameters are reported.
- Validate compatibility and recommended configurations against official manufacturer documentation for the specific FMB130 build or bundle you have.

## Why Protocol Understanding Matters

A practical understanding of the device protocol and connection context helps ensure a smooth integration with Plaspy and reduces time spent on common setup issues and troubleshooting.

- Ensures correct network and APN settings so devices reliably reach d.plaspy.com or the Plaspy IP on port 8888.
- Helps diagnose missing telemetry when firmware or hardware variants change the set of reported parameters.
- Guides decisions about using UDP versus TCP for transport based on delivery and reliability needs.
- Informs configuration steps when adding CAN adapters, BLE sensors, or remote control features.
- Supports planning for firmware updates and remote management to maintain consistent reporting behavior.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB130 with Plaspy provides fleets and equipment operators a combined solution for location, fuel monitoring, CAN telemetry, and BLE sensor integration. The FMB130’s vehicle focus and flexible inputs make it well suited for construction, agriculture, rental fleets, and cold chain scenarios where Plaspy’s visualization, alerts, and reporting deliver operational value.

To learn more about Plaspy and how the platform works with devices like the FMB130, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration tools, verify information on the manufacturer site https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
