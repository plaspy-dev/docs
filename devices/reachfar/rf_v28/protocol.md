---
slug: /reachfar/rf_v28/protocol
id: rf_v28-protocol
sidebar_label: Protocol
title: Reachfar - RF-V28 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for connecting the Reachfar RF V28 pendant to Plaspy for real time tracking and alerts
keywords:
  - Reachfar RF V28 protocol
  - Reachfar RF V28 GPS protocol
  - RF V28 Plaspy compatibility
  - Reachfar personal tracker protocol
  - RF V28 tracking protocol
  - Reachfar pendant GPS protocol
  - RF V28 communication protocol
  - Plaspy tracker compatibility
  - personal safety tracker protocol
  - RF V28 tracking integration
---

# Reachfar - RF-V28 Protocol

This page covers the public protocol context for using the Reachfar RF-V28 GPS Tracking SOS Pendant with Plaspy. It explains how the tracker typically communicates with the Plaspy platform in public, non-sensitive terms, and what aspects of the tracker reporting behavior matter when integrating the device into your monitoring workflow.

The RF-V28 is Plaspy compatible out of the box and provides GPS, A GPS, Wi‑Fi, and LBS positioning plus SOS and fall detection features. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation so it is important to validate device settings against manufacturer documentation.

## Protocol Overview

The RF-V28 communication protocol is the set of rules and message flows the pendant uses to report location, status, and events to a remote server. In practice, this protocol determines how the device identifies itself to Plaspy, how it sends periodic location updates and alarm events, and how the platform maps those messages into usable telemetry.

- Enables the RF-V28 to report location fixes and positioning method metadata so Plaspy can display maps and history.
- Carries event notifications such as SOS button presses, fall detection alarms, and geofence or Wi‑Fi fence breaches to the server.
- Provides device identity and basic status so Plaspy can associate incoming messages with the correct account and wearable.
- Supports configurable reporting intervals and state changes so Plaspy receives real time and historical route data.
- Allows Plaspy to receive alerting events that trigger notifications and escalation workflows for caregivers and administrators.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared server endpoint and automatically determines the tracker protocol from incoming connections. When the RF-V28 is pointed to the Plaspy endpoint and properly configured to send data, users typically do not need to select a protocol inside Plaspy manually.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol from the incoming connection and message patterns.
- Ensure the RF-V28 is configured to report to d.plaspy.com or directly to 54.85.159.138 for automatic detection.
- Proper device identity fields (IMEI or device ID) must be included in reported messages so Plaspy can match the wearable to your account.

## Transport and Connection Context

Transport describes the network layer the RF-V28 uses to reach Plaspy and the basic connection behavior devices use when sending telemetry. The RF-V28 may be configured to send messages over either UDP or TCP depending on the device firmware and chosen settings.

- The device may be configured using UDP or TCP on port 8888.
- Devices can point at d.plaspy.com or the numeric address 54.85.159.138 for reporting.
- All devices in Plaspy use the same port, which simplifies firewall and network configuration on the receiving side.
- Choice of UDP or TCP depends on device firmware and desired tradeoffs between reliability and latency.
- Network factors such as carrier NAT, firewall rules, and mobile signal quality can affect initial registration and ongoing reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or transport preference; always verify the firmware version when troubleshooting.
- Hardware revisions or SKU differences may affect available positioning methods or event sensors such as fall detection.
- Manufacturer configuration options (for example whether to use UDP or TCP) impact how the device should be set up to report to Plaspy.
- SMS command support and app configuration are device side features and operate separately from the IP reporting path into Plaspy.
- Plaspy automatically detects the tracker protocol, but the device must be configured to report to the Plaspy endpoint for detection to occur.
- Validate reported device identity and telemetry against the official Reachfar documentation to confirm fields required by Plaspy are present.

## Why Protocol Understanding Matters

Understanding how the RF-V28 communicates helps ensure a reliable connection to Plaspy, faster troubleshooting, and consistent alerting for caregivers and administrators.

- Confirms the device is pointing at the correct Plaspy endpoint and using the expected transport on port 8888.
- Helps distinguish between device side issues such as firmware settings and network issues like blocked ports or carrier NAT.
- Improves setup speed by ensuring reporting intervals and event reporting are configured to match monitoring needs and battery expectations.
- Clarifies how event types such as SOS, fall detection, and Wi‑Fi fence exits are delivered to the Plaspy platform.
- Reduces ambiguity when validating historical route data, timestamps, and positioning method quality in Plaspy views.

## Why Use Plaspy with This Protocol

Using the RF-V28 with Plaspy gives caregivers and organizations a single place to receive live location, SOS alerts, and historical routes from personal pendants alongside other telemetry sources. Plaspy’s automatic protocol detection and shared endpoint model reduce setup complexity so the RF-V28 can begin feeding real time tracking and alarm events into maps, notifications, and reporting tools more quickly.

Learn more about Plaspy on the main website https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest RF-V28 device specific protocol information and firmware updates on the manufacturer site https://www.reachfargps.com/ before finalizing deployment decisions.
