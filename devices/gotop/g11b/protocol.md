---
slug: /gotop/g11b/protocol
id: g11b-protocol
sidebar_label: Protocol
title: GOTOP - G11B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP G11B and how it communicates with Plaspy for reliable animal tracking
keywords:
  - GOTOP G11B protocol
  - GOTOP G11B GPS protocol
  - GOTOP G11B Plaspy compatibility
  - GOTOP tracking protocol
  - GOTOP communication protocol
  - G11B pet tracker protocol
  - G11B animal tracker protocol
  - 4G GPS tracker protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
---

# GOTOP - G11B Protocol

This page summarizes the public protocol context for using the GOTOP G11B tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in broad, non sensitive terms so installers, integrators and fleet managers can understand the role of the communication protocol when integrating the G11B into centralized tracking workflows.

The GOTOP G11B is a compact collar mounted 4G GPS tracker built for pets and farm animals. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior of any device protocol can vary with firmware version, hardware revision and manufacturer implementation, so this page provides high level guidance rather than firmware specific command details.

## Protocol Overview

At a high level the tracker reporting protocol defines how the G11B packages and sends location fixes, status updates and alarm events so those messages can be collected and presented by Plaspy. The protocol enables the device to identify itself, report telemetry such as GPS position and battery state, and signal alarms like geofence or movement events.

- Enables periodic and event driven transmission of GPS fixes and device status to the server
- Carries identifiers that allow Plaspy to associate reports with a specific G11B device
- Transports alarm and telemetry information used by Plaspy dashboards and alert rules
- Supports remote configuration channels offered by the manufacturer as alternate configuration paths
- Provides the foundation for history logging and route reconstruction inside Plaspy

## How Plaspy Detects the Protocol

Plaspy collects incoming device traffic at a single shared endpoint and automatically detects the tracker protocol for supported devices. In most deployments users do not need to choose a protocol inside Plaspy if the G11B is configured to report to the correct Plaspy server address and port.

- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- The Plaspy server domain is d.plaspy.com which resolves to the public server IP 54.85.159.138
- Plaspy uses a single port for all supported devices which simplifies device configuration
- When a G11B is configured to send reports to the Plaspy endpoint, protocol selection in the Plaspy UI is typically not required
- If a device does not appear, check device reporting settings, network access and firmware compatibility rather than forcing a protocol selection

## Transport and Connection Context

Connection context covers how the device delivers protocol messages to Plaspy without describing internal packet layouts. The G11B can be configured to use different transport layers depending on its firmware and the configuration mechanism provided by the manufacturer.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138; both may be used as the device reporting target
- Plaspy listens on port 8888 and that same port is used for all devices in the platform
- UDP is often used for lightweight telemetry while TCP can be selected where reliable delivery or session semantics are preferred
- Ensure network firewalls allow outbound connections to the Plaspy endpoint and port to permit device reporting

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields and configuration command sets
- Hardware revisions or product variants may implement different transport defaults such as UDP versus TCP
- Manufacturer configuration paths such as SMS, web app or SIM based settings can affect how the device points to Plaspy
- Transport selection matters; confirm whether your device is set to UDP or TCP on port 8888 before troubleshooting connectivity
- Plaspy will automatically detect the protocol when the device reports to the Plaspy endpoint but device side settings must be correct
- Validate device behavior against official manufacturer documentation for the specific firmware revision installed
- Test a device in a controlled environment before large scale deployment to confirm reporting frequency and alarm behavior

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure smooth setup, reliable telemetry and effective troubleshooting when integrating G11B devices into Plaspy. Clear knowledge of connection context and common variability reduces time to resolution for connectivity and reporting issues.

- Helps confirm the device is configured to report to the correct Plaspy endpoint and port
- Guides troubleshooting steps when location updates, alarms or telemetry are missing
- Clarifies whether transport choice is impacting delivery or latency for important events
- Informs reasonable expectations for feature availability based on firmware and hardware revision
- Supports planning for battery life and reporting frequency tradeoffs that affect telemetry continuity

## Why Use Plaspy with This Protocol

Pairing the GOTOP G11B with Plaspy brings collar mounted animal tracking into a central monitoring environment suitable for pet recovery, livestock oversight and mixed asset deployments. Plaspy collects the G11B telemetry and presents location, movement, battery state and alarm events in maps, history playback and alert channels so small fleets of animals can be monitored alongside other assets.

If you want to learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific protocol notes, firmware details and manufacturer guidance verify the latest information at the official GOTOP website https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
