---
slug: /globalsat/lw_360hr/protocol
id: lw_360hr-protocol
sidebar_label: Protocol
title: GlobalSat - LW-360HR Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GlobalSat LW-360HR wearable GPS tracker and how it communicates with Plaspy for reliable location and telemetry
keywords:
  - GlobalSat LW-360HR protocol
  - GlobalSat LW-360HR GPS protocol
  - LW-360HR Plaspy
  - LW-360HR communication protocol
  - LW-360HR tracking protocol
  - GlobalSat wearable tracker protocol
  - LoRaWAN GPS protocol
  - wearable GPS tracker protocol
  - Plaspy device integration
  - Plaspy tracker protocol
---

# GlobalSat - LW-360HR Protocol

This page documents the public protocol context for using the GlobalSat LW-360HR wearable GPS tracker with Plaspy. It explains how the tracker communicates with Plaspy in general terms, what connection settings the platform expects, and why protocol awareness helps during setup and troubleshooting. This content focuses on publicly available integration facts and does not expose private implementation details.

The LW-360HR pairs long range LoRaWAN connectivity, GPS positioning, and BLE for provisioning and OTA. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware revision, hardware variant, and the manufacturer implementation. For device specific command details or firmware behaviors consult the manufacturer documentation.

## Protocol Overview

The device protocol defines how the LW-360HR reports location, telemetry, and alerts to a cloud endpoint and how short range BLE is used for provisioning and updates. On Plaspy the protocol role is limited to enabling reliable delivery of position and sensor data for mapping, alerts, and telemetry dashboards.

- Provides identification and periodic reporting so Plaspy can attribute incoming messages to the correct device.
- Carries GPS position fixes and timestamped telemetry so Plaspy can display live location and historical tracks.
- Transmits event notifications such as SOS presses and geofence triggers so Plaspy can escalate alerts.
- Supports short range BLE for local provisioning, pairing, and firmware OTA while wide area reporting uses LoRaWAN forwarding.
- Allows Plaspy to integrate wearable telemetry like heart rate and temperature into monitoring dashboards alongside location.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single, shared endpoint and automatically identifies the tracker protocol used by an incoming device report. In most cases you do not need to select a protocol manually inside Plaspy provided the LW-360HR is configured to report to the Plaspy endpoint.

- Plaspy uses the shared server domain d.plaspy.com and an assigned server IP 54.85.159.138 for device reporting.
- The platform listens on port 8888 for tracker reports and uses the same port across all supported devices.
- Plaspy automatically detects the tracker protocol from the incoming connection and payload characteristics, simplifying device onboarding.
- If the LW-360HR is properly configured to forward LoRaWAN uplinks into Plaspy workflows, reports will appear without manual protocol selection.
- For BLE based provisioning the device uses local mobile links; those interactions do not require Plaspy to detect protocol.

## Transport and Connection Context

Connection transport describes how messages move from the device or LoRaWAN cloud into Plaspy rather than internal protocol framing. The LW-360HR primarily uses LoRaWAN uplinks for wide area reporting and BLE for local interaction. When configuring network forwarding or direct socket reporting, the device may be set to use UDP or TCP to reach Plaspy.

- Devices and cloud forwarders may be configured to send to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts both UDP and TCP transports on port 8888 depending on the device or network forwarder configuration.
- All devices supported by Plaspy use the same port, which simplifies firewall and network setup for deployments.
- LoRaWAN uplinks are typically handled by network servers or IoT platforms that then forward data to Plaspy using the shared endpoint and transport settings.
- BLE is used for local provisioning and firmware OTA and is separate from the wide area transport that reaches Plaspy.

## Protocol Compatibility Notes

- Firmware revisions and hardware variants may alter how and when the LW-360HR reports specific telemetry fields or events.
- Manufacturer configuration for LoRaWAN network keys, device classes, and uplink schedules can change reporting behavior and battery life.
- Some deployments send LoRaWAN uplinks through third party network servers; ensure those forwarders are configured to target the Plaspy endpoint.
- Transport selection (UDP vs TCP) may be constrained by the forwarding service or network environment; confirm which method your LoRaWAN cloud uses.
- Plaspy detects protocol automatically, but correct device network configuration and device identifiers are required for reliable mapping.
- Always validate compatibility and any firmware dependent features against the device documentation from GlobalSat.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable onboarding, accurate diagnostics, and predictable operation over time when the LW-360HR is used with Plaspy. Awareness of transport, reporting cadence, and event handling reduces integration friction and improves operational uptime.

- Helps confirm the device is reporting to the correct Plaspy endpoint and transport settings.
- Speeds troubleshooting when reports do not appear or expected telemetry fields are missing.
- Informs battery and reporting trade offs based on uplink frequency and firmware behavior.
- Enables planning for network forwarding from LoRaWAN servers into the Plaspy ingestion endpoint.
- Supports mixed deployments where wearable telemetry is combined with vehicle or asset trackers in Plaspy.

## Why Use Plaspy with This Protocol

Using the LW-360HR with Plaspy provides a practical way to centralize wearable location, SOS, and health telemetry alongside other asset and vehicle data. For elder care, outdoor teams, or event management, Plaspy can collect GPS fixes and sensor metrics forwarded from LoRaWAN workflows and present them in unified maps and alerting channels.

To learn more about Plaspy and how it integrates with devices like the LW-360HR visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time so please verify the latest device specific guidance on the maker site https://www.globalsat.com.tw/.
