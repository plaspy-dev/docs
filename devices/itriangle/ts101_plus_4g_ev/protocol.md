---
slug: /itriangle/ts101_plus_4g_ev/protocol
id: ts101_plus_4g_ev-protocol
sidebar_label: Protocol
title: iTriangle - TS101 PLUS 4G EV Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the iTriangle TS101 PLUS 4G EV tracker with Plaspy for GPS tracking and telematics
keywords:
  - iTriangle TS101 PLUS 4G EV protocol
  - iTriangle GPS tracker protocol
  - TS101 PLUS 4G EV Plaspy compatibility
  - EV fleet tracking protocol
  - TS101 4G tracking protocol
  - GPS tracker communication Plaspy
  - vehicle telemetry protocol
  - CAN bus telematics integration
  - multi GNSS tracker protocol
  - LTE Cat1 tracker protocol
---

# iTriangle - TS101 PLUS 4G EV Protocol

This page describes the public protocol context for using the iTriangle TS101 PLUS 4G EV tracker with Plaspy. It focuses on how the device communicates with Plaspy using published connection settings and what to consider when integrating the tracker into a telematics deployment. The content is intentionally high level and avoids firmware or vendor private internals while remaining useful for installers and fleet managers.

The TS101 PLUS 4G EV is an LTE Cat 1 tracker built for electric vehicles that provides multi GNSS positioning, CAN bus telemetry, motion and event data, BLE sensor support, and OTA management. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always verify manufacturer documentation for firmware specific details.

## Protocol Overview

The communication protocol used by the TS101 PLUS 4G EV governs how the tracker reports location, vehicle telemetry, and events to a cloud endpoint so Plaspy can ingest and present that data. The protocol defines how the device identifies itself, how telemetry and event flags are framed and transmitted, and how the cloud acknowledges or responds to important commands or configuration updates.

- Enables transmission of GNSS positions, motion sensor events, and CAN bus telemetry from the device to Plaspy.
- Carries device identity and status information that lets Plaspy map messages to a specific tracker and vehicle record.
- Supports event driven reporting such as harsh braking, tamper, panic, ignition changes, and other alerts.
- Allows OTA configuration and firmware updates to be coordinated with the cloud platform when supported by the device.
- Facilitates reliable delivery over cellular sessions so Plaspy can display real time and historical data for fleet management.

## How Plaspy Detects the Protocol

Plaspy is designed to receive telemetry from many different tracker models and automatically detect the protocol used by each device when it connects to the shared endpoint. In most cases a properly configured TS101 PLUS 4G EV will begin reporting to Plaspy without requiring the user to manually select a protocol inside the platform.

- Plaspy accepts connections on a single shared port for all supported devices and uses automatic detection when messages arrive.
- The platform examines incoming messages at the shared endpoint to associate data with the correct device and format.
- Users typically only need to ensure the device is configured to report to the Plaspy endpoint and port for automatic detection to occur.
- Plaspy supports both common transport methods so a tracker can use the most appropriate option for its network or firmware.
- If unusual behavior arises, consult device logs and manufacturer guidance to confirm the tracker is pointed at the correct Plaspy endpoint.

## Transport and Connection Context

The TS101 PLUS 4G EV can be configured to send data over the network using either UDP or TCP transport depending on device firmware and deployment choices. Plaspy publishes a single reachable endpoint and IP that devices may target; the tracker should be configured to report to that endpoint using the supported transport and port.

- Plaspy server domain is d.plaspy.com and can be used as the device reporting host.
- Plaspy server IP is 54.85.159.138 and may be used in environments where a numeric address is preferred.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies configuration for mixed fleets.
- Choose UDP or TCP based on network reliability, firewall rules, and the device firmware capabilities.
- Ensure cellular APN and embedded eSIM settings on the tracker are configured so the unit can establish outbound sessions to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can introduce changes in message timing, available telemetry fields, or optional features; compare firmware release notes when troubleshooting.
- Hardware revisions or regional SKUs may affect available GNSS constellations, supported bands, or interface assignments for CAN and serial ports.
- Manufacturer configuration options can alter whether the device uses UDP or TCP, periodic versus event reporting, and power saving behavior.
- CAN bus messages and custom vehicle signals may require mapping or translation inside Plaspy to appear correctly in dashboards.
- Some features such as BLE sensor reporting or advanced diagnostics depend on both firmware support and Plaspy data schema mapping.
- Validate any custom deployment workflows against the official manufacturer documentation before rolling out at scale.

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps ensure successful setup, reliable data flow, and efficient troubleshooting when integrating the TS101 PLUS 4G EV with Plaspy. Knowing the transport choices, the kinds of telemetry that will be reported, and the impact of firmware and hardware revisions reduces deployment time and improves operational reliability.

- Speeds initial setup by ensuring devices point to the correct Plaspy endpoint and port.
- Helps isolate transport level issues such as blocked ports or incorrect DNS settings.
- Clarifies expectations for which telemetry fields and events will be available in Plaspy.
- Supports planning for OTA updates and configuration management across a fleet.
- Aids in tuning reporting intervals and power profiles to meet battery and vehicle constraints.
- Improves troubleshooting workflows by narrowing scope to firmware, transport, or configuration causes.

## Why Use Plaspy with This Protocol

Pairing the TS101 PLUS 4G EV with Plaspy gives fleet operators and OEM integrators a practical path to gather high resolution location, CAN bus diagnostics, and event driven telemetry for electric vehicle fleets. The tracker hardware is purpose built for EV environments and Plaspy brings centralized dashboards, alerts, and reporting that turn those signals into actionable insights for operations, safety, and maintenance.

If you want to learn more about how Plaspy works with devices like the TS101 PLUS 4G EV and the broader capabilities of the platform, visit https://www.plaspy.com. For the most current device specific protocol details, firmware information, and hardware revisions consult the manufacturer at https://www.itriangle.net/ as protocol support and firmware behavior can change over time.
