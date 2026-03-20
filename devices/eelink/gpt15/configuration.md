---
slug: /eelink/gpt15/configuration
id: gpt15-configuration
sidebar_label: Configuration
title: EElink - GPT15 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for EElink GPT15 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - EElink GPT15 configuration
  - EElink GPT15 setup
  - GPT15 Plaspy configuration
  - GPT15 server settings
  - Plaspy GPS tracker configuration
  - EElink tracker setup
  - GPT15 SMS commands
  - GPS tracker APN setup
  - Plaspy device configuration
  - luggage GPS tracker configuration
---

# EElink - GPT15 Configuration

This page covers the public configuration context for using the EElink GPT15 tracker with the Plaspy platform. It focuses on the practical server settings and the manufacturer provided SMS configuration commands that are commonly used to point the device at Plaspy for real time tracking and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GPT15 supports remote configuration via app or SMS and the example commands below reflect the publicly available SMS command flow for initial setup.

## Configuration Overview

The goal of this configuration process is to prepare the GPT15 so it reliably sends location and status data to Plaspy. Typical steps cover setting the device APN, specifying the Plaspy server endpoint and port, choosing the transport if required, and validating that the tracker is visible on the platform.

- Point the GPT15 to the Plaspy server endpoint to enable delivery of location and sensor events.
- Configure the device APN and ensure the SIM has data enabled so GPRS connections succeed.
- Choose UDP or TCP transport on port 8888 if the device requires a transport selection.
- Set a reporting interval to match your visibility needs and battery considerations.
- Validate settings with a parameter check and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so the platform accepts supported trackers without per device protocol configuration

## Typical Requirements Before Setup

- A charged GPT15 device with an active SIM card and data service configured for GPRS
- APN information from the SIM operator (username and password only if required)
- Access to the device configuration method provided by EElink such as SMS commands or the official app
- A Plaspy account or organizational access so you can confirm the tracker appears after configuration
- A cellphone capable of sending SMS commands to the device if using SMS configuration

## How This Tracker Connects to Plaspy

The GPT15 is configured to send its location and event telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and present real time data in maps, histories, and alerts. After configuring the server and APN on the device, the tracker establishes a GPRS connection and reports according to the configured interval and event triggers.

- The tracker reports position and sensor events to d.plaspy.com or to 54.85.159.138 on port 8888
- Plaspy receives the inbound connection and automatically detects the tracker protocol
- Location updates, geofence events, tamper alerts, and battery warnings are forwarded into the Plaspy dashboards
- Transport may be UDP or TCP on port 8888 depending on the device configuration choice
- Plaspy normalizes incoming telemetry so the device becomes visible for monitoring and reporting

## Common Configuration Workflow

1. Access the official EElink configuration method: use the EElink mobile app or send SMS commands to the GPT15 per the manufacturer instructions.  
2. Enter the Plaspy server address: use d.plaspy.com or the server IP 54.85.159.138 in the SERVER configuration field.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. If the device requires a transport selection, choose UDP or TCP on port 8888.  
5. Configure the SIM operator APN and any required APN credentials (use placeholders like [apn], [apnu], [apnp] when preparing SMS templates).  
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot.  
7. Validate that the device reports to Plaspy by checking device presence and recent activity in your Plaspy account or dashboard.

## Example Configuration Commands

The GPT15 supports SMS-based configuration. The following SMS commands are the publicly documented sequence for basic setup. Send each command as a single SMS message to the device SIM number. Preserve placeholders such as [apn] where shown.

- Optional initial factory reset (use only if you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN (replace placeholders with your operator values; include username and password only if required)
```text
APN,[apn]# 
```
or with username and password where supported:
```text
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] = APN name, [apnu] = APN username (optional), [apnp] = APN password (optional).

- Set the GPRS server to use Plaspy by domain (preferred readable form)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address (alternative)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic GPS upload interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```

Follow the command order when required by your installation: APN and SERVER commands are commonly required before the device can open a GPRS connection to the Plaspy endpoint. The FACTORY# command is optional and should only be used when you intend to restore factory defaults.

## Configuration Notes

- SMS configuration is a supported public method for the GPT15; if you prefer the mobile app, consult EElink documentation for app-based provisioning.
- Different firmware versions and hardware revisions may change command support or syntax; always cross check the commands with the device manual for your firmware.
- TCP versus UDP is selectable on devices that require a transport parameter; choose according to reliability and network environment, but both are supported by Plaspy on port 8888.
- Keep APN credentials ready before sending server commands so the device can establish a GPRS session to d.plaspy.com or 54.85.159.138.
- After applying changes, allow a few minutes for the device to connect and then use PARAM# or Plaspy platform visibility to confirm reporting.

## Why Use Plaspy with This Configuration

Using the GPT15 with Plaspy gives compact asset and luggage trackers direct visibility into a centralized monitoring platform. With the shared Plaspy server settings and automatic protocol detection, organizations and individuals can deploy multiple GPT15 units quickly and rely on Plaspy to aggregate position, tamper, battery, and geofence events for operational monitoring.

To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance, verify details on the EElink website at https://www.eelink.com.cn/ as setup methods and firmware behavior can change over time.
