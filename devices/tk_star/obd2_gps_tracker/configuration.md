---
slug: /tk_star/obd2_gps_tracker/configuration
id: obd2_gps_tracker-configuration
sidebar_label: Configuration
title: TK-Star - OBD2 GPS Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star OBD2 GPS Tracker setup with Plaspy including server settings SMS commands and workflow
keywords:
  - TK Star OBD2 GPS Tracker
  - TK Star OBD2 configuration
  - OBD2 tracker setup Plaspy
  - vehicle GPS tracker configuration
  - Plaspy server settings
  - OBD2 tracker SMS commands
  - fleet tracking configuration
  - OBD2 telemetry integration
  - GPS tracker platform setup
  - tracker server configuration
---

# TK-Star - OBD2 GPS Tracker Configuration

This page documents the public configuration context for using the TK-Star OBD2 GPS Tracker with Plaspy. It focuses on the practical server and device settings you will apply so the unit reports location and telemetry into the Plaspy platform. Where applicable the page also reproduces manufacturer-provided SMS commands that are commonly used to prepare this OBD2 device for Plaspy ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on incoming connections. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the instructions below as practical, public guidance and consult the manufacturer if a step differs on your unit. This tracker can be configured using SMS commands as shown in the example commands section or via vendor provisioning tools when available.

## Configuration Overview

This configuration process prepares the TK-Star OBD2 GPS Tracker to communicate with Plaspy by setting the device APN, server endpoint, update interval, and operation mode. The goal is to ensure reliable GPRS connectivity and correct destination settings so Plaspy can automatically detect the device protocol and ingest location and diagnostic data.

- Configure network access (APN and optional APN credentials) so the device can use GPRS.
- Point the tracker to the Plaspy server endpoint so data is routed to your Plaspy account.
- Set a suitable upload interval to balance tracking responsiveness with data usage.
- Switch the device to GPRS (online) mode so it sends telemetry to Plaspy.
- Verify the device is visible in Plaspy after applying settings and restarting if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support available for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol on incoming connections and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A vehicle with an accessible OBD2 port and a powered OBD2 socket for the tracker.
- A working SIM card with data enabled and the correct APN details for the mobile operator.
- Ability to send SMS commands to the tracker phone number or access to the manufacturer configuration tool if provided.
- Basic device information such as the default device password (the sample commands here use the default password 123456).
- A Plaspy account and knowledge of how to verify devices in the Plaspy platform after configuration.

## How This Tracker Connects to Plaspy

The tracker is configured to report location and selected OBD2 telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest, display, and alert on that data. Plaspy’s automatic protocol detection means you only need to point the device at the Plaspy server and port; the platform handles the protocol negotiation.

- The device sends GPRS data to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives GNSS and network assisted positioning updates for real time mapping.
- Vehicle diagnostics and supported OBD2 PIDs are forwarded to Plaspy when available.
- Plaspy correlates movement, geofence, and tamper events for monitoring and alerts.
- Device connectivity and upload interval influence how frequently Plaspy receives updates.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands to the tracker phone number.
2. Set the device APN and optional APN username and password according to your mobile operator.
3. Enter either d.plaspy.com or 54.85.159.138 as the GPRS server destination.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and switch the unit to GPRS (online) mode.
6. Restart or power cycle the tracker if required by the manufacturer to apply network settings.
7. Validate that the device reports to Plaspy by confirming visibility and recent position updates in your Plaspy account.

## Example Configuration Commands

The TK-Star OBD2 GPS Tracker can be configured using SMS commands. The sample commands below are public examples using the device default password 123456. Send each command as an SMS to the tracker phone number. Preserve placeholders where indicated.

1. Optional initial factory reset (use only if you need to restore defaults)
```
begin123456
```

2. Set the operator APN (replace [apn] with your operator APN)
```
apn123456 [apn]
```

3. Set the APN username if required by your operator (replace [apnu] with the username)
```
apnuser123456 [apnu]
```

4. Set the APN password if required by your operator (replace [apnp] with the password)
```
apnpasswd123456 [apnp]
```

5. Set the GPRS server to Plaspy by IP and port (this points the device to Plaspy)
```
adminip123456 54.85.159.138 8888
```

6. Set the position upload interval to 60 seconds
```
upload123456 60
```

7. Switch the device to GPRS mode so it begins sending data
```
gprs123456
```

Notes about placeholders and commands:
- [apn], [apnu], and [apnp] are placeholders for your mobile operator APN, APN username, and APN password respectively. Replace these with the correct values for the SIM in the device.
- The numeric password 123456 in these examples is the device default password shown in the public commands. If you have changed the device password, use the current password instead.
- The adminip command above uses the Plaspy server IP and port. You may alternatively point to d.plaspy.com if the device accepts hostnames.

## Configuration Notes

- SMS based configuration is a common public method for TK-Star devices; some deployments may use vendor software or OTA provisioning instead.
- Firmware revisions and hardware variants may change command formats or required parameters; check manufacturer release notes if a command is rejected.
- Choose UDP or TCP based on your testing and network reliability; Plaspy supports both and will auto detect protocol on connect.
- Confirm the APN settings with your mobile operator before configuring to avoid GPRS connection failures.
- After changing server or APN settings, a device restart or power cycle may be required for the settings to take effect.

## Why Use Plaspy with This Configuration

Configuring the TK-Star OBD2 GPS Tracker to send data to Plaspy enables centralized vehicle tracking, diagnostics monitoring, and event management without complex rewiring. The plug-and-play OBD2 form factor combined with Plaspy’s automatic protocol detection and shared server configuration simplifies provisioning across fleets and helps operators achieve consistent telemetry and alerting.

To learn more about Plaspy and how it supports tracker integrations, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance please verify details on the TK-Star website https://www.tk-star.com/ since manufacturer specifications and setup methods can change over time.
