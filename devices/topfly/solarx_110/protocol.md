---
slug: /topfly/solarx_110/protocol
id: solarx_110-protocol
sidebar_label: Protocol
title: TopFly - SolarX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the TopFly SolarX 110 showing how the device communicates with Plaspy for tracking and telemetry
keywords:
  - TopFly SolarX 110 protocol
  - TopFly SolarX 110 GPS protocol
  - TopFly SolarX 110 Plaspy compatibility
  - SolarX 110 tracking protocol
  - SolarX 110 communication protocol
  - solar powered GPS tracker protocol
  - asset tracker protocol Plaspy
  - fleet management tracker protocol
  - BLE sensor integration GPS tracker
  - real time GPS reporting protocol
---

# TopFly - SolarX 110 Protocol

This page describes the public protocol context for using the TopFly SolarX 110 with Plaspy. It focuses on how the SolarX 110 communicates common telemetry, GNSS positions, and accessory sensor data to Plaspy without exposing firmware internals or private implementation details. The goal is to help technical users and integrators understand how the tracker interacts with Plaspy at a high level so they can plan configuration and deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior and supported features can vary by firmware version, hardware revision, or manufacturer implementation. The SolarX 110 is a solar powered, IP67 rated tracker with a 2500 mAh rechargeable battery, multi constellation GNSS, BLE 5.3 for accessory sensors, large on device buffering, and reporting intervals as fast as every 3 seconds; those device characteristics influence how the public communication protocol is used in the field.

## Protocol Overview

At a high level the SolarX 110 communication protocol defines how the device identifies itself, delivers position and telemetry, and synchronizes buffered data with a remote server. The protocol's public role is to make location, sensor readings, and event information available to Plaspy for visualization, alerts, and historical analysis.

- Transmits GNSS position reports and basic telemetry such as battery, signal and sensor status so Plaspy can render live location and history.
- Carries accessory sensor data from BLE devices and internal sensors so environmental and door status can be associated with GPS tracks.
- Provides on device buffering and resynchronization behavior so stored points are uploaded when connectivity returns and Plaspy can fill historical gaps.
- Allows for configurable reporting intervals and event driven messages so operations teams can balance update frequency against power use.
- Supports optional secure transmission modes and firmware update triggers as part of the device communication lifecycle.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections on a shared endpoint and port and automatically determines the tracker protocol when a properly configured device reports in. In most cases you do not need to select a protocol inside Plaspy manually if the SolarX 110 is set to report to the Plaspy endpoint using supported transport settings.

- Point the device to the Plaspy server endpoint either by domain d.plaspy.com or by server IP 54.85.159.138.
- Configure the device to use port 8888; Plaspy uses the same port for all supported devices so a single port setting is sufficient across a mixed fleet.
- Devices may use TCP or UDP transport to reach the Plaspy endpoint depending on device configuration and operator preference.
- When the device sends its identity and regular reports to Plaspy, the platform maps incoming streams to the detected tracker type and begins ingesting location and telemetry automatically.
- Proper device identifiers and a stable connection to the Plaspy endpoint are the usual prerequisites for automatic detection.

## Transport and Connection Context

Connection choices influence latency, reliability and battery usage. The SolarX 110 supports common transport options so it can connect to Plaspy in a variety of network environments. Use the Plaspy endpoint and port settings below when configuring the device for remote reporting.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and network considerations.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 as an alternative.
- All devices in Plaspy use the same port, making fleet level configuration simpler when registering heterogeneous devices.
- Transport selection can affect delivery guarantees and power profile so choose TCP or UDP in line with your reliability and battery objectives.
- Ensure APN and SIM connectivity are correct on the SolarX 110 so it can reach d.plaspy.com or the numeric server address.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change what messages the SolarX 110 sends and how features like BLE sensor reporting or buffering behave.
- Manufacturer side variations and regional firmware builds may alter supported transports, encryption options, or telemetry fields.
- The SolarX 110 supports secure transmission options and FOTA as reported by the device documentation; availability may depend on firmware.
- Transport mode selection between UDP and TCP can affect real time performance and should be validated for your use case.
- Large on device buffers and high frequency reporting down to 3 seconds are device capabilities that influence server ingestion patterns and should be planned for.
- Always validate your particular device serial numbers and firmware against official documentation before wide deployment.

## Why Protocol Understanding Matters

A practical understanding of the SolarX 110 communication protocol helps integrators and fleet operators achieve reliable setup, predictable behavior, and efficient troubleshooting when devices are used with Plaspy. Knowing how the device reports, what transports it supports, and how Plaspy expects inbound connections reduces configuration errors and shortens resolution time.

- Ensures device reporting settings target the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888 so automatic detection can occur.
- Helps choose the appropriate transport mode TCP or UDP for your network and power constraints.
- Makes it easier to interpret missing data, buffer resynchronization, and event timing during outages or transitions.
- Supports planning for BLE accessory integration and mapping sensor streams into Plaspy dashboards and alarms.
- Guides firmware update timing and verification to maintain consistent protocol behavior across the fleet.

## Why Use Plaspy with This Protocol

Pairing the SolarX 110 with Plaspy gives operations teams a unified platform for real time visibility, configurable alarms, and historical route analysis while taking advantage of the tracker hardware features such as solar harvesting, large local buffers, BLE sensor support, and anti tamper alerts. Plaspy ingests the device streams when the SolarX 110 reports to the shared Plaspy endpoint and provides visualization and forwarding tools useful for fleet and asset management workflows.

If you want to learn more about Plaspy and how it works with the SolarX 110, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware behavior, and manufacturer instructions please verify information on the official TopFly website https://www.topflytech.com/ as device support and firmware implementations can change over time.
