---
slug: /lk_gps/lk105b/configuration
id: lk105b-configuration
sidebar_label: Configuration
title: LK-GPS - LK105B Configuration
sidebar_class_name: menu_item_tracker
description: LK GPS LK105B configuration guide for Plaspy with server settings and practical setup steps for reliable pet tracking
keywords:
  - LK-GPS LK105B configuration
  - LK105B setup for Plaspy
  - LK105B server configuration
  - pet tracker configuration
  - LK-GPS platform setup
  - Plaspy tracker configuration
  - GPS tracker setup guide
  - LK105B tracking software configuration
  - device connectivity Plaspy
  - LK-GPS configuration steps
---

# LK-GPS - LK105B Configuration

This page covers the public configuration context for using the LK-GPS LK105B Mini Pet GPS Tracker with Plaspy. It summarizes the practical server settings and the typical steps required to point an LK105B at the Plaspy endpoint so the device can report location, SOS alerts, and basic telemetry to the platform. The content here is limited to publicly available integration details and setup workflow guidance rather than deep manufacturer private procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and the vendor tools used to program the device. Use this page to prepare and verify connectivity to Plaspy and always consult official LK-GPS documentation for device specific commands and firmware behavior.

## Configuration Overview

The goal of this configuration is to prepare the LK105B to communicate reliably with Plaspy so the device appears in the Plaspy platform and updates location and event data. Typical configuration focuses on network readiness, correct server targeting, and verification that the device is visible in Plaspy.

- Point the LK105B to the Plaspy endpoint d.plaspy.com or the equivalent IP address 54.85.159.138 on port 8888 so the device can deliver telemetry to the platform.
- Ensure the device has an active cellular connection, appropriate APN settings, and any required SMS or data services enabled.
- Choose transport settings (UDP or TCP) on the device if it requires a selection; Plaspy supports both transports on the same port.
- Save or apply configuration and, if required, restart the tracker so it initiates a new connection to the Plaspy server.
- Validate connectivity in Plaspy by confirming the device’s IMEI or device ID appears and starts reporting location updates or status messages.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- Power the tracker and confirm the battery is charged or the device has a stable power source.
- Active cellular service on the device with data enabled and the correct APN configured for the SIM provider.
- Access to the LK-GPS configuration method for the LK105B such as the manufacturer app, web portal, or SMS/software commands provided by LK-GPS.
- The tracker IMEI or device identifier available for registering or verifying the device in Plaspy.
- A Plaspy account or administrator access to the fleet platform to confirm the device appears after configuration.
- If SOS or SMS notifications are required, ensure authorized phone numbers are configured in the tracker according to manufacturer instructions.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LK105B will send location and event data to the shared Plaspy server endpoint and port so it can be viewed and managed in the platform. Plaspy’s automatic protocol detection helps accept data from devices without requiring manual selection of protocol handlers.

- The tracker transmits periodic location updates to d.plaspy.com (or 54.85.159.138) on port 8888.
- Location updates, movement events, and SOS alerts can be reported to the Plaspy platform for visibility and history playback.
- If the tracker supports LBS as a fallback, location reports can be provided when GPS signals are weak.
- SMS-based alerts such as SOS notifications can be sent to configured phone numbers and may also be relayed to the web platform depending on the device configuration.
- Plaspy automatically detects the device protocol when the connection arrives on port 8888 so no separate protocol selection is required on the server side.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method for the LK105B using the manufacturer app, web tool, or documented SMS commands.
2. Ensure the SIM card is active, data is enabled, and the correct APN is set if required by your carrier.
3. Enter the Plaspy server domain or IP address: use d.plaspy.com or 54.85.159.138 as the server endpoint.
4. Set the server port to 8888 as Plaspy uses a single shared port for all supported devices.
5. Choose UDP or TCP transport on the device if it requires a transport selection; Plaspy supports both on port 8888.
6. Apply or save the configuration through the manufacturer tool or by sending the save command.
7. Restart the LK105B if required by the manufacturer to initiate a fresh connection to Plaspy.
8. Validate that the tracker reports to Plaspy by checking device presence and incoming location updates in the Plaspy platform using the tracker IMEI or device ID.

## Example Configuration Commands

The LK105B manufacturer may provide multiple configuration methods such as an app, web portal, or SMS command set. Exact commands and syntax vary by firmware and vendor firmware versions. Because manufacturer methods vary, there are no universal public commands included here. Consult the official LK-GPS documentation or your vendor for the exact SMS or configuration strings to set server, port, APN, and phone numbers.

If you have manufacturer provided SMS commands or a documented command list, format and apply those commands in the order recommended by LK-GPS and preserve placeholders such as {{apn}} or {{apnuser}} when present. For example, if your device uses SMS commands the manufacturer guide will show the exact syntax and placeholders to replace.

## Configuration Notes

- Firmware variations can change the exact command syntax and available options; confirm your firmware revision before applying commands.
- Choosing UDP or TCP may affect message delivery behavior and retransmission; pick the transport recommended by your deployment or by LK-GPS for the LK105B.
- Plaspy requires the device to target d.plaspy.com or 54.85.159.138 on port 8888; this port is used consistently across all devices supported by Plaspy.
- SMS based configuration and SOS behavior depend on manufacturer settings and authorized phone lists configured in the tracker.
- Always cross check any configuration steps with LK-GPS official documentation to avoid unexpected behavior.

## Why Use Plaspy with This Configuration

Using Plaspy with the LK-GPS LK105B provides a straightforward way to collect real time location data, view history, and receive event alerts for pet safety and tracking operations. By directing the LK105B to Plaspy’s shared server endpoint and port, organizations and pet owners can centralize visibility, monitor movement, and respond to SOS events through the platform.

To learn more about Plaspy and how it handles device connections and fleet visibility visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance for the LK105B see the LK-GPS official site https://www.lk-gps.com. Manufacturer specifications and configuration methods can change over time so verify details on the LK-GPS site when performing setup or firmware updates.
