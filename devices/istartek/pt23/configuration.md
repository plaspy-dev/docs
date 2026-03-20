---
slug: /istartek/pt23/configuration
id: pt23-configuration
sidebar_label: Configuration
title: iStartek - PT23 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek PT23 integration with Plaspy including SMS commands and server settings
keywords:
  - iStartek PT23 configuration
  - PT23 setup for Plaspy
  - iStartek PT23 server configuration
  - PT23 GPS tracker setup
  - iStartek PT23 SMS commands
  - Plaspy tracker integration
  - PT23 APN configuration
  - kids watch GPS configuration
  - PT23 tracking platform setup
  - Plaspy compatible devices
---

# iStartek - PT23 Configuration

This page documents the public configuration context for using the iStartek PT23 with Plaspy. It focuses on the practical server settings and the SMS based commands published by the manufacturer so integrators can prepare the device to report location and status to Plaspy for monitoring and historical playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PT23 supports SMS based configuration commands that are commonly used to set APN, server destination, and reporting interval; use this guide together with iStartek documentation when applying settings.

## Configuration Overview

Configuring the PT23 for Plaspy means preparing the watch to send its location and status messages to Plaspy's shared server endpoint so the device appears and updates correctly in the platform. The public commands provided by iStartek allow SMS configuration of time zone, APN, server target, and reporting timer.

- Set the device APN so it can connect to the mobile data network and use GPRS to send reports.
- Point the device to Plaspy by configuring the server address either by domain or IP and the shared Plaspy port.
- Configure a sensible reporting interval to balance update frequency and battery life.
- Verify settings using the device parameter check command and confirm the device appears in Plaspy.
- Keep firmware and manufacturer instructions available, since command syntax and behavior can vary by revision.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for data ingestion

## Typical Requirements Before Setup

- A charged PT23 device with enough battery or connected to power for configuration steps
- A valid SIM card installed and active with data or SMS capability and correct APN information
- Access to the official iStartek configuration method such as SMS commands or a vendor tool
- The APN, username, and password for the mobile operator if required by the SIM
- A phone capable of sending SMS commands to the PT23 from the device owner or administrator
- Manufacturer documentation for the device firmware version to confirm command syntax

## How This Tracker Connects to Plaspy

The PT23 is configured to report location and device telemetry to the shared Plaspy server endpoint and port so Plaspy can present live maps, alerts, and historical routes. Configuration is typically performed by sending SMS commands from an administrator phone or using vendor tools when available.

- The device sends location and status messages to d.plaspy.com or to 54.85.159.138 on port 8888
- Reports may be transmitted over TCP or UDP depending on device settings and network conditions
- Plaspy ingests those messages and automatically detects the tracker protocol for proper decoding
- Regular position updates are controlled by the device TIMER setting so you can tune frequency and battery use
- Verification is possible using the device parameter query to confirm server and APN settings

## Common Configuration Workflow

1. Access the official iStartek configuration method or software, or prepare an authorized phone to send SMS commands to the device.
2. Configure the device APN using the APN SMS command so the tracker can use mobile data for reporting.
3. Enter the Plaspy endpoint by sending either the domain d.plaspy.com or the server IP 54.85.159.138 to the device.
4. Set the port to 8888 as required by Plaspy and choose UDP or TCP if the tracker requires a transport selection.
5. Apply and save the configuration on the device by following the manufacturer SMS command flow or tool instructions.
6. Restart the device if the manufacturer recommends a reboot after configuration.
7. Validate that the device reports to Plaspy and appears on the Plaspy platform with live updates.

## Example Configuration Commands

The PT23 accepts SMS commands for configuration. The following commands are published by iStartek and are intended to be sent as SMS messages to the device in the given order for initial setup.

- Optional initial factory reset (only when required):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your operator values:
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator access point name. [apnu] and [apnp] are optional APN username and password placeholders; include them only if your operator requires them.

- Set the GPRS server by domain and port (preferred human readable option):
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP and port:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to 60 seconds:
```text
TIMER,60#
```

- Verify current device parameters:
```text
PARAM#
```

Keep command order when required by your deployment. The SERVER command examples show both domain and IP alternatives; choose the one that suits your operator and device behavior. If your firmware exposes separate transport selection for UDP or TCP, set that transport to match your network needs while keeping port 8888.

## Configuration Notes

- SMS based configuration is supported and commonly used for PT23 setup; follow exact command syntax provided by iStartek for your firmware version.
- Firmware differences and hardware revisions can change command behavior or available options; consult the device manual for the firmware on your unit.
- Use the SERVER,1,d.plaspy.com,8888# command to point to the Plaspy domain or the SERVER,0,54.85.159.138,8888# command to point by IP; both target Plaspy on port 8888.
- Choose UDP or TCP transport if the tracker firmware requires explicit selection; Plaspy supports both and will detect the protocol automatically.
- Preserve APN placeholders exactly and replace them with operator specific values when configuring the device.

## Why Use Plaspy with This Configuration

Using the PT23 with Plaspy provides a straightforward way to add real time location, alerts, and historical route playback to your monitoring workflows. For organizations and families that need reliable visibility and situational awareness, configuring the device to report to Plaspy gives centralized visibility of SOS events, geo-fence alerts, and routine position updates.

To learn more about Plaspy and how it can ingest and present PT23 telemetry visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance verify details on the iStartek website https://istartek.com/ as manufacturer specifications and setup methods can change over time.
