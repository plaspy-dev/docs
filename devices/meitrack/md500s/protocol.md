---
slug: /meitrack/md500s/protocol
id: md500s-protocol
sidebar_label: Protocol
title: Meitrack - MD500S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the Meitrack MD500S and how it communicates with Plaspy for GPS tracking and video telematics
keywords:
  - Meitrack MD500S protocol
  - Meitrack MD500S GPS protocol
  - MD500S Plaspy compatibility
  - MD500S communication protocol
  - MD500S tracking protocol
  - Meitrack GPS tracker protocol
  - MD500S video telematics protocol
  - Plaspy device protocol
  - vehicle tracking MD500S
  - fleet tracking Meitrack
---

# Meitrack - MD500S Protocol

This page outlines the public protocol context for using the Meitrack MD500S mobile DVR with Plaspy. It focuses on how the MD500S exchanges tracking, telemetry, and event data with the Plaspy platform in broad, non sensitive terms so system integrators and fleet administrators understand the communication relationship.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. The MD500S behavior can vary by firmware version, hardware revision, and manufacturer implementation, so real world behavior may differ between units and over time.

## Protocol Overview

The communication protocol for the MD500S coordinates telemetry, GNSS fixes, status events, and video related metadata so Plaspy can display location, alerts, and synchronized evidence. The protocol is the mechanism that lets the device identify itself to Plaspy, send timely position updates, and transmit event records that drive alerts and reports.

- Enables periodic and event driven location updates from the MD500S to the Plaspy platform
- Transports telemetry such as ignition state, input changes, CAN data, and sensor readings alongside position fixes
- Carries device identification and status information so Plaspy can associate incoming data with the correct asset
- Supports delivery of metadata and references for video events so recorded clips and telemetry can be correlated in Plaspy
- Operates within the device networking stack so connection type and transport affect delivery characteristics

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and automatically determines the specific tracker protocol used by the device. In most common deployments the user does not need to set the protocol manually inside Plaspy if the MD500S is configured to report to the Plaspy endpoint.

- Plaspy listens on the same port for all supported devices and selects the protocol automatically when data arrives
- Devices that are pointed to the Plaspy endpoint and properly configured will be recognized by the platform
- Typical device identifiers and session information included in reports allow Plaspy to match data to devices without manual protocol selection
- Administrators should ensure the device is set to report to the Plaspy endpoint so automatic detection can occur
- If a device does not appear, verify device network settings, SIM connectivity, and that the device is targeting the correct Plaspy endpoint

## Transport and Connection Context

The MD500S can use common transport channels to send data to Plaspy. Devices may be configured to use either UDP or TCP depending on the firmware and deployment needs. Plaspy accepts connections addressed to its public endpoint so devices and network administrators can route telemetry reliably.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The configured port for device connections is 8888 and Plaspy uses the same port for all devices
- The MD500S may be set to use UDP or TCP on port 8888 depending on device support and local network policies
- Devices can report over cellular or Wi Fi as supported by the unit and network conditions
- Ensure firewall and carrier settings permit outbound connections to d.plaspy.com on the configured transport and port

## Protocol Compatibility Notes

- Firmware revisions can change protocol behavior and available telemetry fields between releases
- Regional hardware variants may expose different cellular bands and optional features that affect how data is reported
- Transport choice between UDP and TCP affects delivery reliability and may require different network configuration
- Video streaming and synchronized clip handling are often implemented separately from basic location reporting and can depend on optional features
- Validation with a sample device and live reporting to Plaspy is recommended before large scale deployment
- Confirm configuration steps and supported features against the device configuration tools provided by the manufacturer

## Why Protocol Understanding Matters

Understanding how the MD500S communicates with Plaspy helps ensure correct setup, reliable data flow, and effective troubleshooting during deployment and operations. Clear protocol context reduces time spent diagnosing connectivity and data mapping issues and improves long term reliability.

- Helps verify that the device is pointing at the correct Plaspy endpoint and using the recommended transport
- Makes it easier to interpret why certain telemetry fields appear or are omitted in Plaspy reports
- Aids troubleshooting when devices fail to register or when events do not show up in the platform
- Guides decisions about firmware updates and feature enablement that can change reporting behavior
- Supports proper network and firewall configuration to allow steady connections from the fleet to Plaspy

## Why Use Plaspy with This Protocol

Pairing the MD500S with Plaspy gives fleets a unified view of vehicle location, telemetry, and video analytics. Plaspy ingests the MD500S reporting so operators can monitor routes, receive driver safety alerts, and associate recorded clips with vehicle events for incident review and compliance workflows.

Plaspy accepts incoming reports at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the tracker protocol, letting organizations focus on deployment and operations rather than protocol selection. To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information on the manufacturer website https://www.meitrack.com/ as protocol support and firmware behavior can change over time.
