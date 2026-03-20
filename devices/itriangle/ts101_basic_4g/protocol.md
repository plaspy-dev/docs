---
slug: /itriangle/ts101_basic_4g/protocol
id: ts101_basic_4g-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the iTriangle TS101 Basic 4G and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - iTriangle TS101 Basic 4G protocol
  - iTriangle TS101 Basic 4G GPS protocol
  - iTriangle TS101 Basic 4G communication protocol
  - iTriangle TS101 Basic 4G tracking protocol
  - TS101 Basic 4G Plaspy compatibility
  - TS101 Basic 4G fleet tracking
  - Plaspy device integration
  - Plaspy tracker protocol
  - vehicle telematics TS101
  - TS101 GNSS tracker protocol
---

# iTriangle - TS101 Basic 4G Protocol

This page documents the public protocol context for using the iTriangle TS101 Basic 4G with the Plaspy platform. It explains how the tracker communicates with Plaspy in general terms, what connection settings are used publicly by Plaspy, and what to consider when integrating this model into a fleet monitoring deployment. The goal is to provide useful protocol-oriented guidance while avoiding firmware or implementation specifics that are only available from the manufacturer.

The TS101 Basic 4G is a compact LTE Cat‑1 GNSS tracker with BLE and configurable I/O that is Plaspy compatible. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so verify device‑specific details with official documentation when needed.

## Protocol Overview

The communication protocol for the TS101 Basic 4G defines how GNSS fixes, telemetry, and event signals are sent from the device to a server and how remote commands or configurations are exchanged. With Plaspy, the primary role of the protocol is to deliver reliable position and sensor data to the platform and to allow remote management where supported by the device.

- Carries GNSS position data and time stamped telemetry such as ignition state, sensor readings, and movement events to Plaspy.
- Allows the device to identify itself to the server so Plaspy can associate incoming data with the correct asset or vehicle record.
- Facilitates status messages and event reporting that Plaspy uses to generate alerts and historical reports.
- Supports intermittent upload of locally stored records when network coverage returns, enabling offline resilience.
- Works over standard IP transport so the device can deliver data to Plaspy using the platform endpoint and port settings.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and uses automated detection to determine the appropriate tracker protocol for each incoming connection. In most cases, users do not need to manually select a protocol inside Plaspy when the tracker is correctly configured to report to the Plaspy endpoint.

- Plaspy accepts device reports on the public server domain d.plaspy.com and the corresponding server IP 54.85.159.138.
- The platform uses a common listening port for all devices so a single port setting is used across supported trackers.
- Plaspy automatically detects the tracker protocol when the device begins reporting to the Plaspy endpoint.
- When a device is properly pointed to d.plaspy.com or the server IP and the correct transport is selected, Plaspy will associate incoming data with the device record.
- Manual protocol selection in Plaspy is normally unnecessary provided the device is configured to report to the Plaspy endpoint and port.

## Transport and Connection Context

Connection behavior for the TS101 Basic 4G depends on device configuration options that the manufacturer provides. Plaspy supports both common transport options so the tracker can report using the method that suits your deployment and network environment.

- The TS101 Basic 4G may be configured to use UDP or TCP for reporting depending on device support and configuration choices.
- Devices can be pointed to the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy expects incoming connections on the shared port 8888 regardless of TCP or UDP transport.
- Using the correct transport and server address on the device is required for Plaspy to receive and automatically detect the protocol.
- Because all devices in Plaspy use the same port, port configuration on the tracker is simplified across different models.

## Protocol Compatibility Notes

- Firmware version differences can change available fields, reporting intervals, and optional telemetry features; check the device firmware notes before deploying at scale.
- Hardware revisions and optional interfaces such as CAN or RS485 may expose additional telemetry channels that affect what data the protocol transports.
- Transport selection (UDP vs TCP) can impact delivery guarantees and how the device and network handle retransmission; choose the transport supported by your device and network.
- Manufacturer configuration channels such as TCP/IP settings, SMS, BLE provisioning, or USB may be used to point the device to Plaspy; consult manufacturer instructions for the recommended method.
- Plaspy’s automatic detection covers a wide set of tracker behaviors, but confirm that your unit is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Always validate compatibility against the latest manufacturer documentation for model specific command sets and configuration flows.

## Why Protocol Understanding Matters

Understanding how the TS101 Basic 4G communicates helps ensure successful setup, reliable operation, and efficient troubleshooting when the device is used with Plaspy. Clear knowledge of transport, addressing, and what data the tracker reports improves integration speed and reduces configuration errors.

- Speeds up initial setup by ensuring the device is pointed to the correct Plaspy endpoint and transport.
- Reduces time spent troubleshooting connectivity or missing telemetry by clarifying expected reporting behavior.
- Helps determine which device interfaces are required for a given use case, such as CAN for vehicle bus data or BLE for local sensors.
- Enables planning for coverage gaps and offline logging behavior so historical records are retained and uploaded as expected.
- Supports informed firmware update planning to preserve features and protocol compatibility during OTA updates.

## Why Use Plaspy with This Protocol

Using the iTriangle TS101 Basic 4G with Plaspy provides fleet managers and asset operators with continuous location, event, and telemetry streams combined with Plaspy’s fleet visualization and alerting capabilities. The device’s LTE Cat‑1 connectivity, multi GNSS reception, internal backup battery, and flexible I/O make it a practical choice for mixed fleet deployments that require robust tracking and remote control features.

To learn more about how Plaspy works with compatible trackers and to explore platform features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, consult the manufacturer documentation at https://www.itriangle.net/ as protocol support and firmware behavior may change over time.
