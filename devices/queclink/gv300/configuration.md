---
slug: /queclink/gv300/configuration
id: gv300-configuration
sidebar_label: Configuration
title: QuecLink - GV300 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure a QuecLink GV300 tracker to report to Plaspy with required server settings and example SMS commands
keywords:
  - QuecLink GV300 configuration
  - QuecLink GV300 setup
  - GV300 Plaspy configuration
  - GV300 server configuration
  - QuecLink GPS tracker setup
  - vehicle tracker configuration guide
  - GV300 SMS configuration
  - Plaspy tracker setup
  - fleet management tracker configuration
  - GPS tracker server settings
---

# QuecLink - GV300 Configuration

This page documents the public configuration context for using the QuecLink GV300 tracker with Plaspy. It collects the practical server settings, required preparation steps, and example SMS commands that are commonly used to point a GV300 device to the Plaspy platform so devices can report location and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools, so use the commands here as a practical starting point and verify any device specific details against QuecLink documentation.

## Configuration Overview

The purpose of configuring a GV300 for Plaspy is to prepare the device to register with Plaspy servers, report scheduled and event driven location updates, and enable visibility in Plaspy dashboards and alerts. Configuration often includes setting the device APN, defining the GPRS server endpoint, choosing transport, and setting reporting intervals.

- Set the mobile data APN and credentials so the GV300 can use GPRS to reach the network
- Point the device GPRS server to Plaspy using the shared Plaspy endpoint and port
- Select UDP or TCP transport if required and confirm the device sends periodic reports
- Configure reporting intervals and event inputs so relevant telemetry is received by Plaspy
- Validate the device registers and appears in Plaspy so you can confirm location and alarms

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered GV300 with SIM and mobile data enabled so the device can establish GPRS connectivity
- Knowledge of the SIM APN and optional APN username and password for your mobile operator
- Ability to send SMS commands to the device or access QuecLink configuration software depending on your installer workflow
- Access to the device default password or admin credentials for configuration; the example commands below use the default password queclink
- A reliable power source during configuration and a plan to restart the device after changes are applied
- Access to QuecLink firmware notes or release documentation for any device specific quirks

## How This Tracker Connects to Plaspy

When configured, the GV300 sends its telemetry and event reports to the Plaspy server endpoint and port. Plaspy ingests the reported GNSS positions and configured event messages, then maps them to the appropriate account and device record for tracking and alerting.

- The tracker is configured to report to the shared Plaspy server endpoint and port d.plaspy.com and 54.85.159.138 on port 8888
- The device can use either UDP or TCP transport on port 8888 depending on selected transport in device settings
- Plaspy automatically detects the tracker protocol so the same Plaspy port can service multiple device protocols
- Scheduled reporting and event driven reports are received by Plaspy for visualization and alerting
- Alarms and digital input events show up in Plaspy once the device is successfully communicating with the server

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV300 such as SMS commands or QuecLink configuration software
2. Enter the server endpoint as either domain d.plaspy.com or server IP 54.85.159.138 depending on the device command format
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP transport if the device requires an explicit transport selection
5. Configure APN and any APN credentials and then apply or save the configuration to the device
6. Restart the device if required by the manufacturer to apply network and server settings
7. Validate that the GV300 reports to Plaspy by confirming the device appears and updates in the Plaspy platform

## Example Configuration Commands

The GV300 can be configured by sending SMS commands to the device. The following example commands are taken from public QuecLink SMS configuration examples. The device password used in these examples is queclink which is the manufacturer default.

1. Optional initial restore to factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Note: This command resets configurable parameters. Use it only when an initial factory restore is required.

2. Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN and optional credentials
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the mobile network APN
- {{apnu}} is the APN username if required by the carrier
- {{apnp}} is the APN password if required by the carrier

4. Set the GPRS server to report to Plaspy using both domain and IP in the example format
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command configures the device to contact Plaspy at d.plaspy.com and 54.85.159.138 on port 8888. Keep the port 8888 as Plaspy uses the same port for all devices.

5. Set the location update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send these SMS commands in the order shown when performing a scripted setup. Adjust placeholders and parameters to suit your operator settings and required reporting behavior.

## Configuration Notes

- SMS based setup is a common installer workflow for the GV300 and is shown here using public QuecLink command formats
- Firmware versions and device revisions can change command behavior or parameter ordering; check QuecLink firmware notes before applying bulk updates
- Choose TCP or UDP based on your network and reliability needs; Plaspy accepts both on port 8888 and will detect protocol automatically
- Preserve and secure the device password; examples use the default password queclink which should be changed in production
- Verify APN placeholders {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator and replace them before sending commands

## Why Use Plaspy with This Configuration

Using the QuecLink GV300 with Plaspy provides a practical combination of vehicle grade hardware and a unified cloud ingest point. With the shared Plaspy server settings and automatic protocol detection, fleets and security teams can standardize configuration across many devices while getting consistent reporting into the Plaspy platform for monitoring, alerts, and analytics.

To learn more about Plaspy visit https://www.plaspy.com and verify the latest device specific configuration and firmware details with QuecLink at https://www.queclink.com/ as manufacturer specifications and setup methods can change over time.
