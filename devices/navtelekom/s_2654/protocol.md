---
slug: /navtelekom/s_2654/protocol
id: s_2654-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2654 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom СИГНАЛ S-2654 and how it communicates with Plaspy for real time tracking and telemetry
keywords:
  - Navtelekom СИГНАЛ S-2654 protocol
  - Navtelekom S 2654 GPS protocol
  - S 2654 Plaspy compatibility
  - GLONASS vehicle tracker
  - Plaspy device protocol
  - fleet tracking communication
  - industrial telematics device
  - MODBUS telemetry integration
  - dual SIM 3G tracker
  - vehicle telemetry protocol
---

# Navtelekom - СИГНАЛ S-2654 Protocol

This page provides a public, non sensitive overview of the communication protocol context for the Navtelekom СИГНАЛ S-2654 when used with Plaspy. It summarizes how the device generally reports location and telemetry and what to expect when integrating the S-2654 into Plaspy for fleet visibility and telemetry collection.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behavior for individual features and message formats can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public protocol context rather than firmware internals.

## Protocol Overview

The S-2654 uses a device-level reporting protocol to transmit GNSS fixes, input and output state, and serial/CAN telemetry into a backend platform. That protocol's role is to deliver timely, identifiable records from the tracker to Plaspy so the platform can present maps, alerts, and historical data.

- Enables the tracker to identify itself and deliver position fixes to a remote server for mapping and history.
- Transports digital input and output states and serial/CAN telemetry that Plaspy can surface as events and sensor values.
- Supports local buffering and later reconciliation so network interruptions do not permanently lose recent data.
- Acts as the bridge between device hardware (GNSS, I/O, serial buses) and Plaspy services for tracking and alerts.
- Is implemented on the tracker and can behave differently across firmware or hardware variants.

## How Plaspy Detects the Protocol

Plaspy receives reporting traffic at a single shared endpoint and port and performs automatic protocol detection so most users do not need to select a protocol manually. When the S-2654 is configured to report to the Plaspy endpoint, the platform associates incoming messages with the correct device and parsing logic.

- Plaspy listens on the shared server address d.plaspy.com as well as the server IP 54.85.159.138.
- The platform accepts device reports on port 8888 and uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol from incoming connections so manual protocol selection in the platform is usually not required.
- Proper device configuration to point at the Plaspy endpoint is the typical setup step for integration.
- Users should verify the device is allowed to send data (SIM, APN, and network availability) and that firmware is configured to report to the Plaspy endpoint.

## Transport and Connection Context

The S-2654 can be configured to use either UDP or TCP transport depending on device capabilities and chosen configuration. For Plaspy integration it is enough to point the device to the Plaspy server and use the standard port that Plaspy supports for all trackers.

- Devices may be set to report to the domain d.plaspy.com or directly to the address 54.85.159.138.
- Plaspy accepts connections on port 8888 and this same port is used for all devices supported by Plaspy.
- The tracker may use UDP or TCP on port 8888 depending on the device configuration and network conditions.
- Ensure APN and SIM configuration allow outbound connections to the Plaspy endpoint and that any on vehicle network restrictions permit the chosen transport.
- Local buffering on microSD and battery backup allow data capture when cellular connectivity is temporarily lost.

## Protocol Compatibility Notes

- Firmware variations can change message content, supported fields, and optional features; always check device firmware notes when troubleshooting.
- Hardware revisions and accessory options (for example different I/O wiring or CAN layouts) can affect which telemetry items are present.
- Transport selection between UDP and TCP may affect delivery characteristics such as retransmission and ordering.
- Device configuration tools from the manufacturer such as NTC Configurator and DRC can help align device reporting settings with Plaspy.
- The S-2654 is listed as archived by the manufacturer, so verify available firmware and documentation before wide deployment.
- Validation against official manufacturer documentation is recommended for any integration requiring specific telemetry fields or control commands.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure reliable onboarding, accurate telemetry interpretation, and effective troubleshooting when the S-2654 is used with Plaspy. Clear knowledge of how the device reports and what fields it provides reduces integration time and improves operational reliability.

- Helps confirm the device is sending the expected GPS and telemetry fields to Plaspy.
- Enables faster troubleshooting when messages are delayed or missing by checking transport and configuration.
- Guides configuration choices such as UDP versus TCP, serialization intervals, and buffering behavior.
- Clarifies what inputs, outputs, and serial/CAN telemetry can be expected in Plaspy dashboards and reports.
- Supports planning for firmware updates, version testing, and compatibility validation prior to fleet rollouts.

## Why Use Plaspy with This Protocol

The СИГНАЛ S-2654 brings GLONASS positioning, industrial I/O and serial/CAN telemetry to fleet and asset management workflows. When the device is pointed at Plaspy and configured to report, operators gain centralized visibility into vehicle location, sensor data, and event-driven alerts that support operations, maintenance, and security.

Plaspy’s shared endpoint model and automatic protocol detection simplify integration for most deployments. To learn more about Plaspy and how it works with devices like the S-2654 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration utilities consult the manufacturer at https://www.navtelecom.ru/ as protocol support and firmware behavior can change over time.
