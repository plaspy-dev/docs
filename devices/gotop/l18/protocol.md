---
slug: /gotop/l18/protocol
id: l18-protocol
sidebar_label: Protocol
title: GOTOP - L18 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GOTOP L18 smartwatch tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP L18 protocol
  - GOTOP L18 GPS protocol
  - GOTOP L18 communication protocol
  - GOTOP L18 tracking protocol
  - GOTOP L18 Plaspy compatibility
  - GOTOP smartwatch tracker protocol
  - wearable GPS protocol
  - personnel tracker protocol
  - Plaspy device compatibility
  - GPS tracker protocol guide
---

# GOTOP - L18 Protocol

This page covers the public protocol context for using the GOTOP L18 smartwatch GPS tracker with Plaspy. It describes how the device reports location, alerts and health telemetry to the Plaspy platform in general terms, and explains the role of the reporting protocol in integration and day to day operation.

Plaspy uses shared connection settings across its supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact packet behavior, field timing, and feature availability can vary by firmware version, hardware revision and manufacturer implementation, so this document provides a high level integration perspective rather than firmware specific instructions.

## Protocol Overview

The L18 communicates with telematics backends by sending periodic and event driven telemetry over the device's network connection. The communication protocol defines how the watch identifies itself, reports position and sensor data, and signals alarm events so the Plaspy platform can present live location, geofence alerts, SOS notifications and health metrics to users.

- Enables the L18 to deliver location fixes and GNSS context to Plaspy for mapping and history.
- Transmits SOS and emergency flags so alarm workflows can be triggered in Plaspy.
- Carries periodic health telemetry such as heart rate, SpO2 and blood pressure readings for monitoring use cases.
- Includes device identity and status information that Plaspy uses to associate incoming data with the correct asset.
- Supports event driven messages for low battery, movement, or custom alerts that require dispatcher attention.

## How Plaspy Detects the Protocol

Plaspy accepts inbound connections on a single shared endpoint and automatically attempts to determine the incoming device protocol so manual protocol selection is not normally required. When an L18 is configured to report to Plaspy, the platform will match incoming telemetry to a supported device profile and begin processing data for mapping and alerts.

- Plaspy exposes a shared endpoint at d.plaspy.com and an associated public IP address that devices can target.
- All devices supported by Plaspy report to the same port and the platform handles protocol detection automatically.
- Users typically do not need to select a protocol inside Plaspy if the device is correctly pointed at the Plaspy endpoint.
- Proper device configuration to report to Plaspy is the usual requirement for automatic detection to succeed.
- If a device is not appearing in Plaspy, checking network addressing and transport settings on the device is a practical first step.

## Transport and Connection Context

The L18 may be configured to send telemetry over either UDP or TCP depending on device configuration and network availability. For integration with Plaspy, the device should be set to deliver data to the Plaspy endpoint using the supported transport and port so incoming messages reach the platform reliably.

- Devices may point to the domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy accepts connections on a single port for all devices; the same port is used across supported tracker models.
- The L18 can use UDP or TCP on the shared Plaspy port depending on the device modem and configuration.
- Cellular reporting will typically use the device's 4G or GSM data connection; Wi Fi or BLE assisted uploads may be supported by the watch for additional context.
- Verify that the device APN and network settings permit outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can introduce differences in message timing, available telemetry fields, or supported transports.
- Hardware revisions and optional features such as eSIM or BLE modules may affect which reporting methods are available.
- Manufacturer configuration pages or provisioning tools may allow selecting UDP or TCP; choose the transport that matches your network environment.
- Some features seen in product marketing such as specific sensor models or accessory compatibility can vary by batch or regional SKU.
- Plaspy’s automatic detection reduces the need for manual protocol selection, but correct endpoint and transport configuration on the device is essential.
- Always cross reference manufacturer release notes and device documentation to confirm compatibility for a given firmware version.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and administrators ensure the L18 reliably delivers the data Plaspy needs for tracking, alerts and reporting. Awareness of protocol and transport behavior speeds troubleshooting and helps align device configuration with operational requirements.

- Confirms the device is pointed at the correct Plaspy endpoint and using the proper transport.
- Helps diagnose missing telemetry, delayed updates, or unregistered devices by checking how the device reports.
- Supports decisions about battery and reporting frequency trade offs to meet both telemetry needs and uptime goals.
- Aids in planning for firmware updates and validating that new releases maintain compatibility with Plaspy.
- Enables better coordination with manufacturers when a device exhibits unexpected behavior related to reporting or alarms.

## Why Use Plaspy with This Protocol

Using the GOTOP L18 with Plaspy provides organizations with wearable centric visibility, combining real time position, SOS alerts and health telemetry into a single operational view. The L18’s compact form factor and sensor set make it well suited for caregiver scenarios, field staff monitoring and any use case that benefits from both location and biometric context.

Plaspy’s shared endpoint approach and automatic protocol detection simplify deployment: configure the L18 to report to d.plaspy.com or 54.85.159.138 using the supported transport and port, and Plaspy will process incoming telemetry alongside other devices. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time; verify the latest device specific protocol information with the manufacturer at https://www.gotop.cc/.
