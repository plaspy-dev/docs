---
slug: /autoseeker/at_7/protocol
id: at_7-protocol
sidebar_label: Protocol
title: Autoseeker - AT-7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Autoseeker AT 7 and how it communicates with Plaspy for reliable location and alerting
keywords:
  - Autoseeker AT 7 protocol
  - Autoseeker AT 7 GPS protocol
  - Autoseeker AT 7 communication
  - AT 7 Plaspy compatibility
  - Autoseeker GPS tracker protocol
  - AT 7 tracking protocol
  - Autoseeker protocol integration
  - AT 7 device protocol
  - Autoseeker telemetry protocol
  - Autoseeker Plaspy guide
---

# Autoseeker - AT-7 Protocol

This page covers the public protocol context for using the Autoseeker AT-7 tracker with the Plaspy platform. It describes how the device communicates in general terms, what role the tracker reporting protocol plays in sending location and event data, and how those communications are received by Plaspy without revealing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is received. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on connection and compatibility guidance rather than low level packet formats.

## Protocol Overview

The AT-7 reporting protocol is the mechanism the tracker uses to deliver GNSS fixes, sensor events, and alerts to a remote server. In practical terms the protocol defines the data the device sends, how it identifies itself, and the expected lifecycle for event and history uploads so the platform can present real time tracking, alarms, and historical routes.

- Enables the device to report location, motion and alarm events to a remote endpoint for processing by Plaspy.
- Carries identification and status metadata so the platform can associate incoming messages with a registered device.
- Supports periodic and event driven transmissions to balance power use and timeliness of updates.
- Allows the device to cache points locally and upload missing history when connectivity resumes.
- Provides the basic signaling that triggers geofence alerts, SOS notifications, and telemetry visualization in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and port and uses that incoming connection context to identify the protocol in use. In most deployments you do not select a protocol manually inside Plaspy; if the AT-7 is configured to report to the Plaspy endpoint the platform will detect and handle supported device messages automatically.

- Plaspy listens for tracker connections at domain d.plaspy.com and at the public IP 54.85.159.138.
- All devices reporting to Plaspy use the same port, so configuration is simplified for installers and device vendors.
- The platform examines incoming connections and message patterns to route data to the correct device record without user selection.
- As long as the AT-7 is pointed to the Plaspy endpoint and uses an accepted transport, Plaspy will attempt to process its messages automatically.
- If a tracker is not appearing, verify device configuration, network connectivity, and that the device firmware is sending data to d.plaspy.com or the IP above.

## Transport and Connection Context

The AT-7 can use cellular IP connectivity to reach a remote server and supports common transport options depending on firmware and operator settings. Plaspy accepts both UDP and TCP connections on a single standardized port so the device may be set to either transport based on what the firmware and SIM operator support.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts both UDP and TCP on port 8888 depending on device configuration and network behavior.
- Port 8888 is used across all Plaspy supported devices to simplify device setup and firewall rules.
- Choose UDP or TCP per the device manual and cellular reliability; some deployments prefer TCP for guaranteed delivery while others use UDP for lower overhead.
- Ensure APN and SIM data settings allow outbound connections to the Plaspy endpoint and that carrier firewalls do not block port 8888.

## Protocol Compatibility Notes

- Firmware revisions on the AT-7 can change message timing, available event types, and optional telemetry fields that are sent to Plaspy.
- Hardware or regional variants may have different GNSS configurations or cellular band support that affect connectivity and fix performance.
- Transport selection between UDP and TCP should follow the device manual and your network reliability needs; Plaspy supports both on the same port.
- Some features such as FOTA, advanced sensor reporting, or vendor extensions may require specific firmware and manufacturer-side configuration.
- Always validate device server settings to ensure the AT-7 is pointing to d.plaspy.com or 54.85.159.138 and using port 8888.
- For device specific behavior and the most current instructions, consult the manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the AT-7 communicates with Plaspy helps ensure reliable setup, smoother troubleshooting, and predictable long term reporting. Understanding the protocol at a high level makes it easier to confirm device registration, interpret incoming telemetry, and coordinate firmware or configuration updates when behavior changes.

- Helps confirm correct server endpoint and transport so devices appear online in Plaspy.
- Speeds troubleshooting for missing updates by narrowing issues to connectivity, APN, or firmware differences.
- Clarifies expectations around offline caching and how missing history will be uploaded when the device reconnects.
- Supports planning for battery life and reporting intervals by matching device settings to organizational needs.
- Makes it easier to coordinate with manufacturers when specialized functionality or firmware fixes are required.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-7 with Plaspy provides compact, multi constellation GNSS reporting, event alarms, and offline caching that are well suited for personal safety and lightweight asset tracking. Plaspy ingests the device telemetry and presents location, geofence alerts, SOS notifications, and historical tracks through dashboards and notification channels, enabling monitoring and operational oversight without requiring protocol selection by the end user.

To learn more about how Plaspy handles device connectivity and features, visit https://www.plaspy.com. For the latest firmware notes, device configuration commands, and manufacturer specific behavior for the AT-7, verify current details with the manufacturer at https://autoseekergps.com/.
