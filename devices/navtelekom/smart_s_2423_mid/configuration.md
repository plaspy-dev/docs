---
slug: /navtelekom/smart_s_2423_mid/configuration
id: smart_s_2423_mid-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 MID+ Configuration
sidebar_class_name: menu_item_tracker
description: Config guide for Navtelekom SMART S-2423 MID+ showing Plaspy compatibility and shared server settings for quick setup
keywords:
  - Navtelekom SMART S-2423 MID+ configuration
  - Navtelekom SMART S-2423 MID+ setup
  - SMART S-2423 MID+ Plaspy configuration
  - Navtelekom tracker Plaspy
  - fleet tracking SMART S-2423 MID+
  - SMART S-2423 MID+ server settings
  - Navtelekom GPS tracker configuration
  - SMART S-2423 MID+ installation
  - Plaspy device configuration
  - Navtelekom GPS platform setup
---

# Navtelekom - SMART S-2423 MID+ Configuration

This page documents the public configuration context for using the Navtelekom SMART S-2423 MID+ tracker with Plaspy. It focuses on the practical server settings and the typical setup workflow integrators use to provision the device so that location and telemetry are visible inside Plaspy. Where manufacturer tools or firmware steps are required, this guide points to the right actions without replacing the official device documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools such as the NTC Configurator referenced by Navtelekom. Use this guide to prepare devices for Plaspy provisioning and then confirm device specific steps in the official Navtelekom documentation.

## Configuration Overview

The goal of configuration is to direct the SMART S-2423 MID+ to send its location and telemetry to Plaspy so the asset becomes visible and manageable in the platform. Configuration normally happens using Navtelekom's installer tools or device configuration interfaces and requires setting the Plaspy server endpoint and transport parameters.

- Point the device to the Plaspy server endpoint so reports are delivered to Plaspy in real time.
- Configure the device transport to use UDP or TCP on the shared Plaspy port.
- Validate cellular connectivity and power so the tracker can transmit reports.
- Use the NTC Configurator or the manufacturer tool to apply settings and update firmware as needed.
- Verify the device appears in Plaspy after configuration and that telemetry and event reports are arriving.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts reports from supported protocols without per device protocol registration

Note that Plaspy uses the same port for all supported devices and that the SMART S-2423 MID+ may be configured to use either UDP or TCP on port 8888.

## Typical Requirements Before Setup

- A powered SMART S-2423 MID+ unit with functional internal GNSS and cellular hardware
- A valid cellular service SIM and data connectivity on the vehicle to allow outbound connections to Plaspy
- Access to the Navtelekom configuration method such as the NTC Configurator utility or approved manufacturer tools
- Device identifiers helpful for platform provisioning such as IMEI or serial number as required by your Plaspy account or integrator
- Up to date firmware recommended before provisioning to avoid known bugs or protocol differences
- Installer or integrator access to the vehicle wiring and any sensors you plan to forward to Plaspy

## How This Tracker Connects to Plaspy

When configured, the SMART S-2423 MID+ sends position reports and telemetry to the shared Plaspy server endpoint so fleet operators can monitor vehicles and events centrally. The device uses its cellular modem to establish outbound connections and forwards GNSS, accelerometer events, and configured sensor inputs to Plaspy.

- Device reports are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be configured as UDP or TCP depending on installer preference and firmware options
- Plaspy automatically detects the tracker protocol and processes incoming messages for the device
- Reports include location and telemetry so assets become visible in Plaspy dashboards and alerting workflows
- After configuration and a successful connection, Plaspy will receive periodic updates and event driven messages from the tracker

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software such as the NTC Configurator used for SMART S-2423 MID+ devices.
2. Locate the server or remote reporting settings section in the configurator or device menu.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the reporting endpoint.
4. Set the reporting port to 8888 as required by Plaspy.
5. Choose the transport protocol UDP or TCP if the device firmware requires selecting one.
6. Apply or save the configuration in the NTC Configurator and upload settings to the device.
7. Restart or power cycle the device if the tool or firmware documentation recommends a restart to apply changes.
8. Validate that the device reports to Plaspy by confirming the device IMEI or identifier appears in your Plaspy account and that recent position/telemetry messages are logged.

## Example Configuration Commands

This model configuration section does not include raw public command strings. The SMART S-2423 MID+ is typically configured using Navtelekom tools such as the NTC Configurator or an approved manufacturer utility, and the exact commands or steps depend on the firmware and utility version. Follow the NTC Configurator workflow to set the Plaspy endpoint to d.plaspy.com or 54.85.159.138 and the port to 8888, or consult the device manual for SMS or console command alternatives if your installation uses those methods.

If you have manufacturer supplied command examples from Navtelekom or an installer guide, preserve the order of any required commands and apply them via the recommended tool. For device specific command sets consult the official Navtelekom documentation.

## Configuration Notes

- Firmware differences can change available configuration options and the exact path to server settings in the NTC Configurator; confirm the device firmware version before applying settings.
- TCP versus UDP choice can affect message reliability and delivery semantics; choose the transport appropriate for your network and integrator practices. Plaspy accepts both on port 8888.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects to d.plaspy.com or 54.85.159.138.
- Keep a record of device IMEI and configuration changes to simplify troubleshooting and platform provisioning.
- If you plan to forward sensor or peripheral data (for example via RS-485 or 1-Wire), verify connector wiring and device input configuration in the manufacturer documentation before enabling those streams.

## Why Use Plaspy with This Configuration

Using the Navtelekom SMART S-2423 MID+ with Plaspy provides a reliable way to centralize vehicle location, sensor telemetry, and event reporting for fleet operations. The device’s compact design, internal GNSS and GSM antennas, and multiple I O options make it a practical choice for integrators who want to collect telemetry and send it to a single platform endpoint.

To learn more about the Plaspy platform and how it receives device data, visit https://www.plaspy.com. For the most current device specific configuration steps, firmware behavior, and detailed installer instructions, verify information with the manufacturer at https://www.navtelecom.ru/ as methods and firmware may change over time.
