---
slug: /suntech/st6560/protocol
id: st6560-protocol
sidebar_label: Protocol
title: Suntech - ST6560 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Suntech ST6560 and how it communicates with Plaspy in fleet setups
keywords:
  - Suntech ST6560
  - ST6560 protocol
  - Suntech GPS tracker protocol
  - ST6560 Plaspy compatibility
  - OBD II tracker protocol
  - vehicle tracking protocol
  - fleet management tracker
  - ST6560 communication protocol
  - GPS telemetry protocol
  - OBD II telemetry
---

# Suntech - ST6560 Protocol

This page documents the public protocol context for using the Suntech ST6560 OBD II GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform and what to expect during setup and operation without exposing sensitive implementation details. The goal is to help fleet administrators, integrators, and technical users understand the communication role of the ST6560 when connected to Plaspy.

The ST6560 is a plug and play OBD II tracker with advanced telemetry such as multi constellation GNSS, dead reckoning, BLE sensor support, and deep OBD II and J1939 access. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Use this page as a protocol orientation and consult manufacturer documentation for firmware specific details.

## Protocol Overview

The device communication protocol defines how the ST6560 reports position, vehicle telemetry, diagnostics, and events to a remote server. For Plaspy integration the protocol's role is to ensure the tracker can identify itself, transmit timely location updates and diagnostics, and deliver events that Plaspy can map into dashboards and alerts.

- Enables periodic and event driven transmission of GPS location and OBD II telemetry to the backend.
- Carries vehicle identifiers so Plaspy can associate incoming messages with the correct asset record.
- Conveys diagnostics, DTCs, and engine signals that Plaspy uses for maintenance rules and alerts.
- Supports transport over cellular networks so devices can report to a central Plaspy endpoint.
- Provides a mechanism for the tracker to send geofence events, motion reports, and BLE sensor readings to Plaspy.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device connections on a single, shared endpoint and automatically recognize the tracker protocol based on the incoming data flow and device identifiers. In most deployments the user does not need to select a protocol inside Plaspy if the ST6560 is configured to report to the Plaspy endpoint.

- Plaspy listens on a common server endpoint and port and performs automatic protocol detection.
- Users configure the device to report to the Plaspy endpoint and do not typically need to set a protocol option manually.
- Proper device identifiers and consistent reporting intervals improve detection and onboarding.
- If a device uses manufacturer default servers, change its reporting host to the Plaspy endpoint to enable automatic detection.

## Transport and Connection Context

Connection settings are a practical part of successful integration. The ST6560 can be configured to use either UDP or TCP to send data to Plaspy, and Plaspy accepts connections on a single supported port for all devices to simplify deployment.

- Devices may be configured to point to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The Plaspy service accepts device reports on port 8888 and all supported devices use the same port.
- The ST6560 may use UDP or TCP on port 8888 depending on device configuration and network behavior.
- Using the Plaspy domain name simplifies carrier changes and load balancing while the IP is useful for troubleshooting.
- Check device provisioning to ensure the active transport and host match Plaspy settings.

## Protocol Compatibility Notes

- Firmware versions can introduce variations in what telemetry fields are reported and how often messages are sent.
- Hardware revisions or regional variants may support different cellular bands or optional interfaces such as J1939.
- Transport selection between UDP and TCP can affect message reliability and network behavior; choose the one that matches your operational needs.
- Manufacturer default servers or cloud services must be changed to the Plaspy endpoint for direct reporting to Plaspy.
- Verify that BLE sensor usage and OBD II PID sets used by your workflow are supported by the device firmware you intend to deploy.
- Always validate compatibility against the latest Suntech documentation for device specific limitations or optional features.

## Why Protocol Understanding Matters

Understanding how the ST6560 communicates helps streamline setup, improve reliability, and speed troubleshooting when integrating with Plaspy. A clear view of the communication expectations reduces onboarding time and improves long term operational stability.

- Ensures correct device provisioning so Plaspy can automatically detect and map incoming data.
- Helps identify connectivity issues related to transport, host configuration, or carrier behavior.
- Guides firmware management decisions when new telemetry fields or bug fixes are released.
- Improves event tuning for geofences, motion detection, and OBD II polling intervals to reduce noise.
- Supports informed decisions about using TCP versus UDP for your fleet and network conditions.

## Why Use Plaspy with This Protocol

Using the Suntech ST6560 with Plaspy provides a straightforward path to combine vehicle level diagnostics and position reporting in one platform. The ST6560's OBD II access, J1939 support for heavy vehicles, BLE sensor integration, and multi network cellular design make it a practical choice for fleet visibility, preventive maintenance workflows, and anti theft monitoring when paired with Plaspy.

To learn more about Plaspy and how this tracker integrates into the platform visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information on the official Suntech website http://www.suntechint.com/.
