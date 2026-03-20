---
slug: /istartek/pt24/configuration
id: pt24-configuration
sidebar_label: Configuration
title: iStartek - PT24 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek PT24 showing how to connect the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - iStartek PT24 configuration
  - iStartek PT24 setup
  - PT24 server configuration
  - PT24 Plaspy setup
  - PT24 GPS tracker configuration
  - Plaspy tracker integration
  - PT24 SMS configuration
  - PT24 APN settings
  - PT24 connectivity guide
  - PT24 device commands
---

# iStartek - PT24 Configuration

This page covers the public configuration context for using the iStartek PT24 Solar GPS Tracker with Plaspy. It explains the shared server settings Plaspy uses, shows practical setup steps based on publicly available SMS commands, and highlights what you should prepare before integrating the PT24 into Plaspy for real time location and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to select a protocol-specific server. Exact manufacturer-side steps can vary by firmware revision, hardware variation, installation type, and vendor tools. The PT24 supports SMS-based configuration commands in its public documentation, which is one common and proven method to point the device at Plaspy servers.

## Configuration Overview

The goal of configuration is to prepare the PT24 so it reliably uploads position and event data to Plaspy using the platform's shared endpoint and port. Many PT24 installations use SMS to set core parameters such as APN, server address, reporting interval, and timezone, which aligns the tracker to Plaspy for cloud reporting and alerting.

- Point the PT24 to Plaspy server settings so location and alerts are routed to Plaspy dashboards.
- Configure the cellular APN and verify network connectivity before setting the server.
- Set the device reporting interval and timezone to match your monitoring needs.
- Validate settings from the device using the provided verification command so Plaspy can detect and accept the tracker protocol.
- Use Plaspy to centralize geo-fencing, alerts, and historical playback after the tracker is reporting.

## Plaspy Server Settings

For all PT24 devices registered to Plaspy, use the following public server settings when configuring the tracker:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device option
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the Plaspy side

Note that Plaspy uses the same port for every supported device and relies on automatic protocol detection to interpret messages from the tracker.

## Typical Requirements Before Setup

- An active Nano SIM provisioned for data and SMS if using SMS configuration commands or GPRS reporting
- Sufficient battery charge or solar exposure for solar-charged deployments to complete configuration steps
- Access to the PT24 physical device to receive SMS commands and to power cycle if needed
- The correct APN details from the SIM operator to enable GPRS data when required
- Familiarity with the manufacturer SMS commands or access to the official iStartek configuration guide

## How This Tracker Connects to Plaspy

The PT24 is configured to report location and event telemetry to Plaspy by sending data to the shared Plaspy server endpoint and port. Once the tracker is pointed at Plaspy, the platform receives updates and translates them into map positions, alerts, and historical records.

- The device sends position and event messages to d.plaspy.com or 54.85.159.138 on port 8888
- You may choose UDP or TCP transport on the device if the PT24 requires a transport selection
- Plaspy automatically detects the protocol used by the tracker and parses messages accordingly
- Telemetry such as movement alerts, tamper, SOS, and SIM removal are delivered to Plaspy for notification routing
- Regular reporting intervals allow Plaspy to provide live updates and playback of historical tracks

## Common Configuration Workflow

1. Obtain the official iStartek configuration method for your PT24, typically SMS commands or vendor software, and verify the firmware version.
2. Ensure the PT24 has a working Nano SIM with the correct APN information and adequate power or solar exposure.
3. Enter the Plaspy server address by sending d.plaspy.com or the server IP 54.85.159.138 to the device as shown in the commands below.
4. Set the server port to 8888 and choose UDP or TCP on the device if prompted by the firmware.
5. Apply or save the configuration settings on the tracker and send any required verification command.
6. Restart or power cycle the device if the PT24 firmware recommends a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking incoming data on the platform and confirming telemetry appears in Plaspy dashboards.

## Example Configuration Commands

The PT24 public configuration supports SMS-based commands. Below are the commonly used commands in the order recommended for initial setup. Preserve placeholder values when needed.

- Optional initial factory reset (use only when you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}{{apnu}},{{apnp}}#
```
Explanation: keep the placeholders as provided by the device documentation. Replace {{apn}} with your operator APN name. Use {{apnu}} for APN username and {{apnp}} for APN password if required by your operator. If username and password are not needed, the APN command may be sent with only {{apn}}.

- Set the GPRS server by domain using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server by IP using the Plaspy server IP and port
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds
```text
TIMER,60#
```

- Check current parameters on the device
```text
PARAM#
```

Send these SMS messages from the authorized phone number for the device, following the manufacturer guidance. The SERVER command examples above show both the domain and IP options; either is acceptable and both point to Plaspy on port 8888.

## Configuration Notes

- SMS configuration is a supported public method for the PT24; confirm the authorized sender number and permitted command syntax in the official iStartek guide.
- Firmware versions can change command parsing and available options; verify syntax if commands are not accepted.
- Choosing UDP versus TCP depends on device options; Plaspy accepts either and automatically detects the protocol when messages arrive on port 8888.
- Plaspy uses the same port for all supported devices, simplifying server-side configuration and allowing auto protocol detection to handle different tracker protocols.
- When using APN placeholders like {{apn}}, {{apnu}}, and {{apnp}}, confirm exact formatting required by your carrier and include credentials only when needed.

## Why Use Plaspy with This Configuration

Using the PT24 with Plaspy delivers continuous visibility and centralized alert management for long-duration animal and remote asset monitoring. The PT24’s solar charging and low-power operation combined with Plaspy’s shared server endpoint make it practical to deploy many units and manage them centrally for geofencing, tamper detection, SOS handling, and historical tracking.

Learn more about Plaspy and how it supports device integrations and fleet monitoring at https://www.plaspy.com. For the latest PT24 device-specific setup details, firmware behavior, and manufacturer documentation, verify current instructions at the iStartek official website https://istartek.com/.
