---
slug: /teltonika/fmc230/protocol
id: fmc230-protocol
sidebar_label: Protocol
title: Teltonika - FMC230 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Teltonika FMC230 integration with Plaspy server settings and connection guidance
keywords:
  - Teltonika FMC230 protocol
  - Teltonika FMC230 GPS protocol
  - FMC230 protocol Plaspy
  - FMC230 communication protocol
  - FMC230 tracking protocol
  - Teltonika GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking FMC230
  - FMC230 BLE telemetry
  - FMC230 fleet management
---

# Teltonika - FMC230 Protocol

This page provides public protocol context for using the Teltonika FMC230 tracker with Plaspy. It summarizes how the FMC230 commonly communicates with Plaspy for live position, telemetry and BLE sensor data without delving into firmware internals or proprietary packet structures. The FMC230 is a rugged IP67 LTE Cat 1 tracker with 2G fallback and BLE support, and this documentation focuses on the observable communication patterns that matter for integration with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker reporting protocol when the device sends data to the Plaspy endpoint. Exact behavior can vary with firmware version, hardware revision and manufacturer implementation, so treat the guidance here as high level context that complements manufacturer documentation and firmware release notes.

## Protocol Overview

The FMC230 communicates telemetry and event information to a remote server using its built in cellular modem and BLE interfaces for external sensors. The device protocol defines how the tracker identifies itself, reports location and sensor values, and signals events that Plaspy ingests for realtime monitoring and historical reporting.

- Provides device identity and status so Plaspy can associate incoming data with the correct asset.
- Sends GNSS position, movement events and BLE sensor readings to the remote endpoint for live tracking and alerts.
- Transports I/O and analog telemetry such as ignition, door, and auxiliary sensor values for rules and workflows.
- Delivers periodic and event driven updates that Plaspy uses for geofencing, alerts and historical playback.
- Supports over the air firmware and remote management as documented by the manufacturer, which can affect reporting behavior.

## How Plaspy Detects the Protocol

Plaspy receives reports at a shared endpoint and automatically determines the tracker protocol when a device connects and sends data. Users typically do not need to select a protocol inside Plaspy if the FMC230 is configured to report to the correct Plaspy endpoint and port.

- Plaspy listens on a single, shared port for all supported devices which simplifies device configuration.
- When the FMC230 reports to the Plaspy endpoint, Plaspy matches incoming data to a known device and its protocol automatically.
- No manual protocol selection is generally required in Plaspy for properly configured devices.
- Detection is based on the actual data reported to the Plaspy endpoint and on device identification presented by the tracker.
- If connection or parsing issues occur, reviewing device configuration and firmware state is the recommended first step.

## Transport and Connection Context

The FMC230 may be configured to use UDP or TCP for reporting depending on device settings and network considerations. Plaspy accepts connections on its shared endpoint and port, and devices may be pointed to the Plaspy domain or its public IP.

- Plaspy server domain for reporting is d.plaspy.com for standard device configuration.
- The Plaspy server public IP is 54.85.159.138 if direct IP configuration is preferred.
- Devices can use UDP or TCP transport on port 8888 depending on the tracker configuration and network reliability needs.
- All devices connecting to Plaspy use the same port number which simplifies provisioning and mass deployment.
- Plaspy automatically detects the tracker protocol after the device reports to the shared endpoint and port.

## Protocol Compatibility Notes

- The FMC230 is described as Plaspy compatible but firmware revisions can change the exact reporting behavior and available features.
- Hardware SKUs and regional cellular variants may affect network behavior and supported bands; verify the correct SKU for your deployment.
- Transport selection between UDP and TCP can influence delivery and retransmission behavior on lossy networks.
- BLE sensor behavior and supported accessory types may depend on tracker firmware and EYE sensor versions.
- Validate configuration settings such as APN, reporting server and transport mode against both Plaspy guidance and Teltonika documentation.
- Perform on network tests in your deployment geography to confirm connectivity, signal and reporting cadence.

## Why Protocol Understanding Matters

Knowing how the FMC230 communicates helps ensure a smooth setup, reliable operation and efficient troubleshooting when used with Plaspy. Awareness of the protocol surface reduces setup time and improves diagnostic confidence for installers and fleet operators.

- Helps verify that the device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Aids in selecting UDP or TCP based on network stability and reporting requirements.
- Allows faster resolution of telemetry gaps by checking firmware, transport mode and device ID mapping.
- Improves planning for BLE sensor coverage and expected telemetry types in Plaspy.
- Supports predictable scaling and provisioning since all devices use the same Plaspy port and endpoint model.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC230 with Plaspy gives operators a practical combination of rugged hardware and a centralized fleet platform. The FMC230 brings durable mechanical design, LTE connectivity with 2G fallback and BLE sensor support, while Plaspy ingests that data into alerts, geofencing and historical reporting to support operational oversight and anti theft workflows.

To learn more about Plaspy and how it supports trackers like the FMC230 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior and implementation guidance consult Teltonika documentation at https://www.teltonika-gps.com/ so you can verify the latest manufacturer information.
