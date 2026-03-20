---
slug: /concox/vl103d/protocol
id: vl103d-protocol
sidebar_label: Protocol
title: Concox - VL103D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox VL103D and how the device communicates with Plaspy for reliable vehicle tracking and telemetry
keywords:
  - Concox VL103D protocol
  - Concox VL103D GPS protocol
  - Concox VL103D Plaspy compatibility
  - VL103D tracking protocol
  - VL103D communication protocol
  - Concox GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - fleet management tracker protocol
  - VL103D telemetry integration
---

# Concox - VL103D Protocol

This page covers the public protocol context for using the Concox VL103D tracker with the Plaspy platform. It explains, at a high level, how the VL103D communicates position, alarms, and telemetry to Plaspy and what aspects of the tracker communication are relevant when integrating the device for live tracking, alerts, and basic fleet workflows.

The VL103D is Plaspy compatible out of the box and pairs LTE connectivity with GNSS and vehicle I O to deliver real time tracking and event reporting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available features can vary by device firmware version, hardware revision, and manufacturer implementation, so this page focuses on public and non sensitive protocol context rather than device internals.

## Protocol Overview

The tracker reporting protocol is the device side mechanism that delivers GNSS positions, status, alarms, and sensor values to a remote server so that those data points can be used for maps, alerts, and reporting. For the VL103D, the communication channel carries live location fixes, motion and ignition status, ADC sensor values, and event notifications that Plaspy uses to populate realtime views and trigger rules.

- Enables the VL103D to identify itself and deliver GNSS position and timestamped telemetry to a backend server.
- Transports alarm and event signals such as movement, SOS, ignition changes, and accelerometer based events.
- Carries vehicle I O and analog sensor data like ACC status and 0–5 V ADC readings for fuel or other telemetry.
- Allows the server to correlate telemetry with device identity so Plaspy can display history, alerts, and reports.
- Supports both periodic reporting and event driven messages so the device can be efficient on cellular networks.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and automatically detects the tracker protocol used by a connected device. In most cases a properly configured VL103D that reports to the Plaspy endpoint will be recognized without manual protocol selection in the platform, simplifying setup for installers and fleet administrators.

- Plaspy listens on a common server address and port for incoming device connections and applies automatic detection to identify the tracker type.
- Users generally do not need to pick a protocol manually within Plaspy if the device is correctly pointed at the Plaspy endpoint.
- Automatic detection allows multiple tracker models to coexist using the same Plaspy configuration and port.
- If a device is not recognized, typical troubleshooting steps include confirming device reporting settings, firmware version, and that the device is pointing at the correct Plaspy endpoint.

## Transport and Connection Context

Connection context describes how the VL103D is pointed to Plaspy and which transport options are available. Plaspy exposes a single endpoint that devices can target; the protocol layer sits on top of that transport connection and is detected by Plaspy once traffic arrives.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138 for direct reporting.
- Plaspy uses port 8888 and all devices in Plaspy use the same port for reporting.
- The VL103D may be configured to report to Plaspy using UDP or TCP on port 8888 depending on device support and local configuration.
- Devices can use the Plaspy domain or the server IP when configuring the reporting destination.
- Ensure network routing and firewall rules allow outbound connections to the Plaspy endpoint on the configured transport and port.

## Protocol Compatibility Notes

- Firmware differences can change available message types, event behavior, and configuration options; always verify firmware level when troubleshooting.
- Hardware revisions or regional variants of the VL103D might expose different band support or optional interfaces, which can affect operational behavior.
- Some features, such as ADC readings, immobilizer control, or accelerometer event thresholds, are controlled by device configuration and firmware and may vary by build.
- Transport mode selection between UDP and TCP can impact delivery characteristics and should match what the device firmware supports.
- Plaspy automatic detection handles many common variants, but validating compatibility against the device documentation and current firmware is recommended.
- When in doubt, consult official manufacturer documentation for device specific command sets and configuration guidance.

## Why Protocol Understanding Matters

Understanding the communication protocol for the VL103D helps ensure reliable device setup, effective troubleshooting, and predictable behavior in production deployments. Knowing what the device sends and how Plaspy receives it reduces setup time and improves confidence in fleet operations.

- Confirms that the device is reporting to the correct Plaspy endpoint and using the supported transport.
- Helps identify why particular events or telemetry values appear differently after a firmware update or device replacement.
- Enables focused troubleshooting of connectivity, sensor mapping, and event configuration between the tracker and Plaspy.
- Supports planning for integrations that use ignition, relay control, or analog sensor inputs to ensure data is delivered consistently.
- Assists in validating that alarms and immobilizer workflows operate as expected when rules are applied in Plaspy.

## Why Use Plaspy with This Protocol

Using the VL103D with Plaspy provides organizations visibility into vehicle location, motion events, and simple telematics via a single platform. The VL103D’s rugged design, broad voltage range, GNSS capability, and vehicle I O make it well suited for recovery, anti theft, and light fleet management scenarios where Plaspy can centralize alerts, live map views, and historical playback.

If you want to learn more about how Plaspy supports devices like the Concox VL103D, visit https://www.plaspy.com. For the most current device specific protocol and firmware behavior always verify details with the device manufacturer at https://www.iconcox.com/ since protocol support and implementation details can change over time.
