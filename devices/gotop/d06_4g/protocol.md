---
slug: /gotop/d06_4g/protocol
id: d06_4g-protocol
sidebar_label: Protocol
title: GOTOP - D06-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP D06-4G GPS tracker compatibility with Plaspy and connection guidance
keywords:
  - GOTOP D06-4G protocol
  - GOTOP D06-4G GPS protocol
  - GOTOP D06-4G Plaspy
  - GOTOP D06-4G communication
  - GOTOP D06-4G tracking
  - GOTOP tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - fleet tracking GOTOP
  - D06-4G telemetry
---

# GOTOP - D06-4G Protocol

This page provides the public protocol context for using the GOTOP D06-4G tracker with Plaspy. It summarizes how the device reports position and event telemetry to a tracking server and what aspects of the communication protocol are relevant when integrating the D06-4G into Plaspy for real-time monitoring, alerts, and history playback.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol so most users do not need to pick a protocol manually inside the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so consider this a high level, public-facing reference rather than a firmware specific engineering guide.

## Protocol Overview

The D06-4G communicates GNSS-derived position, local network context, and event telemetry to a remote server for ingestion by a platform such as Plaspy. The tracker is designed to send regular location updates plus event-driven messages (for example SOS, geofence, power-cut, vibration) so Plaspy can present live location, alarms, and historical routes to operators.

- Carries periodic location fixes and device telemetry from the unit to the server for live map visualization and history.
- Sends event notifications such as SOS, geofence breaches, power loss, low battery, and vibration alarms for immediate handling.
- Provides offline storage of location records so buffered data can be uploaded after network restoration to maintain route continuity.
- Supports remote control actions such as relay-based immobilization when initiated by an authorized platform.
- Identifies the device and its reporting session to the server so Plaspy can associate incoming data with the correct asset and user account.

## How Plaspy Detects the Protocol

Plaspy receives incoming data at a shared, public endpoint and automatically determines the appropriate handling for each tracker type. When a D06-4G is configured to report to Plaspy, the platform will inspect the incoming connection and content to route data to the right device record without requiring manual protocol selection in most cases.

- Devices reporting to the Plaspy endpoint are matched to device records using identifiers present in the device reporting stream.
- Plaspy uses a single endpoint and port for all supported devices which simplifies setup for fleet administrators.
- If a device is properly configured to send data to Plaspy, manual protocol selection inside the platform is typically unnecessary.
- Plaspy logs connection metadata and events to help troubleshoot cases where a device does not appear to report as expected.
- Administrators should confirm device reporting settings on the tracker and validate that network routing and APN settings are correct when first integrating a device.

## Transport and Connection Context

The D06-4G can be configured to use either UDP or TCP transport depending on device firmware and operator preference. Plaspy accepts connections from the tracker at its public server address so devices must be pointed at Plaspy for successful delivery of GPS and event data.

- Plaspy server domain for reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The shared port used by Plaspy for incoming device connections is 8888; Plaspy uses the same port for all supported devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on their firmware and the desired transport behavior.
- Ensure the device APN and network plan allow outbound cellular connections to the Plaspy endpoint.
- Network firewalls or NAT rules on the carrier side can affect whether UDP or TCP performs better for a given deployment.

## Protocol Compatibility Notes

- Firmware and configuration differences between D06-4G units can change message timing, available events, or optional fields; verify the firmware level when troubleshooting.
- Hardware revisions or optional accessories (for instance an external microphone or different relay wiring) may add or alter available telemetry and event types.
- Transport choice (UDP vs TCP) can influence message delivery semantics and how quickly an event is retried after network loss; select the transport supported by your firmware and network.
- Plaspy’s automatic protocol detection simplifies integration but correct device identifiers and reporting destination must be configured on the tracker.
- Manufacturer-side variations in default server settings or example configuration strings are common; always cross-check with the device’s official configuration guide.
- Confirm compatibility and detailed behavior for advanced features such as remote listen-in, immobilizer control, or custom event payloads with GOTOP documentation.

## Why Protocol Understanding Matters

Understanding the D06-4G communication protocol at a conceptual level helps ensure successful integration, reliable operation, and faster troubleshooting when devices are deployed at scale. A practical awareness of how the tracker reports location and events to Plaspy reduces setup time and improves operational visibility.

- Speeds up initial setup by ensuring devices are pointed at the correct Plaspy endpoint and using compatible transport settings.
- Helps diagnose reporting gaps by isolating whether issues are network, transport, or device configuration related.
- Guides decisions about transport selection and retry behavior based on deployment constraints and carrier performance.
- Improves confidence when validating alarm forwarding, immobilizer commands, and offline data recovery behavior.
- Reduces time to resolution for fleet managers and integrators by clarifying expectations about what data the tracker will send and when.

## Why Use Plaspy with This Protocol

Using the GOTOP D06-4G with Plaspy provides a straightforward path to live location, event telematics, and fleet oversight. The device’s multi-mode positioning, internal memory for offline storage, and comprehensive alarm set make it well matched to Plaspy’s real-time monitoring, alerting, and history playback capabilities for cars, motorcycles, e-bikes, and other vehicles.

If you want to learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest D06-4G protocol details, firmware notes, and manufacturer configuration instructions always verify the current documentation on the GOTOP website https://www.gotop.cc/ as protocol support and firmware behavior can change over time.
