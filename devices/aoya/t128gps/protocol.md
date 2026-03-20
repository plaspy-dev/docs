---
slug: /aoya/t128gps/protocol
id: t128gps-protocol
sidebar_label: Protocol
title: AoYa - T128GPS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the AoYa T128GPS tracker and how it communicates with Plaspy for reliable GPS reporting and integration
keywords:
  - AoYa T128GPS protocol
  - AoYa T128GPS GPS protocol
  - AoYa T128GPS Plaspy compatibility
  - AoYa T128GPS communication
  - AoYa T128GPS tracking protocol
  - AoYa GPS tracker protocol
  - T128GPS integration Plaspy
  - vehicle tracking AoYa T128GPS
  - asset tracker T128GPS protocol
  - Plaspy tracker protocol
---

# AoYa - T128GPS Protocol

This page describes the public protocol context for integrating the AoYa T128GPS tracker with Plaspy. It focuses on the communication and connection considerations that matter when sending location, status, and alert data from the device to Plaspy. The content is intended to help administrators and integrators understand how the tracker reports to a fleet platform without exposing firmware internals or sensitive implementation details.

The AoYa T128GPS is a compact magnetic tracker with built in GPS and GSM antennas, real time tracking, geofencing, SOS alerts, and a rechargeable battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior should be validated against current manufacturer documentation.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the T128GPS communicates position, movement status, and event alerts to a remote server so that a platform like Plaspy can display and act on that information. This page explains the role of that protocol in general terms and how it relates to reliable reporting and integration.

- Enables the tracker to transmit location fixes, timestamps, and basic telemetry for display in Plaspy.
- Conveys device identity and status so Plaspy can attribute incoming reports to the correct asset or user.
- Delivers event notifications such as geofence entry or exit and SOS alerts that trigger platform actions.
- Supports periodic and event driven reporting modes that balance update frequency and battery life.
- Allows configuration parameters (server address, transport type, reporting intervals) to be set on the device to direct data to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives inbound tracker traffic on a shared endpoint and port and automatically selects the appropriate handling for supported devices. When a device is configured to report to the Plaspy endpoint, users typically do not need to manually choose a protocol inside Plaspy unless a custom integration is being implemented.

- Plaspy listens on a single port for all supported trackers and uses automated detection to identify the tracker reporting protocol.
- Devices that are configured correctly and send data to the Plaspy endpoint will normally be recognized without manual protocol selection.
- Administrators should ensure device reporting settings match Plaspy connection parameters so automatic detection can succeed.
- For unusual or customized device configurations, review device documentation and Plaspy setup guides to confirm correct reporting behavior.
- If a device does not appear to register, verify network routing and that the tracker is addressing the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the device sends data to Plaspy and where that data is addressed. The T128GPS may be configured to use different transport types depending on device capability and the chosen settings.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts connections and reports at the domain d.plaspy.com and can also be reached at the public IP address 54.85.159.138.
- All devices in Plaspy use the same port, simplifying server configuration and device setup across different tracker models.
- Choose the transport (UDP or TCP) on the tracker according to the device manual and operational needs such as latency and reliability.
- Confirm that mobile operator networks and any intermediate firewalls permit outbound traffic to the Plaspy endpoint on the configured transport.

## Protocol Compatibility Notes

- Firmware version differences can change device behavior; confirm the tracker firmware release when validating compatibility.
- Hardware revisions or variant models from the manufacturer can introduce protocol or feature differences.
- Manufacturer default settings may point to a different server; update the device reporting target to d.plaspy.com or 54.85.159.138 as needed.
- Transport selection between UDP and TCP affects delivery characteristics; follow the device manual for supported modes.
- Validate geofence, SOS, and reporting interval behavior on a test device before deploying at scale.
- When in doubt, consult the manufacturer documentation to resolve ambiguities about supported commands and configuration methods.

## Why Protocol Understanding Matters

Understanding the device protocol helps ensure a smooth integration with Plaspy, reduces setup time, and improves long term reliability of tracking and alerts. Clear knowledge of how the tracker communicates makes troubleshooting more effective and helps optimize reporting for battery life and network use.

- Speeds initial setup by aligning device reporting parameters with Plaspy connection settings.
- Reduces false alerts and missing updates by ensuring event and reporting modes are properly configured.
- Improves troubleshooting by narrowing down whether issues are network, transport, or device configuration related.
- Helps optimize the balance between update frequency and battery consumption for real world use cases.
- Supports safe testing and validation before widespread deployment.

## Why Use Plaspy with This Protocol

Using the AoYa T128GPS with Plaspy provides a straightforward way to collect location and event data for vehicle, asset, or personal tracking. Plaspy’s shared endpoint and automatic protocol detection reduce configuration complexity, letting organizations focus on operational workflows rather than low level integration details. The tracker’s magnetic design and compact form factor make it easy to place where it best serves monitoring needs.

If you want to learn more about how Plaspy handles device integrations and the wider feature set available for fleet visibility, please visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions for the AoYa T128GPS, verify current information on the manufacturer website http://www.aoyagps.com/. Protocol support and device firmware behavior can change over time, so checking the manufacturer resources ensures you have the most accurate guidance.
