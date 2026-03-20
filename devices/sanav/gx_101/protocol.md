---
slug: /sanav/gx_101/protocol
id: gx_101-protocol
sidebar_label: Protocol
title: Sanav - GX-101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Sanav GX-101 tracker with Plaspy and using shared connection settings with automatic detection
keywords:
  - Sanav GX-101 protocol
  - Sanav GX-101 GPS protocol
  - Sanav GX-101 Plaspy
  - GX-101 tracker protocol
  - Sanav tracker communication
  - vehicle tracking Plaspy
  - GPS tracker Plaspy compatibility
  - GX-101 communication protocol
  - Sanav vehicle tracker
  - Plaspy device integration
---

# Sanav - GX-101 Protocol

This page covers the public protocol context for using the Sanav GX-101 tracker with Plaspy. It explains how the device typically communicates at a high level, what to expect from the tracker reporting behavior, and which Plaspy connection settings are used for integration. The content focuses on non‑sensitive protocol context and practical compatibility notes rather than firmware internals.

The GX-101 is a rugged in‑vehicle tracker that pairs a Siemens GSM module with a GM-158 MTK-3301 GPS receiver and opened I O for sensors and relays. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. In Plaspy, the public endpoint information is d.plaspy.com and the server IP is 54.85.159.138. The port used by all devices is 8888, and the device may be configured using UDP or TCP on port 8888. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

At a high level, the GX-101 reporting protocol is the mechanism the tracker uses to deliver position, status, and sensor information to a remote server like Plaspy. The protocol ensures that the tracker can identify itself, report GPS fixes, and convey I O and alarm states in a way the platform can consume and display.

- Enables the tracker to report location, time, and status to Plaspy so position history and alerts are available.
- Carries device identity information that allows Plaspy to associate incoming messages with the correct tracker.
- Conveys sensor and I O state changes such as ignition, door, or auxiliary inputs when available on the GX-101.
- Allows the tracker to transmit periodic or event driven location updates based on time and distance settings.
- Supports delivery over standard mobile networks to the Plaspy endpoint d.plaspy.com or the IP 54.85.159.138.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a single public endpoint and port. When a properly configured tracker reports to the Plaspy address, the platform detects the incoming protocol and maps the data into the Plaspy device model automatically, reducing manual setup steps for most users.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol when the device submits data to the endpoint.
- In most cases the user does not need to manually select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.
- Detection covers common reporting patterns used by vehicle trackers and maps fields into Plaspy dashboards and alerts.

## Transport and Connection Context

Transport choice and device configuration determine how the GX-101 reaches Plaspy. The tracker may be set to use either UDP or TCP depending on the firmware capability and configuration preferences. Connection reliability, battery backup, and local network conditions can influence which transport is preferable.

- The device may be configured using UDP or TCP on port 8888.
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting destination.
- Plaspy uses the same port for all supported devices which simplifies device provisioning.
- Transport selection is typically configured on the tracker itself via SMS, configuration tools, or provisioning interfaces provided by the manufacturer.
- Network factors such as carrier behavior, NAT, and signal quality can affect message delivery and should be considered when selecting UDP or TCP.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or supported features; always verify the firmware level on the device.
- Hardware revisions and local variants of the GX-101 may expose different I O or sensor wiring and behavior.
- Manufacturer configuration settings determine whether the tracker reports via UDP or TCP and which server address is set.
- Some features like backup battery reporting or internal memory replay may be controlled by firmware and are not standardized across revisions.
- Confirm any required configuration commands or SMS settings with the official Sanav documentation before provisioning devices.
- When in doubt, test a single device end to end with your Plaspy account before wide deployment.

## Why Protocol Understanding Matters

Knowing how the GX-101 communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation when integrated with Plaspy. A practical understanding of the protocol and transport behavior reduces integration time and helps operations staff interpret device behavior.

- Helps verify the device is pointing to the correct Plaspy endpoint and port.
- Speeds diagnosis of missing or delayed position updates by clarifying transport and reporting intervals.
- Assists with mapping I O and sensor signals in Plaspy so alerts and events behave as expected.
- Supports planning for firmware updates and how they might change reporting behavior.
- Provides a clearer path for validating manufacturer configuration steps during installation.

## Why Use Plaspy with This Protocol

Using Plaspy with the Sanav GX-101 provides a convenient way to centralize vehicle location, sensor monitoring, and alerts in a single platform. The GX-101 hardware features such as opened I O, backup battery, and robust construction pair well with Plaspy for fleet monitoring, theft recovery, and operational oversight.

Plaspy simplifies device provisioning by using a single port and automatic protocol detection, which reduces manual configuration for many trackers. To learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware notes, and manufacturer instructions on the official Sanav site at http://es.sanav.com/ since protocol support and device behavior can change over time.
