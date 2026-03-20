---
slug: /riti/690t_idu_400/protocol
id: 690t_idu_400-protocol
sidebar_label: Protocol
title: Riti - 690T (IDU-400) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Riti 690T IDU 400 GPS tracker and how it communicates with Plaspy for fleet telemetry and tachograph replacement
keywords:
  - Riti 690T
  - Riti 690T protocol
  - 690T GPS protocol
  - IDU 400 Plaspy
  - Riti Plaspy compatibility
  - vehicle tracking protocol
  - tachograph replacement
  - fleet telemetry protocol
  - driver ID tracking
  - GPS tracker communication
---

# Riti - 690T (IDU-400) Protocol

This page describes the public protocol context for using the Riti Locator 690T (IDU-400) with Plaspy. It focuses on how the device communicates with Plaspy in general, what connection settings are used, and the role of the tracker reporting protocol in getting usable fleet telemetry and tachograph records into the cloud.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides safe, practical guidance without detailing vendor proprietary internals.

## Protocol Overview

The communication protocol for the 690T enables the unit to identify itself, deliver position and telemetry, and transmit driving records and event data to Plaspy. In integration terms the protocol defines the messages the device sends, the expected reporting cadence, and how operational events are represented for cloud ingestion.

- Enables regular position and telemetry uploads so Plaspy can build live and historical trip logs for each vehicle.
- Carries driver identification and event flags from external I O such as i Button, temperature sensors, and digital inputs.
- Transmits tachograph style records and high frequency samples that support audit and inspection workflows in Plaspy.
- Includes operational status reports such as battery backup health and power loss reporting that help maintain continuity of logs.
- Supports remote configuration and OTA behavior subject to the device firmware and manufacturer options.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections at a shared, public endpoint and uses automatic detection to identify common tracker reporting protocols. When a properly configured device reports to the Plaspy endpoint, manual protocol selection inside the platform is typically not required.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol when telemetry is received at the shared endpoint.
- If a device is configured to send to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will process incoming data according to its detection rules.
- Users generally configure the tracker to report to the Plaspy endpoint and rely on automatic protocol detection rather than choosing a protocol string in Plaspy.

## Transport and Connection Context

The 690T can be configured to use standard TCP or UDP transport to reach the Plaspy endpoint. Transport selection depends on device capabilities and site preferences for reliability and network behavior.

- Devices may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Point the device at d.plaspy.com or 54.85.159.138 to direct reporting to the Plaspy ingestion servers.
- Plaspy uses the same port for all supported devices so no per device port mapping is required.
- Network operators and firewalls should allow outbound traffic to the Plaspy domain or IP on port 8888 for reliable delivery.
- Choosing TCP can help with delivery confirmation at the transport layer while UDP may be used by devices that optimize for lower overhead, subject to device firmware options.

## Protocol Compatibility Notes

- Firmware variations can change message fields, reporting cadence, and optional features that affect how the device appears to Plaspy.
- Hardware revisions and regional device variants may expose different I O options such as additional sensor inputs or driver ID methods.
- Manufacturer configuration settings determine whether the device uses TCP or UDP when reporting to Plaspy.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility.
- Changes to firmware or vendor platform behavior can affect integration; confirm current behavior before large scale deployments.
- Consult official manufacturer documentation for firmware specific features, supported transports, and region specific modem variants.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure successful setup, accurate data collection, and efficient troubleshooting when the 690T is used with Plaspy. A clear view of what the device reports and how it connects reduces integration friction and supports reliable fleet operations.

- Speeds initial setup by confirming the device is pointed to d.plaspy.com or 54.85.159.138 and uses port 8888.
- Helps identify configuration mismatches such as incorrect transport selection or disabled I O channels.
- Enables targeted troubleshooting when expected telemetry or tachograph records are missing from Plaspy.
- Clarifies which features are available based on firmware and hardware so planners can match device capabilities to operational needs.
- Supports long term maintenance planning by highlighting points where firmware updates or configuration changes may alter behavior.

## Why Use Plaspy with This Protocol

Using the Riti 690T with Plaspy provides fleets a reliable path to cloud based tachograph replacement and high frequency telemetry without manual protocol selection inside the platform. Plaspy centralizes vehicle location, driving records, and event data so teams can run inspections, audits, and operational reports from a single, searchable archive.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information on the official Riti website https://www.riti.com.tw/ as protocol support and firmware behavior can change over time.
