---
slug: /concox/at4/protocol
id: at4-protocol
sidebar_label: Protocol
title: Concox - AT4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Concox AT4 GPS tracker and how it communicates with Plaspy for real time tracking and events
keywords:
  - Concox AT4 protocol
  - Concox AT4 GPS protocol
  - AT4 communication protocol
  - AT4 tracking protocol
  - Concox AT4 Plaspy compatibility
  - Concox tracker protocol
  - GPS tracker AT4
  - vehicle tracking Concox AT4
  - asset tracking AT4
  - Plaspy device compatibility
---

# Concox - AT4 Protocol

This page provides a public, high level view of the communication context for the Concox AT4 when used with Plaspy. It is intended to help fleet managers, integrators, and technical users understand how the AT4 reports location and event data to Plaspy without exposing private implementation details.

The AT4 is Plaspy compatible out of the box, and Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, implementation-agnostic guidance for integration and troubleshooting.

## Protocol Overview

The AT4 reporting protocol defines how the device identifies itself to a server, sends location and event data, and buffers reports when connectivity is interrupted. For Plaspy users, the protocol's primary role is to deliver GNSS and GSM-derived positions, telemetry, and event notifications in a way that Plaspy can ingest and present in real time.

- Enables regular location reports and event notifications such as tamper, over-speed, and movement alerts.
- Carries device identity and status information so Plaspy can associate incoming reports with the correct asset.
- Provides buffering behavior so the device can upload cached data when connectivity is restored.
- Transports telemetry that supports features like remote audio monitoring and accelerometer events where permitted.
- Supplies heartbeat or periodic reporting that lets Plaspy monitor device health and connectivity.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a single, shared endpoint and automatically detects supported tracker protocols as devices connect and report. When an AT4 is configured to report to the Plaspy endpoint, users typically do not need to select a protocol manually inside Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The port used by Plaspy for device reporting is 8888; all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy automatically detects the tracker protocol when the device sends recognizable reports to the Plaspy endpoint.
- If the AT4 is properly set to report to d.plaspy.com or 54.85.159.138 on port 8888, protocol selection inside Plaspy is generally unnecessary.

## Transport and Connection Context

Connection context covers how the AT4 reaches the Plaspy servers, which is important for firewall rules, SIM configuration, and initial device provisioning. The AT4 supports common cellular reporting mechanisms and can be set to use either of the supported transport modes.

- The device may use UDP or TCP on port 8888 to reach Plaspy depending on device configuration and firmware.
- Devices can be configured to point to the domain d.plaspy.com or the server IP 54.85.159.138 for reporting.
- Plaspy listens on port 8888 for device reports and uses the same port for all supported devices.
- Choose the transport mode supported by the device firmware and compatible with your network and firewall setup.
- Network conditions and operator NAT behavior may affect connectivity; ensure outbound SIM data and the chosen transport are permitted.

## Protocol Compatibility Notes

- Firmware variations can change report cadence, available event types, and optional features such as remote audio monitoring or additional sensor telemetry.
- Hardware revisions and regional firmware packages may introduce differences in supported commands and behavioral defaults.
- Transport choice (UDP vs TCP) can affect delivery guarantees and behavior during connectivity loss; select the mode that matches device capabilities and operational needs.
- Power saving and standby modes on the AT4 can alter reporting frequency and latency for events.
- Manufacturer-side configuration or custom firmware may change how the device constructs and sends reports; validate changes against the device vendor documentation.
- Always test devices in a controlled pilot before broad deployment to confirm Plaspy receives the expected reports.

## Why Protocol Understanding Matters

A clear, practical understanding of the AT4 communication protocol helps with successful setup, reliable operation, and faster troubleshooting when integrating devices with Plaspy.

- Confirms the device is pointing to the correct Plaspy endpoint and transport so reports reach d.plaspy.com or 54.85.159.138 on port 8888.
- Helps diagnose connectivity issues related to SIM, APN, or network carrier restrictions versus protocol mismatches.
- Makes it easier to interpret which events and telemetry the device will deliver to Plaspy based on firmware capabilities.
- Supports planning for battery life and reporting cadence tradeoffs when using power saving modes on long standby devices.
- Streamlines pilot testing and rollouts by clarifying expectations for buffered uploads and event delivery after outages.

## Why Use Plaspy with This Protocol

Using the Concox AT4 with Plaspy provides a practical solution for organizations that need long-term, low‑maintenance asset tracking with tamper alerts and optional remote audio where permitted. The AT4's high capacity battery, IPX5-rated enclosure, and magnet mount make it suitable for trailer and asset monitoring while Plaspy collects and presents location, event, and telemetry data for operational use.

To learn more about how Plaspy works with devices like the AT4, visit https://www.plaspy.com. For the most current device protocol and firmware details, and to verify device specific behavior, consult the manufacturer at https://www.iconcox.com/. Protocol support and firmware behavior can change over time so verifying the latest manufacturer documentation is recommended.
