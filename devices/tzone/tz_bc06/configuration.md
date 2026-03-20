---
slug: /tzone/tz_bc06/configuration
id: tz_bc06-configuration
sidebar_label: Configuration
title: TZone - TZ-BC06 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TZone TZ-BC06 for use with Plaspy using public server settings SMS commands and practical setup guidance
keywords:
  - TZone TZ-BC06 configuration
  - TZone TZ-BC06 setup
  - TZone TZ-BC06 Plaspy
  - TZ-BC06 server configuration
  - TZ-BC06 tracking software configuration
  - GPS tracker SMS commands
  - tracker server setup
  - Plaspy server configuration
  - iBeacon tracker setup
  - vehicle tracking configuration
---

# TZone - TZ-BC06 Configuration

This page covers the public configuration context for using the TZone TZ-BC06 tracker with the Plaspy platform. It explains the shared server settings Plaspy requires, describes the common setup workflow, and presents the publicly available SMS commands used to point the device at Plaspy. Use this guidance to prepare the device for connectivity and to validate reporting to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary depending on firmware revision, hardware variation, installation type, and vendor tooling. The TZ-BC06 can be configured using SMS commands as shown below to set APN, reporting interval, and the GPRS server address for Plaspy.

## Configuration Overview

The goal of configuration is to prepare the TZ-BC06 to send location and status data to Plaspy reliably. For devices that accept SMS configuration commands, the process typically sets network access parameters, reporting behavior, and the destination server so Plaspy can receive and interpret the tracker data.

- Configure the tracker network parameters such as operator APN so it can establish GPRS connectivity
- Set the device reporting interval so Plaspy receives timely location updates
- Point the tracker to the Plaspy server endpoint so data is delivered to the platform
- Activate the tracker communication mode required for GPRS reporting
- Validate that the device appears and reports correctly in Plaspy after configuration

## Plaspy Server Settings

When configuring this tracker for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and powered TZ-BC06 device ready for configuration
- Access to a valid SIM card with data enabled and the correct APN for the mobile operator
- Ability to send SMS messages to the tracker for configuration if using SMS commands
- Access to the official manufacturer configuration instructions or tools for the TZ-BC06
- A Plaspy account or onboarding details so you can validate the device appears in the platform after setup

## How This Tracker Connects to Plaspy

The TZ-BC06 is configured to report to the shared Plaspy server endpoint and port so that Plaspy can ingest and display device data. Configuration ties the device to the Plaspy server and ensures periodic or event driven reports are delivered.

- The tracker is pointed to the Plaspy endpoint using the server domain or server IP and port
- Device data is sent over GPRS to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be selected as UDP or TCP depending on the device requirement and network conditions
- Plaspy automatically detects the tracker protocol so no protocol selection is needed in the platform
- After successful configuration the device should appear and report in Plaspy according to the set reporting interval

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TZ-BC06 (for example the SMS command interface shown in the device documentation).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set port 8888 as the destination port used by Plaspy for all devices.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Apply or save the configuration and send any required activation commands (for example enabling GPRS mode).
6. Restart the device if required by the manufacturer to apply network changes.
7. Validate that the device reports to Plaspy and appears in the platform with regular updates.

## Example Configuration Commands

The TZ-BC06 can be configured via SMS with the following public commands. These commands are presented in the order they are typically used. The examples use the device password 000000 as shown in the public command set.

- Set the operator APN. Replace [apn] with your operator APN. Optional fields [apnu] and [apnp] represent APN username and APN password if required by your operator.
```text
*000000,011,[apn],[apnu],[apnp]#
```

- Set the update interval to 60 seconds. The second parameter sets the interval in seconds and the third parameter may be used for validity or mode according to the device documentation.
```text
*000000,018,60,999#
```

- Set the GPRS server to the Plaspy server IP and port. This command points the device at Plaspy using the public server IP and port.
```text
*000000,015,0,54.85.159.138,8888#
```

- Activate GPRS mode so the device uses data reporting to the configured server.
```text
*000000,016,1#
```

Notes on placeholders and values
- [apn] is your mobile operator APN string. Replace with the APN required for data access.
- [apnu] is the APN username if your operator requires one. Leave blank if not required.
- [apnp] is the APN password if required by your operator. Leave blank if not required.
- The example commands include the device password 000000 as shown in the public command set. If your device uses a different password, replace 000000 with the correct device password.

## Configuration Notes

- Firmware and hardware revisions can change SMS command syntax or available parameters. Verify command syntax with the TZ-BC06 manufacturer documentation.
- SMS based configuration is a common method for this model; ensure your SMS messages are sent from a number the device accepts if number locking is enabled.
- Choose UDP or TCP based on your network reliability and carrier behavior; Plaspy supports both and will detect the protocol automatically.
- Plaspy uses the same port 8888 for all devices; point the tracker to that port when setting the server.
- Always confirm APN credentials and GPRS activation with your mobile operator before troubleshooting connectivity.

## Why Use Plaspy with This Configuration

Using Plaspy with the TZ-BC06 gives a straightforward path to receive and monitor device location and status reports on a shared, consistent server endpoint. With the public SMS commands above you can quickly point the tracker at Plaspy and validate reporting behavior for operational visibility and monitoring.

Learn more about Plaspy and how it handles multi device connectivity at https://www.plaspy.com. For device specific setup details firmware change notes and manufacturer guidance verify the latest information at the TZone website http://www.tzonedigital.com/
