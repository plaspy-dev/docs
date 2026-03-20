---
slug: /megastek/gt_99/configuration
id: gt_99-configuration
sidebar_label: Configuration
title: Megastek - GT-99 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Megastek GT-99 to report to Plaspy using public server settings and sample SMS commands for device integration
keywords:
- Megastek GT-99 configuration
- Megastek GT-99 setup
- Megastek GT-99 Plaspy
- GT-99 server configuration
- GT-99 SMS commands
- GT-99 GPRS setup
- GPS tracker GT-99 setup
- Megastek tracker configuration
- vehicle tracking GT-99
- GT-99 platform integration
---

# Megastek - GT-99 Configuration

This page describes the public configuration context for using the Megastek GT-99 with Plaspy. It gathers the practical server settings and the sample SMS commands published for this model so you can prepare the device to report to Plaspy. The content here is intended to help technical users and integrators apply the shared Plaspy settings and verify connectivity.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol on connection. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public configuration values and sample SMS commands that are commonly used with the GT-99.

## Configuration Overview

The GT-99 must be configured so it can reach Plaspy's shared server endpoint and send periodic position updates. The example SMS commands provided by the manufacturer show a typical SMS based setup flow that sets device ID, APN, reporting interval, and the GPRS server to Plaspy.

- Configure the device identifier so the tracker reports with a known device ID in Plaspy.
- Configure the cellular APN and optional APN username and password so GPRS data can be established.
- Point the tracker to Plaspy server settings so the device opens a data session to the platform.
- Set the reporting interval appropriate for your tracking requirements and power budget.
- Enable GPRS data mode so the device sends telemetry to Plaspy rather than using SMS only.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and the platform will detect the protocol automatically.

## Typical Requirements Before Setup

- A charged and installed GT-99 with known IMEI number available for configuration
- A working cellular SIM card with data access and the correct APN for the mobile operator
- Ability to send SMS commands to the tracker or access to the official configuration tool from the manufacturer
- Knowledge of the device password if it has been changed from the default
- Basic understanding of whether the device will use TCP or UDP for its data connection
- Access to Plaspy account information to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

The GT-99 is configured to use GPRS to establish a data connection to Plaspy and then send location and event data to the shared platform endpoint. Once the device is pointed to Plaspy and GPRS mode is enabled, the platform will receive periodic updates according to the configured interval.

- The tracker opens a data session to the Plaspy server endpoint using the configured APN and credentials.
- The device sends periodic position reports based on the reporting interval configured on the GT-99.
- Events such as SOS alarms, geo fence alerts, and overspeed warnings are sent to Plaspy when supported by the device.
- The tracker reports to the shared Plaspy server endpoint and port so the platform can map incoming connections to the correct device.
- Plaspy automatically detects the tracker protocol so you do not need to select a specific protocol in the platform.

## Common Configuration Workflow

1. Access the manufacturer's recommended configuration method for the GT-99, typically SMS commands or the official Megastek configuration tool.
2. Prepare the device IMEI and confirm or reset the device password if you will use the default shown in manufacturer examples.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration.
4. Set the port to 8888 which is the shared port Plaspy uses for all devices.
5. Choose UDP or TCP on devices that require a transport selection depending on your network and preference.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the GT-99 reports to Plaspy by checking the device list or live feed in your Plaspy account and confirming incoming updates.

## Example Configuration Commands

The GT-99 can be configured by sending SMS commands to the device. The sample manufacturer commands below use the default device password 000000 as shown in the public configuration. Replace 000000 with your device password if it has been changed.

- Set the device ID using the IMEI or a 15 digit device identifier. The manufacturer sample constructs a 15 digit ID from the IMEI. Replace [IMEI_LAST15] with the device IMEI last 15 digits.

```
M000000,22,[IMEI_LAST15]
```

- Set the operator APN. Use [apn] as the APN name. If your operator requires an APN username or password include [apnu] and [apnp] as needed.

```
M000000,23,[apn]
```

or with APN username and password

```
M000000,23,[apn],[apnu],[apnp]
```

- Set the update interval to 60 seconds

```
M000000,25,60
```

- Set the GPRS server to point the device to Plaspy. The manufacturer example uses the Plaspy server IP and port. You can also use the domain d.plaspy.com in place of the IP if the device accepts a hostname.

Using the IP from Plaspy public settings

```
M000000,24,56 54.85.159.138,8888
```

Or using the domain

```
M000000,24,56 d.plaspy.com,8888
```

- Enable GPRS mode so the device uses data reporting

```
M000000,21,2
```

Notes on placeholders
- [IMEI_LAST15] means the 15 digit identifier derived from the device IMEI as shown in manufacturer examples.
- [apn] is the operator APN string required for GPRS.
- [apnu] and [apnp] are optional APN username and APN password placeholders if your operator requires them.
- Replace M000000 with M\<your_password> if the device password is not the default 000000.

## Configuration Notes

- Manufacturer firmware and command formats can vary by production batch and firmware level. Always confirm the exact SMS syntax for your device firmware.
- The GT-99 example above uses SMS based commands as published in public configuration examples. Some installers prefer the official configuration tool where available.
- Plaspy supports both UDP and TCP transports. Choose the transport that matches your network policy or the tracker capability.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol on connection.
- If the device does not connect after configuration, verify APN credentials, signal quality, correct IMEI or device ID, and that the device password was entered correctly in commands.

## Why Use Plaspy with This Configuration

Using the Megastek GT-99 with Plaspy provides a straightforward way to bring device telemetry into a single platform for visibility and operational monitoring. By pointing the tracker to Plaspy's shared server endpoint and port and enabling GPRS reporting, organizations can receive position updates, track events, and monitor device status centrally.

To learn more about Plaspy and supported integration options visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and official Megastek documentation confirm the current details at https://www.megastek.com/ as manufacturer procedures and firmware behavior can change over time.
