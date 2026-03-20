---
slug: /eelink/got10/protocol
id: got10-protocol
sidebar_label: Protocol
title: EElink - GOT10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the EElink GOT10 OBD tracker and how it communicates with Plaspy for tracking and diagnostics
keywords:
  - EElink GOT10 protocol
  - EElink GOT10 GPS protocol
  - GOT10 OBD tracker protocol
  - GOT10 Plaspy compatibility
  - EElink OBD II tracking
  - GOT10 CAN BUS telemetry
  - fleet GPS protocol EElink
  - Plaspy GPS tracker compatibility
  - vehicle diagnostics tracker protocol
  - EElink tracking protocol
---

# EElink - GOT10 Protocol

This page describes the public protocol context for using the EElink GOT10 with Plaspy. It focuses on the communication and connection details that matter when sending location and CAN BUS diagnostic telemetry from the GOT10 into Plaspy, without exposing private implementation internals. The content is intended to help technical integrators, fleet managers, and installers understand how the tracker interacts with Plaspy for reliable data delivery.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by device firmware, hardware revision, and manufacturer implementation. The GOT10 is an OBD plug‑in device that reads CAN BUS and OBD data and forwards telemetry to Plaspy so vehicle location and diagnostics can be combined in a single fleet view.

## Protocol Overview

The protocol used by the GOT10 governs how the device packages and forwards OBD and GNSS-derived data to a remote server so that platforms like Plaspy can consume it. On a high level the protocol ensures that the tracker can identify itself, report telemetry and diagnostic states, and allow the server to process those messages into location, status, and alert records.

- Enables transmission of location and CAN BUS derived telemetry from the GOT10 to a backend server for processing.
- Carries device identity and session context so Plaspy can associate reports with the correct vehicle and account.
- Conveys diagnostic information such as fault codes and operational metrics that Plaspy can surface as alerts or reports.
- Supports both periodic position updates and event driven messages for incidents like fault detection or ignition changes.
- Acts as the bridge between the OBD interface on the vehicle and the Plaspy data ingestion pipeline so fleet managers see unified tracking and diagnostics.

## How Plaspy Detects the Protocol

Plaspy accepts messages from supported devices at a single shared endpoint and identifies the device protocol automatically. When a GOT10 is correctly configured to report to the Plaspy endpoint, users generally do not need to manually select a protocol inside Plaspy for the device to begin reporting.

- Plaspy listens on a common server address d.plaspy.com and on the public IP 54.85.159.138 for incoming device connections.
- All devices in Plaspy use the same port 8888 which simplifies device configuration across mixed fleets.
- Plaspy automatically detects the tracker protocol once the device begins reporting to the Plaspy endpoint and port.
- Proper configuration of the GOT10 to point to the Plaspy endpoint typically means no manual protocol selection is required in the Plaspy interface.
- If a device is not appearing, basic checks include verifying the device endpoint, transport type, and that the device is powered and able to communicate.

## Transport and Connection Context

The GOT10 may be configured to use either UDP or TCP depending on device firmware and installer preference; Plaspy accepts both transports on the same configured port. Understanding the transport choice and endpoint settings is critical to ensure messages reach Plaspy reliably from the vehicle.

- Devices may be pointed to the domain d.plaspy.com or the IP 54.85.159.138 as the Plaspy ingestion endpoint.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions.
- All devices supported by Plaspy use the same port 8888 which simplifies provisioning and firewall rules for fleets.
- Choice of UDP versus TCP can affect delivery behavior under poor cellular conditions; select the transport that best matches the device firmware recommendation.
- Network settings on mobile carriers, vehicle modems, or local firewalls must allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware versions can change message fields, frequency, and available diagnostic items; always check the device firmware level when diagnosing differences.
- Hardware revisions and vehicle CAN implementations can affect which OBD or CAN signals are available to the GOT10.
- Manufacturer side changes or regional firmware builds can introduce protocol variations that affect how telemetry is packaged.
- Transport selection (UDP vs TCP) may be constrained by device firmware or carrier network behavior; confirm which transport the GOT10 supports in your build.
- Validate device configuration so it reports to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy ingestion.
- For final verification of detailed behavior, consult the official EElink documentation or firmware release notes.

## Why Protocol Understanding Matters

Understanding how the GOT10 communicates with Plaspy helps ensure smooth deployment, faster troubleshooting, and long term reliability for fleet telemetry and diagnostics. Clear knowledge of the connection and reporting behavior reduces downtime and improves data quality for operational decisions.

- Faster root cause identification when a vehicle stops reporting or diagnostic fields appear missing.
- Improved provisioning by ensuring devices are configured to the correct endpoint and transport before installation.
- Better expectation setting for which CAN BUS signals and OBD data the GOT10 can expose in your vehicle fleet.
- More effective coordination with carriers and network administrators to allow connections to d.plaspy.com and 54.85.159.138 on port 8888.
- Simplified fleet scale up because Plaspy uses a single port and automatic protocol detection across supported devices.

## Why Use Plaspy with This Protocol

Using the GOT10 with Plaspy combines plug and play OBD diagnostics with enterprise tracking, giving fleet teams unified visibility into location and vehicle health. That combined feed helps reduce maintenance costs, speed incident response, and provide richer reporting for route optimization and safety programs.

If you would like to learn more about Plaspy and how it works with OBD devices like the GOT10, visit https://www.plaspy.com. For the latest device specific protocol and firmware details please verify information on the manufacturer site https://www.eelink.com.cn/ as firmware behavior and protocol implementations can change over time.
