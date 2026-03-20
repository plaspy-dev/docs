---
slug: /riti/690_idu_400/protocol
id: 690_idu_400-protocol
sidebar_label: Protocol
title: Riti - 690 (IDU-400) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Riti 690 IDU 400 tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Riti 690 protocol
  - Riti 690 IDU 400 protocol
  - Riti 690 GPS protocol
  - Riti IDU 400 Plaspy
  - Riti GPS tracker protocol
  - Locator 690 protocol
  - IDU 400 communication
  - Riti vehicle tracking protocol
  - Riti Plaspy compatibility
  - Riti 690 tracking protocol
---

# Riti - 690 (IDU-400) Protocol

This page provides a public oriented summary of the communication protocol context for the Riti Locator 690 IDU 400 when used with Plaspy. It focuses on the role of the tracker reporting protocol in sending GNSS fixes, telemetry, events and peripheral data to Plaspy without exposing private parser or firmware internals. The content is intended to help technical teams and integrators understand how the device communicates at a high level and how that communication is consumed by Plaspy.

The Locator 690 is a GNSS enabled intelligent data unit designed for demanding fleet and commercial vehicle IoT. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation. For connectivity to Plaspy, devices can be pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 and use port 8888 for reporting.

## Protocol Overview

At a high level the tracker reporting protocol defines how the Locator 690 identifies itself, delivers GNSS fixes, reports digital and analog inputs, and forwards event alerts to Plaspy. This page does not detail proprietary frame formats or parsing logic, but it does describe the practical role of the device protocol in a Plaspy integration.

- Enables periodic and event driven transmission of location and sensor telemetry to Plaspy for live tracking and historical records
- Carries identity and session information so Plaspy can associate incoming data with the correct device and fleet
- Transmits digital input changes, analog sensor readings, SOS and G sensor events used by Plaspy for alerts and automation
- Supports temporary local storage and retransmit behavior so Plaspy receives backfilled records after connectivity restoration
- Operates over standard transport options supported by the device so it can work across different mobile networks and network conditions

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker reports and automatically detects the reporting protocol for supported devices. When the Locator 690 is configured to report to the Plaspy endpoint, users usually do not need to select a protocol manually within Plaspy.

- Plaspy accepts device reports on the common Plaspy server endpoint d.plaspy.com and on the server IP 54.85.159.138
- All devices supported by Plaspy use the same port for telemetry which simplifies device setup
- Plaspy automatically detects the tracker protocol from incoming connections so proper configuration on the device side is the primary requirement
- Proper device identity and network reachability to the Plaspy endpoint are necessary for automatic detection and data ingestion
- If a device is correctly set to report to Plaspy, no additional per device protocol selection is typically required in the platform

## Transport and Connection Context

Transport selection and endpoint configuration are part of the connection context that determines how telemetry reaches Plaspy. The Locator 690 supports common transport methods and can be configured to use UDP or TCP depending on device settings and network conditions.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy
- Devices may be pointed at the Plaspy server domain d.plaspy.com or at the server IP 54.85.159.138
- Port 8888 is the common telemetry port used by Plaspy for all supported devices which reduces configuration complexity
- Choice of UDP or TCP can be driven by firmware options, reliability needs, and operator network behavior
- Network level considerations such as carrier restrictions and firewall rules should allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Compatibility can vary depending on device firmware version and hardware revision so verify behavior for the specific unit in use
- Transport protocol selection may affect latency and reliability for certain event types or large batches of backfilled records
- Manufacturer side configuration menus and remote provisioning options determine how the device is pointed to Plaspy
- Onboard storage and retransmit behavior are helpful but may be limited by memory and firmware settings
- Peripheral support such as digital inputs, analog sensors and RS 232 integrations must be mapped to the platform using the device mapping that Plaspy expects
- Always validate device identity reporting so Plaspy can correctly associate incoming telemetry with the intended asset

## Why Protocol Understanding Matters

Understanding how the Locator 690 communicates with Plaspy helps installers, integrators and fleet operators achieve reliable setup and faster troubleshooting while preserving operational continuity.

- Ensures correct endpoint and transport selection so telemetry reaches Plaspy without manual protocol selection
- Helps diagnose connectivity problems by verifying server address, network reachability and port configuration
- Guides firmware upgrade decisions and feature enablement to maintain compatibility with Plaspy ingestion expectations
- Supports correct mapping of inputs and sensor channels so the platform receives meaningful telemetry and events
- Reduces integration time for large deployments by aligning device configuration practices with Plaspy requirements

## Why Use Plaspy with This Protocol

Using the Riti Locator 690 with Plaspy provides a practical combination for organizations that require continuous location, rich vehicle telemetry and operational visibility across mixed fleets. The Locator 690 delivers GNSS fixes, multi I O telemetry and onboard storage, while Plaspy ingests that data into live maps, alerts and historical reports for dispatch, compliance and analytics.

To learn more about Plaspy and how it integrates with fleet trackers like the Riti Locator 690 visit https://www.plaspy.com. For the latest device specific protocol notes, firmware behavior and manufacturer implementation details please verify information on the official Riti website at https://www.riti.com.tw/ as vendor support and firmware can change over time.
