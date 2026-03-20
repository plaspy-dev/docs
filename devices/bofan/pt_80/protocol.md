---
slug: /bofan/pt_80/protocol
id: pt_80-protocol
sidebar_label: Protocol
title: Bofan - PT-80 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview and Plaspy compatibility for the Bofan PT 80 personal tracker
keywords:
  - Bofan PT 80 protocol
  - Bofan PT 80 GPS protocol
  - Bofan PT 80 Plaspy
  - PT 80 tracking protocol
  - Bofan GPS tracker protocol
  - personal GPS tracker protocol
  - GPRS GPS tracking
  - tracker protocol compatibility
  - device communication Plaspy
  - geofence and alert protocol
---

# Bofan - PT-80 Protocol

This page provides a public overview of the communication context for using the Bofan PT-80 personal GPS tracker with Plaspy. It focuses on high level protocol behavior and connection settings that are relevant when pointing a PT-80 at Plaspy for position reporting, alerts, and remote monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact behavior can vary by PT-80 firmware version, hardware revision, or manufacturer implementation, so this page stays at a protocol level that is safe and broadly applicable while referencing the PT-80 feature set such as GPS reporting, panic alerts, geo fence notifications, SMS and GPRS reporting, and voice monitoring.

## Protocol Overview

The PT-80 communicates GPS positions, device status, and event notifications to a server over cellular data or SMS as configured. The tracker protocol defines how the device identifies itself, reports location and motion events, and signals alerts such as panic, overspeed, low battery, and geofence entry or exit.

- Enables periodic or event driven transmission of GPS coordinates and device status to a remote server
- Carries emergency and alert signals including panic button activations and movement alarms
- Supports remote reporting over GPRS with SMS as a configuration or fallback path
- Provides the necessary identity and status information for a backend like Plaspy to link data to an account
- Allows for geofence and alert management information to be interpreted by the server for notifications

## How Plaspy Detects the Protocol

Plaspy receives reported data at a shared network endpoint and automatically determines the tracker protocol used by incoming connections. In most cases a properly configured PT-80 that sends data to the Plaspy endpoint will be recognized without additional manual protocol selection in the platform.

- Plaspy accepts connections and reporting to d.plaspy.com as well as the server IP 54.85.159.138
- All devices on Plaspy use the same port and Plaspy automatically detects the tracker protocol for incoming device reports
- Devices may be configured to use TCP or UDP on the shared port depending on device support and customer configuration
- If the PT-80 is set to report to the Plaspy endpoint and uses cellular GPRS correctly, no manual protocol choice inside Plaspy is normally required
- For devices that use SMS as a fallback, ensure GPRS reporting is configured to the Plaspy endpoint for automatic detection

## Transport and Connection Context

Connection options for the PT-80 depend on how the device is configured and which communication modes it supports. Plaspy exposes a single shared endpoint and port for device reporting to simplify configuration across many tracker models.

- The PT-80 may be configured to report via UDP or TCP on port 8888
- Devices can point to the domain d.plaspy.com or the server IP 54.85.159.138 to reach Plaspy
- Port 8888 is used uniformly across devices supported by Plaspy which simplifies server settings on the tracker
- GPRS settings including APN and reporting interval affect how often the PT-80 connects to the Plaspy endpoint
- If switching transport protocol on the device, ensure server, port, and transport match the device configuration

## Protocol Compatibility Notes

- Firmware revisions can alter message timing, supported events, or optional fields in the tracker reports
- Hardware revisions or different PT-80 production runs may present minor protocol variations even under the same model name
- Transport selection between TCP and UDP can change behavior such as delivery guarantees and connection setup
- Manufacturer configuration via SMS or a configuration tool may be required to point the device at d.plaspy.com or 54.85.159.138 on port 8888
- Always validate device behavior after pointing to Plaspy by observing initial reports and confirming account linkage
- For features such as voice monitoring or waypoint storage, check whether those functions require firmware or server side support

## Why Protocol Understanding Matters

Understanding the PT-80 communication protocol and the connection context helps ensure a smooth setup, predictable behavior, and faster troubleshooting when devices are integrated with Plaspy.

- Ensures correct server address and transport settings are applied on the device for reliable reporting
- Helps diagnose missing reports by checking GPRS connectivity, APN, and whether device traffic reaches d.plaspy.com or 54.85.159.138
- Clarifies how alerts like panic or geofence events are delivered and displayed in Plaspy
- Guides testing of battery saving and motion detection settings so expected reports are generated
- Supports planning for firmware updates or device replacements that could change protocol behavior

## Why Use Plaspy with This Protocol

The Bofan PT-80 offers a compact set of features for personal tracking including real time position reporting, panic button alerts, geo fence notifications, and on device logging. Using Plaspy as the backend lets organizations and individual users centralize those reports, receive standardized alerts, and review historical tracks from multiple devices in one place. Plaspy’s automatic protocol detection and shared connection endpoint reduce configuration complexity when pointing PT-80 devices to the service.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer provided configuration instructions please verify with the official Bofan documentation at https://www.bofancloud.com/ as protocol support and firmware behavior can change over time.
