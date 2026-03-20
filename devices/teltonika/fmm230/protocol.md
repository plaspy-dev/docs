---
slug: /teltonika/fmm230/protocol
id: fmm230-protocol
sidebar_label: Protocol
title: Teltonika - FMM230 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMM230 integration with Plaspy for GPS tracking and telemetry
keywords:
  - Teltonika FMM230 protocol
  - Teltonika FMM230 GPS protocol
  - FMM230 Plaspy compatibility
  - FMM230 communication protocol
  - FMM230 tracking protocol
  - Teltonika asset tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol Teltonika
  - FMM230 BLE sensor integration
  - Teltonika fleet tracking
---

# Teltonika - FMM230 Protocol

This page covers the public protocol context for using the Teltonika FMM230 with Plaspy. It explains, at a high level, how the device communicates to a Plaspy server and what role the tracker reporting protocol plays in successful data delivery. The focus is on integration and operational considerations rather than internal or proprietary protocol internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page is intended as an interoperability guide rather than a definitive protocol specification.

## Protocol Overview

The tracker reporting protocol defines how the FMM230 conveys location, telemetry, sensor inputs, and event notifications to a remote server. In practice this means the device formats and transmits messages that Plaspy receives and maps to assets in the fleet management interface. The protocol enables identification, periodic and event driven reporting, and transmission of accessory data such as BLE sensor readings and input state.

- Enables the FMM230 to send location and telemetry updates that Plaspy can ingest for real time tracking.
- Carries device identity and status so Plaspy can associate messages with the correct asset record.
- Transports auxiliary data such as BLE sensor values, IO states, and battery events for alerting and reporting.
- Supports both periodic reporting and event triggered messages to balance data volume and responsiveness.
- Allows remote configuration and firmware update mechanisms through manufacturer tools while operational data flows to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections on a shared endpoint and automatically determines the tracker protocol based on the incoming device traffic. In most deployments there is no need to select a protocol manually inside Plaspy if the device is configured to report to the Plaspy endpoint using the supported transport settings.

- Plaspy listens on a common public endpoint for device traffic which simplifies device configuration.
- When the FMM230 is pointed to the Plaspy endpoint and begins reporting, Plaspy will identify the device messages and assign the appropriate handler.
- Users typically configure the device to report to the Plaspy server and do not need to choose a parser in the platform.
- Automatic detection reduces setup steps and helps accommodate a variety of Teltonika firmware behaviors.
- If reporting does not appear, validate device networking and server destination settings before changing parser options.

## Transport and Connection Context

Connection context covers how the FMM230 reaches Plaspy and which endpoints to configure on the device. The FMM230 can use cellular transports to deliver data and is commonly configured to point at the Plaspy server address for telemetry uplink. Keep connection and DNS settings consistent with your network plan and the device firmware capabilities.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- The port used by Plaspy for device traffic is 8888 and all devices in Plaspy use the same port
- The FMM230 may be configured to use UDP or TCP on port 8888 depending on device support and site preference
- Use the device configuration tools to set the server domain or IP and the transport type that matches your network and firmware
- Confirm cellular profile and APN settings so the device can reach the Plaspy endpoint reliably

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and optional features that affect interoperability with Plaspy.
- Hardware revisions and accessory configurations such as BLE sensor attachments may influence the set of data reported.
- Transport selection between UDP and TCP can alter delivery semantics and should match what your deployment and network prefer.
- Manufacturer configuration utilities and FOTA updates may add or change protocol features over time.
- Validate device reporting to the Plaspy endpoint after configuration to confirm messages arrive and the device is recognized.
- Reference Teltonika documentation for firmware specific behavior when planning large scale rollouts or migrations.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with setup, troubleshooting, and ensuring long term reliability when using the FMM230 with Plaspy. Clear expectations about what the tracker will report and how the server receives messages reduce integration time and improve operational visibility.

- Speeds initial onboarding by ensuring correct server, transport, and APN settings are used
- Simplifies troubleshooting by narrowing failures to network, transport, or device configuration
- Helps tune reporting frequency and event settings to balance battery life and telemetry needs
- Ensures BLE sensor and IO data are mapped correctly into Plaspy alerts and dashboards
- Supports planning for firmware updates and hardware variations across a fleet

## Why Use Plaspy with This Protocol

Using the Teltonika FMM230 with Plaspy gives organizations reliable visibility into assets and vehicles operating in challenging environments. The FMM230‘s rugged design, multi network cellular options, BLE sensor support, and backup battery make it well suited to fleets, refrigerated transport, and equipment tracking. When the device reports to the Plaspy server, operators gain access to real time location, telemetry, and event workflows for operational oversight and alerting.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify current information at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
