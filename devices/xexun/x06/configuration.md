---
slug: /xexun/x06/configuration
id: x06-configuration
sidebar_label: Configuration
title: Xexun - X06 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Xexun X06 setup with Plaspy including server settings and SMS commands for integration
keywords:
  - Xexun X06 configuration
  - X06 setup Plaspy
  - Xexun wearable tracker setup
  - X06 server configuration
  - X06 GPS tracker setup
  - Plaspy device configuration
  - Xexun X06 APN settings
  - X06 SMS configuration
  - personnel tracking X06
  - X06 geofence setup
---

# Xexun - X06 Configuration

This page documents the public configuration context for using the Xexun X06 with Plaspy. It focuses on the practical steps and shared server settings required to point an X06 device at Plaspy so that position updates, alarms, and status messages arrive in the platform. Use this guidance together with the device manual and vendor tools to complete provisioning.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The X06 can be configured using SMS commands as shown in the example commands below, or by the manufacturer software when available.

## Configuration Overview

Preparing the X06 for Plaspy means configuring the device to use the platform's shared server endpoint and confirming reliable cellular connectivity. The goal is to ensure the wearable badge reports position, alarms, and status to Plaspy at the desired interval and that the device can buffer and retransmit records if coverage is interrupted.

- Set the device APN and credentials so the tracker can establish GPRS data connectivity.
- Configure the device to send GPRS reports to Plaspy using the shared server endpoint and port.
- Choose UDP or TCP transport on the device if required and save the selection.
- Validate device reporting by checking that the tracker appears in Plaspy and sends updates at the configured interval.
- Preserve device default password information and use manufacturer procedures to change it if desired.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These settings are the public Plaspy values to use when configuring the X06 so the device forwards position and alarm messages to the platform.

## Typical Requirements Before Setup

- A charged X06 device with access to its SMS interface or the manufacturer configuration tool.
- An active SIM card provisioned for domestic cellular data and able to accept SMS commands if using SMS setup.
- APN, APN username, and APN password information for the mobile operator you will use.
- Knowledge of the device password; the sample commands below use the factory default password 123456.
- Access to the vendor user manual or configuration software to confirm firmware-specific command syntax.

## How This Tracker Connects to Plaspy

The X06 transmits position and status over cellular networks to the configured server endpoint and port so Plaspy can ingest and display telemetry, alerts, and historical tracks. Plaspy’s server and platform then provide live monitoring, geofence alerts, and historical playback for administrators.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Transport can be set to UDP or TCP depending on device firmware and installer preference.
- Plaspy automatically detects the tracker protocol once the device sends data to the server.
- Position updates, SOS alarms, and status messages are forwarded to Plaspy for display and rule processing.
- If connectivity is temporarily lost, local buffering on the device enables retransmission when service returns.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS setup commands per the vendor instructions.
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or as server IP 54.85.159.138 in the device settings.
3. Set the port to 8888 in the device network or server configuration.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Set APN and optional APN username and password so the device can open a data connection.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by observing incoming updates or checking the device presence in the Plaspy platform.

If using SMS commands for initial provisioning, follow the ordered command sequence the manufacturer provides and confirm each step before proceeding.

## Example Configuration Commands

The manufacturer provides SMS-based configuration commands for the X06. The sample sequence below uses the factory default device password 123456. Keep the order when performing initial provisioning where indicated. Placeholders such as [apn], [apnu], and [apnp] are shown where operator-specific values are required.

- Restore factory settings (optional initial reset)
```text
begin123456
```
- Set the operator APN
```text
apn123456 [apn]
```
- Set the APN username (if required)
```text
apnuser123456 [apnu]
```
- Set the APN password (if required)
```text
apnpasswd123456 [apnp]
```
- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the GPRS mode (use device default or as required by firmware)
```text
gprsmode123456
```
- Set the update interval to 60 seconds
```text
t060s***n123456
```

Notes on the commands above:
- The command begin123456 is typically used to restore factory settings and is optional or used only when starting from a factory state.
- Replace [apn] with your mobile operator APN value. Replace [apnu] and [apnp] with the APN username and password if your operator requires them.
- The adminip command points the device to Plaspy by using the public Plaspy server IP 54.85.159.138 and port 8888. You may alternatively enter the server domain d.plaspy.com if the device accepts a domain name entry.
- Keep the command order when performing initial provisioning to ensure connectivity is established before setting reporting parameters.

## Configuration Notes

- Firmware versions and vendor tools may change command syntax or available options; always verify the exact commands for your device firmware level.
- The X06 supports SMS-based setup as shown in the example commands but may also be configurable via vendor PC software or an app depending on the package and firmware.
- Choose UDP or TCP based on installation needs and confirm with Plaspy support or test that updates arrive as expected. Plaspy will automatically detect the tracker protocol once data reaches the server.
- Confirm APN credentials with the mobile operator before provisioning; incorrect APN settings are a common cause of connection failures.
- Keep track of device passwords and change factory defaults if required by your security policy.

## Why Use Plaspy with This Configuration

Configuring the Xexun X06 to report to Plaspy delivers centralized visibility for people-location use cases such as student safety, eldercare monitoring, and workforce attendance. By pointing the device to Plaspy’s shared server endpoint and using the same port that Plaspy requires, organizations gain access to live location, historical playback, geofence alerts, and SOS event handling within a single platform.

To learn more about Plaspy and how it integrates with compatible trackers like the X06, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer documentation, verify details with Xexun at https://www.xexun.com/ as vendor procedures and firmware can change over time.
