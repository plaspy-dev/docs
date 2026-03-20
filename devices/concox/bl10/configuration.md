---
slug: /concox/bl10/configuration
id: bl10-configuration
sidebar_label: Configuration
title: Concox - BL10 Configuration
sidebar_class_name: menu_item_tracker
description: Quick guide to configure Concox BL10 for use with Plaspy using public SMS and GPRS settings
keywords:
  - concox bl10 configuration
  - concox bl10 setup
  - bl10 plaspy configuration
  - bl10 server configuration
  - gps tracker configuration bl10
  - plaspy tracker setup
  - micromobility tracker configuration
  - bike lock tracker setup
  - bl10 sms commands
  - bl10 gprs setup
---

# Concox - BL10 Configuration

This page documents the public configuration context for using the Concox BL10 tracker with Plaspy. It focuses on the practical, public settings and workflow operators typically follow to point a BL10 at Plaspy and validate that the device is reporting location and event data correctly. Where available, public SMS commands and GPRS settings are presented so you can apply them directly or adapt them to your installation tools.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The BL10 supports SMS and GPRS configuration in public documentation, so this guide includes those SMS command examples and the Plaspy server values you must enter to integrate the device.

## Configuration Overview

Setting up the BL10 for Plaspy means preparing the device to communicate over cellular data and ensuring it reports to the Plaspy server endpoint and port used for all devices. The public configuration commands for the BL10 allow operators to set APN, server address, reporting intervals, and to enable GPRS mode by SMS. After configuring, validate connectivity and confirm the device appears in your Plaspy account.

- Configure the BL10 to use a valid operator APN so GPRS data is available.
- Point the device at the Plaspy server endpoint so GPS and event data are sent to Plaspy.
- Set a reasonable reporting interval so position updates meet your operational needs.
- Enable GPRS mode and verify the device can establish a data session.
- Validate reporting in Plaspy and adjust timers or APN parameters if needed.

## Plaspy Server Settings

The following public server settings are required for Concox BL10 devices to send data to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept supported tracker formats without per device protocol selection

All devices in Plaspy use the same port and the platform will detect the protocol automatically, so use port 8888 when pointing the BL10 at the Plaspy endpoint.

## Typical Requirements Before Setup

- A charged BL10 and any installation hardware required for your bike or dock installation.
- A working Micro SIM provisioned for data with a valid APN for your mobile operator.
- Ability to send and receive SMS messages for SMS based configuration if needed.
- Access to the official Concox configuration method or vendor setup tool for device-specific actions and firmware differences.
- Basic knowledge of the APN values for your operator and any required APN username or password placeholders.

## How This Tracker Connects to Plaspy

The BL10 reports location and event data to the shared Plaspy server endpoint and port so fleet managers can view device telemetry, lock status, and alerts centrally. Once the BL10 has a working GPRS session and the server settings are applied, it will push position and event updates to Plaspy for processing and display.

- The tracker is configured to send data to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device can use UDP or TCP transport to transmit data to Plaspy.
- Plaspy identifies the device protocol automatically and ingests GPS and event messages.
- Reported data becomes visible in Plaspy for geofence alerts, tamper notifications, and monitoring.
- Operators validate the device by confirming received updates in the Plaspy interface.

## Common Configuration Workflow

1. Access the official Concox configuration method or Concox SMS command procedures provided by your vendor or firmware documentation.
2. Ensure the BL10 has a working Micro SIM and that you know the operator APN values for data connectivity.
3. Enter the Plaspy server endpoint either as d.plaspy.com or as 54.85.159.138 and set the port to 8888 in the device settings.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Save or apply the configuration and enable GPRS mode on the device.
6. Restart the device if required by the firmware or after saving settings.
7. Validate that the BL10 is reporting to Plaspy by confirming location and event updates appear in the platform.

If you use SMS commands for configuration, follow the manufacturer order and verify each step by reading the device responses or using the provided verification commands.

## Example Configuration Commands

The BL10 can be configured by sending SMS messages with specific commands. The following public command sequence is presented in the same order as common BL10 documentation. Label any reset command as optional or part of initial setup if you require a factory baseline.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}{{apnu ? ',' + {{apnu}} : ''}}{{apnp ? ',' + {{apnp}} : ''}}#
```
Note: Replace {{apn}} with your operator APN. If your operator requires an APN username or password, provide them in place of {{apnu}} and {{apnp}} respectively. The original device command string supports optional username and password fields.

- Set the GPRS server using domain (recommended for clarity)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two accepted formats)
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

- Verify current GPRS related settings
```text
GPRSSET#
```

Keep the command order when performing initial setup. After sending configuration SMS commands, allow time for the device to apply changes and for the GPRS session to establish.

## Configuration Notes

- SMS based configuration is supported and commonly used for initial setup or remote adjustments; follow the exact command syntax provided by Concox for your BL10 firmware.
- Firmware differences and hardware revisions may change available commands or required command parameters; confirm with Concox documentation or your vendor.
- Choose UDP or TCP depending on your connectivity environment; Plaspy accepts both on port 8888 and will detect the tracker protocol automatically.
- The BL10 must have a valid APN configured and an active data session for GPRS reporting to Plaspy.
- Always save and, if recommended by the manufacturer, restart the device after applying new settings to ensure they take effect.

## Why Use Plaspy with This Configuration

Using the BL10 with Plaspy gives micromobility operators centralized visibility into location, lock status, and event alerts across a fleet of shared bicycles. The public BL10 configuration steps and SMS commands enable operators to quickly point devices at Plaspy, standardize reporting intervals, and validate connectivity so fleet monitoring, geofence rules, and tamper notifications can operate reliably.

To learn more about Plaspy and how it consolidates tracker data for fleet management visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance verify details on the Concox website https://www.iconcox.com/ since device behavior and setup methods can change over time.
