---
slug: /eelink/tk115/configuration
id: tk115-configuration
sidebar_label: Configuration
title: EElink - TK115 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the EElink TK115 GPS tracker to Plaspy with server settings and example SMS commands
keywords:
  - EElink TK115 configuration
  - EElink TK115 setup
  - TK115 Plaspy configuration
  - Plaspy tracker setup
  - EElink GPS tracker configuration
  - TK115 server settings
  - TK115 SMS commands
  - EElink tracker setup guide
  - GPS tracker Plaspy integration
  - vehicle tracking TK115
---

# EElink - TK115 Configuration

This page describes the public configuration context for using the EElink TK115 GPS tracker with Plaspy. It explains the Plaspy-side server settings you must apply on the device, shows example SMS commands that ship with public TK115 documentation, and outlines the practical workflow to prepare the tracker for reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can differ by firmware version, hardware revision, installation type, and vendor configuration tools. The TK115 supports SMS-based parameter changes and GPRS reporting; example SMS commands are included below for common setup actions.

## Configuration Overview

The goal of configuration is to point the TK115 at Plaspy, confirm the device can reach the platform, and enable the device to send location and event data reliably. Using the public commands below you can set the device APN, register the Plaspy server, and verify parameters via SMS.

- Configure the device GPRS and server parameters so the TK115 reports to Plaspy
- Validate network connectivity and APN settings to enable data reporting
- Set reporting intervals and basic telemetry parameters to suit your monitoring needs
- Confirm the tracker appears in Plaspy after applying settings and restarting the device
- Use the included PARAM check to verify applied configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming device connections

All Plaspy devices use the same port and the platform will attempt to identify the tracker protocol automatically after the device begins sending data.

## Typical Requirements Before Setup

- A powered TK115 unit with physical access to send SMS commands or use the manufacturer tool
- An activated SIM card with GPRS/data enabled and the correct APN for the mobile operator
- Access to the device SMS command method or official EElink configuration software or instructions
- A Plaspy account or project where you can confirm the device appears once it reports
- Knowledge of the required placeholders such as the mobile operator APN (see commands below)
- A plan for device restart or power cycle after configuration if needed

## How This Tracker Connects to Plaspy

When configured, the TK115 sends GPRS reports to the Plaspy server endpoint at d.plaspy.com (or the IP 54.85.159.138) on port 8888. Plaspy ingests the tracker messages and maps them into the platform where location, status, and alarm events are visible to users.

- Tracker is pointed to the Plaspy server endpoint and port and sends periodic reports
- Plaspy receives GPS/LBS coordinates and device status messages for visibility
- Alarm and status events are forwarded to Plaspy for alerting and workflow triggers
- Transport can be configured as UDP or TCP on the device while Plaspy handles protocol detection
- Device update intervals control how frequently the TK115 sends position and health data

## Common Configuration Workflow

1. Access the official EElink configuration method for the TK115, typically SMS commands or the vendor tool and documentation.
2. Set the device APN to match the SIM operator using the APN command including any username or password placeholders.
3. Enter the Plaspy server information by adding d.plaspy.com or the IP 54.85.159.138 as the TARGET server.
4. Set the server port to 8888 and choose UDP or TCP if the TK115 requires a transport selection.
5. Apply or save the configuration on the device (SMS commands are applied when the device accepts the SMS).
6. Restart or power cycle the tracker if required by the firmware to activate the new settings.
7. Validate that the device is reporting to Plaspy by checking the platform for incoming data or using the TK115 PARAM verification command.

## Example Configuration Commands

The public TK115 configuration uses SMS commands. Send these commands in the order shown when performing a first time or factory configuration. Keep placeholders as provided.

- Optional factory reset (use only when initial factory reset is required)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{apnu_and_apnp}}#
```
Explanation: replace [apn] with your mobile operator APN. If your operator requires APN username and password include them in the comma separated fields as shown in the original device syntax. The placeholder [apnu] represents APN username and [apnp] represents APN password when required. Example expanded form when username and password are needed:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to the Plaspy domain (preferred DNS name form)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy IP address
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```

Notes on commands:
- Send each SMS command as a single message to the TK115 control number.
- The SERVER command supports both the Plaspy domain d.plaspy.com and the Plaspy IP 54.85.159.138; the port must be 8888 as shown.
- Use the APN command with your operator values; keep placeholders if you must substitute your operator APN credentials.

## Configuration Notes

- Firmware and hardware revisions can change exact SMS syntax or command availability; always verify with EElink documentation for your firmware version.
- Many installers prefer sending these commands via SMS for field devices; vendor tools or USB configuration may also be available from EElink for batch programming.
- Choose UDP or TCP based on device options; Plaspy accepts either transport on port 8888 and performs automatic protocol detection server side.
- When using the SERVER command, you can use the domain d.plaspy.com or the IP 54.85.159.138; both must use port 8888.
- After applying settings, confirm device reports in Plaspy and use PARAM# to check the active configuration from the device.

## Why Use Plaspy with This Configuration

Configuring the EElink TK115 to report into Plaspy gives organizations a straightforward path to real-time location, alarm, and status visibility. With the TK115's vehicle-focused features such as ACC detection and optional relay control, connecting to Plaspy supports anti-theft workflows, operational monitoring, and automated alerting within a single platform.

To learn more about Plaspy and how to manage devices at scale visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time, so verify the latest setup details on the manufacturer website https://www.eelink.com.cn/.
