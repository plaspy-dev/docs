---
slug: /ulbotech/t381/protocol
id: t381-protocol
sidebar_label: Protocol
title: Ulbotech - T381 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Ulbotech T381 OBDII GPS tracker and how it communicates with Plaspy
keywords:
  - Ulbotech T381
  - Ulbotech T381 protocol
  - T381 GPS tracker
  - T381 OBDII tracker
  - T381 Plaspy compatibility
  - Ulbotech tracking protocol
  - vehicle telemetry T381
  - OBDII GPS protocol
  - fleet tracking T381
  - T381 immobilizer
---

# Ulbotech - T381 Protocol

This page provides public protocol context for using the Ulbotech T381 OBDII GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general terms, what connection settings are used publicly, and the role of the communication protocol in enabling location, telemetry, and control features that operators commonly rely on.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementation. This document describes safe, high level protocol context for the T381 and explains practical considerations for setup and troubleshooting without exposing private implementation details.

## Protocol Overview

The protocol used by the T381 governs how the device reports GNSS position, OBDII telemetry, and event notifications to a remote server and how remote commands such as immobilizer controls are initiated from the platform. For integration with Plaspy, the protocol's public role is to reliably encapsulate the tracker identity and telemetry so Plaspy can map incoming messages to devices and present usable location and diagnostics data.

- Enables the device to identify itself and associate telemetry with a unique device record in Plaspy.
- Carries GNSS position reports and timestamps that Plaspy uses for live tracking and historical traces.
- Transmits OBDII and SAE J1939 vehicle parameters and diagnostic data for fleet diagnostics and maintenance workflows.
- Delivers event notifications (for example motion events and driver behavior signals) that Plaspy converts into alerts and reports.
- Supports remote control signaling such as immobilizer commands where the device and manufacturer allow such operations.

## How Plaspy Detects the Protocol

Plaspy accepts reports to a single public endpoint and automatically detects the tracker protocol for most devices when they are configured to report to the platform. In many deployments you do not need to choose a protocol manually inside Plaspy as long as the tracker is configured to use the Plaspy reporting endpoint.

- Plaspy server domain is d.plaspy.com and the known server IP is 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.
- When a T381 is configured to send data to d.plaspy.com (or the server IP) on port 8888, Plaspy will receive its reports and match them to the correct device record.
- Users commonly set the device reporting target on the tracker or via device configuration tools; once the endpoint is correct, protocol detection is handled by the platform.
- If a device is not appearing in Plaspy, checking endpoint, transport type, and device identity configuration is a sensible first step.

## Transport and Connection Context

The T381 supports standard TCP and UDP transport options depending on device firmware and configuration, and Plaspy's public endpoint accepts both transports on the shared port. Choosing TCP or UDP can affect delivery semantics but does not change the fact that Plaspy receives device data on the same port across device types.

- The device may be configured using UDP or TCP on port 8888 to report to Plaspy.
- Devices can be pointed to d.plaspy.com or to the numeric IP 54.85.159.138 when DNS or local network policies require it.
- Plaspy listens on port 8888 for incoming connections from all supported trackers, including the T381.
- Transport choice (UDP vs TCP) is made on the device or by installer tools and should match the device firmware capabilities.
- Ensure network firewalls and mobile operator APN settings allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions and hardware production batches may implement small variations in reporting frequency and available telemetry fields; always check the device's release notes.
- Different region or carrier variants of the T381 may use different radio firmware, which can affect connection behavior under the same protocol.
- Some features such as immobilizer control or advanced OBDII PIDs may require specific firmware or configuration to be exposed to the platform.
- When switching transport (UDP vs TCP), confirm the device is configured consistently and that intermediate networks do not block the chosen transport.
- Manufacturer configuration utilities or provisioning SIM profiles can change how the device resolves d.plaspy.com; using the server IP is a troubleshooting option in restricted DNS environments.
- Validate compatibility and supported features against the official Ulbotech documentation for your firmware build before large scale deployment.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure correct initial setup, faster troubleshooting when devices fail to report, and predictable long term behavior as firmware and network conditions change. A practical awareness of the protocol boundary between device and platform reduces integration time and improves operational reliability.

- Makes it easier to verify that a device is successfully reaching Plaspy by confirming endpoint, transport, and identity fields.
- Helps diagnose issues like intermittent reporting, missing OBD parameters, or event delivery by focusing investigation on configuration, transport, and firmware.
- Guides decisions about whether to use TCP or UDP for a particular deployment environment based on reliability and network constraints.
- Supports maintenance planning when new firmware is available that may modify reporting cadence or expose additional telemetry fields.
- Improves communication with manufacturers by enabling precise descriptions of observed behavior versus expected reports.

## Why Use Plaspy with This Protocol

Using the Ulbotech T381 with Plaspy gives organizations a compact OBDII solution that delivers GNSS position, vehicle telemetry, and event-driven notifications into a single fleet platform. The combination of OBDII and GNSS reporting, plus features like a Wi‑Fi hotspot and remote immobilizer output, makes the T381 suitable for fleet monitoring, diagnostics, fuel management, and security workflows when integrated with Plaspy.

Plaspy's shared endpoint simplifies deployment: point the T381 to d.plaspy.com or 54.85.159.138 on port 8888 (using UDP or TCP as supported by the device) and the platform will automatically detect the tracker protocol and begin processing reports. To learn more about Plaspy and how it supports connected vehicle solutions, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest, device specific information with Ulbotech at http://www.ulbotech.com/ before performing fleet wide updates.
