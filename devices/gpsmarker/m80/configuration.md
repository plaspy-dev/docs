---
slug: /gpsmarker/m80/configuration
id: m80-configuration
sidebar_label: Configuration
title: GPSMarker - M80 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GPSMarker M80 to connect with Plaspy including server settings and setup workflow
keywords:
  - GPSMarker M80 configuration
  - GPSMarker M80 setup
  - GPSMarker M80 Plaspy
  - GPS tracker configuration Plaspy
  - M80 server configuration
  - M80 tracking platform setup
  - GPSMarker configuration guide
  - vehicle tracking M80
  - asset tracker M80
  - Plaspy tracker configuration
---

# GPSMarker - M80 Configuration

This page covers the public configuration context for using the GPSMarker M80 tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, the typical preconditions for setup, and the practical workflow used to bring an M80 online so it can report location and event data to Plaspy. Details here reflect public integration facts and the M80 feature highlights published by the manufacturer.

Plaspy uses the same shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps for the M80 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare and apply the public server settings and then confirm device behavior with manufacturer tools and Plaspy verification.

## Configuration Overview

The goal of configuration is to point the M80 at the Plaspy server and confirm reliable reporting so the device appears and updates in the Plaspy interface. For the M80 this typically means updating the device endpoint, transport, and any connectivity parameters required by the tracker and the SIM data plan.

- Configure the tracker to send data to the Plaspy endpoint so position and event messages reach the platform
- Choose the appropriate transport method if the device requires a UDP or TCP selection
- Validate GPRS or SMS connectivity depending on how the M80 is configured for data transmission
- Apply and save settings on the device and restart if the manufacturer procedure requires it
- Confirm the device is visible in Plaspy and reporting expected location and sensor events

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the M80. Plaspy requires the same port for all devices and automatically detects the tracker protocol on connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Fully charged or correctly powered M80 unit and stable installation in its mounted location
- Micro SIM card with an active data plan or SMS capability as required by your chosen setup
- Access to the official GPSMarker configuration method or software provided by the manufacturer
- Basic knowledge of any APN, username, or password required by the SIM plan if the device uses GPRS
- A way to restart or power cycle the device after applying configuration
- Access to Plaspy account or onboarding instructions to verify the device appears once reporting

## How This Tracker Connects to Plaspy

When configured, the M80 sends its location, status, and event messages to the Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Plaspy processes incoming messages and automatically identifies the tracker protocol so no separate protocol selection in Plaspy is required.

- The tracker is set to report to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- All devices use port 8888 on Plaspy so use the same port when configuring the M80
- The M80 can use UDP or TCP transport to transmit data depending on configuration and network conditions
- Plaspy automatically detects the tracker protocol and parses incoming packets for device identification and telemetry
- Once reporting, location and configured sensor events are available in Plaspy for monitoring and alerts

## Common Configuration Workflow

1. Access the official GPSMarker M80 configuration method or software as provided by the manufacturer
2. In the device settings enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138
3. Set the device port to 8888 which is the shared port Plaspy expects for all devices
4. Choose UDP or TCP transport if the device requires a transport selection
5. Apply or save the configuration on the device using the manufacturer tool or SMS commands where supported
6. Restart or power cycle the M80 if the configuration procedure requires a restart to apply new settings
7. Validate that the device reports to Plaspy by checking device visibility and recent data in the Plaspy platform

## Example Configuration Commands

The M80 manufacturer provides several methods to configure the tracker which can include PC software, SMS commands, or GPRS based configuration. The exact commands and syntax can vary by firmware and the official GPSMarker documentation should be used for precise command formats. Because manufacturer command sets differ between firmware versions, refer to the GPSMarker configuration manual for the exact SMS or software commands to set server, port, transport, and APN values.

## Configuration Notes

- Firmware differences can change command syntax or menu layout. Always check the M80 firmware version before applying commands.
- Some installations use SMS commands while others use manufacturer PC software over a serial or network link. Use the method recommended for your device revision.
- TCP and UDP transport options are available; choose the transport that best matches your network reliability and operator recommendations.
- If the M80 supports OTA firmware updates via GPRS, confirm that updates are allowed by your SIM plan to avoid unexpected data usage.
- Keep a record of applied settings and any changes to APN or SIM configuration for future troubleshooting.

## Why Use Plaspy with This Configuration

Using the GPSMarker M80 with Plaspy gives organizations an easy path to bring cost effective, long life tracking hardware into a unified monitoring platform. Pointing the M80 to Plaspy using the shared server settings simplifies onboarding and lets Plaspy handle protocol detection so devices become visible and report telemetry without additional protocol configuration in the platform.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and command references verify details with the manufacturer at https://gpsmarker.ru/ since device configuration methods and firmware behavior can change over time.
