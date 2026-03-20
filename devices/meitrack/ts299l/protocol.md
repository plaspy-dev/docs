---
slug: /meitrack/ts299l/protocol
id: ts299l-protocol
sidebar_label: Protocol
title: Meitrack - TS299L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Meitrack TS299L GPS tracker and how it communicates with Plaspy for real time tracking
keywords:
  - Meitrack TS299L protocol
  - Meitrack TS299L GPS protocol
  - Meitrack TS299L Plaspy
  - TS299L tracking protocol
  - Meitrack GPS tracker protocol
  - TS299L compatibility Plaspy
  - TS299L communication protocol
  - Meitrack GPS communication
  - TS299L fleet tracking
  - Meitrack telemetry protocol
---

# Meitrack - TS299L Protocol

This page describes the public protocol context for using the Meitrack TS299L tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, high level terms so fleet managers, integrators, and technical staff can understand the connection points and expected behavior for location and telemetry reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The TS299L is designed for plug and play installation and can send GNSS fixes, disconnect alerts, Bluetooth sensor data, and optional Wi Fi hotspot status into Plaspy while still being subject to device specific firmware behavior.

## Protocol Overview

At a high level the TS299L communication protocol defines how the tracker identifies itself to the cloud, reports GNSS position and device status, and forwards sensor and telemetry readings to a server. The public protocol context covered here explains the role of that communication without exposing private parser or packet details.

- Enables the TS299L to report regular GNSS fixes and timestamps that Plaspy ingests for live tracking and history.
- Carries device status events such as instant disconnect alerts, power state, and cellular connectivity information to trigger platform alerts.
- Forwards Bluetooth sensor readings and optional hotspot presence so Plaspy can correlate environmental telemetry with vehicle location.
- Allows remote management signals such as FOTA indicators to be associated with device records on Plaspy.
- Provides the addressing and transport context that lets devices reliably deliver telemetry to Plaspy servers.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol when the device is configured to report to that endpoint. In most deployments the user does not need to select a protocol manually inside Plaspy if the TS299L is configured correctly to send data to the Plaspy server.

- Plaspy accepts device reports on the same port for all supported devices which simplifies device configuration and onboarding.
- Devices reporting to the Plaspy endpoint are identified and associated with tenant accounts so protocol detection can be applied automatically.
- When a TS299L is pointed at the Plaspy endpoint the platform matches incoming data to known device records and protocol patterns for processing.
- Proper device configuration to point at the Plaspy server is typically the primary step required for automatic detection and ingestion.
- If you use network filtering or firewalls, allow outbound connectivity to the Plaspy endpoint to ensure detection and data flow.

## Transport and Connection Context

Connection context covers how the TS299L sends its data to Plaspy rather than the internal packet structure. The TS299L may be configured to use either UDP or TCP transport depending on device support and operator preference, and it must target the Plaspy endpoint to deliver telemetry.

- TS299L devices can be configured to report to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for reporting.
- The tracker may use UDP or TCP on port 8888 depending on the device configuration and cellular network behavior.
- Consistent use of the Plaspy endpoint and port simplifies deployment across mixed fleets and regional device variants.
- Ensure network policies permit outbound UDP or TCP traffic to the Plaspy endpoint to avoid delivery issues.

## Protocol Compatibility Notes

- Firmware differences across TS299L units can affect available features and the exact telemetry fields reported to Plaspy.
- Hardware revisions or regional cellular variants may change supported transport behaviors or optional features such as hotspot or Bluetooth reporting.
- Selecting UDP versus TCP on the device affects connection semantics but not the fact that Plaspy receives data on the same port for all devices.
- Manufacturer configuration instructions and menu settings determine how the TS299L points at the Plaspy endpoint and which events are reported.
- Validate compatibility and feature availability for specific firmware builds when planning large deployments or feature dependent workflows.
- When integrating with other vehicle systems, confirm which interfaces are exposed by your particular TS299L unit and firmware.

## Why Protocol Understanding Matters

Understanding how the TS299L communicates with Plaspy helps administrators and integrators reduce setup time, diagnose connectivity issues, and maintain reliable telemetry for operations. Clarity about transport, endpoint, and event types makes troubleshooting more efficient and supports long term fleet reliability.

- Confirms that devices are pointed at the correct endpoint so Plaspy can automatically detect and ingest data.
- Helps choose appropriate transport settings such as UDP or TCP based on network reliability and operator needs.
- Aids in diagnosing missed events such as disconnect alerts by checking device configuration and firmware behavior.
- Supports planning for firmware updates and rollout of FOTA features so device compatibility with Plaspy is maintained.
- Improves data quality by ensuring optional sensors and hotspot reporting are enabled and mapped to platform fields.

## Why Use Plaspy with This Protocol

Using the TS299L with Plaspy provides a practical solution for organizations that require rapid installation and reliable location and telemetry feeds without hardwiring. The plug and play form factor, Bluetooth sensor support, optional in vehicle Wi Fi, and FOTA capability make the TS299L a flexible choice for ride hailing, car sharing, light fleet, and anti theft monitoring use cases where timely data into a central platform is essential.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the most current device protocol and firmware details confirm information with the manufacturer at https://www.meitrack.com/ since protocol support and firmware behavior can change over time.
