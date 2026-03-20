---
slug: /meitrack/mt_88/configuration
id: mt_88-configuration
sidebar_label: Configuration
title: Meitrack - MT-88 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Meitrack MT-88 showing how to point the tracker to Plaspy and validate connectivity
keywords:
  - Meitrack MT-88
  - MT-88 configuration
  - Meitrack tracker setup
  - MT-88 Plaspy
  - MT-88 server settings
  - Meitrack GPS configuration
  - MT-88 GPRS setup
  - MT-88 SMS commands
  - Meitrack tracking platform
  - GPS tracker configuration
---

# Meitrack - MT-88 Configuration

This page covers the public configuration context for using the Meitrack MT-88 with the Plaspy platform. It explains the shared server settings that Plaspy expects and the common, publicly documented commands and steps used to configure the MT-88 so it reports to Plaspy for tracking and monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools. Where available this guide includes the SMS commands published for the MT-88 so you can apply the known public settings used with Plaspy.

## Configuration Overview

The configuration process prepares the MT-88 to send location and event data to the Plaspy platform. For the MT-88 this commonly means setting a GPRS server entry or using the manufacturer SMS commands so the device knows where to deliver telemetry over the cellular network.

- Point the tracker to the Plaspy server endpoint so data is delivered to the platform
- Configure required APN and optional credentials so the device can use GPRS
- Choose transport and port settings and save them on the device
- Validate the device is reporting by checking visibility in Plaspy
- Use the MT-88 SMS commands when a software tool is not available

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol so a single port works for all devices

## Typical Requirements Before Setup

- A powered MT-88 device with an active SIM card that has data enabled
- Knowledge of the SIM APN and any APN credentials required by the mobile operator
- Access to the official Meitrack configuration method such as SMS commands or vendor software
- The MT-88 default device password if using SMS commands is 0000 unless changed
- Basic understanding of whether the device uses UDP or TCP for data transport
- A place to view reports in Plaspy once the device is connected

## How This Tracker Connects to Plaspy

The MT-88 is configured to report telemetry to the shared Plaspy server endpoint and port. Once the device has a working GPRS connection and the server settings are saved, the tracker will send location updates and status reports to Plaspy where they appear in the platform for monitoring and operational use.

- The tracker sends data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the MT-88 configuration choice
- Plaspy automatically detects the correct tracker protocol when data arrives
- Regular position updates and configured events are forwarded to Plaspy for visibility
- Validation is done by confirming the device appears and reports in the Plaspy interface

## Common Configuration Workflow

1. Access the official Meitrack configuration method such as SMS commands or the manufacturer software
2. Enter the server domain d.plaspy.com or use the server IP 54.85.159.138 in the server host field
3. Set the port to 8888 as Plaspy uses the same port for all supported devices
4. Choose UDP or TCP if the MT-88 requires a specific transport selection
5. Configure the device APN and any APN username or password needed for GPRS
6. Apply or save the configuration and restart the device if required
7. Validate that the device reports to Plaspy and appears in the platform

## Example Configuration Commands

The MT-88 supports configuration by SMS. The following public commands are presented in the order commonly used. These commands use the device password at the start. The sample default password is 0000. If you have changed the password use that value instead.

- Optional initial factory reset command when setting up a device for the first time or when a reset is required
```
0000,F11
```

- Set the GPRS server to Plaspy using the Plaspy server IP and port. [apn] is required. [apnu] and [apnp] are optional APN username and password placeholders and should only be included if your SIM carrier requires them.
```
0000,A21,2,54.85.159.138,8888,[apn]
```
If your APN requires username and password include them like this
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```

- Set the time zone to UTC 0
```
0000,B36,0
```

- Set the position update interval to every 1 minute
```
0000,A12,6,0
```

- Set event reporting parameters
```
0000,C03,0
```

Notes on the commands above
- Send each command as an SMS to the device number from an authorized phone number if the MT-88 is configured to accept SMS control.
- Replace [apn] with your carrier APN and replace [apnu] and [apnp] only if your carrier requires APN login credentials.
- The example uses the numeric server IP 54.85.159.138 and port 8888 which are the public Plaspy values. You may specify d.plaspy.com in vendor tools that accept domain names.

## Configuration Notes

- SMS based configuration is supported for the MT-88 using the documented commands above but vendor tools or PC software may also be available
- Firmware revisions and hardware variants can change available commands or parameters so verify your device firmware before applying global changes
- Choose UDP or TCP transport based on your installation needs; Plaspy supports both and listens on the same port for all devices
- Confirm APN and data access for the SIM card to ensure GPRS connections can be established
- If you perform a factory reset using the F11 command treat it as optional and only use it when needed for troubleshooting or initial setup

## Why Use Plaspy with This Configuration

Configuring the MT-88 to report to Plaspy gives you centralized visibility of device locations and status across your fleet or assets. Using the shared Plaspy server settings simplifies deployment because the platform uses the same port for all devices and automatically detects the tracker protocol, reducing configuration complexity at scale.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific commands, firmware notes, and official configuration details verify information on the manufacturer site https://www.meitrack.com/ before completing deployment.
