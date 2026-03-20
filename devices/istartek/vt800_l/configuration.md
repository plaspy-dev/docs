---
slug: /istartek/vt800_l/configuration
id: vt800_l-configuration
sidebar_label: Configuration
title: iStartek - VT800-L Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for iStartek VT800-L to connect with Plaspy using shared server settings and SMS commands
keywords:
  - iStartek VT800-L configuration
  - iStartek VT800-L setup
  - VT800-L Plaspy configuration
  - iStartek tracker configuration
  - VT800-L server settings
  - VT800-L SMS commands
  - VT800-L GPS tracker setup
  - Plaspy device configuration
  - vehicle tracking VT800-L
  - fleet tracker VT800-L
---

# iStartek - VT800-L Configuration

This page covers the public configuration context for using the iStartek VT800-L tracker with the Plaspy platform. It focuses on the practical server settings and the example SMS-based commands commonly used to point the device to Plaspy so it can report location and telemetry reliably.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VT800-L modelConfiguration shown below uses SMS commands as a documented manufacturer method and should be adapted to your environment and firmware level.

## Configuration Overview

The goal of the configuration process is to prepare the VT800-L to communicate reliably with Plaspy and to validate that position and telemetry are visible in the platform. Using the published SMS commands you can set time zone, APN, the Plaspy server endpoint, and reporting intervals so the device uploads data to Plaspy as expected.

- Configure the device's cellular APN and GPRS settings so it has data connectivity.
- Point the VT800-L to the Plaspy server endpoint (domain or IP) and the shared port.
- Set the position reporting interval so realtime updates meet operational needs.
- Verify parameters and confirm the device is sending data to Plaspy.
- Use the device's buffering and resend behavior to preserve history during coverage gaps.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A working SIM card with an active data plan and SMS capability installed in the VT800-L
- Access to the device for SMS configuration or the manufacturer's configuration tool
- A stable power source and appropriate vehicle wiring for initial setup and testing
- Knowledge of the network operator APN and any APN username or password required by the SIM
- A means to receive or check device replies to SMS commands to confirm parameter changes
- Basic access to Plaspy so you can verify the device appears and reports after configuration

## How This Tracker Connects to Plaspy

The VT800-L is configured to report GNSS positions and telemetry to the Plaspy server endpoint and port. Once the device has correct APN and server settings, it uses its cellular link to upload location and event data to Plaspy where it becomes visible for live tracking and history playback.

- The tracker is set to send data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be selected as UDP or TCP; Plaspy accepts either and detects the protocol automatically
- Location, alarms, and telemetry events are forwarded to Plaspy for dashboards and alerts
- Buffered history stored in the device flash is uploaded to Plaspy after reconnection
- Periodic or timer-based reports (for example every 60 seconds) keep Plaspy updated on vehicle status

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT800-L (SMS commands, web tool, or vendor software) as provided by the manufacturer.
2. Enter the Plaspy server endpoint either by domain d.plaspy.com or by IP 54.85.159.138 according to your preference or network requirements.
3. Set the port to 8888 for the device server upload.
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
5. Configure the device APN with your operator credentials so the tracker can use mobile data.
6. Apply or save the configuration and restart the device if required by the tracker firmware.
7. Validate the device reports to Plaspy by checking the device status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The VT800-L supports SMS-based configuration. The following public commands are presented in the order provided by the manufacturer. Send these commands to the device SIM number via SMS. Note: preserve the placeholders when entering APN information.

- Optional initial factory reset (use only if you need to restore factory defaults)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your operator APN. If required, include username {{apnu}} and password {{apnp}} separated by commas.
```text
APN,{{apn}}# 
```
Or if username and password are needed:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to use the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server to use the Plaspy IP on port 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to send reports every 60 seconds
```text
TIMER,60#
```

- Verify current parameter settings
```text
PARAM#
```

Notes on placeholders and usage:
- {{apn}} is your mobile operator APN string. Leave the username and password placeholders only if your operator requires them.
- Use the SERVER command with either the domain or the IP as needed. Both point to Plaspy on port 8888.
- The FACTORY# command is optional and should only be used when a full reset is appropriate.

## Configuration Notes

- Manufacturer firmware or hardware revisions can change command syntax or behavior; always confirm with iStartek documentation for your device revision.
- SMS-based setup is convenient for field installations but verify command replies and parameter values after sending SMS to ensure successful application.
- Choose UDP or TCP based on your network environment; Plaspy accepts either and will auto-detect the tracker protocol on port 8888.
- Ensure APN credentials match the SIM operator requirements; incorrect APN settings are a common cause of connectivity failures.
- The device's local buffering will preserve history when the cellular link is lost and forward stored points to Plaspy after reconnection.

## Why Use Plaspy with This Configuration

Using the VT800-L with Plaspy gives fleet operators visibility into vehicle location, status, and event reporting with a configuration that can be applied quickly using SMS or vendor tools. Plaspy's shared server endpoint approach simplifies deployment across many devices because the same port and automatic protocol detection reduce per-device configuration complexity.

To learn more about Plaspy and its platform capabilities visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and manufacturer instructions verify information at the official iStartek site https://istartek.com/ as device methods and parameters can change over time.
