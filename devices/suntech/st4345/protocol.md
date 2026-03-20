---
slug: /suntech/st4345/protocol
id: st4345-protocol
sidebar_label: Protocol
title: Suntech - ST4345 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST4345 and how it communicates with Plaspy for real time tracking and fleet telemetry
keywords:
  - Suntech ST4345 protocol
  - Suntech ST4345 GPS protocol
  - Suntech ST4345 communication protocol
  - Suntech tracker protocol
  - ST4345 Plaspy compatibility
  - Suntech vehicle tracker protocol
  - ST4345 telemetry integration
  - ST4345 tracking protocol
  - Suntech ST4345 fleet tracking
  - ST4345 connectivity overview
---

# Suntech - ST4345 Protocol

This page describes the public protocol context for using the Suntech ST4345 family with Plaspy. It focuses on how the device reports GNSS positions, telemetry, and events to the Plaspy platform in non sensitive, implementation‑agnostic terms. The ST4345 series is a compact, IP67 rated tracker designed for low power and robust cellular connectivity across LTE Cat M1, NB‑IoT and fallback 2G networks, and this document explains how that device communicates with Plaspy for real time tracking and fleet monitoring.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Devices may be configured to use UDP or TCP on port 8888 to reach the Plaspy server at d.plaspy.com (54.85.159.138). Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public protocol context rather than firmware internals.

## Protocol Overview

The tracker communication protocol defines how the ST4345 sends location, status, and event data to a remote server and how that data is represented for ingestion by Plaspy. In practical terms the protocol ensures the tracker can identify itself, announce telemetry and event states, and allow a server to build usable position history and alerts without exposing proprietary machine level details.

- Enables periodic GNSS updates and event driven messages that Plaspy converts into map locations, alerts, and reports.
- Carries device status and telemetry such as power, I/O states, and sensor inputs so Plaspy can interpret vehicle conditions.
- Provides identifiers and state metadata that allow Plaspy to correlate messages to a specific ST4345 unit and maintain device history.
- Supports both connection oriented and connectionless transports so devices can use TCP or UDP depending on network and configuration.
- Works with the ST4345 variants (for example ST4345R, ST4345LB, ST4345LC) that expose different I/O or BLE options, while leaving protocol handling to the server side.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and messages on a single shared endpoint and determines how to handle each device automatically. Users normally do not need to choose a protocol inside Plaspy when the tracker is correctly pointed at the Plaspy endpoint; the platform associates incoming messages with the originating device and applies the appropriate handling.

- Plaspy listens on a single port for all supported devices and uses automated detection to handle multiple tracker formats.
- Devices should be configured to report to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- The ST4345 can be set to use either UDP or TCP on port 8888 depending on device settings and network conditions.
- When messages arrive at Plaspy, the platform maps them to the corresponding device record and ingests positions, telemetry, and events.
- In most cases no manual protocol selection inside Plaspy is required once the device points to the Plaspy server and transmits data.

## Transport and Connection Context

Connection choices affect how the ST4345 reaches Plaspy but do not change the high level purpose of the protocol: delivering location and telemetry. The ST4345 supports multiple radio modes for broad coverage and can use either TCP or UDP to send reports to the Plaspy server on the standard Plaspy port.

- The device may be configured using UDP or TCP on port 8888 to communicate with Plaspy.
- Configure the tracker to report to the Plaspy domain d.plaspy.com or the Plaspy IP address 54.85.159.138 as preferred.
- Plaspy uses the same port for all supported devices so device configuration is simplified across fleets.
- Transport selection (UDP vs TCP) can be influenced by network reliability, message size, and operator best practices.
- The ST4345 multi mode cellular stack (LTE Cat M1, NB‑IoT, and 2G fallback) affects how reliably messages are delivered in different regions.

## Protocol Compatibility Notes

- Firmware revisions may change message timing, available fields, or optional telemetry items; verify firmware release notes for device behavior.
- Hardware variants such as ST4345R, ST4345LB, and ST4345LC can expose different I/O or BLE features that affect which telemetry is available to Plaspy.
- Some installations may prefer TCP for reliable delivery or UDP for lower overhead; ensure the selected transport is supported by the network operator.
- Manufacturer remote management or configuration servers can alter device reporting settings; confirm the tracker is pointed to Plaspy if using remote provisioning.
- Regional cellular support (NB‑IoT, LTE Cat M1, 2G fallback) influences connectivity and may require selecting the appropriate radio mode for your deployment.
- Always validate device behavior with the latest official manufacturer documentation before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the ST4345 communicates with a tracking server helps ensure reliable setup, faster troubleshooting, and predictable long term behavior in Plaspy. Knowing where messages are sent, which transports are available, and how firmware or hardware variants change telemetry helps teams plan deployments and respond to issues efficiently.

- Ensures devices are correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888 so data reaches Plaspy.
- Helps choose TCP or UDP based on network conditions and operational requirements.
- Aids troubleshooting by narrowing issues to transport, provisioning, or firmware differences rather than platform configuration.
- Clarifies expectations for available telemetry when using different ST4345 variants or firmware levels.
- Supports planning for regional deployments where NB‑IoT, LTE Cat M1, or 2G coverage may differ.

## Why Use Plaspy with This Protocol

Using the ST4345 series with Plaspy provides a practical path to real time location, configurable geofencing, event alerts, and long term telemetry storage for fleets, trailers, motorcycles, and other high value assets. The ST4345 compact form factor, rugged enclosure, and flexible I/O combined with Plaspy ingestion deliver actionable insights without complex per device configuration.

To learn more about Plaspy and how the platform supports device integration, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware variant information, please verify specifications on the manufacturer site at http://www.suntechint.com/ as implementation and firmware behavior can change over time.
