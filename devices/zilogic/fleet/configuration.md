---
slug: /zilogic/fleet/configuration
id: fleet-configuration
sidebar_label: Configuration
title: Zilogic - Fleet Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Zilogic Fleet tracker showing how to point the device to Plaspy and validate connectivity
keywords:
  - Zilogic Fleet configuration
  - Zilogic Fleet server configuration
  - Zilogic Fleet setup for Plaspy
  - Zilogic Fleet GPS tracker
  - Zilogic Fleet SMS configuration
  - Fleet tracker Plaspy configuration
  - GPS tracker Plaspy setup
  - Zilogic Fleet GPRS setup
  - Zilogic Fleet APN setup
  - Zilogic Fleet tracking software configuration
---

# Zilogic - Fleet Configuration

This page documents the public configuration context for using the Zilogic Fleet tracker with Plaspy. It compiles the practical, manufacturer provided commands and the shared Plaspy server settings you will need to point a Fleet device at Plaspy for fleet monitoring and visibility. Use this page as a reference for the common steps required to configure the tracker so it reports to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for all compatible devices. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor utilities. Where available this page includes the Fleet SMS configuration commands published by the device vendor and explains how they map to Plaspy settings.

## Configuration Overview

The purpose of this configuration is to prepare a Zilogic Fleet tracker to communicate reliably with the Plaspy platform so asset location, input states, and device status are visible in Plaspy. The published Fleet configuration flow below shows the common SMS commands used to set time zone, APN, GPRS server and operational mode, then save and verify settings.

- Configure network access so the tracker can reach Plaspy over GPRS or equivalent mobile data.
- Point the tracker to the Plaspy server endpoint so telemetry is sent to d.plaspy.com or the Plaspy IP address.
- Select the correct transport (UDP or TCP) and set the shared Plaspy port so messages arrive at the platform.
- Save the device configuration and, if applicable, restart the tracker to apply settings.
- Verify connectivity using the device verification commands and confirm the unit appears in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring a Zilogic Fleet tracker:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device is sending data to the server endpoint.

## Typical Requirements Before Setup

- A working SIM card with mobile data and SMS capability configured for the device.
- Access to the Fleet device briefly to receive and send SMS configuration commands or access the approved manufacturer configuration tool.
- The correct APN settings for the mobile operator that will provide data connectivity.
- Knowledge of whether your Fleet firmware accepts server domain names or requires a numeric server IP address.
- A powered and installed device with reliable GPS reception and power for the initial configuration.
- Access to Plaspy account or contact at your organization to confirm device activation and visibility after configuration.

## How This Tracker Connects to Plaspy

The Zilogic Fleet tracker is configured to send location and status data to the shared Plaspy server endpoint and port. Once the device's APN and GPRS parameters are correct and the server is set to Plaspy, the tracker transmits telemetry so it becomes visible and actionable on the Plaspy platform.

- The tracker sends periodic location updates and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device options and network requirements.
- Device inputs and events such as ignition, battery, and panic can be reported to Plaspy when configured on the tracker.
- Plaspy automatically detects the appropriate tracker protocol so messages arriving at the shared port are parsed.
- The platform shows connectivity state and tracks incoming updates for operational monitoring.

## Common Configuration Workflow

1. Access the official Zilogic configuration method for the Fleet device, typically SMS commands or the vendor configuration tool.
2. Enter the Plaspy server by domain d.plaspy.com or by IP address 54.85.159.138 in the device server configuration.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the device APN and any required APN username or password for your cellular provider.
6. Apply or save the configuration and restart the device if the firmware requires it.
7. Validate the device is reporting to Plaspy using the device verification commands and confirm the unit appears in Plaspy.

## Example Configuration Commands

The Fleet tracker can be configured by sending SMS messages with the following public commands. Send these in order where order is important:

- Set the time zone to UTC
```
SET TZ +00:00
```

- Set the operator APN. Preserve placeholders and replace with your operator values
```
SET APN {{apn}},{{apnu}},{{apnp}}
```
Explanation of placeholders:
- {{apn}} is the operator APN name
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required

- Set the GPRS server to the Plaspy IP address and port
```
SET SERVER 54.85.159.138,8888
```

- Switch the device to GPRS mode
```
SET GPRS 1
```

- Set periodic update interval (example uses 60 seconds reporting)
```
SET PERIOD 60,60
```

- Save configuration to device memory
```
SAVE
```

To check and verify current settings, send these read/diagnostic commands:
```
GET APN
```
```
GET GPRS
```
```
GET SERVER
```
```
STATUS
```

Note: Some Fleet firmware versions may accept a domain name in the SET SERVER command instead of a numeric IP. If your firmware supports domains you may be able to use:
```
SET SERVER d.plaspy.com,8888
```
Only use the domain form if your device firmware explicitly supports server domain names.

## Configuration Notes

- The Fleet device supports SMS based configuration as shown above; confirm SMS command format with your current device firmware documentation.
- APN placeholders must be replaced with your mobile operator values; leaving placeholders will prevent GPRS connectivity.
- Choose UDP or TCP according to network characteristics and any guidance from your operator or installer; Plaspy accepts both.
- Firmware revisions and vendor tools can change command syntax or available options; verify commands against current Zilogic documentation.
- Always save configuration with the device SAVE command and restart if recommended for your firmware to ensure settings are applied.

## Why Use Plaspy with This Configuration

Configuring a Zilogic Fleet tracker to send data to Plaspy gives fleet managers a consistent endpoint for telemetry, device status, and event reporting. Using the shared Plaspy server and port simplifies onboarding multiple devices because Plaspy automatically detects the tracker protocol and handles parsing across compatible models.

To learn more about Plaspy and how it supports GPS trackers and fleet monitoring, visit https://www.plaspy.com. For the latest device specific configuration instructions, firmware details, and manufacturer guidance please verify information on the Zilogic website https://zilogic.com/ as setup methods and firmware behavior can change over time.
