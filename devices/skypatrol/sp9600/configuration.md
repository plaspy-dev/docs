---
slug: /skypatrol/sp9600/configuration
id: sp9600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9600 Configuration
sidebar_class_name: menu_item_tracker
description: Configure your SkyPatrol SP9600 for use with Plaspy with server settings, workflow steps, and configuration guidance
keywords:
  - SkyPatrol SP9600 configuration
  - SkyPatrol SP9600 setup
  - SkyPatrol SP9600 Plaspy
  - SP9600 server configuration
  - SP9600 tracking setup
  - SkyPatrol GPS configuration
  - SP9600 platform setup
  - SkyPatrol asset tracker configuration
  - SP9600 tracking software
  - SkyPatrol GPS tracker setup
---

# SkyPatrol - SP9600 Configuration

This page describes the public configuration context for using the SkyPatrol SP9600 Series with the Plaspy platform. It covers the shared Plaspy server settings you will need to enter on the device or in the manufacturer configuration tool, practical setup steps, and verification guidance so the tracker can report to Plaspy for asset visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so the same endpoint and port work for multiple tracker types. Exact manufacturer-side setup steps for the SP9600 can vary by firmware version, hardware revision, installation type, and the configuration tool provided by the vendor, so treat the steps here as practical, public guidance and consult SkyPatrol documentation for device-specific commands or tools.

## Configuration Overview

This configuration process prepares the SP9600 to send its location and status messages to the Plaspy endpoint so assets appear in your Plaspy account. The aim is to set the tracker server values, choose the appropriate transport if required, save the device configuration, and confirm the device is visible in Plaspy.

- Enter the Plaspy server endpoint and port on the SP9600 using the SkyPatrol configuration method.
- Select the transport option (UDP or TCP) if the device requires a transport selection.
- Save and apply the configuration on the device or via the manufacturer tool.
- Restart the device if required and verify the SP9600 is reporting to Plaspy.
- Confirm asset visibility and expected reporting cadence in Plaspy after initial messages are received.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SP9600:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you can use the shared endpoint and port for compatible devices

## Typical Requirements Before Setup

- The SP9600 must be powered and have its battery or rechargeable supply installed and ready.
- Access to the official SkyPatrol configuration method or software provided for the SP9600 (manufacturer app, web tool, or configuration utility).
- Network connectivity for the device according to how it normally sends messages (confirm the device has the connectivity required by the manufacturer).
- The device identifier or registration details required by your Plaspy account so you can identify the unit after it starts reporting.
- Access to your Plaspy account to validate incoming messages and confirm device visibility after configuration.
- Recent firmware information or release notes from SkyPatrol to ensure no device-specific changes affect server settings.

## How This Tracker Connects to Plaspy

The SP9600 is configured to send its position and status messages to the shared Plaspy server endpoint and port so Plaspy can display and monitor assets. Plaspy’s automatic protocol detection simplifies the server-side configuration because the same port is used for all supported devices.

- The tracker reports location and status messages to d.plaspy.com (or directly to 54.85.159.138) on port 8888.
- You can configure the device to use UDP or TCP on port 8888 depending on the SP9600 options.
- Plaspy detects the tracker protocol automatically, which reduces the need to match a protocol manually on the server side.
- After the device sends its first messages, Plaspy processes and shows the device in the platform for operational monitoring.
- Regular reporting cadence and message behavior depend on SP9600 settings and firmware.

## Common Configuration Workflow

1. Access the official SkyPatrol SP9600 configuration method or software supplied by the manufacturer.
2. Enter the server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set the port to 8888 which is the shared Plaspy port used by all supported devices.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration in the manufacturer tool or on the device itself.
6. Restart the SP9600 if the manufacturer instructions require a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for incoming messages and device visibility.

## Example Configuration Commands

The SP9600 model configuration commands are not published here. Exact commands and the method to send them depend on SkyPatrol’s configuration tool, firmware, and the installer workflow. Use the official SkyPatrol configuration interface or documentation for the precise command format and order when a command-line or SMS style configuration is required.

## Configuration Notes

- Firmware differences may change available configuration options or command formats; always confirm the firmware revision before applying instructions.
- Battery options on the SP9600 (replaceable or rechargeable) affect deployment planning and reporting cadence but do not change the Plaspy server settings.
- When a device allows both UDP and TCP, choose the transport required by your site or installer preference; Plaspy will accept either on port 8888.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.
- Consult SkyPatrol documentation for device-specific configuration tools, commands, and any optional settings needed for extended features.

## Why Use Plaspy with This Configuration

Configuring the SkyPatrol SP9600 to report to Plaspy gives organizations centralized visibility of mobile assets, simplified event monitoring, and consistent handling across multiple tracker models because Plaspy uses a shared server endpoint and port and automatically detects tracker protocols.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the current information at the SkyPatrol website https://www.skypatrol.com/
