---
slug: /atrack/as300/protocol
id: as300-protocol
sidebar_label: Protocol
title: ATrack - AS300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the ATrack AS300 asset tracker and how it communicates with Plaspy for GPS telemetry and sensor data
keywords:
  - ATrack AS300 protocol
  - AS300 GPS protocol
  - ATrack AS300 communication
  - AS300 tracking protocol
  - ATrack GPS tracker Plaspy
  - AS300 Plaspy compatibility
  - asset tracker protocol
  - LTE Cat M tracker protocol
  - BLE sensor telemetry
  - fleet tracking protocol
---

# ATrack - AS300 Protocol

This page describes the public protocol context for using the ATrack AS300 asset tracker with Plaspy. It focuses on the communication relationship between the device and the Plaspy platform, explaining connection endpoints, transport options, and the role of the tracker reporting protocol in delivering usable position, sensor, and event data to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary with AS300 firmware, hardware revision, and manufacturer implementation, so this guide provides public facing context rather than firmware specific details.

## Protocol Overview

The AS300 reporting protocol enables the device to identify itself, deliver GNSS fixes, BLE sensor readings, motion and tamper events, and periodic telemetry to a backend server such as Plaspy. The protocol governs how the device initiates and maintains a data channel to Plaspy and how telemetry is packaged for ingestion while leaving firmware specific framing to the manufacturer.

- Carries location fixes and positioning metadata from the AS300 GNSS subsystem for mapping and geofencing in Plaspy
- Transports BLE sensor readings and onboard accelerometer events so Plaspy can correlate environmental telemetry and motion alerts
- Supports buffered reporting so stored fixes are transmitted to Plaspy after temporary connectivity interruptions
- Delivers device identification and status fields that let Plaspy associate incoming messages with the correct fleet record
- Enables event driven alerts such as tamper, vibration, or door open to be surfaced in Plaspy workflows

## How Plaspy Detects the Protocol

Plaspy accepts incoming device traffic on a single shared endpoint and automatically detects the tracker protocol used by the device. When an AS300 is configured to report to Plaspy, the platform identifies the incoming message format and associates telemetry with the correct device record so no manual protocol selection is normally required in the platform.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP for device reporting is 54.85.159.138
- Plaspy listens on port 8888 for device connections and uses the same port for all supported devices
- Devices configured to report to the Plaspy endpoint will typically require no manual protocol selection inside Plaspy
- Plaspy detection covers a range of supported tracker behaviors but does not replace verifying device firmware and configuration

## Transport and Connection Context

The AS300 can use either UDP or TCP transport depending on the device configuration and firmware capabilities. For integration with Plaspy, point the device to the Plaspy endpoint and use the supported transport mode that matches your deployment needs and the AS300 configuration.

- The device may be configured to use UDP on port 8888 or TCP on port 8888 depending on device support
- Devices may be set to transmit to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138
- All Plaspy devices use the same port 8888 for device reporting which simplifies device configuration
- Choose UDP for lower overhead intermittent reporting or TCP when a session oriented transport is preferred and supported by the device
- Ensure cellular APN and SIM settings on the AS300 are correct so the device can reach the Plaspy endpoint over LTE Cat M

## Protocol Compatibility Notes

- AS300 behavior can differ across firmware releases and hardware variants so confirm features with the device firmware notes
- Transport selection UDP versus TCP may change device behavior for retransmission and buffering; pick the transport that aligns with your reliability needs
- BLE sensor integration and ADM remote management depend on firmware and may require specific configuration steps on the device
- Hardware revisions or regional variants of the AS300 can introduce minor protocol or transport differences
- Plaspy automatically detects the incoming protocol but validating device reporting to d.plaspy.com or 54.85.159.138 on port 8888 is a practical first check
- Always compare any integration steps against the manufacturer documentation before large scale deployment

## Why Protocol Understanding Matters

Understanding how the AS300 communicates with Plaspy helps ensure reliable reporting, accurate telemetry interpretation, and effective troubleshooting. Awareness of the protocol scope reduces time to resolution when devices do not appear in the platform or when specific sensor fields are missing.

- Helps confirm device configuration such as APN, SIM, and endpoint settings so messages reach Plaspy
- Aids in diagnosing connectivity issues by verifying transport mode and endpoint reachability
- Clarifies how buffered data and retransmissions will be handled by the device and received by Plaspy
- Ensures BLE sensor pairings and accelerometer events are transmitted in a way Plaspy can consume
- Supports planning for battery life by understanding how reporting intervals and transport choices affect power consumption

## Why Use Plaspy with This Protocol

Using the AS300 with Plaspy gives organizations a practical path to real time visibility for short term shipping and movable asset monitoring. Plaspy ingests GNSS fixes, BLE sensor telemetry, and motion events from the AS300 and presents them in maps, geofences, alerts, and reports that support logistics, cold chain monitoring, and anti theft workflows.

If you want to learn more about Plaspy and how it works with devices like the AS300 visit https://www.plaspy.com. For the latest device specific protocol details, firmware change notes, and hardware variants consult the manufacturer documentation at https://www.atrack.com.tw/ to verify current behavior and supported features.
