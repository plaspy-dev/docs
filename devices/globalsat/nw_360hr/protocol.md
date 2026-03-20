---
slug: /globalsat/nw_360hr/protocol
id: nw_360hr-protocol
sidebar_label: Protocol
title: GlobalSat - NW-360HR Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the GlobalSat NW-360HR wearable GPS tracker with Plaspy
keywords:
  - GlobalSat NW-360HR protocol
  - GlobalSat NW-360HR GPS protocol
  - NW-360HR tracking protocol
  - NW-360HR Plaspy compatibility
  - Plaspy tracker protocol
  - wearable GPS tracker protocol
  - LTE M1 NB IoT tracker protocol
  - BLE beacon tracking protocol
  - personal safety GPS protocol
  - device communication protocol
---

# GlobalSat - NW-360HR Protocol

This page describes the public protocol context for using the GlobalSat NW-360HR wearable GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so integrators and administrators understand the role of the communication channel and common configuration points for successful data ingestion.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so this document stays at a practical high level and encourages verification against manufacturer documentation when needed.

## Protocol Overview

The tracker communication protocol defines how the NW-360HR sends location, sensor telemetry, and event notifications to a backend such as Plaspy. In practice the protocol governs identifiers, timing of reports, event signaling for SOS and fall detection, and the packaging of GNSS, BLE, and physiological sensor data in messages the backend can interpret.

- Enables regular location and telemetry uploads so Plaspy can display position and sensor state.
- Carries event notifications such as SOS help presses and fall advisories to trigger alerts.
- Conveys sensor telemetry including heart rate, skin temperature, and accelerometer events for contextual monitoring.
- Includes identification and status information so the backend can associate messages with the correct device and user.
- Supports periodic and motion triggered reporting modes relevant to battery life and operational needs.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports at a shared network endpoint and uses that intake to automatically determine the tracker protocol without requiring manual protocol selection for most devices. If the NW-360HR is configured to send data to Plaspy, the platform will match incoming messages to a known device and parse the content according to the supported interpretation.

- Plaspy listens on a single shared port for all supported devices and automatically detects the tracker protocol.
- Devices should be pointed to the Plaspy endpoint to enable automatic detection and parsing by the platform.
- When NW-360HR reports arrive at the Plaspy endpoint the platform associates the stream with a device identity and telemetry schema.
- Users typically do not need to pick a protocol manually inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.
- If unusual behavior appears during setup, confirm device reporting settings and firmware revision alongside Plaspy intake logs.

## Transport and Connection Context

Connection choices determine how the NW-360HR delivers data to Plaspy and are a common place to verify when provisioning devices. The device may use either UDP or TCP depending on device support and network setup, and Plaspy provides a stable public endpoint that devices can target.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138 for direct addressing.
- The platform uses port 8888 for device communication and all devices configured for Plaspy use the same port.
- The NW-360HR may be configured to use UDP or TCP on port 8888 depending on the device network settings and carrier capabilities.
- Use the domain name d.plaspy.com where possible to allow DNS based routing and future infrastructure changes.
- Validate that any network firewalls or carrier APN rules permit outbound UDP or TCP traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions on the NW-360HR can change message timings, sensor fields, or supported reporting modes; always confirm the device firmware level during testing.
- Hardware revisions or regional variants can affect available transports or cellular bands and so influence how the device reaches Plaspy.
- Transport choice between UDP and TCP may affect delivery reliability and battery use; select the transport that matches the device configuration and network conditions.
- Manufacturer configuration menus or SIM provisioning may require setting the destination to d.plaspy.com or 54.85.159.138 and port 8888 to reach Plaspy.
- Plaspy automatically detects the protocol when the device reports to the shared Plaspy endpoint, but correct device reporting configuration is required for seamless detection.
- Validate compatibility with real world tests including SOS, fall detection, and telemetry reports to ensure Plaspy ingests events as expected.

## Why Protocol Understanding Matters

A practical understanding of the NW-360HR communication protocol helps technical teams set up devices correctly, interpret unexpected behavior, and ensure reliable long term reporting into Plaspy. Knowing the connection context and the kinds of messages the device sends reduces troubleshooting time and improves operational readiness.

- Ensures correct server address and port are provisioned so devices reach Plaspy reliably.
- Helps interpret when reports are missing due to transport, APN, or firmware change issues.
- Guides test scenarios for SOS, fall detection, and motion triggered reports to validate end to end flows.
- Supports battery life planning by understanding reporting intervals and event driven uplinks.
- Simplifies mapping of device sensor fields to Plaspy dashboards and alerting workflows.

## Why Use Plaspy with This Protocol

Using the NW-360HR with Plaspy gives organizations consolidated visibility into location and physiological telemetry alongside event driven alerts such as SOS and fall advisories. This combination supports caregiver workflows, lone worker monitoring, and operational oversight where location plus health context improves response and situational awareness.

Plaspy provides a single intake endpoint that accepts reports from the NW-360HR when configured to send to d.plaspy.com or 54.85.159.138 on port 8888. Because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, deployments are often faster to commission and simpler to operate at scale. To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the manufacturer at https://www.globalsat.com.tw/ since protocol support and implementation details can change over time.
