---
slug: /navtelekom/s_2422/configuration
id: s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom СМАРТ S-2422 and Plaspy integration with practical setup steps and server settings
keywords:
  - Navtelekom СМАРТ S-2422 configuration
  - Navtelekom S-2422 setup
  - СМАРТ S-2422 Plaspy integration
  - Navtelekom GPS tracker configuration
  - S-2422 server configuration
  - GPS tracker setup Plaspy
  - vehicle tracking tracker configuration
  - fleet management tracker setup
  - Navtelekom tracker guide
  - S-2422 telemetry setup
---

# Navtelekom - СМАРТ S-2422 Configuration

This page documents the public configuration context for using the Navtelekom СМАРТ S-2422 tracker with Plaspy. It focuses on the practical server values and setup workflow you need to point the S-2422 at the Plaspy service and validate connectivity so device location and telemetry appear in Plaspy dashboards. The guidance here is based on the tracker description and Plaspy public server settings for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools such as NTC Configurator or local Bluetooth setup. Use this page to prepare the tracker for Plaspy and confirm the core network parameters you must apply on the device.

## Configuration Overview

The configuration process prepares the СМАРТ S-2422 to send position and sensor telemetry to Plaspy using the shared Plaspy endpoint and port. Typical goals are to set the tracker server settings, choose an appropriate transport, confirm cellular connectivity, and verify visible reports in the Plaspy platform.

- Set the tracker server address to the Plaspy endpoint so data is delivered to the correct platform.
- Configure the transport option to UDP or TCP if the device asks for transport selection.
- Enter the Plaspy port so the S-2422 sends data to the same port used across Plaspy devices.
- Validate cellular connectivity and GNSS fixes so telemetry and location are transmitted reliably.
- Confirm the device appears in Plaspy and that telemetry such as digital inputs, RS-485 sensor data, and control outputs are visible.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the СМАРТ S-2422 on the manufacturer tool or local configuration app:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device option
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port so port 8888 is shared across supported trackers

## Typical Requirements Before Setup

- Ensure the S-2422 is installed and powered from the vehicle electrical system since it has no internal battery.
- Have an active 2G capable SIM installed with a data plan if the device will use cellular data for telemetry.
- Access to the official manufacturer configuration method such as NTC Configurator, Bluetooth local configurator, or the vendor tool used by your installer.
- A stable GNSS environment to obtain GLONASS or GPS fixes during setup validation.
- Credentials or access rights required by your installer or fleet admin to modify device server settings.
- A maintenance or test vehicle environment where you can safely restart the device if required after configuration.

## How This Tracker Connects to Plaspy

When configured, the СМАРТ S-2422 reports GNSS coordinates and vehicle telemetry to the shared Plaspy server endpoint and port. Plaspy receives the device messages, automatically determines the protocol, and makes data available in dashboards, reports, and alert rules.

- The tracker sends GLONASS and GPS coordinates over the 2G GSM link to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Sensor telemetry from RS-485 and 1-Wire interfaces is forwarded to Plaspy for fuel monitoring and sensor dashboards.
- Digital input events and configurable control outputs are reported so Plaspy can trigger rules and remote actions.
- Bluetooth 4.0 may be used for local configuration and accessory pairing while telemetry flows to Plaspy over cellular.
- Plaspy automatically detects the tracker protocol after the device connects to the shared server endpoint and port.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as NTC Configurator, the device web interface, or the local Bluetooth configurator used by Navtelekom.
2. Locate the server or reporting settings and enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138.
3. Set the port to 8888 as Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration changes in the manufacturer tool.
6. Restart the device if the tool or firmware requires a reboot for settings to take effect.
7. Validate that the S-2422 is reporting to Plaspy by checking for the device and telemetry in the Plaspy platform and confirming GNSS and sensor data flows.

## Example Configuration Commands

No public raw configuration commands are available for the СМАРТ S-2422 in this document. Exact commands, if used, depend on the manufacturer tool, firmware version, and local configuration method. Navtelekom devices are typically configured with NTC Configurator or via local Bluetooth tools, so use those official tools to set the server to d.plaspy.com or 54.85.159.138 and port 8888, and to choose UDP or TCP if required.

If you receive manufacturer supplied command snippets from Navtelekom or your reseller preserve placeholders they provide and follow the vendor instructions for order and syntax when applying commands.

## Configuration Notes

- Firmware and hardware revisions can change available fields or transport options in the configuration tool; check the device firmware version before and after changes.
- Choose UDP for lower overhead and TCP when a reliable session is preferred, but Plaspy will accept either transport on port 8888 and detect the tracker protocol automatically.
- Use the official Navtelekom tools such as NTC Configurator for persistent settings and DRC for remote firmware management where available.
- Installer practices and wiring depend on the vehicle and installation type since the S-2422 is a permanently wired tracker with no internal battery.
- Validate any placeholders or vendor variables from manufacturer commands with your supplier or Navtelekom support before deploying at scale.

## Why Use Plaspy with This Configuration

Configuring the Navtelekom СМАРТ S-2422 to report to Plaspy lets fleet managers consolidate real time location, digital input events, and external sensor telemetry in a single platform. This combination supports operational monitoring, fuel and sensor analytics, and remote control actions while leveraging the device's GLONASS GPS capability and vehicle I O interfaces.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official Navtelekom documentation consult the manufacturer site https://www.navtelecom.ru/ since setup methods and device behavior can change with firmware and hardware revisions.
