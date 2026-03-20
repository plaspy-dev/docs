---
slug: /eelink/gpt48_x/configuration
id: gpt48_x-configuration
sidebar_label: Configuration
title: EElink - GPT48‑X Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the EElink GPT48‑X tracker to Plaspy using shared server settings and SMS commands
keywords:
  - EElink GPT48‑X configuration
  - EElink GPT48‑X setup
  - GPT48‑X Plaspy
  - GPT48‑X server configuration
  - EElink GPS tracker setup
  - Plaspy device configuration
  - GPS tracker SMS commands
  - asset tracking configuration
  - EELINK protocol configuration
  - long standby GPS tracker
---

# EElink - GPT48‑X Configuration

This page documents the public configuration context for using the EElink GPT48‑X tracker with the Plaspy platform. It focuses on the shared Plaspy server settings, the practical setup steps commonly used in the field, and the SMS commands publicly supplied by the manufacturer for configuring basic connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools; this page summarizes the public workflow and includes the SMS commands provided in the device documentation for direct configuration when appropriate.

## Configuration Overview

Configuring the GPT48‑X for Plaspy prepares the device to send location and telemetry to a single Plaspy endpoint so the device becomes visible and manageable in the Plaspy dashboard. The model supports remote configuration methods including the platform, mobile app, or SMS, and the manufacturer documentation includes example SMS commands for basic setup.

- Point the device at Plaspy's shared server endpoint so data flows into the Plaspy platform
- Configure cellular APN so GPRS or LTE Cat‑M NB‑IoT connectivity can register and transmit
- Set the device reporting interval so the tracker sends updates at the desired frequency
- Validate connectivity and parameters using the device parameter query command
- Use SMS configuration for remote or out‑of‑band setups when platform or app access is not available

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and operational GPT48‑X device with an active SIM that has data and SMS enabled
- Knowledge of the mobile operator APN and any required APN username or password
- Access to the EElink configuration method you intend to use such as the manufacturer app, platform interface, or the SMS interface described below
- A means to send SMS commands from a phone or SMS gateway if configuring by SMS
- Time and location to test connectivity so you can validate the device appears in Plaspy after configuration

## How This Tracker Connects to Plaspy

The GPT48‑X is configured to report position and device status to a single Plaspy server endpoint and port so Plaspy can ingest telemetry and provide alerts and reports. Plaspy decodes the EELINK protocol fields to display telemetry, events, and health metrics on the platform.

- Device sends GNSS positions and telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device firmware or installer selection
- Plaspy automatically detects the tracker protocol so the same server and port work across supported trackers
- Telemetry and event reports become visible in Plaspy for monitoring, geofence checks, and alerting
- A verification or PARAM command can be used to confirm the tracker parameter state after setup

## Common Configuration Workflow

1. Access the official EElink configuration method you plan to use such as the EElink platform, mobile app, or SMS command interface
2. Enter the Plaspy server address by using either d.plaspy.com or 54.85.159.138 as the server destination
3. Set the server port to 8888 (Plaspy uses this same port for all supported devices)
4. If required by the device firmware, choose UDP or TCP transport for the connection
5. Configure the operator APN and any required APN credentials so the device can use cellular data
6. Apply or save the configuration and restart the device if the device requires a reboot to apply new settings
7. Validate that the device is reporting to Plaspy by checking device activity in the platform and by using the device PARAM or verification command

## Example Configuration Commands

The following SMS commands are published for the GPT48‑X and preserve the order recommended for basic setup. Send each command as a separate SMS to the device from an authorized phone number. Labeling notes are provided inline.

- Optional initial factory reset (use only when you need to reset device to factory defaults)
```text
FACTORY#
```

- Set the device time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
Note: [apn] is the access point name for your SIM operator. [apnu] and [apnp] are optional APN username and APN password placeholders if your operator requires them. If not required, send APN,[apn]#.

- Set the GPRS server using the Plaspy domain (preferred for DNS resolution)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy server IP (alternate form)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds
```text
TIMER,60#
```

- Verify current parameter settings
```text
PARAM#
```

Send commands in the sequence above when order matters for a fresh setup. Replace the placeholders with your operator values before sending. Use the PARAM# command to confirm parameters after configuration.

## Configuration Notes

- SMS based configuration is supported and described by the manufacturer commands above; platform or app based configuration may provide the same settings through a GUI
- Firmware and hardware revisions can change command formats or behaviors; always confirm with the device firmware release notes
- Choosing UDP or TCP depends on device firmware and network behavior; both transports are supported by Plaspy on the same shared port
- Plaspy uses a single port across supported devices and automatically detects tracker protocol so you do not need different ports for different models
- If you need to reset the device, use the factory reset command only when necessary and note that it will clear custom settings

## Why Use Plaspy with This Configuration

Using the GPT48‑X with Plaspy gives organizations long‑standby tracking with straightforward server configuration. Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and validating connectivity with the PARAM command is a practical flow for bringing devices into Plaspy for real time visibility, alerts, and historical reporting.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and exact setup details always verify the manufacturer documentation at https://www.eelink.com.cn/.
