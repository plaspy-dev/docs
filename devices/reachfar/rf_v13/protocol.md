---
slug: /reachfar/rf_v13/protocol
id: rf_v13-protocol
sidebar_label: Protocol
title: Reachfar - RF-V13 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Reachfar RF-V13 showing how alarms and location are reported to Plaspy and how to configure device connection settings
keywords:
  - Reachfar RF V13 protocol
  - Reachfar RF V13 GPS protocol
  - Reachfar RF V13 protocol for Plaspy
  - RF V13 communication protocol
  - RF V13 tracking protocol
  - Reachfar door window alarm protocol
  - RF V13 GPRS reporting
  - RF V13 SMS alarm integration
  - Reachfar perimeter security integration
  - Plaspy device compatibility
---

# Reachfar - RF-V13 Protocol

This page describes the public protocol context for using the Reachfar RF-V13 with Plaspy. It focuses on how the RF-V13 reports alarms, basic telemetry, and location to a remote platform and what to expect when integrating the device into Plaspy. The information here is intended for technical users and integrators who need a high level understanding of the device reporting modes and how those reports are consumed by Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior for the RF-V13 can vary by firmware build, hardware revision, and manufacturer implementation. For device specific command formats or firmware dependent behavior consult Reachfar documentation before making deployment decisions.

## Protocol Overview

The RF-V13 uses cellular reporting methods to deliver alarm and location information from its magnet sensor and location subsystems to a remote service. In practical terms the tracker can send event notifications, coarse location via LBS and GPS time position, and simple device health information that Plaspy records and surfaces to users. The RF-V13 is designed for perimeter security use cases so reporting cadence and payload content are optimized for alarm events rather than continuous fleet telemetry.

- Enables alarm event delivery from the door or window magnet sensor to Plaspy for alerting and logging.
- Sends LBS and GPS positioning information when available to provide contextual location for alarms and asset monitoring.
- Transmits battery and connectivity status so Plaspy can track device health over time.
- Supports both GPRS TCP IP reporting and formatted SMS alerts as alternative transport methods to reach a remote platform.
- Provides two way voice verification separate from data reporting that operators can use for alarm confirmation.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a shared endpoint and port and includes automatic protocol detection to match incoming messages from a wide variety of devices. When an RF-V13 is configured to send its reports to the Plaspy endpoint, Plaspy will identify the incoming format and process alarms and location updates without requiring users to select a protocol manually inside the platform in most cases.

- Plaspy listens on a uniform endpoint and port so the same connection settings apply to all supported devices.
- Plaspy automatically detects the tracker protocol from the incoming reports and routes data to the appropriate parsers.
- Users typically only need to confirm the device is configured to report to the Plaspy endpoint for automatic detection to occur.
- Proper device configuration on the RF-V13 side ensures events and location data arrive in a way Plaspy can ingest and display.

## Transport and Connection Context

The RF-V13 can report to a remote service using its cellular data capabilities or via SMS. For Plaspy integration the device may be pointed to the Plaspy endpoint using standard GPRS TCP IP reporting or send formatted SMS messages that Plaspy ingests. Plaspy publishes a single server endpoint and port for device reporting and accepts both common transport protocols supported by cellular trackers.

- Devices may be configured to report to d.plaspy.com or to the server IP 54.85.159.138.
- The shared Plaspy listening port is 8888 and all devices in Plaspy use the same port.
- The RF-V13 may use either UDP or TCP on port 8888 depending on device support and configuration.
- SMS reporting is an alternative where GPRS is not used or not available for a given deployment.
- Ensure the chosen transport on the RF-V13 matches the configuration expected by the remote endpoint.

## Protocol Compatibility Notes

- Firmware variations across RF-V13 units can change exact report content and available configuration commands.
- Hardware revisions and regional firmware builds may affect whether the device uses LBS only, GPS time position, or both for location reporting.
- Selecting TCP versus UDP on the device can alter delivery behavior; choose the transport supported by your deployment and confirm with Plaspy settings.
- SMS reporting formats may vary by firmware or manufacturer presets; confirm the SMS template if you plan to use SMS ingestion.
- Confirm APN and GPRS settings on the RF-V13 so data sessions can reach the Plaspy endpoint reliably.
- Validate compatibility against Reachfar documentation for the exact firmware revision before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the RF-V13 communicates helps ensure alarms and location data arrive at Plaspy accurately and consistently. A clear view of transport options, expected report types, and device capabilities reduces setup time and simplifies troubleshooting when events are missing or appear with unexpected location accuracy.

- Ensures correct transport selection so reports reach Plaspy without being blocked or misrouted.
- Helps interpret location accuracy differences between LBS and GPS and set realistic expectations.
- Aids in configuring APN and reporting intervals to balance battery life and timely alerts.
- Supports troubleshooting steps when alarms do not appear in Plaspy or arrive in the wrong format.
- Guides decisions about firmware updates and hardware replacement based on protocol behavior.

## Why Use Plaspy with This Protocol

Pairing the RF-V13 with Plaspy gives organizations centralized alerting and event history for perimeter security devices. The RF-V13 is compact and purpose built for door and window intrusion detection; when it reports alarms and positioning to Plaspy via GPRS TCP IP or SMS the platform provides timestamps, mapping, and notification workflows so teams can respond promptly.

If you want to learn more about Plaspy and how it can work with the RF-V13, please visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes with Reachfar at https://www.reachfargps.com/.
