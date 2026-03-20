---
slug: /sentar/d39b/configuration
id: d39b-configuration
sidebar_label: Configuration
title: Sentar - D39B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar D39B kids smart watch showing Plaspy server settings, SMS commands, and practical setup steps
keywords:
  - Sentar D39B configuration
  - Sentar D39B setup
  - Sentar D39B Plaspy
  - D39B GPS configuration
  - kids watch tracker setup
  - Sentar tracker configuration
  - Plaspy device setup
  - Plaspy server configuration
  - D39B SMS commands
  - GPS tracker Plaspy setup
---

# Sentar - D39B Configuration

This page covers the public configuration context for using the Sentar D39B kids smart watch with the Plaspy platform. It consolidates the Plaspy server settings you must apply, the typical prerequisites before setup, and practical SMS-based configuration guidance derived from the device's public command set. Use this guide to prepare the D39B to report location and status to Plaspy reliably.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The D39B supports mobile data communication and the example commands below show SMS/GPRS style configuration used by many installers; always confirm final syntax and behavior with Sentar documentation and your device firmware release.

## Configuration Overview

The configuration process prepares the D39B to send telemetry and position updates to Plaspy and to be visible in your Plaspy account. For this device the manufacturer provides SMS commands for basic setup including server destination, APN settings, and reporting interval. The objective is to configure network access, point the device at Plaspy, and verify reporting.

- Configure network APN and data access so the D39B can reach the Plaspy server using mobile data.
- Set the Plaspy GPRS server endpoint and port so the device directs telemetry to the correct server.
- Choose transport (UDP or TCP) if the device requires explicit selection, since Plaspy supports both.
- Apply a regular upload/reporting interval so the device reports position and status at the desired cadence.
- Verify the device with a status query and confirm it appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices use the same port and the platform negotiates protocol details

These values are the public Plaspy endpoint settings to use when configuring the D39B so it can report to Plaspy.

## Typical Requirements Before Setup

- A charged D39B device with an active SIM card that has data enabled for GPRS/4G
- Access to the device SMS command interface or the manufacturer configuration tool that supports the D39B
- The device default password (the example commands use 123456 as the device password)
- Knowledge of the mobile operator APN values for the SIM in the device (APN name, username, password)
- A way to confirm device reporting on the Plaspy server after configuration (Plaspy account access and device list)
- Basic familiarity with SMS command syntax if configuring by SMS

## How This Tracker Connects to Plaspy

The D39B is configured to report position and device telemetry to the shared Plaspy server endpoint and port so Plaspy can normalize and display the tracker data alongside other devices. Typical connection behavior for this watch follows a GPRS/4G data path with periodic uploads to the configured server.

- Device uses mobile data to open a connection to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) on port 8888
- Transport can be UDP or TCP depending on the device setting; Plaspy supports both and auto detects protocol
- The watch sends location, status, and event updates at the configured upload interval
- Plaspy receives and normalizes telemetry so the device becomes visible and manageable within the Plaspy platform
- Verification is completed by issuing a status check command and confirming the device appears in Plaspy

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D39B (SMS command interface or manufacturer tool) as documented by Sentar.
2. Configure the device APN settings so mobile data is available for GPRS/4G communication.
3. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and, if instructed, restart the device to apply network changes.
6. Validate that the D39B reports to Plaspy by using the device status command and confirming the device appears in your Plaspy account.
7. Adjust the upload interval and test additional event reporting such as SOS or other alarms as needed.

## Example Configuration Commands

The D39B public configuration examples use SMS messages to set common options. The sample commands below are presented in the same order provided by the manufacturer documentation. The example device password shown is 123456 and is the default in these examples. Preserve the placeholders [apn], [apnu], and [apnp] when substituting your operator values.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the IMSI or network MCC and MNC values
```text
pw,123456,imsi#
```

- Set the operator APN where xxx is MCC and yy is MNC (replace placeholders with your operator settings)
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: [apn] is the APN name, [apnu] is the APN username, and [apnp] is the APN password. The trailing xxxyy represents MCC and MNC as required by this command syntax.

- Set GPRS server to Plaspy using the server IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: This command is shown as provided by the device documentation. If your firmware expects an alternate separator or parameter order, consult Sentar documentation.

- Set upload interval to 300 seconds
```text
pw123456,upload,300#
```
Note: This command is from the public examples; some firmware variants expect a comma after the password. Verify exact syntax for your device firmware.

- Check current settings (verification)
```text
pw,123456,ts#
```

If any command returns an unexpected response, verify the exact SMS format in Sentar documentation and confirm you are using the correct device password. These commands are the public examples and should be applied carefully.

## Configuration Notes

- SMS-based configuration is shown in the public examples; some installers prefer a manufacturer tool or enterprise provisioning method if available for bulk or remote management.
- Firmware variations and regional device revisions can change required SMS syntax and parameter order; verify the command format against the device firmware version.
- Choose UDP or TCP based on your operational preference; Plaspy supports both transports and will detect the protocol automatically. All devices in Plaspy use port 8888.
- Confirm APN placeholders [apn], [apnu], and [apnp] are replaced with your mobile operator values and test mobile data before pointing the device to Plaspy.
- If a factory reset is used, treat it as optional for initial setup and only perform it when required or when recovering a device to default settings.

## Why Use Plaspy with This Configuration

Using the Sentar D39B with Plaspy provides unified visibility for personal safety devices alongside other telemetry sources. Configuring the D39B to report to Plaspy's shared server endpoint and port ensures location, status, and event data flow into a single platform for monitoring, alerts, and consolidated reporting.

To learn more about Plaspy and how it manages compatible trackers visit https://www.plaspy.com. For the latest device-specific setup details, firmware behavior, and manufacturer instructions verify current documentation on the Sentar website http://www.sentarsmart.com/ as details can change over time.
