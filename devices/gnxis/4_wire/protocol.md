---
slug: /gnxis/4_wire/protocol
id: 4_wire-protocol
sidebar_label: Protocol
title: Gnxis - 4-wire Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Gnxis 4-wire GPS tracker and Plaspy compatibility with connection and transport guidance
keywords:
  - Gnxis 4-wire protocol
  - Gnxis 4-wire GPS protocol
  - Gnxis 4-wire tracking protocol
  - Gnxis GPS tracker protocol
  - 4-wire tracker Plaspy compatibility
  - vehicle tracking Gnxis 4-wire
  - fleet management Gnxis 4-wire
  - Gnxis tracker communication
  - Plaspy device protocol
  - Gnxis 4-wire LTE tracker
---

# Gnxis - 4-wire Protocol

This page summarizes the public protocol context for using the Gnxis 4-wire GPS tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in broad, non sensitive terms so fleet managers and integrators can understand connection expectations and high level behavior.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general context rather than firmware level details.

## Protocol Overview

The device communication protocol defines how the Gnxis 4-wire unit sends location, status, and alert information to a remote server and how it receives optional remote commands. For integration with Plaspy, the protocol must allow the tracker to identify itself and deliver time stamped position and basic event data over a supported transport.

- Enables periodic and event driven location reports for real time tracking.
- Carries basic device identification so Plaspy can associate reports with the correct asset.
- Transmits security and status alerts such as ignition, movement, and power loss events.
- Supports configuration and remote control commands when the device firmware exposes them.
- Provides the payload that Plaspy maps to vehicle location, status, and alert views.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a single shared endpoint and automatically detects the tracker protocol used by the device. In normal setups the user does not need to select a protocol inside Plaspy manually if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port.
- Plaspy can accept reports from a device and match its format to a supported protocol automatically.
- When a Gnxis 4-wire unit is configured to send reports to the Plaspy endpoint, Plaspy will detect the reporting pattern and classify the device accordingly.
- If automatic detection is not successful, reviewing device reporting settings and manufacturer guidance typically resolves configuration mismatches.

## Transport and Connection Context

The Gnxis 4-wire tracker can use standard cellular transports to send data to a backend server. For Plaspy compatibility, the important connection details are the server address and the transport mode configured on the device.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy endpoint.
- Plaspy uses the same port for all supported devices which simplifies device configuration.
- Choose UDP for lower overhead reporting or TCP for connection oriented delivery if the device firmware provides both options.
- Ensure the device APN and GPRS settings are correct so the tracker can reach the Plaspy endpoint over LTE GSM or GPRS networks.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported events, and optional features; verify the device firmware level when assessing compatibility.
- Hardware revisions or connector variants such as 4-wire versus 8-wire can affect available inputs and alert wiring but do not change the high level reporting requirement.
- Manufacturer configuration menus may offer both UDP and TCP transports; select the transport that matches your network and reliability needs.
- Some features such as fuel cut or remote immobilization are optional and may require specific firmware or hardware options from the manufacturer.
- Always validate the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy integration.
- When in doubt, consult the official Gnxis documentation for model specific instructions and the correct wiring for 4-wire installations.

## Why Protocol Understanding Matters

A clear understanding of the tracker communication protocol helps ensure a smooth setup, reliable data flow to Plaspy, and faster troubleshooting when events or missing reports occur.

- Confirms the device is sending the expected identifiers so Plaspy can associate data with the correct asset.
- Helps choose the correct transport and network settings to maximize reliability and battery life.
- Aids in diagnosing missing location reports, noisy telemetry, or mismatched event flags.
- Supports planning for firmware updates and assessing whether a unit supports the features you need.
- Improves integration outcomes when combining Gnxis 4-wire units with additional sensors or power wiring in vehicles.

## Why Use Plaspy with This Protocol

Using the Gnxis 4-wire tracker together with Plaspy gives organizations centralized visibility into vehicle location and basic security events. Plaspy maps the tracker reports to live location, status indicators, and historical playback so operations teams can monitor fleets and respond to alerts efficiently.

If you are deploying Gnxis 4-wire devices at scale, Plaspy simplifies endpoint management by using a single port and automatic protocol detection, reducing per device setup steps while still supporting UDP or TCP reporting as the tracker requires. To learn more about Plaspy and how it works with a wide range of trackers visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the Gnxis manufacturer official website as implementations can change over time.
