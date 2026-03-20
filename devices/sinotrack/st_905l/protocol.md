---
slug: /sinotrack/st_905l/protocol
id: st_905l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-905L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for connecting the SinoTrack ST 905L to Plaspy for real time tracking and telemetry
keywords:
  - SinoTrack ST 905L protocol
  - SinoTrack ST 905L GPS protocol
  - ST 905L Plaspy compatibility
  - ST 905L communication protocol
  - ST 905L tracking protocol
  - Plaspy device compatibility
  - Plaspy tracker integration
  - GPS tracker protocol guide
  - vehicle tracking protocol
  - asset tracker protocol
---

# SinoTrack - ST-905L Protocol

This page describes the public protocol context for using the SinoTrack ST-905L tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general, how to point the tracker to Plaspy ingestion, and what to expect during setup and verification. The content is intended for technical integrators and fleet administrators preparing devices for real time tracking and telemetry ingestion.

The ST-905L is a rugged, waterproof asset and vehicle tracker with LTE Cat-1 and 2G GSM connectivity and a high sensitivity u-blox GNSS receiver. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to Plaspy’s endpoint. Exact packet behavior and command support can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device firmware behavior against the manufacturer documentation when needed.

## Protocol Overview

The tracker communication protocol is the set of rules and message semantics the ST-905L uses to report location, telemetry, and status to a remote server. For integration with Plaspy, the important public details are how the device addresses the server, the transport it uses, and the fact that it can be configured to send regular position updates, telemetry, and alert messages that Plaspy can ingest and display.

- Enables the ST-905L to report GNSS position, battery and power status, and basic telemetry to a remote server.
- Identifies the device to the server so Plaspy can associate incoming reports with the correct asset or vehicle record.
- Carries periodic position updates and event messages (for example movement or power loss) that become dashboards, geofence events, and histories in Plaspy.
- Supports remote configuration via SMS for APN and server settings so installers can repoint the device to a third party platform like Plaspy.
- Allows the device to use cellular uplink over LTE Cat-1 or 2G networks to deliver timely location and status information.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a shared ingestion endpoint and automatically determines the tracker protocol used by reporting devices. When an ST-905L is configured to send data to Plaspy, the platform will match incoming messages to device records and convert the reported fields into Plaspy telemetry and position objects without manual protocol selection in most cases.

- Plaspy exposes a single ingestion endpoint for devices to report to so users point trackers to d.plaspy.com or the platform IP directly.
- The Plaspy ingestion endpoint accepts incoming connections on port 8888 and the platform automatically detects the tracker protocol.
- Plaspy supports both TCP and UDP reporting from devices configured to use the same port.
- When the ST-905L is correctly configured to report to Plaspy, users typically do not need to choose a protocol inside Plaspy manually.
- Proper device identification such as IMEI or device ID in reported messages helps Plaspy associate reports with the correct account and device record.

## Transport and Connection Context

Connection settings determine how the ST-905L reaches Plaspy and how the platform receives the data stream. The ST-905L supports pointing to a custom server address and can be configured over SMS to change the APN and server destination. In practice, installers will set the server host and transport type to match Plaspy’s ingestion configuration.

- Devices may be configured to send data using UDP or TCP on port 8888 depending on device support and field configuration.
- Trackers can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy ingestion IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so installers use the same port regardless of tracker brand or model.
- Choose UDP or TCP on the device according to local network reliability and device SMS configuration options.
- Ensure the device has a data capable SIM and correct APN settings so it can reach the Plaspy endpoint over cellular networks.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions of the ST-905L can change which optional telemetry fields or commands are supported.
- Some variants may expose extra sensors or I/O that produce additional telemetry; confirm which features your specific unit supports before relying on them in Plaspy.
- Manufacturer default settings typically point to the vendor cloud; use SMS provisioning to update APN and server address to Plaspy where supported.
- Transport selection between UDP and TCP is configurable on the device and may affect delivery behavior under certain network conditions.
- Always validate a small number of devices in your deployment environment before scaling to ensure regional cellular bands and firmware features meet your needs.
- Consult SinoTrack documentation for model specific SMS commands and configuration syntax when reprovisioning devices.

## Why Protocol Understanding Matters

Knowing how the ST-905L communicates helps ensure a smooth integration with Plaspy, reduces setup time, and improves long term reliability and troubleshooting. A clear grasp of the communication context allows teams to verify network reachability, configure APN and server settings correctly, and interpret device behavior when issues occur.

- Confirms the device is addressing the correct Plaspy endpoint so data arrives where expected.
- Helps diagnose connectivity problems by checking transport selection, APN, and server host settings.
- Makes it easier to verify that device identifiers in reports match Plaspy device records for accurate history and alerts.
- Guides decisions about reporting intervals, power profiles, and cellular plans to meet operational requirements.
- Reduces time spent on support by providing a concise checklist for field technicians during activation.

## Why Use Plaspy with This Protocol

Pairing the SinoTrack ST-905L with Plaspy provides organizations with a practical way to convert device reports into actionable fleet and asset intelligence. The ST-905L’s rugged design, long battery life, and cellular uplink capabilities make it suitable for vehicle and high value asset tracking, while Plaspy ingests those reports to deliver location visibility, geofencing, alerts, and historical reporting.

To learn more about how Plaspy works with devices like the ST-905L and to view platform features, visit https://www.plaspy.com. For the most current device specific protocol details, SMS command syntax, and firmware behavior, verify information with the manufacturer at https://www.sinotrackgps.com/ as device implementation and firmware can change over time.
