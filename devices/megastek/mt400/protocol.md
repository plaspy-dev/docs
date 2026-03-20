---
slug: /megastek/mt400/protocol
id: mt400-protocol
sidebar_label: Protocol
title: Megastek - MT400 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Megastek MT400 medical watch and how it communicates with Plaspy using shared connection settings
keywords:
  - Megastek MT400 protocol
  - Megastek MT400 GPS protocol
  - MT400 protocol Plaspy
  - Megastek MT400 communication
  - MT400 tracking protocol
  - Plaspy device compatibility
  - wearable GPS protocol
  - medical watch GPS protocol
  - remote patient monitoring tracker
  - GPS tracker protocol guide
---

# Megastek - MT400 Protocol

This page summarizes the public protocol context for using the Megastek MT400 ECG Medical Watch with Plaspy. It focuses on how the device communicates with Plaspy in general terms, the role of shared connection settings, and practical considerations for configuring the watch to report telemetry and location to a Plaspy server.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Exact protocol behavior for the MT400 can vary with firmware version, hardware revision, and manufacturer configuration, so this page aims to explain public, non sensitive communication context while encouraging validation against manufacturer documentation.

## Protocol Overview

The MT400 sends location, health telemetry (ECG waveform and heart rate), and event alerts to remote servers using the device's reporting protocol. That protocol defines how the watch identifies itself, which fields are reported, and how periodic updates and alarm messages are transmitted so a platform like Plaspy can ingest and present the data.

- Enables the MT400 to transmit GPS coordinates, ECG and heart rate telemetry, SOS alerts, and fall detection events to a backend.
- Provides identifiers and timestamps that let Plaspy associate messages with a specific device and user session.
- Supports hybrid positioning and auxiliary data such as Wi‑Fi assistance and Bluetooth sensor inputs for richer location and health context.
- Allows configurable reporting intervals and alarm triggers so monitoring platforms receive timely updates.
- Facilitates integration with Plaspy by using standard transport options and platform-friendly message fields that can be mapped to dashboards and alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and uses the reported information to determine the tracker protocol automatically. In most cases, a properly configured MT400 that points to the Plaspy endpoint will be recognized without manual protocol selection inside Plaspy.

- Plaspy listens on a single, consistent port for all supported devices to simplify device configuration.
- When the MT400 reports to the platform endpoint, Plaspy identifies the message format and routes data to the appropriate ingestion logic.
- Users typically do not need to select a protocol in Plaspy if the device is configured to report to the Plaspy server endpoint.
- Proper device identification in the first connection message helps Plaspy match the device to an account and enable decoding of telemetry fields.
- If issues arise, confirming the device is pointed to the Plaspy endpoint and using supported transport settings is the first troubleshooting step.

## Transport and Connection Context

The MT400 may be configured to send data over UDP or TCP depending on device settings and network conditions. For Plaspy, devices should be pointed at the Plaspy server using the shared connection settings so messages arrive at the platform for automatic detection and processing.

- Plaspy server domain for device reporting is d.plaspy.com.
- A Plaspy server IP endpoint is also published as 54.85.159.138 for environments that require numeric addressing.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- The MT400 can be configured to use either UDP or TCP on port 8888 depending on device firmware and deployment preferences.
- Ensure device APN and network settings allow outbound connections to the Plaspy endpoint over the chosen transport.

## Protocol Compatibility Notes

- Firmware versions can change the exact set of reported fields, message frequency, and support for optional features such as ECG waveform streaming.
- Hardware revisions or regional SKUs of the MT400 may implement slight variations in reporting behavior or available sensors.
- The device transport mode (UDP vs TCP) should be selected based on network reliability and the device's firmware support.
- Manufacturer-side configuration commands or server address settings may be required to point the MT400 to d.plaspy.com or the numeric IP.
- Validate any custom protocol fields or optional telemetry with Megastek documentation when planning integrations.
- Test a representative device and firmware mix before wide deployment to confirm behavior with Plaspy.

## Why Protocol Understanding Matters

Understanding the MT400 communication protocol helps ensure reliable delivery of location and medical telemetry to Plaspy, faster troubleshooting, and correct mapping of device fields to platform features.

- Ensures that ECG waveform and continuous heart rate data are captured and displayed correctly in Plaspy.
- Helps diagnose connectivity issues by confirming transport, server address, and port settings.
- Clarifies which device events will trigger platform alarms, such as SOS or fall detection.
- Supports planning for bandwidth and storage needs when high rate telemetry or waveform streaming is enabled.
- Reduces integration time by allowing teams to verify device reporting behavior against expected platform fields.

## Why Use Plaspy with This Protocol

Using the Megastek MT400 with Plaspy brings together medical telemetry and location tracking on a single monitoring platform. Plaspy can ingest the watch's location updates, ECG and heart rate streams, and alarm messages to provide caregivers and operations teams with unified visibility into patient status and movement.

Plaspy's shared connection model simplifies device configuration because all devices report to the same port and Plaspy automatically detects the tracker protocol. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware behaviors, and manufacturer implementation notes, please verify current information on the Megastek website https://www.megastek.com/
