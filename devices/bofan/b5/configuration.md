---
slug: /bofan/b5/configuration
id: b5-configuration
sidebar_label: Configuration
title: Bofan - B5 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Bofan B5 GPS tracker for Plaspy with server settings SMS commands and setup guidance
keywords:
  - Bofan B5 configuration
  - Bofan B5 setup
  - Bofan B5 server configuration
  - Bofan B5 SMS commands
  - Bofan B5 Plaspy setup
  - B5 GPS tracker configuration
  - Bofan GPS platform setup
  - Plaspy compatible tracker setup
  - vehicle tracker B5 installation
  - fleet management B5 configuration
---

# Bofan - B5 Configuration

This page covers the public configuration context for using the Bofan B5 GPS vehicle tracker with the Plaspy platform. It focuses on the practical server settings, required preparation steps, and the SMS commands commonly used to point a B5 device at Plaspy so the device can report location and events to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and the vendor tools you use. The B5 supports SMS based configuration and GPRS reporting; this guide shows the public commands and workflow commonly used to integrate the B5 with Plaspy while advising verification against manufacturer documentation.

## Configuration Overview

Preparing a Bofan B5 for Plaspy involves setting the device identifier, configuring the cellular APN, and directing the device to Plaspy's server endpoint so that telemetry arrives in your Plaspy account. Where available, SMS commands are commonly used to apply these settings; alternatively use any official Bofan configuration tool that your vendor supplies.

- Define the device identifier that Plaspy will use for mapping the device to your account, commonly the last 14 digits of the IMEI.
- Configure the mobile operator APN and optional credentials so the B5 can establish GPRS data sessions.
- Point the device to Plaspy's shared server endpoint and port so telemetry is delivered to the platform.
- Set update and heartbeat intervals to match your tracking and data cost requirements.
- Verify the device is online in Plaspy and reporting position and events.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device choice  
- Plaspy automatically detects the tracker protocol when data arrives at the shared port

Note that all devices in Plaspy use the same port so you should configure the B5 to use port 8888 for GPRS reporting to ensure correct delivery.

## Typical Requirements Before Setup

- Vehicle power or charged device battery and a stable installation so the tracker can boot and register on the network.  
- A valid Micro SIM with data enabled and operator APN details ready for configuration.  
- Access to the device IMEI so you can derive the 14 digit identifier used by the B5 for Plaspy mapping.  
- Knowledge of the device password if it is different from the factory default; the provided sample commands assume the default password 000000.  
- Access to SMS sending capability or the official manufacturer configuration tool required to send configuration commands.  
- Confirm that your firmware supports SMS configuration and that your SIM has SMS send permission if you will use SMS commands.

## How This Tracker Connects to Plaspy

The B5 sends location and event data over the cellular network to Plaspy using GPRS. By configuring the B5 to report to the Plaspy server endpoint and port, Plaspy ingests telemetry and makes it visible in dashboards, alerts, and reports.

- Device is configured to report to the shared Plaspy server endpoint and port.  
- Telemetry, alerts and status messages are delivered over GPRS to Plaspy for real time tracking.  
- Plaspy maps the device identifier to your account and displays position, events, and diagnostics.  
- The platform receives periodic updates based on the device update interval you configure.  
- Plaspy automatically detects the tracker protocol when data is received on the shared port so no separate protocol selection is required in the platform.

## Common Configuration Workflow

1. Access the official Bofan configuration method for your unit such as SMS commands or the manufacturer software as provided by your vendor.  
2. Identify the device IMEI and determine the 14 digit identifier to use with Plaspy, commonly the last 14 digits of the IMEI.  
3. Enter the Plaspy server information using either the domain d.plaspy.com or the Plaspy server IP 54.85.159.138 and set port 8888.  
4. Choose UDP or TCP transport on the B5 if the device requires a transport selection during configuration.  
5. Configure the operator APN and optional APN credentials so the device can use GPRS for data.  
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply settings.  
7. Validate that the device reports correctly by checking device status and last position in Plaspy.

## Example Configuration Commands

The Bofan B5 supports SMS configuration. The commands below are public examples extracted from manufacturer guidance. The example setup uses the device password 000000 which is the factory default in this sample. Replace placeholders with the correct values for your device and operator.

- Factory reset command (optional initial setup):
```text
000000DFT
```

- Set the 14 digit identifier used with Plaspy (use the last 14 digits of the IMEI):
```text
000000GID<last14digits_of_IMEI>
```
Replace \<last14digits_of_IMEI> with the device specific 14 digit identifier.

- Set the APN for your mobile operator. If username or password are required include them as shown:
```text
000000APN{{apn}}
```
or with optional username and password:
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Placeholders:
- {{apn}} is the operator APN name.
- {{apnu}} is the APN username if required.
- {{apnp}} is the APN password if required.

- Set the GPRS server to Plaspy using the public server IP and port shown in this guide:
```text
000000SVR54.85.159.138,8888
```
If your device accepts a domain name instead of an IP you may use d.plaspy.com and port 8888 where supported by device firmware.

- Set the update interval to 60 seconds (one minute):
```text
000000GTI60
```

Follow the command sequence in the order appropriate for your provisioning process. Change the device password from the default if you need to secure remote configuration access.

## Configuration Notes

- Firmware and tool differences can change the exact SMS syntax or supported features; always confirm commands against the device firmware release notes.  
- SMS based setup is supported in the public guidance shown here; if you plan large scale deployments consider using the official manufacturer configuration tool or provisioning service.  
- Choose TCP or UDP according to your network and device support; Plaspy accepts either on the shared port and will detect the protocol automatically on receipt.  
- Confirm APN and operator credentials with your mobile operator before setting the APN placeholder values.  
- After changing server settings allow time for the device to establish GPRS and report to Plaspy, then validate connectivity on the Plaspy side.

## Why Use Plaspy with This Configuration

Using the Bofan B5 with Plaspy gives fleets centralized visibility into vehicle location, runtime, and event-driven alerts. Configuring the device to report to Plaspy's shared server endpoint and port enables consistent ingestion of telemetry so you can monitor assets, receive alerts for events such as overspeed or tampering, and use historical reports for maintenance and operations planning.

To learn more about Plaspy and how it integrates with devices like the B5 visit https://www.plaspy.com. For the latest device specific commands, firmware behavior and manufacturer setup methods verify current information on the official Bofan website https://www.bofancloud.com/ as specifications and procedures may change over time.
