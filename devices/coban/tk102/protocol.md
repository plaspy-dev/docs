---
slug: /coban/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Coban - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Coban TK102 GPS tracker compatibility and connectivity with Plaspy
keywords:
  - Coban TK102 protocol
  - Coban TK102 GPS protocol
  - Coban TK102 tracking protocol
  - Coban TK102 communication
  - Coban tracker protocol
  - TK102 Plaspy compatibility
  - GPS tracker protocol Plaspy
  - vehicle tracking Coban TK102
  - TK102 GPRS GPS protocol
  - Coban protocol guide
---

# Coban - TK102 Protocol

This page summarizes the public protocol context for using the Coban TK102 GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general, what connection settings are used, and what to check when integrating or troubleshooting the device. The intent is to describe public facing protocol context without exposing private implementation details.

The Coban TK102 is a GSM GPRS and GPS based tracker with common features such as SMS reporting, GPRS reporting, geo fencing, SOS alerting, and movement and overspeed alarms. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the TK102 defines how the device reports location and status to a remote server and how remote configuration can be performed. On Plaspy the protocol is treated as the device reporting protocol that carries position, time, and alert information from the tracker to the platform so that location and event data is available to users.

- The protocol enables the tracker to report GPS positions and basic status to a remote endpoint for processing.
- It provides the signaling used by the device to identify itself so Plaspy can associate reports with the correct asset.
- The tracker protocol carries alerts such as SOS, movement, overspeed, and low battery so the platform can generate notifications.
- Configuration options on the device allow switching transport modes and setting a reporting server so the tracker can target Plaspy.
- Plaspy receives the incoming reports and makes the data available for mapping, alerts, and logging without requiring users to provide protocol internals.
- Because firmware versions differ, the exact set of report fields and timings may vary between units.

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint for incoming tracker connections and uses automatic protocol detection to associate incoming data with the correct parser and device record. This approach reduces setup steps for users when a device is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so manual selection of a protocol in the platform is typically not required.
- When a TK102 is configured to report to the Plaspy endpoint, the platform will match incoming data to the device record based on identifiers the device includes.
- Users generally need only ensure the tracker is set to report to the Plaspy address and to use the correct transport type for their unit.

## Transport and Connection Context

Connection transport affects how the TK102 delivers data to Plaspy but does not change the fact that the platform expects reports to arrive at the shared Plaspy endpoint. Depending on device settings and firmware, the tracker may support different network transports that must be configured on the device.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to d.plaspy.com or to 54.85.159.138 as the reporting address for Plaspy.
- All devices in Plaspy use the same port which simplifies server configuration on the tracker side.
- Choosing UDP or TCP on the device may affect delivery behavior such as reliability and connection state depending on the tracker firmware.
- Ensure the mobile data profile and APN are configured correctly on the TK102 so GPRS reporting functions as expected.

## Protocol Compatibility Notes

- Firmware differences across TK102 units can change available reporting fields and supported commands.
- Hardware revisions and clone variants on the market may implement protocol behavior differently from original manufacturer specifications.
- The tracker supports a TCP UDP switch as a configurable option on many firmware builds so pick the transport that matches your device settings.
- Confirm the device is configured to send reports to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy integration.
- Manufacturer defaults such as monitor center number or reporting frequency may need adjustment to match Plaspy expectations.
- Validate device compatibility and capabilities against the official manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol and connection context helps ensure a reliable integration with Plaspy and speeds up troubleshooting when reports do not arrive as expected.

- It clarifies which transport and server address must be configured on the TK102 so data reaches Plaspy.
- It helps identify whether missing data is caused by APN, transport selection, or device configuration rather than the platform.
- Knowledge of alerts supported by the tracker enables correct alert mapping and notification setup in Plaspy.
- Awareness of firmware and hardware variations reduces time spent diagnosing unexpected device behavior.
- It informs decisions about battery use and reporting frequency to balance data freshness and power consumption.

## Why Use Plaspy with This Protocol

Using the Coban TK102 with Plaspy gives organizations a straightforward way to centralize location, alerting, and history from devices that use GPRS and GPS reporting. Plaspy’s automatic protocol detection and shared connection settings simplify onboarding and reduce configuration errors when devices are pointed to the Plaspy endpoint.

To learn more about how Plaspy works with a wide range of trackers and to review platform features visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information on the manufacturer site https://www.coban.net/ as protocol support and firmware behavior can change over time.
