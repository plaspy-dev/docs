---
slug: /suntech/st4345/configuration
id: st4345-configuration
sidebar_label: Configuration
title: Suntech - ST4345 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Suntech ST4345 tracking the device to Plaspy with practical server and SMS command examples
keywords:
  - Suntech ST4345 configuration
  - Suntech ST4345 setup
  - ST4345 Plaspy integration
  - Suntech tracker server configuration
  - ST4345 GPS tracker setup
  - Plaspy device configuration
  - vehicle tracking ST4345
  - ST4345 SMS commands
  - ST4345 APN settings
  - tracker reporting to Plaspy
---

# Suntech - ST4345 Configuration

This page documents the public configuration context for using the Suntech ST4345 series tracker with Plaspy. It describes the shared Plaspy server details you must point the device to, the common SMS command templates published by the device vendor, and practical steps to prepare the tracker so it can report location and telemetry into Plaspy. Use this page as operational guidance alongside the manufacturer manual.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The ST4345 modelConfiguration includes SMS-based command templates that are commonly used to set APN, GPRS server and reporting intervals; follow those templates and confirm specifics against official Suntech documentation.

## Configuration Overview

The configuration process prepares an ST4345 tracker to communicate reliably with Plaspy and to appear as an active device in your Plaspy account. Typical actions include setting the operator APN, configuring the GPRS server to Plaspy, selecting transport where required, and verifying reporting behavior.

- Set the device network parameters and APN so it can send data over the cellular network.
- Configure the GPRS server endpoint to point at Plaspy so the tracker delivers position and event messages.
- Adjust reporting intervals and behaviour to match your monitoring needs and data plan.
- Validate connectivity and device identity so Plaspy can match incoming messages to the correct device record.
- Save and, if necessary, restart the tracker so the new server and reporting settings take effect.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport supports UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy settings you should use when pointing an ST4345 (or any supported tracker) to Plaspy. Plaspy uses the same port for all devices and will detect the device protocol automatically.

## Typical Requirements Before Setup

- A powered ST4345 unit with a working SIM card provisioned for data and SMS where required.
- The device IMEI number available (needed to compute the device ID used in SMS commands).
- APN settings from the mobile operator including APN name and optional username and password.
- Access to the manufacturer configuration method you will use (SMS, web tool, or maintenance server) and the official Suntech instructions.
- A mobile phone capable of sending SMS commands to the device if using the SMS configuration method.
- Basic Plaspy account setup so you can confirm the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The ST4345 reports GNSS position and event messages to the configured server endpoint and port, which for Plaspy is the shared server address shown above. Once pointed to Plaspy, messages are ingested and correlated to the device identity so the unit becomes visible in the Plaspy platform for live and historical tracking.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Device telemetry and periodic position updates are sent over TCP or UDP depending on the transport selection.
- Plaspy receives those messages and automatically detects the tracker protocol to parse location and event data.
- Events such as ignition changes, alerts, and status messages are forwarded to Plaspy for mapping, alerts, and reporting.
- After successful setup the device appears in Plaspy for monitoring, diagnostics, and historical playback.

## Common Configuration Workflow

1. Access the official Suntech configuration method you plan to use (SMS commands, the vendor maintenance server, or configuration tool) and confirm the device is reachable.
2. Determine the device ID from the IMEI (see Example Configuration Commands) and gather APN credentials for the SIM.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the GPRS/server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device configuration requires a transport selection.
5. Apply or save the configuration on the device using the vendor method (send SMS commands, push config via tool, or update via maintenance server).
6. Restart the device if required by the vendor instructions so the new settings take effect.
7. Validate that the device reports to Plaspy and is visible in your account; check incoming messages and device status.

## Example Configuration Commands

The ST4345 modelConfiguration provides SMS command templates for network and reporting setup. The device ID in these templates is the six digits immediately before the final IMEI digit (the last 6 numbers of the IMEI excluding the final check digit). For a 15-digit IMEI, that is the 6 digits in positions 9 through 14. Example: IMEI 123456789012345 -> device ID 901234.

1) Set operator APN and GPRS server (replace [device_id], [apn], [apnu], and [apnp] as required). Set auth flag to 1 if you supply [apnu] or [apnp], otherwise use 0.

```
SA200NTW;[device_id];02;[auth_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- [device_id] — six digit device ID derived from the IMEI as described above.  
- [auth_flag] — 1 if APN username or password is provided, otherwise 0.  
- [apn] — operator APN name placeholder.  
- [apnu] — APN username placeholder if required.  
- [apnp] — APN password placeholder if required.

2) Set the update/reporting interval to 60 seconds (reporting, heartbeat and movement intervals in this template are set to 60):

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Check or request current preset settings from the device:

```
SA200CMD;[device_id];02;PresetA
```

Notes on sending commands:
- These commands are typically sent by SMS to the device phone number using an authorized phone. Follow Suntech instructions for the exact SMS sender restrictions and command authorization.
- Preserve the placeholder values and replace them with your operator and device-specific values before sending.
- The order of applying network settings (APN/GPRS server) before changing reporting intervals is recommended so the device can immediately register and push data to Plaspy.

## Configuration Notes

- The ST4345 supports SMS-based configuration as shown in the vendor templates; alternative vendor tools or maintenance servers may offer the same settings via a GUI or remote update.
- Choose TCP or UDP according to installer preference or network conditions; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- Verify firmware version and variant differences (ST4345R, ST4345LB, ST4345LC) because command syntax or available features can change across firmware and hardware revisions.
- Ensure APN credentials are correct and that the SIM has an active data plan; use the [auth_flag] value above to indicate whether APN authentication is required.
- Confirm the computed [device_id] from the IMEI before sending commands; an incorrect ID can prevent the device from accepting configuration or from being matched in Plaspy.

## Why Use Plaspy with This Configuration

Using the ST4345 with Plaspy gives organizations centralized visibility into location, movement events and device status across fleets and assets. Pointing the device to Plaspy's shared server endpoint and applying a practical reporting interval helps ensure timely position updates, event reporting and reliable ingestion of telemetry into Plaspy dashboards and alerts.

Learn more about Plaspy on our website https://www.plaspy.com. For device specific instructions, firmware details and the latest command references verify current information on the manufacturer's site http://www.suntechint.com/ because manufacturer setup methods and firmware behavior can change over time.
