---
slug: /totemtech/at04/protocol
id: at04-protocol
sidebar_label: Protocol
title: Totemtech - AT04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Totemtech AT04 GPS tracker and how it communicates with Plaspy for reliable tracking and telemetry
keywords:
  - Totemtech AT04 protocol
  - Totemtech AT04 GPS protocol
  - AT04 protocol Plaspy
  - Totemtech AT04 communication protocol
  - AT04 tracking protocol
  - Totemtech GPS tracker compatibility
  - Plaspy compatible trackers
  - vehicle tracking AT04
  - fleet management AT04
  - AT04 telemetry protocol
---

# Totemtech - AT04 Protocol

This page describes the public protocol context for using the Totemtech AT04 tracker with the Plaspy platform. It focuses on how the device communicates its position and telemetry to Plaspy without exposing proprietary packet details, and it explains the connection settings and operational considerations needed for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the AT04 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and the manufacturer implementation, so keep device firmware and manufacturer documentation in mind during setup and troubleshooting.

## Protocol Overview

The communication protocol used by the AT04 governs how the device identifies itself, reports GNSS positions, and sends sensor and input/output events to a tracking server. In practice, the protocol enables continuous location reporting, event driven alarms, and periodic telemetry needed for mapping and fleet management.

- Allows the AT04 to transmit GNSS position fixes and satellite quality indicators to the server for real time mapping.
- Carries digital input and output state, tremble sensor events, and analog sensor readings such as fuel level into Plaspy.
- Supports event based messages for alarms, geofence breaches, tamper detection, and ignition state changes so Plaspy can trigger alerts and actions.
- Enables configurable reporting rules so the device can send data by time, distance, angle, engine state, or immediately on alarm.
- Provides the identity and status information Plaspy needs to correlate incoming data with the correct vehicle record.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a shared, public endpoint and automatically determines the tracker protocol used by reporting devices. When the AT04 is configured correctly to send data to Plaspy, manual protocol selection in the platform is typically not necessary.

- Plaspy listens on a common endpoint domain d.plaspy.com and the public server IP 54.85.159.138 for device connections.
- All devices supported by Plaspy use the same port, simplifying device configuration across mixed fleets.
- Plaspy automatically detects the tracker protocol once the AT04 starts reporting to the Plaspy endpoint, reducing the need for manual mapping.
- Proper device configuration to point at the Plaspy endpoint is usually the primary requirement for automatic detection and ingestion.
- If a device does not appear in Plaspy, verify the reporting address, transport mode, and that the device is permitted to send data on the configured network.

## Transport and Connection Context

The AT04 can send data over cellular networks to Plaspy using either UDP or TCP depending on the device firmware and configuration options. Understanding the transport and endpoint settings is essential to ensure reliable delivery of positions and alarms.

- The AT04 may be configured to report to d.plaspy.com or to the numeric server address 54.85.159.138 depending on installer preference.
- Plaspy accepts connections on port 8888 and the AT04 can be set to use either UDP or TCP on that same port.
- All Plaspy supported devices use the same port, which simplifies firewall and network configuration for fleet deployments.
- Choose UDP or TCP on the device based on the unit firmware options and network behavior at the installation site.
- Confirm APN and GPRS or LTE data settings on the SIM and device so the tracker can reach the Plaspy endpoint over the cellular network.

## Protocol Compatibility Notes

- Firmware revisions may change available commands, reporting intervals, and transport options. Always note the firmware version when testing compatibility.
- Hardware revisions and regional module selections (for example 2G versus 4G variants) can affect available transport modes and network behavior.
- Manufacturer configuration paths such as SMS commands, GPRS settings, or Windows configuration tools will influence how the device is pointed to Plaspy.
- Transport selection between UDP and TCP can affect delivery guarantees and should match the device capability and network environment.
- Verify that the AT04 reporting rules (time, distance, angle, alarm triggers) are set to meet your operational requirements before large scale deployment.
- When in doubt, validate device behavior against the manufacturer documentation and test a small set of units prior to fleet rollout.

## Why Protocol Understanding Matters

A clear, practical understanding of the AT04 communication protocol helps ensure smooth device onboarding, accurate telemetry, and reliable alerting inside Plaspy. Knowing the role of transport, reporting rules, and device configuration reduces troubleshooting time and improves long term reliability.

- Ensures the device is configured to report to the correct Plaspy endpoint so positional data appears in the right account.
- Helps set appropriate reporting intervals and event triggers to balance battery life and tracking fidelity.
- Simplifies diagnosis of missing data by narrowing investigation to transport, APN, or firmware issues rather than platform parsing.
- Avoids common network issues by aligning firewall and carrier settings with the device transport and Plaspy port usage.
- Improves confidence that critical functions like immobilizer commands and alarm events will be delivered and acted on by the platform.

## Why Use Plaspy with This Protocol

Using the AT04 with Plaspy gives organizations practical visibility into vehicle movements, telemetry, and security events. The AT04’s multi GNSS support, low power design, and sensor inputs complement Plaspy’s mapping, alerting, and reporting capabilities to deliver actionable fleet insights.

Plaspy’s automatic protocol detection and shared endpoint approach reduce setup complexity for mixed fleets, while the AT04’s flexible configuration options make it straightforward to point units at the Plaspy endpoint. To learn more about Plaspy and how it works with compatible trackers, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific information with the manufacturer at http://www.totemtek.com/
