---
slug: /navis/ch_5703/protocol
id: ch_5703-protocol
sidebar_label: Protocol
title: Navis - CH -5703 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the Navis CH -5703 marine tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Navis CH -5703 protocol
  - Navis CH -5703 GPS protocol
  - Navis CH -5703 for Plaspy
  - Navis CH -5703 communication protocol
  - Navis CH -5703 tracking protocol
  - Navis marine GNSS tracker protocol
  - Plaspy device compatibility
  - vessel tracking protocol Plaspy
  - marine instrumentation protocol
  - GPS GNSS tracker integration
---

# Navis - CH -5703 Protocol

This page describes the public protocol context for using the Navis CH -5703 tracker with Plaspy. It focuses on how the CH -5703, a marine GNSS receiver and navigation device designed for river and sea vessels, communicates position, time, navigation parameters, and short text messages to a fleet platform such as Plaspy. The intent is to explain connection and integration concepts rather than reproduce manufacturer protocol specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. The Plaspy endpoint is d.plaspy.com and the server IP is 54.85.159.138. Devices may be configured using UDP or TCP on port 8888, and all devices in Plaspy use the same port. Protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so exact device behavior should be validated against the vendor documentation when necessary.

## Protocol Overview

The CH -5703 protocol context covers the communication methods the device uses to report GNSS and status information to a back end. For integration with Plaspy, the key role of the tracker protocol is to reliably deliver identification, position, time, movement, and service messages so the platform can display and process vessel telemetry.

- Enables periodic or event-driven reporting of coordinates, speed over ground, and track angle for vessel monitoring.
- Carries device identity and status information so Plaspy can associate incoming data with the correct asset.
- Transmits short text and coded messages intended for a control center or monitoring supervisor.
- Supports integration of navigation parameters and sensor data from connected ship systems into the monitoring flow.
- Provides the means for the control center to update maps and manage communication priorities where supported.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and automatically detects the tracker protocol so most devices do not require manual protocol selection in the platform when they are correctly pointed at Plaspy. Proper reporting configuration on the device side is the primary requirement for successful automatic detection.

- Plaspy accepts device connections at d.plaspy.com and at the server IP 54.85.159.138.
- The platform listens on port 8888 for all supported trackers and uses that common port for incoming device traffic.
- Plaspy can accept both UDP and TCP reports when a device is configured to use either transport on port 8888.
- When a properly configured CH -5703 reports to the Plaspy endpoint, the platform will attempt to detect the device protocol automatically.
- Users typically do not need to choose a protocol in Plaspy if the tracker is sending data to the correct endpoint and transport.

## Transport and Connection Context

Connection options for the CH -5703 depend on device configuration and available network paths on the vessel. The device may send telemetry and messages over UDP or TCP, and administrators should pick the transport that matches their network reliability and firewall constraints.

- CH -5703 devices may be configured to use UDP or TCP on port 8888 depending on deployment needs and device settings.
- Pointing the device to d.plaspy.com or to 54.85.159.138 will deliver data to Plaspy.
- All devices in Plaspy use the same port, simplifying network and firewall configuration for fleet operators.
- Choose UDP for lower latency in tolerant networks and TCP where guaranteed delivery is required, in line with the vessel network architecture.
- Ensure the vessel LAN and any shipboard routers allow outbound connections to the Plaspy endpoint on the chosen transport and port.

## Protocol Compatibility Notes

- Firmware differences across CH -5703 units can change available message types and reporting behavior; identify firmware revision when validating compatibility.
- Hardware revisions and optional modules (for example external sensor interfaces or AIS integration) may alter the set of data reported to the platform.
- Manufacturer configuration menus may allow selecting transport (UDP/TCP) and the target endpoint; verify these settings during commissioning.
- Some features such as ECDIS or sensor controller integration may require additional configuration on both the device and the receiving platform.
- Always cross-check the device behavior observed on the network with the official Navis documentation for that unit and firmware.
- If a device uses nonstandard or custom reporting modes, coordinate with the manufacturer or reseller to confirm Plaspy-compatible settings.

## Why Protocol Understanding Matters

Understanding how the CH -5703 communicates with a back end helps installers, fleet managers, and integrators get the device online faster, troubleshoot connectivity issues, and ensure reliable long term operation with Plaspy.

- Reduces setup time by ensuring correct endpoint, transport, and reporting intervals are selected before deployment.
- Helps diagnose connectivity problems by distinguishing transport or network issues from device-side configuration errors.
- Improves data quality by matching reporting modes to operational requirements such as update frequency and message content.
- Aids in planning network and firewall rules because Plaspy uses a single, common port for all devices.
- Supports lifecycle management when firmware updates or hardware changes affect what the device sends.

## Why Use Plaspy with This Protocol

Using the Navis CH -5703 with Plaspy gives operators a way to centralize marine navigation telemetry, sensor integration, and short message reporting into a single monitoring platform. For river and sea vessels that require differential GNSS data, integration with vessel sensors, and message exchange with a control center, Plaspy provides a unified endpoint that accepts device reports and presents the data for operational use.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and official configuration guidance, please verify current information with the manufacturer at http://navis.ru/. Protocol support, firmware behavior, and device implementation details can change over time, so confirming the latest manufacturer documentation is recommended when planning deployments or updates.
