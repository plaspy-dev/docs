---
slug: /sentar/rots/configuration
id: rots-configuration
sidebar_label: Configuration
title: Sentar - ROTS Configuration
sidebar_class_name: menu_item_tracker
description: Public instructions to configure the Sentar ROTS pet GPS tracker to report to Plaspy using shared server settings and SMS commands
keywords:
  - Sentar ROTS configuration
  - Sentar ROTS setup
  - Sentar ROTS server configuration
  - Plaspy tracker configuration
  - ROTS GPS tracker setup
  - pet GPS tracker configuration
  - SMS configuration ROTS
  - GPRS server settings
  - APN setup for ROTS
  - Plaspy device integration
---

# Sentar - ROTS Configuration

This page documents the public configuration context for using the Sentar ROTS pet GPS tracker with Plaspy. It describes the required server settings, typical prerequisites, and the publicly available SMS commands that are commonly used to provision the device so it can send location and telemetry to Plaspy. Use this guide as an operational reference when preparing the ROTS tracker for integration with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ROTS supports SMS configuration and GPRS server configuration as shown in the public command set below; follow the manufacturer manual and vendor instructions for device specific details and the exact syntax required by your firmware.

## Configuration Overview

The goal of this configuration process is to prepare the ROTS tracker so it reliably connects to Plaspy and appears in your Plaspy account for real time tracking and history. This includes setting the operator APN, pointing the device at Plaspy server endpoints, choosing the transport type if required, and validating the device is reporting as expected.

- Configure the device APN and operator parameters so GPRS data can be sent.
- Set the tracker to report to the Plaspy server endpoint and the shared port used by all Plaspy devices.
- Choose UDP or TCP transport if the device requires a transport selection.
- Validate connectivity and confirm the device reports updates to Plaspy.
- Use the provided SMS commands as a practical provisioning method when a manufacturer tool is not available.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Plaspy automatically detects the tracker protocol and all devices use the same port

Note that Plaspy uses the same port for all supported devices and will automatically detect the device protocol once the tracker sends data to the server domain or IP on port 8888.

## Typical Requirements Before Setup

- A charged and powered ROTS unit with an active Nano SIM installed and a data plan that allows GPRS or cellular data.
- APN, APN username, and APN password from the mobile operator for SMS or GPRS configuration.
- Access to SMS sending from a phone number authorized by the device if SMS provisioning is used.
- Knowledge of the device default password shown in public commands (default 123456 as provided in the public command set).
- Access to the manufacturer manual or vendor configuration tool for firmware specific syntax and recovery procedures.
- A Plaspy account or Plaspy provisioning information to confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

The ROTS tracker sends location updates and telemetry to Plaspy over the cellular data network after it is configured with the operator APN and the Plaspy server endpoint. Once the tracker begins reporting to the shared Plaspy server endpoint and port, Plaspy will detect the protocol automatically and begin processing the incoming data.

- The tracker is pointed to d.plaspy.com or 54.85.159.138 and uses port 8888 for outbound reporting.
- Transport can be set to UDP or TCP on the device where transport selection is required.
- Plaspy automatically detects the tracker protocol when data arrives on port 8888.
- Location updates and device messages are received by Plaspy for live tracking and event handling.
- Validation of reporting is performed by checking the device appears in Plaspy and timestamps update as expected.

## Common Configuration Workflow

1. Access the official Sentar configuration method or vendor supplied software, or prepare to send SMS commands as supported by the device firmware.  
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888. Plaspy uses this single port across all supported devices.  
4. Choose UDP or TCP if the device requires a transport selection, and save the selection.  
5. Configure the operator APN, APN username, and APN password using the manufacturer method or SMS commands, including any MCC and MNC values if required.  
6. Apply or save the configuration and restart the device if the firmware requires a restart for settings to take effect.  
7. Validate that the device reports to Plaspy by verifying device visibility and recent telemetry on Plaspy after the device restarts or begins reporting.

## Example Configuration Commands

The following SMS commands are taken from the public manufacturer command set for the ROTS. These are presented in the same order as the public guidance. Commands are sent by SMS to the device and frequently require the device default password. The public default password in these examples is 123456. Labeling and commas are preserved from the public commands; if your device firmware expects a slightly different syntax consult the device manual.

- Optional initial factory reset (use only when needed):
```
pw,123456,factory#
```

- Set the time zone to UTC 0:
```
pw,123456,lz,0,0#
```

- Check the IMSI or MCC and MNC:
```
pw,123456,imsi#
```

- Set operator APN where xxx is MCC and yy is MNC. Placeholders:
  - {{apn}} = operator APN
  - {{apnu}} = APN username
  - {{apnp}} = APN password
  - xxxyy = combined MCC and MNC when required
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Set GPRS server to Plaspy using the Plaspy server IP and shared port 8888:
```
pw,123456.ip,54.85.159.138,8888#
```

- Set update interval to 300 seconds:
```
pw123456,upload,300#
```

- Check current settings or timestamp status:
```
pw,123456,ts#
```

Notes on the commands above:
- The default password shown is 123456 in the public command set. Replace the password portion with your device password if it has been changed.
- Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when replacing with real operator values.
- Some commands in the public guidance use slightly different punctuation conventions. If a command fails, consult the Sentar manual for firmware specific syntax or use the vendor tool where available.

## Configuration Notes

- Firmware differences and regional firmware variations can change exact SMS command syntax and supported command keywords. Confirm the correct syntax for your device firmware.
- The ROTS supports SMS provisioning and GPRS server configuration as shown in the public command set. Use SMS only from authorized phone numbers per your device’s security settings.
- Choosing TCP or UDP may affect delivery characteristics; test both transports if you experience intermittent reporting, but remember Plaspy listens on port 8888 and will auto detect protocol.
- Verify APN, MCC, and MNC values with your mobile operator before setting them in the device to ensure cellular data connectivity.
- When available, prefer the manufacturer tool or vendor provisioning software for bulk deployments or firmware updates rather than manual SMS commands.

## Why Use Plaspy with This Configuration

Using the Sentar ROTS tracker with Plaspy centralizes pet location telemetry and provides consistent visibility across devices thanks to Plaspy’s shared server endpoint and automatic protocol detection. The public settings in this guide let the ROTS device send its location to Plaspy on the same port used by all supported devices, simplifying provisioning and making it easier to scale deployments.

Learn more about Plaspy and how it handles device connections and tracking at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest setup instructions with Sentar at http://www.sentarsmart.com/.
