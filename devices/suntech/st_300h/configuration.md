---
slug: /suntech/st_300h/configuration
id: st_300h-configuration
sidebar_label: Configuration
title: Suntech - ST 300H Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Suntech ST 300H for use with Plaspy using SMS commands and shared server settings
keywords:
  - Suntech ST 300H configuration
  - Suntech ST 300H setup
  - ST 300H Plaspy configuration
  - GPS tracker server configuration
  - Suntech GPS setup
  - ST300H SMS commands
  - APN and GPRS server setup
  - Plaspy tracker integration
  - device ID IMEI extraction
  - fleet tracking configuration
---

# Suntech - ST 300H Configuration

This page describes the public configuration context for using the Suntech ST 300H tracker with Plaspy. It focuses on the practical steps and public command templates used to point the device at Plaspy, how the device ID is derived for registration, and how to validate connectivity so the tracker appears in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST 300H commonly accepts SMS configuration commands to set APN, GPRS server, and reporting intervals; this page preserves those public command templates and explains how to apply them for Plaspy integration.

## Configuration Overview

The goal of this configuration is to prepare an ST 300H to communicate reliably with Plaspy and to confirm the device is visible in the fleet platform. For the ST 300H this typically means using the manufacturer SMS command interface to set APN and server values, configure reporting intervals, and verify settings.

- Point the device GPRS server settings to the Plaspy server endpoint so the device can open a data link.
- Configure APN and operator credentials so the tracker can establish mobile data connectivity.
- Set a practical reporting interval to ensure regular position updates are sent to Plaspy.
- Use the device IMEI to derive the device ID required by the tracker SMS command format.
- Verify settings with the tracker verification command and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint information that must be used to configure the ST 300H GPRS server settings.

## Typical Requirements Before Setup

- A powered and reachable ST 300H tracker with a valid IMEI number
- A working SIM card with a data plan and SMS capability inserted in the tracker
- A phone or management tool able to send SMS commands to the tracker
- The device IMEI so you can calculate the device ID used in SMS templates
- APN, APN username, and APN password details for the mobile operator
- Access to the Suntech configuration instructions or support resources for your firmware version

## How This Tracker Connects to Plaspy

The ST 300H is configured to send its location and status data to Plaspy by setting the device GPRS server entry to the Plaspy endpoint and port. Plaspy then receives the device messages and automatically recognizes the tracker protocol so the device can be displayed and monitored in the platform.

- The tracker is set to send data to d.plaspy.com or 54.85.159.138 on port 8888.
- You may configure the device to use either UDP or TCP transport as required by the device or local network.
- Plaspy automatically detects the incoming protocol and associates messages with the correct device.
- Regular reporting intervals allow Plaspy to show up to date locations and event visibility for the device.
- The device ID used in the tracker commands is derived from the IMEI and is used for identification in the configuration command set.

## Common Configuration Workflow

1. Access the official Suntech configuration method for your ST 300H, typically SMS commands or the vendor tool documented by Suntech.
2. Determine the device ID from the IMEI (see IMEI device ID guidance below) and prepare your SMS command templates.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device GPRS server field.
4. Set the destination port to 8888.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration by sending the SMS commands or using the Suntech tool and then restart the device if required.
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform or using the tracker verification command.

## Example Configuration Commands

The ST 300H can be configured by sending SMS commands to the device. The device ID used in these templates is the last 9 digits of the IMEI excluding the final IMEI check digit. Example: if the IMEI is 123456789012345, the device ID will be the substring of digits starting at position 6 and ending before the last digit per the manufacturer convention; for the HTML example IMEI 123456789012345 the device ID example shown in manufacturer content was 678901234.

Use these public SMS templates as provided by Suntech. Replace {{device_id}} with the computed 9 digit device ID, and preserve the APN placeholders [apn], [apnu], and [apnp] as needed.

1. Optional initial factory reset (use when starting a fresh setup)
```
ST300CMD;{{device_id}};02;Reset
```
2. Set operator APN and GPRS server pointing to Plaspy
```
ST300NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Note: the `1` after the `02;` portion indicates APN credentials are included. If no APN username or password is used the corresponding placeholders may be left blank.

3. Set reporting intervals (example sets 60 second interval)
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4. Verify device settings
```
ST300CMD;{{device_id}};02;PresetA
```

Explanation of placeholders:
- {{device_id}} — the last 9 digits of the IMEI excluding its final check digit as required by the ST 300H SMS format.
- [apn] — your mobile operator APN.
- [apnu] — APN username if required by operator; leave blank if none.
- [apnp] — APN password if required by operator; leave blank if none.

Send these SMS messages from a phone to the tracker number in the order shown when order matters: perform reset only if needed, then network and server settings, then reporting interval, and finally verification.

## Configuration Notes

- Manufacturer firmware and command syntax can vary by region and production batch; always verify the exact SMS templates for your firmware revision.
- The ST 300H supports SMS based configuration according to the public templates above; software tools from Suntech may also be available and should be used when provided.
- Choose UDP or TCP based on network conditions; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Confirm APN credentials with the mobile operator before sending commands to avoid connectivity issues.
- Calculating the correct device ID from the IMEI is critical for the commands to be accepted by the tracker.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech ST 300H gives organizations a straightforward way to centralize fleet telemetry and monitor devices configured to report to the shared Plaspy endpoint. By pointing the ST 300H to d.plaspy.com or 54.85.159.138 on port 8888 and configuring reporting intervals, fleets gain continuous visibility and the ability to analyze operational data through the Plaspy platform.

To learn more about Plaspy and supported device configuration approaches visit https://www.plaspy.com. Device specific configuration methods, command syntax, and firmware behavior can change over time, so please verify the latest details on the manufacturer site http://www.suntechint.com/ before deploying devices.
