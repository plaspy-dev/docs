---
slug: /concox/ll301/configuration
id: ll301-configuration
sidebar_label: Configuration
title: Concox - LL301 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox LL301 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Concox LL301 configuration
  - LL301 Plaspy setup
  - Concox tracker configuration
  - LL301 server configuration
  - LL301 SMS commands
  - Plaspy device setup
  - GPS tracker configuration guide
  - LL301 APN settings
  - asset tracker setup
  - GPS tracking platform configuration
---

# Concox - LL301 Configuration

This page covers the public configuration context for using the Concox LL301 tracker with Plaspy. It explains the shared Plaspy server settings and provides practical, manufacturer‑published SMS commands and workflow guidance that are commonly used to point LL301 devices to Plaspy for live tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tooling. The LL301 supports SMS based configuration (and Bluetooth configuration via the vendor app), and this page focuses on the public SMS commands and the required server values to connect the device to Plaspy.

## Configuration Overview

Configuring an LL301 for Plaspy prepares the device to send GNSS fixes, telemetry and event alerts to Plaspy using the platform's shared server endpoint and port. The example SMS commands below are the public commands provided by the manufacturer and show the typical parameters you must set so the tracker reports correctly into Plaspy.

- Point the tracker to Plaspy using the shared server host or IP and the common port used by Plaspy.
- Configure the device APN and GPRS settings so the tracker can open a data connection.
- Set reporting intervals and enable GPRS reporting so location updates reach Plaspy at the desired frequency.
- Validate configuration and view the device in Plaspy to confirm live reporting and event visibility.
- Use manufacturer verification commands to check current GPRS and server settings before and after changes.

## Plaspy Server Settings

- Server domain d.plaspy.com for hostname based configuration
- Server IP 54.85.159.138 as an alternative to the hostname
- Port 8888 which is used by all devices in Plaspy
- Transport support for UDP or TCP depending on the device transport option
- Plaspy automatically detects the tracker protocol so the platform accepts connections and interprets the device protocol automatically

## Typical Requirements Before Setup

- A charged LL301 with an active nano SIM installed and data enabled for the operator APN
- Access to send SMS messages from a management phone number to the tracker for SMS based configuration
- The operator APN information (APN name and optional username and password) for GPRS data
- Knowledge of whether you will configure the tracker using SMS or the vendor Bluetooth app; SMS commands below reflect the public SMS method
- A momentary ability to reboot or cycle power on the device after applying new network settings if required
- Access to Plaspy to confirm the device appears and reports once configuration is applied

## How This Tracker Connects to Plaspy

The LL301 is configured to report GNSS positions, telemetry and events to Plaspy by sending data to the shared Plaspy server endpoint and port. Once the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 and GPRS is enabled, Plaspy receives and automatically detects the tracker protocol to correctly parse location and event data.

- The device opens a GPRS session using the configured APN and then establishes data transport to d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be UDP or TCP based on the tracker setting; choose the transport required by your deployment
- Plaspy automatically detects the LL301 protocol when the device connects to the shared Plaspy port
- Location fixes and event alerts (for example tamper, vibration, low battery) are sent to Plaspy for real time monitoring
- Successful configuration makes the device visible in Plaspy for live tracking and historical playback

## Common Configuration Workflow

1. Access the official Concox configuration method you will use, for example SMS commands from a management phone or the vendor Bluetooth configuration tool.
2. Enter the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138 in the device server configuration.
3. Set port 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport on the device if the tracker requires explicit transport selection.
5. Apply or save the configuration and, if the device documentation recommends it, restart or cycle device power to ensure settings take effect.
6. Validate that the device reports to Plaspy by checking the tracker in the Plaspy platform or by using the device verification SMS command.
7. Monitor the device in Plaspy to confirm location updates, alerts, and telemetry are arriving at the expected interval.

## Example Configuration Commands

The LL301 supports SMS based configuration with the following public commands. Send each line as an SMS to the tracker IMEI number or management phone interface exactly as shown. Preserve placeholders when present.

- Optional initial reset to factory defaults (use only if you need to clear prior settings):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your operator values:
```
APN,{{apn}}#
```
If your operator requires APN username and password include them as:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation of placeholders:
- {{apn}} = the APN name provided by your mobile operator
- {{apnu}} = optional APN username if required
- {{apnp}} = optional APN password if required

- Set the GPRS server to use the Plaspy hostname and port:
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP address:
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two common syntaxes shown):
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode so the device uses cellular data reporting:
```
GPRSON,1#
```

- Verify current GPRS and server parameters:
```
GPRSSET#
```

Follow the commands in order where appropriate: typically set APN, then server, then timer, then enable GPRS. Use the verification command to confirm parameters after configuration.

## Configuration Notes

- SMS based setup is publicly documented for LL301; use a trusted phone number and confirm SMS delivery before proceeding.
- Firmware revisions and hardware variants can change command support or syntax; confirm exact syntax if a command does not behave as expected.
- Choose UDP or TCP according to your transport preference; Plaspy supports both and will detect the device protocol automatically on port 8888.
- Plaspy uses the same port for all supported devices; this simplifies server configuration when deploying mixed fleets.
- When using the hostname d.plaspy.com the device will resolve DNS; if DNS is unavailable in your environment, use the Plaspy IP alternative shown in the commands.

## Why Use Plaspy with This Configuration

Using the LL301 with Plaspy provides a practical, low maintenance tracking solution for organizations needing long battery life, event alerts, and centralized visibility. Pointing the tracker to Plaspy's shared server and port makes it straightforward to consolidate location and telemetry data into one platform for real time monitoring, historical analysis, and alerting.

Learn more about Plaspy and how it handles device connectivity and fleet monitoring at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance always verify details on the Concox website at https://www.iconcox.com/ since device behavior and configuration methods can change over time.
