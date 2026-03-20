---
slug: /gnxis/4_wire/configuration
id: 4_wire-configuration
sidebar_label: Configuration
title: Gnxis - 4-wire Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Gnxis 4 wire GPS tracker and Plaspy compatibility with practical server settings and SMS commands
keywords:
  - Gnxis 4 wire configuration
  - Gnxis 4 wire setup
  - Gnxis Plaspy configuration
  - Gnxis GPS tracker setup
  - Plaspy server configuration
  - GPS tracker SMS commands
  - vehicle tracking setup
  - GPRS tracker configuration
  - LTE GPS tracker configuration
  - tracker connectivity guide
---

# Gnxis - 4-wire Configuration

This page covers the public configuration context for using the Gnxis 4-wire GPS tracker with the Plaspy platform. It gathers the practical, publicly available setup steps and SMS commands so you can prepare the device to communicate with Plaspy. The Gnxis 4-wire is compatible with LTE GSM and GPRS networks and supports SMS based configuration, which is reflected in the example commands below.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands below as public guidance and verify any device specific behavior with the manufacturer documentation.

## Configuration Overview

This configuration process prepares the Gnxis 4-wire tracker to report location and status to Plaspy by setting network parameters, server endpoint, update intervals, and basic alarms. The public SMS command sequence below shows common actions used in initial setup and verification.

- Configure the device APN and optional APN credentials so GPRS data can reach the internet.
- Point the device to the Plaspy server endpoint and port so the tracker can send location messages.
- Select UDP or TCP transport and set an update interval appropriate for your fleet visibility needs.
- Enable critical event reporting such as SOS and power loss notifications for platform visibility.
- Verify settings and confirm the device is visible in Plaspy once the tracker attaches.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port for connectivity

## Typical Requirements Before Setup

- A powered and accessible Gnxis 4-wire device installed or on a bench with stable power.
- A valid SIM card with a data plan and SMS capability to send configuration messages.
- APN, APN username, and APN password values from the mobile operator to enable GPRS.
- Access to the official manufacturer configuration method for the device, typically SMS in this model.
- Knowledge of the device default password if required for configuration commands.

## How This Tracker Connects to Plaspy

The Gnxis 4-wire is configured to send GPRS or TCP/UDP messages to the Plaspy server endpoint and port so that location and alarm events appear in the Plaspy platform. Plaspy receives the incoming device traffic on a shared port and determines the correct protocol automatically.

- The tracker uses GPRS data to establish a connection to Plaspy using the configured server IP or domain.
- Device messages are sent to port 8888 so Plaspy can ingest telemetry from all supported trackers.
- You may choose UDP or TCP transport depending on device firmware and operational preference.
- Plaspy detects the tracker protocol automatically and maps messages into the platform.
- After successful setup the device becomes visible in the Plaspy platform for real time monitoring and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the Gnxis 4-wire, commonly SMS based commands.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set port 8888 for the device server endpoint since Plaspy uses a single port for all devices.
4. Choose UDP or TCP if the tracker requires an explicit transport selection.
5. Apply or save the configuration using the device method such as sending the required SMS commands.
6. Restart the tracker if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking the tracker status in the platform or using the device verification command.

## Example Configuration Commands

The Gnxis 4-wire accepts SMS commands for configuration. The default device password used in these examples is 123456. Keep the order when performing initial setup if you want to mirror a typical provisioning flow.

- Factory reset (optional or initial setup)
```sms
begin123456
```

- Set the time zone to UTC 0
```sms
time zone123456 0
```

- Set the operator APN
```sms
apn123456 {{apn}}
```
Explanation: replace {{apn}} with your mobile operator APN string.

- Set the APN username and password
```sms
up123456 {{apnu}} {{apnp}}
```
Explanation: replace {{apnu}} with the APN username and {{apnp}} with the APN password if required by the operator.

- Set the GPRS server using the public Plaspy server IP and port
```sms
adminip123456 54.85.159.138 8888
```
This sets the device to send data to Plaspy on the known server IP and port 8888.

- Set an update interval example
```sms
fix060s060s***n123456
```
This command is a public example for update timing as provided by the manufacturer. Adjust per your requirements and firmware syntax.

- Enable SOS button transmission
```sms
SOSALM,ON,1#
```

- Switch to GPRS mode and set transport to UDP or TCP depending on syntax supported
```sms
gprs123456,1,1
```
Alternative shorter command sometimes accepted:
```sms
gprs123456
```

- Check current settings
```sms
check123456
```

Note on placeholders: {{apn}}, {{apnu}}, and {{apnp}} are placeholders for your mobile operator APN, APN username, and APN password. Keep the device default password 123456 unless it has been changed.

## Configuration Notes

- SMS based configuration is documented here because the Gnxis 4-wire supports SMS commands in the public configuration examples.
- Firmware versions and hardware revisions can change command syntax and available options; consult manufacturer docs if a command is rejected.
- Choose UDP for lower overhead or TCP for reliable delivery if the device firmware exposes both options.
- Keep APN credentials accurate and test GPRS connectivity before finalizing server and interval settings.
- The Plaspy server values d.plaspy.com and 54.85.159.138 with port 8888 are the public endpoints to use for this integration.

## Why Use Plaspy with This Configuration

Using the Gnxis 4-wire with Plaspy gives organizations centralized visibility into vehicle location and event reporting by routing device data into a single platform. With the shared Plaspy server endpoint and automatic protocol detection, fleet administrators can standardize device provisioning and focus on operational monitoring rather than per device server management.

To learn more about Plaspy visit https://www.plaspy.com. Manufacturer specifications, setup methods, and device firmware behavior can change over time so verify the latest device specific configuration details with the manufacturer on their official website.
