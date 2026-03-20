---
slug: /tzone/tz_bt07/protocol
id: tz_bt07-protocol
sidebar_label: Protocol
title: TZone - TZ-BT07 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the TZone TZ BT07 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - TZone TZ BT07 protocol
  - TZone TZ BT07 GPS tracker
  - TZ BT07 iBeacon compatibility
  - TZ BT07 communication protocol
  - TZ BT07 Plaspy integration
  - Bluetooth beacon tracking
  - Plaspy device compatibility
  - tracker protocol guide
  - GPS and BLE tracker protocol
  - device protocol overview
---

# TZone - TZ-BT07 Protocol

This page summarizes the public protocol context for using the TZone TZ-BT07 tracker with Plaspy. It focuses on how the device's public communications are used in real world integrations and what to expect when connecting the tracker into the Plaspy ecosystem. The TZ-BT07 is a compact Bluetooth based tracker that broadcasts iBeacon frames, and this documentation treats those publicly available behaviors in a practical integration context.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is sent to the Plaspy endpoint. Devices and gateways that forward tracker data to Plaspy should target d.plaspy.com or the server IP 54.85.159.138 on port 8888. The device may be configured to use UDP or TCP on port 8888 and Plaspy uses the same port for all devices while detecting the protocol automatically. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so always confirm device specific details with the manufacturer.

## Protocol Overview

The TZ-BT07 communicates primarily as a Bluetooth Low Energy beacon using the iBeacon broadcasting technique. In practical integration scenarios the iBeacon frames provide proximity and identifying information that can be collected by a gateway or mobile device and then forwarded to a server such as Plaspy. Understanding this public broadcast behavior helps you plan how data will flow from the tracker into Plaspy for visibility and monitoring.

- The tracker broadcasts iBeacon BLE frames that include device identifiers and proximity data for local detection.
- Broadcast interval and transmitted power are configurable on the device and affect update frequency and effective range.
- A gateway or smartphone typically collects BLE broadcasts and forwards relevant data to a server for remote visibility.
- When forwarded to Plaspy, the server receives inbound reports at the shared endpoint and associates them with a device profile.
- Knowing the beacon behavior helps determine best placement, gateway selection, and expected reporting cadence.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when data is received at the shared endpoint and port. For devices like the TZ-BT07 that use BLE for local broadcasts, detection and integration typically happen once a gateway or app relays beacon data to Plaspy. In most standard setups the user does not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy accepts incoming device reports at d.plaspy.com and at the server IP 54.85.159.138 on port 8888.
- Devices or gateways may use TCP or UDP on port 8888 to forward telemetry to Plaspy.
- Plaspy uses the same port for all supported devices and applies automatic detection rather than requiring manual protocol selection.
- Properly formatted reports and a stable forwarding path from the gateway to Plaspy allow the platform to identify the device type and parse incoming data.
- If a gateway or forwarding application is used, ensure it preserves the identifying fields that Plaspy needs for automatic detection.

## Transport and Connection Context

Transport and connection choices depend on how the TZ-BT07 data is relayed to the internet. Because the TZ-BT07 broadcasts locally over BLE, an intermediary (gateway, bridge, or smartphone) is usually required to send tracker data to Plaspy. Plaspy listens for inbound data on a single shared port so that device setup and firewall rules are straightforward.

- Plaspy server domain for device reporting is d.plaspy.com and the known server IP is 54.85.159.138.
- The designated port for all devices is 8888 and Plaspy uses this same port for incoming reports.
- Device data forwarded to Plaspy may use UDP or TCP on port 8888 depending on the gateway or forwarding app configuration.
- When using a gateway, ensure it can forward the BLE derived data to d.plaspy.com or to 54.85.159.138 on port 8888.
- Keep network firewalls and NAT policies in mind when configuring gateways to ensure reliable delivery to Plaspy.

## Protocol Compatibility Notes

- The TZ-BT07 relies on BLE iBeacon broadcasts; network reporting typically requires a gateway or mobile device to relay data to a remote server.
- Firmware versions and device configuration options such as broadcast interval and transmitted power can change behavior and compatibility.
- Hardware revisions or manufacturer firmware changes might alter identifiable fields used by automatic detection systems.
- Selecting UDP versus TCP for forwarding is a gateway-level choice and can affect reliability and latency.
- Confirm that any gateway or forwarding software you use preserves the beacon identifiers that Plaspy needs for device matching.
- Always validate compatibility against the manufacturer documentation when planning deployments or upgrades.

## Why Protocol Understanding Matters

A clear understanding of the TZ-BT07 communication protocol and how its BLE broadcasts are forwarded to Plaspy helps with correct setup, reliable reporting, and long term maintenance. Knowing where the beacon data originates and how it reaches Plaspy reduces setup time and simplifies troubleshooting when expected data does not arrive.

- Ensures you select the right gateway or mobile bridge to collect and forward BLE broadcasts.
- Helps determine optimal broadcast interval and transmission power settings for coverage and battery life.
- Makes it easier to configure network rules so reports can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Aids in diagnosing issues by clarifying whether a problem is local BLE reception or upstream forwarding to Plaspy.
- Supports planning for firmware updates and device lifecycle management to preserve compatibility.

## Why Use Plaspy with This Protocol

Using Plaspy to receive forwarded data from TZ-BT07 devices gives organizations centralized visibility and historical records of beacon-derived location or proximity events. Plaspy's automatic protocol detection and shared port approach reduce configuration friction for deployments that use mixed fleets of trackers and gateways.

For more details about how Plaspy handles device reports and to learn about integration options, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware notes, and hardware revisions with the manufacturer at http://www.tzonedigital.com/ since protocol support and implementation details can change over time.
