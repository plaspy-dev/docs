---
slug: /condor/tg_610/configuration
id: tg_610-configuration
sidebar_label: Configuration
title: Condor - TG-610 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor TG-610 tracker integration with Plaspy including server settings and SMS setup examples
keywords:
  - Condor TG-610 configuration
  - Condor TG-610 setup
  - TG-610 Plaspy
  - Condor tracker configuration
  - GPS tracker setup
  - Plaspy device configuration
  - motorcycle tracker setup
  - GPRS tracker configuration
  - TG-610 server configuration
  - vehicle tracking setup
---

# Condor - TG-610 Configuration

This page documents the public configuration context for using the Condor TG-610 GPS tracker with Plaspy. It consolidates the Plaspy server settings you must apply, describes typical prerequisites, and provides example SMS commands used by the TG-610 for manufacturer-side setup when those commands are publicly available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The TG-610 supports GPRS reporting and provides SMS based configuration commands in its public setup flow that we reproduce here for practical integration with Plaspy.

## Configuration Overview

This configuration process prepares the TG-610 to send location and status data to Plaspy via the cellular network. The goal is to point the tracker at Plaspy's shared server endpoint, confirm transport and connectivity, and validate that the device appears in your Plaspy account.

- Configure the tracker to use Plaspy as the GPRS server endpoint so telemetry is delivered to the platform.
- Set the device APN and GPRS mode so the SIM provides data connectivity for reporting.
- Choose transport UDP or TCP and set port 8888 which Plaspy uses for all supported devices.
- Validate settings and confirm the device reports live data to Plaspy so it appears in the platform.
- Use SMS or the official Condor configuration tool as provided by the manufacturer to apply the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

These exact values are the public Plaspy endpoint and must be applied on the tracker or via the Condor configuration method to ensure the TG-610 reports to Plaspy.

## Typical Requirements Before Setup

- A powered and installed TG-610 unit with a working SIM card capable of GPRS data.
- The device IMEI available for identification and alias settings.
- Access to the Condor TG-610 configuration method such as SMS commands or the manufacturer configuration tool.
- Knowledge of the mobile operator APN and any required APN username or password (placeholders appear in commands).
- A way to send SMS to the device number or connect with the manufacturer tool to apply server and APN settings.
- A Plaspy account and project ready to receive and verify device reports.

## How This Tracker Connects to Plaspy

The TG-610 reports location and I/O events over the cellular GPRS network to the Plaspy server endpoint and port. Once configured with Plaspy server settings, the tracker will establish a GPRS session and transmit telemetry to the shared Plaspy endpoint where Plaspy ingests and interprets the data.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com (or its IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy supports either and detects the protocol automatically.
- Location updates and status events are sent to Plaspy so the device becomes visible on the platform.
- Event reporting such as panic or immobilizer inputs is forwarded to Plaspy for alerting and workflows.

## Common Configuration Workflow

1. Access the official Condor configuration method for the TG-610 (SMS or the Condor configuration tool) as documented by the manufacturer.
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 in the device server configuration.
3. Set the server port to 8888. Note that Plaspy uses the same port across supported devices.
4. Choose UDP or TCP if the device requires a transport selection and save that option.
5. Configure the device APN, GPRS mode, and any required authentication using the SMS commands or tool.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate connectivity by checking the device appears and reports correctly in Plaspy.

## Example Configuration Commands

The Condor TG-610 publicly documents SMS configuration commands. The device uses a default password of 0000 in these examples. Send these commands by SMS to the TG-610 number in the order shown to set up APN, alias, timezone, Plaspy server, reporting interval, and GPRS mode. Preserve the placeholders when relevant.

- Set the operator APN. If your operator requires APN username or password, include the optional placeholders [apnu] and [apnp].
```text
APN,0000,[apn]
```
Optional extended APN format with username and password:
```text
APN,0000,[apn],[apnu],[apnp]
```

- Set a 5-digit identifier to be used for the device. Use the last 5 digits of the IMEI as the alias. Replace \<LAST5> with the actual last five digits.
```text
ALIAS,0000,<LAST5>#
```

- Set the timezone to UTC 0
```text
GMT,0000,-0#
```

- Set the GPRS server to Plaspy using the Plaspy IP and port and select transport. The example uses UDP transport flag U and active reporting A as in the public command format.
```text
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
You may replace the IP with the domain if the device accepts domain names:
```text
SERVIDOR,0000,d.plaspy.com,8888,U,A#
```

- Set the update interval example for every 1 minute (device uses manufacturer interval encoding; here M,6 is the public example).
```text
INTERVALO,0000,M,6#
```

- Set GPRS mode to enabled
```text
GPRS,0000,A#
```

- To check or verify connection settings, send the verification command:
```text
CONEXION,0000#
```

Notes on placeholders
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] and [apnp] are optional APN username and password placeholders; include them only if your operator requires them.
- \<LAST5> should be replaced with the last five digits of the device IMEI as instructed by the manufacturer.

## Configuration Notes

- The Condor TG-610 supports SMS based configuration as shown in the public commands; the exact syntax and required suffix characters may vary by firmware version.
- If the device accepts a domain name for the server, you can use d.plaspy.com; otherwise use 54.85.159.138 as the IP. Either method points the tracker to Plaspy on port 8888.
- Select UDP or TCP according to the device options. Plaspy supports both and automatically detects the correct protocol once data reaches the server.
- Commands and default password 0000 are publicly documented here; confirm the current defaults with Condor documentation before use.
- Firmware revisions, regional variants, or vendor tools may change the exact command format or available options.

## Why Use Plaspy with This Configuration

Using the Condor TG-610 with Plaspy gives organizations and owners a straightforward path to centralized tracking and event monitoring for motorcycles and small vehicles. With the TG-610 configured to report to Plaspy, real-time location, panic alerts, and immobilizer events become visible in Plaspy dashboards, supporting operational oversight and faster incident response.

Learn more about Plaspy and how it handles device integration and fleet workflows at https://www.plaspy.com. For the latest device specific setup details, firmware updates, and manufacturer instructions verify current information at the Condor official website https://condorskyseeker.com/. Manufacturer specifications and configuration methods can change over time so confirm device behavior with Condor documentation.
