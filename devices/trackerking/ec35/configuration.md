---
slug: /trackerking/ec35/configuration
id: ec35-configuration
sidebar_label: Configuration
title: TrackerKing - EC35 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TrackerKing EC35 to configure reporting to Plaspy servers and verify connectivity for fleet tracking
keywords:
  - TrackerKing EC35 configuration
  - TrackerKing EC35 setup
  - TrackerKing EC35 Plaspy
  - EC35 server configuration
  - EC35 GPS tracker setup
  - TrackerKing EC35 tracking software
  - EC35 fleet management configuration
  - TrackerKing tracker configuration
  - Vehicle tracker EC35 setup
  - EC35 GT06 JT808 configuration
---

# TrackerKing - EC35 Configuration

This page documents the public configuration context for using the TrackerKing EC35 with Plaspy. It summarizes the shared Plaspy server settings you will point the device to, explains what to check before integration, and outlines a practical workflow to prepare the EC35 for reliable reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guidance together with TrackerKing documentation and your installer tools to complete the setup.

## Configuration Overview

This section explains the practical purpose of configuring the EC35 for Plaspy and what you should achieve during setup.

- Point the EC35 to Plaspy server endpoints so telemetry and location reports reach Plaspy in real time.
- Choose the transport (UDP or TCP) on the device if required, using the shared Plaspy port.
- Validate connectivity and protocol negotiation so Plaspy can automatically detect the device protocol.
- Verify device reporting (location, ignition events, sensor telemetry) appears in Plaspy dashboards.
- Ensure persistent power and cellular connectivity so the EC35 can provide continuous updates to Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A TrackerKing EC35 hardware unit with the required accessories installed and powered.
- An active and provisioned cellular data connection appropriate for the EC35 model and region.
- Access to the official TrackerKing configuration method or vendor software required to enter server and transport settings.
- Basic information about the tracker identity such as IMEI or device ID to confirm the device in Plaspy after activation.
- A stable power source or vehicle installation verified before initiating configuration.
- Administrative access to Plaspy or a Plaspy onboarding workflow to confirm device visibility after reporting begins.

## How This Tracker Connects to Plaspy

The EC35 transmits location and telemetry to Plaspy using standard tracking protocols and TCP or UDP transport. When you configure the device to report to Plaspy, the platform ingests the incoming reports and exposes position, events, and sensor data for monitoring and rules.

- The EC35 is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138.
- Data is sent on port 8888 which Plaspy uses for all supported devices.
- The device may use either UDP or TCP transport depending on installer selection and device capability.
- Plaspy automatically detects the tracker protocol (for example GT06, JT808, Tianqin) so no separate protocol selection is required on the platform side.
- Once reporting begins, Plaspy provides live maps, event notifications, and historical playback based on the EC35 reports.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or software provided by the manufacturer or your installer tool.
2. Locate the server or reporting settings section in the device configuration interface.
3. Enter d.plaspy.com or 54.85.159.138 as the server address for reporting.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and follow any device prompts to persist the settings.
7. Restart the device if the configuration method or firmware requires a reboot to activate new server settings.
8. Validate that the EC35 reports to Plaspy by confirming the device appears in the Plaspy interface and that location or telemetry updates are received.

## Example Configuration Commands

The exact configuration commands and their formatting depend on the TrackerKing configuration tool, firmware, or SMS command set that applies to your EC35 variant. Manufacturers commonly provide a dedicated configuration utility, web interface, or documented SMS commands for server and port setup. Consult the official TrackerKing configuration guide for command syntax and use those commands in your installer workflow.

## Configuration Notes

- Firmware and regional model differences can change configuration menus, available protocols, or supported transport options; always confirm the firmware version before applying settings.
- Selecting TCP versus UDP may affect delivery behavior and retry handling; choose the transport that matches your reliability and network needs.
- Plaspy will automatically detect the device protocol, so platform-side protocol configuration is typically not required when the device is pointed to d.plaspy.com on port 8888.
- Use the official TrackerKing tools to avoid misconfiguration and to access manufacturer-provided verification commands and logs.
- Installer practices and accessory options such as external sensors, IButton, or Bluetooth relays may require additional configuration steps beyond pointing the server address and port.

## Why Use Plaspy with This Configuration

Configuring the TrackerKing EC35 to report to Plaspy provides a straightforward path to vehicle visibility, event monitoring, and fleet operational oversight. With support for common tracking protocols and the shared Plaspy server settings, the EC35 integrates into Plaspy for real-time tracking, ignition and sensor reporting, and historical route playback that helps fleets manage assets and respond to incidents.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and the latest manufacturer instructions on the TrackerKing website https://trackerking.cn/ as device features and setup steps can change over time.
