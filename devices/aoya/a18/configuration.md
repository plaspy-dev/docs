---
slug: /aoya/a18/configuration
id: a18-configuration
sidebar_label: Configuration
title: AoYa - A18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AoYa A18 GPS tracker integration with Plaspy including server settings SMS commands and setup workflow
keywords:
  - AoYa A18
  - AoYa A18 configuration
  - AoYa A18 setup
  - AoYa A18 server configuration
  - A18 GPS tracker
  - Plaspy configuration
  - Plaspy tracker setup
  - vehicle tracking A18
  - A18 tracking software
  - GPS tracker configuration
---

# AoYa - A18 Configuration

This page covers the public configuration context for using the AoYa A18 GPS tracker with Plaspy. It summarizes the practical, manufacturer-provided SMS commands and the shared Plaspy server settings required to get an A18 reporting location data into the Plaspy platform. Use this guide as a setup reference while following any device-specific notes from the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The A18 supports SMS-based configuration in the model configuration shown here and the sample default device password in the public commands is 123456.

## Configuration Overview

Configuring the AoYa A18 for use with Plaspy prepares the device to connect over GPRS to the Plaspy server endpoint and ensures the tracker reports correctly so it becomes visible in the platform. The A18's public configuration uses SMS commands to set APN, server address, transport mode, and to verify settings.

- Set the mobile operator APN so the device can establish a GPRS data session.
- Point the device to the Plaspy server endpoint so location packets are delivered to Plaspy.
- Choose the transport mode (UDP or TCP) if applicable and supported by the device.
- Save and validate settings, then confirm the device is reporting to Plaspy.
- Use the device verification command to review active configuration after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration when supported
- Server IP 54.85.159.138 for direct server addressing
- Port 8888 as the destination port for all devices in Plaspy
- Transport support for UDP or TCP as selectable on the device
- Plaspy automatically detects the tracker protocol so the platform can accept compatible telemetry formats

Note: Plaspy uses the same port number for all supported devices and detects the correct protocol automatically.

## Typical Requirements Before Setup

- A working SIM card provisioned with a data APN and SMS capability for remote configuration.
- Device powered and reachable by SMS from your administrative phone number.
- The operator APN, and optionally APN username and password, for the mobile network where the SIM is registered.
- Access to the official manufacturer configuration method such as SMS command set or vendor software.
- Knowledge of the device password (the public sample uses 123456 as the default).
- A brief testing window to confirm the device reports to Plaspy after configuration.

## How This Tracker Connects to Plaspy

The AoYa A18 is configured to send location and status messages to the shared Plaspy server endpoint and port. Once the device can open a GPRS session and send packets to the configured server address and port, Plaspy will receive and match those messages and make the device visible in the platform.

- The device is configured with the Plaspy server address using the adminip command to 54.85.159.138 8888.
- GPRS mode is enabled and the device is set to send data via UDP or TCP depending on the chosen transport.
- APN and optional APN credentials are set so the tracker can establish mobile data communication.
- After configuration, the device transmits location and status packets to the configured Plaspy endpoint.
- Plaspy automatically detects the tracker protocol so no additional protocol selection is required on the platform side.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software or prepare to send SMS commands as documented by AoYa.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the direct server IP 54.85.159.138.
3. Set the destination port to 8888 in the device configuration.
4. Choose UDP or TCP transport on the device if it requires explicit selection.
5. Apply or save the configuration and confirm the changes according to the manufacturer routine.
6. Restart the device if required by the device or after a factory reset.
7. Validate that the device reports to Plaspy by checking the platform or using the device verification command.

## Example Configuration Commands

The AoYa A18 provides an SMS-based command set in the public model configuration. These commands follow the device password convention; the sample default password shown in public documentation is 123456. Preserve placeholders when replacing network specific values.

- Optional initial factory reset (use only if you need to clear current settings):
```text
begin123456
```

- Set the time zone to UTC 0:
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN):
```text
apn123456 {{apn}}
```
Explanation: replace {{apn}} with the carrier APN string.

- Set APN username and password if required (replace {{apnu}} and {{apnp}} with credentials):
```text
up123456 {{apnu}} {{apnp}}
```
Explanation: include these values only if your APN requires authentication.

- Set the GPRS server to the Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```
Explanation: this points the A18 to Plaspy. You can also use d.plaspy.com where DNS is supported.

- Enable GPRS mode and transport selection. The device accepts either a parameterized form or a short form:
```text
gprs123456,1,1
```
or
```text
gprs123456
```
Explanation: use the form required by your firmware to activate GPRS. The exact parameter values and behavior can vary by firmware.

- Verify current configuration:
```text
check123456
```
Explanation: returns device configuration details via SMS so you can confirm APN, server and mode settings.

Keep the device password in these commands (123456 in the public sample) and replace placeholders with your operator information. If your device uses a different password, substitute it accordingly.

## Configuration Notes

- Commands shown above are the publicly documented SMS commands for basic A18 configuration; exact syntax and available commands can vary with firmware version.
- The A18 supports SMS-based setup as shown; some installers may prefer vendor software or a local configuration tool if available.
- Choose TCP or UDP based on your operational preference. Plaspy accepts either and detects the protocol automatically, but device behavior differs with each transport on some firmware versions.
- Use the check123456 verification command to confirm settings after applying changes.
- Always confirm current command syntax and behavior with AoYa manufacturer documentation if firmware or behavior appears different.

## Why Use Plaspy with This Configuration

Using the AoYa A18 with Plaspy gives organizations a straightforward path to vehicle visibility and operational monitoring. By configuring the device to point to the Plaspy server and ensuring the APN and transport settings are correct, the A18 can deliver location updates and status information directly to the Plaspy platform for mapping, reporting, and alerting.

To learn more about Plaspy, visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the official AoYa website http://www.aoyagps.com/ as these details can change over time.
