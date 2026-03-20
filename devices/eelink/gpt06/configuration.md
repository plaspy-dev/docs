---
slug: /eelink/gpt06/configuration
id: gpt06-configuration
sidebar_label: Configuration
title: EElink - GPT06 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT06 and Plaspy server settings for reliable tracking
keywords:
  - EElink GPT06 configuration
  - GPT06 Plaspy setup
  - EElink GPS tracker setup
  - GPT06 server configuration
  - GPS tracker GPRS setup
  - SMS configuration GPT06
  - vehicle tracking platform setup
  - tracker protocol detection
  - GPS tracker APN configuration
  - fleet tracking integration
---

# EElink - GPT06 Configuration

This page covers the public configuration context for using the EElink GPT06 tracker with the Plaspy platform. It summarizes the practical, publicly available steps to point the device at Plaspy servers and validate basic connectivity so the tracker can send location and alarm data to the platform.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer side steps for the GPT06 can vary by firmware, hardware revision, installer preferences, and vendor tools. The GPT06 supports GPRS/WCDMA upload and SMS configuration, and the examples below use the public SMS commands that are commonly supported by this model.

## Configuration Overview

This configuration prepares the GPT06 to communicate reliably with Plaspy so that location updates, SOS alerts, geofence events, and motion alarms are visible in the fleet platform.

- Set the mobile operator APN so the tracker can use cellular data for GPRS or WCDMA uploads.
- Point the device to the Plaspy server using the public domain or IP and the shared port.
- Choose a transport mode (UDP or TCP) if required and apply the setting.
- Validate connectivity and reporting so the device appears in Plaspy and sends periodic updates.
- Use SMS or the manufacturer tool to send configuration commands where applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol once the device sends data to the server

Plaspy uses the same port for all supported devices and will detect the compatible protocol automatically when the tracker uploads data to the server endpoint.

## Typical Requirements Before Setup

- A charged and powered GPT06 tracker with access to the device configuration method supported by the installer
- An active SIM card with a data plan and the correct APN values for the mobile operator
- Ability to send SMS to the device if using SMS-based configuration commands
- Knowledge of the operator APN and any username or password required by the operator
- Access to the manufacturer's documentation or configuration tool for your device firmware version

## How This Tracker Connects to Plaspy

The GPT06 can upload location and event data over cellular data channels to the Plaspy server endpoint and port so the platform can display tracking and alarm information.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be configured as UDP or TCP depending on device options
- Plaspy automatically detects the tracker protocol when the device begins sending data
- SOS, geofence, motion and alarm events reported by the GPT06 are delivered to the platform for monitoring
- Once properly configured, the device becomes visible in Plaspy and can participate in real time tracking and history playback

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT06, such as SMS commands or the manufacturer configuration tool.
2. Configure the operator APN using the correct APN values for the SIM card in the device.
3. Enter the Plaspy server as d.plaspy.com or alternatively use 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires choosing transport.
5. Apply or save the configuration on the device using the manufacturer method (for GPT06 this can be SMS commands).
6. Restart or power cycle the tracker if the firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy and appears in the platform with periodic updates.

## Example Configuration Commands

The GPT06 supports SMS based configuration. The following public SMS commands are commonly used in the order shown. Send each command as an SMS to the tracker from an authorized phone number.

1. Optional initial factory reset (use only if you need to clear prior settings)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Replace the placeholders with your carrier values. [apn] is required. [apnu] and [apnp] are optional username and password fields if your carrier requires them.
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Example variants you may send:
```
APN,your.apn.name#
```
or if username and password are required:
```
APN,[apn],[apnu],[apnp]#
```

4. Set the GPRS server to the Plaspy domain and port
```
SERVER,1,d.plaspy.com,8888#
```

Alternative using the Plaspy server IP
```
SERVER,0,54.85.159.138,8888#
```

5. Set the location update interval to every 60 seconds
```
TIMER,60#
```

6. Check the current parameters
```
PARAM#
```

Notes on commands
- Send each command as an independent SMS to the device. Maintain the order where it matters (for example set APN before setting the server if the device needs network access immediately).
- Placeholders [apn], [apnu], and [apnp] should be replaced with the carrier APN, APN username, and APN password as provided by the mobile operator.
- The SERVER command can use either the domain d.plaspy.com or the public IP 54.85.159.138; both target Plaspy on port 8888.

## Configuration Notes

- Firmware versions and regional variants can change command syntax or available features; always confirm command compatibility with your device firmware.
- SMS based setup is useful in the field where direct data connectivity is not yet available; confirm authorized SMS control numbers in the device documentation.
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and will detect the protocol automatically.
- Verify APN values and data plan before attempting to push data to Plaspy to avoid connectivity delays.
- After applying configuration, confirm the device is reporting to Plaspy and that events such as SOS and geofence alerts appear as expected.

## Why Use Plaspy with This Configuration

Using the GPT06 with Plaspy provides a straightforward path to fleet or asset visibility by directing the tracker to a shared, publicly documented Plaspy server endpoint and port. The GPT06’s cellular upload options and event reporting such as SOS and geofence make it suitable for organizations that need reliable position updates and alarm visibility in a single platform.

To learn more about Plaspy and how to integrate devices, visit https://www.plaspy.com. For the latest EElink GPT06 commands, firmware notes, and official device details verify information with the manufacturer at https://www.eelink.com.cn/. Device specific methods, firmware behavior, and manufacturer details may change over time so always check the manufacturer site for the most current instructions.
