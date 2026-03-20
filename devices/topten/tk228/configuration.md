---
slug: /topten/tk228/configuration
id: tk228-configuration
sidebar_label: Configuration
title: TopTen - TK228 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen TK228 trackers to connect with Plaspy using shared server settings and SMS commands
keywords:
  - TopTen TK228 configuration
  - TopTen TK228 setup
  - TopTen TK228 server configuration
  - TopTen TK228 Plaspy
  - TK228 OBD II installation
  - TopTen GPS tracker configuration
  - TopTen TK228 APN setup
  - Plaspy tracker setup
  - Vehicle tracking TK228
  - TK228 GPRS configuration
---

# TopTen - TK228 Configuration

This page documents the public configuration context for using the TopTen TK228 tracker with Plaspy. It explains the shared server settings Plaspy requires, how the TK228 identifies itself to the platform, and the practical SMS configuration commands that are commonly used to point the device at Plaspy. The material below is based on the publicly available configuration pattern for TK228 devices and the Plaspy server values required for connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so a single server configuration will often work for many tracker models. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands here as public examples and verify details against the device firmware and the official TopTen documentation.

## Configuration Overview

This overview explains the practical goal of configuring a TK228 for use with Plaspy and what to expect during the setup process.

- Configure the TK228 so it reports to the Plaspy server endpoint and port.
- Set the device APN and GPRS server parameters so the tracker can send data over mobile data.
- Ensure the tracker identifier matches the IMEI derived ID expected by Plaspy so the device is visible in the platform.
- Validate connectivity and reporting so the device appears and updates on Plaspy.
- Optionally restore factory defaults prior to configuration when recommended by the installer or vendor.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically when the device connects to the configured endpoint.

## Typical Requirements Before Setup

- A powered TK228 installed or connected to the vehicle OBD II port or power source and ready to accept configuration.
- A working SIM card with an active data plan and the correct APN information for the mobile network.
- Access to a phone or SMS tool capable of sending configuration SMS messages to the tracker.
- The device IMEI available for identification and verification during setup.
- Knowledge of the APN credentials including APN name and optional APN username and APN password.
- Manufacturer configuration tool or instructions from TopTen if you prefer software based setup over SMS commands.

## How This Tracker Connects to Plaspy

The TK228 is configured to send location and device data to the shared Plaspy server endpoint and port so it can be monitored and managed within Plaspy.

- The tracker reports to d.plaspy.com or directly to 54.85.159.138 at port 8888.
- Plaspy automatically detects whether the device uses UDP or TCP so you can use either transport when configuring the device.
- The tracker ID used by Plaspy corresponds to the last 14 digits of the IMEI as reported by the device PAR command.
- Data sent to Plaspy can include GPS position, GSM based location, alarm events, and GPRS based CAN diagnostics as supported by the TK228 firmware.
- Regular reporting intervals and sleep settings are applied on the device side to control network usage and reporting frequency.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software and review device instructions for SMS command format or tool guided setup.
2. Enter the Plaspy server either as domain d.plaspy.com or as server IP 54.85.159.138 depending on the device configuration option.
3. Set the destination port to 8888 as Plaspy uses the same port across devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Provide APN settings and any required APN username and password so GPRS connection can be established.
6. Apply or save the configuration and restart the device if the device or vendor documentation indicates a restart is required.
7. Validate that the device reports to Plaspy and that the IMEI derived tracker ID matches the value Plaspy expects.

## Example Configuration Commands

The TK228 supports SMS based configuration. The public commands below show the common SMS format used to restore defaults, set the APN and server, and query the server settings. Preserve placeholders when substituting your network credentials.

- Optional factory reset or initial restore step
```sms
111111CLR
```
- Set APN and GPRS server to point to Plaspy by IP with port and APN placeholders
```sms
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
- Verify or query current server settings
```sms
111111WWW:
```

Notes on the commands above
- The prefix 111111 in these examples is the command password shown in the public command set. Replace it with your device password if different.
- {{apn}} is the APN name required by your mobile network. {{apnu}} is the APN username and {{apnp}} is the APN password. Keep these placeholders and substitute them with your operator values.
- The order of commands matters when you are restoring defaults before applying network settings. The factory reset command is optional and should be used only when needed.

## Configuration Notes

- Firmware differences and regional variants can change command syntax or available parameters. Verify your tracker firmware and vendor instructions before sending SMS commands.
- The TK228 supports SMS based configuration as shown, but many installers use manufacturer software or configuration tools for batch setup and monitoring.
- Choose UDP or TCP according to installer preference or network requirements. Plaspy will accept either and automatically detect the protocol.
- When entering the server you may use the d.plaspy.com domain or the direct IP 54.85.159.138; both resolve to the same Plaspy endpoint on port 8888.
- Confirm the IMEI derived tracker ID convention with the PAR command output so the device is correctly identified in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured TopTen TK228 provides centralized visibility of vehicle location, alarm events, and GPRS based diagnostics in one platform. For organizations that manage fleets or need real time operational oversight, configuring the TK228 to report to Plaspy ensures consistent reporting to a shared server endpoint and simplifies device onboarding thanks to Plaspy automatic protocol detection.

To learn more about Plaspy and how it handles device connectivity and fleet management features visit https://www.plaspy.com. Please verify device specific configuration methods and the latest manufacturer details on the TopTen site at http://www.t10.cn because firmware behavior and setup procedures can change over time.
