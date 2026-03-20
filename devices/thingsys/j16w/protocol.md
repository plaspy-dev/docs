---
slug: /thingsys/j16w/protocol
id: j16w-protocol
sidebar_label: Protocol
title: ThingSys - J16W Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ThingSys J16W and Plaspy integration
keywords:
  - ThingSys J16W protocol
  - ThingSys J16W GPS protocol
  - ThingSys J16W Plaspy compatibility
  - J16W tracking protocol
  - J16W GPS tracker communication
  - Plaspy device protocol
  - J16W GT06 protocol
  - vehicle tracking ThingSys J16W
  - J16W fleet management protocol
  - J16W telemetry Plaspy
---

# ThingSys - J16W Protocol

This page provides a public, high level description of the ThingSys J16W communication protocol as it relates to integration with Plaspy. It focuses on connection context and the role of the tracker protocol in reporting position and vehicle telemetry to Plaspy without exposing vendor private implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a unit reports to the Plaspy endpoint. The J16W may behave differently depending on firmware, hardware revision, or optional OEM protocol selections, so exact message behavior can vary between units and over time.

## Protocol Overview

The protocol implemented by a J16W governs how the device identifies itself, reports GNSS position, and sends vehicle inputs and events to a remote server. For integration with Plaspy the protocol is the transport language that allows location, ignition state, relay events, and optional voice or SOS events from the J16W family to be mapped into Plaspy dashboards and alerts.

- The J16W commonly ships with GT06 style reporting and also supports several optional or OEM protocols used by integrators.
- Protocol messages convey position fixes, timestamp, I O status such as ACC or ignition, and event flags like SOS or relay activation.
- The tracker protocol enables Plaspy to correlate device identity with telemetry so data appears correctly in fleet views and alerts.
- Protocol choice and firmware settings affect which telemetry fields are available to Plaspy and how often the device reports.
- Properly configured reporting preserves offline buffers and retransmits stored points so Plaspy receives a continuous history of device movement.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and port and determines the appropriate protocol handler automatically. In most cases a properly configured J16W that reports to the Plaspy endpoint will be recognized without manual protocol selection inside the Plaspy platform.

- Devices report to Plaspy using the public endpoint d.plaspy.com or its public server IP 54.85.159.138 on port 8888.
- Plaspy uses a single port, 8888, for all supported devices to simplify device configuration and provisioning.
- Plaspy automatically detects the tracker protocol so users normally do not need to pick a protocol inside Plaspy when the device is reporting correctly.
- If a device supports multiple protocol modes the correct firmware setting must be applied so the tracker speaks a protocol Plaspy can parse.
- When adding new units, validate that the device is configured to point at the Plaspy endpoint to allow automatic detection and onboarding.

## Transport and Connection Context

The J16W supports standard IP transport options that determine how telemetry packets are delivered to the server. Connection type and network reliability can influence reporting behavior and the choice between TCP and UDP may be controlled by device settings or provisioning tools.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and provisioning choices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or the server IP 54.85.159.138 as the reporting target.
- Plaspy receives tracking and telemetry data on port 8888 for all devices, maintaining a unified server endpoint for easier fleet provisioning.
- Use the transport option recommended for your deployment and match the device configuration to the chosen transport to ensure reliable delivery.
- Network factors such as cellular coverage, APN setup, and roaming behavior affect how the J16W maintains connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions may enable or disable protocol variants and optional telemetry fields, so verify the running firmware before assuming full compatibility.
- Hardware revisions and the J16W family variants such as the J16Wm may expose extra inputs or voice events that require protocol support on both device and server sides.
- The J16W commonly supports GT06 and a number of OEM style protocols; confirm which protocol is enabled for a given unit during provisioning.
- Transport selection between TCP and UDP can change retransmission and session behavior; ensure device transport matches deployment expectations.
- Offline storage and resend behavior is firmware dependent and affects how historical points are recovered by Plaspy after connectivity gaps.
- Always validate device settings with the manufacturer documentation and test a representative sample of units before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the J16W helps ensure successful setup, reliable reporting to Plaspy, and effective troubleshooting during deployments. Knowing which features the active protocol exposes makes it easier to map device telemetry into Plaspy alerts, geofences, and analytics.

- Confirms that the device is sending the expected position and I O fields such as ACC state and relay events.
- Helps diagnose reporting gaps by checking transport, APN, and whether the device is pointed to d.plaspy.com or the server IP.
- Clarifies feature availability across variants like relay control, SOS, and microphone events so Plaspy can surface those events appropriately.
- Enables predictable provisioning when many units are deployed with consistent protocol and transport settings.
- Reduces integration time by ensuring the device firmware and protocol mode match Plaspy expectations before fleet onboarding.

## Why Use Plaspy with This Protocol

Using the ThingSys J16W with Plaspy delivers a practical tracking solution for organizations that need resilient vehicle telemetry, ignition monitoring, and remote relay control. The J16W family is designed for vehicle environments and when configured to report to Plaspy it feeds position, status, and event data into real time tracking, alerts, and fleet reports.

Plaspy provides a unified endpoint and automatic protocol detection to simplify bringing J16W units online. To learn more about the Plaspy platform and how it supports fleet use cases, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and you should verify the latest device specific protocol documentation with the manufacturer at https://www.thingsys.com/.
