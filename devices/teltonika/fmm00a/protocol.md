---
slug: /teltonika/fmm00a/protocol
id: fmm00a-protocol
sidebar_label: Protocol
title: Teltonika - FMM00A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting Teltonika FMM00A OBD II tracker to Plaspy with transport and compatibility context
keywords:
  - Teltonika FMM00A protocol
  - Teltonika FMM00A GPS
  - Teltonika FMM00A Plaspy compatibility
  - FMM00A OBD II protocol
  - FMM00A communication protocol
  - Teltonika vehicle tracking
  - Plaspy device protocol
  - OBD II GPS tracker
  - Teltonika fleet tracker
  - FMM00A telemetry
---

# Teltonika - FMM00A Protocol

This page provides public protocol context for using the Teltonika FMM00A tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and what to consider when deploying the FMM00A in fleet and rental scenarios. The guidance here is intended for technical users, integrators, and fleet managers who need an accurate overview of device to platform communication without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The FMM00A is a plug and play OBD II tracker with LTE Cat M1 and optional NB‑IoT connectivity, GNSS positioning and Bluetooth, and it streams vehicle telemetry and diagnostics into Plaspy. Exact protocol behaviour can vary with firmware version, hardware revision and manufacturer implementation, so deployments should validate configuration against device firmware and manufacturer documentation.

## Protocol Overview

The protocol used by the tracker governs how telemetry, location and diagnostic data are packaged and sent from the device to a remote server, and how commands or configuration can be applied back to the device. For Plaspy users, the important aspects are reliable delivery of GNSS and OBD parameters, correct identification of the device, and consistent event reporting for trips, alerts and diagnostics.

- Enables the FMM00A to report GNSS position, odometer, fuel and OBD parameters to Plaspy for mapping and analytics.
- Carries device identifiers and session information so Plaspy can associate incoming data with the correct vehicle record.
- Transports event and state data such as ignition, motion, accelerometer events and fault codes.
- Supports command and configuration updates delivered via remote management workflows compatible with mass provisioning.
- Provides the runtime context Plaspy needs to normalize telemetry into dashboards, alerts and historical reports.

## How Plaspy Detects the Protocol

Plaspy receives telemetry at a shared endpoint and port and uses automatic detection to determine which tracker protocol a device is using. In most cases, when the FMM00A is configured to report to the Plaspy endpoint, no manual protocol selection is required inside Plaspy.

- Plaspy listens on a single port for all devices to simplify provisioning and reduce configuration errors.
- When a device connects to d.plaspy.com or 54.85.159.138 on the configured port, Plaspy inspects the incoming data to identify the reporting protocol.
- Users typically set the device to send data to the Plaspy endpoint and choose UDP or TCP as supported by the device and network.
- Automatic detection means Plaspy can map incoming telemetry to the correct device profile without user intervention in most deployments.
- If a device is not reporting as expected, confirm the device network settings and firmware version before adjusting platform settings.

## Transport and Connection Context

Connection and transport choices determine how telemetry travels from the FMM00A to Plaspy and can affect latency, reliability and firewall configuration. The FMM00A supports cellular transport and can be configured to use UDP or TCP toward the Plaspy endpoint.

- Devices may be configured to send to d.plaspy.com or directly to 54.85.159.138 depending on DNS and network preferences.
- Plaspy uses port 8888 for device connections and the FMM00A may be set to use UDP or TCP on port 8888.
- All devices supported by Plaspy use the same port to simplify fleet provisioning and firewall rules.
- Selection between UDP and TCP depends on device firmware settings, network characteristics and desired delivery semantics.
- Ensure carrier and firewall policies permit outbound connections to the Plaspy endpoint and port for reliable reporting.

## Protocol Compatibility Notes

- The FMM00A is compatible with Plaspy out of the box, but specific behaviour can depend on the device firmware version and regional hardware variants.
- Firmware updates from the manufacturer can add features or change parameter naming and reported fields; validate changes after updates.
- Hardware revisions or optional accessories may expose different OBD PIDs or sensor inputs that affect the available telemetry.
- Transport choice (UDP vs TCP) can change how the device retries or confirms delivery; select the mode that aligns with your reliability needs.
- Manufacturer remote management tools such as Teltonika FOTA WEB can assist with mass provisioning but check compatibility settings before broad rollout.
- Always verify device configuration and test reporting in a controlled environment before deploying at scale.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices are configured correctly, simplifies troubleshooting, and improves long term reliability of the fleet telemetry delivered to Plaspy. Clear knowledge of how the tracker reports, and what it reports, reduces setup time and avoids preventable data gaps.

- Helps identify misconfiguration when a device fails to report to the Plaspy endpoint.
- Guides decisions about choosing UDP or TCP for balancing latency and delivery guarantees.
- Aids in interpreting telemetry fields such as OBD PIDs, odometer and fuel values within Plaspy dashboards.
- Supports planning for firmware updates, remote provisioning and carrier related changes.
- Improves ability to correlate device events with vehicle operations for diagnostics and alerts.

## Why Use Plaspy with This Protocol

Pairing the Teltonika FMM00A with Plaspy gives fleet operators fast deployment of OBD II telemetry together with cloud based tracking, events and reporting. The combination of plug and play installation, GNSS positioning, OBD telemetry and efficient cellular connectivity makes the FMM00A well suited to rental fleets, mixed vehicle deployments and fleets that require OEM level parameters like true odometer and fuel readings.

To learn more about how Plaspy handles device communication and fleet telemetry, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and official manufacturer guidance verify information on the Teltonika website at https://www.teltonika-gps.com/ as protocol support and device implementation details can change over time.
