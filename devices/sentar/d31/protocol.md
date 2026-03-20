---
slug: /sentar/d31/protocol
id: d31-protocol
sidebar_label: Protocol
title: Sentar - D31 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Sentar D31 kids GPS watch with Plaspy servers for reliable tracking and alerts
keywords:
  - Sentar D31
  - Sentar D31 protocol
  - Sentar D31 GPS protocol
  - D31 tracker Plaspy
  - Sentar GPS watch protocol
  - Plaspy compatible trackers
  - GPS tracker communication
  - child GPS tracker protocol
  - tracking protocol Plaspy
  - Sentar D31 communication
---

# Sentar - D31 Protocol

This page describes the public protocol context for using the Sentar D31 GPS kids watch with Plaspy. It focuses on how the device communicates with Plaspy servers in broad, non sensitive terms so system integrators, caregivers, and administrators can understand the role of the tracker reporting protocol when pairing the D31 with the Plaspy platform.

The D31 is a compact 4G wearable that combines GPS, A GPS, LBS, and WiFi positioning with cellular connectivity and SOS functionality. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The D31 reporting protocol is the mechanism that allows the watch to send location, status, and event data to Plaspy for real time visibility and historical playback. On a high level the protocol defines how the device identifies itself, how it reports position fixes and telemetry, and how events such as SOS alerts are signaled to a remote server.

- Enables device identification and regular reporting of location and telemetry to Plaspy.
- Transmits position sources such as GNSS fixes, assisted position data, and network derived locations for map display.
- Delivers device health and status indicators like battery level and connectivity state for monitoring.
- Signals high priority events such as SOS or emergency calls so Plaspy can surface immediate alerts.
- Supports periodic updates and event driven messages to balance timeliness and battery life.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically detects the tracker protocol used by an incoming device when the device is correctly configured to report to that endpoint. In most cases users will not need to select a protocol manually inside Plaspy if the D31 is pointed to the Plaspy server and uses the supported transport.

- Plaspy server domain is d.plaspy.com which is the recommended hostname for device reporting.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is restricted.
- The port is 8888 which is the single port Plaspy uses for all devices.
- The device may be configured using UDP or TCP on port 8888 depending on device and network conditions.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when data arrives.
- When properly directed to the Plaspy endpoint the D31 typically begins reporting without manual protocol selection in the Plaspy interface.

## Transport and Connection Context

Connection context covers how the D31 reaches Plaspy rather than the internal packet format. The D31 supports cellular connectivity across 4G and fallback networks and can use either UDP or TCP transport depending on device configuration and network behavior. Pointing the device to the correct Plaspy endpoint is the key step for reliable delivery.

- Devices may be configured to report to the hostname d.plaspy.com or the address 54.85.159.138.
- The device may use UDP or TCP on port 8888 for reporting; choose the transport supported by the network and device firmware.
- Plaspy uses the same port for every supported tracker which simplifies device setup across different models.
- Transport selection can affect delivery reliability and power usage but does not change the high level reporting semantics.
- Ensure the device SIM and cellular plan allow outbound connections to the Plaspy endpoint and that carrier firewalls permit the chosen transport.

## Protocol Compatibility Notes

- Firmware versions can introduce differences in reported fields, event naming, and timing behavior even for the same model.
- Hardware revisions or SKU variants of the D31 may enable or disable certain sensors or positioning sources.
- Manufacturer configuration tools or default settings may use different transports or endpoints; confirm the device is pointed at the Plaspy endpoint.
- Network conditions and carrier restrictions can influence whether UDP or TCP performs better for your deployment.
- Custom manufacturer firmware or region specific builds may alter reporting intervals or available telemetry fields.
- Always validate device behavior with live reporting to Plaspy and consult official Sentar documentation for device specific details.

## Why Protocol Understanding Matters

Understanding the D31 communication protocol helps ensure the device reports reliably to Plaspy, supports timely alerts, and behaves predictably across firmware and network conditions. Clear expectations about what the tracker sends and how Plaspy receives it reduce setup time and improve operational visibility.

- Simplifies initial setup by ensuring the device is pointed at d.plaspy.com or 54.85.159.138 on the correct port.
- Helps troubleshoot missing or delayed updates by checking transport selection and device network health.
- Clarifies expectations for available telemetry such as battery, connectivity status, and SOS events.
- Supports planning around battery life and reporting intervals based on how frequently the device transmits.
- Enables faster resolution when firmware updates change reported fields or event semantics.

## Why Use Plaspy with This Protocol

Using the Sentar D31 with Plaspy gives caregivers and administrators a unified way to monitor location, receive emergency alerts, and review device health from a single platform. The D31’s hybrid positioning and cellular connectivity provide continuous visibility that Plaspy can present as live maps, event notifications, and historical routes to support caregiving and oversight workflows.

To learn more about Plaspy and how it integrates with devices like the D31 visit https://www.plaspy.com. Protocol support, firmware behavior, and specific device implementation details can change over time, so verify current device protocol documentation and firmware notes with the manufacturer at http://www.sentarsmart.com/ .
