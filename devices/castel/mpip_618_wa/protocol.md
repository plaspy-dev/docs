---
slug: /castel/mpip_618_wa/protocol
id: mpip_618_wa-protocol
sidebar_label: Protocol
title: Castel - MPIP-618-WA Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Castel MPIP-618-WA GPS tracker and how it communicates with Plaspy
keywords:
  - Castel MPIP-618-WA
  - Castel GPS tracker protocol
  - MPIP-618-WA Plaspy compatibility
  - vehicle tracking protocol
  - OBD tracker protocol
  - fleet management tracker
  - Castel MPIP tracking
  - GPS tracker communication
  - MPIP-618-WA compatibility
  - Plaspy tracker support
---

# Castel - MPIP-618-WA Protocol

This page describes the public protocol context for using the Castel MPIP-618-WA tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non sensitive terms and highlights the role of the tracker reporting protocol for delivering location, status, and OBD diagnostic data to a fleet management backend.

The Castel MPIP-618-WA is a versatile vehicle terminal that combines GPS location tracking with OBD diagnostic capabilities and a range of alarms and telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and the manufacturer implementation on the device.

## Protocol Overview

At a high level, the tracker protocol defines how the MPIP-618-WA reports its position, vehicle status, OBD data, and alarm events to a remote server such as Plaspy. The protocol allows the device to identify itself, send periodic or event driven reports, and receive remote configuration commands where supported.

- Enables GPS position reporting and movement updates to a remote platform
- Carries OBD diagnostic values and vehicle status data for fleet monitoring
- Transmits alarm and event notifications such as SOS, speeding, or ignition changes
- Supports remote configuration and parameter updates through supported management channels
- Preserves data memory and retransmits buffered records when connectivity is restored

## How Plaspy Detects the Protocol

Plaspy receives incoming reports from trackers at a shared endpoint and uses automated detection to recognize the reporting format. For most users, manual protocol selection inside Plaspy is not required when the device is correctly configured to report to the Plaspy endpoint.

- Plaspy listens for device reports on the shared server domain d.plaspy.com
- The platform is reachable at the public server IP 54.85.159.138 on port 8888
- Plaspy automatically detects the tracker protocol so no manual selection is normally needed
- Proper device configuration to point at the Plaspy endpoint is required for automatic detection
- Because Plaspy supports multiple device types on the same port, consistent reporting settings simplify setup

## Transport and Connection Context

Connection transport and endpoint targeting determine how the MPIP-618-WA sends its data to Plaspy. The device can use common mobile data transport methods, and Plaspy accepts both major transport types on the shared port.

- The tracker can be configured to use UDP or TCP on port 8888 depending on device support and settings
- Devices may be set to report to the domain d.plaspy.com or to the server IP 54.85.159.138
- All devices in Plaspy use the same port, which simplifies multi device deployments and firewall rules
- The MPIP-618-WA communicates over GPRS and quad band GSM networks for wide cellular coverage
- Configuration options for the device include COTA, SMS command, or PC software depending on the device firmware

## Protocol Compatibility Notes

- Firmware revisions can change message identifiers, reporting intervals, and available fields; verify firmware level when troubleshooting
- Hardware revisions or accessory combinations such as external OBD modules can affect available telemetry and data mapping
- Manufacturer side configuration options may alter how diagnostics and alarms are encoded or reported
- Transport choice (UDP vs TCP) affects reliability and retransmission behavior; confirm the selected transport matches the device configuration
- Plaspy detects protocols automatically but initial configuration must point the device to the Plaspy endpoint
- Always validate compatibility and behavior against the manufacturer documentation and the device firmware release notes

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a reliable connection to Plaspy and accurate interpretation of vehicle and OBD data. Clear protocol knowledge reduces setup time, improves troubleshooting, and helps plan for long term fleet operations.

- Speeds up initial setup by confirming correct endpoint, transport, and reporting mode
- Aids troubleshooting when reports do not arrive or fields appear missing
- Helps map OBD and diagnostic parameters into meaningful fleet metrics
- Supports decisions about transport selection and cellular plan usage
- Clarifies how alarms and event reporting behave under different firmware versions

## Why Use Plaspy with This Protocol

Using the Castel MPIP-618-WA with Plaspy provides a straightforward path to integrating location, OBD diagnostics, and event alarms into a centralized fleet management environment. The MPIP-618-WA’s OBD connectivity and comprehensive alarm set are well suited to fleets that need both operational visibility and vehicle health insights.

Plaspy’s shared endpoint approach and automatic protocol detection simplify onboarding and reduce configuration complexity across mixed fleets. To learn more about how Plaspy can work with GPS trackers like the MPIP-618-WA visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time so verify the latest device specific information on the manufacturer site http://www.castelecom.com/
