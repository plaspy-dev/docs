---
slug: /itriangle/ux101_al/protocol
id: ux101_al-protocol
sidebar_label: Protocol
title: iTriangle - UX101-AL++ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the iTriangle UX101-AL++ showing how the device communicates with Plaspy for tracking and telemetry
keywords:
  - iTriangle UX101-AL++ protocol
  - iTriangle UX101-AL++ GPS protocol
  - UX101-AL++ Plaspy compatibility
  - GPS tracker communication
  - vehicle telematics protocol
  - AIS 140 tracker protocol
  - fleet tracking protocol
  - telematics device protocol
  - Plaspy compatible tracker
  - vehicle tracking protocol
---

# iTriangle - UX101-AL++ Protocol

This page provides a public, high level view of the communication protocol context for using the iTriangle UX101-AL++ with Plaspy. It describes how the tracker reports location, telemetry, and events to Plaspy without exposing private parser details or firmware internals. Use this information as a practical reference for integration and troubleshooting alongside official manufacturer documents.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so always confirm device specific details with the manufacturer if needed.

## Protocol Overview

The device protocol defines how the UX101-AL++ communicates position, CAN diagnostics, sensor events, and status to a remote server such as Plaspy. In practical terms the protocol enables the tracker to identify itself, provide timely GNSS fixes, send telemetry and event notifications, and support remote management workflows.

- Enables periodic and event driven location updates and telemetry delivery to Plaspy
- Carries vehicle diagnostics and sensor data from Dual CAN interfaces for ingestion by Plaspy
- Conveys tamper, battery removal, and wake/ignition events for security and operational alerts
- Supports local wireless data sources such as BLE and Wi Fi as complementary telemetry channels
- Allows over the air device or ECU management signals where supported by the manufacturer

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a common endpoint and port and to detect the reporting protocol automatically. When a UX101-AL++ is configured to report to Plaspy, manual protocol selection inside Plaspy is typically not required.

- Plaspy exposes a shared server endpoint for device reports to simplify setup
- All devices in Plaspy use the same port, and the platform auto detects the tracker protocol
- Proper device configuration to point to the Plaspy endpoint is the primary requirement for automatic detection
- Detection focuses on publicly observable transport and message handshakes rather than exposing parser internals
- If detection issues occur, reviewing device reporting settings and firmware revision is a practical first step

## Transport and Connection Context

Connection context covers how the tracker reaches Plaspy rather than the private details of message encoding. The UX101-AL++ supports common network transports and can be configured to report to the Plaspy server domain or its public IP.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and local configuration
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for devices that require an IP target
- The port for Plaspy device connections is 8888 and all devices in Plaspy use the same port
- Select UDP or TCP based on device capability, network reliability, and any manufacturer recommendations
- Keep connection settings aligned with carrier and firewall rules so the tracker can reach d.plaspy.com or the provided IP

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or alter features and message behavior; check the device firmware level when validating compatibility
- Hardware revisions and optional accessory modules may change available telemetry channels such as CAN or BLE data
- Transport selection (UDP versus TCP) is a configuration choice that can affect delivery semantics and should match what the device supports
- Manufacturer configuration commands or tools are the authoritative source for enabling reporting to an external endpoint
- Plaspy automatically detects protocol type but correct endpoint and port settings on the device are required for successful detection
- Validate any advanced features such as VFOTA and ECU interaction against official manufacturer documentation before use

## Why Protocol Understanding Matters

Knowing how the UX101-AL++ communicates with Plaspy helps with correct setup, quicker troubleshooting, and reliable long term operations. A clear view of protocol and transport expectations reduces integration time and supports operational continuity.

- Ensures device reporting settings point to the correct Plaspy endpoint and port
- Helps diagnose connectivity issues related to network, firewall, or carrier restrictions
- Clarifies which telemetry channels (GNSS, CAN, BLE, Wi Fi) are expected to arrive at Plaspy
- Guides firmware and hardware change management when updating devices in a fleet
- Supports consistent data quality by aligning device reporting intervals and event rules with Plaspy ingestion

## Why Use Plaspy with This Protocol

Paired with Plaspy, the UX101-AL++ provides a robust telematics endpoint for organizations that need real time visibility, vehicle diagnostics, and secure remote management. Plaspy ingests GNSS fixes, CAN diagnostics, and event alerts so fleets and OEMs can monitor operations, respond to incidents, and plan maintenance with actionable data.

To learn more about Plaspy and how the platform works with devices like the UX101-AL++ visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information with the manufacturer at https://www.itriangle.net/.
