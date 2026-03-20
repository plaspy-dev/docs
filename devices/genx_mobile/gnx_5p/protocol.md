---
slug: /genx_mobile/gnx_5p/protocol
id: gnx_5p-protocol
sidebar_label: Protocol
title: GenX Mobile - GNX-5P Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GenX Mobile GNX-5P and how the device communicates with Plaspy for tracking and telemetry
keywords:
  - GenX Mobile GNX-5P protocol
  - GNX-5P GPS protocol
  - GNX-5P Plaspy compatibility
  - GNX-5P communication protocol
  - GNX-5P tracking protocol
  - GenX Mobile tracker protocol
  - vehicle tracking GNX-5P
  - fleet tracking GNX-5P
  - Plaspy device integration
  - device protocol guide
---

# GenX Mobile - GNX-5P Protocol

This page provides a public, non-sensitive description of the communication protocol context for the GenX Mobile GNX-5P when used with the Plaspy fleet platform. It focuses on how the tracker reports telemetry and events to Plaspy and what aspects of the device protocol are relevant to successful integration and operation.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when the device is correctly configured. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps the discussion at a practical, implementation neutral level.

## Protocol Overview

The protocol used by the GNX-5P defines how the device sends location, status, and event telemetry to a remote server so that Plaspy can ingest and present that data. It covers the basic actions of reporting position, device identity, and event samples such as accelerometer-based driving events, without exposing private binary formats or manufacturer internals.

- Enables periodic and event driven transmission of GPS location and related telemetry to a remote server.
- Carries device identity and status information so Plaspy can associate messages with a registered tracker.
- Transmits sensor and event data such as accelerometer alerts, motion state, and signal quality in a way that Plaspy can map to alerts and analytics.
- Permits transport over common network protocols so devices can work reliably on cellular networks.
- Supports configurable reporting intervals and event thresholds through device configuration supplied by the manufacturer.
- Allows firmware to extend or modify message sets while preserving basic location and identity reporting.

## How Plaspy Detects the Protocol

Plaspy requires the device to report to the Plaspy server endpoint and port; once messages arrive at the shared endpoint Plaspy automatically detects the tracker protocol so users rarely need to select a protocol manually. Proper device configuration to point at the Plaspy endpoint is the typical requirement for successful automatic detection.

- Plaspy server domain is d.plaspy.com which devices can target for reporting.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative endpoint.
- The port is 8888 and is the shared port used by all devices in Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on device support.
- All devices in Plaspy use the same port, simplifying device-side configuration.
- Plaspy automatically detects the tracker protocol when properly addressed to the Plaspy endpoint.

## Transport and Connection Context

Transport choices and connection settings determine how GNX-5P messages reach Plaspy. The GNX-5P is designed to work over modern cellular networks and supports common transport modes; choosing the appropriate transport type depends on device firmware and the desired reliability or latency characteristics.

- Devices may be configured to use either UDP or TCP on port 8888 for reporting to Plaspy.
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting endpoint.
- Using TCP can improve delivery reliability while UDP can reduce overhead in some configurations, subject to device capability.
- Cellular network behavior and signal conditions influence how frequently the GNX-5P can report and whether messages are retransmitted.
- Because Plaspy uses a single port for all devices, switching a device between transports typically requires only changing the device configuration, not the server port.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or change message types and behavior; always check the device firmware level when diagnosing compatibility.
- Hardware revisions and optional components such as internal sensors can affect which telemetry fields are available from a given unit.
- Manufacturer configuration commands and provisioning procedures control whether the device points to d.plaspy.com or the numeric IP and whether it uses UDP or TCP.
- Transport selection (UDP versus TCP) should match both device capability and any operator network requirements.
- Plaspy will accept messages on the shared port and attempt protocol detection, but correct device addressing to the Plaspy endpoint is required.
- Validate compatibility against the latest GenX Mobile documentation and release notes for firmware specific behavior.

## Why Protocol Understanding Matters

Understanding the GNX-5P communication protocol helps ensure reliable setup, accurate data collection, and faster troubleshooting when integrating the device with Plaspy. Insight into what the device reports and how it connects reduces integration time and improves operational visibility.

- Facilitates correct device configuration so messages reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps distinguish between transport related issues and protocol or firmware related issues.
- Informs decisions about reporting intervals, event thresholds, and battery or data usage tradeoffs.
- Supports effective troubleshooting when position, accelerometer, or status updates do not appear in Plaspy.
- Helps administrators confirm that the GNX-5P is sending the telemetry types required for fleet analytics and alerts.

## Why Use Plaspy with This Protocol

Using the GNX-5P with Plaspy provides a practical route to consolidate GPS location, vehicle state, and event telemetry into a single fleet management platform. Plaspy’s automatic protocol detection and the shared port approach reduce the configuration burden and let teams focus on operations rather than protocol selection.

Plaspy is designed to accept GNX-5P reports sent to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP, and will automatically detect the tracker protocol once the device is sending to that endpoint. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the manufacturer at http://www.genxmobile.com/.
