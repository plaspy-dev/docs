---
slug: /sentar/d40/configuration
id: d40-configuration
sidebar_label: Configuration
title: Sentar - D40 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Sentar D40 smartwatch for use with Plaspy including server settings and SMS commands
keywords:
  - Sentar D40 configuration
  - Sentar D40 setup
  - Sentar D40 Plaspy
  - D40 tracker configuration
  - D40 GPS setup
  - Sentar smartwatch configuration
  - Plaspy tracker setup
  - kids smartwatch configuration
  - device server configuration
  - GPRS tracker setup
---

# Sentar - D40 Configuration

This page describes the public configuration context for using the Sentar D40 smartwatch with the Plaspy platform. It collects the shared server settings you need to point the watch at Plaspy, plus example SMS configuration commands that are commonly published for the D40. Use this as a practical integration reference when preparing devices for monitoring in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The D40 supports SMS configuration and a Nano SIM for cellular data, so the examples below reflect common SMS commands and the essential Plaspy server settings required for successful reporting.

## Configuration Overview

The goal of configuring a Sentar D40 for Plaspy is to prepare the watch to communicate reliably with Plaspy servers, validate connectivity, and ensure the device appears in the Plaspy dashboard for location and alerting. Configuration typically consists of setting the device password as needed, applying the operator APN, setting the Plaspy server endpoint, and verifying reporting intervals.

- Set the device operator APN so the watch can use the cellular data connection.
- Point the D40 to Plaspy server d.plaspy.com or the Plaspy server IP so telemetry is received.
- Ensure the device upload interval and reporting behavior are appropriate for guardian monitoring.
- Verify device settings and confirm the watch is sending data to Plaspy before deployment.
- Use published SMS commands or the manufacturer tool to apply changes depending on what is supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged D40 with an active Nano SIM and a data plan appropriate for GPRS or cellular reporting.
- Access to the official Sentar configuration method such as SMS command support or vendor configuration tool.
- Knowledge of the device password; the D40 example commands use the default password 123456 when applicable.
- Basic information for the cellular operator APN and optional APN username and password.
- Ability to receive and send SMS to the device if using SMS-based configuration.

## How This Tracker Connects to Plaspy

When configured, the D40 sends location updates, alerts, and device telemetry to the shared Plaspy server endpoint and port so guardians can view status and events in a centralized dashboard. Plaspy receives the incoming packets and maps them to the registered device using the device identifier and protocol that Plaspy automatically detects.

- The device is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Telemetry and location are transmitted over TCP or UDP depending on device selection and network conditions.
- Plaspy interprets the incoming protocol automatically and associates location, SOS alerts, and battery telemetry with the device.
- Regular upload intervals ensure the watch appears in Plaspy for real time monitoring and historical reporting.
- Verification of reporting confirms the device is visible and sending expected messages to Plaspy.

## Common Configuration Workflow

1. Access the official Sentar configuration method or vendor software that applies SMS commands or configuration parameters to the D40.
2. Set the operator APN values for the device using the published APN command format or the vendor tool.
3. Enter the Plaspy server endpoint by using d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
4. Set port 8888 for GPRS reporting and choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device using the vendor tool or by sending the SMS commands.
6. Restart the device if required by the manufacturer to apply network and server changes.
7. Validate that the device reports to Plaspy and appears in the Plaspy dashboard with expected telemetry and location updates.

## Example Configuration Commands

The D40 can be configured using SMS commands. The example commands below are based on published public commands for the device. The default device password used in these examples is 123456. Preserve the placeholders [apn], [apnu], and [apnp] when you substitute your operator values.

- Factory reset (optional initial setup)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the device IMSI or MCC MNC information
```text
pw,123456,imsi#
```

- Set operator APN where [apn] is the APN name, [apnu] is the APN username, [apnp] is the APN password and xxxyy represents optional MCC MNC operator suffix if required
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Set the GPRS server to the Plaspy endpoint using the Plaspy server IP and port 8888
```text
pw,123456,ip,54.85.159.138,8888#
```

- Set the data upload interval to 300 seconds
```text
pw,123456,upload,300#
```

- Check current settings on the device
```text
pw,123456,ts#
```

Notes on placeholders and usage
- [apn] Replace with your operator APN string.
- [apnu] Replace with your APN username if required by the operator; leave empty or omit if not used.
- [apnp] Replace with your APN password if required; leave empty or omit if not used.
- The factory reset command is optional and should only be used when a full device reset is required.
- Use the ts command to verify settings after applying changes.

## Configuration Notes

- Firmware differences and regional hardware variants can change the exact command syntax; always confirm with the manufacturer documentation if a command fails.
- The D40 supports SMS based configuration as shown in the examples; you may also use any official Sentar configuration utility if provided by the vendor.
- Choose UDP or TCP according to your network and device capability; Plaspy accepts either on port 8888 and will auto detect the protocol.
- All devices in Plaspy use the same port and Plaspy will automatically detect the protocol, so focus on correct server endpoint and port when configuring.
- Verify APN and mobile network registration before testing server connectivity to ensure the device can reach Plaspy.

## Why Use Plaspy with This Configuration

Using the Sentar D40 with Plaspy centralizes child location updates, SOS alerts, and device telemetry so guardians and care providers can monitor status and respond to events from one platform. The D40’s support for cellular data and SMS provisioning makes it practical to integrate into Plaspy with a small set of server and APN changes.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance for the Sentar D40 consult the official Sentar website at http://www.sentarsmart.com/ as manufacturer methods and firmware behavior can change over time.
