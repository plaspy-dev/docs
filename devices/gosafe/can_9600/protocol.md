---
slug: /gosafe/can_9600/protocol
id: can_9600-protocol
sidebar_label: Protocol
title: Gosafe - CAN-9600 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Gosafe CAN-9600 GPS tracker and how it communicates with Plaspy fleet platform
keywords:
  - Gosafe CAN-9600 protocol
  - Gosafe CAN 9600 GPS protocol
  - CAN 9600 FMS data
  - Gosafe GPS tracker protocol
  - CAN 9600 RS232 integration
  - Gosafe J1939 J1708 compatibility
  - Plaspy device communication
  - GPS tracking protocol Plaspy
  - Vehicle tracking CAN bus data
  - Fleet tracking CAN-9600 compatibility
---

# Gosafe - CAN-9600 Protocol

This page describes the public protocol context for using the Gosafe CAN-9600 tracker with the Plaspy fleet platform. It focuses on how the CAN-9600 reads FMS data from vehicle CAN buses and forwards that information via a serial interface so it can be consumed by a GPS tracking device and relayed to Plaspy. The goal is to explain the communication role of the CAN-9600 in safe, non sensitive terms to help integration and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report correctly to the platform. Devices configured to report to Plaspy should use the Plaspy endpoint d.plaspy.com or its IP address 54.85.159.138 on port 8888. The CAN-9600 behavior can vary by firmware version, hardware revision, and manufacturer implementation, so always validate device specific details with the manufacturer documentation.

## Protocol Overview

The CAN-9600 is designed to capture FMS information from standard vehicle CAN buses and present that data on an RS232 serial interface so a compatible GPS tracker can send it to a server. In a Plaspy deployment the tracker attached to the CAN-9600 relays the FMS fields to Plaspy where the data is processed for display, reporting, and alerts.

- The tracker protocol governs how FMS values are presented to a connected GPS device and how those values are labeled for server ingestion.
- The CAN-9600 reads standard CAN formats including SEA J1939 and SEA J1708 and exposes relevant fields on serial output.
- Serial RS232 output allows the CAN-9600 to be paired with a variety of GPS trackers that accept external telematics input.
- Over the air reporting to Plaspy is performed by the GPS tracker that receives CAN-9600 serial data and forwards it to the Plaspy endpoint.
- The protocol role is primarily to make vehicle bus data usable by the tracking device and by the downstream Plaspy platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports on a single shared server endpoint and port and uses automated detection to identify the tracker protocol when devices send data. Most users do not need to manually select a protocol inside Plaspy if their device is configured to report to the Plaspy endpoint correctly.

- Devices should be pointed to d.plaspy.com or to the server IP 54.85.159.138.
- Plaspy listens on port 8888 and supports devices that use either TCP or UDP to report on that port.
- All Plaspy supported devices use the same port for incoming connections which simplifies device configuration.
- When a properly configured tracker sends data to the Plaspy endpoint the platform will automatically detect the tracker protocol and begin processing incoming fields.
- Proper identification depends on the tracker sending recognizable telemetry and identification fields to the shared endpoint.

## Transport and Connection Context

Connection choices such as UDP versus TCP and the device DNS or IP target affect how the tracker forwards CAN-9600 data into Plaspy. The CAN-9600 provides serial output to a tracking device, and that tracking device handles the network transport to Plaspy.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses port 8888 for all supported devices to provide a consistent network target.
- The CAN-9600 exposes FMS data on RS232 which must be connected to a compatible tracker or serial adapter.
- Verify the tracker network transport setting (UDP or TCP) and the reporting host to ensure data reaches Plaspy.

## Protocol Compatibility Notes

- Firmware revisions on the CAN-9600 or on attached GPS trackers can change available fields and serial formatting.
- Hardware revisions and different manufacturer builds can result in small variations in which FMS fields are exposed on RS232.
- Integration depends on the tracker that reads RS232 output; compatibility is influenced by that tracker firmware and settings.
- Transport selection matters: ensure the attached tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 using the expected transport.
- Always confirm serial wiring, baud rate, and serial port parameters against the official Gosafe documentation for the CAN-9600.
- Validate compatibility with live tests and review manufacturer release notes for firmware changes that affect protocol behavior.

## Why Protocol Understanding Matters

A practical understanding of the CAN-9600 communication behavior helps ensure accurate setup, reliable data collection, and efficient troubleshooting when integrating with Plaspy. Knowing which FMS fields are available and how they are presented on serial output reduces integration time and improves data quality on the Plaspy platform.

- Helps confirm that the attached tracker reads the expected FMS values from the CAN-9600 RS232 output.
- Speeds up troubleshooting by narrowing issues to transport, serial connection, or firmware differences.
- Enables correct mapping of vehicle metrics into Plaspy dashboards and reports.
- Improves long term reliability by highlighting when firmware updates or hardware changes require configuration adjustments.
- Supports scalable deployments by reducing per device configuration when Plaspy automatic detection is relied upon.

## Why Use Plaspy with This Protocol

Using the Gosafe CAN-9600 together with Plaspy enables fleets to capture vehicle FMS data and bring operational telemetry into a single monitoring platform. For operators of trucks and buses, integrating CAN bus metrics such as engine data, fuel and other vehicle health indicators into Plaspy provides actionable visibility for maintenance planning, driver coaching, and compliance workflows.

If you want to learn more about how Plaspy handles device connections and telemetry, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information with the manufacturer at https://gosafesystem.com/.
