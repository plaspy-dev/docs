---
slug: /concox/at4/configuration
id: at4-configuration
sidebar_label: Configuration
title: Concox - AT4 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox AT4 for Plaspy including server settings SMS commands and setup workflow for reliable asset tracking
keywords:
  - Concox AT4 configuration
  - Concox AT4 setup
  - Concox AT4 Plaspy
  - AT4 server configuration
  - AT4 SMS commands
  - AT4 GPS tracker setup
  - Plaspy tracker configuration
  - asset tracking Concox AT4
  - vehicle tracking AT4
  - AT4 GPRS setup
---

# Concox - AT4 Configuration

This page covers the public configuration context for using the Concox AT4 tracker with Plaspy. It focuses on the practical server settings, the recommended SMS configuration flow provided by the manufacturer, and what you should verify before attempting integration. The AT4 is a portable magnet-mounted tracker built for long standby deployments and rugged field use, and this guide explains how to point the device at Plaspy so location and event data arrive in your account.

Plaspy uses a shared server endpoint and a single port across supported devices and will automatically detect the tracker protocol when the device connects. Manufacturer-side setup steps for the AT4 can vary by firmware version, hardware revision, installation type, and the configuration tools your vendor supplies. Where useful, this page includes the AT4 SMS commands that are commonly used in public documentation to set APN, server, and reporting timers.

## Configuration Overview

The goal of configuring an AT4 for Plaspy is to prepare the device to communicate reliably with Plaspy's shared server, validate connectivity from the field, and enable the tracker to report location and events into your Plaspy dashboard. For AT4 devices this commonly means sending a small set of SMS commands or using the manufacturer's configuration tool to set APN and server parameters.

- Point the device to the Plaspy server endpoint so reports are routed to the platform.
- Configure the mobile operator APN so the tracker can establish a GPRS data session.
- Set a reporting timer to control how often location updates are sent to Plaspy.
- Enable GPRS/data mode so the device actually transmits to the configured server.
- Verify configuration using the device verification command or by confirming reports arrive in Plaspy.
- Use manufacturer instructions for optional factory reset before initial setup if needed.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP; configure UDP or TCP on the device if required
- Plaspy automatically detects the tracker protocol when the device connects
- Note: All devices in Plaspy use the same port (port 8888) which simplifies server configuration across different tracker models

## Typical Requirements Before Setup

- A charged and powered AT4 unit with a working SIM card installed and active data service
- The mobile operator APN, and any APN username or password if required by your carrier
- Ability to send SMS commands to the device for SMS-based configuration or access to the official manufacturer configuration tool
- Basic coverage on the GSM network so the device can register and open a GPRS session
- Access to the manufacturer's documentation or vendor support for device-specific firmware guidance
- A Plaspy account and the expectation that the device will report to d.plaspy.com or 54.85.159.138 on port 8888

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AT4 is instructed to open a GPRS connection and send its periodic position and event packets to Plaspy's shared server endpoint and port. Plaspy receives GNSS and GSM-derived position reports, tamper and event notifications, and other telemetry so assets can be monitored and managed in real time.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com (or directly to 54.85.159.138) on port 8888
- Position and event packets are transmitted over the chosen transport (UDP or TCP) and handled by Plaspy's automatic protocol detection
- Tamper alerts, low battery or power-off signals, and other events are sent to Plaspy as configured by the device timers and event settings
- On-device buffering ensures cached reports are forwarded to Plaspy after brief connectivity interruptions
- Successful configuration results in visible device updates and historical plays within the Plaspy platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AT4 (SMS commands or vendor tool) and confirm current firmware behavior.
2. Enter the Plaspy server as either d.plaspy.com or the IP address 54.85.159.138 depending on your preference and device support.
3. Set the server port to 8888; note that Plaspy uses this same port for all devices.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Configure the APN and any required APN credentials for the SIM so the tracker can open a GPRS session.
6. Apply or save the configuration and restart or power-cycle the device if the device requires it to load new settings.
7. Validate that the device reports to Plaspy by checking device status in your Plaspy account or using the device verification command.

## Example Configuration Commands

To set the AT4 using SMS messages, send the following commands in the order shown. These commands are drawn from public configuration guidance and preserve placeholders where required.

1. Optional factory reset (use only when you want to return the device to factory defaults):
```
FACTORY#
```

2. Set the device time zone to UTC+0 (modify if a different time zone is needed):
```
GMT,E,0#
```

3. Set the mobile operator APN. Replace {{apn}} with your operator APN. If your operator requires username or password, include {{apnu}} and {{apnp}} as applicable:
```
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Note: Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier details. If no username or password is required, send only APN,{{apn}}#.

4. Set the GPRS server to use the Plaspy domain (example using domain):
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the server using the Plaspy IP address:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the location update interval to every 60 seconds (two common timer syntaxes shown):
```
TIMER,60#
```
or
```
TIMER,60,60#
```

6. Enable GPRS mode so the device uses data connectivity:
```
GPRSON,1#
```

7. Verify current GPRS and server parameter settings:
```
GPRSSET#
```

Keep the command order when performing initial setup: APN first, then server and timer, then enable GPRS. If your device firmware or vendor tool supports an explicit transport selection for UDP or TCP, set that accordingly in the manufacturer tool; the SERVER command above configures host and port but not transport type on all firmware versions.

## Configuration Notes

- SMS-based setup is commonly supported for the AT4; ensure your SMS is sent from a phone number the device accepts for remote configuration if the tracker uses safe number or whitelist settings.
- Firmware revisions can change command formats or available parameters; consult the device manual or your vendor if a command does not respond as expected.
- The AT4 will use the Plaspy server d.plaspy.com or the provided IP and port 8888; Plaspy automatically detects protocol so you do not need to specify protocol type to Plaspy, though device-side transport choice (UDP vs TCP) may be required.
- Replace APN placeholders with your mobile operator credentials exactly; incorrect APN details will prevent GPRS connections.
- After applying settings, a device restart or power cycle may be required for changes to take effect depending on firmware.

## Why Use Plaspy with This Configuration

Using the Concox AT4 with Plaspy provides a simple, consistent server configuration that makes it straightforward to bring rugged, long‑standby trackers into a single fleet or asset management view. With the shared Plaspy endpoint and automatic protocol detection, operators can standardize server settings across models and focus on installation and APN configuration rather than custom server endpoints for each device.

To learn more about Plaspy and how it supports real‑time tracking and telematics workflows, visit https://www.plaspy.com. For device specific details, firmware updates, and the latest AT4 command reference, verify the manufacturer documentation at https://www.iconcox.com/ as setup methods and device behavior can change over time.
