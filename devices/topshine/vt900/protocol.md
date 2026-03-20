---
slug: /topshine/vt900/protocol
id: vt900-protocol
sidebar_label: Protocol
title: TopShine - VT900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine VT900 GPS tracker compatibility with Plaspy server and shared connection settings
keywords:
  - TopShine VT900
  - VT900 protocol
  - TopShine GPS tracker
  - VT900 communication
  - VT900 Plaspy compatibility
  - vehicle tracking protocol
  - GPRS GPS tracker
  - fleet management tracker
  - GPS tracker protocol
  - TopShine protocol
---

# TopShine - VT900 Protocol

This page describes the public protocol context for using the TopShine VT900 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms and what to consider when configuring the VT900 to report position and status to a fleet management platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the VT900 is pointed at the Plaspy endpoint. Exact protocol behavior and available messages can vary with firmware version, hardware revision, and manufacturer configuration, so this page aims to explain the integration context without exposing device internals.

## Protocol Overview

The VT900 reporting protocol defines how the tracker identifies itself and sends telemetry to a remote server so that a platform like Plaspy can display location, status, and alerts. For Plaspy the protocol's role is limited to delivering usable position and event data reliably over the configured transport.

- Enables the VT900 to transmit GPS position, time, and movement state to Plaspy
- Carries device identity and status so Plaspy can associate incoming data with the correct vehicle
- Encodes alerts and telemetry such as SOS, geofence events, and power status in messages Plaspy consumes
- Supports reporting over cellular data or SMS pathways depending on device configuration
- Allows the tracker to receive remote commands and updates in supported implementations

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a common endpoint and port and applies automatic detection so most users do not need to choose a protocol manually inside the platform. If the VT900 is configured to report to Plaspy, the platform detects the incoming format and associates it with the device.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address used for reporting is 54.85.159.138
- Plaspy listens on a single shared port for device traffic which is 8888
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol
- Users typically only need to set the VT900 to send to the Plaspy endpoint and use the correct transport
- If a device fails to register, checking transport, APN, and reporting destination is the usual first step

## Transport and Connection Context

The VT900 can send data over GPRS using either UDP or TCP depending on configuration and firmware. For Plaspy integration it is important to point the device to the Plaspy endpoint and to select the transport mode that matches your network and device settings.

- The VT900 may be configured using UDP or TCP on port 8888
- Devices may point to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138
- Plaspy uses the same port 8888 for all supported devices to simplify setup
- Select UDP for lightweight, low overhead reporting or TCP where session reliability is preferred based on device capability
- Ensure APN and cellular settings on the VT900 are correct so GPRS reporting functions as expected

## Protocol Compatibility Notes

- Firmware variations can change which features or message fields the VT900 includes in reports
- Hardware revisions or optional modules may alter supported inputs like engine status or external sensors
- Manufacturer configuration defaults may use different transport modes so confirm whether to use UDP or TCP
- Over the air updates on the VT900 can modify behavior; record firmware versions when troubleshooting
- Validate Plaspy compatibility by confirming the device is reporting to d.plaspy.com or 54.85.159.138 on port 8888
- Consult TopShine documentation for model specific features such as camera controls and voice broadcasting that may require additional setup

## Why Protocol Understanding Matters

Understanding how the VT900 communicates helps ensure a smooth setup, reliable reporting, and faster troubleshooting when integrating with Plaspy. Clear knowledge of transport choices, server destination, and device behavior reduces setup time and operational incidents.

- Speeds initial configuration by clarifying where the device must send data and which transport to use
- Helps isolate connectivity problems such as APN errors or blocked ports on cellular networks
- Enables correct interpretation of alerts and telemetry shown in Plaspy
- Assists in planning firmware updates and validating that features remain compatible
- Improves long term reliability by documenting device settings and network behavior

## Why Use Plaspy with This Protocol

Using the TopShine VT900 with Plaspy provides organizations with a turn key way to capture real time location, status, and event data from vehicles. Plaspy's automatic protocol detection and shared connection settings reduce configuration complexity, letting teams focus on operational use cases like route monitoring, security alerts, and fleet analytics.

If you want to learn more about Plaspy and how it works with devices like the VT900, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance please verify information on the TopShine website https://www.gztopshine.com/. Protocol support and device behavior can change with firmware and hardware revisions so checking the manufacturer documentation is recommended.
