---
slug: /eelink/gpt45/configuration
id: gpt45-configuration
sidebar_label: Configuration
title: EElink - GPT45 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT45 GPS tracker setup and Plaspy compatibility using shared server settings
keywords:
  - EElink GPT45 configuration
  - GPT45 Plaspy setup
  - EElink GPS tracker configuration
  - GPT45 server configuration
  - Plaspy device setup
  - GPS tracker SMS commands
  - GPT45 GPRS server setup
  - Plaspy compatibility guide
  - vehicle tracking configuration
  - tracker protocol detection
---

# EElink - GPT45 Configuration

This page covers the public configuration context for using the EElink GPT45 tracker with Plaspy. It explains the shared Plaspy server settings you will apply to the device and shows the publicly documented SMS commands that manufacturers commonly publish for GPT45 setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide as a practical reference and confirm device specific details with EElink documentation when needed.

## Configuration Overview

The purpose of this configuration is to prepare a GPT45 device so it can send location and telemetry to Plaspy reliably. Using the same Plaspy endpoint and port across devices simplifies fleet onboarding and lets the platform auto detect the device protocol for you.

- Configure the device to point at the Plaspy server endpoint so data is routed to your Plaspy account
- Provide correct APN and GPRS settings so the tracker has cellular data connectivity
- Set a reporting interval so Plaspy receives timely updates for live tracking and alerts
- Validate the device is visible and reporting in Plaspy after configuration
- Use the device verification command to check key parameters on the tracker

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices connect to the shared server and port

## Typical Requirements Before Setup

- A charged GPT45 unit ready for configuration and powered on
- A SIM card with an active data plan and SMS capability installed in the device
- Correct APN information from the mobile operator for GPRS connectivity
- Access to an SMS sender or the official EElink configuration tool or app to send setup commands
- Basic account access to Plaspy so you can confirm the device appears in the platform after setup

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPT45 sends GNSS fixes and telemetry over cellular data to the shared Plaspy endpoint. Plaspy receives the messages on the same port for all devices and determines the protocol automatically, so you do not need to provision separate ports for different models.

- Device is pointed to the Plaspy server domain or IP and port 8888
- Tracker transmits periodic position and sensor telemetry to Plaspy
- Event driven messages such as vibration or collision notifications are forwarded to the platform
- Plaspy maps incoming device messages to dashboard visibility, alerting, and historical replay
- Automatic protocol detection in Plaspy handles EELINK protocol variants without manual protocol selection

## Common Configuration Workflow

1. Access the official EElink configuration method such as the manufacturer SMS command list, configuration app, or USB tool.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 depending on your preference for domain or IP.
3. Set the server port to 8888 for all devices.
4. Choose UDP or TCP transport on the device if the tracker requires a transport selection.
5. Provide the operator APN and any required APN username or password placeholders if applicable.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in your Plaspy dashboard or device list.

## Example Configuration Commands

The GPT45 supports SMS based configuration. The commands below are the publicly documented SMS messages for initial setup. Preserve the placeholders when you send the APN command.

- Optional initial factory reset command
```
FACTORY#
```

- Set time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
Note the placeholders. Replace {{apn}} with your operator APN. The fields {{apnu}} and {{apnp}} represent optional APN username and APN password respectively.
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy by domain and port
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP and port
```
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to 60 seconds
```
TIMER,60#
```

- Verify current parameters on the device
```
PARAM#
```

These commands are shown in the order commonly recommended for first time configuration. Use FACTORY# only if you need to reset the device to factory defaults before applying new settings.

## Configuration Notes

- SMS based configuration is supported and shown above. Use the EElink provided SMS syntax exactly and preserve placeholders when replacing values.
- Different firmware versions or hardware revisions may accept slightly different command variants or require additional steps. Consult EElink documentation when in doubt.
- If your tracker requires a transport choice, select UDP or TCP according to site needs. Plaspy accepts both on port 8888 and will detect protocol automatically.
- Always confirm APN settings with the mobile operator if data connectivity is not established.
- After configuration, allow a few minutes for the device to register on the network and send its first reports to d.plaspy.com on port 8888.

## Why Use Plaspy with This Configuration

Using GPT45 with Plaspy brings device telemetry into a single platform for live tracking, alerting, and analytics. The shared Plaspy server and consistent port simplify rollouts across many units because the platform automatically detects connected tracker protocols and normalizes incoming data for visualization and rules.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup instructions and command syntax from the official manufacturer site at https://www.eelink.com.cn/ before deploying devices.
