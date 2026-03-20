---
slug: /megastek/mt65plus/configuration
id: mt65plus-configuration
sidebar_label: Configuration
title: Megastek - MT65PLUS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT65PLUS showing Plaspy server settings and example SMS commands
keywords:
  - Megastek MT65PLUS
  - MT65PLUS configuration
  - Megastek tracker setup
  - Plaspy configuration
  - GPS tracker setup
  - Ankle bracelet tracker
  - tamper resistant tracker
  - real time tracking
  - GPRS server setup
  - tracking server configuration
---

# Megastek - MT65PLUS Configuration

This page describes the public configuration context for using the Megastek MT65PLUS with Plaspy. It consolidates the shared server settings Plaspy requires, practical setup guidance, and example SMS commands that are commonly used to prepare the tracker for connection to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary with firmware revision, hardware revision, vendor tools, and how the device is installed. The example commands shown on this page reflect public configuration content and should be combined with the official Megastek documentation for device specific details.

## Configuration Overview

The configuration process prepares the MT65PLUS to communicate reliably with Plaspy and to report location and telemetry on the common Plaspy endpoint. For MT65PLUS devices, basic steps typically include identifying the device, setting operator APN, configuring the GPRS server endpoint, and enabling data mode so Plaspy receives regular updates.

- Ensure the device is identified to the platform so Plaspy can display it in the fleet list and maps.
- Configure the SIM operator APN and optional credentials so the device can establish a cellular data connection.
- Point the device to the Plaspy server endpoint so location and events are forwarded to the platform.
- Set reporting interval to match monitoring needs and bandwidth considerations.
- Validate connectivity and telemetry reporting in Plaspy after applying configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com as the canonical server hostname for Plaspy ingestion.
- Server IP 54.85.159.138 as the public IP address for direct device configuration.
- Port 8888 which is the single port used by Plaspy for all supported devices.
- Transport support for UDP or TCP depending on the device configuration option.
- Automatic protocol detection in Plaspy meaning the platform will detect the tracker protocol once messages arrive on the shared port.

## Typical Requirements Before Setup

- A charged MT65PLUS unit with the device IMEI available for identification.
- An active SIM card inserted and capable of GPRS or cellular data as required by the device.
- A phone or SMS gateway capable of sending configuration SMS messages if using SMS provisioning.
- Access to the official Megastek configuration method or software and the device manual for reference.
- The default device password if required for SMS commands for initial setup as shown in examples.
- A Plaspy account and any platform-side device registration details you typically use to track new devices.

## How This Tracker Connects to Plaspy

When configured, the MT65PLUS sends location and event data to Plaspy using the shared Plaspy server endpoint and port. Plaspy automatically determines the device protocol from incoming messages so device-side protocol selection is often not required beyond transport type.

- The tracker is set to forward GPRS data to the Plaspy endpoint at 54.85.159.138 on port 8888.
- Plaspy accepts either UDP or TCP transport and detects the message protocol automatically.
- Location updates, tamper and SOS events, and physiological telemetry are delivered to Plaspy for live monitoring.
- Reporting interval and GPRS mode must be enabled so the device initiates data sessions to Plaspy.
- After the device begins sending, Plaspy will show the device online and record events for historic playback.

## Common Configuration Workflow

1. Access the official Megastek configuration method for MT65PLUS such as SMS provisioning or the vendor configuration tool referenced in the device manual.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 in the server configuration field.
3. Set the server port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP transport if the device requires an explicit selection for transport.
5. Apply or save the configuration and, if using SMS, confirm the device accepted each command.
6. Restart the device if required by the manufacturer or the workflow you used to ensure settings take effect.
7. Validate that the device reports to Plaspy by checking the device status and recent messages on the Plaspy platform.

## Example Configuration Commands

The MT65PLUS may be configured by SMS commands. The public example below follows the manufacturer provided command patterns. The default device SMS password shown in the manufacturer sample is 000000. Replace placeholders as instructed before sending.

Notes on placeholders
- {{imei}} refers to the device IMEI number. Where the device requires a 15 digit device ID derived from IMEI, use the last 15 digits of the IMEI, padding if needed.
- {{apn}}, {{apnu}}, and {{apnp}} are placeholders for the operator APN, APN username, and APN password respectively. Provide only the fields required by your mobile operator.

Set device ID using the device password and a 15 digit device identifier
```
M000000,22,<last15digits_of_IMEI>
```

Set the operator APN. Use only the APN if no username or password is required
```
M000000,23,{{apn}}
```

Or include APN username and password if required by the operator
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

Set the update interval to 60 seconds
```
M000000,25,60
```

Set the GPRS server following the manufacturer sample. This example uses the Plaspy IP and port
```
M000000,24,56 54.85.159.138,8888
```

Enable GPRS mode so the device uses cellular data to report
```
M000000,21,2
```

Important
- The command examples above follow the publicly available manufacturer pattern. Confirm whether your device expects the server address as an IP address, a hostname, or in a specific indexed format before sending commands.
- The example command that sets the GPRS server includes a server index value shown as 56 in the manufacturer example. Preserve the index if the device command syntax requires it.

## Configuration Notes

- SMS based provisioning is commonly used for initial setup but vendor tools or USB configuration may be available depending on firmware and hardware revision.
- Firmware versions and region variations can change command syntax or supported parameters. Always verify with the Megastek manual for your specific firmware revision.
- Choose UDP or TCP based on your deployment preferences and any manufacturer guidance; Plaspy will auto detect the protocol once messages arrive.
- Plaspy uses the same port 8888 for all devices so ensure firewalls and network policies allow outgoing traffic to d.plaspy.com or 54.85.159.138 on that port.
- Keep the device password secure and follow your organization policies when distributing provisioning credentials.

## Why Use Plaspy with This Configuration

Using the MT65PLUS with Plaspy provides consolidated visibility for supervised monitoring programs. When the device is configured to report to the Plaspy server, location, tamper events, SOS alerts, and available telemetry become visible to supervisors through Plaspy maps and event workflows. This helps organizations maintain situational awareness and act on incidents quickly.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer instructions consult Megastek documentation at https://www.megastek.com/ to verify current behavior and the exact commands for your MT65PLUS firmware and region.
