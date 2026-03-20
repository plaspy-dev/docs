---
slug: /ruptela/eco5_lite/protocol
id: eco5_lite-protocol
sidebar_label: Protocol
title: Ruptela - Eco5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Ruptela Eco5 Lite with Plaspy for reliable fleet tracking and telemetry
keywords:
  - ruptela eco5 lite protocol
  - ruptela eco5 lite gps protocol
  - eco5 lite tracker protocol
  - ruptela eco5 lite communication
  - eco5 lite tracking protocol
  - ruptela tracker plaspy compatibility
  - gps tracker protocol ruptela
  - vehicle tracking ruptela eco5 lite
  - plaspy device compatibility
  - fleet tracking eco5 lite
---

# Ruptela - Eco5 Lite Protocol

This page describes the public protocol context for using the Ruptela Eco5 Lite tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, implementation‑neutral terms so fleet managers and integrators understand the role of the tracker protocol in real time tracking and telemetry workflows.

The Ruptela Eco5 Lite is a compact, energy efficient tracker with GNSS and BLE capabilities designed for fleet and light telematics use. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page explains the connection and protocol concepts that matter for successful integration while recommending that you consult Ruptela for the most current device specific details.

## Protocol Overview

At a high level, the Eco5 Lite communication protocol is the set of rules the device uses to identify itself, package telemetry and event data, and deliver that information to a remote server for processing. Protocol behavior covers how positional fixes, input states, BLE sensor values, and alarms are reported to a backend such as Plaspy; it does not imply any specific packet layout or binary detail here.

- The protocol enables the Eco5 Lite to report GNSS location, BLE sensor data, digital and analog input states, and event flags to a backend platform.
- Identification and session information let the backend associate incoming telemetry with a specific device and fleet asset.
- Event-driven reporting lets the tracker deliver alarms, ignition changes, and tamper or jamming indicators for real time workflows.
- Protocol rules determine update frequency, payload contents, and how the device signals important states such as low battery or backup battery use.
- Configuration and command delivery mechanisms (where supported) allow remote parameter changes and firmware management through device management systems.

## How Plaspy Detects the Protocol

Plaspy receivestracker data on a shared endpoint and automatically determines the incoming tracker protocol so most users do not need to select a protocol manually in the platform. Proper device configuration to point at the Plaspy endpoint is typically the only requirement for automatic detection to work.

- Plaspy receives device connections on the domain d.plaspy.com and the public server address 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy listens on port 8888 for device traffic.
- The Eco5 Lite may be configured to use either UDP or TCP on port 8888 depending on your variant and network configuration.
- When the device is configured to report to Plaspy, the platform will detect the tracker protocol automatically so a manual protocol selection is normally unnecessary.
- If a device does not appear in Plaspy, validating the device reporting endpoint and transport (UDP or TCP to port 8888) is a practical first troubleshooting step.

## Transport and Connection Context

Connection context covers the transport method and destination settings required for the Eco5 Lite to deliver telemetry to Plaspy. These are the public network details you typically configure on the device or via Ruptela management tools.

- The tracker may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- Devices can point to the Plaspy DNS name d.plaspy.com or directly to the address 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies device configuration across mixed fleets.
- Transport selection (UDP vs TCP) can affect delivery behavior and should match the device firmware and network environment.
- Ensure mobile network settings and APN configuration on the Eco5 Lite are correct for the installed SIM and regional cellular variant.

## Protocol Compatibility Notes

- Firmware versions can change message contents, reporting intervals, and available features; verify firmware release notes for protocol changes.
- Hardware revisions and regional variants (cellular modem differences) may alter supported transport or feature sets.
- Manufacturer configuration tools and Device Management Platforms can change how parameters are applied remotely; follow Ruptela guidance for device provisioning.
- Transport choice (UDP vs TCP) should match the device configuration and any firewall or NAT behavior on cellular networks.
- If using BLE features, check that BLE reporting is enabled and that the short range sensors you deploy are supported by the Eco5 Lite firmware.
- Validate that any required integrations or mapping of digital/analog inputs align with Plaspy event and telemetry fields.

## Why Protocol Understanding Matters

A practical understanding of the device protocol and connection context helps ensure reliable setup, faster troubleshooting, and predictable long term operation within Plaspy. Even though Plaspy detects protocols automatically, knowing the basics helps you confirm the device is correctly configured and behaving as expected.

- It speeds up first time integration by confirming the device points to d.plaspy.com or 54.85.159.138 on port 8888 using the correct transport.
- Troubleshooting lost or delayed telemetry is easier when you know whether the tracker is sending via UDP or TCP.
- Understanding event and input reporting helps map device signals to Plaspy events, geofences, and alerts.
- Awareness of firmware and hardware variant impacts reduces surprises when deploying devices across regions or batches.
- It supports operational decisions such as selecting reporting intervals that balance visibility and battery or data usage.

## Why Use Plaspy with This Protocol

Using the Ruptela Eco5 Lite with Plaspy gives organizations a practical path to real time location, event awareness, and simple telemetry without complex per device port management. The Eco5 Lite’s low power design, GNSS accuracy, BLE support, and basic vehicle I O make it a good fit for fleet tracking, driver ID, and light telemetry use cases where Plaspy provides visualization, alerts, and reporting.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer website https://ruptela.com/ before large scale deployment.
