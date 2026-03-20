---
slug: /coban/bn_103a/configuration
id: bn_103a-configuration
sidebar_label: Configuration
title: Coban - BN-103A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-103A to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Coban BN-103A configuration
  - Coban BN-103A setup
  - BN-103A Plaspy
  - BN-103A server configuration
  - BN-103A GPS tracker setup
  - Coban tracker Plaspy integration
  - vehicle tracker configuration
  - fleet tracking BN-103A
  - GPS tracker APN settings
  - BN-103A SMS commands
---

# Coban - BN-103A Configuration

This page documents the public configuration context for using the Coban BN-103A tracker with the Plaspy platform. It focuses on the practical server settings and the public SMS-based commands provided by the manufacturer that prepare the device to report location and telemetry to Plaspy. Use this guide to understand what is required to integrate a BN-103A device into Plaspy and which values to apply.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands below as a public, manufacturer-provided sample and verify any device-specific differences with official Coban documentation.

## Configuration Overview

The goal of this configuration is to prepare the BN-103A for stable GPRS reporting to Plaspy so the device appears in the platform with live location and event data. Public manufacturer commands are commonly sent by SMS and configure timezone, APN, GPRS server, reporting interval, and transport mode.

- Configure the device APN and credentials so GPRS data can be sent.
- Point the device GPRS server to the Plaspy endpoint so fixes arrive in the platform.
- Choose transport mode (UDP or TCP) and set the shared Plaspy port for reporting.
- Set an appropriate reporting interval to balance update frequency and data usage.
- Verify settings and confirm the device is visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as the numeric endpoint option
- Port 8888 which is the port Plaspy uses for all supported devices
- Transport support for UDP or TCP; the BN-103A may be set to either transport
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered BN-103A unit properly installed or accessible for configuration.
- An active SIM card with a data plan and correct APN settings for the mobile operator.
- A way to send SMS commands to the device or access to the manufacturer configuration tool if available.
- Knowledge of the device default password as used in SMS commands (manufacturer sample uses 123456).
- Basic understanding of whether the installation requires UDP or TCP transport for data reporting.
- Access to Plaspy account or administrator to confirm device registration and visibility after configuration.

## How This Tracker Connects to Plaspy

When configured, the BN-103A reports GNSS fixes and alarm/telemetry over the selected transport to the shared Plaspy server endpoint and port. Plaspy receives these messages, automatically identifies the device protocol, and processes location and event data for live tracking and historical playback.

- The tracker sends position and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol so no manual protocol selection on the platform side is required.
- The device reports events such as ACC ignition, door status, alarms, and optional fuel sensor status to Plaspy.
- Plaspy ingests reports for live map display, alerts, playback, and reporting dashboards.
- Selecting UDP or TCP on the device determines transport behavior while Plaspy listens on the shared port.

## Common Configuration Workflow

1. Access the official Coban configuration method for the BN-103A, typically SMS commands or manufacturer software, and confirm the device default password.
2. Enter the Plaspy server endpoint on the device using either the domain d.plaspy.com or the IP address 54.85.159.138.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the tracker if the device requires a transport selection.
5. Configure APN and credentials for the installed SIM so GPRS connectivity is established.
6. Apply or save the configuration and restart the device if required by the vendor instructions.
7. Validate that the device is reporting to Plaspy and visible in the platform, checking for position updates and event messages.

## Example Configuration Commands

The manufacturer provides SMS commands as a public method to configure the BN-103A. The sample commands below use the default device password 123456 as shown in the public configuration content. Replace placeholders and values before sending.

- Optional initial factory reset (use only if you need to clear prior settings)
```
begin123456
```

- Set the time zone to UTC+0
```
time zone123456 0
```

- Set the operator APN
```
apn123456 [apn]
```
Replace [apn] with your mobile operator APN.

- Set APN username and password
```
up123456 [apnu] [apnp]
```
Replace [apnu] and [apnp] with the operator APN username and password if required. Leave blank or omit if not required by operator.

- Set the GPRS server to the Plaspy IP and port
```
adminip123456 54.85.159.138 8888
```
You may also use the domain form if your firmware accepts it; the public numeric example is shown above.

- Set the update/reporting interval (sample periodic fix command)
```
fix060s060s***n123456
```
This example is a manufacturer-provided sample for interval configuration; adapt according to your desired reporting frequency and device documentation.

- Switch to GPRS mode and select transport for UDP or TCP
```
gprs123456,1,1
```
or, for a simpler command if supported:
```
gprs123456
```
Check the device manual for exact parameter meanings; the manufacturer sample shows both forms.

- Check current device settings
```
check123456
```

- Enable extended protocol for fuel sensor and improved digital input reporting
```
protocol123456 18
```

Notes on placeholders and passwords:
- [apn], [apnu], and [apnp] are placeholders for your cellular operator APN, APN username, and APN password. Replace them before sending SMS.
- The example commands use the sample default password 123456; confirm your device password and change it using the official method if needed.

## Configuration Notes

- SMS-based configuration is shown in the public manufacturer sample. Some installation environments may use a software tool or configuration cable instead; follow the method supported by your vendor and firmware.
- Firmware versions and hardware revisions can change command syntax or available features. Always confirm commands against the BN-103A manual for your device version.
- Choose UDP or TCP based on your network and reporting needs; Plaspy listens on port 8888 and will automatically detect the device protocol on arrival.
- Verify APN and SIM operator credentials with your mobile provider before configuring to avoid connection failures.
- Consider changing the device default password after successful configuration following Coban instructions to improve security.

## Why Use Plaspy with This Configuration

Using the BN-103A with Plaspy delivers centralized visibility for vehicle location, alarms, and telemetry across fleets. With the device configured to report to Plaspy's shared server endpoint and port, fleet managers can receive live updates, event notifications, and historical playback to support security and operational decision making.

Learn more about how Plaspy can manage BN-103A devices and other fleet assets at https://www.plaspy.com and verify the latest device-specific setup details, firmware changes, and official commands on the manufacturer site https://www.coban.net/. Manufacturer specifications, command syntax, and firmware behavior can change over time so always confirm current information with the official Coban documentation.
