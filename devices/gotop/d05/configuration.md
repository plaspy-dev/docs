---
slug: /gotop/d05/configuration
id: d05-configuration
sidebar_label: Configuration
title: GOTOP - D05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP D05 GPS tracker to connect with Plaspy using shared server settings and practical setup guidance
keywords:
  - GOTOP D05 configuration
  - GOTOP D05 setup
  - GOTOP D05 Plaspy
  - GOTOP D05 server configuration
  - GOTOP D05 GPS tracker setup
  - GOTOP D05 fleet tracking
  - GOTOP D05 integration
  - Plaspy GPS configuration
  - GPS tracker server setup
  - vehicle tracking configuration
---

# GOTOP - D05 Configuration

This page provides the public configuration context for using the GOTOP D05 tracker with Plaspy. It summarizes the practical server settings and setup workflow you will use to point a D05 to Plaspy for real time location, alarms, and history playback while drawing on the device description for key capabilities such as long battery life, 4G connectivity with 2G fallback, and encrypted telemetry.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol so a single endpoint and port are used for all devices. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide together with GOTOP documentation and the vendor configuration method you have available.

## Configuration Overview

Configuring the D05 for Plaspy gets the tracker to report encrypted location and status messages to the Plaspy cloud so the device appears in maps, dashboards, and alerts. The goal is to provide a consistent server target and transport so Plaspy can ingest data and show live and historical telemetry.

- Point the D05 to Plaspy server domain or IP so telemetry is sent to the correct endpoint.
- Use the shared Plaspy port so the platform can accept the tracker connection and automatically detect the protocol.
- Confirm transport selection (UDP or TCP) if the device requires it and set the device to use that transport to port 8888.
- Validate connectivity from the device to Plaspy and check visibility in Plaspy maps and event lists.
- Save and apply settings on the device and perform a restart if needed to ensure changes take effect.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

These are the public Plaspy connection values to enter in the GOTOP configuration tool or app. Plaspy accepts connections on the same port for all supported devices and will automatically detect the tracker protocol used by the D05.

## Typical Requirements Before Setup

- A charged D05 unit with sufficient battery for configuration and testing.
- A valid SIM card installed and active for cellular data if using the device over the mobile network.
- Access to the GOTOP configuration method you use in your installation such as the smartphone app, web portal, or official manufacturer configuration tool.
- Network coverage for 4G LTE or 2G fallback in the area where the device will operate.
- Knowledge of the carrier APN and credentials when required by the SIM and provider.
- A Plaspy account or onboarding workflow to register and view the device once it begins reporting.

## How This Tracker Connects to Plaspy

The D05 sends encrypted position fixes and event packets over its cellular link to the shared Plaspy server endpoint and port. Plaspy ingests those packets, matches them to a device record, and surfaces the data in maps, alarms, and history.

- The tracker is configured to report to the shared Plaspy server endpoint and port so all telemetry arrives at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is set to UDP or TCP on the device if the configuration tool requires a transport selection.
- Plaspy automatically detects the tracker protocol and processes location and alarm messages without per device protocol configuration on the server side.
- Reports and events appear in Plaspy live view for real time monitoring and are stored for history playback.
- Encrypted data transmission from the D05 provides privacy for telemetry en route to Plaspy.

## Common Configuration Workflow

1. Access the official GOTOP configuration method such as the manufacturer smartphone app, web portal, or configuration software you received with the device.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the device port to 8888 to match the Plaspy endpoint.
4. Choose UDP or TCP on the device if transport selection is required by the firmware.
5. Enter any required APN or SIM related settings and save the configuration in the GOTOP tool.
6. Apply or save the configuration and restart the tracker if the manufacturer instructions require a reboot.
7. Validate that the D05 reports to Plaspy by checking device visibility in the Plaspy portal and confirming position, heartbeat, or alarm packets are received.

## Example Configuration Commands

The exact commands and the method to apply server settings depend on the GOTOP configuration interface and firmware. The D05 is typically configured using the GOTOP smartphone app, the web portal, or the manufacturer configuration tool rather than a single universal command set. Refer to the GOTOP configuration tool for the specific fields where you will enter the server domain d.plaspy.com or server IP 54.85.159.138 and port 8888, and choose UDP or TCP if prompted.

If you have a setup that uses textual commands or an advanced configuration console, follow the official GOTOP command reference provided with your device or by the manufacturer to set the server and transport. Use the manufacturer app or portal as the primary method unless you have explicit instructions that include command examples from GOTOP.

## Configuration Notes

- Different firmware versions or hardware revisions of the D05 may expose server and transport settings in different menus; consult GOTOP documentation for version specific steps.
- Plaspy uses the same port 8888 for all devices and automatically detects the protocol, so you do not need a unique port per device.
- Choose UDP or TCP based on installer preference and network conditions; UDP is common for low overhead telemetry while TCP may be preferred where reliability and ordered delivery are required.
- Keep carrier APN details handy when configuring the SIM; incorrect APN is a common connectivity cause.
- Always verify settings after applying them and watch the first position packet appear in Plaspy to confirm successful integration.

## Why Use Plaspy with This Configuration

Using the GOTOP D05 with Plaspy provides straightforward, centralized visibility for long standby asset and vehicle tracking. The D05 combines long battery life, multi constellation GNSS, and reliable cellular connectivity so it can deliver consistent position and alarm telemetry into Plaspy for live monitoring, geofence alerts, and history playback.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and manufacturer guidance check GOTOP documentation at https://www.gotop.cc/ as device behavior and configuration methods can change over time.
