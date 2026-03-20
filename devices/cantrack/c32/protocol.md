---
slug: /cantrack/c32/protocol
id: c32-protocol
sidebar_label: Protocol
title: CanTrack - C32 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the CanTrack C32 tracker with Plaspy for reliable vehicle and e bike tracking
keywords:
  - CanTrack C32 protocol
  - CanTrack C32 GPS
  - CanTrack C32 Plaspy
  - C32 tracker compatibility
  - C32 communication protocol
  - CanTrack GT06 support
  - GPS tracker Plaspy compatibility
  - vehicle tracking CanTrack C32
  - E bike GPS C32
  - motorcycle GPS tracker C32
---

# CanTrack - C32 Protocol

This page provides public protocol context for using the CanTrack C32 tracker with the Plaspy platform. It explains how the device generally communicates with a Plaspy server and what aspects of the tracker report and connectivity are relevant for successful integration without revealing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact behavior of the C32 reporting and any protocol variants can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on the public, high level communication context and operational considerations.

## Protocol Overview

The communication protocol of the C32 defines how the tracker identifies itself, reports position and status, and accepts optional remote commands. For users integrating C32 devices with Plaspy, the important aspects are the device ability to deliver location, status, and event data to a reachable Plaspy endpoint and the device support for the protocol family commonly used by CanTrack devices.

- The protocol enables the device to report real time location and telemetry data to a remote server.
- Identification fields in reports allow Plaspy to associate incoming messages with a registered device.
- Status and event messages convey alarms, ignition state, external voltage, and other telemetry that Plaspy can store and display.
- Support for remote upgrades via OTA and protocol variants such as GT06 are implementation details often exposed by the manufacturer.
- The protocol determines whether the tracker sends periodic reports, event driven updates, or both.

## How Plaspy Detects the Protocol

Plaspy is designed to receive messages from many tracker models using a unified endpoint and to automatically determine the tracker protocol used by an incoming connection. In most cases the device just needs to be configured to report to the Plaspy endpoint and no manual protocol selection in the platform is required.

- Plaspy listens on a single, shared port for all supported devices and automatically detects the tracker protocol.
- If the C32 is configured to send data to the Plaspy endpoint, Plaspy will attempt to match the incoming data to a known protocol.
- Users typically do not need to choose a protocol inside Plaspy when the device reports correctly to the Plaspy endpoint.
- Proper device identification and unique device ID reporting simplify automatic detection and onboarding.
- If automatic detection does not succeed, reviewing device configuration and manufacturer documentation usually resolves common issues.

## Transport and Connection Context

The C32 tracker can be configured to send its reports over either UDP or TCP depending on device capability and configuration. For Plaspy integration, devices should be pointed to the Plaspy server address and port so messages reach the platform reliably.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and user preference.
- Ensure network routing and firewall rules allow outbound connections from devices to the Plaspy endpoint.

## Protocol Compatibility Notes

- The C32 is reported to be compatible with Plaspy, but behavior can vary by firmware build and hardware revision.
- CanTrack devices commonly offer protocol families such as GT06 which may be selectable or present by default depending on firmware.
- Transport choice TCP versus UDP can affect delivery characteristics and should be selected according to network and tracker capabilities.
- Manufacturer OTA updates can change protocol behavior or message fields; validate after any firmware change.
- Hardware revisions or optional features like engine cut or external sensors may add or remove telemetry fields.
- Always confirm device settings such as reporting interval, alarm enabling, and server address when onboarding.

## Why Protocol Understanding Matters

Knowing how the C32 communicates at a protocol level helps ensure a smooth setup, reliable data flow, and efficient troubleshooting when using Plaspy. Understanding which messages the device sends and how it connects reduces guesswork during initial setup and when diagnosing connectivity or data issues.

- Helps verify that the device is sending the expected identification and position messages to Plaspy.
- Enables informed choices about TCP versus UDP and how that affects message delivery and retransmission.
- Supports troubleshooting when reports do not appear in Plaspy by narrowing the possible causes to configuration, transport, or firmware.
- Makes it easier to confirm that features like OTA, immobilizer control, or sensor telemetry are available and properly configured.
- Encourages routine validation after firmware updates or hardware changes to maintain consistent behavior.

## Why Use Plaspy with This Protocol

Using CanTrack C32 devices with Plaspy provides a practical path to centralized vehicle, motorcycle, or E bike monitoring. Plaspy’s automatic protocol detection and unified connection endpoint simplify onboarding so fleets and individual users can focus on operational visibility rather than low level protocol management.

Plaspy supports receiving device reports at d.plaspy.com and 54.85.159.138 on port 8888 using either UDP or TCP, and the platform automatically detects tracker protocols when devices are properly configured to report to that endpoint. To learn more about Plaspy and how it can support your CanTrack fleet, visit https://www.plaspy.com. For the most current device specific protocol documents, firmware notes, and hardware details consult the manufacturer website https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
