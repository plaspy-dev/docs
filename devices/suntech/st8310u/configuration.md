---
slug: /suntech/st8310u/configuration
id: st8310u-configuration
sidebar_label: Configuration
title: Suntech - ST8310U Configuration
sidebar_class_name: menu_item_tracker
description: Configure Suntech ST8310U for use with Plaspy using public server settings and example SMS commands for APN and reporting
keywords:
  - Suntech ST8310U configuration
  - Suntech ST8310U setup
  - Suntech ST8310U server configuration
  - ST8310U Plaspy
  - Suntech tracker configuration
  - vehicle GPS tracker setup
  - ST8310U SMS commands
  - Suntech APN setup
  - GPS tracker configuration guide
  - fleet tracking ST8310U
---

# Suntech - ST8310U Configuration

This page documents the public configuration context for using the Suntech ST8310U tracker with Plaspy. It gathers the Plaspy server settings and practical setup guidance that are commonly used to point an ST8310U at the Plaspy platform. Where applicable, example SMS commands from public configuration content are included to help installers and integrators complete an initial setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST8310U supports SMS based configuration and OTA updates, so both SMS commands and manufacturer configuration tools may be used depending on your installation and device firmware.

## Configuration Overview

The goal of the configuration process is to prepare the ST8310U so it reliably reports location and device events to Plaspy and becomes visible in the platform. This typically involves setting the network APN, pointing the device at the Plaspy server endpoint and port, and confirming reporting intervals.

- Configure the device APN and optional APN credentials so the tracker can use mobile data
- Point the tracker to the Plaspy server endpoint and port so reports reach the platform
- Set the device reporting interval to the desired frequency for your monitoring needs
- Validate settings and confirm the device appears in Plaspy reporting or diagnostics
- Keep a record of the device ID that Plaspy will use to identify the tracker

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and powered ST8310U unit accessible for configuration
- A mobile SIM with data enabled and SMS capability if you plan to use SMS commands
- Access to the device IMEI so you can derive the Plaspy device ID used in commands
- Access to the official Suntech configuration method or vendor tool for firmware specific settings
- Knowledge of your cellular network APN and optional APN username and password
- A short test route or stationary location to confirm the device reports correctly after setup

## How This Tracker Connects to Plaspy

The ST8310U is configured to send its telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and display device data. Plaspy uses the same TCP or UDP port for all devices and will detect the protocol used by the tracker automatically when data arrives.

- The tracker sends location and status messages to d.plaspy.com or the equivalent IP at 54.85.159.138
- All devices use port 8888 to report to Plaspy
- You may choose UDP or TCP transport on the device side if the tracker requires a transport selection
- Plaspy automatically detects the device protocol so you do not need to configure a protocol on the server side
- Once reporting is active the device becomes visible for monitoring and event reporting in Plaspy

## Common Configuration Workflow

1. Access the official Suntech configuration method or software, or prepare to send SMS commands per manufacturer guidance.
2. Enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138 in the device server configuration.
3. Set the device port to 8888 as the reporting port.
4. If the device requires a transport selection, choose UDP or TCP according to your network and installer preference.
5. Configure the APN and optional APN username and password for the device SIM.
6. Apply or save the configuration and restart the device if the firmware requires a restart for changes to take effect.
7. Validate the device reports to Plaspy by checking device activity or using a verification command.

## Example Configuration Commands

The ST8310U can be configured by SMS using the public command format shown below. The device ID is the six digit value extracted from the IMEI as described after the commands. Preserve placeholders when you send actual SMS commands.

- Device ID rule
  - The device ID is the six digits taken from the IMEI starting at the ninth digit and ending at the fourteenth digit inclusive (that is, the six digits before the final IMEI checksum digit). Example: IMEI 12345678 901234 5 produces device ID 901234.

- Set operator APN and GPRS server
```text
SA200NTW;{{ID}};02;{0 or 1};{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Notes on the APN command
  - Replace {{ID}} with the device ID derived from the IMEI as explained above.
  - The fourth field should be 1 if you supply an APN username or password, otherwise 0.
  - Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} if you plan to substitute your operator APN, APN username, and APN password.

- Set the reporting interval to 60 seconds
```text
SA200RPT;{{ID}};02;60;60;60;3;0;0;0;0;0
```

- Check current settings
```text
SA200CMD;{{ID}};02;PresetA
```

Send these SMS commands from the authorized phone number if the device requires number authentication. If you use a configuration tool instead, the same fields are typically available in the network or server settings panel.

## Configuration Notes

- Firmware variations may change exact parameter order or available fields. Always cross check with the Suntech firmware notes for your device revision.
- The device supports SMS based configuration as shown here, and may also support OTA or vendor tool configuration depending on your hardware and firmware.
- Choose UDP or TCP according to installation requirements. TCP can offer session reliability while UDP is simpler and often used for lightweight telemetry.
- The APN username and password placeholders {{apnu}} and {{apnp}} are optional for many operators. Set the fourth flag field to 1 when supplying them.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so server side changes are unnecessary.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech ST8310U gives you a simple, centralized way to collect location and event data from your tracked vehicles. The shared Plaspy server settings and automatic protocol detection reduce server configuration complexity, letting installers focus on device level setup such as APN and reporting intervals.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup methods, firmware behavior, and manufacturer details verify information on the official Suntech site http://www.suntechint.com/ as vendor documentation and firmware can change over time.
