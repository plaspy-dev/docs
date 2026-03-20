---
slug: /eelink/tk418/protocol
id: tk418-protocol
sidebar_label: Protocol
title: EElink - TK418 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the EElink TK418 tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - EElink TK418 protocol
  - EElink TK418 GPS protocol
  - EElink TK418 communication protocol
  - EElink TK418 tracking protocol
  - EELINK protocol
  - TK418 Plaspy compatibility
  - GPS tracker protocol EElink
  - vehicle tracking TK418
  - NB IoT TK418
  - LTE Cat M1 tracker
---

# EElink - TK418 Protocol

This page explains the public protocol context for using the EElink TK418 tracker with Plaspy. It focuses on how the device communicates with Plaspy, which connection endpoints to configure, and what role the EELINK protocol plays in sending position, event, and telemetry data to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general, non sensitive protocol context rather than device internals.

## Protocol Overview

The protocol for the TK418 governs how the tracker reports GNSS positions, event signals such as ACC ignition and crash alerts, and additional telemetry to a remote server. For integration with Plaspy the device sends its messages to a Plaspy endpoint where the platform ingests those messages and converts them into location, event, and sensor data for dashboards and alerts.

- The protocol enables identification of the device and delivery of positional and telemetry messages to Plaspy.
- It carries event information such as ACC state, crash or vibration alerts, and optional SOS signals for immediate handling.
- Telemetry and sensor inputs from RS232 or GPIO are transmitted to the platform so Plaspy can correlate inputs with location and time.
- EELINK protocol messages are the standard integration format used by TK418 units for telematics platforms.
- The protocol allows the tracker to function across LTE Cat M1, NB IoT, and GSM fallback networks while preserving essential event reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and automatically detects the tracker protocol for properly configured devices. When a TK418 is pointed at the Plaspy endpoint, the platform will ingest its EELINK messages and map values into Plaspy tracking records without requiring manual protocol selection in most cases.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Correct device identification and provisioning on the tracker side help ensure Plaspy recognizes the incoming stream as a TK418 EELINK feed.
- If you encounter ingestion or mapping gaps, validating device configuration and firmware version is a practical first step.

## Transport and Connection Context

Connection context focuses on how the TK418 reaches Plaspy rather than on internal packet structures. The TK418 supports cellular transports suitable for IoT deployments and can be configured to report to the Plaspy endpoint using common transport options.

- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy listens for tracker reports on port 8888 and all devices in Plaspy use the same port.
- Devices may point to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 as their reporting destination.
- LTE Cat M1 and NB IoT are primary networks for the TK418 with GSM fallback; the chosen cellular network affects connectivity but not the Plaspy endpoint.
- Transport selection can be changed on the device side; ensure the device transport matches your network and firmware capabilities.

## Protocol Compatibility Notes

- Firmware revisions can change message fields, optional sensors, and reporting behavior. Validate firmware release notes for device specific details.
- Hardware revisions or optional modules such as relay or SOS port attachments may add or alter telemetry that appears in Plaspy.
- The TK418 uses the EELINK protocol for platform integration; protocol variants or manufacturer customizations are possible.
- Transport differences between UDP and TCP affect delivery semantics but not the Plaspy ingestion endpoint.
- Confirm the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy receives messages.
- Always cross check device configuration and manufacturer documentation when integrating a new shipment or firmware variant.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the TK418 helps ensure a smooth setup, reliable telemetry, and faster troubleshooting when integrating with Plaspy. Knowing which events and sensor values the device can send will improve dashboard accuracy and alerting.

- Ensures correct server and transport settings are applied on the device for reliable delivery to Plaspy.
- Helps correlate device events like ACC or crash alerts with GNSS timestamps inside Plaspy.
- Aids in diagnosing missing data or unexpected sensor values by aligning expectations with manufacturer protocol notes.
- Guides decisions on whether device firmware updates, transport changes, or hardware options are needed for a given deployment.
- Improves long term operational reliability by matching device capabilities to fleet monitoring and reporting requirements.

## Why Use Plaspy with This Protocol

Using the TK418 with Plaspy gives fleet managers and integrators a practical path to capture location, event, and sensor telemetry from a compact IoT tracker. Plaspy ingests EELINK protocol messages from the TK418 and surfaces that data in real time for mapping, alerts, and historical reporting, enabling operational oversight and faster incident response.

If you want to learn more about how Plaspy handles device integration and the benefits for fleet visibility, visit https://www.plaspy.com. For the most current protocol details, firmware notes, and device specific implementation guidance consult the manufacturer at https://www.eelink.com.cn/ because protocol support and firmware behavior can evolve over time.
