---
slug: /topten/tk428/protocol
id: tk428-protocol
sidebar_label: Protocol
title: TopTen - TK428 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopTen TK428 OBD II tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - TopTen TK428
  - TopTen TK428 protocol
  - TK428 GPS tracker
  - TK428 OBD II protocol
  - TopTen GPS protocol Plaspy
  - TK428 compatibility Plaspy
  - OBD II GPS tracker
  - vehicle tracking TK428
  - fleet management TK428
  - Plaspy device compatibility
---

# TopTen - TK428 Protocol

This page describes the public protocol context for using the TopTen TK428 OBD II GPS tracker with Plaspy. It focuses on how the tracker communicates usable telemetry and location information to the Plaspy platform, and what to consider during setup and validation. The TK428's OBD connector enables it to report location plus vehicle data such as speed, RPM, odometer, and fuel related metrics, which Plaspy can surface once the device is configured to report to the Plaspy endpoint.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports correctly. Exact protocol behavior and supported telemetry fields can vary by TK428 firmware version, hardware revision, and manufacturer implementation. For precise firmware specific details consult the TopTen documentation and release notes.

## Protocol Overview

The communication protocol of the TK428 governs how the device identifies itself, reports GPS and OBD telemetry, and maintains a reporting connection to a remote server. In practice this protocol maps vehicle and location data into messages the server can interpret and store for tracking, alerts, and reporting.

- Enables the tracker to identify device serial or IMEI and associate telemetry with a vehicle record.
- Transports GPS coordinates and OBD derived telemetry such as speed, RPM, and odometer readings to the server.
- Controls reporting intervals and event driven reports such as ignition state or movement events as supported by the device firmware.
- Bridges CAN bus and OBD II readouts into a format that server side systems can consume for fleet analysis.
- Depends on firmware and vehicle CAN compatibility for which ECU parameters are available from the TK428.

## How Plaspy Detects the Protocol

Plaspy receives connections from devices using a common endpoint and port and determines the appropriate device protocol automatically so users typically do not need to select a protocol manually. Proper device configuration to report to the Plaspy endpoint is the primary requirement for detection and onboarding.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The Plaspy reporting port is 8888 and all devices use the same port for communication with Plaspy.
- Devices may be configured to communicate over UDP or TCP on port 8888 depending on device and network settings.
- When the TK428 sends data to d.plaspy.com port 8888 Plaspy examines the incoming data stream and maps the information to the appropriate device profile.
- In most cases a correctly configured TK428 will be detected automatically without manual protocol selection inside the Plaspy platform.

## Transport and Connection Context

Connection choices influence reliability and behavior but do not change the high level protocol purpose of sending GPS and OBD telemetry to Plaspy. The TK428 supports common transport modes and can be directed to either the Plaspy domain name or the platform IP address.

- The TK428 may be configured to use UDP or TCP on port 8888 depending on the tracker settings and network environment.
- Devices can point to the Plaspy DNS name d.plaspy.com or directly to 54.85.159.138 if required by specific network setups.
- Plaspy uses the same port 8888 for all supported trackers to simplify device configuration and onboarding.
- Network level factors such as NAT, firewall rules, and mobile carrier behavior can affect whether UDP or TCP is preferable for a given deployment.
- Confirm that the device reporting server and port match Plaspy settings to ensure timely delivery of position and telemetry data.

## Protocol Compatibility Notes

- Firmware differences between TK428 units can change which telemetry fields are reported and how frequently events are emitted.
- Hardware revisions and vehicle CAN bus variations affect which ECU parameters the tracker can read from a particular vehicle.
- Manufacturer side configuration options may alter transport preferences or available diagnostic data.
- Selecting UDP versus TCP can affect delivery guarantees and battery or connection behavior on cellular networks.
- Always test a representative device in your fleet before wide scale deployment to validate telemetry fields and reporting cadence.
- Validate compatibility and any firmware specific features against official TopTen documentation for your TK428 revision.

## Why Protocol Understanding Matters

Understanding the TK428 communication protocol helps ensure correct configuration, accurate telemetry mapping, and faster troubleshooting when integrating devices with Plaspy. Awareness of how the device reports data makes it easier to set expectations for what information will be available in the platform and to diagnose common connectivity issues.

- Ensures the reporting server and port are set to d.plaspy.com or 54.85.159.138 and to port 8888 so Plaspy can receive data.
- Helps determine whether TCP or UDP is the better transport for a specific deployment scenario.
- Aids in interpreting which OBD and CAN parameters the tracker will supply based on firmware and vehicle support.
- Reduces onboarding time by clarifying what telemetry is expected from the TK428 and how Plaspy will map those fields.
- Supports consistent monitoring and alerting by aligning device reporting behavior with the platform configuration.

## Why Use Plaspy with This Protocol

Using the TopTen TK428 with Plaspy provides a straightforward path to combine vehicle location with rich OBD II telemetry for fleet operations, driver behavior monitoring, and vehicle diagnostics. The plug and play OBD connection of the TK428 makes it practical to deploy across vehicles with an OBD II port while Plaspy centralizes reporting, alerts, and historical data.

Plaspy's automatic protocol detection and use of a shared reporting port simplify device setup and reduce manual configuration steps for fleet managers and integrators. To learn more about how Plaspy can work with your TK428 devices visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information on the official TopTen site http://www.t10.cn as implementations and firmware behavior can change over time.
