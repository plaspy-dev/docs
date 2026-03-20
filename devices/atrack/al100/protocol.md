---
slug: /atrack/al100/protocol
id: al100-protocol
sidebar_label: Protocol
title: ATrack - AL100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ATrack AL100 GPS tracker integration with Plaspy
keywords:
  - ATrack AL100 protocol
  - ATrack AL100 GPS protocol
  - AL100 Plaspy compatibility
  - AL100 communication protocol
  - AL100 tracking protocol
  - ATrack e bike tracker protocol
  - AL100 telemetry integration
  - AL100 CAN Bus data
  - AL100 Bluetooth telemetry
  - ATrack fleet tracking
---

# ATrack - AL100 Protocol

This page provides a public, non sensitive overview of the communication context for using the ATrack AL100 tracker with the Plaspy platform. It explains how the device reports location and telemetry to Plaspy and what to consider when configuring the AL100 for reliable fleet and e mobility tracking. The goal is to help technical users and fleet operators understand the role of the tracker protocol in successful integration without exposing private implementation details.

The AL100 is a rugged LTE Cat 1 e mobility tracker with an IP67 enclosure and optional CAN Bus and Bluetooth interfaces for expanded telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page highlights those shared Plaspy settings and practical compatibility notes to help you set up and maintain AL100 devices.

## Protocol Overview

The AL100 uses a device reporting protocol to send GPS positions and telemetry such as mileage, speed, cadence, torque, battery level, and temperatures to a backend server. That protocol defines how the tracker identifies itself, groups telemetry, and schedules reporting so Plaspy can present live maps, alerts, and historical reports to users.

- Enables delivery of GPS location and time stamped telemetry from the device to a backend for processing.
- Carries identification data so Plaspy can associate each report with the correct AL100 device record.
- Transports optional CAN Bus motor and vehicle data where enabled by the hardware and firmware.
- Supports additional telemetry from optional Bluetooth sensors when those sensors are paired to the device.
- Provides the basis for event reporting used by Plaspy such as battery alerts, movement events, and driving behavior indicators.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and automatically detects the tracker protocol so most users do not need to select a protocol manually inside Plaspy. Proper device configuration to point to the Plaspy endpoint is the usual setup step for AL100 deployment.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The port Plaspy listens on is 8888.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network requirements.
- All devices in Plaspy use the same port which simplifies device onboarding.
- Plaspy automatically detects the tracker protocol when the AL100 is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport and connection choices influence how the AL100 reaches Plaspy over the cellular network. The device typically reports to the Plaspy endpoint using the configured transport and cellular uplink, and network policies can affect connectivity and delivery behavior.

- The device may be configured using UDP or TCP on port 8888 depending on firmware and configuration choices.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 when DNS or network constraints require an IP address.
- Plaspy uses the same port for all supported devices which unifies server side handling.
- LTE Cat 1 connectivity on the AL100 provides the uplink for location and telemetry reporting.
- Network address translation, carrier filtering, or firewall rules on cellular or private networks can impact reachability and may require standard network troubleshooting.

## Protocol Compatibility Notes

- Firmware differences across AL100 units can change reporting intervals, field sets, or transport options; confirm firmware behavior before mass deployment.
- Hardware revisions or accessory options such as CAN Bus or Bluetooth will affect which telemetry fields are available to Plaspy.
- Optional CAN Bus integration uses a customized motor and vehicle data interface that may require specific configuration on the tracker side.
- Choosing UDP versus TCP affects delivery characteristics; select the transport supported by your firmware and network environment.
- Manufacturer side configuration options and regional firmware builds can change protocol details over time.
- Validate device compatibility and recommended settings against official manufacturer documentation and release notes.

## Why Protocol Understanding Matters

Knowing the communication protocol and connection context for the AL100 helps ensure reliable setup, accurate data interpretation, and faster resolution of problems when devices do not behave as expected.

- Ensures the tracker is pointed to d.plaspy.com or 54.85.159.138 using the correct transport and port so reports reach Plaspy.
- Helps diagnose missing telemetry by confirming whether CAN Bus or Bluetooth telemetry is enabled and transmitted.
- Informs decisions about firmware upgrades and how those upgrades might change available telemetry fields or reporting cadence.
- Improves troubleshooting of connectivity issues by clarifying whether UDP or TCP is in use and whether carrier or network policies could interfere.
- Supports planning for fleet scale up by understanding how devices identify themselves and how Plaspy maps incoming reports to devices.

## Why Use Plaspy with This Protocol

Using Plaspy with the ATrack AL100 lets operators consolidate e mobility tracking, telemetry, and event alerts into a single dashboard. The AL100’s rugged design, LTE Cat 1 connectivity, and optional motor telemetry via CAN Bus make it well suited for rental fleets and personal e bikes where uptime, battery health, and theft recovery are priorities. Plaspy processes the AL100 data stream into live maps, alerts, historical reports, and automated workflows that help operators act quickly on battery, motor, and movement events.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions for the AL100, verify information on the manufacturer site https://www.atrack.com.tw/ as protocol support and firmware behavior can change over time.
