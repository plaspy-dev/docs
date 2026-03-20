---
slug: /eelink/gpt19/configuration
id: gpt19-configuration
sidebar_label: Configuration
title: EElink - GPT19 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT19 showing server settings and SMS commands to connect with Plaspy GPS platform
keywords:
  - EElink GPT19 configuration
  - EElink GPT19 setup
  - GPT19 Plaspy integration
  - GPT19 server configuration
  - GPT19 SMS commands
  - EElink GPS tracker configuration
  - vehicle tracking GPT19
  - GPS tracker configuration guide
  - GPT19 platform setup
  - EElink tracker server settings
---

# EElink - GPT19 Configuration

This page documents the public configuration context for using the EElink GPT19 tracker with the Plaspy platform. It summarizes the shared server settings that Plaspy requires, explains the SMS commands publicly available for the GPT19, and outlines practical setup steps you can follow to get the device reporting to Plaspy. Use this guide together with the device documentation from the manufacturer for any device specific details.

Plaspy uses a shared server endpoint and the same port for all supported devices and automatically detects the tracker protocol when data arrives. Manufacturer side setup steps can vary depending on firmware revision, hardware revision, installation type, and vendor tools, so treat the commands below as the published, general-purpose method for configuring GPT19 for GPRS and SMS based setup.

## Configuration Overview

The goal of this configuration is to prepare the GPT19 to communicate reliably with Plaspy and to validate that the device is visible in the platform. The public configuration steps for the GPT19 focus on setting the APN and pointing the device at Plaspy server settings, then checking reporting behavior.

- Configure mobile network APN so GPRS data is functional if using data reporting.
- Set the server address to Plaspy using the public domain or IP and the shared port.
- Choose the transport type on the device if required (UDP or TCP).
- Set reporting intervals or timers so the device sends periodic location updates.
- Verify parameters and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data is received

These values are the public Plaspy endpoint details to use when configuring the GPT19. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A charged and ready GPT19 tracker with battery installed and any required mounting completed.
- An active SIM card with data and SMS capability and correct APN settings for the mobile operator.
- Access to the device configuration method supported by the unit such as SMS commands or the official EElink configuration tools.
- Knowledge of the operator APN values including possible username and password placeholders.
- Basic ability to send and receive SMS messages from the phone number authorized to configure the device.
- Access to the Plaspy account where you will verify device connectivity once the tracker reports.

## How This Tracker Connects to Plaspy

The GPT19 can be configured to report location and device data directly to Plaspy by pointing its GPRS reporting server to the Plaspy endpoint and using the shared port. Once configured, the device sends periodic updates and alarms which Plaspy processes and displays.

- The tracker sends location and event packets to d.plaspy.com or to 54.85.159.138 on port 8888.
- Plaspy accepts data over UDP or TCP depending on the device transport selected.
- Plaspy automatically detects the tracker protocol on receipt of data, so the same port 8888 is used across devices.
- Periodic reporting is controlled by the device timer settings to balance frequency and battery life.
- Once the device reports, it becomes visible in Plaspy for monitoring, geofence alerts, and historical playback.

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT19, for example using SMS commands or an EElink configuration tool provided by the manufacturer.
2. If required, perform an optional factory reset to return settings to a known state.
3. Set the correct APN for the SIM operator using the APN command and include username and password placeholders if needed.
4. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
5. Set the server port to 8888.
6. Choose UDP or TCP transport if the device requires a transport selection.
7. Apply or save the configuration and restart the device if the device requires a reboot for changes to take effect.
8. Validate that the device reports to Plaspy and check connectivity and location updates in the platform.

## Example Configuration Commands

The publicly published GPT19 SMS commands used for configuration are shown below. Send these commands from an authorized phone number to the tracker as SMS messages in the order shown when order matters.

- Optional initial factory reset (use only when needed to clear settings):
```
FACTORY#
```

- Set the time zone to UTC 0 (example):
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholder values with your operator values. [apn] is required. [apnu] and [apnp] are optional username and password placeholders if your operator requires them.
```
APN,[apn]#
```
or with optional username and password
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to the Plaspy domain on port 8888 (preferred by domain):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to the Plaspy IP address on port 8888:
```
SERVER,0,54.85.159.138,8888#
```

- Set the reporting timer to send updates every 60 seconds:
```
TIMER,60#
```

- Verify current parameters on the device:
```
PARAM#
```

Keep the order above when performing initial setup: APN first, then SERVER, then TIMER, then a verification with PARAM#. The factory reset command is optional and should be used only if you need to restore defaults before reconfiguring.

## Configuration Notes

- Firmware and hardware revisions may alter command syntax or behavior; always check the device manual for the exact command format for your firmware version.
- The GPT19 supports SMS based configuration in published instruction sets; remote server configuration may also be possible using EElink tools or platform-assisted configuration if provided by the vendor.
- Choose UDP or TCP based on your installation needs; both transports are supported by Plaspy and the device, and Plaspy will detect the protocol automatically at the server.
- Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with operator specific values; do not send the literal placeholder text to the device.
- Plaspy uses the same port 8888 for all devices, so the server port setting is constant across supported trackers.

## Why Use Plaspy with This Configuration

Using the GPT19 configured to report to Plaspy gives organizations consistent visibility and centralized monitoring for vehicles and assets. With the Plaspy server configured and the GPT19 reporting at regular intervals, you can monitor location updates, receive alerts, and use platform tools for operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware details, and manufacturer guidance verify information on the EElink website https://www.eelink.com.cn/ since manufacturer setup methods and firmware behavior can change over time.
