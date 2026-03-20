---
slug: /itriangle/ts101_basic_ev_can/protocol
id: ts101_basic_ev_can-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic EV CAN Protocol
sidebar_class_name: menu_item_tracker
description: Protocol notes for integrating the iTriangle TS101 Basic EV CAN tracker with Plaspy server settings and connection context
keywords:
  - iTriangle TS101 Basic EV CAN protocol
  - iTriangle TS101 GPS protocol
  - TS101 EV CAN Plaspy compatibility
  - TS101 tracking protocol
  - iTriangle GPS tracker protocol
  - vehicle telemetry protocol
  - fleet tracking Plaspy
  - CAN telemetry Plaspy
  - BLE telemetry iTriangle
  - offline logging tracker
---

# iTriangle - TS101 Basic EV CAN Protocol

This page covers the public protocol context for using the iTriangle TS101 Basic EV CAN tracker with Plaspy. It explains the communication and transport context that enables the device to report GNSS position, CAN telemetry, I/O events, and buffered records to Plaspy without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a TS101 Basic EV CAN is properly pointed at the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the public, high level aspects of how the tracker communicates with Plaspy.

## Protocol Overview

The TS101 Basic EV CAN reporting protocol is the mechanism that turns raw device telemetry into usable fleet data inside Plaspy. It carries GNSS fixes, event markers, CAN bus values, and I/O state in a form the Plaspy platform ingests for real time tracking, history, and alerting.

- Transports device location and telemetry from the unit to Plaspy for live maps and historical replay.
- Identifies the device and provides session context so Plaspy can associate incoming messages with the correct vehicle record.
- Conveys event driven data such as alarm triggers, digital input changes, and accelerometer motion notices for alerting and rules.
- Delivers CAN sourced telemetry and diagnostic values so EV metrics and vehicle data are available in Plaspy dashboards.
- Supports offline logging on the device and bulk upload after reconnection to prevent gaps in recorded history.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and automatically determines the tracker protocol used by the TS101 Basic EV CAN. In most deployments you do not need to select a protocol manually inside Plaspy once the device is configured to report to the Plaspy server.

- Plaspy server domain is d.plaspy.com which devices can be configured to report to.
- Plaspy server IP is 54.85.159.138 and is also supported as a direct target.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on network and device settings.
- Plaspy automatically detects the tracker protocol so a properly configured TS101 Basic EV CAN will be recognized and routed to the correct ingestion pipeline.

## Transport and Connection Context

Connection settings determine how the TS101 Basic EV CAN reaches Plaspy but do not change the high level purpose of the protocol. Typical installations point the device at the Plaspy endpoint and select the transport that best suits coverage and reliability needs.

- Devices may be configured to use either UDP or TCP on port 8888 depending on SIM provider and device configuration.
- Devices may point to the Plaspy domain d.plaspy.com or the numeric server IP 54.85.159.138 as the reporting target.
- Plaspy accepts reports on port 8888 for all devices so a uniform configuration simplifies deployments.
- Transport selection affects retransmission behavior and perceived latency but the protocol semantics remain focused on delivering position and telemetry.
- When cellular coverage is weak the TS101 Basic EV CAN will buffer records locally and upload them once connectivity is restored to the Plaspy endpoint.

## Protocol Compatibility Notes

- The TS101 Basic EV CAN is Plaspy compatible for telemetry and tracking when configured to report to the Plaspy endpoint.
- Firmware versions and hardware revisions can change which telemetry fields are available or how some events are reported.
- Manufacturer configuration options such as transport type, reporting interval, and CAN mapping influence the data you receive in Plaspy.
- Always validate protocol and firmware details against the device configuration used in your fleet to avoid surprises during integration.
- Use the Plaspy shared endpoint and port settings to keep device side configuration consistent across mixed fleets.
- If you rely on specific CAN signals or I/O behavior, confirm those mappings with the manufacturer and during pilot testing.

## Why Protocol Understanding Matters

Understanding how the TS101 Basic EV CAN communicates with Plaspy helps ensure reliable setup, accurate telemetry, and efficient troubleshooting during deployment and operation.

- Ensures correct device pointing to the Plaspy endpoint and transport selection so data reaches the server.
- Helps diagnose connectivity problems by confirming whether UDP or TCP is in use and whether the device is reaching d.plaspy.com or the server IP.
- Clarifies which telemetry sources such as GNSS, CAN, BLE, and I/O are expected and how they map to Plaspy fields.
- Supports planning for offline scenarios by understanding buffer capacity and automatic upload behavior.
- Aids in coordinating firmware updates and configuration changes that can alter how the device reports to Plaspy.

## Why Use Plaspy with This Protocol

Using the TS101 Basic EV CAN with Plaspy provides practical fleet visibility for organizations that need accurate positioning, CAN based telemetry for EV or ICE vehicles, and reliable offline logging. The combination of internal GNSS, CAN interface, BLE for short range sensors, and robust buffering supports common use cases like route replay, EV battery and performance monitoring, anti theft alerts, and sensor association.

Plaspy simplifies deployment by using a shared server endpoint and a single port for all devices while automatically detecting the tracker protocol for ingestion and processing. To learn more about Plaspy and its features visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.itriangle.net/.
