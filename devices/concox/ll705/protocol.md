---
slug: /concox/ll705/protocol
id: ll705-protocol
sidebar_label: Protocol
title: Concox - LL705 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Concox LL705 tracker and how it communicates with Plaspy for reliable asset monitoring
keywords:
  - Concox LL705 protocol
  - Concox LL705 GPS protocol
  - LL705 communication
  - LL705 Plaspy compatibility
  - Concox asset tracker protocol
  - 4G GPS tracker protocol
  - LL705 tracking protocol
  - fleet management tracker
  - asset tracking protocol
  - LL705 remote telemetry
---

# Concox - LL705 Protocol

This page describes the public protocol context for using the Concox LL705 GPS tracker with Plaspy. It explains how the device communicates at a high level, what role the tracker reporting protocol plays in sending locations and events, and how Plaspy receives and processes those messages for asset monitoring and fleet workflows.

The LL705 is a purpose built 4G tracker with multi source positioning and long life battery designed for long term deployments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public connection and compatibility context rather than device internals.

## Protocol Overview

The protocol used by the LL705 defines how the device reports position, basic telemetry, and event notifications to a backend. In public terms, the tracker protocol ensures that GNSS fixes, fallback cell based locations, BLE discoveries, and status alerts are encoded and transmitted so Plaspy can ingest them for real time tracking and historical reporting.

- Enables the LL705 to send GNSS positions, LBS fallback locations, BLE sensor hints, and status events to Plaspy.
- Carries device identification so Plaspy can associate incoming messages with a registered tracker.
- Encodes telemetry such as battery state, tamper alerts, and basic sensor readings for monitoring and maintenance.
- Allows for event driven messages that trigger geofence alerts, movement reports, and low battery notifications inside Plaspy.
- Supports device management interactions such as coordinating firmware updates when FOTA is available and supported.

## How Plaspy Detects the Protocol

Plaspy receives tracker messages on a shared endpoint and port and determines the correct processing automatically when a device reports. This means correct network destination configuration on the device is the key step for integration, and users typically do not need to select a parser manually as long as the device sends to the Plaspy endpoint.

- Plaspy accepts connections at the domain d.plaspy.com and the public server IP 54.85.159.138 for device reporting.
- The platform listens on port 8888 for all supported devices and automatically detects the tracker protocol used by incoming connections.
- Devices can be configured to send to the Plaspy domain or the listed IP address depending on the deployment and DNS preferences.
- If the LL705 is configured correctly to report to Plaspy, manual protocol selection inside Plaspy is generally unnecessary.
- Automatic protocol detection helps streamline onboarding for a broad range of supported tracker models.

## Transport and Connection Context

Connection details determine how the LL705 reaches Plaspy on the network. Depending on device network stack and configuration, the tracker may use either UDP or TCP transport when sending messages to Plaspy on the shared port.

- The LL705 may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings.
- Devices can target the Plaspy domain d.plaspy.com or the server IP 54.85.159.138 as the reporting endpoint.
- All devices supported by Plaspy use the same port, which simplifies network and firewall configuration for fleets.
- Choose TCP when a reliable session oriented transport is preferred and UDP when minimal overhead and lower power use are priorities, subject to device capabilities.
- Ensure the network path from the device to the Plaspy endpoint allows outbound traffic to port 8888 on the configured transport.

## Protocol Compatibility Notes

- Firmware versions can change message timing, fields included in reports, and available event types; verify the device firmware level when troubleshooting.
- Hardware revisions or regional LL705 variants may have minor differences in supported bands or telemetry options that affect reporting behavior.
- Manufacturer side configuration options such as working modes and reporting intervals will influence message frequency and battery life.
- Transport selection UDP versus TCP may be constrained by SIM provider network behavior or device settings and should match the device configuration.
- Some features like FOTA or BLE sensor reporting may require additional manufacturer configuration to work with Plaspy device management.
- Always validate critical behavior against the manufacturer documentation and test a representative device on your network before wide scale rollout.

## Why Protocol Understanding Matters

Understanding how the LL705 communicates helps ensure reliable setup, efficient power use, and effective troubleshooting when devices are in the field. Clear knowledge of the protocol surface and transport context reduces integration time and improves operational visibility.

- Confirms correct destination and transport settings so devices successfully reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps tune reporting intervals and working modes to balance location freshness and battery life for long term deployments.
- Makes it easier to interpret why certain events such as tamper or low battery alerts appear in Plaspy and how they are generated.
- Simplifies network configuration and firewall rules since all Plaspy devices use the same port.
- Provides a baseline for coordinating firmware updates and device management actions that rely on predictable reporting behavior.

## Why Use Plaspy with This Protocol

Using the LL705 with Plaspy gives organizations long term visibility on high value and remote assets while reducing maintenance overhead. The LL705’s large primary battery, multi source positioning, rugged enclosure, and configurable working modes pair well with Plaspy’s centralized tracking, alerting, and reporting capabilities to deliver practical operational value.

Plaspy’s shared endpoint approach and automatic protocol detection simplify onboarding at scale. To learn more about how Plaspy can work with the LL705 and other asset trackers visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify current device specific protocol and firmware information with the manufacturer at https://www.iconcox.com/.
