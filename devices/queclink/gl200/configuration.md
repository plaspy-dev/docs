---
slug: /queclink/gl200/configuration
id: gl200-configuration
sidebar_label: Configuration
title: QuecLink - GL200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL200 with Plaspy including server settings SMS commands and a practical setup checklist
keywords:
  - QuecLink GL200 configuration
  - QuecLink GL200 setup
  - GL200 server configuration
  - GL200 Plaspy setup
  - QuecLink tracker configuration
  - QuecLink GL200 SMS commands
  - GL200 APN setup
  - Plaspy GPS tracker configuration
  - QuecLink GPS setup
  - GL200 tracking software configuration
---

# QuecLink - GL200 Configuration

This page documents the public configuration context for using the QuecLink GL200 tracker with Plaspy. It summarizes the practical server settings Plaspy uses, the common SMS commands published for GL200 configuration, and the typical steps you will follow to prepare the device for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GL200 often supports SMS-based configuration; this page includes the publicly available SMS command examples and explains how those commands map to the Plaspy server settings and a standard configuration workflow.

## Configuration Overview

Configuring the GL200 for Plaspy prepares the device to communicate reliably with Plaspy servers and ensures location and event data are visible in the Plaspy dashboard. The public configuration flow frequently uses SMS commands to set APN values, server endpoints and reporting intervals; the commands below are a documented example and should be adapted to your SIM and environment.

- Set the device to report to Plaspy's shared server endpoint so the unit appears in the Plaspy platform.
- Configure the mobile operator APN and credentials so the device can establish GPRS data sessions.
- Set the device reporting interval to match your monitoring needs and data plan.
- Validate transport selection (UDP or TCP) and the configured port so Plaspy receives device packets.
- Enable relevant inputs or alerts such as SOS to ensure events reach Plaspy.
- Use manufacturer tools or SMS commands to save and apply settings, then confirm successful reporting to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered GL200 unit with SMS and GPRS capability enabled for configuration by SMS commands.
- An active SIM card with data allowance and the carrier APN values ready for entry.
- Access to the device's SMS configuration method or the official QuecLink configuration tool and documentation.
- Knowledge of the device password used in SMS commands; public examples use the default password queclink.
- A plan for testing connectivity and validating that the device reports to the Plaspy server after configuration.
- A note of the preferred transport (UDP or TCP) for your deployment if the device requires explicit selection.

## How This Tracker Connects to Plaspy

The GL200 is configured to send GPRS data to Plaspy's shared server endpoint and port so Plaspy can ingest the device's location and event reports. Once the device is pointed at d.plaspy.com (or the Plaspy IP) on port 8888 and saved, Plaspy will automatically detect the tracker protocol and start processing messages.

- Device sends periodic position updates and event messages to d.plaspy.com on port 8888.
- Plaspy receives packets over UDP or TCP depending on the device transport selection.
- Automatic protocol detection in Plaspy maps incoming messages to the correct tracker protocol.
- Events like SOS or input triggers reported by the device are forwarded to Plaspy for alerting and history.
- Once reporting is validated, the unit appears in Plaspy for live tracking and historical route review.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software, or prepare to send SMS configuration commands per the manufacturer guidance.
2. Enter the Plaspy server address either as domain d.plaspy.com or IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP on the device if it requires explicit transport selection.
5. Configure APN, username and password for the installed SIM so the device can connect over GPRS.
6. Apply or save the configuration on the device and restart the unit if required by the device documentation.
7. Validate that the device reports to Plaspy by checking device activity in the Plaspy platform and confirming location updates and events.
8. If reporting does not appear, review SMS command responses, check SIM data connectivity, and confirm correct APN and server settings.

## Example Configuration Commands

The GL200 can be configured by sending SMS commands to the device. The following commands are a documented public example. The sample commands use the device password queclink as the SMS command password. The factory restore command is commonly used as an initial setup step when needed; treat it as optional and only use it when a factory restore is required.

1. Restore factory settings (optional initial step)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the carrier APN name
- {{apnu}} is the APN username if required by the carrier
- {{apnp}} is the APN password if required by the carrier

4. Set the GPRS server to report to Plaspy (domain and IP included)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command shows both d.plaspy.com and the Plaspy IP 54.85.159.138 and sets port 8888; Plaspy uses the same port for all devices and will automatically detect the tracker protocol.

5. Set the reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification (input 2)
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: Send each command as an individual SMS message to the device following QuecLink's SMS command formatting rules. Keep the default password queclink if the device is still at factory defaults or replace it with your configured device password if it has been changed.

## Configuration Notes

- SMS based configuration is a commonly used method for GL200; confirm with QuecLink documentation whether firmware revisions change command syntax.
- Choose UDP or TCP based on your network considerations; Plaspy supports both and will auto detect protocol, but device-side choice affects packet delivery characteristics.
- Always confirm APN, username and password with your mobile operator before sending APN commands.
- Applying a factory restore is an optional step and will remove prior custom settings; use only when necessary.
- Because firmware and tools can change, keep a copy of any applied commands and confirm behavior after a reboot.

## Why Use Plaspy with This Configuration

Pointing the QuecLink GL200 to Plaspy using the shared server settings provides a straightforward path to centralized visibility, event management, and historical route analysis. For organizations needing discreet asset protection, anti-theft recovery or operational tracking, configuring the GL200 to report to d.plaspy.com on port 8888 lets Plaspy ingest device reports and make them available for monitoring and incident response.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer details can change over time, so verify the latest instructions and command syntax on the QuecLink website https://www.queclink.com/ before applying settings in production.
