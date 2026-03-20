---
slug: /telic/nt910_g1/configuration
id: nt910_g1-configuration
sidebar_label: Configuration
title: Telic - NT910-G1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Telic NT910 G1 to report to Plaspy with server settings examples and SMS commands
keywords:
  - Telic NT910 G1 configuration
  - Telic NT910 G1 setup
  - NT910 G1 Plaspy configuration
  - Telic GPS tracker configuration
  - NT910 G1 server setup
  - Plaspy tracker configuration
  - NT910 G1 SMS commands
  - GPS tracker platform setup
  - Telic telemetry configuration
  - NT910 G1 fleet tracking
---

# Telic - NT910-G1 Configuration

This page documents the public configuration context for using the Telic NT910-G1 with Plaspy. It collects the practical, vendor public commands and the Plaspy server values required to point the device to Plaspy for telemetry and tracking. Use this document as a technical reference when preparing NT910-G1 units for integration with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The NT910-G1 supports SMS command configuration as shown in the public Telic command examples below and also supports low power cellular operation suitable for telemetry and fleet deployments.

## Configuration Overview

The goal of the configuration process is to prepare the NT910-G1 to communicate reliably with Plaspy, ensure the correct APN and network transport are set, and verify the device reports to the shared Plaspy endpoint. The following tasks are common when configuring this model for Plaspy:

- Point the device to the Plaspy server endpoint and port so telemetry is sent to Plaspy for ingestion and decoding.
- Configure APN and optional APN credentials so the device can establish a GPRS or LTE data session.
- Select UDP or TCP transport if the device requires manual transport selection for server connections.
- Validate connectivity and reporting by checking device responses and confirming data arrives in Plaspy.
- Use the manufacturer provided method such as SMS commands or an official configuration tool to apply settings.

## Plaspy Server Settings

When configuring the NT910-G1 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device transport selection
- Plaspy automatically detects the tracker protocol so the same server and port are used across supported devices

Plaspy uses the same port for all devices and its automatic protocol detection simplifies integration once the device points at the Plaspy server.

## Typical Requirements Before Setup

- A charged and powered NT910-G1 with physical access for SMS command entry or configuration tool use.
- An active SIM card with a valid data APN and, if required, the ability to receive and send SMS for SMS based configuration.
- Access to the official Telic configuration method for your unit such as SMS commands or manufacturer software and any credentials required.
- Knowledge of the correct APN for your mobile operator and any optional APN username or password placeholders.
- Awareness of the device default password where required for commands the public documentation shows the default as 123456.
- A plan to validate operation after configuration by confirming the device reports to Plaspy.

## How This Tracker Connects to Plaspy

The NT910-G1 sends location and telemetry to Plaspy over the cellular network using the configured APN and server endpoint. Once the device has a working data session and is pointed to the Plaspy server and port, Plaspy ingests and decodes the incoming protocol automatically so the device becomes visible in the platform.

- The device is configured to report to the shared Plaspy server endpoint and port so all telemetry flows to Plaspy.
- Plaspy receives uplink packets over UDP or TCP and identifies the tracker protocol automatically.
- Telemetry, status updates, and events sent by the device become available in Plaspy dashboards and reporting.
- Verification commands or status checks can confirm settings and connectivity to the Plaspy endpoint.
- Successful setup enables operational monitoring, geofence alerts, and historical reporting inside Plaspy.

## Common Configuration Workflow

1. Access the official Telic configuration method for your NT910-G1 unit such as SMS commands or the manufacturer software. This is the recommended starting point for applying settings.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration field or SMS command as required.
3. Set the port to 8888 which is used by Plaspy for all devices.
4. Choose UDP or TCP transport if the device requires a transport choice during configuration.
5. Configure the device APN and optional APN username and password placeholders so the device can establish a data session.
6. Save or apply the configuration and restart the device if recommended by the manufacturer or if the device requires a reboot to activate network settings.
7. Validate that the device reports to Plaspy by using the device verification commands or by checking incoming device data in Plaspy.

## Example Configuration Commands

The NT910-G1 supports SMS based configuration using a device password. The public sample commands below are presented in the order given in the manufacturer provided content. The sample uses the default device password 123456 as shown in the public Telic examples. Replace the placeholders [apn], [apnu], and [apnp] with your operator values where needed.

- Factory reset optional initial setup
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```
(Replace [apn] with your mobile operator APN value)

- Set the APN username and password if required
```text
up123456 [apnu] [apnp]
```
(Only send this if your APN requires a username or password; keep placeholders if not used)

- Set the GPRS server to point the device at Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```
(This command configures the device to send data to Plaspy at 54.85.159.138 on port 8888)

- Switch to GPRS mode
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Verification command to check current settings
```text
check123456
```

Notes on the SMS commands above
- The sample commands use the default device password 123456 as shown in the public Telic sample. Change the password when applicable for security.
- Preserve the placeholders [apn], [apnu], and [apnp] and replace them with operator values where required.
- Apply the factory reset command only when required during initial provisioning or when explicitly needed.

## Configuration Notes

- Manufacturer firmware and regional variants can change command syntax and behavior; verify the exact syntax for your firmware revision.
- The NT910-G1 sample commands use SMS based configuration which is useful when no configuration tool is available on site.
- Choose UDP or TCP according to your operational requirements and confirm the device supports the selected transport for server communication.
- Always confirm APN and optional credentials with your mobile operator before provisioning units at scale.
- Keep device passwords secure and update default passwords where supported to reduce unauthorized access.

## Why Use Plaspy with This Configuration

Using the Telic NT910-G1 with Plaspy gives organizations low power, cost efficient telemetry and tracking combined with a server platform that automatically recognizes tracker protocols. Pointing the device at Plaspy using the shared server and port simplifies fleet rollouts and centralizes telemetry processing for alerts, location history, and operational dashboards.

To learn more about Plaspy and supported integration workflows visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the Telic site at https://www.telic.de.
