---
slug: /cantrack/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: CanTrack - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for CanTrack TK103 tracker configuration with Plaspy using shared server settings and SMS commands
keywords:
  - CanTrack TK103 configuration
  - CanTrack TK103 setup
  - CanTrack TK103 server configuration
  - TK103 Plaspy setup
  - TK103 GPS tracker configuration
  - CanTrack GPS setup
  - Plaspy tracker configuration
  - GPS tracker SMS commands
  - vehicle tracking configuration
  - fleet tracker setup
---

# CanTrack - TK103 Configuration

This page documents the public configuration context for using the CanTrack TK103 with Plaspy. It focuses on the practical server settings and the common SMS commands published for this model so you can prepare the device to communicate with Plaspy and appear in the platform. The content is drawn from publicly available configuration instructions and Plaspy public server settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK103 commonly uses SMS or GPRS configuration commands; this guide explains the typical workflow and the explicit SMS commands published for the TK103 while reminding you to verify device-specific details with CanTrack documentation.

## Configuration Overview

This configuration process prepares a TK103 to transmit location and status data to Plaspy and to be visible in the Plaspy platform. The main focus is setting the device identifier, operator APN, GPRS server endpoint, and reporting intervals so the tracker reliably connects to Plaspy.

- Configure the device APN and optional APN credentials so GPRS data is allowed.
- Set the device identifier (often derived from the IMEI) so Plaspy can recognize the unit.
- Point the tracker to the Plaspy server endpoint and port so data is delivered to Plaspy.
- Set reporting interval and data mode so the tracker sends updates at the desired frequency.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

When configuring the TK103 for Plaspy, use the following public server settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol.

## Typical Requirements Before Setup

- A charged TK103 with accessible SMS or GPRS configuration capability.
- An active SIM card with data and SMS enabled and cellular coverage at the device location.
- Knowledge of the device IMEI (often printed on the device or packaging).
- The device default password if required for setup (published examples use 123456).
- Access to an SMS-capable phone or manufacturer configuration tool to send configuration commands.
- Confirmation of the operator APN and optional APN username and password for the SIM.

## How This Tracker Connects to Plaspy

The TK103 is configured to send location and event data to the shared Plaspy server endpoint and port so Plaspy can process and display device telemetry. Plaspy receives the incoming connections and automatically detects the tracker protocol to correctly interpret messages.

- The device uses GPRS to open a connection to the Plaspy server endpoint and port.
- Data and location reports are sent to 54.85.159.138 on port 8888 (or to the domain d.plaspy.com if the device accepts hostnames).
- The tracker can use either UDP or TCP transport depending on device settings and operator network behavior.
- Plaspy automatically detects the tracker protocol and maps the device into your account visibility.
- Once reporting is active, Plaspy displays location, status, and event data for monitoring and analysis.

## Common Configuration Workflow

1. Access the official CanTrack TK103 configuration method (typically SMS commands or a vendor tool) and confirm the default device password if needed.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server setting.
3. Set the port to 8888, noting that Plaspy uses the same port across devices.
4. Choose UDP or TCP transport if the tracker requires you to select the transport type.
5. Set the operator APN and optional APN credentials so GPRS data is functional.
6. Apply or save the configuration and restart or switch the device to GPRS/web mode if required.
7. Validate that the device reports to Plaspy by checking the device list and telemetry in Plaspy after the tracker has established a connection.

## Example Configuration Commands

The TK103 is commonly configured by sending SMS messages to the device. The following commands are published as public examples. The device password used in these examples is the default 123456; replace it if your device password differs.

- Restore factory settings (optional initial reset)
```text
begin123456
```

- Set the operator APN (replace [apn] with your carrier APN)
```text
apn123456 [apn]
```

- Set the APN username and password (optional; replace placeholders if needed)
```text
user [apnu] [apnp]
```
Explanation: [apnu] is the APN username placeholder and [apnp] is the APN password placeholder. Omit this command if the APN does not require credentials.

- Set the device ID using the last 11 digits of the IMEI
```text
numberXXXXXXXXXXX
```
Explanation: Replace the 11 X characters with the device identifier formed from the last 11 digits of the IMEI. The TK103 requires the identifier in this specific format.

- Set the GPRS server to Plaspy by IP and port
```text
ip54.85.159.138port8888
```
Explanation: This command sets the server address and port to Plaspy using the public IP and port. If your firmware accepts a hostname instead of an IP, you may be able to use d.plaspy.com where supported.

- Set the update interval to 120 seconds
```text
at120sum0
```

- Switch the device to GPRS/web mode to start reporting
```text
web123456
```

Commands should be sent in the order shown where order is important (for example, set APN before switching to web/GPRS mode). Replace the default password 123456 in commands if your device password has been changed.

## Configuration Notes

- Firmware differences: command syntax and supported parameters can vary by firmware version and hardware revision; follow the exact syntax your unit accepts.
- SMS based setup: the TK103 commonly supports SMS configuration; keep a record of commands you send and any responses from the tracker.
- TCP versus UDP: choose UDP or TCP depending on your network reliability and the device transport options; Plaspy supports both and automatically detects protocol.
- Use the device IMEI responsibly: when deriving the device ID from IMEI, double check digit order to avoid registration issues.
- Manufacturer documentation: always cross-check commands and procedures with CanTrack documentation for the TK103 for the most current device-specific guidance.

## Why Use Plaspy with This Configuration

Using the CanTrack TK103 with Plaspy gives organizations a straightforward way to collect location and event data from devices that support SMS and GPRS setup. Pointing the TK103 to Plaspy's shared server and port simplifies integration and leverages Plaspy's automatic protocol detection so devices appear in the platform with minimal manual protocol selection.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup details, command syntax, and firmware behavior with CanTrack at https://www.cantrackgps.com/ .
