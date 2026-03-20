---
slug: /careu/ua1/protocol
id: ua1-protocol
sidebar_label: Protocol
title: CAREU - UA1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU UA1 GPS tracker and how it communicates with Plaspy for asset and fleet telemetry
keywords:
  - CAREU UA1 protocol
  - CAREU UA1 GPS protocol
  - CAREU UA1 communication protocol
  - CAREU UA1 tracking protocol
  - CAREU UA1 Plaspy compatibility
  - CAREU GPS tracker protocol
  - UA1 asset tracker protocol
  - UA1 Plaspy integration
  - GPS tracker protocol Plaspy
  - asset tracking UA1
---

# CAREU - UA1 Protocol

This page provides a public, high level view of the CAREU UA1 device protocol context for use with Plaspy. It explains how the UA1 typically communicates location, motion and telemetry to Plaspy and what to consider when configuring device reporting for reliable ingestion into Plaspy-powered fleet and asset monitoring workflows.

Plaspy uses shared connection settings across its supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation, so this page focuses on public, implementation‑agnostic details useful for setup and troubleshooting.

## Protocol Overview

The communication protocol implemented on the UA1 defines how GNSS positions, accelerometer events, tamper alerts and optional sensor telemetry are packaged and transmitted to a remote server. For integration with Plaspy the protocol's role is to ensure the device can identify itself, report valid location and event data, and support optional device management functions over cellular links and auxiliary channels.

- Enables reliable delivery of periodic or event driven GNSS location reports to the backend.
- Transfers accelerometer based movement and tamper events so Plaspy can generate alerts and triggers.
- Carries optional sensor and BLE telemetry for environmental or cargo monitoring use cases.
- Supports device identification and heartbeat reporting so Plaspy can correlate data to the correct asset record.
- May expose remote management channels for firmware updates, configuration or diagnostics depending on device settings and manufacturer services.

## How Plaspy Detects the Protocol

Plaspy exposes a single shared endpoint and port for device reporting and automatically detects the tracker protocol when a device connects and begins sending data. In most deployments you do not need to manually choose a protocol inside Plaspy provided the device is configured to report to the Plaspy address and port.

- Plaspy server domain for device reporting is d.plaspy.com which resolves to the public ingestion endpoint.
- Plaspy server IP is 54.85.159.138 and can be used in device configuration where DNS is restricted.
- Plaspy listens on port 8888 and all supported devices use the same port for reporting.
- Plaspy automatically identifies the tracker protocol on incoming connections so manual selection is often unnecessary.
- If a device is properly configured to send to the Plaspy endpoint, the platform will ingest location and telemetry according to the detected protocol.

## Transport and Connection Context

Connection transport and endpoint configuration are essential for reliable delivery. The UA1 supports multiple cellular transport methods and auxiliary channels; for Plaspy integration the device should be pointed at the shared Plaspy endpoint and port using an available transport supported by the device.

- The UA1 may be configured to report to Plaspy using UDP or TCP on port 8888 depending on device support and provisioning.
- Devices may be pointed to the domain d.plaspy.com or directly to the IP address 54.85.159.138 when DNS is not available or preferred.
- All devices supported by Plaspy use the same ingestion port 8888 which simplifies device provisioning across large fleets.
- Where available, the UA1 can also use alternate channels such as FTP or SMS for firmware delivery or in restricted network conditions, while core location reporting is typically via the primary cellular data path.
- Ensure cellular APN and transport selection on the device match your carrier and deployment needs to maintain consistent connectivity.

## Protocol Compatibility Notes

- UA1 is compatible with Plaspy for location and telemetry reporting, but actual behavior depends on the device firmware and regional hardware variants.
- Firmware updates can change reporting intervals, available telemetry fields and transport preferences; verify firmware notes when troubleshooting.
- Hardware revisions or SKUs intended for different regions may expose different radio bands or fallback behaviors that affect connectivity and reporting reliability.
- Selecting UDP versus TCP in device settings can affect delivery characteristics; choose the transport that matches your network and the device firmware guidance.
- Manufacturer configuration tools such as Bluetooth provisioning or SMS commands can be used to point devices at the Plaspy endpoint and port.
- Always validate a representative device in your deployment environment to confirm reports arrive at Plaspy as expected before large scale rollout.

## Why Protocol Understanding Matters

A basic understanding of the tracker communication protocol helps ensure consistent setup, efficient troubleshooting and predictable long term behavior when integrating UA1 devices with Plaspy. Knowing how and when the device reports reduces integration friction and supports better operational monitoring.

- Helps verify that devices are correctly addressing the Plaspy endpoint and using the intended transport.
- Makes it easier to interpret missing or delayed reports during connectivity or battery conservation modes.
- Supports decisions about reporting intervals and event thresholds that balance battery life and tracking fidelity.
- Improves coordination with field technicians when provisioning devices via Bluetooth or when applying firmware updates.
- Enables practical validation steps prior to wide scale deployment so Plaspy receives meaningful telemetry from day one.

## Why Use Plaspy with This Protocol

Using the CAREU UA1 with Plaspy provides organizations a low power, durable tracking option for long term asset monitoring and container or cargo visibility. Plaspy ingests GNSS positions, motion and tamper events and optional sensor telemetry so teams can build alerts, reports and operational rules around the UA1's data.

Plaspy simplifies device onboarding by accepting reports at the shared Plaspy endpoint and port and by automatically detecting the tracker protocol when the device is properly configured. To learn more about Plaspy and how it can be used with devices like the CAREU UA1 visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer instructions verify information on the official CAREU site https://www.systech-iot.com/ as implementations and firmware may change over time.
