---
slug: /ruptela/plug5/protocol
id: plug5-protocol
sidebar_label: Protocol
title: Ruptela - Plug5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Ruptela Plug5 and how the tracker communicates with Plaspy for fleet telematics and integration
keywords:
  - Ruptela Plug5 protocol
  - Ruptela Plug5 GPS protocol
  - Plug5 communication protocol
  - Plug5 OBD tracker
  - Ruptela Plaspy compatibility
  - Plug5 telematics protocol
  - Plug5 vehicle tracking
  - OBDII telematics Ruptela
  - Plug5 BLE sensor integration
  - Fleet tracking Plug5 Plaspy
---

# Ruptela - Plug5 Protocol

This page documents the public protocol context for using the Ruptela Plug5 tracker with Plaspy. It explains how the device communicates with the Plaspy fleet platform in general, the transport options you can configure, and the role the reporting protocol plays in delivering location and vehicle telemetry. The content stays at a high level and focuses on interoperable, non sensitive information useful for integration and troubleshooting.

Plug5 is an OBD form factor tracker with GNSS positioning, LTE‑M connectivity and 2G fallback, OBDII and CAN access, BLE 5.1 support, local data buffering, and secure communications. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol. Devices can be configured to report to Plaspy using UDP or TCP on port 8888 to the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138. Exact protocol behavior and available fields may vary by firmware version, hardware revision, and manufacturer implementation, so verify device specific details when needed.

## Protocol Overview

The tracker reporting protocol is the mechanism that carries position, diagnostics, and event data from Plug5 to the Plaspy platform. In practical terms the protocol defines how the device identifies itself, which telemetry fields it sends, and how event and buffered records are transmitted so Plaspy can present them in dashboards, alerts, and reports.

- Transmits GNSS location and time to provide continuous position updates for Plaspy.
- Delivers OBD and CAN telemetry such as engine and vehicle parameters that Plaspy maps to fleet dashboards.
- Encodes device identity and session data so Plaspy can associate incoming messages with the correct vehicle and hardware.
- Supports event reporting for ignition, motion, crash, jamming, and unplug detection that drive alerts in Plaspy.
- Works with secure transport options available on the device such as TLS v1.2 to protect data in transit.

## How Plaspy Detects the Protocol

Plaspy listens on a common endpoint and automatically detects the tracker protocol used by incoming devices. When a Plug5 is configured to report to the Plaspy endpoint, no manual protocol selection inside Plaspy is typically required; the platform identifies the device type and maps incoming telemetry to platform fields.

- Plaspy accepts device reports on the shared server endpoint d.plaspy.com at the common port used across all supported devices.
- Devices can be pointed to the Plaspy server by domain or by IP address to reach the same ingestion endpoint.
- Plaspy automatically detects the tracker protocol so users generally do not need to select a protocol in the platform when the device is sending data to the correct endpoint.
- Proper device configuration of transport type and server settings on Plug5 is important for automatic detection to succeed.
- If messages do not arrive as expected, verify device reporting settings, network connectivity, and firmware compatibility.

## Transport and Connection Context

Transport configuration defines how Plug5 establishes a session to send telemetry to Plaspy. Plug5 devices support cellular connectivity with fallback options and can use either UDP or TCP to reach the Plaspy ingestion endpoint on the shared port.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and chosen setup.
- The Plaspy server can be addressed by domain d.plaspy.com or by the server IP 54.85.159.138 to reach the same ingestion endpoint.
- All devices in Plaspy use the same port, simplifying configuration and firewall rules for fleet rollouts.
- Secure communication is supported by the device using TLS v1.2 where available to protect telemetry in transit.
- Plug5 buffers data locally during connectivity loss and uploads stored records when the network is restored to preserve continuity.

## Protocol Compatibility Notes

- Behavior and available telemetry fields can vary between Plug5 firmware releases; firmware updates may add or change fields.
- Hardware revisions and regional variants may expose different connectivity options or diagnostic parameters.
- Some vehicle OEMs expose additional proprietary parameters via OBD or CAN that appear differently depending on vehicle make and model.
- Choose UDP or TCP transport based on network reliability and configuration needs; both are supported when configured to target Plaspy.
- Secure transport options such as TLS may depend on firmware and device configuration.
- Always validate the device configuration and supported features against the manufacturer documentation when planning deployments.

## Why Protocol Understanding Matters

Knowing the basics of the device protocol helps ensure a smooth setup, reliable data flow, and efficient troubleshooting when using Plug5 with Plaspy. Understanding what the tracker sends and how it connects reduces integration time and improves operational visibility.

- Confirms correct endpoint and transport settings so the device can reach Plaspy successfully.
- Helps interpret which telemetry fields should be expected on Plaspy dashboards and reports.
- Aids troubleshooting when data gaps, duplicate records, or unexpected events appear.
- Informs decisions about firmware upgrades, remote management, and feature enablement.
- Supports security and compliance reviews by clarifying transport and encryption capabilities.

## Why Use Plaspy with This Protocol

Using Plug5 with Plaspy provides fleets with centralized access to location, OBD and CAN telemetry, and event alerts that support operations, security, and maintenance workflows. The Plug5 hardware features such as automatic vehicle detection, BLE sensor support, onboard buffering, and secure communications combine with Plaspy’s automatic protocol detection and unified ingestion endpoint to simplify deployments and reduce per device configuration.

If you want to learn more about Plaspy and how it supports trackers like the Plug5, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware notes with the official manufacturer documentation at https://ruptela.com/.
