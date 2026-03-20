---
slug: /megastek/mt_350/configuration
id: mt_350-configuration
sidebar_label: Configuration
title: Megastek - MT-350 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT-350 showing Plaspy server settings and example SMS setup commands for integration
keywords:
  - Megastek MT-350 configuration
  - Megastek MT-350 setup
  - MT-350 Plaspy configuration
  - MT-350 server configuration
  - Plaspy tracker setup
  - MT-350 UWB configuration
  - indoor tracker configuration
  - RTLS Plaspy integration
  - Megastek wristband setup
  - Plaspy server settings
---

# Megastek - MT-350 Configuration

This page documents the public configuration context for using the Megastek MT-350 with Plaspy. It explains the shared Plaspy server parameters you will point the tracker or its supporting infrastructure to, and it presents example commands that are publicly available for configuring compatible devices. Use this guide to understand the practical steps needed to make MT-350 telemetry and alarms visible to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. The example SMS commands below are provided as publicly available guidance and should be used alongside the manufacturer documentation for the MT-350 and any UWB base stations that carry device uplinks.

## Configuration Overview

The aim of configuration is to prepare the MT-350 and its supporting UWB infrastructure to deliver location, status, and alarm data into the Plaspy platform using the shared Plaspy endpoint. Configuration typically involves setting the device identity, ensuring network access for uplinks, and pointing the uplink path to Plaspy so device messages reach the platform reliably.

- Configure device identity so Plaspy can map messages to the correct tracker record.
- Provide network access or backhaul settings so base stations or gateways can send data to Plaspy.
- Point the tracker or gateway to the Plaspy server endpoint and the shared port used by all devices.
- Verify reporting intervals and health telemetry so the wristband meets operational needs in Plaspy.
- Validate alarms and SOS event forwarding so alerts appear in Plaspy dashboards and logs.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when a device connects

Plaspy uses the same port for all supported devices and will detect the appropriate protocol automatically, so your configuration only needs to target the correct Plaspy host and choose a transport the device or gateway supports.

## Typical Requirements Before Setup

- A charged MT-350 device and any required UWB ceiling base stations or gateways installed and powered.
- Access to the device IMEI or unique device ID used to register the device with Plaspy or with the installer tool.
- If the device or uplink gateway supports cellular or SMS configuration, a working SIM card with data or SMS capability and an SMS-capable phone for sending commands.
- Access to the official Megastek configuration method or software and the device firmware notes for your hardware revision.
- Network connectivity from your UWB base stations or gateway to the internet so they can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Administrative access to Plaspy to register or verify the device once it reports in.

## How This Tracker Connects to Plaspy

The MT-350 is part of an indoor RTLS that uses UWB base stations to determine position. Those base stations or an associated gateway forward the wristband location and telemetry to Plaspy at the shared server endpoint and port. Configuration can be applied either via vendor software, a gateway interface, or SMS commands where supported.

- Location and telemetry from the MT-350 are forwarded through UWB base stations or a gateway to Plaspy.
- SOS button presses, tamper alerts, low battery, and motion events are sent and become visible in Plaspy.
- The device or gateway is configured to report to the Plaspy server endpoint and port so data arrives in the centralized platform.
- Reporting intervals and health messages determine the freshness of data displayed in Plaspy.
- Plaspy presents unified position, alarm, and telemetry information for operational monitoring and response.

## Common Configuration Workflow

1. Access the official Megastek configuration method or the gateway/base station management interface specified by the vendor.
2. Enter the Plaspy server host by using either d.plaspy.com or the IP 54.85.159.138 in the server field.
3. Set the destination port to 8888; note that Plaspy uses the same port for all devices.
4. Choose the transport mode UDP or TCP if the device or gateway requires an explicit selection.
5. Configure device identity and reporting interval as required, for example by using SMS or the vendor tool to set the IMEI and interval.
6. Apply or save the configuration and restart the device or gateway if the tool requires a reboot to apply settings.
7. Validate that the device or gateway is reporting to Plaspy and that location and alarm messages appear in the platform.

## Example Configuration Commands

The following SMS commands are extracted from the public model configuration content for devices using SMS-based setup. The sample commands assume the device password is 000000 which is the factory default in the published example. Replace 000000 with your device password if it has been changed.

Notes:
- Replace <15-digit-IMEI> with the device IMEI (last 15 digits).
- {{apn}} is a placeholder for your cellular APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders when required by your SIM operator.
- The GPRS server command shown uses the Plaspy IP. If your device firmware accepts hostnames you may be able to substitute d.plaspy.com.

1. Set the device ID (use the 15 digit IMEI)
```text
M000000,22,<15-digit-IMEI>
```

2. Set the operator APN (APN with optional username and password)
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

4. Set the GPRS server to point to Plaspy (example uses IP and port from Plaspy public settings)
```text
M000000,24,56 54.85.159.138,8888
```

5. Enable GPRS mode
```text
M000000,21,2
```

Follow the manufacturer guidance on SMS formatting, and ensure commands are sent from an authorized phone number if the device is configured to accept SMS only from a list of numbers.

## Configuration Notes

- Firmware and tool differences: SMS command syntax and supported parameters can vary between firmware versions and product variants. Confirm the exact syntax with Megastek documentation for your serial number and firmware.
- SMS versus management software: Some installations prefer using vendor-provided management software or the UWB gateway web interface rather than SMS. Use the method appropriate for your deployment.
- TCP vs UDP: Choose UDP or TCP according to the gateway or device capabilities and network reliability. Plaspy supports both transports and will detect the protocol automatically.
- Consistent port usage: Plaspy uses port 8888 for all supported devices, simplifying server configuration across different tracker types.
- Preserve IMEI accuracy: When sending device ID commands, verify the IMEI is correct and formatted as required by Megastek. The example commands expect a 15-digit device identifier.

## Why Use Plaspy with This Configuration

Using the MT-350 with Plaspy brings high precision indoor location and device status into a single operational view. Organizations that need accurate personnel tracking, timely alarm notifications, and centralized device health monitoring can combine the MT-350 UWB location data with Plaspy dashboards and alerting to improve situational awareness and operational response.

For more information about Plaspy and supported configuration patterns visit https://www.plaspy.com and consult Megastek for device specific setup and firmware details at https://www.megastek.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time, so verify the latest device configuration instructions on the official Megastek website.
