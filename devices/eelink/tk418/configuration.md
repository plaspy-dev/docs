---
slug: /eelink/tk418/configuration
id: tk418-configuration
sidebar_label: Configuration
title: EElink - TK418 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK418 with Plaspy showing required server settings and example SMS commands
keywords:
  - EElink TK418 configuration
  - EElink TK418 setup
  - TK418 Plaspy configuration
  - EElink GPS tracker configuration
  - TK418 server settings
  - Plaspy tracker setup
  - EElink TK418 SMS commands
  - TK418 APN configuration
  - EElink device integration
  - GPS tracker Plaspy compatibility
---

# EElink - TK418 Configuration

This page documents the public configuration context for using the EElink TK418 with the Plaspy tracking platform. It gathers the Plaspy server settings you must apply and shows the common, publicly available SMS commands for the TK418 so you can prepare the device to report to Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools, so treat the SMS examples here as a practical, public baseline and verify any device specific differences with EElink documentation.

## Configuration Overview

The goal of configuration is to direct the TK418 to send position and event messages to Plaspy and to validate connectivity so the device becomes visible in the platform. The TK418 is compact and IoT oriented with LTE Cat M1 and NB‑IoT primary connectivity and GSM fallback, and it supports multi GNSS and event reporting that Plaspy can ingest once the server settings are applied.

- Configure the device to use the Plaspy server endpoint and shared port so reports reach the platform.
- Set the device APN and GPRS parameters so the tracker has cellular data connectivity.
- Validate the tracker is reporting position and events to Plaspy after configuration.
- Use the SMS commands or official EElink tools to apply settings, then confirm with a parameter check.
- Ensure transport selection (UDP or TCP) is set if required, since Plaspy accepts either.

## Plaspy Server Settings

- Server domain d.plaspy.com must be available as a target server for the tracker.
- Server IP 54.85.159.138 is also an accepted Plaspy endpoint option if a numeric address is preferred.
- Port 8888 is the port Plaspy uses for device connections.
- Transport support for UDP or TCP is available; the tracker may be configured using either transport on port 8888.
- Plaspy automatically detects the tracker protocol when the device connects to the shared port used by all devices.

## Typical Requirements Before Setup

- A powered and installed TK418 with a working cellular SIM provisioned for data and SMS as required.
- Access to a phone capable of sending configuration SMS commands or the official EElink configuration tool if preferred.
- The APN, username, and password details from the mobile operator if network access requires them.
- A plan for placement and power so the device has stable cellular coverage and GNSS visibility for testing.
- Knowledge of the device IMEI or identifying information to correlate the physical tracker with a Plaspy device record.
- Awareness that firmware revisions or vendor tools can change configuration steps or command formats.

## How This Tracker Connects to Plaspy

When configured with the Plaspy server settings, the TK418 sends position and event messages to the shared Plaspy endpoint and port. Plaspy ingests these EELINK protocol messages and maps them into real time location, events, and historical reporting for monitoring and operational use.

- The tracker reports multi GNSS position fixes to the Plaspy server endpoint and port.
- Event data such as ACC/ignition state, crash or vibration alerts, and alerts are forwarded to Plaspy.
- The device is configured to use d.plaspy.com or 54.85.159.138 on port 8888 as its server target.
- Reports can be sent over UDP or TCP depending on the transport selected in device settings.
- Plaspy automatically detects the protocol and parses incoming EELINK messages for integration into dashboards.

## Common Configuration Workflow

1. Access the official EElink configuration method for the TK418, for example SMS commands or EElink configuration software.
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the tracker requires explicit transport selection.
5. Set the operator APN and any required APN credentials so the device can use cellular data.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the device reports to Plaspy by checking connectivity on the platform and by using the device parameter check command.

## Example Configuration Commands

The TK418 supports SMS based configuration. The public sequence below shows common SMS commands used to prepare the device for Plaspy. Preserve the placeholders when you replace them with your operator values.

- Optional initial factory reset (use only when needed to clear prior configuration)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Use the APN command with your mobile operator values. Replace [apn] with the APN name. If your operator requires APN username or password include [apnu] and [apnp].
```text
APN,[apn]#
```
Or with optional user and password
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain (preferred readable form)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP address
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters on the device
```text
PARAM#
```

Notes on placeholders
- [apn] is your mobile operator APN name. Replace it with the APN string provided by your SIM operator.
- [apnu] and [apnp] are optional APN username and password fields. Include them only if required by your operator.

## Configuration Notes

- SMS based setup is a common public method for TK418 configuration; alternate vendor tools or serial configuration may also be available from EElink.
- Firmware revisions can change command syntax or available features. If a command does not behave as expected, check the device firmware version and EElink release notes.
- Choose UDP or TCP per your installation needs. Plaspy accepts either on port 8888 and will automatically detect the incoming protocol.
- The same port is used for all devices connecting to Plaspy, so use port 8888 consistently when adding devices.
- Always confirm APN and network credentials with your cellular provider before applying settings.

## Why Use Plaspy with This Configuration

Configuring the TK418 to report to Plaspy gives fleet managers and integrators a reliable way to collect multi GNSS position data, ignition state, and event alerts into a single platform for real time monitoring and historical analysis. The shared Plaspy server settings and automatic protocol detection simplify onboarding so devices can start reporting with a small set of public configuration steps.

To learn more about Plaspy and how the platform ingests tracker data visit https://www.plaspy.com. Please verify the latest device specific configuration steps and firmware behavior on the manufacturer site https://www.eelink.com.cn/ as vendor documentation and command syntax can change over time.
