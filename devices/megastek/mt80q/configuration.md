---
slug: /megastek/mt80q/configuration
id: mt80q-configuration
sidebar_label: Configuration
title: Megastek - MT80Q Configuration
sidebar_class_name: menu_item_tracker
description: Practical public configuration guide for Megastek MT80Q tracker and Plaspy compatibility
keywords:
  - Megastek MT80Q configuration
  - Megastek MT80Q setup
  - MT80Q Plaspy integration
  - MT80Q server configuration
  - MT80Q GPS tracker setup
  - Plaspy tracker configuration
  - personal tracking watch setup
  - GPRS tracker configuration
  - wearable GPS tracker configuration
  - MT80Q APN and server setup
---

# Megastek - MT80Q Configuration

This page covers the public configuration context for using the Megastek MT80Q personal tracking watch with Plaspy. It explains the shared server settings Plaspy requires, the typical preparation steps for a handheld or wearable GPRS tracker, and the publicly available SMS configuration commands that are commonly used to point an MT80Q at a remote tracking server.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MT80Q supports SMS based configuration and GPRS reporting; below you will find the Plaspy server settings to use, a practical workflow, and the SMS commands shown in the device public configuration sample.

## Configuration Overview

The configuration process prepares the MT80Q to communicate with Plaspy over the device GPRS connection or SMS for initial setup. In practical terms this means setting the device APN, configuring the server endpoint and port, enabling GPRS reporting, and verifying that the device sends position and event messages that Plaspy can ingest.

- Configure the MT80Q APN and credentials so it can attach to a mobile data network.
- Set the server endpoint to Plaspy so the device reports position and events to the platform.
- Enable GPRS mode and an appropriate position upload interval to balance timeliness and battery life.
- Validate connectivity and view the device on Plaspy to confirm reporting and alerts.
- Use SMS configuration where supported by the device for initial setup or when field access is limited.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration when the device accepts hostnames.
- Server IP 54.85.159.138 as an alternate direct endpoint for devices that require an IP address.
- Port 8888 which is the single port Plaspy uses for all supported devices.
- Transport support for UDP or TCP depending on the device configuration option.
- Plaspy automatically detects the tracker protocol so you do not normally need to select a protocol beyond choosing UDP or TCP if the device requires transport selection.

## Typical Requirements Before Setup

- A charged MT80Q with a working SIM card that has GPRS data enabled and SMS capability for configuration.
- The device IMEI and the device admin password if SMS configuration requires one (the public sample uses default password 000000).
- Access to the manufacturer SMS command list or official configuration tool from Megastek to send the correct commands.
- Basic coverage on a GSM GPRS network so the tracker can attach and report to Plaspy.
- A method to receive confirmations from the device such as SMS replies or observation of position reports in Plaspy.

## How This Tracker Connects to Plaspy

The MT80Q transmits location and event data to the Plaspy server endpoint over the GPRS connection once APN and server settings are configured. Plaspy ingests those messages and presents them as live location updates, historical tracks, and event notifications.

- The device is configured to report to the shared Plaspy server endpoint and port.
- Position and telemetry are sent by GPRS uploads to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol so incoming messages are parsed without extra protocol selection on the platform side.
- Event reports such as SOS, fall alarm, and anti disassembly alerts are forwarded to Plaspy for immediate notification.
- Historical track logging from the MT80Q is available to Plaspy for route retrieval and reporting.

## Common Configuration Workflow

1. Access the official Megastek configuration method such as the device SMS commands or any vendor provided configuration tool or document.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server configuration field, depending on whether the device accepts a hostname or requires an IP address.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP for transport if the device requires a transport selection.
5. Configure the device APN and any APN credentials required by the SIM using the manufacturer method.
6. Apply or save the configuration and restart the MT80Q if the device or vendor instructions require a reboot.
7. Validate that the device reports to Plaspy by checking for initial connection messages, position updates, or event alerts on the Plaspy platform.

## Example Configuration Commands

The MT80Q public configuration sample provides SMS commands as a simple method to configure the tracker. These commands use the device admin password which in the sample is the factory default 000000. Replace placeholders as noted before sending SMS to the device number.

1) Set the device ID
- Purpose: Register or set the device identifier on the tracker.
- Replace IMEI placeholder with your device IMEI last 15 digits.
```
M000000,22,{{IMEI_LAST_15_DIGITS}}
```
(Original template form in the public sample was shown as a web expression. Replace with the actual IMEI digits for SMS use.)

2) Set the operator APN
- Purpose: Configure the mobile operator APN and optional username and password.
- Replace [apn] [apnu] and [apnp] with your SIM APN and optional login credentials.
```
M000000,23,[apn]
```
or if username and password are required:
```
M000000,23,[apn],[apnu],[apnp]
```

3) Set the update interval to 60 seconds
- Purpose: Configure how frequently the device uploads positions to the server.
```
M000000,25,60
```

4) Set the GPRS server to Plaspy using the public sample
- Purpose: Point the tracker to Plaspy using the provided IP and port. This sample shows the server slot and the Plaspy IP with port.
```
M000000,24,56 54.85.159.138,8888
```
Note: If the device supports hostnames, you may use d.plaspy.com in place of the IP when configuring the server by hostname.

5) Enable GPRS mode
- Purpose: Turn on GPRS data reporting mode so the device will send position data.
```
M000000,21,2
```

Important notes about placeholders and the password:
- [apn] is your mobile operator APN. [apnu] and [apnp] are optional APN username and password fields when required by your carrier.
- {{IMEI_LAST_15_DIGITS}} means the last 15 digits of the device IMEI; replace it with the actual IMEI value for the command.
- The public sample uses the default device admin password 000000 in the SMS command prefix. If your device password was changed, use the current password.

## Configuration Notes

- SMS based setup is supported by the MT80Q public sample and is useful when field access is easier than using a configuration cable or tool.
- Firmware versions and vendor tools can change command formats or available parameters; always confirm the exact SMS syntax with Megastek documentation for your firmware revision.
- Choose UDP or TCP according to device support and network considerations; remember that Plaspy accepts both transports and automatically detects the protocol.
- Plaspy uses port 8888 for all devices so the tracker server port must be set to 8888 to reach the platform.
- If the device supports hostnames, d.plaspy.com can be used instead of the IP address 54.85.159.138 to allow DNS resolution and future server migrations without changing device configurations.

## Why Use Plaspy with This Configuration

Using the Megastek MT80Q with Plaspy provides straightforward visibility for personal safety and asset monitoring. With GPRS reporting and automatic APN query, the MT80Q can be brought online quickly and start delivering location, SOS alerts, fall detection events, and historical tracks into Plaspy for monitoring, alerting, and reporting.

To learn more about Plaspy and how it ingests reports from compatible trackers like the MT80Q visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify the latest information on the Megastek website https://www.megastek.com/.
