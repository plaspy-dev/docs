---
slug: /autoseeker/at_11/protocol
id: at_11-protocol
sidebar_label: Protocol
title: Autoseeker - AT-11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Autoseeker AT-11 GPS tracker and how it communicates with Plaspy for real time tracking
keywords:
  - Autoseeker AT-11 protocol
  - Autoseeker AT-11 GPS protocol
  - AT-11 Plaspy compatibility
  - AT-11 communication protocol
  - Autoseeker GPS Plaspy
  - AT-11 vehicle tracker protocol
  - plug and play GPS tracker protocol
  - fleet tracking AT-11 Plaspy
  - AT-11 telemetry protocol
  - AT-11 tracking compatibility
---

# Autoseeker - AT-11 Protocol

This page summarizes the public protocol context for using the Autoseeker AT-11 4G car charger GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in general terms, the connection context you should be aware of when deploying the AT-11, and practical considerations for integration without exposing sensitive or proprietary protocol internals. The AT-11 is a compact plug and play unit that combines GPS and Beidou positioning, global 4G connectivity with 2G fallback, and an integrated phone charger while reporting telemetry and alarms for fleet and anti theft use.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly configured to report to Plaspy endpoints. Exact protocol behavior can still vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps the protocol discussion at a public, high level while explaining the connection context that matters for integration and troubleshooting.

## Protocol Overview

The AT-11 reporting protocol is the mechanism that lets the tracker deliver GNSS positions, status, and alarm events to a remote tracking platform such as Plaspy. In practical terms, the protocol defines how the device identifies itself to the server, how it sends periodic location updates and event notifications, and how the server interprets those messages into usable telematics data for live maps and alerts.

- Enables the device to send location coordinates, timestamp, speed, heading, and alarm flags to Plaspy.
- Carries event telemetry such as geo fence triggers, overspeed alarms, unplug or power loss notifications, and motion/tow alerts.
- Allows the server to associate incoming messages with a specific device identity so data appears in the correct account and history.
- Supports real time updates for live tracking and the delivery of time ordered history for playback and reporting.
- Works in conjunction with the device transport layer to ensure messages reach the Plaspy endpoint reliably.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically determines the tracker protocol based on the incoming messages and device identity information. In most deployments you do not need to manually select a protocol inside Plaspy if the AT-11 is configured to report to the Plaspy endpoint correctly.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888.
- Plaspy automatically detects the tracker protocol so devices that report to the platform typically start appearing without manual protocol selection.
- The platform groups incoming data by device identity and uses that identity to map telemetry and events to accounts and devices.
- Proper device configuration and a compatible firmware release are the usual prerequisites for seamless auto detection.
- If the device is not appearing, common checks include server address, transport type, SIM data connectivity, and firmware compatibility.

## Transport and Connection Context

The AT-11 can be configured to send data using standard network transports supported by the tracker hardware. Plaspy uses a single shared port for all supported devices and the AT-11 may be set to use either UDP or TCP on that port depending on device support and configuration choices.

- The device may be configured using UDP or TCP on port 8888.
- Devices may be pointed to d.plaspy.com or 54.85.159.138 as the Plaspy server endpoint.
- All devices in Plaspy use the same port, which simplifies server settings across different tracker models.
- Selection between UDP and TCP can affect delivery behavior and should match the device configuration and network conditions.
- Ensure the mobile provider and device SIM have active data and that APN settings are correct for the unit to reach Plaspy.

## Protocol Compatibility Notes

- Firmware variations can change message frequency, available telemetry fields, or optional event reporting behavior.
- Hardware revisions may introduce differences in GNSS performance or sensor reporting that affect the protocol payload content.
- Manufacturer side settings or regional firmware builds can alter which events are reported or how identifiers are presented to the server.
- Transport selection between UDP and TCP matters for delivery characteristics and should be validated against the active device configuration.
- Confirm that the unit is configured to report to d.plaspy.com or to the Plaspy IP address and that the port is set to 8888.
- Always validate device identity reporting so Plaspy can automatically associate incoming messages with the correct account device.

## Why Protocol Understanding Matters

Knowing the role of the communication protocol helps operators and integrators set up devices correctly, troubleshoot connectivity or data issues, and plan for firmware or hardware changes that affect long term reliability.

- Helps diagnose why a device may not appear in Plaspy even when power and SIM connectivity are present.
- Clarifies whether missing telemetry is caused by transport, firmware, or configuration rather than server issues.
- Informs decisions about choosing UDP versus TCP based on network reliability and expected message patterns.
- Supports validation of alarm behavior such as unplug, movement, and illegal ignition alerts to ensure timely notifications.
- Aids in planning firmware updates or hardware rollouts by highlighting the impact of protocol-level changes.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-11 with Plaspy gives organizations and individual users a practical way to combine quick plug and play deployment with a centralized tracking platform. The AT-11 supplies real time location, alarms and device health signals that Plaspy converts into live map views, configurable alerts, historical playback, and operational reports useful for fleet managers, rental operators, insurers, and vehicle owners.

Plaspy simplifies server configuration by using a shared endpoint and a single port for all devices and by automatically detecting tracker protocols when devices report correctly. To learn more about how Plaspy can work with Autoseeker devices and other compatible trackers, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer site https://autoseekergps.com/ as device features and firmware can change over time.
