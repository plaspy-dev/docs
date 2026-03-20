---
slug: /eelink/gpt50/configuration
id: gpt50-configuration
sidebar_label: Configuration
title: EElink - GPT50 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for EElink GPT50 showing Plaspy server settings and SMS commands for integration
keywords:
  - EElink GPT50 configuration
  - EElink GPT50 setup
  - GPT50 server configuration
  - GPT50 Plaspy integration
  - Plaspy GPS tracker configuration
  - GPS tracker SMS configuration
  - EElink asset tracking setup
  - GPT50 fleet management setup
  - GPS platform configuration
  - device provisioning Plaspy
---

# EElink - GPT50 Configuration

This page describes the public configuration context for using the EElink GPT50 tracker with Plaspy. It gathers the practical, platform-side settings and the published SMS commands that are commonly used to point a GPT50 device at Plaspy for real time tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The guidance below centers on the public Plaspy endpoint and the SMS configuration commands published for the GPT50 so you can prepare and validate device connectivity before onboarding devices into Plaspy.

## Configuration Overview

The goal of configuring the GPT50 for Plaspy is to ensure the device reports reliable location and telemetry to the Plaspy ingestion endpoint using Plaspy shared server settings. Configuration prepares the device for cellular connections, correct APN settings, reporting intervals, and server routing so the device becomes visible and manageable in Plaspy.

- Configure the device to use the Plaspy server endpoint and port so updates are routed to the platform.
- Set the operator APN and any required credentials so the device can establish GPRS data sessions.
- Define reporting intervals and working mode to balance battery life and telemetry frequency for field deployments.
- Validate connectivity by checking parameters and confirming the device appears in Plaspy.
- Use available manufacturer configuration methods such as SMS commands or vendor tools to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the GPT50 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device powered and accessible so SMS messages or manufacturer tools can be received and applied
- A valid SIM card with data enabled and SMS capability installed in the GPT50
- Operator APN details available for your SIM carrier; placeholders such as [apn], [apnu], and [apnp] may be required
- Access to the manufacturer SMS workflow or configuration tool for the GPT50
- A Plaspy account and device provisioning process in your Plaspy workspace to validate device reporting
- Basic knowledge of whether your installation prefers UDP or TCP transport

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPT50 sends GNSS positions and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and display the device status and history. Plaspy receives updates automatically and associates them with the device record in the platform.

- The device reports location and telemetry to d.plaspy.com or to 54.85.159.138 on port 8888
- You can choose UDP or TCP transport when the device requires a transport selection
- Plaspy automatically detects the tracker protocol so no protocol selection is needed on the platform side
- Location fixes, temperature telemetry, and device state are forwarded to Plaspy for live monitoring and alerts
- Once the server and APN are set, the device becomes visible in Plaspy when it successfully registers and sends a position update

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT50, typically SMS commands or the vendor configuration utility.
2. Ensure the SIM is installed, has data and SMS enabled, and collect APN details for your carrier.
3. Enter the Plaspy server address as d.plaspy.com or alternatively the IP 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device using the manufacturer method, for example sending SMS commands.
6. Restart the device if the manufacturer recommends a reboot to apply settings.
7. Validate the device reports to Plaspy by checking the device list in Plaspy and by using the device parameter check command if available.

## Example Configuration Commands

To set the GPT50 using SMS, the manufacturer documents these public commands. Send each command as an SMS to the device phone number in the order shown when order matters. Labeling indicates optional or initial steps where appropriate.

- Optional initial reset to factory settings
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
  - Basic form with just APN
```text
APN,[apn]#
```
  - With APN username and password if required
```text
APN,[apn],[apnu],[apnp]#
```
  - Explanation: replace [apn] with your carrier APN. If your carrier requires a username or password include [apnu] and [apnp] respectively.

- Set the GPRS server to Plaspy by domain (recommended)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP (alternate)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to every 60 seconds
```text
TIMER,60#
```

- Check current parameters on the device
```text
PARAM#
```

Notes on these commands: the SERVER command shows both the domain and IP options. Use the domain form to allow DNS resolution, or the IP form if required by your setup. Send commands as plain SMS messages to the device number. The FACTORY# command is typically used only when an initial factory reset is desired.

## Configuration Notes

- Firmware and hardware revisions can change the exact command syntax and available features; verify syntax against the device firmware revision if possible.
- The GPT50 supports SMS based configuration in the public documentation; vendor tools or OTA configuration may also be available depending on your provider.
- Choose UDP or TCP transport according to your connectivity requirements; Plaspy supports both and will auto detect the tracker protocol.
- Keep APN placeholders such as [apn], [apnu], and [apnp] available when preparing commands; supply real carrier credentials when required.
- All devices in Plaspy use the same port 8888 so server and port settings are consistent across deployments.

## Why Use Plaspy with This Configuration

Using the GPT50 with Plaspy provides a practical path to long term asset visibility, especially for deployments that need extended battery life and durable enclosures. By configuring the device to report to the Plaspy server, organizations gain live position tracking, telemetry such as temperature, and centralized event handling that supports anti theft, fleet oversight, and remote equipment monitoring.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer guidance verify setup details with EElink at https://www.eelink.com.cn/ since device configuration methods and firmware behavior can change over time.
