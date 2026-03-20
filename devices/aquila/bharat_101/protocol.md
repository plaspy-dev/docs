---
slug: /aquila/bharat_101/protocol
id: bharat_101-protocol
sidebar_label: Protocol
title: Aquila - BHARAT 101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Aquila BHARAT 101 and its communication with Plaspy server settings and compatibility
keywords:
  - Aquila BHARAT 101 protocol
  - Aquila BHARAT 101 GPS protocol
  - BHARAT 101 Plaspy compatibility
  - Aquila tracking protocol
  - BHARAT 101 vehicle tracker
  - AIS140 tracker protocol
  - fleet management Plaspy
  - GPS tracker Plaspy integration
  - BHARAT 101 communication protocol
  - Aquila BHARAT 101 tracking protocol
---

# Aquila - BHARAT 101 Protocol

This page covers the public protocol context for using the Aquila BHARAT 101 tracker with Plaspy. It summarizes how the device communicates in general terms and what to expect when integrating the BHARAT 101 with Plaspy for vehicle tracking, monitoring, and telemetry. Technical readers will find guidance on connection context and practical compatibility considerations while sensitive implementation details are intentionally omitted.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so while the BHARAT 101 is compatible with Plaspy, device behavior may differ between firmware versions and installation scenarios.

## Protocol Overview

The protocol provides the common language the BHARAT 101 uses to report location, status, and sensor data to a remote server. In public terms, the protocol governs how the tracker identifies itself to the server, how it packages position and input data, and how the server ingests those messages for mapping and reporting.

- Enables periodic and event driven reporting of GPS GNSS position and telemetry to a remote endpoint.
- Carries identifier information that allows Plaspy to associate incoming messages with a device record.
- Transports sensor and I O state such as digital inputs, analog readings, and motion sensing events to the platform.
- Allows the server to receive historical data uploaded from the device storage when available.
- Supports both immediate live reporting and buffered uploads after connectivity restoration.

## How Plaspy Detects the Protocol

Plaspy listens on a shared network endpoint and automatically detects the tracker protocol when a properly configured device sends data. Users typically do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint and uses standard transport settings.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the public service endpoint.
- Plaspy server IP is 54.85.159.138 which may be used in device configuration as an alternative to the domain.
- Plaspy receives device traffic on port 8888 and all devices in Plaspy use the same port for reporting.
- Devices may be configured to report over UDP or TCP to port 8888 depending on device and SIM configuration.
- When the device points to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and route the data appropriately.
- Manual protocol selection in the platform is usually unnecessary if the tracker is correctly configured to send to d.plaspy.com or the Plaspy IP on port 8888.

## Transport and Connection Context

The BHARAT 101 can report using standard network transport options supported by vehicle trackers. For Plaspy integration, the connection context is limited to which host and transport are used to deliver tracker messages to the Plaspy ingress.

- Devices may use either UDP or TCP to send reports to Plaspy depending on configuration and network behavior.
- The Plaspy reporting host is d.plaspy.com but the Plaspy server IP 54.85.159.138 can be used in device settings where DNS is restricted.
- All Plaspy devices use the same port number 8888 for incoming tracker data.
- Selecting UDP can favor lower latency and smaller overhead while TCP can provide reliable delivery depending on device firmware.
- Verify that the SIM and carrier allow the chosen transport for outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and optional features; confirm firmware level when troubleshooting.
- Hardware variants and production batches sometimes differ in enabled interfaces such as RS232, analog inputs, or internal antenna configurations.
- Manufacturer configuration utilities or provisioning services may set default transport and host values that need to be adjusted for Plaspy reporting.
- Transport choice between UDP and TCP can affect delivery behavior and should be validated in the field.
- AIS140 certification and rugged enclosure are device capabilities that help meet regulatory and environmental needs but do not alter network transport settings.
- Always validate compatibility and behavior against the manufacturer documentation for the exact BHARAT 101 unit and firmware version.

## Why Protocol Understanding Matters

Knowing how the BHARAT 101 communicates makes it easier to set up, verify, and troubleshoot device connectivity with Plaspy. Clear expectations about transport, host selection, and typical message roles reduce integration time and improve operational reliability.

- Speeds up initial device provisioning and correct host configuration for reporting to Plaspy.
- Helps diagnose connectivity problems by verifying transport, DNS resolution, and carrier restrictions.
- Clarifies how sensor and input data map to Plaspy fields for meaningful monitoring and rules.
- Enables informed discussion with the device manufacturer when behavior differs between firmware revisions.
- Supports planning for offline buffering, data uploads, and device storage limits during deployment.

## Why Use Plaspy with This Protocol

Using the Aquila BHARAT 101 with Plaspy provides a practical path to fleet visibility and remote monitoring while leveraging the device’s rugged design and AIS140 compliance. Plaspy’s automatic protocol detection and unified port approach simplify onboarding so fleets can focus on operational workflows rather than complex per device network settings.

To learn more about Plaspy and how it can integrate with devices like the BHARAT 101, visit https://www.plaspy.com. Please verify the latest device specific protocol support, firmware behavior, and implementation details with the manufacturer at https://www.itriangle.in/ since protocols and firmware can change over time.
