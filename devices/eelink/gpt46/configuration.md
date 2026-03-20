---
slug: /eelink/gpt46/configuration
id: gpt46-configuration
sidebar_label: Configuration
title: EElink - GPT46 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT46 with Plaspy server settings and example SMS commands
keywords:
  - EElink GPT46 configuration
  - EElink GPT46 setup
  - GPT46 Plaspy configuration
  - EElink GPS tracker setup
  - GPT46 server configuration
  - Plaspy tracker integration
  - GPS tracking configuration
  - EElink asset tracker setup
  - GPT46 LTE Cat M1 setup
  - Plaspy device setup
---

# EElink - GPT46 Configuration

This page documents the public configuration context for using the EElink GPT46 tracker with Plaspy. It focuses on the practical server settings and manufacturer-provided SMS commands used to point the device to Plaspy for reporting, as well as the typical workflow to verify connectivity and visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available, this page preserves the public SMS commands and placeholders supplied by the manufacturer and explains how to apply them for Plaspy integration.

## Configuration Overview

The goal of this configuration is to prepare the GPT46 so it can report location and telemetry to Plaspy reliably. The public setup typically includes setting the cellular APN, configuring the Plaspy server endpoint, choosing the transport type if required, and setting an appropriate reporting interval.

- Configure the device APN and communications method so the tracker can access the cellular network.
- Point the tracker to the Plaspy server endpoint so reports are delivered to the platform.
- Choose UDP or TCP transport if the device requires an explicit transport selection.
- Set a reporting interval to balance update frequency and battery life.
- Validate parameters and confirm the device is visible and reporting in Plaspy.
- Use manufacturer SMS commands or official configuration tools when provided.

## Plaspy Server Settings

- Server domain d.plaspy.com for domain based configuration.
- Server IP 54.85.159.138 for IP based configuration.
- Port 8888 as the listening port used by Plaspy for device reports.
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices.

## Typical Requirements Before Setup

- A charged and powered GPT46 tracker ready for configuration.
- A working SIM card with an active data plan and SMS capability inserted into the device.
- The correct APN settings provided by the mobile operator.
- Access to an SMS-capable phone or manufacturer configuration tool to send setup commands.
- Manufacturer documentation or support reference for your device firmware revision.
- A Plaspy account and knowledge of how devices are registered in your Plaspy workspace.

## How This Tracker Connects to Plaspy

The GPT46 is configured to send location fixes and telemetry packets to Plaspy using the shared Plaspy server endpoint and port. Once the tracker is pointed to the Plaspy endpoint, Plaspy maps incoming reports into device state, location history, and alerting workflows.

- The tracker reports to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the tracker protocol and interprets incoming messages for mapping and alerts.
- Periodic reporting intervals (for example every 60 seconds) control update cadence and battery consumption.
- BLE sensor data paired to the GPT46 can be forwarded as telemetry for richer context in Plaspy where supported.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands per the device guide.
2. Set the APN to the operator APN using the APN command with your operator values.
3. Enter the Plaspy server by specifying either d.plaspy.com or 54.85.159.138 and set port 8888.
4. Choose UDP or TCP if the device requires a transport selection and save the setting.
5. Set the desired reporting interval such as 60 seconds and any required timezone settings.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform with incoming location updates.

## Example Configuration Commands

The manufacturer provides SMS based commands for the GPT46. Send these SMS messages to the device number in the order required by your deployment. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with the operator APN, APN username, and APN password respectively.

- Optional initial factory reset (use only if you need to restore factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN (replace placeholders as needed). If your operator requires username or password, include {{apnu}} and {{apnp}}:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: If your APN does not require username or password, send:
```text
APN,{{apn}}#
```

- Set the GPRS server by domain on Plaspy and port 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP on Plaspy and port 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to every 60 seconds:
```text
TIMER,60#
```

- Check current parameter settings:
```text
PARAM#
```

Send each command as an SMS message to the device. The order above is practical for initial setup, but follow any specific ordering guidance from the manufacturer for your firmware version.

## Configuration Notes

- The manufacturer SMS method is a public configuration channel shown here; device tools or USB configuration utilities may also be available depending on firmware and model variants.
- Behaviour and exact command syntax can differ between firmware versions and hardware revisions. Always verify commands with the device documentation for your specific firmware.
- TCP versus UDP selection can affect delivery guarantees and overhead; choose based on installer preference and network conditions.
- Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} when preparing commands and replace them with operator values as required.
- Use PARAM# after configuration to confirm settings and verify the server, APN, and timer values applied correctly.

## Why Use Plaspy with This Configuration

Configuring the GPT46 to report to Plaspy gives operations teams centralized visibility into location, device status, and telemetry for assets that require long standby performance and low maintenance. The shared Plaspy server endpoint and automatic protocol detection reduce per-device configuration complexity, while the ability to configure reporting intervals helps balance update frequency and battery life.

To learn more about Plaspy and how it manages device reporting and fleet visibility, visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and manufacturer guidance, verify details at the EElink website https://www.eelink.com.cn/. Manufacturer specifications and setup methods can change over time so confirm current instructions before wide deployment.
