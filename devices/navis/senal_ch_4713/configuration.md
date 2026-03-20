---
slug: /navis/senal_ch_4713/configuration
id: senal_ch_4713-configuration
sidebar_label: Configuration
title: Navis - Señal CH - 4713 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for Navis Señal CH 4713 connection to Plaspy using shared server settings
keywords:
  - Navis Señal CH 4713 configuration
  - Navis Señal CH 4713 setup
  - Navis GPS tracker configuration
  - Señal CH 4713 Plaspy
  - vehicle tracker configuration
  - fleet management tracker setup
  - Navis tracker server settings
  - GPS platform setup
  - tracker protocol configuration
  - GPRS TCP IP tracker setup
---

# Navis - Señal CH - 4713 Configuration

This page covers the public configuration context for using the Navis Señal CH 4713 tracker with Plaspy. It collects the practical, nonproprietary information you need to point the device to the Plaspy server and validate connectivity so the unit can appear and report in the Plaspy platform. The content below is intended for technicians and administrators preparing the device for fleet tracking with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side configuration steps for the CH 4713 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use the official Navis tools or documentation for device-specific menus and commands.

## Configuration Overview

The goal of this configuration is to prepare the Señal CH 4713 to communicate reliably with Plaspy so vehicle location and status are visible to your fleet management team. The procedure focuses on setting the Plaspy endpoint and transport, confirming network access, and validating the device reports successfully.

- Point the device to the Plaspy server domain or IP address so outgoing data reaches the Plaspy backend
- Set the device port to the shared Plaspy port so the server accepts the connection
- Select UDP or TCP transport on the device if the configuration method requires a transport choice
- Save and apply the settings and verify the unit registers with Plaspy
- Use Plaspy automatic protocol detection to avoid manual protocol selection beyond TCP or UDP

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Device must be powered with the appropriate vehicle supply or bench test power within the supported voltage range
- A valid SIM card and active data plan for GPRS or cellular data if the unit uses GSM data to reach the server
- Access to the official Navis configuration method or software for the CH 4713 such as the vendor web tool, SMS commands, or manufacturer utility
- GPS reception available during validation to confirm location reporting
- Knowledge of any installer passwords or access codes required by the device
- Physical or remote access for applying changes and restarting the device as needed

## How This Tracker Connects to Plaspy

When configured, the Señal CH 4713 sends location and device messages to the Plaspy endpoint so the unit becomes visible and monitored within the platform. The device uses its cellular data link and TCP IP stack to push messages to Plaspy at the shared endpoint and port.

- The tracker is set to report to the shared Plaspy server endpoint and port
- Data is transmitted over GPRS or cellular data using TCP IP toward d.plaspy.com or 54.85.159.138
- Transport selection on the device can be UDP or TCP depending on the configuration tool
- Plaspy receives the incoming connection on port 8888 and detects the tracker protocol automatically
- Successful reporting enables location, status, and event visibility in Plaspy

## Common Configuration Workflow

1. Access the official Navis configuration method or software for the CH 4713 according to the manufacturer documentation
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138
3. Set the device port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP if the device requires a transport selection
5. Apply or save the configuration in the device tool or send the configuration command via the supported method
6. Restart the device if the manufacturer tool or firmware requires a reboot for network settings to take effect
7. Validate that the device reports to Plaspy by checking device status in the Plaspy platform or by monitoring incoming connections/logs

## Example Configuration Commands

The exact configuration commands and menus for the Navis Señal CH 4713 depend on the manufacturer firmware and the chosen setup method. Navis devices commonly support configuration via manufacturer software, over the air updates, or SMS commands. Because model specific command sets vary by firmware, consult the official Navis configuration guide for exact syntax and sequence.

If you use SMS or a CLI provided by Navis, follow the manufacturer command reference. Preserve placeholders such as [apn] if they appear in commands and replace them with your operator APN values when instructed by the Navis documentation.

## Configuration Notes

- Firmware and hardware revisions can change menu layouts and available commands; always confirm the firmware level before applying configuration steps
- Where a transport choice is required, TCP and UDP are both supported; Plaspy will detect the tracker protocol automatically when the device connects to port 8888
- The CH 4713 supports over the air configuration in many deployments, which can simplify applying server and APN settings without physical access
- Because the device uses cellular networks, ensure the SIM has an active data plan and the APN is correctly set in the device if required
- Keep manufacturer documentation handy for any device specific security settings, installer passwords, or reset procedures

## Why Use Plaspy with This Configuration

Configuring the Navis Señal CH 4713 to report to Plaspy provides a straightforward path to real time fleet visibility, simplified event reporting, and centralized monitoring. Using the shared Plaspy server settings means you can apply a consistent configuration across multiple devices and rely on Plaspy to detect the tracker protocol automatically when the device connects.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest Navis device commands, firmware notes, and manufacturer specific setup instructions verify details on the official Navis website http://navis.ru/ since manufacturer specifications and configuration methods can change over time.
