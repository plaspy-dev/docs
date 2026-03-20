---
slug: /sinotrack/st_903/protocol
id: st_903-protocol
sidebar_label: Protocol
title: SinoTrack - ST-903 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for SinoTrack ST 903 integration with Plaspy servers and practical compatibility notes
keywords:
  - SinoTrack ST-903 protocol
  - SinoTrack ST-903 GPS protocol
  - ST-903 tracking protocol
  - ST-903 Plaspy compatibility
  - SinoTrack GPS tracker protocol
  - ST-903 GPRS SMS configuration
  - SinoTrack ST-903 integration
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - ST-903 small asset tracking
---

# SinoTrack - ST-903 Protocol

This page describes the public protocol context for using the SinoTrack ST-903 with Plaspy. It focuses on how the device can be configured to report location and status data to Plaspy servers and what to expect from that communication in broad, non sensitive terms. The ST-903 is an ultra-compact GPS tracker intended for discreet personal and small asset tracking and can be pointed at a third party server by SMS configuration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact message behavior and reporting cadence can vary by firmware version, hardware revision and manufacturer configuration, so device behavior you observe may differ depending on firmware and SMS settings on the ST-903.

## Protocol Overview

The tracker reporting protocol is the set of rules the ST-903 uses to send position, status and alarm data to a server so that Plaspy can receive and present usable telemetry. For the ST-903 this typically means the device sends location and event updates over a cellular data link to the configured Plaspy endpoint after the device is pointed at the server via SMS configuration.

- Enables the ST-903 to transmit GPS coordinates and basic telemetry to a remote server for ingestion by Plaspy.
- Carries device identity and status information so Plaspy can attribute messages to the correct unit and record history.
- Delivers alarm and event notifications such as geofence or motion alerts that Plaspy can surface as notifications.
- Supports fallback and configuration via SMS so the device can be redirected to Plaspy without firmware changes.
- Determines update frequency and payload content that affect battery life and tracking granularity.

## How Plaspy Detects the Protocol

Plaspy receives data from many tracker models on a common reporting endpoint and determines the device protocol from the incoming connection and message characteristics. Because Plaspy automatically detects the tracker protocol, most users do not need to select a protocol manually in the platform when the ST-903 is configured to report to Plaspy.

- Plaspy listens on a shared endpoint for device reports and recognizes the ST-903 message flow automatically.
- The Plaspy server domain accepted for reporting is d.plaspy.com and can also be reached by IP at 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies device configuration and onboarding.
- If the device is correctly configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is usually unnecessary.
- Automatic detection means Plaspy matches incoming data to known device types and applies the appropriate handling for recording and display.

## Transport and Connection Context

Connection transport and endpoint configuration determine how the ST-903 reaches Plaspy. The ST-903 supports reporting over cellular data and can be pointed to Plaspy’s network endpoint via SMS configuration commands and APN settings.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and user configuration.
- Plaspy accepts reports directed to d.plaspy.com and the same endpoint can be addressed by IP at 54.85.159.138.
- All devices in Plaspy use the same port, which is 8888, reducing configuration differences across models.
- Transport choice (UDP vs TCP) can affect delivery behavior and should match the ST-903 configuration you set by SMS.
- Ensure APN and server address are correctly set on the device so GPRS reporting reaches the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions and hardware batches of the ST-903 can alter which messages are sent or which features are available, so firmware matters for exact behavior.
- Manufacturer SMS configuration commands are the standard way to point the ST-903 to Plaspy; examples in device documentation include commands to set server IP and APN.
- Selecting UDP or TCP on the device must match the device capability and desired delivery behavior; Plaspy accepts both on port 8888.
- Some ST-903 features such as Google Maps SMS links, SMS control, or fallback behaviors may be vendor features outside Plaspy and can vary by firmware.
- Validate device compatibility and command syntax against the official SinoTrack documentation for your firmware version before large deployments.
- Network factors such as GSM band availability and a compatible SIM with GPRS support affect connectivity and are independent of protocol parsing.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators configure the ST-903 for reliable reporting to Plaspy and to troubleshoot connectivity, event handling and battery use.

- Ensures server address and APN are set correctly so messages reach d.plaspy.com or 54.85.159.138 on port 8888.
- Helps choose appropriate transport mode (UDP vs TCP) and reporting intervals to balance real time visibility and battery life.
- Clarifies which events and alarms the device will transmit so Plaspy can be configured to surface meaningful alerts.
- Aids in diagnosing intermittent reports by verifying SMS settings, SIM data capability, and firmware behavior.
- Supports predictable history and route playback by confirming how often and under what conditions the ST-903 records and sends positions.

## Why Use Plaspy with This Protocol

Pairing the ST-903 with Plaspy gives small asset and personal tracking use cases a straightforward server endpoint and unified handling of position and alarm data. The ST-903’s SMS configurable server settings make it easy to redirect device reporting to Plaspy without modifying hardware, and Plaspy’s automatic protocol detection reduces configuration steps in the platform.

If you want to learn more about how Plaspy handles device reporting and the features available for visibility, monitoring and alerting, visit https://www.plaspy.com. For the most current device specific protocol commands, firmware notes and SMS configuration syntax refer to the manufacturer at https://www.sinotrackgps.com/ as device support and firmware behavior can change over time.
