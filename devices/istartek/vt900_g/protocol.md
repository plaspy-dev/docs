---
slug: /istartek/vt900_g/protocol
id: vt900_g-protocol
sidebar_label: Protocol
title: iStartek - VT900-G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the iStartek VT900 G GPS tracker with Plaspy including transport and compatibility considerations
keywords:
  - iStartek VT900 G protocol
  - VT900 G GPS tracker
  - iStartek Plaspy compatibility
  - VT900 G communication protocol
  - VT900 G tracking protocol
  - GPS tracker protocol guide
  - vehicle tracking VT900 G
  - fleet tracking Plaspy
  - VT900 G telemetry integration
  - VT900 G protocol compatibility
---

# iStartek - VT900-G Protocol

This page covers the public protocol context for using the iStartek VT900-G GPS tracker with Plaspy. It explains, at a high level, how the tracker reports location, telemetry, and event data to Plaspy and what role the communication protocol plays in everyday deployment and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behaviour and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so manufacturers documentation and firmware release notes remain the authoritative sources for device specific details.

## Protocol Overview

The device communication protocol defines how the VT900-G encodes and sends GNSS fixes, sensor telemetry, and event notifications so Plaspy can ingest and present usable data. The protocol is responsible for identifying the device, delivering position and diagnostics, and enabling the tracker to buffer or retransmit data after connectivity interruptions.

- Enables the tracker to report GNSS location, timestamps, and movement telemetry to Plaspy for live tracking and history.
- Transmits event types such as ignition, door, alarm, and sensor thresholds so alerts and rules can be evaluated in Plaspy.
- Carries diagnostic and OBD/CANBUS derived data so vehicle health and fuel data can be incorporated into reports.
- Supports offline buffering in the device so queued records are uploaded to Plaspy after a network outage.
- Provides the identifiers Plaspy needs to associate incoming messages with the correct device record.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a unified endpoint and automatically detects the tracker protocol for incoming connections so most users do not need to choose a protocol manually inside Plaspy. Proper device configuration to report to the Plaspy server is the key step for automatic detection and successful onboarding.

- Plaspy server domain for device reporting is d.plaspy.com and the known server IP is 54.85.159.138.
- The shared reporting port used by Plaspy is 8888 and Plaspy uses the same port for all supported devices.
- When a VT900-G is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will analyze the incoming connection and match it to a supported protocol automatically.
- Because Plaspy detects protocol automatically, users typically only need to ensure the device points to the Plaspy endpoint and uses the correct transport.
- If you encounter onboarding issues, confirming the device is sending to d.plaspy.com on port 8888 is a useful first troubleshooting step.

## Transport and Connection Context

The VT900-G can use cellular data to reach Plaspy and may be configured to connect over either UDP or TCP depending on device support and settings. Understanding the transport and endpoint details helps ensure reliable delivery of position and event records to Plaspy.

- Devices may be configured to use UDP or TCP on port 8888 to report to the Plaspy server.
- The Plaspy reporting endpoint can be specified as d.plaspy.com or the server IP 54.85.159.138 depending on deployment preference.
- Plaspy’s single port approach means all supported trackers report over port 8888, simplifying firewall and network configuration.
- Network conditions and operator policies can affect whether UDP or TCP is preferable; select the transport supported by the device and compatible with the mobile network.
- For cellular deployments, ensure APN settings and any required authentication are correct so the VT900-G can open outbound connections to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can add, change, or deprecate message types and telemetry fields; verify firmware release notes when troubleshooting or deploying new features.
- Hardware revisions and optional peripherals (OBD/CANBUS, RFID, fuel sensors) influence the telemetry available in device messages.
- Manufacturer configuration menus or SMS/serial commands may change how the device points to a reporting endpoint; always confirm the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Choice of UDP versus TCP will depend on the device firmware and network environment; ensure the selected transport is supported by the tracker.
- Plaspy’s automatic protocol detection reduces manual setup, but accurate device identifiers and up-to-date firmware improve detection reliability.
- When integrating large fleets, validate a small sample of devices first to confirm transport, reporting interval, and event behavior meet operational needs.

## Why Protocol Understanding Matters

Knowing the basics of the device protocol helps with setup, diagnosis, and long term reliability when integrating VT900-G trackers with Plaspy. Awareness of how the tracker communicates enables faster resolution of reporting gaps and more predictable telemetry behavior.

- Accelerates initial setup by clarifying which endpoint and port the device must report to.
- Helps pinpoint why records may be missing after outages by understanding buffering and retransmit behaviour at a conceptual level.
- Improves troubleshooting of event rules and alerts when you know what telemetry the device is expected to send.
- Informs choices about transport (UDP vs TCP) based on network conditions and device capabilities.
- Supports planning for firmware updates, peripheral options, and feature rollouts across a fleet.

## Why Use Plaspy with This Protocol

Using the VT900-G with Plaspy offers fleet managers and security teams a practical path to combine vehicle grade GNSS and cellular connectivity with a single, unified backend. Plaspy ingests location, CANBUS diagnostics, and sensor events to provide live monitoring, geofencing, and historical reporting that support operational oversight and security workflows.

Plaspy’s unified reporting endpoint at d.plaspy.com (54.85.159.138) on port 8888, plus automatic protocol detection, simplifies device onboarding and ongoing fleet management. To learn more about Plaspy and how it can work with the VT900-G, visit https://www.plaspy.com. Please note that protocol support, firmware behaviour, and device implementation details can change over time; verify the latest VT900-G specific information and firmware updates at the manufacturer site https://istartek.com/.
