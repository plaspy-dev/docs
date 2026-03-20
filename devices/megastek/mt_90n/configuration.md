---
slug: /megastek/mt_90n/configuration
id: mt_90n-configuration
sidebar_label: Configuration
title: Megastek - MT-90N Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT 90N with Plaspy server settings and SMS commands
keywords:
  - Megastek MT-90N configuration
  - MT-90N Plaspy setup
  - Megastek tracker configuration
  - MT-90N server configuration
  - MT-90N GPS tracker setup
  - Plaspy device configuration
  - MT-90N SMS setup commands
  - Personal tracker Plaspy integration
  - MT-90N APN configuration
  - Megastek MT 90N setup guide
---

# Megastek - MT-90N Configuration

This page provides public configuration context and practical setup guidance for using the Megastek MT-90N with Plaspy. It focuses on the shared server settings Plaspy uses, the typical prerequisites, and the publicly available SMS configuration commands that installers commonly use to point the tracker to Plaspy for real time reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during connection. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the guidance here together with the official Megastek documentation and your device firmware notes.

## Configuration Overview

The goal of configuring the MT-90N for Plaspy is to ensure the tracker reports its location and status reliably to the Plaspy server endpoint and port so the device becomes visible in the Plaspy dashboard and alerting workflows.

- Point the tracker to the Plaspy server endpoint and set the transport and port so data is delivered to Plaspy.
- Configure APN and GPRS or NB IoT network settings so the device has a working cellular data connection.
- Set a suitable reporting interval and device identifier so updates match your monitoring needs.
- Validate connectivity and confirm the tracker appears in Plaspy so live tracking and alerts function.
- Use the available SMS commands or manufacturer tools to apply settings where supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered MT-90N unit with a charged battery or external power as required for configuration.
- A SIM with data enabled and, if using SMS configuration, SMS sending capability.
- Access to the IMEI or device identifier required by the manufacturer commands.
- The operator APN and any APN username or password required by your SIM provider (placeholders are used below).
- Access to the official Megastek configuration method for this model such as SMS commands or vendor software.
- A way to monitor the device on Plaspy after configuration to confirm successful reporting.

## How This Tracker Connects to Plaspy

The MT-90N can be configured to send location and telemetry to Plaspy over the network endpoint and port that Plaspy exposes. Once the tracker is pointed at the Plaspy endpoint, Plaspy will detect the device protocol automatically and begin ingesting position and event messages for dashboard display and alerts.

- The tracker reports location and status messages to the shared Plaspy server endpoint and port.
- Data is delivered over TCP or UDP depending on the device transport configuration.
- Plaspy maps incoming messages into the real time dashboard for live tracking and historical playback.
- Events such as SOS, geo fence alarms, and low battery notifications are forwarded to Plaspy for alerting.
- Confirming the device on Plaspy validates both network connectivity and correct server configuration.

## Common Configuration Workflow

1. Access the official Megastek configuration method for the MT-90N. This model supports SMS based setup and may also be configurable via vendor software or configuration tools.
2. Enter d.plaspy.com or 54.85.159.138 into the device server setting depending on the configuration method you use.
3. Set the server port to 8888. Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Configure the APN and any APN username or password required by your SIM provider.
6. Apply or save the configuration using the device method, for example by sending the SMS commands shown below or saving via vendor software.
7. Restart the device if required by the device firmware or the manufacturer instructions.
8. Validate that the device reports to Plaspy by checking device visibility and recent positions in the Plaspy dashboard.

## Example Configuration Commands

The MT-90N commonly supports SMS based configuration. The public command examples below reflect the manufacturer SMS formats and the default device password used in the sample configuration. The default password shown is 000000 and should be replaced if your device has a different password set.

- Notes on placeholders used in the commands
  - Replace <15-digit IMEI> with the tracker IMEI or the 15 digit device identifier required by the command.
  - {{apn}} is the mobile operator APN string.
  - {{apnu}} is the APN username if required by the operator.
  - {{apnp}} is the APN password if required by the operator.

1. Set the device ID (replace <15-digit IMEI> with the device IMEI)
```text
M000000,22,<15-digit IMEI>
```

2. Set the operator APN. Use the optional APN username and password if required
```text
M000000,23,{{apn}}
```
Or with APN username and password
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Set the update interval to 60 seconds
```text
M000000,25,60
```

4. Set the GPRS server to point to the Plaspy IP and port shown in the public settings
```text
M000000,24,56 54.85.159.138,8888
```

5. Enable GPRS mode
```text
M000000,21,2
```

Important: the example above uses the Plaspy server IP and port exactly as provided in the public configuration. Depending on your device and firmware you may be able to use the domain d.plaspy.com instead of the raw IP when entering server values in vendor tools.

## Configuration Notes

- SMS based setup is supported for this model as shown in the public commands, but many installers use vendor configuration tools when available.
- Firmware revisions and hardware variants can change available commands and required parameters; always check the device firmware notes.
- Choose TCP or UDP based on installation needs; Plaspy accepts both and automatically detects protocol during connection.
- Plaspy uses port 8888 for all devices so the port value is consistent across configurations.
- Preserve device passwords and change defaults where operational security requires it; the sample commands use the public default password 000000 shown in the manufacturer example.

## Why Use Plaspy with This Configuration

Using the MT-90N with Plaspy gives quick visibility and central monitoring for personal tracking and light telemetry scenarios. The compact MT-90N combined with Plaspy real time dashboard and alerting simplifies deployment for groups, events, and lightweight fleet or rental monitoring, while the shared Plaspy server settings and automatic protocol detection reduce configuration friction.

To learn more about Plaspy and how this configuration maps into the Plaspy platform visit https://www.plaspy.com. For the most current device specific commands, firmware details, and manufacturer guidance verify the latest information at https://www.megastek.com/
