---
slug: /reachfar/rf_v16/protocol
id: rf_v16-protocol
sidebar_label: Protocol
title: Reachfar - RF-V16 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting the Reachfar RF V16 GPS SOS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Reachfar RF-V16 protocol
  - Reachfar RF-V16 GPS protocol
  - Reachfar RF-V16 protocol for Plaspy
  - Reachfar RF-V16 communication protocol
  - Reachfar RF-V16 tracking protocol
  - Reachfar tracker Plaspy compatibility
  - RF V16 GPS tracker protocol
  - RF V16 Plaspy integration
  - personal SOS tracker protocol
  - Reachfar personal tracker Plaspy
---

# Reachfar - RF-V16 Protocol

This page documents the public protocol context for using the Reachfar RF-V16 GPS SOS tracker with Plaspy. It explains how the device communicates in general terms, what connection settings are used by Plaspy, and what to check when configuring an RF-V16 to report into the platform. The guidance here is intended for technical users and integrators who need to understand the communication role of the device without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol when devices are configured to report to the platform. Exact protocol behavior can vary by RF-V16 firmware version, hardware revision, and manufacturer configuration, so this page focuses on public, practical context and configuration checkpoints rather than low level packet formats.

## Protocol Overview

The RF-V16 reporting protocol enables the device to send location fixes, SOS alarms, and status updates from the field to Plaspy for real-time tracking and alerts. At a high level the protocol is the mechanism that carries GPS positions, event flags, and simple telemetry over the mobile data channel (with SMS used for fallback or alerts where supported).

- Allows the tracker to identify itself and associate reports with a device record in Plaspy.
- Transmits GPS position fixes and timestamped location updates for live tracking and trace replay.
- Delivers SOS alarms, low battery, and SIM change notifications so Plaspy can trigger alerts.
- Carries simple telemetry and status fields that Plaspy uses to show device health and event context.
- Supports reporting over the mobile data channel while allowing SMS-based fallbacks for critical alerts where the device supports it.

## How Plaspy Detects the Protocol

Plaspy receives reports at a single, shared endpoint and automatically determines the incoming tracker protocol so users normally do not need to select a protocol manually in the platform. Properly configured RF-V16 units that point to the Plaspy endpoint will be detected and processed as long as they transmit the expected public report elements.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and listens on port 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- All devices in Plaspy use the same port, which simplifies device configuration and platform ingestion.
- When an RF-V16 is pointed to the Plaspy endpoint and allowed through the mobile network, Plaspy automatically detects the tracker protocol and associates incoming reports with the correct device.

## Transport and Connection Context

Connection context describes how the RF-V16 establishes transport to Plaspy rather than the low level protocol framing. The RF-V16 uses GPRS/TCP IP for primary reporting and may fall back to SMS for emergency notifications depending on configuration and firmware capabilities.

- The device may be configured using UDP or TCP on port 8888 to send data to Plaspy.
- Devices can point to d.plaspy.com or to the numeric IP 54.85.159.138 to reach Plaspy servers.
- Plaspy uses the same port for all supported devices, ensuring consistent network routing and firewall requirements.
- Ensure the device APN and mobile data settings allow outbound connections to port 8888 on the configured transport.
- Where SMS fallback is supported by the RF-V16, emergency alarms can be delivered by SMS in addition to GPRS reporting.

## Protocol Compatibility Notes

- Firmware versions can change packet contents, timings, and which event fields are sent; always verify the RF-V16 firmware release notes for protocol changes.
- Hardware revisions or regional variants of the RF-V16 may use different default server settings or connection defaults; confirm the unit’s shipped configuration.
- Some RF-V16 units use SMS fallback for priority alarms; confirm whether SMS alerts are enabled and how they are formatted by the manufacturer.
- Transport selection (TCP vs UDP) can be affected by local mobile network behavior and device settings; pick the transport the device supports and test connectivity.
- Validate APN, SIM data allowance, and network registration before relying on live reporting to Plaspy.
- Always cross check device defaults against the manufacturer documentation when changing server, port, or APN values.

## Why Protocol Understanding Matters

Understanding how the RF-V16 communicates with Plaspy reduces setup friction, helps troubleshoot connectivity problems, and improves long term reliability of alarms and location reporting. Knowing the public aspects of the protocol and the transport used lets administrators make informed choices about SIMs, APN settings, and testing procedures.

- Ensures correct server and port settings so position updates and SOS messages reach Plaspy reliably.
- Helps troubleshoot common issues such as no reports, missing SOS alerts, or intermittent position updates.
- Guides selection of TCP or UDP settings based on device support and mobile network behavior.
- Makes it easier to validate SMS fallback and call features when data connectivity is unavailable.
- Supports planning for firmware updates or hardware rollouts that could change reporting behavior.

## Why Use Plaspy with This Protocol

Using the Reachfar RF-V16 with Plaspy provides a lightweight, dependable path for personal safety and on-foot staff tracking. Plaspy’s unified ingestion and automatic protocol detection reduce configuration steps so RF-V16 units can be pointed to a single endpoint and begin reporting without manual protocol selection inside the platform. This combination supports real-time location, SOS handling, and simple telemetry that are valuable for caregivers, lone workers, and small teams.

If you want to learn more about Plaspy and how it ingests device reports, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer guidance for the RF-V16, please verify current information on the official Reachfar site https://www.reachfargps.com/ because protocol support and firmware implementations can change over time.
