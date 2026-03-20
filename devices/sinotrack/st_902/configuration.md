---
slug: /sinotrack/st_902/configuration
id: st_902-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the SinoTrack ST-902 OBD2 tracker to Plaspy using shared server settings and SMS commands
keywords:
  - SinoTrack ST-902 configuration
  - SinoTrack ST-902 setup
  - ST-902 Plaspy integration
  - SinoTrack SMS configuration
  - OBD2 GPS tracker configuration
  - GPRS server configuration
  - Plaspy server settings
  - ST-902 APN setup
  - vehicle tracking ST-902
  - SinoTrack ST-902 guide
---

# SinoTrack - ST-902 Configuration

This page covers the public configuration context for using the SinoTrack ST-902 with Plaspy. It summarizes the practical steps and public SMS commands used to point the ST-902 to Plaspy so the device can send location updates and alarm events to a Plaspy collector. The guidance below is based on publicly available device configuration methods and Plaspy server settings.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools; follow the device commands below and always verify details against the latest SinoTrack documentation when required.

## Configuration Overview

The goal of this configuration is to prepare the ST-902 to reliably communicate with Plaspy over GPRS and to confirm the tracker is visible and reporting in the platform. The ST-902 supports SMS-based configuration and GPRS reporting, which lets installers set APN and server parameters remotely using SMS commands.

- Configure the device to use the Plaspy server endpoint so telemetry and alarms are sent to the platform.
- Set the carrier APN credentials so the device can establish GPRS data sessions.
- Choose transport (UDP or TCP) if required and set the common Plaspy port so the collector accepts incoming telemetry.
- Verify configuration using the device verification command and confirm the unit appears in Plaspy.
- Enable appropriate reporting intervals and alarms so Plaspy receives useful telemetry for dashboards and alerts.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com should be accepted by trackers that use DNS names.
- Plaspy server IP 54.85.159.138 is provided for direct IP configuration.
- Port 8888 is the shared port used by Plaspy for all supported devices.
- Transport support for UDP or TCP is available; configure UDP or TCP on port 8888 depending on the device requirement.
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol inside Plaspy for most devices.

## Typical Requirements Before Setup

- Device plugged into the vehicle OBD2 port and powered so it can accept SMS commands and establish GPRS.
- Active SIM card with data enabled and correct APN credentials for the carrier.
- Access to the device IMEI and any required registration info for your deployment.
- Ability to send SMS to the device phone number for SMS-based configuration, or access to the official SinoTrack configuration tool if available.
- A Plaspy account or system access to confirm device visibility after configuration.
- Familiarity with the device SMS command workflow and placeholders such as APN, APN username, and APN password.

## How This Tracker Connects to Plaspy

The ST-902 is configured to push position updates, timestamps, and alarm events over GPRS to the Plaspy server endpoint. When configured to the Plaspy endpoint and port, the tracker will open a data session and send telemetry that Plaspy ingests for visualization and alerting.

- The tracker sends location and event data to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives GPRS telemetry and automatically detects the tracker protocol so the data is routed correctly in the platform.
- Alarm events such as overspeed, shock, geo-fence, and low battery are transmitted so Plaspy can trigger notifications and actions.
- SMS is available as a fallback/configuration channel to modify APN and server settings when direct access to the device is limited.
- Reporting intervals are configurable so you can balance update frequency and data usage while maintaining visibility in Plaspy.

## Common Configuration Workflow

1. Access the official SinoTrack SMS configuration method or vendor tool to send configuration commands to the device.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose the transport protocol (UDP or TCP) if the device requires a transport selection.
5. Configure APN credentials for the installed SIM so the tracker can establish GPRS.
6. Apply or save the configuration and restart the device if required for settings to take effect.
7. Validate that the device reports to Plaspy by using the device verification command and checking the Plaspy platform for incoming data.

## Example Configuration Commands

The ST-902 supports SMS-based configuration. The following public commands are provided in the device documentation and should be sent by SMS to the tracker phone number in the order shown when appropriate.

- Reset to factory settings (optional initial step if you need to clear previous configuration)
```text
RESET
```

- Set the time zone to UTC+0
```text
8960000E00
```

- Set the APN of the operator
```text
8030000 [apn] [apnu] [apnp]
```
Note: [apn] is the carrier APN, [apnu] is the APN username (leave blank if not required), and [apnp] is the APN password (leave blank if not required). Preserve the placeholders when substituting your carrier credentials.

- Set up the GPRS server to Plaspy by IP and port
```text
8040000 54.85.159.138 8888
```
You may alternatively use the Plaspy domain:
```text
8040000 d.plaspy.com 8888
```

- Set update interval when the device is ON
```text
8050000 60
```

- Set update interval when the device is OFF
```text
8090000 60
```

- Switch the device to GPRS mode
```text
7100000
```

- Verify device configuration and read current settings
```text
RCONF
```

Follow the device response to RCONF to confirm the configured server, APN, and reporting intervals.

## Configuration Notes

- SMS-based configuration is supported by the ST-902 and is the practical method for remote provisioning when the device is already installed.
- Firmware versions and regional hardware variants may change exact command formats or supported placeholders; verify with the device response and vendor documentation.
- Choose UDP or TCP based on your tracker options; Plaspy accepts both on port 8888 and auto-detects the protocol.
- Use the domain d.plaspy.com when possible to simplify server migration; the IP 54.85.159.138 is an alternative for direct configuration.
- Confirm APN credentials with the mobile carrier and keep APN username/password placeholders intact when not required.

## Why Use Plaspy with This Configuration

Using the ST-902 with Plaspy provides centralized visibility of vehicle location, alarms, and OBD2-derived telemetry across a fleet. The plug-and-play OBD2 form factor combined with SMS-configurable server settings lets teams deploy devices quickly and point them to the shared Plaspy collector for real-time dashboards, alerting, and historical reporting.

Learn more about Plaspy and how it can ingest ST-902 telemetry at https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details verify the official SinoTrack documentation at https://www.sinotrackgps.com/ as vendor procedures and firmware behavior can change over time.
