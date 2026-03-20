---
slug: /globalsat/tr_520/protocol
id: tr_520-protocol
sidebar_label: Protocol
title: GlobalSat - TR-520 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide explaining how GlobalSat TR 520 communicates with Plaspy for reliable LTE M and NB IoT tracking
keywords:
  - GlobalSat TR 520 protocol
  - GlobalSat TR 520 GPS protocol
  - TR 520 Plaspy compatibility
  - TR 520 communication protocol
  - TR 520 tracking protocol
  - GlobalSat GPS tracker protocol
  - LTE M NB IoT tracker
  - Plaspy device protocol
  - tracker protocol integration
  - fleet tracking protocol
---

# GlobalSat - TR-520 Protocol

This page documents the public protocol context for using the GlobalSat TR-520 tracker with Plaspy. It describes the communication role of the tracker reporting protocol, the transport options the device can use, and how that data is received by Plaspy without exposing firmware internals or private implementation details.

Plaspy is configured to accept connections from many tracker models using shared connection settings and automatic protocol detection. Exact on‑device behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the high level protocol and connection facts that matter for reliable integration with Plaspy.

## Protocol Overview

The TR-520 uses its device reporting protocol to deliver GNSS fixes, motion events, and device telemetry to a remote server. The protocol's public role is to identify the device, carry location and sensor data, and provide basic status information so Plaspy can display positions, trigger rules, and record history for operational use.

- Enables the tracker to send GNSS position fixes and motion events to a remote endpoint for processing.
- Transports device identity and basic telemetry so Plaspy can associate data with the correct asset.
- Carries battery and health indicators that support lifecycle planning and replacement scheduling.
- Supports sending event driven messages from the accelerometer and BLE assisted context to improve situational awareness.
- Works over standard network transports so the TR-520 can operate on LTE M and NB IoT networks while conserving power.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections to a shared endpoint and can automatically recognize the tracker reporting format when a device is correctly pointed to the Plaspy endpoint. In typical deployments you do not need to choose a protocol inside Plaspy if the tracker is configured to report to the Plaspy server.

- Plaspy server domain is d.plaspy.com which devices can target for reporting.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device settings and network behavior.
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is generally unnecessary when the device points to the correct endpoint.

## Transport and Connection Context

Transport selection and correct endpoint configuration are essential for the TR-520 to reach Plaspy reliably. The device supports low power wide area networks and can use either UDP or TCP to deliver its periodic and event driven messages to the Plaspy endpoint.

- Devices may point at d.plaspy.com or directly to 54.85.159.138 for reporting.
- The device may be configured using UDP or TCP on port 8888 to match network and battery requirements.
- All devices in Plaspy use the same port which simplifies firewall and network configuration on the server side.
- Network technology such as LTE M or NB IoT and operator APN settings can affect connectivity and must be validated for the target deployment.
- When possible, verify the device reports successfully by confirming it reaches the Plaspy endpoint and appears in the Plaspy interface.

## Protocol Compatibility Notes

- Firmware revisions can change reporting cadence, supported telemetry fields, and optional features delivered to Plaspy.
- Hardware revisions or regional variants may alter radio band support and power management, affecting practical reporting behavior.
- Transport selection between UDP and TCP can influence retransmission and battery usage; choose the transport supported by your device firmware and network.
- BLE assisted features and accelerometer event reporting may be optional and require specific configuration on the device.
- OTA firmware updates are supported on the TR-520 and can change protocol behavior over time; validate any change after an update.
- Always cross check device configuration against the manufacturer documentation for model and firmware specific details.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps ensure reliable setup, quicker troubleshooting, and better long term operational outcomes. Clear awareness of endpoint, transport, and firmware dependencies reduces integration friction and supports predictable device behavior in the field.

- Ensures devices are configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so data reaches Plaspy.
- Helps choose UDP or TCP based on device capability, network stability, and battery considerations.
- Aids troubleshooting when devices fail to appear in Plaspy by narrowing checks to network, APN, and firmware settings.
- Supports planning for OTA updates and firmware differences that can alter reporting and telemetry.
- Improves lifecycle planning by understanding how battery reporting and telemetry are conveyed to Plaspy.

## Why Use Plaspy with This Protocol

Using the TR-520 with Plaspy delivers a practical solution for organizations that need long battery life, remote telemetry, and movement intelligence. The combination of GNSS, accelerometer events, BLE assistance, and low power wide area connectivity makes the TR-520 a good fit for fleet assets, remote equipment, and animal tracking where regular maintenance is limited.

If you want to learn more about how Plaspy can work with the TR-520 and other trackers, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance, verify current documentation at https://www.globalsat.com.tw/ as protocol support and firmware behavior can change over time.
