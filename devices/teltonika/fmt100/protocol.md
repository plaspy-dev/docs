---
slug: /teltonika/fmt100/protocol
id: fmt100-protocol
sidebar_label: Protocol
title: Teltonika - FMT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMT100 and how it communicates with Plaspy for device integration and fleet tracking
keywords:
  - Teltonika FMT100 protocol
  - FMT100 GPS protocol
  - Teltonika GPS tracker Plaspy
  - FMT100 communication
  - FMT100 tracking protocol
  - GPS tracker protocol compatibility
  - Plaspy device compatibility
  - fleet tracking Teltonika
  - Bluetooth LE tracker FMT100
  - FMT100 protocol integration
---

# Teltonika - FMT100 Protocol

This page provides a public protocol overview for using the Teltonika FMT100 with Plaspy. It focuses on the communication context needed for device integration, how the tracker reports location and event data, and the practical details that matter when connecting the FMT100 into a Plaspy-managed fleet. The FMT100 is a compact, battery-mounted GPS tracker with IP65 protection, a 3-axis accelerometer, Bluetooth LE sensor support, and quad-band 2G connectivity that is commonly deployed for rapid and rugged fleet rollouts.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. In Plaspy deployments the FMT100 typically points its reporting endpoint to the Plaspy server, and the platform uses that shared endpoint and port to receive and interpret incoming messages. Before wide deployment, verify device firmware and any optional bundle I/O to ensure the expected telemetry and events are produced.

## Protocol Overview

The communication protocol for the FMT100 defines how the device identifies itself, transmits position and sensor data, and reports events such as accelerometer alerts and Bluetooth sensor readings. This page avoids low level packet detail and instead explains the practical role of the protocol when integrating the device with Plaspy.

- Enables the FMT100 to send periodic and event-driven location updates to the Plaspy endpoint for live tracking and historical playback.
- Carries accelerometer driven events and crash traces so Plaspy can trigger alerts and store incident data for review.
- Forwards Bluetooth LE sensor readings from paired beacons and sensors so environmental telemetry appears in Plaspy dashboards.
- Lets the device identify itself to the server so Plaspy can associate incoming messages with a specific asset or vehicle record.
- Works over standard network transports supported by the device so installers can choose UDP or TCP according to coverage and reliability needs.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared inbound endpoint and automatically detects the tracker protocol based on the incoming connection and payload characteristics. In most cases, if the FMT100 is configured to report to the Plaspy address and port, no manual protocol selection is required in the platform.

- Plaspy uses the shared server domain d.plaspy.com for device reporting and also accepts connections to the server IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and fleet scale rollouts.
- The Plaspy listening port for devices is 8888 and Plaspy will accept device reports on that port.
- Plaspy automatically detects the tracker protocol so installers typically do not need to pick a protocol inside the Plaspy interface.
- Proper device configuration to point at d.plaspy.com or 54.85.159.138 is the main requirement to begin automatic detection and onboarding.

## Transport and Connection Context

The FMT100 can be set to use common transports for sending data to Plaspy. Transport selection influences delivery behavior and may be dictated by network conditions, firmware options, or installer preference. Keep connection settings consistent across a deployment to simplify troubleshooting.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to d.plaspy.com or 54.85.159.138 as the Plaspy reporting endpoint.
- Plaspy listens on port 8888 for incoming device reports; this same port is used for all supported devices.
- UDP is often used for minimal overhead and lower latency, while TCP can provide more reliable delivery in some environments; verify the tracker bundle and firmware for available options.
- Network routing, firewalls, and mobile operator restrictions can impact connectivity; ensure outbound device traffic to the Plaspy endpoint and port is allowed.

## Protocol Compatibility Notes

- Firmware differences between device versions can change message attributes, available features, and event reporting behavior.
- Hardware revisions or bundle options may add or omit certain I/O and sensors; confirm the specific order code or kit for required features.
- Transport selection (UDP versus TCP) should be validated for your coverage area and operator network to ensure consistent reporting.
- Manufacturer-side settings such as reporting intervals, event thresholds, and BLE pairing behavior are usually configurable and affect how data appears in Plaspy.
- Always validate compatibility and feature expectations against Teltonika documentation and release notes for the FMT100.
- When integrating many devices, perform a small pilot to confirm behavior before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the FMT100 communicates helps installers and operators get reliable data into Plaspy, troubleshoot connectivity issues, and plan maintenance and scaling. A clear protocol context reduces onboarding time and helps align device configuration with operational requirements.

- Ensures correct endpoint, transport, and port settings so devices reliably reach the Plaspy server.
- Helps diagnose connectivity and reporting gaps by narrowing whether an issue is network, device configuration, or firmware related.
- Informs decisions about reporting frequency, battery life trade offs, and event threshold configuration.
- Supports correct interpretation of accelerometer events and Bluetooth LE sensor telemetry within Plaspy workflows.
- Reduces deployment time by clarifying what to check on the tracker and in the network when messages are not arriving.

## Why Use Plaspy with This Protocol

Using the Teltonika FMT100 with Plaspy delivers a practical combination of rugged, battery-mounted tracking hardware and a fleet platform that centralizes location, event, and sensor data. The FMT100’s accelerometer and Bluetooth LE sensor support expand the kinds of events and telemetry Plaspy can consume, which helps fleets implement crash awareness, environmental monitoring, and rapid deployment programs without extensive wiring or installation time.

To learn more about Plaspy and platform features for device management, reporting, and alerts visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and any EOL or replacement guidance verify information on the manufacturer website https://www.teltonika-gps.com/ as firmware and implementation details can change over time.
