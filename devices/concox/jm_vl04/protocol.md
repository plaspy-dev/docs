---
slug: /concox/jm_vl04/protocol
id: jm_vl04-protocol
sidebar_label: Protocol
title: Concox - JM-VL04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox JM VL04 tracker and how it communicates with Plaspy using shared server settings
keywords:
  - Concox JM-VL04 protocol
  - Concox JM-VL04 GPS protocol
  - JM-VL04 protocol
  - JM-VL04 tracker Plaspy
  - Concox vehicle tracker protocol
  - JM-VL04 communication protocol
  - JM-VL04 tracking protocol
  - Concox OBD tracker protocol
  - Plaspy device compatibility
  - vehicle GPS protocol Plaspy
---

# Concox - JM-VL04 Protocol

This page describes the public protocol context for using the Concox JM-VL04 OBD vehicle tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level and what aspects of the device and network configuration matter for successful integration, without exposing private implementation details.

The JM-VL04 is a professional 4G OBD tracker with features such as an accelerometer, gyroscope, mileage calculation, dark spot compensation for weak GNSS coverage, voice alarm, remote listen-in, BLE configuration, and broad LTE band support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and how the manufacturer implements features.

## Protocol Overview

The protocol used by the JM-VL04 defines how the device reports location, status, and event data to a remote server and how configuration commands are delivered back to the device. In a platform integration like Plaspy the protocol enables the device to be identified, to deliver GPS and sensor telemetry, and to report alarms or diagnostic states relevant to fleet operations.

- Enables periodic and event driven telemetry from the tracker to the server for location and sensor data.
- Carries device identification and status information so Plaspy can associate reports with the correct vehicle and configuration.
- Transmits alarms and driver behavior events produced by the onboard accelerometer, gyroscope, and algorithm.
- Supports configuration and parameter updates via remote commands or BLE assisted setup as implemented by the manufacturer.
- Helps the platform reconcile GNSS gaps and supplemented sensor data to provide continuous tracking in areas with weak satellite reception.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol so users normally do not need to select a protocol manually when a device is correctly configured to report to Plaspy. Detection is focused on identifying the format and fields present in the device reports rather than exposing or modifying device internals.

- Plaspy listens on the shared server endpoint d.plaspy.com and the server IP 54.85.159.138 on the standard port 8888.
- Plaspy automatically detects the tracker protocol from incoming traffic so protocol selection inside the platform is typically unnecessary.
- A properly configured JM-VL04 should point its reporting address to d.plaspy.com or 54.85.159.138 using the selected transport.
- Plaspy supports the common reporting behaviors used by vehicle trackers and maps the incoming data to device records and telemetry streams.
- If a device does not appear to register, checking that the device reports to the Plaspy endpoint and port is the recommended first step.

## Transport and Connection Context

The JM-VL04 can use cellular networks to reach the Plaspy endpoint. Depending on device support and configuration, it may use either UDP or TCP for reporting. Understanding how the device is pointed at Plaspy and which transport is used helps ensure reliable delivery of location and event data.

- Devices may be configured to use UDP or TCP on port 8888 depending on firmware and user configuration.
- Plaspy’s public endpoint is reachable at d.plaspy.com and directly at 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, simplifying server-side routing and device setup.
- Choosing UDP or TCP can affect delivery semantics; verify the device’s configuration interface or documentation for transport options.
- Ensure the SIM data plan and network coverage support the chosen transport and that APN settings are correct for outbound connections.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can introduce differences in how reports are formatted or which fields are included.
- Manufacturer-side configuration templates may allow switching between UDP and TCP reporting modes; confirm the selected transport when integrating.
- Features such as voice alarm, remote listen-in, and BLE configuration are device capabilities and may not directly affect the network protocol but can influence configuration workflows.
- Some implementations include optional fields or extensions; Plaspy’s automatic detection handles common variations but validating a working sample report is recommended.
- Always confirm device reporting settings point to d.plaspy.com or 54.85.159.138 on port 8888 when troubleshooting connectivity.
- When possible, test a device in a controlled environment before large scale deployment to confirm expected behavior with Plaspy.

## Why Protocol Understanding Matters

Knowing the communication protocol and connection context helps with reliable setup, efficient troubleshooting, and long term fleet operations. A clear understanding reduces integration time and helps maintain consistent telemetry quality across a mixed fleet.

- Speeds initial setup by confirming the device reports to the correct Plaspy endpoint and port.
- Helps diagnose connectivity issues by narrowing whether the problem is transport, APN, or device-side configuration.
- Improves alarm and event handling by clarifying which signals the device will actually send under different firmware versions.
- Supports planning for firmware updates or hardware swaps by highlighting potential protocol changes that could affect data mapping.
- Enables informed conversations with the device manufacturer when a behavior appears to be firmware or implementation dependent.

## Why Use Plaspy with This Protocol

Using the Concox JM-VL04 with Plaspy gives organizations a practical way to capture OBD and sensor-driven telemetry alongside location and event data. The JM-VL04’s vehicle-focused features such as mileage calculation, driving behavior detection, and extended network band support complement Plaspy’s centralized telemetry, alerting, and fleet oversight capabilities to provide actionable vehicle insights.

To learn more about Plaspy and how it works with devices like the JM-VL04, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration guides, please verify information with the device manufacturer at https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
