---
slug: /eelink/gpt12_x/configuration
id: gpt12_x-configuration
sidebar_label: Configuration
title: EElink - GPT12‑X Configuration
sidebar_class_name: menu_item_tracker
description: Configure the EElink GPT12 X for Plaspy using public SMS commands and shared server settings for reliable telemetry ingestion
keywords:
  - EElink GPT12‑X configuration
  - EElink GPT12‑X setup
  - GPT12‑X Plaspy
  - GPT12‑X GPS tracker configuration
  - EElink tracker server configuration
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - EELINK protocol Plaspy
  - long standby GPS tracker setup
  - fleet tracker configuration
---

# EElink - GPT12‑X Configuration

This page documents the public configuration context for using the EElink GPT12‑X tracker with Plaspy. It focuses on the practical server settings and manufacturer provided SMS commands required to point the device to Plaspy for telemetry and alarm ingestion, while highlighting the shared settings Plaspy expects.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol after the device begins reporting. Manufacturer side configuration steps can vary by firmware revision, hardware variant, installation type, and vendor tools, so use this guidance together with official EElink documentation and your device firmware notes.

## Configuration Overview

This configuration prepares the GPT12‑X to send location and event data to Plaspy using the public EELINK protocol and shared Plaspy server endpoint. The goal is to ensure the tracker is reachable from the cellular network, has the correct APN and server parameters, and is verified as reporting into Plaspy.

- Configure APN and GPRS server settings so the device can establish cellular connectivity and send data.
- Point the tracker to Plaspy using the shared server endpoint and port so telemetry is routed to Plaspy.
- Validate update timing and reporting frequency to balance battery life with reporting needs.
- Confirm device reporting using the device verification command and by observing the device in Plaspy.
- Save settings and restart the tracker if required to activate the new server configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol after the device begins reporting

Plaspy uses the same port for all supported devices and will detect the protocol automatically, so configuring the server endpoint and port as shown above is the primary server side requirement.

## Typical Requirements Before Setup

- A charged GPT12‑X unit with accessible power or battery ready for configuration.
- A valid cellular SIM card with data enabled and correct APN information for the device market.
- Access to an SMS sender or the official EElink configuration tool if required by your deployment for applying SMS commands.
- The EElink product manual or firmware notes for GPT12‑X to confirm command formats and any device specific behavior.
- A plan to validate reporting in Plaspy after configuration by checking platform telemetry and alarms.
- Administrative access to any remote management tools you use for bulk configuration or OTA updates.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the GPT12‑X sends compact telemetry and alarm messages to the shared Plaspy endpoint and port so Plaspy can ingest GNSS, battery, and event data for mapping and alerts. Plaspy receives the device messages and will automatically detect the EELINK protocol and handle decoding and routing.

- The tracker sends position and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888.
- You may configure the device to use UDP or TCP transport on port 8888 depending on device firmware options.
- Plaspy automatically detects the tracker protocol so the same port and server settings are used across supported devices.
- Telemetry and alarm messages appear in Plaspy dashboards for real time monitoring, geofencing, and historical reports.
- Validation of connectivity is completed by confirming reports arrive at Plaspy after configuration.

## Common Configuration Workflow

1. Access the official EElink configuration method for your GPT12‑X unit such as SMS configuration or the manufacturer tool and read firmware notes.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 as specified by your install method.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection when setting server parameters.
5. Configure the device APN and any operator credentials required so the tracker can open a GPRS or cellular data session.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply new settings.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and using the tracker verification command where available.

## Example Configuration Commands

The GPT12‑X supports SMS based configuration commands. The following public SMS commands are provided by the manufacturer and can be sent in the order shown. Labeling follows the manufacturer syntax where commands are terminated with a hash symbol.

- Optional initial factory reset (use only if you need to restore factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0 (example):
```text
GMT,E,0#
```

- Configure the operator APN. Replace [apn] with your network APN. If your operator requires username or password, include [apnu] and [apnp] as provided by your SIM operator. The username and password placeholders are optional and only required if your APN needs them:
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: If your device or SMS client does not support the compact placeholder format, send APN,[apn],[apnu],[apnp]# and omit username or password fields you do not need.

- Set the GPRS server using the Plaspy domain and port:
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy IP and port:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds:
```text
TIMER,60#
```

- Verify current device parameters:
```text
PARAM#
```

Preserve the order above for initial setup where required. The SERVER commands show both the domain and IP option; choose the one appropriate for your environment. The device may accept either TCP or UDP transport settings when configuring the server, depending on firmware; ensure you select the transport your installation requires.

## Configuration Notes

- Firmware and hardware revisions can alter exact SMS command syntax or available parameters; always check the EElink GPT12‑X manual for firmware specific notes.
- This modelConfiguration shows SMS based configuration as a public option. If you use a manufacturer tool or an MDM solution, use equivalent fields for APN, server, and port.
- Choose UDP or TCP based on network and firmware support. Plaspy supports both on port 8888 and will detect the tracker protocol automatically.
- Keep APN placeholders [apn], [apnu], and [apnp] intact when preparing bulk scripts and replace them with operator specific values before sending.
- Plaspy uses the same port for all supported devices which simplifies large scale rollouts; confirm connectivity in Plaspy after applying settings.

## Why Use Plaspy with This Configuration

Using the GPT12‑X with Plaspy provides a low maintenance telemetry solution for organizations needing reliable long term tracking, event alarms, and centralized visibility. The shared Plaspy server settings and automatic protocol detection reduce per device configuration complexity so you can focus on deployment scale and operational monitoring rather than unique server endpoints.

To learn more about Plaspy and how it handles device integration and fleet monitoring visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and official commands from the manufacturer please verify information on the EElink website https://www.eelink.com.cn/. Manufacturer specifications and configuration methods can change over time so confirm details before large scale deployments.
