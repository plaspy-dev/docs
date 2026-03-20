---
slug: /neomatica/adm500/protocol
id: adm500-protocol
sidebar_label: Protocol
title: Neomatica - ADM500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Neomatica ADM500 and how it communicates with Plaspy for reliable vehicle tracking and telemetry
keywords:
  - Neomatica ADM500 protocol
  - ADM500 GPS protocol
  - ADM500 communication protocol
  - ADM500 tracking protocol
  - Neomatica GPS tracker protocol
  - ADM500 Plaspy compatibility
  - Neomatica ADM500 telemetry
  - ADM500 vehicle tracking
  - ADM500 protocol integration
  - Plaspy GPS tracker support
---

# Neomatica - ADM500 Protocol

This page provides public protocol context for using the Neomatica ADM500 with Plaspy. It summarizes how the tracker reports location and telemetry to Plaspy, the role the protocol plays in that connection, and practical considerations for setup and troubleshooting without exposing private implementation details.

The ADM500 is a Plaspy compatible GPS tracker with multi constellation GNSS, LTE cellular connectivity, dual nanoSIM support, a backup battery, and wide sensor support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review the manufacturer's documentation for firmware specific details when needed.

## Protocol Overview

At a high level, the ADM500 communication protocol governs how the device packages and transmits GNSS positions, sensor telemetry, and event messages so a telematics platform such as Plaspy can ingest and interpret them. The protocol makes raw device readings usable for mapping, alerts, reporting, and integrations.

- Enables the ADM500 to send GNSS coordinates and timestamps to Plaspy for live tracking and historical routes.
- Transmits sensor telemetry from analog inputs, BLE peripherals, 1 Wire probes, RS 485 devices, and digital I O channels so Plaspy can surface telemetry and alerts.
- Encodes event driven messages such as ignition changes, accelerometer movement, jamming detection, and input pulses for Plaspy event workflows.
- Supports common telematics protocol families used by Neomatica devices including ADM, EGTS, M2M and Wialon IPS for interoperability with fleet platforms.
- Provides a mechanism for remote device management signals such as configuration updates and OTA firmware where supported by the device.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared, public endpoint and automatically detects the tracker protocol so users typically do not need to choose a protocol manually in the platform if the device is properly configured to report to Plaspy. This automatic detection simplifies onboarding for supported devices like the ADM500.

- Devices should be configured to report to Plaspy at d.plaspy.com or directly to 54.85.159.138 using the connection port assigned to Plaspy.
- Plaspy listens on port 8888 for device traffic and uses the same port for all supported trackers.
- The ADM500 may be configured to use either UDP or TCP on port 8888 depending on device settings and network conditions.
- When an ADM500 sends telemetry to the Plaspy endpoint, Plaspy identifies the protocol and maps fields into the platform for display and processing.
- Because Plaspy performs automatic protocol detection, the most common user task is ensuring the device is pointed at the correct Plaspy endpoint and port.

## Transport and Connection Context

Connection context covers the network transport and addressing used to deliver ADM500 telemetry to Plaspy. Understanding these transport details helps ensure reliable delivery across cellular networks and during transient connectivity events.

- ADM500 devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can point to the Plaspy domain d.plaspy.com or directly to the Plaspy IP 54.85.159.138 depending on configuration preferences or DNS availability.
- Plaspy uses the same listening port 8888 for all devices it supports, simplifying device configuration and firewall rules.
- Dual SIM operation and on device buffering in the ADM500 help maintain continuity when cellular handovers or short outages occur.
- Choose transport mode (UDP or TCP) based on device capability, network reliability, and manufacturer guidance; both are supported for reporting to Plaspy on port 8888.

## Protocol Compatibility Notes

- Firmware versions can change packet content and feature availability; verify which protocol variants are supported by the specific ADM500 firmware.
- Hardware revisions and regional variants may implement different sets of features or optional interfaces such as RS 485 or BLE sensor support.
- Some manufacturer side configurations or optional firmware builds can change default transport behavior between UDP and TCP.
- Device features such as OTA updates, Bluetooth configuration, and remote commands may require additional configuration steps on the manufacturer tools.
- Always validate device reporting by pointing the ADM500 at d.plaspy.com or 54.85.159.138 on port 8888 and confirming messages reach Plaspy.
- When integrating third party sensors (fuel sensors, BLE peripherals, 1 Wire devices), confirm how those sensor fields are represented in device telemetry and how Plaspy maps them.

## Why Protocol Understanding Matters

Having a clear, practical understanding of the ADM500 communication protocol reduces setup friction and shortens time to reliable telemetry in Plaspy. Knowing what the protocol carries and how the transport is configured helps operators resolve issues faster and ensures consistent data quality.

- Ensures devices are configured to report to the correct Plaspy endpoint and port for reliable ingestion.
- Helps troubleshoot connectivity problems related to UDP versus TCP and cellular network behavior.
- Clarifies what sensor and event data the ADM500 will include so Plaspy can be configured to surface the right fields and alerts.
- Aids in planning firmware update and remote management strategies that rely on protocol capabilities.
- Reduces ambiguity when validating historical route storage, buffering behavior, and dual SIM continuity.

## Why Use Plaspy with This Protocol

Using the ADM500 with Plaspy gives organizations a straightforward path to consolidate vehicle location, sensor telemetry, and event data into one platform. Plaspy’s automatic protocol detection and unified port approach simplify device onboarding, while the ADM500’s rich sensor ecosystem and dual SIM resilience support a wide range of fleet and asset monitoring scenarios.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest ADM500 specific information on the manufacturer site https://neomatica.com/.
