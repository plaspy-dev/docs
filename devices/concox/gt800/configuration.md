---
slug: /concox/gt800/configuration
id: gt800-configuration
sidebar_label: Configuration
title: Concox - GT800 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox GT800 showing Plaspy server settings, SMS configuration commands, and steps to connect the tracker to Plaspy
keywords:
  - Concox GT800 configuration
  - Concox GT800 setup
  - Concox GT800 Plaspy
  - GT800 server configuration
  - GT800 GPS setup
  - Concox tracker configuration
  - vehicle GPS configuration
  - GPS tracker setup
  - fleet tracking configuration
  - Plaspy tracker integration
---

# Concox - GT800 Configuration

This page covers the public configuration context for using the Concox GT800 vehicle GPS tracker with Plaspy. It compiles the practical server settings and the SMS setup commands that are commonly used to point GT800 units to Plaspy so the device can report location and status to the platform.

Plaspy uses a shared server endpoint and the same listening port across supported devices and will automatically detect the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public commands and settings that are commonly applicable when integrating the GT800 with Plaspy.

## Configuration Overview

Configuring the GT800 for use with Plaspy prepares the device to communicate reliably with the Plaspy platform and enables location visibility, reporting, and monitoring. The public configuration flow typically sets the device APN, GPRS server, reporting interval, and enables GPRS mode so the tracker can send data to Plaspy.

- Set the mobile data APN so the GT800 can establish a GPRS connection for reporting.
- Configure the device server to d.plaspy.com or the Plaspy server IP so telemetry is sent to Plaspy.
- Use the standard Plaspy listening port so the device can reach the shared platform endpoint.
- Enable and verify GPRS reporting and set a reporting interval appropriate for your use case.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GT800:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GT800 and access to a phone or tool able to send configuration SMS messages if using SMS setup.
- A valid SIM card with mobile data (GPRS) enabled and any required APN credentials from the mobile operator.
- Access to the Concox GT800 command reference or manufacturer documentation for your firmware revision.
- Knowledge of the APN, APN username, and APN password provided by your mobile operator if required by the SIM.
- A Plaspy account or access to the Plaspy platform to verify that the device is reporting after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GT800 uses the device mobile data connection to send location and status updates to the shared Plaspy server endpoint and port. Plaspy receives device messages and associates them with the appropriate account or device entry so data is visible in the platform.

- The tracker is pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- Device messages are sent to port 8888 on the Plaspy endpoint.
- The GT800 can use either TCP or UDP transport depending on configuration; Plaspy supports both and detects the protocol automatically.
- Reporting frequency is controlled by the device timer setting and can be adjusted (for example the TIMER command can set 60 second intervals).
- After successful configuration the device should appear and send updates to Plaspy for tracking and event monitoring.

## Common Configuration Workflow

1. Access the official Concox configuration method for your GT800 unit (SMS commands or the manufacturer's recommended software).
2. Configure the device APN using the APN command, supplying [apn] and optional [apnu] and [apnp] placeholders for APN username and password.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose the transport type (UDP or TCP) if the device requires an explicit selection.
5. Enable GPRS mode and set the reporting timer appropriate for your monitoring needs.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy and appears in your account or device list.

## Example Configuration Commands

The GT800 can be configured by sending the following SMS commands in order. These commands are extracted from public Concox GT800 configuration commands and are commonly used to point devices to Plaspy.

- Optional factory reset (use only if you need to restore defaults before configuration):

```
FACTORY#
```

- Set the time zone to UTC-0:

```
GMT,E,0#
```

- Set the operator APN. Replace placeholders with your operator values. [apn] is required, while [apnu] and [apnp] are optional and represent the APN username and APN password:

```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to use the Plaspy domain and port (example using domain and UDP/TCP selection field):

```
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using the Plaspy IP address:

```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two common variants):

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

- Verify current GPRS and server settings:

```
GPRSSET#
```

Notes on placeholders:
- [apn] = your mobile operator APN value.
- [apnu] = APN username if required by the operator.
- [apnp] = APN password if required by the operator.

Send these commands as SMS messages to the GT800 in the order shown when performing initial setup. Use the factory reset command only when appropriate.

## Configuration Notes

- Concox firmware revisions or regional variants may parse commands differently; confirm the exact syntax with the manufacturer documentation for your GT800 unit.
- The GT800 supports SMS based configuration (public commands shown above) which is useful for in-field setup without direct access to a configuration tool.
- Choose UDP or TCP based on your network preferences and device behavior; Plaspy supports both and will detect the correct protocol automatically.
- Keep APN credentials secure and confirm they match the SIM operator requirements before enabling GPRS reporting.
- All devices in Plaspy use port 8888 by default for communication to the shared Plaspy endpoint.

## Why Use Plaspy with This Configuration

Using the GT800 with Plaspy provides a practical path to bring vehicle location, status, and event reporting into a single tracking platform. Pointing the GT800 to the Plaspy server endpoint allows organizations to monitor fleets, respond to events, and maintain operational visibility without needing device-specific backend changes.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific configuration methods and firmware details for Concox products, verify current information at the manufacturer website https://www.iconcox.com/ as specifications and setup steps can change over time.
