---
slug: /aoya/a8/configuration
id: a8-configuration
sidebar_label: Configuration
title: AoYa - A8 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the AoYa A8 tracker showing Plaspy server settings SMS commands and setup workflow
keywords:
  - AoYa A8 configuration
  - AoYa A8 setup
  - AoYa A8 server configuration
  - AoYa A8 Plaspy
  - Plaspy tracker configuration
  - AoYa GPS tracker setup
  - A8 GPS platform setup
  - personal tracker configuration
  - SMS tracker configuration
  - GPRS tracker setup
---

# AoYa - A8 Configuration

This page covers the public configuration context for using the AoYa A8 tracker with Plaspy. It explains the shared server settings Plaspy requires and shows the common SMS based commands and workflow used to point an A8 device at the Plaspy endpoint. Use this guide alongside the manufacturer documentation when performing installation or fleet onboarding.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you only need to apply the same endpoint and port on the device. Exact manufacturer side steps can vary by firmware version hardware revision installation type and vendor tools so confirm device specific details with the manufacturer if needed.

## Configuration Overview

The purpose of configuring an AoYa A8 for Plaspy is to ensure the tracker reports location and status reliably to the Plaspy platform for real time visibility and monitoring. Configuration typically focuses on network access APN and server details so the device can establish GPRS data sessions and send packets to the Plaspy endpoint.

- Configure the device APN and optional APN credentials so it can use the cellular data network.
- Point the tracker to the Plaspy server endpoint and port so reports arrive in Plaspy.
- Choose the transport mode UDP or TCP if required by the device and save the setting.
- Validate connectivity by checking the device reports successfully to Plaspy.
- Use SMS commands or manufacturer tools as required by the A8 firmware to apply the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged AoYa A8 device with working battery and powered on.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- Knowledge of the APN and optional APN username and password for your SIM provider.
- Ability to send SMS commands to the tracker or access to the manufacturer configuration tool.
- The device default password if required for SMS configuration for example the A8 default password 123456 in public commands.
- Access to the official AoYa documentation or vendor instructions for firmware specific guidance.

## How This Tracker Connects to Plaspy

When configured for Plaspy the AoYa A8 sends its location and device data to the shared Plaspy server endpoint and port so it becomes visible within the Plaspy platform. Plaspy receives the tracker messages on the common port and automatically determines the correct protocol for processing.

- The tracker uses cellular data to open a GPRS session and send packets to d.plaspy.com or 54.85.159.138 on port 8888.
- You can choose UDP or TCP transport on the device depending on firmware options.
- Plaspy performs protocol detection so you do not need to select a protocol in the platform.
- Once reports are received the device becomes visible and sends regular updates to Plaspy for tracking and event reporting.
- Validation of connectivity is done by confirming the device appears online in Plaspy and by using device check commands if available.

## Common Configuration Workflow

1. Access the official AoYa configuration method for the A8 such as the manufacturer SMS commands or vendor configuration tool.
2. Ensure the device has a valid SIM and set the APN to your operator using the device commands.
3. Enter the Plaspy server by hostname or IP using d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888 which Plaspy uses across supported devices.
5. Choose UDP or TCP transport on the tracker if the device requires a transport selection.
6. Apply or save the configuration and restart the device if the firmware requires a restart to apply network settings.
7. Validate the device reports to Plaspy by checking device status in Plaspy or using the device verification SMS command.

## Example Configuration Commands

The AoYa A8 can be configured by sending SMS commands. The sample public commands below use the device default password 123456. Replace placeholders where noted and keep the default password if the device still uses factory settings.

- Optional initial factory reset command labeled as initial setup when needed
```
begin123456
```

- Set time zone to UTC 0
```
time zone123456 0
```

- Set the operator APN
```
apn123456 {{apn}}
```
Explanation: Replace {{apn}} with your mobile operator APN string.

- Set APN username and password if required
```
up123456 {{apnu}} {{apnp}}
```
Explanation: Replace {{apnu}} with the APN username and {{apnp}} with the APN password. Only send this if your operator requires APN credentials.

- Set the GPRS server to Plaspy by IP and port
```
adminip123456 54.85.159.138 8888
```
This command points the device at the Plaspy server IP and the shared port 8888. You may be able to use d.plaspy.com in place of the IP if the device supports hostnames.

- Switch to GPRS mode and select transport
```
gprs123456,1,1
```
or
```
gprs123456
```
Explanation: Some firmware variants use parameters to specify transport and mode. The example gprs123456,1,1 is a commonly referenced form that can indicate enabling GPRS and selecting UDP or TCP depending on firmware. Use the variant your device firmware requires.

- Check current settings
```
check123456
```
Use this verification command to receive the device configuration via SMS and confirm APN server and mode settings.

## Configuration Notes

- Firmware differences matter Configure commands and parameter order can vary between firmware releases and hardware revisions so always consult the device firmware notes.
- SMS based configuration is supported by the A8 Public example commands above show the SMS workflow which is common for AoYa trackers.
- TCP versus UDP If the device allows selecting transport choose the option that matches your network requirements and testing. Plaspy supports both and will detect the protocol automatically.
- Hostname support Some devices accept domain names like d.plaspy.com while others require the server IP. If possible use the hostname but use 54.85.159.138 if DNS is not available.
- Keep the default password in mind The public examples use 123456 as the default SMS password. Change the device password after initial setup if your workflow requires secure deployment.

## Why Use Plaspy with This Configuration

Using the AoYa A8 with Plaspy provides a straightforward way to add small personal or asset trackers into a centralized tracking platform. By applying the shared Plaspy server settings and validating connectivity you enable real time visibility event reporting and consistent device management across a fleet of mixed trackers.

To learn more about Plaspy visit https://www.plaspy.com and for the most current device specific commands and firmware guidance consult the manufacturer at http://www.aoyagps.com/ . Manufacturer specifications setup methods and firmware behavior can change over time so verify current information on the official AoYa site when planning deployments.
