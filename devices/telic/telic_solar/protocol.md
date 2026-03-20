---
slug: /telic/telic_solar/protocol
id: telic_solar-protocol
sidebar_label: Protocol
title: Telic - Telic Solar Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Telic Solar GPS tracker with Plaspy and understanding device reporting and connectivity
keywords:
  - Telic Solar protocol
  - Telic Solar GPS protocol
  - Telic Solar Plaspy
  - Telic GPS tracker protocol
  - Telic Solar tracking
  - GPS tracker communication
  - asset tracking Telic
  - container tracking solar
  - fleet tracking Plaspy
  - Bluetooth telemetry Telic
---

# Telic - Telic Solar Protocol

This page describes the public protocol context for using the Telic Solar tracker with the Plaspy platform. It explains how the tracker forwards location, interior sensor telemetry, and energy status into Plaspy and outlines the connection context you should know when preparing devices for integration.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a correctly configured device reports to the Plaspy endpoint. Exact protocol behavior and available messages can vary by Telic firmware version, hardware revision, and manufacturer configuration, so review device firmware notes and the manufacturer documentation for model specific details.

## Protocol Overview

The Telic Solar communication protocol enables the device to report GNSS location, power status and interior sensor telemetry received via its directional Bluetooth antenna to a back end such as Plaspy. The protocol governs how the tracker identifies itself to the server, how telemetry fields are presented, and how periodic or event driven reports are transmitted for ingestion by fleet platforms.

- Allows the tracker to send location fixes, timestamps, and movement events that Plaspy maps to assets.
- Carries interior sensor data received over Bluetooth so Plaspy can combine environmental telemetry with location.
- Transmits energy and solar panel metrics to help Plaspy reflect battery and availability status.
- Supports configurable reporting cadence and event triggers set in the device or Telic application.
- Enables device identification and basic health reporting so Plaspy can associate incoming data with the correct asset.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared network endpoint and automatically detects the tracker protocol when data is received. For most deployments the device is configured to forward telemetry to the Plaspy endpoint and no manual protocol selection inside Plaspy is required.

- Plaspy uses a single server endpoint to receive device reports and performs automatic protocol detection.
- Devices should be configured to report to d.plaspy.com or the Plaspy server IP so incoming data reaches the platform.
- Because Plaspy automatically detects the protocol, users generally do not need to choose a protocol option inside the platform.
- Proper device configuration at the Telic application or device backend side is the key step to enable automatic detection.
- If a device does not appear in Plaspy, check device reporting settings, transport selection, and firmware compatibility as initial troubleshooting steps.

## Transport and Connection Context

Telic Solar devices are typically configured at the manufacturer or in-field to report telemetry to the Plaspy endpoint using standard transport protocols. Depending on the device configuration and firmware, the tracker may use either UDP or TCP to send reports to Plaspy on the shared reporting port.

- The device may be configured to use UDP on port 8888 or TCP on port 8888 depending on device support and configuration.
- Devices can point their reporting host to d.plaspy.com or directly to 54.85.159.138 to reach Plaspy.
- All devices in Plaspy use the same port, simplifying firewall and network configuration for fleet deployments.
- Choose UDP when low overhead is required and the device firmware supports it; choose TCP when delivery confirmation and session semantics are preferred.
- Ensure outbound access from device networks to the Plaspy endpoint is allowed for the chosen transport and port.

## Protocol Compatibility Notes

- Firmware variations can change which telemetry fields are available and how often reports are emitted.
- Hardware revisions and optional sensors such as Bluetooth interior telemetry can affect reported data and configuration options.
- Transport selection (UDP vs TCP) should match the Telic device configuration and any backend forwarding configured in the Telic tracking application.
- Manufacturer-side backend settings or Telic application customizations may modify which fields are forwarded to Plaspy.
- Validate compatibility against the Telic Solar datasheet and Telic configuration guides before large scale deployment.
- Test a representative device to confirm that location, Bluetooth sensor data, and power metrics appear correctly in Plaspy.

## Why Protocol Understanding Matters

A clear understanding of the communication protocol helps ensure reliable reporting, correct data mapping in Plaspy, and faster troubleshooting when devices do not behave as expected. Knowing which transport, reporting host, and telemetry fields are in use reduces integration time and improves long term operational reliability.

- Ensures devices are pointed to the correct Plaspy endpoint so data reaches the platform.
- Helps align device reporting cadence and event triggers with operational requirements.
- Aids in diagnosing connectivity issues related to transport, ports, or network restrictions.
- Supports accurate mapping of Bluetooth sensor readings and energy status into Plaspy dashboards.
- Guides firmware update planning to preserve needed telemetry and behavior.

## Why Use Plaspy with This Protocol

Using Telic Solar with Plaspy provides a compact, durable solution for long term tracking of containers, swap bodies, and freight wagons. The combination of Telic Solar’s solar powered energy management, IP69 rated enclosure, and directional Bluetooth sensor support delivers a low maintenance asset visibility solution that feeds location and interior telemetry into Plaspy for operational monitoring and alerts.

Plaspy’s automatic protocol detection and shared reporting endpoint simplify deployment across many devices and asset types. To learn more about integrating Telic Solar devices and to review deployment considerations, visit the Plaspy website at https://www.plaspy.com. For the latest firmware specific behavior and device implementation details verify current information on the manufacturer site https://www.telic.de.
