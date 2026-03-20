---
slug: /tk_star/tk980/protocol
id: tk980-protocol
sidebar_label: Protocol
title: TK-Star - TK980 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting the TK-Star TK980 OBD2 tracker to Plaspy for vehicle tracking and telemetry
keywords:
  - TK-Star TK980 protocol
  - TK980 GPS protocol
  - TK980 OBD2 Plaspy compatibility
  - TK-Star GPS tracker protocol
  - vehicle tracking protocol
  - Plaspy device protocol
  - OBD2 telemetry protocol
  - TK980 communication protocol
  - fleet tracking TK980
  - TK980 tracking compatibility
---

# TK-Star - TK980 Protocol

This page describes the public protocol context for using the TK-Star TK980 4G OBD2 tracker with Plaspy. It explains how the tracker reports position and OBD2 telemetry to the cloud, how Plaspy receives those reports, and what to expect during setup and troubleshooting without exposing private implementation details.

The TK980 is a plug and play OBD2 device that supports multi mode positioning and broad cellular coverage. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ between shipments or firmware releases.

## Protocol Overview

The tracker reporting protocol defines how the TK980 communicates telemetry and events to a remote server so Plaspy can ingest location, diagnostics, and alarms. The public view of the protocol focuses on what data classes are sent and how that data is used rather than on proprietary packet internals.

- Enables the TK980 to send periodic or event driven location updates and OBD2 telemetry to Plaspy for live monitoring.
- Carries event notifications such as vibration alarms, geo fence triggers, and motion detection so Plaspy can generate alerts.
- Identifies the device to the server so Plaspy can associate incoming data with the correct vehicle and account.
- Transports hybrid positioning data including GPS BeiDou and GLONASS plus LBS and Wi‑Fi hints for improved coverage.
- Delivers vehicle parameter readings from the OBD2 interface to support telemetry and diagnostics in Plaspy.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Users generally do not need to manually select a protocol inside Plaspy if the device is pointed at the Plaspy server and uses the supported transport settings.

- Incoming device connections target the Plaspy endpoint so the platform can observe and identify the tracker reporting format.
- Plaspy uses a single shared port for all supported devices which simplifies device configuration and reduces setup errors.
- If the device is configured to report to d.plaspy.com or directly to 54.85.159.138 on the correct port, Plaspy will accept the connection and determine the protocol automatically.
- Proper device identification on first contact helps Plaspy match the tracker to the correct fleet account and apply platform features.
- You typically only need to configure the device reporting address and transport type on the tracker side; Plaspy handles protocol recognition server side.

## Transport and Connection Context

The TK980 can be configured to use common transport methods and must point to the Plaspy server for data delivery. This section covers the connection context you will use when configuring the device to communicate with Plaspy.

- The device may be configured to use UDP or TCP for reporting depending on the TK980 firmware and configuration options.
- Plaspy receives device data on a single port shared by all supported trackers which simplifies deployments and firewall configuration.
- Devices should be set to report to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 using the shared port.
- Selecting UDP versus TCP depends on device support, network conditions, and the desired delivery behavior for telemetry and alarms.
- Ensure outbound access from the vehicle network allows the chosen transport to reach the Plaspy server address and port.

## Protocol Compatibility Notes

- Firmware versions can change device behavior; verify that your TK980 firmware release matches the features you expect for telemetry and event reporting.
- Hardware revisions and regional variants may result in different network capabilities such as NB‑IoT, CAT‑M1, or 2G fallback behavior.
- Transport selection (UDP or TCP) is configured on the device; confirm the TK980 is set to a transport supported by your network and by Plaspy.
- Manufacturer configuration commands or server addresses must be set to the Plaspy endpoint to enable automatic detection by Plaspy.
- Validate OBD2 parameter availability with the specific vehicle model because OBD2 data exposure can vary by vehicle and ECU.
- When in doubt, consult the official TK‑Star documentation or firmware release notes for device specific differences that affect protocol behavior.

## Why Protocol Understanding Matters

A practical understanding of the TK980 communication protocol helps ensure reliable setup, predictable behavior in the field, and more efficient troubleshooting when working with Plaspy.

- Helps confirm the device is pointing to the correct server address so Plaspy can receive and interpret reports.
- Makes it easier to choose UDP or TCP based on network reliability and expected delivery guarantees for alarms and telemetry.
- Assists with firewall and network planning so the tracker can reach the Plaspy endpoint without interruption.
- Supports meaningful troubleshooting when location updates, OBD2 telemetry, or event alarms are not arriving as expected.
- Clarifies expectations about which telemetry fields are available from the TK980 versus what Plaspy can process.

## Why Use Plaspy with This Protocol

Using the TK980 with Plaspy provides rapid OBD2 installation combined with cloud based telemetry and fleet features that are useful for fleet managers, rental operators, and vehicle owners. The device streams location, multi constellation positioning, and OBD2 parameters to the Plaspy platform where you can configure geofences, alerts, and historical route review.

To learn more about Plaspy and how it integrates with devices like the TK980 visit https://www.plaspy.com. Please verify current protocol support, firmware behavior, and device implementation details with the manufacturer at https://www.tk-star.com/ since firmware and implementation details can change over time.
