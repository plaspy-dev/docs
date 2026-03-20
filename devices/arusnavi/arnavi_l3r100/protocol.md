---
slug: /arusnavi/arnavi_l3r100/protocol
id: arnavi_l3r100-protocol
sidebar_label: Protocol
title: Arusnavi - ARNAVI L3R100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Arusnavi ARNAVI L3R100 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Arusnavi ARNAVI L3R100 protocol
  - ARNAVI L3R100 GPS protocol
  - Arusnavi protocol for Plaspy
  - ARNAVI L3R100 communication protocol
  - ARNAVI L3R100 tracking protocol
  - Plaspy device compatibility
  - GPS tracker telemetry integration
  - Arnavi EGTS telemetry
  - vehicle tracking protocol
  - fleet management tracker
---

# Arusnavi - ARNAVI L3R100 Protocol

This page describes the public protocol context for using the Arusnavi ARNAVI L3R100 with Plaspy. It summarizes how the device reports position, telemetry, and events to Plaspy in general terms and clarifies the connection settings you will typically use when integrating this model with the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry fields can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical integration context rather than firmware internals.

## Protocol Overview

The ARNAVI L3R100 can transmit GNSS positions, wired and wireless sensor telemetry, and event notifications to monitoring servers using supported telemetry modes. In practical deployments the protocol governs how the device identifies itself, how telemetry and status are packaged for transport, and how Plaspy interprets those reports for live tracking and historical playback.

- Enables the device to report GNSS position and timestamps for live location updates in Plaspy.
- Carries sensor and input state information such as discrete inputs, RS485 sensor readings, and BLE sensor telemetry.
- Conveys event markers for ignition, door, motion, low power, and other alerts that Plaspy can use to trigger rules and notifications.
- Supports transmission to multiple monitoring servers to provide redundancy and parallel integration.
- Allows remote configuration and firmware update triggers when supported by the manufacturer and device firmware.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared, well known endpoint and automatically detects the tracker protocol so most users do not need to manually select a protocol inside the Plaspy platform. Proper configuration of the device to report to the Plaspy endpoint is the most important step for automatic detection to work reliably.

- Plaspy listens on a single port used for all supported devices which simplifies device configuration.
- Devices configured to report to d.plaspy.com or to the Plaspy server IP will be received by Plaspy for automatic protocol identification.
- When the ARNAVI L3R100 is pointed to the Plaspy endpoint, Plaspy will identify whether the device is using Arnavi, EGTS, or another supported telemetry mode.
- Users typically do not need to choose a protocol inside Plaspy if the device is correctly set to report to the Plaspy endpoint.
- If a device does not appear online, check device reporting settings, network connectivity, and that the device is pointed to the Plaspy endpoint address.

## Transport and Connection Context

The ARNAVI L3R100 can use cellular data to send telemetry to Plaspy. Depending on device support and configuration, it may use UDP or TCP transport to the Plaspy endpoint and port. Knowing the transport options and the endpoint addresses used by Plaspy helps ensure the device is able to reach the server through carrier networks and firewalls.

- Plaspy accepts device connections on a single port used by all supported devices which reduces configuration complexity.
- The device may be configured to report to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Transport can be UDP or TCP on port 8888 depending on device firmware and configuration preferences.
- Use the same port 8888 for all Plaspy compatible devices when configuring target server settings on the tracker.
- Confirm that carrier APN and firewall settings allow outbound traffic to d.plaspy.com or the Plaspy IP on port 8888 and the selected transport protocol.

## Protocol Compatibility Notes

- The ARNAVI L3R100 supports Arnavi and EGTS telemetry modes which are commonly used in regional and fleet deployments.
- Firmware versions and hardware revisions can introduce variations in available telemetry fields, modes, and transport behavior.
- Some installations use the device ability to transmit to two monitoring servers for redundancy; verify both endpoints if using dual server mode.
- Transport selection between UDP and TCP may affect reliability under certain networks; choose the transport that matches your environment and firmware capabilities.
- Validate device reporting settings against the manufacturer documentation and confirm the device is pointed to d.plaspy.com or the Plaspy IP when integrating.
- Manufacturer-side configuration tools and remote web configuration may change how telemetry modes are selected or enabled.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, reliable reporting, and effective troubleshooting when the ARNAVI L3R100 is used with Plaspy. Even when Plaspy auto detects the protocol, familiarity with the device reporting options and transport choices reduces integration friction and improves operational uptime.

- Helps verify that position and telemetry fields expected by Plaspy are actually produced by the device firmware.
- Makes it easier to troubleshoot missing data, event triggers, or sensor mappings when deploying at scale.
- Clarifies how to configure the device to report to d.plaspy.com or to the Plaspy IP using the correct transport and port.
- Supports planning for redundancy when using the device feature to send to two servers concurrently.
- Assists with change management when firmware updates or hardware revisions alter protocol behavior.

## Why Use Plaspy with This Protocol

Using the ARNAVI L3R100 with Plaspy provides a practical way to collect GNSS positions, wired RS485 sensor data, and BLE sensor telemetry in a single fleet management workflow. Plaspy ingests real time location and event data from devices pointed to the shared Plaspy endpoint and exposes that information through monitoring, reporting, and alerting capabilities relevant to fleet and asset operations.

If you want to learn more about how Plaspy supports devices like the ARNAVI L3R100 and to review platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and installation guidance consult the manufacturer documentation at https://www.arusnavi.ru as protocol support and firmware behavior can change over time.
