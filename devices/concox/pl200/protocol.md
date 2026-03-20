---
slug: /concox/pl200/protocol
id: pl200-protocol
sidebar_label: Protocol
title: Concox - PL200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Concox PL200 with Plaspy using shared connection settings and automatic detection
keywords:
  - Concox PL200
  - Concox PL200 protocol
  - PL200 GPS tracker
  - Concox tracker Plaspy compatibility
  - PL200 communication protocol
  - PL200 tracking protocol
  - Concox GPS protocol
  - Plaspy compatible tracker
  - personal GPS tracker PL200
  - PL200 lone worker tracker
---

# Concox - PL200 Protocol

This page documents the public protocol context for using the Concox PL200 with the Plaspy platform. It focuses on how the PL200 communicates with Plaspy in general, what connection settings are commonly used, and which behaviors are relevant for reliable real-time tracking and alerting. The material here is intended to help administrators and integrators understand how the device reports location, events, and telemetry to Plaspy without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by PL200 firmware version, hardware revision, regional model, and manufacturer implementation, so verify device-specific behavior with official manufacturer documentation as needed.

## Protocol Overview

The PL200 uses a cellular link to deliver GNSS fixes, event alerts, and telemetry to a remote server. The device-level communication protocol defines how the tracker identifies itself, formats location and status information, and transmits events such as SOS, low battery, or geofence transitions so that a platform like Plaspy can ingest and present the data.

- Enables the PL200 to report GNSS positions, assisted fixes, and device status to a remote server for live tracking.
- Carries event notifications such as SOS, motion alerts, geofence entry and exit, and battery warnings to the server.
- Provides device identification and basic telemetry so Plaspy can associate incoming data with the correct device record.
- Supports additional assistive data such as BLE and Wi‑Fi assisted positions that improve accuracy in challenging environments.
- Allows remote configuration and command delivery where the device firmware supports over-the-air commands or SMS configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and uses that connection to determine which tracker protocol has been used. In most deployments the user does not need to select a protocol inside Plaspy manually as long as the device is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com which devices can point to for reporting.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative to the domain in device configuration.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.
- The user typically does not need to choose a protocol in Plaspy if the device reports to the Plaspy endpoint and the device is configured correctly.
- Plaspy’s detection is driven by the incoming connection and reported data rather than manual protocol selection by the user.

## Transport and Connection Context

The PL200 can be configured to use standard transport methods to forward its reporting traffic to Plaspy. Connection configuration is a common setup step during deployment; the device will use the configured transport and endpoint to send periodic location reports, alarms, and status messages to Plaspy.

- The device may be configured using UDP or TCP on port 8888 depending on device support and deployment needs.
- The Plaspy server domain d.plaspy.com and the IP 54.85.159.138 are valid endpoints devices can point to for reporting.
- All devices in Plaspy use the same port which simplifies firewall and network planning for deployments.
- Choose UDP for lower overhead and typical real time reporting, or TCP where session reliability is required and supported by the device.
- Ensure APN, SIM, and cellular credentials are configured so the PL200 can reach the Plaspy endpoint over cellular data.

## Protocol Compatibility Notes

- Protocol behavior can vary by PL200 firmware version; features visible to Plaspy may be added or changed in firmware updates.
- Hardware revisions and regional model variants can influence which transports and bands are supported.
- Manufacturer-side configuration methods such as SMS commands, configuration tools, or over-the-air updates can change how the device is set up to report.
- Transport choice (UDP versus TCP) can affect delivery characteristics and should match the device capability and network policies.
- Verify that the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 for Plaspy compatibility.
- Always cross-check compatibility and configuration steps against the official Concox PL200 documentation for the shipped firmware revision.

## Why Protocol Understanding Matters

Understanding the PL200 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable behavior in production tracking systems. Knowledge of how the device reports and which events it sends reduces guesswork during commissioning and helps support teams respond to issues more quickly.

- Speeds up initial setup by confirming correct endpoint and transport selection.
- Improves troubleshooting by clarifying which events should appear in Plaspy and why some telemetry may be absent.
- Helps plan network and firewall rules since Plaspy uses a single port and well known endpoints.
- Guides firmware management decisions when feature changes or fixes are released by the manufacturer.
- Supports reliable emergency workflows by confirming how SOS and alarm signals are delivered to Plaspy.

## Why Use Plaspy with This Protocol

Using the Concox PL200 with Plaspy provides organizations with a streamlined approach to personal tracking, lone worker protection, and mobile workforce monitoring. Plaspy ingests the PL200’s location, telemetry, and event messages and presents them in a unified operational view for dispatch, alerting, and historical analysis. The PL200’s BLE and Wi‑Fi assist features complement GNSS reporting to improve positioning in urban and indoor fringe areas, while SOS and two-way voice capabilities support rapid response workflows.

If you want to learn more about how Plaspy can work with the PL200 and other compatible devices, visit https://www.plaspy.com. For the latest, device specific protocol details, firmware notes, and configuration instructions from the manufacturer, please consult the official Concox resources at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
