---
slug: /teltonika/fmb122/protocol
id: fmb122-protocol
sidebar_label: Protocol
title: Teltonika - FMB122 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Teltonika FMB122 connectivity with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Teltonika FMB122
  - FMB122 protocol
  - Teltonika GPS protocol
  - FMB122 Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking FMB122
  - BLE sensor tracking
  - 1-Wire RFID iButton
  - dual SIM GPS tracker
  - fleet management GPS
---

# Teltonika - FMB122 Protocol

This page provides public protocol context for using the Teltonika FMB122 tracker with Plaspy. It focuses on the communication and connection considerations that let the compact 2G FMB122 deliver location, BLE sensor, and 1-Wire telemetry into the Plaspy platform for fleet management and anti theft workflows.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The FMB122 can vary in exact protocol behavior depending on firmware version, hardware revision, and manufacturer implementation, so this page explains the general communication context rather than device internal details.

## Protocol Overview

The protocol used by the FMB122 enables the device to identify itself to a server endpoint, report GNSS positions, and forward sensor inputs such as BLE and 1-Wire data so Plaspy can interpret and present telemetry. Plaspy ingests these reports to provide real time tracking, alerts, and logs without requiring per device manual protocol selection.

- Lets the tracker send periodic and event driven location updates to Plaspy for real time visibility.
- Carries ancillary sensor data from BLE devices and 1-Wire accessories so Plaspy can surface telemetry and alerts.
- Provides device identification information that allows Plaspy to associate incoming messages with a known tracker record.
- Enables the platform to convert raw device reports into operational events like geofence breaches, ignition changes, and sensor alarms.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a single shared endpoint and port and uses automatic detection to determine the appropriate handling for supported trackers. In most cases a properly configured FMB122 that reports to the Plaspy endpoint will be processed without manual protocol selection inside Plaspy.

- Plaspy listens on a single shared port for all devices which simplifies device configuration.
- Plaspy automatically detects the tracker protocol from the incoming connection and payload context.
- Users typically only need to point the device to the Plaspy address and choose TCP or UDP as supported by the hardware.
- When a device is configured to report to the Plaspy endpoint it will be associated with the correct device record automatically.

## Transport and Connection Context

Connection choices affect how the FMB122 reaches Plaspy but do not change the public protocol intent. The device may be configured to use UDP or TCP on the same Plaspy port depending on device capabilities and configuration tools. Plaspy accepts connections using the following public connection settings for incoming tracker traffic.

- Plaspy server domain name for device reporting is d.plaspy.com so devices can use a DNS name when provisioning.
- Plaspy server IP address is 54.85.159.138 which can be used instead of the domain where DNS is not available.
- The Plaspy port for tracker connections is 8888 and all devices supported by Plaspy use this same port.
- The FMB122 may be configured to use either UDP or TCP on port 8888 depending on firmware and provisioning choices.
- Choosing TCP or UDP is a device side configuration and does not require a different Plaspy endpoint.

## Protocol Compatibility Notes

- The FMB122 has public compatibility with Plaspy but exact message behavior can vary with firmware version.
- Hardware revisions or optional accessories such as external GNSS antennas or CAN adapters can affect available telemetry channels.
- Dual SIM operation affects cellular resilience but not the fundamental reporting endpoint or Plaspy port selection.
- BLE and 1-Wire sensor behavior depends on which accessories and firmware features are enabled on the device.
- Transport selection between TCP and UDP must match the device configuration and any intermediate network allowances.
- Always validate device behavior after provisioning by confirming the device is reporting to the Plaspy endpoint and appearing in the platform.

## Why Protocol Understanding Matters

Knowing the public protocol context helps ensure a successful setup, quicker troubleshooting, and predictable long term operation when using the FMB122 with Plaspy. Understanding how the device connects and what data it can deliver reduces integration friction and improves reliability.

- Reduces setup time by making it clear how to configure the device to report to Plaspy.
- Helps isolate connectivity issues by confirming DNS, IP, transport, and port settings.
- Clarifies which telemetry types to expect in Plaspy from BLE and 1-Wire sensors.
- Supports maintenance planning by noting that firmware and hardware changes can alter behavior.
- Improves operational confidence when verifying that dual SIM and external antenna options are used correctly.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB122 with Plaspy gives fleets and asset managers a straightforward path to capture location, driver identification, and environmental telemetry. The FMB122’s dual SIM resilience, BLE sensor support, and 1-Wire inputs make it a useful device for mixed telemetry use cases such as driver logs, anti theft alerts, and temperature monitoring, while Plaspy handles ingestion, mapping, and alerting.

To learn more about Plaspy and how it supports device connectivity and fleet telematics, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify current information on the Teltonika official site at https://www.teltonika-gps.com/ .
