---
slug: /winrich/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: Winrich - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Winrich GT06 with Plaspy including server settings SMS commands workflow and validation steps
keywords:
  - Winrich GT06 configuration
  - Winrich GT06 setup
  - GT06 Plaspy configuration
  - GT06 server configuration
  - Winrich GPS tracker setup
  - GT06 SMS commands
  - GT06 GPRS configuration
  - vehicle tracker configuration
  - Plaspy tracker setup
  - GPS tracker integration
---

# Winrich - GT06 Configuration

This page documents the public configuration context for using the Winrich GT06 with Plaspy. It summarizes the practical server settings, the recommended workflow, and the GT06 SMS commands published for pointing the device to Plaspy. Use this guide to prepare the tracker for real time reporting and to verify connectivity to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is pointed to the platform. Manufacturer side setup steps for the GT06 can vary by firmware, hardware revision, installation type, and vendor tools; this page focuses on the public, commonly used commands and the Plaspy server values you must enter or send.

## Configuration Overview

The GT06 can be configured to send position and telemetry data to Plaspy using GPRS/TCP or SMS commands. The goal of configuration is to establish a reliable data path from the tracker to Plaspy, confirm the device is online, and enable visibility and alerts in the Plaspy dashboard.

- Configure the device APN and GPRS server so the GT06 can open a TCP or UDP session to Plaspy.
- Set the server endpoint to Plaspy using the public server domain or IP and the shared port.
- Validate connectivity and reporting using the device status and settings check commands.
- Adjust reporting interval to balance real time visibility and data usage.
- Confirm the device appears in Plaspy and that location and alarm events are received.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol after the device connects

## Typical Requirements Before Setup

- A valid SIM card with data enabled and the correct APN for the mobile operator.  
- Power applied to the GT06 and a charged internal backup battery if testing power cut behavior.  
- Access to the GT06 SMS command method or manufacturer configuration tool as provided by Winrich.  
- Basic device installation completed so the tracker has clear GSM and GPS reception for testing.  
- Ability to send and receive SMS commands from the administrator phone number if using SMS setup.  
- Knowledge of the operator APN settings for placeholder replacement when required.

## How This Tracker Connects to Plaspy

When configured, the GT06 forwards location and telemetry to the shared Plaspy server endpoint and port so the platform can ingest real time updates and alarm events. Plaspy’s automatic protocol detection lets the same server and port work for many tracker models, including the GT06.

- The tracker opens a GPRS TCP or UDP session to the configured server (d.plaspy.com or 54.85.159.138) on port 8888.  
- Location updates and alarms are sent at the configured reporting interval to Plaspy.  
- Plaspy receives telemetry and maps incoming messages to the tracker protocol automatically.  
- The device can also reply to or be queried via SMS for quick verification when GPRS is unavailable.  
- Successful connection makes the tracker visible in Plaspy for live tracking and historical reporting.

## Common Configuration Workflow

1. Identify and use the official Winrich configuration method for your GT06 unit, typically SMS commands or the vendor software.  
2. Configure the APN for the installed SIM using the GT06 APN command with your operator values.  
3. Enter d.plaspy.com or 54.85.159.138 as the device server depending on your preference for domain or IP.  
4. Set the port to 8888 (Plaspy uses the same port for all devices).  
5. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.  
6. Save or apply the configuration and restart the device if the GT06 requires a reboot to apply network settings.  
7. Validate that the tracker is reporting to Plaspy by checking device status and looking for the device in the Plaspy platform.

## Example Configuration Commands

The GT06 supports an SMS based command set. The following public commands are provided in the GT06 documentation and are commonly used to configure the device for Plaspy. Preserve placeholders such as {{apn}} {{apnu}} and {{apnp}} when replacing with your operator values.

- Optional initial factory reset (use only if required during setup):
```
940#
```

- Set the time zone to UTC+0:
```
801#W0#
```

- Set the operator APN. Replace {{apn}} with your operator APN. If your operator requires APN username and password, replace {{apnu}} and {{apnp}} respectively. Keep the placeholder format when sending:
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

- Set the GPRS server to Plaspy using the server IP and port (this points the GT06 to Plaspy). Note the trailing hash as in manufacturer examples:
```
803#54.85.159.138#8888#
```
Alternatively you may use the domain instead of the IP if the device accepts domains:
```
803#d.plaspy.com#8888#
```

- Set the location update interval to 60 seconds:
```
730#60#
```

- Check current settings (returns device configuration):
```
886#
```

- Check device status (returns status information such as GPS and GSM state):
```
902#
```

## Configuration Notes

- Firmware differences and hardware revisions can change SMS command syntax or behavior; confirm commands against your device firmware documentation before applying.  
- The GT06 supports both SMS based configuration and GPRS server configuration; choose the method that matches your installation and access requirements.  
- When given the option, TCP versus UDP can affect delivery characteristics; Plaspy supports either transport and will detect protocol automatically once the device connects.  
- Replace APN placeholders {{apn}} {{apnu}} and {{apnp}} with your operator values exactly as provided by your mobile network operator.  
- Plaspy uses the same port 8888 for all supported devices so you do not need a custom port per tracker when integrating multiple units.

## Why Use Plaspy with This Configuration

Using the GT06 with Plaspy provides straightforward, practical vehicle tracking with minimal changes to the device. Pointing the GT06 to Plaspy using the public server domain or IP and the shared port enables real time location updates, alarms, and telemetry in a central platform where fleet managers can monitor activity and receive event notifications.

Learn more about Plaspy and the platform features available for device integration at https://www.plaspy.com. Please verify the latest GT06 device specific commands, firmware behavior, and setup methods on the manufacturer site http://www.winrichgroup.com/en/ as hardware revisions and firmware updates can change configuration details over time.
