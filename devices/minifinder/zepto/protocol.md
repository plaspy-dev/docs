---
slug: /minifinder/zepto/protocol
id: zepto-protocol
sidebar_label: Protocol
title: MiniFinder - Zepto Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for MiniFinder Zepto and how it communicates with Plaspy servers for real time tracking
keywords:
  - MiniFinder Zepto protocol
  - MiniFinder Zepto GPS protocol
  - MiniFinder Zepto communication protocol
  - Zepto tracker Plaspy compatibility
  - Zepto OBD2 tracker protocol
  - Plaspy device integration
  - Plaspy GPS tracker protocol
  - vehicle tracking Zepto protocol
  - Zepto telemetry and reporting
  - MiniFinder tracker compatibility
---

# MiniFinder - Zepto Protocol

This page provides a public, non sensitive overview of the MiniFinder Zepto communication context when the device is used with Plaspy. It explains how the Zepto typically reports location and OBD derived telemetry to Plaspy and what role the tracker reporting protocol plays in delivering live position, events, and historical data to your Plaspy account.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behaviour can vary by Zepto firmware version, hardware revision, and manufacturer implementation, so the notes below focus on public protocol context rather than device internals.

## Protocol Overview

The device reporting protocol defines how the Zepto formats and transmits positional fixes, OBD telemetry, and event notifications to a server. For integration with fleet platforms like Plaspy the protocol’s role is to ensure that each update contains enough identity and telemetry information for the platform to attribute, display, and log device activity reliably.

- Enables the Zepto to deliver periodic and event driven location updates to the Plaspy endpoint.
- Includes identification data that lets Plaspy associate incoming messages with the correct device instance.
- Carries OBD sourced telemetry and driving signals that Plaspy can surface as ignition, trip, and engine hour data.
- Supports event reporting such as geofence breaches, overspeed alerts, and motion or sabotage alarms for real time notifications.
- Allows batching or historical upload so stored trips and logs on the device can be consumed by Plaspy for playback and reporting.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint for incoming device traffic and automatically determines the correct tracker protocol for each connection when the device is properly configured to report to the platform. In most deployments, users do not have to manually select a protocol inside Plaspy when the tracker points to the Plaspy endpoint and uses the supported transport.

- Plaspy’s public server domain for device reporting is d.plaspy.com.
- The Plaspy server IP for device connections is 54.85.159.138.
- Plaspy uses port 8888 for device reporting and this same port is used across all supported devices.
- Devices compatible with Plaspy can be configured to report using UDP or TCP on port 8888.
- When the Zepto is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will automatically detect the protocol used by that device.
- Proper device identification and consistent transport settings reduce setup time and minimize the need for manual protocol selection.

## Transport and Connection Context

Connection settings determine how Zepto packets reach Plaspy but do not change the public responsibilities of the tracker protocol itself. Zepto is an OBD powered tracker that streams location and telemetry over cellular networks to Plaspy, and the connection can be established using either UDP or TCP depending on device configuration and network considerations.

- Zepto may be configured to point at the Plaspy reporting endpoint using the domain d.plaspy.com.
- As an alternative, devices can be configured to report directly to the Plaspy reporting IP address 54.85.159.138.
- Plaspy receives device traffic on port 8888; this same port is used for all devices on the platform.
- The device can use either UDP or TCP on port 8888 depending on the tracker configuration and carrier network behavior.
- Using the Plaspy domain name can simplify device provisioning while direct IP addressing is available as an alternative for specific network setups.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and event semantics; verify the Zepto firmware version when validating behaviour.
- Hardware revisions or regional variants may alter supported GNSS or cellular bands and therefore affect connectivity in some markets.
- Manufacturer configuration tools or provisioning services may expose transport or reporting options that change whether the device uses UDP or TCP.
- Some advanced features such as immobilizer control or Bluetooth sensor support depend on the specific device build and ecosystem accessories.
- Confirm which OBD PIDs and vehicle signals the Zepto reports in your vehicle model and firmware to ensure Plaspy receives the expected telemetry.
- Always validate compatibility with the latest MiniFinder documentation and release notes when planning large scale deployments.

## Why Protocol Understanding Matters

A practical understanding of the Zepto communication protocol helps installers and fleet managers ensure reliable data flow, quicker troubleshooting, and predictable behavior over time when devices report into Plaspy.

- Reduces time to first fix by confirming the device points to d.plaspy.com or 54.85.159.138 on port 8888 using an appropriate transport.
- Helps diagnose connectivity issues by checking whether the device is using UDP or TCP and whether cellular registration and GNSS fixes are present.
- Ensures event reporting such as geofence triggers and overspeed alerts arrive correctly for immediate notification workflows.
- Simplifies firmware update planning because protocol or field changes in new firmware can affect which data points Plaspy receives.
- Improves long term reliability by aligning device configuration with Plaspy expectations for identity, heartbeat, and telemetry cadence.

## Why Use Plaspy with This Protocol

Using the MiniFinder Zepto with Plaspy gives organizations and private users a compact OBD solution that feeds continuous location and OBD sourced telemetry into a unified tracking and reporting platform. The Zepto’s plug and play OBD design, multi constellation GNSS, and cellular coverage make it suitable for fleet monitoring, discreet anti theft deployments, and tax compliant trip journals where persistent, accurate location and event data are essential.

To learn more about how Plaspy handles device integrations and the services available for fleet visibility, visit https://www.plaspy.com. Protocol support, firmware behaviour, and device implementation details can change over time; verify the latest Zepto specific information and manufacturer notes at https://minifinder.se/.
