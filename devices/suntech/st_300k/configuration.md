---
slug: /suntech/st_300k/configuration
id: st_300k-configuration
sidebar_label: Configuration
title: Suntech - ST 300K Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Suntech ST 300K showing how to point the device to Plaspy with practical SMS commands and workflow
keywords:
  - Suntech ST 300K configuration
  - Suntech ST 300K setup
  - ST 300K Plaspy configuration
  - GPS tracker server configuration
  - Suntech tracker setup guide
  - vehicle tracking configuration
  - fleet management tracker setup
  - Suntech SMS configuration
  - GPRS server configuration
  - tracker connectivity to Plaspy
---

# Suntech - ST 300K Configuration

This page covers the public configuration context for using the Suntech ST 300K tracker with Plaspy. It collects the practical, publicly available steps and commands you can use to point the device at the Plaspy server, verify connectivity, and enable visibility in the Plaspy platform. Where manufacturer commands are available in public sources they are included here in readable form.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The ST 300K can be configured using SMS commands or the manufacturer configuration tools; this page explains the public SMS command flow provided in device documentation and how that maps to Plaspy server settings.

## Configuration Overview

The configuration process prepares the tracker to send location and event data to Plaspy, and validates that the device is visible in the platform. For the ST 300K this commonly includes deriving the device ID from the IMEI, setting the mobile operator APN and the GPRS server, configuring reporting intervals, and verifying settings.

- Derive the device ID from the IMEI and use it in SMS or tool commands as required.
- Configure the device APN and GPRS server to point to Plaspy so the tracker can open a data session.
- Set the reporting interval so the device sends updates at the desired cadence.
- Optionally reset or preset device settings when preparing a tracker for a new installation.
- Verify settings using the tracker check or preset command and confirm the device appears in Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform recognizes the tracker protocol without manual selection

These values are the public Plaspy endpoint information used when configuring the tracker to send data to Plaspy. Plaspy uses the same port for all devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered ST 300K device with the IMEI available so you can derive the device ID. The device ID is the last 9 digits of the IMEI excluding the final check digit.
- A SIM card provisioned for data and SMS with the correct APN credentials for the mobile operator.
- Ability to send SMS messages to the device or access to the manufacturer configuration tools that support the ST 300K.
- Network coverage where the device will be installed so it can register to the mobile network and open a GPRS session.
- Access to any installer documentation or vendor tools for the device firmware revision in use.

## How This Tracker Connects to Plaspy

The ST 300K is configured to report location and event data to the shared Plaspy server endpoint and port. Once the device APN and server settings are correct, the tracker opens a GPRS session and begins transmitting according to the configured reporting rules so Plaspy can display position and status.

- The device is pointed at the Plaspy server domain or IP and sends data to port 8888.
- The tracker can use UDP or TCP transport as configured; Plaspy accepts either and auto detects protocol.
- Regular position reports and device events are forwarded to Plaspy so the device becomes visible in the platform.
- Verifying the device appears in Plaspy confirms the device can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Adjusting reporting intervals controls how frequently Plaspy receives updates from the device.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 300K, typically the SMS command interface or the manufacturer configuration tool. Refer to Suntech documentation for firmware specific details.
2. Determine the device ID from the IMEI. The device ID is the last 9 digits of the IMEI excluding the final digit. Use that ID in the device commands.
3. Enter the Plaspy server information in the device settings by using d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose the transport protocol (UDP or TCP) if the device requires a transport selection; Plaspy supports both and will auto detect the protocol.
5. Set the operator APN and any APN username or password required by the SIM so the device can open a GPRS session.
6. Apply or save the configuration and restart the device if needed for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device appearance in the platform or by using the device verification SMS command.

## Example Configuration Commands

The ST 300K documentation provides SMS command templates used to configure the device. In these examples replace {{device_id}} with the device ID derived from the IMEI (the last 9 digits excluding the final IMEI digit). Replace [apn], [apnu], and [apnp] with your mobile operator APN, APN username, and APN password as required.

Example showing how the device ID is derived:
- If IMEI is 123456789012345, the device ID is the last 9 digits excluding the final digit. For example IMEI 123456789012345 maps to device ID 789012345 (example format).

1) Optional factory reset command (use only when needed or during initial provisioning)
```
ST300CMD;{{device_id}};02;Reset
```

2) Set operator APN and configure the GPRS server to point to Plaspy
- The command includes placeholders for APN credentials and appends the Plaspy server IP and port.
```
ST300NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Note: the numeric flag before [apn] (here 1) is used in the device template where an operator username or password may be present. Keep the placeholders as provided by your vendor tool.

3) Set the reporting interval to 60 seconds (example for periodic position reports)
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4) Verify current preset or settings on the device
```
ST300CMD;{{device_id}};02;PresetA
```

Important notes on placeholders:
- {{device_id}} is the last 9 digits of the IMEI excluding the final check digit as shown above.
- [apn] is the mobile operator APN string.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.

Use your phone or an SMS gateway capable of sending plain text SMS commands to the tracker. The exact syntax and required flags can vary with firmware; always confirm against your device version documentation.

## Configuration Notes

- Some firmware revisions and vendor tools present slight variations in SMS command syntax. Confirm the exact command format for your device firmware version before sending commands.
- The ST 300K supports SMS based configuration in public documentation; if a vendor configuration tool is available use it for bulk provisioning or when it simplifies device management.
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and will automatically detect the protocol on arrival to the server at port 8888.
- Verify APN credentials carefully because incorrect APN, username, or password will prevent the device from opening a GPRS session to 54.85.159.138 on port 8888.
- When testing, use the device verification command and then confirm the device appears in Plaspy using the shared server domain or IP.

## Why Use Plaspy with This Configuration

Pointing the Suntech ST 300K to Plaspy gives organizations a consistent and centralized way to collect position and event data from a wide range of devices using the same Plaspy endpoint. Using the shared server settings simplifies provisioning because Plaspy listens on a single port and automatically detects the tracker protocol, reducing the need for protocol-specific server entries.

If you want to learn more about Plaspy and how it works with trackers like the Suntech ST 300K visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and manufacturer instructions verify details with Suntech at http://www.suntechint.com/ before applying settings in production.
