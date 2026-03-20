---
slug: /castel/idd_213gl/protocol
id: idd_213gl-protocol
sidebar_label: Protocol
title: Castel - IDD-213GL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Castel IDD 213GL and how it communicates with Plaspy for tracking and vehicle diagnostics
keywords:
  - Castel IDD 213GL protocol
  - Castel IDD 213GL GPS protocol
  - Castel IDD 213GL protocol for Plaspy
  - Castel IDD 213GL communication protocol
  - Castel IDD 213GL tracking protocol
  - Castel GPS tracker protocol
  - Castel OBD tracker protocol
  - IDD 213GL vehicle tracking
  - Plaspy device compatibility
  - GPS tracker protocol Plaspy
---

# Castel - IDD-213GL Protocol

This page provides a public overview of the communication context for the Castel IDD-213GL when used with Plaspy. It explains how the device reports vehicle diagnostics and location data to a backend server and what protocol considerations matter for integration and troubleshooting. The information here focuses on high level behavior and configuration points rather than device internals.

The IDD-213GL is an intelligent on board diagnostic tracker that can read ECU data and send GPS location and driving behavior information to a remote server. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device reporting behavior may differ between units and firmware releases.

## Protocol Overview

The protocol for this tracker defines how the IDD-213GL packages and transmits vehicle diagnostics, GPS positions, and event data to a backend. In practice this means the device converts OBD and sensor readings into a form that the Plaspy platform can ingest and associate with the correct vehicle record.

- Enables transmission of location and ECU derived data such as speed, RPM, and diagnostic trouble codes to the backend
- Provides event reporting for driving behavior alerts like hard acceleration, harsh braking, and idling
- Carries periodic and event driven reports so Plaspy receives both live updates and historical samples
- Allows the device to identify itself and its reporting mode so Plaspy can associate incoming messages with the correct asset
- Supports multiple reporting triggers including time interval, distance, and heading change to control data volume

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a shared endpoint and port and will identify the tracker protocol automatically when a properly formatted device report arrives. This removes the need for most users to manually select a protocol inside Plaspy as long as the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens for device reports on the domain d.plaspy.com and also on the IP address 54.85.159.138
- All devices in Plaspy use the same port and Plaspy applies automatic protocol detection for incoming connections
- If the IDD-213GL is configured to report to the Plaspy endpoint, manual protocol selection is typically unnecessary
- Automatic detection supports both periodic position uploads and event driven messages commonly used for diagnostics and alerts
- Proper device configuration and current firmware increase the likelihood of seamless detection and correct data parsing

## Transport and Connection Context

Connection and transport choices determine how reports are delivered from the IDD-213GL to Plaspy but do not change the nature of the data collected from the vehicle. The device can use either UDP or TCP depending on its settings and the network environment.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the domain d.plaspy.com or the numeric address 54.85.159.138 for reporting
- Plaspy uses the same port for all supported devices which simplifies configuration and centralizes ingestion
- Transport selection affects reliability characteristics such as delivery confirmation and retransmission behavior at the network layer
- Network factors like carrier GPRS quality and firewall rules can influence whether UDP or TCP is the better choice for a given deployment

## Protocol Compatibility Notes

- The IDD-213GL is compatible with vehicle protocols OBD II EOBD J1939 and J1708 which affects the diagnostic data available to send
- Reported fields and event names can vary by firmware version and device configuration so payload content may not be identical across units
- Hardware revisions and optional feature sets can change which sensors or messages are available for transmission
- Transport mode selection between UDP and TCP may be configurable on the device and can affect Plaspy ingestion under certain network conditions
- Always validate that the device is configured to report to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888 to ensure connectivity
- Confirm compatibility and expected report fields against the manufacturer documentation when deploying at scale

## Why Protocol Understanding Matters

Understanding how the IDD-213GL communicates helps with correct setup, effective troubleshooting, and ensuring reliable data for fleet operations. Knowing the roles of transport, firmware, and device configuration reduces integration time and prevents common problems.

- Helps ensure the device is pointed to d.plaspy.com or 54.85.159.138 and using the correct port so reports reach Plaspy
- Aids troubleshooting when expected diagnostic fields or events do not appear in the platform
- Clarifies how firmware changes and hardware revisions may impact available telemetry and reporting formats
- Supports informed decisions about using UDP or TCP based on network reliability and operational priorities
- Enables predictable data mapping from vehicle bus protocols into Plaspy asset records

## Why Use Plaspy with This Protocol

Using the Castel IDD-213GL with Plaspy delivers combined GPS tracking and vehicle diagnostic visibility suitable for fleet management operations. Plaspy ingests location, diagnostic trouble codes, and driving behavior events so organizations can monitor performance, schedule maintenance, and improve driver safety using a single backend.

Plaspy simplifies integration by accepting reports at a shared endpoint and automatically detecting the tracker protocol. To learn more about Plaspy visit https://www.plaspy.com. Please note that protocol support firmware behavior and device implementation details can change over time and you should verify the latest device specific information with the manufacturer at http://www.castelecom.com/
