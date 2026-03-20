---
slug: /istartek/vt900_g/configuration
id: vt900_g-configuration
sidebar_label: Configuration
title: iStartek - VT900-G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek VT900 G tracker showing server settings and SMS commands for Plaspy compatibility
keywords:
  - iStartek VT900 G configuration
  - VT900 G setup Plaspy
  - iStartek VT900 G server configuration
  - VT900 G GPS tracker Plaspy
  - vehicle tracker configuration guide
  - VT900 G SMS commands
  - GPS tracker server setup
  - VT900 G fleet tracking setup
  - Plaspy tracker integration
  - VT900 G APN setup
---

# iStartek - VT900-G Configuration

This page documents the public configuration context for using the iStartek VT900-G tracker with Plaspy. It focuses on the shared server settings, common device preparation steps, and practical SMS commands that are published for this model so you can connect the tracker to Plaspy's tracking platform.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available we include the VT900-G SMS command examples that are publicly published by the manufacturer to help you apply the Plaspy settings.

## Configuration Overview

The goal of configuration is to prepare the VT900-G so it can reliably send GNSS, sensor, and event data to Plaspy and remain visible in the platform even through short network outages. The process typically configures network access, points the device to the Plaspy server, and sets reporting intervals.

- Configure the device APN so it has mobile data access for GPRS or 3G reporting.
- Point the tracker to Plaspy using the shared server settings so data is received by Plaspy.
- Set a periodic upload interval so location and events are reported at the required cadence.
- Validate connectivity and use a verification command to confirm parameters are applied.
- Ensure the device can buffer data locally so queued records upload to Plaspy after outages.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Typical Requirements Before Setup

- A powered VT900-G installed or connected to a stable bench power source and, if available, the backup battery in place.
- An active SIM card with data enabled and correct APN information from your mobile operator.
- Access to the device configuration method supported by the unit such as SMS commands or vendor configuration tools.
- The device should have cellular coverage for UMTS/HSDPA or GSM/GPRS as applicable to your model variant.
- A Plaspy account or access to the Plaspy platform so you can confirm the device appears and reports after configuration.
- The VT900-G user manual or manufacturer reference to check any firmware specific differences.

## How This Tracker Connects to Plaspy

The VT900-G transmits GNSS positions, telemetry, and event messages over the cellular network to the Plaspy server endpoint and port. Plaspy ingests those messages and uses automatic protocol detection to map the tracker protocol without requiring per device protocol selection in platform settings.

- The tracker sends location and telemetry to d.plaspy.com or to 54.85.159.138 on port 8888.
- Transport may be UDP or TCP as supported by the device and network; Plaspy accepts either on the same port.
- Event and alarm messages from digital inputs, OBD or CANBUS, and external sensors are forwarded to Plaspy for alerting and reporting.
- Buffered records stored in the device flash memory are uploaded to Plaspy once connectivity is restored.
- Plaspy processes incoming messages and surfaces them in real time for monitoring and historical reports.

## Common Configuration Workflow

1. Obtain the VT900-G user manual and confirm the supported configuration methods for your firmware and hardware revision.
2. Ensure the device has a working SIM with data and obtain the operator APN credentials.
3. Enter the Plaspy server address by sending d.plaspy.com or 54.85.159.138 to the device as the server target.
4. Set port 8888 for server reporting and choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration and restart the device if the manufacturer instructions request a reboot to commit settings.
6. Validate that the device reports to Plaspy by checking device activity on the Plaspy platform and using the device verification command.
7. Monitor for regular position updates and verify buffered data uploads after a simulated outage.

## Example Configuration Commands

The VT900-G supports SMS based configuration. The following public SMS commands are provided in the manufacturer's published configuration example. Preserve the placeholders exactly when applying the commands.

- Optional initial factory reset
```text
FACTORY#
```
- Set time zone to UTC 0
```text
GMT,E,0#
```
- Set the operator APN. Replace {{apn}} with your operator APN. If required, include username {{apnu}} and password {{apnp}} separated by commas
```text
APN,{{apn}}#
```
- Example with optional APN username and password
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Configure the GPRS server using the Plaspy domain and shared port
```text
SERVER,1,d.plaspy.com,8888#
```
- Or configure the GPRS server using the Plaspy server IP and shared port
```text
SERVER,0,54.85.159.138,8888#
```
- Set periodic update interval to 60 seconds
```text
TIMER,60#
```
- Check current device parameters
```text
PARAM#
```

Notes on placeholders
- {{apn}} is the mobile operator APN string required for GPRS or 3G data.
- {{apnu}} and {{apnp}} are optional APN username and password fields if your operator requires them.

## Configuration Notes

- SMS based configuration is supported for the VT900-G as shown above. Manufacturer tools or USB/serial configuration utilities may also be available depending on firmware.
- Different firmware revisions may accept slightly different command formats or require transport selection separately; always confirm with the VT900-G manual.
- Choose UDP or TCP according to your installation needs; Plaspy accepts both on port 8888 and auto detects the correct protocol.
- Keep APN credentials accurate and ensure the SIM has a suitable data plan to avoid reporting gaps.
- After configuration, use the PARAM# command and the Plaspy platform to verify the device is reporting and that buffered records are uploading after reconnect.

## Why Use Plaspy with This Configuration

Using the VT900-G with Plaspy provides a practical route to reliable fleet visibility, event monitoring, and historical trip reconstruction. The device’s GNSS performance, cellular reporting capabilities, and onboard buffering combine with Plaspy’s ingestion and protocol detection to deliver continuous telemetry for operational oversight and security workflows.

To learn more about Plaspy and how it supports devices like the VT900-G visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer documentation please verify details at the iStartek website https://istartek.com/ as setup methods and firmware behavior can change over time.
