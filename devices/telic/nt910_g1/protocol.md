---
slug: /telic/nt910_g1/protocol
id: nt910_g1-protocol
sidebar_label: Protocol
title: Telic - NT910-G1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Telic NT910 G1 integration with Plaspy covering connection and compatibility notes
keywords:
  - Telic NT910 G1 protocol
  - Telic NT910 G1 GPS protocol
  - Telic NT910 G1 communication protocol
  - Telic NT910 G1 tracking protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - NT910 G1 LTE Cat M1 NB2
  - IoT asset tracking
  - fleet management GPS protocol
  - low power GPS tracker
---

# Telic - NT910-G1 Protocol

This page describes the public protocol context for using the Telic NT910-G1 terminal with Plaspy. It focuses on how the device reports telemetry and status to Plaspy and what connection settings are required for standard integration. The guidance here is intended for administrators, integrators, and technical evaluators preparing devices for Plaspy ingestion.

The NT910-G1 is a compact industrial IoT terminal built for low-data, ultra-low-power deployments and is fully Plaspy compatible for fast integration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. For device specific behaviour consult the manufacturer documentation for the latest firmware notes.

## Protocol Overview

At a high level, the NT910-G1 device protocol determines how the terminal packages telemetry, location, diagnostics, and peripheral data for delivery to a backend service such as Plaspy. The protocol's role is mainly to ensure the server receives identifiable, time stamped, and decodeable information so that Plaspy can present location, status, and alerting in its dashboards.

- Provides a way for the device to identify itself and its reporting cadence to the backend.
- Encodes telemetry and sensor readings so Plaspy can extract location, status, and diagnostic fields.
- Supports periodic and event driven reporting suitable for low power LTE Cat M1 NB2 and 2G fallback scenarios.
- Enables device management workflows such as telemetry driven alerts and remote firmware updates when combined with FOTA support.
- Supplies the data elements Plaspy needs to map a device to a vehicle, asset, or monitoring profile for reporting and geofencing.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by the reporting device. In most deployments you do not need to select a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint using the correct network settings.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888.
- Plaspy automatically detects the tracker protocol so manual selection is typically unnecessary for properly configured devices.
- Devices that send telemetry to d.plaspy.com on the configured port will be processed by Plaspy ingest pipelines.
- Ensure the device uses a stable APN and cellular connectivity profile so that reports reliably reach the Plaspy endpoint.
- If integration issues arise, verify device reporting settings and timestamps to help Plaspy correlate inbound messages.

## Transport and Connection Context

Connection choices and transport behavior are determined by device capabilities and configuration options on the NT910-G1. The terminal supports low bandwidth cellular transports that are well suited to periodic reporting, and administrators can configure the transport protocol according to network and firewall constraints.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy endpoint for data reporting.
- The port is 8888 and All devices in Plaspy use the same port for inbound telemetry.
- Choose UDP for minimal session overhead where allowed by network policies, or TCP where reliable delivery and ordered frames are preferred.
- Confirm carrier and APN settings to ensure the NT910-G1 can reach d.plaspy.com from the deployed network region.

## Protocol Compatibility Notes

- Firmware revisions can influence reporting fields, available telemetry items, and timing behavior; verify the device firmware version during integration.
- Hardware revisions or regional module variants may alter supported bands and network fallbacks which can affect connectivity and reporting frequency.
- Manufacturer configuration parameters may expose transport selection choices such as UDP versus TCP and server destination settings.
- FOTA support on the NT910-G1 can change protocol behavior after an update; schedule validation after any firmware upgrades.
- Validate compatibility by testing a device against the Plaspy endpoint in a controlled environment before large scale rollout.
- Always cross reference manufacturer release notes for device specific details that affect protocol behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the NT910-G1 improves setup success, accelerates troubleshooting, and helps maintain reliable device reporting over time. Knowledge of how the device formats and delivers data enables more effective monitoring and fewer missed events.

- Simplifies initial configuration by matching device reporting settings to Plaspy expectations.
- Speeds diagnosis of connectivity issues by isolating transport, DNS, or APN related problems.
- Helps interpret intermittent reports when devices use power saving modes or long reporting intervals.
- Improves planning for firmware updates and field maintenance when protocol behavior may change.
- Supports data integrity checks and mapping of telemetry fields to Plaspy dashboards.

## Why Use Plaspy with This Protocol

Using the NT910-G1 with Plaspy provides a practical, low-bandwidth approach to fleet and asset monitoring where battery life and operational cost matter. The device’s LTE Cat M1 and NB2 capability with 2G fallback, combined with RS232 and USB interfaces and FOTA, make it a flexible choice for telemetry, sensor forwarding, and basic location reporting when paired with Plaspy.

Plaspy’s shared connection settings and automatic protocol detection reduce integration friction so teams can focus on deployment and operations rather than custom server configuration. To learn more about Plaspy and how it can support deployments with devices like the NT910-G1 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer at https://www.telic.de.
