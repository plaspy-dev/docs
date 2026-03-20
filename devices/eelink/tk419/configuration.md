---
slug: /eelink/tk419/configuration
id: tk419-configuration
sidebar_label: Configuration
title: EElink - TK419 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EElink TK419 showing Plaspy server settings SMS commands and practical setup steps for fleet tracking
keywords:
  - EElink TK419 configuration
  - EElink TK419 setup
  - TK419 Plaspy configuration
  - EElink tracker configuration
  - EElink TK419 server settings
  - EElink GPS tracker setup
  - TK419 SMS configuration
  - Plaspy device configuration
  - vehicle tracker TK419
  - fleet tracking TK419
---

# EElink - TK419 Configuration

This page covers the public configuration context for using the EElink TK419 tracker with Plaspy. It focuses on the practical information used to point the device at Plaspy ingestion endpoints, basic SMS commands provided by the manufacturer, and what to check so the device appears in Plaspy for live tracking and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. When available we include EElink SMS commands and configuration guidance that align with Plaspy server settings.

## Configuration Overview

This configuration process prepares the TK419 to communicate with Plaspy using the platform's shared ingestion endpoint and port. The goal is to set the device APN and server target, confirm transport settings, and validate that telemetry and location updates arrive in Plaspy.

- Configure APN and cellular parameters so the TK419 can send data over GPRS or LTE.
- Point the tracker to Plaspy server d.plaspy.com or the provided server IP and set port 8888.
- Choose UDP or TCP transport on the device if the firmware requires a transport selection.
- Use SMS or the official EElink configuration tool to apply settings and confirm them.
- Validate device reporting to Plaspy and check live updates, alarms, and IO telemetry in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device requirement
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible TK419 unit with cellular connectivity enabled.
- A working SIM card with data enabled and the correct APN settings for the mobile operator.
- Access to the EElink configuration method you prefer such as SMS commands or the official manufacturer software or installer tool.
- A phone or SMS gateway capable of sending configuration SMS messages if using SMS based setup.
- Credentials and knowledge of your operator APN values including optional APN username and password.
- A Plaspy account and access to a Plaspy instance to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

The TK419 transmits GNSS positions and telemetry to the shared Plaspy ingestion endpoint on port 8888. Plaspy receives the tracker messages, automatically detects the TK419 protocol, and converts raw messages into live map positions, alarms, and IO events.

- Device is configured to report to the Plaspy server endpoint d.plaspy.com or the direct server IP 54.85.159.138.
- Data is sent on port 8888 which Plaspy uses for all supported trackers.
- Transport can be UDP or TCP depending on the TK419 firmware and configuration choice.
- Plaspy automatically detects the tracker protocol so no additional protocol selection is required on the platform side.
- Once reporting, position updates, alarms, and IO status become visible in Plaspy dashboards and alert rules.

## Common Configuration Workflow

1. Access the official EElink configuration method or software or prepare to send SMS commands according to EElink guidance.
2. Enter the Plaspy server address as d.plaspy.com or use the server IP 54.85.159.138 when prompted for a server host.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP on the device if the firmware requires a transport selection.
5. Apply or save the configuration on the TK419 and, if recommended, restart the device.
6. Validate that the device reports to Plaspy by checking for incoming positions and telemetry in your Plaspy instance.
7. If telemetry is not visible, verify APN settings and confirm SMS or data connectivity again.

## Example Configuration Commands

The manufacturer documents public SMS commands for the TK419. Below are the common SMS commands in order as used for initial setup. Send each command as an SMS to the device number. Commands preserve placeholders where applicable.

- Optional initial factory reset
```text
FACTORY#
```
Label: Optional initial reset to restore factory defaults. Use only when needed.

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{apnu? ,[apnu]}}{{apnp? ,[apnp]}}#
```
Note: Replace [apn] with your operator APN. If your APN requires a username or password, include [apnu] and [apnp] as provided by your operator. The exact SMS formatting depends on device firmware; use APN,[apn] or APN,[apn],[apnu],[apnp] as needed.

- Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternative server configuration using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to every 60 seconds
```text
TIMER,60#
```

- Check current parameters
```text
PARAM#
```
Label: Use PARAM# to request the device to reply with its current configuration for verification.

Note on placeholders: [apn] is the mobile operator APN string. [apnu] and [apnp] are optional APN username and password placeholders. Keep the braces when preparing SMS templates and replace them with your real operator values.

## Configuration Notes

- EElink firmware revisions may change the exact SMS syntax or command behavior. Confirm the format in the device manual for your firmware.
- The Tracker supports configuration via SMS or via official EElink tools. If you prefer a graphical tool, use the manufacturer software and follow the same server and port values.
- Choosing UDP or TCP depends on network conditions and firmware options. Plaspy accepts either on port 8888 and will detect the device protocol automatically.
- Use the PARAM# command to verify settings after applying them. If updates do not appear in Plaspy, recheck APN and cellular connectivity.
- All devices reported to Plaspy use the same port 8888 so you do not need per device port differentiation on the server side.

## Why Use Plaspy with This Configuration

Using the TK419 with Plaspy gives fleet operators consistent ingestion of location, alarm, and IO telemetry into a single platform. Configuring the device to point at d.plaspy.com or the Plaspy server IP ensures devices report to the common Plaspy endpoint so you can manage tracking, alerts, and reporting across a large fleet without custom gateway work.

To learn more about Plaspy and how it works with compatible devices visit https://www.plaspy.com. For the latest TK419 device specific instructions firmware notes and official command references verify the manufacturer's documentation at https://www.eelink.com.cn/.
