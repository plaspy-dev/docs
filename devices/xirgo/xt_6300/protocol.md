---
slug: /xirgo/xt_6300/protocol
id: xt_6300-protocol
sidebar_label: Protocol
title: Xirgo - XT-6300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT 6300 connectivity and Plaspy integration
keywords:
  - Xirgo XT-6300 protocol
  - Xirgo XT-6300 GPS
  - XT-6300 Plaspy compatibility
  - Xirgo tracking protocol
  - XT-6300 communication
  - vehicle tracking Xirgo
  - XT-6300 OBDII JBUS
  - Plaspy device protocol
  - tracker protocol integration
  - fleet management Xirgo
---

# Xirgo - XT-6300 Protocol

This page provides a public protocol overview for using the Xirgo XT-6300 tracker with Plaspy. It focuses on the communication context and practical compatibility information needed to point devices to Plaspy and understand how the tracker reports location, diagnostics, and motion data in a way that Plaspy can ingest. The content summarizes how the tracker communicates at a high level without exposing private implementation details.

The Xirgo XT-6300 is a versatile device with OBDII and JBUS interfaces, script enabled firmware, embedded cellular and GPS antennas, a high precision GPS engine, and a 3 axis accelerometer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Verify device specific settings with Xirgo when needed.

## Protocol Overview

At a high level, the device protocol governs how the XT-6300 identifies itself to a server, reports position and movement, and delivers vehicle or equipment diagnostics for downstream processing. When configured to report to Plaspy, the tracker sends data that Plaspy maps to tracking events, telemetry, and diagnostic fields for fleet management and monitoring.

- Enables delivery of GPS position, timestamp, and motion events from the XT-6300 to the server
- Carries vehicle diagnostics and OBDII or JBUS data when those interfaces are enabled on the device
- Transmits status and heartbeat messages that allow Plaspy to track device health and connectivity
- Allows firmware script features to tailor reporting behavior that Plaspy can consume when the device is configured accordingly
- Supports optional sensor and bus data such as Garmin FMI, GPIO, and 1 Wire inputs when implemented on the device

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker connections and automatically identifies the tracker protocol when the device reports. In most deployments the user does not need to manually select a protocol in Plaspy if the XT-6300 is correctly configured to send data to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- The port used by Plaspy for device connections is 8888
- The device may be configured using UDP or TCP on port 8888 depending on device support
- All devices in Plaspy use the same port which simplifies device configuration
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint

## Transport and Connection Context

Transport selection and the network endpoint are the primary connection details required to point an XT-6300 at Plaspy. Depending on device firmware and configuration options, the tracker can use either UDP or TCP to deliver its reports to the Plaspy endpoint on the configured port.

- Devices may be configured to send data to d.plaspy.com or directly to 54.85.159.138
- The device may be configured using UDP or TCP on port 8888; choose the transport supported by the current firmware
- Plaspy uses the same port for all supported devices which reduces per device configuration effort
- Network reliability, firewall rules, and carrier behavior can influence whether UDP or TCP is the better choice
- Ensure the device APN and outbound connectivity allow reaching the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can change message cadence, available fields, and optional reporting features; confirm firmware behavior before large deployments
- Hardware revisions or optional modules such as OBDII, JBUS, or Bluetooth may affect what data the device can send to Plaspy
- Transport mode selected on the device (UDP or TCP) must match device firmware support and any intermediary network expectations
- Manufacturer side settings or script enabled firmware can alter message frequency and content; check device scripts when troubleshooting
- Validate compatibility and required settings against the official Xirgo documentation for the specific XT-6300 unit and firmware
- Where possible, test a single device end to end to confirm that telemetry and diagnostics arrive correctly in Plaspy

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term behavior for fleets using the XT-6300 with Plaspy. Knowing what the device can report and how it connects reduces integration friction and improves operational visibility.

- Speeds up initial setup by confirming the correct endpoint, transport, and reporting mode
- Helps prioritize troubleshooting steps when telemetry or diagnostics are missing
- Enables configuration of optional interfaces like OBDII and JBUS for richer vehicle data
- Clarifies how firmware scripts and device settings affect the data Plaspy receives
- Supports planning for network requirements and firewall rules to maintain uptime

## Why Use Plaspy with This Protocol

Using the Xirgo XT-6300 with Plaspy gives organizations centralized access to location, motion, and vehicle diagnostic data in a platform designed for fleet visibility and operational oversight. Plaspy’s automatic protocol detection and unified port approach reduce configuration complexity and let teams focus on using the data for dispatch, maintenance planning, and compliance workflows.

To learn more about how Plaspy works with devices like the XT-6300 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific documentation on the manufacturer website https://xirgo.com/ before deployment.
