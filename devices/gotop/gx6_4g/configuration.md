---
slug: /gotop/gx6_4g/configuration
id: gx6_4g-configuration
sidebar_label: Configuration
title: GOTOP - GX6-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP GX6-4G tracker and Plaspy compatibility covering server settings and setup workflow
keywords:
  - GOTOP GX6-4G configuration
  - GOTOP GX6-4G setup
  - GX6-4G server configuration
  - GX6-4G Plaspy setup
  - GOTOP GPS tracker configuration
  - vehicle tracker configuration
  - fleet tracker setup
  - GX6-4G telemetry setup
  - Plaspy tracker configuration
  - GOTOP tracker Plaspy
---

# GOTOP - GX6-4G Configuration

This page documents the public configuration context for using the GOTOP GX6-4G tracker with Plaspy. It summarizes the practical server settings and the typical steps required to prepare the device so it can communicate with the Plaspy platform for real time tracking, telemetry, and event reporting. The guidance below is based on publicly available Plaspy configuration values and the GX6-4G product description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the unit reports. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always confirm device-specific steps with the official GOTOP documentation and your installer.

## Configuration Overview

Preparing a GX6-4G for use with Plaspy focuses on configuring the device to report location and telemetry to the Plaspy server reliably and validating that reporting on the Plaspy platform. The goal is to ensure the tracker has cellular connectivity, correct server and transport parameters, and that Plaspy receives the device heartbeat and event messages.

- Configure the GX6-4G to send GNSS and telemetry to the Plaspy server endpoint using the shared Plaspy values.
- Verify the device has a working SIM card and cellular connection so data can be transmitted to Plaspy.
- Choose the required transport type (UDP or TCP) and set the device to use port 8888.
- Save and apply the configuration, then validate the device appears and reports correctly in Plaspy.
- Use manufacturer tools or installer procedures as required to enable vehicle inputs and telemetry channels for Plaspy visibility.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GX6-4G:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP are both supported by the device and accepted by Plaspy
- Plaspy automatically detects the tracker protocol when the device reports to the server

These values are the shared Plaspy endpoint settings used across supported devices and should be entered into the tracker configuration where server host, IP, and port values are requested.

## Typical Requirements Before Setup

- A powered GX6-4G unit with the required vehicle wiring and external antennas connected as recommended by GOTOP.
- An active standard SIM card installed with a data plan and cellular coverage suitable for 4G transmission.
- Access to the official GOTOP configuration method for this model such as the vendor software, configuration tool, or installer interface.
- Knowledge of the Plaspy server settings d.plaspy.com and 54.85.159.138 and port 8888 before starting configuration.
- A Plaspy account or access to the Plaspy platform to validate device reporting after setup.
- A safe and compliant installation environment following vehicle and local regulatory requirements.

## How This Tracker Connects to Plaspy

Once configured, the GX6-4G streams GNSS location data and vehicle telemetry over its cellular link to the Plaspy cloud at the shared Plaspy server endpoint and port. Plaspy ingests location and event messages and associates them with the device record so you can monitor live position, alarms, and historical routes.

- The tracker sends GNSS coordinates and LBS fallback data to the Plaspy server endpoint using the configured transport.
- Vehicle inputs and CAN or UART telemetry are forwarded to Plaspy for event reporting and analytics.
- Alarm events such as overspeed, geo fence breaches, or ignition changes are reported to Plaspy for alerts and logging.
- Remote control and status queries initiated from Plaspy are supported when the device and installation allow command control.
- Plaspy uses the same port for all supported devices and automatically detects the protocol used by the tracker.

## Common Configuration Workflow

1. Access the official GOTOP configuration method for the GX6-4G using the vendor tool, web interface, or installer software.
2. Ensure the GX6-4G has a working SIM card, antennas connected, and stable power.
3. Enter the Plaspy server hostname or IP into the tracker configuration using d.plaspy.com or 54.85.159.138 as the host.
4. Set the server port to 8888 for Plaspy communication.
5. If the device requires a transport selection, choose UDP or TCP according to installer preference and network conditions.
6. Apply or save the configuration on the device and restart the tracker if the tool or firmware requires a reboot.
7. Validate that the GX6-4G reports to Plaspy by checking the device status and recent messages inside the Plaspy platform.

## Example Configuration Commands

The exact command syntax and method for programming the GX6-4G varies by GOTOP firmware and the configuration tool you use. Some installers use a configuration utility or USB interface, and others may use SMS or over the air methods where supported. Because manufacturers provide different command formats, consult the GOTOP configuration guide for exact commands and examples specific to your firmware release.

If you have vendor supplied command examples or firmware notes from GOTOP, use those directly and confirm placeholders and parameters before applying them to production units.

## Configuration Notes

- Firmware and tool differences between GOTOP releases can change command syntax and available options. Always reference the GOTOP documentation for your device firmware.
- Choose UDP if you prefer lower overhead reporting and typical position telemetry, or TCP if your network and installer prefer connection reliability. Plaspy accepts both transports and will detect the protocol automatically.
- Ensure the SIM card has an active data plan and that carrier settings required by the SIM are applied by your configuration tool or installer.
- For installations requiring remote control features, confirm that wiring and output circuits for power or fuel cut off are installed and tested by a qualified technician.
- Validate connectivity in Plaspy after configuration and monitor initial reports to confirm correct telemetry and event behavior.

## Why Use Plaspy with This Configuration

Pairing the GOTOP GX6-4G with Plaspy provides a practical path to real time fleet visibility, event driven alerts, and rich telemetry reporting. The combination lets fleet operators monitor routes, respond to alarms, and access historical reports and diagnostics that help reduce downtime and improve operational oversight.

Learn more about Plaspy and how it supports vehicle tracking and fleet workflows at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and installation instructions for the GX6-4G consult the official GOTOP website https://www.gotop.cc/ since manufacturer specifications and setup methods can change over time.
