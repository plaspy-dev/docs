---
slug: /eelink/gpt50/configuration
id: gpt50-configuration
sidebar_label: Configuration
title: EElink - GPT50 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the EElink GPT50 tracker for use with Plaspy using SMS commands and shared server settings
keywords:
  - EElink GPT50 configuration
  - EElink GPT50 setup
  - GPT50 Plaspy configuration
  - GPT50 server configuration
  - EElink tracker configuration
  - GPT50 SMS setup
  - GPS tracker Plaspy setup
  - asset tracking GPT50
  - vehicle tracking GPT50
  - EElink GPS platform setup
---

# EElink - GPT50 Configuration

This page covers the public configuration context for using the EElink GPT50 tracker with Plaspy. It explains the shared server settings Plaspy requires, the typical prerequisites you should confirm before setup, and the practical SMS based commands included in the public GPT50 configuration content that prepare the device to communicate with Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools, so this guide focuses on the public, practical steps and the SMS commands provided for the GPT50 while recommending that you verify firmware specific details with the manufacturer.

## Configuration Overview

Configuring the GPT50 for Plaspy prepares the tracker to report GNSS positions and device telemetry to the Plaspy platform using the shared Plaspy server endpoint and port. For the GPT50 the publicly available commands show an SMS based workflow to set time zone, APN, GPRS server, reporting interval, and an optional factory reset or parameter check.

- Set the device APN so it can establish cellular data and GPRS connectivity to Plaspy.
- Point the tracker to the Plaspy server by hostname or IP and assign the shared Plaspy port.
- Choose transport mode if the device requires a selection between UDP or TCP and save the configuration.
- Configure reporting interval or timer to control how frequently the tracker sends updates.
- Validate settings with the device parameter check command and confirm visibility in Plaspy.
- Use a factory reset only when needed or during initial device preparation.

## Plaspy Server Settings

- Server domain d.plaspy.com for hostname based configuration
- Server IP 54.85.159.138 for numeric address based configuration
- Port 8888 as the shared data port used by Plaspy
- Transport support for UDP or TCP depending on the tracker requirement
- Plaspy automatically detects the tracker protocol so the server will accept the device protocol
- All devices in Plaspy use the same port so you will always use port 8888 for compatible devices

## Typical Requirements Before Setup

- A powered GPT50 device with sufficient battery or external power for configuration
- A valid cellular SIM with data and SMS enabled and the correct APN settings from your mobile operator
- Access to the GPT50 manufacturer configuration method such as SMS commands or official configuration tools
- Knowledge of the operator APN and any optional APN username or password your carrier requires
- Network coverage in the target deployment area to allow the device to connect to GPRS or cellular data
- Access to the Plaspy account or platform to confirm device reporting after configuration

## How This Tracker Connects to Plaspy

The GPT50 is configured to report position and telemetry data to the shared Plaspy server endpoint and port so Plaspy receives location updates and device state for monitoring and reporting. Plaspy's automatic protocol detection helps accept data from the tracker once the correct server host or IP and port are set on the device.

- The tracker sends GNSS position and device telemetry to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- The device uses cellular data with a configured APN to establish a GPRS or IP connection to Plaspy
- Plaspy ingests and displays live updates for operational visibility and history
- Reporting intervals configured on the device control how frequently Plaspy receives updates
- Events and alerts reported by the device are forwarded to Plaspy for platform rule processing and notifications

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GPT50, for example the documented SMS command flow or vendor tool.
2. Enter d.plaspy.com as the server hostname or enter 54.85.159.138 as the server IP in the device configuration.
3. Set the server port to 8888 which is the shared Plaspy port for all devices.
4. If the device requires a transport selection, choose UDP or TCP as appropriate for your installation.
5. Configure the operator APN and any optional APN username or password required by the carrier.
6. Apply or save the configuration and restart the device if the tracker firmware requires it.
7. Validate that the device reports to Plaspy by checking parameters or confirming a live position appears in the Plaspy platform.

## Example Configuration Commands

The GPT50 public configuration commands can be applied via SMS. Preserve the placeholders and send each command as a separate SMS message to the device number. Commands are shown in the public order from the manufacturer content.

1. Optional initial factory reset if you need to return the device to factory defaults
```text
FACTORY#
```

2. Set the time zone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
```text
APN,{{apn}}{{apnu_and_apnp}}#
```
Note about the APN command: the placeholder {{apn}} should be replaced with your carrier APN. If your operator requires an APN username and password, the command can include {{apnu}} and {{apnp}} as additional comma separated fields. The original public command format was APN,{{apn}},{{apnu}},{{apnp}}# where the username and password are optional based on carrier requirements.

4. Set the GPRS server by hostname using the shared Plaspy host and port
```text
SERVER,1,d.plaspy.com,8888#
```

Alternatively set the GPRS server by numeric IP using the shared Plaspy IP and port
```text
SERVER,0,54.85.159.138,8888#
```

5. Set the update interval to 60 seconds
```text
TIMER,60#
```

6. Check current parameter settings
```text
PARAM#
```

Follow the manufacturer guidance for SMS formatting rules such as no extra whitespace and required trailing characters. Send commands one at a time and wait for any acknowledgement messages from the device before sending the next command.

## Configuration Notes

- SMS based configuration is shown in the public GPT50 content but manufacturer tools or serial/USB configuration utilities may also be provided depending on firmware and vendor.
- Firmware versions and hardware revisions can change available command syntax or required parameters so confirm commands on the manufacturer site.
- Choose UDP or TCP based on installation requirements but remember Plaspy accepts either transport and automatically detects the protocol.
- Use the APN placeholders exactly as required by your carrier and include username and password fields only if needed.
- If you perform a factory reset do so as an initial setup step only when necessary for a clean configuration.

## Why Use Plaspy with This Configuration

Using the EElink GPT50 with Plaspy gives organizations durable long life trackers the ability to deliver regular GNSS positions and telemetry to a single consolidated platform. Configuring the tracker to point to Plaspy using the shared server settings simplifies fleet provisioning and ensures consistent ingestion of location and device data for monitoring, geofence alerts, and historical reporting.

Learn more about Plaspy at https://www.plaspy.com and verify the latest GPT50 device specific setup, firmware behavior, and command syntax on the official manufacturer site https://www.eelink.com.cn/ so you have the most current information for your deployment.
