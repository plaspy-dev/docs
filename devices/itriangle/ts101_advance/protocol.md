---
slug: /itriangle/ts101_advance/protocol
id: ts101_advance-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Advance Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iTriangle TS101 Advance and how it communicates with Plaspy for tracking and telemetry
keywords:
  - iTriangle TS101 Advance protocol
  - TS101 Advance GPS tracker
  - iTriangle tracking protocol
  - Plaspy compatibility guide
  - GPS tracker communication
  - vehicle tracking protocol
  - fleet management integration
  - TS101 Advance telemetry
  - tracker protocol detection
  - remote device configuration
---

# iTriangle - TS101 Advance Protocol

This page describes the public protocol context for using the iTriangle TS101 Advance GPS tracker with the Plaspy platform. It focuses on how the device reports position and telemetry to Plaspy and what integration considerations matter for reliable real time tracking and fleet management. The TS101 Advance is a rugged telematics device with multi constellation GNSS, 2G cellular connectivity, motion sensors, and extensive I/O that is compatible with Plaspy for reporting and alerts.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when a device is configured to report to the platform. Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138. The platform accepts connections on port 8888, and devices may be configured to use UDP or TCP on port 8888. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general, public information rather than firmware specific instructions.

## Protocol Overview

The communication protocol is the set of rules the TS101 Advance uses to report GPS positions, sensor readings, and input/output states to a remote server such as Plaspy. It determines how the tracker identifies itself, how telemetry is packaged for transmission, and how event data (for example tamper or ignition alerts) is signaled to the backend.

- Enables reporting of GNSS position, accelerometer and gyroscope events, and I/O state changes to Plaspy.
- Carries identification data so Plaspy can associate incoming streams with a registered device and customer account.
- Supports both periodic position updates and event driven messages for alarms, tamper, ignition, or harsh driving.
- Allows remote configuration and diagnostics channels to be initiated via supported transports.
- Works with device features like internal backup battery and remote relay control to provide operational telemetry to the platform.

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a single shared endpoint and automatically determines the device protocol from the incoming connection and message patterns. When a TS101 Advance is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is generally not required.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138; devices should point at one of these reachable endpoints.
- All devices in Plaspy use the same port which is 8888, simplifying device setup across fleets.
- Plaspy automatically detects the tracker protocol once the device begins reporting to the platform endpoint.
- Proper device identification and reporting intervals allow Plaspy to match incoming messages to the correct account and device record.
- Users typically only need to ensure the tracker is configured to report to the Plaspy address and that transport settings match the device capability.

## Transport and Connection Context

Connection transport and endpoint configuration are fundamental to getting the TS101 Advance talking to Plaspy. The device supports cellular TCP/IP reporting and can be configured to use common transports depending on network and device settings.

- Device connections to Plaspy can be established using either UDP or TCP on port 8888 depending on device configuration and network conditions.
- The Plaspy server domain is d.plaspy.com; devices may also be pointed directly to the public server IP 54.85.159.138 where DNS is not available.
- All Plaspy supported devices use a common port, which is 8888, simplifying firewall and network configurations.
- Choose UDP when lower overhead and tolerance for occasional packet loss is acceptable; choose TCP when delivery confirmation and session state are required by the device.
- Ensure mobile operator networks allow the selected transport and that APN settings on the device are correct for cellular reporting.

## Protocol Compatibility Notes

- Firmware versions on the TS101 Advance can alter message timing, available fields, or event behavior; always verify the firmware level during integration.
- Hardware revisions or optional accessory modules may change available I/O or sensor reporting; confirm model and revision when mapping telemetry fields.
- The choice between UDP and TCP affects delivery semantics and may influence how Plaspy receives and processes messages from the device.
- Manufacturer configuration methods such as SMS, USB, or BLE are useful for initial setup but do not change the fact that reporting must target the Plaspy endpoint.
- OTA or FOTA updates can introduce protocol changes; schedule or test firmware updates before broad fleet deployment.
- Validate expected behavior against the manufacturer documentation and run bench tests to confirm end to end reporting to Plaspy.

## Why Protocol Understanding Matters

A clear, practical understanding of the tracker communication protocol makes deployment, troubleshooting, and long term support significantly easier. Knowing what the device sends and how Plaspy receives it reduces configuration time and improves operational reliability.

- Helps ensure correct device identification so telemetry maps to the right asset in Plaspy.
- Speeds up troubleshooting when positions or events are not arriving as expected.
- Guides network and firewall configuration by clarifying transport and endpoint needs.
- Informs decisions about firmware updates, feature enablement, and accessory compatibility.
- Supports design of business rules and alerts in Plaspy by aligning device event semantics with platform workflows.

## Why Use Plaspy with This Protocol

Using the iTriangle TS101 Advance with Plaspy provides fleets and security teams with a resilient telemetry path for real time location, sensor events, and I/O driven workflows. The combination of multi constellation GNSS, motion sensors, and comprehensive I/O makes the TS101 Advance a practical choice for route monitoring, anti theft use cases, fuel monitoring, and driver behavior analytics while Plaspy provides the backend mapping, alerting, and reporting tools to turn that data into operational insight.

To learn more about Plaspy and how it works with fleet devices such as the TS101 Advance, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify information on the manufacturer site https://www.itriangle.net/ since protocol support and firmware behavior can change over time.
