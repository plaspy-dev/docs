---
slug: /reachfar/rf_v12/configuration
id: rf_v12-configuration
sidebar_label: Configuration
title: Reachfar - RF-V12 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Reachfar RF-V12 setup with Plaspy including required server settings and workflow
keywords:
  - Reachfar RF-V12 configuration
  - Reachfar RF-V12 setup
  - RF-V12 Plaspy
  - Reachfar GPS tracker configuration
  - RF-V12 server setup
  - Plaspy tracker configuration
  - RF-V12 tracking setup
  - Reachfar device guide
  - RF-V12 GPS platform setup
  - Plaspy device integration
---

# Reachfar - RF-V12 Configuration

This page covers the public configuration context for using the Reachfar RF-V12 tracker with Plaspy. It focuses on the practical server settings and workflow needed to point RF-V12 devices to Plaspy so location, alarm and telemetry data are visible in the Plaspy platform. Use this guide alongside the RF-V12 product documentation to complete device commissioning.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so treat the instructions here as a practical, platform-focused reference rather than a replacement for Reachfar documentation.

## Configuration Overview

This configuration process prepares your RF-V12 tracker to send GPS and event data into Plaspy so the device appears in your Plaspy account and begins reporting location and alarms. The steps below describe the main objectives you will complete when integrating RF-V12 devices with Plaspy.

- Configure the RF-V12 to send data to the Plaspy server endpoint so telemetry arrives in Plaspy.
- Choose the transport protocol supported by the device and point it to the Platform port used by Plaspy.
- Validate that position updates and alarm events appear in Plaspy after device restart or configuration save.
- Confirm notifications, geofence triggers, and history replay are working in the Plaspy dashboard.
- Use vendor tools or SMS commands from Reachfar to make changes on the device where applicable.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy will automatically detect the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the incoming tracker format.

## Typical Requirements Before Setup

- A charged and installed RF-V12 tracker accessible for configuration and testing.  
- A valid cellular SIM with data enabled for GPRS reporting and SMS if you plan to use SMS commands.  
- Access to Reachfar official configuration method such as the vendor web portal, mobile app, or SMS command set.  
- A Plaspy account with permissions to add and view devices so you can validate device reporting.  
- Basic knowledge of whether the device requires UDP or TCP selection during configuration.  
- If available, a temporary test vehicle or bench power supply to verify reporting during setup.

## How This Tracker Connects to Plaspy

When configured, the RF-V12 uploads GPS coordinates and event data over GSM GPRS to the shared Plaspy server endpoint and port. Plaspy ingests the incoming messages, automatically detects the protocol, and surfaces location and alarm events in the platform for monitoring and history analysis.

- The tracker sends periodic position reports to d.plaspy.com or 54.85.159.138 on port 8888.  
- You may configure the device to use either UDP or TCP transport depending on device options.  
- Alarm events such as vibration, sound, or line cut are sent to the same Plaspy endpoint for immediate notification.  
- Plaspy processes the incoming data and provides real time location, trace replay, and configurable alerts.  
- Automatic protocol detection in Plaspy allows many tracker models to be recognized without manual protocol selection in the platform.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software as provided by the vendor or manual.  
2. Locate the server or APN settings section for reporting and enter the Plaspy server domain d.plaspy.com or alternatively the server IP 54.85.159.138.  
3. Set the device reporting port to 8888 as required by Plaspy.  
4. Choose the transport protocol UDP or TCP if the device requires explicit transport selection.  
5. Apply or save the configuration changes in the vendor tool or send the equivalent SMS command if the device uses SMS setup.  
6. Restart the RF-V12 device if required by the configuration method to activate the new server settings.  
7. Validate that the device reports to Plaspy by checking the device list and live map in your Plaspy account and confirming position or event messages appear.

## Example Configuration Commands

The RF-V12 supports vendor tools and SMS command based configuration depending on firmware and vendor delivery. Exact commands and formats vary by Reachfar firmware and are not provided here. Use the Reachfar manual or vendor portal for the precise SMS command structure or software sequence to set server domain, IP, port and transport.

If you have a vendor-provided SMS command reference, follow that sequence to:
- set the server domain to d.plaspy.com or the server IP 54.85.159.138
- set the reporting port to 8888
- select UDP or TCP if required
- save settings and optionally restart the device

Preserve any placeholders in vendor commands such as {{apn}} for APN, {{apnu}} for APN username, and {{apnp}} for APN password when those values are required by your carrier. Check Reachfar documentation for exact command syntax.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS command syntax or configuration menu labels; always confirm with the Reachfar manual for your device revision.  
- For devices that allow both UDP and TCP, test both protocols if connection issues occur; Plaspy supports either transport on the shared port.  
- If you configure the device with the server domain d.plaspy.com, the tracker will resolve that to the Plaspy server IP at runtime; using the IP 54.85.159.138 is an alternative during testing.  
- Some vendors provide both SMS and software tools for configuration; prefer the method recommended by your vendor for production fleets.  
- Remember that Plaspy uses port 8888 for all devices supported by the platform so consistency across fleet configuration simplifies management.

## Why Use Plaspy with This Configuration

Using the Reachfar RF-V12 with Plaspy gives you a straightforward way to centralize real time location and alarm data for electric bicycles and motorcycles. Plaspy ingests the RF-V12 reports and makes them available for live monitoring, historical trace replay, and configurable alerts so teams can improve security and operational visibility.

Learn more about Plaspy and how it integrates with compatible devices at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Reachfar website https://www.reachfargps.com/
