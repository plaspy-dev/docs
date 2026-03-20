---
slug: /aplicom/a11_lte_ble/protocol
id: a11_lte_ble-protocol
sidebar_label: Protocol
title: Aplicom - A11 LTE BLE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Aplicom A11 LTE BLE and how it communicates with Plaspy for fleet and asset tracking
keywords:
  - Aplicom A11 LTE BLE protocol
  - Aplicom A11 LTE BLE GPS protocol
  - Aplicom A11 LTE BLE Plaspy
  - Aplicom tracking protocol
  - A11 LTE BLE compatibility
  - GPS tracker protocol Plaspy
  - fleet tracking Aplicom
  - Bluetooth LE tracker protocol
  - telemetry A11 LTE BLE
  - Aplicom OTA updates
---

# Aplicom - A11 LTE BLE Protocol

This page covers the public protocol context for using the Aplicom A11 LTE BLE tracker with Plaspy. It explains, at a high level, how the device communicates with Plaspy for telemetry, positioning, and supplemental sensor data without exposing private implementation details. The A11 LTE BLE is a field proven telematics device with global mobile connectivity, Bluetooth LE pairing for beacons and sensors, and Over The Air update capability, and those capabilities shape how it reports data to a backend like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation. For those reasons this page focuses on connection context, protocol roles, and practical compatibility considerations rather than device internals.

## Protocol Overview

The protocol for the A11 LTE BLE governs how the device identifies itself, transmits location and sensor data, and receives configuration or command updates when supported. In practice the protocol translates sensor readings, GNSS fixes, and Bluetooth tag events into messages that a server can consume for tracking and fleet management.

- Carries device identity and telemetry so Plaspy can correlate reports to the correct asset
- Conveys GNSS location, timestamps, and movement state for real time tracking and history
- Transmits Bluetooth LE tag and sensor information to allow contextual event data alongside location
- Supports remote configuration and OTA update triggers when the device and backend workflow permit
- Enables reliable delivery over a TCP or UDP transport to the configured Plaspy endpoint

## How Plaspy Detects the Protocol

Plaspy listens for incoming device connections on a shared public endpoint and automatically determines the protocol type from the incoming data stream. When the A11 LTE BLE is configured to report to the Plaspy endpoint, users generally do not need to pick a protocol manually inside the platform.

- Plaspy server domain is d.plaspy.com which resolves to the public ingestion endpoint
- Plaspy server IP is 54.85.159.138 for cases where an IP endpoint is used instead of the domain
- The port used by Plaspy for device reporting is 8888 and this is the same port for all supported devices
- Devices may be configured to use UDP or TCP on port 8888 depending on device capabilities and configuration choices
- Plaspy automatically detects the tracker protocol so a properly pointed device will be recognized without manual protocol selection
- Users should ensure the device reports to d.plaspy.com or 54.85.159.138 on port 8888 for initial connectivity

## Transport and Connection Context

Connection context is intentionally simple from the server side to make device configuration straightforward. The A11 LTE BLE supports mobile IP data connections over cellular networks and can send data to the Plaspy endpoint using either UDP or TCP depending on the deployed configuration.

- Devices may be set to report to the domain d.plaspy.com or the IP address 54.85.159.138
- The transport port for all Plaspy devices is 8888 and must be used by the tracker when pointing to Plaspy
- The tracker can use UDP or TCP on port 8888 based on firmware options and administrative setup
- Cellular connectivity provides global coverage for GNSS and telemetry reporting
- Bluetooth LE connectivity augments reporting by delivering beacon and sensor data that the device forwards to Plaspy
- OTA support on the device can change firmware behavior so transport settings are an important configuration check after updates

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and supported transports; always note the device firmware when validating compatibility
- Hardware revisions and optional accessories such as external sensors or BLE tag sets can affect the available data payloads
- Manufacturer configuration options may let you select UDP or TCP so confirm transport matches Plaspy expectations for your deployment
- OTA updates from the manufacturer can introduce differences in behavior; validate settings after an update
- Point the device to d.plaspy.com or to 54.85.159.138 on port 8888 to ensure the platform receives reports
- Testing a small sample of devices in your intended network conditions helps surface compatibility nuances early
- Consult official manufacturer documentation to confirm device specific settings and capabilities

## Why Protocol Understanding Matters

Understanding how the A11 LTE BLE communicates with Plaspy improves setup speed, reduces troubleshooting time, and helps maintain reliable fleet data over time. Knowing which parts of the system are transport settings, which are device capabilities, and which are firmware dependent helps teams make practical decisions during deployment and maintenance.

- Ensures devices are configured to point at d.plaspy.com or 54.85.159.138 on port 8888 so reports reach Plaspy
- Helps distinguish between network transport issues and protocol or firmware behavior
- Facilitates smoother OTA update workflows by highlighting when configuration checks are needed after updates
- Improves integration with complementary systems by clarifying what data the tracker can supply
- Aids troubleshooting by focusing on transport, firmware version, and tag pairing rather than guessing at message formats

## Why Use Plaspy with This Protocol

Using the Aplicom A11 LTE BLE with Plaspy gives organizations a practical way to collect GNSS location, Bluetooth LE sensor context, and device state into a single fleet management platform. For operations that need broad coverage and flexible sensor integrations, the A11 LTE BLE paired with Plaspy can provide the visibility required for routing, asset monitoring, and compliance workflows.

To learn more about Plaspy and how it handles device connectivity and protocol detection visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions verify information with the manufacturer at https://www.aplicom.com/ as device behavior and implementation details can change over time.
