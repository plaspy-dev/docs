---
slug: /teltonika/fmm150/protocol
id: fmm150-protocol
sidebar_label: Protocol
title: Teltonika - FMM150 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Teltonika FMM150 with Plaspy for tracking and vehicle telemetry
keywords:
  - Teltonika FMM150
  - FMM150 protocol
  - FMM150 GPS
  - Teltonika protocol
  - FMM150 Plaspy
  - vehicle telemetry
  - fleet tracking
  - CAN bus telemetry
  - EV telemetry
  - LTE Cat M1 tracker
---

# Teltonika - FMM150 Protocol

This page describes the public protocol context for using the Teltonika FMM150 tracker with Plaspy. It focuses on how the device communicates with Plaspy, which connection endpoints to use, and what to consider when integrating location and CAN derived telemetry into a fleet management workflow.

The FMM150 combines LTE Cat M1 with NB IoT and 2G fallback and includes an integrated CAN data processor that exposes more than 100 vehicle parameters. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. For device specific command sets or firmware details consult the official Teltonika documentation.

## Protocol Overview

The tracker protocol is the set of messages and behaviors the FMM150 uses to report location, CAN telemetry, and status to a remote platform such as Plaspy. In public documentation terms, the protocol defines how the device identifies itself, how telemetry is structured for transport, and how Plaspy receives usable signals for tracking, alerts, and reporting.

- Enables the FMM150 to transmit GPS location and CAN derived parameters to a remote server for ingestion by Plaspy.
- Carries device identification and status information so Plaspy can associate messages with the correct vehicle and configuration.
- Supports periodic and event driven telemetry so Plaspy can build position history, geofence events, and diagnostic reports.
- Allows accessory and sensor data from BLE, RFID, or CAN adapters to be delivered alongside GPS for richer fleet insights.
- Works over standard network transports to reach Plaspy without requiring proprietary tunnels or custom endpoints on the platform side.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and automatically determines the tracker protocol so most users do not need to select a protocol manually inside the platform. Proper device configuration to report to the Plaspy endpoint is typically sufficient for the device to begin sending compatible telemetry.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on port 8888 for device connections, and this port is used uniformly for all devices supported by Plaspy.
- Plaspy performs automatic protocol detection when the device connects to the shared endpoint so manual protocol selection in Plaspy is usually unnecessary.
- If a device is not reaching the Plaspy endpoint, verify device network settings, APN configuration, and that the device is configured to report to d.plaspy.com or the specified IP.
- Use Teltonika remote management tools such as Configurator or FOTA WEB to review and update device reporting settings when available.

## Transport and Connection Context

Connection transport and addressing are part of the public integration context. The FMM150 may be configured to use either UDP or TCP to send telemetry to Plaspy depending on device firmware and user configuration. Correct transport selection and server addressing ensure consistent delivery of location and CAN telemetry to Plaspy.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may use UDP or TCP on port 8888 based on its configuration and network conditions.
- Plaspy uses the same port 8888 for all supported devices to simplify device setup and firewall rules.
- Choose UDP when lower overhead and latency are preferred, or TCP when reliable delivery and session behavior are required by the device firmware.
- Ensure device APN and SIM data plan support the chosen transport and cellular band configuration for LTE Cat M1, NB IoT, or 2G fallback.

## Protocol Compatibility Notes

- Firmware differences between device batches can change available features and message behavior; verify firmware release notes before large deployments.
- Hardware revisions and order code variants may expose different CAN parameter sets or accessory interfaces.
- Manufacturer tools such as Teltonika Configurator and FOTA WEB can change reporting settings or enable additional features that affect protocol behavior.
- Transport selection (UDP versus TCP) can affect latency and delivery semantics; confirm device-side support and stability under your network conditions.
- Validate which CAN parameters are available for your vehicle model and order code to ensure expected telemetry is reported to Plaspy.
- Always cross check integration assumptions against official Teltonika documentation for the specific FMM150 variant you are using.

## Why Protocol Understanding Matters

Understanding the communication protocol for the FMM150 helps ensure successful setup, accurate data in Plaspy, and effective troubleshooting when devices are deployed across a fleet. Clear protocol awareness reduces integration time and helps you make informed choices about transport, reporting intervals, and CAN parameter selection.

- Speeds initial configuration by aligning device reporting settings with Plaspy endpoint and transport requirements.
- Improves troubleshooting by clarifying whether issues are network related, device configuration related, or firmware related.
- Helps optimize battery usage and data costs by selecting appropriate reporting intervals and transport strategies.
- Ensures CAN parameters and accessory data are correctly interpreted and mapped into Plaspy dashboards and alerts.
- Supports scalable rollouts by documenting the expected telemetry behavior for different firmware and hardware variants.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM150 with Plaspy gives organizations a practical path to combine precise vehicle location with deep CAN derived telemetry. That combination supports fleet visibility, preventive maintenance workflows, fuel and EV battery monitoring, and operational reporting without requiring separate gateways to extract vehicle signals.

Plaspy’s shared connection settings and automatic protocol detection simplify device onboarding so teams can focus on policies, alerts, and analytics rather than low level transport configuration. To learn more about Plaspy and how it works with devices like the FMM150 visit https://www.plaspy.com. Protocol support and firmware behavior can change over time; verify the latest device specific protocol details and firmware notes with Teltonika at https://www.teltonika-gps.com/ for the most current manufacturer guidance.
