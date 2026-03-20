---
slug: /astra_telematics/at503/protocol
id: at503-protocol
sidebar_label: Protocol
title: Astra Telematics - AT503 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Astra Telematics AT503 and Plaspy compatibility for GPS tracking
keywords:
  - Astra Telematics AT503 protocol
  - Astra Telematics AT503 GPS protocol
  - AT503 communication protocol
  - AT503 tracking protocol
  - AT503 Plaspy compatibility
  - AT503 telemetry integration
  - Plaspy compatible trackers
  - GPS tracker protocol guide
  - asset tracker communication
  - LTE M NB IoT tracker
---

# Astra Telematics - AT503 Protocol

This page covers the public protocol context for using the Astra Telematics AT503 Mini Asset Tracker with Plaspy. It explains the role of device communication in delivering location and telemetry to Plaspy without revealing private implementation details. Use this page to understand how the device reports to the platform and what to verify during deployment and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is received. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer configuration, so final device behavior should be confirmed with Astra Telematics documentation and firmware notes.

## Protocol Overview

The AT503 reporting protocol is the mechanism by which the device packages GNSS fixes, movement events, battery and health telemetry, and diagnostic status for delivery to a remote server. For integration with Plaspy, the protocol enables the tracker to identify itself, deliver timely position and event data, and support remote configuration workflows such as over the air provisioning or BLE-assisted setup.

- Allows the AT503 to send GNSS position and timestamp information to Plaspy for mapping and history.
- Communicates movement and wake events driven by the internal MEMS accelerometer so Plaspy can apply intelligent reporting rules.
- Reports battery and device health so Plaspy can surface maintenance alerts and lifecycle planning.
- Supports device identification and session persistence so Plaspy can associate incoming data with the correct asset record.
- Enables optional field provisioning steps such as BLE-assisted activation that result in configured network and reporting parameters.

## How Plaspy Detects the Protocol

Plaspy receives traffic on a shared endpoint and uses automated detection to determine the incoming device protocol. Typically, users do not need to manually select a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint using the correct connection settings.

- Plaspy listens on a single shared server endpoint so devices can report using common settings.
- Plaspy automatically detects the tracker protocol once the device sends its first valid reports to the server.
- When configured correctly, the AT503 will register and appear in Plaspy without manual protocol selection.
- Detection works across supported transports so TCP or UDP reporting can be accepted and processed.
- If a device does not appear, check device provisioning, network registration, and manufacturer configuration to ensure reports are sent to the Plaspy endpoint.

## Transport and Connection Context

Connection choices determine how the AT503 reaches Plaspy but do not change the public protocol summary provided here. The AT503 may be configured to use either UDP or TCP on the shared Plaspy port depending on device firmware and deployment needs. Use the domain or IP address below as the target host when configuring the tracker to report to Plaspy.

- Target host for Plaspy reporting is d.plaspy.com and the corresponding public server IP is 54.85.159.138.
- Plaspy accepts device reports on port 8888 and all devices supported by Plaspy use this same port.
- The AT503 may be configured to send data using UDP or TCP on port 8888 depending on device support and chosen transport.
- Choose TCP for environments where reliable delivery is required or UDP for minimal overhead if the device and network support it.
- Ensure network outbound rules allow the selected transport and destination so the device can reach Plaspy.

## Protocol Compatibility Notes

- Firmware variations influence which features and report formats the AT503 supports; always confirm the firmware release notes for protocol specifics.
- Hardware revisions and regional cellular variants may alter available transport choices or cellular registration behavior.
- Transport selection between UDP and TCP can affect delivery characteristics and should match the device configuration used during provisioning.
- BLE provisioning workflows may change how the device is initially configured to point at the Plaspy endpoint.
- Manufacturer customization or optional features may add fields or events to reports that Plaspy will ingest if they follow standard reporting channels.
- Validate compatibility by testing a sample device before large scale rollouts and by reviewing Astra Telematics official documentation.

## Why Protocol Understanding Matters

Understanding how the AT503 communicates with Plaspy makes deployments more predictable, simplifies troubleshooting, and helps teams design reporting profiles that balance battery life with telemetry needs.

- Ensures the device is configured to point at the correct Plaspy endpoint and transport for immediate connectivity.
- Helps diagnose why reports may be missing by narrowing issues to network, transport, or firmware behavior.
- Allows planners to optimize reporting frequency and movement triggers to meet battery life targets.
- Supports informed decisions about fallback behavior such as 2G availability in the device region.
- Makes it easier to coordinate field provisioning workflows using BLE and to verify that device identity maps to the correct asset in Plaspy.

## Why Use Plaspy with This Protocol

Using the AT503 with Plaspy gives organizations a low maintenance, long life asset tracking solution that feeds consistent location and movement telemetry into a single fleet platform. The AT503’s rugged construction, long battery life, multi constellation GNSS, and cellular options align with Plaspy workflows for remote monitoring, geofence alerts, and asset lifecycle reporting.

To learn more about Plaspy and how your fleet can use Plaspy with Astra Telematics devices visit https://www.plaspy.com. For the most current device specific protocol details, firmware guidance, and regional hardware variants refer to the manufacturer at https://astratelematics.com/ as protocol support and firmware behavior can change over time.
