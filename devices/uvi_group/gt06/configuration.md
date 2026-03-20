---
slug: /uvi_group/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: UVI Group - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the UVI Group GT06 for use with Plaspy including required server settings SMS commands and validation tips
keywords:
  - UVI Group GT06 configuration
  - GT06 setup Plaspy
  - GT06 server configuration
  - UVI Group GPS tracker setup
  - GT06 SMS configuration
  - GT06 GPRS setup
  - vehicle tracking configuration
  - GPS tracker Plaspy setup
  - GT06 APN configuration
  - GT06 connectivity guide
---

# UVI Group - GT06 Configuration

This page covers the public configuration context for using the UVI Group GT06 tracker with Plaspy. It collects the practical server settings, SMS command examples, and workflow guidance that are commonly used to prepare a GT06 device to report location and status into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections. Manufacturer side setup steps for the GT06 can vary by firmware version, hardware revision, installation type, and vendor management tools, so the examples on this page are practical, public instructions rather than an exhaustive manufacturer manual.

## Configuration Overview

The configuration process prepares a GT06 tracker to communicate reliably with Plaspy so device position and status appear in the platform. Typical setup establishes device APN and GPRS server settings, validates connectivity, and confirms reporting behavior.

- Set the device APN so it can open a GPRS data session for internet reporting.
- Configure the device to send data to Plaspy using the shared server endpoint and port.
- Choose the transport protocol if the tracker requires selection between UDP or TCP.
- Set a reporting interval so the device updates location at the desired cadence.
- Verify configuration with status and GPRS checks and confirm visibility in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GT06. These values are the standard endpoint used by Plaspy for supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

All devices configured for Plaspy use the same port and Plaspy will attempt to detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered GT06 device installed or accessible for initial configuration
- A SIM card with data enabled and an operator APN ready for configuration
- Ability to send SMS commands to the GT06 if using SMS based configuration
- Access to the official manufacturer documentation or configuration tool for the GT06
- Knowledge of the device password for configuration actions the default sample password is 666666
- A way to confirm device connectivity such as status SMS responses or Plaspy platform visibility

## How This Tracker Connects to Plaspy

The GT06 typically transmits GPS and device state via the cellular network to an internet server. When configured for Plaspy, the tracker is pointed at the Plaspy server endpoint and port so incoming telemetry is received and processed by the platform.

- The tracker opens a GPRS session using the configured APN and sends data over IP
- Data is addressed to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device settings and firmware
- Plaspy receives the incoming connection and automatically detects the tracker protocol
- Once reporting is active the device becomes visible in Plaspy for monitoring and event reporting

## Common Configuration Workflow

1. Power the GT06 and ensure a working SIM with mobile data is installed and enabled.
2. Access the official UVI Group configuration method or tool for the GT06 such as SMS commands or a manufacturer provided utility.
3. Enter the Plaspy server target by using d.plaspy.com or the IP address 54.85.159.138 in the device server setting.
4. Set the port to 8888 for Plaspy reporting.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration and restart the device if the GT06 firmware requires a reboot for changes to take effect.
7. Validate the tracker reports to Plaspy by using the device status commands and confirming device visibility in the Plaspy platform.

## Example Configuration Commands

The GT06 can be configured using SMS commands. The commands below are public examples and use the sample device password 666666 which is the default in many GT06 units. Keep the commands in order where shown and replace placeholders as needed.

- Factory reset or initial factory settings optional step
```text
FACTORY,666666#
```
Note: This is often used as an initial setup step to return the device to factory defaults. Use only when required.

- Set the time zone to UTC 0
```text
gmt,666666,e,0#
```

- Set the operator APN
```text
APN,666666,{{apn}}#
```
If your APN requires a username or password include the optional fields as supported by your device
```text
APN,666666,{{apn}},{{apnu}},{{apnp}}#
```
Placeholders explanation
- {{apn}} is the operator APN string required for GPRS
- {{apnu}} is the APN username when provided by the carrier
- {{apnp}} is the APN password when provided by the carrier

- Set the GPRS server to the Plaspy server endpoint using the public IP and port 8888
```text
server,666666,0,54.85.159.138,8888,0#
```
This command points the device to the Plaspy server IP on port 8888. Some workflows allow using the server domain d.plaspy.com instead of the IP when the firmware supports domain names.

- Set reporting interval to 60 seconds
```text
timer,666666,,60#
```

- Check current GPRS settings
```text
GPRSSET,666666#
```

- Check device status
```text
status,666666#
```

Use your device SIM phone to send these SMS strings to the tracker number. After sending, wait for confirmation SMS responses where the device provides them, then verify reporting in Plaspy.

## Configuration Notes

- Firmware and hardware revisions can change supported SMS command syntax and behavior consult the GT06 documentation or vendor notes for exact command formats.
- The GT06 example commands above use the Plaspy server IP explicitly as provided but some firmware allow using the domain d.plaspy.com instead.
- Choose UDP or TCP according to device capability and network requirements; Plaspy supports both and will detect the protocol automatically.
- SMS based setup is a common method for GT06 devices however manufacturers sometimes provide PC tools or mobile apps that perform the same changes.
- Change the default device password from 666666 when possible to improve security after initial configuration.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured GT06 delivers centralized visibility for trackers across a fleet or collection of assets. Pointing devices to the shared Plaspy server endpoint and port simplifies the setup process and allows the platform to identify the protocol automatically so trackers appear in the system for real time monitoring and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration methods firmware behavior and manufacturer details verify instructions on the official UVI Group site http://www.uvi-group.com/
