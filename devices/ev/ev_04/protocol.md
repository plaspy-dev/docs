---
slug: /ev/ev_04/protocol
id: ev_04-protocol
sidebar_label: Protocol
title: EV - EV-04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the EV EV-04 GPS tracker and Plaspy integration covering connection and compatibility
keywords:
  - EV EV-04 protocol
  - EV EV-04 GPS tracker
  - EV EV-04 Plaspy compatibility
  - EV-04 communication protocol
  - EV-04 tracking protocol
  - EV GPS tracker protocol
  - Plaspy device protocol
  - personal GPS pendant protocol
  - fall detection tracker protocol
  - remote patient monitoring tracker
---

# EV - EV-04 Protocol

This page documents the public protocol context for using the EV EV-04 personal GPS tracker pendant with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are commonly used, and how protocol behavior affects integration and day to day operation without exposing implementation sensitive details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to Plaspy. Exact message timing and behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general protocol and transport context while recommending verification against manufacturer documentation and device firmware release notes.

## Protocol Overview

The communication protocol is the mechanism the EV-04 uses to report location, health, and event telemetry to a backend such as Plaspy. At a high level the protocol ensures the tracker can identify itself, transmit position and event data, and deliver SOS and fall detection alerts to monitoring systems.

- Enables regular position and status reporting so Plaspy can display live location and device health.
- Carries alarm and event notifications such as one button SOS and detected falls for immediate handling.
- Transmits telemetry that allows Plaspy to log events, generate alerts, and maintain historical traces for audits.
- Supports auxiliary data channels for Bluetooth sensor and beacon information when available, improving indoor accuracy.
- Allows remote management actions such as firmware upgrades and configuration when supported by the device and server.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and uses automated detection to recognize the tracker protocol. In practice this means a properly configured EV-04 that reports to Plaspy will typically be recognized without manual protocol selection in Plaspy.

- Plaspy’s public server endpoint for device reporting is d.plaspy.com and the server IP used in public documentation is 54.85.159.138.
- The network port Plaspy uses for device traffic is 8888 and this same port is used across all supported devices.
- Devices may be configured to use either UDP or TCP to report to Plaspy on port 8888 depending on device support and operator choice.
- When the EV-04 reports to the Plaspy endpoint, Plaspy automatically detects the device protocol so manual protocol selection is usually not required.
- Proper device configuration to point at d.plaspy.com or the published server IP and to use port 8888 is typically the primary setup step.

## Transport and Connection Context

Connection and transport choices determine how the EV-04 exchanges protocol messages with Plaspy. The device may support multiple radio and IP transport options, and knowing which transport is active helps with firewall, carrier, and diagnostic configuration.

- The EV-04 may be configured to use UDP or TCP on port 8888 depending on device configuration and firmware features.
- Devices can report to the hostname d.plaspy.com or to the published IP address 54.85.159.138 when directed by configuration.
- All Plaspy devices use the same port number 8888 for device reporting which simplifies network and firewall rules for monitoring deployments.
- Choose the transport mode that matches your device firmware and carrier requirements and ensure network policies permit the selected transport to the Plaspy endpoint.
- For troubleshooting, confirming that the tracker is pointed to d.plaspy.com or the provided IP and that port 8888 is reachable is a practical first step.

## Protocol Compatibility Notes

- Firmware variations between production batches can change timing and optional fields in device reports; verify behavior for the specific firmware installed on your EV-04.
- Hardware revisions and regional variants may include different GNSS or modem modules that affect reporting cadence and network compatibility.
- Some features such as BLE beacon reporting or medical sensor telemetry are optional and can be enabled or disabled depending on firmware and configuration.
- Transport selection between UDP and TCP can affect delivery semantics and should match what the device firmware expects for reliable reporting.
- Plaspy automatic detection reduces manual setup, but initial device configuration must still point to the correct Plaspy address and port.
- Validate FOTA and remote management behavior with the manufacturer documentation before deploying wide scale updates.

## Why Protocol Understanding Matters

Understanding how the EV-04 communicates with Plaspy helps ensure reliable device setup, faster troubleshooting, and predictable long term operation. Even though Plaspy automates protocol detection, knowing transport and protocol context reduces deployment friction and improves incident response.

- Confirms that the device is configured to report to the correct Plaspy endpoint and port for successful detection.
- Helps diagnose connectivity problems by narrowing checks to transport, DNS, and port reachability.
- Clarifies how SOS and fall detection events are routed so monitoring teams receive timely alerts.
- Aids in planning for firmware upgrades and feature changes that may alter reporting behavior.
- Supports consistent network rules and firewall settings using the single Plaspy port for all devices.

## Why Use Plaspy with This Protocol

Pairing the EV-04 pendant with Plaspy gives organizations centralized visibility into location, SOS events, fall detections, and device health across monitored users. The EV-04’s wearable form factor, fall detection, one button SOS, two way calling, and hybrid positioning combine with Plaspy’s real time dashboards and alerting to create practical monitoring solutions for senior care, remote patient monitoring, and lone worker safety.

Plaspy simplifies connectivity by using a shared endpoint and a single port for all devices and by automatically detecting the tracker protocol when the device is properly configured. To learn more about how Plaspy can work with the EV-04 tracker visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes with the manufacturer at http://www.eviewltd.com/.
