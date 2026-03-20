---
slug: /teltonika/ftc305/protocol
id: ftc305-protocol
sidebar_label: Protocol
title: Teltonika - FTC305 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FTC305 and Plaspy compatibility with connection context and practical integration notes
keywords:
  - Teltonika FTC305 protocol
  - FTC305 Plaspy compatibility
  - FTC305 GPS tracker protocol
  - vehicle tracking FTC305
  - FTC305 CAN bus telemetry
  - Teltonika e mobility tracker
  - FTC305 4G LTE tracker
  - Plaspy device integration
  - fleet tracking FTC305
  - FTC305 connection settings
---

# Teltonika - FTC305 Protocol

This page describes the public protocol context for using the Teltonika FTC305 with Plaspy. It focuses on how the device communicates at a high level, what to expect when integrating FTC305 telemetry and CAN bus data into Plaspy, and practical connection information that helps with setup and troubleshooting without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The FTC305 is compatible with Plaspy and commonly deployed for e mobility and fleet telematics because it provides GNSS fixes, CAN derived telemetry, and resilient power options. Exact protocol behavior and available messages can vary with firmware version, hardware revision, and manufacturer implementation, so confirm device specifics in the manufacturer documentation when needed.

## Protocol Overview

The FTC305 communicates telemetry, position, and vehicle data to a remote server using the device reporting protocol implemented by Teltonika. In practice, the protocol enables the tracker to identify itself to Plaspy, deliver GNSS positions and CAN bus attributes, and maintain an ongoing session suitable for fleet monitoring and alerts.

- The protocol carries GNSS position reports and timestamps that Plaspy uses for live mapping and historical tracks.
- CAN bus telemetry and vehicle state values are transmitted so Plaspy can populate dashboards and event rules.
- Identification fields from the device allow Plaspy to associate incoming data with the correct vehicle and configuration.
- The protocol supports periodic and event driven reporting to reflect motion, ignition, or telemetry thresholds.
- Transport behavior may change per firmware or device variant but the protocol role remains to deliver usable data to the server.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and automatically determines the tracker protocol used by each incoming device. In most cases, a properly configured FTC305 will begin sending data to Plaspy without requiring manual protocol selection inside the platform.

- Devices report to the Plaspy server at d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy listens on the platform port 8888 and uses that same port for all supported devices.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- Users normally only need to configure the FTC305 to point to the Plaspy endpoint and select UDP or TCP as supported by the device.
- If data does not appear, check reporting IP, port, transport mode, and firmware settings on the tracker.

## Transport and Connection Context

The FTC305 supports common network transports and can be configured to use either UDP or TCP depending on deployment needs and firmware options. Plaspy’s public settings provide a consistent target for these devices to report to.

- The device may be configured using UDP or TCP on port 8888.
- Plaspy’s public server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port, 8888, simplifying configuration across mixed fleets.
- Choose UDP for lower overhead and TCP where session reliability or firewall traversal benefits are required.
- Confirm transport selection and network reachability from the device network before finalizing deployment.

## Protocol Compatibility Notes

- Firmware revisions can change which messages or telemetry fields are available from the FTC305.
- Hardware variants and factory install options may affect available connectors, antenna behavior, and telemetry channels.
- Manufacturer configuration profiles can alter report intervals, CAN parameter selection, and event triggers.
- Transport mode selection between UDP and TCP may be constrained by carrier or local network policies.
- Validate compatibility for specific SKUs and firmware with the official Teltonika documentation before large scale deployment.
- Plaspy’s automatic protocol detection reduces manual platform configuration but does not replace device level configuration checks.

## Why Protocol Understanding Matters

Understanding the communication protocol helps fleets achieve reliable reporting, faster troubleshooting, and predictable behavior when managing many devices through Plaspy. Knowing what the tracker will send, how it connects, and what can change between firmware releases improves operational outcomes.

- Faster identification of misconfigurations such as incorrect server, port, or transport selection.
- Improved troubleshooting when analyzing gaps in position reports or missing CAN telemetry.
- Clearer expectations for what telemetry fields are available from a given firmware or hardware variant.
- Better planning for network and power resilience based on device reporting behavior.
- Easier validation of device behavior during commissioning and after firmware updates.

## Why Use Plaspy with This Protocol

Using the Teltonika FTC305 with Plaspy gives organizations a practical path to integrate GNSS position data and CAN derived telemetry into fleet workflows. The FTC305’s 4G LTE connectivity, robust power range, and external antenna options make it suitable for e mobility, material handling, and other vehicle classes where continuous location and operational telemetry matter. When configured to report to Plaspy, the FTC305 can feed real time location, alerts, and historical telemetry into Plaspy dashboards and rules.

To learn more about Plaspy and how it works with devices like the FTC305 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware variants always verify information with the manufacturer at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
