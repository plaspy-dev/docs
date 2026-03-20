---
slug: /concox/jm_bl11/configuration
id: jm_bl11-configuration
sidebar_label: Configuration
title: Concox - JM-BL11 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM-BL11 to connect to Plaspy with shared server settings and SMS setup commands
keywords:
  - Concox JM-BL11 configuration
  - Concox JM-BL11 setup
  - JM-BL11 Plaspy
  - Plaspy server configuration
  - Concox tracker setup
  - JM-BL11 server settings
  - GPS tracker configuration
  - bike lock GPS setup
  - micro mobility tracking
  - fleet management tracker
---

# Concox - JM-BL11 Configuration

This page documents the public configuration context for using the Concox JM-BL11 with Plaspy. It gathers the practical server settings and the publicly available SMS configuration commands used to prepare JM-BL11 units for communication with the Plaspy platform. Use this guide to understand the shared settings used by Plaspy and how those settings are applied to the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the SMS commands and workflows here as practical public guidance rather than a replacement for the official Concox documentation.

## Configuration Overview

This configuration process prepares a JM-BL11 for reliable reporting to Plaspy by setting the network APN, the Plaspy server endpoint, reporting intervals, and enabling GPRS/SMS configuration where applicable. The example commands below show a common SMS-based workflow used with Concox devices to apply these values.

- Configure the device APN and optional credentials so it can establish GPRS or LTE data connectivity.
- Point the tracker to the Plaspy server endpoint to ensure telemetry and location are sent to Plaspy.
- Set reporting intervals to control how often GNSS and event data are transmitted to Plaspy.
- Enable GPRS data mode so the device can stream data to Plaspy over the mobile network.
- Verify current settings with a readback command to confirm the device reports to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These shared settings are used across Plaspy supported devices and must be entered on the tracker or via the official Concox configuration method so the JM-BL11 can deliver telemetry to the Plaspy platform.

## Typical Requirements Before Setup

- A powered and accessible JM-BL11 unit with adequate battery or connected power for configuration.
- A valid SIM card installed and active data plan with the correct APN for your mobile operator.
- Means to send SMS commands to the device or access to the Concox configuration tool that supports the JM-BL11.
- Knowledge of your operator APN and optional APN username and password if required by the SIM.
- Network coverage for LTE Cat M1 / NB2 or fallback data modes required for the device to reach Plaspy.
- Permission to change device settings and, if necessary, to restart the device after configuration.

## How This Tracker Connects to Plaspy

When configured with the Plaspy endpoint, the JM-BL11 streams GNSS fixes, event notifications, and telemetry to the shared Plaspy server and port. Plaspy ingests these messages, identifies the tracker protocol automatically, and makes the data available for live maps, alerts, and fleet dashboards.

- The device reports GNSS location and position fixes to the Plaspy server endpoint.
- Event data such as motion, tamper alerts, battery and sensor telemetry are sent to Plaspy for monitoring.
- Communication is established to the shared Plaspy endpoint using the configured transport (UDP or TCP) on the same port Plaspy uses for all devices.
- Plaspy automatically detects the tracker protocol so devices with supported protocols appear correctly in the platform after they connect.
- Regular reporting intervals control how frequently data is transmitted to Plaspy for real-time visibility.

## Common Configuration Workflow

1. Access the official Concox configuration method for the JM-BL11 such as the manufacturer SMS command interface or Concox configuration tool.
2. Prepare and confirm your operator APN and any APN username or password to use during setup.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and enable GPRS/data mode if required.
6. Restart the device when requested or after configuration to ensure new settings take effect.
7. Validate that the JM-BL11 reports to Plaspy by confirming the device appears and sends data in the platform or by using the device verification command.

## Example Configuration Commands

To set the tracker send the following SMS commands in sequence. Commands are shown in the order commonly used during initial setup. The reset command is optional and only needed when you want to restore factory settings before configuration.

- Optional factory reset (only if you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}#
```
If your APN requires a username and password include the optional fields:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN name, {{apnu}} = APN username, {{apnp}} = APN password)

- Set the GPRS server to use the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server to use the Plaspy IP on port 8888
```text
SERVER,0,54.85.159.138,8888,0#
```
(Plaspy supports using either the domain or the IP; Plaspy uses the same port for all devices and will automatically detect the tracker protocol)

- Set the location update interval to every 60 seconds
```text
TIMER,60#
```
Alternative timer format where both GPS and upload intervals are set:
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- To check current GPRS and server parameters on the device
```text
GPRSSET#
```

Use the commands above in the order that matches your deployment process. Sending the SERVER command with either d.plaspy.com or 54.85.159.138 and port 8888 is required so the JM-BL11 can connect to Plaspy over your chosen transport.

## Configuration Notes

- Firmware differences may change the exact SMS command set or required command syntax; verify the command format with manufacturer materials if a command does not respond as expected.
- Configuration can be performed by SMS as shown or through Concox vendor tools when available; use the official method recommended for your firmware and deployment scale.
- Choose TCP or UDP transport according to your operational needs; Plaspy supports either transport and will detect the device protocol automatically when the unit connects to the shared port.
- Preserve APN credentials accurately when entering them; incorrect APN settings will prevent the device from establishing data connectivity to reach Plaspy.
- After configuration, allow a short period and then confirm the device successfully reports to Plaspy before completing any field installation.

## Why Use Plaspy with This Configuration

Using the JM-BL11 with Plaspy provides fleet operators with consolidated location, event, and telemetry reporting that supports anti-theft workflows, geofence enforcement, and maintenance planning for large micro-mobility deployments. The combination of rugged hardware, long battery life, and Plaspy’s shared server approach simplifies onboarding and scaling of distributed fleets.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and manufacturer details on the Concox site https://www.iconcox.com/ since manufacturer specifications and setup procedures can change over time.
