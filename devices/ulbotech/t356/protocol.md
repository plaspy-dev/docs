---
slug: /ulbotech/t356/protocol
id: t356-protocol
sidebar_label: Protocol
title: Ulbotech - T356 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Ulbotech T356 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Ulbotech T356 protocol
  - Ulbotech T356 GPS protocol
  - Ulbotech T356 tracking
  - T356 Plaspy compatibility
  - Ulbotech GPS tracker protocol
  - vehicle tracking T356
  - fleet tracking T356
  - T356 Wi Fi tracker
  - Plaspy device protocol
  - vehicle telemetry protocol
---

# Ulbotech - T356 Protocol

This page describes the public protocol context for using the Ulbotech T356 tracker with Plaspy. It focuses on how the device communicates with Plaspy over shared connection settings, what the communication role is, and what to check when integrating the T356 into a Plaspy deployment. The content is intentionally high level and avoids firmware or proprietary details that are not publicly documented by the manufacturer.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and feature availability can vary with device firmware, hardware revision, and manufacturer implementation, so the guidance below is meant to explain public, non sensitive protocol context and integration considerations for the T356.

## Protocol Overview

The protocol used by the T356 governs how the device identifies itself, reports GNSS positions and vehicle telemetry, and delivers stored records to the Plaspy server when a network connection is available. For the T356 specifically, the device is designed to perform near real time uploads over Wi Fi and to offload stored records when it connects to configured networks, while reporting OBD and sensor data integrated from the vehicle bus and onboard sensors.

- Enables device identity and session information so Plaspy can associate telemetry with the correct asset.
- Transports location updates, OBD and J1939 telemetry, ignition and input states, and event records to the server.
- Supports periodic live reporting and bulk offload of stored records when network connectivity is available.
- Provides a mechanism for event and alert reporting such as immobilizer actions, SOS inputs, and accelerometer events.
- Ensures data is usable by Plaspy for mapping, alerts, and fleet telemetry without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and automatically detects the tracker protocol for devices that are properly configured to report to the Plaspy server. In most integrations with the T356, users do not need to choose a parser inside Plaspy manually as long as the device is pointed to the Plaspy endpoint and uses the supported transport.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the platform listens on port 8888.
- Plaspy automatically detects the tracker protocol when the device reports to the shared endpoint.
- If the T356 is configured to point to the Plaspy endpoint and use the correct transport, manual protocol selection inside Plaspy is usually unnecessary.
- Proper device identification and configuration at the tracker ensure that Plaspy can associate incoming data with the correct account and asset.

## Transport and Connection Context

Connection choices determine how the T356 sends its protocol messages to Plaspy. The T356 is built for Wi Fi first operation, using stored records and automated offload to deliver telemetry to Plaspy when the device connects to configured networks. Depending on device configuration and manufacturer firmware options, the T356 may use either UDP or TCP on the Plaspy port.

- Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- The T356 can point at the domain d.plaspy.com or directly to the IP 54.85.159.138 as the reporting endpoint.
- All devices supported by Plaspy use the same port for inbound device connections.
- Wi Fi offload workflows typically trigger bulk uploads when the T356 associates with a configured access point.
- Network reliability and local Wi Fi configuration influence how frequently the device performs live updates versus stored record offload.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change how the T356 implements protocol behavior and which telemetry fields are available.
- Manufacturer configuration settings may allow selecting UDP or TCP transport or adjusting the reporting interval and offload behavior.
- OBD and heavy vehicle telemetry availability depends on the vehicle bus and the T356 firmware capability for interpreting OBD or J1939 data.
- Changes to Wi Fi configuration, access point authentication methods, or profile lists can affect the device ability to offload stored records.
- Always validate transport settings and endpoint configuration on the device to ensure it reports reliably to d.plaspy.com on port 8888.
- When integrating many units, test a small set in representative network conditions to confirm consistent uploads and protocol recognition.

## Why Protocol Understanding Matters

Understanding the communication protocol in broad terms helps ensure a reliable integration between the T356 and Plaspy, aids troubleshooting when devices fail to appear or deliver expected telemetry, and supports informed decisions about transport selection and firmware updates.

- Helps confirm the device is pointed to the correct Plaspy endpoint and using the supported port and transport.
- Makes it easier to interpret which telemetry fields the T356 will provide to Plaspy and which will depend on vehicle bus exposure.
- Supports troubleshooting of upload timing, stored record offload behavior, and how event records are reported.
- Informs decisions about firmware updates, Wi Fi profile management, and deployment practices to maximize reliable uploads.
- Reduces integration time by clarifying where device configuration versus server-side settings should be adjusted.

## Why Use Plaspy with This Protocol

Using the Ulbotech T356 with Plaspy provides a low operating cost approach to vehicle tracking by leveraging Wi Fi offload, device local storage, and integrated vehicle telemetry. For fleets and programs that can regularly bring vehicles into known Wi Fi coverage, the T356’s storage and OBD support enable detailed location and vehicle data to be delivered to Plaspy without recurring cellular data fees.

Plaspy’s shared endpoint and automatic protocol detection simplify device onboarding: point the T356 at d.plaspy.com or 54.85.159.138 on port 8888, choose the desired transport (TCP or UDP) if configurable, and allow Plaspy to detect and process the incoming telemetry. To learn more about Plaspy and how it can work with the T356, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific information and firmware notes with the manufacturer at http://www.ulbotech.com/.
