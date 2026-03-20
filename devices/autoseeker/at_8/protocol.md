---
slug: /autoseeker/at_8/protocol
id: at_8-protocol
sidebar_label: Protocol
title: Autoseeker - AT-8 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Autoseeker AT-8 tracker and how it communicates with Plaspy for reliable animal telemetry
keywords:
  - Autoseeker AT-8 protocol
  - Autoseeker AT-8 GPS protocol
  - Autoseeker AT-8 protocol for Plaspy
  - AT-8 tracking protocol
  - Autoseeker animal tracker protocol
  - Plaspy tracker compatibility
  - GPS tracker communication
  - Livestock GPS protocol
  - 4G CAT-1 tracker protocol
  - AT-8 Plaspy integration
---

# Autoseeker - AT-8 Protocol

This page describes the public protocol context for using the Autoseeker AT-8 4G GPS Animal Tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level, what to expect when integrating AT-8 units into a Plaspy deployment, and which connection settings are used for device reporting. The AT-8 is purpose built for large animal deployments, offering long battery life, rugged IP67 housing, configurable reporting modes, and retrieval aids that make it well suited to ranch and pastoral use cases.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For public Plaspy communication, devices report to the Plaspy server at d.plaspy.com (also reachable at 54.85.159.138) using port 8888. The AT-8 may be configured to use UDP or TCP on port 8888 depending on device configuration and network conditions. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so always confirm device specific details with the manufacturer when required.

## Protocol Overview

The device protocol is the set of rules the AT-8 uses to send location fixes, status, and telemetry to a backend service such as Plaspy. In practice the protocol enables the tracker to identify itself, report GNSS fixes and battery and device status, and support features such as configurable reporting intervals and retrieval aids.

- Enables the AT-8 to transmit GNSS fixes and telemetry to Plaspy for live position and history playback.
- Carries device status such as battery level and mode selection so Plaspy can surface alerts and maintenance needs.
- Supports configurable reporting modes that balance update cadence with battery conservation for long deployments.
- Provides signals tied to retrieval aids (buzzer and illumination) that can be acted on from a monitoring platform.
- Lets the device identify itself so Plaspy can associate incoming reports with the correct tracker record.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and uses that incoming data to automatically determine the correct protocol for each device. In most cases a properly configured AT-8 that sends reports to the Plaspy endpoint will be recognized without manual protocol selection in the Plaspy interface.

- Devices report to the Plaspy server domain d.plaspy.com or the public IP 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices which simplifies device configuration.
- Plaspy automatically detects the tracker protocol when reports arrive at the shared endpoint.
- Users typically do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Proper device identification on first reports ensures the tracker is associated with the correct Plaspy account and device record.

## Transport and Connection Context

The AT-8 supports cellular uplink and can be configured to send reports over either UDP or TCP depending on device firmware and network conditions. Plaspy listens for incoming reports on port 8888 and accepts connections to the domain d.plaspy.com or the IP 54.85.159.138.

- The device may be configured to use UDP or TCP on port 8888 based on deployment and firmware options.
- Devices commonly point to d.plaspy.com as the reporting host; the IP address 54.85.159.138 is also a reachable Plaspy endpoint.
- Plaspy uses the same port 8888 for all devices to streamline configuration across heterogeneous fleets.
- Choice of UDP versus TCP can affect delivery characteristics but is determined by device settings and network behavior.
- Ensure carrier and network settings on the AT-8 allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields, or configuration commands; verify firmware specifics with the manufacturer.
- Hardware revisions or regional variants may affect available radio bands, fallback behavior, or default transport selection.
- Manufacturer side settings or provisioning procedures can alter which host or protocol the device uses to report telemetry.
- Transport selection (UDP vs TCP) should be matched to device capabilities and network reliability expectations.
- Plaspy auto detection reduces manual configuration but confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 is essential.
- For custom or advanced features, consult the Autoseeker technical documentation to confirm device behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, accurate data reporting, and faster troubleshooting when using AT-8 trackers with Plaspy. Knowledge of how the device reports and what fields are typically included makes it easier to interpret behavior and tune settings for longer deployments.

- Helps confirm the device is pointing to the correct Plaspy endpoint and using the supported transport on port 8888.
- Speeds troubleshooting for intermittent reporting by clarifying expected message cadence and what telemetry should appear.
- Enables better battery life planning by aligning reporting modes with operational requirements.
- Supports correct geofence and alert configuration by ensuring timely and consistent location updates.
- Facilitates coordination with vendor support when firmware or hardware variations impact reporting.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-8 with Plaspy gives ranchers and animal asset managers centralized visibility of location history, geofence events, and device telemetry across a mixed fleet. The AT-8’s long battery life, rugged enclosure, and configurable reporting modes make it well suited to extended livestock deployments, while Plaspy provides the backend for real time monitoring, alerts, and historical analysis.

To learn more about how Plaspy supports GPS trackers like the AT-8 and to review platform features, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information on the manufacturer site https://autoseekergps.com/.
