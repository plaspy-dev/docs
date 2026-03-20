---
slug: /suntech/st_600r/configuration
id: st_600r-configuration
sidebar_label: Configuration
title: Suntech - ST 600R Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Suntech ST 600R GPS tracker showing required Plaspy server settings and example SMS commands for integration
keywords:
  - Suntech ST 600R configuration
  - Suntech ST 600R setup
  - Suntech ST 600R server configuration
  - Suntech ST 600R Plaspy
  - ST 600R GPS tracker setup
  - ST 600R configuration guide
  - Suntech GPS tracker configuration
  - vehicle tracking configuration Suntech
  - GPS tracker setup Plaspy
  - tracker SMS configuration
---

# Suntech - ST 600R Configuration

This page documents the public configuration context for using the Suntech ST 600R tracker with Plaspy. It focuses on the practical server settings, required preparation, and example SMS commands that are commonly used to point the device to the Plaspy service. The content is intended to help installers and technical staff prepare the ST 600R for operation with Plaspy while relying on publicly available configuration patterns.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is sending data to the platform. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available, this page includes the Suntech SMS command examples that are used in public documentation to set APN, reporting interval, and server parameters.

## Configuration Overview

The goal of configuration is to prepare the ST 600R so it reliably communicates with the Plaspy platform and becomes visible to your fleet or asset management workflows. The process typically involves setting the device identification, the operator APN, and the Plaspy server endpoint and port, then validating reporting from the device.

- Configure the device identifier and identify the correct IMEI substring used as the device ID for Plaspy.
- Set the cellular operator APN and optional APN credentials so the device can open data sessions.
- Point the ST 600R GPRS/3G server settings to Plaspy using the shared Plaspy server values.
- Configure reporting intervals so the device sends location updates at the desired frequency.
- Validate connectivity and confirm the device appears and reports in the Plaspy platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Suntech ST 600R:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Note that all devices connecting to Plaspy use the same port and the platform will auto-detect the correct protocol for the tracker.

## Typical Requirements Before Setup

- A charged and powered ST 600R device installed per the vendor instructions and ready for configuration.
- A working SIM card with data enabled and a known APN for the mobile operator.
- Access to the device IMEI so you can compute the device ID used in SMS configuration.
- Ability to send SMS commands to the tracker if using SMS-based configuration, or access to the manufacturer configuration tool if available.
- Basic knowledge of choosing UDP or TCP on the device if transport selection is required.

## How This Tracker Connects to Plaspy

When configured, the ST 600R sends its location and event data to Plaspy using the shared server endpoint and port. Plaspy receives the data and maps it to the device ID so the tracker becomes visible in the platform for monitoring and reporting.

- The tracker is configured to report to the Plaspy server domain or IP and port described above.
- Data is transmitted over the cellular data connection using the configured APN and GPRS/3G service.
- Plaspy automatically detects the tracker protocol once packets are received on port 8888.
- The device reports according to the configured reporting interval so platform visibility is predictable.
- Events and status updates from the device are delivered to Plaspy for operational monitoring.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 600R, typically SMS-based commands or the vendor configuration tool. Always check the device documentation for the exact method supported by your firmware.
2. Determine the device ID from the IMEI. The public method uses the last 9 digits of the IMEI excluding the final check digit.
3. Enter d.plaspy.com or the IP 54.85.159.138 as the device server address in the device settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and, if required, restart the device to activate the new settings.
6. Validate that the device reports to Plaspy by checking the platform for incoming data and confirming the device ID is recognized.

## Example Configuration Commands

The ST 600R public configuration examples are commonly sent to the tracker via SMS. The device ID is the last 9 digits of the IMEI excluding the final digit. For example, if the IMEI is 123456789012345, extract digits 6 through 14 to form the device ID.

Commands below preserve placeholders used for APN values. Replace the placeholders with your operator values and your computed device ID.

1. Optional initial factory reset (use only if you need to reset device to factory defaults):
```
ST300CMD;{{device_id}};02;Reset
```
Label: optional initial reset. Replace {{device_id}} with the last 9 IMEI digits excluding the final IMEI digit.

2. Set operator APN and GPRS server. If you need to send APN username or password set the APN flag to 1, otherwise set it to 0. Fields: command;device_id;02;APN_FLAG;APN;APN_USER;APN_PASS;SERVER_IP;SERVER_PORT;;;;
```
ST300NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
Notes:
- Replace the fourth field (0) with 1 if you provide {{apnu}} or {{apnp}} credentials.
- {{apn}} is the operator APN, {{apnu}} is the APN username, and {{apnp}} is the APN password.
- This command points the device to Plaspy using the public server IP and port.

3. Set reporting interval to 60 seconds (example reporting configuration):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
This command sets periodic reports. Adjust intervals per your operational needs and firmware capabilities.

4. Check current settings (verification command):
```
ST300CMD;{{device_id}};02;PresetA
```
This command requests the device to send its current configuration settings for verification.

## Configuration Notes

- The ST 600R public examples show SMS-based configuration as a commonly used method; your device firmware or vendor tools may also support software or USB configuration.
- Different firmware versions or hardware revisions may require slightly different command formats or parameter ordering. Always confirm against the device firmware documentation.
- Choose UDP or TCP depending on installer preference and network behavior; Plaspy accepts both on port 8888 and will detect the tracker protocol automatically.
- When supplying APN credentials, ensure the APN flag in the network command is set appropriately so the device knows to use the provided username and password.
- If you perform a factory reset, treat that step as optional and only use it when necessary for reconfiguration.

## Why Use Plaspy with This Configuration

Using the Suntech ST 600R with Plaspy provides a straightforward path to get high-quality location and reporting from a device designed for cellular networks. Pointing the tracker to Plaspy with the shared server settings simplifies deployment across large fleets because the platform uses the same port and automatic protocol detection to manage different tracker protocols.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with the official Suntech documentation at http://www.suntechint.com/.
