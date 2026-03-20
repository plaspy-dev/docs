---
slug: /sentar/d38/configuration
id: d38-configuration
sidebar_label: Configuration
title: Sentar - D38 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar D38 to connect the tracker with Plaspy using shared server settings and SMS commands
keywords:
  - Sentar D38 configuration
  - D38 setup Plaspy
  - Sentar D38 server configuration
  - D38 GPS tracker setup
  - Sentar smartwatch tracking
  - D38 SMS configuration
  - Plaspy device setup
  - GPS tracker Plaspy configuration
  - Sentar D38 APN settings
  - Sentar D38 SMS commands
---

# Sentar - D38 Configuration

This page summarizes the public configuration context for using the Sentar D38 with Plaspy. The D38 is a compact Android based kids GPS smartwatch designed for child safety and caregiver monitoring. It supports GPS, AGPS, LBS and WiFi positioning and uses cellular connectivity with a Nano SIM. Where available the device can be configured to report location and status to Plaspy using the public setup methods described below.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so most trackers only need a single host and port configured. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The D38 can be configured using SMS commands as shown in the public manufacturer commands below; the device default SMS password is 123456 and the examples that follow reflect publicly available commands.

## Configuration Overview

This configuration prepares a D38 device to send location, status, and event data into the Plaspy platform so the device becomes visible and manageable in the Plaspy interface. The process focuses on three practical goals: setting network and APN details, pointing the device at the Plaspy server endpoint, and validating that the device is reporting correctly.

- Configure the device APN and network parameters so it has GPRS/packet connectivity.
- Point the tracker to the Plaspy server endpoint and port so data is routed to Plaspy.
- Choose transport type (UDP or TCP) if the device requires it, using Plaspy supported options.
- Set an appropriate upload interval so Plaspy receives updates at the desired frequency.
- Verify device settings and confirm that the D38 appears in Plaspy after reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts many common tracker protocols

Note: Plaspy uses the same port for all supported devices and will detect the protocol automatically when the device connects.

## Typical Requirements Before Setup

- A charged D38 device with a working Nano SIM card and active data service
- Access to the device SMS configuration method or the official Sentar configuration tool
- Knowledge of the carrier APN, username, and password for the SIM (placeholders [apn], [apnu], [apnp] are used below)
- The device default SMS password 123456 or the device password if it has been changed
- A means to receive verification replies from the device (device SMS responses or monitoring Plaspy for the first reports)

## How This Tracker Connects to Plaspy

The D38 sends GNSS fixes and complementary positioning data to the Plaspy endpoint so the platform can display live location, history, and events. When configured to the Plaspy host and port, the tracker reports its telemetry over cellular data using the selected transport.

- The device is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Position updates, SOS events, and device status are sent to Plaspy for mapping and alerts.
- Plaspy detects the protocol automatically so the same port accepts compatible tracker traffic.
- Choosing UDP or TCP on the device determines the transport used to deliver data to the Plaspy server.
- Once the device reports, Plaspy provides visibility for location history and operational monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the Sentar SMS command interface or vendor configuration tool.
2. Ensure the D38 has a working Nano SIM and confirm the carrier APN details.
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device settings.
4. Set the port to 8888 (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the device or workflow requires it.
7. Validate that the device reports to Plaspy by checking for the first location update and verifying telemetry in the Plaspy platform.

If you are using SMS based setup, follow the manufacturer SMS sequence shown below in Example Configuration Commands as the practical method for many D38 devices.

## Example Configuration Commands

The D38 model configuration supports SMS based commands. The following public SMS commands are provided in the manufacturer documentation. Send each command as an individual SMS from an authorized phone number. The sample setup uses the default device password 123456. The factory reset command is optional and only for initial setup or troubleshooting.

- Factory reset (optional initial setup)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC or IMSI information
```text
pw,123456,imsi#
```

- Set the operator APN where [apn] [apnu] and [apnp] are the APN, username and password and xxxyy represents concatenated MCC MNC
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: replace [apn], [apnu], [apnp] with your carrier APN, username, and password. Replace xxxyy with the carrier MCC and MNC digits.

- Set GPRS server to Plaspy using the public server IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: This exact command string is provided from the public configuration content. Some firmware variants may require a slightly different command format such as including a comma between password and the ip keyword. If this command does not apply, consult Sentar documentation or the device reply for the correct format.

- Set upload interval to 300 seconds
```text
pw123456,upload,300#
```
Note: This command appears in the published configuration list. Some devices require a comma after pw and the password as in other commands; follow the response format shown by your device.

- Check settings and status
```text
pw,123456,ts#
```

Use the check settings command to confirm that APN, server, and interval changes were accepted.

## Configuration Notes

- SMS based configuration is present in the public commands above; some installers prefer a vendor tool or web configuration interface if available for bulk provisioning.
- The D38 default SMS password in public documentation is 123456; change this password after setup for security.
- Plaspy supports both UDP and TCP on port 8888 and automatically detects the tracker protocol when data arrives.
- Firmware and command syntax can vary by production batch or regional firmware; confirm exact SMS command formats if a device reply indicates an error.
- If a server IP based command does not behave as expected, try using the domain d.plaspy.com where supported by the device command set or consult Sentar for the correct syntax.

## Why Use Plaspy with This Configuration

Configuring the Sentar D38 to report to Plaspy centralizes location, SOS events, and device status into a single platform for monitoring and response. For caregivers and organizations focused on child safety, the combination of multi mode positioning on the D38 and Plaspy visibility provides a practical way to track devices in real time and review history when needed.

To learn more about Plaspy and how it supports devices like the Sentar D38 visit https://www.plaspy.com. For the latest device specific commands, firmware details, and manufacturer instructions please verify current information at the Sentar website http://www.sentarsmart.com/ since device behavior and configuration methods can change over time.
