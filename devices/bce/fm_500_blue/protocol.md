---
slug: /bce/fm_500_blue/protocol
id: fm_500_blue-protocol
sidebar_label: Protocol
title: BCE - FM-500 Blue Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for BCE FM 500 Blue connection to Plaspy with transport settings and compatibility notes
keywords:
  - BCE FM-500 Blue protocol
  - FM-500 Blue GPS protocol
  - FM-500 Blue tracking protocol
  - BCE FM-500 Blue Plaspy compatibility
  - FM-500 Blue communication protocol
  - BCE GPS tracker protocol
  - vehicle tracking FM-500 Blue
  - fleet management BCE FM-500 Blue
  - FM-500 Blue CAN FMS J1939
  - tracker protocol Plaspy
---

# BCE - FM-500 Blue Protocol

This page documents the public protocol context for using the BCE FM-500 Blue tracker with the Plaspy platform. It explains how the device communicates in broad, non sensitive terms and highlights the connection settings and compatibility considerations that matter when integrating the FM-500 Blue with Plaspy. The device description behind this page notes GPS GLONASS positioning, GSM reporting, digital and analog inputs, outputs for remote control, and the ability to read FMS CAN data using J1939 for vehicle integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. The exact behavior of any tracker can vary by firmware version, hardware revision, and manufacturer implementation, so the information here focuses on public, high level protocol and transport context rather than low level packet formats or firmware internals. For device specific commands and firmware details consult the manufacturer documentation.

## Protocol Overview

The FM-500 Blue uses a device reporting protocol to send location, movement, and sensor data from the tracker over the cellular network to a remote server. In Plaspy this protocol is used to identify the device, receive telemetry and sensor inputs, and enable remote outputs and vehicle data such as FMS CAN J1939 where available.

- Enables GPS and GLONASS position reports and associated movement data toward the Plaspy endpoint
- Carries analog and digital input states and allows remote control outputs to be reflected in Plaspy
- Transports vehicle CAN data such as FMS CAN J1939 when the tracker is connected to vehicle networks
- Allows the device to register or report identifying information so Plaspy can associate incoming data with an account
- Supports configuration changes from the device side so it reports to the correct Plaspy endpoint and transport

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and telemetry on a single shared endpoint and port and applies automatic detection to match the incoming data to a known tracker type. When a BCE FM-500 Blue is configured to report to Plaspy, the platform will analyze the incoming stream and assign the appropriate parsing behavior without manual protocol selection by the end user.

- All devices report to the same Plaspy port so no separate per device port is needed
- Plaspy listens on the public domain d.plaspy.com and the public server IP 54.85.159.138
- Devices may be configured to use either UDP or TCP on port 8888 when sending data to Plaspy
- If the FM-500 Blue is pointed to the Plaspy endpoint and actively reporting, manual protocol selection in the platform is usually not required
- Automatic detection reduces setup steps but verifying device reporting settings on the tracker is recommended during first connection

## Transport and Connection Context

Connection context for the FM-500 Blue is centered on cellular transport and simple network targeting to the Plaspy endpoint. Devices connect over the GSM network and can be set to use either of the supported transport options to reach Plaspy depending on device configuration and operator network behavior.

- The device may be configured using UDP or TCP on port 8888 for sending telemetry to Plaspy
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- All devices in Plaspy use the same port which simplifies device configuration
- Transport selection can depend on tracker firmware options and mobile network conditions
- Ensure the device APN and GSM settings are correct so the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware differences can change which messages or optional features the FM-500 Blue sends to Plaspy
- Hardware revisions or optional interfaces on device builds may affect availability of inputs outputs and CAN lines
- Manufacturer side configuration options control whether vehicle FMS CAN J1939 data is exposed for reporting
- The choice of UDP versus TCP on port 8888 may affect delivery behavior under different network conditions
- Always validate that the tracker is pointed to d.plaspy.com or 54.85.159.138 and reporting on port 8888
- Confirm compatibility and supported features against the official BCE documentation for your device firmware revision

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a reliable integration with Plaspy and improves the success rate of initial setup and ongoing operations. A clear grasp of transport and protocol behavior enables efficient troubleshooting and helps align device configuration with fleet requirements.

- Facilitates correct device configuration so telemetry reaches d.plaspy.com on port 8888
- Helps identify differences caused by firmware updates or hardware revisions
- Makes it easier to map analog and digital inputs and remote outputs to Plaspy events
- Assists in validating vehicle data feeds such as FMS CAN J1939 are being forwarded correctly
- Supports predictable behavior for reporting intervals, alerting, and device monitoring

## Why Use Plaspy with This Protocol

Using the BCE FM-500 Blue with Plaspy gives organizations a practical way to collect GPS positioning, vehicle data, and IO states from a compact tracker and use that information for visibility, monitoring, and operational oversight. Plaspy’s automatic protocol detection for devices pointed at d.plaspy.com on port 8888 simplifies onboarding so fleets can focus on configuration and reporting rather than low level parser selection.

To learn more about using Plaspy with compatible trackers and how to get started with device reporting, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware documentation for the FM-500 Blue, verify information with the manufacturer at http://www.bce.en/ since protocol support and firmware behavior can change over time.
