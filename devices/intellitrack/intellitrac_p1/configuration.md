---
slug: /intellitrack/intellitrac_p1/configuration
id: intellitrac_p1-configuration
sidebar_label: Configuration
title: Intellitrack - Intellitrac P1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Intellitrac P1 personal GPS tracker to report to Plaspy with practical server settings and setup guidance
keywords:
  - Intellitrack Intellitrac P1 configuration
  - Intellitrack setup for Plaspy
  - Intellitrac P1 server configuration
  - Intellitrac P1 GPS tracker setup
  - Plaspy tracker configuration
  - personal GPS tracker configuration
  - vehicle tracking platform setup
  - GPS device server settings
  - tracking device integration Plaspy
  - Intellitrac P1 compatibility
---

# Intellitrack - Intellitrac P1 Configuration

This page covers the public configuration context for using the Intellitrac P1 personal GPS tracker with Plaspy. It summarizes the practical server settings and workflow needed to point the device to the Plaspy platform and to validate that location reporting is visible in Plaspy. The content below is based on the device description and public Plaspy configuration values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page as a practical guide for applying the public Plaspy values and follow the device manufacturer materials for any device specific commands or tools.

## Configuration Overview

Configuring the Intellitrac P1 for use with Plaspy prepares the tracker to send periodic location and status data to a central server endpoint that Plaspy operates. The goal is to ensure the device has network connectivity, the correct server address and port, and that the chosen transport (UDP or TCP) is set where required by the device configuration interface.

- Point the tracker to the Plaspy server endpoint so data is routed into the platform
- Set the shared Plaspy port so the device communicates on the correct channel
- Choose the transport protocol (UDP or TCP) if the device requires an explicit selection
- Validate connectivity and that the tracker appears in Plaspy after configuration
- Confirm battery, SIM, and reception conditions to ensure consistent reporting

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A charged or powered Intellitrac P1 device with physical access for configuration
- An active SIM card with a data plan if the device uses GSM/GPRS connectivity, and adequate mobile network signal
- Access to the official Intellitrack configuration method or vendor software required to change server and transport settings
- Knowledge of the Plaspy server settings (d.plaspy.com or 54.85.159.138, port 8888) to enter into the device
- Patience to allow the device to acquire GPS fix and to report initial location after configuration
- A way to observe device reporting status in Plaspy once configuration is applied

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the Intellitrac P1 sends location and device event data to the shared Plaspy server endpoint and port. Plaspy will ingest those messages and present device visibility and telemetry in the platform, with protocol detection performed on the server side.

- Tracker sends uplink messages to d.plaspy.com or 54.85.159.138
- Messages are sent to port 8888 which is the single port used by Plaspy for supported devices
- Device can use either UDP or TCP transport depending on configuration and firmware support
- Plaspy automatically detects the tracker protocol and parses incoming messages accordingly
- After successful reporting the device becomes visible in Plaspy for monitoring and event reporting

## Common Configuration Workflow

1. Access the official Intellitrack configuration method or manufacturer software for the Intellitrac P1.
2. In the device server or host field enter the Plaspy address d.plaspy.com or use the numerical server IP 54.85.159.138 as an alternative.
3. Set the device port to 8888 to match Plaspy's shared port.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the tracker using the manufacturer tool or command method.
6. Restart the device if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking for the tracker in the platform and confirming recent location updates.

## Example Configuration Commands

The Intellitrac P1 may be configured using manufacturer utilities, web tools, or SMS commands depending on firmware and vendor tools. Exact commands and formats vary by firmware and should be taken from the official Intellitrack documentation or vendor configuration guide.

When using any configuration interface, ensure the following values are applied:
- Server domain or IP: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport option: UDP or TCP as required by the device interface

If you have a manufacturer-provided command list or SMS command format, apply the server and port values in the order the device requires and then save or reboot the tracker. Plaspy will automatically detect the tracker protocol once messages arrive at the server.

## Configuration Notes

- Firmware and configuration interfaces can differ by production batch or firmware version; always check the current Intellitrack documentation before making changes.
- Choose UDP or TCP according to device support and network conditions; UDP is often used for lightweight telemetry while TCP can be selected if the device or network requires a connection oriented transport.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so consistent use of port 8888 simplifies server configuration.
- If SMS based configuration is available from the manufacturer, use the official SMS commands documented by Intellitrack and include the Plaspy server settings as required.
- Verify that the device has adequate GSM and GPS reception after configuration, especially if the device will operate in enclosed or remote locations.

## Why Use Plaspy with This Configuration

Connecting the Intellitrac P1 to Plaspy gives organizations a centralized way to receive and monitor location data from compact personal trackers. Using Plaspy's shared server endpoint and automatic protocol detection removes the need to manage device-specific server ports, simplifying deployment across mixed fleets and personal tracking devices.

To learn more about Plaspy and its platform capabilities visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware behavior, and manufacturer details consult the official Intellitrack resources at https://www.systech-iot.com/ as methods and firmware may change over time.
