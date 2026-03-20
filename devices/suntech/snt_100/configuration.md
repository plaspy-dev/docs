---
slug: /suntech/snt_100/configuration
id: snt_100-configuration
sidebar_label: Configuration
title: Suntech - SNT 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Suntech SNT 100 GPS tracker for use with Plaspy server settings and SMS setup
keywords:
  - Suntech SNT 100 configuration
  - Suntech SNT100 setup
  - Suntech GPS tracker configuration
  - SNT 100 Plaspy setup
  - SNT100 server configuration
  - Plaspy GPS tracker integration
  - vehicle tracking setup Suntech
  - Suntech SNT 100 APN settings
  - GPS tracker SMS configuration
  - fleet tracking platform Plaspy
---

# Suntech - SNT 100 Configuration

This page documents the public configuration context for using the Suntech SNT 100 data terminal with Plaspy. It summarizes the practical, publicly available steps and SMS commands used to point the device at Plaspy servers and validate connectivity so the tracker can be visible inside the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The SNT 100 is commonly configured via SMS commands or vendor tools to set APN, server address, port, and reporting intervals; the examples on this page reflect those public commands and the Plaspy server settings required for integration.

## Configuration Overview

The goal of the configuration process is to prepare the SNT 100 so it can reliably send location and status data to Plaspy and be monitored from the Plaspy platform. Configuration typically involves setting the device identity, the mobile data parameters, the server endpoint, and the reporting behavior.

- Configure the device APN and GPRS server settings so the unit can reach the network and Plaspy.
- Point the tracker to the Plaspy server endpoint and port so telemetry is delivered to the platform.
- Set the reporting interval and any preset behavior needed for your monitoring use case.
- Validate connectivity and confirm the device appears in Plaspy after configuration.
- Use SMS commands or the manufacturer tool as required by the specific firmware and installation.

## Plaspy Server Settings

When configuring the SNT 100 for Plaspy, use the following public server settings exactly as shown:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP (device may be set to either UDP or TCP)
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol in Plaspy

All devices in Plaspy use the same port, so port 8888 is the standard port to configure on the tracker.

## Typical Requirements Before Setup

- A working SIM card with mobile data and SMS capability installed in the SNT 100, and the carrier APN details available.
- The device IMEI number accessible; you will need it to compute the device ID used in SMS commands.
- An SMS capable phone or management tool able to send configuration SMS commands to the tracker.
- Access to the Suntech configuration manual or vendor tool for the SNT 100 to confirm command format for your firmware.
- Power applied to the tracker and a stable installation location for initial configuration and testing.

## How This Tracker Connects to Plaspy

The SNT 100 is configured to report location and device data to the shared Plaspy server endpoint and port. Once the device has a working mobile data link and the correct server settings, Plaspy receives telemetry and makes the device visible inside the platform for monitoring and alerts.

- The tracker sends periodic position reports to the Plaspy server address d.plaspy.com or 54.85.159.138 on port 8888.
- The device may use UDP or TCP transport depending on the device configuration; Plaspy will accept either and will automatically detect the protocol.
- Status updates, heartbeats, and event messages are forwarded to the Plaspy platform for operational monitoring.
- After successful configuration and network connectivity, the tracker should appear and be identifiable in Plaspy using the device ID derived from the IMEI.
- Two-way messaging and command acknowledgements (where supported by the device and firmware) will be routed through the same Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software for the SNT 100, or prepare to use SMS-based configuration if the installer workflow requires it.
2. Determine the device ID from the IMEI (see Example Configuration Commands below) and collect the carrier APN, APN username, and APN password if required.
3. Enter the Plaspy server address d.plaspy.com or the server IP 54.85.159.138 in the device configuration interface.
4. Set the server port to 8888 and choose UDP or TCP on the device if a transport selection is required.
5. Apply or save the configuration and restart the device if the firmware requires a reboot for settings to take effect.
6. Validate that the device reports to Plaspy by checking for messages and device presence in the platform.
7. Adjust reporting intervals and behavior as needed using the device update interval commands and reconfirm visibility in Plaspy.

## Example Configuration Commands

The Suntech SNT 100 can be configured by sending SMS commands to the device. The public example commands below reflect the manufacturer format. The device ID used in these commands is the last six digits of the IMEI excluding the final check digit. Example: if the IMEI is 123456789012345 the device ID would be 901234 (characters 9 through 14 of the IMEI example shown in manufacturer notes).

- Compute device ID
  - Device ID = the six digits just before the final IMEI digit
  - Example: IMEI 123456789012345 -> device ID 901234

1) Set the operator APN and GPRS server
- Template command (send by SMS, replace \<device_id> and APN placeholders):
```
SA200NTW;<device_id>;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
Notes:
- [apn] is the carrier APN string
- [apnu] is the APN username if required by the carrier; leave empty if not used
- [apnp] is the APN password if required; leave empty if not used
- The transport and mode flags in the original manufacturer format may vary by firmware; the important public values are the Plaspy server address 54.85.159.138 and port 8888

2) Set the update/reporting interval to 60 seconds
- Template command:
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
This sets the periodic reporting behavior to the public example value of 60 seconds for active reporting.

3) Verify or request preset settings from the device
- Verification command:
```
SA200CMD;<device_id>;02;PresetA
```
This command requests the device to return its current PresetA values so you can confirm the active configuration.

Keep the command order when performing an initial setup: set APN and server first, then reporting interval, then verify settings. Use the device IMEI to compute \<device_id> before sending the SMS commands.

## Configuration Notes

- The SNT 100 configuration format and parameter positions can vary by firmware version and vendor tool; always confirm the syntax against the device manual for your specific firmware.
- These examples use SMS-based configuration because they are part of the public manufacturer instructions. Some installations use a vendor configuration tool instead; follow the official method available to you.
- Choose UDP or TCP on the device according to installer preference; Plaspy supports both and will automatically detect the protocol on inbound connections to port 8888.
- Ensure the APN and mobile data are functional before attempting to register with the Plaspy server d.plaspy.com or 54.85.159.138 so the device can reach port 8888.
- If you must reboot the tracker to apply settings, do so after saving changes and then verify reports are received by Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech SNT 100 provides a straightforward path to bring device telemetry into a single monitoring platform. With a consistent server endpoint and automatic protocol detection, Plaspy simplifies integration across supported devices and lets fleet managers focus on operational monitoring, geofence alerts, and driver behavior insights rather than server routing.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please verify the latest device-specific configuration methods, firmware behavior, and manufacturer details on the official Suntech website http://www.suntechint.com/ as manufacturer instructions and firmware can change over time.
