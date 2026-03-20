---
slug: /concox/vg102/configuration
id: vg102-configuration
sidebar_label: Configuration
title: Concox - VG102 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox VG102 tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - Concox VG102 configuration
  - VG102 setup
  - Concox VG102 server configuration
  - Plaspy tracker setup
  - motorcycle GPS tracker configuration
  - VG102 SMS commands
  - GPRS server settings
  - GPS tracker integration
  - vehicle tracking setup
  - Concox tracker Plaspy
---

# Concox - VG102 Configuration

This page documents the public configuration context for using the Concox VG102 tracker with Plaspy. It focuses on the practical server settings and the common SMS commands provided by the manufacturer that prepare the device to send location and event data into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where available, this page includes the manufacturer SMS commands and practical guidance to help you register and verify the VG102 with Plaspy.

## Configuration Overview

The configuration process prepares the VG102 to communicate reliably with Plaspy and ensures the device reports location and alerts to the central platform. Typical setup uses the device's SMS or GPRS configuration commands to point the tracker at Plaspy and set reporting intervals.

- Configure the device to use Plaspy server endpoint so telemetry reaches the platform.
- Set the operator APN and enable GPRS so the tracker can use mobile data.
- Choose UDP or TCP transport and set the shared Plaspy port used for all devices.
- Set reporting intervals such as periodic position updates to meet monitoring requirements.
- Use verification commands to confirm the tracker is using the Plaspy server and reporting correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A working SIM card with mobile data enabled and the APN for the operator available
- Access to the VG102 configuration method supported by your unit such as SMS commands or the manufacturer tool
- Device powered and installed or temporarily powered for configuration
- Knowledge of the operator APN and optional APN username or password if required by the carrier
- Ability to send and receive SMS to the device for SMS based configuration and verification
- Familiarity with Plaspy account access so you can validate device visibility after configuration

## How This Tracker Connects to Plaspy

When configured, the VG102 sends GNSS position, event alerts, and device status to the Plaspy server endpoint and port. Plaspy normalizes incoming messages and presents them in dashboards, history views, and alerting rules.

- The tracker reports to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138
- Data is sent to port 8888 which Plaspy uses for all supported devices
- Transport can be UDP or TCP depending on device configuration and network conditions
- Plaspy automatically detects the tracker protocol so minimal per device protocol selection is required
- Reported events and telemetry appear in Plaspy for visibility, alerting, and remote control actions

## Common Configuration Workflow

1. Access the official Concox configuration method for your VG102 such as SMS commands documented by Concox or the vendor configuration tool.
2. Set the device APN using the operator APN values so GPRS data can be used.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and enable GPRS or data mode as required.
6. Restart the tracker if the manufacturer instructions indicate a reboot is required.
7. Validate that the device reports to Plaspy by checking device status in Plaspy and using the device verification command or GPRS status check.

## Example Configuration Commands

To set the VG102 tracker using SMS, send the following commands in order. These are the public SMS commands provided by the manufacturer. Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with your operator APN values when sending.

- Optional initial factory reset when needed
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]#
```
If your APN requires username and password, include them as placeholders
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to use the Plaspy domain and port (UDP or TCP can be used on port 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Alternate interval format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS parameters on the device
```text
GPRSSET#
```

Notes on placeholders
- [apn] is the operator APN domain such as internet or the operator specific APN.
- [apnu] and [apnp] are optional APN username and password fields when required by the mobile operator.

## Configuration Notes

- The SMS based commands above are the public commands provided for VG102 configuration; some installers prefer the manufacturer tool or a PC configurator when available.
- Firmware revisions and hardware revisions can change available commands or the exact command syntax; consult official Concox documentation if a command does not behave as expected.
- Choose UDP or TCP based on network reliability and operator recommendations. Plaspy accepts either transport on the shared port 8888 and auto detects the protocol.
- All devices in Plaspy use the same port; you do not need a device specific port assignment to reach Plaspy.
- Use the verification command GPRSSET# after configuration to confirm APN, server, and timer values are applied.

## Why Use Plaspy with This Configuration

Using the Concox VG102 with Plaspy provides motorcycle focused tracking and event reporting in a centralized fleet management platform. The VG102 feeds GNSS position and alert data into Plaspy so operators can monitor location, receive tamper or tip over alerts, and apply rule based workflows such as remote immobilization when required.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify the official Concox documentation at https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
