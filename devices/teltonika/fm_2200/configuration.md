---
slug: /teltonika/fm_2200/configuration
id: fm_2200-configuration
sidebar_label: Configuration
title: Teltonika - FM 2200 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring Teltonika FM 2200 to work with Plaspy including server settings and example commands
keywords:
  - Teltonika FM 2200 configuration
  - Teltonika FM 2200 setup
  - FM 2200 server configuration
  - FM2200 Plaspy setup
  - Teltonika GPS tracker configuration
  - FM 2200 tracking software configuration
  - Teltonika FM2200 guide
  - FM 2200 platform setup
  - vehicle tracking FM 2200
  - Plaspy device configuration
---

# Teltonika - FM 2200 Configuration

This page describes the public configuration context for using the Teltonika FM 2200 tracker with Plaspy. It consolidates the practical server settings, preparatory steps, and an example command commonly used to point an FM 2200 device at the Plaspy platform. Use this guide to prepare your device for reporting and visibility in Plaspy while keeping manufacturer instructions in view.

Plaspy uses shared server settings for all supported trackers and automatically detects the tracker protocol on incoming connections. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The FM 2200 supports GSM GPRS communication and USB configuration methods, so you can choose the method that matches your installation and firmware capabilities.

## Configuration Overview

The goal of this configuration process is to prepare the FM 2200 so it reliably communicates with Plaspy, enabling real time tracking and event reporting. The example command shown below demonstrates how to set APN and Plaspy server values in one batch operation if your device accepts SMS or similar parameter commands.

- Point the device to the shared Plaspy server endpoint so data is routed to your Plaspy account
- Ensure correct APN and connectivity settings so the FM 2200 can use GPRS to send data
- Set the device transport and port so the tracker opens sessions to Plaspy on the expected port
- Validate the device is reporting and visible inside Plaspy after configuration
- Use manufacturer tools or USB for firmware specific configuration when required

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support available for UDP or TCP
- Plaspy automatically detects the tracker protocol on incoming connections

## Typical Requirements Before Setup

- A powered FM 2200 with administrative access to configure device parameters
- A working SIM card and correct APN credentials for cellular data where applicable
- Access to the manufacturer configuration method such as SMS commands, USB configuration tool, or Teltonika software
- Basic knowledge of whether your installation prefers UDP or TCP transport
- A computer or phone capable of sending SMS commands if you will use SMS based configuration
- Confirmation of the device firmware version to follow the correct manufacturer instructions

## How This Tracker Connects to Plaspy

The FM 2200 sends location and device telemetry to the Plaspy platform using standard TCP or UDP sessions over the mobile data network. Configuring the device to point to Plaspy ensures location updates, status reports, and event triggers are visible in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Data sessions use either UDP or TCP depending on your chosen transport
- Plaspy receives the device traffic on port 8888 for all supported devices
- Once connected, Plaspy automatically identifies the tracker protocol and parses incoming messages
- Events and position updates become available for monitoring and historical reporting in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the FM 2200 such as the Teltonika configuration tool, USB NMEA connection, or SMS command interface
2. Enter the Plaspy server address either as d.plaspy.com or as the numeric server IP 54.85.159.138 in the device server parameter
3. Set the device port to 8888 which Plaspy uses for all devices
4. Choose UDP or TCP transport if the device requires transport selection
5. Configure APN and authentication details so the tracker can establish a GPRS data connection
6. Apply or save the configuration via the manufacturer tool or send the configuration SMS batch command
7. Restart the device if required by the firmware or tool
8. Validate that the device reports to Plaspy and becomes visible in the platform

## Example Configuration Commands

The FM 2200 can accept batch parameter commands for quick configuration. The common public command used to set APN and Plaspy server details is shown below. Keep the placeholders as shown and replace them with your network APN credentials.

- Batch parameter command for basic setup

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields

- {{apn}} is your cellular network APN name provided by your SIM operator
- {{apnu}} is the APN username if required by your operator otherwise leave blank
- {{apnp}} is the APN password if required by your operator otherwise leave blank
- 2004 sets the server domain to d.plaspy.com which is Plaspy's server
- 2005 sets the port to 8888 used by Plaspy for all devices
- 2006 may be a transport or enable flag depending on FM 2200 firmware use the official parameter mapping in Teltonika documentation to confirm meaning

If your device accepts SMS commands, send the command as an SMS from an authorized number. If you use a USB or configuration tool, enter the same parameter values through that interface.

## Configuration Notes

- Firmware differences may change parameter numbers or command syntax consult the Teltonika FM 2200 manual for parameter mappings that match your firmware version
- Choose TCP or UDP based on network reliability and your platform preferences TCP can be more reliable over poor networks while UDP may be more efficient in some setups
- SMS based configuration is a common method for remote setups but requires that the device has an authorized number list configured
- USB and manufacturer configuration tools provide a safer way to verify and save settings when you have direct access to the device
- Always keep a copy of the original configuration and document changes so you can revert if needed

## Why Use Plaspy with This Configuration

Using the FM 2200 with Plaspy gives organizations a straightforward way to collect location and event data from a widely used Teltonika tracker. The shared Plaspy server settings simplify provisioning because the same port and endpoint are used across supported devices and Plaspy will automatically detect the tracker protocol on connection.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and parameter details verify information on the manufacturer website https://www.teltonika-gps.com/ which may be updated more frequently than third party guides.
