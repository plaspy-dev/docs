---
slug: /falcom/fox3_2g/protocol
id: fox3_2g-protocol
sidebar_label: Protocol
title: Falcom - FOX3-2G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Falcom FOX3-2G and Plaspy compatibility covering connection and transport basics
keywords:
  - Falcom FOX3-2G protocol
  - Falcom FOX3-2G GPS protocol
  - FOX3-2G Plaspy compatibility
  - vehicle tracking protocol
  - 2G GNSS tracker protocol
  - Falcom tracker communication
  - FOX3-2G telematics protocol
  - Plaspy device protocol
  - Falcom FOX3-2G integration
  - fleet management tracker protocol
---

# Falcom - FOX3-2G Protocol

This page describes the public protocol context for using the Falcom FOX3-2G series with the Plaspy platform. It summarizes how the device typically communicates in order to reach Plaspy, what role the reporting protocol plays, and which connection settings are used by Plaspy for receiving data. The focus is on public, non-sensitive protocol context to help users integrate and operate the device with Plaspy.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when the device is sending to the Plaspy endpoint. Exact protocol behavior can vary by FOX3-2G firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical connection and compatibility considerations rather than device internals.

## Protocol Overview

The FOX3-2G device uses its telematics firmware to report GNSS position, device status, input/output events, and alert messages to a remote server. The device protocol defines how the unit identifies itself, reports telemetry, and transmits status and event messages so that Plaspy can store, display, and act on the incoming data.

- Enables periodic and event driven position and status reporting from the FOX3-2G to a remote endpoint.
- Carries device identity and contextual data so Plaspy can associate reports with the correct vehicle or asset.
- Transmits telemetry such as GNSS data, I/O state, and alert messages used by fleet workflows.
- Can include security features such as data encryption if enabled by the device firmware.
- Works together with transport choices (TCP or UDP) and network addressing to deliver packets to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the tracker protocol based on the data the device sends to the service. In most cases, when a FOX3-2G is configured to report to Plaspy, no manual protocol selection is required in the Plaspy interface.

- Plaspy uses a single well known port for all devices which simplifies device configuration and onboarding.
- When the FOX3-2G reports to the Plaspy endpoint, the platform identifies the protocol and associates incoming messages with the correct device.
- Users typically only need to configure the device to send data to the Plaspy endpoint; Plaspy will handle protocol identification automatically.
- Protocol detection is tolerant of common variations across firmware releases but exact behavior depends on the firmware and device settings.

## Transport and Connection Context

FOX3-2G devices can be set up to deliver reports over either UDP or TCP depending on device capabilities and the chosen configuration. For Plaspy, the public connection settings are standardized so devices point to the same server and port for all supported trackers.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port used by Plaspy is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies provisioning and firewall rules.
- Selecting UDP or TCP can be driven by reliability, network behavior, or firmware options on the FOX3-2G.
- Ensure network routing and SIM provider settings allow outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences across FOX3-2G units can change available reporting features and fields.
- Hardware revisions and optional IOBOX extensions may add or alter telemetry that the protocol conveys.
- Manufacturer configuration menus and default server settings influence how the device reports to third party platforms.
- Transport choice (UDP vs TCP) must match the configured option on the device to ensure delivery.
- Data encryption and advanced features depend on firmware support and must be enabled consistently on devices and in documentation.
- Validate device behavior against the latest Falcom documentation to confirm compatibility and supported features.

## Why Protocol Understanding Matters

Understanding the FOX3-2G communication protocol and how it interacts with Plaspy helps ensure a reliable setup, accurate telemetry, and predictable operation over time. Clear knowledge of the reporting behavior reduces configuration errors and speeds up troubleshooting when devices do not appear in Plaspy as expected.

- Ensures device reports reach the correct Plaspy endpoint and are associated with the right asset.
- Helps diagnose connectivity problems related to transport, firewall, or SIM network restrictions.
- Clarifies the impact of firmware updates or configuration changes on telemetry and alerts.
- Supports planning for IO expansion, antenna selection, and features such as jamming detection or eco drive monitoring.
- Assists in confirming whether encryption or extra history modes are active and functioning.

## Why Use Plaspy with This Protocol

Using the Falcom FOX3-2G with Plaspy gives organizations a straightforward way to collect vehicle telemetry, monitor status, and react to alerts within a single fleet platform. The FOX3-2G’s combination of 2G connectivity, modern GNSS, I/O flexibility, and Falcom premium features such as history modes and security options make it well suited for use cases where compact hardware and extensibility matter.

Plaspy’s unified connection approach and automatic protocol detection reduce the manual steps required to onboard FOX3-2G units and help maintain consistent operation across a mixed device fleet. To learn more about Plaspy and how the platform works with devices like the FOX3-2G, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information with the manufacturer at https://www.falcom.de.
