---
slug: /tzone/tz_tag04/configuration
id: tz_tag04-configuration
sidebar_label: Configuration
title: TZone - TZ-Tag04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-Tag04 with Plaspy including server settings SMS commands and setup workflow
keywords:
  - TZone TZ-Tag04 configuration
  - TZone TZ-Tag04 setup
  - TZone TZ-Tag04 Plaspy
  - TZ-Tag04 configuration guide
  - TZ-Tag04 server settings
  - TZone GPS tracker configuration
  - TZ-Tag04 APN setup
  - TZ-Tag04 SMS commands
  - Plaspy tracker setup
  - TZ-Tag04 tracking platform setup
---

# TZone - TZ-Tag04 Configuration

This page covers the public configuration context for using the TZone TZ-Tag04 tracker with Plaspy. It focuses on the practical server and device settings required to ensure the TZ-Tag04 reports to Plaspy, and it aggregates the public SMS configuration commands and workflow commonly used for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TZ-Tag04 can be configured using SMS commands to set APN, reporting interval, and GPRS server parameters so it can communicate with Plaspy.

## Configuration Overview

The goal of configuring a TZ-Tag04 for Plaspy is to prepare the device so it reliably transmits location and environmental data to the Plaspy platform and is discoverable in your Plaspy account. Below are the practical purposes of the configuration process:

- Set the mobile data APN and optional credentials so the tracker can connect to the mobile network.
- Configure the reporting interval and transmission parameters to control how often the device sends updates.
- Point the device to the Plaspy server endpoint and port so Plaspy receives the device telemetry.
- Activate GPRS data reporting and confirm transport protocol selection if the tracker requires it.
- Validate connectivity on the Plaspy platform so the device is visible and reporting correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and the platform will attempt to detect the protocol the tracker is using.

## Typical Requirements Before Setup

- A charged TZ-Tag04 with working battery and accessible installation location.
- A SIM card installed that has mobile data and SMS enabled for sending configuration commands and GPRS reporting.
- Access to the manufacturer configuration method for this model, commonly SMS command capability or vendor tools.
- The operator APN, and if required, APN username and password from your mobile carrier.
- A place to send and receive SMS commands (a mobile phone that can send SMS to the device).
- Access to Plaspy so you can verify the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The TZ-Tag04 is configured to send location and sensor data to the shared Plaspy server endpoint and port so the platform can present tracking and environmental information. Typical behaviors once configured include:

- The tracker opens a GPRS connection using the configured APN and transmits telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Position and environmental readings (for example temperature and humidity where supported) are sent at the configured update interval.
- Plaspy receives the device data and automatically detects the tracker protocol to interpret messages.
- The device can report heartbeats and regular location updates according to the update interval setting.
- Event reporting and low battery alerts are sent to Plaspy when triggered by the device firmware.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TZ-Tag04, typically the SMS command set documented by TZone.
2. Set the device APN using the operator APN and optional APN credentials so the tracker can use GPRS.
3. Enter d.plaspy.com or 54.85.159.138 in the device GPRS server settings.
4. Set port 8888 in the device server configuration and choose UDP or TCP if the tracker requires transport selection.
5. Apply or save the configuration and activate GPRS mode on the device.
6. Restart the device if required by the manufacturer or firmware to apply network settings.
7. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and confirming incoming telemetry.

## Example Configuration Commands

To set up the TZ-Tag04 by SMS, send the following commands in the order shown. These commands are public examples used to configure APN, reporting interval, the Plaspy server, and to activate GPRS mode.

- Set the operator APN (replace {{apn}} with your carrier APN; include {{apnu}} and {{apnp}} if your carrier requires username and password)
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
Note: If no APN username or password is required, omit the ,{{apnu}},{{apnp}} portion:
```text
*000000,011,{{apn}}#
```

- Set the update interval to 60 seconds
```text
*000000,018,60,999#
```

- Set the GPRS server to Plaspy using the server IP and port
```text
*000000,015,0,54.85.159.138,8888#
```
You can also use the Plaspy domain instead of the IP where the device supports domain names:
```text
*000000,015,0,d.plaspy.com,8888#
```

- Activate GPRS mode
```text
*000000,016,1#
```

Notes on the commands above:
- The sequence typically starts with APN then interval then server then activation so the device connects correctly.
- The string 000000 in these examples is commonly the default device password used in SMS commands; check your device manual as the password may differ.
- Placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your mobile operator values. Keep the placeholders if you are preparing templates.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always cross check with the maker documentation before large deployments.
- Some installers prefer to use domain name d.plaspy.com; devices that do not support DNS should use 54.85.159.138.
- Choose UDP or TCP based on the device requirement; Plaspy supports both and will detect the protocol automatically.
- SMS based configuration is common for this model, but vendor tools or a PC configuration interface may also be available depending on the distributor.
- Verify APN, SMS, and data plan details with your cellular operator before configuring a fleet of devices.

## Why Use Plaspy with This Configuration

Configuring the TZone TZ-Tag04 to report to Plaspy provides centralized visibility into location and environmental telemetry so organizations can monitor assets, respond to events, and maintain operational oversight. Using the shared Plaspy server settings and the SMS commands shown here simplifies device provisioning and helps get trackers reporting quickly.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details on the manufacturer site http://www.tzonedigital.com/ since firmware behavior and configuration methods may change over time.
