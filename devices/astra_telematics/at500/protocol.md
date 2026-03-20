---
slug: /astra_telematics/at500/protocol
id: at500-protocol
sidebar_label: Protocol
title: Astra Telematics - AT500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Astra Telematics AT500 integration with Plaspy servers and deployment guidance
keywords:
  - Astra Telematics AT500 protocol
  - AT500 GPS tracker Plaspy compatibility
  - AT500 communication protocol
  - Astra Telematics asset tracker protocol
  - AT500 LTE M NB IoT tracking protocol
  - Plaspy device protocol integration
  - AT500 GPS tracking with Plaspy
  - AT500 asset tracker connectivity
  - Astra Telematics AT500 telemetry protocol
  - AT500 BLE configuration Plaspy
---

# Astra Telematics - AT500 Protocol

This page provides a public overview of the communication context for using the Astra Telematics AT500 Mini Asset Tracker with Plaspy. It explains how the device reports location and telemetry to Plaspy and what role the tracker protocol plays in delivering usable data to fleet and asset management workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. The AT500 can report over cellular networks (LTE‑M, NB‑IoT or 2G fallback) and be addressed to Plaspy by pointing to d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888; Plaspy uses the same port for all supported devices and handles protocol detection server side. Exact message timing, fields, and behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The AT500 communicates with Plaspy using its device reporting protocol to send GNSS fixes, motion events, and device health telemetry over the cellular link. The protocol defines how the tracker identifies itself, encodes position and sensor data, and triggers wake and sleep cycles that affect battery life and reporting timeliness.

- Provides the mechanism for the AT500 to identify the device and deliver GNSS position and telemetry to Plaspy.
- Carries motion and status events from the device accelerometer and power management subsystem to inform alerts and wake cycles.
- Enables Plaspy to receive battery and health status so operators can monitor device condition and plan maintenance.
- Supports OTA and configuration workflows via BLE or over-the-air commands when available through manufacturer tooling and provisioning.
- Allows mix and match deployment models where compact asset trackers coexist with vehicle trackers in the same Plaspy environment.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device traffic and automatically detects the tracker protocol when the AT500 is pointed to the platform. In most cases users do not need to choose a protocol manually inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.

- Plaspy accepts device reports at d.plaspy.com and at the server IP 54.85.159.138 on port 8888.
- All devices use the same port on Plaspy, so a consistent outbound address simplifies provisioning.
- Devices can be configured to use either UDP or TCP transport depending on AT500 configuration and cellular network support.
- Automatic detection reduces the need for manual protocol selection when devices are correctly programmed to report to Plaspy.
- If a device does not appear, typical checks include verifying APN and outbound server settings, transport type, and firmware compatibility.

## Transport and Connection Context

The AT500 may use either UDP or TCP to deliver messages to Plaspy depending on the device configuration and cellular network behavior. Pointing the device to the Plaspy endpoint and using port 8888 for outbound reporting is the core connection requirement for integration with the platform.

- Devices can report to the hostname d.plaspy.com or the server IP 54.85.159.138.
- The standard reporting port for all Plaspy devices is 8888.
- Transport selection (UDP versus TCP) depends on AT500 firmware and chosen provisioning settings.
- Cellular connectivity options on the AT500 include LTE‑M, NB‑IoT and 2G fallback which affect how and when packets are delivered.
- BLE is available for local configuration and diagnostics but telemetry is forwarded to Plaspy via the cellular link.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available telemetry fields, and transport defaults; always confirm firmware behavior during rollout.
- Hardware variants and regional cellular variants may alter supported bands and network connectivity options that affect reporting reliability.
- Manufacturer-side provisioning and e‑SIM profiles can influence how easily devices connect to Plaspy endpoints in different markets.
- UDP versus TCP selection can affect delivery characteristics; choose the transport that matches your coverage and reliability needs.
- Plaspy automatically detects the protocol, but correct outbound server and APN settings on the AT500 are required for successful detection.
- Validate device behavior against the latest manufacturer documentation when planning large scale deployments.

## Why Protocol Understanding Matters

Understanding the AT500 communication protocol and connection context helps ensure reliable reporting, efficient battery use, and straightforward troubleshooting when devices are integrated with Plaspy. Clear knowledge of how the device wakes, reports, and reports status reduces integration time and improves operational confidence.

- Helps diagnose why a device might not appear in Plaspy or why reports are delayed.
- Guides configuration choices that balance reporting frequency and battery life for the AT500.
- Informs decisions about transport selection and APN provisioning for better coverage and performance.
- Supports planning for firmware updates and manufacturer variant differences in large fleets.
- Enables meaningful collaboration between field technicians, integrators, and Plaspy support when resolving connectivity issues.

## Why Use Plaspy with This Protocol

Using the AT500 with Plaspy provides compact asset visibility alongside vehicle and equipment telemetry in a single platform. The AT500’s low power design, multi network cellular support, BLE commissioning, and internal e‑SIM make it a practical option for dense asset deployments where discreet placement and long battery life are priorities.

If you want to learn more about how Plaspy can integrate AT500 trackers into your tracking and fleet workflows visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol and firmware information on the manufacturer site https://astratelematics.com/ before large scale rollouts.
