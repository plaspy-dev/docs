---
slug: /coban/bn_403c/protocol
id: bn_403c-protocol
sidebar_label: Protocol
title: Coban - BN-403C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Coban BN 403C GPS tracker with Plaspy including connection and transport guidance
keywords:
  - Coban BN 403C protocol
  - Coban BN 403C GPS protocol
  - BN 403C communication protocol
  - BN 403C tracking protocol
  - Coban tracker Plaspy compatibility
  - Plaspy device integration
  - vehicle GPS tracker protocol
  - fleet tracker communication
  - GNSS telemetry reporting
  - TCP UDP tracker setup
---

# Coban - BN-403C Protocol

This page describes the public protocol context for using the Coban BN-403C GPS tracker with Plaspy. It explains how the tracker communicates with Plaspy in broad terms, what connection settings are commonly used, and what role the device reporting protocol plays in successful integration. The goal is to provide practical, non sensitive guidance so installers and operators understand how the BN-403C sends usable data to Plaspy for tracking and alerting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here focuses on public, non proprietary aspects of device communication rather than low level packet formats or private commands.

## Protocol Overview

The BN-403C reporting protocol is the mechanism by which the device identifies itself to a backend, transmits GNSS positions, and delivers telemetry and alarm events that are useful to fleet managers. With Plaspy acting as the backend, the protocol ensures that location, status, and event data arrive in a form that Plaspy can ingest and present in maps, alerts, and history playback.

- Enables the tracker to report GNSS positions and timestamps to Plaspy for live location and history.
- Carries device telemetry such as ignition state, input alarms, battery status, and optional sensor data.
- Transmits discrete alarm events like overspeed, door open, shock, geo fence and SOS to trigger notifications.
- Supports remote control signals and command acknowledgement channels where available, enabling functions such as remote immobilizer control.
- Provides identification and session context so Plaspy can associate incoming reports with the correct device record.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a shared server endpoint and port and automatically detects which tracker protocol a reporting device uses. In most deployments you do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint using the standard connection settings.

- Plaspy listens for incoming device connections on the shared domain d.plaspy.com and on the public server IP 54.85.159.138.
- All devices supported by Plaspy use the same port number for reporting, which simplifies configuration on the device side.
- Plaspy automatically detects the tracker protocol when the device begins reporting to the Plaspy endpoint.
- When a device is properly configured to report to d.plaspy.com or 54.85.159.138 on the correct port, manual protocol selection in the platform is typically unnecessary.
- If a device does not appear in Plaspy, checking device reporting settings and network reachability to the Plaspy endpoint is the usual first step.

## Transport and Connection Context

The BN-403C supports multiple transport options for delivering telemetry to a backend and can be configured to use UDP or TCP depending on device configuration and network conditions. Plaspy accepts both transports on the shared port so devices can use the transport method that best matches their environment.

- The BN-403C may be configured to send reports using UDP or TCP on port 8888 depending on device support and installer preference.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS is not available.
- Plaspy uses the same port for all supported devices which reduces per device configuration differences.
- TCP is commonly chosen where reliable delivery and session awareness are preferred, while UDP is used where lower overhead or specific device workflows require it.
- The device can also use SMS or local Bluetooth configuration for setup and fallback where supported by the tracker hardware.

## Protocol Compatibility Notes

- Firmware revisions can change behavior such as message frequency, event reporting formats, or transport defaults; verify the tracker firmware level when diagnosing issues.
- Hardware revisions and optional accessories may affect available inputs and outputs reported by the device, for example relay control or fuel sensor support.
- Manufacturer side configuration commands or activation steps can vary between production batches; consult official Coban documentation for device specific setup.
- Transport selection between UDP and TCP affects delivery characteristics and should match the chosen configuration on both device and backend.
- Bluetooth setup paths used for local configuration do not change the network reporting endpoint required for Plaspy integration.
- Always validate a sample device reporting to Plaspy before deploying at scale to confirm expected events and telemetry appear in the platform.

## Why Protocol Understanding Matters

Understanding how the BN-403C communicates helps installers and fleet operators achieve reliable reporting, timely alerts, and predictable remote control behavior when the device is integrated with Plaspy. This knowledge improves troubleshooting and ensures the device delivers the required telemetry for operational workflows.

- Enables faster setup by confirming device reporting destination and transport match Plaspy settings.
- Helps troubleshoot intermittent connectivity by isolating transport issues versus device firmware behavior.
- Improves alarm and event tuning so operators receive meaningful notifications without excessive noise.
- Supports validation of optional sensors and accessories so their data appears correctly in Plaspy.
- Assists with planning for fallback options like SMS or alternate transports in limited network areas.

## Why Use Plaspy with This Protocol

Using the BN-403C together with Plaspy gives organizations consolidated visibility into vehicle location, events, and historical movement with minimal per device configuration. Plaspy’s shared endpoint approach and automatic protocol detection reduce setup complexity, while the BN-403C’s multi transport capabilities and backup battery support reliable reporting across common fleet and anti theft scenarios.

To learn more about Plaspy and how it can work with the BN-403C, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and detailed manufacturer instructions verify information on the official Coban site at https://www.coban.net/.
