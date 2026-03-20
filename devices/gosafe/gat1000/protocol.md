---
slug: /gosafe/gat1000/protocol
id: gat1000-protocol
sidebar_label: Protocol
title: Gosafe - GAT1000 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Gosafe GAT1000 tracker and how it communicates with Plaspy for real time tracking
keywords:
  - Gosafe GAT1000 protocol
  - Gosafe GAT1000 GPS protocol
  - GAT1000 Plaspy compatibility
  - Gosafe tracking protocol
  - GAT1000 communication protocol
  - Gosafe asset tracker protocol
  - GAT1000 GPS tracker
  - Plaspy device protocol
  - Gosafe fleet tracking
  - GAT1000 telemetry protocol
---

# Gosafe - GAT1000 Protocol

This page provides a public, non sensitive overview of the communication protocol context for the Gosafe GAT1000 when used with Plaspy. It explains how the device reports location and telemetry into Plaspy and what aspects of the tracker protocol are relevant for integration, monitoring, and troubleshooting. The focus is on observable connection behavior and practical setup guidance rather than low level or proprietary internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, carrier configuration, and manufacturer implementation, so this page emphasizes general protocol context and recommended validation steps rather than device specific binary formats.

## Protocol Overview

The GAT1000 reporting protocol is the mechanism that allows the device to identify itself to the Plaspy platform and send GNSS fixes, I/O events, sensor telemetry and status updates. In practice this means the tracker opens a network path to Plaspy and transmits structured location and telemetry messages that Plaspy ingests for mapping, rules, and reporting.

- Enables transmission of GNSS position fixes and timestamps to Plaspy for real time and historical tracking.
- Carries device telemetry such as ignition state, analog sensor readings, digital inputs, and battery status so Plaspy can generate alerts and reports.
- Supports event reporting for inputs and BLE sensor data to allow Plaspy to react to door, temperature, or alarm conditions.
- Provides the channel for remote configuration and control workflows when the manufacturer firmware exposes those capabilities to the platform.
- Abstracts transport details so Plaspy can process incoming messages consistently across devices and firmware variants.

## How Plaspy Detects the Protocol

Plaspy centralizes incoming device connections on a shared endpoint and port and applies automatic protocol detection to identify the tracker type and parse messages. For most deployments there is no need to manually select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

- Devices should point their server address to d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- All devices supported by Plaspy use the same port so the platform can listen consistently and detect protocol variants automatically.
- Plaspy will accept both UDP and TCP sessions from devices depending on how a particular tracker and its firmware are configured.
- Proper APN and SIM carrier settings on the device are required so the device can establish the data connection to Plaspy.
- If a device does not appear to connect, verify device reporting settings, carrier connectivity, and that the tracker is configured to use the Plaspy endpoint.

## Transport and Connection Context

The GAT1000 supports common cellular transport options and can be configured to send reports over either UDP or TCP to Plaspy, subject to device firmware and configuration. Understanding the transport context helps ensure reliable message delivery and correct routing to the Plaspy ingestion endpoint.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the numeric server address 54.85.159.138 for direct routing.
- Plaspy uses port 8888 for all supported devices so the same port is used across models for simplicity and reliability.
- Network elements such as carrier NAT, firewalls, and APN restrictions can influence whether UDP or TCP is the preferred transport.
- For devices that support SMS reporting as a fallback, confirm with the manufacturer how SMS is routed to the platform if required.

## Protocol Compatibility Notes

- Firmware differences can change message payloads, event behaviors, and available telemetry fields between device revisions.
- Hardware revisions or optional accessory modules may alter the set of available I/O and sensor data reported to Plaspy.
- Some manufacturers expose optional transport modes or server address formats that must be set correctly to reach the Plaspy endpoint.
- Carrier and SIM configurations including APN settings can affect whether a device can establish TCP or UDP sessions reliably.
- Validate the device configuration and firmware release notes against the manufacturer documentation when planning deployments.
- When in doubt, confirm device reporting behavior by monitoring the Plaspy server connection logs and device status indicators.

## Why Protocol Understanding Matters

A practical understanding of the GAT1000 communication protocol and its transport context reduces integration friction and speeds troubleshooting when devices do not appear in Plaspy. Knowing what the device is expected to report and how it reaches Plaspy makes it easier to isolate network, configuration, and firmware issues.

- Enables faster identification of configuration errors such as incorrect server address or transport selection.
- Helps determine whether connectivity problems stem from carrier, APN, or firewall restrictions versus device firmware behavior.
- Informs test plans for validating telemetry fields like fuel levels, ignition sense, and BLE sensor inputs.
- Supports lifecycle planning around firmware updates and hardware rollouts to maintain consistent reporting.
- Improves incident response by clarifying what events and telemetry the device should send under different conditions.

## Why Use Plaspy with This Protocol

Using the GAT1000 with Plaspy provides organizations a scalable way to ingest robust GNSS and telemetry data from rugged assets, trailers, and heavy equipment. Plaspy translates the incoming reports into location intelligence, configurable alerts, and fleet reporting that support operational visibility, anti theft workflows, and preventive maintenance.

For deployment planning and verification, point the GAT1000 at the Plaspy server address and ensure the device uses UDP or TCP on port 8888 to reach d.plaspy.com or 54.85.159.138. Plaspy automatically detects the tracker protocol and applies the correct parsing and data handling so teams can focus on rules, alerts, and analytics rather than low level connection details. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com and verify the latest device specific protocol and firmware behavior with the manufacturer at https://gosafesystem.com/. Protocol support and firmware implementation can change over time so checking official manufacturer documentation helps ensure accurate and current device integration.
