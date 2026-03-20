---
slug: /topfly/solarx_120/protocol
id: solarx_120-protocol
sidebar_label: Protocol
title: TopFly - SolarX 120 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly SolarX 120 and how it communicates with Plaspy for asset tracking and telemetry
keywords:
  - TopFly SolarX 120 protocol
  - TopFly SolarX 120 GPS protocol
  - SolarX 120 communication protocol
  - SolarX 120 tracking protocol
  - Plaspy device protocol
  - GPS tracker protocol Plaspy
  - SolarX 120 BLE telemetry
  - SolarX 120 asset tracking
  - TopFly GPS tracker compatibility
  - SolarX 120 Plaspy integration
---

# TopFly - SolarX 120 Protocol

This page describes the public protocol context for using the TopFly SolarX 120 tracker with Plaspy. It focuses on how the device communicates general telemetry, location, and sensor data to Plaspy without exposing vendor private implementation details. Use this information to understand what to configure on the device and what to expect when integrating the SolarX 120 into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, carrier provisioning, and manufacturer implementation, so verify device specific options against the official TopFly documentation and release notes.

## Protocol Overview

The communication protocol governs how SolarX 120 packages and transmits GNSS fixes, sensor telemetry, and event notifications to a server such as Plaspy. At a high level the protocol ensures the tracker can identify itself, convey usable location and sensor values, and support buffered uploads when the cellular connection is unavailable.

- Supplies device identity and status so Plaspy can associate incoming data with the correct asset.
- Sends GNSS fixes and timestamps that Plaspy uses to build live tracks and historical trails.
- Delivers BLE sensor telemetry and internal sensor events for temperature, humidity, door status, movement and removal alerts.
- Supports buffered reporting so stored points are uploaded when coverage returns, preserving track history.
- Allows configurable reporting intervals and event triggers to balance real time needs and battery life.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker connections and automatically recognizes the reporting protocol when a device sends data. In most cases users do not need to select a protocol manually within Plaspy if the SolarX 120 is configured to report to the Plaspy endpoint using supported transport options.

- Point the device to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 and use port 8888 for reporting.
- Plaspy uses the same port for all supported devices, simplifying server configuration and firewall rules.
- Devices may use either TCP or UDP on port 8888 depending on the unit configuration and network conditions.
- When the device sends its initial report, Plaspy associates the device identity with the incoming stream and applies appropriate parsing and mapping.
- If a device supports MQTT or SMS as alternative transports, those methods can also deliver telemetry to Plaspy when configured per the device capabilities and Plaspy ingestion options.

## Transport and Connection Context

SolarX 120 supports flexible transport options and can be configured to use the transport best suited to the deployment. Connection context covers addressing, transport type, and practical considerations for reliable delivery to Plaspy.

- The device may be configured to send telemetry to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- Plaspy accepts both UDP and TCP on port 8888; choose the transport supported by the device firmware and preferred by the network operator.
- All devices reporting to Plaspy use the same port, which simplifies NAT and firewall configuration on the collecting network.
- Cellular networks, APN settings, and carrier restrictions can affect which transport is most reliable in the field.
- Where available, MQTT or SMS may be used as alternative transports for devices that support them, but the shared Plaspy endpoint and port remain the primary live reporting path.

## Protocol Compatibility Notes

- Firmware version differences can change available transports, reporting intervals, and optional fields in telemetry. Always check the installed firmware release notes.
- Hardware revisions may alter peripheral behavior such as BLE support, sensor types, or buffer capacity.
- Manufacturer configuration options influence which events are reported and how frequently GNSS fixes are produced, affecting battery life and data volume.
- Transport selection (TCP versus UDP) should consider cellular reliability and how the device buffers and retransmits when connections drop.
- BLE sensor compatibility may vary with sensor firmware and BLE profiles; the SolarX 120 is documented as compatible with TOPFLYtech sensors such as TSTH1-B and TSDT1-B.
- Validate compatibility and recommended configuration steps against TopFly technical documentation before deploying at scale.

## Why Protocol Understanding Matters

Understanding the SolarX 120 communication protocol helps ensure successful initial setup, reliable long term operation, and effective troubleshooting when using Plaspy. Clear protocol knowledge reduces integration time and prevents common misconfigurations that impact tracking accuracy and device uptime.

- Ensures the device is pointed to the correct Plaspy endpoint and uses port 8888 so data reaches the platform.
- Helps optimize reporting intervals and event rules to balance realtime visibility with battery and solar charging behavior.
- Aids troubleshooting by distinguishing network, transport, and firmware causes when telemetry is missing or delayed.
- Enables appropriate expectation setting for buffered uploads, retained track history, and sensor telemetry availability.
- Facilitates correct mapping of device events into Plaspy workflows for alerts, geofencing, and reporting.

## Why Use Plaspy with This Protocol

Using SolarX 120 with Plaspy gives organizations dependable long haul visibility and the ability to combine GNSS position streams with environmental and tamper telemetry. Plaspy’s automatic protocol detection and single port ingestion simplify on‑boarding so field teams can deploy SolarX 120 units without manual protocol selection on the platform.

Plaspy provides centralized tracking, event rules, and historical reporting that make SolarX 120 telemetry actionable for fleet management, asset protection, and condition monitoring. To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific protocol, firmware behavior, and implementation details verify information with the manufacturer at https://www.topflytech.com/.
