---
slug: /coban/gps403/configuration
id: gps403-configuration
sidebar_label: Configuration
title: Coban - GPS403 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Coban GPS403 tracker for use with Plaspy server settings and SMS commands
keywords:
  - Coban GPS403 configuration
  - Coban GPS403 server configuration
  - Coban GPS403 setup for Plaspy
  - GPS403 tracking software configuration
  - GPS403 GPS platform setup
  - Coban tracker configuration
  - GPS tracker SMS setup
  - GPS403 APN settings
  - tracker protocol detection
  - Plaspy server configuration
---

# Coban - GPS403 Configuration

This page covers the public configuration context for using the Coban GPS403 tracker with the Plaspy fleet platform. It brings together the Plaspy server settings you need to enter on the device and the common manufacturer SMS commands used by installers and fleet technicians to prepare the tracker for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPS403 supports SMS and GPRS configuration methods; this guide includes the public SMS commands often used for initial setup and verification while advising you to check Coban documentation for device specific variations.

## Configuration Overview

Preparing a GPS403 for use with Plaspy centers on configuring network access and the Plaspy server endpoint, validating connectivity, and enabling the reporting features needed for visibility in the platform. The example SMS commands below are public device commands commonly used in field setups.

- Configure the APN and optional APN credentials so the tracker can use GPRS data.
- Point the device to the Plaspy server domain or IP and set the shared port used by Plaspy.
- Select transport mode (UDP or TCP) if required by the device and network.
- Set reporting interval and timezone so position updates and timestamps align with your operational needs.
- Verify settings and confirm the device is reporting to Plaspy using the tracker verification commands.
- Optionally enable protocol options related to sensor reporting as required.

## Plaspy Server Settings

- Server domain d.plaspy.com for hostname based configuration.
- Server IP 54.85.159.138 if the device requires a numeric address.
- Port 8888 which Plaspy uses for all supported devices.
- Transport support for UDP or TCP depending on device preference or network.
- Plaspy automatically detects the tracker protocol so you only need to point the device to the Plaspy endpoint and port.

Note: Plaspy uses the same port for all devices and handles protocol detection on the server side.

## Typical Requirements Before Setup

- Confirm the GPS403 has a working power connection and is properly installed.
- An active SIM card with data enabled and a valid APN for the mobile operator.
- Ability to send SMS messages to the device for SMS based configuration or access to the manufacturer configuration tool.
- The device default password if present (the GPS403 default password used in example commands is 123456).
- Coverage for GSM GPRS data on the frequencies supported by the GPS403.
- Access to the official Coban documentation or installer guide for firmware specific details.

## How This Tracker Connects to Plaspy

When configured, the GPS403 will send location and device telemetry to the Plaspy server endpoint using the selected transport. Plaspy receives and interprets the data and exposes it in the platform for monitoring and reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and the Plaspy port.
- Data is sent over GPRS to either the domain d.plaspy.com or the IP 54.85.159.138 depending on your configuration.
- You may choose UDP or TCP as the transport when required by the device or network.
- Plaspy automatically detects the tracker protocol so server-side interpretation is automatic.
- Events and periodic position reports become visible in Plaspy once the device successfully connects and authenticates.

## Common Configuration Workflow

1. Access the official Coban configuration method for GPS403 such as SMS commands or the vendor tool referenced in the device manual.
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 as provided in the server settings.
3. Set the port to 8888 which is the single port Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure APN and APN credentials so the tracker can establish GPRS data sessions.
6. Apply or save the configuration and, if required, restart or power cycle the device to activate changes.
7. Validate that the device reports to Plaspy by using the device verification command or by confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The GPS403 can be configured by sending SMS commands. The commands below are provided in the same order as commonly used for initial setup. The default device password in these examples is 123456. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator APN, APN username, and APN password respectively.

- Optional initial factory reset (use only when needed for a clean setup)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your mobile operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username and password (replace placeholders as needed)
```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the position update interval (example command for a periodic fix pattern)
```text
fix060s060s***n123456
```

- Switch the tracker to GPRS mode and set transport to UDP or TCP as supported
```text
gprs123456,1,1
```
Or a simple GPRS mode command if that form is accepted by the device:
```text
gprs123456
```

- Check current settings on the device
```text
check123456
```

- Enable extended protocol reporting for fuel or digital sensor status
```text
protocol123456 18
```

Notes on placeholders and password:
- {{apn}} is the mobile operator APN required for GPRS data.
- {{apnu}} and {{apnp}} are the APN username and password when provided by the operator.
- Keep the default password 123456 unless your device admin guide instructs changing it. Change passwords as part of security best practices where supported.

## Configuration Notes

- SMS based configuration is commonly used for Coban devices but vendor tools or local configuration software may also be available; follow the method that matches your installation workflow.
- Different firmware versions or hardware revisions may accept slightly different command syntaxes; always confirm exact syntax against the device manual.
- Choose UDP or TCP based on network stability and operator recommendations. Plaspy supports both and automatically detects the incoming protocol.
- All devices in Plaspy use the same port 8888 so you only need to set that port when pointing devices to the Plaspy endpoint.
- Use the check command to verify settings before concluding the installation.

## Why Use Plaspy with This Configuration

Using the Coban GPS403 configured to report to Plaspy provides an efficient path to fleet visibility, event reporting, and operational monitoring. The combination of established Coban SMS/GPRS configuration commands and the Plaspy server settings lets installers and fleet managers bring devices online quickly and validate connectivity.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance, verify details with the official Coban documentation at https://www.coban.net/.
