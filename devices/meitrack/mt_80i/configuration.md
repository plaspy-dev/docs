---
slug: /meitrack/mt_80i/configuration
id: mt_80i-configuration
sidebar_label: Configuration
title: Meitrack - MT-80i Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack MT 80i showing Plaspy server settings SMS commands and setup steps for platform connectivity
keywords:
  - Meitrack MT 80i configuration
  - Meitrack MT 80i setup
  - MT 80i Plaspy
  - Plaspy server configuration
  - GPS tracker setup guide
  - Meitrack SMS commands
  - vehicle tracking configuration
  - tracker GPRS setup
  - tracking platform integration
  - MT 80i APN configuration
---

# Meitrack - MT-80i Configuration

This page covers the public configuration context for using the Meitrack MT-80i GPS tracker with Plaspy. It explains the shared server settings Plaspy requires, the practical SMS commands commonly used to point an MT-80i to a tracking server, and the typical steps to validate that the device reports correctly into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you usually only need to enter the same endpoint and port for devices. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the examples here as practical public guidance and verify device-specific behavior with manufacturer documentation.

## Configuration Overview

The goal of configuration is to prepare the MT-80i so it can reliably send location and event data to the Plaspy platform. For the MT-80i this commonly involves setting the GPRS server address and port, confirming APN and credentials if needed, and enabling the desired reporting interval and event reporting mode.

- Point the device to the Plaspy server endpoint so data is routed to your account.
- Configure APN and any operator credentials so the device can establish GPRS connectivity.
- Set the reporting interval and event options so the device provides the visibility you need.
- Use the manufacturer configuration method such as SMS commands or official tools to apply settings.
- Validate device connectivity and reporting in Plaspy after saving settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP can be used on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol when data arrives  
- All devices in Plaspy use the same port so the MT-80i should use port 8888 to connect

## Typical Requirements Before Setup

- A charged and accessible MT-80i configured for SMS or GPRS commands as provided by the manufacturer.  
- A valid SIM card with data enabled and the operator APN information available.  
- Access to send SMS commands to the device or to use Meitrack configuration tools if preferred.  
- Knowledge of the device password (the default shown in examples below is 0000).  
- A Plaspy account or access to the Plaspy platform to validate incoming reports.  

## How This Tracker Connects to Plaspy

The MT-80i is configured to report to the shared Plaspy server endpoint and port so location and event data become visible in the platform. Once the device has a working GPRS connection and the correct server settings, Plaspy will receive and interpret messages using automatic protocol detection.

- The device sends position and event messages to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be configured as UDP or TCP depending on installer preference.  
- Plaspy inspects incoming messages and identifies the Meitrack protocol automatically.  
- Events and periodic position reports become available in Plaspy after successful delivery.  
- Validation is performed by confirming that the device appears and reports on the Plaspy platform.

## Common Configuration Workflow

1. Access the official Meitrack configuration method such as SMS commands or the manufacturer tool.  
2. Enter the Plaspy server host either d.plaspy.com or the server IP 54.85.159.138 in the device settings.  
3. Set the server port to 8888 which is the common port used by all devices on Plaspy.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Provide APN and any APN credentials if required by your SIM operator.  
6. Apply or save the configuration on the device and restart the device if required.  
7. Validate in Plaspy that the MT-80i reports positions and events to your account.

## Example Configuration Commands

The MT-80i commonly accepts SMS configuration commands. The manufacturer sample commands below are provided in the public Meitrack format. The sample commands use the default device password 0000. Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with your operator APN and credentials as required.

- Optional initial factory reset or factory settings (use only when needed):
```text
0000,F11
```

- Set the GPRS server to use Plaspy by IP and port with APN placeholder:
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Note: the A21 command above specifies GPRS server parameters. Replace [apn], [apnu], and [apnp] with your mobile operator APN, APN user, and APN password as required. If no APN user or password is needed, leave the placeholders empty or omit according to device SMS syntax.

- Set the time zone to UTC 0:
```text
0000,B36,0
```

- Set the update interval to every 1 minute:
```text
0000,A12,6,0
```
Explanation: this command sets the periodic upload interval. Adjust the numeric values if you require a different interval (refer to Meitrack documentation for alternatives).

- Set event reporting options:
```text
0000,C03,0
```
Explanation: this command configures which events the tracker sends. Use the official Meitrack reference to select other event codes.

Follow the command order when recommended by the manufacturer: factory defaults (if used), server and APN setup, timezone and reporting intervals, then event configuration. After sending SMS commands, allow a short period for the device to establish GPRS and begin reporting to Plaspy.

## Configuration Notes

- SMS based configuration is a common and broadly supported method for Meitrack devices; ensure SMS delivery is possible before relying on it.  
- Firmware versions or hardware revisions may change supported command syntax; always check the device manual for the correct command format.  
- Choose UDP or TCP based on your deployment needs; TCP provides connection confirmation while UDP is lighter weight. Plaspy accepts both on port 8888.  
- Keep the device password updated from the default 0000 to a secure value after initial setup if required.  
- Verify APN and operator credentials with your SIM provider if the device cannot establish GPRS.

## Why Use Plaspy with This Configuration

Using Plaspy with the Meitrack MT-80i provides a straightforward way to centralize location, event, and alert data from compact battery powered trackers. By pointing the MT-80i to Plaspy's shared server endpoint and port, organizations gain a consistent collection point for device telemetry and can leverage Plaspy's automatic protocol detection to simplify onboarding multiple devices.

To learn more about Plaspy visit https://www.plaspy.com and review the manufacturer documentation for the latest device specifics at https://www.meitrack.com/. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify current information on the official Meitrack website.
