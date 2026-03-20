---
slug: /xirgo/xg37/protocol
id: xg37-protocol
sidebar_label: Protocol
title: Xirgo - XG37 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Xirgo XG37 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Xirgo XG37 protocol
  - Xirgo XG37 GPS protocol
  - XG37 Plaspy compatibility
  - Xirgo communication protocol
  - XG37 tracking protocol
  - Xirgo CANBUS telemetry
  - XG37 MQTT TLS
  - Plaspy device compatibility
  - fleet tracking XG37
  - vehicle telematics XG37
---

# Xirgo - XG37 Protocol

This page summarizes the public protocol context for using the Xirgo XG37 with Plaspy. It focuses on how the device exchanges telemetry and events with Plaspy, how shared connection settings are applied, and what to consider when integrating the XG37 into a live fleet deployment. The goal is to give a practical, non sensitive overview of communication behavior and compatibility rather than manufacturer internal details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the XG37 can vary by firmware version, hardware revision, and manufacturer configuration. The XG37 is commonly used with MQTT and TLS 1.2 for secure telemetry, and it can be pointed at Plaspy using the shared Plaspy endpoint and port settings described below.

## Protocol Overview

The communication protocol for the XG37 defines how GNSS positions, CANBUS telemetry, event alerts, and compliance data are packaged and transmitted to a backend. For the XG37, the device supports secure MQTT transport with TLS 1.2 for encrypted data delivery, and the device SDK enables device-side filtering and custom event logic to reduce unnecessary traffic.

- Transports telemetry such as GNSS position, CANBUS signals, and geofence events to Plaspy for real time monitoring.
- Uses secure transport mechanisms like MQTT over TLS to protect data in transit while minimizing latency.
- Supports device side filtering and rules via the SDK so Plaspy receives relevant events and reduced noisy samples.
- Delivers compliance related data such as remote tachograph downloads and event alerts for regulatory workflows.
- Works with fleet workflows in Plaspy by supplying structured telemetry that maps to vehicle diagnostics and location features.

## How Plaspy Detects the Protocol

Plaspy is designed to automatically detect the protocol a device uses when it connects to the shared Plaspy endpoint. In most cases a properly configured XG37 will begin streaming telemetry to Plaspy without the user having to manually select a protocol inside the platform.

- Plaspy exposes a single shared endpoint and port for device reporting and automatic protocol detection.
- Devices pointed to the Plaspy endpoint are recognized by server side detection routines so manual protocol selection is typically unnecessary.
- Plaspy accepts incoming connections at the public server domain d.plaspy.com and the public server IP 54.85.159.138.
- The shared Plaspy port for all devices is 8888, and Plaspy uses this port for every supported tracker.
- Plaspy’s automatic detection accommodates devices that use encrypted MQTT or other supported transports as long as the device sends data to the Plaspy endpoint.

## Transport and Connection Context

Connection details determine how the XG37 reaches Plaspy and which transport the device uses. While the XG37 commonly uses MQTT with TLS 1.2, it can be configured to send to Plaspy using the shared connection settings described here.

- Devices may be configured to reach Plaspy at d.plaspy.com or the server IP 54.85.159.138.
- The Plaspy endpoint listens on port 8888 and this is the common port used by all devices in Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- When using secure MQTT, the device will employ TLS 1.2 for encrypted telemetry transport.
- Connection behavior can vary by XG37 model and firmware, so choose the transport that matches the device configuration and carrier environment.

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported fields, or transport preferences; always check the device firmware notes for changes.
- Hardware revisions and regional models may differ in cellular bands and available interfaces such as CANBUS channel mapping.
- Manufacturer configuration options, including enabled SDK features or telemetry sampling, affect what Plaspy receives.
- Transport selection (UDP versus TCP or MQTT with TLS) should match both device capability and backend expectations for reliability and latency.
- Ensure device configuration points to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can detect and accept the connection.
- Validate integration details with official manufacturer documentation when precise behavior or new features are required.

## Why Protocol Understanding Matters

Understanding how the XG37 communicates helps ensure smooth onboarding, accurate telemetry, and effective troubleshooting when the device is used with Plaspy. Awareness of transport choices, firmware effects, and device features reduces integration time and increases operational reliability.

- Ensures correct endpoint and transport configurations so the device reliably reaches Plaspy.
- Helps diagnose connectivity issues that stem from transport, carrier, or TLS settings rather than platform configuration.
- Guides decisions about using SDK filtering or device side rules to reduce data volume and improve event relevance.
- Supports planning for firmware updates and hardware revisions that might change supported fields or behaviors.
- Improves mapping of CANBUS and compliance data into Plaspy workflows for reporting and alerts.

## Why Use Plaspy with This Protocol

Pairing the XG37 with Plaspy gives fleets a consolidated platform for real time location, vehicle telemetry, geofence alerts, and compliance workflows. Plaspy’s automatic protocol detection and shared connection settings simplify device onboarding, while device side features like SDK rules and secure MQTT with TLS 1.2 help ensure efficient, encrypted data delivery.

To learn more about how Plaspy works with devices like the XG37, visit https://www.plaspy.com. Please verify the latest device specific protocol support, firmware behavior, and manufacturer implementation details on the official Xirgo website https://xirgo.com/ as device behavior and supported features may change over time.
