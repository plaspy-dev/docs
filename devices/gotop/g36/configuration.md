---
slug: /gotop/g36/configuration
id: g36-configuration
sidebar_label: Configuration
title: GOTOP - G36 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the GOTOP G36 car charger GPS tracker to report to Plaspy with required server settings and a practical setup workflow
keywords:
  - GOTOP G36 configuration
  - GOTOP G36 setup
  - GOTOP G36 Plaspy
  - G36 GPS tracker configuration
  - G36 server configuration
  - Plaspy tracker setup
  - GPS tracker integration
  - vehicle tracking setup
  - fleet tracking configuration
  - device configuration guide
---

# GOTOP - G36 Configuration

This page documents the public configuration context for using the GOTOP G36 car charger GPS tracker with the Plaspy platform. It explains the practical server settings and setup workflow needed to forward the G36 location, alarm, and status data into Plaspy so the device becomes visible and usable in the platform for live tracking, geofences, and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, however exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The guidance here centers on the Plaspy server values and a practical sequence you can follow; always cross-check any device-specific menus or commands with GOTOP documentation.

## Configuration Overview

The goal of configuration is to prepare the G36 to communicate reliably with Plaspy and to validate that position and alarm events appear in the platform. Typical configuration focuses on network and server endpoint settings, transport selection as required by the device, and confirmation that the unit reports correctly after a restart.

- Provide the G36 with active cellular service using its Micro SIM and confirm network registration.
- Enter the Plaspy server endpoint and port so the G36 forwards position and event messages to Plaspy.
- Choose the transport protocol (UDP or TCP) if the device requires a selection for reporting.
- Save and apply settings on the device, then restart if needed to begin live reporting.
- Validate connectivity in Plaspy so the device is visible on the map and alarms are received.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GOTOP G36:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: the device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

Apply these values exactly in the manufacturer configuration tool, app, or command interface used for the G36.

## Typical Requirements Before Setup

- Device powered and installed in the vehicle power outlet with stable vehicle power available.
- A Micro SIM with active data service provisioned and able to reach internet services on the local mobile network.
- Access to the official GOTOP configuration method or software for the G36 (manufacturer web tool, desktop utility, or authorized dealer tool).
- Basic device information on hand such as IMEI and model label to identify the unit in Plaspy once reporting begins.
- Knowledge of the correct APN for the SIM provider if the device requires APN setup in the manufacturer configuration tool.
- A Plaspy account or administrative access to the Plaspy platform to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

The G36 sends GNSS-derived position fixes plus auxiliary event messages over the cellular link to the Plaspy endpoint. Plaspy receives those messages on the shared endpoint and port, detects the protocol automatically, and renders location and events in the platform.

- The device reports location updates to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport may be configured as UDP or TCP depending on device requirements; messages are accepted by Plaspy on port 8888.
- Position, geofence, power and vibration alarms, and device status messages are forwarded to Plaspy for mapping and alerting.
- Plaspy automatically detects the tracker protocol so you generally do not need to specify a protocol type in the platform when the device begins reporting.
- Visibility and history for the unit are available in Plaspy once the G36 successfully establishes reporting to the shared server endpoint.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the G36 (manufacturer app, desktop utility, or dealer tool).
2. Configure or confirm the device APN and cellular settings so the Micro SIM has data connectivity if required by the tool.
3. Enter the Plaspy server address by using either the server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
4. Set the reporting port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires transport selection for reporting to the server.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart the G36 if the tool or device prompts for a reboot to activate the new server and network settings.
8. Validate that the device reports to Plaspy by checking for incoming location updates, device status, and alarms in the Plaspy platform.

## Example Configuration Commands

The G36 model configuration methods vary by GOTOP firmware and the manufacturer configuration tool. Because there are multiple supported configuration interfaces across firmware and markets, the exact commands or SMS strings (when available) are manufacturer specific and may change over time. Refer to GOTOP documentation or the configuration utility you obtained from GOTOP for exact command formats and syntax.

If you obtain specific public command strings or SMS configuration patterns from GOTOP, place them in the device tool exactly as provided and preserve any placeholders such as [apn] or other APN fields.

## Configuration Notes

- Firmware and hardware revisions can change available menu names and command syntax; always check the device firmware version before applying instructions.
- TCP versus UDP selection may affect delivery behavior on some mobile networks; try the transport recommended in GOTOP documentation if you see intermittent reporting.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, reducing the need for platform-side protocol selection.
- Keep APN, network, and SIM details handy; incorrect APN configuration is a common reason for failure to reach Plaspy.
- Confirm regional model variants and cellular band support when deploying across different countries or carriers.

## Why Use Plaspy with This Configuration

Using the GOTOP G36 with Plaspy gives a compact, installation friendly tracking solution that combines continuous location reporting with a convenient dual USB charger form factor. This configuration provides real-time visibility and alarm forwarding into Plaspy so fleet managers and vehicle owners can track location, receive geofence and power alarms, and review historical routes with minimal installation effort.

Learn more about how Plaspy can ingest and visualize G36 device data by visiting the Plaspy website at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer procedures, verify current setup details on the official GOTOP site at https://www.gotop.cc/ since manufacturer specifications and setup methods may change over time.
