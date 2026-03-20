---
slug: /itriangle/at101_4g/protocol
id: at101_4g-protocol
sidebar_label: Protocol
title: iTriangle - AT101 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the iTriangle AT101 4G and how it communicates with Plaspy for reliable asset and fleet tracking
keywords:
  - iTriangle AT101 4G protocol
  - AT101 4G GPS tracker
  - iTriangle protocol Plaspy
  - AT101 4G communication
  - AT101 tracking protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - asset tracking AT101
  - long battery GPS tracker
  - 4G GPS tracker Plaspy
---

# iTriangle - AT101 4G Protocol

This page provides the public protocol context for using the iTriangle AT101 4G tracker with Plaspy. It explains, in non sensitive terms, how the device communicates with the Plaspy platform and what to check when integrating the tracker into fleet and asset monitoring workflows. The focus is on communication behavior that affects setup, connectivity, and reliable ingestion of location and sensor data.

The AT101 4G is a Plaspy compatible cordless asset tracker with a 10000mAh battery, multi constellation GNSS, motion sensors, BLE support, and OTA management. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact runtime protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device specific details should be validated with iTriangle documentation when needed.

## Protocol Overview

The tracker protocol describes how the AT101 4G reports GNSS, sensor and event telemetry to a remote server such as Plaspy. In practice this means the device formats and transmits periodic location updates, motion and tamper events, and status messages so Plaspy can display live location, history, and alerts.

- Enables the AT101 to send GNSS positions and on device sensor events to Plaspy for mapping and alerting
- Carries identification and status information so Plaspy can associate messages with the correct device record
- Supports local buffering so queued records are transmitted after temporary connectivity loss
- Allows over the air configuration and firmware management to be coordinated with Plaspy device workflows
- Delivers event driven messages for motion, geofence and tamper alerts that drive notifications in Plaspy

## How Plaspy Detects the Protocol

Plaspy receives data from many tracker models and automatically detects the tracker protocol when a device reports to the shared Plaspy endpoint. In most cases you do not need to select a protocol manually inside Plaspy if the device is configured to transmit to the correct Plaspy endpoint and port.

- Plaspy listens on a shared server address and port so devices report to a common endpoint
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- The port used by Plaspy is 8888 and all devices on Plaspy use the same port
- Devices may be configured to use UDP or TCP to report to Plaspy on port 8888
- When the AT101 reports to the Plaspy endpoint the platform will detect and route incoming messages to the appropriate device record

## Transport and Connection Context

Connection context determines how the AT101 establishes a session and delivers telemetry to Plaspy. The device supports cellular uplink and may be configured to use either UDP or TCP depending on configuration and network conditions.

- The AT101 can be configured to send data over UDP or TCP on port 8888
- Devices may point to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138
- Plaspy uses port 8888 for all supported devices to simplify firewall and network configuration
- Ensure the device SIM and mobile network have outbound connectivity to the Plaspy endpoint and port
- Connection reliability and transport selection can affect battery usage and retry behavior

## Protocol Compatibility Notes

- Firmware differences can change reporting frequency, available fields, and supported transport protocols
- Hardware revisions or regional variants may alter available GNSS constellations, radio bands, or on device sensor behavior
- Manufacturer side settings or provisioning can affect default server address and transport type used by the tracker
- UDP is commonly used for low overhead reporting while TCP may be chosen for reliable session oriented delivery depending on device configuration
- Validate any device configuration steps against iTriangle documentation when changing server targets or transport settings
- Confirm OTA and FOTA behavior for your firmware build before rolling out configuration changes at scale

## Why Protocol Understanding Matters

Understanding the AT101 communication protocol helps avoid integration gaps and reduces troubleshooting time when devices do not appear in Plaspy as expected. It also supports planning for power budgets, connectivity resilience, and event fidelity.

- Ensures correct server and port are configured so data reaches Plaspy reliably
- Helps interpret why some events or telemetry fields appear differently between firmware versions
- Guides network and firewall setup so devices can reach d.plaspy.com or 54.85.159.138 on port 8888
- Informs power and reporting tradeoffs to optimize battery life for long term deployments
- Aids in coordinated OTA management so firmware and configuration changes behave as intended in Plaspy

## Why Use Plaspy with This Protocol

Using the iTriangle AT101 4G with Plaspy provides a practical path to continuous visibility and event driven workflows for assets that require cordless, long duration monitoring. Plaspy centralizes location, motion, geofence and tamper data from the AT101 into maps, history and alerting so teams can act on real time and historical intelligence.

To learn more about how Plaspy supports device onboarding, telemetry visualization and remote device management, visit https://www.plaspy.com. Protocol support and firmware behavior can change over time, so please verify the latest device specific protocol details and firmware notes on the manufacturer site at https://www.itriangle.net/.
