---
slug: /sentar/l70s/configuration
id: l70s-configuration
sidebar_label: Configuration
title: Sentar - L70S Configuration
sidebar_class_name: menu_item_tracker
description: Public Sentar L70S configuration guide for Plaspy compatibility with example SMS commands and server settings
keywords:
  - Sentar L70S configuration
  - Sentar L70S setup
  - Sentar L70S Plaspy
  - Plaspy tracker configuration
  - Sentar GPS tracker setup
  - L70S server configuration
  - L70S SMS commands
  - GPS watch configuration
  - tracking platform setup
  - device to server configuration
---

# Sentar - L70S Configuration

This page covers the public configuration context for using the Sentar L70S tracker with Plaspy. It consolidates the shared Plaspy server settings you will need, practical setup guidance that applies to the L70S, and the example SMS commands that are commonly used to prepare the device for reporting to a third party platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. Where available this page includes the L70S SMS commands published for public use and explains how to apply Plaspy server values to the device configuration.

## Configuration Overview

The goal of L70S configuration for Plaspy is to prepare the device to send position and device data to the Plaspy server so the tracker appears and updates reliably in the platform. For L70S devices this often means setting the SIM operator APN, configuring the GPRS server endpoint, choosing the transport type if required, and validating that updates arrive on the Plaspy endpoint.

- Set the device APN and GPRS server so the tracker can open a data connection to Plaspy
- Configure transport settings such as UDP or TCP and the shared Plaspy port
- Apply a reporting interval so the device sends periodic updates to Plaspy
- Validate connectivity and confirm the device is visible in the Plaspy platform
- Use provided SMS commands or manufacturer tools where applicable to automate the setup

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the Sentar L70S:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port and the platform will automatically detect the tracker protocol so you only need to point the tracker to the Plaspy endpoint and the common port.

## Typical Requirements Before Setup

- A working SIM card provisioned for data and with an APN configured for the operator
- Access to the L70S configuration method provided by Sentar such as SMS commands or official software
- Basic power and a charged device so it can register to the mobile network
- Knowledge of the device default password if SMS configuration requires authentication
- The Plaspy server values noted above ready to enter into the device configuration
- A way to receive device responses such as SMS feedback or a terminal log for verification

## How This Tracker Connects to Plaspy

The Sentar L70S is configured to report location and device status to the Plaspy shared server endpoint and port so that Plaspy can display and process the device data for monitoring. Once configured, the device opens a GPRS data connection to the server and sends updates at the configured interval.

- Device resolves and connects to d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888
- Data is sent over the selected transport layer, UDP or TCP, depending on device settings
- Plaspy automatically detects the protocol and accepts incoming connections on the shared port
- Periodic upload interval controls how often the L70S sends position updates to Plaspy
- The platform shows device visibility, last reported location, and basic event reporting once communication is established

## Common Configuration Workflow

1. Access the official Sentar configuration method for the L70S such as SMS commands or the vendor tool provided by Sentar
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 depending on the device options
3. Set the port to 8888 which is used by all devices in Plaspy
4. Choose UDP or TCP if the device requires you to select a transport
5. Apply and save the configuration on the device
6. Restart the device if the manufacturer instructions require a reboot to apply network settings
7. Validate that the device reports to Plaspy by checking device visibility and last update in the platform

If you use SMS based setup, perform the same logical steps using the SMS commands or sequences recommended by Sentar.

## Example Configuration Commands

The following example commands are taken from publicly available Sentar L70S SMS configuration content. The default device password shown is 123456 and is used in these sample commands. Treat the factory reset as optional and only use it for initial setup or if required.

- Factory reset command (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the IMSI to identify MCC and MNC
```text
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy is the MCC and MNC concatenated
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Set the GPRS server to the Plaspy IP and port as provided in public Plaspy settings
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set update interval to 300 seconds
```text
pw123456,upload,300#
```

- Query current tracker settings for verification
```text
pw,123456,ts#
```

Notes on placeholders and parsing
- {{apn}} is your mobile operator APN name, {{apnu}} is APN username if required, and {{apnp}} is APN password if required
- xxxyy indicates the numeric MCC followed by the MNC for your SIM operator
- The sample commands are provided in the exact public form available. Syntax or separators may vary by firmware so verify with the device response after sending commands

## Configuration Notes

- SMS based configuration is supported by the public Sentar command set shown here but manufacturer tools or firmware updates may add alternate configuration interfaces
- Transport selection between TCP and UDP can affect reliability depending on network and firmware; test both if the device supports both options
- The Plaspy server can be referenced by domain d.plaspy.com or by IP 54.85.159.138 and uses port 8888 for all devices
- Default passwords like 123456 are commonly used in examples; change device passwords where appropriate and supported by the device for security
- Firmware differences or regional product variants may change exact SMS syntax or command availability

## Why Use Plaspy with This Configuration

Using the Sentar L70S configured to report to Plaspy gives organizations and caretakers centralized visibility of device location and status on a single platform. With the shared Plaspy server endpoint and automatic protocol detection, many tracker models including the L70S can be directed to the same server and begin reporting with consistent server settings.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. Please verify the latest device specific setup methods and firmware behavior on the Sentar official website http://www.sentarsmart.com/ before applying changes to production devices.
