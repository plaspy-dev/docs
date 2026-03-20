---
slug: /aquila/obd_ii/protocol
id: obd_ii-protocol
sidebar_label: Protocol
title: Aquila - OBD II Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Aquila OBD II tracker with Plaspy for connectivity and data reporting
keywords:
  - Aquila OBD II
  - Aquila OBD II protocol
  - Aquila GPS tracker protocol
  - OBD II tracking protocol
  - vehicle diagnostic tracker
  - CAN K Line tracker
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - GPS fleet management
  - OBD II GPS communication
---

# Aquila - OBD II Protocol

This page describes the public protocol context for using the Aquila OBD II GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, which connection endpoints are used, and what aspects of the device reporting behavior are important when integrating the tracker into fleet and vehicle monitoring workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page is intended to explain the role of the tracking protocol and how it relates to Plaspy rather than document firmware specific frames or proprietary packet structures.

## Protocol Overview

The communication protocol for the Aquila OBD II tracker enables the device to transmit GPS location, vehicle diagnostic parameters, and sensor data to a remote server for processing. Through the OBD-II interface and optional CAN and K-Line support, the tracker can report both standard vehicle signals and some manufacturer specific parameters alongside location and motion data.

- Allows the tracker to transmit GPS fixes and vehicle diagnostic data to a backend while preserving timing and context.
- Carries OBD II sourced parameters such as engine metrics and battery voltage alongside motion events from the 3 axis accelerometer.
- Provides a mechanism for the device to identify itself and its capabilities so the server can parse and present meaningful telemetry.
- Supports over the air configuration and optimizations that reduce GPRS usage while keeping real time visibility.
- Enables event reporting for motion, ignition, power loss, and diagnostic alerts that support fleet monitoring workflows.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and uses automatic detection to determine the tracker protocol when a device connects and begins reporting. This reduces the need for manual protocol selection inside Plaspy when the device is configured to send to the Plaspy endpoint.

- Devices should be configured to report to d.plaspy.com or the Plaspy server IP to reach the platform.
- Plaspy listens on the same port for all supported devices, simplifying device setup.
- Users generally do not need to pick a protocol in Plaspy if the tracker is correctly pointed at the Plaspy endpoint and using the supported transport.
- Automatic detection handles common protocol variations and helps map incoming telemetry to Plaspy data models.
- If a device uses an uncommon firmware variant, verify that it is configured to send standard identification fields so Plaspy can recognize the feed.

## Transport and Connection Context

Connection and transport choices affect how the Aquila OBD II tracker delivers data to Plaspy. The tracker may use either UDP or TCP transport depending on device support and configuration, and it can be pointed to a DNS name or an IP address to reach the Plaspy ingest endpoint.

- The device may be configured to use UDP or TCP on port 8888 depending on device firmware and settings.
- Devices commonly point to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 for data reporting.
- Plaspy uses port 8888 as the shared port for all devices, which simplifies device-side configuration.
- Transport selection influences reliability and retransmission behavior but does not change the logical telemetry elements the tracker reports.
- Confirm the tracker is configured to send to the Plaspy endpoint to ensure automatic protocol detection and correct data ingestion.

## Protocol Compatibility Notes

- Firmware revisions can introduce differences in which OBD parameters are reported and how events are encoded; always check the device firmware release notes.
- Hardware revisions or optional modules such as Bluetooth may alter available telemetry or reporting modes.
- Manufacturer specific OBD parameters accessed via CAN or K-Line can vary by vehicle make and model and may require mapping after ingestion.
- Selecting UDP versus TCP on the device affects delivery guarantees but Plaspy supports both transports on the common port.
- Over the air configuration settings on the device may change how frequently data is sent and which parameters are included.
- Validate compatibility by comparing manufacturer documentation with the deployment requirements and test live reports to confirm field names and values.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol reduces integration friction and helps maintain reliable reporting over time. Knowing what the device can send and how it connects to Plaspy allows teams to tune reporting, troubleshoot issues, and ensure the telemetry matches operational needs.

- Simplifies initial setup by ensuring devices point to the correct Plaspy endpoint and use the supported transport.
- Helps diagnose dropped or malformed reports by checking device firmware and transport settings.
- Enables informed decisions about reporting intervals and parameter selection to balance data needs and GPRS usage.
- Supports accurate mapping of vehicle parameters to dashboards and alerting rules in Plaspy.
- Improves long term reliability by anticipating how firmware updates or vehicle changes may affect reported data.

## Why Use Plaspy with This Protocol

Using the Aquila OBD II tracker with Plaspy provides a practical path to combine vehicle location, OBD diagnostics, and motion sensing into a single operational view. Plaspy’s shared endpoint approach and automatic protocol detection reduce configuration overhead, while support for standard transports lets you choose the connection behavior that best fits your network and reliability requirements.

To learn more about how Plaspy can receive and process telemetry from Aquila OBD II devices, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer implementation guidance, verify information with Aquila’s manufacturer at https://www.itriangle.in/.
