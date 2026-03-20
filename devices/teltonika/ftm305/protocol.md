---
slug: /teltonika/ftm305/protocol
id: ftm305-protocol
sidebar_label: Protocol
title: Teltonika - FTM305 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Teltonika FTM305 and how it communicates with Plaspy for GPS tracking and telemetry
keywords:
  - Teltonika FTM305 protocol
  - Teltonika FTM305 GPS protocol
  - Teltonika FTM305 communication
  - FTM305 Plaspy compatibility
  - FTM305 tracking protocol
  - Teltonika GPS protocol
  - e mobility tracker protocol
  - vehicle telemetry protocol
  - GNSS tracker protocol
  - Plaspy device protocol
---

# Teltonika - FTM305 Protocol

This page provides a public, high level overview of the communication context for the Teltonika FTM305 when used with Plaspy. It focuses on how the tracker reports location and telemetry to Plaspy and what aspects of the device reporting are relevant for successful integration, without exposing sensitive internal or proprietary implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a device reports to the platform. Devices such as the FTM305 can be configured to send data to the Plaspy endpoint at d.plaspy.com or to the server IP 54.85.159.138 on port 8888 using UDP or TCP. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration, so device specific details should be validated against vendor documentation.

## Protocol Overview

The protocol used by the FTM305 defines how the device communicates GNSS coordinates, CAN bus telemetry, and status information to a remote backend like Plaspy. For integration purposes, the key points are that the tracker identifies itself to the server, reports periodic or event driven location updates, and delivers telemetry that Plaspy can map into dashboards and alerts.

- Enables GNSS position reporting and timestamped telemetry delivery to Plaspy for live tracking and historical analysis.
- Carries vehicle signals and CAN bus data so Plaspy can interpret battery state, ignition status, and custom sensors where available.
- Provides identification and session context so Plaspy can associate incoming messages with the correct device record.
- Supports transport over standard IP networks so the device can use mobile data networks to reach the Plaspy endpoint.
- Allows event driven reporting for alarms, geofence triggers, and other operational events that Plaspy can use in rules and notifications.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a common endpoint and port and uses automated detection to determine the device protocol under which the data arrives. In practice this means most users do not need to select a device protocol manually inside Plaspy when the tracker is correctly configured to report to the Plaspy endpoint.

- Plaspy listens on the shared endpoint and port for all supported devices and applies protocol detection automatically.
- Devices should be configured to report to d.plaspy.com or to the server IP 54.85.159.138 to reach Plaspy.
- Plaspy uses the same port for all devices so configuration is consistent across tracker models.
- When a device is correctly pointed to Plaspy, users typically only need to confirm device identification and basic settings in the platform.
- If an incoming device does not register as expected, checking transport settings and firmware behavior is the usual next step.

## Transport and Connection Context

Connection context covers how the FTM305 establishes network transport to reach the Plaspy server. The FTM305 supports cellular data paths suitable for IoT deployments and can be configured to use either UDP or TCP depending on requirements and network conditions.

- The device may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- Devices can point to the domain d.plaspy.com or directly to the server IP 54.85.159.138 to reach Plaspy.
- Plaspy accepts device reports on the same port across all supported tracker models for simplified deployment.
- Transport selection can affect delivery characteristics such as retransmission and session behavior, so choose the mode that matches your network needs.
- Ensure network firewalls and mobile operator settings allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware differences between device batches can affect reporting intervals, available telemetry fields, and feature availability.
- Hardware revisions or regional variants may expose different interfaces or CAN configurations that change the telemetry payload.
- Manufacturer remote tools are commonly used to configure reporting endpoints and transport mode; review device configuration tools before deployment.
- Transport choice between UDP and TCP should reflect your reliability and latency requirements for telemetry delivery.
- Plaspy automatically detects the incoming protocol but accurate device identification requires correct endpoint and transport configuration.
- Always validate device behavior on a test device before rolling out large scale deployments.

## Why Protocol Understanding Matters

Understanding the FTM305 communication protocol at a practical level helps ensure reliable setup, smoother troubleshooting, and better long term reliability when the device is used with Plaspy. Knowing what the device reports and how it reaches the platform reduces configuration errors and improves operational visibility.

- Simplifies initial setup by matching device reporting settings to Plaspy connection requirements.
- Speeds troubleshooting by narrowing issues to transport, firmware, or configuration mismatches.
- Helps map CAN bus and telemetry fields into Plaspy dashboards and alerts more effectively.
- Supports planning for network capacity, reporting frequency, and power usage in IoT deployments.
- Eases device lifecycle operations such as firmware updates and remote configuration through vendor tools.

## Why Use Plaspy with This Protocol

Using the Teltonika FTM305 with Plaspy gives organizations a practical path to combine accurate GNSS positioning and rich CAN telemetry with a fleet management backend. Plaspy ingests location and vehicle signals for real time visualization, geofencing, alerting, and historical reporting, helping teams make operational decisions based on timely data.

To learn more about how Plaspy works with devices like the FTM305, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and regional variants consult the manufacturer at https://www.teltonika-gps.com/ since protocol support and firmware behavior can evolve over time.
