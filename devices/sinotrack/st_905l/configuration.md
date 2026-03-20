---
slug: /sinotrack/st_905l/configuration
id: st_905l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for routing SinoTrack ST-905L telemetry to Plaspy with server and SMS commands
keywords:
  - SinoTrack ST-905L configuration
  - SinoTrack setup for Plaspy
  - ST 905L server configuration
  - ST 905L SMS commands
  - Plaspy tracker configuration
  - GPS tracker APN setup
  - vehicle tracking platform integration
  - asset tracker configuration
  - tracking server settings
  - fleet management tracker setup
---

# SinoTrack - ST-905L Configuration

This page documents the public configuration context for using the SinoTrack ST-905L with Plaspy. It focuses on the practical, publicly available steps and commands used to point the tracker at Plaspy, validate connectivity, and confirm the device reports location and telemetry into the platform. Information here is grounded in the ST-905L product description and the publicly shared SMS commands for APN and server configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where the ST-905L supports SMS provisioning, the commands shown below represent the documented public workflow for setting APN, server, reporting intervals, and verifying configuration.

## Configuration Overview

The goal of this configuration is to prepare the ST-905L so it reliably communicates with Plaspy and is visible in the platform for real time tracking and telemetry. The public SMS commands for the ST-905L enable installers to set the APN, server endpoint and reporting intervals without additional tools.

- Point the device to the Plaspy ingestion endpoint and port so reports are delivered to your Plaspy account
- Configure the mobile operator APN credentials so the tracker can use cellular data
- Set time zone and reporting intervals to match your tracking policy and battery expectations
- Switch the tracker to GPRS mode after configuration so it uploads data over cellular
- Verify the device configuration using the RCONF command to confirm the device ID and settings
- Ensure the device is powered and has network connectivity before final validation

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered if your device firmware accepts a domain
- Server IP 54.85.159.138 may be used where numeric address entry is required
- Port 8888 is the ingestion port used by Plaspy for all supported devices
- Transport support for UDP or TCP is available; choose the transport required by the device
- Plaspy automatically detects the tracker protocol so you only need to point the device to the correct endpoint and port

## Typical Requirements Before Setup

- A charged ST-905L with an active, data capable SIM card installed and enabled for GPRS or LTE data
- Ability to send SMS commands to the device from an authorized phone number used during provisioning
- APN credentials from the mobile operator including APN name and optional username and password
- Access to the device IMEI or device ID and the ability to confirm settings with the RCONF command
- Basic familiarity with the manufacturer SMS command format or provisioning tool if available
- Ensure the device has a clear view of the sky for GNSS fixes during initial validation

## How This Tracker Connects to Plaspy

The ST-905L is configured to send its location and telemetry packets to Plaspy over the shared Plaspy server endpoint and port. Once the server and APN are set, the tracker uploads periodic position reports and event messages that Plaspy ingests and presents in dashboards and alerts.

- Device sends periodic location and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device selection at configuration time
- Plaspy automatically detects the tracker protocol so the data is parsed without per device protocol selection
- Reporting intervals and event triggers determine how often the device uploads positions to Plaspy
- RCONF or equivalent verification commands can be used to confirm the device ID and current server settings

## Common Configuration Workflow

1. Access the official SinoTrack SMS provisioning method or manufacturer configuration tool as documented by SinoTrack
2. Set the device time zone and other local parameters if required by your reporting policy
3. Enter d.plaspy.com or 54.85.159.138 as the device server address depending on whether the firmware accepts domain or numeric IP
4. Set the device port to 8888 in the server configuration
5. Choose UDP or TCP transport if the device requires explicit transport selection
6. Configure the APN and any APN credentials using the operator values for the installed SIM
7. Apply or save the configuration, then restart or switch the device to GPRS mode if required
8. Validate that the device reports to Plaspy by checking for incoming data and using the RCONF verification command

## Example Configuration Commands

The ST-905L supports SMS configuration commands. The following public commands are provided in the manufacturer documentation and shown here in the recommended order. Preserve and replace the APN placeholders with your operator values.

- Optional initial step to restore factory settings (use only when needed)
```text
RESET
```

- Set the time zone to UTC 0 (example command)
```text
8960000E00
```

- Set the APN of the operator
```text
8030000 [apn] [apnu] [apnp]
```
Explanation: replace [apn] with the operator APN name. [apnu] is the APN username if required. [apnp] is the APN password if required. Leave username and password blank if not used by your operator but preserve the placeholders where required by the device command format.

- Set up the GPRS server to Plaspy using the public Plaspy IP and port
```text
8040000 54.85.159.138 8888
```
Note: If the device firmware accepts a domain name, you may alternatively point to d.plaspy.com where supported.

- Set update interval when the tracker is active
```text
8050000 60
```

- Set update interval when the tracker is off or in a different state
```text
8090000 60
```

- Switch the device to GPRS mode so it uploads data over cellular
```text
7100000
```

- Verify current device settings and retrieve the device ID with the verification command
```text
RCONF
```

Use these commands in the order shown for initial provisioning: consider RESET only when you need to clear prior settings, then set time zone, APN, server, intervals, switch to GPRS, and verify with RCONF.

## Configuration Notes

- SMS based provisioning is supported by the ST-905L and is practical for field activation when no configuration tool is available
- Firmware versions or hardware revisions may change command formats or supported parameters; always confirm current command syntax with SinoTrack documentation
- Choose TCP or UDP based on installer preference and device support; Plaspy accepts either and automatically handles protocol detection
- Plaspy uses port 8888 for all supported devices so ensure that value is applied consistently during provisioning
- Test device reporting after configuration in a controlled environment to confirm APN connectivity and Plaspy ingestion

## Why Use Plaspy with This Configuration

Using the ST-905L with Plaspy gives organizations a straightforward path to convert an out of the box tracker into a real time asset and vehicle monitoring device inside a centralized fleet platform. By configuring APN and server details via SMS and pointing the device at Plaspy, you can enable location reporting, alerts, and operational visibility without depending on the default vendor cloud.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance verify current information on the SinoTrack website https://www.sinotrackgps.com/ as manufacturer specifications and setup methods can change over time.
