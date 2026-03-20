---
slug: /cantrack/g07l/protocol
id: g07l-protocol
sidebar_label: Protocol
title: CanTrack - G07L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for CanTrack G07L and how the tracker communicates with Plaspy for reliable fleet tracking and telemetry
keywords:
  - CanTrack G07L protocol
  - CanTrack G07L GPS protocol
  - CanTrack G07L protocol Plaspy
  - G07L communication protocol
  - G07L tracking protocol
  - CanTrack G07L compatibility
  - G07L fleet tracking
  - vehicle tracker protocol
  - CanTrack GPS protocol
  - Plaspy device protocol
---

# CanTrack - G07L Protocol

This page summarizes the public protocol context for using the CanTrack G07L tracker with the Plaspy platform. It focuses on how the device reports location, status, and events to Plaspy and what parts of the communication setup are important for integration, troubleshooting, and deployment. The intent is to explain the communication role without exposing sensitive implementation specifics.

The G07L is a hard wired 4G tracker built on a SIMCom LTE Cat 1 module and AT6558R chipset and is optimized for Plaspy integration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact telemetry behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always validate device-specific behavior with the manufacturer when necessary.

## Protocol Overview

At a high level, the G07L's communication protocol is the set of rules and message flows that let the device transmit GNSS fixes, status signals, alarms, and buffered records to a backend such as Plaspy. The protocol governs when the tracker reports, which events trigger uploads, and how the device is addressed for configuration or OTA updates.

- Enables transmission of GNSS position fixes and telemetry so Plaspy can display live location and history.
- Carries status and event information such as ignition state, movement and vibration alarms, and power-cut alerts.
- Supports offline buffering so stored records are uploaded to Plaspy when connectivity is restored.
- Allows remote configuration and firmware updates through platform commands or over-the-air methods when supported.
- Provides the identification fields and session behavior needed for Plaspy to associate incoming data with the correct device and account.

## How Plaspy Detects the Protocol

Plaspy is built to receive telemetry from a wide range of trackers and uses a unified endpoint and port for ingestion. When the G07L is configured to report to Plaspy, the platform will accept the device connection and automatically determine the correct protocol handling, so most users do not need to manually select a protocol in the platform.

- Plaspy's public ingestion endpoint is d.plaspy.com and the platform is also reachable at 54.85.159.138 for direct IP configuration.
- All devices configured to report to Plaspy use the same port, 8888, simplifying device setup.
- The G07L may be configured to use either UDP or TCP on port 8888 depending on device settings and network conditions.
- With the device pointing to the Plaspy endpoint, the platform ingests telemetry and maps it to the associated device record automatically.
- Manual protocol selection inside Plaspy is typically unnecessary if the tracker is correctly set to report to the Plaspy endpoint and port.

## Transport and Connection Context

Connection and transport choices affect reliability, power use, and how the device behaves on cellular networks. The G07L supports modern cellular connectivity and may switch transports based on configuration and network availability.

- The device can use TCP or UDP transport to communicate with Plaspy; both are supported when configured to the Plaspy endpoint.
- Configure the tracker to point at d.plaspy.com or directly to 54.85.159.138 when an IP address is required by the device configuration method.
- Plaspy listens on port 8888 for all supported devices, so the same port value applies across trackers.
- Transport choice (UDP versus TCP) can affect delivery guarantees and reconnection behavior but is selectable on device configuration.
- Use stable cellular signal and correct APN settings on the SIM to ensure consistent connectivity and timely uploads to Plaspy.

## Protocol Compatibility Notes

- Firmware variations can change reporting intervals, event triggers, and available remote commands; confirm firmware behavior for a given unit.
- Hardware revisions or regional variants (for example differing LTE band support) can influence connectivity and therefore protocol behavior in practice.
- Transport selection (UDP vs TCP) is a configurable factor and may need to be matched to carrier performance or specific deployment constraints.
- Offline buffering capacity and upload logic can differ by firmware; the G07L provides onboard storage for deferred upload but behavior may vary by build.
- Manufacturer-provided configuration paths such as USB, SMS, or GPRS commands provide alternative ways to set the Plaspy endpoint when needed.
- Always validate compatibility and recommended settings against the latest manufacturer documentation for the specific serial number or batch.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure devices report reliably, events are captured accurately, and maintenance tasks like configuration and firmware updates are performed with confidence. Awareness of protocol-level behavior reduces setup time and improves operational uptime.

- Helps diagnose why a device is not appearing in Plaspy or reporting at expected intervals.
- Clarifies how event triggers such as movement, ignition, or power loss are transmitted to the platform.
- Informs decisions about transport selection and APN configuration for cellular connectivity.
- Guides expectations around offline buffering, delayed uploads, and data reconciliation after outages.
- Supports better planning for firmware updates and field maintenance by knowing which configuration channels are available.

## Why Use Plaspy with This Protocol

Using the CanTrack G07L with Plaspy gives fleet operators and service providers a practical, integrated path to real-time visibility, event-driven alerts, and historical reporting. The combination of robust cellular connectivity, movement and ignition telemetry, and offline buffering makes the G07L a useful device for mixed fleets that require dependable position tracking and alarm workflows.

To learn more about how Plaspy can work with CanTrack devices and supported trackers in general, visit https://www.plaspy.com. For the most current, device specific protocol details, firmware behavior, and hardware variants consult the manufacturer at https://www.cantrackgps.com/. Protocol support and firmware behavior can change over time, so verifying the latest information with CanTrack is recommended before deployment.
