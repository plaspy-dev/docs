---
slug: /skypatrol/tt_9500/configuration
id: tt_9500-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 9500 Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance for configuring the SkyPatrol TT 9500 to report to Plaspy with shared server settings and practical setup steps
keywords:
  - SkyPatrol TT 9500 configuration
  - SkyPatrol TT 9500 setup
  - TT 9500 Plaspy configuration
  - SkyPatrol GPS tracker configuration
  - TT 9500 server settings
  - TT 9500 tracking setup
  - Plaspy device configuration
  - Plaspy tracker setup
  - GPS platform setup TT 9500
  - vehicle tracking TT 9500
---

# SkyPatrol - TT 9500 Configuration

This page provides public configuration context for using the SkyPatrol TT 9500 with Plaspy. It summarizes the shared server settings Plaspy expects and gives a practical, platform focused workflow to prepare the TT 9500 for reporting. Use this guidance together with the device documentation and any vendor tools used to configure the tracker.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools used by the vendor or installer. Always verify device specific commands and procedures with SkyPatrol documentation for your firmware and hardware revision.

## Configuration Overview

The goal of the configuration process is to point the TT 9500 to Plaspy and validate that the tracker can send location and event data reliably. With the TT 9500's EDDIE+ protocol support and quad band modem, configuration typically focuses on network access and the server endpoint settings required by Plaspy.

- Configure the tracker to report to the Plaspy server endpoint so the platform can receive data.
- Choose the transport protocol if the device requires a selection between UDP or TCP.
- Set the correct server address and port and save the configuration on the device.
- Validate connectivity and confirm the device is visible in Plaspy after restart or network attach.
- Use manufacturer tools or SMS commands as documented by SkyPatrol for persistent configuration.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the TT 9500 to report to Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Confirm the TT 9500 has a compatible active SIM card and a carrier data plan appropriate for your region.
- Ensure the device has power, is installed according to manufacturer guidance, and has a clear view of sky for initial GPS fix where possible.
- Obtain access to the official SkyPatrol configuration method such as the vendor tool, web interface, or SMS command set for your firmware.
- Record the device IMEI and any identification used by Plaspy for device registration or support.
- Verify that you have the correct APN and carrier settings if required by the modem for data connectivity.
- Be prepared to reboot or power cycle the tracker after saving settings to ensure changes take effect.

## How This Tracker Connects to Plaspy

When configured, the TT 9500 sends location and event reports to Plaspy using the shared server endpoint and port. Plaspy receives and interprets the device messages and makes the data available in the platform for monitoring and reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Messages are sent over the selected transport protocol, UDP or TCP, to port 8888.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct parser.
- Device events such as geofence entries, exits, and relay actions are forwarded to Plaspy when the TT 9500 is set to report those events.
- Successful reporting results in the device becoming visible and active in the Plaspy platform.

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software for the TT 9500 as provided by the manufacturer or vendor.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the configuration option available.
3. Set the device port to 8888 to match Plaspy's shared port configuration.
4. Choose UDP or TCP if the tracker requires a transport selection and the configuration interface exposes that option.
5. Apply or save the configuration in the device interface or via the vendor tool or SMS commands.
6. Restart or power cycle the device if required by the SkyPatrol configuration process to ensure the new settings take effect.
7. Validate that the TT 9500 reports to Plaspy and becomes visible in the platform by checking connectivity and incoming messages.

## Example Configuration Commands

The exact commands and the method to send them vary by SkyPatrol firmware and the configuration tool used. SkyPatrol devices are often configured either through a vendor configuration application or via SMS command strings documented by the manufacturer. Because commands and exact syntax differ by firmware, consult SkyPatrol documentation for the correct command format for your device version.

If you are using a manufacturer provided SMS command flow or configuration app, the key public values to include are d.plaspy.com or 54.85.159.138 and port 8888, and the chosen transport UDP or TCP. Plaspy will automatically detect the tracker protocol when the device connects.

## Configuration Notes

- Firmware versions can change command syntax and available features. Confirm the exact SMS commands or app fields for your TT 9500 firmware.
- If the device configuration offers both UDP and TCP, test the transport option that best fits your network and carrier environment; Plaspy will accept either on port 8888.
- Ensure APN and carrier settings are correct so the TT 9500 can establish a data connection before testing server reporting.
- Geofence and relay features described by SkyPatrol are configured on the device and then reported to Plaspy once communication is established.
- Installer practices and hardware revisions can affect the placement and power routines of the TT 9500; follow SkyPatrol installation guidance for durable results.

## Why Use Plaspy with This Configuration

Using the SkyPatrol TT 9500 with Plaspy provides a straightforward way to bring device location and event data into a single platform for monitoring, geofence notifications, and operational oversight. The TT 9500's robust tracking capabilities combined with Plaspy's automatic protocol detection and unified server endpoint simplify large scale deployments and reduce per device configuration complexity.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific setup methods, firmware behavior, and manufacturer details verify information on the SkyPatrol website https://www.skypatrol.com/ as device features and commands can change over time.
