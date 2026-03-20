---
slug: /cantrack/6000mah/protocol
id: 6000mah-protocol
sidebar_label: Protocol
title: CanTrack - 6000mAh Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the CanTrack 6000mAh GF50 tracker and how it communicates with Plaspy for reliable asset and fleet tracking
keywords:
  - CanTrack 6000mAh protocol
  - CanTrack GF50 protocol
  - CanTrack 6000mAh GPS protocol
  - CanTrack 6000mAh Plaspy compatibility
  - GF50 GPS tracker protocol
  - asset tracker protocol Plaspy
  - fleet tracking protocol CanTrack
  - magnetic asset tracker protocol
  - GPS tracker protocol guide
  - Plaspy device protocol
---

# CanTrack - 6000mAh Protocol

This page provides public protocol context for using the CanTrack 6000mAh Magnetic Asset GPS Tracker model GF50 with the Plaspy platform. It focuses on how the device reports location, status, and alarms to Plaspy in general, non sensitive terms, and what to expect when integrating the tracker into your fleet or asset management workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior, reporting intervals, and available commands can vary by firmware version, hardware revision, or manufacturer configuration, so this page emphasizes communication context rather than device internals.

## Protocol Overview

The GF50 communicates telemetry, location fixes, and event notifications to a backend platform using its built in cellular modem and GNSS receiver. The communication protocol governs how the tracker identifies itself to the server, sends positional data and status, and reports alarms such as tamper, vibration, geofence breaches, and low battery.

- Enables periodic and event driven transmission of GPS fixes and device status to Plaspy for real time monitoring and historical playback.
- Carries metadata used to associate a device with an account and populate device state such as battery level, motion status, and alarm type.
- Supports multiple working modes on the device such as real time, interval, and clock wakeup which affect how and when protocol messages are generated.
- Allows the platform to receive alarm events with timestamps and location context for geofence, vibration, and anti tamper alerts.
- Provides the transportable payload that Plaspy ingests and normalizes for dashboards, alerts, and reporting without requiring users to manage low level details.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically determines the tracker protocol based on the data reported by the device. In most cases the device only needs to be configured to report to the Plaspy endpoint and the platform will map incoming telemetry to the correct device record.

- Plaspy uses a single, shared server endpoint for device reporting which simplifies device configuration.
- The platform automatically detects the tracker protocol so manual selection inside Plaspy is typically unnecessary when the device points to the correct endpoint.
- Proper device identification depends on the device sending identifying information as part of its normal reporting behavior.
- If a device does not appear, verify device server settings and that the device is allowed to reach the Plaspy endpoint from the mobile network.

## Transport and Connection Context

Connection setup and transport selection determine how the GF50 delivers protocol messages to Plaspy. The GF50 supports common cellular transports and can be configured to use the network mode and reporting method that best balance battery life and reporting frequency.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration preferences.
- Plaspy uses the same port for all supported devices which simplifies bulk deployments and configuration management.
- Selecting UDP or TCP affects delivery characteristics and may be chosen based on device firmware and operational requirements.
- Ensure the device APN and outbound connectivity allow connections to the Plaspy endpoint over the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions may alter message frequency, available fields, or optional event reporting so verify the tracker firmware when assessing compatibility.
- The GF50 is available in 2G and 4G variants; regional network support and modem firmware can influence connectivity behavior.
- Hardware revisions such as changes to GNSS or cellular modules may change how the device implements certain protocol features.
- Transport choice between UDP and TCP can be configurable and may affect retransmission and delivery semantics.
- Manufacturer side defaults and SMS configuration commands can change device reporting targets and must be validated.
- Always cross check device configuration against current manufacturer documentation when troubleshooting unexpected behavior.

## Why Protocol Understanding Matters

Understanding how the GF50 communicates with Plaspy helps ensure reliable setup, efficient battery use, and predictable alarm behavior across deployments. Awareness of the communication context reduces configuration errors and speeds up troubleshooting when devices do not appear in the platform as expected.

- Helps choose appropriate reporting mode and interval to balance battery life and telemetry needs.
- Aids in diagnosing connectivity issues by confirming transport, server address, and port settings.
- Clarifies the relationship between device alarms and the events displayed in Plaspy so alerts are actionable.
- Supports planning for firmware updates and hardware revisions that may change message content or frequency.
- Enables integration planning when correlating GF50 data with other sensors or vehicle systems in Plaspy.

## Why Use Plaspy with This Protocol

Using the CanTrack 6000mAh GF50 with Plaspy provides organizations a practical combination of long battery life, rugged mounting, and centralized visibility for asset and fleet monitoring. Plaspy ingests the tracker telemetry and exposes it through maps, historical playback, geofences, and alerting so teams can respond rapidly to theft, tamper, or operational exceptions.

If you want to learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration commands refer to the manufacturer documentation at https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
