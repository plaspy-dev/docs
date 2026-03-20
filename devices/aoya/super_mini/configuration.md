---
slug: /aoya/super_mini/configuration
id: super_mini-configuration
sidebar_label: Configuration
title: AoYa - super mini Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AoYa super mini GPS tracker showing Plaspy server settings commands and setup workflow
keywords:
  - AoYa super mini configuration
  - AoYa super mini setup
  - AoYa super mini Plaspy
  - AoYa GPS tracker configuration
  - super mini SMS commands
  - vehicle tracking setup
  - fleet tracker configuration
  - GPS tracker server settings
  - Plaspy server configuration
  - tracking device integration
---

# AoYa - super mini Configuration

This page documents the public configuration context for using the AoYa super mini GPS tracker with Plaspy. It collects the practical server settings, SMS command examples, and workflow guidance needed to point the device at Plaspy so the tracker can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The sample commands shown on this page are the publicly available SMS commands commonly used with the AoYa super mini; they include the device default password 123456 and should be adapted if your device password has been changed.

## Configuration Overview

The goal of configuration is to prepare the tracker to communicate reliably with Plaspy, validate connectivity, and make the device visible in the Plaspy platform. Where available, the AoYa super mini is commonly configured via SMS commands to set APN, server endpoint, transport, and reporting behavior.

- Point the tracker to the Plaspy server endpoint so telemetry reaches the platform.
- Configure APN and optional APN credentials so the device can use GPRS data.
- Choose transport (UDP or TCP) and set the shared Plaspy port used by all devices.
- Validate settings with a check command and confirm device reporting in Plaspy.
- Optionally perform a factory reset or timezone adjustment during initial setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections
- Note that all devices in Plaspy use the same port so you only need to set port 8888

## Typical Requirements Before Setup

- A powered and accessible AoYa super mini tracker ready to receive SMS commands
- An active SIM with a data plan and correct APN values for GPRS connectivity
- Knowledge of the device password (the sample default password is 123456)
- Ability to send SMS messages from a mobile phone or a configuration tool supported by the vendor
- A Plaspy account and access to the Plaspy platform to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

When configured, the AoYa super mini sends location and event data to the Plaspy server endpoint and port, where Plaspy detects the tracker protocol and decodes messages for visibility in the platform.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com (54.85.159.138) on port 8888
- Reports can be sent over UDP or TCP depending on the chosen transport
- Telemetry and event messages arrive at Plaspy where automatic protocol detection routes them to the correct parser
- Successful connection enables location visibility, alarms, and route history in Plaspy for operational monitoring

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands per the AoYa instructions.
2. Enter the Plaspy server endpoint by domain d.plaspy.com or IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888, which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure APN and optional APN username and password so the tracker can use mobile data.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the device reports to Plaspy by using the device check command and confirming activity in the Plaspy platform.

## Example Configuration Commands

The AoYa super mini supports SMS-based configuration. The following public sample commands show the typical order and parameters. The sample device password used here is 123456 (this is the factory default and should be replaced if you have changed the password). Preserve placeholders such as [apn], [apnu], and [apnp] when you replace them with your operator values.

- Optional initial factory reset (use when required or for initial setup):
```
begin123456
```

- Set the device time zone to UTC+0:
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

- Configure the GPRS server to Plaspy using the Plaspy server IP and port:
```
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode and choose transport (UDP or TCP). Examples shown by manufacturer:
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

Notes on placeholders: [apn] is the mobile operator APN, [apnu] is the APN username, and [apnp] is the APN password. Replace these with the values provided by your mobile operator.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or supported parameters; always confirm commands against the official AoYa documentation for your device revision.
- The AoYa super mini provides SMS-based configuration in the examples above; alternative vendor tools or PC software may be available and can offer a guided interface.
- Choosing UDP or TCP affects transport behavior; test both if you see connection issues, but remember Plaspy accepts both and listens on the shared port 8888.
- If you change the device password from the default 123456, update all SMS commands to use the new password.
- After configuring the server and APN, use the check command and verify reporting in Plaspy to confirm successful setup.

## Why Use Plaspy with This Configuration

Configuring the AoYa super mini to report to Plaspy gives organizations centralized visibility into vehicle location, alarms, and route history. Using Plaspy's shared server settings simplifies deployment because the platform uses the same port for all devices and automatically detects the correct tracker protocol, reducing per-device configuration complexity.

To learn more about Plaspy and how it supports fleet tracking workflows visit https://www.plaspy.com. For the latest device specific setup details, firmware changes, and official command references verify information on the manufacturer website http://www.aoyagps.com/
