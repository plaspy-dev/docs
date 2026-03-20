---
slug: /topfly/tld2_d/protocol
id: tld2_d-protocol
sidebar_label: Protocol
title: TopFly - TLD2-D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TopFly TLD2 D GPS tracker showing how it communicates with Plaspy and common connection settings
keywords:
  - TopFly TLD2-D
  - TLD2-D protocol
  - TopFly GPS protocol
  - TLD2-D Plaspy
  - TopFly OBDII tracker
  - vehicle tracking protocol
  - fleet tracking TopFly
  - GPS tracker protocol Plaspy
  - OBDII telemetry TLD2-D
  - Bluetooth sensor GPS tracker
---

# TopFly - TLD2-D Protocol

This page provides a public protocol overview for the TopFly TLD2-D GPS tracker and explains how the device communicates with the Plaspy platform. It focuses on high level, non sensitive protocol context that helps fleet administrators, integrators, and technical users understand the connection and reporting behavior when using this OBDII plug and play tracker with Plaspy.

The TLD2-D is Plaspy compatible out of the box and supports multiple transports for telemetry and sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact device behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page explains the connection context and practical steps to align device reporting with Plaspy without exposing proprietary protocol internals.

## Protocol Overview

At a high level, the TLD2-D communication protocol defines how the tracker identifies itself, reports GNSS positions, delivers CAN BUS telemetry and BLE sensor data, and signals events to a remote server. The protocol enables Plaspy to ingest location, vehicle diagnostics and sensor inputs so those data streams can be used for mapping, alerts and historical analysis.

- Enables GNSS position reports and timestamped location updates for live tracking and history
- Carries OBDII and CAN BUS telemetry such as VIN, odometer, fuel level, RPM and DTC for fleet diagnostics
- Transports BLE sensor readings and device events alongside location to enrich monitoring workflows
- Indicates device state and events like ignition changes, harsh driving events, and backup battery alerts
- Provides the necessary identifier and telemetry fields so Plaspy can correlate device data with vehicles and fleet assets

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a shared inbound endpoint and port and is designed to automatically detect the reporting protocol used by compatible trackers. When a TLD2-D is configured to report to Plaspy, manual protocol selection inside Plaspy is typically unnecessary.

- Plaspy receives device data at the domain d.plaspy.com and the public server IP 54.85.159.138
- All devices in Plaspy use the same port number 8888 for inbound tracker traffic
- The TLD2-D may be configured to use either UDP or TCP on port 8888 depending on device settings and network conditions
- Plaspy automatically detects the tracker protocol once the device begins reporting to the shared endpoint
- If a device is correctly pointed to the Plaspy endpoint, users generally do not need to choose a protocol manually inside Plaspy

## Transport and Connection Context

Connection choice and transport affect reliability, latency, and how the device establishes sessions with Plaspy. The TLD2-D supports several transport modes and can be configured to target Plaspy using the domain name or the public server IP.

- The TLD2-D can report to Plaspy using TCP or UDP on port 8888 depending on device configuration
- Devices may be configured to send telemetry to d.plaspy.com or directly to 54.85.159.138
- Plaspy uses the single inbound port 8888 for all supported trackers to simplify device configuration
- Transport selection can be influenced by network behavior, operator recommendations, and firmware default settings
- MQTT and SMS are also supported by the device family for alternate telemetry paths when applicable, while Plaspy ingests the primary TCP or UDP reports

## Protocol Compatibility Notes

- Confirm the device is running firmware that exposes the telemetry fields you require, as firmware releases can expand or change reported values
- Hardware revisions and regional variants may differ in supported bands, transports, or sensor capabilities
- Transport selection (TCP versus UDP) can affect delivery guarantees and should match your fleet policy and network environment
- BLE sensor behavior and supported accessory models may vary by firmware and should be validated during deployment
- While the TLD2-D is compatible with Plaspy out of the box, verify any optional transports you plan to use are enabled in device settings
- Refer to manufacturer documentation for device specific configuration examples and firmware notes before mass deployment

## Why Protocol Understanding Matters

Understanding the communication protocol and transport choices helps teams set up devices correctly, troubleshoot connectivity, and maintain long term operational reliability with Plaspy. Clear knowledge of what the device reports and how it connects reduces integration friction and supports predictable behavior in production fleets.

- Ensures device reporting is pointed to d.plaspy.com or the Plaspy server IP and uses port 8888 as required
- Helps diagnose connectivity issues related to TCP versus UDP or cellular fallback behavior
- Makes it easier to validate that CAN BUS and BLE telemetry are being received and interpreted by Plaspy
- Supports planning for firmware updates and compatibility checks across a fleet of mixed revisions
- Aids in creating monitoring and alerting rules in Plaspy that rely on consistent event and telemetry fields

## Why Use Plaspy with This Protocol

Using the TopFly TLD2-D with Plaspy provides a rapid, low friction path to operational telematics. The plug and play OBDII form factor, combined with rich vehicle diagnostics and sensor integration, gives operations teams immediate visibility into location, vehicle health, and environmental conditions without complex installations. Plaspy ingests the device telemetry and presents it in maps, alerts, and reports that are useful for fleet management, anti-theft response, and driver safety programs.

To learn more about how Plaspy works with compatible devices and to review platform features, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.topflytech.com/ before large scale deployment.
