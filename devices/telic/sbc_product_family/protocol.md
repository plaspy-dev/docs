---
slug: /telic/sbc_product_family/protocol
id: sbc_product_family-protocol
sidebar_label: Protocol
title: Telic - SBC product family Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Telic SBC product family and how these trackers communicate with Plaspy for reliable fleet telematics
keywords:
  - Telic SBC product family protocol
  - Telic SBC GPS protocol
  - Telic SBC Plaspy compatibility
  - SBC product family tracking protocol
  - Telic telematics protocol
  - SBC CAN 4G protocol
  - SBC AVL 4G protocol
  - GPS tracker communication
  - fleet tracking protocol
  - vehicle telemetry protocol
---

# Telic - SBC product family Protocol

This page covers the public protocol context for using the Telic SBC product family with Plaspy. It describes how these rugged telematics units generally communicate with a cloud endpoint, what role the device protocol plays in successful integration, and how Plaspy ingests device telemetry for tracking and fleet management. The content here focuses on public, non sensitive aspects of communication and is meant to help with planning and troubleshooting Plaspy integrations.

The SBC product family (including SBC3 CAN 4G and SBC AVL 4G) ships as Plaspy compatible and is designed for LTE Cat M1 connectivity and multiple wired interfaces such as CAN bus, 1-Wire, and RS232. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For model specific packet details consult Telic documentation and the device datasheet.

## Protocol Overview

The communication protocol used by SBC devices defines how the tracker reports location, telemetry, and status to a cloud endpoint and how the cloud can acknowledge or command the device when supported. In the context of Plaspy, the protocol surfaces the essential elements needed for mapping device reports into positions, telemetry channels, and event rules without exposing vendor internals here.

- Enables secure and reliable transmission of location and telemetry from the SBC device to the cloud endpoint.
- Carries identification and status information that lets Plaspy associate each incoming stream with a specific device and fleet asset.
- Transports CAN, serial, and sensor readings so Plaspy can populate dashboards, alerts, and historical logs.
- Supports both periodic location updates and event driven messages for alarms, ignition changes, and sensor thresholds.
- Allows firmware dependent features such as remote configuration or diagnostics when the manufacturer exposes those capabilities.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when an SBC device is properly configured to report to the Plaspy endpoint. This reduces manual configuration inside the platform and helps devices begin reporting with minimal operator intervention. Detection relies on observing incoming reports at the shared Plaspy endpoint rather than requiring the user to select a protocol in most cases.

- Plaspy listens for device traffic on a single shared server endpoint to simplify setup.
- The Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138 for direct configuration references.
- Plaspy uses port 8888 for all supported devices so you do not need device specific ports.
- When the device is pointed at the Plaspy endpoint and sends reports, Plaspy will automatically identify the compatible protocol variant.
- Users generally only need to set the device reporting host and transport; Plaspy will ingest and map the incoming data.

## Transport and Connection Context

SBC devices can be configured to use either of the common transports depending on model capabilities and deployment needs. Use of TCP or UDP and the shared Plaspy endpoint are the primary connection considerations when putting SBC units into production with Plaspy.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on your provisioning process.
- The device may be configured using UDP or TCP on port 8888; choose the transport supported by your device firmware and network environment.
- All devices in Plaspy use the same port, 8888, which standardizes firewall and network rules for fleet deployments.
- Select the transport (UDP or TCP) that matches the device capability and the reliability requirements of your deployment.
- Ensure mobile operator settings and APN profiles allow outbound connections to the Plaspy endpoint over the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions can add or change telemetry fields and message behavior; always verify which firmware your device is running when assessing compatibility.
- Hardware variants within the SBC family (for example models with different interface sets) may expose different telemetry channels or sensors.
- Manufacturer-side configuration options can alter which network transport is available or which host entries the device supports.
- Transport selection (UDP vs TCP) may affect message delivery semantics and should be chosen according to application needs and network reliability.
- For advanced features such as remote configuration or diagnostics confirm support in the device firmware and the Telic documentation.
- Validate compatibility against Telic product datasheets and your Plaspy device configuration guide before large scale rollouts.

## Why Protocol Understanding Matters

Knowing how the SBC reporting protocol operates helps ensure a smooth deployment, effective troubleshooting, and predictable long term behavior when devices interact with Plaspy. Clarity about transport choices, identification fields, and telemetry channels reduces integration time and helps operators interpret event and location data correctly.

- Simplifies initial setup by matching device reporting settings to the Plaspy endpoint and port.
- Speeds troubleshooting when position updates or telemetry fields do not appear as expected.
- Helps design network rules and firewall policies because Plaspy uses a single, known endpoint and port.
- Enables confident validation of firmware changes or device swaps across a fleet by monitoring consistent message fields.
- Supports planning for operational features such as frequent polling, alarm handling, or telemetry aggregation.

## Why Use Plaspy with This Protocol

Using the SBC product family with Plaspy brings rugged, IoT optimized hardware together with a cloud platform that ingests vehicle position and telemetry for operational visibility. Organizations gain reliable location updates, integration of CAN and sensor data, and a standardized endpoint that reduces per-device configuration overhead. That combination is useful for fleet managers, trailer telematics, anti-theft workflows, and telemetry driven automation.

To learn more about Plaspy capabilities and how your Telic SBC devices integrate with the platform visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer implementation notes verify information on the official Telic website https://www.telic.de as protocol support and firmware features can change over time.
