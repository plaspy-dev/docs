---
slug: /coban/bn_108a/protocol
id: bn_108a-protocol
sidebar_label: Protocol
title: Coban - BN-108A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Coban BN-108A tracker with Plaspy for reliable position reporting and alarm forwarding
keywords:
  - Coban BN-108A protocol
  - Coban BN-108A GPS protocol
  - BN-108A communication protocol
  - BN-108A tracking protocol
  - Coban tracker Plaspy compatibility
  - GPS tracker protocol documentation
  - fleet tracking Coban BN-108A
  - asset tracker protocol guidance
  - Plaspy device connection
  - vehicle tracking communication
---

# Coban - BN-108A Protocol

This page provides public protocol context for using the Coban BN-108A tracker with the Plaspy platform. It describes how the device communicates in broad, non sensitive terms and explains the connection settings Plaspy exposes for receiving location and event data from BN-108A units. The BN-108A is a compact tracker with a large battery, magnetic mounting, Bluetooth induction, and multiple alarm types, and those capabilities influence what the device reports to a server.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol at the server side, while exact protocol behavior can vary with firmware version, hardware revision, or manufacturer implementation. This page focuses on the communication context that matters for integration and troubleshooting without exposing device internals. For device specific command details refer to the manufacturer documentation.

## Protocol Overview

The tracker reporting protocol is the set of behaviors the BN-108A uses to identify itself and deliver usable position, alarm, and telemetry data to a backend such as Plaspy. In integration terms the protocol determines how the device opens a connection, what events it reports, and which fields Plaspy can ingest for live view and historical playback.

- Enables the BN-108A to transmit GNSS positions and timestamps to Plaspy for live tracking and track history.
- Carries alarm and event indicators such as low battery, movement, shock, overspeed, and geofence triggers so Plaspy can generate alerts.
- Conveys telemetry such as battery status and movement state so platform dashboards and reports remain actionable.
- Supports remote functions like voice monitoring requests and SMS based controls when those features are enabled.
- Works over standard transport channels so the device can report to the Plaspy server without platform specific ports per device.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device traffic on a shared endpoint and automatically determines which tracker protocol is in use so most users do not need to select a protocol manually. When a BN-108A is configured to report to the Plaspy endpoint, the platform will match the incoming data to a known protocol profile and process location and event records appropriately.

- Plaspy uses a single server endpoint for device reporting to simplify device setup and management.
- Devices configured to report to d.plaspy.com or the server IP 54.85.159.138 will reach the Plaspy ingestion endpoint.
- All devices in Plaspy use the same port which streamlines provisioning across heterogeneous fleets.
- The platform automatically detects the tracker protocol from incoming connections when the device is pointed at the Plaspy endpoint.
- In most cases users only need to set the device server address and transport type on the device to start reporting.

## Transport and Connection Context

The BN-108A can deliver its messages over common cellular transports and can be configured to point at the Plaspy server. For connection setup the device typically offers TCP and UDP reporting options as well as SMS based control for initial provisioning or fallback.

- The device may be configured to use UDP or TCP on port 8888 depending on device settings and network reliability needs.
- Devices can be pointed to the hostname d.plaspy.com or the numeric server address 54.85.159.138 to deliver reports to Plaspy.
- Plaspy listens on port 8888 for all supported devices so the same port is used across the platform.
- TCP is commonly used when reliable delivery and session state are required while UDP can reduce overhead for frequent short reports depending on device support.
- SMS is often available for configuration and remote commands in addition to TCP/UDP reporting when cellular data is unavailable.

## Protocol Compatibility Notes

- Firmware revisions can alter reporting intervals, available event types, and command sets; verify the device firmware when validating behavior.
- Hardware revisions and regional variants may change available transports or GNSS performance; check the product identifier on the unit.
- The choice of TCP versus UDP affects delivery characteristics but not the higher level events the device reports to Plaspy.
- Remote voice monitoring and Bluetooth induction behaviors depend on device firmware and accessory configuration.
- Manufacturer configuration commands and default server settings are documented by Coban and should be referenced for exact setup steps.
- When in doubt, validate a device by directing it to the Plaspy endpoint and observing reporting behavior rather than assuming specific features.

## Why Protocol Understanding Matters

A practical understanding of the BN-108A communication protocol helps ensure reliable setup, faster troubleshooting, and better long term operation when the unit is paired with Plaspy. Knowing what the device is expected to report and how it connects reduces ambiguity during installation and when diagnosing missing data.

- Speeds initial setup by clarifying which transport and server address to configure on the device.
- Helps troubleshoot connection issues by separating network, transport, and device configuration causes.
- Improves alert tuning by matching reported events such as movement or shock to platform rules.
- Enables informed decisions about reporting cadence versus battery life when selecting device modes.
- Supports predictable fleet scale up by using the shared Plaspy endpoint and automatic protocol detection.

## Why Use Plaspy with This Protocol

Using the BN-108A with Plaspy delivers a straightforward way to turn the device's position, alarm, and telemetry streams into operational insight. The unit’s long battery life, magnetic mounting, and Bluetooth induction features make it well suited for asset installations where low maintenance and discreet mounting are priorities, while Plaspy provides the centralized ingestion, alerting, and historical tracking needed for fleet and asset management.

To learn more about how Plaspy handles device integrations and to review platform features, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware notes on the manufacturer site https://www.coban.net/.
