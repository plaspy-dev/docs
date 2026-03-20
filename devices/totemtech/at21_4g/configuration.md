---
slug: /totemtech/at21_4g/configuration
id: at21_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT21-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT21 4G showing Plaspy server settings and example SMS commands for quick setup
keywords:
  - Totemtech AT21-4G configuration
  - AT21-4G setup
  - AT21-4G Plaspy configuration
  - Totemtech tracker setup
  - Plaspy server configuration
  - GPS tracker configuration guide
  - AT21-4G SMS commands
  - asset tracking configuration
  - GPS platform setup
  - vehicle tracking configuration
---

# Totemtech - AT21-4G Configuration

This page documents the public configuration context for using the Totemtech AT21-4G tracker with the Plaspy platform. It focuses on the practical server settings and example setup commands that are commonly used to point the device to Plaspy so the tracker can report location, telemetry, and events to the platform.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools. The AT21-4G supports SMS and GPRS provisioning and the example SMS commands below show one documented method to configure APN and the Plaspy server using the device default password 000000.

## Configuration Overview

This configuration process prepares the AT21-4G to send its telemetry and location data to Plaspy using the platform's shared ingestion endpoint and port. The goal is to ensure reliable connectivity, correct APN and server settings, and visible reporting in Plaspy.

- Configure the device APN so GPRS data sessions can be established.
- Point the tracker to the Plaspy server endpoint so packets are delivered to the platform.
- Choose the transport method (UDP or TCP) and set the shared port used by Plaspy.
- Enable acknowledgement or reporting modes needed for your monitoring use case.
- Validate the device reports in Plaspy and adjust reporting intervals to balance power and visibility.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the tracker. Plaspy requires the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A working micro SIM with an active data plan and the correct APN details from the operator.
- The tracker powered and accessible for configuration via SMS or the manufacturer's provisioning tool.
- Knowledge of the device password if it differs from the factory default 000000.
- Access to a phone capable of sending SMS commands or access to the vendor software for remote provisioning.
- Confirmation of firmware revision and any vendor specific instructions that may affect command formats or available features.

## How This Tracker Connects to Plaspy

The AT21-4G sends location, sensor and event data to Plaspy using the configured transport and endpoint. Once pointed to the shared Plaspy server and port, Plaspy ingests and parses incoming packets and makes the data available for mapping, alerts and reporting.

- The device initiates a GPRS data session and transmits packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on deployment preferences and firmware options.
- Plaspy automatically recognizes the tracker protocol and processes incoming telemetry.
- Telemetry, alarms and status messages reported by the device become visible in Plaspy for operational monitoring.
- Reporting intervals and acknowledgement settings can be adjusted to optimize power and data usage.

## Common Configuration Workflow

1. Access the official Totemtech configuration method or vendor provisioning software or prepare to send SMS configuration commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 for all Plaspy connected devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure APN and other operator credentials so the device can establish a GPRS session.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking the device status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The AT21-4G supports SMS based provisioning. Below are example SMS commands published by the manufacturer. The sample commands use the factory default device password 000000. If your device password differs, replace 000000 with the correct password.

- Optional initial factory reset (use only when needed or as instructed):
```
*000000,007#
```

- Set the operator APN. Replace the placeholders with actual operator values:
```
*000000,002,[apn],[apnu],[apnp]#
```
Explanation of placeholders:
- [apn] is the APN name provided by your mobile operator.
- [apnu] is the APN username if required, otherwise leave blank.
- [apnp] is the APN password if required, otherwise leave blank.

- Set the GPRS server to Plaspy using the Plaspy server IP and port and enable the connection mode (example uses mode 1):
```
*000000,003,54.85.159.138,8888,1
```
Note: You may alternatively enter d.plaspy.com in vendor tools that accept domain names instead of the IP.

- Set ACK or acknowledgement reporting on:
```
*000000,019,1#
```

- Set the reporting update interval to 60 seconds (example format used by this device):
```
*000000,60,60,0,60#
```

Preserve the command order when provisioning if the manufacturer documentation specifies an order. After sending commands by SMS, allow time for the device to apply settings and connect.

## Configuration Notes

- Firmware differences may change SMS command syntax or command availability. Confirm exact commands for your firmware release.
- SMS based configuration is useful for remote devices but ensure the SMS sender can reach the device and that the device has network coverage.
- Choose UDP or TCP based on reliability and network behavior. UDP is common for low overhead tracking; TCP can provide session reliability in some networks.
- APN placeholders must be replaced with the operator credentials for data connections to work.
- Always consult Totemtech documentation or support if a command does not return an expected acknowledgement or the device fails to connect.

## Why Use Plaspy with This Configuration

Using the AT21-4G with Plaspy offers a low maintenance, solar powered tracking solution for remote assets where wired power is not available. Pointing the device to Plaspy's shared server endpoint and port enables consistent ingestion of location, sensor and event data so teams can monitor asset health, movement and alerts centrally.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time; verify current setup details on the Totemtech website http://www.totemtek.com/ before deployment.
