---
slug: /cantrack/gt06/protocol
id: gt06-protocol
sidebar_label: Protocol
title: CanTrack - GT06 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the CanTrack GT06 GPS tracker with Plaspy and common connection settings
keywords:
  - CanTrack GT06 protocol
  - GT06 GPS protocol
  - CanTrack GT06 Plaspy
  - GT06 communication protocol
  - CanTrack GPS tracker protocol
  - GT06 tracking protocol
  - Plaspy device integration
  - vehicle tracking protocol
  - GPS tracker compatibility
  - GPRS tracking protocol
---

# CanTrack - GT06 Protocol

This page summarizes the public protocol context for using the CanTrack GT06 tracker with Plaspy. It focuses on how the device typically reports position and status over the cellular network and how those reports are handled by a Plaspy server endpoint. The GT06, also marketed as TK100, uses GSM GPRS and GPS to provide location updates, SMS alerts, and optional features such as overspeed and SOS alarms that are commonly forwarded to a tracking platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and supported messages can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance about transport and integration rather than firmware specific command references.

## Protocol Overview

The protocol implemented by the GT06 family is the device communication method that enables location, status, and alarm data to be sent from the tracker to a remote server. On the network side this typically means the tracker opens a data session over GPRS and transmits regularly formatted messages to an internet endpoint for real time monitoring and historical logging.

- Allows the tracker to transmit GPS coordinates and timestamped status updates to a remote server for mapping and reporting
- Carries event and alarm notifications such as SOS, overspeed, and power loss so they can be surfaced in Plaspy
- Provides an identification element so the platform can associate incoming messages with a specific device
- Enables remote configuration or server reporting changes when supported by the unit and manufacturer firmware
- Supports both periodic position reporting and on demand or event driven reports depending on configuration

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a single shared endpoint and port and applies automatic protocol detection to associate each device with the correct parser and storage logic. In most cases a properly configured GT06 will start sending data to the Plaspy endpoint and the platform will identify the device type without manual protocol selection.

- Plaspy server domain is d.plaspy.com which devices may be pointed to for reporting
- Plaspy server IP is 54.85.159.138 and is provided for devices that require an IP instead of a domain
- The port is 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol so users generally do not need to pick a protocol inside the platform
- If a device is correctly configured to report to the Plaspy endpoint it will normally be recognized and begin reporting position and events

## Transport and Connection Context

GT06 units send data over the cellular link to a remote server using GPRS data sessions. Depending on device firmware and configuration the tracker may open either a UDP or a TCP connection to the configured reporting endpoint. These transport options affect connection behavior but not the general purpose of the protocol which is to deliver GPS and alarm data to the server.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be set to report to the domain d.plaspy.com or to the numeric address 54.85.159.138
- All devices in Plaspy use the same port which simplifies device endpoint configuration
- GPRS is the commonly used bearer for real time server reporting while SMS remains available for alerts or basic location
- Transport selection (UDP versus TCP) can affect reliability and reassembly but is a device side configuration

## Protocol Compatibility Notes

- Firmware revisions can change message formats or available features so behavior may vary between units
- Hardware revisions and optional features such as two way calling or relay outputs can affect which events are reported
- Manufacturer default settings may point devices to a different server; confirm and update the reporting endpoint to d.plaspy.com or 54.85.159.138 if needed
- Some units support only one transport mode by default while others can be toggled between UDP and TCP
- Validate configuration and reporting on a test device before large scale deployment
- Consult manufacturer release notes for firmware changes that can affect interoperability

## Why Protocol Understanding Matters

Understanding how the GT06 communicates helps reduce setup time, improves troubleshooting, and ensures reliable long term tracking. Knowing the basic reporting flow and transport options makes it easier to confirm the device is reaching Plaspy and that expected events are visible in the platform.

- Faster identification of misrouted data when a device is pointed to the wrong endpoint or IP
- Clearer expectations around which alarms and telemetry a given firmware revision will send
- Better diagnostic steps when devices appear offline such as checking UDP versus TCP configuration
- Improved planning for firmware updates and hardware rollouts across a fleet
- Ability to document device behavior for operational teams and integrators

## Why Use Plaspy with This Protocol

Using a fleet platform like Plaspy with the CanTrack GT06 family provides centralized visibility for position, alerts, and event history across many units. The GT06 delivers standard vehicle tracking features while Plaspy collects, stores, and presents that device data to operators and managers for monitoring, reporting, and operational decisions. Because Plaspy uses a single shared endpoint and automatic protocol detection, integrating GT06 devices is typically straightforward after the tracker is configured to report to the correct server.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time; verify the latest device specific protocol and firmware information with CanTrack at https://www.cantrackgps.com/
