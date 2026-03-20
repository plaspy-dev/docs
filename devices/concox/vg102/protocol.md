---
slug: /concox/vg102/protocol
id: vg102-protocol
sidebar_label: Protocol
title: Concox - VG102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VG102 GPS tracker integration with Plaspy with connection and compatibility guidance
keywords:
  - Concox VG102 protocol
  - VG102 GPS protocol
  - Concox VG102 Plaspy
  - VG102 communication protocol
  - VG102 tracking protocol
  - Concox motorcycle tracker protocol
  - Plaspy device integration
  - Plaspy tracker compatibility
  - motorcycle GPS tracker protocol
  - asset tracking Concox VG102
---

# Concox - VG102 Protocol

This page describes the public protocol context for using the Concox VG102 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are required to route data to the Plaspy endpoint, and what aspects of the tracker reporting behavior matter for reliable integration. The VG102 is a compact 2G GNSS tracker designed for motorcycles and two wheel fleets and this document uses that device description as the grounding for the discussion.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by device firmware, hardware revision, and manufacturer implementation, so configuration and behavior may differ between units even for the same VG102 model.

## Protocol Overview

The tracker protocol defines how the VG102 sends telemetry, location, and event alerts to a remote server and how remote actions such as relay control are requested and confirmed. For Plaspy integration, the protocol's role is to deliver usable GNSS position, status, and event data that Plaspy can normalize and present.

- Carries GNSS position, movement and status telemetry from the device to the server.
- Transmits event alerts such as tip over, tamper, SOS, geo fence triggers, and low battery.
- Provides a channel for remote control signals such as relay commands when supported by the device and platform.
- Identifies the device so Plaspy can correlate incoming data with a registered tracker record.
- Enables health and heartbeat messages so Plaspy can monitor device connectivity and uptime.

## How Plaspy Detects the Protocol

Plaspy receives device data on a single shared endpoint and automatically detects the tracker protocol when a properly configured VG102 reports in. In most cases, users do not need to manually select a protocol inside Plaspy if the device is pointed at the Plaspy endpoint with the correct connection settings.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the Plaspy server IP 54.85.159.138.
- All devices in Plaspy use the same port so the platform can centralize incoming connections and detection.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the appropriate device record.
- If the device is correctly configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required.
- Detection covers both reporting of location and event telemetry so alerts are matched to the correct device workflows.

## Transport and Connection Context

Transport and connection settings determine how the VG102 reaches the Plaspy endpoint. The VG102 may be configured to use either UDP or TCP on the shared Plaspy port depending on device support and the chosen installation configuration.

- Devices may be configured to point to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy endpoint listens on port 8888 and this same port is used for all supported devices.
- The device may use UDP or TCP on port 8888 based on firmware and installer choices.
- Using the correct domain or IP and the Plaspy port is essential for successful delivery of telemetry and events.
- Connection options such as transport type can affect delivery behavior on mobile networks and should be selected according to installation needs.

## Protocol Compatibility Notes

- VG102 is compatible with Plaspy when configured to report to the Plaspy endpoint and port.
- Firmware revisions can change message details and available features; verify firmware notes for device behavior.
- Hardware revisions and optional accessory usage can affect available inputs, alerts, or relay wiring.
- Transport selection between UDP and TCP may influence message delivery and should match device configuration.
- Manufacturer side settings such as default reporting server may need to be updated during installation to point to Plaspy.
- Always validate compatibility against current manufacturer documentation for the specific unit being deployed.

## Why Protocol Understanding Matters

Understanding how the VG102 communicates with Plaspy helps ensure a smooth setup, faster troubleshooting, and predictable long term operation. Even when Plaspy automatically detects the protocol, installers and administrators benefit from knowing the connection context and device reporting behavior.

- Speeds up initial provisioning by confirming domain IP and port settings are correct.
- Helps troubleshoot connectivity issues by checking transport and endpoint configuration.
- Clarifies which device events and telemetry will be available in Plaspy dashboards.
- Informs decisions about transport selection and power management for reliable reporting.
- Aids in maintenance planning by linking firmware and hardware revisions to expected behavior.

## Why Use Plaspy with This Protocol

Using the Concox VG102 with Plaspy gives organizations centralized visibility into motorcycle and two wheeler fleets, consolidating GNSS positions, alerts, and relay control into a single operational platform. The VG102’s compact design and event features complement Plaspy’s dashboards and workflows to support real time monitoring, recovery, and operational oversight without requiring per device port configuration.

To learn more about Plaspy and how the platform handles device integration, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware notes, and implementation guidance with the manufacturer at https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
