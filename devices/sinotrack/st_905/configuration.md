---
slug: /sinotrack/st_905/configuration
id: st_905-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the SinoTrack ST 905 to report to Plaspy using SMS or GPRS settings
keywords:
  - SinoTrack ST-905 configuration
  - SinoTrack ST-905 setup
  - ST-905 Plaspy setup
  - ST-905 server configuration
  - SinoTrack GPS tracker setup
  - ST-905 SMS configuration
  - ST-905 APN setup
  - Plaspy GPS tracker configuration
  - vehicle tracking ST-905
  - fleet management ST-905
---

# SinoTrack - ST-905 Configuration

This page documents the public configuration context for using the SinoTrack ST-905 with Plaspy. It explains the practical, manufacturer published SMS commands and the Plaspy server settings required to point the tracker to the Plaspy ingestion endpoint for real time tracking and platform integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the SMS command examples below as published guidance and verify any device specific behavior with official SinoTrack documentation.

## Configuration Overview

The aim of the configuration process is to prepare the ST-905 so it forwards GPRS position reports to the Plaspy platform and appears as an online device in Plaspy. The steps commonly involve setting the APN, configuring the GPRS server address and port, enabling GPRS reporting mode, and verifying the tracker reports successfully.

- Configure the device APN and GPRS server so packets are sent to Plaspy
- Set reporting intervals to balance location freshness and battery life
- Switch the tracker into GPRS mode so it sends position packets over the cellular data connection
- Verify settings using the tracker verification command to confirm the device reports to Plaspy
- Validate device visibility and telemetry on Plaspy after configuration

## Plaspy Server Settings

When configuring the ST-905 to work with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on incoming connections
- All devices in Plaspy use the same port so use port 8888 for supported devices

## Typical Requirements Before Setup

- A charged ST-905 with a working SIM card that has GPRS data enabled
- Access to a phone capable of sending SMS configuration commands to the tracker
- The APN, APN username, and APN password for the mobile operator you will use
- The device IMEI and any required device ID so you can confirm the correct tracker is reporting
- Knowledge of the tracker firmware version or vendor tool if you plan to use software utilities in addition to SMS
- Access to official SinoTrack documentation or vendor support for any device specific questions

## How This Tracker Connects to Plaspy

The ST-905 is configured to send location and status reports over the cellular data network to the Plaspy server endpoint. Once the tracker has the GPRS server and APN configured and GPRS mode enabled, it will forward position packets to Plaspy for processing and display.

- The tracker sends periodic GPRS data packets to the configured server IP and port
- Plaspy receives packets on port 8888 and determines the device protocol automatically
- Device visibility in Plaspy is established after the tracker successfully authenticates or identifies itself using the device ID
- Reporting intervals control how frequently position updates arrive in Plaspy
- Platform features such as alerts, geofencing, and history are available once the ST-905 reports successfully to the Plaspy server

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software. For the ST-905 this commonly means sending SMS commands as documented by SinoTrack.
2. Prepare APN credentials for your SIM card and confirm GPRS is available.
3. Enter the Plaspy server address by sending either the domain d.plaspy.com or the IP 54.85.159.138 to the tracker where supported.
4. Set the port to 8888 on the device configuration and choose UDP or TCP if the tracker requires explicit transport selection.
5. Apply or save the configuration by sending the appropriate SMS commands and switch the device to GPRS reporting mode.
6. Restart or power cycle the tracker if required by the firmware to apply changes.
7. Validate that the device reports to Plaspy and appears online in the Plaspy dashboard

## Example Configuration Commands

The ST-905 supports SMS configuration commands. The following commands are the public commands published for SinoTrack trackers and preserve the order recommended for initial setup. Use a trusted phone number to send these SMS messages to the device. Keep the placeholders as shown where applicable.

- Optional initial reset to restore factory settings. Only use if you intend to clear existing configuration.
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the operator. Replace the placeholders with your operator values
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation of placeholders
- {{apn}} is the APN name for your mobile operator
- {{apnu}} is the APN username if required by the operator, otherwise leave blank or send an empty placeholder as instructed by the vendor
- {{apnp}} is the APN password if required

- Set up the GPRS server to point to Plaspy using the numeric IP and port shown in SinoTrack documentation
```text
8040000 54.85.159.138 8888
```
Note: This example uses the numeric server IP as shown in SinoTrack public guidance. If your device supports domain names you may be able to use d.plaspy.com instead of the IP, but verify domain support in the device manual.

- Set update interval when device is on
```text
8050000 60
```

- Set update interval when device is off or in low power
```text
8090000 60
```

- Switch the tracker to GPRS reporting mode
```text
7100000
```

- Verify current configuration and retrieve device parameters
```text
RCONF
```

Use the RCONF verification response to confirm the APN, server IP, port, and reporting intervals are set as intended.

## Configuration Notes

- SMS based setup is a common method for the ST-905 but firmware versions and vendor tools can change exact command formats and behavior.
- The example server command above uses a numeric IP per published SinoTrack SMS examples. Confirm whether your device accepts domain names if you prefer to use d.plaspy.com.
- Choose UDP or TCP based on any device requirements. Plaspy accepts either transport and automatically detects the protocol used by the incoming device.
- Plaspy uses the same port for all supported devices. Use port 8888 when configuring the tracker.
- Always confirm commands and responses with the official SinoTrack documentation for your specific firmware revision

## Why Use Plaspy with This Configuration

Pointing the SinoTrack ST-905 to Plaspy provides a straightforward path to real time tracking, historical playback, and alerting without requiring proprietary platform hosting. For covert asset protection and fleet visibility the ST-905 combined with Plaspy can deliver position reporting, status monitoring, and configurable update intervals that balance battery life and tracking needs.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and firmware behavior on the SinoTrack official website https://www.sinotrackgps.com/ for the most current manufacturer details.
