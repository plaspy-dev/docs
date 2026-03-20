---
slug: /eelink/got08/protocol
id: got08-protocol
sidebar_label: Protocol
title: EElink - GOT08 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the EElink GOT08 and how it reports data to Plaspy for tracking and telemetry
keywords:
  - EElink GOT08 protocol
  - GOT08 GPS tracker
  - EElink GOT08 Plaspy compatibility
  - GOT08 communication protocol
  - GOT08 tracking protocol
  - EElink OBD GPS protocol
  - GOT08 vehicle telemetry
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - fleet tracking GOT08
---

# EElink - GOT08 Protocol

This page describes the public protocol context for using the EElink GOT08 OBD GPS tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, how that data is consumed by Plaspy, and what to consider when configuring and validating device reporting for fleet and vehicle monitoring.

Plaspy relies on shared connection settings for supported devices and automatically detects the tracker protocol when a unit is reporting to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by device firmware, hardware revision, and manufacturer implementation, so this page remains high level and encourages verification against manufacturer documentation where needed.

## Protocol Overview

The GOT08 uses an OBD-II form factor to collect GNSS location and vehicle telemetry and to stream that information to a remote server. In the context of Plaspy, the device protocol governs how the tracker identifies itself to the server, reports location and OBD parameters, and maintains an ongoing connection for live updates and logged data uploads.

- Enables transmission of GNSS position and OBD-sourced telemetry from the vehicle to Plaspy for live tracking and historical records.
- Provides identifying information so Plaspy can associate incoming messages with a specific device and vehicle profile.
- Supports periodic and event-driven reporting so location, ignition, and fault conditions can be handled as they occur.
- Allows onboard data logging to be transmitted to Plaspy when connectivity permits, ensuring coverage during intermittent cellular conditions.
- Serves as the bridge between the GOT08 hardware and Plaspy’s dashboards, alerts, and analytics without requiring wiring changes in most installations.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports at a shared endpoint and automatically determines the tracker protocol for supported devices. When the GOT08 is configured to report to Plaspy, the platform uses its endpoint and connection context to identify the device type and parse the incoming data into usable telemetry fields.

- Devices report to the Plaspy server address d.plaspy.com or the server IP 54.85.159.138 when configured for Plaspy.
- All devices supported by Plaspy use the same port, simplifying device provisioning and reducing configuration errors.
- The Plaspy endpoint listens on port 8888 and can accept data from trackers that support either UDP or TCP transport.
- In most cases you do not need to select a protocol inside Plaspy manually as long as the GOT08 is configured to report to the Plaspy endpoint and port.
- Proper device identity and reporting enable Plaspy to map incoming fields to the correct vehicle and telemetry attributes.

## Transport and Connection Context

Connection context describes how the GOT08 reaches Plaspy rather than the full packet-level protocol internals. The tracker may be configured to use either UDP or TCP transport, and it is intended to point at Plaspy’s shared endpoint and port to ensure proper delivery of telemetry.

- The GOT08 may be configured to use UDP or TCP on port 8888 depending on device support and the chosen transport mode.
- Plaspy’s public reporting endpoint is d.plaspy.com and the server IP is 54.85.159.138 for devices that require an IP address.
- Port 8888 is used for all Plaspy supported devices, allowing a single outbound port setting across models.
- Choosing UDP can reduce latency for frequent location updates, while TCP provides a connection-oriented option where supported by the device.
- Ensure the vehicle or fleet network allows outbound traffic to the Plaspy endpoint and to port 8888 for reliable delivery.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or alter which OBD parameters the GOT08 reports; verify the device firmware level when checking compatibility.
- Hardware revisions and regional variants sometimes change behavior or parameter naming; check the specific product batch documentation if available.
- Transport selection (UDP versus TCP) should match what the device supports and any carrier or network constraints in your deployment area.
- Some OBD parameters are vehicle dependent; not all vehicles expose the same telemetry even when the tracker and platform support them.
- Validate device reporting in a test vehicle before mass deployment to confirm Plaspy receives the expected telemetry and identity fields.
- Consult the manufacturer documentation for device-specific settings that enable or disable particular OBD metrics or reporting modes.

## Why Protocol Understanding Matters

Understanding how the GOT08 communicates with Plaspy improves setup success, reduces troubleshooting time, and helps ensure long term reliability of fleet monitoring. Familiarity with the communication context helps you validate that location and OBD telemetry arrive complete and mapped correctly within Plaspy.

- Speeds troubleshooting by clarifying whether an issue is transport, configuration, or device related.
- Ensures telemetry mapping in Plaspy matches the fields exposed by the GOT08 for meaningful dashboards and alerts.
- Helps plan network and firewall rules to permit outbound traffic to d.plaspy.com or the server IP on port 8888.
- Guides firmware update decisions when new telemetry fields or behavior changes are required for operations.
- Reduces deployment risk by encouraging pre deployment validation of reporting, identity, and transport settings.

## Why Use Plaspy with This Protocol

Using the EElink GOT08 with Plaspy delivers a low friction path to vehicle visibility and actionable telemetry. The OBD-II plug form factor simplifies installation across large fleets, and Plaspy ingests location and diagnostic data to support tracking, maintenance planning, and alerts without complex wiring.

Plaspy’s shared endpoint model and automatic protocol detection mean many GOT08 units can be provisioned to report to the same Plaspy settings (d.plaspy.com or 54.85.159.138 on port 8888) and begin streaming useful data quickly. For organizations that need centralized tracking, driver and vehicle analytics, and historical reporting, the GOT08 plus Plaspy offers a practical combination for rapid rollout and ongoing fleet oversight.

Learn more about Plaspy and how it integrates with vehicle trackers on the Plaspy website https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information on the manufacturer site https://www.eelink.com.cn/.
