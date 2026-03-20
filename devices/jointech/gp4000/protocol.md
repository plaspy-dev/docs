---
slug: /jointech/gp4000/protocol
id: gp4000-protocol
sidebar_label: Protocol
title: Jointech - GP4000 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Jointech GP4000 integration with Plaspy for GPS tracking and telemetry
keywords:
  - Jointech GP4000
  - GP4000 protocol
  - Jointech GPS protocol
  - GP4000 Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking protocol
  - fleet management GPS
  - GP4000 communication
  - Plaspy device integration
  - GP4000 telemetry
---

# Jointech - GP4000 Protocol

This page describes the public protocol context for using the Jointech GP4000 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level and what to know when configuring reporting for fleet monitoring and telemetry. The intent is to provide practical protocol context without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior for the GP4000 can vary with firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ between deployments.

## Protocol Overview

The GP4000 communication protocol governs how the tracker reports position, sensor values, alarm events, and status to a remote server. With Plaspy, the protocol's role is to deliver usable telemetry so the platform can present real time location, event notifications, and historical records for fleet management tasks.

- Enables periodic and event driven reporting of GNSS positions and telemetry to the cloud platform.
- Carries identity and status information so Plaspy can associate records to the correct asset.
- Transmits alarm and input events such as geofence, overspeed, tamper, and power-cut for immediate handling.
- Allows reporting of external sensor and serial data fields so Plaspy can ingest fuel, CAN, or other telemetry.
- Works over standard transport channels to reach the Plaspy endpoint for parsing and presentation.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a single shared endpoint and port for all supported trackers and automatically determines how to interpret received reports. When a GP4000 is configured to report to Plaspy, users typically do not need to manually choose a protocol inside Plaspy as long as the device is correctly pointed to the Plaspy endpoint.

- Plaspy’s public server domain for incoming device reports is d.plaspy.com.
- Plaspy’s public server IP address is 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and onboarding.
- The GP4000 may be configured to send data to Plaspy using the shared endpoint and port.
- When the device reports correctly to the Plaspy endpoint, protocol detection is handled automatically by the platform.

## Transport and Connection Context

Connection context describes how the GP4000 reaches the Plaspy endpoint and the common transport options that can be used. These details focus on network addressing and transport selection rather than internal packet formats.

- The GP4000 may be configured to use either UDP or TCP to communicate with Plaspy, depending on device settings and network requirements.
- Plaspy accepts incoming device reports on port 8888 for all supported devices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS resolution is not available.
- Choosing UDP or TCP can affect delivery characteristics but does not change the fact that the same Plaspy port is used platform wide.
- Ensure that network firewalls and carrier APN settings allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or event behavior; confirm firmware details when diagnosing issues.
- Hardware revisions and optional external peripherals may add or modify telemetry fields exposed by the GP4000.
- The choice of transport (UDP vs TCP) can be configured on the device and should match network reliability and latency needs.
- Manufacturer configuration parameters and default server settings may differ by region or distributor; validate device server settings before deployment.
- Plaspy’s automatic detection reduces manual configuration in the platform, but correct device pointing to the Plaspy endpoint is required.
- Always compare observed device behavior to official Jointech documentation for the specific GP4000 firmware version in use.

## Why Protocol Understanding Matters

Understanding the GP4000 communication protocol in broad terms improves setup success, troubleshooting efficiency, and long term reliability of tracking deployments on Plaspy. Even without inspecting low level packets, knowing how the device reports and what can vary between firmware builds helps operators make informed configuration choices.

- Helps validate that the device is correctly pointing to the Plaspy endpoint and using the expected transport.
- Clarifies how events and sensor inputs should appear in Plaspy dashboards and alerts.
- Speeds troubleshooting when devices are offline or reporting unexpected values by focusing on transport and configuration first.
- Informs decisions about firmware updates, peripheral integration, and deployment practices.
- Supports predictable scaling because the same port and endpoint conventions are used across devices in Plaspy.

## Why Use Plaspy with This Protocol

Using the Jointech GP4000 with Plaspy gives fleet operators reliable telemetry and a unified reporting endpoint for location, alarms, and sensor data. The GP4000’s rugged design and broad I/O and serial connectivity pair well with Plaspy’s ingestion and display of position, event, and sensor data to support operational visibility, anti theft measures, and analytics-driven workflows.

To learn more about Plaspy and how it works with devices like the GP4000 visit https://www.plaspy.com. Please verify the latest GP4000 protocol and firmware behavior with the manufacturer at https://www.jointcontrols.com/ since protocol support and device implementation details can change over time.
