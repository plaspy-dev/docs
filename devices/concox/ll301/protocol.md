---
slug: /concox/ll301/protocol
id: ll301-protocol
sidebar_label: Protocol
title: Concox - LL301 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox LL301 and how it communicates with Plaspy for reliable GPS tracking and telemetry
keywords:
  - Concox LL301 protocol
  - Concox LL301 GPS protocol
  - LL301 tracking protocol
  - Concox GPS tracker protocol
  - Plaspy compatible trackers
  - LL301 Plaspy integration
  - asset tracker communication
  - fleet management GPS protocol
  - vehicle tracking Concox LL301
  - LL301 communication protocol
---

# Concox - LL301 Protocol

This page provides a public protocol overview for using the Concox LL301 with Plaspy. It focuses on how the device reports position, telemetry, and event alerts to a Plaspy endpoint and what aspects of the tracker communication are important for reliable integration. The LL301 is a 4G LTE Cat 1 asset GNSS tracker designed for long deployments with a high capacity battery and IP65 housing, and it is Plaspy compatible out of the box.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page covers general communication context while recommending you verify firmware specific details with the vendor documentation.

## Protocol Overview

The LL301 communication protocol defines how the tracker reports GNSS fixes, sensor telemetry, and event alerts to a remote server so that Plaspy can display and process that information. The protocol enables the device to identify itself, report useful location and status data, and trigger events that Plaspy operators can act on.

- Enables transmission of GNSS position fixes and basic telemetry for mapping and historical playback.
- Communicates event alerts such as tamper, cover removal, vibration, and low battery to the server.
- Provides device identity and status information so Plaspy can associate data with the correct asset.
- Supports periodic and event driven reporting modes to balance update frequency and battery life.
- Allows remote configuration and provisioning through vendor tools or local Bluetooth when applicable.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol from the data the device sends. In most cases a properly configured LL301 that reports to Plaspy will be recognized without manual protocol selection inside the platform.

- Plaspy listens on a unified endpoint so devices do not require separate ports per model.
- The platform automatically matches reported messages to the correct protocol family when data arrives.
- Users typically only need to configure the device to report to the Plaspy endpoint and ensure correct transport settings.
- When messages include device identity and expected telemetry fields, Plaspy can associate and validate the feed.
- If a device appears not to report correctly, checking device reporting target and transport is the first troubleshooting step.

## Transport and Connection Context

The LL301 can be configured to send data over either UDP or TCP depending on device firmware and configuration. For Plaspy integration, the device should be pointed at the Plaspy server endpoint so that position updates and events are received reliably.

- Plaspy server domain is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 and the platform accepts connections on port 8888.
- The device may be configured using UDP or TCP on port 8888 depending on device support and operator preference.
- All devices in Plaspy use the same port, simplifying configuration for deployments with mixed models.
- Use the device provisioning tools or Bluetooth configuration to set the reporting host and transport on the LL301.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available fields, and supported transport modes; verify firmware notes for exact behavior.
- Hardware variants and regional cellular models may expose different network behaviors or fallback options that affect reporting reliability.
- Manufacturer configuration defaults may point to a vendor cloud; ensure the LL301 is configured to report to d.plaspy.com or the Plaspy IP for direct integration.
- Choosing UDP versus TCP can affect delivery and retransmission behavior; select the transport that matches your reliability and power budget requirements.
- Plaspy’s automatic detection reduces the need for manual protocol selection, but correct host and transport settings on the device are required.
- For advanced features or commands, consult the device vendor documentation to confirm support and any firmware dependencies.

## Why Protocol Understanding Matters

Understanding the LL301 communication protocol helps operators and integrators ensure successful setup, predictable reporting behavior, and efficient troubleshooting when devices are deployed with Plaspy. Knowing which fields and events the tracker can send and how it connects to Plaspy reduces setup time and supports operational reliability.

- Ensures proper configuration of host, transport, and reporting mode for expected update frequency.
- Helps interpret alerts such as tamper, vibration, and low battery so workflows in Plaspy trigger correctly.
- Guides troubleshooting steps when a device is not appearing in Plaspy or is reporting incomplete data.
- Supports power management decisions by choosing appropriate reporting modes to extend battery life.
- Aids planning for mixed fleet deployments by clarifying which device variants support required telemetry.

## Why Use Plaspy with This Protocol

Using the Concox LL301 with Plaspy provides a practical solution for organizations that need long battery life, rugged hardware, and reliable telemetry for asset tracking. Plaspy ingests GNSS fixes and event alerts from the LL301 so operators can monitor assets in real time, review historical tracks, and receive actionable notifications for tamper or low battery conditions.

To learn more about Plaspy and how it works with devices like the LL301 visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and official implementation notes please verify information with the manufacturer at https://www.iconcox.com/ .
