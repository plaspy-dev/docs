---
slug: /ruptela/pro5s/protocol
id: pro5s-protocol
sidebar_label: Protocol
title: Ruptela - Pro5S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating the Ruptela Pro5S GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Ruptela Pro5S protocol
  - Ruptela Pro5S GPS protocol
  - Ruptela Pro5S communication protocol
  - Ruptela Pro5S tracking protocol
  - Plaspy Ruptela compatibility
  - Pro5S fleet tracking
  - Pro5S telemetry protocol
  - Ruptela Pro5S CANbus integration
  - Pro5S BLE sensor integration
  - Ruptela Pro5S LATAM
---

# Ruptela - Pro5S Protocol

This page documents the public protocol context for using the Ruptela Pro5S GPS tracker with Plaspy. It explains how the device communicates at a high level, how Plaspy receives and recognizes device reports, and what aspects of the reporting workflow are relevant when integrating Pro5S units into a Plaspy deployment. The Pro5S is a professional LTE Cat4 tracker with 3G fallback, a u‑blox GNSS receiver, rich CANbus access, Bluetooth LE, audio, and onboard logging, and those capabilities determine the types of telemetry that will be delivered to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page focuses on public, implementation‑agnostic information that helps administrators and integrators prepare a Pro5S for reliable reporting to the Plaspy endpoint while advising verification of device specific details against official manufacturer documentation.

## Protocol Overview

The Pro5S communicates telemetry, position, and event data to a remote server using the device's reporting protocol. At a high level the protocol is the set of rules and message types the tracker uses to identify itself, report GNSS fixes and sensor data, and convey alarm or status events so Plaspy can ingest and present usable information to users.

- Enables the Pro5S to send GNSS positions, timestamps, and basic movement status to Plaspy for mapping and geofencing.
- Transports CANbus derived parameters and I/O events so fuel, RPM, ignition state, and accessory telemetry are visible in Plaspy.
- Provides identifiers and session context that let Plaspy associate incoming reports with the correct device record.
- Carries device events such as tamper, jamming, impact, and backup battery state so alerts and workflows can be triggered.
- Allows the tracker to buffer and forward stored logs after reconnection, enabling incident reconstruction and continuity of service.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports at a shared ingestion endpoint and automatically determines the tracker protocol so most users do not need to select a protocol manually inside the platform. Proper device configuration to point at the Plaspy endpoint is typically the only requirement on the device side.

- Plaspy automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint.
- All devices in Plaspy use the same port for communication, simplifying device setup across models.
- If a Pro5S is configured to report to the Plaspy endpoint, the platform will identify the incoming format and handle parsing without manual protocol selection.
- Ensure device identifiers (IMEI or configured device ID) are correct so Plaspy can match reports to the right asset record.
- When troubleshooting connectivity, confirm the device is addressing the Plaspy server and using an allowed transport mode.

## Transport and Connection Context

Connection details determine how packets reach the Plaspy ingestion service but do not expose parser internals. The Pro5S may be set to use either UDP or TCP depending on the unit configuration and network environment. Plaspy accepts reports on its shared endpoint and listens on a single common port for all supported devices.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The port used by Plaspy for ingestion is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port, which simplifies fleet wide provisioning and firewall rules.
- Choose UDP or TCP on the device based on network reliability and the device firmware options; both transports are supported for reporting to Plaspy.
- Confirm APN and mobile data settings on the Pro5S so the unit can reach the Plaspy endpoint across carrier networks.

## Protocol Compatibility Notes

- Firmware can change message timing, available fields, and optional features; always confirm the Pro5S firmware level when validating behavior.
- Hardware revisions or regional SKUs may expose different radio band sets, accessory wiring, or trimmed feature sets that affect which telemetry is reported.
- Transport selection (UDP versus TCP) can influence delivery characteristics but not the high level types of telemetry the tracker can send.
- Manufacturer configuration interfaces and remote management tools may be required to fully enable features such as CAN mapping, BLE sensor discovery, or audio channels.
- Plaspy’s automatic detection reduces the need for manual protocol selection, but correct device addressing and unique device IDs are essential.
- Validate any advanced or nonstandard uses such as custom CAN mappings or special I/O wiring with the official Ruptela documentation.

## Why Protocol Understanding Matters

Understanding how the Pro5S communicates helps teams set up devices correctly, troubleshoot issues faster, and maintain reliable operations over time. Protocol awareness is valuable even when Plaspy handles parsing automatically because setup, transport, and firmware behavior still influence what the platform receives.

- Ensures devices are pointed to the correct Plaspy endpoint and transport so data arrives reliably.
- Helps interpret why specific telemetry fields appear or are missing after firmware updates or configuration changes.
- Supports network and firewall configuration by clarifying the domain, IP, and port that must be reachable.
- Aids in planning for redundancy, offline logging, and reconnection behavior to preserve critical location history.
- Makes troubleshooting more efficient by narrowing whether an issue is on the device, the network, or the ingestion side.

## Why Use Plaspy with This Protocol

Ruptela Pro5S delivers rich vehicle telemetry, high precision GNSS, and multiple sensors that combine well with Plaspy’s ingestion and visualization capabilities. Using Pro5S units with Plaspy provides fleet operators with real time maps, event alerts, and telemetry dashboards that drive operational visibility and security for LATAM fleet deployments.

If you are deploying Pro5S devices, confirm that each unit is configured to report to d.plaspy.com or to 54.85.159.138 on port 8888 using either UDP or TCP as appropriate for your network. Plaspy’s shared port and automatic protocol detection reduce configuration overhead for large fleets, while the Pro5S feature set enables deeper telemetry when required. To learn more about Plaspy and how it works with fleet devices, visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware notes, and configuration tools consult the manufacturer at https://ruptela.com/ for accuracy and updates.
