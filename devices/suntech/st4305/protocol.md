---
slug: /suntech/st4305/protocol
id: st4305-protocol
sidebar_label: Protocol
title: Suntech - ST4305 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST4305 compatibility with Plaspy for real time tracking and telemetry
keywords:
  - Suntech ST4305 protocol
  - Suntech ST4305 GPS protocol
  - Suntech ST4305 communication protocol
  - Suntech ST4305 tracking protocol
  - Suntech tracker Plaspy
  - ST4305 Plaspy compatibility
  - vehicle GPS protocol
  - fleet tracking protocol
  - GPS tracker communication
  - Plaspy device integration
---

# Suntech - ST4305 Protocol

This page provides the public protocol context for using the Suntech ST4305 series with Plaspy. It summarizes how the device communicates general telemetry, location, and event information to the Plaspy platform and what integrators should consider when pointing ST4305 devices to Plaspy for real time tracking and fleet management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry fields can vary by ST4305 firmware version, hardware variant, and manufacturer implementation, so this page focuses on safe, public facing protocol context for reliable device integration.

## Protocol Overview

The ST4305 tracker family ships vehicle telemetry and GNSS position data to a server endpoint so Plaspy can ingest, display, and act on those events. The public protocol context covers how the tracker identifies itself, reports location and status, and supports additional telemetry such as digital inputs, serial telemetry on R/RE variants, and optional security events.

- Transmits GNSS positions and movement telemetry for real time tracking and historical replay.
- Reports digital inputs and outputs, virtual ignition state, and event flags used by Plaspy to generate alerts.
- Sends device identification and status information so Plaspy can correlate incoming messages to a registered asset.
- Supports RS232 serial telemetry on R and RE variants for integration with vehicle diagnostics and external gateways.
- Includes optional security and recovery signals such as backup battery status and jamming detection where enabled by firmware.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and port and automatically determines the communicating tracker protocol when a properly configured device sends data. In most cases a tracker pointed at the Plaspy endpoint will be detected without the user selecting a protocol manually inside the Plaspy platform.

- Plaspy listens on the shared endpoint d.plaspy.com and the server IP 54.85.159.138 for device reports.
- All devices supported by Plaspy use the same port which simplifies device configuration and onboarding.
- When an ST4305 reports to the Plaspy endpoint Plaspy automatically detects the tracker protocol and associates messages with the device record.
- Users typically only need to configure the device to report to the Plaspy address and transport; Plaspy handles protocol identification for supported models.
- If a device does not appear, confirming device reporting settings and firmware compatibility is the usual first step.

## Transport and Connection Context

The ST4305 family can use different transport methods depending on device configuration and network support. For connectivity to Plaspy, the tracker may be set to use either UDP or TCP on the shared port that Plaspy uses for all devices.

- Devices may be configured to send reports using UDP or TCP on port 8888 depending on firmware and installation needs.
- Trackers can point to the domain name d.plaspy.com or directly to the server IP 54.85.159.138 when configuring the destination server.
- Plaspy uses port 8888 for all supported devices which reduces configuration variation across a mixed fleet.
- Choice of UDP versus TCP can affect delivery characteristics based on network conditions and device settings.
- Ensure network routing and firewall rules allow outbound traffic from the device toward the Plaspy endpoint on the required transport and port.

## Protocol Compatibility Notes

- Firmware versions can change message content, event names, and available telemetry fields; check firmware notes when diagnosing unexpected behavior.
- Hardware variants ST4305, ST4305R, and ST4305RE expose different I O and serial capabilities that affect which telemetry is available to Plaspy.
- Manufacturer side configuration and optional features such as jamming detection may be enabled or disabled by firmware or installation options.
- Transport selection between UDP and TCP is a device configuration choice and may need to match network and carrier characteristics.
- Serial telemetry over RS232 on R and RE variants is useful for vehicle diagnostics but may require additional integration steps on the Plaspy side.
- Always validate compatibility and message behavior against the official Suntech documentation for the exact device model and firmware revision.

## Why Protocol Understanding Matters

A clear understanding of the ST4305 communication protocol helps ensure reliable setup, accurate telemetry, and effective troubleshooting when integrating devices with Plaspy. Knowing what the tracker reports and how it links to Plaspy reduces onboarding time and supports ongoing fleet reliability.

- Ensures device messages include the identifiers and telemetry fields Plaspy expects for asset mapping.
- Helps choose the appropriate transport and network settings for stable message delivery.
- Aids troubleshooting when telemetry is missing or events are not triggering expected workflows.
- Clarifies variant differences so integrators use the correct wiring and serial connections for R and RE models.
- Informs firmware update decisions and compatibility checks prior to large scale deployments.

## Why Use Plaspy with This Protocol

Using the Suntech ST4305 series with Plaspy gives fleet operators vehicle level visibility combined with Plaspy analytics and alerting. The ST4305 family provides robust GNSS positioning, multiple network options for broad coverage, and variant specific capabilities such as RS232 that feed Plaspy dashboards, geofence rules, and incident workflows for better operational oversight.

If you need more detail on Plaspy platform capabilities or integration planning, learn more at https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the current ST4305 protocol and firmware specifics with the manufacturer at http://www.suntechint.com/.
