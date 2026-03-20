---
slug: /megastek/mt80/configuration
id: mt80-configuration
sidebar_label: Configuration
title: Megastek - MT80 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Megastek MT80 for use with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - Megastek MT80
  - Megastek MT80 configuration
  - MT80 setup
  - MT80 server configuration
  - Plaspy MT80
  - GPS tracker configuration
  - healthcare GPS watch setup
  - MT80 GPRS setup
  - MT80 SMS commands
  - MT80 Plaspy integration
---

# Megastek - MT80 Configuration

This page documents the public configuration context for using the Megastek MT80 Series GPS watch with Plaspy. It explains the shared Plaspy server settings you must point the device to, common setup workflows, and sample SMS configuration commands that are commonly published for this device family. Use this guide to prepare the MT80 for reporting location, events, and telemetry into Plaspy.

Plaspy uses a shared ingestion endpoint and automatically detects the tracker protocol for supported devices. Exact manufacturer side setup steps can vary by firmware version, hardware variant, installation type, and vendor tools. The MT80 model configuration below includes example SMS commands commonly used to set APN, server, and reporting intervals; review manufacturer's documentation and your firmware notes before applying changes.

## Configuration Overview

The goal of configuring an MT80 for Plaspy is to prepare the watch to communicate reliably with Plaspy's ingestion endpoint and to validate reporting so the device appears in the Plaspy dashboard. Configuration typically sets the network APN, the device reporting server and port, the reporting interval, and the device identifier.

- Configure the device APN so it can use GPRS data to connect to Plaspy.
- Point the tracker to the shared Plaspy server endpoint and port for ingestion.
- Set a suitable reporting interval so real time location and event updates arrive as expected.
- Validate device identity (IMEI or device ID) so the tracker is recognized in Plaspy.
- Verify the device reports and alarms appear on Plaspy after saving and restarting the device.

## Plaspy Server Settings

When integrating the MT80 with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you only need to point the device to the server and port

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to interpret incoming device messages.

## Typical Requirements Before Setup

- A charged MT80 device with a working SIM that supports data and SMS as required by your setup.
- Access to the device IMEI or serial so you can set device ID fields where required.
- The operator APN, and optionally APN username and password if your carrier requires them (placeholders such as [apn], [apnu], [apnp] are used in commands).
- Ability to send SMS commands to the watch or access to the vendor configuration tool depending on the MT80 variant and firmware.
- Knowledge of the device default password if SMS configuration requires it; the example commands below use the published default password 000000.

## How This Tracker Connects to Plaspy

The MT80 Series can send location, event, and health telemetry to Plaspy over SMS or GPRS (TCP/UDP), depending on variant and configuration. Once pointed to Plaspy's shared server endpoint and port, the device delivers regular updates and alarms that Plaspy ingests and presents in the platform.

- The watch is configured to report to the shared Plaspy server endpoint d.plaspy.com (or IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP; choose the transport available on the device and supported by the network.
- Plaspy automatically detects the incoming tracker protocol so messages are parsed without manual protocol selection on the server side.
- Reports include periodic location updates and event alarms so the device becomes visible and actionable inside Plaspy.
- After configuration, validate connectivity so telemetry, SOS, and other events appear on the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the MT80, or prepare to send SMS configuration commands if supported by your firmware.
2. Enter the Plaspy server as either domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888.
4. If the device prompts for transport selection, choose UDP or TCP as appropriate for your deployment.
5. Configure the APN and any APN credentials required by your mobile operator (use the [apn] [apnu] [apnp] placeholders if applicable).
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot for settings to take effect.
7. Validate the device reports to Plaspy by confirming location updates and event messages appear in the platform.

## Example Configuration Commands

The MT80 model documentation commonly publishes SMS commands for configuration. The examples below use the device default password 000000 in the command strings as provided in public material. Replace 000000 with your device password if it differs.

- Set the device ID (use the device IMEI or the last 15 digits of the IMEI as the device identifier). Replace \<IMEI_15> with the device IMEI last 15 digits:

```
M000000,22,<IMEI_15>
```

Example: if the device IMEI last 15 digits are 012345678901234, send:
```
M000000,22,012345678901234
```

- Set the operator APN. Replace [apn] with your carrier APN. If your carrier requires an APN username and password, include [apnu] and [apnp] as shown (these placeholders may be optional depending on operator):

```
M000000,23,[apn]
```

Or with username and password:
```
M000000,23,[apn],[apnu],[apnp]
```

- Set the update interval to 60 seconds:

```
M000000,25,60
```

- Set the GPRS server to point the device at Plaspy. The published command includes an index and then the server IP and port. The example below uses the public Plaspy IP and port:

```
M000000,24,56 54.85.159.138,8888
```

- Enable GPRS mode (example command to switch device to GPRS reporting):

```
M000000,21,2
```

Notes on these commands:
- The example commands use the published default password 000000. Change the password in commands if your device has a different password.
- Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values.
- The device may also accept domain form for the server. If using domain instead of IP, ensure the device firmware supports DNS resolution and use d.plaspy.com in place of the IP.
- If your configuration workflow uses a vendor tool instead of SMS, apply the same server, port, and APN values in that tool.

## Configuration Notes

- Firmware and hardware variant differences may change exact command syntax or available options; always confirm against the manufacturer release notes for your MT80 variant and firmware.
- The MT80 supports SMS based configuration as shown above in many published examples; vendor software or OTA methods may also be available for certain variants.
- Choose TCP or UDP based on your network and device support. Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- Change the default SMS password 000000 when possible for improved device security and management.
- After any configuration change, confirm the device is registering with the cellular network and successfully sending packets to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Using the MT80 Series with Plaspy provides a straightforward path to combine wearable health telemetry and location reporting in a single platform. Pointing the device to Plaspy's shared server settings and validating reporting delivers real time visibility, alarm handling, and historical playback that is useful for caregivers, medical monitoring services, and supervised deployments.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup methods and firmware behavior with the manufacturer at https://www.megastek.com/ to ensure your MT80 configuration is current and supported.
