---
slug: /eelink/k6/configuration
id: k6-configuration
sidebar_label: Configuration
title: EElink - K6 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink K6 showing Plaspy server settings SMS commands and setup workflow
keywords:
  - EElink K6 configuration
  - EElink K6 setup
  - K6 server configuration
  - K6 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking setup
  - K6 SMS commands
  - Plaspy device configuration
  - K6 APN setup
  - tracker protocol detection
---

# EElink - K6 Configuration

This page documents the public configuration context for using the EElink K6 tracker with Plaspy. It focuses on the practical server settings, example SMS commands provided in public documentation, and the general workflow required to bring a K6 online in the Plaspy platform. Use this as a hands on reference for preparing the device for Plaspy while also reviewing the official manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so follow the steps below alongside the K6 documentation and any installer tools you have for the device.

## Configuration Overview

The aim of this configuration process is to prepare the K6 to communicate reliably with Plaspy, validate connectivity, and enable visibility on the platform. The EElink public commands show a simple SMS based configuration path that covers APN, server targets, reporting interval, and verification.

- Configure the device APN so it can use GPRS data to reach the internet.
- Point the tracker to the Plaspy server using the shared server endpoint and port.
- Set the reporting interval so location updates appear in Plaspy as desired.
- Verify configuration and connectivity using the provided parameter check command.
- Save and, if needed, restart the device so new settings take effect.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

These values are the public Plaspy endpoint settings for the K6 integration and are required when configuring the device server target.

## Typical Requirements Before Setup

- A working SIM card with data enabled and SMS capability installed in the K6.
- A charged or connected K6 unit ready for configuration and powered during setup.
- Knowledge of the mobile network APN, and optional APN username and password for the SIM.
- Access to the EElink SMS configuration method or the manufacturer configuration tool.
- A way to receive or check SMS replies from the device for verification commands.
- Basic access to the Plaspy account where you will register or verify the device after setup.

## How This Tracker Connects to Plaspy

The K6 is configured to report location and device status to the shared Plaspy server endpoint and port so Plaspy can ingest and display device telemetry. The public SMS commands show how to point the device to the platform and set reporting behavior.

- The tracker uploads data via GPRS to the configured server endpoint.
- The device is pointed to d.plaspy.com or the Plaspy IP and port so data reaches Plaspy.
- Plaspy automatically detects the tracker protocol when it receives device messages.
- Event driven and periodic updates become visible in Plaspy once connectivity is confirmed.
- Use the provided parameter check to confirm the device is using the intended server and settings.

## Common Configuration Workflow

1. Access the official EElink configuration method for the K6 such as the SMS command interface or manufacturer tool.
2. Ensure the SIM is active and set the operator APN using the APN command with the correct values.
3. Enter d.plaspy.com or 54.85.159.138 as the server target and set port 8888.
4. If the device requires selection of transport, choose UDP or TCP according to your installation needs.
5. Set the desired reporting interval (for example every 60 seconds) and any other timezone or timer settings.
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking the device parameters with PARAM# and confirming visibility in your Plaspy account.

## Example Configuration Commands

The EElink public configuration uses SMS commands. Preserve placeholders when sending these from your management phone or system.

- Optional initial factory reset (use only when needed):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Use the minimal form or include username and password if required by the operator:
```
APN,[apn]#
```
or
```
APN,[apn],[apnu],[apnp]#
```
Explanation of placeholders:
- [apn] is the mobile network APN provided by the SIM operator.
- [apnu] is the optional APN username if required by the operator.
- [apnp] is the optional APN password if required by the operator.

- Set the GPRS server using the Plaspy domain and port:
```
SERVER,1,d.plaspy.com,8888#
```
Alternative using the Plaspy IP address:
```
SERVER,0,54.85.159.138,8888#
```
Both forms are shown in public EElink guidance. Send the one appropriate to your workflow or installer practice.

- Set an update interval to report every 60 seconds:
```
TIMER,60#
```

- Check current parameter settings on the device:
```
PARAM#
```

Use these commands in the order shown when order matters for your setup. The factory reset is optional and should be used only when you need to restore defaults before configuring.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or available command set; always cross check commands with the EElink documentation for your device firmware version.
- The K6 can be configured via SMS as shown in the public commands or via manufacturer tools when available; choose the method that matches your installation and volume.
- Plaspy accepts both the domain form and IP form for the server target; use d.plaspy.com or 54.85.159.138 with port 8888.
- The K6 can be set to use UDP or TCP depending on installer preference and network constraints; Plaspy will automatically detect the protocol used when the device connects.
- After changing server or network settings, allow a short window for the device to register on the mobile network and send the first packets to Plaspy.

## Why Use Plaspy with This Configuration

Using the EElink K6 with Plaspy gives organizations a consistent platform for location visibility, event monitoring, and operational oversight. With the public SMS commands and shared Plaspy server settings you can bring a K6 online quickly and validate reporting to the platform.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer instructions verify the EElink K6 documentation at https://www.eelink.com.cn/ before finalizing any installation.
