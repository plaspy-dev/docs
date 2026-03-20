---
slug: /autofon/mikro_maiak/protocol
id: mikro_maiak-protocol
sidebar_label: Protocol
title: AutoFon - Микро-Маяк + Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for AutoFon Микро‑Маяк + integration with Plaspy real time tracking and connection guidance
keywords:
  - AutoFon Микро‑Маяк + protocol
  - AutoFon Micro Beacon Plus protocol
  - AutoFon GPS tracker Plaspy compatibility
  - Микро‑Маяк + communication protocol
  - GPS tracker reporting protocol
  - Plaspy device integration
  - vehicle tracking AutoFon
  - fleet tracking protocol
  - Anti theft tracker protocol
  - tracker protocol connection settings
---

# AutoFon - Микро-Маяк + Protocol

This page summarizes the public, non-sensitive protocol context for using the AutoFon Микро‑Маяк + (Micro‑Beacon Plus) with the Plaspy platform. It explains how this compact autonomous GPS tracker communicates with Plaspy servers, what to check during setup, and how protocol behavior may influence successful reporting, alerts, and historical telemetry in Plaspy.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical, high level guidance rather than firmware internals or packet formats.

## Protocol Overview

The communication protocol for the Микро‑Маяк + defines how the device identifies itself, transmits GNSS coordinates and telemetry, and reports events such as motion, tamper, battery and temperature to a monitoring server. When configured to report to Plaspy, the protocol acts as the bridge between the device's on-board sensors and Plaspy's real‑time and historical services.

- Enables periodic and event driven transmission of location and sensor telemetry from the device to the monitoring server.
- Carries identification and status information so Plaspy can associate incoming reports with the correct device record.
- Supports buffering and retransmission behaviors that help preserve history during temporary network outages.
- Translates device events (motion, tamper, battery, temperature) into interpretable telemetry for Plaspy dashboards and alerts.
- Works over standard cellular reporting channels so the tracker can integrate with centralized monitoring without proprietary tunnels.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a single, shared endpoint and automatically recognizes the tracker reporting format so manual protocol selection is typically unnecessary for properly configured devices. In practice, this minimizes per‑device configuration inside Plaspy and speeds integration for commonly used models like the Микро‑Маяк +.

- Plaspy uses a shared server endpoint and port for incoming device reports and auto detects the tracker protocol.
- Devices merely need to be pointed at the Plaspy endpoint to allow automatic protocol detection by the platform.
- Users generally do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy server.
- Proper device identity (IMEI or similar identifier) in the outgoing report is important so Plaspy can map incoming data to the correct asset.
- If reporting fails, checking device server settings and network connectivity is the first troubleshooting step.

## Transport and Connection Context

The Микро‑Маяк + transmits data over GSM/GPRS and can be configured to send reports using either UDP or TCP depending on device support and configuration choices. For Plaspy integration the device should be directed to the Plaspy endpoint and port shown below; these are the public connection settings Plaspy provides for device reporting.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The port used by Plaspy for device connections is 8888 and devices may be configured to use either UDP or TCP on that port.
- All devices in Plaspy use the same port which simplifies device configuration across models.
- Choose UDP or TCP on the tracker according to device capability and network considerations; either protocol can be used to reach the Plaspy endpoint.
- Ensure APN, SIM provisioning, and general GPRS connectivity are validated on the device before expecting consistent reporting.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available telemetry fields, and supported transports; verify firmware behavior for the exact unit you have.
- Hardware revisions and optional features (for example extended battery modes or 868 MHz radio behavior) can alter which telemetry items are reported and when.
- Manufacturer server presets may point the device to AutoFon infrastructure by default; update server settings to point to d.plaspy.com or 54.85.159.138 if needed.
- Transport choice (UDP vs TCP) can affect latency and reliability; use the transport that best fits your connectivity profile and device support.
- Data buffering and black box storage behavior is managed on the device and affects how historical packets are forwarded to Plaspy after outages.
- Always validate device identity fields used in reports so Plaspy can automatically match incoming data to the correct asset.

## Why Protocol Understanding Matters

Understanding the communication protocol at a high level helps ensure reliable device setup, efficient troubleshooting, and predictable behavior in Plaspy. Awareness of how the tracker reports and what impacts reporting reliability reduces downtime and improves operational monitoring.

- Speeds setup by clarifying what server and transport settings the device needs to reach Plaspy.
- Helps interpret device telemetry and alerts correctly inside Plaspy dashboards.
- Guides troubleshooting steps when reports stop arriving or telemetry appears incomplete.
- Informs decisions about transport selection, reporting intervals, and battery/standby tradeoffs.
- Provides context for managing firmware updates and verifying behavioral changes after upgrades.

## Why Use Plaspy with This Protocol

Using the AutoFon Микро‑Маяк + with Plaspy provides a practical way to centralize real‑time tracking, event alerts, and historical playback for small assets and fleet units. The device's compact footprint, long standby capability, GNSS positioning and GSM reporting combine with Plaspy's device detection and unified endpoint to create a straightforward integration path for visibility and recovery workflows.

To learn more about Plaspy and how it handles device reporting and fleet management, visit https://www.plaspy.com. For the most current and device specific protocol, firmware behavior, and implementation details for the AutoFon Микро‑Маяк + consult the official manufacturer documentation at https://www.autofon.ru/ for verification and updates.
