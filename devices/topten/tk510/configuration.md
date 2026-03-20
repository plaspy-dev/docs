---
slug: /topten/tk510/configuration
id: tk510-configuration
sidebar_label: Configuration
title: TopTen - TK510 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure TopTen TK510 for use with Plaspy using shared server settings and SMS commands
keywords:
  - TopTen TK510 configuration
  - TopTen TK510 setup
  - TK510 server configuration
  - TK510 Plaspy setup
  - TopTen GPS tracker configuration
  - vehicle tracker TK510 setup
  - TopTen TK510 APN settings
  - TK510 SMS configuration
  - vehicle tracking platform setup
  - Plaspy tracker configuration
---

# TopTen - TK510 Configuration

This page documents the public configuration context for using the TopTen TK510 with Plaspy. It focuses on the shared server settings Plaspy requires, the common SMS commands published for this model, and the practical steps you can follow to prepare a TK510 for visibility in the Plaspy platform. Where manufacturer commands are public, this guide preserves them and explains required placeholders.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK510 can be configured by SMS according to public device guidance, and this page explains how to apply those public values so the tracker reports correctly to Plaspy.

## Configuration Overview

This configuration process prepares a TK510 to communicate with Plaspy by setting the device server endpoint, transport, and APN so it can send regular position and event reports. The goal is to make the device reachable by the Plaspy backend and visible in the Plaspy interface once reporting begins.

- Set the device server to Plaspy so location and event data are delivered to the platform.
- Configure APN and GPRS parameters so the device has data connectivity to report over the mobile network.
- Choose UDP or TCP transport if the device requires explicit selection.
- Validate connectivity and device identifier so Plaspy can match incoming reports to the correct asset.
- Optionally restore factory settings or verify configuration via provided verification commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A TK510 powered and accessible for configuration with a charged battery or external power connected.
- A mobile SIM installed and active with data and SMS if you will configure the device by SMS and use GPRS reporting.
- The device IMEI available so you can determine the tracker identifier used by Plaspy.
- APN details from the mobile operator including APN name and optional username and password.
- Access to the manufacturer configuration method such as SMS commands or the vendor tool that the installer typically uses.
- A Plaspy account and permission to add or validate devices in your Plaspy organization.

## How This Tracker Connects to Plaspy

The TK510 is configured to report to Plaspy by sending GPRS data packets to the shared Plaspy server endpoint and port. Plaspy receives those packets, automatically detects the tracker protocol, and associates the incoming reports with the device identifier derived from the tracker IMEI.

- Device reports are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The tracker identifier used for Plaspy corresponds to the last 14 digits of the IMEI as provided by the device PAR command.
- Transport may be UDP or TCP depending on the device configuration; Plaspy accepts both and detects protocol automatically.
- After configuring APN and server settings, the TK510 will send periodic reports so Plaspy can display location and event data.
- Use the published verification command to confirm that the tracker has stored the server settings before validating in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK510, such as the SMS command interface or vendor setup tool.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the APN and any APN credentials using the placeholders supplied by your mobile operator.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy and that Plaspy associates the report to the correct tracker ID, which corresponds to the last 14 digits of the IMEI.

## Example Configuration Commands

The TK510 public guidance shows SMS based commands. The following commands are taken from manufacturer published examples and preserved in order. Keep placeholders as provided and replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator APN name, username, and password if required.

- Optional initial reset to factory settings
```text
111111CLR
```
Label: Optional initial restore of factory settings when you need a clean configuration.

- Set up APN and GPRS server to report to Plaspy
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Notes:
- This command sets the server IP to 54.85.159.138 and port to 8888 for Plaspy reporting.
- Replace {{apn}} with your operator APN name. If the operator provides an APN username and password, replace {{apnu}} and {{apnp}} respectively. If not required, leave them empty or omit if the device firmware allows.
- RPT, SLP, and RUN parameters are included in the published example; preserve their order when sending this public command.

- Verification command to check stored settings
```text
111111WWW:
```
Label: Use this command to request the device send back the current WWW configuration so you can confirm the server, port, and APN values were stored.

## Configuration Notes

- Firmware and regional variants can change the exact SMS command format or required prefixes. Always verify the command syntax for your device firmware revision.
- The TK510 supports SMS based configuration as shown in public guidance; some installers prefer vendor tools or USB interfaces where available.
- When choosing transport, TCP may be used for guaranteed delivery but UDP is often used for lower overhead; Plaspy accepts both and will detect the protocol automatically.
- Preserve the order of parameters in commands when following published examples; some firmwares expect a specific sequence.
- Keep a record of the device IMEI and confirm the tracker identifier because Plaspy uses the last 14 digits of the IMEI to match incoming reports.

## Why Use Plaspy with This Configuration

Configuring a TK510 to report to Plaspy gives your organization a straightforward path to receive live position and event data from the device using shared, documented server settings. By setting the device to report to d.plaspy.com or 54.85.159.138 on port 8888 and ensuring APN connectivity, you enable Plaspy to automatically detect the tracker protocol and present device location and alarms in the platform for operational oversight.

To learn more about Plaspy and how it supports device connectivity and fleet visibility visit https://www.plaspy.com. Device specific setup methods and firmware behavior can change over time, so please verify the latest configuration details on the manufacturer website http://www.t10.cn.
