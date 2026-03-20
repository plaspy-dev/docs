---
slug: /istartek/pt21/configuration
id: pt21-configuration
sidebar_label: Configuration
title: iStartek - PT21 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure iStartek PT21 for use with Plaspy including server settings SMS commands and practical setup steps
keywords:
  - iStartek PT21 configuration
  - PT21 setup Plaspy
  - iStartek PT21 server configuration
  - PT21 GPS tracker configuration
  - PT21 SMS setup
  - Plaspy tracker integration
  - GPS tracker Plaspy configuration
  - PT21 GPRS setup
  - PT21 device commands
  - PT21 tracking platform setup
---

# iStartek - PT21 Configuration

This page covers the public configuration context for using the iStartek PT21 tracker with Plaspy. It gathers the practical server settings, SMS commands, and workflow guidance commonly used to point a PT21 device at Plaspy so the device can report location and events into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The PT21 supports TCP, UDP and SMS-based configuration methods; this guide focuses on the public values and SMS commands commonly used to integrate the PT21 with Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the PT21 to communicate reliably with Plaspy so you can view real time positions, alerts, and route history. The steps below describe the practical purpose behind configuring server, APN and reporting parameters.

- Configure the device to send GPRS reports to Plaspy using the shared Plaspy server endpoint.
- Set the device APN and GPRS connection so it can reach the public internet and the Plaspy server.
- Choose a transport protocol (UDP or TCP) and set the standard Plaspy port so reports arrive correctly.
- Verify reporting and parameters using the device verification command so the device appears in Plaspy.
- Optionally reset to factory defaults before provisioning when preparing a new or returned device.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the PT21. Plaspy requires the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to manually select a protocol inside Plaspy

## Typical Requirements Before Setup

- A charged PT21 device with working battery and power enabled.
- An active SIM card with data (GPRS) enabled and SMS if you will send SMS commands for configuration.
- A mobile phone or SMS gateway able to send configuration SMS messages to the PT21 if using SMS configuration.
- Access to the official manufacturer configuration method or documentation from iStartek for firmware specific commands.
- Basic knowledge of the device IMEI and any device admin password if required by your vendor tools.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT21 sends location and event reports over GPRS to the shared Plaspy server endpoint and port so the platform can display positions and alerts in real time.

- The tracker reports to the Plaspy server address using the configured transport (UDP or TCP) on port 8888.
- Plaspy ingests those reports and maps them to the device record for real time visualization and historical playback.
- Alerts such as SOS or low battery are transmitted to Plaspy and shown as actionable events in the platform.
- Routine scheduled reporting (for example TIMER settings) controls how frequently the PT21 sends position updates to Plaspy.
- Plaspy’s shared port and automatic protocol detection simplify provisioning across many device types.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the PT21 (SMS commands, vendor tool, or provisioning app) as provided by the manufacturer or vendor.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 depending on the device configuration method.
3. Set the server port to 8888 which is the single port Plaspy uses for all devices.
4. Choose UDP or TCP in the device settings if the PT21 requires an explicit transport selection.
5. Set the device APN and any required APN credentials so the tracker can establish a GPRS data connection.
6. Apply or save the configuration and restart the device if recommended by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform and using the device verification command where available.

## Example Configuration Commands

The PT21 can be configured by SMS commands. Below are the commonly used public SMS commands in the order typically applied. Use an administrator phone or provisioning tool to send these SMS messages to the device phone number.

1. Optional factory reset (useful for initial provisioning or when clearing previous settings):
```
FACTORY#
```

2. Set the time zone to UTC+0:
```
GMT,E,0#
```

3. Set the operator APN. Replace the placeholders with your operator values:
- Required: {{apn}}
- Optional username: {{apnu}}
- Optional password: {{apnp}}

Common variants:
```
APN,{{apn}}#
```
or with username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Set the GPRS server to Plaspy by domain (recommended for easier DNS changes):
```
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server using the Plaspy server IP:
```
SERVER,0,54.85.159.138,8888#
```
Both commands point the device to Plaspy and use port 8888. Choose the domain or IP approach based on your provisioning preference.

5. Set the position update interval to 60 seconds:
```
TIMER,60#
```

6. Verify current device parameters:
```
PARAM#
```

Notes on placeholders: keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown and replace them with your mobile operator APN, username and password when required. The APN username and password are optional and only needed if your SIM operator requires them.

## Configuration Notes

- SMS based configuration is supported and shown here; some installations may prefer an over the air or vendor tool approach depending on firmware.
- Use the domain d.plaspy.com when possible to allow DNS based routing; the alternative IP 54.85.159.138 is provided for environments where DNS is restricted.
- Select UDP or TCP according to local network conditions and device behavior; Plaspy accepts either on port 8888 and will auto detect the tracker protocol.
- Firmware and hardware revisions may change command syntax or available features; always cross check with iStartek documentation for your PT21 firmware version.
- If you perform a factory reset, treat it as optional and use it only when preparing a device for reprovisioning or when troubleshooting.

## Why Use Plaspy with This Configuration

Using the PT21 with Plaspy gives compact asset and personal trackers a direct, low overhead path to real time position reporting, alerting and historical route playback. The PT21’s small form factor, hybrid positioning and support for standard TCP/UDP/SMS reporting make it practical to add real time visibility into Plaspy for pets, luggage, or discreet personal safety use cases.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details and firmware guidance at the manufacturer site https://istartek.com/. Manufacturer specifications and setup methods can change over time, so always confirm current instructions on the official iStartek site before deploying devices.
