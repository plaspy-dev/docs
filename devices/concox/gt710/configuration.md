---
slug: /concox/gt710/configuration
id: gt710-configuration
sidebar_label: Configuration
title: Concox - GT710 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox GT710 showing Plaspy server settings and example SMS commands for integration
keywords:
  - Concox GT710 configuration
  - Concox GT710 setup
  - GT710 server configuration
  - GT710 SMS commands
  - Plaspy tracker configuration
  - Plaspy server setup
  - GT710 GPS tracker setup
  - asset tracker configuration
  - tracking platform configuration
  - Concox GT710 integration
---

# Concox - GT710 Configuration

This page describes the public configuration context for using the Concox GT710 asset GPS tracker with the Plaspy platform. It collects the practical, publicly available steps and SMS commands commonly used to point a GT710 at Plaspy and validate connectivity so devices can be visible in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware level, hardware revision, installation type, and vendor tools, so use this guide as a practical reference and confirm any device specific details with the manufacturer documentation.

## Configuration Overview

This configuration process prepares a GT710 to communicate with Plaspy by setting the carrier APN, the device server endpoint, and the reporting interval. The GT710 supports configuration by SMS commands, and several public commands are commonly used to set the device into GPRS reporting mode and verify the settings.

- Configure the mobile APN so the device can establish GPRS data sessions.
- Set the GPRS server to the Plaspy endpoint using d.plaspy.com or the Plaspy server IP on port 8888.
- Choose the transport mode UDP or TCP if required by the device, and enable GPRS reporting.
- Set the periodic reporting interval using the TIMER command to control update frequency.
- Verify settings using the device verification command so the tracker reports to Plaspy.
- Use the optional factory reset during initial setup only when necessary.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring a GT710 for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and will detect the protocol automatically, so the device can be pointed to the Plaspy domain or IP on port 8888.

## Typical Requirements Before Setup

- A Concox GT710 with power and an active battery or external power supply.
- An active SIM card with data service and the correct APN for the mobile operator.
- Ability to send SMS messages to the tracker for SMS based configuration.
- The device must be reachable and able to establish a GPRS session.
- Knowledge of the operator APN and any APN username or password if required.
- Access to manufacturer configuration instructions or vendor tools for reference.

## How This Tracker Connects to Plaspy

The GT710 is configured to report to the shared Plaspy server endpoint and port. Once the APN and server settings are applied the tracker establishes a GPRS connection and sends periodic updates to Plaspy for visibility and monitoring.

- The device uses the configured APN to establish a GPRS data session.
- Tracker reporting is directed to d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure the device to use UDP or TCP transport if the device requires a choice.
- Reporting cadence is controlled by the TIMER setting so Plaspy receives regular location updates.
- Plaspy automatically detects the tracker protocol so the same port works across supported devices.
- Verify and inspect reported parameters using the device verification command.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands documented by Concox or the vendor tool for the GT710.
2. Set the operator APN using the APN command with your operator values.
3. Enter the Plaspy server as d.plaspy.com or as the IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Set the reporting interval with the TIMER command and enable GPRS mode.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the tracker reports to Plaspy and check device visibility in the platform.

## Example Configuration Commands

The GT710 supports SMS based configuration. The following public commands are presented in the recommended order. Send each command as an SMS to the device number. Keep placeholders as shown and replace them with your carrier values.

- Optional initial factory reset (use only if you need to restore defaults):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your APN. If your APN requires username or password, include [apnu] and [apnp] as provided by your operator:
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: Use the APN form appropriate to your device. If no username and password are required, send only APN,[apn]#.

- Set the GPRS server to Plaspy by domain on port 8888:
```
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to the Plaspy IP on port 8888:
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds. The GT710 accepts a single interval or a pair depending on firmware:
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode:
```
GPRSON,1#
```

- Check current GPRS parameters and verify settings:
```
GPRSSET#
```

These commands reflect the public SMS configuration sequence. Replace placeholder values where applicable and send commands in the order shown for initial setup.

## Configuration Notes

- SMS based configuration is supported and is a common public method for GT710 setup. Use the official command format from the vendor when available.
- The APN command uses placeholders [apn], [apnu], and [apnp]. [apn] is the operator APN string, [apnu] is the APN username, and [apnp] is the APN password. Only include username and password when required by your operator.
- Some firmware versions accept alternative TIMER formats. Use the format that matches your device firmware.
- You can set the server by domain or IP. Both d.plaspy.com and 54.85.159.138 on port 8888 are accepted options for Plaspy.
- Choose UDP or TCP if the tracker requires an explicit transport selection. Plaspy will detect the device protocol automatically.

## Why Use Plaspy with This Configuration

Using the Concox GT710 with Plaspy provides a straightforward way to add reliable asset tracking into a single monitoring platform. Configuring the GT710 to report to Plaspy using the shared server settings and a controlled reporting interval helps organizations maintain visibility over distributed assets with minimal per device configuration.

Learn more about Plaspy and how the platform can be used for fleet and asset tracking at https://www.plaspy.com. For device specific instructions, firmware notes, and the latest configuration details for the Concox GT710, verify current information with the manufacturer at https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so always confirm device behavior with official Concox documentation.
