---
slug: /concox/jm_ll02/configuration
id: jm_ll02-configuration
sidebar_label: Configuration
title: Concox - JM-LL02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM-LL02 showing Plaspy server settings and SMS commands to connect your tracker to Plaspy
keywords:
  - Concox JM-LL02 configuration
  - Concox JM-LL02 setup
  - JM-LL02 Plaspy configuration
  - Concox GPS tracker setup
  - JM-LL02 server configuration
  - Plaspy tracker configuration
  - vehicle tracking Concox JM-LL02
  - JM-LL02 SMS configuration
  - JM-LL02 APN settings
  - Concox asset tracker setup
---

# Concox - JM-LL02 Configuration

This page covers the public configuration context for using the Concox JM-LL02 tracker with Plaspy. It explains the server settings Plaspy requires, shows practical SMS commands that are commonly used to configure the device for reporting, and describes the general workflow for getting the tracker visible in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The JM-LL02 supports SMS and Bluetooth provisioning and can be configured to report to Plaspy using the public server settings documented below.

## Configuration Overview

The goal of the configuration process is to prepare the JM-LL02 to communicate reliably with Plaspy so location and event telemetry appear in your account. Typical configuration sets the APN, points the device at the Plaspy server, confirms the reporting interval, and enables GPRS or cellular reporting.

- Point the tracker to the Plaspy server endpoint so it can open a data session to the platform.
- Configure the device APN and any required operator credentials so it can attach to the mobile network.
- Set the reporting timer so position updates arrive at the expected frequency in Plaspy.
- Enable GPRS or the device data mode to allow live telemetry transmission.
- Validate settings with a verification command and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged JM-LL02 with an active SIM card provisioned for data on the intended mobile network.
- Access to the device configuration method you prefer, such as SMS commands or Bluetooth provisioning.
- The mobile operator APN and any APN username or password needed for GPRS data.
- A way to send SMS messages to the tracker phone number if using SMS based configuration.
- Basic account access to Plaspy so you can verify the device appears and is reporting after configuration.

## How This Tracker Connects to Plaspy

The JM-LL02 sends location and event telemetry to the Plaspy server endpoint so devices are visible in mapping and alerting workflows. Once pointed at the shared Plaspy endpoint and given a working data connection, the tracker will open a data session and transmit periodic updates and event notifications.

- The device reports to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP address 54.85.159.138.
- All data is sent to port 8888 on the Plaspy server, using either UDP or TCP depending on device transport selection.
- Plaspy automatically detects the correct tracker protocol so the same port is used across supported models.
- Location updates and event alerts are transmitted according to the configured TIMER interval so Plaspy receives regular telemetry.
- Verification commands can be used to confirm GPRS and server settings before validating reporting in Plaspy.

## Common Configuration Workflow

1. Access the official Concox configuration method you will use, for example SMS commands or Bluetooth provisioning from an approved Concox tool.
2. Enter the Plaspy server address by using the domain d.plaspy.com or the IP address 54.85.159.138 as provided by Plaspy.
3. Set the server port to 8888 for the device to use when reporting.
4. Choose the transport protocol if required by the device configuration interface, selecting UDP or TCP on port 8888.
5. Configure the APN and any APN credentials required by your mobile operator so the tracker can establish a GPRS data session.
6. Apply or save the configuration and restart the device if the device workflow or firmware requires a reboot to apply settings.
7. Validate that the tracker reports to Plaspy by checking device visibility in your Plaspy account and, if available, using the device verification commands.

## Example Configuration Commands

The JM-LL02 can be configured using SMS commands. Below are the public SMS commands extracted from the device documentation. Preserve the placeholders when supplying operator credentials.

- Optional initial factory reset (use only when required during troubleshooting or initial setup)
```text
FACTORY#
```

- Set the device time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]#
```
If your operator requires an APN username and password, include the optional fields
```text
APN,[apn],[apnu],[apnp]#
```
Explanation of placeholders:
- [apn] is your mobile operator APN name
- [apnu] is the APN username if required
- [apnp] is the APN password if required

- Set the GPRS server to use the Plaspy domain (UDP or TCP transport selection is managed separately)
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888,0#
```
(The two forms show domain based and IP based server entries. Use the one appropriate for your installation.)

- Set the position update interval to every 60 seconds
```text
TIMER,60#
```
Or an alternate interval syntax
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS and server settings
```text
GPRSSET#
```

## Configuration Notes

- The SMS command flow above is the public method documented for the JM-LL02; Bluetooth provisioning may be available for on-site setup and can be faster for bulk deployments.
- Plaspy uses the same port 8888 for all supported devices and it automatically detects the tracker protocol so you only need to point the device at d.plaspy.com or 54.85.159.138.
- Firmware revisions or vendor tools can change command formats and available options; always check the device firmware notes when a command behaves differently.
- Choose UDP or TCP according to your installer preference and network conditions; both transports are supported on port 8888 for Plaspy.
- If a factory reset command is used, treat it as optional and only perform it when needed for cleanup or troubleshooting.

## Why Use Plaspy with This Configuration

Using the JM-LL02 configured to report to Plaspy gives organizations centralized visibility into location, telemetry, and event alerts from rugged, long-life asset trackers. The combination of long standby battery performance, tamper detection, and straightforward SMS or Bluetooth provisioning makes the JM-LL02 practical for trailers, containers, rental fleets, and other movable assets feeding data into Plaspy dashboards and workflows.

Learn more about Plaspy and how devices integrate on the main website https://www.plaspy.com. For the most current device specific configuration steps, firmware details, and official documentation for the JM-LL02, please verify information with Concox at https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
