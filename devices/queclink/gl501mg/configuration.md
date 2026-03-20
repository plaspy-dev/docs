---
slug: /queclink/gl501mg/configuration
id: gl501mg-configuration
sidebar_label: Configuration
title: QuecLink - GL501MG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the QuecLink GL501MG to report to Plaspy including required server settings and example SMS commands
keywords:
  - QuecLink GL501MG configuration
  - GL501MG setup Plaspy
  - QuecLink tracker configuration
  - GL501MG server configuration
  - GL501MG GPS platform setup
  - Plaspy device integration
  - GL501MG SMS configuration
  - QuecLink tracking software setup
  - asset tracker configuration
  - LTE Cat M1 tracker setup
---

# QuecLink - GL501MG Configuration

This page documents the public configuration context for using the QuecLink GL501MG with Plaspy. It highlights the shared Plaspy server settings you must apply to the device and shows example SMS configuration commands that are commonly used for this model. Use this guide to understand what to prepare and how to validate a working connection to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by device firmware, hardware revision, installation method, or vendor configuration tools. The GL501MG supports multiple configuration interfaces including SMS and BLE, and the example commands below show a typical SMS based setup using the device default password queclink.

## Configuration Overview

The goal of the configuration steps is to prepare the GL501MG so it reliably sends location and telemetry to Plaspy and appears in the platform for monitoring and alerts. Typical configuration focuses on network access, server endpoint, report timing, and relevant input or alarm settings.

- Configure the device to point to the Plaspy ingestion endpoint so reports reach the platform.
- Provide correct APN and cellular parameters so the tracker can use LTE or fallback 2G connectivity.
- Set reporting intervals and event inputs so Plaspy receives timely location and alert updates.
- Validate that the device successfully registers and transmits to the Plaspy server endpoint and port.
- Enable notifications such as SOS or tamper inputs to surface critical events in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept reports from supported transports

## Typical Requirements Before Setup

- A powered GL501MG device with battery charged or connected to power and able to accept configuration commands.
- A valid cellular SIM with data enabled and correct APN credentials for the target network.
- Access to an SMS sender or Queclink configuration tool to send SMS configuration commands or BLE provisioning tools if available.
- Knowledge of the device default password queclink used in SMS commands when the device has factory credentials.
- Ability to reboot or power-cycle the tracker if required after applying configuration.
- Confirmation that the deployment environment has cellular coverage on the device bands being used.

## How This Tracker Connects to Plaspy

The GL501MG reports position and telemetry to Plaspy by sending @Track protocol data to the shared Plaspy server endpoint and port. Plaspy accepts TCP or UDP transport and automatically detects the device protocol so reports are processed without manual protocol selection in the platform.

- The tracker is configured to send scheduled position reports to d.plaspy.com on port 8888.
- Plaspy can receive data over UDP or TCP depending on the device configuration and network behavior.
- Once connected, the device provides location, motion or tamper inputs, and sensor telemetry visible in Plaspy.
- Event reports such as SOS or wakeup messages are forwarded to Plaspy for alerting and workflows.
- Using the shared server endpoint ensures consistent handling and simplifies onboarding of additional devices.

## Common Configuration Workflow

1. Access the official Queclink configuration method you will use, for example SMS commands, the vendor provisioning tool, or BLE provisioning.
2. Enter the Plaspy server as d.plaspy.com or use the fallback server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 for the device server entry.
4. Choose UDP or TCP transport on the device if required by the configuration interface.
5. Provide APN credentials for the SIM if necessary and save the network settings.
6. Apply or save the configuration and reboot or power cycle the tracker if the device documentation recommends a restart.
7. Validate that the device reports to Plaspy by checking for incoming data in the platform or using any verification commands the device supports.

## Example Configuration Commands

The GL501MG supports SMS based configuration. The following public example commands are provided in the device documentation. These SMS commands use the default device password queclink in the examples. Replace placeholder values before sending and be sure to preserve the device password parameter where required.

1. Optional factory reset or initial restore step
Description: Restore factory settings. Use this only if needed for a clean configuration.
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
Note: Replace the placeholders with your operator APN values. {{apn}} is the APN name, {{apnu}} is the APN username, and {{apnp}} is the APN password. If your operator does not require username or password, use empty values as appropriate.
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Set the GPRS server to Plaspy
This command configures both domain and IP entries for the Plaspy endpoint and uses port 8888. The command includes d.plaspy.com and 54.85.159.138 with port 8888.
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the reporting interval to 60 seconds
Description: Adjusts periodic report timing to 60 seconds in the sample configuration.
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
Description: Configure SOS reporting for input 2 so alerts are sent to Plaspy.
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Follow the command order when applying them for initial device setup. Replace placeholders and the default password if your device has been changed from the factory value.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters; verify commands against the GL501MG firmware revision if possible.
- The GL501MG supports SMS based setup and also BLE provisioning; choose the method that matches your deployment and installer tools.
- TCP and UDP are both supported; in cellular networks UDP may be preferable for lower overhead, while TCP can offer session reliability depending on network behavior.
- Plaspy uses the same port 8888 for all devices and automatically detects the device protocol, so configure the device to use port 8888 for consistent ingestion.
- The sample SMS commands use the default password queclink; keep track of any password changes and secure access to SMS configuration channels.

## Why Use Plaspy with This Configuration

Using the QuecLink GL501MG with Plaspy gives you an efficient path to continuous asset visibility and event monitoring. The GL501MG’s low power design, LTE Cat M1 and NB1 connectivity with 2G fallback, and flexible transport options make it suitable for long-term unattended deployments where reliable reporting to a single Plaspy endpoint is required.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the most current device specific details, firmware notes, and official Queclink documentation verify setup instructions on the manufacturer site https://www.queclink.com/ as manufacturer specifications and configuration methods can change over time.
