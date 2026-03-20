---
slug: /falcom/bolero_lt2/protocol
id: bolero_lt2-protocol
sidebar_label: Protocol
title: Falcom - BOLERO-LT2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview and Plaspy connection guidance for the Falcom BOLERO LT2 GPS tracker
keywords:
  - Falcom BOLERO-LT2 protocol
  - Falcom GPS tracker protocol
  - BOLERO LT2 GPS protocol
  - BOLERO LT2 Plaspy compatibility
  - Falcom vehicle tracking protocol
  - GPS tracker communication Plaspy
  - Fleet management tracker protocol
  - BOLERO LT2 integration guide
  - Falcom tracking protocol overview
  - Plaspy device protocol
---

# Falcom - BOLERO-LT2 Protocol

This page provides a public protocol context for using the Falcom BOLERO-LT2 tracker with Plaspy. It summarizes how the device commonly communicates with fleet platforms, what to expect from the reporting behavior in broad terms, and how Plaspy receives and interprets device data. The content here focuses on public and practical protocol details useful for deployment and troubleshooting while avoiding manufacturer confidential internals.

The BOLERO-LT2 is a quad band GSM GPRS tracker with a high sensitivity GPS core and features such as geofencing and an internal data logger. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy’s public endpoint is d.plaspy.com and the server IP is 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP to report to port 8888. Note that exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the BOLERO-LT2 governs how the unit identifies itself, opens a reporting session, and sends position and event data so Plaspy can present usable telemetry and alerts. In practice the protocol defines the sequence and content of messages exchanged between the tracker and the server, but implementation details can differ with firmware and device options.

- Enables the device to send periodic GPS position reports and status information to Plaspy
- Provides the means for the tracker to identify itself so Plaspy can associate messages with the correct asset
- Carries event and alarm notifications such as geofence triggers or input state changes
- Supports data logger uploads so stored historical tracks are delivered to the platform
- Allows configuration or command style interactions where supported by the manufacturer and device firmware

## How Plaspy Detects the Protocol

Plaspy listens on a single public endpoint and port for all supported devices and uses that shared endpoint to automatically detect the incoming tracker protocol. If the BOLERO-LT2 is configured to report to Plaspy’s endpoint, the platform will match incoming messages to the correct device profile without requiring manual protocol selection in most cases.

- Plaspy’s public domain is d.plaspy.com and the corresponding server IP is 54.85.159.138
- All devices in Plaspy use the same port which is 8888 for reporting
- Plaspy automatically detects the tracker protocol so users normally do not need to pick a protocol inside the platform
- Devices configured to report to d.plaspy.com or 54.85.159.138 on port 8888 will be received by the platform
- Ensure device reporting settings point to the Plaspy endpoint and that network connectivity and APN settings are correct for reliable detection

## Transport and Connection Context

The BOLERO-LT2 can be configured to use standard mobile data transport to send telemetry to a server. For Plaspy the supported transport options are TCP and UDP on the unified Plaspy port. Choosing the transport depends on device configuration options and the customer deployment requirements.

- Devices may use either UDP or TCP to send data to port 8888 depending on device support and configuration choices
- The Plaspy server is reachable at d.plaspy.com and at the public IP 54.85.159.138
- Plaspy uses the same port 8888 for all devices to simplify large scale rollouts and monitoring
- Confirm the device is configured to report to the Plaspy endpoint rather than a different server address
- Network level considerations such as carrier NAT, firewall rules, and APN settings can affect connectivity and should be checked during setup

## Protocol Compatibility Notes

- Manufacturer firmware versions can change message content, available events, and reporting behavior
- Hardware revisions or model variants may differ in supported transports and features
- Plaspy’s unified port and automatic detection reduce the need for manual protocol selection but correct device reporting configuration remains essential
- Transport selection between UDP and TCP can affect behavior for delivery and session handling
- Features such as the data logger retention and geofence format are manufacturer dependent and should be validated per device firmware
- Always confirm compatibility and available features against the official Falcom documentation for the exact model and firmware

## Why Protocol Understanding Matters

A practical understanding of the BOLERO-LT2 communication protocol helps ensure reliable installation, correct server configuration, and efficient troubleshooting when devices report to Plaspy. Knowing which elements are handled by the platform and which depend on device firmware reduces guesswork during deployments.

- Verify device server settings point to d.plaspy.com or 54.85.159.138 and use port 8888
- Choose the appropriate transport setting on the device based on network and operational needs
- Check firmware release notes when new behavior appears or when a device stops reporting as expected
- Use the device data logger and reporting options deliberately to match your data retention and bandwidth requirements
- Test device reporting after configuration changes to confirm the platform receives expected telemetry

## Why Use Plaspy with This Protocol

Using the Falcom BOLERO-LT2 with Plaspy provides a straightforward path to fleet visibility and operational monitoring. Plaspy’s single listening endpoint and unified port simplify large deployments by reducing per device configuration overhead, and automatic protocol detection minimizes administrative steps when adding compatible hardware.

If you want to learn more about how Plaspy handles compatible trackers and platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol documentation, firmware notes, and configuration options for the BOLERO-LT2, please verify details on the manufacturer site https://www.falcom.de. Protocol support, firmware behavior, and device implementation details may change over time so checking the official Falcom resources is recommended for the latest information.
