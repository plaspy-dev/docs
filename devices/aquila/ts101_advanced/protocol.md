---
slug: /aquila/ts101_advanced/protocol
id: ts101_advanced-protocol
sidebar_label: Protocol
title: Aquila - TS101 Advanced Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Aquila TS101 Advanced tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Aquila TS101 Advanced protocol
  - Aquila TS101 Advanced GPS protocol
  - Aquila TS101 Advanced tracking protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - vehicle tracking Aquila
  - fleet management Plaspy
  - TS101 Advanced communication
  - TS101 Advanced compatibility
  - Aquila asset tracking protocol
---

# Aquila - TS101 Advanced Protocol

This page describes the public protocol context for using the Aquila TS101 Advanced tracker with the Plaspy platform. It focuses on high level communication behavior that affects integration, configuration, and operation with Plaspy rather than exposing private implementation details. The TS101 Advanced is a compact rugged tracker designed for vehicle and asset tracking, offering real time location reporting, solid state storage for historical records, I O interfaces for immobilizer and fuel sensors, and motion sensing via a 3 axis accelerometer.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and supported features can vary by device firmware, hardware revision, and manufacturer implementation, so successful integration combines correct device configuration with Plaspy s shared endpoint settings and standard transport options.

## Protocol Overview

The communication protocol for the TS101 Advanced governs how the device identifies itself to a server, delivers telemetry, and reports events so Plaspy can present location and status information to users. The protocol enables the device to transmit data needed for real time tracking and to deliver stored records after connectivity is restored.

- Provides identity and session information so Plaspy can associate incoming data with the correct device
- Transports GPS position, timestamp, and basic telemetry such as power and sensor states
- Carries event reports for inputs like immobilizer actions, accelerometer alerts, and fuel sensor readings
- Enables transmission of stored records from the device s internal storage to recover historical data
- Supports reliable delivery over common transports so Plaspy can ingest data for fleet monitoring and notifications

## How Plaspy Detects the Protocol

Plaspy accepts data from many tracker models at a single shared endpoint and detects the protocol automatically when a device connects and reports. This automatic detection means most users do not need to manually select a protocol inside Plaspy as long as the device is configured to send to the Plaspy endpoint.

- Plaspy listens on a shared endpoint reachable as d.plaspy.com and directly at 54.85.159.138
- All devices supported by Plaspy use the same listening port 8888
- The device may be configured to use UDP or TCP depending on its settings and firmware
- When the tracker reports to the Plaspy endpoint, the platform associates incoming data with the matching device
- Manual protocol selection inside Plaspy is typically unnecessary if the device is correctly pointed to the Plaspy server

## Transport and Connection Context

Understanding transport and connection context helps ensure the TS101 Advanced successfully sends reports to Plaspy. The TS101 Advanced can be configured to report over standard network transports; which transport is available depends on the device firmware and configuration options.

- Devices may be configured to use UDP or TCP on port 8888
- Trackers can point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138
- Plaspy uses port 8888 for all supported devices so a single outbound setting works for multiple tracker models
- Choose UDP or TCP according to device capability and network reliability requirements
- Confirm device APN and outbound host settings match the Plaspy endpoint to allow successful reporting

## Protocol Compatibility Notes

- Protocol feature sets can vary by firmware version; newer firmware may add or change fields and event reporting
- Hardware revisions and optional connectors or sensors can affect which telemetry and I O features are present
- Manufacturer default settings may point to a different host or port so confirm device configuration before deployment
- Transport selection between UDP and TCP may affect delivery characteristics and should be chosen to match network conditions
- Plaspy s automatic detection reduces configuration effort but you should validate that device reports are visible on Plaspy after initial setup
- For advanced functions such as remote control or custom sensor handling, verify the device supports the required commands in current firmware

## Why Protocol Understanding Matters

A clear, practical understanding of the tracker s communication protocol helps ensure reliable setup, accurate data ingestion, and smoother troubleshooting when using Plaspy. Knowing the communication expectations reduces integration time and improves operational reliability.

- Ensures correct device configuration so reports reach the Plaspy endpoint without interruption
- Helps diagnose connectivity issues by confirming transport and host settings
- Supports planning for required telemetry such as immobilizer events or fuel sensor readings
- Reduces time to recover historical data by understanding how stored records are transmitted
- Improves long term reliability by matching device firmware behavior to Plaspy s ingest capabilities

## Why Use Plaspy with This Protocol

Using the Aquila TS101 Advanced with Plaspy gives organizations a straightforward path to fleet and asset visibility. Plaspy s multi device endpoint model and automatic protocol detection simplify onboarding while providing the reporting, historical data recovery, and event handling needed for logistics, taxi operations, rental fleets, security tracking, and similar use cases.

To learn more about Plaspy and how it works with devices like the TS101 Advanced visit https://www.plaspy.com. For the most current firmware specific protocol details and device documentation verify the manufacturer resources at https://www.itriangle.in/ since protocol support and firmware behavior can change over time.
