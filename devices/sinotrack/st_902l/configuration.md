---
slug: /sinotrack/st_902l/configuration
id: st_902l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902L Configuration
sidebar_class_name: menu_item_tracker
description: Configure the SinoTrack ST 902L to send location and alarm data to Plaspy using SMS or manufacturer tools with shared Plaspy server settings
keywords:
  - SinoTrack ST-902L configuration
  - ST-902L setup Plaspy
  - SinoTrack OBD II tracker configuration
  - ST-902L server configuration
  - ST-902L APN SMS setup
  - SinoTrack GPS tracker Plaspy
  - ST-902L GPRS configuration
  - Plaspy tracker setup
  - vehicle tracking ST-902L
  - ST-902L SMS commands
---

# SinoTrack - ST-902L Configuration

This page documents the public configuration information needed to point a SinoTrack ST-902L tracker at Plaspy for real time tracking. It focuses on the practical server and SMS commands that are commonly used to prepare an ST-902L for use with Plaspy and explains what you should check before registration on the platform.

Plaspy uses a single shared ingestion endpoint and port for supported trackers and automatically detects the tracker protocol when data arrives. Manufacturer setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and steps below as the public process rather than an exhaustive manufacturer manual.

## Configuration Overview

The ST-902L must be configured to use a valid cellular APN and to forward its GPRS traffic to Plaspy. Configuration commonly uses SMS commands or the manufacturer’s provisioning tools and aims to get the device reporting reliably to Plaspy for visibility in fleet dashboards.

- Provision the device with a local data SIM and correct APN credentials.
- Configure the tracker’s GPRS server to point to Plaspy so position and alarm packets are forwarded.
- Validate the device ID and settings with the device RCONF response before registering the unit in Plaspy.
- Set reporting intervals and operational mode so the tracker sends updates at the desired frequency.
- Confirm the device is visible and reporting in Plaspy after applying settings.

## Plaspy Server Settings

Configure the ST-902L to report to Plaspy using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and that the device may be configured using either UDP or TCP on port 8888.

## Typical Requirements Before Setup

- Access to the vehicle OBD II port for installation and power from the vehicle.
- A working local data SIM card with active data and correct APN credentials for the mobile operator.
- Ability to send SMS messages to the tracker for SMS based configuration or access to the manufacturer’s provisioning tools.
- Power on the device and ensure it has a GNSS fix and cellular connectivity for initial validation.
- A Plaspy account or organizational access where you will register the device once it is reporting.

## How This Tracker Connects to Plaspy

The ST-902L sends location and event data over cellular networks to the configured server endpoint and port, where Plaspy receives and processes the packets. Once directed at Plaspy, the device becomes visible in the platform and can deliver real time position updates and alarms.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Position and event packets are forwarded over GPRS/4G to Plaspy’s ingestion endpoint.
- Plaspy performs automatic protocol detection so the correct parser is applied to incoming messages.
- Alarms and event notifications such as geo fence or tamper can be forwarded to Plaspy as immediate events.
- Use the device RCONF command to retrieve the device ID that Plaspy will use to identify the unit.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands to the device as described in the device manual.
2. Enter the Plaspy server address — either d.plaspy.com or the IP 54.85.159.138 — in the device server settings or SMS command.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport on the device if required by the device firmware.
5. Apply or save the configuration on the device and, if using SMS, wait for the device acknowledgement messages.
6. Restart or power-cycle the device if the manufacturer documentation requires a restart for changes to take effect.
7. Validate that the device reports to Plaspy by checking for incoming data and by using the device RCONF verification command to confirm settings and device ID.

## Example Configuration Commands

The manufacturer-provided public SMS commands for Sinotrack devices can be used to configure the ST-902L. Preserve placeholders when using the APN command. Commands are shown in the order recommended for initial provisioning.

- Optional initial reset to factory settings (use only if required for fresh provisioning):
```
RESET
```

- Set the time zone to UTC 0 (example command shown in public documentation):
```
8960000E00
```

- Set the APN for your operator. Replace the placeholders with your operator APN, username, and password as needed:
```
8030000 [apn] [apnu] [apnp]
```
Explanation: [apn] is the operator APN string, [apnu] is the optional APN username, and [apnp] is the optional APN password.

- Set the GPRS server to the Plaspy IP and port as shown in public configuration guidance:
```
8040000 54.85.159.138 8888
```
If your provisioning method accepts a domain name and your device supports it, you can enter d.plaspy.com instead of the IP where supported by the device.

- Set the location update interval when the tracker is on:
```
8050000 60
```
(Example sets a 60 second interval; adjust as required.)

- Set the update interval for a different reporting condition such as when off or parked:
```
8090000 60
```

- Switch the device to GPRS mode to enable data reporting:
```
7100000
```

- Verify current configuration and read the device ID used by Plaspy:
```
RCONF
```
The RCONF response contains the device ID and settings used to validate correct provisioning before adding the device to Plaspy.

## Configuration Notes

- SMS based configuration is commonly supported by the ST-902L; confirm exact SMS syntax and phone numbers with the manufacturer manual for your firmware version.
- Firmware and hardware revisions can change command syntax or available features. Always verify commands against the device manual shipped with your unit.
- Choose UDP or TCP based on regional network behavior and device firmware support; Plaspy will automatically detect the protocol when data arrives.
- Plaspy uses the same port 8888 across supported devices; ensure firewall and network rules allow outbound device traffic to this port.
- Use the RCONF verification step after applying settings to confirm device ID and server parameters before completing registration in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-902L to report to Plaspy provides a straightforward route to real time vehicle visibility, event monitoring, and centralized fleet management. The ST-902L’s plug and play OBD II installation combined with SMS or remote provisioning allows rapid deployment and immediate forwarding of location and alarm data into Plaspy for tracking, alerting, and historical reporting.

Learn more about Plaspy and how your fleet can benefit by visiting https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify the official SinoTrack documentation at https://www.sinotrackgps.com/ as setup methods and firmware behavior can change over time.
