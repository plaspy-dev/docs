---
slug: /atrack/as500/protocol
id: as500-protocol
sidebar_label: Protocol
title: ATrack - AS500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ATrack AS500 and how it communicates with Plaspy for reliable telemetry and tracking
keywords:
  - ATrack AS500 protocol
  - ATrack AS500 GPS protocol
  - ATrack AS500 communication protocol
  - ATrack AS500 tracking protocol
  - ATrack GPS tracker Plaspy compatibility
  - AS500 telemetry integration
  - asset tracker Plaspy compatibility
  - LTE Cat M1 tracker protocol
  - AS500 Wi Fi BLE reporting
  - rugged asset tracker protocol
---

# ATrack - AS500 Protocol

This page documents the public protocol context for using the ATrack AS500 GPS tracker with Plaspy. It focuses on how the AS500 reports location, motion, and sensor telemetry in ways that Plaspy can ingest, without exposing manufacturer private implementation details. The intention is to help deploy and troubleshoot AS500 devices for real world tracking and fleet workflows while remaining aligned with publicly available information.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact on device behavior and reporting nuances can vary by firmware version, hardware revision, regional variant, or manufacturer configuration, so verify device firmware and manufacturer documentation for firmware specific details.

## Protocol Overview

The communication protocol used by the AS500 defines how the device sends identity, location, sensor and event data to a remote server so that Plaspy can provide real time tracking, alerts and historical telemetry. From a Plaspy integration perspective the protocol's role is to ensure that essential fields and event signals arrive reliably and are intelligible to Plaspy's ingestion systems.

- Provides a means for the AS500 to identify itself to the server so Plaspy can associate data with the correct asset or account.
- Transports GNSS location, motion state, tamper and sensor readings to Plaspy for real time monitoring and historical logs.
- Supports queued delivery so the AS500 can buffer events locally and resume reporting when connectivity is restored.
- Enables selectable transport options so devices can use the best available network mode for power and coverage.
- Carries telemetry that Plaspy maps into dashboards, alerts, and fleet management rules.

## How Plaspy Detects the Protocol

Plaspy accepts device connections at a shared network endpoint and automatically determines the tracker protocol based on the incoming connection and reported data. When an AS500 is pointed to the Plaspy endpoint with the correct settings, users typically do not need to manually select a protocol inside Plaspy for basic ingestion.

- Plaspy server endpoint is reachable at d.plaspy.com and the server IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- Devices configured to report to the Plaspy endpoint will be identified and associated with accounts when they present valid identity information.
- The AS500 supports common transports so standard configuration to the Plaspy endpoint is usually sufficient for automatic detection.
- If a device does not appear, confirm network settings, transport selection, and that the device is reporting to d.plaspy.com or the Plaspy server IP.

## Transport and Connection Context

Connection choices affect battery life, timeliness, and resilience. The AS500 supports common IP transports and can be directed to Plaspy using the same port that Plaspy uses for all devices. Keep the connection context focused on reachability and transport selection rather than internal protocol frames.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may be pointed to d.plaspy.com or the Plaspy server IP 54.85.159.138 for telemetry delivery.
- All devices in Plaspy use the same port which simplifies deployment and firewall rules.
- Transport selection (UDP versus TCP) influences retransmission behavior and power tradeoffs on battery powered AS500 units.
- MQTT support on the device can be used where appropriate, but standard UDP/TCP reporting to Plaspy is the common integration path.

## Protocol Compatibility Notes

- Firmware updates can change reporting intervals, available fields, or transport behavior; always confirm firmware level when validating compatibility.
- Regional variants and hardware revisions may enable or disable specific radios or features that affect what data the device sends.
- Transport selection (UDP, TCP, MQTT) should match both the AS500 configuration and any network policies for the deployment.
- Local queueing behavior varies by firmware and affects how historical events are delivered after connectivity is restored.
- Manufacturer configuration tools or ADM may be required to adjust reporting server and transport settings for Plaspy.
- Validate device behavior with manufacturer documentation and test devices on a staging Plaspy account before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the AS500 communicates with Plaspy helps ensure correct setup, efficient battery use, and predictable behavior in production. Clarity about the protocol and transport choices reduces troubleshooting time and improves confidence in telemetry integrity.

- Helps determine appropriate reporting intervals and power profiles for long battery life.
- Makes it easier to diagnose missed reports by verifying transport, endpoint, and queued delivery behavior.
- Supports network planning including firewall rules and DNS resolution for d.plaspy.com.
- Clarifies expectations for indoor positioning via Wi Fi scanning and BLE telemetry in conjunction with GNSS.
- Aids in coordinating firmware updates and configuration changes with Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Pairing the AS500 with Plaspy gives organizations a way to convert rugged, low power telemetry into actionable location and event data for operations, security, and logistics. Plaspy's shared endpoint model and automatic protocol detection reduce the setup complexity for fleets that deploy many devices and variants.

Plaspy provides centralized ingestion and mapping of AS500 telemetry so teams can build alerts, geofences, and reporting rules while benefiting from the AS500's long standby life, GNSS plus Wi Fi and BLE augmentation, and local queueing. Learn more about Plaspy and how it handles device integrations at https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify documentation on the official ATrack website https://www.atrack.com.tw/ . Protocol support and device behavior can change over time so always confirm details before large deployments.
