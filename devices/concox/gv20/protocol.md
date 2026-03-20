---
slug: /concox/gv20/protocol
id: gv20-protocol
sidebar_label: Protocol
title: Concox - GV20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox GV20 and how it connects with Plaspy for fleet tracking
keywords:
  - Concox GV20 protocol
  - Concox GV20 GPS protocol
  - GV20 tracker communication
  - GV20 tracking protocol
  - Concox GV20 Plaspy
  - GV20 fleet tracking
  - Concox tracker protocol
  - GV20 vehicle tracker
  - Plaspy device compatibility
  - GV20 remote cutoff features
---

# Concox - GV20 Protocol

This page describes the public protocol context for using the Concox GV20 GPS tracker with Plaspy. The Concox GV20 is a 3G device designed for vehicle, motor, and bus tracking and offers features such as real time location reporting, route and flashback history, ignition status, instant alert notifications, and remote fuel or power cutoff. The content here focuses on how the GV20 communicates with Plaspy in a general, non sensitive way to help with setup and troubleshooting.

Plaspy uses shared connection settings for supported trackers and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Public Plaspy connection facts you can use when configuring the GV20 are d.plaspy.com as the server domain, 54.85.159.138 as a reachable server address, and port 8888. Devices may be set to use either UDP or TCP on port 8888, Plaspy uses the same port for all supported devices, and protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol between the GV20 and a cloud platform like Plaspy defines how the device reports telemetry and events, and how platform initiated commands are routed back to the device. For the GV20, that includes location updates, status events such as ignition changes or alerts, and control actions such as remote fuel or power cutoff where supported by the hardware and firmware.

- Carries positional telemetry so Plaspy can display real time location and route history.
- Transmits event notifications for alerts, ignition status, geofence triggers, and similar conditions.
- Enables platform initiated actions where the device and firmware support remote control features.
- Identifies the device to the server so Plaspy can associate reports with the correct asset.
- Provides a predictable reporting cadence that Plaspy uses to show recent and historical activity.

## How Plaspy Detects the Protocol

Plaspy relies on a shared server endpoint and port for incoming device connections and uses automatic detection to recognize the tracker protocol when a device reports in. In most cases you do not need to select a protocol in the Plaspy interface as long as the GV20 is configured to report to the Plaspy server.

- Plaspy listens for device connections on the same port for all supported models, port 8888.
- Devices can be pointed to the Plaspy server using the domain d.plaspy.com or the address 54.85.159.138.
- Plaspy accepts both UDP and TCP connections on port 8888 depending on how the device is configured.
- When the GV20 sends its initial reports to the Plaspy endpoint, the platform uses that incoming data to detect the protocol and associate the device.
- Proper device reporting setup typically removes the need for manual protocol selection inside Plaspy.

## Transport and Connection Context

Connection and transport settings determine how the GV20 reaches Plaspy but are not the same as the protocol payload. The GV20 can be configured to use either UDP or TCP for reporting; the underlying protocol sits on top of that transport and carries the actual telemetry and event information to Plaspy.

- The GV20 may be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- Plaspy receives device traffic on port 8888 and all Plaspy devices use that same port.
- Depending on device firmware and configuration, reporting can use UDP or TCP on port 8888.
- Network level settings such as APN, mobile data availability, and carrier 3G coverage affect connectivity independently of the tracker protocol.
- Confirm the device is set to report to the Plaspy endpoint to allow automatic protocol detection.

## Protocol Compatibility Notes

- Compatibility can depend on the GV20 firmware version; newer or older firmware may change available features or message behavior.
- Hardware revisions and optional accessory modules can affect which events and controls are available through the device protocol.
- Manufacturer configuration settings determine whether the device uses UDP or TCP and the exact server address format.
- Always verify that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility.
- Carrier network limitations such as 3G coverage and SIM configuration can impact real world behavior even when protocol settings are correct.
- Check manufacturer documentation for any model specific flags or configuration steps that affect reporting to third party platforms.

## Why Protocol Understanding Matters

Having a practical understanding of how the GV20 communicates helps ensure a smoother setup, faster troubleshooting, and reliable operation with Plaspy. Knowing the role of transport settings, server address, and firmware differences reduces setup time and helps identify issues when a device does not appear online or send expected events.

- Makes it easier to verify correct server and port settings when initializing devices.
- Helps interpret device behaviour such as missed reports, delayed alerts, or unusual status messages.
- Aids in deciding whether to use UDP or TCP for a particular deployment environment.
- Supports planning for firmware updates or hardware changes that might alter protocol behavior.
- Improves coordination with the device manufacturer or integrator when device side adjustments are needed.

## Why Use Plaspy with This Protocol

Using the Concox GV20 with Plaspy provides a consolidated platform for vehicle visibility, route monitoring, alerting, and remote control features where supported by the device. For fleets, buses, and other vehicle operations the combination of GV20 telemetry and Plaspy reporting offers practical tools for daily operations, incident response, and historical analysis.

If you want to learn more about Plaspy and how it can work with the Concox GV20, visit https://www.plaspy.com. For the most current device specific protocol documentation, firmware notes, and manufacturer implementation details verify information on the official Concox site https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
