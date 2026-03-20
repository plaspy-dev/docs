---
slug: /telic/lt910_eubis/configuration
id: lt910_eubis-configuration
sidebar_label: Configuration
title: Telic - LT910-EUbis Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Telic LT910 EUbis showing Plaspy server settings SMS commands and setup steps for integration
keywords:
  - Telic LT910-EUbis configuration
  - LT910-EUbis setup
  - Telic tracker Plaspy
  - LT910-EUbis server configuration
  - Telic GPS tracker setup
  - LT910-EUbis SMS commands
  - Plaspy device configuration
  - Telic LTE tracker configuration
  - fleet tracking LT910-EUbis
  - LT910-EUbis GPRS setup
---

# Telic - LT910-EUbis Configuration

This page documents the public configuration context for using the Telic LT910-EUbis terminal with the Plaspy platform. It explains the shared Plaspy server settings you will use, the practical SMS and GPRS steps the device supports, and the general workflow to get the LT910-EUbis reporting into Plaspy. The content focuses on publicly available setup information and the essential values Plaspy requires to accept device connections.

Plaspy uses a consistent server endpoint and port across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The LT910-EUbis can be configured using SMS commands and GPRS parameters to point the device to Plaspy, so review both this guide and the official Telic documentation when applying settings.

## Configuration Overview

This configuration prepares the LT910-EUbis to send telemetry and location data to the shared Plaspy server endpoint. The practical steps center on setting the device APN, directing GPRS traffic to Plaspy, selecting transport (UDP or TCP if required), and validating the device reports correctly.

- Use SMS or the manufacturer tool to set the device APN and any APN credentials so the terminal can attach to the cellular network.
- Configure the device GPRS server address to point at the Plaspy endpoint so telemetry is routed to Plaspy.
- Select the transport protocol if the device requires an explicit choice between UDP and TCP.
- Enable GPRS reporting mode so the terminal establishes a data session and delivers messages to Plaspy.
- Verify the device status with the built in check command or by confirming the device appears in the Plaspy platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol when devices connect

These are the public values you will enter on the device or via SMS when pointing the tracker to Plaspy.

## Typical Requirements Before Setup

- Power the device and ensure it is in a ready state for configuration.
- A valid cellular SIM with data enabled and APN information from your operator.
- Ability to send SMS commands to the tracker or access to the official Telic configuration tool.
- Knowledge of the device admin password or credentials used for remote commands; the supplied public examples use the default password shown below.
- Confirm network coverage for LTE and 2G fallback where required by the installation.
- Access to Plaspy account or platform to validate the device once it registers.

## How This Tracker Connects to Plaspy

The LT910-EUbis is configured to open a GPRS data session and send its telemetry to the Plaspy server endpoint and port listed above. Plaspy ingests the incoming device messages, normalizes data, and makes location and status available for dashboards and alerts.

- Device is given APN and optional APN credentials so it can attach to the mobile network.
- GPRS server is set to point to Plaspy at 54.85.159.138 or d.plaspy.com on port 8888.
- Device selects a transport protocol (UDP or TCP) if required and opens a session to Plaspy.
- Plaspy automatically detects the tracker protocol and begins parsing incoming messages.
- Once connected, the device will report position and status information to Plaspy for visibility and monitoring.

## Common Configuration Workflow

1. Access the official Telic configuration method for the LT910-EUbis, for example SMS command interface or vendor tool.
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Set the operator APN and optional APN username and password so the device can establish a GPRS session.
6. Apply or save the configuration on the device and send any required activation commands to enable GPRS reporting.
7. Restart or power cycle the device if required by the manufacturer to apply changes.
8. Validate that the device reports to Plaspy by using the device check command or confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The LT910-EUbis can be configured by sending SMS commands to the device. The examples below are presented in the same order they are typically applied. The sample commands use the public default password 123456 as provided in the device documentation. Replace placeholders where appropriate.

- Factory reset (optional initial step)
  
```text
begin123456
```

- Set time zone to UTC 0

```text
time zone123456 0
```

- Set operator APN (replace {{apn}} with your mobile operator APN)

```text
apn123456 {{apn}}
```

- Set APN username and password when required (replace {{apnu}} and {{apnp}} with operator credentials)

```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the public server IP and port

```text
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode (either form may be accepted by device firmware)

```text
gprs123456,1,1
```

or

```text
gprs123456
```

- Verify current settings

```text
check123456
```

Notes on placeholders
- {{apn}} is your mobile operator APN string required for data.
- {{apnu}} is the APN username when the operator requires one.
- {{apnp}} is the APN password when the operator requires one.
- Keep the device password in the SMS commands; change it from the default after initial setup if supported.

## Configuration Notes

- The exact SMS syntax and available commands can vary by firmware revision. Use the commands above only if they match the device firmware documented by Telic.
- Choose UDP or TCP based on your installer preference and network behavior; Plaspy supports both transports and will detect the device protocol automatically.
- SMS based configuration is convenient for remote or in-field setups but ensure SMS control is secured and the default password is updated when possible.
- APN and APN credential fields must be provided by your mobile operator; incorrect APN settings will prevent GPRS connectivity.
- Plaspy uses the same port 8888 for all devices and the platform accepts connections to d.plaspy.com or the provided IP.

## Why Use Plaspy with This Configuration

Using the LT910-EUbis with Plaspy gives organizations a reliable cellular communications backbone for location and telemetry workflows. The terminal's LTE Cat 1bis connectivity and industrial design make it a practical choice for deployments that need consistent cellular coverage and the ability to integrate with GNSS and sensor inputs while delivering data to Plaspy for monitoring, alerts, and reporting.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and official instructions verify setup details on the manufacturer site https://www.telic.de. Manufacturer specifications and setup procedures may change over time so consult Telic documentation when implementing device configuration.
