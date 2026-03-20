---
slug: /eelink/gpt12l/configuration
id: gpt12l-configuration
sidebar_label: Configuration
title: EElink - GPT12‑L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for EElink GPT12 L and Plaspy compatibility with practical server and SMS setup details
keywords:
  - EElink GPT12 L configuration
  - GPT12 L setup Plaspy
  - EElink tracker server configuration
  - GPT12 L SMS commands
  - GPS tracker Plaspy integration
  - EElink GPS platform setup
  - GPT12 L APN configuration
  - Plaspy server settings
  - asset tracker configuration
  - fleet tracking setup
---

# EElink - GPT12‑L Configuration

This page provides public configuration guidance for the EElink GPT12‑L when used with Plaspy. It collects the practical server settings and SMS commands that are commonly used to point a GPT12‑L tracker to Plaspy endpoints and to validate connectivity. Use this guidance as a starting point for integrating the GPT12‑L into Plaspy dashboards and reports.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, and the configuration tool or SMS command set used by the vendor. The GPT12‑L supports remote configuration including SMS commands which are shown in the Example Configuration Commands section below.

## Configuration Overview

The goal of the configuration process is to prepare the GPT12‑L for reliable communication with Plaspy, confirm that the device can reach Plaspy endpoints, and enable the reporting profile that matches your tracking needs. For many installations this is done by sending SMS configuration commands or using the manufacturer tool to set server and APN parameters.

- Point the device to Plaspy server endpoints so position and event messages are delivered reliably.
- Configure the device APN so the tracker has cellular data access for server reporting.
- Select transport and reporting interval settings to balance update frequency with battery life.
- Validate connectivity and confirm the device appears in Plaspy with live positions and event alerts.
- Use the provided SMS commands or the manufacturer configuration tool to apply settings when physical access is limited.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoints to enter into the GPT12‑L either via SMS commands or through the vendor configuration tool.

## Typical Requirements Before Setup

- A charged GPT12‑L device with access to the device SMS command interface or the EElink configuration tool
- An active cellular SIM provisioned for data and SMS with a correct APN for the mobile operator
- Knowledge of the correct APN values for your SIM including optional username and password if required
- Access to the installer or administrator documentation from EElink for device specific commands and firmware notes
- A Plaspy account and basic familiarity with the Plaspy platform so you can verify device visibility after setup
- A phone capable of sending SMS commands to the tracker if you plan to configure by SMS

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the GPT12‑L sends GNSS positions, event messages, and telemetry to the shared Plaspy ingestion endpoint and port. Plaspy processes those messages to provide live maps, route history, and alerts for fleet and asset monitoring.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Data is sent over either UDP or TCP on port 8888 depending on device settings and installer choice
- Plaspy receives position updates, geo‑fence events, battery and operational telemetry for display and alerts
- Plaspy automatically detects the tracker protocol so the same port works across supported devices
- Once reporting is active the device becomes visible in Plaspy for live monitoring and historical reporting

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT12‑L such as the SMS command interface or the EElink configuration software documented by the manufacturer.
2. Configure the APN for your cellular operator using the appropriate APN command or software field. Use placeholders such as {{apn}}, {{apnu}}, and {{apnp}} if required by the command format.
3. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection for server reporting.
5. Set the reporting interval and any event or geo‑fence rules you require, then apply or save the configuration.
6. Restart the device if the firmware or tool requires a reboot to apply changes.
7. Validate that the GPT12‑L is reporting to Plaspy and appears in the Plaspy platform with live positions and expected events.

## Example Configuration Commands

The GPT12‑L supports SMS based configuration. The following public SMS commands are provided by EElink for basic setup. Preserve the placeholders when substituting your APN and credential values.

1. Optional factory reset for initial setup or to clear earlier configuration
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,{{apn}}# 
```
If your APN requires a username and password include them as additional comma separated fields:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the mobile operator access point name. {{apnu}} is the APN username and {{apnp}} is the APN password when required.

4. Set the GPRS server pointing to Plaspy by domain
```
SERVER,1,d.plaspy.com,8888#
```

Or set the GPRS server pointing to Plaspy by IP
```
SERVER,0,54.85.159.138,8888#
```

5. Set the position update interval to 60 seconds
```
TIMER,60#
```

6. Check current parameters on the device
```
PARAM#
```

Use the domain or IP server command shown above. The device may accept either server form. Transport selection for UDP or TCP may be handled separately by device settings or the EElink configuration tool depending on firmware.

## Configuration Notes

- SMS based setup is a common and practical method for remote devices, but some installers prefer the EElink software or provisioning tool for bulk provisioning.
- Firmware versions and hardware revisions may change command syntax or available options. Always confirm commands against the EElink documentation for your device firmware.
- Choose UDP or TCP based on network reliability and your monitoring needs. Both transports are supported on Plaspy using port 8888 and Plaspy auto detects the protocol.
- Keep APN credentials ready before attempting GPRS server configuration. Missing or incorrect APN settings are a common cause of connectivity failures.
- After applying settings, allow a few minutes and verify the tracker reports to Plaspy using the platform and the PARAM# verification command if using SMS.

## Why Use Plaspy with This Configuration

Using the GPT12‑L with Plaspy provides a straightforward path to real time visibility and historical route data for fleets and high value assets. The combination of long battery life, flexible reporting profiles, and Plaspy ingestion endpoints makes it practical to balance frequent reporting when assets are active with low power standby for long term deployments.

To learn more about integrating devices and managing tracking for fleets and assets please visit https://www.plaspy.com. For device specific commands, firmware updates, and the latest manufacturer setup documentation verify details on the EElink official website https://www.eelink.com.cn/ as manufacturer specifications and setup methods can change over time.
