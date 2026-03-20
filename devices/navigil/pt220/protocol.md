---
slug: /navigil/pt220/protocol
id: pt220-protocol
sidebar_label: Protocol
title: Navigil - PT220 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Navigil PT220 GPS tracker and how it communicates with Plaspy for location reporting and device integration
keywords:
  - Navigil PT220 protocol
  - Navigil PT220 GPS protocol
  - PT220 protocol Plaspy
  - Navigil GPS tracker protocol
  - PT220 communication protocol
  - PT220 tracking protocol
  - Plaspy device compatibility
  - GPS tracker integration
  - personal tracker protocol
  - device reporting protocol
---

# Navigil - PT220 Protocol

This page covers the public protocol context for using the Navigil PT220 tracker with Plaspy. It describes how the device typically reports location and event information to Plaspy and explains the role of connection settings and reporting modes in a way that helps with integration and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior for the PT220 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, implementation independent details rather than firmware specific internals.

## Protocol Overview

The PT220 reporting protocol is the set of communication behaviors and message exchanges the tracker uses to send location and event data to a server like Plaspy. In practice the protocol enables the device to identify itself, deliver periodic or event driven location reports, and support alternative query modes such as SMS.

- Enables periodic location reporting and event driven reports for items like movement or geofence events
- Carries device identity information so Plaspy can associate messages with the correct tracker
- Supports both automatic GPRS reporting and manual SMS query modes as supported by the PT220 firmware
- Provides telemetry useful for monitoring battery status and basic device health in addition to GPS position
- Operates over standard cellular data channels when in GPRS mode to send reports to a remote endpoint

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a single shared endpoint and automatically identifies the tracker protocol so users generally do not need to select a protocol manually inside Plaspy. Proper device configuration to point at the Plaspy endpoint is the key step for automatic detection and successful integration.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Plaspy listens on port 8888 for all supported device traffic
- Devices may be configured to use either UDP or TCP to reach Plaspy depending on device support
- When a PT220 is configured to report to d.plaspy.com on the Plaspy port, Plaspy will automatically detect the protocol and associate incoming messages with the device

## Transport and Connection Context

Transport and connection settings determine how the PT220 reaches Plaspy on the network. The device is typically deployed with a SIM and cellular data enabled for GPRS mode but can also be used in SMS query mode for manual lookups.

- The PT220 may be configured to use either UDP or TCP when sending reports to Plaspy
- Plaspy accepts device traffic at d.plaspy.com or the server IP 54.85.159.138 on the shared port 8888
- All devices in Plaspy use the same port which simplifies server side routing and detection
- In GPRS mode the device uses the cellular data channel to send periodic and event reports to the configured endpoint
- In SMS mode the device can be queried by text or call depending on manufacturer firmware options

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported fields, and event triggers; verify behavior on the device under test
- Hardware revisions may introduce different radio or power management behavior that affects reporting frequency or wake triggers
- Manufacturer side configuration options such as reporting intervals and event thresholds affect what Plaspy receives
- Transport selection TCP versus UDP can be constrained by carrier network conditions and device configuration
- Automatic detection in Plaspy depends on the device sending recognizable reports to the shared Plaspy endpoint
- Always validate a sample device in your environment before wide scale deployment

## Why Protocol Understanding Matters

Understanding how the PT220 communicates helps ensure reliable reporting, faster troubleshooting, and predictable long term operation when integrated with Plaspy. A clear view of protocol behavior reduces setup time and helps when diagnosing issues such as missing reports or incorrect device associations.

- Confirms that the device is pointed to the correct Plaspy endpoint and using the expected transport
- Helps identify firmware related differences that might change report frequency or payload content
- Makes it easier to narrow down connectivity problems between the tracker and Plaspy
- Supports informed choices about transport mode and power management settings for battery life tradeoffs
- Improves confidence when validating device behavior in different network or geographic conditions

## Why Use Plaspy with This Protocol

Using the Navigil PT220 with Plaspy gives organizations and caregivers a straightforward way to collect location and event data from a compact personal tracker. Plaspy's shared endpoint model and automatic protocol detection reduce configuration overhead and make it easier to integrate devices that support GPRS reporting or SMS query modes.

If you want to learn more about how Plaspy works with devices like the PT220, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information with the manufacturer at http://www.navigil.com/
