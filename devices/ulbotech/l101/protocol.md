---
slug: /ulbotech/l101/protocol
id: l101-protocol
sidebar_label: Protocol
title: Ulbotech - L101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Ulbotech L101 with Plaspy for fleet tracking and telemetry
keywords:
  - Ulbotech L101 protocol
  - Ulbotech L101 GPS protocol
  - Ulbotech L101 Plaspy compatibility
  - Ulbotech L101 tracking protocol
  - Ulbotech L101 OBDII telemetry
  - Ulbotech L101 vehicle tracking
  - Plaspy device protocol
  - Fleet tracking Ulbotech L101
  - L101 telemetry integration
  - GPS tracker protocol Plaspy
---

# Ulbotech - L101 Protocol

This page covers the public protocol context for using the Ulbotech L101 with Plaspy. It explains how the L101's reporting behavior and telemetry are consumed by Plaspy for real time tracking, OBDII diagnostics, and driver event detection while avoiding private or sensitive implementation details. The information below is focused on the communication relationship between the device and the Plaspy platform rather than internal firmware specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly pointed at the Plaspy endpoint. The L101 can be configured to send data to Plaspy using standard transport options and its exact runtime behavior can vary by firmware version, hardware revision, and manufacturer implementation. For Plaspy ingestion the platform listens at d.plaspy.com and 54.85.159.138 on port 8888, and devices may be configured to use either UDP or TCP on that same port.

## Protocol Overview

The tracker reporting protocol is the set of messages and conventions the L101 uses to deliver GPS positions, OBDII parameters, sensor events, and state changes to a remote server. In the context of Plaspy, the protocol enables the device to identify itself, report telemetry in a usable form, and allow Plaspy to normalize that data for dashboards, alerts, and reports.

- Transmits location updates and GNSS fixes to a remote endpoint so Plaspy can display real time position and history.
- Sends OBDII readings and diagnostic parameters that Plaspy maps to fuel, engine, and vehicle health metrics.
- Communicates accelerometer driven driver events and ignition or immobilizer output state for safety and anti theft workflows.
- Uses a well defined transport to reach Plaspy so the platform can reliably ingest and normalize incoming frames.
- Includes reporting controls that affect update frequency, event thresholds, and which telemetry fields are included in each transmission.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared server endpoint and applies automatic detection to identify the device protocol so users typically do not need to select a protocol manually inside the platform. Proper device configuration to report to the Plaspy endpoint is the main requirement for automatic detection to succeed.

- Plaspy listens at the shared domain d.plaspy.com and the IP address 54.85.159.138 using port 8888 for incoming tracker data.
- All devices configured to report to Plaspy use the same port, simplifying deployment and firewall configuration.
- When an L101 instance reports to the Plaspy endpoint, the platform automatically recognizes the incoming format and associates it with the device entry.
- Users normally only need to ensure the device reports to the Plaspy endpoint; manual protocol selection inside Plaspy is not required for properly configured devices.
- If a device does not appear to be detected, verifying server settings and firmware configuration on the device are the recommended first steps.

## Transport and Connection Context

Connection and transport choices determine how the L101 reaches Plaspy but do not change the high level telemetry available to the platform. Depending on device configuration and the environment, the L101 can use either UDP or TCP to deliver messages to Plaspy.

- The L101 may be configured to use UDP or TCP on port 8888 to send data to Plaspy depending on device support and settings.
- Devices can point to the Plaspy server by domain name d.plaspy.com or directly to the server IP 54.85.159.138 if DNS is not available.
- Plaspy uses the same port for all supported devices which reduces per device configuration overhead.
- Choosing UDP can reduce latency for frequent small updates while TCP provides reliable delivery when needed; the appropriate choice depends on network conditions and device firmware options.
- Confirm that any network firewalls allow outbound UDP or TCP traffic to port 8888 to ensure devices can reach Plaspy.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and event reporting behavior; always verify the device firmware level when diagnosing differences.
- Hardware revisions or optional modules on the L101 may affect which telemetry channels are present or how certain sensors behave.
- Manufacturer settings and configuration menus control transport mode, upload intervals, and which OBDII PIDs are reported; these settings impact Plaspy ingestion.
- Some environments require using the Plaspy domain name or the direct server IP depending on DNS availability and network routing.
- For OBDII derived metrics, different vehicle makes and models may expose different PIDs; Plaspy normalizes received fields but source availability can vary.
- Validate compatibility against the manufacturer documentation for device specific limits such as storage, BLE behavior, and immobilizer wiring.

## Why Protocol Understanding Matters

Understanding how the L101 communicates helps ensure reliable setup, accurate telemetry, and faster troubleshooting when integrating the device with Plaspy. Awareness of the protocol and transport context reduces time to deploy devices at scale and improves operational monitoring.

- Helps confirm the device is correctly pointed at d.plaspy.com or 54.85.159.138 and using port 8888 so data reaches Plaspy.
- Enables sensible transport choices between UDP and TCP based on network reliability and reporting frequency.
- Assists in matching reported OBDII parameters to expected PIDs for fuel monitoring and diagnostics in Plaspy.
- Aids troubleshooting when updates are missing by checking firmware, transport mode, and endpoint configuration on the device.
- Supports planning for fleet rollouts by understanding which telemetry items are available from the L101 and how often they are sent.

## Why Use Plaspy with This Protocol

Using the Ulbotech L101 with Plaspy provides organizations with consolidated vehicle visibility, operational telemetry, and event based alerts that support fleet management, rental operations, and insurance telematics. The L101’s plug and play OBDII form factor combined with GNSS, accelerometer events, and BLE connectivity makes it well suited for deployments where quick installation and rich telemetry are priorities.

To learn more about how Plaspy can ingest and present L101 data, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware releases on the manufacturer site http://www.ulbotech.com/ before large scale deployment.
