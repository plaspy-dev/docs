---
slug: /lk_gps/lk120/configuration
id: lk120-configuration
sidebar_label: Configuration
title: LK-GPS - LK120 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure LK-GPS LK120 with Plaspy server settings and practical steps for platform integration and connectivity
keywords:
  - LK-GPS LK120 configuration
  - LK-GPS LK120 setup
  - LK120 Plaspy configuration
  - GPS tracker configuration
  - pet tracker setup
  - wearable GPS configuration
  - Plaspy server settings
  - GPS platform integration
  - LK-GPS setup guide
  - tracker server configuration
---

# LK-GPS - LK120 Configuration

This page covers the public configuration context for using the LK-GPS LK120 with Plaspy. The LK120 is a compact wearable 2G/4G tracker designed for pets and personal safety, providing location updates, SOS alerts, and geofence notifications. Below you will find the practical Plaspy server settings and the general process used to prepare the device for platform connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is pointed at the Plaspy endpoint. Manufacturer-side setup steps, tools, and exact menus can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide as the public integration reference and verify any device-specific instructions with LK-GPS documentation.

## Configuration Overview

This configuration process prepares the LK120 to send its location and event data to the Plaspy platform so the device becomes visible in Plaspy dashboards, notifications, and reporting.

- Point the LK120 to the Plaspy server endpoint using either the domain or IP and the shared Plaspy port.
- Select the transport option available on the device (UDP or TCP) where required.
- Ensure the device has an active cellular connection and any required APN settings are configured for 2G/4G data.
- Save and apply the configuration, then verify the device is reporting to Plaspy.
- Validate SOS, geofence, and movement reporting in the Plaspy platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the LK120. All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol after the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol once the device connects

## Typical Requirements Before Setup

- Fully charged device battery or a reliable power source during configuration and the initial test period.
- Active cellular SIM with a data plan compatible with 2G/4G networks in your market.
- Access to the official LK-GPS configuration method such as the manufacturer web tool, mobile app, SMS commands, or configuration software.
- APN and network settings available for the SIM operator if the device requires manual APN configuration.
- Access to the Plaspy server details listed above so you can enter the domain or IP and the shared port.
- A short test area where GPS reception is sufficient for initial verification.

## How This Tracker Connects to Plaspy

When configured to point at Plaspy, the LK120 sends GPS coordinates and status messages over the cellular network to the shared Plaspy endpoint and port. Plaspy ingests those messages and displays device position, events, and telemetry in the platform.

- The tracker reports GPS coordinates and timestamps to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- SOS button events are transmitted and processed by Plaspy for immediate notifications.
- Geofence entry and exit messages are sent to Plaspy so the platform can trigger alerts.
- Battery level and movement status updates are forwarded to Plaspy for monitoring and notification rules.
- Transport can be UDP or TCP depending on the device configuration; Plaspy detects the incoming tracker protocol automatically.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the tracker requires a transport selection.
5. Configure any required APN or network parameters for the SIM card and save your changes.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.
7. Validate that the device reports to Plaspy by checking device connectivity and telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and the method to send them vary by LK-GPS firmware and the manufacturer's configuration tools. Some LK-GPS devices support SMS command configuration, others use a desktop or mobile configuration application. Because methods differ by firmware and region, consult LK-GPS official documentation for command syntax and examples specific to your LK120 unit.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and menu placement; always confirm the current instructions from LK-GPS.
- Choose UDP or TCP based on device capability and local network behavior. TCP can be more reliable for message delivery while UDP is common for low-latency tracking.
- APN settings must match the SIM operator requirements; placeholders such as an APN username or password may be required in some setups.
- Test SOS, geofence, and low-battery alerts after configuration to ensure events arrive in Plaspy as expected.
- Remember that Plaspy uses a single shared port for all devices and will automatically detect the tracker protocol when a device connects.

## Why Use Plaspy with This Configuration

Configuring the LK-GPS LK120 to report to Plaspy centralizes real-time location, SOS events, and telemetry for easy monitoring and rapid response. For pet owners, shelters, or small-scale asset managers, integrating wearable trackers like the LK120 with Plaspy provides consistent visibility, automated alerts, and a single platform for event history and notifications.

To learn more about Plaspy and how it supports device integrations like the LK120 visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer tools consult LK-GPS at https://www.lk-gps.com to verify current setup details and command references.
