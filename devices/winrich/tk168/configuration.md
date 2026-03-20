---
slug: /winrich/tk168/configuration
id: tk168-configuration
sidebar_label: Configuration
title: Winrich - TK168 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Winrich TK168 showing Plaspy server settings and SMS based configuration commands
keywords:
  - Winrich TK168 configuration
  - Winrich TK168 setup
  - TK168 Plaspy configuration
  - GPS tracker SMS setup
  - TK168 server configuration
  - GPRS tracker setup
  - vehicle tracking configuration
  - fleet tracking with Plaspy
  - Winrich tracker commands
  - tracking platform configuration
---

# Winrich - TK168 Configuration

This page documents the public configuration context for using the Winrich TK168 GPS tracker with Plaspy. It focuses on the practical server settings and the SMS based commands that are commonly used to point a TK168 to Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK168 supports SMS and GPRS configuration methods, and the examples below show the SMS commands that are publicly used to prepare a TK168 for use with Plaspy.

## Configuration Overview

The TK168 must be configured to send location and status data to the Plaspy server endpoint so the unit becomes visible in the Plaspy platform. Configuration normally includes setting the cellular APN, pointing the device to the Plaspy server address and port, and selecting the transport if required by the device.

- Set the device APN so the tracker can use GPRS to reach Plaspy
- Point the tracker to the Plaspy server domain or IP so reporting is directed correctly
- Set the reporting interval to balance timeliness and data usage
- Verify configuration and status using the device verification SMS commands
- Ensure the device is reachable and visible inside the Plaspy platform after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and handles protocol detection automatically, so the tracker only needs to be pointed to the domain or IP and the port.

## Typical Requirements Before Setup

- A charged and functioning TK168 unit with SIM installed and active data or SMS service
- Knowledge of the mobile operator APN settings for the SIM card to enter into the tracker
- Ability to send SMS messages to the device for SMS based configuration
- Access to the official manufacturer configuration method or documentation for the TK168
- A way to verify the tracker is online in Plaspy after configuration, such as the Plaspy platform view or status queries

## How This Tracker Connects to Plaspy

When configured, the TK168 uses GPRS to send position and status messages to Plaspy. The device is set to report to the Plaspy server endpoint and port so the platform can receive and display tracking information.

- The TK168 is configured to send data to d.plaspy.com or to 54.85.159.138
- Reporting is sent to port 8888 which is used by Plaspy for all devices
- Plaspy automatically detects the device protocol so no protocol selection is required on the platform side
- The device can be configured by SMS to set APN, server, and intervals as shown in the example commands
- Status and configuration can be checked from the device using verification commands before confirming visibility in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for TK168 or prepare to send SMS commands as documented by Winrich.
2. Set the device APN using the operator APN value for the SIM so the tracker can use GPRS.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the tracker configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the tracker and perform any recommended restart or power cycle.
6. Validate the device reports to Plaspy and confirm visibility on the Plaspy platform using the device status or check commands.

If you prefer SMS based configuration, follow the manufacturer SMS command set in the Example Configuration Commands section below.

## Example Configuration Commands

The TK168 can be configured by sending SMS commands to the device. The commands below are presented in the order that is commonly used during initial setup. If you choose to perform a factory reset first, that step is optional and should be used only when needed.

- Optional initial factory reset
```text
940#
```

- Set the time zone to UTC 0
```text
801#W0#
```

- Set the operator APN
```text
802#[apn]#[apnu]#[apnp]#
```
Notes about the APN placeholders
- [apn] is the operator APN name required for GPRS data
- [apnu] and [apnp] are optional APN username and password values and should be included only if your operator requires them

- Set the GPRS server to the Plaspy IP and port
```text
803#54.85.159.138#8888#
```
You can replace the IP with the domain if the device supports it:
```text
803#d.plaspy.com#8888#
```

- Set the update interval to 60 seconds
```text
730#60#
```

- Check current settings on the device
```text
886#
```

- Check device status
```text
902#
```

Send each SMS as a single message to the device phone number. Keep the order above when you want to perform a reset and then reconfigure APN, server, and reporting interval.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS syntax or supported commands for the TK168. Always verify command syntax against the device documentation.
- The TK168 supports SMS and GPRS configuration methods as shown by the SMS commands above. Use SMS when local access to the device is the preferred method.
- Choose UDP or TCP on the device only if it explicitly asks for a transport. Plaspy will auto detect the protocol on its side.
- APN credentials are operator specific. Use [apn] and include [apnu] or [apnp] only if the mobile provider requires username or password.
- Plaspy uses the same port 8888 for all devices so the only server-side values required are the domain or IP and the port shown above.

## Why Use Plaspy with This Configuration

Using the Winrich TK168 with Plaspy gives straightforward visibility into location and device status by pointing the tracker to a shared Plaspy server endpoint. For organizations needing fleet oversight or remote asset monitoring, the combination of GPRS reporting and centralized platform visibility simplifies operational monitoring and event tracking.

Learn more about Plaspy and how it can display TK168 data on the platform at https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and technical details verify the official Winrich documentation at http://www.winrichgroup.com/en/ as manufacturer setup methods and firmware behavior can change over time.
