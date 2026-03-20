---
slug: /nvs/sn_5001/configuration
id: sn_5001-configuration
sidebar_label: Configuration
title: NVS - SN-5001 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the NVS SN-5001 for use with Plaspy including SMS commands and server settings
keywords:
  - NVS SN-5001 configuration
  - NVS SN-5001 setup
  - NVS SN-5001 Plaspy
  - NVS tracker configuration
  - SN-5001 GPS setup
  - vehicle tracking SN-5001
  - GPS platform setup SN-5001
  - Plaspy tracker configuration
  - GPS tracker server settings
  - SN-5001 SMS configuration
---

# NVS - SN-5001 Configuration

This page collects the public configuration information needed to set an NVS SN-5001 tracker to work with Plaspy. It focuses on the practical server settings and the manufacturer provided SMS commands that are commonly used to point the device to the Plaspy endpoint and enable data reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide together with the official NVS documentation and your device firmware notes.

## Configuration Overview

The goal of these configuration steps is to prepare the SN-5001 to establish a network connection and reliably send location and event information to Plaspy. The public instructions below show how to set APN, server endpoint, and GPRS mode using SMS commands when that method is supported by the device.

- Configure the device APN and GPRS mode so the tracker can reach the internet and report to Plaspy.
- Point the tracker to the Plaspy server endpoint and port so reported data arrives in your Plaspy account.
- Validate connectivity and settings using the device verification command so the device is visible in Plaspy.
- Optionally perform a factory reset before first time setup if required by installation or troubleshooting.
- Ensure device reporting and alarm signals are verified in the Plaspy platform for operational monitoring.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy settings to enter into the SN-5001 so it reports to the Plaspy platform.

## Typical Requirements Before Setup

- A powered SN-5001 device with working battery or external power connected.
- An active SIM card with a data plan that supports GPRS and the operator APN details.
- The operator APN value and optional APN username and password if required by the mobile operator.
- Access to send SMS commands to the device or to the manufacturer configuration tool depending on the device setup method.
- Knowledge of the device password if it was changed from the factory default.
- Access to the official NVS documentation for model SN-5001 to confirm any firmware specific details.

## How This Tracker Connects to Plaspy

The SN-5001 is configured to use the mobile network to establish a GPRS data connection and then send its location and event data to the shared Plaspy server endpoint and port. Once configured, the device will report its position and any configured alarms or events to Plaspy for display and monitoring.

- The tracker uses the configured APN to open a GPRS data session.
- Device data is sent to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and operator behavior.
- Plaspy automatically detects the incoming tracker protocol and processes the device data.
- Alarm signals and event notifications are forwarded to Plaspy so they appear in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the SN-5001, typically SMS commands or an NVS configuration utility.
2. If needed, optionally perform a factory reset to restore known defaults before setup.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires a transport selection for reporting.
6. Configure the operator APN and optional APN username and password so GPRS succeeds.
7. Apply or save the configuration and restart the device if the device requires a reboot to apply changes.
8. Validate that the device is reporting to Plaspy and that the tracker appears and updates in your Plaspy interface.

## Example Configuration Commands

The SN-5001 can be configured by sending SMS commands to the device. The manufacturer examples below are provided in public documentation. The default device password shown in the public commands is 123456. If your device password differs, replace 123456 with the actual device password.

- Optional initial factory reset (use only if you need to restore defaults):

```
begin123456
```

- Set the time zone to UTC 0:

```
time zone123456 0
```

- Set the operator APN (replace [apn] with your mobile operator APN value):

```
apn123456 [apn]
```

- Set the APN username and password if your operator requires them (replace [apnu] and [apnp] with your credentials):

```
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy server IP and port (public Plaspy server IP is 54.85.159.138 and port is 8888):

```
adminip123456 54.85.159.138 8888
```

- Switch the tracker to GPRS mode (two accepted syntaxes):

```
gprs123456,1,1
```

or

```
gprs123456
```

- Verify or check settings on the device:

```
check123456
```

Note on placeholders: [apn] is the mobile operator APN string. [apnu] and [apnp] are the APN username and password when required. Keep the device password (123456 in these examples) correct for your device before sending any SMS commands.

## Configuration Notes

- SMS based configuration is shown here because it is present in the public SN-5001 configuration content. Other NVS tools or firmware versions may support alternative methods.
- Different firmware revisions may accept slightly different command formats or require different sequencing. Verify command syntax for your firmware.
- Choose TCP or UDP transport according to installation needs; Plaspy supports both and will detect the protocol automatically when the device connects to port 8888.
- Plaspy uses the same port for all supported devices so the port 8888 value is consistent across trackers.
- Always confirm APN settings with the mobile operator and test data connectivity before assuming the device is reporting.

## Why Use Plaspy with This Configuration

Configuring the NVS SN-5001 to send data to Plaspy gives organizations a consistent server endpoint and automatic protocol handling that simplifies device onboarding. With the shared Plaspy server settings and automatic protocol detection, SN-5001 devices can be integrated into a monitoring workflow that consolidates location, alarms, and basic device status in one platform.

To learn more about Plaspy, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the NVS official website https://www.nvs-ts.ru/ before deploying devices.
