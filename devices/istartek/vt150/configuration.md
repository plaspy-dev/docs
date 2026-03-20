---
slug: /istartek/vt150/configuration
id: vt150-configuration
sidebar_label: Configuration
title: iStartek - VT150 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek VT150 GPS tracker showing Plaspy server settings and example SMS commands for integration
keywords:
  - iStartek VT150 configuration
  - VT150 setup Plaspy
  - iStartek GPS tracker configuration
  - VT150 server configuration
  - Plaspy tracker setup
  - vehicle tracking VT150
  - VT150 SMS configuration
  - VT150 APN settings
  - GPS tracker Plaspy integration
  - fleet management VT150
---

# iStartek - VT150 Configuration

This page describes the public configuration context for using the iStartek VT150 GPS tracker with Plaspy. It focuses on the practical server settings and example commands that are commonly used to point a VT150 to the Plaspy platform and validate connectivity. Use this guide together with the device manual and vendor tools for a complete installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for the VT150 can differ by firmware version, hardware revision, installation type, and vendor tools; the VT150 supports SMS based configuration as a commonly available method and the commands below reflect public SMS commands commonly used for this model.

## Configuration Overview

Configuring a VT150 for Plaspy prepares the device to report position and telemetry to Plaspy's shared server endpoint so devices appear in the platform for monitoring and event handling. The process typically sets network APN, server endpoint and port, reporting intervals, and any optional timezone or factory defaults.

- Configure the device APN so it can use GPRS data to reach Plaspy.
- Set the Plaspy server endpoint and port so the device reports to the correct platform.
- Choose the transport protocol (UDP or TCP) if the VT150 requires an explicit selection.
- Define reporting intervals and enable any required alarms so Plaspy receives timely updates.
- Validate configuration and confirm the device is visible and reporting in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy uses the same port for all supported devices  
- Transport support for UDP or TCP — the VT150 may be configured to use either transport on port 8888  
- Plaspy automatically detects the tracker protocol so devices are ingested without needing manual protocol selection in the platform

## Typical Requirements Before Setup

- A VT150 device with power applied and accessible for configuration.
- A valid activated SIM card with a data plan and SMS capability installed in the device.
- Knowledge of the operator APN and optional APN username or password (placeholders shown below).
- Access to the manufacturer's SMS configuration method or software as documented for the VT150.
- A Plaspy account and access to the platform to confirm the device reports and appears in your fleet.
- Basic tools to send SMS messages to the device from a phone or management system if using SMS based setup.

## How This Tracker Connects to Plaspy

The VT150 sends periodic position and telemetry updates to Plaspy over the 2G GSM network using GPRS data. Once configured to point to the Plaspy endpoint and port, the tracker transmits its location and alarms to the shared Plaspy server where the platform displays and processes incoming events.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on the installer preference and device support.
- Reporting intervals (for example every 60 seconds) control how frequently location updates are sent to Plaspy.
- Alarm and event messages are delivered to the same Plaspy server and appear in the platform for alerting and analysis.
- Plaspy automatically detects the device protocol so protocol selection in the platform is not required.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the VT150 (SMS commands are a common public method).  
2. Enter the Plaspy server address by setting either d.plaspy.com or the IP 54.85.159.138 as the device server.  
3. Set the server port to 8888 (all devices in Plaspy use this same port).  
4. Choose UDP or TCP as the transport if the VT150 requires an explicit transport selection.  
5. Configure the operator APN using the APN placeholders if required and set any timezone or reporting interval parameters.  
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.  
7. Validate that the VT150 reports to Plaspy by checking the device in your Plaspy account and confirming incoming position or event data.

## Example Configuration Commands

The VT150 supports SMS based configuration. Below are public example SMS commands in the order commonly applied. Send each line as a separate SMS to the device phone number.

- Optional initial factory reset (use only when required):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN (replace {{apn}} with your operator APN; include {{apnu}} and {{apnp}} only if your operator requires them):
```
APN,{{apn}}# 
```
Or with optional username and password placeholders:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to the Plaspy domain (UDP or TCP transport selection happens on the device if required):
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy server IP:
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to every 60 seconds:
```
TIMER,60#
```

- Verify current parameter settings:
```
PARAM#
```

Notes on placeholders
- {{apn}} is the mobile operator APN string required for GPRS.
- {{apnu}} and {{apnp}} are optional APN username and password placeholders used by some operators.
- Send each command as an SMS to the device number and wait for confirmation SMS replies if the device is configured to respond.

## Configuration Notes

- Firmware versions and hardware revisions may change available commands or syntax; always check the device manual for your VT150 firmware revision.
- The VT150 supports SMS based setup as shown, but manufacturer software tools or USB/serial methods may also be available from iStartek.
- TCP versus UDP is selectable at the device level where supported; Plaspy accepts both on the same port and performs automatic protocol detection.
- All devices in Plaspy use the same port 8888, so ensure that firewall and network settings allow outbound TCP or UDP to port 8888 on the listed Plaspy server.
- After changing server or APN settings, allow a short period for the device to register on the network and begin sending data.

## Why Use Plaspy with This Configuration

Using the VT150 with Plaspy gives fleet operators reliable visibility into vehicle location, alarms, and telemetry with a straightforward configuration flow. Pointing the VT150 at the shared Plaspy server endpoint and port and confirming APN and reporting intervals ensures the device communicates consistently with the platform for real time monitoring and historical review.

To learn more about Plaspy and how it supports devices like the VT150 visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and technical documents verify information on the manufacturer site https://istartek.com/ as methods and firmware behavior can change over time.
