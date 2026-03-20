---
slug: /concox/vg502/protocol
id: vg502-protocol
sidebar_label: Protocol
title: Concox - VG502 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Concox VG502 OBDII tracker with Plaspy for reliable tracking and telemetry
keywords:
  - Concox VG502 protocol
  - Concox VG502 GPS protocol
  - VG502 Plaspy compatibility
  - Concox tracker communication
  - VG502 OBDII tracker protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking protocol VG502
  - fleet management tracker protocol
  - usage based insurance tracker protocol
  - BLE OBDII tracker protocol
---

# Concox - VG502 Protocol

This page provides the public protocol context for using the Concox VG502 OBDII GNSS tracker with Plaspy. It explains how this plug and play GPS tracker communicates with Plaspy at a high level and what to expect when integrating VG502 devices into a Plaspy deployment. The focus here is on connection and protocol context rather than internal or sensitive implementation details.

The VG502 reports GNSS fixes and OBDII telemetry such as mileage, fault codes, ACC status, fuel consumption, and engine speed to a remote server for ingestion by Plaspy. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ slightly between units or firmware builds.

## Protocol Overview

The VG502 reporting protocol defines how the device identifies itself, transmits location and vehicle telemetry, and informs a server about events such as ignition changes, faults, and driving behavior alerts. For integration with Plaspy the protocol's public role is to deliver usable position and diagnostic data reliably to the configured Plaspy endpoint.

- Enables the tracker to send GNSS location updates and OBDII telemetry to a remote server for real time maps and historical reports.
- Carries device identity and session information so Plaspy can associate incoming messages with the correct vehicle record.
- Reports event notifications such as geo fence transitions, collisions, and device removal so Plaspy can trigger alerts and analytics.
- Provides periodic status and health information that Plaspy can use for device monitoring and uptime reporting.
- Supports optional local configuration and firmware updates via BLE while network reporting continues to the server.

## How Plaspy Detects the Protocol

Plaspy accepts connections from supported trackers at a single shared endpoint and port. When a properly configured VG502 reports to Plaspy, the platform inspects incoming traffic and automatically determines the tracker reporting protocol so no manual protocol selection is typically required inside Plaspy.

- Plaspy uses the shared server endpoint d.plaspy.com for device reporting.
- The Plaspy server IP for reporting is 54.85.159.138 and the service listens on port 8888.
- Devices may be configured to use either UDP or TCP when reporting to Plaspy on port 8888.
- All devices supported by Plaspy use the same port, simplifying fleet configuration.
- With a device pointed at the Plaspy endpoint, protocol detection is automatic and users typically only need to ensure the tracker is configured to report to Plaspy.

## Transport and Connection Context

Transport and connection choices affect how the VG502 reaches Plaspy but do not change the high level purpose of the protocol. The device supports cellular uplink for WAN reporting and can be set to report with either UDP or TCP depending on the deployment needs and device configuration tools.

- The VG502 may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Reporting uses port 8888 and the device can use UDP or TCP on that port based on device support.
- Using a domain name allows carrier level DNS resolution and easier future endpoint changes.
- Direct IP configuration can be useful for constrained environments or where DNS is limited.
- Ensure SIM and carrier settings allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available telemetry fields, and feature behavior between devices.
- Hardware revisions or regional variants may expose different OBDII parameters or GNSS performance characteristics.
- Manufacturer configuration tools or local BLE settings can change transport (UDP versus TCP) and reporting frequency.
- Some vehicle makes expose OBDII PIDs differently; compatibility with specific diagnostics can vary by vehicle and software.
- Always verify that the device is pointed at the Plaspy endpoint and that cellular connectivity is active during testing.
- Confirm any optional sensor or BLE accessory behavior against the device manual if you rely on those data streams in Plaspy.
- Validate compatibility against the manufacturer documentation and release notes for firmware specific details.

## Why Protocol Understanding Matters

Understanding the VG502 communication protocol and connection context helps ensure a smooth setup, efficient troubleshooting, and reliable long term operation within Plaspy. Knowing what the device sends and how it connects enables better configuration, faster root cause analysis, and more predictable reporting behavior.

- Reduces time to deployment by aligning device transport and endpoint settings with Plaspy expectations.
- Helps diagnose connectivity issues by separating network routing problems from protocol or firmware differences.
- Improves event and alert tuning by clarifying how and when the device reports specific telemetry or events.
- Assists in validating OBDII data fields so Plaspy reports show the intended vehicle parameters.
- Supports lifecycle tasks such as firmware updates and configuration changes by understanding expected behavior after updates.

## Why Use Plaspy with This Protocol

Using the Concox VG502 with Plaspy provides an efficient pathway to real time vehicle visibility and rich OBDII telemetry without hardwiring. The OBDII form factor and dual GNSS positioning make the VG502 a practical option for rapid rollout across company cars, mixed fleets, and usage based insurance programs, while Plaspy ingests and normalizes the device data for maps, reports, and alerts.

Plaspy accepts VG502 reports at the shared endpoint d.plaspy.com and at the server IP 54.85.159.138 on port 8888 using either UDP or TCP. Because Plaspy uses the same port for all supported devices and performs automatic protocol detection, most VG502 units only need to be pointed to the Plaspy endpoint to begin reporting.

Learn more about Plaspy and how your fleet can use the platform at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information on the official Concox website at https://www.iconcox.com/ as implementation and firmware behavior can change over time.
