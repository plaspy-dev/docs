---
slug: /eelink/gpt12_l/configuration
id: gpt12_l-configuration
sidebar_label: Configuration
title: EElink - GPT12‑L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the EElink GPT12 L tracker to Plaspy using shared server settings and SMS commands
keywords:
  - EElink GPT12 L configuration
  - GPT12 L setup
  - GPT12 L Plaspy
  - EElink tracker configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - Plaspy server configuration
  - asset tracker configuration
  - GPS platform integration
  - tracker SMS configuration
---

# EElink - GPT12‑L Configuration

This page documents the public configuration context for using the EElink GPT12‑L tracker with Plaspy. It collects the practical server settings and the SMS commands published for this model so you can point the device to Plaspy and validate connectivity. Use this guide to prepare the tracker for integration into Plaspy dashboards and reporting.

Plaspy receives device messages via a shared ingestion endpoint and automatically detects compatible tracker protocols. The manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat these public commands as a practical starting point and confirm specifics with EElink documentation where needed.

## Configuration Overview

This configuration process prepares the GPT12‑L to send GNSS positions and event messages to Plaspy using standard server settings. The goal is to configure APN and server settings, verify transport, and confirm the device reports correctly to the platform.

- Set the operator APN so the tracker can establish GPRS or cellular data connectivity.
- Configure the device to report to Plaspy server endpoints using the shared port.
- Choose and validate transport (UDP or TCP) if the device requires selection.
- Use SMS or the manufacturer tool to apply settings and validate the device reports to Plaspy.
- Confirm reporting with the device parameter check and by viewing the tracker in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged GPT12‑L unit with battery and basic power applied
- A valid cellular SIM provisioned for data and able to receive SMS if configuring by SMS
- Access to the EElink SMS command flow or the official EElink configuration tool
- Network coverage in the device location and correct APN parameters from the mobile operator
- A phone or console capable of sending SMS commands to the device if using the SMS method
- Access to the Plaspy account or platform to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

The GPT12‑L sends GNSS positions, event messages and telemetry to Plaspy by reporting to the shared server endpoint and port. Once the device is pointed to Plaspy, the platform will ingest messages and present live positions, alerts, and history according to the configured reporting behavior.

- The tracker is configured to report to d.plaspy.com or the Plaspy server IP at port 8888.
- Messages can be sent over either UDP or TCP depending on device settings and network preferences.
- Plaspy automatically detects the tracker protocol and ingests position plus event messages.
- Reporting intervals and event triggers determine how frequently updates reach Plaspy and when alerts are generated.
- After configuration, operational monitoring and historical routes are available in Plaspy for analysis.

## Common Configuration Workflow

1. Access the official EElink configuration method for your device model, either the manufacturer app, web tool, or SMS command interface.
2. Ensure the SIM is active and configure the operator APN using the provided APN command or the manufacturer tool.
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. If required by the device, choose UDP or TCP as the transport and save that selection.
5. Apply or save the configuration on the tracker and send any required activation commands.
6. Restart or power cycle the device if required by the manufacturer to apply network settings.
7. Validate that the device is reporting to Plaspy by checking the tracker list and live data in the Plaspy platform and by using the device PARAM check.

## Example Configuration Commands

The GPT12‑L supports SMS based configuration. The following commands are the published public SMS commands in the order they are commonly used. Send each command as a separate SMS message to the device number. Label any reset command as optional initial setup when appropriate.

- Optional factory reset (use only when needed to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{# if apnu or apnp }} ,[apnu],[apnp]{{/ if }}#
```
Note: [apn] is the Access Point Name for your mobile operator. [apnu] and [apnp] are optional APN username and password placeholders when required by the operator. Preserve these placeholders and replace them with your operator credentials if needed.

- Set the GPRS server by domain (preferred human readable form)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds
```text
TIMER,60#
```

- Check current parameter settings
```text
PARAM#
```

Send commands in the order shown when performing an initial configuration. Use the SERVER command to point the device to Plaspy using either the domain d.plaspy.com or the IP 54.85.159.138, both on port 8888. The device may accept UDP or TCP on that same port depending on the firmware.

## Configuration Notes

- SMS based configuration is commonly supported; confirm with EElink whether your device firmware accepts SMS commands and whether any command syntax differs by firmware.
- Some installers prefer to use the manufacturer web tool or configuration app instead of SMS; either method should set APN and the Plaspy server to the same values.
- Choose UDP or TCP according to your network and firmware recommendations; Plaspy supports both transports on port 8888.
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol when messages arrive.
- Firmware revisions and regional device variants can change supported commands or syntax. Verify exact commands against current EElink documentation.

## Why Use Plaspy with This Configuration

Configuring the GPT12‑L to report to Plaspy provides a practical route to live position tracking, event alerts and historical route data with minimal ongoing maintenance. The shared Plaspy server settings and automatic protocol detection simplify multi device deployments, letting operations teams consolidate ingestion and visibility across mixed fleets.

To learn more about Plaspy visit https://www.plaspy.com and review the latest EElink device documentation at https://www.eelink.com.cn/ to confirm manufacturer specific commands and firmware behaviors.
