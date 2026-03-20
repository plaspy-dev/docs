---
slug: /gotop/g36/protocol
id: g36-protocol
sidebar_label: Protocol
title: GOTOP - G36 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the GOTOP G36 tracker and its compatibility with the Plaspy platform
keywords:
  - GOTOP G36 protocol
  - GOTOP G36 GPS protocol
  - G36 Plaspy compatibility
  - GOTOP tracker protocol
  - G36 tracking protocol
  - GOTOP Plaspy integration
  - G36 GPS tracker
  - G36 communication protocol
  - vehicle tracking G36
  - fleet tracking G36
---

# GOTOP - G36 Protocol

This page provides public protocol context for using the GOTOP G36 car charger GPS tracker with the Plaspy platform. It describes how the device communicates with Plaspy in broad, non-sensitive terms so fleet managers and integrators can understand the role of the tracker reporting protocol in successful deployments.

The G36 is a compact in-vehicle tracker with dual USB fast charging, GNSS positioning via GPS and BeiDou, and supplemental WiFi and LBS positioning in urban environments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so always validate device configuration and firmware status when troubleshooting.

## Protocol Overview

The protocol used by the G36 enables the device to identify itself, report position and status, and deliver alarm and telemetry events to a remote tracking service. For Plaspy compatibility, the protocol's public role is to reliably carry location, event, and basic device state information from the unit on the vehicle to Plaspy servers for mapping, alerts, and history.

- Transmits positional fixes and supplemental location hints such as WiFi or cellular LBS to the server.
- Sends alarm and status events including geofence triggers, power alerts, vibration, and offline notifications.
- Provides device identity and status metadata so Plaspy can correlate incoming messages with the correct vehicle record.
- Delivers periodic reporting or event-driven messages so Plaspy can update live location and historical routes.
- Supports transport over standard mobile data links so the unit can reach Plaspy servers from wide area networks.

## How Plaspy Detects the Protocol

Plaspy accepts reporting from many tracker models and automatically detects the tracker protocol when a device is correctly configured to report to Plaspy’s endpoint. For most deployments you do not need to choose a protocol inside Plaspy manually; devices that send their reporting to the Plaspy endpoint are typically recognized and associated with the platform.

- Plaspy’s public reporting endpoint is reachable at d.plaspy.com and at the server IP 54.85.159.138.
- Plaspy listens on port 8888 for incoming device connections and reports.
- Plaspy automatically detects the tracker protocol when the device sends identifiable reporting to the endpoint.
- Users typically configure the G36 to point to Plaspy’s domain or IP and use the allowed transport (UDP or TCP) on port 8888.
- Because protocol detection is automatic, proper device addressing and network connectivity are the most common setup requirements.

## Transport and Connection Context

Connection context describes how the G36 reaches Plaspy rather than protocol internals. The G36 can be configured to use the standard Plaspy endpoint and will use either UDP or TCP depending on the device configuration and network environment.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy platform uses port 8888 for device reporting; this is the same port used across all supported devices.
- The G36 may be set to use UDP or TCP transport to send its reporting to Plaspy on port 8888.
- Cellular connectivity carries the tracker messages from vehicle to the Plaspy endpoint over mobile networks.
- Ensure network operators and APN settings allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or behavior; confirm the device firmware level when validating compatibility.
- Hardware revisions or product variants may alter available features such as supplemental sensors or backup battery behavior.
- Manufacturer configuration settings (server address, transport type, reporting interval) determine whether a device can reach Plaspy correctly.
- Some features described in product marketing may depend on optional firmware or server-side configuration to be fully functional with Plaspy.
- When deploying at scale, test a sample device and confirm the server connection, event reporting, and geofence behavior before wide rollout.
- Always compare observed behavior against the manufacturer’s official configuration guidance to avoid mismatches.

## Why Protocol Understanding Matters

A practical understanding of the G36 communication protocol helps ensure accurate setup, reliable alarm delivery, and efficient troubleshooting when integrating devices with Plaspy. Knowing the communication context makes it easier to diagnose connectivity issues and confirm that the device reports the expected events.

- Helps validate that the device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Guides troubleshooting for missed positions, delayed events, or intermittent reporting by checking transport and APN settings.
- Clarifies how power and alarm events should appear in Plaspy so alerts and automations can be configured properly.
- Supports planning for firmware or hardware variation impact when scaling deployments across vehicle fleets.
- Enables informed coordination with manufacturers or network operators when connectivity or behavior deviates from expectations.

## Why Use Plaspy with This Protocol

Using the GOTOP G36 with Plaspy provides a simple way to combine continuous location reporting and event alerts with driver device charging in a single unit. For organizations that need visibility and operational oversight, the G36 supplies the core location, alarm, and status data that Plaspy uses to present live maps, route history, geofence alerts, and reporting.

Plaspy’s standardized endpoint and automatic protocol detection simplify device onboarding: point the G36 at d.plaspy.com or 54.85.159.138 using UDP or TCP on port 8888, and Plaspy will ingest the reporting for mapping and alerts. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and configuration guidance on the manufacturer site https://www.gotop.cc/.
