---
slug: /istartek/pt19/configuration
id: pt19-configuration
sidebar_label: Configuration
title: iStartek - PT19 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek PT19 showing Plaspy server settings and SMS commands for straightforward tracker integration and reliable monitoring
keywords:
  - iStartek PT19 configuration
  - iStartek PT19 setup
  - PT19 Plaspy configuration
  - PT19 GPS tracker setup
  - iStartek wearable tracker configuration
  - PT19 server configuration
  - Plaspy tracker setup
  - PT19 SMS configuration
  - PT19 GPRS configuration
  - PT19 tracking platform setup
---

# iStartek - PT19 Configuration

This page documents the public configuration context for using the iStartek PT19 wearable GPS tracker with the Plaspy platform. It gathers the essential server settings, practical workflow guidance, and the publicly available SMS configuration commands used to point a PT19 at Plaspy for real‑time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The PT19 supports SMS and cellular data configuration methods; this guide includes the SMS command examples published for the PT19 and explains how those commands map to Plaspy server values.

## Configuration Overview

The goal of this configuration process is to prepare the PT19 so it reliably sends location and event data to Plaspy and is visible inside your Plaspy account. Using the public SMS commands and the shared Plaspy server settings, you can configure the device to report on a regular timer, deliver SOS and alarm events, and verify parameters after setup.

- Point the PT19 to the Plaspy server endpoint so telemetry arrives at the platform.
- Set the device APN and GPRS parameters so the watch can use cellular data.
- Configure reporting interval to balance timeliness and battery life.
- Verify parameters and confirm the device is visible in Plaspy after configuration.
- Use the published SMS commands as a simple, manufacturer supported method to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged PT19 device with working SIM card that has data or SMS capability and an active mobile plan.
- Access to a phone or SMS gateway able to send configuration SMS commands to the device.
- The operator APN, and optional APN username or password if required by your carrier.
- Access to the official iStartek configuration instructions or tools for reference.
- A Plaspy account to confirm the device appears and reports after configuration.
- Basic understanding of whether you want UDP or TCP transport on the device if prompted.

## How This Tracker Connects to Plaspy

The PT19 is configured to report location and event data to Plaspy by sending telemetry from the device over the cellular network to Plaspy's shared server endpoint and port. Plaspy ingests those messages, maps the protocol automatically, and makes location, alarms, and history available in the platform.

- The device is pointed to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- The PT19 can use UDP or TCP for telemetry transport depending on device configuration options.
- Location updates and event reports are sent on the configured timer to appear in Plaspy maps and logs.
- SOS and alarm events are forwarded to Plaspy for immediate notification handling.
- Plaspy detects the tracker protocol automatically and accepts messages on the shared port 8888 for all supported devices.

## Common Configuration Workflow

1. Access the official iStartek configuration method or software, or prepare to send SMS configuration commands per the PT19 instructions.
2. Set the device APN so cellular data can be used by the PT19 if using GPRS reporting.
3. Enter the Plaspy server endpoint by specifying d.plaspy.com or 54.85.159.138 as the server address.
4. Set the port to 8888 and choose UDP or TCP transport if the device requires a transport selection.
5. Apply or send the configuration to the device and save settings.
6. Restart the device if required by the manufacturer or if the device does not immediately apply settings.
7. Validate that the PT19 reports to Plaspy by checking your Plaspy account for live location, status, or parameter verification messages.

## Example Configuration Commands

The PT19 supports SMS based configuration. The following public commands are provided by the manufacturer for basic setup. Preserve placeholders exactly as shown when replacing with your operator values.

- Optional initial reset to factory defaults (use only if you want to clear previous settings):
```
FACTORY#
```

- Set the time zone to UTC 0 (example):
```
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your carrier APN. If your carrier requires a username or password, include {{apnu}} and {{apnp}} where supported by the device:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(If only APN is required, send APN,{{apn}}#)

- Configure the GPRS server using the Plaspy domain (recommended for most setups):
```
SERVER,1,d.plaspy.com,8888#
```

- Or configure the GPRS server using the Plaspy server IP instead of domain:
```
SERVER,0,54.85.159.138,8888#
```

- Set the device reporting timer to send updates every 60 seconds:
```
TIMER,60#
```

- Verify current parameter settings on the device:
```
PARAM#
```

Notes on placeholders:
- {{apn}} = your mobile provider APN string
- {{apnu}} = APN username if required
- {{apnp}} = APN password if required

Send these commands in the order shown when following a standard setup flow: APN first, then SERVER, then TIMER, then PARAM# to verify. Use FACTORY# only when an explicit reset is needed.

## Configuration Notes

- SMS based setup is a manufacturer published method for the PT19; carrier SMS delivery and device firmware behavior can affect command timing and success.
- Firmware revisions and hardware variants can change available commands or parameter names; always cross check with the current iStartek documentation.
- Choosing TCP versus UDP affects delivery characteristics; Plaspy accepts both and will auto detect the protocol, but pick the transport that matches your local network reliability and carrier behavior.
- Plaspy uses the same port 8888 for all supported trackers and automatically detects the tracker protocol at the server side.
- After configuration, use PARAM# or the device verification method to confirm settings before final deployment.

## Why Use Plaspy with This Configuration

Using the PT19 with Plaspy gives caregivers, security teams, and operators a straightforward path to real‑time location, SOS alerts, and history in a single platform. The PT19's wearable form factor and multi‑mode positioning complement Plaspy's telemetry ingestion so devices report reliably and appear inside the Plaspy dashboard for monitoring and incident response.

To learn more about Plaspy and view platform features that complement PT19 tracking, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details verify information with the manufacturer at https://istartek.com/.
