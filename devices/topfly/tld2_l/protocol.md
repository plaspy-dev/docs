---
slug: /topfly/tld2_l/protocol
id: tld2_l-protocol
sidebar_label: Protocol
title: TopFly - TLD2-L Protocol
sidebar_class_name: menu_item_tracker
description: Protocol overview for TopFly TLD2-L GPS tracker and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - TopFly TLD2-L protocol
  - TopFly TLD2-L GPS protocol
  - TopFly TLD2-L communication protocol
  - TopFly TLD2-L tracking protocol
  - TopFly GPS protocol Plaspy
  - TLD2-L Plaspy compatibility
  - OBDII GPS tracker protocol
  - vehicle tracking protocol TopFly
  - fleet tracking TLD2-L
  - Plaspy device protocol
---

# TopFly - TLD2-L Protocol

This page describes the public protocol context for using the TopFly TLD2-L GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy, which connection endpoints and transports are commonly used, and what to expect when integrating this plug and play OBDII tracker into a deployment. The technical details here are intended to be public facing and useful for integration planning and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features for the TLD2-L can vary with firmware version, hardware revision, and manufacturer implementation, so production deployments should confirm firmware capability and settings against manufacturer documentation.

## Protocol Overview

The protocol for the TLD2-L defines how the device reports position, telemetry, and event data to a backend such as Plaspy. In practical terms this means the tracker periodically opens a network connection to a Plaspy endpoint and transmits GNSS fixes, accelerometer and ignition events, BLE sensor data, and status updates so the platform can display maps, alerts, and analytics.

- Enables transmission of location and sensor telemetry from the OBDII dongle to the cloud platform.
- Carries event notifications such as harsh driving, ignition changes, disconnection alarms, and battery warnings.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct vehicle and configuration.
- Supports buffering and scheduled reporting so data is preserved during temporary network outages.
- Works over the device supported transports so Plaspy can ingest data reliably for real time monitoring and historical analysis.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a unified endpoint and identifies the tracker protocol from the incoming session characteristics and the data the device sends. In most deployments the user does not need to manually select a protocol in Plaspy if the tracker is configured to report to the Plaspy server address and port.

- Plaspy uses a shared server endpoint for device reporting so a properly configured device will be detected automatically.
- Plaspy automatically detects the tracker protocol when the device connects and begins reporting.
- Users generally point the tracker to the Plaspy domain or IP and configure the transport; Plaspy handles protocol mapping on the server side.
- Correct device identification depends on the tracker sending standard identifying fields and periodic telemetry after the connection is established.
- If a device appears not to be detected, confirm reporting settings such as server address, transport type, and device firmware.

## Transport and Connection Context

Connection and transport choices determine how the TLD2-L reaches Plaspy. The TLD2-L supports multiple transports and will use the one selected in device configuration or provided by firmware. Plaspy provides a single common port for all supported devices which simplifies configuration.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 on port 8888.
- The TLD2-L may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port which simplifies fleet wide setup and reduces configuration errors.
- The device also supports additional transports commonly used for remote management such as MQTT and SMS where applicable.
- Confirm device transport selection in the tracker configuration to match intended behavior for latency, reliability, and firewall traversal.

## Protocol Compatibility Notes

- Firmware differences can change supported messages, reporting intervals, and optional features such as BLE sensor forwarding or advanced event types.
- Hardware revisions or regional variants can alter radio bands, GNSS performance, or available transports; verify the exact model variant before large deployments.
- Manufacturer side configuration options and command sets can vary by firmware release; consult TopFly for firmware specific behavior.
- Transport selection matters for reliability and latency; choose TCP for guaranteed delivery when available or UDP for lower overhead when appropriate.
- Plaspy automatically detects protocol but correct detection depends on the device connecting to the Plaspy endpoint and transmitting expected identification and telemetry.
- Always validate a device in a test environment prior to mass rollout to confirm reporting cadence and event generation match operational needs.

## Why Protocol Understanding Matters

Understanding how the TLD2-L communicates with Plaspy makes deployment, configuration, and troubleshooting faster and more predictable. Knowledge of the communication context helps teams tune reporting intervals, plan for connectivity gaps, and diagnose event delivery issues.

- Ensures correct server address and transport settings on the tracker so data reaches Plaspy reliably.
- Helps interpret device behavior such as buffering, delayed reports, or missing events during coverage loss.
- Aids in troubleshooting by narrowing down whether issues are caused by device settings, transport, or server side handling.
- Supports informed decisions about power usage, reporting frequency, and event thresholds to balance telemetry fidelity and battery life.
- Reduces deployment time by aligning device configuration with Plaspy expectations for identification and telemetry.

## Why Use Plaspy with This Protocol

Using the TopFly TLD2-L with Plaspy provides a straightforward path to turn OBDII connected telemetry into maps, alerts, and fleet analytics. The TLD2-L s plug and play form factor, accelerometer events, BLE sensor support, and FOTA capability combine with Plaspy s unified ingestion to deliver practical vehicle insight for fleets and asset programs.

If you want to learn more about how Plaspy handles device integrations and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer details can change over time so verify the latest device specific protocol and firmware information on the manufacturer website https://www.topflytech.com/.
