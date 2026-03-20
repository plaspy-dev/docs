---
slug: /megastek/mt500/protocol
id: mt500-protocol
sidebar_label: Protocol
title: Megastek - MT500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Megastek MT500 GPS ankle tracker and how it communicates with Plaspy servers
keywords:
  - Megastek MT500 protocol
  - MT500 GPS tracker
  - Megastek GPS tracking
  - MT500 Plaspy compatibility
  - prisoner ankle tracker protocol
  - GPS tracker protocol Plaspy
  - correctional monitoring GPS
  - geofence monitoring MT500
  - tamper detection MT500
  - Plaspy device integration
---

# Megastek - MT500 Protocol

This page covers the public protocol context for using the Megastek MT500 Prisoner GPS Metal Ankle with the Plaspy platform. It summarizes how the MT500 reports location, tamper, and geofence events to Plaspy and what to consider when configuring the tracker to feed data into the platform. Content here focuses on public, non sensitive communication details that help administrators and technicians understand integration basics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an MT500 is configured to report to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes connection and protocol context rather than device internals.

## Protocol Overview

The communication protocol defines how the MT500 packages and transmits its GNSS position, tamper events, and status telemetry to a remote server such as Plaspy. In practical terms the protocol ensures the device can identify itself, report actionable events, and allow the server to translate incoming data into location updates, alarms, and audit records for case management.

- Enables delivery of GNSS coordinates and device status from the MT500 to the server.
- Signals tamper, removal, and boundary breach events so Plaspy can generate alerts.
- Carries periodic or event driven telemetry used for battery and health monitoring.
- Provides device identification information so Plaspy can associate messages with the correct case or asset.
- Supports remote configuration and firmware update control channels as implemented by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and automatically identifies the tracker protocol based on the incoming connection and message pattern. For most deployments the user does not need to select a protocol inside Plaspy when the MT500 is correctly configured to report to Plaspy’s network address.

- Plaspy uses a single listening port for all supported devices which simplifies device configuration.
- When an MT500 reports to the Plaspy endpoint the platform examines the incoming feed and associates it with its internal protocol handlers.
- Users typically point devices to the Plaspy server and let the platform detect and map messages to the correct device record.
- Proper network configuration and correct device identification fields are required for automatic detection to succeed.
- If you experience detection issues, verify device network settings and manufacturer guidance before contacting platform support.

## Transport and Connection Context

The MT500 may use either UDP or TCP transport depending on device configuration and network conditions. Plaspy accepts connections on a single public endpoint so devices can be directed to a consistent destination for telemetry and event reporting.

- Devices may be configured to report to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by the platform use this same port.
- The MT500 can be set to use UDP or TCP on port 8888 based on the tracker and network setup.
- Choosing UDP or TCP is a device configuration decision that affects delivery semantics but does not change the destination endpoint.
- Ensure any firewalls or carrier APN settings allow outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Manufacturer firmware revisions may add or change reported fields and event behavior; always check firmware release notes.
- Hardware revisions can alter available sensors or tamper detection schemes even if the device model name is unchanged.
- Some carrier or regional variants of the MT500 may use different default transport settings; confirm the device configuration before deployment.
- Remote configuration capabilities depend on both device firmware and manufacturer server compatibility.
- Pointing the device to the correct Plaspy endpoint and port is a required first step for integration.
- Validate compatibility with official manufacturer documentation and test a small number of devices before large scale rollouts.

## Why Protocol Understanding Matters

A practical understanding of the MT500 communication protocol helps administrators and technicians ensure reliable data flow into Plaspy, speed troubleshooting, and maintain consistent case and alerting behavior across supervised populations.

- Confirms correct network and APN settings so devices can reach the Plaspy endpoint.
- Helps isolate whether an issue is network, transport, or device configuration related.
- Guides firmware update planning by clarifying which features are tied to protocol behavior.
- Enables predictable geofence and tamper alerting by ensuring event messages are received and interpreted.
- Supports acceptance testing and validation when deploying devices for supervision programs.

## Why Use Plaspy with This Protocol

Using the MT500 with Plaspy centralizes location, tamper, and compliance telemetry into a single operational platform. Plaspy transforms incoming MT500 reports into real time tracking, automated alerts, and historical case records so supervision teams can enforce boundaries, respond to tamper events, and maintain audit trails without managing multiple point solutions.

To learn more about how Plaspy works with devices like the MT500 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol documentation and firmware notes with the manufacturer at https://www.megastek.com/.
