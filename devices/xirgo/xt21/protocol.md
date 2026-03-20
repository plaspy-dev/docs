---
slug: /xirgo/xt21/protocol
id: xt21-protocol
sidebar_label: Protocol
title: Xirgo - XT21 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Xirgo XT21 GPS tracker and how it communicates with Plaspy for asset tracking and telemetry
keywords:
  - Xirgo XT21 protocol
  - Xirgo XT21 GPS protocol
  - Xirgo XT21 protocol for Plaspy
  - XT21 tracker protocol
  - XT21 GPS tracker communication
  - Plaspy device compatibility
  - fleet management XT21
  - asset tracking XT21
  - Xirgo telemetry protocol
  - XT21 battery voltage monitoring
---

# Xirgo - XT21 Protocol

This page describes the public protocol context for using the Xirgo XT21 tracker with Plaspy. It covers how the XT21 communicates telemetry and event data to Plaspy, the role of the reporting protocol in that communication, and practical connection details that help operators configure and validate device reporting to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The XT21 is a compact LTE GPS tracker with two digital inputs and an internal analog input for battery voltage, and those hardware capabilities shape the telemetry Plaspy receives and interprets.

## Protocol Overview

The XT21 communication protocol is the mechanism the device uses to identify itself, report position and telemetry, and deliver event signals such as digital input changes and battery voltage readings to Plaspy. This page provides a high-level view of that role without exposing firmware internals or private parsing details.

- Enables the XT21 to send GNSS position fixes and basic telemetry (digital input events and battery voltage) to the cloud.
- Carries device identity information that Plaspy uses to associate incoming messages with an account and asset record.
- Signals state changes from the two all-purpose digital inputs so Plaspy can map those to events like door open, tamper, or keyed ignition.
- Transmits internal analog input readings for battery voltage so Plaspy can generate low-battery alerts and uptime reports.
- Works over standard TCP or UDP transport so the XT21 can report reliably under varying network conditions.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and automatically detects the tracker protocol used by each device. In most cases, a properly configured XT21 will begin reporting to Plaspy without requiring manual protocol selection inside the platform.

- Plaspy’s public server endpoint is reachable at d.plaspy.com and the service is also available at IP 54.85.159.138.
- All devices in Plaspy use the same port for reporting, and Plaspy listens on port 8888 for device data.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and operator preference.
- Plaspy automatically detects the tracker protocol when the device connects to the shared endpoint, removing the need for manual protocol configuration in typical deployments.
- If a device is not appearing in Plaspy, check that it is pointing to d.plaspy.com or 54.85.159.138 and that the transport is set to TCP or UDP on port 8888.

## Transport and Connection Context

Understanding the transport and addressing context helps ensure the XT21 can reach Plaspy reliably. The XT21 uses LTE cellular connectivity to forward reports, and network or configuration mismatches at the device can prevent messages from reaching the platform.

- The XT21 may be configured to use either UDP or TCP for reporting; both transports are supported on port 8888.
- Point the device to the Plaspy endpoint using d.plaspy.com or the IP address 54.85.159.138 as the destination host.
- Plaspy listens on the same port for all devices, so port configuration is uniform across models and accounts.
- Choose UDP for lower overhead and potentially faster delivery in some networks, or TCP when session reliability and ordered delivery are preferred by the device firmware.
- Verify that carrier networks or on‑site firewalls allow outbound connections to the Plaspy host and port to avoid blocked reporting.

## Protocol Compatibility Notes

- Firmware version differences can change how the XT21 formats or schedules telemetry; always confirm behavior for the specific firmware on the device.
- Hardware revisions and optional accessory wiring (for inputs) can affect which events and signals the device reports to Plaspy.
- Transport selection (UDP versus TCP) must match the device configuration and network conditions for reliable delivery to Plaspy on port 8888.
- Manufacturer-side changes to default server configuration or reporting behavior may require reconfiguration to point the device at d.plaspy.com or 54.85.159.138.
- While Plaspy automatically detects the protocol, correct device identity configuration (IMEI or device ID) is required so incoming messages map to the right asset.
- Validate compatibility and any device-specific quirks against official Xirgo documentation before large scale rollouts.

## Why Protocol Understanding Matters

A clear, practical understanding of the XT21 communication protocol helps with initial setup, day-to-day troubleshooting, and long‑term reliability of device reporting to Plaspy. Knowing which signals are available and how the device reaches the platform reduces time spent diagnosing connectivity and data issues.

- Ensures correct device addressing so messages arrive at Plaspy’s d.plaspy.com or 54.85.159.138 endpoint on port 8888.
- Helps determine whether to use UDP or TCP based on firmware behavior and network conditions.
- Makes it easier to interpret which digital input events and analog readings the XT21 will deliver to Plaspy for alerts and reporting.
- Aids in troubleshooting when telemetry is missing by narrowing checks to transport, firmware, and wiring.
- Supports planning for scale and power management when deploying many low‑power assets like trailers and portable equipment.

## Why Use Plaspy with This Protocol

Using the XT21 with Plaspy gives organizations a straightforward path to monitor remote assets with low power requirements. The XT21 provides the essential location fixes, two digital inputs for event detection, and a battery voltage feed that Plaspy ingests to power live maps, alerts, and historical analysis.

Plaspy’s unified endpoint approach simplifies device onboarding because all supported devices report to the same port and Plaspy automatically detects the tracker protocol. To learn more about using the XT21 with Plaspy and to review platform features, visit https://www.plaspy.com. For the most current device specific protocol behavior and firmware details, verify information with the manufacturer at https://xirgo.com/ as implementations and firmware can change over time.
