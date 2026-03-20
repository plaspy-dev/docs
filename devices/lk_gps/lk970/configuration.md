---
slug: /lk_gps/lk970/configuration
id: lk970-configuration
sidebar_label: Configuration
title: LK-GPS - LK970 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the LK-GPS LK970 with Plaspy including server settings and setup workflow
keywords:
  - LK-GPS LK970 configuration
  - LK-GPS LK970 setup
  - LK970 server configuration
  - LK970 Plaspy setup
  - LK-GPS tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - fleet management tracker setup
  - LK970 SMS configuration
  - LK970 LTE tracker configuration
---

# LK-GPS - LK970 Configuration

This page provides public configuration context for using the LK-GPS LK970 tracker with the Plaspy platform. It summarizes the shared Plaspy server settings you will point the device to, describes the common setup workflow for making the LK970 report location and events to Plaspy, and highlights practical prerequisites and validation steps. The LK970 supports SMS platform mode query and real time tracking, making it possible to configure the device either via manufacturer software or SMS commands according to available firmware and tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps for the LK970 can vary by firmware version, hardware revision, installation type, and the vendor tools you use. This page centers on the public Plaspy connection values and practical steps; always confirm device-specific procedures with the official LK-GPS resources.

## Configuration Overview

Configuring the LK970 for Plaspy is primarily about directing the tracker to the shared Plaspy server endpoint, choosing the correct transport, and validating that the device is visible in the platform. Whether you use the LK970's SMS platform mode, a manufacturer configuration app, or a desktop tool, the goal is to establish reliable IP connectivity and consistent reporting to Plaspy.

- Point the tracker to the Plaspy server endpoint so position and event data reach the platform.
- Choose UDP or TCP transport on the device if a transport selection is required.
- Set the device to use the shared Plaspy port so the platform accepts incoming reports.
- Validate connectivity and reporting so the device appears under your Plaspy account inventory.
- Use SMS-based query or manufacturer tools to confirm device response when network tools are not available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public settings you will use to configure the LK970 so it can communicate with Plaspy. Plaspy uses the same port for all supported devices and detects the protocol automatically when devices connect.

## Typical Requirements Before Setup

- Physical access to the LK970 to apply settings or send SMS commands as required by the manufacturer method.
- A charged and functioning LK970 unit with battery or vehicle power connected.
- An active SIM card installed and registered on a mobile network if using mobile data reporting or SMS platform mode.
- The tracker IMEI and any required identifier to register the device in your Plaspy account or inventory.
- Access to the official LK-GPS configuration method such as the vendor software, web tool, or documented SMS commands.
- Confirmation of the device firmware version when possible, since configuration behavior can vary across firmware.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LK970 reports position and status data to the platform endpoint. Data sent from the device is received by Plaspy at the shared server address and port, where Plaspy identifies the tracker protocol and ingests telemetry for display and processing.

- The LK970 is configured to send TCP or UDP packets to d.plaspy.com or directly to 54.85.159.138.
- Device data is directed to port 8888 so Plaspy can accept and route incoming messages.
- Plaspy automatically detects the tracker protocol, so you do not need to select a protocol inside Plaspy for the tracker.
- The tracker can use SMS platform mode for queries or fall back to mobile data reporting depending on configuration.
- Once reporting is active, device location and alarms become visible in the Plaspy platform for monitoring and analysis.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer, or identify the SMS command set required for your firmware.
2. Enter d.plaspy.com or, if you prefer or need an IP entry, use 54.85.159.138 as the server address in the device configuration.
3. Set the server port to 8888 so the device sends data to the shared Plaspy port.
4. Choose UDP or TCP transport if the LK970 requires a transport selection during setup.
5. Apply or save the configuration settings in the device tool or by sending the appropriate SMS commands.
6. Restart the device if the manufacturer tool or firmware indicates a restart is required to apply network changes.
7. Validate that the device reports to Plaspy by checking device presence and recent telemetry in the platform or by using an SMS query if supported.

## Example Configuration Commands

The exact configuration commands and syntax used to set the LK970 server, transport, and port depend on the LK-GPS firmware and the manufacturer-provided command set or configuration tool. Some installations use SMS commands while others use a configuration app or desktop utility. Consult the LK-GPS documentation or vendor tool for the precise command format for your device and firmware.

If your LK970 firmware supports SMS configuration, you will typically send SMS strings provided by the manufacturer to set server address, port, and transport. Preserve any placeholders supplied by manufacturer documentation, for example placeholders such as {{apn}} or similar when configuring network parameters.

## Configuration Notes

- Firmware differences matter: commands and menus can differ between firmware versions and model variations labeled A/B/C; always verify the syntax for your specific unit.
- TCP versus UDP: choose the transport required by your deployment or use the option recommended by LK-GPS; Plaspy accepts either and will detect the protocol automatically on connect.
- SMS platform mode: because the LK970 supports SMS platform mode query and positioning, SMS can be used for quick verification or initial setup when data is not available.
- Single port policy: Plaspy accepts device reports on the same port for all supported devices, simplifying device-side port configuration.
- Confirm details on the manufacturer site if you need exact SMS commands or the manufacturer app workflow.

## Why Use Plaspy with This Configuration

Using the LK970 with Plaspy gives teams a consistent, platform-level endpoint to collect location, alarm, and reporting data from a device that supports SMS platform queries and real time tracking. Pointing the LK970 to the shared Plaspy server lets organizations consolidate device data, monitor asset movements, and receive alarms through a single platform rather than managing disparate server endpoints.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the most up to date, device specific commands, firmware notes, and manufacturer guidance for the LK970 consult the official LK-GPS documentation at https://www.lk-gps.com. Device setup steps and firmware behavior can change over time so verify critical configuration details with the manufacturer.
