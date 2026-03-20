---
slug: /lk_gps/lk109/configuration
id: lk109-configuration
sidebar_label: Configuration
title: LK-GPS - LK109 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK109 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - LK-GPS LK109 configuration
  - LK-GPS LK109 setup
  - LK109 Plaspy configuration
  - LK109 server configuration
  - LK109 GPS tracker setup
  - LK-GPS tracker Plaspy
  - LK109 tracking software configuration
  - vehicle tracking LK109
  - personal tracker LK109 configuration
  - LK109 firmware setup
---

# LK-GPS - LK109 Configuration

This page covers the public configuration context for using the LK-GPS LK109 Personal GPS Tracker with Plaspy. It explains the shared server settings Plaspy uses, practical steps to point an LK109 at the Plaspy endpoint, and the typical verification actions you can take to confirm the device is reporting properly. This guidance is intended for installers, fleet managers, and technical users preparing LK109 units for integration with Plaspy.

Plaspy uses shared server settings across supported devices and performs automatic protocol detection, but exact manufacturer-side setup steps can vary by LK109 firmware version, hardware revision, installation type, and vendor toolset. The LK109 supports SMS parameter setting and query functions and mobile app tracking, so you may configure it with the official manufacturer tool, SMS commands, or a configuration utility depending on your device and firmware.

## Configuration Overview

Configuring the LK109 for Plaspy focuses on preparing the device to reliably communicate with the Plaspy server and appear in the Plaspy platform. The following list summarizes the practical goals of the configuration process.

- Point the LK109 to the Plaspy server endpoint so location and event data are sent to Plaspy.
- Choose the transport mode required by your device firmware (UDP or TCP) and set the port that Plaspy uses.
- Validate network connectivity and that the device can register with the cellular network if required.
- Save and apply settings on the LK109 and confirm the device shows as active inside Plaspy.
- Use available SMS query or manufacturer software to verify device settings if the firmware supports them.

## Plaspy Server Settings

Use the following public server settings when configuring the LK109 for Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and functional LK109 device with battery charged or external power applied.
- Access to the official manufacturer configuration method or software for the LK109.
- A data-capable SIM installed and active if the unit requires cellular connectivity.
- Basic connectivity verification tools such as SMS access or a serial/configuration cable if used by the manufacturer.
- Knowledge of the device IMEI or identifier used by Plaspy to match the device in the platform.
- A Plaspy account and access to the platform to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

The LK109 is configured to send its position and event reports to Plaspy using the shared Plaspy server endpoint and port. Plaspy receives incoming messages and automatically determines the tracker protocol so you do not need to specify the protocol in the platform.

- The device reports location updates to d.plaspy.com at port 8888 (or directly to 54.85.159.138 at port 8888 if you prefer IP).
- You may choose UDP or TCP transport on the LK109 depending on firmware support and network conditions.
- Plaspy will detect the tracker protocol automatically and process positions and alarms from the LK109.
- Events such as SOS, fall alarms, geofence entries or exits, and periodic positions are forwarded to the Plaspy platform for display and alerting.
- Verification of reporting is done by confirming the device is visible and sending recent messages in Plaspy.

## Common Configuration Workflow

Follow a practical step sequence to configure the LK109 for Plaspy. Exact steps can differ by manufacturer utility, SMS command set, or firmware version.

1. Access the official LK109 configuration method or software provided by the manufacturer.
2. In the device server settings, enter the Plaspy server address as either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. If the device requires a transport selection, choose UDP or TCP according to your network preference.
5. Apply or save the configuration in the device tool or via SMS command.
6. Restart the LK109 if the manufacturer instructions require a reboot to apply settings.
7. Validate that the LK109 reports to Plaspy by checking the device status and recent positions within the Plaspy platform.

## Example Configuration Commands

The LK109 supports SMS parameter settings and query functions according to the device description, and many installers use SMS or the official manufacturer tool to configure server and port. Exact commands and syntax can vary by firmware and vendor toolset, so consult your device manual for precise command text.

If you are using SMS for configuration, manufacturers commonly provide SMS commands to set server, port, transport, and to query current settings. Because manufacturer command sets vary and no specific public commands are provided here, use the official LK109 documentation or the configuration utility from the manufacturer for the canonical command syntax.

## Configuration Notes

- Firmware differences may change the exact menu names or SMS command syntax for server and transport settings.
- Choosing UDP versus TCP can affect reliability under some networks; select the transport your installation and firmware recommend.
- SMS-based setup is often supported for LK109 units; verify the exact SMS format with the official LK109 manual before sending commands.
- Always save or apply settings and reboot the device if required to ensure new server settings take effect.
- Confirm device identity (IMEI or device ID) so the unit can be matched correctly inside Plaspy after it begins reporting.

## Why Use Plaspy with This Configuration

Using the LK109 with Plaspy provides a straightforward way to centralize location and alarm reporting for personal safety or small fleet tracking. Pointing the LK109 at Plaspy's shared server endpoint and port lets Plaspy automatically detect the device protocol and display positions, alarms, and geofence events in the platform for monitoring and response.

To learn more about Plaspy and how it can manage devices like the LK109, visit https://www.plaspy.com. For the most current device-specific setup methods, SMS command syntax, firmware behavior, and manufacturer details, verify the official documentation at https://www.lk-gps.com.
