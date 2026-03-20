---
slug: /suntech/st4945b/protocol
id: st4945b-protocol
sidebar_label: Protocol
title: Suntech - ST4945B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST4945B and how it communicates with Plaspy for reliable asset tracking and telemetry
keywords:
  - Suntech ST4945B protocol
  - Suntech ST4945B GPS protocol
  - Suntech ST4945B Plaspy compatibility
  - Suntech GPS tracker protocol
  - Plaspy device protocol
  - GPS tracker communication
  - asset tracker LTE Cat M1
  - NB IoT tracker protocol
  - vehicle tracking protocol
  - tracker integration Plaspy
---

# Suntech - ST4945B Protocol

This page describes the public protocol context for using the Suntech ST4945B tracker with Plaspy. It focuses on how the device communicates telemetry and GNSS positions to the Plaspy platform at a high level, without exposing sensitive implementation details. The ST4945B is a rugged LTE Cat M1 / NB‑IoT asset tracker with EGPRS fallback, designed for long battery life, IP67 protection, jamming detection and optional BLE support, and it ships Plaspy compatible for straightforward integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report correctly to the Plaspy endpoint. Typical behavior can vary by firmware version, hardware revision and manufacturer implementation, so while Plaspy accepts data streams from the ST4945B over TCP or UDP, actual packet timing, available fields and feature behavior may differ between firmware builds and hardware variants.

## Protocol Overview

The tracker reporting protocol is the mechanism the ST4945B uses to deliver GNSS positions, motion events and device status to Plaspy. At a public level this protocol defines how the device identifies itself, how it formats telemetry for ingestion, and how status and event messages are delivered so Plaspy can provide dashboards, alerts and history.

- Enables the device to send periodic and event driven GNSS position updates to Plaspy for live tracking and history playback.
- Carries telemetry such as motion detection, battery level, jamming alerts and digital input state so Plaspy can generate notifications and rules.
- Includes identification and status elements that allow Plaspy to associate incoming data with the correct device record.
- Supports both continuous streams and intermittent reporting patterns to conserve battery while ensuring timely alerts.
- Works over common transports so the tracker can reach the Plaspy endpoint from cellular networks including LTE Cat M1, NB‑IoT and 2G fallback.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models and automatically detect the protocol presented by a reporting device. When the ST4945B is configured to report to the Plaspy endpoint, Plaspy will classify the incoming stream and map the telemetry to the platform device model without requiring manual protocol selection in most cases.

- Plaspy receives device reports at its unified endpoint and determines the correct parsing rules automatically.
- Users point devices to the Plaspy server and typically do not need to choose a protocol inside Plaspy if the device reports correctly.
- The ST4945B is Plaspy compatible out of the box and streams telemetry that Plaspy can ingest for dashboards and alerts.
- Automatic detection reduces setup steps for typical deployments while still accommodating variants in reporting behavior.
- If a device uses nonstandard settings or custom firmware, validation against manufacturer documentation can help ensure proper detection.

## Transport and Connection Context

Connection transport and server addressing are part of the practical setup for ST4945B reporting to Plaspy. The device may use either UDP or TCP depending on its network configuration and firmware capabilities, and it can be pointed to the public Plaspy endpoint by name or IP address.

- Plaspy server domain for reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on port 8888 and devices may be configured using UDP or TCP on port 8888.
- Plaspy uses the same port for all supported devices to simplify configuration and reduce setup errors.
- The ST4945B can connect over LTE Cat M1, NB‑IoT or EGPRS 2G fallback to reach Plaspy.
- Choosing TCP or UDP can be influenced by network reliability, firmware defaults and power considerations on the tracker.

## Protocol Compatibility Notes

- Firmware version differences can alter which telemetry fields are available, message timing, and event behavior.
- Hardware revisions or optional modules like BLE may add or omit I/O and sensor reporting.
- Transport selection (TCP versus UDP) may affect reliability and battery usage depending on deployment and carrier network.
- Manufacturer configuration menus and provisioning servers may provide default reporting parameters that should be set to the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol, but custom firmware or nonstandard port configuration can require additional validation.
- Always cross reference device behavior with current manufacturer release notes for the specific firmware installed on the unit.

## Why Protocol Understanding Matters

Understanding the ST4945B communication protocol helps ensure a successful installation, predictable device behavior and efficient troubleshooting when working with Plaspy. Knowing what the device reports, how it connects, and which transport it uses gives operators control over power, data usage and event reliability.

- Facilitates correct device provisioning so reports arrive at Plaspy without manual protocol selection.
- Helps tune reporting intervals and event triggers to balance battery life and responsiveness.
- Makes it easier to diagnose connectivity or data mapping issues when telemetry does not appear as expected in Plaspy.
- Supports planning for scale by clarifying expected data volumes and transport behavior for fleet rollouts.
- Enables operators to verify critical alarms such as jamming detection and low battery are being forwarded to Plaspy.

## Why Use Plaspy with This Protocol

Pairing the Suntech ST4945B with Plaspy provides organizations with a robust solution for long term asset visibility, tamper detection and remote monitoring. The ST4945B’s low power modes, large backup battery and rugged enclosure make it well suited for container, trailer and remote asset deployments, while Plaspy ingests the device telemetry to provide live maps, historical playback and rule based alerts.

To learn more about Plaspy and how it works with devices like the ST4945B please visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so verify the latest device specific information on the manufacturer website http://www.suntechint.com/ before finalizing deployment plans.
