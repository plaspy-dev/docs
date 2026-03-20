---
slug: /tk_star/obd2_gps_tracker/protocol
id: obd2_gps_tracker-protocol
sidebar_label: Protocol
title: TK-Star - OBD2 GPS Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TK-Star OBD2 GPS Tracker connectivity and Plaspy integration for tracking and telemetry
keywords:
  - TK-Star OBD2 GPS Tracker protocol
  - TK-Star OBD2 GPS Tracker communication
  - TK-Star OBD2 GPS Tracker Plaspy
  - OBD2 GPS Tracker protocol guide
  - vehicle tracker protocol Plaspy
  - OBD2 telemetry integration
  - fleet tracking protocol
  - GPS tracker connectivity Plaspy
  - OBD2 diagnostic data tracking
  - multi constellation GPS tracker
---

# TK-Star - OBD2 GPS Tracker Protocol

This page describes the public protocol context for using the TK-Star OBD2 GPS Tracker with Plaspy. It explains how the tracker communicates in general terms, which connection endpoints Plaspy exposes for ingestion, and what to expect when integrating the plug and play OBD2 unit for real time location, multi constellation positioning, and vehicle diagnostics reporting. The emphasis is on high level protocol behavior and connection context rather than manufacturer firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices send data to the Plaspy endpoint. The TK-Star OBD2 GPS Tracker can vary in exact protocol behavior depending on firmware version, hardware revision, and manufacturer implementation, so this document focuses on the public communication facts needed to configure and connect devices to Plaspy reliably.

## Protocol Overview

At a high level the tracker reporting protocol is the set of rules and message types the OBD2 GPS Tracker uses to present GNSS positions, augmented positioning data, OBD2 diagnostics, and status information to a remote server. For Plaspy integration the protocol role is to provide consistent identifiers and telemetry so the platform can map incoming records to vehicles and fleet accounts.

- Enables continuous GNSS and assisted positioning reports so Plaspy can render live location and route history.
- Carries OBD2 diagnostic fields and ignition status when the vehicle exposes those PIDs for telemetry and maintenance workflows.
- Sends device state and alarm signals such as vibration tamper alerts and low backup battery notifications for event handling.
- Provides identifying information that lets Plaspy tie incoming messages to a specific device or vehicle without manual protocol selection.
- Supplies the telemetry payloads that Plaspy ingests for mapping, alerts, and historical queries.

## How Plaspy Detects the Protocol

Plaspy centralizes device connectivity on a common endpoint and port so the platform can accept messages from many different tracker models and detect the reporting format automatically. In most cases you do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint correctly.

- Plaspy receives tracker data at the shared server domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices use the same Plaspy port, which simplifies configuration and onboarding for heterogeneous fleets.
- Plaspy automatically detects the tracker protocol once the device begins reporting to the platform, reducing manual setup steps.
- Proper device configuration to point at the Plaspy endpoint is the primary requirement; automatic detection handles supported variations.
- If needed, device identifiers included in reports help Plaspy match the incoming stream to the correct account and vehicle record.

## Transport and Connection Context

Transport choices affect how the tracker delivers messages to Plaspy but do not change the high level purpose of the protocol. The TK-Star OBD2 GPS Tracker may be configured to use either of the common transports supported by Plaspy depending on device firmware and operator settings.

- The device may be configured to send data over UDP or TCP on port 8888 depending on device support and user configuration.
- Devices may be pointed at the Plaspy server domain d.plaspy.com or directly at the server IP 54.85.159.138 for reporting.
- Plaspy accepts connections on the same port for all supported devices which simplifies firewall and network planning.
- Transport selection can influence delivery characteristics like reliability and latency but does not change the telemetry fields the tracker provides.
- Ensure mobile network or vehicle network policies allow outbound UDP or TCP traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available fields, and optional features; always validate behavior after a firmware update.
- Hardware revisions may expose different OBD2 PIDs or sensor sets which affects what telemetry the tracker can report to Plaspy.
- Manufacturer side configuration options such as transport selection or assisted positioning can alter how and when data is reported.
- Network operator limitations and APN settings can impact device connectivity to Plaspy even when protocol compatibility is correct.
- When integrating at scale, test a small sample of units to confirm that the expected telemetry and alarm events arrive at Plaspy as intended.
- Verify device default reporting interval and alarm triggers to ensure they meet operational needs for real time monitoring or historical logging.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps operators configure devices, diagnose connectivity issues, and tune telemetry for operational needs. Clear knowledge of what the device reports and how it connects to Plaspy reduces onboarding time and improves long term reliability.

- Speeds initial setup by ensuring devices are pointed at the correct Plaspy endpoint and transport.
- Helps troubleshoot missing telemetry by clarifying whether the issue is network, transport selection, or firmware behavior.
- Allows fleet managers to align reporting intervals and event triggers with monitoring and alerting policies in Plaspy.
- Supports better maintenance planning when OBD2 diagnostics and fault codes are mapped into Plaspy workflows.
- Reduces false alarms and improves response when tamper and movement alerts are understood in the context of the tracker protocol.

## Why Use Plaspy with This Protocol

Using the TK-Star OBD2 GPS Tracker with Plaspy gives organizations straightforward vehicle visibility and fleet telemetry without complex wiring. The plug and play OBD2 form factor together with multi constellation GNSS and WiFi LBS augmentation helps maintain reliable location updates, and Plaspy collects OBD2 diagnostics, tamper alerts, and movement events into a single operational view.

Plaspy simplifies connectivity by providing a shared ingestion endpoint at d.plaspy.com and 54.85.159.138 on port 8888, using the same port for all supported devices and automatically detecting the tracker protocol when devices report. To learn more about Plaspy and the platform capabilities visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and manufacturer guidance verify the official documentation from TK Star at https://www.tk-star.com/ .
