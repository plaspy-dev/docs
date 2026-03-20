---
slug: /meitrack/mt_90/protocol
id: mt_90-protocol
sidebar_label: Protocol
title: Meitrack - MT-90 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Meitrack MT 90 and how it communicates with Plaspy using shared connection settings
keywords:
  - Meitrack MT 90 protocol
  - Meitrack MT 90 GPS protocol
  - MT 90 tracker communication
  - MT 90 protocol Plaspy
  - Meitrack personal tracker protocol
  - GPS tracker compatibility Plaspy
  - MT 90 device reporting
  - Meitrack tracking protocol guide
  - MT 90 integration guide
  - Meitrack tracking compatibility
---

# Meitrack - MT-90 Protocol

This page describes the public protocol context for using the Meitrack MT-90 personal GPS tracker with Plaspy. It covers how the MT-90 communicates at a high level, what role the reporting protocol plays in device integration, and what to consider when configuring the device to send location and event data to Plaspy. The MT-90 V4 is a compact personal tracker with extended battery life, man down alarm, two way audio, and an IP65 rating, making it suitable for a range of monitoring use cases.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on safe, public information about connection and compatibility rather than firmware specific details.

## Protocol Overview

The communication protocol of a tracker defines how the device identifies itself, reports position and status, and delivers alarms and telemetry to a server. For the MT-90 these protocol functions enable Plaspy to receive periodic location updates, emergency alarms such as man down, and basic device status for monitoring and historical reporting.

- Enables device identification so Plaspy can associate incoming reports with the correct MT-90 unit.
- Carries periodic GPS location and timestamp data used by Plaspy for mapping and history.
- Transmits alarm and event signals such as man down, low battery, and movement alerts to trigger notifications.
- Provides audio or listen in status indicators when supported by the device and configured.
- Allows configuration commands and remote queries in environments where the manufacturer supports server side management.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many tracker models while minimizing manual configuration for end users. When an MT-90 is correctly pointed to the Plaspy endpoint and port, Plaspy attempts to identify the device protocol automatically and process the data for that unit.

- Plaspy receives device reports on the shared endpoint domain d.plaspy.com.
- The platform also accepts connections directly to the server IP 54.85.159.138 when needed.
- All devices use the same port on Plaspy which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol manually.
- If a tracker is configured to report correctly to the Plaspy endpoint, the device should appear and identify itself without additional protocol selection inside Plaspy.

## Transport and Connection Context

Transport settings determine how the MT-90 sends its reports to Plaspy and are part of the device configuration. The MT-90 can be set to use either UDP or TCP depending on the device firmware and the installer preference.

- The MT-90 may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can point to the Plaspy server using the domain name d.plaspy.com or the direct server IP 54.85.159.138.
- Port 8888 is used across all devices supported by Plaspy to provide a uniform connection point.
- Choosing UDP or TCP affects delivery behavior at the transport level but does not change how Plaspy detects the protocol.
- Ensure the device APN and outbound network settings allow connections to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change how a Meitrack device implements certain messages or optional features, so behavior may vary between MT-90 units.
- Hardware variants and regional models sometimes include or omit features such as external sensors or audio, which affects what the protocol reports.
- Transport selection between UDP and TCP should match what the device firmware supports and the network environment provides.
- Manufacturer server command support and remote configuration capabilities depend on the specific MT-90 firmware.
- Always validate an individual unit by sending test reports to the Plaspy endpoint and confirming it appears correctly in the platform.
- Refer to official manufacturer documentation when verifying feature level compatibility for a given firmware build.

## Why Protocol Understanding Matters

Knowing how the MT-90 communicates with a server helps ensure a smooth setup, reliable monitoring, and faster troubleshooting when issues occur. A practical understanding of the reporting protocol and connection context reduces guesswork and improves uptime.

- Helps confirm the device is pointed to the correct Plaspy endpoint and port for consistent reporting.
- Makes it easier to interpret device behavior such as reporting intervals, alarm triggers, and offline conditions.
- Speeds troubleshooting by narrowing down whether an issue is transport level, configuration related, or firmware dependent.
- Assists in planning battery and reporting strategies for use cases that require long standby times.
- Informs decisions about whether additional accessories or configuration are needed to support required features.

## Why Use Plaspy with This Protocol

Using the Meitrack MT-90 with Plaspy provides a straightforward way to turn device reports into actionable location views, alerts, and historical traces. The MT-90’s combination of long battery life, man down alarm, and two way audio is a fit for personal safety and field monitoring scenarios, and Plaspy receives and normalizes incoming reports so they can be used for live tracking and reporting workflows.

To learn more about Plaspy and how the platform processes tracker reports visit https://www.plaspy.com. Please verify the latest device specific protocol documentation, firmware behavior, and implementation details on the manufacturer site https://www.meitrack.com/ as protocol support and firmware features can change over time.
