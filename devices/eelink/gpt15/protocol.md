---
slug: /eelink/gpt15/protocol
id: gpt15-protocol
sidebar_label: Protocol
title: EElink - GPT15 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the EElink GPT15 tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - EElink GPT15 protocol
  - EElink GPT15 GPS protocol
  - EElink GPT15 communication protocol
  - EElink GPS tracker GPT15
  - GPT15 Plaspy compatibility
  - Plaspy GPS tracker integration
  - GPS tracker protocol guide
  - luggage tracker protocol
  - asset tracker communication
  - real time tracking protocol
---

# EElink - GPT15 Protocol

This page provides a public protocol context for using the EElink GPT15 tracker with the Plaspy platform. It focuses on how the GPT15 communicates with Plaspy at a high level, what connection settings are used, and practical considerations for integrating the device into Plaspy for real time tracking, geofence alerts, and telemetry. The content is intended to help installers, technical users, and system integrators understand communication flow without exposing private implementation details.

The GPT15 is a slim travel and asset tracker with triple positioning (GPS, Wi‑Fi and LBS), Bluetooth 4.0 pairing, a light tamper sensor, and a rechargeable battery. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a protocol level and recommends checking manufacturer documentation for firmware specific details.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the GPT15 sends location, sensor, and status information to a remote server. For Plaspy compatibility this means the tracker must transmit its telemetry to the Plaspy endpoint so the platform can ingest location points, interpret sensor events, and surface alerts to users. The protocol role is to reliably deliver readable telemetry and minimal device identity so Plaspy can associate data with the correct asset.

- Enables periodic and event driven telemetry delivery from the GPT15 to Plaspy for real time mapping and history.
- Conveys identity and status so Plaspy can link incoming messages to the correct device record.
- Transmits layered positioning data (GPS, Wi‑Fi, LBS) and sensor events such as tamper and low battery for actionable alerts.
- Supports remote configuration triggers and reporting that allow reporting intervals and alert thresholds to be adjusted.
- Provides the essential fields that Plaspy needs to render geofence events, proximity alerts, and telemetry summaries.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker types on a shared endpoint and port, and it automatically detects the tracker protocol when a device reports correctly. For most users this means there is no need to manually select a protocol inside Plaspy as long as the GPT15 is configured to report to the Plaspy endpoint and uses the supported transport settings.

- Plaspy listens on a single shared endpoint and port for incoming tracker reports and identifies protocol type automatically.
- Point the GPT15 to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 so data is delivered to Plaspy.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- When a properly configured device reports to the Plaspy endpoint, the platform matches messages to device records and begins ingesting telemetry without manual protocol selection.
- If a device uses alternate transport or nonstandard reporting intervals, confirm those settings during initial setup so Plaspy can receive consistent data.

## Transport and Connection Context

Connection context describes how the GPT15 reaches the Plaspy endpoint. The GPT15 can be configured to use standard mobile network transport and can report via either UDP or TCP depending on device support and settings. Plaspy accepts both transport types on the same port to simplify deployment.

- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices may point to the Plaspy server domain d.plaspy.com or to server IP 54.85.159.138 as the reporting endpoint.
- Plaspy uses the same port for all supported devices, removing the need to manage multiple destination ports.
- Choose UDP for lower latency single packet reporting or TCP for connection oriented delivery if supported by the device and network.
- Ensure mobile data or local network policies do not block outbound connections to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change which fields are reported and how frequently the GPT15 sends updates.
- Manufacturer side settings and remote configuration options (app or SMS) can affect transport selection and reporting behavior.
- Some device features such as Bluetooth proximity or Wi‑Fi assisted location may depend on firmware and may not be present on all units.
- Transport selection between UDP and TCP can change reliability characteristics; validate the chosen transport with on device settings and network constraints.
- Confirm that the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy receives telemetry.
- Always validate compatibility against the manufacturer documentation and release notes for firmware specific behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, reliable reporting, and effective troubleshooting when integrating the GPT15 with Plaspy. Even though Plaspy automatically detects the protocol and uses shared connection settings, awareness of transport, firmware, and device capabilities reduces time to operational status and supports long term stability.

- Ensures correct device registration and identity mapping in Plaspy for accurate asset tracking.
- Helps troubleshoot why a device may not appear in Plaspy by checking endpoint, transport, and reporting settings.
- Guides decisions on reporting intervals and event configurations to balance battery life and update frequency.
- Aids in interpreting sensor events such as tamper alerts or low battery notifications in Plaspy dashboards.
- Supports informed firmware update planning to avoid unexpected changes in reported fields.

## Why Use Plaspy with This Protocol

Using the EElink GPT15 with Plaspy provides practical visibility for luggage, personal items, and small asset deployments. The GPT15’s triple positioning and onboard sensors supply layered location and event data that Plaspy consolidates into real time maps, alerts, and history. For travelers, families, and small organizations this combination delivers a compact tracker with centralized monitoring and simple remote configuration workflows.

To get started, configure the GPT15 to report to the Plaspy endpoint using the shared Plaspy connection settings and confirm transport selection in the device settings. Learn more about Plaspy and how it supports multi device fleets at https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest GPT15 specific information with the manufacturer at https://www.eelink.com.cn/ before large scale deployment.
