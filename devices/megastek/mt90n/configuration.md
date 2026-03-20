---
slug: /megastek/mt90n/configuration
id: mt90n-configuration
sidebar_label: Configuration
title: Megastek - MT90N Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the Megastek MT90N with Plaspy using shared server settings and SMS commands
keywords:
  - Megastek MT90N configuration
  - Megastek MT90N setup
  - MT90N Plaspy integration
  - MT90N server configuration
  - MT90N GPS tracker setup
  - Megastek GPS tracker Plaspy
  - MT90N SMS configuration
  - MT90N NB IoT tracker
  - MT90N reporting settings
  - Plaspy device configuration
---

# Megastek - MT90N Configuration

This page provides public configuration context for using the Megastek MT90N with Plaspy. It focuses on the shared Plaspy server settings you will point the tracker to, the typical prerequisites before setup, and the practical steps commonly used to get the device reporting to Plaspy. Where available, the page includes example SMS configuration commands that are publicly used for the MT90N.

Plaspy uses the same server endpoint and port for all supported devices and automatically detects the tracker protocol once the device connects. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools used; follow the device manufacturer instructions for device-specific details while using Plaspy server values for connectivity.

## Configuration Overview

The goal of this configuration is to prepare the MT90N to send its location and telemetry to Plaspy reliably so the device becomes visible in the platform for real time monitoring, alerts, and historical playback. Configuration typically involves assigning an identifier, setting the mobile data APN, configuring the Plaspy server endpoint and port, and enabling the device reporting mode.

- Configure the device identifier and network parameters so the MT90N can authenticate and register on the cellular network.
- Provide the operator APN and optional APN username and password so the device can establish a data connection.
- Set the GPRS/TCP or UDP server to point at Plaspy so messages are delivered to the platform.
- Choose reporting interval and enable data reporting mode to control frequency of updates and battery use.
- Validate the device is reaching Plaspy by confirming initial messages arrive and the device appears in the Plaspy interface.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the MT90N. These values are shared across supported devices and required for connectivity to Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured using either transport on port 8888)
- Plaspy automatically detects the tracker protocol once the device connects

## Typical Requirements Before Setup

- A charged MT90N with power enabled and accessible for configuration.
- A working NB‑IoT or cellular data connection and a SIM or subscription appropriate for NB‑IoT where required by the device and market.
- Access to the manufacturer configuration method for the MT90N such as SMS commands or vendor configuration tools.
- The device IMEI (used for device ID commands) and any installer credentials required for SMS configuration.
- Knowledge of the operator APN and optional APN username and password for the local mobile network.
- Access to Plaspy account or administrator to confirm the device is reporting after configuration.

## How This Tracker Connects to Plaspy

The MT90N is configured to report position and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and display location, events, and alerts. Once network parameters and server information are applied and the device is set to data reporting mode, the device will begin sending messages to Plaspy where the platform will automatically detect the correct protocol and process the data.

- The tracker sends location updates and event messages to d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure the device to use TCP or UDP transport on port 8888 depending on device options.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device entry.
- Once messages are received, Plaspy provides real time tracking, geo‑fence events, SOS alerts, and historical playback.
- Validate connectivity by confirming message reception in Plaspy after saving configuration on the device.

## Common Configuration Workflow

1. Access the official Megastek configuration method for the MT90N such as SMS setup or the vendor configuration tool documented by the manufacturer.
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or directly as IP 54.85.159.138 depending on the device option.
3. Set the server port to 8888 in the device server settings.
4. Choose UDP or TCP if the device requires you to select a transport; both are supported by Plaspy on port 8888.
5. Enter the operator APN and any APN username or password required by the mobile operator.
6. Apply or save the configuration and, if required by the device firmware, restart or power cycle the MT90N.
7. Validate that the device reports to Plaspy by checking for initial messages and device visibility in the Plaspy platform.

## Example Configuration Commands

The MT90N can be configured with SMS commands. The following example commands are extracted from the public device configuration guidance and use the device default password 000000. Replace placeholders and IMEI values with the actual device IMEI or operator APN values.

- Note: {{apn}} placeholder stands for your operator APN. Optional APN username and password placeholders are {{apnu}} and {{apnp}}.

1. Set the device ID using the device IMEI (use the last 15 digits if required by the manufacturer). Replace <15_DIGIT_IMEI> with your device IMEI value:
```
M000000,22,<15_DIGIT_IMEI>
```

2. Set the operator APN. Provide {{apn}} and, if needed, include {{apnu}} and {{apnp}} separated by commas:
```
M000000,23,{{apn}}
```
If your APN requires a username and password:
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Set the update/reporting interval to 60 seconds (example):
```
M000000,25,60
```

4. Set the GPRS server to point to Plaspy. This example uses the public Plaspy server IP and port exactly as provided:
```
M000000,24,56 54.85.159.138,8888
```

5. Enable GPRS/data reporting mode (example command to enable mode 2):
```
M000000,21,2
```

Follow the commands in the order shown for initial setup: set device ID, configure APN, set reporting interval, set the Plaspy server, and enable data reporting. Replace the default password 000000 if your device requires a different SMS password. The exact command syntax and parameter meanings may vary with firmware version; consult Megastek documentation for device specific details.

## Configuration Notes

- Megastek firmware versions and regional device variants can change the exact SMS command syntax or parameter order; verify the syntax in the manufacturer documentation for your device firmware.
- SMS configuration is a common method shown here, but some installations use vendor tools or an onboarding portal; use the official manufacturer method indicated for your MT90N unit.
- Plaspy supports both TCP and UDP on the same port 8888; choose the transport based on installer preference and network conditions.
- Always replace placeholder values such as IMEI, {{apn}}, {{apnu}}, and {{apnp}} with values appropriate to your device and mobile operator.
- If configuration does not take effect immediately, try restarting the device or power cycling after saving settings.

## Why Use Plaspy with This Configuration

Using the MT90N with Plaspy gives organizations centralized visibility into personal safety and light asset tracking through a consistent server endpoint and port. Pointing the device to Plaspy's shared server and enabling data reporting allows real time tracking, SOS alerting, geo‑fence notifications, and historical playback within the Plaspy platform, simplifying monitoring across mixed device fleets.

Learn more about Plaspy and how it can integrate MT90N streams into broader tracking workflows at https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and manufacturer instructions verify details on the Megastek website https://www.megastek.com/ since setup methods and firmware can change over time.
