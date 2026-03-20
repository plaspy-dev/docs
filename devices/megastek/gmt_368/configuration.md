---
slug: /megastek/gmt_368/configuration
id: gmt_368-configuration
sidebar_label: Configuration
title: Megastek - GMT-368 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Megastek GMT-368 for use with Plaspy using SMS or GPRS server settings
keywords:
  - Megastek GMT-368
  - Megastek GMT-368 configuration
  - GMT-368 setup
  - GMT-368 Plaspy
  - Megastek tracker configuration
  - motorcycle GPS tracker setup
  - Plaspy device setup
  - GPS tracker server configuration
  - GMT-368 SMS commands
  - GMT-368 GPRS configuration
---

# Megastek - GMT-368 Configuration

This page documents the public configuration context for using the Megastek GMT-368 with the Plaspy platform. It focuses on the practical steps and server settings required to point the device at Plaspy so the tracker can report location and event data. Where available, example SMS commands from the manufacturer are included so you can apply the settings directly to devices that accept SMS configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GMT-368 supports SMS and GPRS communication and can be configured with SMS commands as shown in the example commands section below.

## Configuration Overview

The configuration process prepares the GMT-368 to communicate with Plaspy and ensures the device reports reliably. It typically includes setting the device identity, operator APN, GPRS server and port, and the reporting interval so that location updates arrive at Plaspy on a regular schedule.

- Point the tracker to the Plaspy server endpoint and port so data is routed correctly
- Configure operator APN and, if required, APN credentials so the device can use mobile data
- Set the reporting interval to control how frequently the GMT-368 sends position updates
- Enable GPRS (data) mode so the device transmits over TCP or UDP to Plaspy
- Verify the device is visible in Plaspy after configuration and that updates are received

## Plaspy Server Settings

Configure the GMT-368 to use the following Plaspy server details when setting the GPRS server or server address:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the protocol used by the tracker automatically.

## Typical Requirements Before Setup

- Access to the device IMEI or serial number to identify the tracker during setup
- A SIM card provisioned for data and able to receive and send SMS if using SMS configuration
- Knowledge of the device password for configuration SMS commands (the sample default password shown below is 000000)
- A phone capable of sending SMS or access to the manufacturer configuration tool or software
- APN, APN username, and APN password information from the mobile operator if required by the SIM
- Sufficient battery or external power to complete configuration and to allow the device to establish a GPRS session

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GMT-368 reports position and status information over mobile data to the platform. Plaspy receives the device traffic at a shared endpoint and applies automatic protocol detection to process the incoming messages correctly.

- The tracker is set to report to Plaspy using the server domain d.plaspy.com or server IP 54.85.159.138
- All devices send to the same port 8888 which Plaspy uses for incoming connections
- The device can transmit using UDP or TCP to the Plaspy server depending on configuration
- Plaspy detects the tracker protocol automatically so no additional protocol selection is required on the platform side
- Once connected the device becomes visible in Plaspy and sends periodic location updates and alarms

## Common Configuration Workflow

1. Access the official Megastek configuration method or software or prepare an SMS-capable phone for sending configuration messages.
2. Enter the Plaspy server host as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the GMT-368 configuration requires you to select a transport protocol.
5. Configure APN and optional APN credentials using the operator values if the device will use GPRS.
6. Apply or save the configuration and restart or power cycle the tracker if the device requires it for settings to take effect.
7. Validate that the GMT-368 reports to Plaspy by checking device visibility and recent position reports in the platform.

If you use the SMS command method, follow the manufacturer command order and replace placeholders with your device values as shown in the example commands section.

## Example Configuration Commands

The GMT-368 supports SMS-based configuration. The following example commands are the public SMS strings used in the sample configuration. The sample device password shown below is 000000 which is the factory default in the provided example. If your device uses a different password replace 000000 with the actual password.

1. Set the device ID
Replace the X characters with the last 15 digits of the device IMEI when sending this SMS.
```text
M000000,22,XXXXXXXXXXXXXXX
```

2. Set the operator APN
Use the APN provided by your mobile operator. If APN username or password are required include them as additional comma separated fields.
```text
M000000,23,{{apn}}
```
Or with APN username and password
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
Note: {{apn}} is the operator access point name. {{apnu}} is the APN username placeholder. {{apnp}} is the APN password placeholder.

3. Set the update interval to 60 seconds
```text
M000000,25,60
```

4. Set the GPRS server to point to Plaspy
This command sets the server index and the Plaspy server address with port. Use the Plaspy server IP or domain as shown in the workflow. The example uses the Plaspy server IP and the required port 8888.
```text
M000000,24,56 54.85.159.138,8888
```
Alternatively, if your device accepts the domain you can substitute d.plaspy.com in place of the IP according to device command syntax:
```text
M000000,24,56 d.plaspy.com,8888
```

5. Enable GPRS mode
```text
M000000,21,2
```

Order matters when applying SMS commands in initial setup. Typical order is set device ID, set APN, set update interval, set GPRS server, then enable GPRS mode. If the device password is not the factory default 000000 replace it at the start of each command string.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or available parameters. Confirm the exact commands against the Megastek documentation for your device firmware.
- The GMT-368 supports SMS based configuration as shown in the example commands. Manufacturer tools or PC software may offer equivalent settings via a USB or serial interface where available.
- Choose UDP or TCP based on network conditions and any carrier recommendations. Plaspy accepts both transports on port 8888 and will auto detect the protocol used by the tracker.
- All devices in Plaspy report on the same port so use port 8888 for consistent behavior across devices.
- If the device fails to report after configuration, verify APN settings, SIM data status, and that the GPRS mode is enabled. A device restart or power cycle is often required after changing network or server settings.

## Why Use Plaspy with This Configuration

Configuring the Megastek GMT-368 to send data to Plaspy gives you a centralized way to monitor motorcycle location and status across a fleet or single vehicle. Plaspy's shared server endpoint and automatic protocol detection simplify device onboarding and reduce per-device configuration differences on the platform side.

To learn more about Plaspy visit https://www.plaspy.com. For the latest manufacturer specific command reference, firmware notes, and hardware details verify configuration methods on the Megastek website https://www.megastek.com/ since device specific setup and firmware behavior can change over time.
