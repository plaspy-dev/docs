---
slug: /orion/et_100/protocol
id: et_100-protocol
sidebar_label: Protocol
title: Orion - ET-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the Orion ET 100 tracker and how it communicates with Plaspy for device reporting and management
keywords:
  - Orion ET-100 protocol
  - Orion ET-100 GPS protocol
  - Orion ET-100 communication
  - ET-100 tracker protocol
  - Orion GPS tracker Plaspy
  - Plaspy device compatibility
  - vehicle tracking Orion ET-100
  - asset tracking ET-100
  - fleet management Orion
  - real time tracking ET-100
---

# Orion - ET-100 Protocol

This page describes the public protocol context for using the Orion ET-100 GPS tracker with Plaspy. It covers how the tracker communicates in broad terms, how Plaspy receives device data, and what connection details you will typically configure when directing device reports to Plaspy. The ET-100 is a compact real time tracking device with features such as geo fencing, SOS alerting, and high GPS sensitivity that make it suitable for asset management, fleet visibility, and personal security.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed to the platform. Plaspy expects devices to send data to the same server endpoint and port, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Key Plaspy connection facts you should know include the server domain d.plaspy.com, the server IP 54.85.159.138, and the platform port 8888. The device may be configured using UDP or TCP on port 8888 and all devices in Plaspy use the same port, while Plaspy automatically detects the tracker protocol.

## Protocol Overview

The protocol is the set of rules that governs how the ET-100 reports location, status, and alerts to a remote server like Plaspy. For integration purposes we discuss the protocol only in public, non sensitive terms: how it enables identification, periodic reporting, and alert delivery to the Plaspy endpoint so data can be presented and acted on by operators.

- Allows the tracker to identify itself and associate messages with a device record in Plaspy
- Carries location coordinates and time so Plaspy can produce live location updates and historical tracks
- Transmits event reports such as geofence entries and SOS alerts for immediate notification handling
- Provides status and telemetry that Plaspy can surface for monitoring and diagnostics
- Works over standard transport channels so devices can report to the shared Plaspy endpoint and port

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and port and uses that incoming data to determine which tracker protocol is in use. Because Plaspy is designed to handle many tracker models, most users do not need to select a protocol in the platform when the device is correctly configured to report to Plaspy.

- Devices should be configured to send reports to d.plaspy.com or the server IP 54.85.159.138
- All devices in Plaspy use the same port so you do not need a unique port per model
- Plaspy automatically detects the tracker protocol from incoming messages once reporting is active
- In most setups you simply point the ET-100 to the Plaspy endpoint and choose UDP or TCP per device capability
- If the device is not detected automatically, common causes include incorrect endpoint, transport mismatch, or firmware differences that alter reporting behavior

## Transport and Connection Context

Connection context covers how the ET-100 establishes a network path to Plaspy so data can flow reliably. The ET-100 may be configured to use either UDP or TCP depending on device support and configuration choices, and both transports are accepted at the Plaspy endpoint on the shared port.

- Devices may be configured using UDP or TCP on port 8888
- Point the device to d.plaspy.com or to the server IP 54.85.159.138 as the reporting destination
- Plaspy uses the same port for all supported devices which simplifies device configuration
- Select UDP for minimal overhead or TCP for connection oriented delivery based on the device capabilities and network conditions
- Ensure device APN and data settings are correct so packets reach the Plaspy endpoint reliably

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and optional features that affect compatibility
- Hardware revisions may affect which transport modes are available or how certain inputs are reported
- Manufacturer configuration tools sometimes offer multiple reporting formats or legacy modes; verify the format you enable
- Transport selection between UDP and TCP must match the device configuration to ensure successful delivery to Plaspy
- Always validate device reporting to d.plaspy.com or 54.85.159.138 on port 8888 during initial setup
- When in doubt, consult Orion documentation and release notes for firmware specific behavior

## Why Protocol Understanding Matters

Knowing how the ET-100 communicates helps with faster setup, more effective troubleshooting, and ensuring long term reliability in Plaspy. A clear view of transport and message expectations reduces integration friction and supports consistent operational monitoring.

- Helps confirm device reports are reaching Plaspy at d.plaspy.com and that the platform is detecting the protocol
- Makes it easier to interpret device behavior when events such as geofence alerts or SOS signals are generated
- Guides decisions about transport selection and cellular data configuration for reliable delivery
- Reduces time spent diagnosing reporting gaps by narrowing down firmware, transport, or endpoint issues
- Supports lifecycle planning when updating firmware or deploying new hardware revisions

## Why Use Plaspy with This Protocol

Using the Orion ET-100 with Plaspy gives organizations a straightforward path to asset visibility, event monitoring, and historical tracking without requiring per device port configuration. The ET-100 features like live location updates, geo fencing, and SOS alerts align with common operational needs for fleet management, personal safety, and asset protection, and Plaspy provides the centralized endpoint and tools to make those features actionable.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please verify device specific protocol details, firmware behavior, and any manufacturer notes on the official Orion website http://www.oriontech.com.tw/ as protocol support and device implementations can change over time.
