---
slug: /noran/nr100/protocol
id: nr100-protocol
sidebar_label: Protocol
title: Noran - NR100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Noran NR100 GPS tracker and Plaspy integration guidance for real time fleet tracking
keywords:
  - Noran NR100 protocol
  - Noran NR100 GPS protocol
  - Noran NR100 Plaspy
  - NR100 tracking protocol
  - Noran GPS tracker protocol
  - NR100 communication protocol
  - Plaspy tracker compatibility
  - OBD II GPS protocol
  - fleet tracking protocol
  - vehicle tracking protocol
---

# Noran - NR100 Protocol

This page documents the public protocol context for using the Noran NR100 OBD GPS tracker with the Plaspy platform. It focuses on how the NR100 communicates telematics and event data to Plaspy, what connection settings are commonly used, and practical considerations for integration. The content is intended for technical users, fleet administrators, and integrators who need clear, non sensitive guidance about device communication and compatibility.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed to the Plaspy endpoint. Exact protocol behavior and supported features can vary by NR100 firmware version, hardware revision, and manufacturer implementation. For device specific command lists, parameter details, and firmware notes, consult the official Noran documentation.

## Protocol Overview

The NR100 reporting protocol defines how the tracker reports position, OBD telemetry, and event alerts to a remote server. In practical terms the protocol carries the device identity and timestamped telemetry so Plaspy can correlate location, ignition and sensor data with vehicle records and alerting rules.

- Delivers location updates using GPS and supplemental LBS data so Plaspy can plot positions and build trip history.
- Sends event notifications such as overspeed, power cut, and geo fence triggers for immediate processing by Plaspy workflows.
- Transports OBD II telemetry where available, enabling Plaspy to use ignition and vehicle data for fuel and engine related reports.
- Communicates device identity and status information so Plaspy can maintain device state and historical logs.
- Supports configurable reporting intervals to balance update frequency with data usage and battery considerations.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a single shared endpoint and port and is built to automatically detect the tracker protocol when a properly configured device begins reporting. That reduces the need for manual protocol selection inside the platform for most standard NR100 deployments.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration options.
- The common transport endpoint for Plaspy is port 8888 and all devices in Plaspy use the same port.
- When an NR100 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive the reports and apply automatic protocol detection.
- Users typically do not need to pick a protocol inside Plaspy if the tracker is sending data to the Plaspy endpoint and uses a supported transport.
- If a device does not appear to connect, verify device server settings, APN and that the network allows outbound connections to the Plaspy endpoint and port.

## Transport and Connection Context

The NR100 supports Internet reporting and SMS fallback modes. For Internet reporting to Plaspy the device may use UDP or TCP on the shared Plaspy port depending on device support and chosen configuration.

- Devices may be configured to report over UDP or TCP on port 8888 depending on device settings and network conditions.
- The NR100 can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies configuration and routing on the server side.
- Internet reporting is commonly used for real time position updates while SMS can be used as an alternate reporting channel if configured.
- Ensure APN and mobile data settings are correct on the device so the NR100 can establish an outbound connection to Plaspy.

## Protocol Compatibility Notes

- Firmware differences may affect available messages, supported events, and configuration commands. Confirm the firmware version on the NR100 when troubleshooting.
- Hardware revisions and optional accessories such as relays or external sensors can change which telemetry fields are reported to Plaspy.
- Transport selection (UDP vs TCP) may vary by device configuration; select the transport supported by the device firmware and your network.
- SMS reporting is supported by the NR100 as an alternative to Internet reporting; behaviors and message formats for SMS can differ from IP reporting.
- Some remote features such as audio monitor or remote diagnostics may require additional configuration or permissions and can behave differently across firmware builds.
- Always validate compatibility and feature support against official Noran documentation and test a device end to end before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the NR100 communicates with Plaspy helps ensure reliable setup, accurate telemetry, and predictable alerting behavior across a fleet. Familiarity with the protocol context makes troubleshooting faster and supports long term maintenance.

- Reduces setup time by ensuring correct server address, transport, and APN settings are used from the start.
- Helps diagnose missing data or event gaps by narrowing problems to transport, firmware, or configuration issues.
- Ensures OBD telemetry and vehicle signals are mapped correctly so Plaspy reports like ignition or fuel usage are accurate.
- Supports predictable alerting by confirming the device reports overspeed, geo fence, and power cut events as expected.
- Assists in planning firmware upgrades and hardware refreshes by understanding how changes could affect data reporting.

## Why Use Plaspy with This Protocol

Using the Noran NR100 with Plaspy provides centralized visibility for fleets that need fast deployment, OBD based telemetry, and robust alerting. The NR100’s plug and play form factor combined with Plaspy’s automatic protocol detection and unified endpoint simplifies on vehicle installation and initial setup while enabling real time monitoring and historical analytics.

To learn more about using Plaspy with devices like the NR100 visit https://www.plaspy.com. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify device specific protocol and firmware information with the manufacturer documentation at http://www.norantracker.com/ before large scale rollouts.
