---
slug: /suntech/st4410g/protocol
id: st4410g-protocol
sidebar_label: Protocol
title: Suntech - ST4410G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for connecting Suntech ST4410G devices to Plaspy with practical configuration context
keywords:
  - Suntech ST4410G protocol
  - ST4410G GPS tracker protocol
  - Suntech protocol Plaspy
  - ST4410G communication protocol
  - ST4410G tracking protocol
  - Suntech GPS tracker compatibility
  - ST4410G LTE NB IoT
  - ST4410G TCP UDP configuration
  - Plaspy device compatibility
  - Carton asset tracking protocol
---

# Suntech - ST4410G Protocol

This page describes the public protocol context for using the Suntech ST4410G with Plaspy. It focuses on how the device communicates with Plaspy at a high level so integrators and technicians can understand connection expectations, common configuration choices, and how tracking, RF events, and telemetry are delivered to a backend platform.

The ST4410G is a compact asset and carton tracker with multi mode cellular connectivity (LTE Cat M1 and NB‑IoT with 2G fallback), a multi constellation GNSS receiver, an integrated 433–435 MHz RF receiver, motion sensing, and a rechargeable battery in an IP67 enclosure. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, but exact message behavior can vary by firmware, hardware revision, and manufacturer implementation. Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy.

## Protocol Overview

At a high level, the ST4410G communication protocol defines how the tracker reports position, RF tag events, motion telemetry, battery state, and other events to a server such as Plaspy. The protocol is the bridge between the device's sensors and Plaspy's ingestion layer, and understanding it helps ensure reliable delivery and correct interpretation of data.

- Enables delivery of GNSS positions, RF receiver events, motion triggers, and battery telemetry from the device to the cloud.
- Carries device identity and state so Plaspy can associate reports with the correct asset and apply device specific settings.
- Supports configurable reporting modes to balance update frequency and battery life for carton and asset workflows.
- Transports event driven messages (for movement, tag reads, low battery) alongside periodic location updates so Plaspy can generate alerts and historical records.
- Works over standard TCP or UDP transport so the same device can report via different cellular channels depending on network and configuration.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and port for supported devices and detects the tracker protocol automatically when a device reports to that endpoint. In most deployments you do not need to select a protocol manually inside Plaspy if the ST4410G is configured to report to the Plaspy endpoint.

- Plaspy uses the domain d.plaspy.com and the server IP 54.85.159.138 as public endpoints for device reporting.
- The agreed reporting port for all devices handled by Plaspy is 8888 so devices should be configured accordingly.
- The ST4410G may be set to use either UDP or TCP on port 8888 depending on device firmware and operator preferences.
- When the device sends data to the Plaspy endpoint, Plaspy identifies and maps the incoming messages to the correct device record automatically.
- Typical setup steps are to confirm device network connectivity, check APN and radio mode, and point the tracker to d.plaspy.com using the chosen transport.

## Transport and Connection Context

Connection context covers how the ST4410G reaches Plaspy over mobile networks and which network endpoints to configure on the device. The ST4410G supports LTE Cat M1 and NB‑IoT with 2G fallback and can transmit via TCP or UDP; choosing the appropriate transport and server address is part of initial device setup.

- Devices may be configured to report via UDP or TCP on port 8888 to the Plaspy ingestion endpoint.
- The Plaspy server domain is d.plaspy.com and the public IP address is 54.85.159.138; either can be used depending on device configuration options.
- All devices in Plaspy use the same port (8888) which simplifies multi device deployments and firewall rules.
- Transport selection (UDP vs TCP) can affect delivery characteristics and should match the device firmware capability and carrier behavior.
- Verify that the device APN and radio mode allow LTE Cat M1, NB‑IoT, or 2G connectivity as required by your deployment region.

## Protocol Compatibility Notes

- Firmware versions can change message content, available fields, and reporting modes; always document the firmware level used during testing.
- Hardware revisions or optional configurations (for example RF receiver behavior) may alter which events the device reports or how frequently they are sent.
- Some cellular networks may handle UDP and TCP differently; test the chosen transport in the target coverage area.
- RF tag read behavior and sensitivity can vary by firmware and antenna placement; correlate RF events against expected tag behavior during commissioning.
- Plaspy automatically detects the tracker protocol at the shared endpoint, but correct device configuration (server address, port, transport) is required for detection to occur.
- Validate compatibility against the manufacturer documentation and release notes for your specific device batch and firmware build.

## Why Protocol Understanding Matters

Understanding how the ST4410G communicates with Plaspy helps with reliable setup, efficient troubleshooting, and long term operational stability. Knowing what to configure on the device and what to expect at the server side reduces integration time and helps maintain consistent tracking across deployments.

- Speeds initial commissioning by making it clear which server, port, and transport to configure on the device.
- Aids troubleshooting when messages are not arriving or are missing expected fields, by narrowing focus to transport, firmware, or configuration.
- Helps plan power and reporting profiles that balance battery life with the level of telemetry required by the operation.
- Ensures RF event handling and motion triggers are understood so alerts and inventory correlation in Plaspy behave as intended.
- Supports migration and fleet scaling because common connection settings (single Plaspy port) simplify deployment templates.

## Why Use Plaspy with This Protocol

Using the ST4410G with Plaspy provides a practical way to add carton and asset level visibility to logistics, warehouse, and rental use cases. Plaspy ingests location, RF events, motion alerts, and battery telemetry from devices like the ST4410G and presents them in dashboards, maps, alerts, and integrations that help operations teams monitor shipments and assets in real time.

If you are evaluating or deploying ST4410G devices, point each tracker to d.plaspy.com (or 54.85.159.138) on port 8888 and select UDP or TCP as supported by your device and carrier. Learn more about Plaspy and how it works with a wide range of devices at https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.suntechint.com/ before large scale deployment.
