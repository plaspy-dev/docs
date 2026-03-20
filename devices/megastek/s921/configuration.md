---
slug: /megastek/s921/configuration
id: s921-configuration
sidebar_label: Configuration
title: Megastek - S921 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek S921 to connect with Plaspy using shared server settings and example SMS commands
keywords:
  - Megastek S921 configuration
  - Megastek S921 setup
  - Megastek S921 Plaspy
  - S921 server configuration
  - S921 home base station setup
  - Plaspy tracker configuration
  - GPS tracker setup Megastek
  - S921 presence detection setup
  - Megastek monitoring integration
  - S921 installation guide
---

# Megastek - S921 Configuration

This page documents the public configuration context for using the Megastek S921 base station with Plaspy. It collects the shared Plaspy server settings, practical preflight checks, and example SMS commands provided in public device configuration material to help installers and administrators prepare the S921 for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer configuration steps for the S921 can vary by firmware version, hardware revision, installation type, and vendor tools. Where available, this page includes the S921 SMS commands that are commonly used for setup; follow manufacturer guidance and verify the current instructions from Megastek for your device and firmware.

## Configuration Overview

The goal of S921 configuration for Plaspy is to ensure the base station reliably reports presence, alarms, and health data to the central Plaspy server endpoint. Configuration prepares the device to reach the mobile data network, identify itself to the server, and send periodic telemetry that Plaspy ingests and displays.

- Configure the device network and APN so the S921 can establish a GPRS connection.
- Point the device to the shared Plaspy server endpoint so reports reach the platform.
- Set reporting intervals and enable GPRS mode so heartbeats and alarms are transmitted.
- Validate server connectivity and confirm the S921 appears in Plaspy as an active device.
- Use the provided SMS commands or the manufacturer configuration tool depending on your installation.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically when the device starts sending data.

## Typical Requirements Before Setup

- Device powered and installed in its intended fixed location with access to mains or internal battery as required.
- A working cellular SIM with operator data enabled and SMS capability if using SMS configuration.
- The device IMEI or serial needed for device identification and some configuration commands.
- Operator APN, and optionally APN username and password values for mobile data configuration.
- Access to the Megastek configuration method for the S921 such as SMS commands or vendor tools.
- A Plaspy account or administrative access on the monitoring platform to add and verify the device after provisioning.

## How This Tracker Connects to Plaspy

When configured, the S921 acts as a presence gateway and reporting node that sends status and alarm packets to the Plaspy server endpoint. The device uses its cellular link to transmit presence reports, heartbeats, and alarm events so operators see "at home" status and device health in Plaspy.

- The S921 reports home presence and alarm events to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Heartbeat and periodic status packets provide device health visibility inside Plaspy.
- Alarm conditions such as power off, SOS, tamper, and impact are forwarded to Plaspy for alerting and workflows.
- Plaspy automatically detects the tracker protocol when data arrives and ingests packets without requiring per device protocol selection on the server side.
- Transport may be configured to UDP or TCP on port 8888 depending on device requirements.

## Common Configuration Workflow

1. Access the official Megastek configuration method for the S921 such as the SMS command interface or manufacturer software.
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the GPRS server setting.
3. Set the server port to 8888. Remember Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy and that presence, heartbeat, and alarm events appear in the platform.

## Example Configuration Commands

The S921 public configuration examples are commonly sent by SMS. The manufacturer example uses the default device password 000000 in these messages. Replace 000000 with the device password if it has been changed. Use your device IMEI where indicated.

- Set the device ID using the device IMEI. Replace <IMEI15> with the device IMEI formatted as required (the manufacturer example uses the last 15 digits):

```
M000000,22,<IMEI15>
```

- Set the operator APN. Replace {{apn}} with the operator APN. If your operator requires an APN username and password include {{apnu}} and {{apnp}}:

```
M000000,23,{{apn}}
```

Or with optional username and password:

```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

- Set the update interval to 60 seconds:

```
M000000,25,60
```

- Set the GPRS server to the Plaspy IP and port. The manufacturer example includes a leading sequence used by the device command syntax; include it as shown:

```
M000000,24,56 54.85.159.138,8888
```

- Enable GPRS mode:

```
M000000,21,2
```

Notes about placeholders and defaults:
- {{apn}} is the mobile operator APN string. {{apnu}} and {{apnp}} are optional APN username and password placeholders.
- 000000 is the default device password used in the example commands. If your device password differs, replace 000000 with the correct password.
- The first command uses the device IMEI to set the device ID. Use your device IMEI values as required by Megastek.

## Configuration Notes

- Firmware versions and regional variants may change command syntax or available features; always confirm the exact command format for your unit and firmware.
- The S921 supports SMS based configuration in the public examples above; some installations may also support configuration via vendor tools or over the air updates.
- Choose UDP or TCP according to your device and operator network characteristics. Plaspy accepts either transport on the same port and detects the protocol automatically.
- All Plaspy devices use port 8888 for server communication; use that port when pointing the device to d.plaspy.com or 54.85.159.138.
- If you use SMS to configure the device, verify SMS delivery and that the device acknowledges the command before proceeding with further steps.

## Why Use Plaspy with This Configuration

Configuring the Megastek S921 to report to Plaspy centralizes home presence, alarm, and health telemetry in a single monitoring platform. This setup improves visibility for supervised monitoring programs by combining reliable local detection with platform level alerting and event workflows.

To learn more about Plaspy and how it supports device integrations like the S921, visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer recommendations verify details on the Megastek website https://www.megastek.com/
