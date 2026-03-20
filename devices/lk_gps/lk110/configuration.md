---
slug: /lk_gps/lk110/configuration
id: lk110-configuration
sidebar_label: Configuration
title: LK-GPS - LK110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK110 with Plaspy server settings and practical setup steps
keywords:
  - LK GPS LK110 configuration
  - LK110 setup Plaspy
  - LK GPS tracker configuration
  - LK110 GPS tracker setup
  - LK110 server configuration
  - LK GPS Plaspy integration
  - LK110 tracking software configuration
  - LK110 GPS platform setup
  - bicycle GPS tracker configuration
  - e bike tracker configuration
---

# LK-GPS - LK110 Configuration

This page covers the public configuration context for using the LK-GPS LK110 tracker with Plaspy. It explains the Plaspy server settings you must apply on the device or via the official LK-GPS configuration tools so the LK110 can report location and events to the Plaspy platform. The content here focuses on the practical, public settings and workflow required to register the device on Plaspy and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools. Use this guide to understand the common configuration process and required values, and always verify device specific steps with LK-GPS documentation or vendor instructions.

## Configuration Overview

This section explains the practical purpose of configuring an LK110 for Plaspy and what a typical setup aims to achieve.

- Prepare the LK110 so it can send location and alarm data to the Plaspy server endpoint.
- Enter the Plaspy server domain or IP and set the device transport and port used by the platform.
- Validate that the device is online and reporting to the Plaspy backend so it appears in the platform UI.
- Confirm alarm and reporting behaviors such as vibration wake or displacement alarms function as expected after configuration.
- Ensure the device is saved, rebooted if needed, and then monitored to verify stable operation with Plaspy.

## Plaspy Server Settings

Use these exact public Plaspy server settings when configuring the LK110 for Plaspy integration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if a transport selection is required
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

These values are the canonical endpoint and port Plaspy uses for incoming tracker connections. Enter either the domain d.plaspy.com or the IP 54.85.159.138 and set port 8888 in your LK110 configuration.

## Typical Requirements Before Setup

- A powered and accessible LK110 tracker installed or connected for configuration.
- An active 4G SIM and cellular connectivity in the device if using mobile data reporting.
- Access to the official LK-GPS configuration method or software for the LK110 (web tool, vendor software, SMS commands, or console).
- Knowledge of the device IMEI or unique identifier so the tracker can be identified in Plaspy.
- A plan for transport selection UDP or TCP if the device prompts for a transport choice.
- Basic testing tools such as the ability to reboot the device and to monitor incoming reports in the Plaspy platform.

## How This Tracker Connects to Plaspy

When configured, the LK110 sends its periodic location and alarm reports to the shared Plaspy server endpoint and port. Plaspy receives the connection and uses automatic protocol detection to parse the tracker messages and present data in the platform.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP for transport on the device if a transport option is required by the manufacturer tool.
- The tracker transmits position updates at the configured upload frequency so Plaspy can display movement and status.
- Alarms such as vibration, low power, displacement, and fence events are forwarded to Plaspy for live alerts and history.
- Plaspy’s automatic protocol detection interprets the LK110 messages so no per device protocol selection is needed in the platform.

## Common Configuration Workflow

Follow these practical steps when preparing an LK110 for use with Plaspy:

1. Access the official LK-GPS configuration method or software for the LK110 (manufacturer web tool, vendor utility, SMS commands, or other supported method).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the reporting endpoint.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. If the device requires transport selection, choose UDP or TCP according to your installation preferences or network reliability.
5. Apply or save the configuration changes in the manufacturer tool.
6. Restart or reboot the LK110 if required by the configuration tool or after saving to ensure settings take effect.
7. Validate that the device reports to Plaspy by checking the device list and incoming data on the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and syntax for the LK110 depend on the manufacturer tools and firmware in use. LK-GPS devices commonly support configuration via their official software, mobile app, or SMS commands. Because manufacturer command sets vary by firmware and vendor, consult the LK-GPS configuration guide for explicit command formats.

If your LK110 firmware supports SMS configuration and you prefer SMS, typical SMS workflows involve sending a specific configuration string to the device IMEI or number to update server and port values. Use the official LK-GPS command reference for the exact SMS syntax and placeholders.

## Configuration Notes

- Firmware differences can change exact command syntax and available options. Confirm commands against the LK110 firmware revision.
- Choose UDP when minimal overhead and lower latency are important; choose TCP in networks where reliability and connection state help ensure delivery.
- SMS based configuration is often available for LK-GPS trackers and can be useful when direct software access is not possible; follow the manufacturer's documented SMS command format.
- Installer practices may vary by region and vendor. Some installers prefer entering the domain d.plaspy.com while others use the IP 54.85.159.138; both are accepted by Plaspy.
- Always save and, when required, restart the device so the new server d.plaspy.com and port 8888 are applied and begin reporting.

## Why Use Plaspy with This Configuration

Using the LK-GPS LK110 with Plaspy gives organizations a straightforward path to vehicle and asset visibility. The LK110’s reporting and alarm capabilities map well to Plaspy’s platform features, allowing fleets, rental services, and individual owners to monitor location, receive alarms, and analyze movement patterns with a single shared endpoint.

To learn more about Plaspy and how it can present LK110 data in the platform, visit https://www.plaspy.com. For the most current and device specific setup instructions including command syntax and firmware notes, verify the LK110 documentation at https://www.lk-gps.com. Manufacturer specifications and setup methods can change over time so always confirm details against official LK-GPS resources.
