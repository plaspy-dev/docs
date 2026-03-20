---
slug: /neomatica/adm700/protocol
id: adm700-protocol
sidebar_label: Protocol
title: Neomatica - ADM700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Neomatica ADM700 and how the device communicates with Plaspy for reliable fleet tracking
keywords:
  - Neomatica ADM700 protocol
  - ADM700 GPS tracker
  - ADM700 Plaspy compatibility
  - Neomatica GPS protocol
  - ADM700 telemetry
  - vehicle tracking protocol
  - ADM700 CAN bus integration
  - ADM700 GPRS communication
  - Plaspy device compatibility
  - fleet tracking ADM700
---

# Neomatica - ADM700 Protocol

This page provides a public protocol context for using the Neomatica ADM700 with Plaspy. It describes how the tracker communicates with Plaspy in general terms, what kinds of telemetry and vehicle interfaces are carried to the platform, and which shared connection settings are used for Plaspy integrations. The information here focuses on public, non sensitive facts to help with setup, troubleshooting, and verification.

The ADM700 is a vehicle mounted GPS GLONASS terminal that reports position, speed, direction and a wide range of vehicle telemetry over GSM GPRS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is received. Exact protocol behavior can vary by firmware, hardware revision and manufacturer implementation, so confirm device specific details with official Neomatica documentation when needed.

## Protocol Overview

At a high level the ADM700 reporting protocol defines how the unit packages and forwards GNSS fixes, telemetry from CAN and other interfaces, and event logs over cellular transport to a backend endpoint. For Plaspy the protocol is the means by which the device identifies itself, signals status, and delivers usable location and sensor data for mapping, alerts and reporting.

- Carries location fixes and movement data to Plaspy so vehicles can be visualized in real time.
- Transmits vehicle telemetry such as CAN bus engine and fuel messages, analog sensor readings, and discrete input states.
- Sends event logs and buffered records after offline periods so Plaspy can reconstruct route history and missed events.
- Allows remote configuration and device management commands to be applied via supported transports when available.
- Provides identification and status fields that Plaspy uses to associate packets with specific devices and fleets.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device traffic on a shared endpoint and port and applies automatic protocol detection to associate messages with the correct device type. In most deployments you do not need to choose a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP for device reporting is 54.85.159.138 and the standard port is 8888.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- The ADM700 should be configured to point at the Plaspy endpoint for automatic ingestion.
- When reporting is correct, Plaspy links incoming telemetry to the appropriate device profile and fleet.

## Transport and Connection Context

ADM700 units forward data over GSM GPRS and may be configured to use different transport protocols depending on firmware and deployment preferences. Plaspy supports both common cellular transports and expects devices targeting Plaspy to use the shared endpoint and port.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to d.plaspy.com or directly to the IP address 54.85.159.138 for reporting.
- Plaspy receives telemetry on port 8888 for all supported devices to simplify setup.
- Use the transport mode supported by the unit and the SIM network operator for reliable delivery.
- Ensure APN and SIM settings on the ADM700 are valid so the unit can establish GPRS connectivity.

## Protocol Compatibility Notes

- Firmware revisions can change behavior including supported message fields, transport modes and optional features.
- Hardware revisions and optional modules may affect which telemetry channels are available from CAN, analog inputs or pulse sensors.
- Manufacturer side configuration options or regional firmware variants can alter default reporting server settings or available commands.
- Transport selection between UDP and TCP may affect delivery guarantees and should match the device configuration chosen for your deployment.
- Validate compatibility and recommended parameter sets against Neomatica documentation when deploying at scale.
- Plaspy will typically accept ADM700 reports when the device is configured to report to the Plaspy endpoint and uses standard telemetry fields.

## Why Protocol Understanding Matters

Understanding how the ADM700 communicates with Plaspy helps ensure successful setup, reliable reporting and faster troubleshooting when events occur. A practical grasp of protocol scope and transport options reduces integration time and improves operational confidence.

- Confirms that device reporting is pointed at the correct Plaspy endpoint and port so data reaches the platform.
- Helps interpret which telemetry fields are available for mapping to Plaspy dashboards and alerts.
- Speeds diagnosis of connectivity issues by checking transport mode, APN and cellular link status on the unit.
- Guides firmware and configuration choices that affect logging, buffering and post offline upload behavior.
- Supports planning for long term maintenance when hardware or firmware changes alter telemetry availability.

## Why Use Plaspy with This Protocol

Using the ADM700 with Plaspy provides a practical solution for organizations that need continuous vehicle visibility, rich telemetry from CAN and sensor inputs, and resilient offline logging for demanding fleets. The combination of ADM700 hardware and Plaspy backend enables live tracking, event driven alerts and comprehensive route playback for operational oversight and security workflows.

If you want to learn more about how Plaspy handles device integrations and fleet management, visit https://www.plaspy.com. For the most current protocol details, firmware notes and device specific behavior, please verify information with Neomatica at https://neomatica.com/ as manufacturer support and firmware can change over time.
