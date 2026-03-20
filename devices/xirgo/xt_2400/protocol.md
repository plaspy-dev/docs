---
slug: /xirgo/xt_2400/protocol
id: xt_2400-protocol
sidebar_label: Protocol
title: Xirgo - XT-2400 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview and Plaspy compatibility for the Xirgo XT 2400 GPS tracker
keywords:
  - Xirgo XT-2400
  - XT-2400 protocol
  - XT 2400 GPS tracker
  - Xirgo protocol
  - Xirgo GPS protocol
  - XT-2400 Plaspy compatibility
  - vehicle tracking protocol
  - OBDII tracker protocol
  - fleet management tracker
  - tracker communication protocol
---

# Xirgo - XT-2400 Protocol

This page provides a public, non sensitive overview of the communication context for using the Xirgo XT-2400 with Plaspy. It focuses on how the tracker reports vehicle and location data to the Plaspy platform and what to consider when configuring devices to send telemetry and diagnostics for fleet and vehicle monitoring.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context and practical compatibility notes rather than implementation level details.

## Protocol Overview

The communication protocol on the XT-2400 defines how the device transmits position, OBDII parameters, vehicle state, and sensor data to a remote server. At a high level the protocol enables identification, periodic or event driven reporting, and delivery of usable fields such as speed, VIN, ignition status, location, accelerometer events, and diagnostic fault codes.

- Allows the XT-2400 to identify itself and associate reports with a vehicle or device record.
- Carries GPS location and time to Plaspy so positions can be mapped and analyzed.
- Conveys OBDII derived fields such as VIN, ignition state, fault codes, and vehicle parameters.
- Transmits accelerometer and movement events for driving behavior and incident detection.
- Supports configurable reporting intervals and event triggers driven by the device scriptable features.
- Enables Plaspy to receive the telemetry required for tracking, alerts, and diagnostics without requiring device level changes in the platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and examines incoming reports to identify the device protocol. In most cases a device that is configured to report to Plaspy will be recognized automatically and no manual protocol selection is needed in the platform.

- Plaspy uses a single shared port for all supported devices and automatically detects the tracker protocol.
- When the XT-2400 is configured to point to the Plaspy endpoint, the platform will identify the reporting format and map the incoming fields.
- Users typically do not need to select a specific protocol inside Plaspy if the device is correctly configured to report to the Plaspy address.
- Proper device identification allows Plaspy to route VIN, DTCs, speed, location, and accelerometer events into the correct account and dashboards.
- If automatic detection does not occur, check device server settings and ensure the tracker points to the Plaspy endpoint and correct transport type.

## Transport and Connection Context

The XT-2400 supports cellular data connectivity and can be configured to deliver reports over common transport protocols. Plaspy exposes a clear shared endpoint and port that devices can use to reach the platform.

- Devices may be configured to report to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The XT-2400 may use either UDP or TCP for reporting depending on device settings and firmware capabilities.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for reporting.
- Choose UDP or TCP on the device according to network reliability and the firmware documentation provided by the manufacturer.
- Confirm APN and cellular connectivity independently before troubleshooting higher level protocol behavior.

## Protocol Compatibility Notes

- Firmware revisions can change available fields, default reporting behavior, and supported transport modes; always confirm the installed firmware level.
- Hardware revisions and configuration scripts on the XT-2400 can enable or disable OBDII and sensor reporting features.
- Manufacturer side settings and provisioning may alter how identifiers such as VIN or device serial are presented in reports.
- Transport selection between UDP and TCP affects delivery semantics and should match the device configuration to the Plaspy listening port.
- Plaspy automatic detection eases integration but validating that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 is a common troubleshooting step.
- For application specific fields or custom scripting on the XT-2400, consult the official Xirgo documentation to confirm available reports.

## Why Protocol Understanding Matters

A practical understanding of the XT-2400 communication protocol helps ensure reliable data flow into Plaspy, speeds up troubleshooting, and sets expectations for what telemetry is available from the device.

- Reduces integration time by clarifying which device fields map to Plaspy data points like location, speed, VIN, and DTCs.
- Helps diagnose connectivity issues by checking transport, endpoint, and APN configuration before inspecting higher level protocol behavior.
- Guides firmware and configuration decisions when enabling or disabling OBDII reports, accelerometer events, or scriptable functions.
- Improves operational reliability by aligning device reporting intervals and event triggers with fleet monitoring needs.
- Supports informed decisions when rolling out firmware updates or hardware revisions across a vehicle fleet.

## Why Use Plaspy with This Protocol

Using the Xirgo XT-2400 with Plaspy brings OBDII level vehicle context together with GPS position and sensor events to support fleet tracking, driver behavior analysis, and vehicle diagnostics. The XT-2400’s built in GPS, accelerometer, and OBDII interface make it well suited for light duty and passenger vehicle use cases where both location and vehicle health data matter.

If you want to learn more about how Plaspy handles device connectivity and protocols, visit https://www.plaspy.com. For the most current technical details about the XT-2400 protocol behavior, firmware, and device specific implementation check the official Xirgo documentation at https://xirgo.com/ as manufacturer support and firmware behavior can change over time.
