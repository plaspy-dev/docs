---
slug: /cantrack/c32plus/configuration
id: c32plus-configuration
sidebar_label: Configuration
title: CanTrack - C32Plus Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack C32Plus showing Plaspy server settings and practical setup steps for integration
keywords:
  - CanTrack C32Plus configuration
  - CanTrack C32Plus setup
  - CanTrack C32Plus Plaspy
  - C32Plus server configuration
  - CanTrack tracker setup
  - C32Plus GT06 configuration
  - GPS tracker configuration
  - vehicle tracker setup
  - C32Plus GPRS setup
  - Plaspy device configuration
---

# CanTrack - C32Plus Configuration

This page documents the public configuration context for using the CanTrack C32Plus with Plaspy. It summarizes the shared Plaspy server settings you will point the device to and describes the practical steps and checks installers and fleet managers commonly perform to get a C32Plus reporting to Plaspy. Use this as a technical reference for integration and pair it with the device manufacturer documentation for any device specific instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, which simplifies integration for GT06 compatible devices like the C32Plus. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so apply the server values listed here in the manufacturer configuration tool or SMS/console method you use for the device.

## Configuration Overview

The objective of configuration is to point the C32Plus at Plaspy and confirm reliable reporting of location, alarms and telemetry. With the correct Plaspy server endpoint and port set on the tracker, the device will forward position updates and event messages for processing, visualization and alerting inside Plaspy.

- Configure the device to send data to Plaspy server settings and the shared port used by Plaspy.
- Validate connectivity from the device to the Plaspy endpoint and confirm GPRS data session availability.
- Ensure the device protocol (for example GT06) is compatible or selectable so Plaspy automatically interprets incoming data.
- Save and apply the configuration, then verify the tracker appears in Plaspy and is reporting expected location and alarm events.
- If needed, perform firmware checks and follow manufacturer guidance for OTA updates before mass deployment.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the C32Plus:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device sends data to the shared port

Note that Plaspy uses the same port for all devices supported by the platform, which streamlines configuration across models.

## Typical Requirements Before Setup

- A powered and installed C32Plus with access to the manufacturer configuration method (software, SMS commands, or configuration tool).
- Active SIM card with a data plan and GPRS enabled if the device will use GSM/GPRS for transport.
- A clear expectation of where the device will be mounted so you can verify GNSS reception and proper wiring to vehicle power.
- Access to the device manual or vendor tool to enter server domain or IP and choose transport type.
- Account access to Plaspy or an administrator who can confirm device registration and verify incoming messages in the Plaspy dashboard.

## How This Tracker Connects to Plaspy

When configured, the C32Plus sends position, alarm and telemetry data over GPRS to Plaspy's shared server endpoint and port. Plaspy receives the stream and maps incoming GT06 or compatible protocol messages into the platform for real time tracking, alerts and reporting.

- The tracker is configured to report to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Data transport may use either UDP or TCP depending on the device configuration; Plaspy accepts both.
- Plaspy automatically detects the protocol used by the tracker and processes GT06 formatted packets accordingly.
- Location updates, ignition and alarm events are forwarded to Plaspy and become visible in the tracking dashboard.
- Buffered records held by the C32Plus during coverage gaps upload to Plaspy once the GPRS connection resumes.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software recommended for the C32Plus (manufacturer tool, SMS commands, or configuration GUI).
2. In the server settings, enter either the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the device port to 8888 (all Plaspy devices use the same port).
4. Choose transport UDP or TCP where the device requires explicit selection.
5. Ensure the device protocol is set or compatible with GT06 if required by the firmware.
6. Apply or save the configuration using the manufacturer tool or command sequence.
7. Restart the device if the manufacturer advises or if changes require a reboot to take effect.
8. Validate that the device reports to Plaspy by confirming receipt of position updates and events in the Plaspy platform.

## Example Configuration Commands

The exact commands or configuration screens for the C32Plus depend on the CanTrack firmware and the configuration method you use (SMS, serial interface, or vendor software). Because the manufacturer provides multiple configuration options, apply the Plaspy server values using the method appropriate for your device and firmware version.

If you use SMS-based configuration provided by the manufacturer, the typical pattern is to send a server set command, then a port command, then protocol/transport selection and finally save or reboot. Refer to the CanTrack C32Plus manual for the device-specific command syntax.

## Configuration Notes

- Firmware and tooling differences: commands and GUI layouts can change by firmware version and vendor tool revisions; always match steps to the device firmware you have.
- TCP versus UDP: choose the transport your installation prefers; Plaspy accepts both but your choice may affect message reliability and overhead on some networks.
- Plaspy automatic protocol detection reduces the need to manually specify GT06 to Plaspy, but the device must still be compatible and properly configured to send GT06 formatted packets.
- Use the manufacturer documentation for exact SMS or software command formats when performing device configuration or mass provisioning.
- Validate after reboot: after saving settings and restarting, confirm that buffered records, if any, upload to Plaspy and that live updates are visible.

## Why Use Plaspy with This Configuration

Configuring the CanTrack C32Plus to report to Plaspy gives fleet managers and security teams a straightforward way to collect location, alarm and telemetry data in a single platform. The combination of GT06 compatibility, offline buffering and reliable GNSS positioning makes the C32Plus a practical option where compact hardware, low power draw and continuous reporting are required.

To learn more about Plaspy and how it handles device integrations and fleet telemetry, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior and installation instructions for the CanTrack C32Plus, verify details on the manufacturer site https://www.cantrackgps.com/ as methods and firmware can change over time.
