---
slug: /coban/bn_407/protocol
id: bn_407-protocol
sidebar_label: Protocol
title: Coban - BN-407 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Coban BN-407 GPS tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - Coban BN-407 protocol
  - Coban BN-407 GPS protocol
  - BN-407 tracking protocol
  - BN-407 Plaspy compatibility
  - Coban GPS tracker protocol
  - bicycle GPS protocol
  - bike tracker communication
  - fleet tracking Coban BN-407
  - Plaspy device protocol
  - tracker communication protocol
---

# Coban - BN-407 Protocol

This page describes the public protocol context for using the Coban BN-407 GPS tracker with the Plaspy platform. It summarizes how the device reports location and event data to Plaspy in broad, non sensitive terms, and how those communications fit into a fleet or asset management workflow for bicycles and small assets.

The BN-407 is a compact 4G bicycle terminal designed for concealed installation, low power operation and configurable alarms. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact message behavior and features can vary by firmware version, hardware revision and manufacturer implementation. Where helpful, this page references Plaspy connection endpoints and general transport options used for BN-407 integration.

## Protocol Overview

The BN-407 communication protocol enables the tracker to identify itself to a back end, report GNSS positions and send event-driven alarms that Plaspy can ingest and present as live locations, history, and alerts. The protocol's role is to deliver telemetry reliably while supporting power saving and alarm priorities appropriate for bicycle use.

- Transmits position and telemetry updates so Plaspy can display live location and historical tracks.
- Sends alarm and event notifications for geo-fence, shock, movement, overspeed and low battery to trigger Plaspy alerts.
- Provides identification and session information so Plaspy can associate reports with the correct device record.
- Supports multiple transports so the device can operate in varied network environments and conserve battery.
- Enables state changes and remote control triggers as supported by device firmware and manufacturer commands.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and determines the protocol based on the incoming data format. In most deployments users do not need to choose a protocol inside Plaspy as long as the device is configured to report to the correct Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct endpoint addressing.
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- Devices compatible with Plaspy, like the BN-407, may be configured to use either UDP or TCP on port 8888 depending on the device settings and network conditions.
- When the BN-407 reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates incoming messages with the correct device.
- Proper device configuration to send reports to the Plaspy endpoint typically avoids manual protocol selection within the platform.

## Transport and Connection Context

Transport choices affect connectivity, latency and battery consumption. The BN-407 supports common mobile transports that allow it to send telemetry while optimizing power and coverage for bicycle deployments.

- The BN-407 may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 if direct addressing is preferred.
- Using TCP provides connection-oriented delivery while UDP can reduce overhead; the BN-407 supports both to accommodate different deployments.
- All devices in Plaspy use the same port which simplifies device provisioning and firewall rules for large fleets.
- SMS transport may be available for initial setup or as a fallback depending on the BN-407 firmware and regional network support.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change supported features and message behavior; confirm compatible firmware when deploying at scale.
- Manufacturer-side configuration commands or default settings may vary by region or distributor; always validate the device is set to report to the Plaspy endpoint.
- Transport selection (UDP versus TCP) can affect delivery characteristics and should be tested in your deployment environment.
- Some advanced features or optional alarms can be firmware dependent and may not be present on all units.
- Confirm GNSS, power management and alarm behaviors against the manufacturer documentation before mass installation.
- Plaspy automatically detects the protocol when the device reports correctly to the shared endpoint and port, reducing manual configuration.

## Why Protocol Understanding Matters

Understanding how the BN-407 communicates helps ensure reliable reporting, correct alarm mapping, and efficient battery use when the device is managed by Plaspy. Clear expectations about transport, reporting intervals and event triggers reduce integration time and troubleshooting overhead.

- Ensures device reports land in Plaspy and are associated with the intended asset record.
- Helps select the appropriate transport and reporting interval for a balance of accuracy and battery life.
- Aids in diagnosing connectivity issues by narrowing whether problems stem from network, transport, or configuration.
- Supports planning for firmware updates and feature rollouts that can change message behavior.
- Improves alarm handling by clarifying which events the device will report and how Plaspy will surface them.

## Why Use Plaspy with This Protocol

Using the BN-407 with Plaspy gives operators discreet, long runtime bicycle tracking combined with a platform that ingests position and alarm data for live monitoring, history playback and configurable notifications. This pairing is well suited to shared bike fleets, rental operators, and personal anti-theft setups where concealed hardware and energy efficient reporting matter.

Plaspy simplifies connectivity by exposing a single endpoint and port for all supported devices and automatically detecting the tracker protocol when a unit properly reports to the platform. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and manufacturer documentation verify information on the Coban website https://www.coban.net/. Please note that protocol support, firmware behavior and device implementation details can change over time so checking manufacturer resources is recommended.
