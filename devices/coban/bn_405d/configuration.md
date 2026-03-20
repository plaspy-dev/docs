---
slug: /coban/bn_405d/configuration
id: bn_405d-configuration
sidebar_label: Configuration
title: Coban - BN-405D Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-405D setup with Plaspy including server settings and SMS commands
keywords:
  - Coban BN-405D configuration
  - Coban BN-405D setup
  - BN-405D Plaspy configuration
  - Coban tracker configuration
  - GPS tracker setup for Plaspy
  - vehicle tracker configuration
  - fleet tracker Coban BN-405D
  - Plaspy server configuration
  - BN-405D SMS commands
  - Coban GPS platform setup
---

# Coban - BN-405D Configuration

This page documents the public configuration context for using the Coban BN-405D tracker with Plaspy. It focuses on the practical, public-facing steps and server settings required to point a BN-405D at Plaspy for real-time tracking and telemetry. Where available, example SMS configuration commands from the manufacturer are included to help apply settings commonly used in onboarding to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide as a practical starting point and verify device-specific details against official Coban documentation when needed.

## Configuration Overview

The goal of configuring a BN-405D for Plaspy is to prepare the tracker so it can reliably send location, status, and alarm data to the Plaspy platform. This includes applying network settings, selecting the preferred transport, and validating that the device reports successfully to the shared Plaspy endpoint and port.

- Configure the tracker to use Plaspy server settings so position and telemetry reach the platform.
- Apply APN and authentication where the device requires cellular data connectivity.
- Select transport mode (UDP or TCP) and set the Plaspy server and port.
- Validate device reporting and confirm visibility in Plaspy.
- Optionally use SMS commands for parameter changes or to check current settings from the field.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices integrated with Plaspy use the same port and Plaspy will attempt to identify the tracker protocol automatically at the shared server endpoint.

## Typical Requirements Before Setup

- A powered BN-405D installed or connected to a test power source with vehicle power available.
- A cellular SIM with active data service and SMS capability if using SMS configuration commands.
- Access to the device configuration method supported by the unit such as SMS commands or the manufacturer tool.
- The device default password if required by SMS commands (the public example uses 123456).
- APN information from the cellular operator to enable GPRS data connectivity (placeholders may be used in commands).
- A phone number or SMS gateway for sending configuration SMS messages to the device if applying settings by SMS.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the BN-405D reports position and device telemetry to the shared Plaspy server endpoint and port so the platform can present live location, event notifications, and historical tracks.

- The device is set to send GPRS/TCP or GPRS/UDP packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives location updates and telemetry and maps those feeds into the vehicle record on the platform.
- Alarms and digital sensor events reported by the device are forwarded to Plaspy for alerting and automation.
- Plaspy’s automatic protocol detection determines the correct protocol handler for the device without separate protocol selection by the user.
- The shared server and consistent port simplify onboarding multiple trackers to the same Plaspy account.

## Common Configuration Workflow

1. Access the official Coban configuration method for the BN-405D, typically SMS command set or the manufacturer configuration tools.
2. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 and choose the transport protocol (UDP or TCP) if the device requires transport selection.
4. Provide the APN and APN credentials for the cellular operator if required by your SIM.
5. Apply or save the configuration and switch the device into GPRS mode if necessary.
6. Restart or power cycle the device if recommended by the manufacturer or after applying server and APN settings.
7. Validate that the device reports to Plaspy by checking the device status in Plaspy and using any available verification commands on the tracker.

## Example Configuration Commands

The BN-405D supports SMS-based configuration. The following public commands are manufacturer-provided examples. Send each command as an SMS to the device phone number. The sample device password used in these commands is 123456 and is the factory default in the examples below.

- Optional initial factory reset (use only when needed or during initial setup)
```sms
begin123456
```

- Set the time zone to UTC 0
```sms
time zone123456 0
```

- Set the APN (replace [apn] with your operator APN)
```sms
apn123456 [apn]
```

- Set the APN username and password (replace placeholders as needed)
```sms
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port
```sms
adminip123456 54.85.159.138 8888
```

- Set the position update interval (example provided by manufacturer)
```sms
fix060s060s***n123456
```

- Switch the device to GPRS mode and select UDP or TCP as applicable
```sms
gprs123456,1,1
```
or, if the simpler form is supported:
```sms
gprs123456
```

- Check current settings on the device
```sms
check123456
```

- Enable improved sensor transmission or fuel sensor status reporting (manufacturer example)
```sms
protocol123456 18
```

Notes on placeholders and usage:
- [apn] = your cellular operator APN string.
- [apnu] and [apnp] = APN username and APN password when required by the operator.
- Replace the example password 123456 with the device password if it has been changed from the factory default.
- Use the factory reset command only when necessary or during initial setup, and verify device behavior after a reset.

## Configuration Notes

- Manufacturer firmware versions and device behavior can change over time; SMS syntax and available commands may vary by firmware.
- SMS-based configuration is useful for remote field changes, but verify that your SIM supports SMS and that the device phone number is reachable.
- Choose UDP or TCP based on your network and reliability needs; Plaspy supports both transports and will automatically detect the tracker protocol at the server.
- Always confirm APN and credential values with your mobile operator before applying them to the device.
- After applying server and APN settings, a device restart or power cycle may be required for changes to take effect.

## Why Use Plaspy with This Configuration

Using the BN-405D with Plaspy provides a straightforward way to bring real-time GNSS position, telemetry, and alarm data into a centralized fleet management platform. The BN-405D’s support for TCP, UDP, and SMS configuration, combined with Plaspy’s shared server settings and automatic protocol detection, allows for efficient onboarding and consistent reporting across a mixed fleet.

To learn more about Plaspy and how it works with supported devices visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and hardware details verify configuration guidance on the manufacturer site https://www.coban.net/.
