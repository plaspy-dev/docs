---
slug: /concox/gt300/protocol
id: gt300-protocol
sidebar_label: Protocol
title: Concox - GT300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Concox GT300 and how the device communicates with Plaspy
keywords:
  - Concox GT300 protocol
  - Concox GT300 GPS protocol
  - GT300 tracking protocol
  - Concox GPS tracker protocol
  - GT300 Plaspy compatibility
  - Concox GT300 communication
  - GT300 device integration
  - GPS tracker protocol Plaspy
  - vehicle tracking GT300
  - asset tracking Concox
---

# Concox - GT300 Protocol

This page provides public protocol context for using the Concox GT300 with Plaspy. It describes how the tracker typically communicates with a Plaspy server, what role the reporting protocol plays in reliable tracking, and which connection settings are commonly used for integration. This information is intended to help technical users and integrators understand the communication relationship between the GT300 and Plaspy without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior for the GT300 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, publicly useful protocol context and practical setup considerations.

## Protocol Overview

The GT300 reporting protocol is the set of rules the device uses to identify itself and send location and status updates to a remote server. For integration with Plaspy, the protocol determines how position reports, alarms, and status notifications are delivered and how the server recognizes the device and interprets the data it sends.

- Enables the GT300 to send location fixes, alarms, and status messages to a remote endpoint for processing.
- Carries identification information so the Plaspy server can associate incoming data with a specific device record.
- Translates device events such as SOS, geofence breaches, and low battery into messages the platform can act on.
- Supports reporting over standard network transports so the device can work across mobile networks and regions.
- Provides the basis for Plaspy to normalize incoming data into a consistent format for display and alerts.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device connections, and it automatically detects the tracker protocol when the device begins reporting. In most cases, once the GT300 is configured to report to the Plaspy endpoint, you do not need to select a protocol manually inside the platform.

- Plaspy accepts inbound device reports at the public server address d.plaspy.com and the server IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy supports devices reporting via either UDP or TCP on port 8888 depending on device capability and configuration.
- Automatic protocol detection means correct device identification typically occurs as soon as a properly configured GT300 begins reporting to the Plaspy endpoint.
- If a device does not appear, verification of network settings and device reporting destination is the usual first troubleshooting step.

## Transport and Connection Context

Connection type and address are part of the practical setup for the GT300. The tracker can be configured to report over either UDP or TCP, and it can target Plaspy by hostname or by IP address depending on local network or SIM provider behavior.

- The GT300 may be configured to use UDP or TCP on port 8888 depending on device capabilities and local configuration.
- Devices can point to the Plaspy server by hostname d.plaspy.com or to the server IP 54.85.159.138 when DNS is not available or reliable.
- Port 8888 is the common inbound port used by Plaspy for all supported devices, simplifying configuration across models.
- Transport selection may affect delivery behavior under poor network conditions; choose the transport that matches your device settings and network profile.
- Ensure the SIM or network operator does not block the chosen transport and port and that APN settings are correctly configured on the device.

## Protocol Compatibility Notes

- Firmware revisions on the GT300 can change which messages and events the device reports and how those messages are encoded.
- Hardware revisions or regional variants may introduce differences in available sensors, alarms, or reporting options.
- Manufacturer configuration defaults can vary, so confirm the device is set to report to the Plaspy endpoint and port before assuming compatibility.
- Selecting TCP versus UDP on the device may affect message reliability and should be chosen according to device support and connection conditions.
- Validate behaviour for specific features such as SOS, geofence, and low battery notifications against the device documentation for your firmware version.
- When in doubt, consult the manufacturer documentation and ensure the device is updated to a recommended firmware level if available.

## Why Protocol Understanding Matters

Understanding the GT300 communication protocol helps ensure reliable operation, faster troubleshooting, and predictable event handling when the device is used with Plaspy. Knowing where and how the device reports simplifies setup and reduces time to first accurate tracking.

- Makes initial configuration easier by clarifying which address and transport to point the device at.
- Speeds troubleshooting when reports do not arrive by narrowing checks to transport, destination, and firmware differences.
- Helps interpret device event behavior such as SOS, geofence alerts, and low battery notifications as they appear in Plaspy.
- Assists in validating that the device is sending the identification needed for correct device association in the platform.
- Supports planning for fleet scale by standardizing device network settings across similar trackers.

## Why Use Plaspy with This Protocol

Using the Concox GT300 with Plaspy provides a practical way to capture the device's location, alerts, and status messages in a centralized platform designed for monitoring and operational oversight. Plaspy's shared endpoint and automatic protocol detection reduce the manual configuration work typically required when adding compatible trackers to a system.

To get started, configure the GT300 to report to the Plaspy endpoint and confirm the transport and port match your device settings. Learn more about Plaspy and how it handles device reporting on the Plaspy website at https://www.plaspy.com. For the most current firmware and protocol details specific to the Concox GT300, verify device behavior and documentation with the manufacturer at https://www.iconcox.com/ as implementations and firmware versions may change over time.
