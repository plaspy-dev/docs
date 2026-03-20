---
slug: /teltonika/fmb920/protocol
id: fmb920-protocol
sidebar_label: Protocol
title: Teltonika - FMB920 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB920 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Teltonika FMB920 protocol
  - Teltonika FMB920 GPS protocol
  - FMB920 Plaspy compatibility
  - Teltonika tracker communication
  - FMB920 tracking protocol
  - Plaspy device compatibility
  - FMB920 telemetry integration
  - vehicle tracking Plaspy
  - fleet management tracker
  - GPS tracker protocol guide
---

# Teltonika - FMB920 Protocol

This page covers the public protocol context for using the Teltonika FMB920 with Plaspy. It describes how the tracker typically communicates with Plaspy, what role the device protocol plays in successful integration, and which connection settings are used by the Plaspy collection endpoint. The focus here is on public, non sensitive protocol context rather than internal parser implementation or firmware internals.

The FMB920 is a compact, Plaspy compatible GPS tracker designed for discreet installations, with features such as an internal backup battery, remote immobilizer support, and Bluetooth LE for external sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behaviour can vary by firmware version, hardware revision, and manufacturer implementation. For device specific protocol details always consult manufacturer documentation.

## Protocol Overview

The tracker reporting protocol is the mechanism by which the FMB920 sends location, status, and sensor data to a remote server like Plaspy. It enables the device to identify itself, transmit periodic or event driven updates, and deliver telemetry that Plaspy can convert into location, alerts, and historical records.

- Enables periodic location and event reporting so Plaspy can display live positions and playback history.
- Carries telematics inputs such as ignition, door, alarm and basic fuel data for event driven logic in Plaspy.
- Provides a way to surface Bluetooth LE sensor data from paired devices to the remote platform.
- Includes device identification and timestamps so Plaspy can correlate reports with the correct asset.
- Supports remote management workflows when used with manufacturer tools for firmware and configuration updates.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared collection endpoint and port and detects the reporting protocol automatically. This means you normally do not need to select a protocol setting inside Plaspy if the FMB920 is configured to send data to the Plaspy endpoint correctly.

- Plaspy automatically detects the tracker protocol when a device sends data to the shared endpoint.
- The Plaspy server endpoint for device reporting is d.plaspy.com and resolves to 54.85.159.138.
- Plaspy uses a single port for all supported devices, simplifying device configuration.
- When the tracker is configured to report to Plaspy, the platform matches incoming data to known device patterns and routes it to the correct account and asset.
- If a device is not appearing, check that it is pointed to the Plaspy endpoint and that network connectivity and APN settings are valid.

## Transport and Connection Context

Connection transport and destination are important only to the extent that the tracker can reach the Plaspy collection endpoint reliably. The FMB920 can be configured to use different transport modes depending on device firmware and installer setup.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts device reports on port 8888; all devices in Plaspy use the same port for collection.
- Devices may point to the domain d.plaspy.com or directly to the IP 54.85.159.138 for reporting.
- Ensure the tracker APN and mobile data connectivity are working so reports can reach the Plaspy endpoint.
- Transport selection (UDP vs TCP) can affect reliability and delivery semantics; choose the mode supported and recommended for your deployment.

## Protocol Compatibility Notes

- Protocol behaviour can change between firmware releases. Verify the tracker firmware level when troubleshooting protocol differences.
- Hardware revisions or regional variants of the FMB920 can expose slightly different features or default settings.
- Manufacturer configuration tools like Teltonika Configurator and FOTA WEB are the authoritative way to review and change device reporting settings.
- The choice of UDP or TCP and the target endpoint must match Plaspy collection settings to ensure successful reporting.
- Bluetooth LE features and external sensor forwarding may require additional configuration on the tracker to expose data to the server.
- Always validate device settings against official Teltonika documentation for model specific details.

## Why Protocol Understanding Matters

Understanding how the FMB920 communicates with Plaspy helps reduce setup time, improves troubleshooting, and supports reliable long term operations. Clear knowledge of the connection context and common compatibility factors makes it easier to resolve reporting gaps and maintain fleet visibility.

- Confirms the device is pointed to the correct Plaspy endpoint and port so reports are received.
- Helps isolate network issues such as APN or transport mismatches that prevent data delivery.
- Guides firmware and configuration decisions when new features or changes are required.
- Enables predictable behaviour for event reporting, immobilizer workflows, and sensor forwarding.
- Supports effective coordination with installers, Teltonika documentation, and Plaspy support if deeper investigation is needed.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB920 with Plaspy gives small vehicle fleets and asset managers a compact tracker option that reports location, basic telemetry, and sensor data into a single platform for monitoring and response. The device’s slim profile, internal backup battery, remote immobilizer capability, and Bluetooth LE support make it a fit for discreet installations and anti theft workflows while delivering the core data Plaspy needs for live tracking and alerts.

To learn more about Plaspy and how it integrates with trackers like the FMB920 visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and implementation guidance consult the manufacturer documentation at https://www.teltonika-gps.com/ since protocol support and firmware behaviour can change over time.
