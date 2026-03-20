---
slug: /ruptela/smart5/protocol
id: smart5-protocol
sidebar_label: Protocol
title: Ruptela - Smart5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ruptela Smart5 and how the device communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Ruptela Smart5 protocol
  - Ruptela Smart5 GPS
  - Smart5 Plaspy compatibility
  - Ruptela Smart5 communication
  - Smart5 tracking protocol
  - Plaspy device compatibility
  - CANbus OBD telemetry
  - Fleet tracking Plaspy
  - GNSS u-blox Smart5
  - Bluetooth LE sensor integration
---

# Ruptela - Smart5 Protocol

This page describes the public protocol context for using the Ruptela Smart5 tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what connection settings are used by Plaspy, and what you should consider when integrating Smart5 into your fleet management workflows. It is intended for technical users and administrators who want a concise, practical overview rather than implementation level details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by device firmware, hardware revision, and manufacturer implementation. For device specific protocol details or firmware related changes consult the manufacturer documentation for the most current information.

## Protocol Overview

The communication protocol used by a GPS tracker defines how the device reports position, telemetry, and diagnostics to a server and how it receives configuration or command messages. For Smart5, the protocol carries GNSS fixes, CANbus and OBD telemetry, accelerometer events, Bluetooth sensor readings, and security alerts so Plaspy can provide location, diagnostics, and event driven workflows.

- Carries periodic and event driven position reports from the device to the server for real time mapping and historical tracking.
- Transports vehicle telemetry including CANbus and OBD frames that Plaspy maps to diagnostics and fuel monitoring.
- Encodes device identification and status so the server can associate incoming data with the correct vehicle and configuration.
- Transmits sensor and security events such as accelerometer triggers, jamming alerts, and power disruption notifications.
- Supports data buffering and retransmission logic so stored records on the device are uploaded after connectivity is restored.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single, shared endpoint and port and is designed to identify the protocol automatically when a properly configured device reports in. This reduces the need for manual protocol selection in most deployments and lets Smart5 pair with Plaspy using standard reporting settings.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138 for device reporting.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and network conditions.
- When Smart5 is pointed to the Plaspy endpoint and configured to report, Plaspy will automatically detect and handle the incoming tracker protocol.
- In typical setups the user does not need to manually select a protocol inside Plaspy once the device reports successfully to the shared endpoint.

## Transport and Connection Context

Connection choices affect how messages travel from Smart5 to Plaspy but do not change the functional data that Plaspy receives. Smart5 supports cellular transports for wide area reporting and can use TCP or UDP depending on configuration and network behavior.

- Smart5 devices may point to d.plaspy.com or to the IP 54.85.159.138 as the reporting endpoint.
- Devices can be configured to use UDP or TCP on port 8888; Plaspy accepts both transports on the same port.
- All devices in Plaspy use the same port which simplifies server configuration and device provisioning.
- Transport selection (UDP vs TCP) can affect delivery behavior under poor connectivity but does not affect how Plaspy identifies the protocol.
- Ensure any network firewalls or APN settings allow outbound traffic to d.plaspy.com and port 8888 from deployed devices.

## Protocol Compatibility Notes

- Firmware revisions can change message composition and available fields; confirm firmware behavior when validating integration.
- Hardware revisions and optional interfaces such as CustomCAN or Bluetooth sensor support may expose additional telemetry or require separate configuration.
- Transport preference between UDP and TCP should be chosen based on reliability needs and network conditions for your fleet.
- Manufacturer side variations in how CANbus or OBD frames are reported can affect field mapping inside Plaspy.
- Validate device reporting settings after firmware updates or when moving devices between regions to ensure consistent behavior.
- Always cross check Plaspy detection results with device identifiers reported by Smart5 to confirm correct mapping.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps administrators set up devices correctly, interpret incoming data, and resolve connectivity or data mapping issues with minimal downtime. Knowing which elements the protocol transports enables better configuration of alerts, reports, and integrations in Plaspy.

- Helps confirm devices are pointing to the correct Plaspy endpoint and port so data appears in the platform.
- Makes troubleshooting easier when telemetry such as CANbus or Bluetooth sensor data is missing or inconsistent.
- Supports decisions about transport selection and APN or firewall rules for reliable connectivity.
- Aids in planning firmware updates and validating that new releases preserve required telemetry fields.
- Enables correct mapping of device identifiers and diagnostic codes into Plaspy dashboards and reports.

## Why Use Plaspy with This Protocol

Using the Ruptela Smart5 with Plaspy provides a practical pathway to combine accurate GNSS location with vehicle diagnostics, sensor readings, and security events for comprehensive fleet oversight. Smart5’s CANbus and OBD capabilities, BLE sensor support, and internal buffering complement Plaspy’s mapping, alerting, and reporting to deliver useful operational visibility.

Plaspy simplifies device onboarding by using a shared server endpoint and port and by automatically detecting the tracker protocol when Smart5 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. Protocol support and firmware behavior can change over time so please verify device specific protocol details and the latest manufacturer guidance at https://ruptela.com/ before finalizing deployment decisions.
