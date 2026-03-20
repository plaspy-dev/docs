---
slug: /teltonika/fmb020/protocol
id: fmb020-protocol
sidebar_label: Protocol
title: Teltonika - FMB020 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Teltonika FMB020 integration with Plaspy server and connection settings
keywords:
  - Teltonika FMB020 protocol
  - FMB020 GPS protocol
  - FMB020 Plaspy compatibility
  - Teltonika tracker protocol
  - OBD II tracker protocol
  - GPS tracker communication
  - Vehicle tracking protocol
  - BLE sensor tracking
  - Fleet management protocol
  - Plaspy device compatibility
---

# Teltonika - FMB020 Protocol

This page describes the public protocol context for using the Teltonika FMB020 tracker with Plaspy. It focuses on how the device communicates with the Plaspy service in general terms, how that communication is typically configured, and what aspects of the tracker protocol matter for successful integration without exposing private or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an FMB020 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page explains the common connection and reporting concepts rather than device internals.

## Protocol Overview

The FMB020 reporting protocol governs how the tracker sends location, vehicle OBD telemetry, and BLE sensor events to a server. In integration with Plaspy the protocol provides identification, periodic and event driven reporting, and the delivery of data items that Plaspy consumes for maps, alerts, and analytics.

- Enables device identification so Plaspy can associate incoming data with the correct asset and configuration profile.
- Transports GPS location and timestamp information for live tracking and history playback in Plaspy.
- Carries OBD derived telemetry and vehicle parameters that Plaspy uses for ignition state, engine data, and eco driving insights.
- Relays BLE sensor and beacon inputs such as temperature, humidity, or movement for richer monitoring scenarios.
- Supports heartbeat and event reporting so Plaspy can detect offline devices and trigger alerts when conditions are met.

## How Plaspy Detects the Protocol

Plaspy receives data on a shared server endpoint and port and automatically detects the tracker protocol when the device begins reporting. In most cases users do not need to select a protocol manually inside Plaspy as long as the FMB020 is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com which devices may be pointed to during configuration.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative to the DNS name.
- The Plaspy endpoint listens on port 8888 and all devices supported by Plaspy use the same port.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record.
- Proper device reporting to the Plaspy endpoint typically eliminates the need to manually select a protocol in the platform.

## Transport and Connection Context

The FMB020 can be configured to use standard transport layers when sending data to a remote server. For connectivity with Plaspy, both UDP and TCP are supported by many trackers and the specific transport is selected during device configuration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and fleet preferences.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 when configuring the reporting endpoint.
- All devices in Plaspy use the same port which simplifies provisioning and firewall rules for fleet rollouts.
- Choose UDP for lower overhead reporting or TCP for sessions that require connection reliability based on your operational needs and device firmware capabilities.
- Confirm transport selection and DNS or IP settings using Teltonika configuration tools or provisioning procedures before deployment.

## Protocol Compatibility Notes

- Firmware versions may change reporting behavior and available telemetry fields. Always check the device firmware release notes when troubleshooting.
- Hardware revisions can affect supported features such as BLE capabilities or OBD parameter availability.
- Manufacturer configuration tools and remote management services can alter device reporting destinations or transport settings.
- Transport selection between UDP and TCP can impact delivery semantics and should be validated in your network environment.
- Confirm device identification strings and reporting intervals are accepted by Plaspy during initial testing to ensure smooth detection and mapping.
- Validate compatibility and any vendor specific extensions against official Teltonika documentation when planning large deployments.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol makes setup and ongoing operations smoother, speeds troubleshooting, and helps ensure reliable telemetry delivery into Plaspy. Knowing what the device sends and how it connects reduces configuration errors and improves fleet visibility.

- Helps choose the correct transport and endpoint settings during provisioning for reliable reporting.
- Makes it easier to interpret device behavior when telemetry is missing or events are not triggering as expected.
- Assists in planning firewall and network rules by knowing DNS, IP, and port requirements for Plaspy.
- Supports informed decisions about firmware updates and remote management to keep devices reporting correctly.
- Enables better integration between OBD telemetry, BLE sensor data, and Plaspy rule sets for accurate alerts and reports.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB020 with Plaspy gives fleets a compact, plug and play OBD tracker combined with a platform that automatically handles protocol detection and shared endpoint configuration. This pairing is well suited to quick rollouts, ongoing vehicle telemetry, and scenarios that benefit from combined OBD and BLE sensor inputs.

Plaspy provides live maps, alerting, and reporting that consume the location, OBD parameters, and sensor inputs the FMB020 can provide. To learn more about Plaspy and how it supports fleet tracking and telemetry, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer details can change over time and you should verify current device specific protocol information on the manufacturer website at https://www.teltonika-gps.com/
