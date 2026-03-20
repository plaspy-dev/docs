---
slug: /reachfar/rf_v26/configuration
id: rf_v26-configuration
sidebar_label: Configuration
title: Reachfar - RF-V26+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Reachfar RF-V26+ showing Plaspy server settings and setup steps for platform integration
keywords:
  - Reachfar RF-V26+ configuration
  - Reachfar RF-V26+ setup
  - RF-V26+ Plaspy setup
  - Reachfar GPS tracker configuration
  - animal GPS tracker Plaspy
  - livestock tracker configuration
  - farm GPS tracker setup
  - Plaspy server settings
  - GPS tracker server configuration
  - Plaspy device integration
---

# Reachfar - RF-V26+ Configuration

This page documents the public configuration context for using the Reachfar RF-V26+ animal GPS tracker with Plaspy. It explains the practical server settings and general setup considerations required to forward the RF-V26+ location and status feeds into the Plaspy platform for live mapping, history, and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps for the RF-V26+ can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow the manufacturer documentation where device-specific commands or utilities are required.

## Configuration Overview

The goal of the configuration process is to point the RF-V26+ at Plaspy so position and device status reports are received reliably and displayed in the platform. Below are the main practical objectives when preparing the tracker for integration.

- Configure the tracker to send its location and status to Plaspy using the shared server endpoint.
- Ensure the device is powered, reachable, and has the manufacturer configuration applied.
- Select the correct transport and port so the tracker uplink matches Plaspy expectations.
- Validate connectivity so positions appear in Plaspy as live positions and historical trails.
- Confirm basic telemetry such as battery or charge state is reported when available.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the RF-V26+ or entering server information in the manufacturer tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and the platform will detect the device protocol automatically when data arrives.

## Typical Requirements Before Setup

- The RF-V26+ is charged and installed in its holder or mounted on the collar as intended.
- Access to the Reachfar configuration method or software provided by the manufacturer.
- A locator for the tracker data pathway so the device can send data to an external server.
- Basic familiarity with entering a server domain or IP and a port in the manufacturer tool.
- A way to restart or power cycle the tracker after configuration if required.
- Access to Plaspy account or project where the device will be validated once it reports.

## How This Tracker Connects to Plaspy

When the RF-V26+ is configured to report to Plaspy, its location points and available status fields are forwarded to the shared Plaspy endpoint and become visible in the platform. The tracker is set up to use the Plaspy server endpoint and port so the platform can ingest and display telemetry.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- All data is sent to port 8888 on the Plaspy endpoint.
- The device may use UDP or TCP transport when sending uplinks to Plaspy.
- Plaspy automatically detects the tracker protocol and processes incoming location feeds.
- Once reports arrive, positions and trails are available in Plaspy for real time and historical review.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or manufacturer software as described in the RF-V26+ user guide.
2. In the server or remote upload settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose the transport option UDP or TCP if the device configuration requires selecting a transport.
5. Apply or save the configuration in the manufacturer tool.
6. Restart or power cycle the RF-V26+ if the manufacturer procedure requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking for live position updates and initial telemetry in your Plaspy project or account.

## Example Configuration Commands

The RF-V26+ public configuration provided here does not include a standardized list of manufacturer commands. Exact command syntax and configuration steps vary by Reachfar firmware and the vendor tool you are using. Use the Reachfar configuration utility or the RF-V26+ user manual to set the server domain d.plaspy.com or IP 54.85.159.138 and port 8888, selecting UDP or TCP as appropriate. After applying settings, confirm the tracker sends data and that Plaspy receives it.

If you have specific commands from the Reachfar documentation or vendor tool, apply them in the order recommended by Reachfar and then verify reporting to Plaspy on port 8888.

## Configuration Notes

- Firmware differences and hardware revisions can change command syntax and available fields; always check the Reachfar documentation for the RF-V26+ before applying commands.
- Choose UDP or TCP based on the manufacturer tool option and the link reliability in your deployment; Plaspy accepts either transport on port 8888.
- Because Plaspy uses the same port for all devices, the primary configuration variable is the server endpoint and transport selection.
- If device setup is performed in the field, confirm that the tracker is mounted and able to acquire GNSS positions so initial reports contain location data.
- Keep a record of configuration changes and the device identifier so you can match the RF-V26+ to the reporting device in Plaspy when validating.

## Why Use Plaspy with This Configuration

Integrating the RF-V26+ with Plaspy provides straightforward on-animal positioning and status reporting that helps managers monitor herd movement, receive perimeter alerts, and review historical ranges. Because the RF-V26+ is designed for rugged outdoor use with solar assistance, forwarding its telemetry to Plaspy enables practical operational oversight with minimal onsite interaction.

To learn more about Plaspy and how it ingests tracker data, visit https://www.plaspy.com. For the latest RF-V26+ device-specific configuration details, firmware notes, and manufacturer tools, verify current information at the Reachfar website https://www.reachfargps.com/.
