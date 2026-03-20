---
slug: /meitrack/tc68l/protocol
id: tc68l-protocol
sidebar_label: Protocol
title: Meitrack - TC68L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Meitrack TC68L and how the device communicates with Plaspy for tracking and configuration
keywords:
  - Meitrack TC68L protocol
  - Meitrack TC68L GPS protocol
  - TC68L Plaspy compatibility
  - TC68L communication protocol
  - Meitrack GPS tracker protocol
  - TC68L vehicle tracking
  - Plaspy device protocol
  - Meitrack OBD tracker
  - TC68L SOS tracking
  - 4G OBD tracker protocol
---

# Meitrack - TC68L Protocol

This page describes the public protocol context for using the Meitrack TC68L with Plaspy. It explains, in non sensitive terms, how the device communicates with Plaspy for reporting location, OBD data, and status events such as disconnection alerts or SOS signals. The information here is intended to help system integrators, fleet managers, and technical users understand the communication role of the tracker without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The TC68L is a 4G WiFi plug and play OBD II tracker with an internal backup battery and features such as SOS and OBD data reporting. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so it is important to validate device configuration against current manufacturer documentation.

## Protocol Overview

The protocol used by the TC68L defines how the device identifies itself, reports position and OBD information, and signals events such as removal from an OBD port or an SOS trigger. At a high level, the protocol makes vehicle telemetry usable by a platform like Plaspy by delivering regularly timed location updates, event notifications, and optional diagnostic data.

- Enables the device to report GPS position, movement, and time data to the server for real time tracking.
- Carries OBD and vehicle status metrics when enabled so Plaspy can display fuel, engine state, and diagnostic indicators.
- Transmits discrete event alerts such as OBD disconnection, SOS button presses, or tamper notifications to trigger immediate attention.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct device record and configuration.
- Supports both periodic reporting and event driven messages to balance real time visibility and power usage.

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a shared endpoint and automatically determines the appropriate tracker protocol when properly configured. Users normally do not need to select a protocol manually inside Plaspy if the device is pointed to the Plaspy server and using the supported transport and port.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on a single port for all devices to simplify device configuration and onboarding.
- Devices configured to report to the Plaspy endpoint will be recognized and associated automatically by the platform.
- Automatic detection reduces the need for manual protocol selection when the TC68L is set to send data to Plaspy.
- If a device does not appear, verifying the device reporting endpoint, transport protocol, and firmware settings is the first troubleshooting step.

## Transport and Connection Context

Connection transport and endpoint selection determine how the TC68L reaches Plaspy but do not change the public role of the protocol itself. The TC68L can use industry standard network transports to send its telemetry and events to the Plaspy server.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to the Plaspy reporting domain d.plaspy.com or directly to the server IP 54.85.159.138.
- All devices in Plaspy use the same port, 8888, which simplifies configuration across a mixed fleet.
- Choice of UDP versus TCP can affect delivery characteristics and should match the device firmware and network environment.
- For initial setup, ensure the reporting host and transport match the device configuration so messages reach Plaspy reliably.

## Protocol Compatibility Notes

- The TC68L is compatible with Plaspy when configured to report to the Plaspy endpoint, but firmware version and regional hardware variants can affect exact behavior.
- Manufacturer settings or provisioning servers may change default reporting hosts; verify that the device is set to use d.plaspy.com or 54.85.159.138 on port 8888.
- Some deployments may require selecting UDP or TCP in device menus; choose the transport supported by your firmware and network.
- OBD data availability depends on vehicle ECU support and how the TC68L maps OBD PID values in a particular firmware release.
- Hardware revisions, carrier firmware, or regional radio variants may introduce subtle differences; validate with a test device.
- Always consult the manufacturer documentation for firmware specific notes that affect reporting intervals, event generation, or OBD mapping.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, correct interpretation of telemetry, and efficient troubleshooting during deployment. Knowing how the tracker reports position, events, and OBD data improves configuration choices and operational outcomes when using Plaspy.

- Faster onboarding by confirming the correct reporting host and transport settings up front.
- Clearer troubleshooting when messages do not appear in Plaspy because of transport or endpoint mismatches.
- Better firmware management by recognizing when feature differences are related to firmware or hardware variants.
- Accurate mapping of OBD and diagnostic values so fleet dashboards display meaningful vehicle data.
- Improved alerting and incident response by understanding how event messages such as SOS or disconnection are reported.

## Why Use Plaspy with This Protocol

Using the Meitrack TC68L with Plaspy provides a straightforward path to vehicle visibility and operational oversight. The TC68L’s plug and play OBD II form factor, internal backup battery for continued reporting, 4G connectivity, and event features such as SOS and disconnection alerts make it well suited for fleet and personal vehicle tracking. When the TC68L is configured to report to Plaspy, the platform can ingest location, OBD, and event data and present that information in dashboards and alerts to help manage assets more effectively.

If you want to learn more about Plaspy and how it works with devices like the Meitrack TC68L, visit https://www.plaspy.com. For the most current details about TC68L protocol specifics, firmware behavior, and device implementation, please verify information with the manufacturer at https://www.meitrack.com/ as protocol support and firmware behavior can change over time.
