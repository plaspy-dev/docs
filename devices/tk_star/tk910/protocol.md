---
slug: /tk_star/tk910/protocol
id: tk910-protocol
sidebar_label: Protocol
title: TK-Star - TK910 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the TK910 tracker with Plaspy using shared connection settings and detection
keywords:
  - TK Star TK910 protocol
  - TK910 GPS protocol
  - TK Star TK910 Plaspy compatibility
  - TK910 communication protocol
  - TK910 tracking protocol
  - TK Star GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol TK910
  - TK910 telemetry integration
  - fleet tracking TK910
---

# TK-Star - TK910 Protocol

This page provides a public protocol overview for using the TK-Star TK910 tracker with the Plaspy platform. It focuses on how the tracker communicates usable location and event data to Plaspy in general, non sensitive terms, and explains the role of the device reporting protocol during setup and operation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page aims to describe the common communication context rather than firmware specific internals.

## Protocol Overview

The TK910 reporting protocol is the set of device behaviors and message flows that allow the unit to forward GNSS assisted locations, LBS and Wi‑Fi assisted fixes, and alarm events to a remote server for tracking and fleet management. When integrated with Plaspy the protocol enables the tracker to identify itself, send periodic and event driven updates, and deliver telemetry that Plaspy can present in dashboards and alerts.

- Enables periodic position reporting and event driven messages such as vibration, geofence, move and overspeed alerts.
- Carries identification and telemetry so Plaspy can map incoming messages to the correct vehicle or asset.
- Transports GNSS assisted locations plus LBS and Wi‑Fi assistance to improve fixes in challenging coverage areas.
- Supports remote command and control where optional hardware is installed such as engine cut off, subject to manufacturer and configuration.
- Provides the baseline data Plaspy needs to archive historical tracks and generate notifications.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single, shared endpoint and automatically detects the tracker protocol from the reported traffic and device identification. In most cases you do not need to pick a protocol inside Plaspy when the TK910 is correctly configured to send data to the Plaspy endpoint.

- Plaspy listens on a common server endpoint at d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol once the TK910 begins reporting to the Plaspy endpoint.
- If a device sends correctly formatted identification and telemetry to the endpoint, Plaspy will map messages to the device record without manual protocol selection.
- For unusual firmware variants or highly customized deployments manual review of manufacturer documentation may be useful.

## Transport and Connection Context

The TK910 sends data over the cellular data network to the Plaspy backend using standard transport options supported by the device. Plaspy provides a single listening port for all devices which makes pointing trackers to Plaspy straightforward in device settings.

- The TK910 may be configured to use UDP or TCP on port 8888 depending on device support and configuration needs.
- Devices can be set to report to the Plaspy domain d.plaspy.com or the IP address 54.85.159.138.
- Plaspy uses port 8888 as the common port for all supported devices and connections.
- Transport selection between UDP and TCP is determined by device firmware and the installer configuration.
- Ensure the SIM data plan and mobile network connectivity allow outbound GPRS traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- The TK910 is compatible with Plaspy when configured to report to the Plaspy endpoint, but implementation details may vary between firmware releases.
- Hardware revisions and regional firmware builds can introduce differences in message timing and optional features.
- Transport mode selection UDP versus TCP affects delivery semantics and should match the device configuration.
- Optional features such as remote immobilizer require correct wiring and device configuration in addition to protocol support.
- Validate device IMEI registration and APN settings to ensure successful connectivity to the Plaspy endpoint.
- Consult the manufacturer documentation for firmware specific command lists and any model variants that alter behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps streamline device onboarding, ensures the tracker reports the expected telemetry, and makes troubleshooting simpler when connectivity or event reporting does not behave as expected.

- Confirms correct endpoint and transport settings so devices report reliably to Plaspy.
- Helps verify that critical events like geofence breaches and vibration alerts are delivered and interpreted.
- Assists in diagnosing network level issues such as blocked ports or incorrect APN settings.
- Clarifies which optional features such as remote engine cut off will work in your deployment.
- Supports planning for firmware updates and hardware revisions that could change reporting behavior.

## Why Use Plaspy with This Protocol

Using the TK910 with Plaspy gives fleet managers and vehicle owners a straightforward way to collect GNSS assisted positions, LBS and Wi‑Fi improved fixes, and event alerts in a unified platform. Plaspy ingests the telemetry, maps devices automatically, archives historical tracks, and exposes alerts for operational workflows and incident response.

To learn more about Plaspy and how it handles device integration and fleet monitoring visit https://www.plaspy.com. For the most current device specific protocol documentation, firmware notes, and implementation details consult the manufacturer at https://www.tk-star.com/ as protocol support and firmware behavior can change over time.
