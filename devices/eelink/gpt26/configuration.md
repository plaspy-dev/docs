---
slug: /eelink/gpt26/configuration
id: gpt26-configuration
sidebar_label: Configuration
title: EElink - GPT26 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the EElink GPT26 GPS tracker for use with Plaspy using public server settings and SMS commands for reliable tracking
keywords:
  - EElink GPT26 configuration
  - EElink GPT26 setup
  - GPT26 Plaspy configuration
  - EElink GPS tracker configuration
  - GPT26 server configuration
  - EElink tracking platform setup
  - GPT26 SMS configuration
  - EELINK protocol Plaspy
  - GPS tracker Plaspy setup
  - vehicle tracking GPT26
---

# EElink - GPT26 Configuration

This page documents the public configuration context for using the EElink GPT26 tracker with Plaspy. It focuses on the practical server settings and the SMS configuration commands that are commonly used to point a GPT26 device at Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available this page includes the GPT26 SMS commands published for public configuration and notes how to apply the Plaspy server settings in those commands.

## Configuration Overview

The configuration process prepares the GPT26 to communicate reliably with Plaspy so device locations and basic telemetry are visible in the platform. The steps below summarize practical goals for configuration and verification.

- Point the device to the Plaspy server endpoint so location and status messages are delivered to Plaspy.
- Configure the device APN and GPRS parameters so it can use mobile data for reporting.
- Set a periodic reporting timer appropriate for your use case and battery considerations.
- Verify settings and connectivity using the device verification command or by confirming visibility in Plaspy.
- Optionally restore factory defaults or apply timezone and other operational parameters before deployment.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the GPT26:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These values are the shared server endpoint and port Plaspy uses for supported devices.

## Typical Requirements Before Setup

- A working SIM card with a data plan and SMS capability inserted in the GPT26.
- Access to the device owner phone number to send SMS configuration commands or access to the official EElink configuration tools.
- Knowledge of the mobile network APN for the SIM operator to set in the device.
- A charged device and a safe test environment where the device can acquire location and connect to mobile data.
- Access to manufacturer documentation or support resources for firmware specific behavior.

## How This Tracker Connects to Plaspy

The GPT26 can be configured to send its location and device messages to the shared Plaspy server endpoint and port so the device becomes visible and manageable in Plaspy. Plaspy will detect and parse the tracker protocol automatically when the device connects.

- The device is configured with an APN and GPRS server entry that points to d.plaspy.com or the Plaspy server IP.
- Data is sent to the Plaspy server on port 8888 using either UDP or TCP as selected on the device.
- Periodic reports are controlled by the device timer setting so location updates arrive at Plaspy at the configured interval.
- Plaspy processes incoming device messages and associates them with the corresponding device record for visibility and monitoring.
- Verification of successful connection is done by checking that the device appears and reports in Plaspy.

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT26, typically SMS commands or the manufacturer tool described in EElink documentation.
2. Enter the Plaspy server hostname d.plaspy.com or alternatively the server IP 54.85.159.138 as the device server.
3. Set the device port to 8888.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure the APN and any APN username or password placeholders required by the mobile operator.
6. Apply or save the configuration and restart the device if required.
7. Validate that the device reports to Plaspy by checking device activity in the platform or using the device parameter query.

## Example Configuration Commands

The GPT26 supports SMS based configuration. The commands below are the public SMS commands commonly used for initial and basic setup. Send each command as an SMS to the device phone number in the order shown when the order is important.

- Optional initial factory reset (use only when you need to restore defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN
Note: [apn] is a placeholder for your mobile operator APN. If your operator requires an APN username and password include [apnu] and [apnp] where needed.
```text
APN,[apn]# 
```
Or, if username and password are required:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain and port (uses Plaspy domain):
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP and port (uses Plaspy server IP):
```text
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to every 60 seconds:
```text
TIMER,60#
```

- Verify current device parameters:
```text
PARAM#
```

Send these SMS commands to the GPT26 device number. Replace placeholders such as [apn], [apnu], and [apnp] with your operator values before sending.

## Configuration Notes

- SMS based setup is a published and supported method for the GPT26; confirm the device accepts SMS commands and that your SIM can receive SMS.
- Firmware versions and hardware revisions may change command behavior or available options; consult EElink documentation for the firmware on your unit.
- You can choose server by domain or by IP. Both SERVER,1,d.plaspy.com,8888# and SERVER,0,54.85.159.138,8888# are valid public forms.
- Select UDP or TCP transport based on installer preference or network requirements; Plaspy supports both and will detect the protocol when messages arrive.
- After applying settings, allow time for the device to attach to the network and verify connectivity in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the GPT26 provides a straightforward way to aggregate device location and status across a fleet or asset pool by leveraging the shared Plaspy server endpoint and automatic protocol detection. Configuring the GPT26 to report to d.plaspy.com or the Plaspy server IP on port 8888 allows the device to be discovered and processed by Plaspy without custom server endpoints per device.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information and command syntax on the manufacturer site https://www.eelink.com.cn/.
