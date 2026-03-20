---
slug: /astra_telematics/at402/protocol
id: at402-protocol
sidebar_label: Protocol
title: Astra Telematics - AT402 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Astra Telematics AT402 and how it communicates with Plaspy for real time tracking
keywords:
  - Astra Telematics AT402 protocol
  - AT402 GPS protocol
  - Astra AT402 Plaspy compatibility
  - AT402 communication protocol
  - Astra Telematics GPS tracker protocol
  - AT402 tracking protocol
  - Plaspy compatible trackers
  - AT402 fleet management protocol
  - Astra AT402 telemetry protocol
  - AT402 vehicle tracking protocol
---

# Astra Telematics - AT402 Protocol

This page provides a public protocol overview for the Astra Telematics AT402 when used with Plaspy. It explains the communication context and practical protocol considerations that matter when registering and operating AT402 units with Plaspy for real time tracking, telemetry, and fleet workflows.

The AT402 is a compact IP65 automotive device that uses LTE M with GSM GPRS 2G fallback and supports CANBus, RS232, BLE, 1 Wire, digital I O and driver ID features. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and message content can vary by firmware version, hardware revision and manufacturer implementation, so validate device settings with Astra Telematics documentation when needed.

## Protocol Overview

The AT402 reporting protocol governs how the device identifies itself, sends GNSS position and telemetry, and communicates vehicle events and sensor data to Plaspy. In practice the protocol allows the tracker to deliver location, CANBus parameters, digital input events and short range BLE sensor data in a way that Plaspy can ingest and present on the platform.

- Enables GNSS position and multi GNSS telemetry reporting for real time location updates.
- Carries vehicle bus and peripheral telemetry such as CANBus parameters, RS232 data and driver ID events.
- Transmits digital input and output events for ignition, alarm triggers and remote control actions.
- Supports local BLE sensor and beacon interactions for proximity and short range telemetry.
- Provides the device identity and session context needed for Plaspy to associate incoming data with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives connections on a shared endpoint and automatically determines the tracker protocol based on the incoming session and message characteristics. In most cases, a properly configured AT402 that points to the Plaspy endpoint will be detected and processed without manual protocol selection in Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com for DNS based configuration.
- Plaspy server IP address is 54.85.159.138 for direct IP configuration.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so manual selection inside the platform is typically unnecessary.
- Ensure the AT402 is configured to report to the Plaspy endpoint so automatic detection can occur.

## Transport and Connection Context

The AT402 supports reporting over cellular and can be configured to use either UDP or TCP transport to reach Plaspy. Connection decisions such as TCP versus UDP and DNS or IP target should be made according to the deployment needs, device firmware options and network constraints.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and administrative choice.
- The device can point to d.plaspy.com or directly to 54.85.159.138 when configuring the reporting endpoint.
- Plaspy uses the same port 8888 for all supported trackers to simplify device configuration.
- Transport choice can affect delivery characteristics such as retransmission and session behavior.
- Verify device firmware options for transport selection and endpoint configuration before large scale deployment.

## Protocol Compatibility Notes

- Firmware revisions can change message content, feature availability and configuration parameters for the AT402.
- Hardware revisions or optional accessory firmware may alter which interfaces are available or how telemetry is reported.
- Manufacturer default settings may point to a different server or use a different transport; adjust the endpoint to Plaspy when registering devices.
- Transport selection between UDP and TCP can be configured on the device and may impact behavior observed by Plaspy.
- Some vehicle parameters exposed by CANBus depend on the vehicle make and bus configuration rather than the tracker alone.
- Always validate compatibility and supported features against Astra Telematics documentation for the specific firmware and model batch.

## Why Protocol Understanding Matters

A clear, practical understanding of the AT402 communication protocol helps ensure reliable setup, faster troubleshooting and predictable long term operation in Plaspy. Knowing what the tracker reports and how it connects reduces time to deployment and improves the accuracy of fleet analytics and alerts.

- Ensures devices are pointed to the correct Plaspy endpoint and transport for automatic detection.
- Helps identify whether missing data is due to configuration, transport or firmware differences.
- Makes it easier to map CANBus parameters and digital I O events into Plaspy rules and dashboards.
- Supports planning for firmware updates and validation across a fleet to maintain consistent behavior.
- Reduces integration surprises when using BLE, RS232 or peripheral interfaces in mixed deployments.

## Why Use Plaspy with This Protocol

Using the AT402 with Plaspy gives organizations a unified cloud endpoint to collect GNSS location, vehicle telemetry and peripheral events for fleet management, shared mobility and anti theft workflows. The device hardware features such as LTE M with 2G fallback, CANBus support, BLE and an internal backup battery complement Plaspy workflows for monitoring, alerts and operational reporting.

If you want to learn more about Plaspy and how it handles device connectivity and fleet data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and implementation guidance consult Astra Telematics documentation at https://astratelematics.com/ since protocol support and firmware behavior can change over time.
