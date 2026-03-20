---
slug: /globalsat/lt_520az/protocol
id: lt_520az-protocol
sidebar_label: Protocol
title: GlobalSat - LT-520AZ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for GlobalSat LT 520AZ and how it communicates with Plaspy using shared server settings and automatic detection
keywords:
  - GlobalSat LT 520AZ protocol
  - GlobalSat LT 520AZ GPS protocol
  - LT 520AZ Plaspy compatibility
  - LT 520AZ Amazon Sidewalk
  - GPS tracker protocol
  - asset tracking protocol
  - vehicle tracking protocol
  - Plaspy device protocol
  - GNSS BLE tracker
  - long term asset tracker
---

# GlobalSat - LT-520AZ Protocol

This page describes the public protocol context for using the GlobalSat LT-520AZ with Plaspy. It focuses on how the tracker communicates in a way that Plaspy can ingest location, motion, and battery telemetry without revealing firmware internals or proprietary packet structures.

The LT-520AZ combines GNSS positioning with Bluetooth Low Energy and an integrated accelerometer for mixed indoor and outdoor tracking on Amazon Sidewalk. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always validate device settings against official manufacturer materials for firmware specific details.

## Protocol Overview

The protocol for the LT-520AZ defines how the device reports telemetry to a remote server and how that telemetry is expressed at a high level for ingestion by platforms such as Plaspy. In practice this means the tracker identifies itself, sends periodic or event driven location and motion information, and reports battery state in a form the server can interpret.

- Allows the LT-520AZ to send GNSS fixes and BLE assisted detections that Plaspy can use for location plotting and event generation.
- Enables motion and stop events from the onboard accelerometer to be reported to Plaspy for route and idle analysis.
- Carries battery level or estimation information so Plaspy can trigger maintenance alerts and lifecycle reports.
- Supports configurable reporting intervals and event triggers so deployments can balance battery life and update frequency.
- Provides the necessary identifiers and telemetry fields so Plaspy can associate each message with the correct device and account.

## How Plaspy Detects the Protocol

Plaspy receives data at a single, shared server endpoint and port for all supported devices and automatically determines the tracker protocol based on the inbound data stream. Because Plaspy performs automatic protocol detection, users typically do not need to manually select a protocol in the platform if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com which devices can point to for reporting.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative endpoint if desired.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device support and deployment preferences.
- Plaspy automatically detects the tracker protocol so correct device mapping normally occurs when reporting is configured properly.

## Transport and Connection Context

Connection context is focused on how the LT-520AZ reaches the Plaspy endpoint rather than on the internal packet structure. The tracker may use either UDP or TCP transport to send telemetry, and it can be directed to the Plaspy domain or IP address depending on site configuration.

- Devices may be configured to use UDP or TCP on port 8888 for communication with Plaspy.
- Devices can point to d.plaspy.com or to 54.85.159.138 as the server destination.
- Plaspy uses a single shared port across all devices to simplify deployment and firewall configuration.
- Choice of UDP versus TCP can affect delivery characteristics such as retransmission and latency depending on network conditions.
- Network routing, DNS resolution of d.plaspy.com, and local firewall rules should allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change how the device formats or schedules telemetry reports; check firmware notes before large deployments.
- Hardware revisions or SKU variants may expose different configuration options such as transport selection or reporting granularity.
- Manufacturer side configuration or provisioning for Amazon Sidewalk may affect what data is delivered to Plaspy and how frequently.
- Selecting UDP or TCP during device configuration can influence reliability and battery usage depending on network environment.
- Validate device identifiers and provisioning settings to ensure Plaspy correctly associates inbound data with the intended asset.
- When in doubt, consult the official GlobalSat documentation for device and firmware specific details before changing network endpoints.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful device onboarding, reliable telemetry delivery, and effective troubleshooting when integrating the LT-520AZ with Plaspy. Clear expectations about transport, addressing, and the kinds of telemetry the device sends reduce setup time and improve long term reliability.

- Helps ensure devices are configured to report to d.plaspy.com or 54.85.159.138 on the correct port so telemetry reaches Plaspy.
- Makes it easier to choose UDP or TCP based on network stability and power consumption trade offs.
- Assists with diagnosing missing data or unexpected report cadence by checking device configuration and firmware version.
- Supports planning for battery life and maintenance by understanding reporting intervals and event driven transmissions.
- Improves confidence that motion, GNSS, BLE, and battery data will be available to Plaspy dashboards and alerts when devices are configured properly.

## Why Use Plaspy with This Protocol

Using the LT-520AZ with Plaspy gives organizations a practical way to combine long life, rugged hardware and hybrid positioning data into a single fleet or asset visibility solution. Plaspy ingests the GNSS fixes, BLE assisted detections, accelerometer events, and battery reports the LT-520AZ provides and converts them into location views, geofence triggers, alerts, and historical reports that support operational decisions.

To learn more about how Plaspy handles device connectivity and to review platform capabilities visit https://www.plaspy.com. For the latest details on device firmware behavior and manufacturer guidance verify the LT-520AZ documentation at https://www.globalsat.com.tw/ since protocol support and device implementation can change over time.
