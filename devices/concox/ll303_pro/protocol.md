---
slug: /concox/ll303_pro/protocol
id: ll303_pro-protocol
sidebar_label: Protocol
title: Concox - LL303 Pro Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Concox LL303 Pro GPS tracker and how it communicates with Plaspy for reliable asset tracking
keywords:
  - Concox LL303 Pro protocol
  - Concox LL303 Pro GPS protocol
  - Concox LL303 Pro communication protocol
  - LL303 Pro Plaspy compatibility
  - Concox GPS tracker protocol
  - asset tracker protocol
  - vehicle tracking protocol
  - Plaspy compatible devices
  - solar GPS tracker protocol
  - GNSS tracker protocol
---

# Concox - LL303 Pro Protocol

This page describes the public protocol context for using the Concox LL303 Pro with Plaspy. It focuses on how the device communicates with Plaspy in general, which connection settings are used, and what to consider when integrating the LL303 Pro into Plaspy fleets. The LL303 Pro is a solar assisted 4G GNSS asset tracker built for long deployments on heavy equipment, construction machinery, and vessels, and this page explains how its reporting behavior maps to Plaspy without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Public Plaspy connection facts are d.plaspy.com and 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP to report to port 8888. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device-reported behavior is subject to those variables.

## Protocol Overview

The tracker protocol is the set of rules the LL303 Pro uses to send GNSS positions, telemetry, and event notifications to a remote server. For Plaspy compatibility, the protocol enables the device to identify itself, transmit position and sensor data, and deliver event triggers in a way Plaspy can interpret without requiring users to expose device internals.

- The protocol governs how location fixes and sensor telemetry are packaged and transmitted to Plaspy for mapping and history.
- Identification and session information allow Plaspy to associate incoming data with the correct asset record.
- Event reporting supports tamper, vibration, low battery, and other alerts that feed Plaspy workflows and notifications.
- Reporting modes such as periodic timing, intelligent reporting, and power saving determine update frequency and battery impact.
- Transport independence lets the same protocol operate over UDP or TCP depending on configuration and network conditions.

## How Plaspy Detects the Protocol

Plaspy is designed to automatically recognize tracker traffic when an LL303 Pro reports to the shared Plaspy endpoint. Users generally do not need to select a protocol inside Plaspy if the device is correctly pointed to the Plaspy server and port.

- Plaspy accepts incoming connections at d.plaspy.com and 54.85.159.138 on port 8888.
- The platform receives device reports on the same port for all supported devices to simplify configuration.
- When a device reports to the Plaspy endpoint, Plaspy matches identification fields and message patterns to map the data into the platform.
- Proper device configuration to point to the Plaspy server is usually sufficient for automatic detection.
- If a device does not appear, checking transport settings, APN, and firmware version is a practical next step.

## Transport and Connection Context

Connection and transport settings determine how the LL303 Pro reaches Plaspy but do not change the public role of the protocol described here. The LL303 Pro supports cellular reporting and can use either UDP or TCP depending on model variant and configuration; Plaspy receives both on the same server and port.

- Devices may be configured to send reports to d.plaspy.com or to 54.85.159.138.
- Plaspy listens on port 8888 for all device traffic, and that same port is used across supported trackers.
- The LL303 Pro can use UDP or TCP on port 8888 depending on the device network configuration and firmware capabilities.
- Cellular network selection and APN settings must be correct for the device to establish a connection to Plaspy.
- Transport selection can affect delivery behavior on unreliable networks; verify the chosen transport matches operational needs.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or supported reporting modes; always note the device firmware level.
- Hardware revisions or regional variants (for different LTE bands) can alter supported transports or telemetry options.
- Manufacturer-side implementations sometimes offer configurable framing or report formats that affect compatibility.
- BLE sensor behavior and accessory telemetry may require additional configuration on the device to appear in Plaspy.
- Selecting UDP versus TCP on the device can impact retransmission behavior but both transports are accepted by Plaspy on port 8888.
- Validate device settings and any manufacturer release notes when deploying at scale to avoid surprises.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps with setup, reduces troubleshooting time, and improves long term reliability when using the LL303 Pro with Plaspy. Knowing what the device sends, how it identifies itself, and which connection settings it uses makes integration smoother.

- Ensures correct device registration and mapping inside Plaspy for accurate asset association.
- Helps diagnose connectivity issues by checking transport, APN, and server configuration.
- Guides power management choices by aligning reporting modes with battery and solar charging behavior.
- Enables predictable event handling by confirming which alerts the device will report to Plaspy.
- Reduces deployment time by focusing troubleshooting on transport and firmware differences rather than platform configuration.

## Why Use Plaspy with This Protocol

Using the LL303 Pro with Plaspy provides a practical solution for organizations that require persistent visibility of off grid assets. The tracker’s solar charging, large battery capacity, rugged IP67 enclosure, and GNSS performance combine with Plaspy’s data handling to deliver real time maps, historical playback, and event driven workflows for fleets and high value assets.

To learn more about Plaspy and how it supports device integrations like the LL303 Pro, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, please verify information on the Concox website https://www.iconcox.com/. Protocol support and firmware behavior can change over time so reviewing the manufacturer documentation ensures the most accurate deployment information.
