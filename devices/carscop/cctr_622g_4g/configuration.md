---
slug: /carscop/cctr_622g_4g/configuration
id: cctr_622g_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-622G-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Carscop CCTR-622G-4G tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - Carscop CCTR-622G-4G configuration
  - Carscop GPS tracker setup
  - CCTR-622G-4G Plaspy configuration
  - Carscop server settings
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - tracker SMS commands
  - APN configuration guide
  - portable GPS tracker setup
  - vehicle tracking platform configuration
---

# Carscop - CCTR-622G-4G Configuration

This page covers the public configuration context for using the Carscop CCTR-622G-4G tracker with Plaspy. It summarizes the practical server values and sample SMS commands that are commonly used to point the device at Plaspy, plus notes about prerequisites and validation. The guidance here draws on the public commands and the tracker description and is intended for technicians and integrators preparing this portable, no-install tracker for real-time monitoring on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The CCTR-622G-4G supports SMS-based configuration and GPRS server settings; a sample command sequence is provided below to show the typical public workflow for directing the device to Plaspy.

## Configuration Overview

The configuration process prepares the CCTR-622G-4G to communicate with Plaspy by setting network access, APN credentials, and the Plaspy server endpoint. In practical terms the goal is to ensure the tracker has a working data channel, the correct server and port are set, and the device reports its location and alarms to Plaspy reliably.

- Configure the device APN and optional APN username/password so GPRS data is available for uploads.
- Point the device to the Plaspy server endpoint so telemetry and alarms arrive on the platform.
- Ensure the device stays online or uploads stored points when coverage returns for complete tracking history.
- Validate device visibility in Plaspy and confirm alarm and location messages are received.
- Apply any required timezone or device password settings so timestamps and security are correct.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the tracker or entering server details in the manufacturer tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used; select the transport your device requires
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port 8888 across all supported devices

## Typical Requirements Before Setup

- A charged and powered CCTR-622G-4G device with default or known device password
- An active SIM card with data and SMS capability installed in the tracker (APN info required)
- Access to send SMS commands to the device or access to the Carscop configuration tool provided by the vendor
- Network coverage for the selected mobile networks where the tracker will operate
- Access to Plaspy account credentials to verify the device becomes visible after configuration
- The manufacturer's user manual or configuration guide for device-specific command syntax and firmware notes

## How This Tracker Connects to Plaspy

Once configured, the CCTR-622G-4G reports location, alarm events, and status messages to the shared Plaspy server endpoint and port. Plaspy receives and displays those messages in real time so you can monitor location, alarms, and device health.

- The tracker uploads position reports and timestamps to d.plaspy.com or 54.85.159.138 at port 8888
- Transport can be UDP or TCP depending on device settings; Plaspy accepts both and auto-detects the protocol
- Alarm events such as SOS, shock, and low-battery are forwarded to Plaspy and can trigger notifications
- Stored tracks are uploaded when the device regains GPRS connectivity, allowing historical playback on Plaspy
- Keeping the device online or enabling periodic uploads improves continuity of tracking data visible in Plaspy

## Common Configuration Workflow

1. Access the official Carscop configuration method for the CCTR-622G-4G (SMS commands, vendor tool, or firmware interface).
2. Ensure the tracker has a working SIM card and that you know the device password (default sample password shown below is 123456).
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set the server port to 8888.
5. Choose UDP or TCP in the device transport settings if the tracker requires a transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device visibility and recent messages on your Plaspy account.
8. If needed, use the vendor-provided SMS command flow to adjust APN, keepalive, or timezone settings as shown below.

## Example Configuration Commands

The Carscop CCTR-622G-4G can be configured by sending SMS commands to the device. The following sample commands are public examples. The sample setup uses the device default password 123456 in the examples below.

- Reset to factory settings (optional initial step)
```text
RESET*123456
```

- Set the time zone to UTC+0
```text
TIMEZONE*123456*+00
```

- Set the operator APN
```text
APN*123456*{{apn}}
```

- Set the APN username and password (include only if your operator requires authentication)
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Set the GPRS server to Plaspy by IP and port
```text
IP*123456*54.85.159.138,8888
```

- Enable keep online behavior so the tracker maintains an active connection
```text
KEEPONLINE*123456
```

Notes on placeholders and defaults:
- {{apn}} should be replaced with your mobile operator APN string.
- {{apnu}} and {{apnp}} are placeholders for APN username and APN password when required by the operator; omit the USERNAME command if no credentials are needed.
- The sample password 123456 is shown as the factory default in these public examples; use the device password configured for your deployment.

## Configuration Notes

- SMS-based configuration is commonly supported for this model; vendor tools or a configuration interface may also be available depending on firmware.
- Default passwords vary by vendor and may change after a first-time setup; confirm the correct password before sending commands.
- Firmware revisions and hardware versions can affect available commands and parameter syntax; consult the manufacturer manual for exact syntax.
- Choose TCP or UDP based on your operational needs and device support; Plaspy accepts both and auto-detects protocol on connection.
- Plaspy uses port 8888 for all supported devices, so set that port consistently when pointing devices at d.plaspy.com or 54.85.159.138.
- The KEEPONLINE command or equivalent helps maintain session continuity and reduce data gaps when using GPRS.

## Why Use Plaspy with This Configuration

Using the CCTR-622G-4G with Plaspy provides a straightforward path to real-time location visibility, alarm forwarding, and historical track playback without hardwiring the unit. The device’s open protocol and SMS/GPRS configuration options make it practical to deploy quickly for personal safety, asset monitoring, and light asset logistics while leveraging Plaspy’s mapping and notification features for operational oversight.

Learn more about Plaspy and how it can display and manage devices like the CCTR-622G-4G at https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior can change over time, so please verify the latest device-specific configuration details on the Carscop website http://www.carscop.com/.
