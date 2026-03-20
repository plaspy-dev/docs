---
slug: /coban/gps104/configuration
id: gps104-configuration
sidebar_label: Configuration
title: Coban - GPS104 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban GPS104 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Coban GPS104 configuration
  - Coban GPS104 setup
  - Coban GPS104 server configuration
  - Coban GPS104 Plaspy
  - Coban GPS104 SMS commands
  - GPS104 tracker configuration
  - Coban tracker setup guide
  - vehicle tracking configuration
  - fleet tracking Coban GPS104
  - GPS104 GPRS setup
---

# Coban - GPS104 Configuration

This page covers the public configuration context for using the Coban GPS104 tracker with Plaspy. It presents the practical, public-facing steps and settings used to point GPS104 devices at the Plaspy server, and explains what to prepare before registering the device in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the GPS104 can vary by firmware, hardware revision, installation type, and vendor tools, so this page focuses on universal public settings and the SMS commands provided in the manufacturer documentation.

## Configuration Overview

Configuring a GPS104 for Plaspy prepares the tracker to send location and event data to the platform while ensuring the device has the correct network credentials and reporting intervals. The following items summarize the practical goals of the configuration process.

- Point the GPS104 to the Plaspy server so telemetry reaches the platform for mapping and alerting.
- Configure APN and GPRS credentials so the device has a working data connection.
- Set reporting intervals and tracking mode to control update frequency and data usage.
- Validate configuration with a status check so the device appears in Plaspy.
- Enable protocol and sensor reporting options needed for vehicle monitoring and alarms.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept many common tracker protocols on the same port

## Typical Requirements Before Setup

- A powered and functional Coban GPS104 installed or accessible for configuration
- A working SIM card with GPRS data enabled and, if required, valid APN credentials
- The device default password 123456 for initial SMS-based configuration as shown in the public commands below
- Ability to send SMS commands to the tracker or access to the manufacturer configuration tool when available
- Network coverage for GPRS so the device can establish a data session with the Plaspy server
- Access to the official manufacturer documentation for GPS104 to confirm firmware specific commands

## How This Tracker Connects to Plaspy

The GPS104 is configured to report location and status over GPRS to Plaspy using the shared server endpoint and port. Once the APN and server settings are applied, the tracker will open a data session and transmit location and event messages that Plaspy ingests and displays.

- Device sends periodic fixes and event reports to the configured Plaspy endpoint on port 8888
- Data transport can be UDP or TCP depending on the tracker setting and network conditions
- Plaspy identifies the incoming protocol automatically and parses telemetry for platform use
- Reports include position updates and configured alarms so the device is visible in Plaspy monitoring tools
- Successful connection enables live tracking, alerts, and operational monitoring inside Plaspy

## Common Configuration Workflow

1. Access the official Coban GPS104 configuration method or software, or prepare to send SMS commands to the device using the device default password.
2. Enter the Plaspy server destination in the device configuration as d.plaspy.com or 54.85.159.138 depending on the configuration interface available.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; either is supported for communication with Plaspy.
5. Configure APN and APN credentials for the SIM so the device can establish a GPRS session.
6. Apply or save the configuration and restart the device if required by the GPS104 firmware.
7. Validate that the device reports to Plaspy using the device check command or by confirming the device appears in the platform.

## Example Configuration Commands

The GPS104 supports SMS based configuration. The following public SMS commands are shown in manufacturer documentation. The device default password in these examples is 123456. Replace the placeholders and values as needed for your installation.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 {{apn}}
```
Explanation: Replace {{apn}} with your mobile operator APN string.

- Set the APN username and password
```text
up123456 {{apnu}} {{apnp}}
```
Explanation: Replace {{apnu}} and {{apnp}} with your APN username and password if required by the operator. Leave blank or omit if not required.

- Set the GPRS server using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: This command uses the numeric server IP and the Plaspy port 8888 as shown in public Plaspy settings.

- Set update interval and tracking mode example
```text
fix060s060s***n123456
```
This command sets a sample fix interval pattern as shown in public examples. Adjust per your telemetry needs and firmware syntax.

- Switch to GPRS mode and select transport
```text
gprs123456,1,1
```
or, if a simple mode command applies:
```text
gprs123456
```
Explanation: use the variant required by your firmware to switch from SMS mode to GPRS mode and, where applicable, select UDP or TCP transport.

- Check current settings
```text
check123456
```

- Enable enhanced protocol reporting for sensor or fuel status
```text
protocol123456 18
```
Explanation: This command enables specific protocol behaviors as shown in public documentation for improved sensor reporting.

## Configuration Notes

- Commands shown are the public SMS syntax documented for GPS104 and assume the default device password 123456; if your device password has been changed use the current password.
- Firmware versions and hardware revisions can alter command syntax and available options. Confirm commands with the official Coban GPS104 documentation before applying.
- The GPS104 supports both TCP and UDP. Choose the transport that best matches your network and platform needs; Plaspy accepts either on port 8888.
- SMS based configuration is useful for in-field setup, but manufacturer tools or USB configuration may be preferred for bulk or offline programming.
- When using the adminip command shown above the device is directed to the Plaspy server IP. If your configuration interface accepts a domain, follow the device tool instructions to enter d.plaspy.com where supported.

## Why Use Plaspy with This Configuration

Using the Coban GPS104 with Plaspy provides a straightforward way to consolidate vehicle and asset telemetry into a single monitoring platform. By applying the public server and network settings described here, organizations can enable real time tracking, alerts, and operational oversight while minimizing per device configuration differences thanks to Plaspy automatic protocol detection.

To learn more about Plaspy and how your fleet can use this configuration visit https://www.plaspy.com. For the latest GPS104 commands, firmware notes, and manufacturer guidance verify device specific setup details at https://www.coban.net/ as manufacturer specifications and setup methods can change over time.
