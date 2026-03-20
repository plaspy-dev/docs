---
slug: /careu/ueco/protocol
id: ueco-protocol
sidebar_label: Protocol
title: CAREU - Ueco Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CAREU Ueco tracker compatibility with Plaspy server and connection settings
keywords:
  - CAREU Ueco protocol
  - CAREU Ueco GPS protocol
  - CAREU Ueco communication protocol
  - CAREU Ueco tracking protocol
  - CAREU Ueco Plaspy
  - Ueco GPS tracker
  - CAREU tracker compatibility
  - vehicle tracking Plaspy
  - fleet management tracker
  - GPS tracker protocol
---

# CAREU - Ueco Protocol

This page provides public protocol context for using the CAREU Ueco GPS tracker with the Plaspy platform. It describes how the device typically communicates with Plaspy, which parts of the connection are shared across devices, and which behaviors depend on firmware, configuration, and manufacturer implementation. The intent is to help technical users and integrators understand the communication surface without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the Ueco can vary with firmware versions, hardware revisions, optional features, and manufacturer configuration choices, so this documentation focuses on general, publicly useful facts and practical integration guidance.

## Protocol Overview

The Ueco's communication protocol is the mechanism the tracker uses to report GPS position, device status, alarms, and other telemetry to a backend such as Plaspy. In practice the protocol carries periodic position updates, event reports such as crash or geofence alerts, and messages related to remote configuration or firmware update triggers. Understanding the role of the protocol helps ensure the device is configured to reach Plaspy and deliver the data you need.

- Transports telemetry data including location, odometer, and status to a remote server so Plaspy can visualize and process it
- Conveys event reports such as crash detection, harsh driving, and geofence entries or exits to enable alerts and reporting
- Supports remote configuration commands and triggers for FOTA or other maintenance workflows initiated by the manufacturer or platform
- Identifies the device so Plaspy can associate incoming data with the correct asset and dashboard views
- Facilitates periodic heartbeats or keepalive messages to indicate device connectivity and cellular availability

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and automatically determines the correct tracker protocol for supported devices. For most Ueco deployments you do not need to select a protocol inside Plaspy manually as long as the tracker is configured to report to the Plaspy endpoint and uses a supported transport.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct endpoint reference
- The port is 8888 and Plaspy uses the same port for all supported devices, simplifying device configuration
- Plaspy automatically detects the tracker protocol when data arrives at the platform endpoint
- If the Ueco is configured to report to the Plaspy endpoint the platform will associate incoming messages with the device model and provide the appropriate parsing and handling
- Users typically only need to ensure the tracker points to the correct Plaspy endpoint and uses the configured transport protocol

## Transport and Connection Context

Connection context covers how the Ueco reaches the Plaspy servers. Depending on the device model and firmware options, the tracker may be set to use different transport methods. These choices affect how the device is configured on the device side but do not change the fact that Plaspy accepts traffic through the shared endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to d.plaspy.com or to 54.85.159.138 when configuring the reporting endpoint
- All devices in Plaspy use the same port which makes deployments consistent across mixed fleets
- Transport selection (UDP versus TCP) may be configured on the tracker or the installation cable and should match network and reliability needs
- Ensure any intermediate firewalls or carrier APN settings allow outbound UDP or TCP traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware differences across Ueco units can affect the exact messages and features available for reporting and remote configuration
- Hardware revisions and optional modules such as two way voice or expanded GNSS support may add or alter reported fields
- Transport selection and manufacturer configuration options (UDP versus TCP, DNS versus direct IP) influence how you set up devices to reach Plaspy
- Features like FOTA via FTP, geofence types, and 1 Wire usage depend on firmware and may require additional manufacturer configuration
- Always validate a given unit or batch against current manufacturer release notes when planning large deployments
- When in doubt, consult the official CAREU documentation or the device configuration tool used by the installer

## Why Protocol Understanding Matters

A practical understanding of the Ueco communication protocol helps ensure reliable device onboarding, correct telemetry interpretation in Plaspy, and faster troubleshooting when issues arise. Knowing which parts of the connection are shared and which depend on firmware can reduce deployment time and improve operational reliability.

- Ensures the device is configured to report to the correct Plaspy endpoint and transport so data arrives consistently
- Helps diagnose connectivity and reporting problems by checking transport settings and endpoint reachability
- Improves the accuracy of alerts and reporting by verifying that event types like crash detection and geofences are enabled and reported as expected
- Supports planning for firmware updates and optional feature activation such as FOTA or expanded GNSS
- Reduces support friction by aligning installer configuration with Plaspy expectations for endpoint and port usage

## Why Use Plaspy with This Protocol

Using the CAREU Ueco with Plaspy provides a straightforward path to capture position, event, and diagnostic data from compact trackers into a unified fleet management platform. Plaspy's shared endpoint approach and automatic protocol detection reduce per-device configuration overhead, allowing teams to focus on operational use cases such as tracking, driver behavior monitoring, and geofence reporting.

To learn more about Plaspy and how it can receive and process data from devices like the CAREU Ueco visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes please verify documentation on the manufacturer site https://www.systech-iot.com/ as protocol support and firmware features can change over time.
