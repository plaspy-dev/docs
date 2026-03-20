---
slug: /teltonika/fmb640_fmb641/protocol
id: fmb640_fmb641-protocol
sidebar_label: Protocol
title: Teltonika - FMB640-FMB641 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Teltonika FMB640 and FMB641 connection behavior with Plaspy including transport and compatibility notes
keywords:
  - Teltonika FMB640 protocol
  - Teltonika FMB641 protocol
  - FMB640 FMB641 protocol
  - FMB640 Plaspy compatibility
  - FMB641 Plaspy compatibility
  - Teltonika GPS tracker protocol
  - vehicle tracking protocol
  - fleet management protocol
  - Plaspy device compatibility
  - Teltonika communication protocol
---

# Teltonika - FMB640-FMB641 Protocol

This page provides the public protocol context for using the Teltonika FMB640 and FMB641 GPS trackers with the Plaspy platform. It describes the role of the device communication protocol in establishing reliable reporting to Plaspy and summarizes the practical connection information you need to configure the tracker to report to Plaspy servers. The technical feature set of these units includes CAN and tachograph data support, multiple serial interfaces, Dual SIM or eSIM connectivity, and several sensor and sleep mode options that are commonly used in professional fleet environments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so real world behavior may differ between units and over time. The general guidance on this page is intended to help you configure and validate connectivity without exposing internal or proprietary protocol details.

## Protocol Overview

The protocol used by the Teltonika FMB640 and FMB641 is the device reporting mechanism that carries telemetry, diagnostics, and event information to Plaspy. In practice this protocol allows the tracker to identify itself to a server, transmit GNSS fixes, sensor and CAN data, and deliver alerts that enable fleet monitoring and operational workflows.

- Transmits position, timestamp, and motion status so Plaspy can present location and trip information.
- Conveys vehicle and sensor data such as CAN values, fuel readings, and external inputs as telemetry fields.
- Delivers event notifications for geofence, speeding, towing, crash detection, and other configured alerts.
- Supports remote configuration and firmware updates through manufacturer tools while runtime reporting is sent to Plaspy.
- Enables integration of third party peripherals connected via RS232, RS485, or 1-Wire by forwarding device data into the reporting channel.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint and port for tracker reporting and applies automatic protocol detection when data is received. When a properly configured device reports to the Plaspy endpoint, the platform matches the incoming data to a known protocol pattern and processes telemetry without requiring manual protocol selection inside Plaspy.

- Point the tracker to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 for reporting.
- Use the common Plaspy port 8888 for device reporting; all devices in Plaspy use this same port.
- Plaspy accepts both UDP and TCP connections as supported by the device and network.
- Automatic detection means you typically do not need to choose a protocol name in Plaspy if the device is configured to report correctly.
- Validate device reporting by checking live sessions and initial messages after configuration to confirm the device is recognized.

## Transport and Connection Context

Transport choices and network configuration affect how a tracker reaches Plaspy but do not change the high level purpose of the device protocol. The FMB640 and FMB641 support multiple transport modes and configurable network behavior that should be aligned to the environment where the tracker will operate.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device firmware and installer preference.
- Trackers can be pointed at d.plaspy.com or directly at 54.85.159.138 to reach the Plaspy ingestion endpoint.
- Dual SIM or eSIM setups on the trackers improve connectivity resilience when cellular coverage varies.
- Ensure firewalls and NAT policies allow outbound traffic to the Plaspy endpoint on port 8888 from device networks.
- For remote diagnostics, confirm that SMS or GPRS configuration commands are able to reach the unit to update server settings if needed.

## Protocol Compatibility Notes

- Firmware revisions can alter available messages and fields; features present on one firmware release may differ on another.
- Hardware revisions such as the FMB641 processor improvements and switchable CAN terminators can affect how CAN and peripheral data are reported.
- Transport selection between UDP and TCP can impact delivery behavior under poor network conditions; choose based on reliability and data handling needs.
- Manufacturer configuration tools, SMS commands, and FOTA updates may change device reporting parameters and should be used carefully.
- Peripheral integration via RS232, RS485, or 1-Wire may require specific device-side settings to include that data in reports to Plaspy.
- Always validate a sample device end to end after any configuration change to confirm Plaspy receives expected telemetry.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol reduces setup time and improves long term reliability when integrating Teltonika FMB640 or FMB641 devices with Plaspy. Knowing what the protocol carries and how the device connects to Plaspy helps with troubleshooting, feature planning, and ensuring correct telemetry in fleet workflows.

- Speeds up initial configuration by focusing on the right server endpoint and transport settings.
- Helps isolate connectivity problems from device configuration issues or network restrictions.
- Clarifies which device features will appear in Plaspy based on firmware and peripheral setup.
- Supports predictable behavior during firmware updates and when rolling out devices at scale.
- Enables better collaboration between installation teams, IT, and operations when diagnosing reporting issues.

## Why Use Plaspy with This Protocol

Using Teltonika FMB640 or FMB641 devices with Plaspy provides a practical way to bring robust telemetry into a centralized fleet management workflow. These trackers offer rich vehicle data sets and peripheral options that Plaspy can ingest to deliver location, event, and operational insights for logistics, construction, agriculture, and other industries that require reliable monitoring.

To learn more about Plaspy and how it works with a wide range of trackers, visit https://www.plaspy.com. For the most current and detailed device specific protocol behavior, firmware notes, and configuration instructions consult the manufacturer documentation at https://www.teltonika-gps.com/ since protocol support and device implementation details can change over time.
