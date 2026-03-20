---
slug: /eelink/gpt09/configuration
id: gpt09-configuration
sidebar_label: Configuration
title: EElink - GPT09 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for EElink GPT09 showing Plaspy server settings and SMS commands for basic configuration
keywords:
  - EElink GPT09 configuration
  - EElink GPT09 setup
  - EElink GPT09 server configuration
  - GPT09 Plaspy
  - EElink tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - Plaspy tracker integration
  - EElink GPS setup
  - GPT09 SMS configuration
---

# EElink - GPT09 Configuration

This page covers the public configuration context for using the EElink GPT09 tracker with Plaspy. It explains which server settings Plaspy requires and shows the public SMS configuration commands that are commonly used to prepare a GPT09 for reporting into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide for practical setup context and verify any device specific variations with official EElink documentation.

## Configuration Overview

This section summarizes the practical goal of configuring a GPT09 for use with Plaspy: prepare the device to establish a GPRS connection to Plaspy's server endpoint and verify that the device reports location and status at the configured update interval.

- Configure the device to point to Plaspy server endpoint so it can send position and status data.
- Set the device APN and GPRS parameters so the tracker has mobile data connectivity.
- Choose transport (UDP or TCP) and confirm port settings to match Plaspy expectations.
- Set a reporting interval so the tracker provides visibility at the desired frequency.
- Validate configuration and confirm the device appears in Plaspy after applying settings.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring GPT09 devices. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and accepts device connections to the above endpoint

## Typical Requirements Before Setup

- A valid SIM card with data enabled and SMS capability installed in the GPT09.
- Device charged or connected to power and switched on.
- Access to the official EElink configuration method for GPT09 such as SMS commands or vendor software.
- Correct APN information from your mobile operator ready to use in the APN command.
- A way to send SMS commands to the device from a phone or SMS management tool.
- Knowledge of whether your installation requires more frequent reporting or long standby configuration.

## How This Tracker Connects to Plaspy

The GPT09 sends location and device status to a Plaspy server endpoint so the device becomes visible and manageable within the Plaspy platform. Configuration is typically applied via the manufacturer supported method (SMS commands in the examples below), which instructs the tracker to use Plaspy as its remote reporting destination.

- The tracker is configured to report to the shared Plaspy server endpoint and port using SERVER commands.
- Device data is sent over GPRS using the operator APN configured on the device.
- Transport can be set to UDP or TCP depending on device option and installer preference.
- Reporting frequency is controlled with a timer or interval command so Plaspy receives regular updates.
- After configuration, Plaspy will detect the protocol and begin receiving device messages for processing and display.

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT09 (SMS, vendor tool, or installer interface) as documented by EElink.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.
5. Configure the APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if the device requires a restart to apply settings.
7. Validate that the device reports to Plaspy and that it appears in the platform within the expected reporting interval.

## Example Configuration Commands

The GPT09 can be configured by sending SMS commands to the device. The commands below are taken from public EElink configuration examples and are presented in the order typically used. Labelled commands such as reset are optional and useful when starting from an unknown configuration.

- Optional initial factory reset (use only if you need to clear prior settings)
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
  - Use the APN name only:
```
APN,[apn]#
```
  - If your operator requires APN username and password, include them:
```
APN,[apn],[apnu],[apnp]#
```
  - Placeholder explanation:
    - [apn] is the operator APN name
    - [apnu] is the APN username if required
    - [apnp] is the APN password if required

- Set the GPRS server to Plaspy by domain (domain variant)
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP (IP variant)
```
SERVER,0,54.85.159.138,8888#
```

- Set reporting interval to 60 seconds
```
TIMER,60#
```

- Verify current device parameters
```
PARAM#
```

Use the domain or IP SERVER command according to your preference or network environment. After sending these commands, confirm the device has network connectivity and that messages reach the Plaspy endpoint.

## Configuration Notes

- Firmware versions and hardware revisions can affect exact command formats and available parameters; consult the EElink manual for GPT09 firmware specific instructions.
- The GPT09 supports SMS based configuration in the public examples shown here; vendor tools or over the air options may also be available.
- Choose TCP or UDP transport according to your network needs; Plaspy accepts both on port 8888 and will detect the tracker protocol automatically.
- Keep APN credentials ready; missing or incorrect APN settings are the most common reason a device cannot reach Plaspy.
- If you use the domain form SERVER,1,d.plaspy.com,8888#, DNS resolution is required on the mobile network; the IP form provides a direct address if DNS is unreliable.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT09 to report to Plaspy gives organizations a straightforward path to device visibility, event monitoring, and operational oversight. With a properly configured APN, server settings, and reporting interval, the GPT09 can provide reliable periodic updates that Plaspy displays and processes, helping teams manage assets and respond to events more effectively.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the latest GPT09 commands, firmware notes, and device specific instructions always verify details with the manufacturer at https://www.eelink.com.cn/ as firmware behavior and setup methods can change over time.
