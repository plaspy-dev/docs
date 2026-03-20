---
slug: /telic/picotrack_4g/protocol
id: picotrack_4g-protocol
sidebar_label: Protocol
title: Telic - Picotrack 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Telic Picotrack 4G and Plaspy compatibility including connection settings and integration guidance
keywords:
  - Telic Picotrack 4G protocol
  - Telic Picotrack 4G GPS protocol
  - Telic Picotrack 4G protocol for Plaspy
  - Telic Picotrack 4G communication protocol
  - Telic Picotrack 4G tracking protocol
  - Picotrack 4G telemetry
  - Plaspy device compatibility
  - Telic PAIP UKSP variant
  - LTE M tracker protocol
  - vehicle tracking protocol
---

# Telic - Picotrack 4G Protocol

This page outlines the public protocol context for using the Telic Picotrack 4G with Plaspy. It describes how the tracker communicates with Plaspy ingestion endpoints, the transport options commonly used, and the practical considerations to keep in mind when integrating the device into a Plaspy deployment. The content focuses on connection and protocol context that is safe to publish and useful for setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by Picotrack 4G firmware, hardware revision, and manufacturer implementation, including the PAIP UKSP variant offered for government environments. Because of those differences, device behavior in the field may differ from one firmware build to another.

## Protocol Overview

The Picotrack 4G communication protocol defines how the device packages and transmits telemetry, GNSS position, and status information to a backend server. In practical terms the protocol lets the tracker identify itself, report location and sensor data, and support periodic heartbeats or event-driven messages that Plaspy ingests and presents in its platform.

- Enables device identification and session reporting so Plaspy can associate messages with a specific unit.
- Carries GNSS position and telemetry that Plaspy converts into real time location and historical traces.
- Supports periodic heartbeat and configurable reporting intervals to balance update cadence and battery life.
- May include manufacturer or region specific variants such as the PAIP UKSP option for regulated deployments.
- Works over standard IP transport so the same Plaspy endpoint can serve many different tracker models.

## How Plaspy Detects the Protocol

Plaspy receives messages on a shared ingestion endpoint and automatically determines the tracker protocol based on the incoming traffic pattern and device identifiers. In most cases users do not need to select a protocol inside Plaspy if the Picotrack 4G is configured to report to the Plaspy endpoint using the correct host and transport.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device reporting and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when a properly configured device sends data to the endpoint.
- Typical setup steps are to point the device to the Plaspy host and verify the device is sending telemetry on the configured transport.
- When devices use manufacturer specific variants such as PAIP UKSP, Plaspy will ingest messages as long as the device reports to the shared endpoint and transport.

## Transport and Connection Context

The Picotrack 4G can use standard IP transports to reach Plaspy. The device may be configured to open a connection to the Plaspy endpoint using either UDP or TCP depending on the firmware and configuration options available on the unit. Understanding the transport and destination information is important for network configuration and troubleshooting.

- The device may be configured using UDP or TCP on port 8888.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 for Plaspy ingestion.
- Plaspy uses the same port for all supported devices, simplifying firewall and NAT rules.
- Choice of UDP or TCP is driven by device firmware and desired behavior for delivery reliability and battery use.
- Confirm the device transport mode matches any carrier or network policies that affect long lived connections.

## Protocol Compatibility Notes

- Firmware differences can change message timing, fields included in telemetry, or supported transport modes.
- Hardware revisions or SKU variants may expose or omit certain features such as external sensor inputs.
- Manufacturer side protocol variants such as PAIP UKSP can alter message content or compliance behavior.
- Transport selection (UDP versus TCP) can affect battery consumption and session behavior on LTE M networks.
- Validate compatibility by checking the device configuration and confirming successful messages reach the Plaspy endpoint.
- When in doubt, consult the device configuration interface and Plaspy connection logs to confirm the device is reporting correctly.

## Why Protocol Understanding Matters

Having a clear view of the Picotrack 4G communication protocol helps ensure reliable deployments, predictable battery life, and efficient troubleshooting when devices are in the field. It also enables teams to plan for firmware updates, transport choices, and any regulatory variants that may apply.

- Speeds up initial setup by confirming correct destination host and transport settings.
- Helps diagnose connectivity issues related to carrier or firewall restrictions.
- Guides tuning of reporting intervals and sleep cycles to optimize battery life.
- Clarifies when manufacturer variants require different configuration or compliance steps.
- Supports informed planning for scaling large fleets and maintaining long term reliability.

## Why Use Plaspy with This Protocol

Using the Picotrack 4G with Plaspy gives organizations a way to gather real time location, status updates, and historical telemetry from long life, rugged LTE M devices. Plaspy’s shared ingestion endpoint and automatic protocol detection reduce configuration complexity, letting deployments focus on device placement, reporting cadence, and operational workflows rather than per device protocol selection.

If you want to learn more about how Plaspy works with devices like the Picotrack 4G, visit https://www.plaspy.com for platform details and deployment options. Please verify device specific protocol details, firmware behavior, and any regulatory variants with the manufacturer at https://www.telic.de since protocol support and firmware implementations can change over time.
