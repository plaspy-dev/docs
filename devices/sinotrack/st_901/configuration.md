---
slug: /sinotrack/st_901/configuration
id: st_901-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901 Configuration
sidebar_class_name: menu_item_tracker
description: Configure SinoTrack ST-901 to report to Plaspy with SMS commands and shared Plaspy server settings
keywords:
  - SinoTrack ST-901 configuration
  - ST-901 setup Plaspy
  - SinoTrack ST 901 server configuration
  - ST 901 GPS tracker setup
  - Plaspy tracker configuration
  - ST-901 SMS commands
  - GPRS APN configuration
  - vehicle tracker setup guide
  - fleet tracking ST-901
  - immobilizer ST-901
---

# SinoTrack - ST-901 Configuration

This page documents the public configuration context for using the SinoTrack ST-901 with Plaspy. It focuses on the practical steps and public SMS commands that point the tracker to Plaspy so the device can report location and alarm events to the platform. Use this guidance together with the device documentation and installer best practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS-based commands below are the publicly documented method for the ST-901 and show how to set APN, server, reporting intervals, and verify settings.

## Configuration Overview

This configuration process prepares the ST-901 to communicate with Plaspy's ingestion endpoint so position, alarm, and status messages arrive in your Plaspy account. The focus is on setting the APN for GPRS, configuring the server endpoint and port, enabling GPRS mode, and verifying the device reports correctly.

- Point the tracker to Plaspy using the public server endpoint and port so GPRS packets are sent to Plaspy.
- Configure the mobile operator APN so the tracker can establish a GPRS session for data reporting.
- Enable reporting intervals and GPRS mode so the ST-901 transmits periodic location updates and alarms.
- Verify the device configuration with the RCONF command to confirm the device ID and server settings.
- Validate the device is visible in Plaspy after configuration and that alerts and status messages are received.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration or hostname entry where supported
- Server IP 54.85.159.138 as the public ingestion address for direct IP configuration
- Port 8888 used for device connections into Plaspy
- Transport support for UDP or TCP depending on device capabilities and local requirements
- Plaspy automatically detects the tracker protocol on incoming connections and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered ST-901 installed or temporarily powered for configuration and testing
- An active SIM card with a data plan and the operator APN details available
- Ability to send and receive SMS commands from the install phone number for SMS-based configuration
- Access to the device IMEI and any required activation or registration details the installer must record
- Manufacturer instructions or the official SinoTrack configuration method for reference during setup
- A test workflow to validate device reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

The ST-901 is configured to forward GPRS packets to Plaspy’s shared ingestion endpoint and port so Plaspy receives location, alarm, and status messages for processing and display. Once correctly configured, Plaspy can present real-time tracking, alerts, and telemetry from the device.

- The tracker sends periodic location updates over GPRS to the configured Plaspy endpoint and port.
- Alarm and status events such as ACC ignition, main power loss, geo-fence breaches, and over-speed are forwarded to Plaspy for event handling.
- SMS remains available for direct alerts or as a fallback notification channel if data connectivity is unavailable.
- The device is pointed at the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888 so packets enter the Plaspy processing pipeline.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol to interpret incoming messages.

## Common Configuration Workflow

1. Access the official SinoTrack SMS configuration method as documented by the manufacturer or vendor.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP for transport if the ST-901 requires an explicit transport selection; pick the transport supported by your network and monitoring plan.
5. Send SMS commands to set the APN, server IP or domain, and reporting intervals as required by the device.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply settings.
7. Validate that the ST-901 reports to Plaspy by checking device visibility and events in your Plaspy account and using the device verification command.

## Example Configuration Commands

The ST-901 supports SMS command configuration. The following public commands are presented in the order recommended by SinoTrack for initial setup. Send each command as an SMS to the device phone number from an authorized mobile number.

- Restore factory settings (optional initial step)
```text
RESET
```
- Set the time zone to UTC+0
```text
8960000E00
```
- Set the APN for the mobile operator
```text
8030000 [apn] [apnu] [apnp]
```
  - [apn] is the operator APN name
  - [apnu] is the APN username if required (leave blank or use placeholder if not required)
  - [apnp] is the APN password if required

- Set up the GPRS reporting server to Plaspy using the Plaspy server IP and port
```text
8040000 54.85.159.138 8888
```
  - You may alternatively configure the server with d.plaspy.com where DNS is supported by the device

- Set update interval while engine is on
```text
8050000 60
```
  - Example uses 60 seconds as the reporting interval

- Set update interval while engine is off
```text
8090000 60
```
  - Example uses 60 seconds as the standby reporting interval

- Switch device to GPRS mode to start data reporting
```text
7100000
```

- Verify current configuration and read device ID
```text
RCONF
```
  - The RCONF command returns the device configuration including the ID used by Plaspy

## Configuration Notes

- These SMS commands are the publicly documented method for ST-901 configuration; vendor tools or PC software may also exist and follow a similar flow.
- Placeholders such as [apn] [apnu] and [apnp] must be replaced with your operator APN details. Username and password are not always required.
- Firmware versions and regional variants can change command syntax or available options; confirm commands with the current SinoTrack documentation.
- Choose UDP or TCP as the transport only if the device exposes that option; Plaspy accepts connections over either transport on the shared port.
- Use the RCONF command to confirm the device ID and server settings after configuration and before validating in Plaspy.

## Why Use Plaspy with This Configuration

Using the SinoTrack ST-901 configured to report to Plaspy gives organizations consolidated visibility into vehicle position, ignition state, power events, and alarm conditions across fleets. The ST-901’s SMS-based configuration and standard GPRS reporting make it straightforward to integrate into Plaspy for real-time tracking, alerts, and operational oversight.

To learn more about Plaspy and how to manage devices and fleets with our platform visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and manufacturer details verify information on the official SinoTrack website https://www.sinotrackgps.com/ as configuration methods and firmware behavior can change over time.
