---
slug: /topten/pg99/protocol
id: pg99-protocol
sidebar_label: Protocol
title: TopTen - PG99 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the TopTen PG99 GPS tracker and how it communicates with Plaspy for reliable tracking and integration
keywords:
  - TopTen PG99
  - PG99 protocol
  - TopTen GPS protocol
  - PG99 GPS tracker
  - PG99 communication
  - TopTen tracker compatibility
  - PG99 Plaspy
  - vehicle tracking PG99
  - asset tracker PG99
  - GPS tracker protocol Plaspy
---

# TopTen - PG99 Protocol

This page summarizes the public protocol context for using the TopTen PG99 GPS tracker with Plaspy. It focuses on how the device communicates in general terms so that fleet managers and integrators can understand the role of the tracker reporting protocol when connecting PG99 devices to Plaspy for asset and vehicle tracking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Plaspy's endpoint is reachable at d.plaspy.com and at the server IP 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so confirm device specific details before deployment.

## Protocol Overview

The PG99 communicates position, status, and alarm events to a remote server using its reporting protocol. That protocol defines how the tracker identifies itself, how location and telemetry are reported, and how event notifications are delivered to the platform that collects and interprets the data.

- Device identification and registration data allow Plaspy to associate incoming reports with the correct tracker and account.
- Location reporting includes GPS coordinates when available and LBS fallback information when GPS is weak or unavailable.
- Telemetry and status fields convey battery condition, motion or vibration alarms, speed, direction, and odometer or runtime indicators as supported by the device.
- Alert and alarm messages such as vibration alarm, low battery, and overspeed are relayed so Plaspy can generate notifications and history entries.
- Power management behavior including deep sleep and reporting intervals affects how frequently the device sends data and how Plaspy interprets gaps in reporting.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a single shared endpoint and the platform automatically identifies the reporting protocol used by an incoming device stream. In most cases, once the PG99 is configured to report to Plaspy, no manual protocol selection is required inside the platform.

- Plaspy listens on a common server endpoint at d.plaspy.com and 54.85.159.138 using port 8888.
- Devices may be configured to use either UDP or TCP to send reports to the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol for properly configured devices reporting to the shared endpoint.
- Users generally only need to ensure the tracker is set to report to the Plaspy host and port and that any required device ID is correctly programmed on the tracker.
- If a device does not appear online, review device reporting settings, transport selection, and firmware differences that may affect compatibility.

## Transport and Connection Context

Connection context describes how the PG99 establishes and maintains communication with Plaspy rather than the low level protocol details. The PG99 can use different transport methods and power modes that influence connectivity and reporting behavior.

- The PG99 may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy uses port 8888 for all supported devices, which simplifies device configuration for fleets using mixed models.
- The device may send data over UDP or TCP on port 8888 depending on the tracker configuration and network conditions.
- Deep sleep and power save modes on PG99 affect reporting frequency and may delay transmission until scheduled wake intervals.
- LBS reporting provides coarse location when GPS signals are not available, which affects how data is presented in Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change the set of available fields, alarm behavior, and reporting intervals. Verify firmware release notes when possible.
- Hardware variants and manufacturing batches sometimes differ in supported features or default configuration.
- Manufacturer configuration options such as transport selection and deep sleep settings will affect how the tracker communicates with Plaspy.
- LBS fallback and A GPS assisted behavior are implementation dependent and can vary based on network availability.
- Test any new fleet deployment with representative devices to confirm reporting, alarms, and power behaviour meet operational requirements.
- Always cross check manufacturer documentation for model specific instructions and default command formats.

## Why Protocol Understanding Matters

Knowing how the PG99 communicates helps ensure reliable setup, correct interpretation of reported data, and efficient troubleshooting when devices do not behave as expected. A practical understanding of protocol behavior also helps you manage power tradeoffs and alarm responsiveness.

- Ensures correct device registration so Plaspy can map incoming reports to the right asset or vehicle.
- Helps set appropriate reporting intervals and power modes for the required operational lifetime.
- Improves troubleshooting by distinguishing between connectivity issues and protocol or firmware differences.
- Clarifies expectations for GPS versus LBS accuracy and when fallback data will be used.
- Supports planning for alarm and notification workflows in Plaspy based on the device event set.

## Why Use Plaspy with This Protocol

Using TopTen PG99 devices with Plaspy gives organizations a consolidated way to collect location and alarm events from asset trackers across deployments. Plaspy's shared endpoint and automatic protocol detection reduce configuration overhead and make it simpler to bring PG99 units online alongside other supported models.

Plaspy centralizes alerts, historical location data, and live monitoring so teams can maintain operational oversight while benefiting from the PG99 features such as deep sleep power modes, multiple reporting options, and vibration and low battery alarms. To learn more about Plaspy and how it works with common tracker models visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time so verify the latest device specific documentation on the manufacturer website http://www.t10.cn.
