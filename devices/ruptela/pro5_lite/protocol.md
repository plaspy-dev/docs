---
slug: /ruptela/pro5_lite/protocol
id: pro5_lite-protocol
sidebar_label: Protocol
title: Ruptela - Pro5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ruptela Pro5 Lite and how the tracker communicates with Plaspy for secure real time tracking
keywords:
  - Ruptela Pro5 Lite protocol
  - Ruptela Pro5 Lite GPS protocol
  - Ruptela Pro5 Lite Plaspy compatibility
  - Ruptela Pro5 Lite communication protocol
  - Ruptela Pro5 Lite tracking protocol
  - Pro5 Lite telematics protocol
  - GPS tracker Plaspy integration
  - fleet tracking Pro5 Lite
  - vehicle telematics Pro5 Lite
  - Plaspy compatible trackers
---

# Ruptela - Pro5 Lite Protocol

This page summarizes the public protocol context for using the Ruptela Pro5 Lite tracker with Plaspy. It focuses on how the device communicates with Plaspy in practical, non sensitive terms so fleet administrators and integrators can understand connection requirements, transport options, and the role of the reporting protocol in a Plaspy deployment.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page is intended as an operational overview rather than a full protocol specification.

## Protocol Overview

The Pro5 Lite communication protocol is the vehicle by which GNSS fixes, CAN telemetry, sensor events, and device status are delivered to the Plaspy platform. In general terms the protocol handles identification, session establishment, telemetry delivery, and optional security measures so Plaspy can present usable vehicle data and events to operators.

- Enables the tracker to report GNSS position, accelerometer events, and CAN bus telemetry to Plaspy for live monitoring and historical storage.
- Carries device identity and state information so Plaspy can associate incoming messages with the correct asset and configuration.
- Supports secure transport options present on the device such as TLS 1.2 when available to protect data in transit.
- Provides the mechanism for the device to send event notifications like tamper, jamming, or input changes that drive alerts and automations.
- Acts as the bridge between onboard telemetry (GNSS, CAN, BLE sensors, digital I O) and Plaspy dashboards and reporting.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and port and uses the content of incoming sessions to identify the tracker protocol automatically. In normal setups the device is pointed to the Plaspy endpoint and no manual protocol selection is required inside the platform.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the public server address used for ingestion.
- Plaspy server IP is 54.85.159.138 and is reachable as an alternate target where DNS is not used or available.
- The platform listens on a single port for devices, and Plaspy uses the same port for all supported trackers.
- Plaspy listens on port 8888 for device connections and uses automatic detection to determine the tracker protocol.
- When a Pro5 Lite is configured to report to Plaspy it typically requires pointing the device to d.plaspy.com or the IP above and using the agreed transport protocol.

## Transport and Connection Context

Connection choices on the Pro5 Lite determine how the tracker sends data to Plaspy. The device supports commonly used transports and can be configured to report to the Plaspy endpoint according to operational needs and network availability.

- The device may be configured using UDP or TCP on port 8888 depending on the device configuration and network conditions.
- Pointing the tracker at d.plaspy.com is the recommended DNS based option; 54.85.159.138 is the equivalent server IP address when DNS is not preferred.
- All devices in Plaspy use the same port which simplifies firewall and network configuration on the platform side.
- Transport selection can affect delivery characteristics such as retransmission behavior and session persistence, so choose UDP or TCP based on your connectivity profile.
- Devices that support TLS 1.2 can use secure transport channels to protect telemetry between the tracker and the Plaspy ingestion endpoint.

## Protocol Compatibility Notes

- Firmware revisions can introduce or remove specific telemetry fields and capabilities; confirm the Pro5 Lite firmware level when validating behavior.
- Hardware variants and regional LTE models may affect available transports and radio behavior, so note the device SKU for compatibility checks.
- Manufacturer configuration options such as transport selection (UDP versus TCP) and secure transport enablement should be set to match Plaspy connection expectations.
- BLE, CAN, and accessory features may be present or absent depending on model variants and provisioning; map those features to Plaspy requirements before mass deployment.
- Confirm that device provisioning points to d.plaspy.com or 54.85.159.138 using port 8888 to ensure automatic detection and proper message delivery.
- Always validate compatibility against the latest manufacturer documentation when planning firmware updates or large scale rollouts.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure smooth onboarding, accurate telemetry ingestion, and reliable long term operation when using Pro5 Lite devices with Plaspy. Knowing how the tracker reports, what transports it can use, and how Plaspy detects incoming messages reduces troubleshooting time and supports correct configuration.

- Speeds initial device provisioning by ensuring devices are pointed to the correct Plaspy endpoint and port.
- Reduces downtime by clarifying whether issues are transport, configuration, or firmware related during troubleshooting.
- Helps map device capabilities such as CAN metrics and BLE sensors to Plaspy features and dashboards.
- Supports security planning by confirming whether secure transport like TLS 1.2 is enabled and required.
- Aids in lifecycle planning by highlighting the need to test firmware updates against Plaspy ingestion before fleetwide deployment.

## Why Use Plaspy with This Protocol

Using the Ruptela Pro5 Lite with Plaspy gives fleet operators a compact, capable tracker paired with a platform that automatically ingests and interprets the device telemetry. The combination supports real time vehicle tracking, CAN based diagnostics, BLE accessory data, and event driven alerts that are useful for fleet efficiency, safety, and asset protection.

If you want to learn more about how Plaspy works with compatible trackers and to review platform features, visit https://www.plaspy.com. For the most current, device specific protocol details, firmware notes, and region variants consult the manufacturer documentation at https://ruptela.com/ as implementations and firmware behavior can change over time.
