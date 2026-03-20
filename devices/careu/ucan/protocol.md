---
slug: /careu/ucan/protocol
id: ucan-protocol
sidebar_label: Protocol
title: CAREU - UCAN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU UCAN GPS tracker showing how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - CAREU UCAN protocol
  - CAREU UCAN GPS protocol
  - CAREU UCAN Plaspy compatibility
  - CAREU UCAN communication protocol
  - CAREU UCAN tracking protocol
  - CAREU UCAN OBDII tracker
  - Plaspy compatible GPS tracker
  - vehicle tracking UCAN
  - UCAN telemetry protocol
  - fleet tracking CAREU
---

# CAREU - UCAN Protocol

This page presents the public protocol context for using the CAREU UCAN GPS OBD II tracker with Plaspy. It focuses on how the device communicates to the Plaspy platform in broad, non sensitive terms so fleet operators and integrators can understand connection expectations, reporting behavior, and practical compatibility considerations.

The CAREU UCAN is a plug and play OBD II tracker designed to supply GNSS position, engine and ignition status, OBD telemetry and accelerometer events to a backend platform. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so device variants and firmware updates may change reporting details over time.

## Protocol Overview

The UCAN device protocol governs how the tracker packages and transmits telemetry and event data from the vehicle to a remote server so that Plaspy can present location, diagnostics, and alerts to users. This documentation describes the protocol context relevant to integration rather than low level packet structures.

- Enables real time GNSS position reporting and periodic location updates for fleet visibility.
- Carries OBD II telemetry such as odometer readings, RPM, vehicle speed, fuel level, and diagnostic trouble codes for maintenance workflows.
- Transmits accelerometer driven events including harsh acceleration, harsh braking, and impact notifications for driver behavior analysis.
- Supports remote configuration and FOTA style updates at a protocol level so reporting intervals and thresholds can be managed centrally.
- Works over common IP transports so the device can reach the Plaspy endpoint from cellular networks with minimal configuration.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections from many tracker models while using the same network endpoint and port, then identify the tracker reporting protocol automatically. When a UCAN device is configured to report to Plaspy, the platform typically recognizes the device type and begins processing telemetry without manual protocol selection by the user.

- Plaspy accepts device traffic on a single shared endpoint and port for all supported devices which simplifies provisioning.
- The Plaspy server domain for device reporting is d.plaspy.com and the known public server IP is 54.85.159.138.
- All Plaspy devices report to port 8888 and Plaspy uses that same port across device models.
- The platform automatically detects the tracker protocol so users do not normally need to choose a protocol inside Plaspy when UCAN is properly configured.
- Proper device configuration to point at the Plaspy reporting endpoint is the primary requirement for automatic detection.

## Transport and Connection Context

UCAN devices transmit telemetry over cellular data and can be configured to use either UDP or TCP depending on the device variant and carrier settings. Understanding which transport is active and how the device is pointed at the Plaspy endpoint helps ensure reliable connectivity and expected reporting behavior.

- The device may be configured using UDP or TCP on port 8888 depending on device support and provisioning.
- Devices can point to the Plaspy domain d.plaspy.com or the public IP 54.85.159.138 when DNS or routing considerations require an IP address.
- All devices in Plaspy use the same port which simplifies firewall and network configuration for fleets.
- Network fallback behavior such as 4G to 3G or 2G transitions is managed by the device and may affect reporting cadence during handover.
- Cellular provisioning options including optional eSIM on some UCAN variants affect how the device attaches to the network and reaches Plaspy.

## Protocol Compatibility Notes

- Firmware differences across UCAN releases can change which telemetry fields are available or how events are reported; verify firmware notes for device behavior.
- Hardware variants such as 4G versus 3G 2G versions may differ in memory, logging capacity, and available features like Bluetooth or accessory interfaces.
- Manufacturer side configuration defaults and regional firmware can lead to subtle protocol variations even for the same model name.
- Transport selection between UDP and TCP affects reliability and firewall rules; confirm the device is configured to use an allowed transport for your network.
- Remote configuration and FOTA capabilities depend on manufacturer server settings and device firmware support; confirm these features before large deployments.
- Always validate real world behavior by testing a small number of devices to confirm Plaspy receives the expected telemetry and events.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps fleet operators and integrators set up devices correctly, diagnose connectivity or data mapping issues, and maintain long term reliability in Plaspy. Even when a platform auto detects a protocol, awareness of what the tracker reports and how it connects prevents avoidable downtime.

- Ensures firewall, NAT, and carrier settings allow traffic to and from d.plaspy.com or the known IP so data reaches Plaspy reliably.
- Helps interpret telemetry fields sent from the device and map them to Plaspy dashboard elements like odometer, fuel, and DTCs.
- Supports troubleshooting when expected events or diagnostics do not appear in the Plaspy dashboard by narrowing scope to transport, firmware, or device configuration.
- Improves planning for firmware updates and feature rollouts by recognizing which protocol capabilities the current device firmware supports.
- Facilitates informed decisions about device variant selection for connectivity, logging capacity, and accessory support.

## Why Use Plaspy with This Protocol

Using the CAREU UCAN tracker with Plaspy gives fleet operators a straightforward path to combine plug and play OBD II installation with centralized visibility. UCAN provides vehicle location, OBD telemetry, and accelerometer events that feed directly into Plaspy for route monitoring, maintenance workflows, driver behavior programs, and security alerts.

To learn more about Plaspy and how UCAN data can be consumed in the platform, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer website at https://www.systech-iot.com/ before large scale deployment.
