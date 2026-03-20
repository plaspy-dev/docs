---
slug: /condor/cb_714/protocol
id: cb_714-protocol
sidebar_label: Protocol
title: Condor - CB-714 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Condor CB-714 bicycle tracker and how it communicates with Plaspy for route, distance, and trip metrics
keywords:
  - Condor CB-714 protocol
  - Condor CB-714 GPS protocol
  - CB-714 Plaspy compatibility
  - CB-714 communication protocol
  - Condor bicycle tracker protocol
  - GPS tracker protocol Plaspy
  - bicycle fleet tracking
  - bike tracker compatibility
  - Condor CB-714 tracking protocol
  - Plaspy device protocol
---

# Condor - CB-714 Protocol

This page describes the public protocol context for using the Condor CB-714 with the Plaspy platform. It explains how the tracker communicates in general terms, what connection settings are used by Plaspy, and the role of the device reporting behavior in delivering route, distance, and trip duration data into your Plaspy dashboard.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on safe and practical protocol context rather than device firmware internals.

## Protocol Overview

The CB-714 communicates telemetry that allows Plaspy to map routes and record trip metrics for bicycles. The communication protocol defines how the device identifies itself to the server, how position and trip data are transmitted, and how those messages are interpreted by Plaspy to produce usable route and trip records.

- Enables the CB-714 to transmit GPS location, timestamp, and basic telemetry to Plaspy for route visualization.
- Provides a way for the device to identify itself so Plaspy can associate incoming data with the correct tracker and account.
- Carries trip metrics such as distance and duration so Plaspy can build ride summaries and historical logs.
- Supports reporting modes that can be used for near real time monitoring or for periodic trip uploads depending on device settings.
- Serves as the layer that allows Plaspy to ingest telemetry into its mapping, reporting, and alerting features.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and automatically determines the correct protocol for supported devices. When the CB-714 is configured to send data to Plaspy, the platform will associate incoming messages with an appropriate handler so manual protocol selection is not typically required inside Plaspy.

- Plaspy listens on a single, shared server endpoint to receive tracker reports and automatically detects the tracker protocol.
- Users normally configure the device to point to the Plaspy endpoint and do not need to choose a protocol inside Plaspy manually.
- Proper device identification (IMEI or device ID) in the device uplink helps Plaspy match data to the correct tracker record.
- If a device is not appearing correctly, reviewing device-side reporting settings and manufacturer documentation is the recommended first step.
- Plaspy’s automatic detection reduces setup steps for fleet operators and simplifies onboarding of compatible trackers.

## Transport and Connection Context

Connection transport and host settings determine how the CB-714 sends telemetry to Plaspy. The CB-714 may be configured to use either UDP or TCP on the same port that Plaspy uses for all devices, and it can target the Plaspy server by domain or by IP as required.

- Devices may be configured to send data via UDP or TCP on port 8888 depending on device support and operator preference.
- Plaspy’s server endpoint for tracker reporting is available at d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port for incoming tracker connections, simplifying device-side configuration.
- Choosing UDP or TCP can depend on the device firmware and network conditions; verify the device supports your chosen transport.
- Ensure the device is pointed at the Plaspy server address and port so Plaspy can receive and automatically detect its protocol.

## Protocol Compatibility Notes

- Firmware revisions can change how a tracker formats or times messages; always confirm the device firmware level when troubleshooting.
- Hardware revisions or regional variants of the CB-714 may use slightly different reporting options; check the specific unit documentation.
- Transport selection (UDP vs TCP) can affect delivery characteristics; choose the option that matches the device capability and network reliability.
- Manufacturer-side configuration commands or activation steps may be required to enable Plaspy-compatible reporting on some units.
- Validate compatibility and recommended settings against Condor documentation for the CB-714 before large scale deployment.
- If a device does not connect as expected, capturing basic network-level evidence of the device sending to d.plaspy.com or the server IP can help with support.

## Why Protocol Understanding Matters

Understanding how the CB-714 reports to Plaspy helps operators set up devices correctly, troubleshoot connectivity issues, and ensure reliable long term monitoring for bicycle fleets and rentals.

- Ensures devices are configured to point to the correct Plaspy endpoint and use the appropriate transport for the environment.
- Helps identify misconfigurations when a device is not appearing in Plaspy or when trip data is incomplete.
- Guides decisions on update timing, battery usage, and reporting frequency to balance accuracy and power consumption.
- Supports efficient onboarding of multiple devices for fleet or rental programs with consistent settings.
- Improves communication with manufacturer support by allowing precise questions about firmware, transport, and reporting behavior.

## Why Use Plaspy with This Protocol

Using the Condor CB-714 with Plaspy provides a compact, cyclist-focused telemetry solution that feeds route maps, distance totals, and trip durations into a single fleet management environment. For bike rental operators, event organizers, and fleet managers, the CB-714 delivers the cycling-specific metrics that matter while Plaspy consolidates those metrics into history, reports, and alerts.

To learn more about Plaspy and how it works with devices like the CB-714, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, please verify information on the Condor website at https://condorskyseeker.com/ as protocol support and firmware behavior can change over time.
