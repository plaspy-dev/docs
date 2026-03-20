---
slug: /ruptela/pro5/protocol
id: pro5-protocol
sidebar_label: Protocol
title: Ruptela - Pro5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Ruptela Pro5 GPS tracker and how it communicates with Plaspy for fleet telematics and device integration
keywords:
  - Ruptela Pro5 protocol
  - Ruptela Pro5 GPS protocol
  - Ruptela Pro5 communication protocol
  - Ruptela Pro5 tracking protocol
  - Pro5 Plaspy compatibility
  - Pro5 fleet telematics
  - Pro5 CAN telemetry
  - GPS tracker protocol Plaspy
  - vehicle tracking Pro5
  - Plaspy device integration
---

# Ruptela - Pro5 Protocol

This page covers the public protocol context for using the Ruptela Pro5 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non sensitive terms and what connection settings are used for reporting, while leaving firmware level and proprietary packet details to the manufacturer documentation.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by device firmware, hardware revision, and manufacturer implementation, so field testing and review of official Ruptela documentation is recommended for device specific characteristics.

## Protocol Overview

The communication protocol used by the Pro5 defines how the tracker identifies itself, reports GNSS positions and vehicle telemetry, and passes events to Plaspy for storage and processing. The protocol's practical role is to deliver timely, usable data from the device to the platform while allowing the device to receive configuration and management commands where supported.

- Enables the Pro5 to deliver GNSS position, accelerometer events, and CAN derived telemetry to Plaspy for live monitoring.
- Provides identity and session information so Plaspy can associate incoming data with the correct asset and device record.
- Carries vehicle sensor and diagnostics data such as fuel, engine parameters, and I/O events for ingestion into fleet reports.
- Supports transport over standard IP sockets so data can be routed reliably from cellular networks to Plaspy servers.
- Allows remote provisioning triggers where the device and manufacturer platform support FOTA or configuration updates.

## How Plaspy Detects the Protocol

Plaspy's ingestion layer is designed to accept incoming connections on a single, shared endpoint and to recognize the tracker protocol automatically when a properly configured device reports to the platform. In typical deployments, no manual protocol selection is required inside Plaspy if the device is pointed to the Plaspy endpoint and sends telemetry.

- Plaspy uses a single public endpoint for device reporting and automatically detects the tracker protocol for incoming connections.
- Devices configured to report to Plaspy only need to target the shared Plaspy address to be identified and processed.
- Users generally do not need to select a specific protocol inside Plaspy when the device is configured to send data to the platform endpoint.
- Automatic detection reduces configuration steps for large rollouts and helps ensure diverse device models can be handled consistently.
- If a device is not recognized, validating device outbound settings and firmware behavior against manufacturer guidance is the recommended first step.

## Transport and Connection Context

The Pro5 may be configured to use either UDP or TCP for reporting depending on device support and configuration choices. Plaspy accepts device traffic on the common reporting port used across all supported devices and can be reached either by the Plaspy domain name or by the platform IP address.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy platform IP address is 54.85.159.138 for direct IP configuration.
- The shared reporting port for all devices in Plaspy is 8888 and should be used for Pro5 connections.
- Devices may be configured to use either UDP or TCP transport on port 8888 according to installation needs and device capabilities.
- Using the common port simplifies firewall and network rules for fleet deployments and centralizes ingestion.

## Protocol Compatibility Notes

- Firmware versions may change message timing, available telemetry fields, and transport behavior; always check the device firmware level when diagnosing compatibility.
- Hardware revisions or regional variants of Pro5 can affect available interfaces such as CAN wiring, serial ports, or radio band support.
- Manufacturer provisioning platforms and FOTA processes can alter how the device reports or accepts remote configuration.
- Transport selection (UDP vs TCP) should be matched to network reliability requirements and any intermediate network equipment behavior.
- Validate that the device is set to the Plaspy endpoint and port and that SIM/APN settings are correct before troubleshooting protocol parsing.
- When in doubt, consult Ruptela documentation and release notes for device specific protocol changes.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure correct setup, efficient troubleshooting, and long term reliability when using the Pro5 with Plaspy. A practical grasp of how the device reports identity, telemetry, and events reduces integration time and improves operational confidence.

- Speeds initial device onboarding by ensuring correct host and transport settings are applied.
- Makes it easier to interpret telemetry gaps, duplicate reports, or unexpected event timing.
- Helps operations choose the appropriate transport and network settings for reliable delivery.
- Aids in coordinating firmware updates and configuration changes between device management tools and Plaspy.
- Improves incident response by clarifying what telemetry the device is expected to provide for alerts and reconstruction.

## Why Use Plaspy with This Protocol

The Pro5 is designed to deliver robust vehicle telemetry and reliable GNSS data for heavy vehicles, and pairing it with Plaspy gives operators a unified platform for live location, diagnostics, and event alerts. Plaspy’s shared ingestion endpoint and automatic protocol detection simplify fleet scale deployments and allow Pro5 devices to stream location, CAN data, BLE inputs, and event notifications into centralized dashboards.

To learn more about Plaspy and how the platform can ingest and present Pro5 telemetry, visit https://www.plaspy.com. For authoritative, device specific protocol details, firmware notes, and configuration instructions, verify the latest information at the manufacturer website https://ruptela.com/.
