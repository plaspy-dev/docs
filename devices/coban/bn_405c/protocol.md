---
slug: /coban/bn_405c/protocol
id: bn_405c-protocol
sidebar_label: Protocol
title: Coban - BN-405C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Coban BN 405C GPS tracker and how it communicates with Plaspy for real time tracking
keywords:
  - Coban BN 405C protocol
  - Coban BN 405C GPS protocol
  - BN 405C protocol Plaspy
  - BN 405C communication protocol
  - BN 405C tracking protocol
  - Coban GPS tracker protocol
  - Plaspy compatible devices
  - vehicle tracking protocol
  - fleet management tracker protocol
  - Coban BN 405C compatibility
---

# Coban - BN-405C Protocol

This page provides a public protocol context for using the Coban BN-405C tracker with Plaspy. It explains, at a high level, how the BN-405C reports location, telemetry and alarms to a platform like Plaspy and what to consider during device setup and validation. The information here is focused on non sensitive, operational details that help fleets and integrators understand device behavior without exposing private implementation specifics.

The BN-405C supports multi network cellular links and common platform transports including TCP, UDP and SMS, which enable straightforward integration with Plaspy for live location and event alerts. Plaspy accepts device reports at the shared endpoint d.plaspy.com (54.85.159.138) on port 8888. Devices may be configured to use UDP or TCP to report to that address and port. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation.

## Protocol Overview

The protocol for the BN-405C defines how the tracker conveys identity, position, status and alarm events to a server so those messages are usable by a fleet platform. In the context of Plaspy, the protocol lets the unit transmit GNSS coordinates, telemetry and event notifications that feed live maps, alerts and historical playback.

- Enables the tracker to identify itself to the server so data is associated with the correct vehicle and device record.
- Carries GNSS position reports and telemetry such as ignition status, battery level and sensor inputs for use in dashboards and alerts.
- Delivers alarm and event messages for geofence breaches, overspeed, power loss and other configured conditions.
- Supports multiple transports so devices can report via TCP, UDP or SMS depending on network and configuration choices.
- Provides a way for the platform to correlate device reports into trips, alerts and audit history without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy is built to accept reports from a wide range of tracker models while minimizing manual configuration. When a BN-405C or similar device sends messages to the Plaspy endpoint, the platform matches those incoming reports to the correct device and data model automatically.

- Plaspy receives device reports at d.plaspy.com and the same public IP 54.85.159.138 on port 8888.
- All devices supported by Plaspy use the same port, simplifying device configuration.
- Plaspy automatically detects the tracker protocol when the device is correctly pointed at the Plaspy endpoint, so users typically do not need to select a protocol inside the platform.
- Proper device configuration on the tracker side is the primary requirement to ensure automatic detection and correct device association.
- If a device is unable to reach the domain name, configuring the device to use the provided IP address can be an alternative.

## Transport and Connection Context

Transport choice affects how the BN-405C forwards messages to Plaspy and how the network handles delivery and latency. Many units support both UDP and TCP, and SMS can be used as a backup for configuration and alerts in some deployments.

- The BN-405C can be configured to use UDP or TCP on port 8888 depending on device support and deployment preferences.
- Devices may point to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138 for reporting.
- Using UDP can reduce overhead and latency for frequent position reports while TCP provides a connection oriented option where supported by the device.
- SMS remains an alternative channel for remote configuration and critical alerts when packet data connectivity is limited.
- Ensure APN and SIM provisioning are correct so the tracker can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available fields and optional features, so verify behavior for the specific firmware version in use.
- Hardware revisions and regional variants may affect available cellular bands and transport support, which in turn influence connectivity to Plaspy.
- Some features such as optional sensors, audio interfaces or camera integration require per device configuration and may rely on additional protocol elements.
- Transport selection between TCP and UDP is a configuration choice; verify the BN-405C firmware supports your preferred transport and session behavior.
- SMS based commands and fallback reporting can vary by manufacturer command set and should be validated against the device manual.
- Validate device settings and test end to end reporting to Plaspy during installation to confirm successful protocol detection and mapping.

## Why Protocol Understanding Matters

A practical understanding of the BN-405C communication protocol and transport context helps ensure a smooth integration and reliable operation with Plaspy. Knowing what the device sends and how it connects reduces downtime and simplifies troubleshooting.

- Ensures correct device configuration so reports reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps diagnose connectivity issues such as wrong APN, transport mismatch or network coverage gaps.
- Clarifies which telemetry and alarm types are available for dashboards, alerts and historical playback.
- Supports planning for firmware updates and feature rollouts that may change protocol behavior.
- Reduces ambiguity when coordinating with installers, SIM providers and the device manufacturer.

## Why Use Plaspy with This Protocol

Using the Coban BN-405C with Plaspy provides centralized visibility of vehicle position, alarms and telemetry for fleet operations, logistics and anti theft workflows. Plaspy’s automatic protocol detection and single endpoint model simplify device onboarding so teams can focus on operations rather than per device protocol selection.

Plaspy accepts reports at d.plaspy.com (54.85.159.138) on port 8888 and uses the same port for all supported devices. If you want to learn more about Plaspy and how it works with compatible trackers like the BN-405C, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and hardware variants, please verify information on the manufacturer website https://www.coban.net/ since protocol support and firmware behavior can change over time.
