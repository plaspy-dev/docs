---
slug: /xirgo/xt63/protocol
id: xt63-protocol
sidebar_label: Protocol
title: Xirgo - XT63 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT63 GPS tracker and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Xirgo XT63 protocol
  - Xirgo XT63 GPS protocol
  - XT63 Plaspy compatibility
  - XT63 communication protocol
  - Xirgo GPS tracker protocol
  - vehicle tracking XT63
  - XT63 telematics compatibility
  - OBD JBUS XT63
  - Plaspy tracker protocol
  - fleet GPS XT63
---

# Xirgo - XT63 Protocol

This page provides a public, protocol oriented overview of how the Xirgo XT63 communicates with Plaspy for vehicle tracking and telemetry. It focuses on the observable, non sensitive aspects of device reporting and connection behavior that matter when integrating the XT63 with Plaspy powered fleet management and monitoring systems.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol at the platform endpoint. Exact protocol behavior and available features may vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes general protocol context and practical considerations rather than firmware level specifics.

## Protocol Overview

The XT63 reporting protocol governs how the device identifies itself, reports position and sensor data, and signals events to a remote server. On Plaspy the protocol enables reliable location updates, vehicle telemetry from OBD and JBUS where available, and event notifications such as ignition, door, and motion alerts.

- Carries core telemetry such as GPS fix, timestamp, and basic vehicle inputs so Plaspy can map device data to vehicle records.
- Conveys event driven messages for geofence breaches, ignition status, and alarm inputs to enable alerts and automation.
- Sends optional OBD and JBUS telemetry when the XT63 is connected to a vehicle bus, allowing engine, fuel, and diagnostic values to reach Plaspy dashboards.
- Includes device identification and status information so Plaspy can associate incoming messages with the correct asset.
- Supports configurable reporting intervals and event triggers that balance data fidelity with network and power constraints.

## How Plaspy Detects the Protocol

Plaspy receives data at a single, shared endpoint and automatically determines the tracker protocol used by each device. In most deployments users do not need to select a protocol inside Plaspy if the XT63 is configured to report to the Plaspy endpoint using supported transports.

- Plaspy automatically detects the tracker protocol for devices that report to the platform endpoint.
- The platform uses a single listening port for all devices which simplifies device configuration and onboarding.
- If the XT63 is configured correctly to report to the Plaspy endpoint, manual protocol selection inside Plaspy is typically unnecessary.
- Proper device identification settings on the XT63 (IMEI or serial) ensure incoming messages are matched to the correct vehicle record.
- Device firmware and manufacturer configuration options can affect how and when the unit reports so verify device-side reporting settings if detection does not occur.

## Transport and Connection Context

The XT63 can be configured to use common transport protocols to reach Plaspy. For Plaspy deployments the endpoint and port are consistent across supported trackers, so configuring the device to point to the Plaspy endpoint is the primary step for integration.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address for device reporting is 54.85.159.138.
- Plaspy listens on port 8888 for device traffic and all devices in Plaspy use the same port.
- The XT63 may be configured to use either UDP or TCP on port 8888 depending on device support and chosen transport.
- Choose the transport that matches your device configuration and network environment; both UDP and TCP are supported on the Plaspy endpoint.
- Confirm APN, SIM provisioning, and outbound port access with your mobile provider to ensure the device can reach d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware differences can change available features and exact message content; check the device firmware release notes when planning integration.
- Hardware revisions may introduce new interfaces or alter supported transports and should be validated against manufacturer guidance.
- Manufacturer configuration tools or provisioning services can modify reporting endpoints and transport choices; ensure the device is set to report to the Plaspy endpoint.
- OBD and JBUS support is optional and depends on the installed XT63 variant and vehicle wiring.
- Transport selection between UDP and TCP can affect delivery semantics and should match network reliability and latency requirements.
- Validate compatibility by comparing device configuration screens and manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

A clear grasp of the XT63 communication protocol and connection context reduces integration friction, improves troubleshooting speed, and helps maintain reliable telemetry flow into Plaspy. Knowing what the device will and will not send makes it easier to map inputs and events to actionable items in a fleet management workflow.

- Speeds up initial setup by focusing attention on endpoint, transport, and identification settings required by Plaspy.
- Helps troubleshoot common connectivity issues such as blocked ports, APN misconfiguration, or incorrect server addresses.
- Clarifies which vehicle signals and bus parameters will be available in Plaspy when OBD or JBUS is enabled.
- Supports operational decisions around reporting intervals and event thresholds to balance data usage and battery or power constraints.
- Prepares teams for firmware upgrades or hardware changes that may alter the device reporting behavior.

## Why Use Plaspy with This Protocol

Using the Xirgo XT63 with Plaspy gives organizations a straightforward path to combine reliable vehicle location, event driven alerts, and optional engine telemetry into a single monitoring and management platform. The XT63 hardware options and I/O flexibility make it suitable for a wide range of fleet and equipment tracking scenarios where Plaspy provides centralized visibility and alerting.

To learn more about how Plaspy works with devices like the XT63 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://xirgo.com/ as firmware behavior and protocol implementations can change over time.
