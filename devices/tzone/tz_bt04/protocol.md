---
slug: /tzone/tz_bt04/protocol
id: tz_bt04-protocol
sidebar_label: Protocol
title: TZone - TZ-BT04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the TZone TZ BT04 data logger with Plaspy for reliable data uploads and monitoring
keywords:
  - TZone TZ-BT04 protocol
  - TZone TZ-BT04 communication
  - TZone TZ-BT04 protocol for Plaspy
  - TZone TZ-BT04 tracking protocol
  - TZ-BT04 data logger protocol
  - TZone temperature humidity tracker
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - BLE data logger protocol
  - GPRS upload protocol
---

# TZone - TZ-BT04 Protocol

This page describes the public protocol context for using the TZone TZ-BT04 temperature and humidity data logger with the Plaspy platform. It explains how the device can communicate with Plaspy, what role the reporting protocol plays in device integration, and what to consider when configuring the TZ-BT04 for server uploads or gateway forwarding.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol guidance and practical compatibility points.

## Protocol Overview

The TZ-BT04 is primarily a Bluetooth Low Energy data logger that records temperature and humidity history and can transfer readings to a mobile device or upload data to a remote server via GPRS when configured to do so. The device protocol governs how sensor data and device identity are presented to a receiver, how reporting intervals are applied, and how the device signals status or battery information to a backend.

- Enables the TZ-BT04 to present sensor measurements and basic device metadata to a receiver or gateway
- Defines how readings are grouped, timestamped, and made available for upload to a server
- Allows devices or gateways to identify the unit so Plaspy can associate incoming data with the correct asset
- Supports configurable reporting behavior such as adjustable send intervals and transmission power in manufacturer firmware
- Bridges mobile BLE transfers and GPRS server uploads when the device or an intermediary gateway is used

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming device connections on a single shared endpoint and to identify the device protocol automatically. In most cases you do not need to select a protocol inside Plaspy when the TZ-BT04 or an associated gateway is configured to report to the Plaspy endpoint.

- Plaspy accepts device reporting to the domain d.plaspy.com and to the server IP 54.85.159.138
- All devices in Plaspy use the same port, which simplifies configuration on devices and gateways
- Plaspy automatically detects the tracker protocol when properly formatted reports arrive at the platform
- Users typically only need to ensure the device or gateway points to Plaspy and uses the correct transport settings
- When detection succeeds, Plaspy maps incoming data to the correct device record without manual protocol selection

## Transport and Connection Context

Transport selection and connection configuration determine how the TZ-BT04 or its forwarding gateway reaches Plaspy. The device itself communicates primarily over Bluetooth to mobile apps, and it can upload to a server via GPRS. When uploads are routed to Plaspy, the following connection facts are relevant for configuration.

- The device or gateway may be configured to use UDP or TCP on port 8888 depending on device support and network setup
- Devices and gateways can point to d.plaspy.com or to 54.85.159.138 as the Plaspy server destination
- Plaspy uses port 8888 for all supported devices to maintain consistent endpoint behavior
- Choose UDP or TCP based on device firmware guidance, network reliability, and expected message patterns
- Ensure any intermediary gateways translate BLE reads into the same reporting format and send to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions on the TZ-BT04 can affect available reporting fields, intervals, and transport behavior
- Hardware revisions or different production batches can introduce minor changes in how the device advertises or uploads data
- Manufacturer configuration options such as adjustable send intervals and output power influence how often Plaspy receives updates
- If using a gateway or mobile bridge, validate that the gateway forwards data in a format Plaspy can detect and map
- Transport choice (UDP versus TCP) may be constrained by network conditions, firewall rules, or SIM provider settings
- Always validate compatibility against the latest manufacturer documentation and change logs before wide deployment

## Why Protocol Understanding Matters

Understanding how the TZ-BT04 communicates helps ensure reliable data flow, accurate mapping of sensor values, and efficient troubleshooting when data does not arrive as expected. Clear protocol knowledge reduces setup time and supports long term reliability for monitoring and reporting.

- Helps confirm the device or gateway is configured to report to the correct Plaspy endpoint and port
- Allows operators to interpret signal patterns, reporting intervals, and data gaps in Plaspy
- Aids in diagnosing transport issues such as blocked UDP or TCP traffic or incorrect DNS resolution
- Guides selection of power and send interval settings to balance battery life and reporting frequency
- Supports appropriate handling of device identity so Plaspy records match physical assets

## Why Use Plaspy with This Protocol

Using the TZ-BT04 with Plaspy provides a path for environmental monitoring data to be collected, visualized, and archived alongside other telematics and sensor feeds. Organizations operating cold chains, storage facilities, labs, or mobile refrigerated units can combine TZ-BT04 sensor data with Plaspy tools for centralized monitoring, alerting, and reporting.

If you want to learn more about how Plaspy handles device data and platform features, visit https://www.plaspy.com. Protocol support, firmware behavior, and specific device implementation details can change over time, so verify the latest device specific protocol documentation and firmware notes at the manufacturer site http://www.tzonedigital.com/.
