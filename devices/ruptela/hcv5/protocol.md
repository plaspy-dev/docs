---
slug: /ruptela/hcv5/protocol
id: hcv5-protocol
sidebar_label: Protocol
title: Ruptela - HCV5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating Ruptela HCV5 with Plaspy for GPS tracking telemetry and vehicle data compatibility
keywords:
  - Ruptela HCV5 protocol
  - Ruptela HCV5 GPS protocol
  - Ruptela HCV5 communication protocol
  - Ruptela HCV5 tracking protocol
  - HCV5 Plaspy compatibility
  - HCV5 vehicle telemetry
  - Plaspy device integration
  - Plaspy tracker protocol
  - fleet tracking HCV5
  - vehicle telemetry Ruptela
---

# Ruptela - HCV5 Protocol

This page describes the public protocol context for using the Ruptela HCV5 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non-sensitive terms and what to expect when integrating the HCV5 for GPS tracking and vehicle telemetry.

The HCV5 is designed to deliver continuous GNSS positioning, CAN and OBD telemetry, BLE sensor data, and event inputs to a backend platform. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol used by the HCV5 is the mechanism that carries GNSS coordinates, vehicle telemetry from CAN and OBD, sensor and event inputs, and status information to Plaspy. In practical terms, the protocol defines how the tracker identifies itself to a server, how telemetry and events are reported, and how the platform accepts and interprets those reports.

- Carries location reports and timestamps so Plaspy can display live position and history.
- Transmits vehicle telemetry such as CAN and OBD parameters, fuel data, and diagnostic status for use in analytics.
- Encodes event-driven inputs like ignition, door, tamper, or sensor triggers so Plaspy can generate alerts and contextual reports.
- Supports periodic and on-demand reporting modes so fleet managers can balance detail and data usage.
- Enables remote device management metadata that Plaspy uses for device health, firmware status, and configuration visibility.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and automatically determines the device protocol so users generally do not need to select a protocol manually. When an HCV5 is pointed to the Plaspy endpoint with correct network settings, Plaspy will ingest and route the data into the appropriate processing flows for reporting and dashboard use.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for public integrations.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on network and device settings.
- If the HCV5 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive the data and detect the tracker protocol automatically.
- Users typically do not need to manually select a protocol inside Plaspy when the device is properly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection transport and addressing determine how the HCV5 reaches the Plaspy ingestion endpoint. The HCV5 supports common cellular transports and can be configured to use a domain name or IP address for delivery to Plaspy, while fallbacks and carrier behavior influence the effective transport in the field.

- Devices may point to the Plaspy endpoint using the domain d.plaspy.com or directly to the IP 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888; choose the transport supported by the device and preferred by your operator.
- Plaspy uses the same port for all supported devices, which simplifies device provisioning and firewall rules.
- Cellular connections (LTE Cat M1, NB‑IoT, and fallback 2G) influence latency and delivery reliability but do not change the public endpoint.
- Ensure APN and network settings on the HCV5 match carrier requirements so telemetry reaches the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware variations can change message timing, supported fields, or available features; verify the HCV5 firmware level when validating behavior.
- Hardware revisions or option variants (for example different GNSS or radio variants) may affect supported interfaces such as CAN or BLE.
- Transport choice (UDP vs TCP) can impact message delivery behavior; select the transport that matches your reliability and data usage needs.
- Manufacturer-side configuration tools and device management platforms may apply server settings or templates that influence reporting behavior.
- Always validate that the HCV5 is configured to report to the correct Plaspy endpoint (d.plaspy.com or 54.85.159.138) and port 8888.
- Confirm that any remote commands or actuator controls you plan to use are supported in the deployed firmware and authorized by installers.

## Why Protocol Understanding Matters

A clear understanding of the HCV5 communication protocol helps ensure successful setup, predictable reporting, and effective troubleshooting when the device is used with Plaspy. Knowing what the device sends and how Plaspy receives it reduces deployment friction and supports long term reliability.

- Helps confirm that location and telemetry fields required by your workflows are being transmitted and captured.
- Assists with selecting the correct transport and server addressing so devices reliably reach the Plaspy endpoint.
- Enables faster troubleshooting when data gaps, duplicate reports, or unexpected events appear in Plaspy dashboards.
- Supports planning for firmware updates, device replacements, and changes in vehicle interfaces such as CAN or OBD.
- Improves security posture by clarifying how devices authenticate and report to Plaspy and which network ports need to be open.

## Why Use Plaspy with This Protocol

Using the Ruptela HCV5 with Plaspy provides fleet operators a way to consolidate high‑fidelity vehicle telemetry, GNSS positioning, and event-driven alerts into a single operational view. The HCV5's vehicle interfaces and sensor support deliver the raw inputs Plaspy needs to provide mapping, geofencing, fuel monitoring, tachograph workflow assist, and anti-theft features.

Plaspy simplifies integration by exposing a shared ingestion endpoint and port for all supported devices, and by automatically detecting tracker protocols so deployments are easier to provision. To learn more about Plaspy and how it works with devices like the HCV5, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information and firmware guidance on the manufacturer site https://ruptela.com/.
