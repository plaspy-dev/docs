---
slug: /suntech/st8310um/protocol
id: st8310um-protocol
sidebar_label: Protocol
title: Suntech - ST8310UM Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Suntech ST8310UM and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Suntech ST8310UM protocol
  - Suntech ST8310UM GPS protocol
  - Suntech protocol Plaspy
  - ST8310UM tracking protocol
  - ST8310UM communication
  - GPS tracker Plaspy compatibility
  - vehicle tracking ST8310UM
  - asset tracker ST8310UM
  - LTE Cat1 tracker Plaspy
  - ST8310UM integration
---

# Suntech - ST8310UM Protocol

This page describes the public protocol context for using the Suntech ST8310UM with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in broad, non sensitive terms and explains the connection settings and compatibility considerations relevant to deployment and troubleshooting.

The ST8310UM is an ultra compact LTE Cat 1 tracker with 2G fallback, robust GNSS positioning and IP67 protection designed for vehicle and asset tracking. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision and manufacturer implementation. Always confirm device specific behavior against manufacturer documentation when needed.

## Protocol Overview

The ST8310UM reporting protocol governs how the device sends GNSS fixes, telemetry and event notifications to a remote platform. In general terms the protocol ensures the tracker can identify itself, transmit location and status data, and trigger event driven messages that Plaspy ingests for mapping, alerts and reporting.

- Provides device identification and regular position updates so Plaspy can associate reports with the correct asset.
- Transmits telemetry such as battery and power state, accelerometer events, and configured alarms for actionable platform rules.
- Supports event driven reporting for tamper, ignition change, geofence transitions and harsh driving detection to enable immediate alerts.
- Enables configurable reporting intervals and sleep behavior so devices balance update frequency with power consumption.
- Maps sensor and status fields into Plaspy dashboards and reports so historical and real time workflows remain useful for operators.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and port and automatically determines the device protocol from incoming messages. When the ST8310UM is configured to report to the Plaspy endpoint, users generally do not need to manually select a protocol in the platform for typical deployments.

- Plaspy server domain for device connections is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy listens on port 8888 and uses the same port for all supported devices.
- The device may be configured to use UDP or TCP on port 8888 depending on the tracker configuration.
- If the device is correctly pointed to d.plaspy.com or 54.85.159.138 and uses the shared port, Plaspy will automatically detect the protocol and ingest data.

## Transport and Connection Context

Connection settings influence how the ST8310UM communicates over the cellular network and reachability to the Plaspy platform. Transport selection is often configurable on the device and should match the expected network behavior and reliability needs of the deployment.

- The ST8310UM can transmit via TCP or UDP depending on firmware and configuration choices.
- Plaspy accepts device connections to d.plaspy.com and to 54.85.159.138 on port 8888.
- Port 8888 is the single port Plaspy uses for all devices, simplifying server address and port configuration.
- UDP may be preferred for low overhead reporting while TCP offers delivery assurances depending on device implementation.
- Confirm the device APN and outbound connectivity settings so that messages can reach d.plaspy.com successfully.

## Protocol Compatibility Notes

- Firmware versions can change message fields, available events and transport behavior; check the installed firmware for exact behavior.
- Hardware revisions sometimes add or remove sensors or IO options that affect what telemetry is reported.
- Manufacturer configuration tools or SMS commands may control transport selection and reporting intervals that alter how data arrives at Plaspy.
- Using the wrong transport for a device firmware variant can affect delivery reliability or event handling.
- Always validate important fields such as device identifier formats and event naming against current device documentation.
- For specialized integrations involving external sensors or immobilizers, verify support and mapping with the device technical manual.

## Why Protocol Understanding Matters

Knowing how the ST8310UM communicates helps ensure reliable setup, predictable alerts and long term operational stability when integrated with Plaspy. A clear view of protocol behavior reduces time spent troubleshooting connectivity and data mapping issues.

- Helps confirm the device is pointed to the correct Plaspy endpoint so data arrives as expected.
- Makes it easier to troubleshoot missing telemetry such as ignition, battery or accelerometer events.
- Informs decisions about transport selection and reporting intervals to balance timeliness and power consumption.
- Assists in correlating device events with platform alerts for faster incident response and recovery.
- Supports maintenance planning by identifying firmware features or limitations that affect reporting.

## Why Use Plaspy with This Protocol

The ST8310UM paired with Plaspy provides dependable location and event telemetry for fleets and assets deployed in exposed or harsh environments. Plaspy ingests the tracker updates and presents them in dashboards, geofence alerts and historical reports that help teams monitor assets, respond to incidents and automate operational workflows.

If you want to learn more about how Plaspy works with devices like the ST8310UM and explore platform capabilities, visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time and you should verify the latest device specific information on the manufacturer site http://www.suntechint.com/
