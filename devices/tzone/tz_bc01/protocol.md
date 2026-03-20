---
slug: /tzone/tz_bc01/protocol
id: tz_bc01-protocol
sidebar_label: Protocol
title: TZone - TZ-BC01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for using the TZone TZ BC01 with Plaspy including connection settings and compatibility guidance
keywords:
  - TZone TZ-BC01 protocol
  - TZone TZ-BC01 GPS protocol
  - TZone TZ-BC01 iBeacon
  - TZone TZ-BC01 tracking protocol
  - TZone tracker Plaspy compatibility
  - TZone protocol Plaspy
  - TZ-BC01 Bluetooth tracking
  - iBeacon asset tracking
  - fleet management Plaspy
  - tracker integration guide
---

# TZone - TZ-BC01 Protocol

This page describes the public protocol context for using the TZone TZ-BC01 tracker with Plaspy. It focuses on how the device communicates in general terms, how Plaspy accepts and recognizes incoming device data, and what to consider when configuring a TZ-BC01 for use with the Plaspy platform.

The TZ-BC01 is a compact Bluetooth beacon device that uses iPhone iBeacon style broadcasts over Bluetooth Low Energy. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact behavior for reporting and firmware features can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device specific details when needed.

## Protocol Overview

The TZ-BC01 broadcasts proximity data using the iBeacon profile over Bluetooth Low Energy. For Plaspy to consume location or presence information from a TZ-BC01, the beacon payload is typically collected by a compatible receiver or gateway and then forwarded to the Plaspy platform in network form. The protocol layer in this context is the set of broadcast and reporting conventions that allow the tracker to be identified, associated with an asset, and used by Plaspy for monitoring and location services.

- The tracker uses Bluetooth 4.0 iBeacon style broadcasts to announce identity and proximity information.
- Broadcast interval and transmit power are configurable on the device and affect how often and how far the beacon is detectable.
- A networked gateway, smartphone bridge, or aggregator typically forwards beacon observations to Plaspy so they become usable telemetry.
- The protocol enables the tracker to be associated with an asset record and to provide presence or approximate location data.
- Plaspy relies on the broadcast identity plus forwarding metadata to correlate beacons with devices in the platform.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device data from a single shared endpoint and to automatically identify the incoming protocol. When a gateway or forwarding device sends tracker data to Plaspy, the platform uses the connection and message characteristics to determine the tracker type so users do not normally need to manually select a protocol inside Plaspy.

- Plaspy receives device reports at the domain d.plaspy.com and the server IP 54.85.159.138 on the shared port 8888.
- All devices supported by Plaspy use the same port, simplifying gateway configuration and firewall rules.
- The device may be configured to forward data to Plaspy using either UDP or TCP on port 8888 depending on gateway capabilities.
- When the forwarding endpoint is set correctly, Plaspy automatically detects the tracker protocol and associates incoming data with the correct device model.
- In most cases, users configure their gateway or forwarding client to point at d.plaspy.com and Plaspy handles the rest.

## Transport and Connection Context

Transport and connection choices determine how beacon observations reach Plaspy from a receiving device. The TZ-BC01 itself is a Bluetooth beacon; network transport is performed by an intermediary that forwards the observed data into Plaspy. Understanding this connection context helps ensure stable delivery of tracker reports.

- Devices may forward tracked observations to Plaspy using UDP or TCP on port 8888 depending on the forwarding device configuration.
- The recommended Plaspy endpoint values for forwarding devices are d.plaspy.com or 54.85.159.138.
- Plaspy uses the same port for all supported devices to reduce configuration complexity across multiple tracker types.
- Gateways and aggregators that collect BLE beacons will need network access to the Plaspy endpoint and appropriate firewall rules for port 8888.
- Choose UDP when low overhead is preferred and the gateway or network supports it, or TCP for reliable delivery if supported by the forwarding device.

## Protocol Compatibility Notes

- iBeacon broadcasting behavior such as UUID, major, minor, and advertising interval can differ by firmware and configuration; verify these fields with the manufacturer.
- Hardware revisions or firmware updates to the TZ-BC01 can change broadcast timing, signal strength options, or security features such as password protection.
- How beacons are collected and forwarded to Plaspy depends on the chosen gateway or smartphone bridge; not all forwarders support the same metadata or transport options.
- Selecting UDP or TCP for forwarding should match the gateway capability and network reliability requirements.
- Always validate that the forwarding device points to d.plaspy.com or 54.85.159.138 on port 8888 to ensure proper delivery to Plaspy.
- Confirm any security or pairing features on the TZ-BC01 are accounted for in your collection and forwarding setup.

## Why Protocol Understanding Matters

Understanding the public protocol behavior for the TZ-BC01 helps with correct setup, predictable operation, and efficient troubleshooting when integrating the tracker with Plaspy. Knowing how broadcasts are produced and how they must be forwarded into the platform reduces setup time and improves data reliability.

- Ensures correct gateway configuration so beacon observations reach Plaspy consistently.
- Helps diagnose visibility or range issues by correlating broadcast interval and transmit power settings with observed results.
- Supports planning for battery life trade offs based on broadcasting interval and transmit power.
- Reduces integration time by aligning beacon identity fields with Plaspy asset records.
- Clarifies the role of firmware and hardware differences when behavior varies between units.

## Why Use Plaspy with This Protocol

Using the TZ-BC01 with Plaspy is useful when you need a simple, low power beacon solution combined with a networked platform for visibility and operational oversight. Plaspy can take forwarded beacon observations and incorporate them into asset tracking views, alerts, and reporting workflows alongside other device types so teams can manage mixed fleets and tracked items from a single platform.

If you want to learn more about how Plaspy handles device integration, visit https://www.plaspy.com for platform information and documentation. For the most current device specific protocol and firmware details for the TZ-BC01, please verify information with the manufacturer at http://www.tzonedigital.com/ since protocol support and firmware behavior can change over time.
