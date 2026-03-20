---
slug: /glonasssoft/umka310_with_cigarette_lighter/protocol
id: umka310_with_cigarette_lighter-protocol
sidebar_label: Protocol
title: GLONASSsoft - UMKa310 with cigarette lighter Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GLONASSsoft UMKa310 with cigarette lighter and how it communicates with Plaspy for fleet tracking
keywords:
  - GLONASSsoft UMKa310 protocol
  - UMKa310 Plaspy compatibility
  - UMKa310 GPS tracker communication
  - EGTS Wialon Combine support
  - UMKa310 telemetry protocol
  - UMKa310 vehicle tracking
  - UMKa310 fuel monitoring protocol
  - Plaspy device integration
  - Plaspy tracker protocol
  - UMKa310 tracking protocol
---

# GLONASSsoft - UMKa310 with cigarette lighter Protocol

This page describes the public protocol context for using the GLONASSsoft UMKa310 with cigarette lighter with Plaspy. It focuses on how the tracker transmits GNSS coordinates and telemetry to a cloud backend, and what aspects of the device protocol are relevant for successful integration with Plaspy without delving into proprietary or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page presents general guidance based on the UMKa310 feature set including EGTS and Wialon Combine support, batch transfer capability, Bluetooth configuration, optional RS-485 fuel sensor support, and black box logging.

## Protocol Overview

The UMKa310 implements open telemetry options that allow it to report position, movement, and sensor data to cloud backends. The device can send navigation and telemetry in supported formats to multiple endpoints, and its batch transfer and multi server capabilities help balance update frequency with data usage.

- Enables GNSS position reporting and vehicle telemetry to a remote backend for mapping and event processing.
- Supports EGTS and Wialon Combine style reporting modes used by many fleet backends, allowing standardized fields such as coordinates, speed, and basic sensor values to be transmitted.
- Batch transfer reduces GPRS traffic by grouping records while preserving frequent location updates for backends like Plaspy.
- Supports simultaneous transmission to multiple servers for redundancy or split reporting workflows.
- Provides optional RS-485 sensor data and black box records that make historical telemetry available when connectivity is restored.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a single, shared endpoint and automatically determines the tracker protocol as data arrives. In most cases the device only needs to be configured to report to the Plaspy endpoint and no manual protocol selection is required in the platform.

- Plaspy accepts connections at the domain d.plaspy.com and the server IP 54.85.159.138.
- Plaspy listens on port 8888 for incoming device data and uses this same port across all supported devices.
- Devices configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 will be processed by Plaspy.
- The UMKa310 can be configured to report using common formats such as EGTS or Wialon Combine which Plaspy can recognize.
- In typical setups users configure the device to point at the Plaspy endpoint and the platform handles protocol identification automatically.

## Transport and Connection Context

Connection choices determine how the UMKa310 reaches Plaspy but do not change the high level role of the protocol in moving telemetry to the platform. The UMKa310 supports flexible transport options that can be adjusted during device configuration to suit network or server requirements.

- The tracker may be configured to use either UDP or TCP transport on port 8888 depending on device settings and network conditions.
- Devices may be pointed to the Plaspy domain d.plaspy.com or the server IP 54.85.159.138 when configuring the reporting endpoint.
- All devices connecting to Plaspy use the same port number so network firewall rules and carrier APN settings can be standardized.
- Transport selection can affect delivery characteristics such as retransmission behavior and ordering but does not change the basic telemetry fields reported.
- When configuring connectivity, ensure the SIM and APN settings allow outbound GPRS sessions to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware and software versions on the UMKa310 can alter available reporting options and field mappings; compare firmware release notes when validating behavior.
- Hardware revisions and optional interfaces such as RS-485 or Bluetooth can change available telemetry streams and sensor identifiers.
- EGTS and Wialon Combine modes are supported by the device; confirm which mode is active when mapping fields to Plaspy dashboards.
- Transport choice between UDP and TCP may be configurable per server entry when pointing the device at multiple endpoints.
- Multi server reporting can be used to send the same data to Plaspy and other backends for redundancy, but confirm server entries and priorities in the device configuration.
- Always validate compatibility and current protocol details against the manufacturer documentation for the device firmware you are deploying.

## Why Protocol Understanding Matters

A clear understanding of the UMKa310 communication protocol helps ensure reliable data flow into Plaspy, reduces setup friction, and supports effective troubleshooting when data is missing or unexpected.

- Helps validate that position, speed, and sensor fields are mapped correctly in Plaspy dashboards and reports.
- Guides selection of transport and multi server settings to meet reliability and data cost goals.
- Makes it easier to interpret black box records and batch uploads after coverage gaps.
- Supports informed decisions about firmware updates and configuration changes that affect telemetry behavior.
- Enables faster resolution of connectivity issues by checking endpoint, transport, and APN configuration against expected protocol behavior.

## Why Use Plaspy with This Protocol

Using the UMKa310 with Plaspy gives organizations compact, plug and play tracking combined with a flexible cloud backend that accepts the device's open reporting modes. The tracker’s low data consumption features such as batch transfer and multi server reporting align well with fleet use cases that require frequent updates, fuel monitoring, and event logging without excessive data costs.

To learn more about Plaspy and how the platform handles device integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify current information on the official GLONASSsoft site at https://glonasssoft.ru/. Protocol support, firmware behavior, and device implementation details can change over time so checking the manufacturer documentation helps ensure the most accurate configuration.
