---
slug: /sinotrack/st_907/configuration
id: st_907-configuration
sidebar_label: Configuration
title: SinoTrack - ST-907 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the SinoTrack ST-907 to Plaspy using SMS and GPRS server settings and example SMS commands
keywords:
  - SinoTrack ST-907 configuration
  - SinoTrack ST-907 setup
  - ST-907 server configuration
  - ST-907 Plaspy setup
  - SinoTrack GPS tracker configuration
  - vehicle tracker ST-907 setup
  - ST-907 GPRS configuration
  - ST-907 SMS commands
  - Plaspy tracker configuration
  - Plaspy device setup
---

# SinoTrack - ST-907 Configuration

This page provides the public configuration context required to connect the SinoTrack ST-907 to Plaspy. It summarizes the shared Plaspy server settings you must apply, explains the common SMS initialization commands used by the ST-907, and shows the practical steps installers and administrators commonly follow to enable reporting from the tracker into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST-907 supports SMS and GPRS configuration, so installers will often use SMS commands to set APN and server parameters and then verify reporting to Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the ST-907 to send location, status, and alarm data to Plaspy so the device becomes visible and manageable in the platform. For the ST-907 this is typically done by applying APN settings, pointing the device at the Plaspy server, enabling GPRS mode, and confirming the device reports successfully.

- Set the device APN and, if required, APN user and password so the SIM can establish a GPRS session.
- Configure the GPRS server to point to Plaspy by domain or IP and set the shared port that Plaspy uses.
- Choose the transport method the device requires (UDP or TCP) and ensure it matches the tracker settings.
- Enable GPRS reporting mode and configure update intervals so the device sends position and alarm updates.
- Validate the device with a settings query and confirm it reports to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration.
- Server IP 54.85.159.138 as the alternative numeric endpoint.
- Port 8888 which is used by Plaspy for all devices.
- Transport support: configure the tracker to use UDP or TCP depending on the device requirement.
- Plaspy automatically detects the tracker protocol so devices pointing at the above endpoint and port will be ingested without manual protocol selection inside Plaspy.

Note: All devices in Plaspy use the same port 8888, so the ST-907 should be configured to target port 8888 when reporting to Plaspy.

## Typical Requirements Before Setup

- A powered and accessible ST-907 unit with correct wiring for vehicle installation.
- A SIM card with an active data plan that supports GPRS and SMS if you will use SMS commands to configure the device.
- Accurate APN information from the mobile operator including APN user and password if required by the carrier.
- Access to the device administration method provided by the manufacturer such as SMS commands or vendor tools.
- A Plaspy account or platform access to validate that the device appears and reports after configuration.
- The device IMEI and any authorized admin phone numbers handy for SMS based management and verification.

## How This Tracker Connects to Plaspy

The ST-907 is configured to send position and alarm data to Plaspy by pointing its GPRS reporting endpoint at Plaspy’s shared server and port. Once the APN and server parameters are applied and GPRS mode is enabled, the device can transmit telemetry and alarms to Plaspy for visibility and monitoring.

- The tracker reports to the shared Plaspy endpoint using either d.plaspy.com or the numeric IP 54.85.159.138 on port 8888.
- Plaspy receives the incoming device connection and automatically detects the tracker protocol to parse data.
- Location updates and alarms sent over GPRS are ingested into Plaspy and shown as device telemetry.
- SMS is available as a fallback or configuration channel; SMS commands are commonly used to initialize APN and server parameters.
- Update intervals and reporting modes (movement on/off intervals) control how frequently the tracker transmits data to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, commonly the ST-907 SMS interface or vendor tool.
2. Set the APN values using the carrier APN information so the device can establish a GPRS session.
3. Enter the Plaspy server using either d.plaspy.com or the IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP on the device if required by the tracker configuration interface.
5. Apply or save the configuration and switch the device into GPRS reporting mode.
6. Restart or power cycle the device if required by the device to apply network settings.
7. Validate that the device reports to Plaspy by checking the device on the Plaspy platform and using the device RCONF or status query SMS command.

## Example Configuration Commands

The ST-907 supports SMS based initialization. Below are the commonly used public SMS commands in the sequence recommended for initial setup. Preserve placeholders when setting APN values.

1. Optional initial factory reset (use when required prior to reconfiguration)
```
RESET
```

2. Set time zone to UTC 0
```
8960000E00
```

3. Set APN and optional APN credentials
```
8030000 [apn] [apnu] [apnp]
```
- [apn] = carrier APN
- [apnu] = APN username (leave blank if not required)
- [apnp] = APN password (leave blank if not required)

4. Set the GPRS server to Plaspy using the Plaspy IP and port
```
8040000 54.85.159.138 8888
```
You can use the domain instead of the IP when supported by the device by replacing the numeric IP with d.plaspy.com if the device accepts a domain string.

5. Set reporting update interval for movement on
```
8050000 60
```

6. Set reporting update interval for movement off
```
8090000 60
```

7. Switch the tracker to GPRS mode
```
7100000
```

8. Verify current settings on the device
```
RCONF
```

Send each SMS from an authorized admin phone number. The exact SMS format and required authorization may vary by firmware or vendor OEM settings.

## Configuration Notes

- Firmware differences and regional firmware variants can affect exact SMS formats and available commands; verify the command syntax on the device manual.
- If the device accepts a domain name for the server, you may use d.plaspy.com instead of the numeric IP 54.85.159.138; both are valid targets for Plaspy.
- Choose UDP or TCP according to the device requirement; Plaspy will automatically detect the protocol once the device connects to the shared port 8888.
- SMS based setup is a common method for the ST-907 but installer tools or vendor configuration software may also be available; use the method appropriate for your installation.
- Resetting the device with RESET is optional and typically only required if you need to clear existing configuration before reinitializing.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-907 to report to Plaspy gives fleets and vehicle operators an established ingestion endpoint and consistent platform behavior. Using the shared Plaspy server and port along with automatic protocol detection simplifies onboarding multiple devices and standardizes how reporting and alarms are collected across your fleet.

To learn more about Plaspy and supported device configuration options visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance please verify details on the official SinoTrack site https://www.sinotrackgps.com/ as setup methods and firmware behavior can change over time.
