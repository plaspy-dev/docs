---
slug: /concox/vl103m/protocol
id: vl103m-protocol
sidebar_label: Protocol
title: Concox - VL103M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Concox VL103M and how the device communicates with Plaspy for reliable GPS tracking and alerts
keywords:
  - Concox VL103M protocol
  - Concox VL103M GPS protocol
  - Concox VL103M Plaspy
  - VL103M tracker protocol
  - VL103M communication protocol
  - Concox tracker compatibility
  - GPS tracker protocol Plaspy
  - vehicle tracking VL103M
  - VL103M telemetry
  - Concox VL103M integration
---

# Concox - VL103M Protocol

This page describes the public protocol context for using the Concox VL103M tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so you can understand integration, device reporting, and what to check when connecting VL103M units to the platform.

The VL103M is a compact, rugged 4G tracker designed for motorcycles and light commercial vehicles with GNSS positioning, LTE Cat 1 communications and GSM fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol; exact protocol behavior for VL103M can vary by firmware version, hardware revision and manufacturer implementation, so always validate device specific details when needed.

## Protocol Overview

The tracker protocol defines how the VL103M reports location, telemetry and events over a cellular link so Plaspy can ingest and present usable tracking data. This page does not reproduce proprietary frames or parsing rules but explains the role of the protocol in connecting the device to Plaspy and maintaining reliable reporting.

- Device identification and periodic reporting so each VL103M instance is associated with a specific asset in Plaspy.
- Location and GNSS data delivery for real time tracking and historical playback within the Plaspy platform.
- Event and telemetry reporting for vibration, tamper, low voltage, SOS and digital input changes to support alerts and automation.
- Buffered upload behavior to hold records when cellular is unavailable, with later transmission to Plaspy once connectivity is restored.
- Remote command and control signaling in general terms to support outputs such as buzzer or relay activation when permitted by the device firmware.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and automatically detects the tracker protocol to route and decode reports. In most cases a properly configured VL103M that points at Plaspy will be recognized without manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com for DNS based device configuration.
- Plaspy server IP is 54.85.159.138 and can be used where direct IP configuration is required.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device support and preference.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol variant inside Plaspy when the device reports to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the VL103M establishes a session with Plaspy and what network settings are commonly required. This section focuses on transport and addressing rather than protocol internals.

- Devices may point at d.plaspy.com or 54.85.159.138 as the reporting endpoint.
- The device may be configured using UDP or TCP on port 8888 based on device capabilities; both transports are supported for reporting.
- All devices in Plaspy use the same port 8888 which simplifies fleet configuration and firewall rules.
- Configure device APN, SIM and network mode according to the VL103M provisioning guide so it can reach Plaspy over LTE with GSM fallback.
- Consider NAT, firewall, and mobile operator restrictions when troubleshooting connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change available features, event formats and optional fields; confirm the VL103M firmware level when diagnosing differences.
- Hardware variants or regional cellular versions may alter radio behavior and supported band sets; these do not typically change high level protocol concepts but can affect connectivity.
- Transport choice (UDP vs TCP) may be selectable on the device and can affect delivery characteristics such as retransmission and ordering.
- Manufacturer default server settings might point to a vendor cloud; ensure devices are reconfigured to d.plaspy.com or 54.85.159.138 with port 8888 for Plaspy integration.
- Validate alarm and IO behavior (buzzer, relay, listen in) against your firmware version as implementations and command availability can vary.
- Test a small subset of devices prior to wide rollout to confirm expected reporting cadence and event behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth initial setup, faster troubleshooting and better long term reliability when deploying VL103M trackers with Plaspy. Knowing what to expect from device reports and transport choices reduces integration time and helps maintain operational visibility.

- Confidently verify device reporting to the correct Plaspy endpoint and port when devices do not appear in the platform.
- Interpret which events should arrive in Plaspy (vibration, tamper, low voltage, SOS) to tune notification and alarm rules.
- Decide between UDP or TCP transport based on reliability needs and network conditions for your fleet.
- Troubleshoot connectivity issues by checking APN, SIM status, firmware version and whether the device points to d.plaspy.com or 54.85.159.138.
- Plan firmware and deployment rollouts knowing that protocol behavior can differ across firmware and hardware variants.

## Why Use Plaspy with This Protocol

Using the Concox VL103M with Plaspy gives fleet operators and managers an efficient way to turn the device's GNSS and telemetry capabilities into actionable operational insights. Plaspy ingests real time locations, event-driven alerts and telemetry so you can monitor vehicles, trigger workflows for tamper or SOS events, and maintain historical tracking records for analysis.

To learn more about how Plaspy works with devices like the VL103M, visit https://www.plaspy.com. Please note that protocol support, firmware behavior and manufacturer details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.iconcox.com/ before large scale deployments.
