---
slug: /condor/th_923/protocol
id: th_923-protocol
sidebar_label: Protocol
title: Condor - TH-923 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Condor TH 923 tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - Condor TH 923 protocol
  - Condor TH 923 GPS protocol
  - Condor TH 923 Plaspy compatibility
  - Condor TH 923 communication protocol
  - TH 923 tracking protocol
  - TH 923 hybrid connectivity
  - Plaspy device integration
  - GPS tracker protocol guide
  - fleet tracking Condor TH 923
  - maritime tracking TH 923
---

# Condor - TH-923 Protocol

This page provides public protocol context for using the Condor TH-923 tracker with the Plaspy platform. It explains how the device communicates with Plaspy at a high level, what connection settings are commonly used, and what to consider when configuring and troubleshooting reporting from the TH-923. The aim is to help technical users and fleet managers understand the communication role without exposing private implementation details.

The TH-923 is a hybrid device that uses cellular networks with automatic failover to the Iridium satellite network, so continuous location and event data can be delivered to Plaspy across urban and remote environments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always consult the device manufacturer for firmware specific behavior.

## Protocol Overview

At a conceptual level, the TH-923 communication protocol defines how the tracker identifies itself, reports position and status, and delivers telemetry to a remote server. The protocol is the mechanism that lets Plaspy receive location fixes, alerts, and device status so fleet operations can remain informed in real time.

- Facilitates delivery of location and event telemetry from the tracker to Plaspy for mapping, history, and alerting.
- Conveys device identity and timestamps so Plaspy can associate messages with the correct asset and chronological record.
- Transports status fields such as ignition, input events, and sensor values when the device supplies them.
- Supports delivery under a hybrid connectivity model where cellular is primary and Iridium provides failover for continuous reporting.
- Ensures the device can send geofence triggers and motion alerts that feed into Plaspy notifications and workflows.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Detection happens at the platform edge so users generally do not need to manually select a protocol in the Plaspy interface when the TH-923 is pointing to the proper Plaspy server.

- Plaspy server domain is d.plaspy.com which is the recommended hostname for device reporting.
- Plaspy server IP is 54.85.159.138 which can be used if DNS is not available during configuration.
- The port is 8888 and Plaspy uses this same port across all supported devices.
- Plaspy automatically detects the tracker protocol once messages arrive at the shared endpoint and port.
- In most deployments, you only need to set the TH-923 to report to the Plaspy endpoint and the platform will identify the protocol.

## Transport and Connection Context

Connection context describes how the TH-923 sends its protocol messages to Plaspy rather than the internal structure of those messages. The device supports hybrid transport configurations to ensure reliable delivery from cellular or satellite paths to the Plaspy endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on installer preference and firmware support.
- Devices may point to d.plaspy.com or to the IP address 54.85.159.138 as the destination server.
- All devices in Plaspy use the same port which simplifies server settings and reduces configuration variation across fleets.
- Hybrid operation means the active transport may switch between cellular and Iridium links while still targeting the same Plaspy endpoint.
- Ensure that network firewalls and operator APN policies allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888 for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, field names, or optional telemetry elements. Verify the tracker firmware shipping with your unit.
- Hardware variants or accessory packages may expose different inputs or sensors that affect which telemetry fields are present.
- Manufacturer side settings may allow choosing TCP or UDP as the transport; confirm the preferred transport for your deployment.
- Satellite failover behavior is implemented by the device and can affect message frequency and size when operating over Iridium.
- Validate that the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure messages reach Plaspy.
- Consult official Condor documentation for firmware and feature differences before assuming full feature parity across all TH-923 units.

## Why Protocol Understanding Matters

Understanding how the TH-923 communicates with Plaspy helps ensure a smooth setup, reliable operations, and effective troubleshooting when telemetry or alerts do not appear as expected. A clear view of transport and protocol behavior reduces time spent diagnosing connectivity issues and improves long term reliability for critical assets.

- Helps verify that device reporting settings point to the correct Plaspy endpoint and port so data reaches the platform.
- Makes it easier to interpret device behavior during cellular to satellite failover and to adjust reporting intervals or power policies.
- Supports faster troubleshooting of network or firewall issues by confirming transport and destination details.
- Aids in planning for integrations that depend on specific telemetry fields such as ignition, motion, or sensor inputs.
- Clarifies when a device firmware update or configuration change from the manufacturer is required to enable a desired feature.

## Why Use Plaspy with This Protocol

Using the Condor TH-923 with Plaspy gives organizations persistent visibility for high value and remote assets by combining resilient communications hardware with a platform that ingests and displays telemetry in real time. The TH-923’s cellular primary link and Iridium backup help maintain tracking continuity that is important for maritime operations, long haul logistics, and remote site monitoring.

If you want to learn more about how Plaspy works with devices like the TH-923, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and installation instructions consult the manufacturer at https://condorskyseeker.com/ since protocol support and device behavior can change over time and should be verified against official documentation.
