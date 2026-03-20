---
slug: /sentar/d36/configuration
id: d36-configuration
sidebar_label: Configuration
title: Sentar - D36 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar D36 showing Plaspy server settings and SMS commands to connect the tracker
keywords:
  - Sentar D36 configuration
  - Sentar D36 setup
  - Sentar D36 Plaspy
  - D36 GPS tracker configuration
  - kids smartwatch GPS setup
  - Plaspy tracker configuration
  - tracker SMS setup
  - D36 APN configuration
  - GPRS server setup
  - D36 tracking software setup
---

# Sentar - D36 Configuration

This page describes the public configuration context for using the Sentar D36 tracker with Plaspy. It consolidates the known server settings, a recommended workflow, and the SMS-based configuration commands published for the D36 so you can prepare the device to report to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; this guide focuses on the publicly available configuration commands and the Plaspy server values required to connect the D36 to the Plaspy service.

## Configuration Overview

The goal of the configuration process is to prepare the D36 to communicate reliably with Plaspy and to confirm that location and status updates reach the shared Plaspy server endpoint. The D36 documentation includes SMS command examples for common setup tasks such as resetting the device, configuring time zone, setting APN, and pointing the tracker at the Plaspy GPRS server.

- Configure APN and mobile operator details so the D36 can use cellular data to reach Plaspy.
- Set the device GPRS server to the Plaspy endpoint so the tracker uploads location and telemetry to Plaspy.
- Verify device time zone and upload interval so location updates align with platform expectations.
- Validate connectivity and settings using the provided check command before placing the device in regular use.
- Keep default password and command formatting in mind when sending SMS commands; manufacturer content lists 123456 as the sample default password.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged D36 device with an active Nano SIM card capable of cellular data and SMS.
- APN, APN username, and APN password information provided by the mobile operator.
- Ability to send SMS messages to the device for SMS-based configuration as shown in the manufacturer commands.
- Access to the official Sentar configuration notes or vendor tools for the specific firmware revision if available.
- A way to monitor the device after configuration so you can confirm it reports to the Plaspy server.
- Optional: physical access to the device for restart or power cycle if required by the firmware.

## How This Tracker Connects to Plaspy

When configured correctly, the D36 sends location and device data over cellular GPRS to the shared Plaspy server endpoint and port. Plaspy receives those incoming connections, automatically detects the tracker protocol, and ingests the device's location and status updates for live tracking and history.

- The device is configured to use the Plaspy GPRS server address or domain.
- The D36 uploads location and telemetry data to port 8888 on the Plaspy endpoint.
- Transport can be either UDP or TCP depending on device settings; choose the transport the device firmware supports.
- Plaspy automatically detects the protocol used by the tracker and processes incoming data.
- After successful configuration, the device becomes visible and reportable within Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D36 (SMS commands, vendor tool, or firmware-specific utility) as provided with the device or by the vendor.
2. Confirm mobile operator APN details and the device password (manufacturer sample uses 123456).
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server in the device configuration.
4. Set port 8888 in the device server configuration.
5. If the device requires transport selection, choose UDP or TCP according to the firmware capabilities.
6. Apply or save the configuration and restart the device if the firmware requires a power cycle to apply settings.
7. Validate that the D36 reports to Plaspy by checking device visibility in the platform and using the device check command from manufacturer content.

## Example Configuration Commands

The following SMS commands are taken from the device configuration content provided for the D36. The sample device password used in these commands is 123456 as shown in the manufacturer examples. Send these commands as SMS messages to the device in the order indicated when performing initial setup. The factory reset command is optional and should be used only when an initial factory reset is required.

1. Factory reset (optional initial setup)
```
pw,123456,factory#
```

2. Set the time zone to UTC+0
```
pw,123456,lz,0,0#
```

3. Check IMSI to verify MCC and MNC
```
pw,123456,imsi#
```

4. Set the operator APN
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
- Explanation: [apn] is the operator APN, [apnu] is the APN username (if required), and [apnp] is the APN password (if required). The placeholder xxxyy represents the concatenated MCC and MNC codes for the operator.

5. Set GPRS server to the Plaspy server (as provided in manufacturer content)
```
pw,123456.ip,54.85.159.138,8888#
```
- Explanation: This command points the device to Plaspy using the public Plaspy server IP 54.85.159.138 and port 8888. The manufacturer content shows this syntax; if your firmware variant documents a slightly different delimiter or format, consult the official Sentar instructions.

6. Set upload interval to 300 seconds
```
pw123456,upload,300#
```
- Explanation: The sample command sets the position upload interval to 300 seconds. Note the manufacturer content shows this exact string; if your device expects a comma after the password, confirm the correct syntax in the device documentation.

Verification command to check current settings
```
pw,123456,ts#
```
- Explanation: Use this command to request current tracker settings and confirm APN, server, and upload interval values.

## Configuration Notes

- Manufacturer firmware versions and regional builds may use slightly different SMS command syntaxes; always confirm exact command formatting with Sentar documentation for your device version.
- SMS configuration is explicitly shown in the manufacturer content and is a common setup method for the D36; ensure SMS delivery and operator permissions before relying on SMS setup.
- Choose UDP or TCP according to what the device firmware supports; Plaspy accepts both on port 8888 and will auto-detect the protocol sent by the device.
- Keep APN credentials and MCC/MNC values handy when composing the APN command; incorrect APN entries will prevent GPRS connections.
- The default sample password in the provided commands is 123456; if your device has a different factory password or one set by an installer, use that password instead.

## Why Use Plaspy with This Configuration

Using the Sentar D36 with Plaspy provides continuous location and status visibility suited for child safety and caregiver monitoring. Configuring the D36 to send data to the Plaspy server endpoint ensures location updates, status reports, and alerts are available in one platform that automatically handles protocol detection and consistent port configuration.

Learn more about Plaspy and its device support at https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest device-specific configuration and command syntax on the Sentar website http://www.sentarsmart.com/ before deployment.
