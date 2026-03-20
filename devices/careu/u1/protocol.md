---
slug: /careu/u1/protocol
id: u1-protocol
sidebar_label: Protocol
title: CAREU - U1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the CAREU U1 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - CAREU U1 protocol
  - CAREU U1 GPS protocol
  - CAREU U1 communication protocol
  - CAREU U1 tracking protocol
  - CAREU U1 Plaspy compatibility
  - CAREU GPS tracker integration
  - LTE GPS tracker protocol
  - vehicle tracking CAREU U1
  - fleet management CAREU U1
  - OBDII CAN tracking protocol
---

# CAREU - U1 Protocol

This page describes the public protocol context for using the CAREU U1 GPS tracker with Plaspy. It focuses on the communication and connection expectations required for the U1 to report location and telemetry to Plaspy without exposing private parser logic or sensitive implementation details.

The CAREU U1 PLUS LTE is a multi network GPS tracker with GNSS positioning, LTE fallback options, and interfaces for OBDII, CAN, RS232/RS485, 1 Wire temperature probes, and optional WiFi or Bluetooth. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementation.

## Protocol Overview

At a high level, the tracker reporting protocol is the set of rules the U1 uses to send position, telemetry, and accessory data to a backend server like Plaspy. The protocol defines how the device identifies itself, how reporting intervals and event messages are structured, and how the server accepts and responds to incoming reports in order to provide actionable fleet data.

- Enables the U1 to transmit GNSS position, vehicle bus data, and sensor inputs to the Plaspy backend.
- Carries identifiers and status information so Plaspy can associate each report with a specific device and vehicle.
- Supports a mix of periodic position reports and event driven messages for alarms, I/O changes, and CAN/OBDII readings.
- Works over standard network transports so the device can use LTE, 3G, or 2G links to reach Plaspy.
- Allows accessory data (for example temperature probes, dash cams, or RFID readers) to be relayed alongside location when supported by the device.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and is designed to identify the tracker protocol automatically when a properly configured device reports in. In most cases you do not need to select a protocol inside Plaspy; configure the U1 to report to the Plaspy endpoint and the platform will associate and parse compatible messages.

- Plaspy’s public server endpoint is d.plaspy.com and the server IP is 54.85.159.138 for network configuration.
- The shared port used by Plaspy for device reporting is 8888.
- Plaspy automatically detects the tracker protocol when a device transmits to the platform.
- All devices in Plaspy use the same port, simplifying device-side configuration.
- If the U1 is configured to report correctly to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will attempt to identify and process its reports.

## Transport and Connection Context

The U1 can transmit data over cellular links and may be configured to use either UDP or TCP to reach Plaspy depending on device settings and network stability. Ensuring the device points to the correct Plaspy endpoint and port is a key step in establishing reliable communication.

- Devices may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- The device can target the Plaspy endpoint using the domain d.plaspy.com or directly the IP 54.85.159.138.
- Plaspy receives data on the same port for all supported devices, reducing per device configuration differences.
- Choice of UDP versus TCP can affect retransmission and delivery semantics depending on network conditions and device firmware.
- Confirm that the U1 cellular APN and outbound firewall rules permit traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change available fields, message triggers, and reporting options; always check the device firmware level when diagnosing differences.
- Hardware variants or optional modules (WiFi, Bluetooth, additional I/O) may introduce new telemetry channels that affect how data is packaged.
- Manufacturer side configuration or service menus can alter transport type, reporting intervals, and enabled message sets.
- Transport selection (UDP vs TCP) is configurable on many devices and can influence how the server receives and acknowledges reports.
- Plaspy’s automatic detection covers common and widely used reporting modes, but edge cases may require coordination with the manufacturer.
- Validate device settings and firmware notes against the manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the U1 communicates helps ensure a smooth setup, effective troubleshooting, and predictable long term operation when used with Plaspy. Familiarity with the communication context reduces integration time and increases operational reliability.

- Faster setup by configuring the correct endpoint and transport on the device.
- Quicker troubleshooting when connectivity or reporting gaps occur by checking transport, DNS, and APN settings.
- Better event tuning by aligning device report intervals and alarm thresholds with Plaspy ingestion expectations.
- Informed decisions about firmware upgrades and optional features that may change how data is reported.
- Clearer expectations for accessory integrations such as OBDII, CAN, temperature sensors, and camera links.

## Why Use Plaspy with This Protocol

Using the CAREU U1 with Plaspy provides a practical way to collect GNSS, vehicle bus, and sensor data in a centralized fleet management platform. Plaspy’s shared connection settings and automatic protocol detection reduce configuration complexity, allowing organizations to focus on operational use cases such as asset tracking, temperature monitoring, and driver behavior analysis.

To learn more about how Plaspy integrates with devices like the CAREU U1 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site at https://www.systech-iot.com/ before deploying at scale.
