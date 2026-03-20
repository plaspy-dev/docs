---
slug: /gotop/g25c_4g/protocol
id: g25c_4g-protocol
sidebar_label: Protocol
title: GOTOP - G25C-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP G25C 4G and Plaspy compatibility explaining connection settings and practical integration notes
keywords:
  - GOTOP G25C-4G protocol
  - GOTOP G25C-4G GPS protocol
  - GOTOP G25C-4G communication protocol
  - GOTOP G25C-4G tracking protocol
  - Plaspy device compatibility
  - Plaspy tracking integration
  - GPS tracker protocol guide
  - vehicle tracking protocol
  - IoT tracker protocol
  - G25C-4G Plaspy setup
---

# GOTOP - G25C-4G Protocol

This page describes the public protocol context for using the GOTOP G25C-4G tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so integrators and administrators can understand connection requirements and what to expect during setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device specifics such as message cadence, alarm thresholds, and optional features can differ between units.

## Protocol Overview

The communication protocol for the G25C-4G governs how the tracker reports identity, location, telemetry, and alarms to a backend service such as Plaspy. In practice the protocol enables the tracker to deliver usable position updates, status reports, and event notifications that Plaspy maps into real time dashboards and historical playback.

- Enables periodic and event driven location reports from GPS BDS AGPS WiFi and LBS sources to Plaspy
- Carries device identity and status so Plaspy can associate telemetry with the correct asset
- Transmits alarm and sensor events such as movement drop off low battery geo fence and overspeed for alerting
- Supports offline storage and resend behavior so points buffered during connectivity loss are delivered when the network is restored
- Facilitates remote configuration and SMS assisted workflows for quick field changes without platform login

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port and automatically determines the tracker protocol based on the incoming traffic patterns and device reporting. In most cases users do not need to manually select a protocol inside Plaspy when the device is correctly pointed to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com for hostname based configuration
- Plaspy server IP for direct configuration is 54.85.159.138
- Devices report to port 8888 and Plaspy uses the same port for all supported devices
- The device may be configured to use UDP or TCP on port 8888 depending on device support and operator choice
- When the tracker points to the Plaspy endpoint the platform will automatically detect the protocol and begin processing reports

## Transport and Connection Context

Connection behavior determines how the G25C-4G reaches Plaspy but does not change the high level purpose of the protocol. The tracker typically uses cellular data to send telemetry and can fall back to other mechanisms for short message or SMS based controls when available.

- The device may be configured using UDP or TCP on port 8888 depending on your deployment needs
- Point the tracker to d.plaspy.com or directly to 54.85.159.138 to deliver reports to Plaspy
- Plaspy uses port 8888 for all devices so the same outbound destination port applies across trackers
- Cellular network connectivity is the primary transport for real time telemetry with offline storage used during outages
- SMS can supplement data reporting for quick location links and remote parameter changes when supported by the device

## Protocol Compatibility Notes

- Firmware revisions can change message cadence optional fields and supported commands so verify device firmware when troubleshooting
- Hardware revisions or regional variants may alter supported radio bands or available features that affect telemetry frequency
- Manufacturer side configuration and default settings can vary and may require initial parameter updates to point the device at d.plaspy.com or 54.85.159.138
- Choosing UDP or TCP affects behavior during packet loss and firewall traversal consult network policies for the best transport choice
- Offline memory and automatic resend improve reliability but timing of resend behavior is firmware dependent
- Always cross check device parameter names and SMS command formats with the manufacturer documentation before making configuration changes

## Why Protocol Understanding Matters

Understanding the communication protocol reduces setup time and helps isolate issues when a device does not appear in Plaspy or when telemetry looks incomplete. Clear expectations about transport, reporting frequency, and event behavior lead to more reliable deployments and faster troubleshooting.

- Helps verify the tracker is pointed at the correct Plaspy endpoint and port
- Clarifies whether UDP or TCP is required by the device and network
- Guides troubleshooting of missing reports during poor cellular coverage or after firmware updates
- Informs decisions about power saving profiles telemetry frequency and alarm sensitivity
- Ensures alarm and resend behavior meet operational requirements for anti theft and asset monitoring

## Why Use Plaspy with This Protocol

The GOTOP G25C-4G provides robust multi mode positioning and long battery life suitable for long term vehicle and asset monitoring. When paired with Plaspy the device can feed real time location updates, alarms, and historical telemetry into a centralized platform for monitoring and operational oversight. This combination is useful for fleets container tracking rental assets and remote equipment where durability autonomy and reliable reporting are priorities.

To learn more about Plaspy and how it works with devices like the G25C-4G visit https://www.plaspy.com. For the latest device specific protocol details firmware notes and manufacturer configuration guidance check the official GOTOP documentation at https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
