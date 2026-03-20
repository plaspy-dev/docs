---
slug: /ruptela/fm_pro4/protocol
id: fm_pro4-protocol
sidebar_label: Protocol
title: Ruptela - FM-Pro4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ruptela FM Pro4 integration with Plaspy including connection context and compatibility guidance
keywords:
  - Ruptela FM Pro4 protocol
  - Ruptela FM Pro4 GPS protocol
  - Ruptela FM Pro4 communication
  - FM Pro4 tracker compatibility
  - FM Pro4 Plaspy integration
  - vehicle tracking protocol Ruptela
  - fleet management Ruptela FM Pro4
  - CANbus data tracking
  - Plaspy tracker protocol
  - GPS tracker protocol guide
---

# Ruptela - FM-Pro4 Protocol

This page describes the public protocol context for using the Ruptela FM-Pro4 tracker with Plaspy. It focuses on how the device communicates at a high level, which connection endpoints Plaspy exposes, and what to consider when pointing an FM-Pro4 device at the Plaspy service for reporting vehicle and sensor data.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by FM-Pro4 firmware, hardware revision, and Ruptela implementation, so this page provides general guidance rather than firmware specific details.

## Protocol Overview

The communication protocol of the FM-Pro4 is the mechanism by which the tracker identifies itself to a server, transmits location and vehicle telemetry, and reports sensor and CANbus derived metrics. For integration with a platform like Plaspy, the protocol's role is to make the device data understandable and routable into fleet workflows without exposing low level implementation specifics.

- Enables transmission of GNSS position and movement data to the server for real time tracking.
- Conveys vehicle telemetry and on board computer data such as CANbus derived metrics and engine parameters in a structured way.
- Delivers sensor inputs and accessory state such as fuel sensors, temperature probes, and driver identification events.
- Allows the server to associate reports with a specific device identity so data is attributed correctly in Plaspy.
- Supports transport over standard network sockets so devices can report to Plaspy using common IP networks.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many different tracker models while minimizing manual configuration. When an FM-Pro4 is configured to send data to Plaspy, the platform applies automatic detection to determine the tracker protocol and route data to the correct ingestion pipeline.

- Plaspy exposes a single public endpoint that devices should report to for automatic handling.
- The platform automatically detects the tracker protocol when data arrives at the Plaspy endpoint.
- In most cases you do not need to select a protocol inside Plaspy if the device is correctly configured to report to Plaspy.
- Plaspy uses the same port for all supported devices to simplify device configuration and onboarding.
- If a device is not autodetected, reviewing device configuration, firmware version, and manufacturer guidance is the usual next step.

## Transport and Connection Context

Transport choices and endpoint addressing are part of device configuration rather than protocol internals. The FM-Pro4 can be pointed at Plaspy using standard network transports supported by the device, and Plaspy documents a single server endpoint and port for reporting.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and administrative preference.
- The Plaspy server domain used for reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The port used for device reporting to Plaspy is 8888 and is shared across all devices supported by Plaspy.
- Pointing the FM-Pro4 to d.plaspy.com or the server IP with the correct transport and port is the typical configuration step.
- Ensure network paths, APN settings, and any intermediate firewalls allow outbound sessions to the Plaspy endpoint on the selected transport and port.

## Protocol Compatibility Notes

- Firmware differences across FM-Pro4 units can change which telemetry fields are sent or how certain accessories are reported.
- Hardware revisions and optional accessories such as additional fuel sensors, 1-Wire devices, or RS232 peripherals can affect the set of available data points.
- Some deployments prefer TCP for guaranteed delivery while others use UDP for lower overhead; confirm the FM-Pro4 firmware supports your chosen transport.
- Manufacturer configuration tools and firmware releases from Ruptela determine exact device behavior; always cross check with current Ruptela guidance.
- Plaspy detects the device protocol automatically but accurate device identity and configuration on the tracker are essential for successful detection.
- Validate compatibility on representative devices before rolling out large fleets to production.

## Why Protocol Understanding Matters

Understanding the communication protocol at a high level helps technicians and fleet administrators set up devices correctly, diagnose reporting issues, and plan for maintenance or upgrades without needing to inspect packet payloads.

- Speeds up initial setup by clarifying what destination and transport to configure on the tracker.
- Aids troubleshooting when device reports do not appear in Plaspy by separating connection issues from protocol or firmware issues.
- Helps determine which vehicle and sensor data can be expected from a given firmware and hardware combination.
- Supports planning for feature use such as CANbus reads, fuel sensor aggregation, and temperature monitoring.
- Improves long term reliability by informing firmware update and device replacement decisions.

## Why Use Plaspy with This Protocol

Using the Ruptela FM-Pro4 with Plaspy gives organizations a practical path to bring rich vehicle telemetry and accessory data into a single fleet management platform. The FM-Pro4’s ability to surface CANbus information, multiple sensor inputs, and driver events complements Plaspy’s automatic protocol detection and unified ingestion endpoint to reduce configuration overhead.

To learn more about how Plaspy handles device connectivity and fleet features, please visit https://www.plaspy.com. For the most current and device specific protocol and firmware details, review Ruptela documentation and updates at https://ruptela.com/ as protocol support and firmware behavior may change over time.
