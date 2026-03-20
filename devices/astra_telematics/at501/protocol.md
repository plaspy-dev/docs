---
slug: /astra_telematics/at501/protocol
id: at501-protocol
sidebar_label: Protocol
title: Astra Telematics - AT501 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Astra Telematics AT501 GPS tracker and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Astra Telematics AT501 protocol
  - AT501 GPS protocol
  - AT501 tracking protocol
  - Astra Telematics protocol Plaspy
  - AT501 communication protocol
  - AT501 asset tracker Plaspy
  - GPS tracker AT501 compatibility
  - AT501 telemetry reporting
  - asset tracking AT501 Plaspy
  - AT501 BLE provisioning
---

# Astra Telematics - AT501 Protocol

This page covers the public protocol context for using the Astra Telematics AT501 Mini Asset Tracker with Plaspy. It explains how the tracker reports position and telemetry to Plaspy in broad, non sensitive terms and highlights the connection settings you will commonly use when provisioning devices for fleet and asset tracking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware, hardware revision, or manufacturer implementation, so while the AT501 is Plaspy compatible out of the box, final behavior depends on the device firmware and configuration choices.

## Protocol Overview

The communication protocol for the AT501 defines how the device identifies itself, reports GNSS position and telemetry, and sends event driven messages such as accelerometer movement reports. In public terms this protocol enables the tracker to reliably deliver actionable location and status data to the Plaspy platform without requiring users to manage low level packet formats.

- The protocol carries GNSS position, time, and basic telemetry such as battery and radio status to Plaspy.
- Event driven reports from the AT501, like accelerometer triggered movement messages, help conserve battery while still surfacing important location changes.
- BLE is used for local provisioning and diagnostics and does not replace the cellular uplink to Plaspy.
- Protocol messages allow the device to present identifying information so Plaspy can associate incoming data with the correct asset record.
- Payload behavior and reporting cadence are influenced by configured intervals and firmware settings on the device.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker connections and automatically determines the tracker protocol from the reported traffic and identification fields. In most deployments you do not need to select a protocol manually in Plaspy as long as the device is correctly pointed to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy accepts incoming device connections on port 8888 and uses that port for all supported devices.
- Devices can be configured to report using either UDP or TCP on port 8888 depending on device capability and network configuration.
- When the AT501 sends uplinks to the Plaspy endpoint, the platform automatically associates the incoming data with the appropriate device profile.
- Proper device provisioning and correct reporting address ensure Plaspy can detect and process the tracker protocol without manual selection.

## Transport and Connection Context

The AT501 uses cellular uplinks to send data to Plaspy and may be configured to use different transport methods depending on deployment priorities such as reliability or battery life. This section focuses on the connection context rather than low level protocol internals.

- The AT501 may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- Devices can point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS is not available or for network testing.
- Plaspy uses the same port 8888 across all supported devices, simplifying provisioning and firewall rules.
- Choose UDP for lower-latency or minimal overhead scenarios and TCP if the device firmware and network path require connection-oriented transport.
- Ensure APN and SIM provisioning for the AT501 allow outbound connections to the Plaspy endpoint and that any carrier firewalls allow the selected transport.

## Protocol Compatibility Notes

- The AT501 is compatible with Plaspy out of the box, but firmware revisions can change available fields, reporting cadence options, or event triggers.
- Hardware revisions or different production batches may introduce minor variations in behavior; verify device model and revision when troubleshooting.
- Transport selection (UDP vs TCP) is set on the device and can affect delivery characteristics and battery consumption.
- BLE is intended for local configuration and commissioning and does not replace cellular reporting to Plaspy.
- The AT501 does not include CANBus, RS232, ADC, or dedicated digital I O for engine signals or direct fuel monitoring; use a different model for vehicle engine telemetry.
- Always validate compatibility and the latest protocol details against the manufacturer documentation for the specific firmware shipped with your device.

## Why Protocol Understanding Matters

Understanding how the AT501 communicates with Plaspy helps ensure reliable setup, efficient battery usage, and faster troubleshooting when devices do not behave as expected. Knowing the role of reporting intervals, event triggers, and transport choices lets you tailor deployments to operational needs.

- Proper configuration of reporting intervals and movement detection preserves battery life while delivering the needed visibility.
- Awareness of transport options helps align connectivity behavior with carrier performance and firewall policies.
- Recognizing firmware dependent features reduces time spent troubleshooting missing telemetry or changed field names.
- Knowing BLE provisioning workflows speeds commissioning and avoids misconfiguration during deployment.
- Understanding how Plaspy associates incoming reports with devices simplifies registration and device lifecycle tasks.

## Why Use Plaspy with This Protocol

Using the AT501 with Plaspy provides long duration asset visibility with minimal maintenance, making it a strong match for tracking trailers, containers, tools, and other unpowered assets. The device's low power modes, accelerometer driven reports, and multi network cellular uplink help maintain continuous telemetry while minimizing field service intervals.

Plaspy centralizes position, event alerts, and telemetry into a single fleet management view so organizations can monitor asset location history, respond to movement alerts, and schedule maintenance efficiently. To learn more about Plaspy and how it integrates with devices like the AT501, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify current device specific protocol information on the Astra Telematics website at https://astratelematics.com/.
