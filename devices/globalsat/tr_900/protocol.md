---
slug: /globalsat/tr_900/protocol
id: tr_900-protocol
sidebar_label: Protocol
title: GlobalSat - TR-900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using GlobalSat TR 900 with Plaspy and connection guidance
keywords:
  - GlobalSat TR-900 protocol
  - GlobalSat TR-900 GPS protocol
  - TR-900 OBDII protocol
  - TR-900 tracking protocol
  - GlobalSat Plaspy compatibility
  - TR-900 communication protocol
  - TR-900 vehicle tracker
  - GPS tracker protocol Plaspy
  - OBDII data tracker
  - Fleet tracking GlobalSat
---

# GlobalSat - TR-900 Protocol

This page provides public protocol context for using the GlobalSat TR-900 tracker with Plaspy. It explains how the TR-900’s reporting behavior and event driven OBDII data relate to a fleet platform like Plaspy without exposing private implementation details. The TR-900 is a plug and play 3G OBDII dongle that reports GPS position and vehicle diagnostic data, and this guide focuses on the communication context needed for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. Plaspy automatically detects the tracker protocol and the guidance here should be used alongside the manufacturer documentation to confirm device specific settings and firmware behavior.

## Protocol Overview

The TR-900 uses a configurable, event based reporting approach to combine GPS telemetry with OBDII diagnostic values. At a high level the device protocol defines how the tracker identifies itself, when it reports events, and how it delivers positional and vehicle diagnostics to a remote server.

- Enables the tracker to identify itself and deliver a stream of GPS and OBDII telemetry to a backend platform.
- Encodes event triggers such as speeding, harsh braking from the G sensor, or diagnostic trouble codes for server processing.
- Carries vehicle state information that Plaspy can map to meaningful fields like mileage accumulation, RPM alerts, and coolant temperature alerts.
- Supports configurable reporting intervals and event driven messages so the device can balance detail and data usage.
- Allows the tracker to combine location and OBDII data in single reports so downstream systems receive contextualized telemetry.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and port and uses that traffic to determine how to interpret incoming messages. Plaspy automatically detects the tracker protocol, so most users do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct destination configuration.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- All devices in Plaspy use the same port which simplifies device setup and server routing.
- Plaspy automatically detects the tracker protocol when properly addressed to the Plaspy endpoint.
- If a device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will process telemetry and map common fields automatically.

## Transport and Connection Context

Connection transport and server addressing determine how the TR-900 delivers its reports to Plaspy. The TR-900 supports cellular network transport and can be configured to send data over common IP transports depending on firmware and settings.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the destination when setting the server address.
- The port is 8888 and this is the single port Plaspy listens on for tracker traffic.
- Using the correct transport and server address on the device is the first step to ensure Plaspy can receive and identify protocol messages.
- Network level issues such as APN settings, carrier restrictions, or transient 3G connectivity can affect message delivery even when protocol and server settings are correct.

## Protocol Compatibility Notes

- Firmware differences can change which events are reported by default and which OBDII PIDs are included in telemetry.
- Hardware revisions or regional firmware variants may alter available reporting options or transport defaults.
- Manufacturer side configuration tools or SMS command sets may be required to point the device at d.plaspy.com or 54.85.159.138 on port 8888.
- Some deployments prefer UDP for lower overhead while others use TCP for reliable delivery; confirm the device supports your chosen transport.
- Custom event combinations are possible on the TR-900, so verify which event rules are active after firmware updates.
- Always validate compatibility against the latest GlobalSat TR-900 documentation when precise behavior is required.

## Why Protocol Understanding Matters

Knowing how the TR-900 communicates and what it reports helps ensure a reliable integration with Plaspy and clearer troubleshooting when data appears missing or incorrect. A practical understanding reduces setup time and improves the quality of location and vehicle diagnostics available to fleet managers.

- Confirms the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888 so Plaspy can receive messages.
- Helps identify whether a transport mismatch such as TCP versus UDP is preventing data delivery.
- Clarifies which OBDII values and events are expected from a particular firmware version for accurate field mapping.
- Makes it easier to interpret alerts like impact reports, MIL status, or coolant temperature when the event logic is known.
- Supports long term reliability by ensuring firmware updates and configuration changes preserve required reporting behavior.

## Why Use Plaspy with This Protocol

Using the GlobalSat TR-900 with Plaspy gives organizations a centralized way to collect vehicle position and OBDII diagnostic data together. The TR-900’s event based reporting and OBDII capture are well suited to fleet monitoring use cases such as driver behavior analysis, preventive maintenance triggers, and mileage tracking, while Plaspy provides the platform-level tools to ingest and present that data.

To learn more about Plaspy and how it integrates with device protocols like the TR-900 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions verify information with the manufacturer at https://www.globalsat.com.tw/. Protocol support and firmware behavior can change over time so consulting the official GlobalSat documentation ensures accuracy for your deployment.
