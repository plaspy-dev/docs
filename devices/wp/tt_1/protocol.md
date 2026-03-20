---
slug: /wp/tt_1/protocol
id: tt_1-protocol
sidebar_label: Protocol
title: WP - TT-1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the WP TT-1 tracker with Plaspy for reliable trailer and asset tracking
keywords:
  - WP TT-1 protocol
  - WP TT-1 GPS protocol
  - WP TT-1 communication protocol
  - WP TT-1 tracking protocol
  - TT-1 Plaspy compatibility
  - TT-1 GPS tracker protocol
  - Plaspy device protocol
  - Plaspy tracker integration
  - trailer tracking protocol
  - fleet asset tracking protocol
---

# WP - TT-1 Protocol

This page summarizes the public protocol context for integrating the WP TT-1 trailer tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, what to expect during setup, and which connection settings are used by Plaspy. The description draws on the TT-1 product characteristics such as high sensitivity GPS, GSM GPRS connectivity, multiple tracking modes, geofencing, and robust power management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and message composition can vary by firmware version, hardware revision, and manufacturer implementation, so the information below provides a public, general view of the communication context rather than firmware specific internals.

## Protocol Overview

The protocol used by the TT-1 enables the tracker to reliably send location, status, and event data from the device to the Plaspy backend so fleet managers can monitor trailers and other assets. The following points describe the general role of the device reporting protocol when used with Plaspy.

- Enables delivery of position reports, alarms, and status fields from the TT-1 to Plaspy for processing and display.
- Provides a way for the tracker to identify itself so Plaspy can associate incoming messages with the correct device record.
- Carries telemetry such as GPS coordinates, battery level, ignition/idle status, mileage, and geo‑fence events in a transportable form.
- Supports multiple tracking modes available on the TT-1 such as time interval, distance interval, smart mode, and idle tracking by transmitting configured reports to the server.
- Allows Plaspy to receive periodic or event driven updates so operational visibility and alerts function as expected.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and attempts to identify the tracker protocol automatically. When a TT-1 is configured to report to Plaspy, manual protocol selection in the platform is typically unnecessary.

- Plaspy listens on a common server endpoint so devices reporting to that endpoint are detected by the platform.
- The platform automatically detects the tracker protocol when incoming reports match a supported device pattern.
- Users generally only need to configure the device to report to Plaspy; Plaspy handles the protocol identification on the backend.
- If a device does not appear, validation steps include checking network connectivity, server settings on the device, and firmware compatibility.
- Accurate device identification depends on the TT-1 sending a recognizable device identifier and using supported transport settings.

## Transport and Connection Context

The TT-1 can be configured to use standard IP transport methods to send data to Plaspy. Plaspy supports both UDP and TCP transports on the same platform port, and devices may be pointed to either the Plaspy domain or the server IP.

- Devices report to the Plaspy server domain d.plaspy.com or can be configured to report to the server IP 54.85.159.138.
- The Plaspy platform uses port 8888 for device reporting and this port is shared across all supported devices.
- The TT-1 may be configured to send data using either UDP or TCP on port 8888 depending on device capability and local network requirements.
- Using the domain name d.plaspy.com allows normal DNS based routing while the server IP can be used for direct routing or troubleshooting.
- Confirm device network permissions and APN settings so outbound connections to Plaspy succeed from the tracker SIM.

## Protocol Compatibility Notes

- Firmware versions can change the exact message contents and available features; always verify the TT-1 firmware level when diagnosing compatibility.
- Hardware revisions or model variants derived from the VT10/VT200 family may show subtle protocol differences despite similar feature sets.
- Transport selection (UDP versus TCP) should match device configuration and expected network behavior to ensure reliable delivery.
- Manufacturer configuration commands and default reporting endpoints may differ by region; check the device configuration before pointing it to Plaspy.
- Geo‑fence, alarm, and power management behavior can be influenced by local settings on the device as well as by how Plaspy interprets reported fields.
- When in doubt, compare device reports against current manufacturer documentation to confirm required fields for Plaspy processing.

## Why Protocol Understanding Matters

Understanding how the TT-1 communicates with Plaspy helps ensure successful installation, reliable reporting, and efficient troubleshooting for fleet operations. Knowing the connection context and variations reduces setup time and prevents common connectivity issues.

- Facilitates correct device configuration so the TT-1 reports to d.plaspy.com or 54.85.159.138 on port 8888 and uses the expected transport.
- Speeds up troubleshooting when reports are missing by focusing checks on APN, transport type, server settings, and firmware level.
- Helps administrators confirm that tracking modes like time interval and smart mode are producing the expected report cadence in Plaspy.
- Reduces integration friction by clarifying that Plaspy uses a shared port and automatic protocol detection, so manual selection is usually unnecessary.
- Aids long term maintenance by highlighting where firmware upgrades or hardware revisions might affect behavior seen by Plaspy.

## Why Use Plaspy with This Protocol

Using the WP TT-1 with Plaspy gives organizations the visibility needed to manage trailers and other assets effectively. The TT-1’s tracking features — including high sensitivity GPS, multiple reporting modes, geofencing, roaming control, and power management — combine with Plaspy’s device handling to deliver usable location and event data for operations and safety workflows.

If you are evaluating the TT-1 for use with Plaspy, point the device to d.plaspy.com or 54.85.159.138 and configure the tracker to use UDP or TCP on port 8888. Plaspy will automatically detect the tracker protocol and process incoming reports so you can focus on configuring tracking modes, geofences, and alerts.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information on the manufacturer site at http://www.wondeproud.com/ before completing a large scale deployment.
