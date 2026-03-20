---
slug: /castel/pt_720/protocol
id: pt_720-protocol
sidebar_label: Protocol
title: Castel - PT-720 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Castel PT-720 GPS tracker and how it connects to Plaspy using shared Plaspy settings
keywords:
  - Castel PT 720 protocol
  - Castel PT 720 GPS protocol
  - PT 720 tracker Plaspy compatibility
  - Castel kids GPS tracker protocol
  - PT 720 communication protocol
  - PT 720 tracking protocol
  - Castel PT 720 positioning LBS WIFI GPS
  - PT 720 SOS and geofence protocol
  - Plaspy device protocol compatibility
  - Plaspy tracker integration
---

# Castel - PT-720 Protocol

This page describes the public protocol context for using the Castel PT-720 Kids GPS Tracker Watch with Plaspy. It summarizes how the PT-720 communicates position, alerts, and basic device state in a way that is useful for integration into a fleet or monitoring platform. The PT-720 is a wearable device for children with features such as dual way talk, GPS LBS and WIFI positioning, SOS alerts, geofencing, historical routes, and a pedometer. This page focuses on protocol level concepts that help the device report usable data to Plaspy without exposing manufacturer implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports correctly to the Plaspy endpoint. Plaspy servers are reachable at d.plaspy.com and at the public IP 54.85.159.138 using port 8888. Devices may be configured to use UDP or TCP on port 8888 and Plaspy uses the same port for all supported devices. Exact message timing, available fields, and behavior can vary by device firmware, hardware revision, and manufacturer implementation, so it is important to confirm device specific details where needed.

## Protocol Overview

At a high level, the PT-720 device reporting protocol defines how the wearable packages location fixes, alerts, and status so a backend service can interpret them. The protocol sits between the device hardware and Plaspy and makes it possible to deliver position updates, SOS events, and simple telemetry from the watch to the platform.

- Enables the PT-720 to report GPS LBS and WIFI based positions to Plaspy so location is visible in the platform.
- Carries alert and event signals such as SOS presses, geo fence triggers, and incoming call logs to a server for notification handling.
- Provides basic identification and state information so Plaspy can associate incoming messages with the correct device record.
- Transports compact telemetry that supports battery status, step count, and simple device health indicators.
- Allows Plaspy to receive periodic updates and historical data used for route reconstruction and reporting.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a single shared endpoint and to identify the communication format when a properly configured device connects. If the PT-720 is set to report to the Plaspy endpoint, the platform will automatically detect how to interpret messages for that device without requiring manual protocol selection by the user.

- Devices should be configured to report to d.plaspy.com or to the IP 54.85.159.138 on port 8888.
- Plaspy supports both UDP and TCP reporting on the same port and uses that consistency to simplify onboarding.
- When the PT-720 reports its first messages, Plaspy associates the device ID with an account and applies the detected protocol handling automatically.
- Manual protocol selection inside Plaspy is typically unnecessary when the device is configured to send to the Plaspy endpoint.
- If a device does not appear to communicate correctly, checking device reporting settings and firmware versions is the first troubleshooting step.

## Transport and Connection Context

The transport context is focused on how the PT-720 establishes a network path to Plaspy rather than the specific contents of each message. Understanding the transport helps with firewall configuration and basic connectivity tests.

- The device may be configured to use either UDP or TCP on port 8888 depending on firmware and configuration options.
- Plaspy accepts reports addressed to d.plaspy.com as well as the direct IP 54.85.159.138 on port 8888.
- All devices on Plaspy use the same reporting port, which simplifies network rules and routing for large fleets.
- Choosing UDP or TCP influences reliability and retransmission behavior at the transport layer but does not change how Plaspy detects the device protocol.
- Ensure that network equipment and firewalls allow outbound and inbound traffic as required for the chosen transport to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message frequency, available fields, or event behavior, so compatibility should be confirmed after firmware updates.
- Hardware revisions or regional variants of the PT-720 may have slight differences in supported positioning sources or event sets.
- Manufacturer settings may allow choosing UDP or TCP; select the transport supported by your network and confirm Plaspy receives the messages.
- Device configuration (APN, SIM provisioning, and server address) must be set to the Plaspy endpoint to enable automatic detection.
- Validate compatibility against the latest Castel documentation when unusual behavior is observed.
- For any integration questions, verify device identifiers match entries in Plaspy so data associates with the correct account.

## Why Protocol Understanding Matters

Understanding how the PT-720 talks to a backend service helps administrators and integrators set up reliable reporting, diagnose issues, and plan for updates to device fleets. Knowing the transport and general protocol role reduces setup time and improves long term operational visibility.

- Speeds initial setup by clarifying which server address and transport the device should use to reach Plaspy.
- Helps troubleshoot missing data or intermittent reports by isolating transport, configuration, and device firmware factors.
- Supports decisions about network policies and firewall rules by focusing on a single shared port used by Plaspy.
- Makes it easier to validate that SOS alerts, geofence events, and historical routes are arriving and being processed.
- Reduces uncertainty when devices are updated or replaced by outlining where behavior differences commonly occur.

## Why Use Plaspy with This Protocol

Using the Castel PT-720 with Plaspy provides a practical way to monitor wearable trackers intended for children while leveraging a platform that automatically accepts and recognizes supported tracker messages. Plaspy’s single endpoint approach simplifies deployment for organizations that manage multiple device models and reduces per device configuration complexity.

If you want to learn more about how Plaspy supports tracker devices and to review platform features, visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and manufacturer specific instructions, please verify information with Castel at http://www.castelecom.com/ as protocol support and firmware behavior can change over time.
