---
slug: /atrack/al300/protocol
id: al300-protocol
sidebar_label: Protocol
title: ATrack - AL300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating the ATrack AL300 GPS tracker with Plaspy using shared connection settings and transport options
keywords:
  - ATrack AL300 protocol
  - AL300 GPS protocol
  - AL300 Plaspy compatibility
  - ATrack GPS tracker protocol
  - AL300 communication protocol
  - AL300 tracking protocol
  - AL300 telemetry integration
  - AL300 UDP TCP MQTT
  - AL300 fleet tracking
  - ATrack AL300 integration
---

# ATrack - AL300 Protocol

This page documents the public protocol context for using the ATrack AL300 GPS tracker with Plaspy. It focuses on how the AL300 can report location, telemetry, and events to Plaspy without exposing private implementation details. The goal is to help technical users and integrators understand the communication role the AL300 plays when paired with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, regional variant, and manufacturer implementation, so this page provides general, non-sensitive guidance while encouraging verification with the manufacturer for firmware specific details.

## Protocol Overview

The AL300 can transmit GNSS position, vehicle telemetry and event data to backend servers using standard transport options. In practical terms, the tracker protocol defines how the device establishes a session to Plaspy, identifies itself, and delivers location and sensor data that Plaspy ingests for mapping, alerts, and reporting.

- Enables the AL300 to report GNSS coordinates, timestamps and motion or ignition events to Plaspy.
- Carries optional vehicle telemetry such as CAN Bus parameters and BLE sensor readings when those interfaces are present.
- Provides a transport-agnostic layer so data can be sent via UDP, TCP, MQTT or SMS over IMS depending on the deployed device configuration.
- Ensures Plaspy can map incoming messages to a device identity so location and events are associated to the correct asset.
- Supports queued logging and deferred uploads so data buffered during coverage gaps can be delivered to Plaspy when connectivity resumes.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and applies automatic protocol detection so most properly configured devices do not require manual protocol selection inside the platform. This detection is intended to simplify onboarding across many tracker models and regional variants.

- Plaspy exposes a single public endpoint for device traffic at d.plaspy.com and accepts direct connections to 54.85.159.138.
- Plaspy listens on port 8888 for device reports and uses this same port for all supported devices.
- Devices can be configured to use UDP or TCP to report to the Plaspy endpoint depending on device capability and network conditions.
- When a device is configured to point to the Plaspy endpoint, Plaspy will attempt to identify the device protocol automatically so manual selection is usually unnecessary.
- Correct device configuration and stable network connectivity help the automatic detection process and reduce onboarding friction.

## Transport and Connection Context

The AL300 supports multiple transport options and regional cellular variants. Connection context covers how the device reaches Plaspy and which transport to choose based on deployment needs and device firmware capabilities.

- The AL300 can be configured to send data to Plaspy via UDP or TCP on port 8888 depending on the specific device configuration.
- Devices may point to the DNS name d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 when network setups require an IP.
- Plaspy uses the same port 8888 across all devices to simplify firewall and network configuration for fleets.
- The tracker also supports MQTT or SMS over IMS as alternative transports where those options are enabled and appropriate for the deployment.
- Transport choice can affect delivery guarantees, battery behavior, and network usage depending on firmware and carrier constraints.

## Protocol Compatibility Notes

- AL300 is available in regional variants such as AL300‑MG, AL300‑MX, and AL300‑LE; firmware and cellular banding differences can affect available transports and behavior.
- Firmware revisions may add, change, or deprecate protocol features; always confirm the device firmware version and release notes when troubleshooting.
- Optional interfaces like CAN Bus and BLE extend telemetry but require appropriate configuration on the device and in Plaspy to map incoming values to the correct data fields.
- Transport selection (UDP, TCP, MQTT, SMS over IMS) should match the device capability and carrier support for the chosen variant and region.
- Network-level settings such as APN, DNS resolution, and SIM provisioning can affect connectivity to d.plaspy.com or the Plaspy IP address.
- Validate device settings against the official manufacturer documentation and test a few devices before mass deployment to ensure consistent behavior.

## Why Protocol Understanding Matters

Knowing how the AL300 communicates with Plaspy reduces onboarding time and improves operational reliability. A clear grasp of the communication context helps with initial setup, troubleshooting intermittent issues, and planning firmware or network changes.

- Helps ensure devices are correctly configured to report to d.plaspy.com or the Plaspy IP so automatic detection can succeed.
- Aids troubleshooting by narrowing potential issues to transport choice, APN and SIM provisioning, or firmware differences.
- Supports planning for network capacity, battery usage, and message frequency based on the selected transport and device settings.
- Enables accurate mapping of CAN and BLE telemetry fields into Plaspy dashboards and reports when those interfaces are used.
- Reduces deployment risk by encouraging validation of a small pilot group before scaling to a full fleet.

## Why Use Plaspy with This Protocol

Using the AL300 with Plaspy gives organizations a practical path to capture ruggedized GNSS location, vehicle telemetry and sensor data in a single fleet management platform. Plaspy’s shared endpoint approach and automatic protocol detection simplify onboarding for mixed-device fleets and reduce the need for device-by-device platform configuration.

To learn more about Plaspy and how it works with devices like the AL300, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revision information, verify with the manufacturer at https://www.atrack.com.tw/ since protocol support and firmware behavior can change over time.
