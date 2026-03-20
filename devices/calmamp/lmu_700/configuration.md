---
slug: /calmamp/lmu_700/configuration
id: lmu_700-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp LMU 700 tracker setup with Plaspy server settings and SMS commands
keywords:
  - CalmAmp LMU 700 configuration
  - CalmAmp LMU 700 setup
  - LMU 700 server configuration
  - LMU 700 Plaspy setup
  - CalmAmp tracker configuration
  - vehicle tracker configuration
  - LMU 700 SMS setup
  - LMU 700 APN settings
  - Plaspy tracker setup
  - GPS tracker configuration
---

# CalmAmp - LMU-700 Configuration

This page describes the public configuration context for using the CalmAmp LMU-700 tracker with the Plaspy platform. It summarizes the practical server settings, common prerequisites, and example SMS configuration commands that are publicly available for preparing the LMU-700 to communicate with Plaspy. Use this guide to understand the steps you will take before adding the device to Plaspy and to see the exact Plaspy server values that should be applied.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as practical public guidance rather than a substitute for the official CalmAmp documentation.

## Configuration Overview

The configuration process prepares the LMU-700 to establish reliable data transport to Plaspy and enables visibility of the unit in the Plaspy platform. For the LMU-700 this commonly includes APN and GPRS server settings and may be performed via SMS commands or the manufacturer's provisioning tools.

- Configure the device APN and optional APN credentials so cellular data is available.
- Point the device to the Plaspy server endpoint so telemetry is delivered to the platform.
- Ensure the device uses the Plaspy port and select UDP or TCP transport if required.
- Reboot or restart the tracker so new settings take effect and are reported to Plaspy.
- Validate connectivity by checking the device settings and confirming it reports to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint information and should be used when configuring the LMU-700 server and port fields.

## Typical Requirements Before Setup

- A powered and accessible LMU-700 unit installed or in a safe test bench environment.
- A working cellular SIM with data enabled and SMS capability for SMS based configuration.
- Ability to send SMS commands to the device if you use the SMS configuration method shown below.
- The device MID or ID value returned by the manufacturer query command to include where required.
- Access to CalmAmp configuration tools or documentation if you prefer provisioning with manufacturer software or OTA methods.
- Confirmation of the device firmware version when troubleshooting differences in command behavior.

## How This Tracker Connects to Plaspy

The LMU-700 is configured to send its location and event messages to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry in your account. Plaspy receives connections on the same port for all supported devices and uses protocol detection to parse incoming messages.

- The device sends GPRS or cellular transport messages to d.plaspy.com or 54.85.159.138 on port 8888.
- You may choose UDP or TCP as the transport if the tracker requires an explicit selection.
- Plaspy automatically identifies the tracker protocol so the same port can be reused for different models.
- Once connected the tracker reports events and status so Plaspy can show location, movement, and alerting.
- Validation of connectivity confirms the tracker is visible in Plaspy and reporting as expected.

## Common Configuration Workflow

1. Access the official CalmAmp configuration method or software, or prepare to send SMS commands to the device as supported by your LMU-700 firmware.
2. Identify the device ID by issuing the manufacturer query command (for example the !R0 command) and note the returned MID value.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server field.
4. Set the server port to 8888 and select UDP or TCP transport if the device requires transport selection.
5. Configure the device APN and optional APN username and password so the tracker has cellular data access.
6. Apply or save the configuration and reboot or restart the device when required so changes take effect.
7. Validate that the device reports to Plaspy by checking the device settings and confirming presence and telemetry in the platform.

## Example Configuration Commands

The LMU-700 can be configured using SMS commands. The device ID used in commands is the MID 10 digits returned by the manufacturer query command !R0. Preserve placeholders for your network values when issuing commands.

- Set the operator APN
  ```
  !RP,2306,0,[apn]
  ```
  Replace [apn] with your mobile operator APN string.

- Set the APN username (optional)
  ```
  !RP,2314,0,[apnu]
  ```
  Replace [apnu] with your APN username if required by the operator.

- Set the APN password (optional)
  ```
  !RP,2315,0,[apnp]
  ```
  Replace [apnp] with your APN password if required by the operator.

- Set the GPRS server to the Plaspy server IP
  ```
  !RP,2319,0,54.85.159.138
  ```

- Set the server port to Plaspy port
  ```
  !RP,769,0,8888
  ```

- Reboot the tracker to apply settings
  ```
  !R3,70,0
  ```
  The reboot command is commonly used after initial configuration so settings take effect; use it when required.

- Check current settings
  ```
  !RO
  ```
  Use this verification command to list current configuration values returned by the device.

Notes on placeholders: [apn] is required for data connectivity. [apnu] and [apnp] are optional and only needed if your operator requires a username or password for the APN.

## Configuration Notes

- SMS based configuration is shown because it is publicly documented for this model; manufacturer tools and OTA systems such as PULS may also be available for bulk provisioning and firmware updates.
- Behavior and available SMS commands can vary by firmware version and hardware revision. Confirm command support for your exact device firmware.
- Choose UDP or TCP according to your installation needs; Plaspy supports both and detects the protocol automatically on port 8888.
- Plaspy uses the same port for all supported devices to simplify server configuration and to allow automatic protocol detection.
- Always verify APN credentials with the SIM operator before applying settings to avoid connectivity issues.

## Why Use Plaspy with This Configuration

Using the CalmAmp LMU-700 with Plaspy provides a straightforward path to integrate a well proven vehicle tracker into a single fleet platform. With the public configuration values above you can point units to the Plaspy server and confirm that location, event, and status messages arrive in the platform, enabling monitoring, alerting, and operational oversight across a fleet.

To learn more about Plaspy and how the platform manages device connectivity and telemetry, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer procedures consult the CalmAmp website at http://www.calamp.com/ as device configuration methods and firmware behavior can change over time.
