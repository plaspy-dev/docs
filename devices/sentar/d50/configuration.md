---
slug: /sentar/d50/configuration
id: d50-configuration
sidebar_label: Configuration
title: Sentar - D50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Sentar D50 GPS watch showing Plaspy server settings, SMS commands, and practical setup steps for connection
keywords:
  - Sentar D50 configuration
  - Sentar D50 setup
  - Sentar D50 Plaspy
  - Sentar D50 GPS tracker setup
  - Sentar D50 server configuration
  - Sentar D50 SMS configuration
  - Sentar D50 APN settings
  - Plaspy tracker configuration
  - Plaspy device setup
  - GPS tracker configuration guide
---

# Sentar - D50 Configuration

This page covers the public configuration context for using the Sentar D50 4G Kids Smart Watch with Plaspy. It explains the shared Plaspy server settings you will point the D50 at, details the common SMS configuration commands published by the manufacturer, and outlines the practical steps to prepare the device so it can report location and events into Plaspy. Use this guide to understand what settings you must provide to the watch and how Plaspy receives its data.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while ingesting data. The D50 may be configured to use UDP or TCP on port 8888 to send data to Plaspy. Exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools, so always cross-check with Sentar documentation and the device commands included below.

## Configuration Overview

The configuration process prepares the D50 to communicate with the Plaspy platform, validates network connectivity, and enables the device to appear in your Plaspy account. The public manufacturer commands shown here are SMS-based examples commonly published for the D50 and include APN and server settings along with a verification command.

- Point the device to Plaspy using the shared server domain or IP and the common Plaspy port.
- Configure the watch APN, operator settings, and GPRS server so mobile data can be used to upload telemetry.
- Optionally perform a factory reset or timezone set as part of initial provisioning.
- Set the upload interval so the device sends periodic position updates to Plaspy.
- Verify settings using the device status check command before final rollout.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These are the public Plaspy endpoint values to use when configuring the D50. Plaspy uses the same port for all supported devices and will attempt to detect the tracker protocol automatically when data arrives on that port.

## Typical Requirements Before Setup

- A charged D50 device with an active nano SIM that supports mobile data
- APN credentials for the SIM carrier (APN name, username, password) and knowledge of MCC/MNC if required
- Ability to send SMS commands to the device for manufacturers that provide SMS provisioning
- Access to Sentar manufacturer documentation or configuration tool for reference
- A short validation window to confirm the device is reporting to Plaspy after configuration

## How This Tracker Connects to Plaspy

The D50 is configured to report location and event data to the shared Plaspy server endpoint and port so Plaspy can display positions and alerts in near real time. Typical device behavior when integrated with Plaspy follows standard tracker reporting patterns and event uploads.

- The device uploads periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888
- SOS and event alerts are sent as immediate uploads to the same Plaspy endpoint
- Telemetry such as battery and online status is transmitted to Plaspy for monitoring
- Plaspy maps, timelines, and notifications reflect the device’s periodic and event-driven reports
- Plaspy’s automatic protocol detection removes the need to specify protocol mapping on the platform side

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D50 (SMS commands or vendor tool) as documented by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 in the server / GPRS server setting.
3. Set port 8888 for the device upload server.
4. Choose UDP or TCP as the transport option if the tracker requires an explicit selection.
5. Configure APN and operator parameters using your SIM carrier details, including any MCC/MNC if the device requires them.
6. Apply or save the configuration on the device, and restart the device if the manufacturer recommends it.
7. Validate that the device reports to Plaspy by checking the platform for incoming data or by using a device status check command.

If you are using SMS-based provisioning, follow the command order provided below to avoid misconfiguration.

## Example Configuration Commands

The manufacturer provides SMS commands for the D50. Below are the commands taken from the public configuration content. Commands are shown in the same order they were published. Labeling and parameters are preserved as provided; placeholders are explained after the list.

- Optional initial factory reset (use only when needed)
```text
pw,123456,factory#
```

- Set the timezone to UTC+0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC (IMSI information)
```text
pw,123456,imsi#
```

- Set operator APN where [apn] is the APN name, [apnu] is the APN username, [apnp] is the APN password, and xxxyy is MCC+MNC if required
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Set GPRS server to Plaspy using the public IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds
```text
pw123456,upload,300#
```

- Verify settings (device status)
```text
pw,123456,ts#
```

Notes on placeholders and formatting:
- [apn], [apnu], and [apnp] are placeholders for your carrier APN name, APN username, and APN password. Replace them with your carrier values when sending commands.
- The sample device password shown above is 123456 as provided in the public setup content. Use the device’s current password if it has been changed.
- The commands are presented as published. Syntax and separators can vary by firmware version. Confirm exact command syntax with Sentar documentation if a command is not accepted.

## Configuration Notes

- SMS provisioning is a common method for the D50; ensure you can send SMS commands from a phone number the device will accept.
- Firmware updates or different hardware revisions can change the exact command syntax or required parameters; verify with the manufacturer for your device revision.
- Choose UDP or TCP based on your installation needs; both transports are supported for port 8888 but behavior can differ depending on network conditions.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so do not change the port unless explicitly instructed by Plaspy support.
- Always keep a record of any password or configuration changes you make during provisioning.

## Why Use Plaspy with This Configuration

Using Plaspy with the Sentar D50 brings centralized visibility and easy event handling for wearable trackers. Pointing the D50 at Plaspy’s shared server endpoint and port allows caregivers and administrators to receive location updates, SOS alerts, and device telemetry in one platform, improving situational awareness and response times.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. For the latest device-specific setup methods, firmware notes, and manufacturer guidance verify current information on the Sentar website at http://www.sentarsmart.com/ as configuration methods and firmware behavior can change over time.
