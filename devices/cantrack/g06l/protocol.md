---
slug: /cantrack/g06l/protocol
id: g06l-protocol
sidebar_label: Protocol
title: CanTrack - G06L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CanTrack G06L compatibility with Plaspy and connection guidance for fleet deployments
keywords:
  - CanTrack G06L protocol
  - CanTrack G06L GPS protocol
  - CanTrack G06L Plaspy compatibility
  - G06L tracking protocol
  - CanTrack GPS tracker protocol
  - G06L vehicle tracker protocol
  - Plaspy device integration
  - Plaspy tracker protocol
  - vehicle tracking G06L
  - G06L telemetry and alarms
---

# CanTrack - G06L Protocol

This page documents the public protocol context for using the CanTrack G06L GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, operational terms so integrators and fleet operators can understand connection settings, reporting behaviors, and integration considerations for real world deployments.

The G06L is a compact 4G tracker optimized for motorcycles, cars, scooters and light trucks. It reports GNSS position, telemetry and alarms (ignition, SOS, movement, speeding and power cut) and can be configured via USB, GPRS or SMS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware, hardware revision and manufacturer implementation, so verify device specific details when planning deployments.

## Protocol Overview

The communication protocol used by the G06L enables the device to deliver GNSS coordinates, telemetry and alarm events to a remote server so platforms like Plaspy can provide live location, history playback and alerting. This page stays high level and does not expose proprietary packet formats or parser internals; it explains the role the protocol plays in reliable reporting and integration.

- Carries position updates and telemetry so Plaspy can map live location and history for the vehicle.
- Transports alarm and event notifications such as ignition changes, SOS triggers, movement and power-cut alerts.
- Includes device identification information to associate incoming messages with a Plaspy device record for correct asset mapping.
- Supports transport over IP so data can be forwarded from GPRS or LTE to a Plaspy endpoint for ingestion.
- Enables optional remote command and control workflows when supported by the device and enabled in Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single, shared endpoint and automatically detects the tracker protocol for most supported devices when they are configured to report to that endpoint. In practice this means you rarely need to select a protocol manually inside Plaspy if the device is correctly pointed at the Plaspy endpoint.

- Plaspy listens for device reports at d.plaspy.com and its public IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, which simplifies device configuration across models.
- Plaspy automatically detects the tracker protocol once the device starts reporting to the Plaspy endpoint.
- Typical setup requires configuring the G06L to send data via its GPRS/LTE channel to the Plaspy server address and port.
- If a device supports multiple transports or configuration channels (USB, SMS, GPRS), ensure the active data channel is set to report to d.plaspy.com on port 8888.

## Transport and Connection Context

The G06L supports IP based reporting over cellular networks and can be configured to use either UDP or TCP depending on device firmware, operator network and installer preference. Plaspy supports both transports on the shared port so connectivity choices can match local conditions without changing platform settings.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138 to reach the ingestion endpoint.
- Plaspy uses the same port for all devices, removing the need for per device port configuration in most deployments.
- Use the transport (UDP or TCP) that provides the right tradeoff for your network: UDP for lower overhead, TCP for session reliability where available.
- If cellular operator APN or firewall rules are restrictive, confirm that outbound connections to port 8888 are permitted from the device SIM.

## Protocol Compatibility Notes

- Firmware versions can alter reporting behavior and available fields; confirm firmware revision when validating compatibility.
- Hardware revisions and optional feature builds (for example, different I/O or antenna options) can change which telemetry fields are sent.
- Some implementation details are manufacturer specific; always cross reference the device datasheet and configuration guides.
- Transport selection (UDP vs TCP) is a configuration decision and can affect message delivery characteristics under poor connectivity.
- Plaspy’s automatic detection reduces manual setup steps, but correct server/port and live reporting are required for detection to succeed.
- If you plan to use SMS or USB for configuration, verify the commands and syntax with the latest CanTrack documentation before making changes.

## Why Protocol Understanding Matters

Understanding how the G06L communicates with Plaspy helps ensure successful installation, predictable reporting and quicker resolution when issues arise. Clear expectations around transport, endpoints and firmware behavior reduce integration friction and operational downtime.

- Ensures correct device server and port configuration so data reaches Plaspy without manual protocol selection.
- Helps troubleshoot reporting gaps by checking transport, signal and whether the device is pointed at d.plaspy.com on port 8888.
- Guides firmware management and OTA update planning to maintain compatibility and feature parity.
- Supports informed decisions about transport choice, reporting intervals and power management for battery backed reports.
- Aids in mapping device telemetry fields to Plaspy dashboards and alerts for accurate operational monitoring.

## Why Use Plaspy with This Protocol

Using the CanTrack G06L with Plaspy provides a low profile, feature rich tracking solution tailored for vehicle and light fleet applications. The G06L’s compact internal antenna design, backup battery for power cut reporting, ignition detection and offline storage pair well with Plaspy’s live location, historical playback and alerting capabilities to support anti theft, fleet management and insurance telematics workflows.

If you want to learn more about how Plaspy works with devices like the G06L, visit https://www.plaspy.com to explore platform features and deployment options. For the latest device specific protocol details, firmware notes and configuration commands, please verify current information on the manufacturer site https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
