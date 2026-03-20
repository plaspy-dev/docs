---
slug: /istartek/vt150_l/configuration
id: vt150_l-configuration
sidebar_label: Configuration
title: iStartek - VT150-L Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek VT150 L tracker configuration with Plaspy server settings and SMS commands
keywords:
  - iStartek VT150 L configuration
  - VT150 L setup
  - iStartek Plaspy configuration
  - VT150 L server configuration
  - GPS tracker setup guide
  - Plaspy server settings
  - VT150 L SMS commands
  - motorcycle tracker configuration
  - telematics platform integration
  - vehicle tracking setup
---

# iStartek - VT150-L Configuration

This page documents the public configuration context for using the iStartek VT150-L tracker with the Plaspy platform. It summarizes the practical steps and public commands used to prepare the device for reporting to Plaspy, and consolidates the shared server settings that Plaspy requires. The content below uses publicly available configuration snippets and the device description as the basis for guidance; it is intended for installers, technicians, and fleet administrators preparing the VT150-L for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The VT150-L supports SMS based commands and dual server configuration, so this page includes the common SMS commands and workflow used to point the device to Plaspy and verify connectivity.

## Configuration Overview

The configuration process prepares the VT150-L to communicate reliably with Plaspy, enabling live tracking, event reporting, and remote management. Public SMS commands can set the APN, server endpoint, reporting interval, timezone, and allow verification of parameters.

- Point the device to the Plaspy server endpoint using the public SERVER commands.
- Configure the cellular APN so the tracker can establish a data connection for GPRS or 4G reporting.
- Set reporting intervals and time zone to match operational requirements.
- Verify settings and confirm the device is reporting correctly to Plaspy using the provided verification command.
- Optionally reset to factory defaults before mass deployment for a consistent baseline.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered VT150-L with access to the device SMS number or manufacturer configuration tool
- A charged or vehicle power supply and, if applicable, access to the device without blocking antennas
- An active Nano SIM with an appropriate data plan and the operator APN details for GPRS or LTE connectivity
- Knowledge of the installer or vendor tools used for configuration, or the ability to send SMS configuration commands
- Access to the manufacturer's documentation for firmware specific behaviors and any model options

## How This Tracker Connects to Plaspy

The VT150-L reports position, status, and events to Plaspy over cellular data networks. The device is configured to use Plaspy's shared server endpoint and port so the platform can ingest telemetry, events, and location updates for live monitoring and historical reporting.

- The tracker establishes a GPRS or 4G link using the configured APN and sends messages to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device configuration; choose the transport supported by the installation or firmware
- Plaspy automatically detects the tracker protocol so messages sent to port 8888 are parsed appropriately by the platform
- Event triggered and periodic reports are delivered to Plaspy for mapping, alerts, and fleet analytics
- Dual server configuration on the device can provide a fallback path while FOTA and remote commands are managed through Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare SMS access to the device phone number.
2. Enter the Plaspy server host either as d.plaspy.com or as the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport on the device if a transport selection is required.
5. Configure the APN for the installed SIM and adjust timezone and reporting intervals as needed.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply new network settings.
7. Validate that the device reports to Plaspy by checking telemetry arrival on the platform and by using the device verification command.

## Example Configuration Commands

To set the VT150-L using SMS commands, send the following messages in order. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values where required. The factory reset is optional and recommended only when preparing devices to a known baseline.

1. Optional factory reset to return the device to default settings
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN. Replace [apn] with your operator APN. If your operator requires username or password include [apnu] and [apnp] respectively.
```
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/ if }}#
```
(If your tool or SMS client does not support template syntax, send either APN,apn# or APN,apn,username,password# as required.)

4. Set the GPRS server to point to Plaspy by domain
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server to point to Plaspy by IP address
```
SERVER,0,54.85.159.138,8888#
```

6. Set the position update interval to 60 seconds
```
TIMER,60#
```

7. Verify current parameters on the device
```
PARAM#
```

Note: Keep the command order where indicated to ensure APN and server settings are applied before verifying connectivity.

## Configuration Notes

- Firmware variations and hardware revisions can change command syntax or available parameters; always confirm with the device firmware release notes.
- The VT150-L supports SMS based configuration as shown above; some deployments may prefer the vendor's configuration tool or USB interface when available.
- Choose UDP for lower overhead and TCP if ordered delivery and session persistence are required; Plaspy accepts either and will auto detect the protocol.
- Use the SERVER command with either the domain d.plaspy.com or the IP 54.85.159.138; both must use port 8888 which Plaspy uses for all devices.
- When deploying at scale, consider provisioning APN and server settings before installation and verify connectivity with the PARAM# command.

## Why Use Plaspy with This Configuration

Using the VT150-L with Plaspy gives organizations accurate real time tracking, event reporting, and remote control capabilities for motorcycles and light vehicles. The device's multi constellation GNSS, GPS plus GSM base station positioning, and rugged form factor combine with Plaspy's centralized ingestion and automatic protocol detection to deliver operational visibility and fast alerting without complex per device server configuration.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer details verify information on the iStartek website https://istartek.com/.
