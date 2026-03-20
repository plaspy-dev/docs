---
slug: /teltonika/fmc225/protocol
id: fmc225-protocol
sidebar_label: Protocol
title: Teltonika - FMC225 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for using the Teltonika FMC225 with Plaspy for reliable fleet tracking and telemetry
keywords:
  - Teltonika FMC225 protocol
  - Teltonika FMC225 GPS protocol
  - FMC225 Plaspy compatibility
  - FMC225 communication
  - FMC225 tracking protocol
  - Teltonika GPS integration
  - fleet tracking FMC225
  - FMC225 telemetry
  - Plaspy Teltonika integration
  - FMC225 remote management
---

# Teltonika - FMC225 Protocol

This page covers the public protocol context for using the Teltonika FMC225 tracker with Plaspy. It describes how the device communicates in broad, non sensitive terms so fleet operators and integrators understand the connection points, transport options, and practical considerations when bringing FMC225 devices into a Plaspy deployment.

The FMC225 is a rugged, IP67 rated device built for external mounting with 4G LTE Cat 1 connectivity, 2G fallback, Dual SIM and serial interfaces for extended telemetry and fuel impulse inputs. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. For device specific protocol mechanics refer to official Teltonika resources.

## Protocol Overview

The FMC225 reporting protocol is the mechanism by which the tracker identifies itself, transmits GNSS positions, telemetry, and event data to Plaspy. At a high level the protocol ensures that location, sensor readings, digital I O events, and serial telemetry from external sensors can be delivered to the platform in a way Plaspy can ingest and present.

- Enables the device to report position, telemetry, and event messages to Plaspy for mapping, alerts, and analytics.
- Carries identifiers and status fields that allow Plaspy to associate incoming data with the correct FMC225 device.
- Transmits digital and analog input events as well as impulse fuel counts and serial sensor data so Plaspy can generate fuel and diagnostic reports.
- Works over standard network transports so the tracker can reach the Plaspy endpoint from cellular networks.
- Serves as the basis for remote monitoring, alarms, and automated workflows once data is processed by Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared server endpoint and automatically determines the tracker protocol based on the incoming connection and message content. In most deployments you do not need to pick a protocol in the Plaspy UI if the FMC225 is configured to report to the Plaspy endpoint correctly.

- Plaspy server endpoint is d.plaspy.com and can also be reached at 54.85.159.138 for direct IP configuration.
- Plaspy listens on a single port for all devices; the configured port is 8888.
- Devices may be configured to use either UDP or TCP transport on port 8888 depending on device capabilities and network conditions.
- When the FMC225 reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates the data with the device account.
- Ensuring the FMC225 is pointed to the correct endpoint and transport usually avoids manual protocol selection inside Plaspy.

## Transport and Connection Context

Connection context is important for reliable delivery of FMC225 messages to Plaspy. The FMC225 supports cellular uplink over LTE with fallback to 2G and can use either TCP or UDP to reach the platform. Network and SIM configuration, as well as regional variant settings, influence the best transport choice.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Port used by Plaspy for all supported devices is 8888 and can be selected as TCP or UDP on the device.
- TCP may offer reliable delivery characteristics on mobile networks while UDP can reduce overhead where appropriate; the device firmware and operator policy determine available options.
- Dual SIM capability in the FMC225 helps maintain connectivity when one network is unavailable.
- Confirm APN and SIM settings on the FMC225 to ensure it can reach the Plaspy endpoint from the target region.

## Protocol Compatibility Notes

- Protocol behavior can differ across firmware versions; always check the FMC225 firmware release notes for protocol changes that affect message fields or behaviour.
- Hardware revisions and regional variants may affect available interfaces and supported transports for reporting to Plaspy.
- Manufacturer configuration tools and default device settings can influence whether the device uses TCP or UDP when sending to Plaspy.
- Validate that any external sensors or serial adapters connected to RS232 or RS485 are compatible with the FMC225 firmware used in your fleet.
- Test a small number of devices before mass deployment to confirm telemetry, impulse fuel counting, and digital input events are reported as expected.
- Use Teltonika documentation for the most current device specific instructions and configuration examples.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure smooth onboarding, accurate telemetry ingestion, and reliable long term operation of FMC225 devices with Plaspy. Clear expectations about transport, addressing, and firmware effects reduce troubleshooting time and improve data quality for fleet operations.

- Helps validate device configuration so position and sensor data arrive in Plaspy without manual protocol overrides.
- Reduces integration friction when connecting RS232 RS485 sensors, impulse fuel meters, and digital inputs to the platform.
- Makes it easier to diagnose connectivity issues related to APN, SIM, transport selection, or endpoint reachability.
- Supports planning for firmware updates and hardware rollouts while minimizing unexpected protocol changes.
- Improves confidence in event mapping such as immobilizer control, door events, and fuel tracking used in operational workflows.

## Why Use Plaspy with This Protocol

Pairing the Teltonika FMC225 with Plaspy delivers a practical route to continuous visibility for vehicles and heavy equipment operating in demanding environments. The FMC225’s rugged enclosure, cellular redundancy, and extended telemetry interfaces make it suitable for fleets that need durable hardware plus a platform that automatically handles protocol detection and unified ingestion.

Plaspy’s shared endpoint model simplifies deployments because all devices report to the same port and Plaspy will detect supported tracker protocols automatically. To learn more about Plaspy and how it can work with rugged trackers like the FMC225 visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and configuration guidance verify current information with the manufacturer at https://www.teltonika-gps.com/
