---
slug: /gelix/gelix_lite/protocol
id: gelix_lite-protocol
sidebar_label: Protocol
title: Gelix - Gelix Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Gelix Lite GPS tracker and Plaspy integration covering transport detection and compatibility
keywords:
  - Gelix Gelix Lite protocol
  - Gelix Lite GPS protocol
  - Gelix tracker Plaspy
  - Gelix Lite communications
  - Gelix telematics protocol
  - Gelix Lite compatibility
  - Gelix tracking protocol
  - Gelix device integration
  - Gelix Lite configuration
  - Gelix telemetry Plaspy
---

# Gelix - Gelix Lite Protocol

This page describes the public protocol context for using the Gelix Lite tracker with Plaspy. It focuses on how the device communicates over mobile data and messaging channels, what role the tracker reporting protocol plays in integration, and the practical points that matter when configuring Gelix Lite to report to Plaspy. The technical details here are high level and safe for public consumption.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior for Gelix Lite can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device specific behavior with the manufacturer when necessary.

## Protocol Overview

The protocol is the set of rules the Gelix Lite uses to send position fixes, status updates, and sensor readings to a remote server. For the Gelix Lite this typically covers GNSS position data, event registration, digital input counts, sensor readings via serial interfaces, and device status messages sent over mobile data or SMS. Plaspy receives those reports and converts them into usable location and event information for fleet monitoring.

- Enables delivery of GNSS based position updates to a remote server for tracking and geofencing
- Transmits event data and configurable asset information for reporting and alerts
- Carries sensor and input values gathered from dry contacts, pulse sensors, and serial adapters
- Supports flexible reporting formats and transfer options selectable on the device
- Allows the device to identify itself and its reporting mode so the server can process incoming messages

## How Plaspy Detects the Protocol

Plaspy centralizes connectivity so device owners only need to point Gelix Lite at the Plaspy endpoint. Plaspy listens on a shared server and port and automatically detects the incoming tracker protocol without requiring manual protocol selection by the user in many common cases. Proper device configuration to report to Plaspy is the usual requirement for automatic detection.

- Plaspy server domain is d.plaspy.com which devices can use as their reporting host
- Plaspy server IP is 54.85.159.138 and it is an alternative endpoint devices may report to
- The port is 8888 which Plaspy uses for all supported devices so a single port works across models
- The device may be configured using UDP or TCP on port 8888 depending on device support
- All devices in Plaspy use the same port which simplifies configuration and network rules
- Plaspy automatically detects the tracker protocol once the device reports to the endpoint

## Transport and Connection Context

Connection context describes how Gelix Lite delivers its reports to the server. The device supports GPRS based data reporting and can also use SMS for control or fallback messaging. Depending on the Gelix Lite configuration it may open TCP or UDP sessions to the configured server and port, or use SMS directed commands for certain remote operations.

- Devices may point to the domain d.plaspy.com or directly to the IP address 54.85.159.138
- The device may use either UDP or TCP on port 8888 based on configuration and firmware capabilities
- All Plaspy supported devices share the same port which makes firewall and APN setup simpler
- Primary reporting is over GPRS IP with SMS available for command and backup messaging
- Network and APN settings on the device must allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware variations can change message formats and available features between releases
- Hardware revisions or optional accessories such as CAN adapters can affect which data fields are reported
- Manufacturer side configuration options determine available reporting formats and event registration behavior
- Choice of transport TCP versus UDP may affect delivery behavior and should match device support
- Dual server capability on the device can be used to configure a primary and secondary reporting endpoint
- Validate compatibility against the Gelix official documentation for firmware specific details

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the Gelix Lite reports the right data to Plaspy and that the platform interprets that data correctly. Clear knowledge of reporting modes, transport selection, and available sensor channels reduces setup time and improves operational reliability.

- Ensures correct server host and port are set so messages reach Plaspy without network blocking
- Helps map device inputs and serial sensor data to Plaspy telemetry fields for accurate reporting
- Guides troubleshooting when position reports or events are not appearing in the platform
- Informs decisions about using TCP versus UDP and configuring APN or firewall rules
- Prepares teams for the impact of firmware updates or hardware changes on reported data

## Why Use Plaspy with This Protocol

Using Gelix Lite with Plaspy gives organizations a consistent endpoint and parsing environment for vehicle and asset telemetry. The combination of Gelix Lite features such as configurable reporting, external sensor support, and remote firmware capability with Plaspy automatic protocol detection and a single port design simplifies deployment for mixed fleets and sensor rich installations.

If you want to learn more about how Plaspy works with devices like the Gelix Lite visit https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time so verify the latest device specific protocol information on the manufacturer site at http://www.gelix.com/ before performing large scale deployments.
