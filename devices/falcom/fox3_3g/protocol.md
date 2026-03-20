---
slug: /falcom/fox3_3g/protocol
id: fox3_3g-protocol
sidebar_label: Protocol
title: Falcom - FOX3-3G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Falcom FOX3-3G and how it communicates with Plaspy
keywords:
  - Falcom FOX3-3G protocol
  - Falcom FOX3-3G GPS protocol
  - FOX3-3G communication
  - FOX3-3G tracking protocol
  - Falcom protocol compatibility
  - Plaspy device integration
  - vehicle telematics protocol
  - FOX3-3G GNSS telemetry
  - Falcom tracker Plaspy
  - FOX3-3G connectivity
---

# Falcom - FOX3-3G Protocol

This page summarizes the public protocol context for using the Falcom FOX3-3G Series tracker with Plaspy. It focuses on how the device communicates in general terms, which connection endpoints Plaspy exposes for reporting, and what aspects of the tracker reporting behavior are relevant when integrating with a fleet management platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available telemetry can vary with device firmware, hardware revision, and manufacturer implementation, so this page provides standard, non sensitive guidance while recommending that integrators verify device specific details with Falcom where necessary.

## Protocol Overview

The tracker protocol defines how the FOX3-3G sends telemetry, status, and event information to a remote server and how the server can deliver commands or configuration. For Plaspy integration the protocol role is primarily to ensure reliable delivery of location and vehicle data so the platform can present actionable information.

- Enables reporting of GNSS location, time, and movement status to Plaspy for mapping and history.
- Transmits device state and I O signals so inputs, outputs, and auxiliary boxes like IOBOX can be represented in the platform.
- Carries periodic or event driven messages that allow Plaspy to reconstruct trips, alerts, and behavioral data.
- Supplies device identification so Plaspy can associate incoming streams to the correct tracker instance.
- May include encrypted or premium feature payloads depending on FOX3-3G configuration and firmware capabilities.

## How Plaspy Detects the Protocol

Plaspy accepts connections on a single shared endpoint and port for all supported trackers and uses that endpoint to automatically detect which protocol a device is using. In practice this means a correctly configured FOX3-3G will report to the Plaspy endpoint and the platform will identify the protocol without manual selection.

- The Plaspy domain for device reporting is d.plaspy.com
- The Plaspy server IP used for reporting is 54.85.159.138
- Plaspy listens on port 8888 for incoming tracker connections
- Devices may be configured to use either UDP or TCP on port 8888 depending on model and setup
- All devices in Plaspy use the same port and the platform performs automatic protocol detection
- If the device reports to the Plaspy endpoint and network routing is correct, manual protocol selection in Plaspy is typically unnecessary

## Transport and Connection Context

Connection transport and DNS choices determine how the FOX3-3G reaches Plaspy but do not change the high level role of the protocol. The FOX3-3G family supports multiple transport options and accessory boxes that influence what data is available to send.

- The tracker may be configured to send data using UDP or TCP on port 8888 depending on the specific device model and configuration options
- Devices can point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 for reporting
- Plaspy uses the same port 8888 for all supported devices to simplify device setup and routing
- Transport choice affects delivery semantics but not the fact that the protocol conveys location and status information to Plaspy
- Ensure network rules and firewalls allow outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888 from the device network

## Protocol Compatibility Notes

- FOX3-3G functionality and reported telemetry can vary by firmware version and hardware revision; always confirm the installed firmware level when troubleshooting.
- Some advanced features such as data encryption, multiple history modes, eco drive monitoring, and jamming detection are part of the device feature set and may influence what is reported to the server.
- Accessories like IOBOX MINI, IOBOX CAN, and IOBOX WLAN extend available inputs and may change the types of messages the device sends without changing the base connection endpoint.
- Audio interfaces are available in the FOX3-3G-AU model only and other models in the series do not include audio features.
- Transport selection between UDP and TCP can be set per device and may need alignment with network policies in the field.
- Validate protocol and feature support against the device documentation for the installed model and firmware to confirm Plaspy compatibility.

## Why Protocol Understanding Matters

Understanding how the FOX3-3G communicates helps ensure reliable delivery of telemetry, faster troubleshooting, and predictable behavior after firmware updates or hardware changes. Clear expectations about the protocol reduce integration time and improve operational visibility.

- Helps verify the device is correctly pointing to d.plaspy.com or the Plaspy server IP and port so data reaches the platform
- Aids in diagnosing connectivity issues such as dropped packets, firewall blocks, or transport mismatches
- Informs decisions about enabling optional features like IOBOX extensions or premium logging modes
- Supports planning for firmware upgrades and understanding how updates may alter reporting or configuration options
- Reduces false positives in alerting by clarifying how and when the device reports status and events

## Why Use Plaspy with This Protocol

Using the FOX3-3G Series with Plaspy provides organizations with a consolidated way to collect vehicle location, behavior, and I O state data through a single reporting endpoint. The combination of Falcom hardware flexibility and Plaspy automatic protocol detection simplifies deployment and ongoing management for mixed fleets.

If you want to learn more about Plaspy and how it works with devices like the Falcom FOX3-3G, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware options consult the manufacturer at https://www.falcom.de as protocol support and device behavior can change over time and should be confirmed with the official Falcom documentation.
