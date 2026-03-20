---
slug: /arusnavi/arnavi_l2/protocol
id: arnavi_l2-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Arusnavi Arnavi L2 and how the tracker communicates with Plaspy for reliable real time fleet tracking
keywords:
  - Arusnavi Arnavi L2 protocol
  - Arusnavi GPS tracker protocol
  - Arnavi L2 Plaspy compatibility
  - Arnavi L2 communication protocol
  - Arnavi L2 tracking protocol
  - Arusnavi BLE telemetry
  - Arnavi L2 fleet tracking
  - Arnavi L2 GNSS tracker
  - Arnavi L2 telemetry protocol
  - Arnavi L2 integration Plaspy
---

# Arusnavi - Arnavi L2 Protocol

This page provides a public protocol overview for using the Arusnavi Arnavi L2 tracker with Plaspy. It focuses on the communication context needed to send location, telemetry and sensor events from the sealed Arnavi L2 device to Plaspy servers, and explains the role of the device reporting behavior in a successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior, available messages, and reporting cadence can vary by firmware version, hardware revision and manufacturer implementation, so this page describes public, non sensitive protocol context and practical considerations rather than device internals.

## Protocol Overview

The Arnavi L2 implements the manufacturer supported reporting modes and common telemetry interfaces that allow it to deliver GNSS positions, accelerometer events, BLE sensor telemetry and I/O status to a monitoring platform such as Plaspy. The protocol in use determines how the device identifies itself, encodes telemetry, and signals events that Plaspy can interpret for location, alerts and historical logging.

- Enables the tracker to report GNSS fixes and satellite assisted position metadata for Plaspy to display and archive.
- Carries telemetry such as accelerometer based events, ignition state, BLE sensor measurements and digital input status.
- Provides device identification and session context so Plaspy can associate incoming messages with the correct asset record.
- Supports remote configuration and fallback black box uploads so stored records can be retrieved by Plaspy after connectivity restoration.
- Uses manufacturer supported telemetry modes to accommodate regional modem behavior and power management options.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically determines the appropriate tracker protocol based on the data the device sends after it connects. In typical deployments the device is configured to report directly to the Plaspy server so no manual protocol selection inside Plaspy is required when the device is correctly pointed at the platform.

- All devices connecting to Plaspy use the same port and shared endpoint, which simplifies device configuration across fleets.
- Plaspy’s public server endpoint is d.plaspy.com and can also be reached by IP at 54.85.159.138 for environments that require numeric addressing.
- The standard service port for Plaspy is 8888, and Plaspy automatically detects the tracker protocol once messages arrive on that port.
- Users normally do not need to select a protocol inside Plaspy if the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Automatic protocol detection reduces setup steps and helps handle devices running different manufacturer telemetry modes without per device configuration.

## Transport and Connection Context

The Arnavi L2 supports common cellular transport options and can be configured to use either UDP or TCP for server reporting depending on device settings and network conditions. Understanding this transport context helps ensure the device is pointed correctly and that network firewalls or NAT behavior do not block reporting.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Configure the tracker to target the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 to ensure connectivity.
- Plaspy listens on the same port for all supported devices which avoids per device port mapping and simplifies fleet provisioning.
- Choose UDP for lower overhead reporting where packet loss is acceptable, or TCP when a connection oriented transport is preferred by the device firmware or carrier network.
- Verify that intermediate firewalls, NAT gateways and carrier APN settings allow outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware differences between Arnavi L2 releases can introduce changes in reported fields, telemetry tags or available remote commands; always confirm the firmware level when validating behavior.
- Hardware revisions and regional modem variants can affect cellular bands and transport behavior; consult the Arnavi datasheet for the specific unit in use.
- The Arnavi L2 supports common telemetry modes and manufacturer listed protocols that may be selectable on the device; verify which mode the device is using before troubleshooting.
- Transport selection between UDP and TCP can affect delivery semantics, so match the device setting to the network characteristics expected in your deployment.
- BLE telemetry and paired sensor behavior are managed locally on the device and reported through the same server connection; ensure BLE sensor compatibility and pairing status when expecting sensor data.
- Validate compatibility and message expectations against the latest Arnavi technical documentation to account for manufacturer updates.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol reduces setup time and improves operational reliability by clarifying how the device reports identity, positions and events to Plaspy. Knowing what the device sends and how the platform expects to receive it helps when commissioning devices, diagnosing missing telemetry, or planning firmware updates.

- Helps ensure the device is configured to report to the correct Plaspy endpoint and port for immediate detection.
- Speeds troubleshooting by narrowing whether an issue is transport, firmware, sensor pairing or server configuration related.
- Improves deployment planning by revealing how power management and reporting intervals impact data freshness and battery life.
- Supports reliable use of BLE sensors and I/O features by clarifying how those events are surfaced to Plaspy.
- Assists in validating fallback and black box upload behaviors so historic data is recovered after outages.

## Why Use Plaspy with This Protocol

Using the Arnavi L2 with Plaspy delivers a compact, environmentally robust telemetry node for organizations that need near real time visibility and consolidated fleet oversight. Plaspy receives GNSS positions, accelerometer events, BLE sensor telemetry and discrete input status so teams can monitor routes, detect ignition events, track fuel or temperature sensors and retrieve stored black box records when required.

If you want to learn more about how Plaspy works with devices like the Arnavi L2, visit https://www.plaspy.com. For device specific protocol details, firmware changes and the latest manufacturer documentation, please verify information on the official Arusnavi site at https://www.arusnavi.ru as protocol support and firmware behavior can change over time.
