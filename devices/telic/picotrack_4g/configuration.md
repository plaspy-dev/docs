---
slug: /telic/picotrack_4g/configuration
id: picotrack_4g-configuration
sidebar_label: Configuration
title: Telic - Picotrack 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Telic Picotrack 4G showing Plaspy server settings and example SMS commands for connectivity
keywords:
  - Telic Picotrack 4G configuration
  - Picotrack 4G setup for Plaspy
  - Telic GPS tracker configuration
  - Picotrack server configuration
  - Plaspy tracker setup
  - Picotrack 4G SMS commands
  - LTE M tracker configuration
  - Picotrack GPS platform setup
  - Vehicle tracking Picotrack
  - Fleet tracking Picotrack
---

# Telic - Picotrack 4G Configuration

This page covers the public configuration context for using the Telic Picotrack 4G with Plaspy. It consolidates the shared Plaspy server values you will point the device at and extracts the publicly available SMS configuration commands that Telic devices commonly use. The goal is practical: prepare the device to communicate to Plaspy so it becomes visible in the platform for real time tracking and historical reporting.

Plaspy uses a shared server endpoint and port across supported trackers and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The Picotrack 4G is LTE Cat M1 capable, and the publicly documented configuration below uses SMS commands and GPRS parameters to set APN and server information before enabling GPRS mode.

## Configuration Overview

The configuration process prepares the Picotrack 4G to send telemetry and location updates to Plaspy and to be recognized by the platform. The public workflow below reflects typical SMS based device configuration and the Plaspy server endpoint that the device must use.

- Configure the device APN and optional APN credentials so the Picotrack 4G can establish a data session.
- Point the device to the Plaspy ingestion endpoint (server IP or domain) and set the common port so Plaspy receives messages.
- Choose the transport mode (UDP or TCP) as required by the device and enable GPRS reporting to start live updates.
- Validate the device reports to Plaspy by checking device status and using the provided verification command.
- Optionally perform a factory reset or timezone adjustment during initial provisioning.

## Plaspy Server Settings

- Server domain d.plaspy.com as the canonical ingestion hostname to use when your device supports domain names.
- Server IP 54.85.159.138 as the numeric endpoint supported for direct configuration.
- Port 8888 which Plaspy uses for all supported devices.
- Transport support for UDP or TCP depending on tracker configuration options; the Picotrack 4G may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol after the device starts sending data to the shared endpoint.

## Typical Requirements Before Setup

- A charged device or powered installation and physical access to the tracker for SMS provisioning if required.
- A valid cellular SIM with a data plan and correct APN information for the mobile network operator.
- Ability to send SMS commands to the device from a management phone or provisioning tool, or access to Telic configuration software if available.
- Knowledge of the device default password so SMS commands are accepted; the public sample setup uses the default password 123456.
- Access to the official Telic documentation and release notes to confirm commands and firmware differences.
- A destination for validation, for example an account on Plaspy where you can confirm device connectivity after configuration.

## How This Tracker Connects to Plaspy

When configured with the Plaspy endpoint and port, the Picotrack 4G opens a cellular data session and forwards location and telemetry messages to the shared Plaspy ingestion endpoint. Plaspy ingests these messages, identifies the device protocol automatically, and exposes data through tracking maps, alerts, and reports.

- The device is configured to report to d.plaspy.com or to the numeric endpoint 54.85.159.138 so messages arrive at Plaspy.
- Messages are sent to port 8888 which Plaspy uses universally for supported trackers.
- The tracker uses either UDP or TCP transport depending on the chosen configuration and network behavior.
- Plaspy automatically detects the tracker protocol from the incoming messages and decodes telemetry for display.
- Once reporting is active, Plaspy provides visibility for location updates, heartbeats, and event reporting from the device.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS provisioning or Telic configuration tools and confirm the device accepts commands.
2. Enter the Plaspy server as either the domain d.plaspy.com or the numeric server address 54.85.159.138 in the device server settings.
3. Set port 8888 as the destination port used by Plaspy for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and supports both options.
5. Configure APN and optional APN credentials for the SIM so the device can establish GPRS data.
6. Apply or save the configuration and, if required, restart or reinitialize the device to activate the new settings.
7. Validate that the device reports to Plaspy by using the verification command and checking device status in Plaspy.

## Example Configuration Commands

The Picotrack 4G can be configured using SMS commands. The following public commands are provided in the manufacturer sample. The device default password used in these examples is 123456. Replace placeholders with your operator values where indicated.

- Optional initial factory reset (use only when needed for a clean start):
```
begin123456
```

- Set the device time zone to UTC 0:
```
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```
apn123456 [apn]
```

- Set the APN username and password if required by your operator (replace [apnu] and [apnp] with credentials):
```
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy numeric endpoint and port (Plaspy also accepts d.plaspy.com if the device supports domains):
```
adminip123456 54.85.159.138 8888
```

- Switch the device to GPRS reporting mode. Use either the explicit mode parameters or the short command depending on firmware:
```
gprs123456,1,1
```
or
```
gprs123456
```

- Verify current settings on the device:
```
check123456
```

Notes on placeholders: [apn] is your mobile operator APN value, [apnu] is an optional APN username, and [apnp] is an optional APN password. Keep the device password (123456 in the examples) private and change it according to Telic guidance if required.

## Configuration Notes

- SMS based provisioning is shown in the public sample commands; some deployments use Telic configuration software or field tools. Use the method recommended for your firmware and hardware revision.
- Firmware versions and hardware variants such as the PAIP or UKSP variants can alter available commands or exact syntax. Verify commands against your device firmware.
- Choose UDP or TCP based on network reliability and device support. Plaspy accepts either transport on port 8888.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the device protocol from incoming messages.
- Keep a record of device passwords and change defaults when appropriate according to Telic instructions.

## Why Use Plaspy with This Configuration

Using the Picotrack 4G configured to report to Plaspy gives organizations consolidated visibility into location and telemetry across fleets and remote assets. The combination of LTE Cat M1 efficiency in the Picotrack 4G and Plaspy’s unified ingestion endpoint simplifies provisioning and reduces per device configuration overhead by relying on shared server and port settings.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior on the manufacturer's website https://www.telic.de. Manufacturer specifications and setup steps can change over time so always confirm current procedures with Telic documentation before mass deployment.
