---
slug: /meitrack/t399l/configuration
id: t399l-configuration
sidebar_label: Configuration
title: Meitrack - T399L Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Meitrack T399L for use with Plaspy including SMS commands and server settings
keywords:
  - Meitrack T399L configuration
  - Meitrack T399L setup
  - Meitrack T399L Plaspy
  - Plaspy GPS tracker configuration
  - Meitrack GPS tracker setup
  - T399L server configuration
  - T399L SMS configuration
  - fleet tracking Meitrack T399L
  - Meitrack device configuration
  - GPS tracker platform setup
---

# Meitrack - T399L Configuration

This page covers the public configuration context for using the Meitrack T399L with Plaspy. It explains the shared server values required for connectivity, describes a practical setup workflow, and provides the manufacturer SMS commands that are publicly available for configuring the device to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available this page includes sample SMS commands and notes from the public model configuration to help you connect the T399L to Plaspy.

## Configuration Overview

The goal of configuring a Meitrack T399L for Plaspy is to prepare the tracker to establish a reliable data link to the Plaspy server, validate that it can send position and event data, and ensure that required sensors and inputs are enabled for monitoring in Plaspy. The public configuration flow often uses SMS commands to set GPRS server details and reporting intervals.

- Configure the device to point at the Plaspy server endpoint so it can deliver location and events
- Set the correct APN and GPRS parameters so the device has data connectivity
- Define reporting interval and event reporting so the platform receives timely updates
- Validate transport and connectivity so the device appears in Plaspy
- Preserve the device password and confirm factory defaults where necessary

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol without per device protocol mapping

## Typical Requirements Before Setup

- A powered and accessible Meitrack T399L with its factory password available. The public sample commands use default password 0000.  
- An active SIM card with a working mobile data plan and SMS capability for sending configuration commands.  
- The correct APN information for the SIM provider to enable GPRS data. Placeholders such as [apn] may be required when entering commands.  
- Access to the official Meitrack configuration method for your device firmware version such as SMS or manufacturer software.  
- A Plaspy account or administrator access so you can confirm the device appears in the platform after configuration.  
- Basic tools to restart or power cycle the device after applying configuration if required.

## How This Tracker Connects to Plaspy

When configured, the T399L reports location and events to the Plaspy shared server endpoint and port so Plaspy can display and process device data. The public configuration typically sets a GPRS server record pointing to Plaspy and uses the device reporting interval to control update frequency.

- The tracker is configured to send TCP or UDP packets to d.plaspy.com on port 8888  
- Plaspy accepts connections to 54.85.159.138 and the system uses port 8888 for all devices supported by the platform  
- Plaspy automatically detects the tracker protocol so the device can communicate without manual protocol mapping in most cases  
- Location, event, and sensor messages sent from the device become visible in the Plaspy platform once connectivity is confirmed  
- Bluetooth sensor data and driving behavior events available from the T399L may be part of the telemetry reported to Plaspy when configured

## Common Configuration Workflow

1. Access the official Meitrack configuration method appropriate for your device and firmware such as SMS commands or the vendor configuration tool.  
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device GPRS server settings.  
3. Set the port to 8888 for the GPRS/server entry.  
4. Choose UDP or TCP transport if the device requires a transport selection. Plaspy supports both on the same port.  
5. Provide the APN and any APN username or password placeholders required by your SIM such as [apn], [apnu], and [apnp].  
6. Apply or save the configuration and restart or power cycle the tracker if the device requires a restart to apply new settings.  
7. Validate that the device is reporting to Plaspy by checking connectivity in your Plaspy account or by confirming receipt of position/events on the platform.

## Example Configuration Commands

The following SMS commands are derived from the publicly available model configuration for the Meitrack T399L. These commands are intended to be sent as SMS messages to the device. The device sample uses the default device password 0000 in these examples.

1. Optional initial factory settings reset This is often used only during initial setup or when a reset is required
```
0000,F11
```

2. Set the GPRS server to Plaspy using either domain or IP Replace [apn] with the SIM operator APN. If your SIM requires APN username or APN password include [apnu] and [apnp] in that order
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Note: You can substitute d.plaspy.com for the IP address if the device accepts a domain name:
```
0000,A21,2,d.plaspy.com,8888,[apn],[apnu],[apnp]
```

3. Set the time zone to UTC 0
```
0000,B36,0
```

4. Set the update interval to every 1 minute
```
0000,A12,6,0
```

5. Set event reporting mode according to the public sample
```
0000,C03,0
```

Placeholders explanation:
- [apn] is the mobile operator APN required for GPRS data connectivity  
- [apnu] is the APN username when required by the operator  
- [apnp] is the APN password when required by the operator

Send these SMS commands in the order shown when order matters, and confirm success messages from the device where supported. Use the factory reset command only when needed.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters. Always verify the exact command format for your firmware.  
- The T399L sample configuration above uses SMS based commands and GPRS settings; alternative manufacturer tools may be available for batch provisioning.  
- Plaspy accepts both UDP and TCP on the same port 8888. Choose the transport option required by your device, then verify connectivity because network environments may favor one transport.  
- Keep the device password secure. The public examples use default password 0000 which should be changed after provisioning if security practices require it.  
- Market or region variations in firmware may affect Bluetooth sensor handling, IO configuration, and event codes. Consult the manufacturer documentation for device specific behavior.

## Why Use Plaspy with This Configuration

Configuring a Meitrack T399L to report to Plaspy gives organizations a consistent server endpoint and predictable data flow so fleet and asset visibility can be centralized. Using the shared Plaspy server settings simplifies device provisioning because the platform uses the same port for all supported devices and automatically detects the tracker protocol, reducing per device protocol mapping when onboarding large fleets.

If you want to learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify the manufacturer documentation at https://www.meitrack.com/ since configuration methods and firmware behavior can change over time.
