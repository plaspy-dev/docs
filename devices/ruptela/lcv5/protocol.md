---
slug: /ruptela/lcv5/protocol
id: lcv5-protocol
sidebar_label: Protocol
title: Ruptela - LCV5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Ruptela LCV5 tracker with Plaspy tracking platform
keywords:
  - Ruptela LCV5 protocol
  - Ruptela LCV5 GPS protocol
  - LCV5 tracking protocol
  - Ruptela telematics protocol
  - LCV5 Plaspy compatibility
  - Ruptela GPS tracker protocol
  - vehicle tracking protocol LCV5
  - LCV5 CAN OBD telemetry
  - Plaspy device protocol
  - fleet tracking Ruptela
---

# Ruptela - LCV5 Protocol

This page describes the public protocol context for using the Ruptela LCV5 GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms so fleet managers and technical integrators understand the role of the device reporting protocol without exposing vendor private details. The content is based on the LCV5 product description and public integration practices.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by LCV5 firmware version, hardware revision, and manufacturer configuration, so always confirm device specific details with the manufacturer when needed.

## Protocol Overview

The LCV5 device protocol is the set of rules and message conventions that allow the tracker to deliver GPS positions, CAN and OBD telemetry, input and output events, and sensor data to Plaspy. At a high level the protocol enables device identification, state reporting, and telemetry delivery so Plaspy can provide tracking, alerts, and analytics.

- Enables device identification and authentication information to be associated with incoming reports so Plaspy can match data to the correct asset.
- Transports GPS position, timestamp, and movement data so Plaspy can render live location and route history.
- Carries vehicle telemetry such as CAN and OBD parameters plus digital and analog input states for event driven workflows.
- Supports ancillary sensor and BLE data where the LCV5 hardware variant provides Bluetooth connectivity for external sensors.
- Allows configuration and remote command channels through SMS or remote management tools when supported by the device and the operator.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a single shared endpoint and port and automatically determines the device protocol for supported trackers. This means that when an LCV5 is configured to report to the Plaspy endpoint the platform will normally identify and process its messages without manual protocol selection by the user.

- Plaspy listens for tracker traffic on the same port for all supported devices so there is no per device port to manage.
- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
- The Plaspy platform automatically detects the tracker protocol for supported models when valid data is received.
- In most deployments there is no need to manually select a protocol inside Plaspy if the LCV5 is pointed to the Plaspy endpoint and uses the supported transport.
- If a device is not being detected, verify reporting address, transport type, and that the device firmware is sending expected telemetry for that model.

## Transport and Connection Context

Connection transport and endpoint settings determine how the LCV5 delivers protocol messages to Plaspy. The LCV5 supports common cellular transports and can be configured to use either UDP or TCP depending on device capabilities and deployment requirements.

- LCV5 devices may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- Plaspy accepts tracker connections on port 8888 for all supported devices so consistent port configuration simplifies deployments.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when configuring reporting.
- Choose UDP or TCP based on network reliability, operator guidance, and device configuration options available in Ruptela tools.
- Confirm the chosen transport and server address in device configuration and any carrier APN or firewall rules that may affect connectivity.

## Protocol Compatibility Notes

- Firmware versions can introduce changes in which telemetry fields are sent or how optional sensors are reported; always check firmware release notes for LCV5.
- Hardware variants such as the BLE enabled model provide additional telemetry types that will appear in Plaspy when the device is configured to report them.
- Transport selection UDP versus TCP can affect delivery behavior and network requirements; verify which transport is recommended for your deployment.
- Manufacturer device management tools may be required to enable specific telemetry channels such as CAN or extended OBD parameters.
- Platform detection relies on the device reporting to the Plaspy endpoint; incorrect server address or port prevents automatic detection.
- Validate compatibility against Ruptela product documentation and confirm that the device firmware is intended for integration with third party platforms.

## Why Protocol Understanding Matters

Understanding the LCV5 communication protocol helps ensure correct configuration, improves troubleshooting efficiency, and supports reliable long term operation when integrated with Plaspy. Clear knowledge of what the device reports and how it connects reduces downtime and enables better use of telemetry for operations.

- Faster setup by ensuring the device is pointed to the correct Plaspy endpoint and using the recommended transport.
- Quicker troubleshooting when telemetry is missing or incomplete by narrowing issues to firmware, transport, or server connectivity.
- Better planning for feature use such as CAN based metrics, fuel monitoring, or BLE sensor data so Plaspy dashboards and alerts are configured appropriately.
- Improved security and network planning by knowing which endpoint and port the device will communicate with.
- Easier coordination with Ruptela device management for firmware or provisioning changes that affect reporting.

## Why Use Plaspy with This Protocol

Using the Ruptela LCV5 with Plaspy gives fleets a practical route to consolidate vehicle location, CAN and OBD telemetry, fuel monitoring, and sensor events into a single monitoring and reporting platform. The LCV5 hardware and Plaspy platform together enable operational visibility for anti theft workflows, driver behaviour programs, fuel management, and sensorized cargo monitoring.

To learn more about Plaspy and how the platform works with devices like the LCV5 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and you should verify the latest device specific protocol information on the manufacturer site https://ruptela.com/ before finalizing deployments.
