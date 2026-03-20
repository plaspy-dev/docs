---
slug: /itriangle/bharat101_plus_4g/protocol
id: bharat101_plus_4g-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Plus 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the iTriangle Bharat101 Plus 4G GPS tracker and how it communicates with Plaspy for real time fleet tracking
keywords:
  - iTriangle Bharat101 Plus 4G protocol
  - Bharat101 Plus 4G GPS protocol
  - iTriangle GPS tracker protocol
  - Bharat101 Plus Plaspy compatibility
  - GPS tracker communication protocol
  - fleet tracking protocol iTriangle
  - AIS 140 tracker protocol overview
  - 4G GPS tracker protocol Plaspy
  - vehicle telemetry protocol iTriangle
  - tracker protocol detection Plaspy
---

# iTriangle - Bharat101 Plus 4G Protocol

This page provides a public, high level overview of the communication protocol context for the iTriangle Bharat101 Plus 4G when used with Plaspy. It explains how the device exchanges location and telemetry information in a way that is useful for system integrators, fleet managers, and technicians setting up Plaspy-compatible tracking. The content focuses on public facts about connectivity and protocol behavior without exposing private or implementation specific details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For Plaspy integration the platform endpoint is d.plaspy.com and the server IP 54.85.159.138, using port 8888. The device may be configured using UDP or TCP on port 8888. Exact protocol behavior and feature availability can vary with firmware version, hardware revision, and manufacturer implementation, so verify device specific details against official manufacturer documentation when needed.

## Protocol Overview

The Bharat101 Plus 4G reporting protocol is the mechanism that delivers GNSS position, event signals, and sensor telemetry from the device to Plaspy so that fleet operators can monitor assets in near real time. At a high level the protocol governs how the tracker identifies itself, reports location and status, and signals alarms or events to the cloud endpoint.

- Enables delivery of GNSS position and multi sensor telemetry to Plaspy for live dashboards and historical replay.
- Carries event notifications such as ignition state, panic input, tamper alerts, and remote immobilizer status.
- Supports periodic reporting and on‑event transmissions so data is available when connectivity and policy require it.
- Facilitates remote device management signals sent from a server to the device when supported by firmware.
- Works over standard transport channels to ensure connectivity across 4G networks with fallback options.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically determines the correct handling for each tracker model and firmware variant. When a properly configured device reports to the Plaspy endpoint, the platform matches incoming traffic to the appropriate protocol handling without requiring manual protocol selection by the user.

- Plaspy uses the single platform endpoint d.plaspy.com and server IP 54.85.159.138 on port 8888 for device connections.
- All devices supported by Plaspy use the same port, simplifying device configuration.
- Plaspy automatically detects the tracker protocol when the device connects and begins reporting.
- Because detection is automatic, most users do not need to choose a protocol setting inside Plaspy when the device is correctly pointed at the Plaspy endpoint.
- Detection handles common transport variants and basic device identification characteristics supplied by the tracker.

## Transport and Connection Context

Transport selection and endpoint configuration are primary concerns when pointing a Bharat101 Plus 4G at Plaspy. The tracker can be set to report over either UDP or TCP depending on device configuration, network conditions, and firmware capabilities. For Plaspy integrations the standard connection endpoint and port are consistent across devices.

- Devices may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- The device can point to the domain d.plaspy.com or directly to the server IP 54.85.159.138 as the reporting endpoint.
- Plaspy listens on port 8888 for all supported devices, removing the need to expose multiple service ports.
- Transport choice (UDP vs TCP) may affect delivery behavior under poor network conditions; choose the one that aligns with device firmware recommendations.
- Ensure APN and cellular configuration on the device are correct so it can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change available features and reporting behavior; verify the device firmware level when diagnosing integration issues.
- Hardware revisions or optional modules (for example BLE accessories or external sensor interfaces) can introduce differences in telemetry availability.
- Some features such as remote immobilizer control or advanced sensor integrations depend on both firmware capability and proper physical wiring or sensor configuration.
- Transport selection between TCP and UDP can be made on the device; consult manufacturer configuration guides for recommended settings.
- Plaspy’s automatic detection covers many common variants, but confirm device reporting to the Plaspy endpoint during provisioning.
- Always cross reference manufacturer release notes for device specific protocol changes or new firmware behavior.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy improves setup success, reduces troubleshooting time, and helps maintain reliable tracking over the device lifecycle. Even with automatic detection, knowledge of transport, events, and common failure modes supports effective operations.

- Faster provisioning by verifying APN, transport mode, and that the device targets d.plaspy.com or 54.85.159.138 on port 8888.
- Clearer troubleshooting when telemetry or events are missing, by focusing on connectivity, firmware state, and input wiring for alarms.
- Better planning for feature use such as immobilizer control, BLE sensor pairing, and offline data synchronization behavior.
- Informed decisions about firmware updates and compatibility with Plaspy features before deploying at scale.
- Improved operational reliability through proper device configuration, testing, and periodic validation.

## Why Use Plaspy with This Protocol

Using the Bharat101 Plus 4G with Plaspy gives organizations a practical path to combine AIS 140 certified hardware with a cloud platform that ingests location and telemetry for operational visibility. Plaspy’s ingestion of position, event, and sensor data enables route replay, alerting, and telemetry dashboards that help fleets manage safety, compliance, and anti‑theft workflows.

If you want to learn more about how Plaspy handles device integrations and platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol descriptions, firmware notes, and installation guidance for the Bharat101 Plus 4G, please confirm details with the manufacturer at https://www.itriangle.net/. Protocol support, firmware behavior, and device implementation can change over time, so always verify the latest information with the official manufacturer documentation.
