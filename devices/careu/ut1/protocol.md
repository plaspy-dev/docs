---
slug: /careu/ut1/protocol
id: ut1-protocol
sidebar_label: Protocol
title: CAREU - UT1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU UT1 integration with Plaspy server and connection guidance
keywords:
  - CAREU UT1 protocol
  - CAREU UT1 GPS protocol
  - CAREU UT1 Plaspy compatibility
  - CAREU UT1 tracking protocol
  - CAREU asset tracker Plaspy
  - UT1 telemetry protocol
  - UT1 communication protocol
  - CAREU UT1 LTE tracker
  - CAREU UT1 device protocol
  - Plaspy device compatibility
---

# CAREU - UT1 Protocol

This page describes the public protocol context for using the CAREU UT1 GPS tracker with Plaspy. It explains how the tracker communicates at a high level with the Plaspy ingestion endpoint and what to expect when integrating UT1 devices into a Plaspy deployment. The focus is on connection and protocol context rather than low level or proprietary implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by UT1 firmware version, hardware revision, and manufacturer configuration, so this page aims to provide safe, practical guidance while encouraging verification against the device manufacturer documentation.

## Protocol Overview

The UT1 reporting protocol enables the device to send location, telemetry, events, and sensor data to a backend such as Plaspy. At a high level, the protocol provides device identification, periodic and event driven reporting, and support for commands and remote configuration when the device and server support it.

- Enables the UT1 to transmit GPS and telemetry data to Plaspy for live tracking and historical logging.
- Provides device identification and status information so Plaspy can associate incoming messages with a specific tracker.
- Carries event notifications such as geofence breaches, tamper, power loss, and accelerometer events for alerts and workflows.
- Supports remote commands and configuration processes when enabled by the device and manufacturer tools.
- Allows sensor and interface data from RS‑232, 1‑Wire, and optional CAN to be forwarded to Plaspy for fleet insights.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and is built to automatically detect the reporting protocol used by incoming devices. In most cases you do not need to manually select a protocol inside Plaspy if the UT1 is correctly configured to report to the Plaspy endpoint.

- Plaspy listens for device connections at the domain d.plaspy.com and the public address 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device side configuration and server reachability.
- Plaspy will automatically detect the tracker protocol once a properly formatted message from the UT1 reaches the server.
- When a UT1 is configured to report to the Plaspy endpoint, a user typically does not need to set a protocol option in the Plaspy interface.
- If detection issues occur, manufacturer configuration or firmware differences are the most common causes and should be reviewed.

## Transport and Connection Context

The UT1 can be configured to use either UDP or TCP transport to communicate with a backend depending on the device firmware and deployment needs. Plaspy supports both transport modes on the shared Plaspy port so you can choose the best option for coverage and reliability requirements.

- Devices may be configured to send to the host d.plaspy.com or directly to the IP address 54.85.159.138.
- The device may use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy uses the same port for all supported devices, which simplifies deployments across mixed fleets.
- TCP is typically selected for more reliable delivery when supported by the device and network, while UDP can be used for low overhead reporting in some scenarios.
- Ensure the device APN and network permissions allow outbound connections to the Plaspy endpoint on the configured transport.

## Protocol Compatibility Notes

- Firmware differences across UT1 revisions can change message fields, optional features, or transport behavior; always confirm the firmware build in use.
- Hardware variants and optional interfaces such as CAN or additional I/O may expose different telemetry and require separate validation.
- Manufacturer configuration settings, including APN, reporting intervals, and transport mode, affect how the UT1 communicates with Plaspy.
- Some features such as FOTA, FTP configuration, or proprietary command channels depend on manufacturer servers or workflows and may not be managed directly by Plaspy.
- If you switch between UDP and TCP, test reporting and command paths to confirm delivery and server acknowledgements when available.
- Validate compatibility and recommended settings against the official CAREU documentation for the specific UT1 hardware and firmware revision.

## Why Protocol Understanding Matters

Understanding the UT1 communication protocol and connection context helps ensure reliable initialization, accurate telemetry ingestion, and effective troubleshooting when using Plaspy. Knowing which transport and settings the device uses reduces setup time and aids in diagnosing connectivity or data mapping issues.

- Helps confirm the device is pointing to the correct Plaspy endpoint and transport for reliable reporting.
- Aids troubleshooting when telemetry, events, or commands do not appear in Plaspy dashboards.
- Clarifies expectations for what data fields and events will be available in Plaspy based on device interfaces and firmware.
- Supports planning for remote management workflows such as remote configuration and firmware updates.
- Improves long term reliability by highlighting which firmware or configuration changes affect protocol behavior.

## Why Use Plaspy with This Protocol

The CAREU UT1 paired with Plaspy provides a durable solution for organizations that need resilient real time tracking and rich telemetry for heavy equipment, trailers, safes, and industrial assets. Plaspy ingests the UT1 position, sensor, and event data so teams can monitor asset location, respond to alarms, and analyze historical activity for operations and security use cases.

To learn more about Plaspy and how it works with devices like the CAREU UT1, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notices, and configuration guides refer to the manufacturer at https://www.systech-iot.com/ since protocol support and firmware behavior can change over time.
