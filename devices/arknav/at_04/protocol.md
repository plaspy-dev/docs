---
slug: /arknav/at_04/protocol
id: at_04-protocol
sidebar_label: Protocol
title: ArkNav - AT-04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for ArkNav AT-04 GPS tracker and how it communicates with Plaspy
keywords:
  - ArkNav AT-04 protocol
  - ArkNav AT-04 GPS protocol
  - ArkNav AT-04 communication
  - AT-04 tracking protocol
  - ArkNav GPS tracker Plaspy
  - AT-04 Plaspy compatibility
  - compact GPS tracker protocol
  - asset tracking AT-04
  - child protection GPS protocol
  - Plaspy device protocol detection
---

# ArkNav - AT-04 Protocol

This page covers the public protocol context for using the ArkNav AT-04 Compact GPS Tracker with Plaspy. It explains, at a high level, how the device reports location and motion data to the Plaspy platform and what to expect during setup and monitoring. The content focuses on communication and integration considerations rather than proprietary or implementation-specific details.

The AT-04 is Plaspy compatible and designed for discreet asset and personal protection with AGPS and cell based location assistance, flexible reporting modes, and long battery life. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration. For device specific parameters consult the official manufacturer documentation.

## Protocol Overview

The AT-04 reporting protocol defines how the tracker identifies itself to a server, sends location and motion data, and supports operational features such as timer or movement-activated reporting. This public overview describes the role of the protocol in enabling reliable ingestion and presentation of tracker telemetry within Plaspy without exposing proprietary packet formats.

- Enables the device to report GNSS and assisted location fixes, plus basic motion or tamper events that Plaspy can ingest.
- Conveys device identifiers and status fields that allow Plaspy to associate incoming data with the correct asset or user account.
- Supports configurable reporting modes such as periodic timer reports and movement triggered uploads to balance update frequency and battery life.
- Provides fallbacks such as SMS and call based location requests which can complement server uploads in low data connectivity scenarios.
- Allows local backup storage to preserve recent fixes when real time upload is temporarily unavailable.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections at a shared server endpoint and port and automatically determines the tracker protocol used by each device. When an AT-04 is configured to report to the Plaspy endpoint, the platform typically detects the tracker protocol without manual protocol selection inside Plaspy.

- Plaspy accepts device reports at d.plaspy.com and at the public server IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, which simplifies device configuration and reduces setup errors.
- The device may be configured to use either UDP or TCP to send data to port 8888 depending on its firmware and installer settings.
- Properly configured devices that point to the Plaspy endpoint are generally recognized automatically by the platform.
- Users usually only need to ensure the tracker’s server address and transport settings match the Plaspy connection context.

## Transport and Connection Context

Transport and connection settings determine how the AT-04 opens and maintains communication with Plaspy but do not require knowledge of packet internals for most installations. The following points summarize the connection options and practical considerations for pointing the tracker to Plaspy.

- The AT-04 may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings.
- Devices can be set to report to the hostname d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses port 8888 uniformly for all supported devices to simplify provisioning and firewall configuration.
- Choose UDP for lower overhead and potentially reduced power use when supported; choose TCP if the device or network requires a connection oriented transport.
- Confirm that any network firewalls or APN settings allow outbound traffic to port 8888 to ensure reliable uploads.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and transport defaults; check the device firmware level when validating compatibility.
- Hardware revisions or regional variants may affect supported GSM bands and therefore reporting reliability in different regions.
- Manufacturer configuration options sometimes allow switching between UDP and TCP or modifying heartbeat/report intervals; verify desired behavior during provisioning.
- SMS and call based location features are useful fallbacks but operate outside the server protocol and may vary by firmware and mobile carrier.
- Plaspy’s automatic detection reduces the need for manual protocol selection, but confirm device server settings match Plaspy’s connection endpoint.
- Always validate integration during an initial field test to confirm reporting frequency, geolocation accuracy, and event behavior meet operational needs.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a reliable and maintainable deployment of AT-04 devices with Plaspy. Basic protocol awareness speeds troubleshooting, clarifies battery life tradeoffs, and guides proper configuration across diverse environments.

- Helps identify why a device may not appear in Plaspy if server address or transport is misconfigured.
- Clarifies the impact of reporting intervals and movement thresholds on battery life and data volume.
- Guides network and firewall configuration by confirming required endpoints and port usage.
- Makes it easier to interpret device behavior differences after firmware updates or hardware revisions.
- Supports planning for fallback options such as SMS or call requests when cellular data is unavailable.

## Why Use Plaspy with This Protocol

Using the AT-04 with Plaspy gives organizations a compact, low maintenance option for discreet tracking, with Plaspy converting the device’s location and motion feeds into real time visibility, alerts, and historical reporting. The combination is particularly well suited to asset protection, child safety, and light route monitoring where size, battery endurance, and simple operation are priorities.

To learn more about Plaspy and how it handles device communication, visit https://www.plaspy.com. Keep in mind that protocol support, firmware behavior, and device implementation details may change over time; verify the latest device specific protocol and firmware information on the manufacturer site at https://www.arknavgps.com.tw/.
