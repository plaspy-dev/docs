---
slug: /skypatrol/tt_8750/protocol
id: tt_8750-protocol
sidebar_label: Protocol
title: SkyPatrol - TT 8750 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for SkyPatrol TT 8750 GPS tracker and how it communicates with Plaspy for fleet tracking
keywords:
  - SkyPatrol TT 8750 protocol
  - SkyPatrol TT 8750 GPS protocol
  - TT8750 Plaspy compatibility
  - SkyPatrol tracking protocol
  - TT 8750 GPS tracker
  - SkyPatrol GPRS TCP UDP
  - vehicle tracking Plaspy
  - fleet management TT8750
  - NMEA binary GPS protocol
  - Plaspy device compatibility
---

# SkyPatrol - TT 8750 Protocol

This page covers the public protocol context for using the SkyPatrol TT 8750 GPS tracker with Plaspy. It describes how the tracker commonly reports location and status data over cellular connections and the role the device reporting protocol plays when integrating with the Plaspy platform. The information here is meant to help technical users understand how data flows between the TT 8750 and Plaspy without exposing manufacturer private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The TT 8750 supports common transport modes such as TCP, UDP, and GPRS, and it can emit GPS data in NMEA or binary formats as well as use SMS reporting depending on configuration. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device settings and capabilities should be validated against current SkyPatrol documentation.

## Protocol Overview

The tracker protocol defines how the TT 8750 packages and sends telemetry and event information so Plaspy can interpret it reliably. At a high level the protocol governs device identity, message types, reporting cadence, and whether position reports are sent as human readable GPS sentences or compact binary payloads.

- Provides device identification and session context so Plaspy can associate incoming data with a specific TT 8750 unit.
- Encodes position, time, and status fields that Plaspy uses for mapping, alerts, and vehicle telemetry.
- Supports multiple reporting transports used by the TT 8750, including TCP, UDP, GPRS data sessions, and SMS fallbacks.
- Enables alarm and geofence events, ignition and input state reporting, and odometer or telemetry values when the device firmware exposes those features.
- Allows buffered or store and forward behavior on the device to avoid data loss during brief connectivity gaps.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and automatically detects the tracker protocol used by an incoming connection. In most cases, when the TT 8750 is configured to report to Plaspy, the platform will identify the right handling logic without manual protocol selection by the user.

- Plaspy’s public server domain is d.plaspy.com and the public server IP is 54.85.159.138 for direct configuration.
- The designated port for Plaspy device reporting is 8888 and all devices in Plaspy use the same port.
- The TT 8750 may be configured to use either UDP or TCP on port 8888 depending on device firmware and user preference.
- With proper device configuration to point at the Plaspy endpoint, users typically do not need to select a protocol inside Plaspy manually.
- Plaspy’s automatic detection accommodates devices that send NMEA sentences or compact binary reports as supported by the TT 8750.

## Transport and Connection Context

Connection mode and transport choices affect how the TT 8750 delivers data. This section focuses on the publicly relevant connection context that impacts how you configure the device to reach Plaspy.

- The TT 8750 can use UDP or TCP to send data to the server; administrators should configure the device to match network and reliability needs.
- Plaspy accepts device connections on port 8888; this single port is used across all supported devices for simplicity.
- Devices can be pointed to the Plaspy endpoint using the domain d.plaspy.com or the IP address 54.85.159.138 when direct addressing is required.
- GPRS is the cellular data layer commonly used to carry TCP or UDP sessions for position reporting from the TT 8750.
- SMS and other messaging modes supported by the device can serve as alternate reporting channels where configured and supported by the device firmware.

## Protocol Compatibility Notes

- Firmware versions may add or change supported message types and reporting options; verify firmware release notes for protocol changes.
- Hardware revisions of the TT 8750 can affect available I/O, antenna configurations, or supported accessory behaviors that influence telemetry reporting.
- The manufacturer may offer multiple output formats such as NMEA and binary; confirm which format your device is configured to send.
- Choice of transport (TCP vs UDP) impacts reliability and session behavior; select the transport that aligns with your network and data requirements.
- Over the air commands and device-side buffering can affect message timing and order; test these features during deployment.
- Always validate device settings against SkyPatrol documentation and perform end-to-end tests to confirm Plaspy receives and displays expected data.

## Why Protocol Understanding Matters

Understanding how the TT 8750 communicates helps ensure a smooth setup, reliable operation, and faster troubleshooting when integrating with Plaspy. A clear view of protocol behavior reduces integration time and helps align device configuration with operational goals.

- Helps ensure the device is configured to point to the correct Plaspy endpoint and transport settings.
- Reduces ambiguity when troubleshooting missing or malformed reports by aligning device logs with expected message types.
- Guides decisions about reporting intervals, power management, and buffered reporting to balance battery life and data timeliness.
- Enables mapping of device features such as geofence alerts, ignition sensing, and virtual odometer to Plaspy platform capabilities.
- Supports effective testing and validation after firmware updates or hardware changes.

## Why Use Plaspy with This Protocol

Using the SkyPatrol TT 8750 with Plaspy provides a practical path for fleets and monitoring projects that need reliable location reporting and event awareness. Plaspy’s platform accepts the common transports and formats the TT 8750 can use, making it straightforward to collect position, status, and alarm data for mapping, reporting, and integrations.

Plaspy simplifies device onboarding by using a single listening port and automatic protocol detection. If your TT 8750 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 over TCP or UDP, Plaspy will use its automatic detection process to interpret incoming reports without requiring manual protocol selection. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware details, and manufacturer documentation verify information at the official SkyPatrol site https://www.skypatrol.com/ .
