---
slug: /skypatrol/sp6824/protocol
id: sp6824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP6824 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SkyPatrol SP6824 and how it communicates with the Plaspy fleet tracking platform
keywords:
  - SkyPatrol SP6824 protocol
  - SkyPatrol SP6824 GPS protocol
  - SkyPatrol SP6824 for Plaspy
  - SP6824 communication protocol
  - SP6824 tracking protocol
  - Plaspy compatible tracker
  - LTE M GPS tracker
  - OBDII GPS tracker
  - fleet management tracker
  - vehicle tracking SP6824
---

# SkyPatrol - SP6824 Protocol

This page provides a public protocol overview for using the SkyPatrol SP6824 with the Plaspy tracking platform. It focuses on the communication context relevant to integration, how the tracker reports position and telemetry, and what to check when configuring the device to report to Plaspy. The content is intentionally high level and non-sensitive while explaining the practical elements needed for successful connection.

The SP6824 is an ultra thin, LTE Cat M1 GPS tracker that can report GPS position, optional OBDII diagnostics, and event inputs to a backend service. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device specifics against vendor documentation before deployment.

## Protocol Overview

The protocol used by the SP6824 describes the rules and message flow that allow the tracker to identify itself, report location and telemetry, and send event-driven alerts to a server. For Plaspy integration, the protocol enables reliable ingestion of location updates, OBDII sourced diagnostics when available, and status or alarm events that feed into platform workflows.

- Carries GPS position and time information so Plaspy can map live location and historical traces.
- Transmits optional OBDII diagnostics and vehicle telemetry when the OBDII variant is connected.
- Sends event notifications for inputs such as door, alarm, tamper, and ignition changes so Plaspy can trigger alerts.
- Supports periodic reporting and event driven transmissions to balance battery and network usage.
- Includes identification fields so Plaspy can associate incoming messages with the correct device record.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a shared endpoint and automatically determines the correct tracker protocol for most supported devices. In practice this means a properly configured SP6824 that reports to the Plaspy endpoint will not normally require manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port which simplifies device configuration and provisioning
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint

## Transport and Connection Context

Connection choices determine how the SP6824 sends its protocol messages to Plaspy. The device supports typical cellular transport modes and can be configured to use either UDP or TCP depending on the device firmware and reporting requirements.

- Devices may be pointed to the domain d.plaspy.com or the IP address 54.85.159.138
- The device may be configured using UDP or TCP on port 8888 depending on firmware and preferences
- Using the shared port 8888 across devices simplifies firewall and carrier configuration for fleets
- Transport selection can affect delivery guarantees and how the device handles retransmission after loss
- Confirm carrier provisioning and APN settings on the device to ensure it can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions may alter reporting intervals, available telemetry fields, or transport behavior; always check the installed firmware level.
- Hardware variants exist such as the optional OBDII plug and play model that supplies additional vehicle diagnostics.
- Manufacturer-side settings and default APN or reporting configurations can vary by region or carrier.
- Choose UDP or TCP in device settings according to reliability needs and carrier performance for LTE Cat M1.
- Network behavior of LTE M devices can differ across carriers and SIM providers, so validate connectivity in target regions.
- Validate compatibility by referencing official SkyPatrol documentation and performing test reports to the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding how the SP6824 communicates helps ensure a smooth setup, effective troubleshooting, and predictable behavior once devices are deployed at scale. Awareness of the protocol surface makes it easier to map device capabilities into Plaspy features and to resolve common data or connectivity questions.

- Helps confirm that position and OBDII telemetry fields expected by Plaspy are present in device reports
- Speeds troubleshooting when devices fail to appear in the platform by focusing checks on transport, APN, and endpoint settings
- Enables informed choices about UDP versus TCP based on latency and delivery needs
- Supports planning for firmware updates and potential changes in reported fields or behavior
- Makes it easier to test and validate geofence, speed, and route alerts that depend on timely location updates

## Why Use Plaspy with This Protocol

Pairing the SP6824 with Plaspy gives organizations a practical way to centralize location, vehicle diagnostics, and event alerts from a compact LTE M tracker. Plaspy standardizes incoming device data, detects the tracker protocol automatically at the shared endpoint, and converts position and telemetry into actionable operations such as geofencing, route monitoring, and alarm workflows.

If you want to learn more about how Plaspy handles device integrations and the features available for fleet and asset monitoring, please visit https://www.plaspy.com. For the most current SP6824 specific protocol details, firmware notes, and installation guides consult the manufacturer at https://www.skypatrol.com/ since device protocol support and firmware behavior can change over time.
