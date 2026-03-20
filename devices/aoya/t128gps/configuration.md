---
slug: /aoya/t128gps/configuration
id: t128gps-configuration
sidebar_label: Configuration
title: AoYa - T128GPS Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the AoYa T128GPS for use with Plaspy including required server settings and SMS commands
keywords:
  - AoYa T128GPS configuration
  - AoYa T128GPS setup
  - AoYa T128GPS Plaspy
  - AoYa GPS tracker configuration
  - T128GPS SMS commands
  - GPS tracker server configuration
  - vehicle tracking platform configuration
  - asset tracker setup
  - GPS tracker APN setup
  - Plaspy device configuration
---

# AoYa - T128GPS Configuration

This page documents the public configuration context for using the AoYa T128GPS with the Plaspy platform. It focuses on the practical, publicly available steps and commands used to point the tracker to Plaspy server endpoints, and shows the SMS command examples provided by the manufacturer for basic setup. Use this guide to understand what settings are required so your T128GPS can communicate with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands here as the public baseline and verify any model specific differences with the official AoYa documentation.

## Configuration Overview

The configuration process prepares the AoYa T128GPS to reliably send location and status data to the Plaspy platform. For this model the manufacturer provides SMS based commands that are commonly used to set APN, server endpoint, and GPRS transport mode.

- Update or confirm the device password if required and note the manufacturer default password is 123456 in the public examples.
- Configure the mobile APN and, when required, the APN username and password so the device can establish GPRS data.
- Set the Plaspy server endpoint so the tracker sends telemetry to Plaspy for visibility and tracking.
- Choose transport mode (UDP or TCP) for GPRS reporting depending on the device or installation needs.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when devices report to the platform  
- All devices in Plaspy use the same port so use port 8888 when configuring supported trackers

## Typical Requirements Before Setup

- A charged and powered T128GPS device with GSM connectivity and a working SIM card that has data or SMS capability.  
- APN details from your mobile operator, including optional APN username and password when required.  
- Access to the device SMS configuration method or the manufacturer provided configuration tool. The T128GPS supports SMS based commands in public documentation.  
- Knowledge of the device password used for SMS configuration; example commands use the default password 123456.  
- A way to confirm the device is reporting after configuration, such as checking the Plaspy device list or the tracker's acknowledgement messages.  
- Optional: patience for any network registration or propagation after changing APN or server settings.

## How This Tracker Connects to Plaspy

When configured, the AoYa T128GPS sends location and device data over GPRS to the Plaspy endpoint so the device becomes visible and trackable in the Plaspy platform. The public setup commands allow the device to direct its telemetry to the shared Plaspy server and port.

- The tracker is set to report to the Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138.  
- Telemetry is sent to port 8888 on the Plaspy server.  
- The device can use UDP or TCP as the transport; choose the mode supported or preferred for your installation.  
- Plaspy automatically detects the tracker protocol, so once reports arrive the platform will interpret data appropriately.  
- After successful setup the device should appear and report in Plaspy for location updates and event monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the T128GPS, typically SMS commands as shown in the public AoYa examples or any vendor tool provided.  
2. Enter the Plaspy server address by using either d.plaspy.com or the IP 54.85.159.138 in the device server setting.  
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.  
4. Choose the transport mode UDP or TCP if your device firmware requires an explicit selection.  
5. Configure the APN and optional APN credentials so the device can establish GPRS data.  
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.  
7. Validate that the device reports to Plaspy and is visible in the platform; use any available device verification command to confirm settings.

## Example Configuration Commands

The manufacturer provides the following SMS commands as public examples. These commands use the default device password 123456 in the examples. Preserve placeholders when replacing with your actual values.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the mobile operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

- Set APN username and password when required (replace [apnu] and [apnp] with your APN credentials)
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
(You may also use the domain d.plaspy.com where the device accepts a domain entry.)

- Switch to GPRS mode and select transport
```text
gprs123456,1,1
```
or, if the device accepts the simpler form:
```text
gprs123456
```
(These commands are examples that select GPRS reporting; the exact argument syntax can depend on firmware.)

- Check current device settings
```text
check123456
```

Notes on placeholders
- [apn] is your mobile operator APN string.  
- [apnu] is the APN username if your operator requires one.  
- [apnp] is the APN password if your operator requires one.  
- Replace these placeholders with your operator values before sending SMS commands.

## Configuration Notes

- The SMS commands above are the manufacturer provided public examples; exact responses and command variants can change with firmware revisions.  
- Some installations prefer TCP for guaranteed delivery while others prefer UDP for lower overhead; choose according to your environment and the device firmware capabilities.  
- If you use the domain d.plaspy.com instead of the IP, DNS resolution is required on the carrier network. If DNS is unreliable, using the public IP may be helpful.  
- The default password shown in the examples is 123456; change the device password where possible and follow vendor guidance for secure practices.  
- Use the manufacturer documentation for any advanced or model specific commands beyond the public examples.

## Why Use Plaspy with This Configuration

Configuring the AoYa T128GPS to report to Plaspy gives organizations a consistent server endpoint and a single port to manage across multiple device models. That centralization simplifies fleet and asset onboarding, and Plaspy's automatic protocol detection reduces the need to manually identify or translate tracker protocols once data arrives at the platform.

If you want to learn more about Plaspy and how devices connect to the platform visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify the current details on the official AoYa site at http://www.aoyagps.com/ since manufacturer methods and firmware behavior can change over time.
