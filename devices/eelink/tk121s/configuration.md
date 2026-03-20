---
slug: /eelink/tk121s/configuration
id: tk121s-configuration
sidebar_label: Configuration
title: EElink - TK121‑S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for EElink TK121 S to connect with Plaspy using shared Plaspy server settings and SMS commands
keywords:
  - EElink TK121 S configuration
  - TK121 S server configuration
  - TK121 S setup for Plaspy
  - EElink tracker Plaspy setup
  - TK121 S GPS tracker configuration
  - MoveLink protocol setup
  - GPS tracker SMS configuration
  - vehicle tracking configuration
  - fleet tracking Plaspy integration
  - TK121 S GPRS server setup
---

# EElink - TK121‑S Configuration

This page covers the public configuration context for using the EElink TK121‑S tracker with Plaspy. It focuses on the practical server settings, SMS configuration commands published by the manufacturer, and the steps commonly used to prepare the device to report into Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you can point the TK121‑S at the Plaspy endpoint and let the platform handle protocol detection. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the commands on this page as published public guidance and verify details against the device firmware and official EElink documentation.

## Configuration Overview

The goal of this configuration is to prepare the TK121‑S to send regular position and event data to Plaspy so the device becomes visible and manageable from the Plaspy platform. The TK121‑S supports remote configuration by SMS as one publicly documented method, and the commands below show the common public steps to set time zone, APN, GPRS server, reporting interval, and parameter checks.

- Point the device to the Plaspy server endpoint so data is routed into the platform
- Configure APN and network credentials so GPRS connectivity can establish
- Set reporting interval and timers to control how often the device sends position updates
- Verify parameters and connectivity with a device level status command
- Optionally restore factory settings before mass deployment when required

## Plaspy Server Settings

- Server domain d.plaspy.com for hostname based server configuration
- Server IP 54.85.159.138 for direct IP based server configuration
- Port 8888 used by Plaspy for tracker connections
- Transport support for UDP or TCP on port 8888 depending on device preference
- Plaspy automatically detects the tracker protocol when devices connect
- All devices in Plaspy use the same port so use port 8888 for any supported tracker

## Typical Requirements Before Setup

- A powered and accessible TK121‑S device with SIM installed and active network service
- Valid mobile data or SMS capability from the SIM carrier and correct APN credentials
- Access to the device via the manufacturer's configuration method such as SMS or vendor software
- Knowledge of the device IMEI and installer credentials where required for platform mapping
- A plan for where and how to validate reporting in Plaspy once server settings are applied

## How This Tracker Connects to Plaspy

When configured for Plaspy the TK121‑S is set to report location and event data to the shared Plaspy server endpoint and port. Plaspy ingests those packets and automatically recognizes the tracker protocol so the device appears in the platform without manual protocol selection on the server side.

- The tracker sends periodic position reports to d.plaspy.com or directly to 54.85.159.138
- Reports are sent to port 8888 which is the standard port Plaspy uses for all devices
- The device can use either UDP or TCP transport to reach the Plaspy endpoint
- Plaspy automatically detects protocol details so server side configuration is the same across devices
- Platform dashboards then display location, ACC status, and alarm events received from the tracker

## Common Configuration Workflow

1. Access the official EElink configuration method for your TK121‑S such as SMS commands or EElink configuration software
2. Enter the Plaspy server by name or IP using d.plaspy.com or 54.85.159.138 as the server address
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP transport if the device requires a transport selection
5. Apply or save the configuration on the device and send the commands if using SMS
6. Restart the tracker if required by the firmware or recommended by installer practice
7. Validate that the device reports to Plaspy and appears in the platform with live position updates

## Example Configuration Commands

The TK121‑S supports SMS based configuration. The following commands are the public SMS commands published for basic setup. Preserve the placeholders when applying commands.

1. Optional factory reset at the start of setup
```
FACTORY#
```
2. Set time zone to UTC 0
```
GMT,E,0#
```
3. Set the operator APN
```
APN,[apn]{{,[apnu],[apnp]}}#
```
- Explanation: replace [apn] with the carrier APN. If the APN requires a username or password include [apnu] and [apnp] respectively. The command may omit username and password if not required.

4. Set the GPRS server by domain for Plaspy
```
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server by IP for Plaspy
```
SERVER,0,54.85.159.138,8888#
```
5. Set the update interval to 60 seconds
```
TIMER,60#
```
6. Check current parameter settings
```
PARAM#
```
- Use PARAM# to request the device to reply with current configuration values for verification.

## Configuration Notes

- SMS based setup is publicly documented for the TK121‑S and is suitable for remote or field configuration when alternative tools are unavailable
- Firmware differences and vendor software versions can change command formats or available parameters so confirm the command syntax with the device firmware release notes
- Choose UDP or TCP transport according to installation requirements; both are supported by Plaspy on port 8888
- Use the PARAM# verification command after configuration to confirm the server address and timer settings applied correctly
- If deploying at scale consider scripted or vendor tooling that can send the same SMS batch to multiple devices and log responses

## Why Use Plaspy with This Configuration

Using the TK121‑S with Plaspy gives fleet teams a straightforward way to receive location, ACC status, and alarm events into a single platform. The shared Plaspy server settings and automatic protocol detection reduce the server side complexity, letting installers focus on device level setup such as APN and reporting intervals.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration syntax, firmware notes, and additional technical resources verify the official EElink documentation at https://www.eelink.com.cn/ since manufacturer setup methods and firmware behavior can change over time.
