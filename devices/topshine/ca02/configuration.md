---
slug: /topshine/ca02/configuration
id: ca02-configuration
sidebar_label: Configuration
title: TopShine - CA02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect TopShine CA02 with Plaspy using shared server settings and SMS commands
keywords:
  - TopShine CA02 configuration
  - TopShine CA02 setup
  - CA02 server configuration
  - CA02 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking setup
  - Plaspy server settings
  - CA02 SMS commands
  - CA02 GPRS configuration
  - car alarm tracker configuration
---

# TopShine - CA02 Configuration

This page documents the public configuration context for using the TopShine CA02 tracker with the Plaspy platform. It focuses on the practical steps and public commands you can use to point the CA02 to Plaspy, and explains what to check before attempting integration. The content here is drawn from the CA02 feature set and public SMS/GPRS configuration commands provided for this model.

Plaspy uses a shared server endpoint and a single port for all supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for the CA02 can vary by firmware version, hardware revision, installer method, and vendor tools; the CA02 also supports SMS based setup and GPRS server configuration which are shown below as public examples.

## Configuration Overview

The goal of configuration is to ensure the CA02 can reach Plaspy over mobile data and report location and alarm telemetry reliably. For the CA02 this typically means using the device's SMS configuration interface to set network APN, the GPRS server address and port, and the reporting mode.

- Configure the device APN so the CA02 can establish GPRS connectivity
- Point the device to Plaspy's shared server endpoint so telemetry is delivered to the platform
- Choose the transport mode (UDP or TCP) if the device requires a selection
- Validate the IMEI and device ID so Plaspy matches incoming telemetry to the correct asset
- Confirm the device reports live updates and alarms into Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and reachable CA02 unit installed or accessible to the installer
- A working 2G SIM with an active data plan and the correct operator APN
- SMS capability on an admin phone number if using SMS commands for configuration
- Access to the CA02 manufacturer documentation or installer instructions for device-specific steps
- The device IMEI available for registration and verification with Plaspy

## How This Tracker Connects to Plaspy

The CA02 sends GPS position and alarm telemetry over the mobile data network to Plaspy's shared server endpoint and port. Once the GPRS server is set to Plaspy and the device is in GPRS reporting mode, Plaspy will receive and present location updates, alarm events, and device status.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Position and alarm messages are forwarded to Plaspy for live monitoring and history
- Alarm events such as shock sensor triggers and door open can be reported to Plaspy
- Plaspy receives device data regardless of whether the tracker uses UDP or TCP because the platform auto detects the protocol
- Successful connectivity provides visibility in Plaspy for tracking, alerts, and operational monitoring

## Common Configuration Workflow

1. Access the official TopShine configuration method or installer tool for the CA02, or prepare to send SMS configuration commands from an authorized phone.
2. Ensure the device has a working SIM and set the correct operator APN for mobile data.
3. Enter the Plaspy server address either as d.plaspy.com or the server IP 54.85.159.138 depending on the device input method.
4. Set the server port to 8888 and select UDP or TCP if the CA02 asks for a transport selection.
5. Apply or save the configuration on the device and switch the device to GPRS reporting mode when required.
6. Restart or power cycle the device if the manufacturer instructions indicate this is necessary.
7. Validate that the CA02 reports to Plaspy and appears in the platform with correct IMEI or device ID information.

## Example Configuration Commands

The CA02 provides an SMS based command interface. The following public commands are the common sequence used to prepare the unit for Plaspy. The sample default device password shown in these commands is 000000.

1. Optional initial factory reset (use only when required)
```sms
W000000,990,099###
```

2. Set the device ID (the CA02 SMS command expects 14 digits derived from the IMEI)
- Replace {{imei14}} with the first 14 digits of the device IMEI. Note that Plaspy identifies devices by the full 15 digit IMEI when matching incoming data.
```sms
W000000,010,{{imei14}}
```

3. Set the operator APN
- Preserve placeholders for APN, username, and password. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator values as needed.
```sms
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
- If your APN has no username or password, omit the {{apnu}} and {{apnp}} placeholders as applicable.

4. Set the GPRS server to Plaspy (server IP and port)
```sms
W000000,012,54.85.159.138,8888
```
- Alternatively, if your device accepts a domain name, use d.plaspy.com in place of the IP.

5. Switch the device to GPRS reporting mode
```sms
W000000,013,2
```

6. Set the update interval (example sets a reporting interval)
```sms
W000000,014,6
```

7. Retrieve the device IMEI for verification
```sms
W000000,601
```

Notes on commands
- The default password in these examples is 000000. Use your device password if it has been changed.
- The order of commands matters for initial setup: APN and server should be set before switching to GPRS mode.
- The placeholder {{imei14}} denotes the first 14 digits of the IMEI required by the CA02 ID command; Plaspy will associate the device using the full 15 digit IMEI in its platform matching.

## Configuration Notes

- Firmware and hardware revisions may change SMS command syntax or available parameters; always verify against the CA02 firmware documentation.
- The CA02 supports SMS based setup as shown; some installers prefer manufacturer software or tools if available.
- If the device requires a transport selection, choose UDP or TCP according to installation needs; Plaspy supports both and automatically detects the incoming protocol.
- Plaspy uses the same port 8888 for all supported devices; point the CA02 to d.plaspy.com or 54.85.159.138 with port 8888.
- When using APN placeholders, confirm operator credentials with your SIM provider before applying configuration.

## Why Use Plaspy with This Configuration

Connecting the TopShine CA02 to Plaspy provides a single destination for live location, alarm events and device status across your fleet or vehicle installations. The CA02's built in alarm features, immobilizer outputs, and shock sensor telemetry become actionable through Plaspy's monitoring, alerting and historical playback capabilities, giving operators centralized visibility and faster response to incidents.

Learn more about Plaspy and how it handles device reporting, alerts, and fleet visibility at https://www.plaspy.com. For the latest device specific commands, firmware notes and installation guidance for the CA02, verify current information with the manufacturer at https://www.gztopshine.com/ as setup methods and firmware behavior can change over time.
