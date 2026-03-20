---
slug: /autoseeker/at_4/protocol
id: at_4-protocol
sidebar_label: Protocol
title: Autoseeker - AT-4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Autoseeker AT-4 GPS tracker and how it communicates with Plaspy for reliable pet tracking
keywords:
  - Autoseeker AT-4 protocol
  - AT-4 GPS tracker Plaspy
  - Autoseeker tracking protocol
  - AT-4 communication protocol
  - pet GPS tracker protocol
  - 4G GPS tracker compatibility
  - Plaspy device protocol
  - GPS tracker integration Plaspy
  - AT-4 geofence and telemetry
  - Autoseeker protocol compatibility
---

# Autoseeker - AT-4 Protocol

This page describes the public protocol context for using the Autoseeker AT-4 tracker with the Plaspy platform. It focuses on how the device reports location and status to Plaspy, what connection points Plaspy exposes, and practical compatibility considerations for owners and integrators. The AT-4 is a purpose built 4G CAT 1 pet GPS tracker designed for long standby and reliable outdoor tracking, and this document explains how that device interacts with a third party platform such as Plaspy without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can depend on firmware, hardware revision, and manufacturer implementation choices. This means most Autoseeker AT-4 units can be pointed at the Plaspy endpoint and will be detected automatically, but device firmware versions, region specific builds, and configuration options may still affect runtime behavior and available features.

## Protocol Overview

The tracker reporting protocol is the set of rules the AT-4 uses to send position, event, and status updates over the cellular network to a tracking platform. On a high level the protocol ensures the device can reliably identify itself, communicate telemetry, and trigger alarms or status flags that Plaspy can present to users and dashboards.

- Provides structured location and telemetry messages so Plaspy can display real time position and history playback.
- Carries event indicators such as geofence triggers, low battery alerts, and remote monitor activity for timely notifications.
- Allows the device to identify itself so Plaspy can associate incoming messages with the correct tracker record.
- Supports transport over standard cellular network sockets so messages reach the configured server endpoint.
- Enables integration of device features like two way calling and audible alerts through event markers and status fields.

## How Plaspy Detects the Protocol

Plaspy accepts inbound connections from devices at a single shared endpoint and port and uses that endpoint to automatically identify the reporting protocol sent by a tracker. When an AT-4 is configured to report to Plaspy, the platform will inspect incoming messages to determine the correct handling and routing for that device type, minimizing manual setup for most users.

- Plaspy provides a single public endpoint that devices can point to for data ingestion.
- The platform listens on the same port for all devices so device configuration is simplified.
- In most cases users do not need to select a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.
- Automatic detection speeds up onboarding and reduces mismatches between device configuration and platform expectations.
- If a device does not appear automatically, verifying device reporting settings and firmware version is a practical next step.

## Transport and Connection Context

Connection choices affect how AT-4 messages are delivered to Plaspy but do not change the public role of the protocol itself. The AT-4 supports standard cellular transport and can be configured to send data to Plaspy using the domain or the server IP address, and it can use either UDP or TCP depending on device support and configuration choices.

- Devices may be pointed to the Plaspy server domain d.plaspy.com when configuring the tracking endpoint.
- As an alternative, the Plaspy server IP 54.85.159.138 is also usable for device configuration.
- The Plaspy platform listens on port 8888 and all devices supported by Plaspy use the same port.
- The device may be configured to use UDP or TCP on port 8888 based on what the tracker firmware and settings support.
- Choosing UDP or TCP can be a device configuration option and may affect delivery characteristics but not the fact that Plaspy will receive and process the messages.

## Protocol Compatibility Notes

- Firmware revisions can introduce behavior changes, so verify the AT-4 firmware version when troubleshooting message delivery or missing features.
- Hardware revisions or region specific SKUs may vary supported bands and network fallback behavior, which can indirectly affect reporting reliability.
- Manufacturer configuration instructions determine whether the device reports over UDP or TCP and whether it allows domain name or IP based endpoints.
- Some features like two way calling or remote voice monitoring are exposed as events and may depend on the tracker firmware and the cellular voice support in the deployment region.
- Always validate compatibility against the official Autoseeker documentation when precise behavior or firmware capabilities are required.
- Transport choice and APN settings on the SIM can affect connectivity; confirm carrier and APN configuration for long term reliability.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, accurate troubleshooting, and dependable long term operation when using the AT-4 with Plaspy. It also clarifies which device features will be visible on the platform and how events and alerts map into notifications and history.

- Faster onboarding by knowing what connection endpoint and transport to configure on the device.
- More effective troubleshooting when position updates or event messages do not appear on the Plaspy dashboard.
- Clear expectations about which device features will be transmitted as protocol events to the platform.
- Better planning for deployment logistics such as SIM APN settings, regional network coverage, and power management.
- Reduced support time by confirming firmware and hardware revision impacts before escalating to manufacturer support.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-4 with Plaspy provides pet owners and handlers with a consolidated platform for real time visibility, alarm routing, and historical route analysis. The AT-4’s long battery life, rugged IP67 enclosure, and owner facing features like two way calling and night search combine with Plaspy’s ingestion and presentation of location and event data to create a reliable field tracking solution.

Plaspy’s shared ingestion endpoint simplifies device configuration and automatic protocol detection reduces manual steps during onboarding. If you want to learn more about how Plaspy supports devices like the AT-4, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information on the manufacturer site https://autoseekergps.com/.
