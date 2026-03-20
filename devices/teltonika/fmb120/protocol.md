---
slug: /teltonika/fmb120/protocol
id: fmb120-protocol
sidebar_label: Protocol
title: Teltonika - FMB120 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Teltonika FMB120 with the Plaspy tracking platform
keywords:
  - Teltonika FMB120 protocol
  - Teltonika FMB120 GPS protocol
  - FMB120 tracking protocol
  - Teltonika GPS tracker protocol
  - FMB120 Plaspy compatibility
  - GPS tracker communication protocol
  - vehicle tracking protocol Plaspy
  - FMB120 telemetry integration
  - Teltonika fleet tracking
  - Plaspy device protocol
---

# Teltonika - FMB120 Protocol

This page provides public protocol context for using the Teltonika FMB120 with Plaspy. It focuses on how the device communicates with the Plaspy platform in broad, non sensitive terms so fleet managers and integrators understand what to configure and verify when onboarding the FMB120 for live tracking, event telemetry, and remote control workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker reporting protocol when a device sends data to the Plaspy endpoint. Exact protocol behavior observed in the field can vary with device firmware level, hardware revision, and manufacturer implementation, so this page covers the general communication context rather than firmware specific internals.

## Protocol Overview

The FMB120 uses a cellular link to transmit location, status, and event telemetry to a remote server. The device supports common vehicle telematics features such as GPS position reporting, digital I O status, remote immobilizer control, 1 Wire temperature sensors, and Bluetooth LE peripherals. In integration terms the protocol is the mechanism that allows the tracker to identify itself, send usable positional and telemetry data, and receive server side commands or configuration updates.

- Enables the device to report GPS position, timestamps, and basic status to Plaspy for live maps and history.
- Carries digital I O and sensor telemetry so Plaspy can interpret ignition, door or alarm events and trigger rules.
- Allows remote commands such as immobilizer control to be delivered from Plaspy when supported by device firmware.
- Supports transmission of auxiliary sensor data from Bluetooth LE and 1 Wire devices so Plaspy can display temperature and other metrics.
- Provides device identity and session context so Plaspy can associate incoming messages with the correct fleet asset.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and uses the incoming message stream to determine which tracker protocol is in use. In most cases you do not need to select a specific protocol inside Plaspy if the FMB120 is configured to report to the Plaspy endpoint and is sending standard telemetry for its firmware version.

- Plaspy automatically detects the tracker protocol when the device establishes a connection and begins reporting.
- The shared Plaspy endpoint reduces configuration steps for integrators because all devices use the same server and port.
- Users typically only need to point the FMB120 to the Plaspy server and ensure the device is permitted to send telemetry.
- If a device does not appear online, verifying device server settings and firmware compatibility is the usual first step.
- Automatic detection helps when fleets mix multiple tracker models since Plaspy identifies each device by its incoming data.

## Transport and Connection Context

The FMB120 may be configured to use either UDP or TCP transport depending on device settings and firmware capabilities. Plaspy provides a consistent endpoint so devices report to the same server address and port used by all supported devices, simplifying deployment and firewall configuration for operations teams.

- Plaspy server domain for tracker reporting is d.plaspy.com.
- A public Plaspy server IP available for configuration is 54.85.159.138.
- The shared port used by Plaspy for device connections is 8888 and devices may be configured to use UDP or TCP on this port.
- All devices in Plaspy use the same port which simplifies firewall and network setup for fleets.
- Ensure the chosen transport protocol matches the FMB120 device configuration and any carrier constraints in your region.

## Protocol Compatibility Notes

- Firmware revisions can introduce protocol behavior changes or new fields so always check the FMB120 firmware level during testing.
- Hardware SKUs and packaging options sometimes expose different interfaces or default settings that affect how the device reports telemetry.
- Transport selection between UDP and TCP may affect delivery behavior under poor network conditions; choose the mode that suits your reliability and latency needs.
- Manufacturer settings or custom configurations applied by resellers can alter default server addresses or reporting intervals.
- Validate compatibility against current Teltonika documentation and test a small number of devices before mass rollout.
- Plaspy s automatic detection reduces manual protocol selection but does not replace verifying device configuration and firmware compatibility.

## Why Protocol Understanding Matters

Understanding the communication protocol for the FMB120 helps teams ensure reliable onboarding, effective troubleshooting, and predictable long term behavior when devices are managed through Plaspy. Clear knowledge of what the tracker sends and what Plaspy expects reduces time to deploy and improves operational uptime.

- Speeds up initial setup by verifying the device points to the correct Plaspy endpoint and transport.
- Helps diagnose connectivity issues by confirming whether the device is reaching the server and using the expected port.
- Improves rule and alert accuracy when you know which telemetry and event types the device provides.
- Assists in planning firmware updates since changes can affect how data is encoded or which fields are reported.
- Supports informed decisions about sensor use such as Bluetooth LE or 1 Wire attachments that extend telemetry capabilities.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB120 with Plaspy provides a practical and cost conscious tracking solution for fleets that need continuous location, basic telemetry, and remote control capabilities. The FMB120 s compact form factor, support for Bluetooth LE sensors and 1 Wire temperature probes, and remote immobilizer features pair naturally with Plaspy s live maps, event alerts, and rule based workflows to deliver useful operational visibility.

To learn more about Plaspy and how it integrates with a broad range of trackers including the FMB120 visit https://www.plaspy.com. Please verify device specific protocol details, firmware changes, and the latest implementation notes with Teltonika on the official site https://www.teltonika-gps.com/ since manufacturer behavior and supported features can change over time.
