---
slug: /eelink/tk116/protocol
id: tk116-protocol
sidebar_label: Protocol
title: EElink - TK116 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for EElink TK116 and how it communicates with Plaspy platform
keywords:
  - EElink TK116 protocol
  - TK116 GPS tracker
  - EElink protocol Plaspy
  - TK116 communication protocol
  - TK116 tracking protocol
  - GPS tracker Plaspy compatibility
  - fleet management TK116
  - motorcycle tracker TK116
  - EElink GPS compatibility
  - real time tracking TK116
---

# EElink - TK116 Protocol

This page describes the public protocol context for using the EElink TK116 with Plaspy. It focuses on how the tracker communicates with Plaspy in general, the shared connection settings used by the platform, and the aspects of device communication that are most important for successful integration and operation. This is a protocol-oriented overview intended for technical users, integrators, and fleet administrators.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 with the port 8888. The device may be configured using UDP or TCP on port 8888 and all devices in Plaspy use the same port. Exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation, so confirm device specific details with the manufacturer where needed.

## Protocol Overview

The tracker protocol defines how the TK116 reports position, telemetry, and event data to a remote server such as Plaspy. At a high level the protocol ensures the device can identify itself, send usable location and status information, and deliver event alerts that Plaspy can translate into real time tracking, notifications, and reports.

- Provides the basic message flow for position updates, status reports, and event notifications such as ACC, SOS, and alarms.
- Carries the identifying information that lets Plaspy associate incoming messages with a specific device record.
- Conveys telemetry and digital/analog inputs that Plaspy maps to vehicle state, alerts, and rules.
- Enables optional remote controls and commands where supported by the device and permitted by the deployment.
- Works over standard network transport to deliver messages to the Plaspy endpoint for parsing and visualization.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a unified endpoint and automatically detects the tracker protocol so users typically do not need to select a protocol manually in the platform. When a TK116 is configured to report to Plaspy, the platform uses the shared connection settings to accept and classify incoming messages.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct endpoint reference.
- The port is 8888 and Plaspy uses the same port across all supported devices for simplified setup.
- Plaspy automatically detects the tracker protocol based on the incoming messages sent to the shared endpoint.
- In most cases you only need to configure the device to point at the Plaspy endpoint and choose UDP or TCP as supported by the unit.
- If a device is not recognized automatically, checking firmware version and manufacturer settings is the usual next step.

## Transport and Connection Context

Connection context covers how the TK116 transmits data to Plaspy and what configuration options are commonly available. The TK116 communicates over 2G and can be set to deliver data using either UDP or TCP depending on device support and configuration choices.

- The device may be configured using UDP or TCP on port 8888 depending on the unit and deployment preference.
- Devices may point to d.plaspy.com or 54.85.159.138 as the server address when configuring the reporting endpoint.
- All devices in Plaspy use the same port which simplifies network rules and firewall configuration.
- Transport selection (UDP versus TCP) can influence delivery characteristics such as reliability and latency; choose the mode supported and recommended by your device and network conditions.
- Ensure the SIM and mobile network in the field support the 2G connectivity required by the TK116.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message timing, supported features, and optional fields; validate against device firmware notes.
- Manufacturer configuration options or regional variants may enable or disable features such as SOS, relay control, or microphone reporting.
- Transport choice between UDP and TCP is device dependent; confirm which transports the particular TK116 unit supports.
- Network availability for 2G services affects connectivity and should be confirmed for deployment regions.
- Validate device identity and reporting format during initial setup to ensure messages are recognized by Plaspy.
- When in doubt, consult the official manufacturer documentation and release notes to confirm device specific behavior.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure a smooth installation, reliable reporting, and accurate event handling in Plaspy. Knowing what the tracker sends and how Plaspy receives it reduces setup time and improves troubleshooting efficiency.

- Faster diagnosis of connectivity or reporting issues during initial provisioning and field deployment.
- Clearer mapping between device inputs and the alerts, geofence events, and telemetry visible in Plaspy.
- Better planning for network and SIM provisioning, especially in areas with limited 2G coverage.
- Improved confidence when enabling optional features such as relay control or SOS handling.
- Easier validation of firmware updates or configuration changes that could affect monitoring and rules.

## Why Use Plaspy with This Protocol

Using the TK116 with Plaspy gives organizations real time visibility into vehicle location, ignition and alarm events, and telemetry that supports fleet operations and security workflows. Plaspy ingests the device data sent to d.plaspy.com or 54.85.159.138 on port 8888 and presents it in dashboards, alerts, and reports so teams can act on events such as theft alarms, SOS triggers, or engine on/off cycles.

Plaspy is designed to accept device traffic on a single shared port and to automatically detect the tracker protocol, making it easier to deploy devices like the TK116 at scale. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information and firmware notes with the manufacturer at https://www.eelink.com.cn/.
