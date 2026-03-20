---
slug: /aplicom/a11/configuration
id: a11-configuration
sidebar_label: Configuration
title: Aplicom - A11 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide showing how to connect the Aplicom A11 tracker to Plaspy with shared server settings and setup workflow
keywords:
  - Aplicom A11 configuration
  - Aplicom A11 setup
  - Aplicom A11 Plaspy
  - A11 tracker configuration
  - A11 server configuration
  - Aplicom tracker setup
  - GPS tracker A11
  - vehicle tracking A11
  - fleet management A11
  - A11 OTA configuration
---

# Aplicom - A11 Configuration

This page covers the public configuration context for using the Aplicom A11 series telematics device with Plaspy. It explains the shared server settings required by Plaspy and provides practical guidance for preparing an A11 device so it can communicate with the Plaspy platform. The content here uses public Plaspy connection details and describes common setup steps without replacing the official Aplicom documentation.

Plaspy uses a single shared server endpoint and port for all supported trackers and it automatically detects the tracker protocol when the device connects. Manufacturer side setup steps for the A11 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this page focuses on the practical public settings and workflow you will apply when integrating an A11 with Plaspy.

## Configuration Overview

The goal of configuration is to point the Aplicom A11 to Plaspy's server endpoint, choose the correct transport, save the settings on the device, and verify the unit appears in the Plaspy platform. The A11 series supports global mobile connectivity, OTA updates, and Bluetooth variants, which affects how you prepare devices before connecting them to the platform.

- Configure the device server address to the Plaspy server endpoint so the A11 can deliver telemetry.
- Select the transport protocol (UDP or TCP) if required by the device interface.
- Set the shared Plaspy port so the platform can receive data from the device.
- Validate cellular connectivity and ensure the SIM and data plan are active for LTE or 3G devices.
- Confirm the device appears in Plaspy and that telemetry and events are visible.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices connect

These values are the public settings required to route A11 telemetry to Plaspy. Plaspy uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- A powered Aplicom A11 device with necessary connections and an active SIM for cellular models
- A valid cellular data plan provisioned on the device SIM for 3G or 4G LTE connectivity
- Access to the Aplicom configuration method or software for the A11 model you are installing
- Network information to enter either the domain d.plaspy.com or the server IP 54.85.159.138
- Knowledge of whether the device configuration requires selecting UDP or TCP transport
- Physical access to the device to restart or verify indicators after applying settings

## How This Tracker Connects to Plaspy

When configured, the Aplicom A11 sends location and status data to the shared Plaspy server endpoint and port so the device can be monitored from the platform. Plaspy's automatic protocol detection simplifies integration because the platform identifies the tracker protocol when the first packets arrive.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP on the device if the configuration interface requires a transport selection
- Telemetry and event packets from the A11 are received by Plaspy and mapped to the device record
- Once connected, the unit becomes visible in the Plaspy platform for tracking and monitoring
- Plaspy handles protocol identification automatically so you generally only need to supply endpoint and transport

## Common Configuration Workflow

1. Access the official Aplicom A11 configuration method or software for your hardware and firmware version.
2. In the device server or APN configuration, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888, matching Plaspy's shared port.
4. If the device requires a transport selection, choose UDP or TCP according to your installation preference.
5. Apply or save the configuration on the A11 using the manufacturer tool.
6. Restart the device if required by the configuration utility or after applying settings.
7. Validate that the device reports to Plaspy and is visible on the platform using your Plaspy account tools.

## Example Configuration Commands

The exact commands and configuration syntax for the Aplicom A11 depend on the manufacturer configuration tool, firmware, and vendor-supplied utilities. Aplicom provides configuration options through its official configuration software and interfaces, which may present settings as GUI fields, OTA profiles, or serial/command line parameters. Consult the Aplicom A11 configuration guide for the precise commands and examples applicable to your firmware.

## Configuration Notes

- Firmware and hardware revisions can change configuration menus and command syntax; always confirm the exact method for your A11 revision.
- Choosing TCP versus UDP can affect delivery characteristics; the device and network conditions should guide the transport choice.
- Plaspy uses port 8888 for all supported devices and will detect the tracker protocol automatically when telemetry reaches the server.
- Bluetooth features on A11 variants are used for local sensors and tagging and do not change the Plaspy server endpoint or port settings.
- OTA updates provided by Aplicom can alter behavior or expose additional configuration options; review update notes after upgrading firmware.

## Why Use Plaspy with This Configuration

Configuring an Aplicom A11 to report to Plaspy provides a straightforward path to fleet and asset visibility using a shared server endpoint. With Plaspy detecting the tracker protocol automatically and using a single port for all devices, integration can be simpler for installers and administrators, allowing teams to focus on deployment and operational monitoring rather than protocol negotiation.

To learn more about Plaspy and how the platform supports device integrations, visit https://www.plaspy.com. For the most current Aplicom A11 specific setup instructions, firmware notes, and manufacturer tools, please verify device specific details on the Aplicom website https://www.aplicom.com/. Manufacturers can change configuration methods and firmware behavior over time so always reference the official Aplicom documentation for the latest guidance.
