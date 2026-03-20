---
slug: /teltonika/fm_2200/protocol
id: fm_2200-protocol
sidebar_label: Protocol
title: Teltonika - FM 2200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Teltonika FM 2200 with Plaspy for reliable vehicle and asset tracking
keywords:
  - Teltonika FM 2200 protocol
  - Teltonika FM 2200 GPS
  - FM2200 tracking protocol
  - Teltonika communication
  - FM 2200 Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking Teltonika
  - fleet management FM2200
  - Teltonika tracker protocol
  - Plaspy device compatibility
---

# Teltonika - FM 2200 Protocol

This page describes the public protocol context for using the Teltonika FM 2200 tracker with the Plaspy platform. It focuses on how the device communicates over cellular networks to deliver location and telemetry to Plaspy, and what to consider when configuring the FM 2200 for reliable reporting. The content here is intended for technical users integrating the FM 2200 with Plaspy and for those researching compatibility and communication behavior.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary with device firmware version, hardware revision, and manufacturer implementation, so this page provides general, public-facing protocol context rather than device internals.

## Protocol Overview

The tracker reporting protocol is the set of network behaviors and message patterns that allow the FM 2200 to send position, sensor, and status information to Plaspy. With TCP or UDP transport support, the FM 2200 transmits data over the GSM network to a remote server where Plaspy ingests and interprets the reported information for location tracking and monitoring.

- The protocol governs how the tracker opens connections, sends telemetry, and indicates identity to the server so Plaspy can associate data with the correct device.
- It enables delivery of GPS coordinates, movement sensor events, input and output states, and other telemetry collected by the FM 2200.
- Transport choice (TCP versus UDP) affects delivery guarantees and reconnection behavior; the FM 2200 supports both depending on configuration.
- Reporting intervals, geofence events, and data batching are controlled by the device configuration and influence how frequently Plaspy receives updates.
- Local interfaces such as the FM 2200 USB NMEA output are useful for configuration and diagnostics but are separate from the network reporting protocol used to reach Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared, public endpoint and automatically determines the tracker protocol used by a reporting device. In most cases, when the FM 2200 is configured to report to the Plaspy endpoint, no manual protocol selection is required inside Plaspy.

- Plaspy accepts connections at the domain d.plaspy.com and the public IP 54.85.159.138 on the configured server port.
- Plaspy uses a single, consistent port for all supported devices and automatically detects the protocol used by each device.
- Devices that send valid reporting data to the Plaspy endpoint are identified and associated automatically by the platform.
- Typical user steps are limited to configuring the FM 2200 to point to the Plaspy endpoint and confirming transport and credentials where applicable.
- If a device reports but appears incorrectly mapped, reviewing device configuration and firmware version is a recommended troubleshooting step.

## Transport and Connection Context

The FM 2200 supports TCP/IP and UDP/IP transport over GPRS, and the choice between UDP and TCP is made in the device configuration. Plaspy provides a stable target for these connections and accepts the same port for all devices to simplify setup.

- The Plaspy server domain for reporting is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy listens on port 8888 and devices may be configured to use either UDP or TCP on port 8888.
- All devices in Plaspy use the same port, which reduces configuration differences across models.
- Pointing the FM 2200 to the Plaspy domain or the IP address are both valid options depending on your network and carrier behavior.
- Network reliability, APN settings, and carrier limitations can affect whether TCP or UDP is the better choice for a given deployment.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported telemetry fields, or configuration commands; always confirm the FM 2200 firmware level when validating behavior.
- Hardware revisions and optional modules can alter available inputs, outputs, and sensors reported to the platform.
- Manufacturer configuration options such as reporting interval, geofence settings, and authorized numbers affect what the tracker sends to Plaspy.
- Selecting TCP or UDP impacts retransmission and connection state; choose the transport that matches your reliability and latency needs.
- Local interfaces like the FM 2200 USB NMEA output and on device configuration are useful for setup but do not replace verifying network reporting behavior.
- Validate compatibility and feature availability against the manufacturer's official documentation for device specific behaviors and updates.

## Why Protocol Understanding Matters

Understanding how the FM 2200 communicates helps ensure reliable reporting, faster troubleshooting, and more effective long term operation within Plaspy. Knowing the connection and protocol context reduces integration time and helps anticipate behavior during firmware updates or network changes.

- Correct server address and transport selection prevent common connectivity problems during initial deployment.
- Awareness of firmware dependent behaviors helps interpret differences in telemetry or event reporting.
- Understanding reporting intervals and data batching informs expectations about location freshness and historical data availability.
- Properly configuring inputs, outputs, and geofence options ensures alerts and remote controls behave as intended.
- Knowledge of local configuration paths such as USB NMEA and manufacturer tools speeds diagnostics when on device access is needed.

## Why Use Plaspy with This Protocol

Using the Teltonika FM 2200 with Plaspy gives organizations a straightforward path to collect GPS and telemetry data from vehicles and assets while relying on a platform that automatically detects tracker protocols and accepts consistent connection settings. The FM 2200's flexible I O options, configurable reporting, and support for TCP and UDP make it a versatile choice for fleet and asset monitoring when paired with a platform like Plaspy.

To learn more about Plaspy and how it can integrate with devices like the FM 2200, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance for the FM 2200, please verify information on the manufacturer website https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
