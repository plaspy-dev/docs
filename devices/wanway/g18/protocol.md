---
slug: /wanway/g18/protocol
id: g18-protocol
sidebar_label: Protocol
title: WanWay - G18 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the WanWay G18 GPS tracker and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - WanWay G18 protocol
  - WanWay G18 GPS protocol
  - WanWay G18 communication protocol
  - WanWay G18 tracking protocol
  - WanWay G18 Plaspy compatibility
  - WanWay G18 fleet tracker
  - WanWay G18 telematics
  - WanWay G18 remote immobilizer
  - WanWay G18 driver behavior
  - WanWay G18 integration
---

# WanWay - G18 Protocol

This page covers the public protocol context for using the WanWay G18 tracker with Plaspy. It explains how the device communicates at a high level, what connection settings are used to reach Plaspy, and how the tracker’s event and telemetry reporting fit into a fleet management workflow. The goal is to help technical users and fleet operators understand the communication role without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The G18 is a compact 2G GPS tracker with tamper and vibration alarms, collision reporting, and remote petrol or electricity cutoff capability that sends periodic location updates and event messages to Plaspy for mapping and alerts.

## Protocol Overview

At a high level the G18 tracker protocol defines how the device identifies itself, transmits position and sensor data, and reports event conditions to a remote server. Plaspy ingests those reports, normalizes telemetry, and surfaces location and events in dashboards and alerting rules. The public documentation here focuses on the role of the protocol in reliable device integration rather than low level packet formats.

- Enables periodic GPS fixes and time keyed position updates to be delivered to Plaspy.
- Transmits event driven messages such as tamper alarms, vibration or collision reports, and power loss notices.
- Carries telemetry useful for driver behavior analysis like acceleration and braking event markers.
- Allows server initiated commands where supported by device wiring and policy such as remote immobilizer control.
- Provides an identity mechanism so Plaspy can associate incoming reports with the correct device record.

## How Plaspy Detects the Protocol

Plaspy accepts device connections at a shared endpoint and automatically determines the tracker protocol when a device reports to the platform. In most cases you do not need to select a protocol manually inside Plaspy if the G18 is configured to report to the correct Plaspy endpoint with matching transport settings.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct connections.
- The port is 8888 which Plaspy uses as the single listening port for device traffic.
- Plaspy automatically detects the tracker protocol for devices that send data to the platform.
- All devices in Plaspy use the same port so device routing is simplified.
- Typical setup only requires configuring the device to point to d.plaspy.com or 54.85.159.138 and the correct port.

## Transport and Connection Context

Connection options for the G18 are influenced by device firmware and configuration. The tracker may send data using either UDP or TCP depending on the model build and chosen settings on the device. Use public connection facts to ensure the unit reports to Plaspy correctly.

- The device may be configured using UDP or TCP on port 8888 depending on device support.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the numeric address 54.85.159.138.
- The port for all supported devices in Plaspy is 8888 which simplifies provisioning.
- Choose UDP for lighter weight, lower latency reporting where supported and TCP where session reliability is required.
- Confirm the device transport setting matches what is permitted on any intermediate network or SIM plan.

## Protocol Compatibility Notes

- Firmware differences between factory builds can change which transport modes and message types are supported.
- Hardware revisions and optional sensor configurations may add or remove event types such as vibration or tamper detection.
- Manufacturer side variations can affect available remote commands and the exact conditions that generate a collision report.
- Transport selection between UDP and TCP is device and configuration dependent and should be validated during setup.
- Integration behavior such as command acknowledgement or retry timing may differ across firmware and should be tested.
- Validate compatibility against the official WanWay documentation for firmware specific behavior and installation guidance.

## Why Protocol Understanding Matters

A practical understanding of the G18 communication protocol helps with correct device provisioning, faster troubleshooting, and predictable long term operation on Plaspy. Knowing what to expect from device reports and how the tracker reaches the platform reduces integration time and improves reliability.

- Ensures devices are pointed to the correct Plaspy endpoint and transport so data arrives reliably.
- Helps diagnose connectivity or reporting gaps by clarifying whether issues are network, transport, or firmware related.
- Guides provisioning steps for driver behavior, event alerts, and immobilizer workflows.
- Supports decision making about firmware updates, hardware replacement, or sensor configuration changes.
- Improves incident handling by making it clear which events the device will report and how those map into Plaspy alerts.

## Why Use Plaspy with This Protocol

Using the WanWay G18 with Plaspy offers straightforward fleet visibility for organizations that need compact hardware with essential telematics features. Plaspy collects the G18’s location updates, event-driven alarms, and driver behavior markers into a single platform for mapping, rule based alerts, and historical playback. This combination is useful for theft prevention, UBI programs, and everyday fleet operations where discreet installation and event reporting matter.

If you want to learn more about Plaspy and how it handles device integration and fleet workflows visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and installation guidance verify the official WanWay documentation at https://www.wanwaytech.net/ since protocol support and firmware behavior can change over time.
