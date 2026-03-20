---
slug: /ulbotech/t370/configuration
id: t370-configuration
sidebar_label: Configuration
title: Ulbotech - T370 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the Ulbotech T370 OBD tracker for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Ulbotech T370 configuration
  - Ulbotech T370 setup
  - T370 Plaspy configuration
  - Plaspy tracker setup
  - Ulbotech GPS tracker setup
  - T370 OBD tracker configuration
  - vehicle tracking T370
  - fleet GPS T370
  - T370 server settings
  - Plaspy device configuration
---

# Ulbotech - T370 Configuration

This page covers the public configuration context for using the Ulbotech T370 OBD GPS tracker with Plaspy. It collects the practical, platform-level settings and workflow guidance needed to point a compatible T370 device at Plaspy so the tracker can deliver GNSS fixes, movement events and OBD-derived telemetry into Plaspy dashboards and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps vary by firmware, hardware revision and the vendor configuration tool you use. Use this guide to understand the required server values and a safe workflow, and consult Ulbotech documentation or configuration tools for device-specific commands and menus.

## Configuration Overview

The goal of the configuration process is to prepare the T370 to communicate reliably with Plaspy, validate connectivity, and enable device visibility and telemetry reporting in the platform. This includes setting the device server endpoint, transport, and any carrier/APN details the device requires.

- Configure the device to report to the Plaspy server endpoint and shared port.
- Select the transport type (UDP or TCP) if required by the device interface.
- Ensure cellular connectivity and SIM readiness so the Telit modem can reach Plaspy.
- Save and apply settings and reboot the tracker when instructed by the manufacturer tool.
- Validate the device appears in Plaspy and that location and OBD telemetry are received.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the T370 for Plaspy integration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the standard endpoint and port that the device must report to so Plaspy can accept telemetry and automatically determine the correct protocol.

## Typical Requirements Before Setup

- Confirm the T370 is powered and installed in the vehicle OBD port or otherwise receives vehicle power.
- Have a valid micro SIM installed and active on a carrier supported by the Telit modem variant in the device.
- Access to the official Ulbotech configuration method such as the vendor software, micro USB interface, or documented SMS commands.
- Note the device firmware level and hardware revision so you can follow matching setup instructions.
- Ensure you have a Plaspy account and know how to identify the device once it begins reporting in the platform.
- Optional: have the vehicle available for a short test drive to confirm live location updates and OBD telemetry.

## How This Tracker Connects to Plaspy

When the T370 is configured with Plaspy server details it sends location, movement and vehicle data over the configured transport to the Plaspy endpoint for processing. Plaspy ingests GNSS fixes, accelerometer events and available OBD parameters so the vehicle appears in dashboards, triggers, and reports.

- The tracker reports GNSS fixes and timestamps to d.plaspy.com or 54.85.159.138 on port 8888.
- Data is sent over the selected transport, UDP or TCP, depending on the tracker configuration.
- Plaspy automatically detects the incoming tracker protocol so you only need to point the device to the shared server and port.
- Telemetry and event messages become visible in Plaspy for real-time monitoring and historical playback.
- OBD-sourced parameters and accelerometer events are forwarded into Plaspy workflows where supported.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software (micro USB interface, vendor tool, or manufacturer SMS/API as documented).
2. Enter the server address d.plaspy.com or optionally the server IP 54.85.159.138 in the device server field.
3. Set the device to use port 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Save or apply the configuration using the manufacturer tool and follow any prompts to commit settings.
6. Restart the device if required by the configuration procedure or firmware instructions.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for an initial connection and incoming location or telemetry.

## Example Configuration Commands

The exact configuration commands or menus vary by Ulbotech firmware, vendor tool and installation method. Some installers use a USB configuration utility, others use SMS or a web portal provided by the vendor. Because model-specific commands are controlled by the manufacturer and firmware, refer to the Ulbotech user manual for precise command syntax and examples.

When using vendor software or a configuration menu, the key values you will enter are the Plaspy server domain d.plaspy.com (or IP 54.85.159.138), the port 8888, and the transport selection UDP or TCP. The device should then be saved and rebooted per the Ulbotech instructions to begin reporting to Plaspy.

## Configuration Notes

- Firmware differences can change menu layout and available options; match the configuration steps to the device firmware version.
- Choose TCP if you require connection-oriented delivery for certain message types, or UDP if the firmware recommends it for lower overhead; Plaspy supports both.
- The T370 supports micro USB configuration and may support SMS or vendor tools for remote setup depending on the firmware.
- The device often auto detects APN and timezone, but verify the SIM carrier APN if connectivity fails.
- Always confirm settings after a reboot and perform a short test to confirm GNSS fixes and OBD telemetry flow into Plaspy.

## Why Use Plaspy with This Configuration

Connecting the Ulbotech T370 to Plaspy gives fleet operators a fast path to real-time vehicle visibility, driver behavior monitoring and OBD-sourced telemetry without complex installation. The T370's OBD form factor and integrated sensors make it well suited to fleets, rental operators and telematics programs that need rapid deployment and consolidated data in a single platform.

To learn more about Plaspy and how it can ingest T370 telemetry, visit https://www.plaspy.com. Please verify the latest device-specific setup details, commands and firmware behavior with Ulbotech at http://www.ulbotech.com/ as manufacturer specifications and configuration methods can change over time.
