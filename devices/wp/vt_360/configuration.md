---
slug: /wp/vt_360/configuration
id: vt_360-configuration
sidebar_label: Configuration
title: WP - VT-360 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the WP VT-360 showing Plaspy server settings, transport options, and practical setup steps for vehicle tracking
keywords:
 - WP VT-360
 - WP VT-360 configuration
 - WP VT-360 setup
 - Plaspy configuration
 - Plaspy server settings
 - GPS tracker configuration
 - vehicle tracking setup
 - VT-360 server configuration
 - WP GPS tracker setup
 - tracking platform configuration
---

# WP - VT-360 Configuration

This page summarizes the public configuration context for using the WP VT-360 tracker with Plaspy. It focuses on the server endpoint and transport settings you need to apply so the VT-360 can report location and status to the Plaspy platform. The content is intended as practical guidance and relies on manufacturer documentation for device-specific procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and vendor configuration tools. The VT-360 is compatible with Plaspy and supports the kinds of cellular and reporting features described here, but always confirm method details against the VT-360 official documentation before deployment.

## Configuration Overview

The goal of configuration is to prepare the VT-360 to send its telemetry and event data to Plaspy so vehicles appear in the platform for monitoring and reporting. You will point the device to the Plaspy server, choose an appropriate transport (UDP or TCP) if required, save or apply the settings, and verify that the device is visible in Plaspy.

- Set the VT-360 reporting endpoint to Plaspy so location and event messages reach the platform.
- Choose the transport protocol supported by your setup and device firmware, UDP or TCP on the Plaspy port.
- Apply or save the configuration and restart the device when required by the manufacturer tool.
- Validate connectivity and that the device appears in Plaspy reporting and live tracking.
- Keep a record of the device IMEI and any identifiers used by Plaspy for device onboarding.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP, configurable depending on the VT-360 tool or firmware
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Access to the VT-360 official configuration method or software supplied by WP
- A powered and connected VT-360 device with a valid cellular SIM and network coverage for 2G or 3G where required
- The device IMEI or unique identifier available for registration and validation in Plaspy
- Familiarity with the VT-360 firmware version and any manufacturer-specific commands or menus
- A method to read device logs or confirmation messages to validate successful reporting
- If available, an external GPS and GSM antenna fitted per installation instructions for reliable reception

## How This Tracker Connects to Plaspy

When configured, the VT-360 sends its location updates and event reports to the shared Plaspy server endpoint using the Plaspy port and the transport selected during configuration. Plaspy receives the data and maps it into vehicle tracking views, alerts, and historical logs so fleet operators can monitor activity.

- The VT-360 reports telemetry to d.plaspy.com or to 54.85.159.138 on port 8888
- The device can use either UDP or TCP as the transport if the firmware or configuration tool requires a choice
- Plaspy automatically detects the protocol used by the tracker and decodes the messages
- Location updates, ignition and input events, and alarm notifications are forwarded to the Plaspy platform for visibility
- Once reporting is successful, the device becomes visible in Plaspy for live tracking and history retrieval

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the WP VT-360 (for example the vendor application, SMS commands, or configuration tool).
2. Enter the Plaspy server by specifying either the domain d.plaspy.com or the IP 54.85.159.138 in the server/host field.
3. Set the port to 8888 which is the shared reporting port used by Plaspy for all supported devices.
4. Choose the transport option UDP or TCP if the VT-360 requires a transport selection in its configuration interface.
5. Apply or save the configuration changes in the manufacturer tool and confirm that the settings were accepted.
6. Restart the device if the tool or firmware requires a reboot to activate new reporting settings.
7. Validate that the VT-360 reports to Plaspy by checking device visibility in the platform and confirming incoming telemetry.

## Example Configuration Commands

Exact commands and the method to apply them vary by the VT-360 firmware and the WP configuration tool. Because the VT-360 is typically configured using the manufacturer software or supported SMS/OTA commands, follow the WP documentation or tool prompts to enter the Plaspy values listed above. If you use SMS-based configuration provided by WP, you would supply the Plaspy server domain or IP and port as part of those SMS commands according to the vendor syntax.

If your vendor documentation supplies command examples, apply them in the order recommended there, replacing server and port values with:
- d.plaspy.com or 54.85.159.138
- port 8888
- transport UDP or TCP as required

Always preserve placeholders and follow the vendor syntax for APN or credential fields when they appear in commands.

## Configuration Notes

- Firmware versions and vendor tools can change command syntax and menu layouts; always check the VT-360 documentation for firmware-specific instructions.
- Choose UDP or TCP according to device support and network reliability considerations; Plaspy will detect the protocol automatically once messages arrive.
- All devices in Plaspy report on the same port so use port 8888 for the VT-360 to match platform expectations.
- If configuring over-the-air, allow time for settings to propagate and confirm by viewing logs or platform telemetry.
- Keep a record of the configuration and the IMEI to make device troubleshooting and registration with Plaspy easier.

## Why Use Plaspy with This Configuration

Using the WP VT-360 with Plaspy provides a straightforward path to fleet visibility and operational monitoring. Pointing the VT-360 to the shared Plaspy endpoint and port enables the device to report location, ignition events, and alarms into a centralized platform for live tracking, history, and alerting. This helps fleet managers and operators maintain oversight and respond faster to vehicle events.

To learn more about Plaspy and how it supports trackers like the VT-360 visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details always verify information on the official WP site http://www.wondeproud.com/ as vendor instructions can change over time.
