---
slug: /ulbotech/t373a/protocol
id: t373a-protocol
sidebar_label: Protocol
title: Ulbotech - T373A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the Ulbotech T373A GPS tracker and Plaspy compatibility with connection and transport guidance
keywords:
  - Ulbotech T373A protocol
  - T373A GPS protocol
  - Ulbotech GPS tracker Plaspy
  - T373A communication protocol
  - T373A tracking protocol
  - OBD II tracker protocol
  - Plaspy device compatibility
  - Fleet tracking T373A
  - OBD telemetry Plaspy
  - Vehicle tracking protocol
---

# Ulbotech - T373A Protocol

This page covers the public protocol context for using the Ulbotech T373A tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level so fleet administrators and integrators understand the connection and reporting behavior without exposing firmware internals or proprietary packet formats. The T373A is a plug and play OBD II tracker that reports GPS and rich vehicle telemetry, and this guide explains how that data typically reaches Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The T373A supports multi band cellular networks, an internal GNSS receiver, and full OBD II data reporting, but implementation details such as available OBD PIDs, event reporting frequency, and immobilizer behavior can differ by firmware and vehicle CAN implementation.

## Protocol Overview

At a public level the tracker protocol defines how the device packages and transmits telemetry, position, status, and event data to a remote server so the fleet platform can ingest and present usable information. For the T373A this includes GPS positions, OBD II parameters, accelerometer events, and status signals that Plaspy maps into location, alerts, and telematics records.

- Enables the device to send location fixes and time stamped vehicle telemetry to a remote endpoint for ingestion.
- Carries OBD II derived parameters such as speed, RPM, fuel related values, and diagnostic trouble code indications.
- Transmits motion and driver behavior events produced by the on board accelerometer for harsh braking or cornering alerts.
- Provides a channel for reporting device health, GSM signal status, and battery or backup power events.
- Supports remote commands and configuration flows at a high level when enabled by device firmware and the management platform.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a properly configured device reports to the platform endpoint. Devices that are configured to point to Plaspy will be recognized and parsed into the platform as long as they use the supported transport and address settings.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and All devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and operator preference.
- When a device reports to the Plaspy endpoint Plaspy automatically detects the tracker protocol so manual protocol selection inside the platform is usually not required.
- Proper APN, SIM provisioning, and reporting intervals help Plaspy identify steady device traffic and classify protocol variants.

## Transport and Connection Context

Connection choices affect how the T373A reaches Plaspy but do not change the public protocol concept. The tracker may use either of the common IP transports supported by many cellular trackers and should be pointed at the Plaspy endpoint for reliable ingestion.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the domain d.plaspy.com or to the numeric host 54.85.159.138 for direct routing.
- The port is 8888 and remains the common listening port for Plaspy ingestion across supported devices.
- UDP can reduce overhead for frequent small reports while TCP may be used where session reliability is preferred and supported by the device.
- Network level settings such as APN, firewall rules, and operator restrictions can affect whether TCP or UDP is practical in a given deployment.

## Protocol Compatibility Notes

- Firmware differences between production batches and FOTA updates can change available telemetry fields, event thresholds, and supported commands.
- Hardware revisions or vehicle specific CAN implementations may expose different OBD II PIDs or CAN frames, resulting in variation in reported telemetry.
- Manufacturer side configuration options such as default transport type, heartbeat interval, and immobilizer wiring can alter how the device behaves on the network.
- Transport selection matters for firewall and NAT behavior in different mobile networks; validate UDP and TCP paths with your operator if needed.
- Always confirm APN and SIM provisioning details so the device can reach the Plaspy endpoint reliably.
- Validate compatibility against the official Ulbotech documentation for firmware specific behaviors and vehicle support lists.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful deployment, reliable telemetry, and efficient troubleshooting when integrating the T373A with Plaspy. Familiarity with what the device sends and how the platform receives it reduces deployment friction and shortens resolution times for connectivity or data issues.

- Helps verify that the device is reporting the expected GPS and OBD II parameters needed for your fleet workflows.
- Aids in diagnosing connectivity problems related to APN, SIM, or transport issues versus device firmware or vehicle bus issues.
- Improves event mapping so driver behavior, immobilizer actions, and DTC alerts are interpreted consistently inside Plaspy.
- Supports planning for firmware updates and managing feature changes that may affect reporting frequency or available telematics.
- Enables better coordination with Ulbotech support when device specific logs or behaviors need manufacturer level insight.

## Why Use Plaspy with This Protocol

Using the T373A with Plaspy provides centralized visibility into vehicle location, OBD II telemetry, and driver behavior without complex wiring. For fleets, rental operators, insurers, and roadside assistance providers, the combination of plug and play OBD II reporting and a platform that normalizes telemetry simplifies operations, alerting, and reporting.

Plaspy ingests the T373A data and presents it in maps, reports, and alerts so teams can act on fuel usage, maintenance indicators, immobilizer events, and safety related incidents. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific information with the manufacturer at http://www.ulbotech.com/ for accuracy.
