---
slug: /suntech/st_910/configuration
id: st_910-configuration
sidebar_label: Configuration
title: Suntech - ST 910 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Suntech ST 910 tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - Suntech ST 910 configuration
  - Suntech ST 910 setup for Plaspy
  - ST 910 server configuration
  - ST 910 GPS tracker setup
  - Suntech tracker SMS configuration
  - Plaspy device configuration
  - GPS tracker platform setup
  - ST 910 GPRS configuration
  - asset tracker configuration guide
  - vehicle tracking setup
---

# Suntech - ST 910 Configuration

This page describes the public configuration context for using the Suntech ST 910 tracker with Plaspy. It focuses on the practical, publicly available steps to prepare the device to report to Plaspy using the platform's shared server settings and the commands published by the device vendor. Where manufacturer commands are shown, they are presented as public SMS commands for clarity.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The ST 910 supports SMS and GPRS based configuration and the example SMS commands below show how to set APN, server, and reporting interval for use with Plaspy.

## Configuration Overview

This configuration process gets the ST 910 talking to the Plaspy server so location and event data are visible in the platform. The commands shown are public SMS-style commands published for this model and illustrate the typical fields you will set: device id, operator APN, Plaspy server endpoint, transport port, and reporting interval.

- Calculate the device ID from the IMEI and use it in SMS configuration commands.
- Configure the SIM/APN settings so the tracker can use GPRS to reach Plaspy.
- Point the tracker to the shared Plaspy server endpoint and port so data is routed to the platform.
- Set a reporting interval appropriate for your monitoring needs.
- Validate settings with the device verification command or by confirming the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (configure either UDP or TCP on the device if the tracker requires a transport selection)
- Plaspy automatically detects the tracker protocol when the device connects to the shared server and port
- Note that all devices in Plaspy use the same port for device ingestion

## Typical Requirements Before Setup

- A charged or powered ST 910 with a working SIM card that has GPRS data enabled and permission to receive SMS for remote configuration.
- Access to the device IMEI so you can derive the device ID used in SMS commands.
- Ability to send SMS messages to the device number for SMS based configuration or access to the vendor configuration tool if preferred.
- The correct APN, APN username, and APN password from the mobile operator, if required.
- Basic familiarity with sending SMS commands and interpreting device replies.
- Access to Suntech product documentation for device specific firmware notes and behavior.

## How This Tracker Connects to Plaspy

The ST 910 is configured to report to the shared Plaspy server endpoint and port. In practice this means the device uses GPRS to open a TCP or UDP connection to Plaspy and transmits position and event information so the device becomes visible in the platform. SMS can also be used for alerts and for configuration initiation.

- The tracker is pointed to d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Port 8888 is used on the device side for all Plaspy integrations.
- You may select UDP or TCP transport on the tracker when required by the device firmware.
- Plaspy will automatically detect the tracker protocol when a device connects to the shared endpoint and port.
- Once connected, the device will report according to the configured reporting interval and event rules.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 910, typically SMS configuration or the vendor's configuration tool or instructions.
2. Derive the device ID from the IMEI (see example below) and prepare to use it in SMS commands.
3. Enter the Plaspy server address by specifying d.plaspy.com or the explicit IP 54.85.159.138 in the server field.
4. Set the port to 8888 as Plaspy uses the same port for all devices.
5. Choose UDP or TCP transport on the device if a transport selection is required by the firmware.
6. Apply or save the configuration and, if required, restart the tracker.
7. Validate that the device reports to Plaspy by using the verification command or by confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The ST 910 public commands can be sent to the device as SMS messages. The device ID is derived from the IMEI as the 9 digits excluding the final IMEI check digit (the 9 digits that start at position 6 and end at position 14 when counting from 1). Example from vendor documentation: if IMEI is 123456789012345 the device ID is 678901234.

1. Optional initial factory reset command (use only if you need to reset device settings):
```
ST300CMD;{{device_id}};02;Reset
```
Label: Optional initial reset to clear previous settings.

2. Set operator APN and Plaspy GPRS server
- The fourth parameter after the device id is an APN flag: use 1 if you provide an APN username or password, otherwise use 0.
- Replace placeholders [apn], [apnu], [apnp] with your operator APN, APN username, and APN password as needed.
```
ST300NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
If you do not have an APN username or password, set the APN flag to 0:
```
ST300NTW;{{device_id}};02;0;[apn];;;54.85.159.138;8888;;;;
```

3. Set reporting interval to 60 seconds (example)
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4. Verification command to check the current preset configuration
```
ST300CMD;{{device_id}};02;PresetA
```

Notes on placeholders:
- {{device_id}} — the 9 digit device id derived from the IMEI (digits 6 to 14 of the full IMEI).
- [apn] — operator APN string.
- [apnu] — APN username placeholder.
- [apnp] — APN password placeholder.

Send each line above as an SMS to the device's SIM number. Preserve the order when performing initial setup: reset (optional), network/server configuration, reporting interval, and then verification.

## Configuration Notes

- SMS based configuration is supported by the ST 910 and is a practical method for remote setup when local access is limited.
- Firmware versions and hardware revisions can change command syntax or parameter behavior; always verify command support against the specific device firmware.
- When setting the ST300NTW command, set the APN flag to 1 only if you include APN username or password fields, otherwise use 0.
- Choose TCP or UDP based on installer preference and network behavior; Plaspy accepts either transport and will detect protocol automatically.
- The device includes a mini USB port for extra connectivity options but the commands shown are SMS based as published by the manufacturer.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST 910 to report to Plaspy gives organizations centralized visibility into asset location and event activity using a consistent server endpoint and shared port. The ST 910's support for GPRS and SMS configuration makes it flexible for field installations, while Plaspy's automatic protocol detection reduces the need to manage protocol-level settings after connection.

To learn more about Plaspy and how your devices appear on the platform, visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer setup methods can change over time, so please verify the latest details on the official Suntech site http://www.suntechint.com/ before deploying at scale.
