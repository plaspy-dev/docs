---
slug: /concox/ll303_pro/configuration
id: ll303_pro-configuration
sidebar_label: Configuration
title: Concox - LL303 Pro Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox LL303 Pro for Plaspy with SMS and server settings for GPRS reporting
keywords:
  - Concox LL303 Pro configuration
  - LL303 Pro setup
  - Concox tracker Plaspy
  - LL303 Pro server configuration
  - LL303 Pro SMS commands
  - asset tracker configuration
  - solar GPS tracker setup
  - fleet tracking configuration
  - LL303 Pro GPRS setup
  - vehicle tracker Plaspy compatibility
---

# Concox - LL303 Pro Configuration

This page documents the public configuration context for using the Concox LL303 Pro with Plaspy. It focuses on the configuration steps and server settings that allow the LL303 Pro to report GNSS position and telemetry to the Plaspy platform. Where available, this guide includes the device's public SMS commands used by installers to prepare the tracker for GPRS reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LL303 Pro supports SMS based configuration and GPRS reporting, so this page includes the common SMS commands and workflow that installers use as public guidance.

## Configuration Overview

This section explains the purpose of configuring the LL303 Pro for use with Plaspy and the practical outcomes you should expect.

- Prepare the LL303 Pro to communicate with Plaspy by applying the shared server and GPRS settings.
- Configure APN and network access so the device can establish a data connection.
- Validate connectivity and reporting so the device is visible in the Plaspy platform.
- Tune reporting interval and GPRS mode to balance real time visibility and battery life.
- Use manufacturer configuration methods such as SMS to apply settings in environments without immediate physical access.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and installed LL303 Pro with power and basic GNSS visibility for initial tests.
- A valid SIM card with mobile data enabled and SMS capability for SMS based configuration.
- Access to the official Concox configuration method for your device version such as SMS commands or vendor software.
- A registered Plaspy account or fleet so you can confirm the device appears and reports correctly.
- Note the device firmware and hardware revision so you can match vendor documentation to the commands you plan to use.

## How This Tracker Connects to Plaspy

When configured, the LL303 Pro uses its cellular link to send position and telemetry data to the shared Plaspy server endpoint and port. Plaspy receives device reports and maps them into the fleet or asset view for visibility, alerts, and historical playback.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- The device sends periodic or event driven GPRS reports to Plaspy depending on timer and mode settings.
- Plaspy automatically detects the tracker protocol so the same port can be used for all supported devices.
- Successful connection and reporting make the device visible in Plaspy for monitoring, alerts, and reporting.
- Transport can be configured as UDP or TCP depending on installer preference or device options.

## Common Configuration Workflow

1. Access the official Concox configuration method for your LL303 Pro firmware and region, typically SMS commands or the vendor tool recommended in the device guide.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server setting.
3. Set the reporting port to 8888 as this is the shared port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device prompts for a transport selection.
5. Configure APN and any required operator parameters so the device can use mobile data.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the LL303 Pro reports to Plaspy and appears in your Plaspy fleet or asset list.

## Example Configuration Commands

The LL303 Pro supports SMS based configuration. Below are the common public SMS commands in the order installers often use them. Preserve placeholders where required.

1. Optional factory reset for initial setup
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Basic APN only
```
APN,{{apn}}#
```
- APN with username and password placeholders
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Explanation: keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier APN, username, and password as needed.)

4. Set the GPRS server to use the Plaspy domain on port 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the server using the Plaspy server IP on port 8888
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
- Single parameter
```
TIMER,60#
```
- Dual parameter form (as supported by some firmware)
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Verify current GPRS parameter settings
```
GPRSSET#
```

Note: The order above is intentional for typical initial setup. Use the factory reset only when required. The device may accept either the domain form or IP form of the SERVER command; both examples point to Plaspy on port 8888.

## Configuration Notes

- SMS based setup is a public and widely used configuration path for the LL303 Pro. Use a phone or SMS gateway that can send plain text SMS to the device SIM.
- Plaspy supports both UDP and TCP on port 8888 and automatically detects the tracker protocol, but installer choices between UDP and TCP can affect retransmission and latency behavior.
- Firmware versions and regional variants can change command syntax or available parameters. Confirm the exact SMS command format with the device firmware documentation when possible.
- If you prefer server domain or server IP, both are shown above. Using d.plaspy.com is convenient for dynamic changes on the platform side, while the IP variant provides a direct address.
- Always check the official Concox documentation for any device specific differences before deploying at scale.

## Why Use Plaspy with This Configuration

Using the LL303 Pro configured to report to Plaspy provides centralized visibility for off grid and long term field assets. The shared Plaspy server settings simplify deployment by using the same port and automatic protocol detection across supported devices, reducing per-device configuration complexity and helping operations teams get devices reporting quickly.

To learn more about Plaspy and how it handles device connectivity, reporting, and fleet management visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer details please verify information on the official Concox website https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
