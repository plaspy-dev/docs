---
slug: /sentar/q60_pet/configuration
id: q60_pet-configuration
sidebar_label: Configuration
title: Sentar - Q60 Pet Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Sentar Q60 Pet tracker with Plaspy server settings SMS commands and practical integration steps
keywords:
  - Sentar Q60 Pet configuration
  - Sentar Q60 Pet setup
  - Plaspy tracker configuration
  - GPS tracker configuration
  - pet tracker setup
  - GPRS tracker configuration
  - Sentar configuration guide
  - Q60 Pet Plaspy setup
  - tracker SMS commands
  - server settings Plaspy
---

# Sentar - Q60 Pet Configuration

This page covers the public configuration context for using the Sentar Q60 Pet tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, the practical SMS commands published by the manufacturer, and the typical steps to get the tracker reporting to Plaspy for real time pet monitoring.

Plaspy relies on shared server settings across supported devices and automatically detects the tracker protocol used by the device. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this documentation focuses on the public, practical configuration actions needed to connect a Q60 Pet to Plaspy while preserving the device commands published by Sentar.

## Configuration Overview

Configuring the Q60 Pet for Plaspy prepares the tracker to send location and basic telemetry over GSM GPRS to Plaspy and validates that the device is visible on the platform. The model supports SMS-based configuration commands as published by Sentar; following those commands will allow you to set timezone, APN, server endpoint, and reporting interval before validating connection in Plaspy.

- Point the device to Plaspy server domain or IP so GPRS uplinks go to Plaspy.
- Configure the carrier APN and credentials so the tracker has data connectivity.
- Set reporting interval and confirm device telemetry reaches Plaspy.
- Use the manufacturer SMS commands to perform initial setup and diagnostics.
- Optionally perform a factory reset when setting up a device for the first time to ensure a known state.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices configured for Plaspy use the same port and the platform automatically attempts to detect and handle the tracker protocol you use.

## Typical Requirements Before Setup

- A charged Q60 Pet tracker with an active Micro SIM installed and mobile data enabled.
- Carrier APN, APN username, and APN password as required by your SIM operator.
- Access to the device SMS configuration method or the official Sentar configuration tool.
- Knowledge of the device password; the published default in public commands is 123456.
- A charged battery or constant power while performing initial setup to avoid interruptions.
- Ability to receive and send SMS messages to the device for SMS-based configuration.

## How This Tracker Connects to Plaspy

The Q60 Pet sends position and telemetry over GSM GPRS to the configured Plaspy endpoint and port so the Plaspy platform can present live maps, timelines, and alerts. By configuring the device with the Plaspy server details and ensuring the APN is correct, the tracker becomes visible as a real time data source in Plaspy.

- Device transmits location and telemetry via the carrier GPRS connection to d.plaspy.com or 54.85.159.138.
- Data uplinks are sent to port 8888, the shared Plaspy port for all devices.
- You can choose UDP or TCP transport where the device requires a transport selection.
- Plaspy receives and parses the tracker data, detecting the protocol automatically.
- Once reporting, Plaspy displays location, battery status, and timeline events for operational monitoring.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the Q60 Pet, typically SMS commands as published by Sentar or the vendor configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the tracker requires explicit transport selection.
5. Configure APN and any APN credentials required by the SIM operator.
6. Apply or save the configuration and restart the device if required by the tracker firmware.
7. Validate that the device reports to Plaspy and appears on your Plaspy account.

If you are using SMS-based setup, follow the published SMS commands carefully and preserve placeholders such as APN, APN user, and APN password.

## Example Configuration Commands

The Q60 Pet can be configured by sending SMS commands as published by Sentar. The sample setup below uses the device default password 123456 where required. Commands are shown in the public form provided by the manufacturer; send each command as an SMS to the device number.

1. Optional initial factory reset (use only when you want to reset device settings):
```
pw,123456,factory#
```

2. Set the time zone to UTC 0:
```
pw,123456,lz,0,0#
```

3. Check SIM MCC and MNC (to identify operator codes):
```
pw,123456,imsi#
```

4. Set the operator APN where [apn] is the APN name, [apnu] is the APN username, and [apnp] is the APN password. The final xxxyy placeholder represents concatenated MCC and MNC where required:
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
- Explanation: Replace [apn] with the carrier APN, [apnu] with the APN username if required, and [apnp] with the APN password if required. Replace xxxyy with the MCC and MNC string if the device command expects it.

5. Set GPRS server to the Plaspy server IP and port (public command published by Sentar):
```
pw,123456.ip,54.85.159.138,8888#
```

6. Set update/upload interval to 300 seconds:
```
pw123456,upload,300#
```

7. Verify current settings (status command):
```
pw,123456,ts#
```

Note: These commands are presented in the same form as the public Sentar guidance. If your device firmware requires slightly different syntax or commas in different places, use the official Sentar documentation or vendor tool to confirm the exact SMS format for your device revision.

## Configuration Notes

- SMS based configuration is published for this model; ensure your SIM supports SMS and data and that SMS messages are sent from a trusted number if required.
- Firmware revisions and hardware revisions can alter command syntax or available features; check the device firmware version and Sentar documentation if commands fail.
- Choose UDP or TCP based on your network and device requirements; Plaspy accepts either on port 8888 and will detect protocol automatically.
- Replace APN placeholders with exact values provided by your mobile operator; missing or incorrect APN values will prevent GPRS connectivity.
- Use the factory reset command only when necessary or when instructed by support to return the device to a known state.

## Why Use Plaspy with This Configuration

Using the Sentar Q60 Pet with Plaspy provides a straightforward way to bring multi mode positioning and basic telemetry into a single platform for pet safety and operational visibility. By pointing the Q60 Pet to Plaspy's shared server endpoint and port, you get continuous location updates, battery telemetry, and timeline visibility that support timely alerts and monitoring.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Please verify the latest device specific setup details, firmware behavior, and manufacturer instructions on the official Sentar website http://www.sentarsmart.com/ because manufacturer specifications and setup methods can change over time.
