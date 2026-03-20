---
slug: /suntech/st_215c/configuration
id: st_215c-configuration
sidebar_label: Configuration
title: Suntech - ST 215C Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Suntech ST 215C for use with Plaspy using public server settings and SMS based commands for GPRS TCP or UDP reporting
keywords:
  - Suntech ST 215C configuration
  - Suntech ST 215C setup
  - ST 215C server configuration
  - ST 215C Plaspy setup
  - Suntech GPS tracker configuration
  - vehicle tracker setup Plaspy
  - ST 215C SMS configuration
  - GPRS TCP UDP tracker setup
  - fleet tracking ST 215C
  - Suntech tracker server settings
---

# Suntech - ST 215C Configuration

This page documents the public configuration context for connecting a Suntech ST 215C GPS tracker to Plaspy. It collects the known public server settings and the SMS command templates provided for the ST 215C so you can prepare the device to communicate with Plaspy. Use this information together with device manuals and vendor tools when configuring units in the field.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST 215C supports GPRS with TCP and UDP transport, and the examples below show SMS based configuration commands commonly used to set APN, server endpoint, port, and reporting intervals.

## Configuration Overview

The goal of the configuration steps below is to prepare the tracker to send position and event data reliably to Plaspy, validate connectivity, and ensure the device becomes visible in the Plaspy platform. The supplied SMS command templates in this page are public examples that many installers use to configure ST 215C units for GPRS reporting.

- Set the mobile operator APN and optional APN credentials so the device can use GPRS data.
- Set the Plaspy server endpoint and the shared port so the tracker reports to Plaspy.
- Configure regular position reporting intervals so the device transmits timely location updates.
- Validate settings using the device verification command and confirm the unit shows online in Plaspy.
- Use the manufacturer recommended method such as SMS commands or vendor software depending on the available tools.

## Plaspy Server Settings

- Use server domain d.plaspy.com for the tracker server setting.
- You may also use the server IP 54.85.159.138 as an alternative endpoint.
- All Plaspy devices use the same port 8888 for reporting.
- The tracker may be configured to use UDP or TCP on port 8888 depending on device options.
- Plaspy automatically detects the tracker protocol so TCP or UDP choice is accepted and the platform will interpret incoming connections.

## Typical Requirements Before Setup

- Access to the device IMEI so you can compute the device ID required by the Suntech command format.
- A SIM card with an active data plan and correct APN credentials for the mobile operator.
- Ability to send SMS messages to the device phone number when using SMS based configuration.
- A stable power source or vehicle power connected while applying configuration.
- Access to the official Suntech configuration method or vendor toolset when SMS is not preferred.
- Confirmation of the device firmware version if available, since command support and syntax can vary by firmware.

## How This Tracker Connects to Plaspy

When configured for Plaspy the ST 215C uses its GPRS connection to transmit telemetry and events to the shared Plaspy server endpoint and port. Plaspy receives the incoming packets on port 8888 and maps the device using its identifier so the unit becomes visible in the account.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- The device sends periodic location updates based on the configured reporting interval.
- Events and digital input changes are transmitted to Plaspy for monitoring and alerts.
- Plaspy automatically detects the tracker protocol so incoming TCP or UDP packets are handled correctly.
- Once data is received, the device becomes visible on the Plaspy platform for monitoring and reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send configuration SMS messages per Suntech guidance.
2. Compute the device ID from the IMEI (see examples below) and prepare APN values for the device.
3. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device server field or SMS command.
4. Set the port to 8888 as Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the device requires a transport selection and include that in the configuration.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to accept new settings.
7. Validate that the device reports to Plaspy and appears online in your account by checking the verification command output and the platform.

## Example Configuration Commands

The following public SMS command templates are derived from the manufacturer provided examples. The ST 215C uses a device ID that is taken from the IMEI digits 9 through 14 (that is, the six digits immediately before the final IMEI digit). For example, if the IMEI is 12345678 901234 5 then the device ID is 901234.

Notes on placeholders used below:
- [device_id] = six digit device ID derived from IMEI digits 9 to 14 as described above.
- [apn] = mobile network APN name for the SIM operator.
- [apnu] = APN username if required by the operator, otherwise leave empty.
- [apnp] = APN password if required by the operator, otherwise leave empty.
- \<APN_FLAG> = use 1 if you supply username or password, otherwise 0. This flag enables sending credentials in the APN command.

1) Set the operator APN and GPRS server
- Template (send as SMS to the device number):

```
SA200NTW;[device_id];02;<APN_FLAG>;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Explanation
  - Replace [device_id] with the six digit device ID from the IMEI.
  - Replace [apn], [apnu], and [apnp] with the operator APN and optional credentials.
  - Set \<APN_FLAG> to 1 when you provide username or password, otherwise set it to 0.
  - The command points the device to the Plaspy server IP 54.85.159.138 and port 8888. You may substitute d.plaspy.com in device tools that accept hostnames instead of the IP.

2) Set the update interval to 60 seconds
- Template:

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

- Explanation
  - This sets periodic reporting intervals. Adjust the numeric parameters as needed for your installation and compliance requirements.

3) Check settings or verify configuration
- Template:

```
SA200CMD;[device_id];02;PresetA
```

- Explanation
  - This command requests the device to return preset configuration details so you can verify APN, server, and reporting settings.

If you use vendor configuration software instead of SMS, enter the same values for server (d.plaspy.com or 54.85.159.138), port 8888, APN settings, and reporting intervals in the software UI and save.

## Configuration Notes

- The ST 215C supports both TCP and UDP over GPRS. Choose the transport that suits your network and reliability requirements; Plaspy will accept either and auto detect the protocol.
- SMS based configuration is commonly used for initial field setup when no laptop or vendor tool is available. Ensure SMS commands are sent from a number the device accepts as a configuration source if applicable.
- Different firmware revisions or hardware batches may expect slightly different parameter ordering or flags. Always verify command syntax against the device manual for the unit you are configuring.
- When supplying APN username or password, ensure you set the APN flag (the command parameter shown as \<APN_FLAG>) so the device knows to include credentials.
- After applying new settings, a device restart may be required for the changes to take effect. Confirm with the device response or by observing the device come online in Plaspy.

## Why Use Plaspy with This Configuration

Using the Suntech ST 215C with Plaspy provides a straightforward path to fleet visibility and operational monitoring. The ST 215C's support for GPRS with TCP and UDP combined with Plaspy's automatic protocol detection simplifies integration: once the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 and reporting intervals are set, data flows into the platform for tracking, event monitoring, and reporting.

Learn more about how Plaspy can receive and process data from compatible trackers at https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware details verify the current documentation on the manufacturer website http://www.suntechint.com/ as setup methods and firmware behavior can change over time.
