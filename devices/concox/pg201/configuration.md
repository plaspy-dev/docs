---
slug: /concox/pg201/configuration
id: pg201-configuration
sidebar_label: Configuration
title: Concox - PG201 Configuration
sidebar_class_name: menu_item_tracker
description: Public technical guide to configure the Concox PG201 tracker for use with Plaspy using the shared Plaspy server settings
keywords:
  - Concox PG201 configuration
  - Concox PG201 setup
  - Concox PG201 server configuration
  - Concox PG201 Plaspy
  - PG201 GPS tracker setup
  - PG201 SMS configuration
  - PG201 APN setup
  - personal tracker configuration
  - workforce tracking PG201
  - GPS platform integration
---

# Concox - PG201 Configuration

This page documents the public configuration context for using the Concox PG201 personal GPS tracker with Plaspy. It focuses on the practical, public settings required so the device can report to the Plaspy cloud, how those settings are applied, and what to check to confirm the tracker appears in Plaspy. Where applicable this guide includes the SMS commands published by the manufacturer for basic setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The PG201 supports SMS and GPRS configuration workflows; this page explains the public commands and procedures commonly used to point the device at Plaspy and validate connectivity.

## Configuration Overview

Configuring the PG201 for Plaspy prepares the device to send GNSS and status data to a centralized Plaspy endpoint so locations, alerts and telemetry appear on the platform. The configuration process normally sets the APN, the GPRS server endpoint and port, reporting intervals, and the GPRS mode so the tracker streams data to Plaspy reliably.

- Set APN and optional APN username/password so the tracker can establish a GPRS data session.
- Configure the GPRS server to point the device at Plaspy using the provided domain or IP and the shared port.
- Define reporting intervals (timers) to balance update frequency and battery life.
- Enable GPRS mode so the device actively pushes reports to the Plaspy endpoint.
- Verify settings and test reporting so the device becomes visible in Plaspy maps and alert lists.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the PG201. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A charged PG201 device with power and basic operation confirmed.
- An active GSM SIM card with data enabled and SMS capability installed and registered on the network.
- APN information from your mobile operator (APN name and optional username and password).
- Access to a method for sending SMS commands to the device or the manufacturer configuration tool as documented by Concox.
- Coverage in a location with GSM/GPRS service for the device to connect.
- Access to Plaspy to validate that the device appears and is reporting after configuration.

## How This Tracker Connects to Plaspy

The PG201 sends GNSS and device status messages over GSM GPRS to the Plaspy cloud. Once configured with the Plaspy server address and port, the tracker establishes a data session and periodically transmits position and alert telemetry so Plaspy can display location and trigger notifications.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Location updates, SOS alerts and motion events are sent from the device to Plaspy for mapping and notifications.
- Timed reporting and instant report modes allow configurable update frequency for visibility and battery management.
- Plaspy receives incoming connections on the same port for all devices and determines the protocol automatically to process messages.
- Successful GPRS connection and server reachability are required for live reporting and alert delivery.

## Common Configuration Workflow

1. Access the official Concox configuration method for the PG201 (SMS commands, vendor tool, or documented process from the manufacturer).
2. Prepare your SIM and confirm the operator APN details you will send to the device.
3. Enter the Plaspy server address manually as d.plaspy.com or 54.85.159.138 in the device configuration.
4. Set the server port to 8888 and choose UDP or TCP if the PG201 requires a transport selection.
5. Configure reporting intervals (for example a 60 second timer) and enable GPRS mode on the device.
6. Apply or save the configuration and restart the device if the manufacturer instructions require it.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or device list.

## Example Configuration Commands

The PG201 supports SMS-based configuration using the following published commands. Send these commands as SMS messages to the device phone number in the order shown when performing an initial setup. Commands preserve placeholders where required.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN (replace [apn], [apnu], [apnp] as needed)
```text
APN,[apn]# 
```
If your operator requires username and password include them as:
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator APN name. [apnu] and [apnp] are optional APN username and password fields.

- Set the GPRS server to Plaspy using the domain (UDP or TCP on port 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two forms shown)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS parameters and verify settings
```text
GPRSSET#
```

Use these SMS commands according to Concox guidance. Replace placeholders and choose either the domain or IP form of the SERVER command depending on your preference or the tracker behavior.

## Configuration Notes

- SMS based setup is publicly documented for the PG201; you can use SMS to set APN, server, timers and GPRS mode as shown above.
- Preserve and replace placeholder values such as [apn], [apnu] and [apnp] with your operator credentials. Username and password fields are optional depending on the mobile operator.
- Choose UDP or TCP transport when prompted by the device; Plaspy accepts either on port 8888 and will auto-detect the incoming protocol.
- Firmware versions, hardware revisions and regional firmware may change command behavior or available features; consult Concox documentation if a command is rejected.
- Use GPRSSET# to verify configured server, APN and timer settings before relying on live reporting.

## Why Use Plaspy with This Configuration

Configuring the PG201 to report to Plaspy gives organizations centralized visibility into personnel location, SOS alerts and motion events using a consistent server endpoint and port. The PG201’s compact form factor, SOS and scheduled reporting modes make it suitable for workforce safety and basic operational monitoring workflows when integrated with Plaspy.

Learn more about Plaspy and how the platform handles device telemetry and alerts at https://www.plaspy.com. For the latest device specific setup details, firmware notes and manufacturer instructions verify the official Concox documentation at https://www.iconcox.com/ since manufacturer procedures and firmware behavior can change over time.
