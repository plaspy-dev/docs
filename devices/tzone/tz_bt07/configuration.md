---
slug: /tzone/tz_bt07/configuration
id: tz_bt07-configuration
sidebar_label: Configuration
title: TZone - TZ-BT07 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TZone TZ-BT07 showing required Plaspy server settings and SMS commands for connectivity
keywords:
  - TZone TZ-BT07 configuration
  - TZone TZ-BT07 setup
  - Plaspy tracker configuration
  - TZ-BT07 SMS configuration
  - GPS tracker server settings
  - Plaspy server configuration
  - vehicle tracking setup
  - TZ-BT07 APN setup
  - Plaspy compatibility guide
  - tracker protocol detection
---

# TZone - TZ-BT07 Configuration

This page documents the public configuration context for using the TZone TZ-BT07 tracker with Plaspy. It focuses on the shared server settings Plaspy requires, the typical preparation steps, and the practical SMS commands published for the TZ-BT07 so the device can report to Plaspy's platform.

Plaspy uses a shared server endpoint and a single port for all supported devices and automatically detects the tracker protocol used by each device. Manufacturer-side setup steps can vary by firmware revision, hardware variation, installation type, and vendor configuration tools, so this page concentrates on the public, practical steps and commands that prepare the TZ-BT07 to communicate with Plaspy.

## Configuration Overview

The configuration process prepares the TZ-BT07 to send location and status messages to Plaspy and ensures the device is reachable and visible on the platform. For TZ-BT07 units that support SMS/GPRS configuration, the setup typically includes setting the mobile data APN, pointing the device to the Plaspy server, and enabling GPRS reporting.

- Prepare the device so it can perform data reporting to Plaspy by configuring APN and server parameters
- Set an appropriate upload or update interval so the device reports as expected
- Point the device to the Plaspy server endpoint so data arrives at the correct platform destination
- Enable GPRS or data reporting mode when required so the device can send packets to Plaspy
- Validate the device is reporting in Plaspy after configuration to confirm visibility and correct protocol handling

## Plaspy Server Settings

For configuring the TZ-BT07 to work with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol so devices using standard formats are recognized

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to interpret incoming messages.

## Typical Requirements Before Setup

- A working SIM card with an active data plan and the correct APN for the mobile operator
- Access to the device phone number or SMS channel so you can send configuration SMS commands
- The TZ-BT07 powered and within coverage to receive SMS and use GPRS
- Knowledge of the device password if the device uses one for SMS configuration (commands shown below use a common password token as part of the command format)
- Access to the official manufacturer documentation or configuration tool for reference
- Ability to test and validate reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

The TZ-BT07 can be configured to send its data to Plaspy's shared server endpoint and port so the platform can receive and process location and status messages. When configured correctly, Plaspy will accept the device's data and make it visible in the platform using its automatic protocol detection.

- The tracker is pointed at the Plaspy server domain or IP so outbound data is routed to Plaspy
- The device uses port 8888 for sending reporting packets to Plaspy
- Communication can use UDP or TCP depending on the tracker configuration and firmware support
- Plaspy automatically detects the tracker protocol and processes incoming messages accordingly
- Once reporting starts, Plaspy provides visibility and event reporting based on the received data

## Common Configuration Workflow

1. Access the official manufacturer configuration method or tool for the TZ-BT07 (SMS commands are commonly used for this model).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 depending on the device command format.
3. Set the port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires a transport selection; select the transport supported by your firmware or network.
5. Apply or save the configuration on the device (for SMS-based setup this is accomplished when the SMS command is accepted by the device).
6. Restart the device if required by the manufacturer or if you do not observe immediate reporting.
7. Validate that the device reports to Plaspy and appears in the platform with the expected update interval.

## Example Configuration Commands

The TZ-BT07 public configuration steps below are published as SMS command examples. Send these SMS messages to the device phone number in the order shown. Preserve placeholders and replace them with your operator values as needed.

1. Set the operator APN
- Replace [apn] with your operator APN. If required use [apnu] and [apnp] for APN username and password.
```text
*000000,011,[apn],[apnu],[apnp]#
```
(If your device or firmware accepts a shorter format without username and password, you can omit the trailing placeholders leaving the command as *000000,011,[apn]#.)

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```

3. Set the GPRS server to Plaspy using the server IP and port
```text
*000000,015,0,54.85.159.138,8888#
```
(You can replace the IP with d.plaspy.com if the device accepts domain names in the command format.)

4. Activate the GPRS mode so the device begins data reporting
```text
*000000,016,1#
```

Notes about these commands:
- The prefix value 000000 in these examples is the device password token shown in the public command format. Replace it with your device password if it has been changed from the factory code.
- [apn], [apnu], and [apnp] are placeholders for your mobile operator APN, APN username, and APN password respectively. Keep placeholders intact and substitute real values before sending.
- These commands are the public SMS configuration examples provided for the TZ-BT07. Always verify the command syntax against your device firmware documentation if behavior differs.

## Configuration Notes

- Manufacturer firmware versions and regional hardware variants can change the exact SMS syntax or available parameters; consult manufacturer documentation if a command is not accepted.
- SMS-based configuration is shown in the public examples above; some installers may prefer manufacturer tools or a configuration portal if available for batch setup.
- Choose UDP or TCP based on network reliability and device firmware support; Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- Ensure the APN and any operator credentials are correct before enabling GPRS mode to avoid connectivity issues.
- If the device does not report immediately, verify SMS acceptance, wait for a brief period after enabling GPRS, and restart the device if required.

## Why Use Plaspy with This Configuration

Configuring the TZ-BT07 to report to Plaspy gives organizations a straightforward way to integrate compact trackers into a single platform for visibility, monitoring, and operational oversight. With the public server settings and the SMS commands above, the device can be prepared to send data to Plaspy where it is automatically recognized and processed.

To learn more about Plaspy and how it manages device connections and tracking data, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details, verify the current information on the official TZone documentation at http://www.tzonedigital.com/ .
