---
slug: /suntech/st_940/configuration
id: st_940-configuration
sidebar_label: Configuration
title: Suntech - ST 940 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 940 showing Plaspy server settings SMS commands and practical setup tips
keywords:
  - Suntech ST 940 configuration
  - ST 940 setup
  - Suntech ST 940 Plaspy
  - ST 940 server configuration
  - Suntech GPS tracker setup
  - ST 940 SMS configuration
  - Suntech tracker Plaspy compatibility
  - GPS tracker configuration guide
  - vehicle tracking ST 940
  - asset tracker ST 940
---

# Suntech - ST 940 Configuration

This page covers the public configuration context for using the Suntech ST 940 tracker with Plaspy. It gathers the Plaspy server settings you need, explains how the ST 940 is typically prepared for reporting, and provides the public SMS command templates that are commonly used to point the device to Plaspy. Use this as a practical starting point for integration and verification.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so combine the guidance here with your device documentation and any vendor-supplied configuration utilities.

## Configuration Overview

The goal of configuration is to prepare a Suntech ST 940 so it can send its location and status data to the Plaspy platform reliably. For ST 940 devices this commonly involves setting the network APN, the Plaspy server endpoint, update intervals, and verifying the device identity used by Plaspy to match the tracker.

- Set the operator APN and any required APN credentials so the device can use GPRS to reach Plaspy.
- Configure the ST 940 to use the Plaspy server endpoint (domain or IP) and port so the platform receives reports.
- Select the transport (UDP or TCP) if required by the device and save the configuration.
- Set an appropriate reporting interval (for example 60 seconds as an operational example) to match your monitoring needs.
- Validate connectivity and confirm the device appears in Plaspy using the device ID derived from the IMEI.
- Keep a copy of sent SMS commands or configuration files for audit and troubleshooting.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you only need to point the tracker at the shared endpoint.

## Typical Requirements Before Setup

- A charged ST 940 with a working SIM card that has data and SMS enabled as required for your setup.
- The device IMEI available; you will derive the Plaspy device ID from the IMEI.
- APN information from the mobile operator including APN, username, and password if required.
- Ability to send SMS to the tracker or use the manufacturer configuration tool depending on what the device supports.
- Access to the official Suntech documentation or vendor tools for any firmware specific commands or updates.

## How This Tracker Connects to Plaspy

The ST 940 is configured to connect to the Plaspy endpoint so the platform receives periodic location and status updates. The device uses GPRS to reach the configured server and reports according to the device’s reporting schedule.

- The tracker is pointed to the Plaspy server endpoint by domain or IP: d.plaspy.com or 54.85.159.138.
- Data is sent to port 8888 which is the common port Plaspy uses for all devices.
- The device may use UDP or TCP transport on port 8888 depending on your configuration choices and firmware options.
- Plaspy automatically detects the tracker protocol, so once the server and port are correct the platform will attempt to decode the incoming data.
- Regular reporting intervals and successful GPRS connectivity make the device visible and traceable in the Plaspy platform.
- After configuration you should validate that the device is reporting and appearing in Plaspy under the expected device ID.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software, or prepare to send SMS commands if the device is configured by SMS.
2. Obtain the device IMEI and compute the device ID used by Plaspy (see the example below).
3. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the appropriate network setting.
4. Set the port to 8888 as this is the shared port Plaspy uses for all devices.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the firmware or instructions require a restart.
7. Validate the device reports to Plaspy and appears under the expected device ID in the platform.

## Example Configuration Commands

The Suntech ST 940 can be configured by SMS using command templates. The device ID used in these commands is the last 9 digits of the IMEI excluding the final digit. For example, given IMEI 123456789012345 the device ID would be 678901234.

Note the placeholders:
- {{device_id}} = the 9 digit device ID derived from the IMEI as described above
- {{apn}} = your operator APN
- {{apnu}} = APN username if required
- {{apnp}} = APN password if required

1. Optional initial factory reset (use only if needed):
```
ST300CMD;{{device_id}};02;Reset
```

2. Set operator APN and GPRS server pointing to Plaspy (the numeric field after 02 indicates whether APN credentials are included; use 1 to include username and password or 0 if not needed):
```
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

3. Set reporting interval to 60 seconds (example interval):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4. Check current settings (verification command):
```
ST300CMD;{{device_id}};02;PresetA
```

Send each SMS to the device number. Replace the placeholders with your real values and ensure the device ID is calculated correctly from the IMEI before sending.

## Configuration Notes

- Firmware and regional variations can change command formats and available fields; always verify command syntax against your device firmware release notes.
- The ST 940 supports SMS-based configuration in public guidance; you may also be able to use vendor software or configuration tools if provided by Suntech or your reseller.
- Choose UDP or TCP based on your network environment and any carrier/firmware recommendations; Plaspy will accept either on port 8888 and detect the protocol automatically.
- Ensure the SIM has GPRS data enabled for live reporting and that APN credentials are correct if authentication is required.
- When troubleshooting, use the verification command above and monitor the device presence in Plaspy after applying settings.

## Why Use Plaspy with This Configuration

Using the Suntech ST 940 with Plaspy gives organizations a straightforward way to collect location and status reports from a compact, long-life tracker. Pointing the device to Plaspy's shared server endpoint and the common port simplifies deployment and monitoring across a mixed fleet of trackers.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer instructions check the official Suntech website http://www.suntechint.com/ as device methods and firmware behavior can change over time.
