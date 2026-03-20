---
slug: /tzone/tz_bc02/protocol
id: tz_bc02-protocol
sidebar_label: Protocol
title: TZone - TZ-BC02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the TZone TZ BC02 tracker with Plaspy server settings and compatibility notes
keywords:
  - tzone tz bc02 protocol
  - tzone tz bc02 gps protocol
  - tz bc02 communication protocol
  - tz bc02 tracking protocol
  - tzone tracker protocol
  - tz bc02 plaspy compatibility
  - plaspy device protocol
  - vehicle tracking tz bc02
  - tz bc02 ibeacon bluetooth
  - tz bc02 battery life
---

# TZone - TZ-BC02 Protocol

This page describes the public protocol context for using the TZone TZ-BC02 tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in public, non-sensitive terms and what you should understand to integrate and operate the device reliably. The content reflects general device behavior rather than firmware specific internals.

The TZ-BC02 is a compact unit with BLE iBeacon support and long battery life, and it can operate in different reporting modes depending on configuration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and reporting details can vary by firmware version, hardware revision, and how the manufacturer implements features, so always validate device specifics against official documentation.

## Protocol Overview

At a high level the tracker communication protocol defines how the device identifies itself to a server, how it reports location and status, and how remote configuration is applied. For the TZ-BC02 this public overview helps operators understand what to expect when connecting the device to Plaspy without exposing firmware internals.

- Enables the device to establish a network connection and report telemetry and status to a backend service
- Carries identifying information so the server can associate messages with a specific tracker
- Transports periodic location or presence updates and optional status fields that affect monitoring and alerts
- Supports configuration and reporting interval changes sent from a management system or applied locally
- Allows the server to interpret incoming messages into usable tracking data for mapping and analysis

## How Plaspy Detects the Protocol

Plaspy accepts tracker connections on a common endpoint and port and will automatically detect the protocol used by a properly configured device. In most cases a device owner or integrator does not need to select a driver manually inside Plaspy when the tracker is pointed at the Plaspy endpoint.

- Plaspy server endpoint for device reporting is d.plaspy.com and the public IPv4 address is 54.85.159.138
- Plaspy listens on port 8888 for device traffic and all devices supported by Plaspy use this same port
- Devices may be configured to use either UDP or TCP to send data to Plaspy depending on what the device supports
- When the tracker sends recognizable telemetry to the Plaspy endpoint the platform detects and associates the correct handling automatically
- If a device fails to appear, confirm network settings and that the tracker is pointed to the Plaspy endpoint

## Transport and Connection Context

Connection and transport choices affect reliability, latency, and firewall requirements. The TZ-BC02 supports local Bluetooth iBeacon advertising for nearby device discovery; for cloud reporting the device may be configured to send data over mobile networks using UDP or TCP.

- Devices may be configured to connect to d.plaspy.com or to the numeric address 54.85.159.138
- Plaspy accepts device traffic on port 8888 and that port is shared across all supported devices
- The tracker can be set to use either UDP or TCP depending on device capabilities and integration needs
- Ensure any carrier APN or network settings allow outbound connections to the Plaspy endpoint on port 8888
- Local Bluetooth iBeacon behavior is separate from server reporting and primarily supports proximity use cases with smartphones

## Protocol Compatibility Notes

- Firmware variations can change which fields are reported and how often reports are sent; check device firmware version when validating behavior
- Hardware revisions may add or remove features such as local BLE broadcasting modes or power management options
- Manufacturer configuration tools or SIM level settings can influence whether the device uses UDP or TCP to reach the server
- Bluetooth iBeacon advertising is for local presence and does not replace server reporting to Plaspy for remote tracking
- Confirm any manufacturer notes about default reporting intervals and adjustable parameters before large scale deployment
- Always validate compatibility against the latest official manufacturer documentation for the TZ-BC02

## Why Protocol Understanding Matters

Understanding the device communication protocol helps ensure reliable handoff between the tracker and Plaspy during setup and over the life of the deployment. Knowing what the device reports and how it connects reduces troubleshooting time and improves operational uptime.

- Helps confirm the device is pointed at the correct Plaspy endpoint and using the supported transport
- Aids in interpreting missing or irregular reports by matching device behavior to expected protocol patterns
- Enables informed decisions about reporting intervals and power tradeoffs to meet operational needs
- Reduces time spent verifying network and carrier configuration when onboarding multiple units
- Supports lifecycle activities such as firmware updates and hardware replacement planning

## Why Use Plaspy with This Protocol

Using the TZ-BC02 with Plaspy provides a straightforward way to centralize location and status data from compact BLE enabled trackers alongside other fleet and asset devices. Plaspy’s shared endpoint design and automatic protocol detection simplify integration and reduce per-device configuration effort.

Plaspy listens for device traffic at d.plaspy.com and 54.85.159.138 on port 8888 and automatically detects the tracker protocol so you typically do not need to set a protocol manually. For full details on device specific protocol fields, firmware behavior, and any recent changes to the TZ-BC02 implementation, please refer to the manufacturer documentation at http://www.tzonedigital.com/. To learn more about Plaspy and how it can manage trackers like the TZ-BC02, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be verified with the official manufacturer resources.
