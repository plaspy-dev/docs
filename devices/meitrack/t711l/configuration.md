---
slug: /meitrack/t711l/configuration
id: t711l-configuration
sidebar_label: Configuration
title: Meitrack - T711L Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Meitrack T711L configuration with Plaspy server and example SMS commands
keywords:
  - Meitrack T711L configuration
  - Meitrack T711L setup
  - T711L server configuration
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracker setup
  - Meitrack setup guide
  - T711L SMS commands
  - T711L GPRS setup
  - fleet tracking Plaspy
---

# Meitrack - T711L Configuration

This page documents the public configuration context for using the Meitrack T711L with the Plaspy platform. It focuses on the practical server settings and the common steps used to prepare the device so it can report location and status to Plaspy. Where manufacturer side commands are public, example SMS commands supplied by Meitrack are included for convenience.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The T711L supports SMS based configuration and GPRS reporting, and the examples below follow publicly available Meitrack command formats for initial setup.

## Configuration Overview

This configuration process prepares the T711L to communicate reliably with Plaspy by pointing the device to the Plaspy server, setting an appropriate reporting interval, and enabling event reporting needed for fleet visibility. The steps are practical and intended for technicians or installers comfortable with SMS or the official Meitrack configuration tool.

- Point the device to the Plaspy server endpoint and port used by all Plaspy devices
- Configure APN and transport settings required for GPRS reporting
- Set update intervals and event reporting to ensure timely visibility in Plaspy
- Verify the device reports successfully to Plaspy and appears on the platform
- Optionally reset to factory defaults or apply timezone and other device preferences

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port 8888

## Typical Requirements Before Setup

- A powered and installed Meitrack T711L with GSM network coverage
- A working SIM card with mobile data and SMS capability and an appropriate APN
- Access to the official Meitrack configuration method or SMS interface
- Knowledge of the device password the tracker expects for SMS configuration for example the default password 0000 in public examples
- A plan to use either UDP or TCP transport depending on installer preference
- Ability to verify connectivity by checking server side logs or the Plaspy platform after configuration

## How This Tracker Connects to Plaspy

The T711L is configured to report location and device events to the shared Plaspy server endpoint and port so Plaspy can ingest and display device data. Typically the tracker uses GPRS to send periodic position packets to the server configured on the device.

- The device sends location and status packets to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device selection and network constraints
- Plaspy automatically detects the tracker protocol and maps the device data for visibility
- Update intervals and event settings control how often the device reports to Plaspy
- Successful reporting makes the device visible and operational in the Plaspy platform

## Common Configuration Workflow

1. Access the official Meitrack configuration method or software, or prepare to send SMS commands from an authorized phone number
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server field
3. Set the server port to 8888 which is the shared port used by all devices in Plaspy
4. Choose UDP or TCP transport if the device requires a transport selection
5. Configure APN and any required SIM authentication values for GPRS data
6. Apply or save the configuration and restart the device if required by the device or firmware
7. Validate that the device reports to Plaspy and appears on the platform

## Example Configuration Commands

The following example SMS commands are drawn from publicly available Meitrack command formats. The example uses the device SMS password 0000 which is shown as the default in the public configuration sample. Replace [apn], [apnu], and [apnp] with your SIM operator APN, APN username, and APN password as required.

Note that the example sets the GPRS server using the server IP 54.85.159.138 and port 8888. If you prefer to use the Plaspy domain instead, verify that your firmware accepts domain names in place of the IP in the server command.

1. Optional initial factory reset or restore to factory settings
```text
0000,F11
```

2. Set the GPRS server to Plaspy using IP and APN placeholder
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Explanation of placeholders
  - [apn] is the mobile data APN provided by your SIM operator
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required
- If your SIM operator does not require APN credentials, omit [apnu] and [apnp] as supported by the device format

3. Set the time zone to UTC 0
```text
0000,B36,0
```

4. Set the location update interval to every 1 minute
```text
0000,A12,6,0
```
- The numeric fields follow the manufacturer command format for reporting intervals

5. Set event reporting configuration
```text
0000,C03,0
```

If you use the Meitrack configuration tool instead of SMS, enter the same server and port values in the tool fields and apply the equivalent settings.

## Configuration Notes

- SMS based setup is shown here because public Meitrack examples use SMS commands; the official Meitrack software can also apply the same server and parameter values
- Firmware versions and hardware revisions can change command formats and parameter behavior; verify command syntax for your exact firmware before mass deployment
- Choose UDP or TCP based on your network reliability and preferences; both transports are supported on port 8888
- The default SMS password 0000 is used in the public examples; change the device password after initial setup for operational security
- APN placeholders [apn], [apnu], and [apnp] must be replaced with your operator values when required

## Why Use Plaspy with This Configuration

Using the Meitrack T711L configured to report to Plaspy gives organizations an easy way to centralize vehicle location, event reporting, and operational monitoring. Pointing the T711L at the shared Plaspy server and port makes it straightforward to bring devices online and view them in a single platform while Plaspy handles protocol detection and device parsing.

To learn more about Plaspy and how the platform integrates with devices like the Meitrack T711L visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official documentation verify setup details on the manufacturer website https://www.meitrack.com/ as manufacturer specifications and firmware behavior can change over time.
