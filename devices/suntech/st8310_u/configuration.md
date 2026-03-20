---
slug: /suntech/st8310_u/configuration
id: st8310_u-configuration
sidebar_label: Configuration
title: Suntech - ST8310/U Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST8310 U showing Plaspy server settings and example SMS commands for integration
keywords:
  - Suntech ST8310 U configuration
  - Suntech ST8310 setup for Plaspy
  - Suntech GPS tracker configuration
  - ST8310 U server configuration
  - Plaspy device configuration
  - vehicle tracking ST8310
  - ST8310 SMS commands
  - Suntech APN settings
  - fleet tracking Suntech Plaspy
  - ST8310 U reporting setup
---

# Suntech - ST8310/U Configuration

This page describes the public configuration context for using the Suntech ST8310/U tracker with Plaspy. It collects the shared Plaspy server settings you must point the device to, explains how device identification is derived from IMEI for SMS based configuration, and shows the example SMS commands published for this model so you can prepare the tracker for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide as a practical implementation reference and verify any device specific differences with the manufacturer documentation.

## Configuration Overview

The configuration process prepares the ST8310/U to send telemetry and events to Plaspy so the device becomes visible in your fleet dashboard and can receive remote commands. For this model the manufacturer provides SMS command templates for setting APN and the GPRS server, and for setting reporting intervals.

- Configure the device network parameters and GPRS server to point to Plaspy
- Set reporting intervals so position updates appear at the expected rate in Plaspy
- Validate connectivity and device identification so Plaspy recognizes the device
- Use the provided SMS commands or the official Suntech tool to apply settings
- Confirm that Plaspy receives device messages and that protocol detection is successful

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as an alternate direct endpoint
- Port 8888 which Plaspy uses uniformly for all supported devices
- Transport may be configured as UDP or TCP depending on device support
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A powered and accessible ST8310 or ST8310U device with a readable IMEI
- A working SIM installed and active data service for GPRS or LTE connectivity and SMS capability if using SMS configuration
- APN credentials for the mobile operator to enable GPRS data
- Access to the device configuration method supported by this unit such as SMS or the Suntech configuration tool
- A Plaspy account or access to the Plaspy platform so you can confirm the device reports successfully
- Basic knowledge of the device IMEI and how to derive the device ID from it for SMS templates

## How This Tracker Connects to Plaspy

When configured, the ST8310/U sends GNSS positions and device events to the shared Plaspy server endpoint and port described above. Plaspy receives those messages, automatically determines the correct protocol handler, and makes the device visible in the platform for real time tracking and event monitoring.

- The tracker is pointed to d.plaspy.com or 54.85.159.138 on port 8888
- Transport selection can be UDP or TCP if the device requires explicit choice
- Plaspy automatically detects the tracker protocol and starts processing incoming data
- Device reports enable location visibility, event logging, and telematics workflows in Plaspy
- Use the reporting interval commands to control how often updates are sent to Plaspy

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST8310/U such as SMS commands or the manufacturer tool.
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138 in the server or GPRS server field.
3. Set port 8888 which is the shared port used by Plaspy for all devices.
4. If the device requires transport selection, choose UDP or TCP as supported and required by your installation.
5. Apply or save the configuration and, where required, restart the device to apply network parameters.
6. Validate that the device reports to Plaspy by watching incoming messages in the platform and confirming the device appears online.
7. Adjust reporting intervals, APN or other operator parameters as needed and revalidate connectivity.

## Example Configuration Commands

The ST8310/U manufacturer provides SMS command templates to set the operator APN, the GPRS server, and the reporting interval. These templates use a device ID derived from the IMEI. The device ID is the last 6 digits of the IMEI excluding the final IMEI check digit. For example, if the IMEI is shown as 123456789012345 the device ID in these templates would be 901234.

Replace the placeholders as follows:
- Replace {{device_id}} with the six digit ID derived from the IMEI as described above
- Replace {{apn}} with your operator APN
- Replace {{apnu}} with your APN username if required by the operator
- Replace {{apnp}} with your APN password if required by the operator

1) Set the operator APN and GPRS server to point to Plaspy. Use either the domain or the IP and include the Plaspy port 8888. Example SMS template:

```
SA200NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Or if your device accepts the domain instead of the IP:

```
SA200NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};d.plaspy.com;8888;;;;
```

2) Set the reporting interval to 60 seconds. Example SMS template:

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Check current settings with the verification command:

```
SA200CMD;{{device_id}};02;PresetA
```

Notes about placeholders:
- {{apn}} is your mobile operator APN string
- {{apnu}} is the APN username if required, otherwise leave empty
- {{apnp}} is the APN password if required, otherwise leave empty
- {{device_id}} must be calculated from the device IMEI per the example above

If your installer tool or firmware requires a different field order or uses domain names for GPRS server configuration, apply the domain d.plaspy.com or the IP 54.85.159.138 and always set port 8888.

## Configuration Notes

- Firmware and tool differences can change the exact SMS syntax or required fields; use these templates as the published public examples and verify against the device firmware revision.
- The ST8310/U supports SMS based configuration as shown in the manufacturer templates; some installers prefer the Suntech configuration utility or OTA provisioning if available.
- Choose UDP or TCP based on installer preference and network reliability; both are supported and Plaspy will detect and process incoming protocol traffic.
- Make sure the APN credentials are correct and that the SIM has data enabled; incorrect APN settings are a common cause of missing connectivity.
- When testing, use the verification command to read back presets and confirm the server and port are set to Plaspy values

## Why Use Plaspy with This Configuration

Using the ST8310/U with Plaspy gives fleets reliable real time visibility and operational control through a single shared server endpoint. Pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 with the reporting interval set appropriately ensures Plaspy receives position and event data and can apply platform workflows such as geofence alarms, event logging, and remote control actions.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Suntech website at http://www.suntechint.com/ as vendor instructions and firmware versions can change over time.
