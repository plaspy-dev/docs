---
slug: /topshine/otk02_4g/configuration
id: otk02_4g-configuration
sidebar_label: Configuration
title: TopShine - OTK02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the TopShine OTK02-4G OBD tracker with Plaspy using shared server settings and SMS commands
keywords:
  - TopShine OTK02-4G configuration
  - TopShine OTK02-4G setup
  - TopShine OTK02-4G Plaspy
  - OTK02-4G GPS tracker configuration
  - TopShine OBD tracker setup
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker server settings
  - 4G OBD tracker configuration
  - OTK02-4G server configuration
---

# TopShine - OTK02-4G Configuration

This page documents the public configuration context for using the TopShine OTK02-4G OBD II tracker with Plaspy. It describes the practical server settings and the common SMS commands and steps that are publicly available for integrating the tracker so it can report location and OBD telemetry into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during inbound connections. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so follow the public commands shown here and confirm any device specific details with the official TopShine documentation when needed.

## Configuration Overview

This configuration process prepares the OTK02-4G to communicate with Plaspy by setting the network APN, the GPRS server endpoint, and the device identification so Plaspy can ingest position and OBD telemetry. The model supports SMS and cellular data configuration methods commonly used for fast OBD plug and play installation.

- Configure the device identification so Plaspy recognizes the tracker instance and links it to the IMEI.
- Set the mobile operator APN details so the tracker can send GPRS data.
- Point the device to the Plaspy server endpoint and port so messages reach the platform.
- Enable GPRS mode and verify reporting intervals so the device transmits regularly to Plaspy.
- Validate connectivity and device reporting in the Plaspy dashboard after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration where supported
- Server IP 54.85.159.138 for direct IP based configuration
- Port 8888 the shared port used by Plaspy for all compatible devices
- Transport support for UDP or TCP choose the transport the device firmware supports
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered vehicle OBD II port ready for the OTK02-4G plug and play installation
- An active SIM card with data enabled and the correct APN details for the mobile operator
- Access to an SMS capable phone or configuration tool if the device is configured by SMS
- The device IMEI available for identification and device id commands
- Manufacturer configuration instructions or access to the TopShine setup method
- A Plaspy account to validate that the device is visible and reporting after setup

## How This Tracker Connects to Plaspy

The OTK02-4G reports GNSS positions and OBD-sourced telemetry to Plaspy using cellular data or SMS as supported by the device and network. The device is configured to send its telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest positions, events, and diagnostics for live monitoring and historical playback.

- The tracker sends periodic location updates and OBD telemetry to the Plaspy endpoint at 54.85.159.138 on port 8888
- If the tracker firmware supports domain names, it can be pointed to d.plaspy.com instead of the IP
- Plaspy receives events and telemetry and automatically detects the tracker protocol for parsing
- Alarms and OBD events are forwarded to the Plaspy platform for dashboards and alerts
- Offline logger data is uploaded when the tracker regains network connectivity so Plaspy maintains history

## Common Configuration Workflow

1. Access the official TopShine configuration method described by the manufacturer, typically SMS commands or an OEM tool.
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 depending on device support.
3. Set port 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Set the operator APN, username, and password if required by the SIM operator.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device presence and recent position events in the Plaspy platform.

## Example Configuration Commands

The TopShine OTK02-4G accepts SMS configuration commands. The sample public commands below use the device default password 000000. Replace placeholders and IMEI derived values as instructed.

- Factory reset (optional for initial setup or if a reset is required)
```
W000000,990,099###
```
Note: This is the public factory reset style command shown in the TopShine configuration examples. Use only when you intend to reset to factory defaults.

- Set the device ID (use the first 14 digits derived from the IMEI)
```
W000000,010,<14_digit_device_id>
```
Explanation: Set the device id using the first 14 digits derived from the IMEI. Plaspy uses the full 15 digit IMEI as the device identifier in the platform, so ensure the IMEI is known when registering or validating the device.

- Set the operator APN (use your operator values; username and password optional)
```
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explanation: [apn] is the mobile operator APN. If your operator requires a username and password include [apnu] and [apnp] respectively. Keep the placeholders as needed for your SIM configuration.

- Set the GPRS server to Plaspy using the provided IP and port
```
W000000,012,54.85.159.138,8888
```
Note: The example above uses the Plaspy server IP and the shared port 8888. If the device supports domain names you may be able to use d.plaspy.com instead of the IP.

- Switch the tracker to GPRS mode
```
W000000,013,2
```

- Set the update interval (example value shown)
```
W000000,014,6
```
Explanation: The trailing numeric value controls the reporting interval according to the device command reference. Use the value appropriate for your reporting policy.

- Query IMEI (verification command)
```
W000000,601
```
Explanation: Use this command to request the device IMEI over SMS if you do not have it printed on the device or packaging.

## Configuration Notes

- Firmware variations may change the exact SMS command syntax or available parameters; always confirm with the device firmware release notes.
- The OTK02-4G supports both SMS based commands and GPRS reporting paths; use SMS for initial provisioning where supported.
- Choose UDP or TCP based on device firmware options and your network needs; Plaspy accepts both transports and automatically detects the protocol.
- The Plaspy platform uses the same port 8888 for all devices so use that port when configuring the tracker.
- Verify operator APN, username, and password before switching to GPRS mode to avoid connectivity interruptions.

## Why Use Plaspy with This Configuration

Using the TopShine OTK02-4G with Plaspy gives rapid, low friction deployment for vehicle tracking and OBD telemetry. The plug and play OBD II form factor simplifies installs, while the ability to configure the device by SMS or GPRS and point it to Plaspy ensures devices quickly become visible in fleet dashboards and alerting workflows.

To learn more about Plaspy and how the platform ingests and displays device telemetry visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer documentation verify details at the official TopShine site https://www.gztopshine.com/ before applying changes.
