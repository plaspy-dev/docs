---
slug: /teltonika/ftm880/protocol
id: ftm880-protocol
sidebar_label: Protocol
title: Teltonika - FTM880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FTM880 and how it communicates with Plaspy for reliable GPS tracking and telemetry
keywords:
  - Teltonika FTM880 protocol
  - FTM880 GPS protocol
  - Teltonika FTM880 Plaspy
  - FTM880 communication protocol
  - FTM880 tracking protocol
  - Teltonika GPS protocol compatibility
  - Battery mounted GPS tracker protocol
  - Fleet tracking Teltonika FTM880
  - Plaspy device protocol
  - Asset tracking FTM880
---

# Teltonika - FTM880 Protocol

This page explains the public protocol context for using the Teltonika FTM880 with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms so fleet managers and technical teams can understand connection behavior, what to expect from data reporting, and where to validate device settings before deployment. The FTM880 is a battery mounted, rugged tracker designed for long life and deployment on trailers, heavy machinery, and remote assets, and this page uses that device description as the technical grounding for protocol-level guidance.

Plaspy uses shared connection settings for supported devices and automatically detects tracker protocols when a device reports to the Plaspy endpoint. For Plaspy the public server is reachable at d.plaspy.com and 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888, and Plaspy uses the same port for all supported devices while detecting the appropriate tracker protocol automatically. Exact protocol behavior and available telemetry can vary by firmware version, hardware revision, and manufacturer implementation so you should confirm device specific details in official documentation.

## Protocol Overview

At a high level the FTM880 tracker reporting protocol provides the mechanism for the device to identify itself, deliver GNSS position and telemetry, and send event or status messages to a backend server such as Plaspy. Protocol behavior determines how the tracker encodes identifiers, timestamps, and telemetry so that Plaspy can process live positions, geofence events, and diagnostics for fleet workflows.

- Enables device identification and session establishment so Plaspy can attribute incoming messages to the correct asset.
- Transports GNSS position, timestamp, and available telemetry such as digital input states and battery status for use in Plaspy reports.
- Carries event messages such as motion, geofence transitions, or alarms that trigger platform notifications and rules.
- Supports both continuous reporting and power saving periodic updates appropriate for battery mounted deployments.
- Works with remote device management systems to coordinate firmware updates and provisioning while the device remains registered to Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a single shared endpoint and port and automatically determines the incoming tracker protocol based on the data the device sends during initial reporting. In most cases you do not need to select a protocol in Plaspy if the FTM880 is configured to report to the Plaspy address and port.

- Plaspy public endpoint is d.plaspy.com and the related server address is 54.85.159.138.
- Plaspy listens on port 8888 for device reports and uses the same port for all supported trackers.
- Devices may report over UDP or TCP on port 8888 depending on tracker configuration and network conditions.
- When the FTM880 is pointed to d.plaspy.com or 54.85.159.138 on port 8888 Plaspy will accept the connection and infer the protocol from the device reporting behavior.
- Proper device configuration to point at the Plaspy endpoint is typically all that is required for automatic protocol detection.

## Transport and Connection Context

Transport context governs how the FTM880 reaches Plaspy and how reliably messages are delivered. The FTM880 family supports efficient cellular telemetry modes suited to battery operation, and the tracker can be set to communicate using either UDP or TCP depending on network and configuration choices.

- Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- Plaspy accepts connections at the domain d.plaspy.com and the numeric address 54.85.159.138.
- Port 8888 is used consistently across all devices supported by Plaspy which simplifies device provisioning.
- UDP may be chosen for lower overhead periodic updates while TCP can be selected where reliable delivery or session persistence is preferred.
- Ensure device APN and SIM settings allow outbound connections to the Plaspy endpoint and that any network firewalls permit traffic to port 8888.

## Protocol Compatibility Notes

- Firmware variations across FTM880 SKUs can affect which telemetry fields are available and how the device reports them; check firmware release notes for differences.
- Hardware revisions and regional variants may expose different IO options or cellular band support that influence telemetry and remote control features.
- Transport selection between UDP and TCP can change behavior for retries, session handling, and data delivery timing; choose the transport that aligns with your deployment needs.
- Manufacturer remote management and provisioning tools may interact with device reporting; coordinate FOTA and platform provisioning to avoid conflicts.
- Devices in end of life status or near replacement should be validated for continued compatibility before large scale procurement.
- Always validate critical integrations against official manufacturer documentation and test devices in a controlled environment before production rollout.

## Why Protocol Understanding Matters

Understanding how the FTM880 communicates with Plaspy improves installation success, troubleshooting speed, and the reliability of telemetry delivered to your fleet workflows. Knowledge of the reporting and transport context helps teams tune device settings for battery life, event responsiveness, and network efficiency.

- Ensures correct device addressing so the tracker reports to d.plaspy.com or 54.85.159.138 on port 8888 and is detected by Plaspy.
- Helps choose between UDP and TCP to balance reliability and power consumption for battery mounted use cases.
- Supports effective troubleshooting when position updates or events are missing by narrowing issues to network, transport, or firmware layers.
- Allows proper planning for device provisioning, firmware updates, and lifecycle management with Teltonika tools and Plaspy workflows.
- Assists in mapping required telemetry fields from the tracker to platform reports and rules used by operations teams.

## Why Use Plaspy with This Protocol

Using the Teltonika FTM880 with Plaspy gives organizations a straightforward path to collect position, event, and telemetry data from rugged battery mounted assets. The combination supports long term deployments where reduced maintenance, optimized sleep modes, and strong GNSS performance are important for reliable tracking and operational oversight. Plaspy’s automatic protocol detection and single port endpoint model simplify fleet provisioning so devices pointed to the Plaspy endpoint can begin reporting with minimal platform configuration.

To learn more about Plaspy and how it works with devices like the Teltonika FTM880 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware guidance with the manufacturer at https://www.teltonika-gps.com/ before finalizing deployments.
