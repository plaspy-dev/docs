---
slug: /megastek/mt65plus/protocol
id: mt65plus-protocol
sidebar_label: Protocol
title: Megastek - MT65PLUS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Megastek MT65PLUS and how the tracker communicates with Plaspy for real time monitoring
keywords:
  - Megastek MT65PLUS protocol
  - Megastek MT65PLUS GPS protocol
  - MT65PLUS Plaspy compatibility
  - MT65PLUS communication protocol
  - MT65PLUS tracking protocol
  - Plaspy tracker protocol
  - GPS tracker MT65PLUS
  - ankle bracelet GPS protocol
  - personal monitoring GPS protocol
  - tamper resistant tracker protocol
---

# Megastek - MT65PLUS Protocol

This page describes the public protocol context for using the Megastek MT65PLUS ankle bracelet tracker with the Plaspy platform. It focuses on how the device communicates high level data and events to Plaspy for real time monitoring, without exposing private implementation details. The information here is intended to help administrators, integrators, and technical users understand the role of the tracker reporting protocol when connecting MT65PLUS devices to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior such as telemetry cadence, tamper signaling, and auxiliary sensors depends on the MT65PLUS firmware you have in the field.

## Protocol Overview

The MT65PLUS communication protocol defines how the bracelet reports location, status, alarms, and telemetry to a remote server. In general terms the protocol carries identity, positioning, event, and telemetry data so Plaspy can display live location, record histories, and raise alerts for supervised monitoring.

- The tracker protocol delivers GNSS coordinates and assisted fixes so Plaspy can update map position and playback routes.
- Status and event reporting include tamper alarms, SOS events, battery state, and device on/off notifications.
- Physiological telemetry such as heart rate is reported as telemetry streams alongside location and event data.
- The protocol includes channels for device identification so the platform can associate incoming messages with the correct asset record.
- Two way voice initiation and alarm acknowledgement signals are surfaced by the device and routed into Plaspy event workflows as supported.

## How Plaspy Detects the Protocol

Plaspy receives incoming device data on a shared endpoint and automatically determines the appropriate protocol for parsing and handling the message. In most deployments a properly configured MT65PLUS will begin reporting and Plaspy will identify the device type without requiring manual protocol selection inside the platform.

- Plaspy listens on a single port for all supported trackers, so the same port is used across device types.
- The Plaspy server endpoint for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy’s public listening port is 8888 and devices may be configured to report to that port.
- When an MT65PLUS sends initial reports to the Plaspy endpoint, the platform associates the incoming stream with an asset record and applies the detected protocol.
- Typically no manual protocol selection is necessary in Plaspy if the device is configured to report to the Plaspy endpoint and port.

## Transport and Connection Context

Connection options for MT65PLUS deployments are driven by the device modem and firmware settings. The device may use either UDP or TCP transport for reporting to Plaspy, and both transports are supported by the public Plaspy endpoint on the same port.

- Devices can be configured to point to d.plaspy.com or directly to 54.85.159.138 when setting the server address.
- Plaspy uses port 8888 for device reporting and all devices supported by Plaspy use this port.
- The MT65PLUS may be set to use either UDP or TCP on port 8888 depending on the deployed firmware and integrator preference.
- Choose UDP where you require minimal overhead and TCP where ordered delivery and connection state are preferred and supported by the device.
- Network operators and firewall owners should allow outbound device traffic to the Plaspy endpoint on port 8888 to ensure reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change available telemetry fields, event names, and reporting intervals; confirm the device firmware level when validating behavior.
- Hardware revisions or regional variants may alter supported radios, transport preferences, or sensor availability.
- Some features referenced by the device (for example two way voice or Wi Fi assisted fixes) may require additional platform configuration or permissions.
- Transport choice (UDP versus TCP) is controlled by the device configuration; confirm the modem firmware supports the desired transport mode.
- Always validate that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy reporting.
- When in doubt, consult Megastek documentation for firmware specific details prior to large scale rollouts.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure correct setup, reliable monitoring, and faster troubleshooting when integrating MT65PLUS devices with Plaspy. It informs proper configuration of device reporting, expected event behavior, and how telemetry is mapped into Plaspy dashboards.

- Ensures devices are addressed to the Plaspy endpoint and port so messages arrive and are parsed.
- Helps administrators interpret tamper, SOS, and heart rate streams and relate them to on device behavior.
- Supports troubleshooting where messages are not arriving due to transport, APN, or firewall problems.
- Guides firmware update planning by identifying when protocol or field changes could affect downstream monitoring.
- Reduces integration time by clarifying which signals the platform expects and how they are used in alerts and workflows.

## Why Use Plaspy with This Protocol

Using MT65PLUS devices with Plaspy provides organizations a streamlined path to monitor location, tamper events, SOS alerts, and physiological telemetry from a single platform. Plaspy’s ability to automatically detect the tracker protocol and ingest the device’s telemetry simplifies deployment, enabling supervisors to focus on operational response rather than low level parsing.

If you want to learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance for the MT65PLUS, verify current information at the Megastek website https://www.megastek.com/ since firmware behavior and implementation details can change over time.
