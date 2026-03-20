---
slug: /lk_gps/lk120_4g/protocol
id: lk120_4g-protocol
sidebar_label: Protocol
title: LK-GPS - LK120-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for LK GPS LK120 4G and how it communicates with Plaspy for real time location SOS and telemetry
keywords:
  - LK GPS LK120 4G protocol
  - LK120 4G GPS protocol
  - LK GPS tracker protocol
  - LK120 4G communication protocol
  - Plaspy protocol compatibility
  - GPS tracker integration Plaspy
  - pet tracker protocol
  - tracking protocol overview
  - protocol detection Plaspy
  - device to platform communication
---

# LK-GPS - LK120-4G Protocol

This page provides a public, non sensitive overview of the communication context for the LK-GPS LK120-4G when used with Plaspy. It covers how the tracker reports location and telemetry to the platform, and how those communication choices affect setup and routine operation. The intent is to help owners and integrators understand the role of the tracker protocol without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The LK120-4G is a compact waterproof pet and personal tracker with A GPS assisted fixes, SOS, two way audio, and frequent position reporting that feeds into Plaspy for live maps, alerts, and history.

## Protocol Overview

At a high level the device protocol is the mechanism the LK120-4G uses to identify itself to a server, report position and status, and surface events such as SOS or geofence triggers. This page remains intentionally general and focuses on the communication role of the protocol rather than on proprietary message formats.

- Enables periodic and event driven position reports so Plaspy can display live location and history.
- Conveys device identity and basic telemetry such as battery status, motion state, and SOS events for platform workflows.
- Supports event notifications used for geofencing, SOS alerts, and movement alerts consumed by Plaspy.
- Provides a transportable stream that Plaspy ingests and associates with a device record for visualization and rules.
- Allows firmware to evolve while keeping the device able to report to Plaspy when common endpoint settings are used.

## How Plaspy Detects the Protocol

Plaspy exposes a single shared server endpoint and port for device reporting and uses an automated detection approach so most devices do not require manual protocol selection in the platform. If a tracker is configured to report to the Plaspy endpoint it will normally be identified and associated automatically.

- Plaspy receives reports on a shared endpoint reachable at d.plaspy.com and at IP address 54.85.159.138.
- All devices in Plaspy use the same port so device traffic converges on a single on premised listening port.
- Plaspy listens on port 8888 for incoming device connections and uses that common port across supported devices.
- When the LK120-4G is configured to report to the Plaspy endpoint, the platform will detect and map the device protocol automatically.
- In most cases a user does not need to pick a protocol inside Plaspy if the tracker reports to the Plaspy endpoint with correct connection settings.

## Transport and Connection Context

Transport choices affect how the LK120-4G conveys its protocol messages to Plaspy and which network configuration is required. Plaspy supports the common transport options the device may offer, and devices should be configured to the Plaspy endpoint and port that match their transport mode.

- The LK120-4G may be configured to use UDP or TCP on port 8888 depending on device support and the chosen configuration.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138 when DNS is not available.
- Plaspy uses port 8888 for all supported devices so the same port is used regardless of tracker model.
- Transport selection (UDP versus TCP) is determined by device firmware and settings and should be set to match the device capability.
- Network rules such as carrier APN and outbound port allowances must permit connection to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available telemetry fields, and optional features; verify firmware when troubleshooting compatibility.
- Hardware revisions or SKUs from the manufacturer may alter supported transports or peripheral functions such as voice or SOS wiring.
- Manufacturer configurable options such as reporting interval and event triggers affect what Plaspy receives and how often.
- UDP versus TCP selection may impact delivery reliability and should be chosen according to device guidance and network conditions.
- Plaspy automatically detects the protocol, but correct endpoint and transport settings on the device are required for detection to succeed.
- Validate compatibility and configuration steps against the official LK GPS documentation before mass deployment.

## Why Protocol Understanding Matters

Understanding how the LK120-4G communicates helps reduce setup time, improves troubleshooting, and supports reliable long term operation with Plaspy. Knowing which settings affect reporting and which transport to use will make integration smoother.

- Ensures the device is pointed at the correct Plaspy endpoint and port for automatic detection.
- Helps choose UDP or TCP on the device to match network and firmware characteristics.
- Clarifies which telemetry fields and events Plaspy will receive for alerts and history.
- Makes firmware update decisions safer by anticipating changes in reporting behavior.
- Reduces troubleshooting time by correlating device side settings with platform events.

## Why Use Plaspy with This Protocol

Using the LK120-4G with Plaspy provides practical benefits for pet owners and personal tracking use cases. The tracker’s compact waterproof design, A GPS assisted fixes, SOS functionality, and frequent location updates pair well with Plaspy’s live mapping, alerting, and route history features to deliver situational awareness and recovery workflows.

To learn more about how Plaspy works with devices like the LK120-4G visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions verify information on the official LK GPS site at https://www.lk-gps.com. Protocol support, firmware behavior, and device implementation details can change over time so checking the manufacturer documentation will ensure you have the latest guidance.
