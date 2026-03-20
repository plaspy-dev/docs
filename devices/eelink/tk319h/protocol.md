---
slug: /eelink/tk319h/protocol
id: tk319h-protocol
sidebar_label: Protocol
title: EElink - TK319‑H Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EElink TK319‑H integration with Plaspy using shared connection settings and MoveLink EELINK reporting
keywords:
  - EElink TK319‑H protocol
  - TK319‑H GPS protocol
  - EElink MoveLink protocol
  - EElink EELINK protocol
  - TK319‑H telemetry
  - Plaspy device integration
  - EElink tracker Plaspy
  - vehicle tracking protocol
  - fleet tracking compatibility
  - GPS tracker integration
---

# EElink - TK319‑H Protocol

This page describes the public protocol context for using the EElink TK319‑H tracker with Plaspy. It explains how the device reports GPS, telemetry and alarm data to Plaspy and what to consider when configuring network endpoints and transport settings for reliable communication.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so the guidance here is intentionally high level and based on publicly available device characteristics. The TK319‑H supports MoveLink/EELINK reporting and is documented here in the context of Plaspy compatibility.

## Protocol Overview

The TK319‑H uses a device reporting protocol (MoveLink / EELINK as provided by the manufacturer) to send location, telemetry and alarm messages to backend platforms such as Plaspy. The protocol defines how the tracker identifies itself, reports position updates, and communicates status and alarm events so Plaspy can process and present the data.

- Enables the tracker to authenticate or identify itself to the backend so Plaspy can associate messages with the correct asset.
- Transmits GPS and LBS position reports plus AGPS assisted data for reliable live tracking in Plaspy.
- Carries telemetry and alarm events such as ACC ignition state, overspeed, crash and vibration so Plaspy can trigger alerts and workflows.
- Supports periodic and event driven reporting to balance real time visibility and power use for vehicle installations.
- Provides a consistent message pattern that Plaspy can ingest and map to fleet management fields and reports.

## How Plaspy Detects the Protocol

Plaspy ingests reports at a single shared endpoint and port and automatically detects the tracker protocol based on the incoming connection and message characteristics. When a TK319‑H is pointed at the Plaspy endpoint, Plaspy will typically identify the device protocol without manual selection inside the platform if the device is configured correctly.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol when the device sends data to the shared endpoint.
- Users normally do not need to choose a protocol in Plaspy if the TK319‑H is configured to report to the Plaspy endpoint.
- Correct device ID and reporting settings on the tracker ensure Plaspy can match incoming messages to the correct asset record.

## Transport and Connection Context

The TK319‑H communicates over cellular networks and can be configured to send reports to Plaspy using either UDP or TCP depending on the device configuration and network needs. Keep the transport and endpoint settings aligned with the device firmware and carrier environment for reliable delivery to Plaspy.

- The device may be configured using UDP or TCP on port 8888.
- Devices can point to d.plaspy.com or to the direct IP 54.85.159.138 depending on provisioning preferences.
- Plaspy uses the same port for all supported devices which simplifies device provisioning and firewall rules.
- Choose UDP for lower overhead and typical telemetry, or TCP where guaranteed delivery and session behavior are preferred and supported by the device.
- Ensure APN and SIM data connectivity are functioning so the tracker can reach the Plaspy endpoint over the cellular network.

## Protocol Compatibility Notes

- MoveLink / EELINK protocol support is indicated by the manufacturer but exact message behavior can differ across firmware releases.
- Firmware differences and hardware revisions may change available features or message fields that Plaspy maps to platform data.
- Transport selection between UDP and TCP may affect delivery characteristics and should match the device configuration.
- Manufacturer configuration menus and remote provisioning options control how the tracker points to the Plaspy endpoint.
- Always confirm supported bands and regional model variants with the vendor for cellular compatibility before large deployments.
- Validate any custom telemetry or third party sensor wiring against the device manual to ensure Plaspy receives expected data.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure a smooth onboarding into Plaspy, faster diagnosis of connectivity issues, and reliable long term operation. Knowing the role of the protocol makes it easier to confirm correct device settings, interpret device status, and coordinate firmware or configuration updates.

- Speeds initial setup by confirming the tracker is pointed to the correct Plaspy endpoint and port.
- Helps troubleshoot why a device may not appear in Plaspy due to transport, APN or firmware mismatches.
- Clarifies which telemetry and alarms the TK319‑H can deliver to Plaspy so workflows and alerts are configured correctly.
- Aids in planning network and security rules since all devices use port 8888 and the shared Plaspy endpoint.
- Supports lifecycle management by highlighting when firmware updates or hardware changes could alter protocol behavior.

## Why Use Plaspy with This Protocol

Using the TK319‑H with Plaspy gives organizations a straightforward path to capture real time location, ACC status, and a broad set of alarms for fleet and asset monitoring. The tracker’s compact form factor, wide input voltage range and optional relay and sensor interfaces make it a flexible option for vehicle installs while MoveLink/EELINK reporting allows Plaspy to ingest position and telemetry for visualization, alerts and reporting.

If you want to learn more about Plaspy and how TK319‑H devices integrate into our platform visit https://www.plaspy.com. For the most current device protocol details, firmware notes and official manufacturer guidance please verify information on the EElink website https://www.eelink.com.cn/ since protocol support and firmware behavior can change over time.
