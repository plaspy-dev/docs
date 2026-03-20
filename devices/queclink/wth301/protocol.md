---
slug: /queclink/wth301/protocol
id: wth301-protocol
sidebar_label: Protocol
title: QuecLink - WTH301 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the QuecLink WTH301 BLE environmental sensor and how it integrates with Plaspy real time tracking
keywords:
  - QuecLink WTH301 protocol
  - QuecLink WTH301 BLE sensor
  - WTH301 Plaspy compatibility
  - QuecLink WTH301 tracking protocol
  - WTH301 communication protocol
  - WTH301 cold chain sensor
  - QuecLink BLE integration
  - WTH301 fleet monitoring
  - WTH301 environmental telemetry
  - QuecLink WTH301 Plaspy
---

# QuecLink - WTH301 Protocol

This page provides a public protocol level overview for using the QuecLink WTH301 environmental sensor with Plaspy. It focuses on how the WTH301 participates in a Plaspy deployment when paired with BLE capable GPS trackers or BLE gateways, and explains the communication context that enables temperature and humidity telemetry to appear alongside vehicle and location data inside Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly pointed at the Plaspy endpoint. Exact protocol behavior and available features for the WTH301 can vary with firmware, hardware revision, and the implementation of the BLE gateway or tracker that forwards sensor broadcasts to Plaspy.

## Protocol Overview

The WTH301 is a Bluetooth Low Energy sensor that broadcasts temperature and humidity readings for collection by a BLE capable tracker or gateway. The device itself is a sensor node; it relies on a paired tracker or gateway to forward environmental telemetry to Plaspy where it is correlated with GPS and vehicle signals.

- The sensor broadcasts BLE advertisements or characteristic updates containing temperature and humidity values at configurable intervals.
- A Plaspy compatible BLE gateway or BLE enabled GPS tracker receives the sensor data and forwards it to Plaspy with device identity and location context.
- The protocol role is to ensure timely, accurate environmental readings are captured and associated with vehicle telemetry for real time monitoring and historical playback.
- Identification and pairing information from the gateway or tracker is used to map WTH301 readings to the correct asset or vehicle record in Plaspy.
- Timestamps, sample intervals, and basic metadata from the forwarding device allow Plaspy to present sensor data alongside other fleet telemetry.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and automatically detects the tracker protocol used by the forwarding device. In most deployments the user does not have to manually choose a protocol inside Plaspy when the tracker or gateway is configured to report to the Plaspy endpoint.

- Plaspy listens for incoming device connections at the public endpoint d.plaspy.com and the server address 54.85.159.138 on the Plaspy port.
- Plaspy uses the same port for all supported devices and models to simplify device configuration and deployment.
- When a BLE gateway or BLE enabled tracker forwards WTH301 data to Plaspy, the platform inspects the incoming report and maps the sensor telemetry to the correct asset without user protocol selection in most cases.
- If a device is not reporting as expected, verify the tracker or gateway is configured to point at the Plaspy endpoint and using the supported transport settings.

## Transport and Connection Context

The WTH301 communicates locally over BLE and relies on a forwarding device to send data to Plaspy over IP. The transport and connection choices that matter for integration are determined by the BLE gateway or tracker that relays the sensor readings.

- The forwarding device may send data to Plaspy over UDP or TCP on port 8888 depending on the tracker's capabilities and configuration.
- Devices that report to Plaspy can be configured to use the hostname d.plaspy.com or the server IP 54.85.159.138 as the destination for telemetry.
- All devices in Plaspy share the same network port to reduce configuration complexity across different models and deployments.
- Choose UDP or TCP on port 8888 according to your tracker or gateway documentation and network requirements.
- Keep the BLE link quality and gateway placement in mind since BLE range and interference affect how reliably the WTH301 reaches the forwarding device.

## Protocol Compatibility Notes

- BLE behavior and advertising intervals from the WTH301 can be influenced by firmware version and device settings on the sensor itself.
- Compatibility depends on the BLE gateway or BLE enabled tracker used to forward data; not every gateway exposes identical mapping to Plaspy fields.
- Hardware revisions of the WTH301 or of the forwarding tracker can introduce small differences in reported fields or metadata.
- Transport selection between UDP and TCP is a per device setting and should match the forwarding device capability and network policies.
- Confirm that the forwarding tracker or gateway is configured to report to d.plaspy.com or 54.85.159.138 and to use the Plaspy port when integrating the sensor.
- Always validate behavior in a test deployment before widescale rollout, and consult the manufacturer documentation for device specific details.

## Why Protocol Understanding Matters

Understanding the communication context and protocol behavior helps ensure reliable deployment, accurate data mapping, and efficient troubleshooting when the WTH301 is used with Plaspy. Clear expectations about how data flows from sensor to platform reduce integration time and improve operational outcomes.

- Helps verify that BLE pairing and gateway reception are functioning before troubleshooting cloud reporting.
- Enables correct choice of UDP or TCP on port 8888 based on network constraints and tracker support.
- Makes it easier to correlate sensor reading intervals with battery life expectations and maintenance planning.
- Improves incident investigation by clarifying whether missing readings are due to BLE link issues, gateway forwarding, or cloud processing.
- Guides decisions about gateway placement and fleet hardware selection for reliable cold chain monitoring.

## Why Use Plaspy with This Protocol

Pairing the WTH301 with Plaspy via a compatible BLE gateway or BLE enabled GPS tracker extends location aware fleet monitoring with precise environmental telemetry. That combination is particularly useful for refrigerated trailers, containers, and asset level monitoring where temperature and humidity are critical to compliance and operational decision making.

Plaspy simplifies device reporting by using a shared endpoint and port and automatically detecting the tracker protocol when devices are configured to report to the platform. To learn more about Plaspy and how it supports BLE sensor integration visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the QuecLink manufacturer documentation at https://www.queclink.com/ which is the authoritative source for hardware revisions and firmware behavior.
