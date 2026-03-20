---
slug: /wanway/g19/configuration
id: g19-configuration
sidebar_label: Configuration
title: WanWay - G19 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the WanWay G19 GPS tracker for use with Plaspy including server settings SMS commands and practical setup guidance
keywords:
  - WanWay G19 configuration
  - WanWay G19 setup
  - WanWay G19 server configuration
  - WanWay G19 Plaspy
  - G19 GPS tracker configuration
  - GPS tracker server setup
  - vehicle tracking platform configuration
  - SMS configuration commands G19
  - GPRS setup for G19
  - Plaspy compatible trackers
---

# WanWay - G19 Configuration

This page describes the public configuration context for using the WanWay G19 GPS tracker with Plaspy. It focuses on the practical server and setup information publicly available for routing the tracker to Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps for the G19 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. When available, this page includes the publicly published SMS commands used by the G19 for basic setup.

## Configuration Overview

The goal of this configuration process is to prepare the G19 so it can communicate reliably with the Plaspy platform and become visible in the Plaspy device list. Setup typically configures carrier APN values, assigns the Plaspy server endpoint, selects transport when required, and enables GPRS reporting so the tracker sends data to Plaspy.

- Configure the carrier APN so the tracker can open a data connection using the placeholder APN values.
- Point the tracker to the Plaspy server domain or IP so reports route to Plaspy.
- Set the shared Plaspy port so the device uses the same port Plaspy expects.
- Enable GPRS mode or data reporting on the G19 so periodic updates are sent.
- Verify configuration and status using the tracker verification commands.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so you do not need to select a specific protocol in the Plaspy account

## Typical Requirements Before Setup

- A powered and accessible WanWay G19 tracker installed or connected to a bench power source.  
- A working SIM card with an active data plan and the correct APN information for the carrier.  
- Ability to send SMS messages to the device or access the manufacturer configuration tool appropriate for the G19.  
- Knowledge of the carrier APN and any username or password placeholders required by the device.  
- Basic familiarity with verifying device responses via SMS verification commands or device status checks.  

## How This Tracker Connects to Plaspy

When configured, the G19 sends its location and device status to the shared Plaspy server endpoint and port so the device becomes visible in Plaspy for monitoring and event handling. Plaspy receives the data and automatically determines the correct protocol for that tracker.

- The tracker is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on device settings and installer preference.  
- Plaspy automatically detects the tracker protocol so the server can accept the incoming connection without manual protocol selection on the Plaspy side.  
- Regular position updates and event notifications are forwarded to Plaspy when the tracker has an active GPRS connection.  
- The device status and verification commands allow installers to confirm the tracker is reporting to the platform.

## Common Configuration Workflow

1. Access the official WanWay configuration method for the G19, typically SMS-based commands or the vendor tool recommended for your firmware.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server configuration field or command.  
3. Set the port to 8888 as the destination port for telemetry.  
4. Choose UDP or TCP if the tracker requires a transport selection during setup.  
5. Configure the carrier APN using the provided APN placeholders and save the APN settings.  
6. Apply or save the configuration on the tracker and restart the device if required.  
7. Validate that the G19 reports to Plaspy by using verification commands and confirming the device appears in Plaspy.

## Example Configuration Commands

The G19 supports SMS configuration. Below are the public commands that can be sent via SMS in the shown order. Keep the placeholders as provided and replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier values when required.

- Configure carrier APN (replace placeholders). If username and password are required include them after the APN separated by commas:
```text
APN,{{apn}}# 
```
If username and password are required, use the optional form:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the carrier APN string. {{apnu}} and {{apnp}} are the optional APN username and password fields.

- Set the GPRS server to Plaspy using the server domain and port (transport flag preserved as provided):
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Set the update/reporting interval (example sets two timers, adjust as needed):
```text
TIMER,60,60#
```

- Enable GPRS mode on the device:
```text
GPRSON,1#
```

- Check device configuration:
```text
PARAM#
```

- Check device status:
```text
STATUS#
```

Send each SMS command to the tracker's SIM number using the installer phone or tool. Preserve the order above where setup order matters: APN, server, timer, enable GPRS, then verify.

## Configuration Notes

- Manufacturer firmware versions and command syntax can vary; confirm exact command syntax with WanWay documentation for your device revision.  
- The SERVER command shown uses the Plaspy domain d.plaspy.com and port 8888; some installers prefer using the numeric server IP 54.85.159.138 instead of the domain.  
- Choose UDP or TCP according to installation requirements; the G19 may accept a transport flag in its server command and Plaspy supports both transports.  
- SMS based configuration is a common method for the G19; ensure the SIM can receive SMS and has the appropriate permissions to modify settings.  
- Always validate configuration with PARAM# and STATUS# or equivalent verification commands after applying changes.

## Why Use Plaspy with This Configuration

Configuring the WanWay G19 to report to Plaspy provides a simple, consistent path to add the device to your monitoring and fleet management workflow. Using the shared Plaspy server settings and port reduces per-device variance and lets Plaspy automatically detect the tracker protocol, which simplifies large deployments and ongoing device management.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions on the official WanWay site https://www.wanwaytech.net/.
