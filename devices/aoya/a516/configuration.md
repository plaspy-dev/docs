---
slug: /aoya/a516/configuration
id: a516-configuration
sidebar_label: Configuration
title: AoYa - A516 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for AoYa A516 GPS tracker to connect to Plaspy with public SMS commands and shared server settings
keywords:
  - AoYa A516 configuration
  - AoYa A516 setup for Plaspy
  - AoYa tracker configuration
  - Plaspy server configuration
  - GPS tracker SMS commands
  - GPRS tracker setup
  - vehicle tracking configuration
  - AoYa A516 server configuration
  - GPS platform setup
  - tracker protocol detection
---

# AoYa - A516 Configuration

This page covers the public configuration context for using the AoYa A516 GPS tracker with Plaspy. It summarizes the shared Plaspy server settings, the common SMS based commands published for the A516, and practical steps to prepare the device so it can report position and status into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform level. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the SMS commands documented here as a practical starting point and confirm with the official AoYa documentation where needed.

## Configuration Overview

Preparing an AoYa A516 for use with Plaspy means configuring its GPRS server parameters, confirming network access, and validating that the device successfully reports to Plaspy. The A516 supports SMS based configuration, and the sample commands below use the device default password shown in public manufacturer guidance.

- Configure the device to report to the Plaspy server endpoint so position and heartbeat messages reach the platform.
- Set the GPRS APN and optional APN credentials so the tracker can establish a data connection.
- Point the device to the shared Plaspy server address and port used by all trackers on Plaspy.
- Choose the transport mode the device requires either UDP or TCP when prompted by the device configuration.
- Verify settings with the device check command and monitor the device in Plaspy to confirm visibility.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept data without a per device protocol registration

## Typical Requirements Before Setup

- A charged and accessible AoYa A516 tracker with working SIM card for GSM GPRS data and SMS access.
- Knowledge of the SIM operator APN and optional APN username and password.
- Access to a mobile phone capable of sending SMS commands to the tracker or the official AoYa configuration tool if available.
- The device default password as published in manufacturer guidance for initial configuration (the sample commands below use 123456).
- A stable power source or fully charged battery to avoid interruptions during configuration and testing.
- Ability to view the device in Plaspy after configuration to validate reporting and connectivity.

## How This Tracker Connects to Plaspy

The AoYa A516 is configured to send GPRS data to the Plaspy shared server endpoint so location and reporting messages are available in the platform. Configuration ensures the tracker uses the correct APN and points to the Plaspy server address and port so data is routed correctly.

- The tracker establishes a GPRS data session using the operator APN and optional credentials.
- The device is set to send data to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- The device transport can be set to UDP or TCP; Plaspy accepts either and automatically detects the protocol in use.
- After successful configuration the device reports position and status messages to Plaspy where they appear in the platform.
- Use the device verification command to confirm local settings before checking visibility in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the A516 or prepare to send official SMS commands from a phone.
2. Configure the APN settings for the installed SIM using the APN command with the correct operator values.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device GPRS server address.
4. Set the port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the tracker requires a transport selection and set it accordingly.
6. Apply or save the configuration on the device and restart it if required by the device firmware.
7. Validate that the device reports to Plaspy by using the verification SMS command and checking device visibility in the Plaspy platform.

## Example Configuration Commands

The AoYa A516 can be configured by sending SMS messages to the device. The manufacturer sample commands below use the device default password 123456. Preserve placeholders when you replace them with operator values.

- Factory reset command (optional initial reset if you need to restore defaults)
```text
begin123456
```

- Set time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Set APN username and password (use only if your operator requires credentials)
```text
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. If your APN does not require credentials, this command can be omitted.

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: Plaspy also accepts the server domain d.plaspy.com in place of the IP where allowed.

- Switch to GPRS mode and choose transport
```text
gprs123456,1,1
```
or
```text
gprs123456
```
Explanation: the first form is used by some firmware variants to explicitly select GPRS and transport settings. Use the variant appropriate for your device firmware. Choose UDP or TCP per device requirements.

- Check current settings
```text
check123456
```
Explanation: this verification command returns the current device settings so you can confirm APN, server and transport settings before checking Plaspy.

## Configuration Notes

- SMS based configuration is commonly supported for the A516. Use the device default password 123456 only for initial setup and change it if you require increased security.
- Firmware versions and toolsets vary so some commands or parameter formats might differ. If a command is rejected, consult the official AoYa documentation for your firmware revision.
- Plaspy accepts both domain and IP for server configuration, but the published Plaspy IP 54.85.159.138 and domain d.plaspy.com with port 8888 are the public values to use.
- Choose UDP or TCP based on the device command format or firmware requirements. Plaspy will detect and accept the protocol automatically.
- Always confirm APN and optional credentials with your mobile operator before applying GPRS settings.

## Why Use Plaspy with This Configuration

Using the AoYa A516 with Plaspy provides a straightforward way to bring real time location and operational status into a single fleet and asset visibility platform. Pointing the device at the shared Plaspy server endpoint and port simplifies integration and lets Plaspy automatically detect the tracker protocol so you can view and manage the device alongside other supported trackers.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific setup details and firmware notes on the manufacturer site at http://www.aoyagps.com/ for the most current information.
