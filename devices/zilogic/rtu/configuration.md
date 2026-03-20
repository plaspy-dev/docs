---
slug: /zilogic/rtu/configuration
id: rtu-configuration
sidebar_label: Configuration
title: Zilogic - RTU Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Zilogic RTU to connect with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Zilogic RTU configuration
  - Zilogic RTU setup
  - Zilogic RTU Plaspy
  - BlackKite RTU configuration
  - RTU server configuration
  - RTU GPS tracker setup
  - Remote monitoring RTU
  - RTU GPRS configuration
  - GPS platform setup RTU
  - RTU tracking software configuration
---

# Zilogic - RTU Configuration

This page documents the public configuration context for using the Zilogic RTU (also known as BlackKite-RTU) with Plaspy. It focuses on the practical steps and server settings you will use to point the device to Plaspy so the RTU can send telemetry and alerts to the platform. It uses only public Plaspy values and the publicly shared RTU SMS command flow where available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. The RTU supports cloud ready protocols such as HTTP and MQTT and the device can be configured by SMS for basic GPRS reporting as shown in the public commands below.

## Configuration Overview

The goal of the configuration process is to prepare the RTU to communicate reliably with Plaspy, validate connectivity, and enable visibility inside the Plaspy platform. For RTU models that support SMS setup, the manufacturer provides a simple set of text commands to change APN, server, reporting intervals, and to save settings.

- Configure the RTU with operator APN and credentials so it has data connectivity for GPRS reporting.
- Point the device to Plaspy server settings (domain or IP) and the shared port used by Plaspy.
- Select transport (UDP or TCP) if the device requires a transport choice.
- Set reporting intervals appropriate for your monitoring needs and data plan.
- Save and verify the configuration using device query commands or a status check.
- Confirm the RTU appears and reports correctly in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that Plaspy will automatically detect the protocol your RTU uses when reporting to the endpoint.

## Typical Requirements Before Setup

- A powered and reachable Zilogic RTU with the firmware that supports SMS or the manufacturer configuration tool.
- A SIM card with mobile data enabled and correct APN credentials for the operator.
- Access to the RTU configuration method supported by the unit such as SMS commands or the vendor software.
- Knowledge of APN values including username and password when required by the mobile operator.
- A Plaspy account and ability to identify the device in Plaspy once it reports.
- Optional: GPS antenna and placement if you intend to use the RTU's location reporting features.

## How This Tracker Connects to Plaspy

The RTU is configured to report telemetry and alerts to the shared Plaspy server endpoint and port so Plaspy can ingest device data and present it in the platform. Communication is typically performed over cellular GPRS for this model when using the SMS-based configuration shown below.

- The device uses configured APN credentials to establish a GPRS data session.
- The RTU is pointed to d.plaspy.com or directly to 54.85.159.138 and port 8888 for server forwarding.
- Transport can be set to UDP or TCP depending on device support and network considerations.
- Plaspy detects the device protocol automatically when messages arrive at the shared port.
- Device status, periodic telemetry, and event alerts are forwarded to Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official Zilogic configuration method such as the SMS command interface or vendor software as documented by Zilogic.
2. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 in the device server setting.
3. Set the device port to 8888 which is the shared port Plaspy uses for all compatible trackers.
4. Choose UDP or TCP transport if your device requires a transport selection.
5. Configure the APN and any operator credentials so the RTU can open a GPRS session.
6. Apply or save the configuration on the RTU and restart the device if required by the firmware.
7. Validate the device reports to Plaspy by checking device status in Plaspy and using device query commands where available.

If you are using SMS setup, the example commands below follow the public command order recommended by the manufacturer.

## Example Configuration Commands

The Zilogic RTU can be configured by sending SMS commands in sequence. Below are the publicly shared SMS commands and verification queries in the order shown by the manufacturer. Preserve the placeholders when you substitute your operator values.

- Set the time zone to UTC 0
```
SET TZ +00:00
```

- Set the operator APN and optional username and password
```
SET APN {{apn}},{{apnu}},{{apnp}}
```
Explanation: {{apn}} is the operator APN name. {{apnu}} is the APN username and {{apnp}} is the APN password. If your operator does not require username or password, leave those placeholders empty or omit them according to the device manual.

- Set the GPRS server using the Plaspy server IP and port
```
SET SERVER 54.85.159.138,8888
```
You may also enter d.plaspy.com instead of the IP if the RTU supports domain names for server settings.

- Switch the device to GPRS reporting mode
```
SET GPRS 1
```

- Set periodic update interval for reporting
```
SET PERIOD 60,60
```
Explanation: This example sets interval values. Refer to the device manual for the meaning of each parameter; the RTU supports configurable intervals and can be tuned to your reporting needs.

- Save settings to persistent storage
```
SAVE
```

To verify configuration and status after changes, send these queries:
```
GET APN
GET GPRS
GET SERVER
STATUS
```

Send these SMS commands from an authorized phone number or via the vendor tool as required. The exact SMS origin restrictions and command authorization depend on the RTU firmware and manufacturer settings.

## Configuration Notes

- SMS based configuration is a supported public method for the RTU but some deployments may prefer vendor software or direct connection if available.
- Firmware versions and hardware revisions can change command syntax or available parameters; confirm the exact command set with Zilogic documentation for your unit.
- Choose UDP or TCP based on network reliability and application needs; Plaspy supports both transports and auto detects protocol at the server.
- Plaspy uses the same port 8888 for all devices to simplify device provisioning and automatic protocol detection.
- Keep APN credentials up to date and verify that the SIM has data enabled before attempting to switch to GPRS mode.

## Why Use Plaspy with This Configuration

Using the Zilogic RTU configured to report to Plaspy gives organizations centralized visibility into remote devices and assets. Plaspy collects incoming telemetry and event messages from the RTU, enabling monitoring, alerting, and integration with operational workflows while taking advantage of the RTU's configurable reporting intervals and on device buffering during outages.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup details, command syntax, and firmware behavior consult the official Zilogic resources at https://zilogic.com/ since manufacturer specifications and setup methods can change over time.
