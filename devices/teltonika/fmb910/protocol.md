---
slug: /teltonika/fmb910/protocol
id: fmb910-protocol
sidebar_label: Protocol
title: Teltonika - FMB910 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for using the Teltonika FMB910 tracker with Plaspy including connection settings and compatibility notes
keywords:
  - Teltonika FMB910 protocol
  - Teltonika FMB910 GPS
  - FMB910 Plaspy compatibility
  - Teltonika GPS protocol
  - FMB910 communication protocol
  - vehicle tracking Teltonika
  - fleet tracking FMB910
  - Plaspy GPS integration
  - FMB910 BLE sensor tracking
  - FMB910 accelerometer detection
---

# Teltonika - FMB910 Protocol

This page documents the public protocol context for using the Teltonika FMB910 tracker with Plaspy. It focuses on how the device reports location, events, and sensor streams to the Plaspy endpoint and what to check when preparing an FMB910 for integration. The content here is intended as an integration and troubleshooting reference rather than a detailed manufacturer service manual.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a properly configured device reports to the platform. Exact on-device protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so validate device-specific details with the official Teltonika documentation as needed.

## Protocol Overview

The FMB910 communicates telemetry and event data from the vehicle to a remote server so Plaspy can ingest location, I/O state changes, accelerometer events, and BLE sensor inputs. The tracker protocol defines how the device establishes a session, identifies itself, and sends periodic or event-driven messages that are usable by fleet management platforms such as Plaspy.

- Enables the FMB910 to report GPS position, accelerometer events, and I/O state to Plaspy for live monitoring.
- Carries BLE sensor and beacon data when the device is configured to forward external sensor readings.
- Provides the means for the tracker to identify the device and include key metadata that Plaspy uses to associate messages with the correct asset.
- Supports both periodic position reports and event-driven messages such as crash detection, ignition changes, and tamper alerts.
- Allows remote configuration workflows (for example through Teltonika FOTA WEB) to update behavior that affects how the device communicates with Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives tracker connections at a single shared network endpoint and automatically determines the incoming device protocol so users rarely need to pick a protocol manually. When an FMB910 is configured to report to Plaspy, the platform recognizes the device messages and associates them with the correct asset record.

- Plaspy listens on the domain d.plaspy.com and the public IP 54.85.159.138 for incoming device connections.
- The platform uses a single port across all supported devices which simplifies device configuration and reporting.
- Plaspy automatically detects the tracker protocol from incoming messages so manual protocol selection inside Plaspy is typically unnecessary.
- Ensure the FMB910 is configured to report to the Plaspy endpoint and to use the supported transport (UDP or TCP) so detection can occur reliably.
- If a device does not appear to register, verify device reporting settings, network reachability to d.plaspy.com, and that the tracker has cellular connectivity.

## Transport and Connection Context

Connection choices on the FMB910 determine whether messages use UDP or TCP transport to reach Plaspy, and you can configure the device to point to either the Plaspy domain or its direct IP address. Plaspy accepts both transports on the same well known port, enabling straightforward device setup across diverse fleet environments.

- The FMB910 may be configured to use UDP or TCP on port 8888 depending on device settings and operational needs.
- Devices can target the Plaspy server by domain d.plaspy.com or by the server IP 54.85.159.138.
- All devices in Plaspy use the same port which reduces configuration complexity when deploying multiple tracker models.
- Transport selection (UDP versus TCP) can affect message delivery characteristics and should be chosen based on coverage and network behavior.
- Verify that the tracker’s APN and cellular connectivity permit outbound connections to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Firmware revision can change message content, available events, and device behavior; always check the FMB910 firmware version when diagnosing compatibility issues.
- Hardware revisions and regional product variants can affect feature availability such as BLE performance or supported I/O signals.
- Manufacturer configuration tools and remote update services (for example Teltonika FOTA WEB) can alter device reporting behavior and should be coordinated with Plaspy integration plans.
- Transport differences matter; confirm whether a device is set to UDP or TCP and test connectivity to the Plaspy endpoint on port 8888.
- Network conditions and regional cellular coverage for 2G can limit data delivery in some locations; validate that 2G service is available where the device will operate.
- Always validate critical integration points against official Teltonika documentation for model specific notes and lifecycle status.

## Why Protocol Understanding Matters

Understanding the FMB910 communication protocol and connection context helps ensure reliable device onboarding, accurate telemetry ingestion, and efficient troubleshooting when devices behave unexpectedly on Plaspy. Clear expectations about what the device reports and how it connects reduce deployment friction and keep operational telemetry dependable.

- Helps confirm correct server and transport settings so devices report to Plaspy without manual protocol selection.
- Speeds up troubleshooting by narrowing focus to transport, firmware version, or configuration mismatches.
- Ensures event types such as accelerometer alerts and I/O changes are mapped to Plaspy rules and workflows correctly.
- Informs decisions about remote configuration, firmware updates, and lifecycle planning for deployed hardware.
- Reduces downtime by making it easier to verify reachability to d.plaspy.com and port 8888 during support checks.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB910 with Plaspy provides a practical, cost effective path to real time position tracking, event monitoring, and basic remote control workflows for small and medium fleets operating where 2G service is available. Plaspy ingests the FMB910 location, accelerometer, I/O, and BLE sensor data and exposes those streams as live map views, alerts, historical reports, and automation triggers to support anti theft, recovery, and operational oversight.

To learn more about how Plaspy works with devices like the FMB910 and to review platform capabilities, visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and lifecycle status, verify information on the manufacturer site https://www.teltonika-gps.com/ as device behavior and protocol implementations can change over time.
