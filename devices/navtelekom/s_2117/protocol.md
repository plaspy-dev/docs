---
slug: /navtelekom/s_2117/protocol
id: s_2117-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom СИГНАЛ S-2117 compatibility with Plaspy and shared server connection settings
keywords:
  - Navtelekom СИГНАЛ S-2117 protocol
  - Navtelekom S-2117 GPS protocol
  - S-2117 protocol Plaspy
  - S-2117 GPS tracker
  - Navtelekom tracker compatibility
  - Plaspy device support
  - vehicle tracker protocol
  - fuel sensor telematics
  - 1 Wire temperature iButton
  - fleet tracking protocol
---

# Navtelekom - СИГНАЛ S-2117 Protocol

This page documents the public protocol context for using the Navtelekom СИГНАЛ S-2117 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, the connection settings you will use to point the device to Plaspy, and practical compatibility considerations for fleet deployments. Sensitive or proprietary protocol internals and firmware-specific implementation details are not included here.

The SIGNAL S-2117 is a GLONASS enabled vehicle tracker with RS-485 fuel sensor support, 1-Wire temperature and identification interfaces, alarm and tamper monitoring, two-way loud voice, and remote control outputs. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so review vendor documentation when you need firmware specific details.

## Protocol Overview

The protocol used by the S-2117 governs how the device reports location, telemetry, and events so Plaspy can ingest and display them. This page describes the role of that protocol in broad terms and how it maps to the data Plaspy uses for monitoring, alerting, and reporting.

- Enables periodic and event driven reporting of GNSS position and movement to a remote server for live tracking and route history.
- Carries telemetry such as fuel sensor readings from RS-485 devices, 1-Wire temperature probes, and digital inputs for alarm or tamper events.
- Provides event notifications for alarm inputs, panic button presses, ignition changes, and other discrete signals that Plaspy surfaces as alerts.
- Supports control and actuator commands from a remote platform when the device and firmware allow two-way communication.
- Translates device identifiers and session context so Plaspy can associate incoming reports with specific fleet assets.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker brands on a single shared endpoint and to identify the reporting protocol automatically. When a properly configured S-2117 sends data to the Plaspy endpoint, Plaspy will match the incoming traffic to a supported profile without requiring manual protocol selection in most cases.

- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 for device connections and all devices supported by Plaspy use this same port.
- The tracker may be set to use either UDP or TCP transport depending on device configuration and firmware capabilities.
- Plaspy automatically detects the tracker protocol after the device begins reporting to the shared endpoint, so manual selection is usually unnecessary.
- If a device does not appear in Plaspy after configuration, validate the device reporting settings and confirm the device can reach the Plaspy endpoint and port.

## Transport and Connection Context

This section explains the connection context for the S-2117 when integrating with Plaspy. It focuses on the transport and addressing options you should expect to configure on the device rather than protocol internals.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can point to the Plaspy server using the domain name d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify device configuration and server routing.
- Ensure the vehicle SIM data plan and network operator allow the chosen transport and that outbound connections to the Plaspy endpoint are permitted.
- Verify APN and vendor configuration tool settings if the device is not establishing a connection to the Plaspy endpoint.

## Protocol Compatibility Notes

- Manufacturer firmware variations can change message timing, optional fields, or supported features between releases.
- Hardware revisions or discontinued models may have subtle differences in available interfaces or default configurations.
- Selection of UDP versus TCP affects delivery characteristics and should match what the device firmware supports and what your deployment requires.
- For RS-485 fuel sensors and 1-Wire peripherals confirm the device firmware exposes those telemetry channels in outgoing reports.
- Discontinued models like the S-2117 can remain compatible with Plaspy, but validate the specific firmware build and configuration tool versions you plan to use.
- Always cross check device behavior against the official manufacturer documentation for the exact firmware and revision you have in the field.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure reliable device onboarding, accurate telemetry mapping in Plaspy, and faster troubleshooting when events or telemetry are missing.

- Speeds up initial setup by helping you confirm correct server, port, and transport settings on the device.
- Improves troubleshooting when position, fuel, or temperature data do not appear as expected in Plaspy.
- Clarifies which telemetry channels the device can report so you configure sensors and inputs appropriately.
- Helps determine whether a firmware update or configuration change is required to enable a specific feature in Plaspy.
- Supports operational decisions such as choosing UDP or TCP based on network reliability and reporting needs.

## Why Use Plaspy with This Protocol

Using the Navtelekom СИГНАЛ S-2117 with Plaspy provides organizations with combined location and rich telemetry in a single platform. Plaspy ingests GNSS position, fuel and temperature telemetry, alarm events, and remote control signals so fleet managers can visualize routes, set alerts, and generate reports that help improve efficiency and security.

If you want to learn more about Plaspy and how it supports devices like the S-2117, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration tools consult the manufacturer at https://www.navtelecom.ru/ since protocol support and firmware behavior can change over time and should be verified against official manufacturer documentation.
