---
slug: /intellitrack/intellitrac_x1_plus/protocol
id: intellitrac_x1_plus-protocol
sidebar_label: Protocol
title: Intellitrack - Intellitrac X1 Plus Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Intellitrack Intellitrac X1 Plus and how the device communicates with Plaspy for fleet tracking
keywords:
  - Intellitrack Intellitrac X1 Plus protocol
  - Intellitrack GPS protocol
  - Intellitrac X1 Plus communication
  - Intellitrac X1 Plus Plaspy
  - GPS tracker protocol
  - vehicle tracking protocol
  - GPRS GPS tracker
  - CS Data tracker
  - remote configuration tracker
  - geo fence tracker
---

# Intellitrack - Intellitrac X1 Plus Protocol

This page describes the public protocol context for using the Intellitrack Intellitrac X1 Plus tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general, what connection settings are commonly used, and what aspects of the device protocol are relevant for successful integration without exposing vendor private details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior for the Intellitrac X1 Plus can vary by firmware version, hardware revision, and manufacturer implementation. Users should treat this page as protocol context for deployment and troubleshooting rather than a firmware reference.

## Protocol Overview

The communication protocol for the Intellitrac X1 Plus defines how the device reports location, status, and alerts to a remote server and how it accepts remote configuration and firmware updates. For Plaspy integration, the protocol enables reliable delivery of position reports and event messages while allowing remote management via CS Data or GPRS where supported by the device.

- Transports location and telemetry from the tracker to the remote server so Plaspy can display and process events.
- Delivers event types such as geo fence alerts, power low/lost alarms, and antenna disconnect notifications to the platform.
- Supports remote configuration and firmware upgrade mechanisms over CS Data or GPRS when enabled by the device and network.
- Allows the tracker to identify itself and report device status that Plaspy can map to an asset record.
- Enables configurable reporting modes such as time based, distance based, or intelligent reporting to control update frequency and power use.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports on a shared endpoint and automatically determines which tracker protocol is being used, so most users do not need to select a protocol manually in the platform. Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection.

- Plaspy listens on a single port for all supported devices and uses protocol identification logic on the server side.
- Devices configured to report to d.plaspy.com or 54.85.159.138 on port 8888 can reach the Plaspy ingestion endpoint.
- Because Plaspy automatically detects protocol, the most common setup step is ensuring the tracker is pointed at the correct Plaspy endpoint and transport.
- If a device supports both UDP and TCP reporting, configure it to use the transport that matches network and SIM operator characteristics.
- For trackers with remote configuration enabled, commands sent from Plaspy can adjust reporting modes and alarms without manual protocol selection in the UI.

## Transport and Connection Context

The Intellitrac X1 Plus supports multiple network transports and reporting options; understanding the transport layer is important for connectivity and firewall configuration. For Plaspy, the platform expects devices to reach the same server endpoint and port used by other supported trackers.

- The tracker may be configured to use UDP or TCP on port 8888 depending on device settings and network conditions.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 to reach the Plaspy server.
- Plaspy uses the same port for all devices, simplifying network and firewall rules across a mixed fleet.
- Choice of UDP or TCP affects reliability and message handling at the transport level but does not change the high level protocol role.
- Ensure mobile network APN and SIM settings allow the selected transport and outbound traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can alter available commands, reporting fields, and event names; confirm behavior against the tracker firmware notes.
- Hardware revisions or optional features (for example optional voice support or barcode reader) may change which telemetry is reported.
- The device supports CS Data and GPRS reporting; verify which transport modes are enabled on a given unit before deployment.
- Remote firmware upgrade support exists via CS Data/GPRS, but availability depends on manufacturer settings and network conditions.
- Selecting UDP versus TCP may be necessary for specific networks or to match manufacturer recommendations.
- Always validate compatibility and feature availability against official manufacturer documentation for the exact model and firmware.

## Why Protocol Understanding Matters

A clear understanding of the device communication protocol helps ensure reliable tracking, accurate event reporting, and efficient troubleshooting when you integrate the Intellitrac X1 Plus with Plaspy. Knowing which features the device can report and how it connects to the platform reduces setup time and supports long term operation.

- Helps confirm correct APN, SIM, and transport settings so payloads reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Makes it easier to interpret incoming telemetry such as geo fence triggers, power alarms, and antenna disconnect alerts.
- Supports planning for battery life and reporting intervals by understanding how reporting modes are configured.
- Simplifies remote configuration and firmware update workflows when CS Data or GPRS upgrade paths are available.
- Improves troubleshooting efficiency by narrowing whether issues stem from transport, SIM, or firmware level differences.

## Why Use Plaspy with This Protocol

Using the Intellitrac X1 Plus with Plaspy provides a practical way to turn device telemetry into operational insight. Plaspy’s platform automatically handles protocol detection and consolidates location, alarm, and device state data so fleets can monitor assets, respond to events, and manage device configurations more effectively.

If you want to learn more about how Plaspy works with trackers like the Intellitrac X1 Plus and how to get devices reporting to the platform, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions, verify information on the manufacturer site at https://www.systech-iot.com/ since protocol support and firmware behavior can change over time.
