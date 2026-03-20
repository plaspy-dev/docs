---
slug: /coban/bn_405d/protocol
id: bn_405d-protocol
sidebar_label: Protocol
title: Coban - BN-405D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Coban BN-405D and how it communicates with Plaspy for real time tracking and telematics
keywords:
  - Coban BN-405D protocol
  - Coban BN-405D GPS protocol
  - BN-405D Plaspy compatibility
  - Coban GPS tracker protocol
  - vehicle tracking protocol
  - GNSS tracker integration
  - fleet management protocol
  - telematics protocol Plaspy
  - BN-405D communication
  - Coban tracker Plaspy
---

# Coban - BN-405D Protocol

This page provides a public protocol overview for using the Coban BN-405D GPS tracker with Plaspy. It focuses on the communication context and practical behavior needed to connect the device to Plaspy servers without revealing implementation specifics. Use this information to understand how the tracker reports location, telemetry, and alarms to Plaspy.

The BN-405D is a Plaspy compatible vehicle tracker that can report over TCP, UDP, or SMS depending on configuration and firmware. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For the most current device specific details refer to official Coban documentation.

## Protocol Overview

At a high level the BN-405D communication protocol defines how the device identifies itself, reports GNSS positions, sends telemetry and alarms, and receives remote commands. The protocol's role is to convert sensor and vehicle events into structured messages that a backend like Plaspy can receive and interpret for live tracking and historical playback.

- Enables periodic and event driven position reporting so Plaspy can display live location and route history.
- Transmits vehicle telemetry and status such as ignition, battery and alarm events for correlation in the Plaspy dashboard.
- Delivers alarm notifications including SOS, geo-fence, overspeed and tamper events for automated workflows.
- Supports remote configuration and control channels so authorized platforms can change parameters or trigger relays.
- Allows fallback or supplementary reporting via SMS where IP connectivity is unavailable.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and port and determines how to handle the incoming data automatically. When a BN-405D is configured to report to Plaspy, the platform uses automatic detection so users generally do not need to select a protocol manually inside Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the Plaspy endpoint.
- Plaspy server IP address is 54.85.159.138 for environments that prefer numeric endpoints.
- Plaspy listens on port 8888 and the platform uses the same port for all supported devices.
- Devices configured to report to Plaspy will be auto detected by the platform without manual protocol selection.
- Using the correct device reporting address and transport is typically sufficient for Plaspy to identify the BN-405D messages.

## Transport and Connection Context

The BN-405D supports multiple transport options and can be configured to deliver data over IP or SMS depending on the deployment and firmware capabilities. Connection context is important for ensuring reliable delivery and correct reception by Plaspy.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and user configuration.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when numeric endpoints are required.
- Plaspy uses the same port 8888 for all devices which simplifies onboarding and firewall rules.
- TCP provides connection oriented delivery while UDP may be used for lower overhead reporting depending on the BN-405D configuration.
- SMS remains an alternative transport for reporting or remote configuration if IP connectivity is unavailable.

## Protocol Compatibility Notes

- Firmware variations can change available fields, reporting intervals, and alarm behavior between device revisions.
- Hardware revisions or regional variants may alter supported cellular bands or optional sensor interfaces.
- Transport choice (TCP, UDP, or SMS) affects delivery semantics and should match both device configuration and network conditions.
- Manufacturer configuration commands and responses can be firmware dependent; verify which commands are available for your firmware.
- Always validate behavior in a test environment before large scale deployment to confirm Plaspy receives the expected telemetry.
- Consult Coban documentation for firmware specific notes that affect protocol behavior or feature availability.

## Why Protocol Understanding Matters

Understanding the BN-405D communication protocol and connection context helps accelerate setup, troubleshooting, and long term reliability when integrating with Plaspy. Clear expectations about transport and message behavior reduce configuration errors and support efficient fleet operations.

- Ensures correct server and transport settings are applied so messages reach Plaspy reliably.
- Helps diagnose connectivity issues by distinguishing transport problems from device or network faults.
- Guides decisions about transport selection in mixed coverage areas to balance timeliness and reliability.
- Supports planning for firmware updates and hardware changes that may affect message content or frequency.
- Improves security posture by confirming which remote configuration paths are enabled and how they are protected.

## Why Use Plaspy with This Protocol

Pairing the Coban BN-405D with Plaspy provides organizations with consolidated vehicle visibility, alarm handling, and telemetry analysis across mixed fleets. The BN-405D’s multi band cellular and GNSS capabilities combined with Plaspy’s unified endpoint approach make it straightforward to collect location and event data for monitoring, route analysis, and automated alerts.

Plaspy’s single endpoint and port approach minimizes setup complexity while automatic protocol detection reduces the need for manual configuration changes in the platform. To learn more about Plaspy and how it can work with Coban devices visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer notes with Coban at https://www.coban.net/ as vendor implementations can change over time.
