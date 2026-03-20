---
slug: /sentar/q60_tracker/configuration
id: q60_tracker-configuration
sidebar_label: Configuration
title: Sentar - Q60 Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar Q60 Tracker with Plaspy server settings and example SMS commands for setup
keywords:
  - Sentar Q60 Tracker configuration
  - Sentar Q60 setup
  - Q60 GPS tracker setup
  - Sentar tracker Plaspy configuration
  - Q60 server configuration
  - Q60 APN setup
  - Sentar GPS platform setup
  - Q60 SMS commands
  - Plaspy compatible devices
  - Sentar asset tracker setup
---

# Sentar - Q60 Tracker Configuration

This page covers the public configuration context for using the Sentar Q60 Tracker with Plaspy. It explains the Plaspy server values required for integration, the practical steps commonly used to prepare a Q60 device for reporting, and the sample SMS commands published as public setup guidance. Use this guide to understand how the Q60 is typically pointed to Plaspy for mapping, alerts, and history.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps may vary by firmware version, hardware revision, installation type, detector of vendor tools, and other variables. The Q60 supports SMS and GPRS configuration methods; where sample commands are provided below they reflect common manufacturer public instructions and the device default password noted in those instructions.

## Configuration Overview

The configuration process prepares the Q60 to communicate with Plaspy, ensuring the device has a working data path and is sending regular position updates. The example steps and commands below focus on pointing the tracker at the Plaspy endpoint, validating the device network settings and APN, and confirming the tracker reports into the platform.

- Configure the device APN and GPRS parameters so the tracker can use mobile data for reporting.
- Point the tracker to the Plaspy server endpoint and port so location reports reach Plaspy.
- Set an appropriate upload interval so Plaspy receives timely location updates.
- Optionally set time zone and perform a factory reset only if initial configuration requires it.
- Validate connectivity by using the device verification command and confirming the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — all devices in Plaspy use the same port  
- Transport support: UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and functioning Q60 device with an active Nano SIM that supports GPRS data and SMS for configuration.
- Access to the device (physically or via an installer tool) and the ability to send SMS configuration messages if you use SMS setup.
- The correct APN, APN username, and APN password for the SIM carrier to enable mobile data.
- The default device password used in public commands is 123456; confirm this value for your unit and be prepared to change it per manufacturer guidance.
- A Plaspy account and knowledge of how to verify device presence in your Plaspy dashboard.
- Manufacturer documentation or support contact for firmware specific instructions and any model revisions.

## How This Tracker Connects to Plaspy

The Q60 is configured to report position and basic telemetry to Plaspy using GPRS connectivity. Once the device has a working APN and the GPRS server is set to Plaspy, the tracker will transmit periodic uploads to the shared Plaspy endpoint and port where the platform ingests and displays the data.

- Device data is sent to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- The tracker may use either UDP or TCP transport depending on configured settings; Plaspy accepts both on port 8888.
- Plaspy automatically detects the tracker protocol when the device connects so no protocol selection is needed on the platform side.
- Regular upload intervals enable live position updates and event reporting inside Plaspy.
- Verification commands or status queries can be used to confirm settings before validating activity in Plaspy.

## Common Configuration Workflow

1. Access the official Sentar configuration method for your Q60, typically SMS commands or the manufacturer tool documented by Sentar.
2. Ensure the device has a working Nano SIM with an active data plan and the carrier APN information available.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device GPRS server settings.
4. Set the device port to 8888 as required by Plaspy and select UDP or TCP transport if the device requires a transport choice.
5. Configure the APN, APN username, and APN password as provided by the mobile operator using the manufacturer method.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.
7. Validate the device reports to Plaspy by using the device status command and confirming the unit appears in your Plaspy account.

## Example Configuration Commands

The Q60 can be configured by SMS using the public command formats below. These commands are based on published manufacturer examples and use the device default password 123456 where shown. Send each command as an SMS to the device number. Commands are listed in the recommended sequence; the first command is a factory reset and is optional or used only during initial setup when required.

1. Factory reset (optional initial step)
```
pw,123456,factory#
```
2. Set the time zone to UTC 0
```
pw,123456,lz,0,0#
```
3. Query IMSI to check mobile network MCC and MNC
```
pw,123456,imsi#
```
4. Set the operator APN where {{apn}} is the APN, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy represents MCC and MNC
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
- Explanation: Replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier values. The trailing xxxyy represents the combined MCC MNC values if required by the device.

5. Set the GPRS server to the Plaspy server IP and port
```
pw,123456,ip,54.85.159.138,8888#
```
- Alternative using domain form if supported by firmware (use d.plaspy.com)
```
pw,123456,domain,d.plaspy.com,8888#
```
6. Set the upload interval to 300 seconds
```
pw,123456,upload,300#
```
7. Check device settings and status
```
pw,123456,ts#
```

Note: Some example commands above show a domain form for clarity. Use the command format supported by your device firmware. If the device requires a different keyword or separator, refer to the Sentar documentation.

## Configuration Notes

- Firmware and regional variations may change the exact SMS syntax or available command keywords; always cross check with the current Sentar documentation.
- SMS based setup is a common public method for the Q60; if you prefer a software or USB method consult Sentar resources for alternate configuration tools.
- Choose UDP or TCP according to device capability; Plaspy accepts both on port 8888 but the device may prefer one transport mode.
- Preserve the APN placeholders {{apn}}, {{apnu}}, and {{apnp}} when preparing SMS commands and substitute carrier values exactly.
- The public command examples use the default password 123456 as published; change the device password via the manufacturer procedure where appropriate to secure the unit.

## Why Use Plaspy with This Configuration

Using the Sentar Q60 with Plaspy provides a straightforward way to add compact personal or small asset tracking into a monitored environment. With the Q60 pointed at Plaspy's shared server endpoint and port, organizations can take advantage of Plaspy mapping, alerts, and history features while keeping device setup simple using the public SMS commands or the manufacturer tool.

To learn more about Plaspy and how it supports devices like the Sentar Q60 visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the official Sentar documentation at http://www.sentarsmart.com/ as those specifications and commands can change over time.
