---
slug: /skypatrol/sp8600/protocol
id: sp8600-protocol
sidebar_label: Protocol
title: SkyPatrol - SP8600 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for integrating the SkyPatrol SP8600 with Plaspy using shared connection settings
keywords:
  - SkyPatrol SP8600 protocol
  - SkyPatrol SP8600 GPS tracker
  - SP8600 protocol Plaspy
  - SP8600 communication protocol
  - SP8600 tracking protocol
  - SkyPatrol GPS protocol compatibility
  - Plaspy device compatibility
  - Plaspy vehicle tracking
  - Portable GPS tracker SP8600
  - Fleet tracking SkyPatrol
---

# SkyPatrol - SP8600 Protocol

This page covers the public protocol context for using the SkyPatrol SP8600 series with Plaspy. It explains how the device communicates with Plaspy at a high level, what connection settings are used, and what aspects of the tracker reporting behavior are relevant when integrating this plug and play portable tracker into a fleet or monitoring workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the SP8600 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol context and practical integration notes. Plaspy’s public endpoint and port information are listed below for configuration reference.

## Protocol Overview

The SP8600 series uses a cellular modem and onboard sensors to generate position and movement data that it transmits to a remote server. The communication protocol is the set of rules and expected message patterns that let the SP8600 identify itself to Plaspy and deliver GPS, movement, and status information in a form the platform can consume.

- The protocol enables the device to register or identify itself to the remote platform so location and sensor data are associated with the correct asset.
- It defines how location, time, and basic state information are reported from the device to the server.
- The protocol supports periodic tracking updates as well as event driven reports such as movement or impact detected by the accelerometer or G Force sensor.
- It includes transport expectations so the device and server know whether to communicate over UDP or TCP.
- Proper protocol implementation ensures Plaspy can turn raw device reports into usable tracking views, alerts, and history.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared network endpoint and inspects incoming data to determine the correct handling rules for each device type. This automatic detection removes the need for most users to select a protocol manually inside the platform when the tracker is configured to report to Plaspy.

- Plaspy listens for tracker reports at the public domain d.plaspy.com and the server IP 54.85.159.138 on the platform port 8888.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- The detection process matches incoming reports to supported device patterns so data is parsed and attributed without user intervention.
- In typical setups you configure the SP8600 to point to d.plaspy.com or to 54.85.159.138 and choose UDP or TCP as supported by the device; Plaspy will handle the rest.
- If device firmware sends manufacturer specific variants, Plaspy’s detection will attempt to match the variant to a compatible handler; confirm configuration if reports do not appear.

## Transport and Connection Context

Connection context is about how the SP8600 reaches Plaspy rather than the low level packet structure. The SP8600 family is designed for simple installation and can be configured to report over standard cellular data using either UDP or TCP. Use these connection facts when pointing devices to Plaspy.

- Devices may be configured to use UDP or TCP on port 8888 depending on the SP8600 firmware and your configuration preferences.
- Plaspy’s public server domain is d.plaspy.com and its public server IP address is 54.85.159.138; either can be used as the device target for reporting.
- Plaspy uses port 8888 for all supported devices to simplify onboarding and firewall configuration.
- Choose UDP for lower overhead reporting where supported, or TCP when reliable delivery and session behavior are preferred and supported by the tracker.
- Ensure the vehicle or network environment allows outbound traffic to d.plaspy.com or to 54.85.159.138 on port 8888 so reports reach the Plaspy platform.

## Protocol Compatibility Notes

- Firmware differences across SP8600 units can change reporting frequency, available fields, or transport support; check the device firmware level when validating behavior.
- Hardware revisions or SKUs in the SP8600 family may include variant sensor behavior or reporting fields; confirm the exact model variant in the manufacturer documentation.
- Manufacturer configuration options such as report intervals, geofence behavior, or impact thresholds may affect what data is sent and how frequently.
- Transport selection between UDP and TCP can affect delivery characteristics and should be chosen based on network reliability and device capability.
- When moving an SP8600 between vehicles or SIMs, verify APN and server target settings remain correct to avoid lost reports.
- For definitive details on message fields or firmware specific behaviors consult the official SkyPatrol documentation.

## Why Protocol Understanding Matters

A practical understanding of the SP8600 communication protocol helps ensure a smooth setup, reduces time spent troubleshooting, and improves long term reliability of location and sensor reporting in Plaspy.

- Proper protocol alignment ensures the device identifies correctly so Plaspy can map reports to the correct asset record.
- Knowing whether the device uses UDP or TCP on port 8888 helps with network and firewall configuration.
- Awareness of firmware and hardware variation lets administrators diagnose missing fields or different reporting rates.
- Understanding event versus periodic reporting helps configure alerts, trip reconstruction, and power usage expectations.
- Confirming transport targets such as d.plaspy.com or 54.85.159.138 avoids common misconfiguration issues.

## Why Use Plaspy with This Protocol

Using the SkyPatrol SP8600 with Plaspy provides an efficient path to visibility for rental fleets, light commercial vehicles, and personal vehicle monitoring. The plug and play nature of the SP8600 combined with Plaspy’s shared connection approach reduces setup complexity, while sensor data such as accelerometer and G Force events adds useful context for driving behavior and incident detection.

If you want to learn more about Plaspy capabilities and platform features, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information on the manufacturer site https://www.skypatrol.com/ as protocol support and firmware behavior can change over time.
