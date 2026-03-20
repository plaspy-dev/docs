---
slug: /cantrack/g01_g02/protocol
id: g01_g02-protocol
sidebar_label: Protocol
title: CanTrack - G01 / G02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G01 G02 and Plaspy compatibility covering connection settings and integration notes
keywords:
  - CanTrack G01 protocol
  - CanTrack G02 protocol
  - CanTrack G01 G02 GPS protocol
  - CanTrack GPS tracker protocol
  - CanTrack tracking protocol
  - G01 G02 Plaspy compatibility
  - Plaspy tracker protocol
  - vehicle tracking CanTrack
  - GPRS GPS tracker CanTrack
  - GPS tracker integration Plaspy
---

# CanTrack - G01 / G02 Protocol

This page provides a public, non-sensitive overview of the communication context for using the CanTrack G01 and G02 GPS trackers with Plaspy. It focuses on how the device reports position and status over mobile networks to the Plaspy endpoint, what role the tracker protocol plays in that communication, and practical compatibility considerations for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at the protocol and connection level while encouraging verification against manufacturer documentation.

## Protocol Overview

The tracker protocol describes how the CanTrack G01 and G02 send location, alarms, and status to a remote server. For Plaspy integration the protocol's purpose is to allow the device to identify itself to the server and deliver GPS and telemetry data in a way the backend can use for mapping, alerts, and history.

- Enables real time and periodic transmission of GPS coordinates and basic telemetry from the tracker to the server
- Carries status messages such as SOS alerts, geo-fence events, and low battery notifications
- Provides an identifier that allows Plaspy to associate incoming data with a registered device
- Supports both SMS reporting to an authorized phone number and GPRS reporting to an internet server for live tracking
- Acts as the contract between device firmware and server software so data is parsed into usable location, time, and event fields

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a single shared endpoint and port and can automatically recognize the tracker protocol when messages arrive. In most cases a properly configured tracker that reports to the Plaspy endpoint will be discovered without manual protocol selection by the user.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- Plaspy listens on port 8888 and all devices in Plaspy use the same port
- The platform automatically detects the tracker protocol when data is received at the shared endpoint
- Users typically only need to ensure the device points to the Plaspy endpoint and uses the correct transport mode
- If a device is configured to report correctly to d.plaspy.com on the supported transport, Plaspy will handle protocol detection server side

## Transport and Connection Context

Connection mode and transport affect how the G01 and G02 communicate with Plaspy but do not change the high level role of the protocol. CanTrack devices can use GPRS to send data to an internet server, and many implementations support either UDP or TCP for transport depending on firmware and configuration.

- Devices may be configured using UDP or TCP on port 8888 depending on device support and settings
- Pointing the device to d.plaspy.com or directly to 54.85.159.138 will target the Plaspy ingestion endpoint
- All Plaspy devices share the same port so port configuration is consistent across models
- GPRS network connectivity is required for internet based real time reporting to Plaspy
- Where SMS reporting is used for alerts or fallback, those messages are directed to authorized phone numbers rather than the Plaspy server

## Protocol Compatibility Notes

- Firmware revisions can change message content, frequency, and available events; always verify behavior for your firmware build
- Hardware variants or regional revisions of the same model sometimes include differences in supported transport or sensors
- Transport selection between UDP and TCP should match the device configuration that your firmware supports
- Manufacturer configuration commands and SMS control remain the authoritative source for device-side settings
- Plaspy handles detection and parsing for many common tracker behaviors but unusual or custom firmware may require validation
- Validate compatibility and configuration steps against official CanTrack documentation when setting devices to report to Plaspy

## Why Protocol Understanding Matters

Understanding the communication protocol helps operators set up devices correctly, diagnose reporting issues, and make informed choices about firmware updates and transport settings. Practical knowledge of protocol behavior reduces downtime and improves the quality of tracking data in Plaspy.

- Ensures devices are configured to send the expected identifiers so Plaspy can associate messages with the correct asset
- Helps narrow down connectivity issues between device, cellular network, and Plaspy ingestion endpoint
- Supports correct transport selection when devices offer both UDP and TCP reporting modes
- Improves troubleshooting when alerts such as geo-fence, SOS, or low battery notifications do not appear as expected
- Informs decisions about firmware updates and whether new firmware changes affect data reported to Plaspy

## Why Use Plaspy with This Protocol

Using the CanTrack G01 or G02 with Plaspy provides organizations with consolidated visibility of location, historical routes, and event alerts in a single platform. Plaspy accepts reports from the tracker when the device is configured to send data to the Plaspy endpoint, allowing teams to monitor vehicles and assets with fewer per-device configuration differences to manage.

To learn more about how Plaspy handles device connectivity and fleet level features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions, please verify information on the official CanTrack site at https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
