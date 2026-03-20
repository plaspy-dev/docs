---
slug: /totemtech/at08/protocol
id: at08-protocol
sidebar_label: Protocol
title: Totemtech - AT08 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Totemtech AT08 GPS tracker compatibility with Plaspy including connection and integration context
keywords:
  - Totemtech AT08 protocol
  - Totemtech AT08 GPS protocol
  - AT08 Plaspy compatibility
  - Totemtech GPS tracker protocol
  - AT08 tracking protocol
  - Plaspy tracker integration
  - vehicle tracking AT08
  - asset tracker protocol
  - magnetic GPS tracker AT08
  - fleet management Totemtech
---

# Totemtech - AT08 Protocol

This page describes the public protocol context for using the Totemtech AT08 magnetic GPS tracker with Plaspy. It focuses on how the device communicates general telemetry and GNSS location data to Plaspy and what to consider when configuring the device to report into the platform. This overview is written for fleet managers, integrators, and technical users who need clear guidance about device to server communication without exposing private implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when devices send data to the platform. Exact protocol behavior and packet contents can vary by firmware version, hardware revision, and manufacturer implementation, so this page highlights stable, public aspects of the communication context while encouraging verification against manufacturer documentation.

## Protocol Overview

The protocol used by the AT08 governs how the tracker sends GNSS positions, device telemetry, motion events, and status updates to the tracking server. In practice the protocol enables the AT08 to identify itself to Plaspy, deliver usable location and health data, and support remote configuration or firmware management where supported by the device.

- Transports GNSS coordinates and fix metadata so Plaspy can place the device on maps and in reports.
- Sends telemetry such as battery level, cellular signal status, and motion events for platform alerts and maintenance planning.
- Allows the device to be configured or commanded remotely when the manufacturer firmware supports over the air changes.
- Provides status updates used by Plaspy to detect device health and to trigger workflows like geofence alerts or anti theft notifications.
- Operates within the device firmware behavior and hardware capabilities of the AT08, including power management and sleep reporting modes.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects the tracker protocol based on the incoming data and established device behavior. When an AT08 is configured to report to Plaspy, users typically do not need to select a protocol inside Plaspy manually as long as the device is pointed to the correct server settings.

- Plaspy uses a common server endpoint and port for all supported devices to simplify configuration.
- Devices that send data to the Plaspy endpoint are identified and handled automatically by Plaspy detection logic.
- If the AT08 is configured to report properly to the Plaspy server, no manual protocol selection is normally required in the platform.
- Plaspy supports a wide variety of tracker behaviors and relies on the device to send recognizable telemetry and location frames.
- For unusual firmware variants or custom modifications, consult manufacturer guidance to ensure compatibility.

## Transport and Connection Context

Transport and connection options determine how the AT08 reaches the Plaspy servers across cellular networks. The AT08 can be configured to use either UDP or TCP depending on the device firmware and owner configuration. Understanding the endpoint and port used by Plaspy is essential when setting the tracker APN and server reporting address.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- The Plaspy server listens on port 8888 for tracker reports.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and requirements.
- All devices reporting to Plaspy use the same port to simplify configuration across different tracker models.

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported transport, and available telemetry fields; always check the device firmware level when troubleshooting.
- Hardware revisions or regional variants of the AT08 may alter supported cellular bands or power management behavior that can affect reporting intervals.
- Manufacturer configuration methods such as SMS, USB, or over the air updates may differ in capabilities and available settings.
- Selecting UDP versus TCP on the device can affect delivery behavior and should match the configuration the device firmware supports.
- Plaspy automatically detects protocol variants where possible, but custom firmware or heavily modified devices may require additional validation.
- For any device-specific commands, firmware updates, or deep protocol details, consult the official manufacturer documentation.

## Why Protocol Understanding Matters

A practical understanding of the AT08 communication protocol helps site engineers and fleet administrators set up devices correctly, diagnose connectivity issues, and maintain long term reliability when reporting into Plaspy. Knowing what the device is expected to send and how the platform receives it reduces configuration time and supports predictable monitoring.

- Ensures correct server address and transport settings so devices reliably report to Plaspy.
- Helps interpret device telemetry fields shown in Plaspy dashboards during troubleshooting.
- Supports informed choices about reporting intervals and power management for required battery life.
- Aids validation that firmware updates or hardware revisions have not altered critical reporting behavior.
- Improves communication with manufacturer support when a device does not behave as expected.

## Why Use Plaspy with This Protocol

Using the AT08 with Plaspy provides a practical path to turn durable, long battery life asset trackers into actionable fleet and logistics data. Plaspy ingests location, battery, and motion telemetry from the AT08 and makes it available for live maps, alerts, reporting, and automated workflows that support asset visibility and anti theft operations.

If you want to learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revision information, please verify the manufacturer documentation at http://www.totemtek.com/ as implementations and firmware behavior can change over time.
