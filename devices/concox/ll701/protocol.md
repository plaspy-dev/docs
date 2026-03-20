---
slug: /concox/ll701/protocol
id: ll701-protocol
sidebar_label: Protocol
title: Concox - LL701 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Concox LL701 GPS tracker and how it communicates with Plaspy for fleet and asset tracking
keywords:
  - Concox LL701 protocol
  - Concox LL701 GPS protocol
  - Concox LL701 protocol for Plaspy
  - Concox LL701 communication protocol
  - Concox LL701 tracking protocol
  - Concox tracker protocol
  - GPS tracker protocol Plaspy
  - vehicle asset tracking Concox
  - fleet management LL701
  - LL701 Bluetooth configuration
---

# Concox - LL701 Protocol

This page describes the public protocol context for using the Concox LL701 with Plaspy. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so administrators and integrators understand the role of the tracker reporting protocol when connecting LL701 units to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the LL701 can vary by firmware version, hardware revision, and manufacturer implementation, and Bluetooth configuration and device power modes can affect reporting patterns and available features.

## Protocol Overview

The protocol used by the LL701 governs how the tracker reports status, location, and events to a remote server and how that data becomes usable in a fleet management platform like Plaspy. For the LL701 this includes periodic position reports, event-triggered messages such as tamper and unpacking alerts, and status indicators like battery and sleep state.

- Enables the LL701 to deliver location updates and time stamped events to the Plaspy endpoint
- Carries asset status information such as battery level, tamper alerts, and sensor triggers
- Supports non real time reporting patterns suitable for long standby and low power operation
- Allows the device to identify itself so Plaspy can associate incoming messages with the correct asset
- Works alongside local configuration methods such as Bluetooth for initial setup and parameter changes

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a correctly configured device reports to the platform endpoint. In most cases users do not need to manually select a protocol inside Plaspy if the LL701 is pointed at the Plaspy server and using a supported transport and port.

- Plaspy listens on a shared endpoint that devices can report to at d.plaspy.com and 54.85.159.138
- All devices supported by Plaspy use the same port for reporting, which simplifies configuration
- Plaspy supports both TCP and UDP reporting on the platform port so the server will accept common transport modes
- When an LL701 sends its first messages to the Plaspy endpoint, the platform uses that input to associate the device with an account and begin processing data
- If a device uses manufacturer configuration tools such as Bluetooth, ensure server address and transport are set to the Plaspy endpoint

## Transport and Connection Context

Connection and transport choices affect how the LL701 reaches Plaspy and how the device saves power while still delivering necessary alerts. The LL701 may be configured to report via either UDP or TCP depending on device support and configuration settings.

- Devices may be configured to send reports to d.plaspy.com or directly to 54.85.159.138
- The Plaspy platform uses port 8888 for device reporting and this port is shared across all supported devices
- The LL701 can be set to use UDP or TCP on port 8888 according to user preference and network conditions
- Cellular network reliability, APN configuration, and operator behavior can influence the choice between UDP and TCP
- For battery operated long standby modes, reporting frequency and transport choices are commonly tuned to balance timeliness and power consumption

## Protocol Compatibility Notes

- Firmware versions can change message timing, available event types, and configuration parameters; always check the device firmware level
- Hardware revisions or regional variants of the LL701 may have subtle differences in supported features
- Manufacturer default settings may not point to the Plaspy endpoint; verify server address and transport before deployment
- Low power modes used to extend battery life can reduce reporting frequency and alter the sequence of events sent to the server
- Bluetooth configuration is useful for in field parameter changes but does not replace ensuring the device reports to the Plaspy endpoint
- Validate compatibility against the latest Concox documentation for model specific behavior and updates

## Why Protocol Understanding Matters

Understanding how the LL701 communicates with Plaspy helps ensure reliable reporting, efficient battery use, and predictable event handling during deployment and operation. Clear knowledge of protocol behavior reduces setup time and helps diagnose connectivity or data issues.

- Ensures correct server address and transport are configured during device provisioning
- Helps tune reporting intervals to achieve desired battery life and data timeliness
- Assists troubleshooting of missing or delayed reports by checking transport and network settings
- Clarifies how event triggers such as tamper or unpacking alerts are delivered to Plaspy
- Supports planning for firmware updates and validation of behavior after changes

## Why Use Plaspy with This Protocol

Using the Concox LL701 with Plaspy gives organizations a practical combination of long battery life, rugged hardware, and a modern fleet management backend. The LL701 is well suited to non real time tracking of heavy duty vehicles and valuable assets, and Plaspy is designed to accept reports from battery optimized devices and surface alerts and status information for operational use.

To learn more about how Plaspy handles device integration and to review platform capabilities, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions for the Concox LL701 verify information directly at the manufacturer site https://www.iconcox.com/ as protocol support and device behavior can change over time.
