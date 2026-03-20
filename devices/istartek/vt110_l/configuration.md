---
slug: /istartek/vt110_l/configuration
id: vt110_l-configuration
sidebar_label: Configuration
title: iStartek - VT110-L Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek VT110-L tracker configuration and Plaspy server settings for platform integration
keywords:
  - iStartek VT110-L configuration
  - iStartek VT110-L setup
  - VT110-L server configuration
  - VT110-L Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - GNSS tracker integration
  - fleet tracking configuration
  - SMS configuration commands
---

# iStartek - VT110-L Configuration

This page covers the public configuration context for using the iStartek VT110-L tracker with Plaspy. It explains the practical server settings and the common manufacturer-side commands and steps you can use to point the device at Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The VT110-L supports SMS based configuration and cellular data setup, and the examples below reflect public commands and the Plaspy server values you will need to apply.

## Configuration Overview

The purpose of configuring the VT110-L for Plaspy is to prepare the device to communicate reliably with the Plaspy server, validate connectivity over the cellular network, and enable the device to appear and report events inside the Plaspy platform.

- Configure the tracker to send data to the Plaspy server endpoint so location and events are received in real time.
- Set the cellular APN and verify data connectivity so the device can use LTE/GPRS for telemetry.
- Choose transport settings (UDP or TCP) and the common Plaspy port so the device transmits to the correct endpoint.
- Validate update interval and alarms so the device reports at the desired frequency and delivers event notifications.
- Use manufacturer SMS commands or configuration tools to apply settings and check parameters.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy so the platform accepts the tracker protocol after the device connects

## Typical Requirements Before Setup

- A valid vehicle power connection and the VT110-L installed or accessible for configuration.
- A nano SIM with active data plan and the correct APN for the mobile operator.
- Ability to send SMS commands to the device or access the manufacturer configuration tool as provided by iStartek or installer.
- Basic information for the deployment such as desired update interval and whether UDP or TCP is preferred.
- Access to Plaspy account credentials and device registration workflow on the platform so you can verify the device after configuration.
- Manufacturer documentation or firmware notes from iStartek to confirm command syntax and behavior for your device revision.

## How This Tracker Connects to Plaspy

The VT110-L is configured to report position, status, and event data to the shared Plaspy server endpoint and port so vehicle telemetry appears in the Plaspy platform for monitoring and reporting.

- The tracker sends GNSS fixes and cellular fallback location data over the mobile network to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on installer preference; Plaspy supports both and auto detects the protocol in use.
- The device reports periodic location updates at the configured TIMER interval and sends event messages for alarms and I/O changes.
- Plaspy ingests telemetry for live tracking, history, and rule based alerts so operational teams can act on events such as ignition, door, or impact alarms.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT110-L, for example the SMS command set or vendor setup tool, using the device manual from iStartek.
2. Enter the Plaspy server hostname or server IP — either d.plaspy.com or 54.85.159.138 — in the SERVER parameter.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose the transport type (UDP or TCP) if the device requires a transport selection during setup.
5. Set the APN for your cellular operator using the APN command and configure any APN username or password placeholders if required by the SIM.
6. Apply or save the configuration and restart the device if the tracker requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking device connectivity and the PARAM verification command or by confirming the unit appears in the Plaspy platform.

## Example Configuration Commands

The VT110-L supports SMS based configuration. The following public commands are provided in the device documentation. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN values where applicable.

1. Optional initial factory reset (use only if a reset is required for initial setup):
```
FACTORY#
```

2. Set the time zone to UTC 0 (example):
```
GMT,E,0#
```

3. Set the operator APN. Replace {{apn}} with your operator APN. If your operator requires a username or password, the optional placeholders {{apnu}} and {{apnp}} can be included.
```
APN,{{apn}}#
```
Or, if username and password are required:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Set the GPRS server to the Plaspy domain and port using SERVER with domain (example uses server index 1):
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternatively set the GPRS server using the Plaspy server IP and port (example uses server index 0):
```
SERVER,0,54.85.159.138,8888#
```

6. Set the location update interval to 60 seconds:
```
TIMER,60#
```

7. Check current parameter settings (verification command):
```
PARAM#
```

Notes on placeholders: {{apn}} is the carrier access point name for data. {{apnu}} and {{apnp}} are optional APN username and APN password fields when required by the mobile operator.

## Configuration Notes

- Firmware and command syntax can vary by hardware revision and firmware version; always confirm command behavior for your VT110-L unit with iStartek documentation.
- The VT110-L supports SMS based configuration in the public command set above; some installers prefer to use vendor tools or over the air provisioning if available.
- When choosing transport, UDP generally has lower overhead while TCP provides connection confirmation; Plaspy supports both and automatically detects the protocol used by the device.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across multiple tracker models.
- Use the PARAM# verification command after configuration to confirm applied settings before completing deployment.

## Why Use Plaspy with This Configuration

Using the VT110-L with Plaspy gives fleet operators and vehicle owners reliable visibility into location and event data. Configuring the device to report to Plaspy's shared server endpoint and port enables live tracking, historical playback, and alarm handling for operational workflows such as dispatch, immobilizer control, and incident response.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and installation guidance always verify details with the manufacturer at https://istartek.com/ since setup methods and device behavior can change over time.
