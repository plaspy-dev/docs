---
slug: /noran/nr028/configuration
id: nr028-configuration
sidebar_label: Configuration
title: Noran - NR028 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup and server settings to configure the Noran NR028 tracker for use with Plaspy platform
keywords:
  - Noran NR028 configuration
  - Noran NR028 setup for Plaspy
  - NR028 server configuration
  - NR028 GPS tracker setup
  - Noran tracker Plaspy compatibility
  - NR028 GPRS APN configuration
  - vehicle tracking NR028
  - NR028 SMS commands
  - fleet tracking NR028 configuration
  - NR028 telemetry setup
---

# Noran - NR028 Configuration

This page covers the public configuration context for using the Noran NR028 Navigation GPS Tracker with Plaspy. It gathers the practical, publicly available settings and SMS commands that installers and fleet operators commonly use to point NR028 units to the Plaspy endpoint so Plaspy can ingest location and telemetry in real time.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary with firmware, hardware revision, installation type, and vendor tools. The NR028 supports SMS and GPRS based configuration in common firmware releases, and this documentation uses the manufacturer command examples provided in public configuration notes as the basis for a typical setup to connect the device to Plaspy.

## Configuration Overview

The configuration process prepares an NR028 tracker to communicate reliably with Plaspy so device location, alarms, and sensor telemetry appear in the platform. For NR028 units this commonly involves setting the operator APN, configuring the GPRS server endpoint to Plaspy, switching the device into GPRS mode, and verifying the device reports correctly.

- Set the carrier APN and optional APN username or password so the device can open GPRS
- Configure the GPRS server to point to Plaspy so telemetry is delivered to the platform
- Select transport (UDP or TCP) if the firmware requires an explicit choice
- Enable GPRS mode and verify connectivity via a status check command
- Validate that Plaspy receives the device by checking platform visibility and device Id

## Plaspy Server Settings

Use these Plaspy server settings when configuring the NR028. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when telemetry arrives

## Typical Requirements Before Setup

- A working SIM card with a data plan and the correct operator APN for GPRS
- The NR028 device powered and accessible for SMS or the manufacturer configuration tool
- Knowledge of the device default password if the tracker requires it for remote SMS configuration
- Access to the device Id for registration and verification inside Plaspy
- A method to receive or review SMS responses for verification of applied settings
- Basic familiarity with choosing UDP or TCP transport where the device firmware requests it

## How This Tracker Connects to Plaspy

The NR028 is configured to send its location and telemetry packets to the shared Plaspy server endpoint and port so Plaspy can ingest events, alarms, and sensor data. Plaspy receives those packets and maps them into the proper protocol handling automatically.

- The tracker opens a GPRS data connection and sends telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be set to UDP or TCP depending on device firmware preferences
- Plaspy detects the tracker protocol automatically so no manual protocol selection is required in the platform
- Events such as SOS, overspeed, geo fence, and sensor readings are transmitted to Plaspy for dashboarding and alerts
- SMS remains available as a fallback for command and verification operations when GPRS is not available

## Common Configuration Workflow

1. Access the official Noran configuration method such as SMS commands or the manufacturer software per the device manual.
2. Configure the operator APN with the operator APN string and optional APN username and password as required by the SIM.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the server or IP field.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and switch the device to GPRS mode if necessary.
6. Restart or power cycle the device if required by the firmware to apply changes.
7. Validate that the device reports to Plaspy by issuing a status check and confirming the device appears in Plaspy dashboards.

## Example Configuration Commands

The NR028 supports SMS based configuration. The following public example commands are provided as SMS strings. The sample uses the device default password 000000. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier values when sending.

- Set the operator APN. Replace {{apn}} with your carrier APN. If required, include {{apnu}} and {{apnp}} for APN username and password.
```
A000000,012,{{apn}}
```
Or with APN username and password placeholders:
```
A000000,012,{{apn}},{{apnu}},{{apnp}}
```

- Set the GPRS server to the Plaspy endpoint using the Plaspy IP and port 8888. This example uses the public Plaspy server IP. You can substitute d.plaspy.com if your firmware accepts a domain instead of an IP.
```
A000000,010,54.85.159.138,8888
```

- Switch the device to GPRS mode (1).
```
A000000,011,1
```

- Check current settings and device status. The response typically returns Device Id, APN, server, port, GPRS status and other diagnostics. Use this to obtain the device Id which starts with NR.
```
A000000,004
```

Notes on the commands above:
- The sample device password used in these commands is 000000 which is the manufacturer default in public examples. If your device has a different password, replace the password field accordingly.
- The device Id can be retrieved by sending the status command A000000,004. The device Id is typically the first word of the response and starts with NR.
- When using the domain name instead of the IP, some firmware versions accept:
```
A000000,010,d.plaspy.com,8888
```
but if a domain is not accepted use the Plaspy server IP 54.85.159.138 as shown.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax and required fields; always confirm with the current Noran documentation for your device revision.
- The NR028 supports both SMS and GPRS configuration methods in common public firmware examples; use SMS for remote or field edits when a configuration tool is not available.
- Choose UDP or TCP based on device capability and network requirements; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration and helps automatic protocol detection.
- If the device does not appear in Plaspy after configuration, verify APN, GPRS mode, signal strength, and that the correct server and port were applied and saved.

## Why Use Plaspy with This Configuration

Using the NR028 with Plaspy gives organizations centralized visibility of vehicle location, alarms, and sensor telemetry for operational monitoring and incident response. The NR028 can deliver frequent, compact telemetry updates to Plaspy so operations teams receive timely events for fleet dispatch, fuel monitoring, and anti theft workflows.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer setup details at the official Noran tracker site http://www.norantracker.com/ as manufacturer specifications and setup steps can change over time.
