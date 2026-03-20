---
slug: /concox/wetrack140/configuration
id: wetrack140-configuration
sidebar_label: Configuration
title: Concox - WeTrack140 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox WeTrack140 with Plaspy including server settings, SMS commands and practical steps to connect your tracker
keywords:
  - Concox WeTrack140 configuration
  - WeTrack140 setup Plaspy
  - Concox GPS tracker configuration
  - WeTrack140 server configuration
  - WeTrack140 SMS commands
  - Plaspy device setup
  - vehicle tracking configuration
  - AIS140 tracker setup
  - GPRS tracker configuration
  - fleet management tracker setup
---

# Concox - WeTrack140 Configuration

This page documents the public configuration context for using the Concox WeTrack140 with Plaspy. It summarizes the Plaspy server settings you must apply, explains the typical steps to prepare the tracker, and includes the manufacturer SMS configuration commands that are commonly used to point the device to Plaspy. Use this guide to apply practical setup actions and validate connectivity before adding the device to your Plaspy fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools. The WeTrack140 configuration below is grounded in the public device commands and the Plaspy server settings required to make the tracker report to Plaspy reliably.

## Configuration Overview

The goal of this configuration is to prepare the WeTrack140 so it can communicate with the Plaspy platform for real time location, telematics, and event reporting. The public setup typically uses SMS commands to set APN and GPRS server details, select transport (UDP or TCP) on port 8888, and enable GPRS reporting.

- Configure the device APN and GPRS server so the tracker can open a data session to Plaspy.
- Select UDP or TCP transport as required and set the server endpoint to Plaspy.
- Verify reporting interval and enable GPRS so the device transmits position updates to Plaspy.
- Validate connectivity and confirm the device appears in Plaspy with live location updates.
- Use the GPRSSET verification command to read current network and server parameters.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

These settings must be applied on the device (or via manufacturer tools) so the WeTrack140 reports to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP.

## Typical Requirements Before Setup

- A WeTrack140 unit powered and installed per the manufacturer installation guide.
- A mobile SIM with active data and SMS service configured in the tracker.
- Access to send SMS commands to the device or access to the vendor configuration tool described by Concox.
- The APN details for the SIM operator to set GPRS connectivity (APN host, and optionally username and password).
- Familiarity with the device SMS command syntax or access to vendor documentation for your firmware version.
- A Plaspy account and the ability to validate device presence within the Plaspy platform after configuration.

## How This Tracker Connects to Plaspy

When configured, the WeTrack140 uses the device GPRS connection to open a socket to Plaspy and send GNSS and telematics data. Plaspy ingests those messages on the shared endpoint and maps them to device records for real time monitoring and historical playback.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- All device traffic is directed to port 8888 which Plaspy uses for all supported devices.
- Transport can be UDP or TCP depending on device selection; Plaspy automatically detects the protocol.
- Position, speed, distance and status inputs are transmitted over GPRS to the Plaspy service.
- Plaspy receives events and telemetry, enabling dashboards, alerts and fleet monitoring.

## Common Configuration Workflow

1. Access the official Concox SMS configuration method or vendor software for the WeTrack140.
2. Set the device APN using the operator APN values for your SIM.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address.
4. Set port 8888 and choose UDP or TCP transport if the device requires a transport selection.
5. Enable GPRS reporting and set the desired update interval for location reports.
6. Apply or save the configuration and restart the device if recommended by the vendor.
7. Validate that the device reports to Plaspy and appears in the Plaspy interface with live data.

## Example Configuration Commands

The WeTrack140 can be configured by sending SMS commands to the device. The following commands are the public SMS commands commonly used to set up the tracker for Plaspy. Keep the order when required and substitute placeholders where indicated.

- Optional initial factory reset (use only when required)
```
FACTORY#
```

- Set the time zone to UTC 0 (example)
```
GMT,E,0#
```

- Set the operator APN (replace placeholders with your SIM APN values)
```
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Note: {{apn}} is the APN host. If your APN requires a username and password, provide {{apnu}} and {{apnp}} respectively. The format above preserves the optional username and password fields.

- Set the GPRS server to Plaspy using the Plaspy domain (UDP or TCP transport depends on device selection)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy using the Plaspy IP
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the timer to send updates every 60 seconds (two common variants)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Verify current GPRS and server settings
```
GPRSSET#
```

Send each SMS command to the device phone number per Concox instructions. Command syntax must match the device firmware; consult the vendor documentation if a command is rejected.

## Configuration Notes

- SMS based configuration is supported by the public WeTrack140 commands shown above; vendor tools may also be available for batch configuration.
- The device accepts either d.plaspy.com or 54.85.159.138 as the server and must use port 8888; Plaspy uses the same port for all supported devices.
- Choose UDP or TCP according to installer preference or firmware requirements; Plaspy will detect protocol automatically.
- Firmware versions or hardware revisions can change command syntax or available options; confirm commands against your device documentation.
- When using server IP or domain change commands, allow the device to restart network sessions before validating connectivity.

## Why Use Plaspy with This Configuration

Configuring the WeTrack140 to report to Plaspy gives fleet operators a unified stream of location and telematics data for real time visibility, alerts, and historical analysis. The combination of the WeTrack140 hardware features and Plaspy’s ingestion of GNSS and status inputs supports operational oversight, incident response, and analytics for fleets that require reliable AIS140 compliant tracking.

Learn more about Plaspy and how it can support your fleet deployment at https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and installation guidance verify details on the manufacturer site https://www.iconcox.com/ as device behavior and setup methods can change over time.
