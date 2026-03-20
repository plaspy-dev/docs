---
slug: /navtelekom/s_2613/protocol
id: s_2613-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2613 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Navtelekom СИГНАЛ S-2613 with Plaspy for reliable vehicle and asset tracking
keywords:
  - Navtelekom СИГНАЛ S-2613 protocol
  - Navtelekom S-2613 GPS protocol
  - S-2613 communication protocol
  - Plaspy GPS tracker compatibility
  - vehicle tracking protocol Plaspy
  - GLONASS GPS tracker protocol
  - S-2613 telemetry integration
  - Navtelekom tracker Plaspy setup
  - fleet tracking S-2613 protocol
  - asset tracking protocol Plaspy
---

# Navtelekom - СИГНАЛ S-2613 Protocol

This page describes the public protocol context for using the Navtelekom СИГНАЛ S-2613 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, what connection settings are used publicly, and what aspects of the tracker reporting behavior matter when integrating into a fleet or asset management solution. The technical description here is intentionally high level and non-sensitive while reflecting the S-2613 hardware capabilities such as GLONASS and GPS positioning, 2G GSM modem connectivity, RS‑485 integration, Bluetooth, and digital and analog I O available on the unit.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by device firmware, hardware revision, and specific manufacturer implementation, so this page explains the public transport and detection context that typically applies to the S-2613 while recommending verification of device firmware and manufacturer documentation when needed.

## Protocol Overview

The device communication protocol is the set of rules the S-2613 follows to send GNSS coordinates, timestamps, telemetry and event data from the tracker to a remote server. For Plaspy integration the protocol enables the tracker to identify itself, transmit location and telemetry, and report discrete input and output states in formats that Plaspy can ingest and present to users.

- Enables delivery of GNSS coordinates and timestamped telemetry from the tracker to the Plaspy backend.
- Carries device status information such as digital input events, analog sensor readings, and output state changes.
- Provides the device identification and session context Plaspy uses to associate reports with the correct vehicle or asset.
- Supports reporting over cellular networks using the tracker modem so Plaspy can render live position and historical track data.
- Leaves firmware specific variations such as message intervals, event trigger rules, and optional telemetry fields to the device implementation.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a shared endpoint and examines incoming device traffic in a manner that allows automatic protocol detection for many supported devices. When the СИГНАЛ S-2613 is configured to report to Plaspy, the platform uses the connection endpoint and the content of incoming reports to match the tracker to a compatible handler, reducing the need for manual protocol selection inside the Plaspy service.

- Plaspy accepts device reports directed to the public endpoint d.plaspy.com or to the Plaspy server IP 54.85.159.138 on the shared port 8888.
- All devices in Plaspy use the same port, which simplifies device configuration and firewall rules for fleets.
- The S-2613 may be configured to use either UDP or TCP on port 8888 depending on device support and settings.
- If the device is properly configured to send reports to the Plaspy endpoint, users typically do not need to manually select a protocol inside Plaspy.
- Plaspy detection is designed to accommodate common firmware variations while maintaining consistent ingestion into dashboards and alerts.

## Transport and Connection Context

Transport refers to how the tracker sends data to Plaspy over the cellular network. The S-2613 can use the 2G GSM modem to reach the internet and then send its reports to Plaspy using the supported transport protocol. Configuration typically requires setting the Plaspy server address and the transport type on the tracker using the manufacturer configuration tool.

- The device may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can point to the domain d.plaspy.com or to the numeric server address 54.85.159.138 as their reporting endpoint.
- Plaspy uses the same port 8888 for all supported devices which reduces per device configuration mismatch.
- Cellular connectivity and regional GSM band support affect how reliably the tracker can reach Plaspy from different locations.
- Ensure firewalls, NAT and APN settings allow outbound UDP or TCP traffic to the Plaspy endpoint to maintain reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change the set of telemetry fields, event reporting formats, and timing behavior implemented by a device.
- Hardware revisions or optional modules such as RS‑485 peripherals and Bluetooth accessories can affect which telemetry and controls are available.
- Transport mode selection between UDP and TCP on the tracker can impact reliability and latency, and must be set to match intended usage.
- Manufacturer configuration tools such as NTC Configurator and remote management systems may be required to change reporting addresses and transport.
- The S-2613 uses a 2G modem, so confirm regional GSM coverage and carrier APN settings when deploying in a specific geography.
- Validate compatibility by checking the device documentation and any firmware release notes published by the manufacturer.

## Why Protocol Understanding Matters

Understanding how the S-2613 communicates with Plaspy helps administrators and integrators achieve reliable setup, faster troubleshooting, and predictable long term behavior when managing fleets or assets. Clear knowledge of transport choices, reporting intervals, and which telemetry fields are transmitted reduces integration friction and improves operational visibility.

- Helps confirm the device is pointed to the correct Plaspy endpoint and using the expected transport.
- Speeds up troubleshooting when position, telemetry or input events do not appear in the dashboard.
- Clarifies how battery, power loss, and backup reporting behave so alerts and retention are accurate.
- Assists in planning firewall and APN rules for cellular data flows to Plaspy.
- Supports consistent mapping of device inputs and outputs to the Plaspy dashboard and automation rules.

## Why Use Plaspy with This Protocol

Using the Navtelekom СИГНАЛ S-2613 with Plaspy provides a practical combination for organizations that need stable GNSS tracking, basic telemetry, and input/output monitoring from a compact vehicle or asset tracker. The S-2613 hardware features such as external GNSS and GSM antennas, RS‑485, multiple digital inputs and outputs, Bluetooth, and a backup battery mean the device can deliver the core data Plaspy uses for live location, event alerts, and historical reports.

Plaspy accepts reports sent to the shared endpoint at d.plaspy.com and the Plaspy server IP 54.85.159.138 on port 8888 using UDP or TCP. Because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, setup is generally straightforward once the S-2613 is configured to report to that endpoint. Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific protocol details, firmware behavior, and implementation notes with the manufacturer at https://www.navtelecom.ru/ to ensure the most accurate and current integration.
