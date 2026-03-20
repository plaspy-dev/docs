---
slug: /suntech/st4315/configuration
id: st4315-configuration
sidebar_label: Configuration
title: Suntech - ST4315 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Suntech ST4315 for use with Plaspy server settings and SMS commands
keywords:
  - Suntech ST4315 configuration
  - Suntech ST4315 setup
  - Suntech ST4315 server configuration
  - ST4315 Plaspy setup
  - ST4315 GPS tracker configuration
  - Suntech tracker Plaspy
  - vehicle tracker configuration
  - GPS tracker setup guide
  - fleet tracking configuration
  - Plaspy tracker integration
---

# Suntech - ST4315 Configuration

This page covers the public configuration context for using the Suntech ST4315 series tracker with Plaspy. It explains the practical server settings and shows example SMS configuration commands provided in public manufacturer documentation so you can prepare the ST4315 for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; this page focuses on the public settings and SMS command templates that are commonly used to point ST4315 devices to Plaspy while preserving the original manufacturer command placeholders.

## Configuration Overview

The goal of configuration is to prepare the ST4315 so it reliably communicates location and telemetry to Plaspy and becomes visible in your Plaspy account. Where available, the device can be configured by SMS using the commands shown below; alternatively use the official Suntech configuration tool or installer procedures when provided by the vendor.

- Configure the device network settings and operator APN so the tracker can access cellular data and reach Plaspy.
- Point the tracker to the Plaspy server endpoint and port so data uploads arrive on the platform.
- Set reporting intervals and behaviour to match your tracking needs and data plan.
- Validate connectivity and device visibility in Plaspy after applying settings.
- Use the device IMEI derived device ID (six digits) required by the Suntech command format when sending SMS configuration messages.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the ST4315. Plaspy uses the same port for all supported devices and automatically detects the correct tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not typically need to set a protocol type on the platform side

## Typical Requirements Before Setup

- A powered ST4315 device with access to its IMEI number (required to derive the device ID for Suntech SMS commands).
- An active SIM card provisioned for data with the correct APN for your mobile operator.
- SMS send capability from the installer or configuration phone if using SMS-based setup commands.
- Access to the official Suntech configuration instructions or software for firmware specific options.
- A way to monitor device activity (operator SMS replies, device LEDs, or Plaspy device status) to confirm successful configuration.

## How This Tracker Connects to Plaspy

The ST4315 is configured to report GNSS positions and telemetry to the shared Plaspy server endpoint and port. Using the server domain or IP and port 8888, the tracker sends periodic updates that Plaspy ingests and makes available for live tracking and historical reporting.

- The tracker sends location and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device and network; choose the transport supported by your firmware and network operator.
- Plaspy automatically detects the device protocol so packets will be parsed once they reach the platform.
- Buffered records stored on the tracker are uploaded to Plaspy after reconnection, preserving continuity of data.
- Once reporting begins, events and status updates become visible in the Plaspy platform for monitoring and alerting.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software or review the manufacturer SMS command set for the ST4315.
2. Prepare the device IMEI and derive the device ID (six digits) required by the Suntech command format.
3. Enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138 in the device server settings.
4. Set the port to 8888 in the device configuration.
5. If the device interface requires a transport selection, choose UDP or TCP depending on your installation and network compatibility.
6. Apply or save the configuration on the device and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by checking device status in the platform and confirming packet reception.

## Example Configuration Commands

The following SMS command templates are the public command forms provided for the ST4315. Preserve placeholders when you replace them with your values.

Note on device ID
- The ST4315 command format requires a six digit device ID derived from the IMEI. Use digits 9 through 14 of the IMEI (counting from 1). For example, if the IMEI is 123456789012345 then the device ID is 901234.

1) Set the operator APN and GPRS server
- The fourth field is 1 if an APN username or password is provided, otherwise 0. Replace DEVICEID with the six digit ID and keep APN placeholders as needed.

```
SA200NTW;DEVICEID;02;[1 or 0];{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Example with placeholders explained:
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username if required by operator
- {{apnp}} = APN password if required by operator
- DEVICEID = six digit device ID derived from IMEI

2) Set reporting/update intervals to 60 seconds
```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

3) Check settings (verification command)
```
SA200CMD;DEVICEID;02;PresetA
```

Send these SMS messages from a mobile phone to the tracker number. Replace DEVICEID and APN placeholders before sending. Commands are shown in the order recommended by the public manufacturer guidance where a network/APN command is usually applied before reporting interval changes.

## Configuration Notes

- Firmware and model variants may change command behaviour or field ordering; always confirm the exact syntax with the Suntech documentation for your specific ST4315 variant.
- SMS configuration is a common public method for the ST4315 family; network or operator restrictions can affect SMS delivery and timing.
- Choosing UDP or TCP may affect reliability and battery use depending on network conditions; test both where appropriate and monitor device performance on Plaspy.
- All devices in Plaspy use the same port 8888 and Plaspy will automatically detect the tracker protocol, simplifying the platform side of integration.
- When using APN username or password fields, ensure you set the fourth field to 1 so the device includes those credentials.

## Why Use Plaspy with This Configuration

Using the ST4315 with Plaspy gives organizations dependable position reporting and telemetry ingestion into a single platform for live tracking, historical reporting, and event monitoring. The ST4315's buffering and multi network support help maintain continuity of data so Plaspy can present accurate routes, events, and analytics even after temporary connectivity loss.

To learn more about Plaspy and how your fleet can use these server settings for device integration visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and model variant details verify the manufacturer documentation at http://www.suntechint.com/ as manufacturer specifications and setup methods may change over time.
