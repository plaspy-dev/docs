---
slug: /thingsys/ts_v6ws/protocol
id: ts_v6ws-protocol
sidebar_label: Protocol
title: ThingSys - TS-V6Ws Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ThingSys TS V6Ws and how it communicates with Plaspy using shared connection settings
keywords:
  - ThingSys TS V6Ws
  - TS V6Ws protocol
  - ThingSys GPS tracker
  - TS V6Ws Plaspy
  - vehicle tracking protocol
  - GPS tracker communication
  - fleet tracking Plaspy
  - TS V6Ws compatibility
  - vehicle telematics protocol
  - ThingSys tracking protocol
---

# ThingSys - TS-V6Ws Protocol

This page explains the public protocol context for using the ThingSys TS-V6Ws tracker with Plaspy. It summarizes how the device reports location, status, and alarms to Plaspy and what to expect from the connection settings commonly used to integrate the tracker with the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the TS-V6Ws can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive communication context and practical integration notes.

## Protocol Overview

The protocol used by the TS-V6Ws governs how the tracker identifies itself, how it reports GNSS positions and sensor telemetry, and how alarms and status updates are delivered to a fleet server such as Plaspy. In practical terms the protocol enables reliable location reporting, event notification, and optional remote control signals when supported by the device.

- Enables periodic or real time location reporting and configurable telemetry intervals for live tracking or economical trace uploads.
- Carries vehicle status and sensor data such as ACC ignition state, vibration alarms, SOS events, and optional fuel or temperature sensor readings.
- Delivers alarms and event notifications to the server so Plaspy can generate alerts, map updates, and reports.
- Provides a mechanism for the device to identify itself and allow the server to map a device ID to a Plaspy account record.
- Supports multiple transport modes depending on device configuration so the tracker can operate across different network conditions.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a single shared endpoint and port and uses that connection to identify and parse the tracker feed. When a TS-V6Ws is configured to report to Plaspy, the platform automatically determines the correct protocol handler so manual protocol selection is typically unnecessary for properly configured devices.

- Plaspy listens on a shared server endpoint that devices can point to when reporting.
- Plaspy automatically detects the tracker protocol once the device starts reporting to the platform.
- Users generally do not need to select a protocol inside Plaspy if the TS-V6Ws is configured to report to the Plaspy endpoint.
- Proper device identification depends on the device sending its identification or registration data as provided by the manufacturer firmware.
- If a device does not appear to be detected, verifying device reporting settings and firmware behavior is an important troubleshooting step.

## Transport and Connection Context

The TS-V6Ws can be configured to use standard IP transport modes supported by the device firmware. For Plaspy integration the public connection settings are unified so installers and administrators can point devices to the platform using commonly available addressing.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device firmware and configuration choices.
- The Plaspy server domain for device reporting is d.plaspy.com and the known public server IP is 54.85.159.138.
- All devices in Plaspy use the same port so installers do not need different ports per model.
- Choose UDP when the device firmware and network conditions favor datagram transport, or TCP when a persistent connection is required by the firmware.
- Ensure that any network firewalls or APN settings allow outbound connections to d.plaspy.com or the server IP on port 8888.

## Protocol Compatibility Notes

- The TS-V6Ws is listed as Plaspy compatible for fleet and asset monitoring, but exact behavior can vary by firmware and hardware revision.
- Firmware updates from ThingSys can change reporting options, supported transports, or available telemetry fields; confirm the active firmware release when troubleshooting.
- Hardware variants and region specific cellular variants may affect which network modes are available and which firmware features are present.
- Transport selection (UDP versus TCP) is often set on the device; confirm the device configuration matches the intended transport for Plaspy.
- Validate device identification and reporting intervals during initial setup to ensure Plaspy can automatically detect and map the device.
- Always consult the manufacturer documentation for device specific command sets, configuration methods, and firmware release notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth deployment, faster troubleshooting, and reliable long term operation when the TS-V6Ws reports to Plaspy. Clear protocol awareness reduces configuration errors and improves the ability to interpret device behavior during edge cases.

- Faster setup by confirming the device is pointed to the correct Plaspy endpoint and using the intended transport.
- Improved troubleshooting when reporting gaps, incorrect telemetry, or missing alarms are understood in the context of firmware behavior and transport selection.
- Better planning for firmware updates so you know when reporting behavior or available telemetry may change.
- Clear expectations around which device signals are available to Plaspy for alerts, mapping, and reporting.
- Easier validation of regional variants and hardware revisions before large scale rollout.

## Why Use Plaspy with This Protocol

Using the TS-V6Ws with Plaspy provides a practical telematics workflow for fleets and asset operators who need real time location, event notifications, and configurable telemetry. The device hardware capabilities such as high sensitivity GNSS, wide input voltage, and expandability for sensors pair naturally with Plaspy’s centralized mapping, alerting, and reporting features to deliver operational visibility.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.thingsys.com/.
