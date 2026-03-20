---
slug: /xexun/x07/configuration
id: x07-configuration
sidebar_label: Configuration
title: Xexun - X07 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun X07 wearable showing Plaspy server settings SMS commands and setup steps for integration
keywords:
  - Xexun X07 configuration
  - Xexun X07 setup
  - Xexun X07 server configuration
  - Xexun X07 Plaspy
  - X07 tracker configuration
  - X07 GPS setup
  - Xexun wearable configuration
  - Xexun health watch setup
  - Plaspy device configuration
  - GPS tracker configuration
---

# Xexun - X07 Configuration

This page documents the public configuration context for using the Xexun X07 wearable with Plaspy. It focuses on the practical server settings, typical prerequisites, and the SMS configuration commands that are commonly used to point an X07 to Plaspy for location and telemetry reporting. Use this page together with the device manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The X07 can be configured by SMS commands as shown below and supports cellular networks for data and SMS based configuration when required.

## Configuration Overview

The configuration process prepares the X07 to communicate with Plaspy so location and health telemetry are visible in the platform. Typical objectives are to set the device APN, point the device to the Plaspy ingestion endpoint, confirm transport settings, and validate reporting frequency so the device appears in Plaspy.

- Set operator APN and optional APN username and password so the device can use mobile data.
- Configure the GPRS server endpoint to d.plaspy.com or the Plaspy IP and the required port so reports reach Plaspy.
- Select UDP or TCP transport on the device if required and set the reporting interval appropriate for monitoring needs.
- Validate that the device is reporting to Plaspy and visible in the Plaspy dashboard or through platform telemetry.
- Optionally restore factory settings before configuration when performing a clean setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint settings used to receive telemetry from compatible trackers including the X07.

## Typical Requirements Before Setup

- Charged device battery and basic device health confirmation before beginning configuration.
- An active SIM with a data plan and SMS capability appropriate for your region and carrier.
- Access to the official Xexun configuration method such as SMS commands or vendor configuration tools.
- Knowledge of the device password if required for SMS commands; the sample default password in public documentation is 123456.
- Network coverage that supports the device cellular bands for data reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the X07 forwards position and telemetry to Plaspy's shared ingestion endpoint. Plaspy normalizes the incoming messages so caregivers and operations staff can view location, alerts, and device status in one place.

- The X07 sends periodic location and telemetry reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device configuration; Plaspy accepts either on port 8888.
- Plaspy automatically detects the tracker protocol so no per-device protocol selection is required on the platform side.
- Reports become visible in Plaspy for live monitoring, historical routes, and configured alerts such as geofences.

## Common Configuration Workflow

1. Access the official Xexun configuration method or vendor software, or prepare to send SMS commands if using the SMS setup workflow.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport on the device if the device requires a transport selection.
5. Configure APN settings for your mobile operator and supply APN username and password if required by the carrier.
6. Apply or save the configuration and restart the device if the device requires a reboot.
7. Validate that the device reports to Plaspy by observing device activity in the Plaspy dashboard or by confirming incoming telemetry through logs.

## Example Configuration Commands

The X07 can be configured by sending SMS commands to the device. The following commands are taken from public device configuration examples. The sample device password used in these commands is 123456 which is listed as the default in the public configuration content. If your device password differs, replace 123456 with the actual device password.

- Optional initial factory restore (use only if you intend to reset the device):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your carrier APN):
```text
apn123456 {{apn}}
```

- Set the APN username if required by your carrier (replace {{apnu}} with the APN username):
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required by your carrier (replace {{apnp}} with the APN password):
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the public Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (use this command if the device requires enabling GPRS mode):
```text
gprsmode123456
```

- Set the reporting interval to 60 seconds (example interval command):
```text
t060s***n123456
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string required for data.
- {{apnu}} is the APN username if your carrier requires one.
- {{apnp}} is the APN password if your carrier requires one.

Preserve correct password substitution when sending SMS commands and ensure the device accepts SMS configuration for your firmware version.

## Configuration Notes

- SMS based configuration is a common public method for this device family; confirm SMS command support on your specific firmware.
- Firmware and hardware revisions can change command syntax or behavior. Verify commands against the manufacturer documentation before mass deployment.
- When given the option, choosing UDP or TCP affects reliability and delivery behavior; select the transport that matches your operational needs and carrier recommendations.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so platform side protocol selection is not required.
- Use the factory reset command only when a full device reset is necessary, as it clears existing configuration.

## Why Use Plaspy with This Configuration

Configuring the Xexun X07 to report to Plaspy centralizes location and health telemetry so caregivers and operations teams can monitor wearers in real time, receive geofence alerts, and review historical movement. For organizations that manage personal safety or elder care, combining the X07 wearable with Plaspy provides a single monitoring environment for both location and vital sign data.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and the latest firmware details at the manufacturer site https://www.xexun.com/. Manufacturer specifications and setup procedures can change over time so confirm current instructions on the official Xexun documentation before final deployment.
