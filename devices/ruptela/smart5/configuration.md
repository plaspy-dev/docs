---
slug: /ruptela/smart5/configuration
id: smart5-configuration
sidebar_label: Configuration
title: Ruptela - Smart5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela Smart5 tracker integration with Plaspy including required server settings and setup workflow
keywords:
  - Ruptela Smart5 configuration
  - Ruptela Smart5 setup
  - Smart5 Plaspy configuration
  - Smart5 GPS tracker setup
  - vehicle tracking Smart5
  - Smart5 server configuration
  - Ruptela GPS Plaspy
  - fleet tracking Smart5
  - Smart5 telemetry configuration
  - GPS tracker Plaspy integration
---

# Ruptela - Smart5 Configuration

This page documents the public configuration context for using the Ruptela Smart5 GPS tracker with Plaspy. It summarizes the shared Plaspy server settings you will enter on the device or in the vendor tool, describes common prerequisites, and outlines a practical workflow to get the Smart5 reporting into Plaspy for live maps, alerts, and fleet dashboards.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps for Smart5 can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use, so treat this guide as a practical public reference and verify device-specific details with the manufacturer when needed.

## Configuration Overview

This configuration process prepares the Smart5 to send location and telemetry data to the Plaspy platform by pointing the tracker at Plaspy's shared server endpoint and ensuring the device has cellular connectivity and correct transport settings.

- Point the Smart5 to the Plaspy server endpoint so messages are delivered to Plaspy for processing.
- Confirm the device has cellular connectivity and any required APN or SIM settings for data upload.
- Choose the transport mode the device supports and ensure the correct port is entered so Plaspy receives messages.
- Validate connectivity and that telemetry, CANbus, and sensor data appear in Plaspy for live visibility.
- Test and monitor reporting behavior to confirm buffering and reconnection after temporary outages.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port 8888 for incoming tracker connections

## Typical Requirements Before Setup

- A powered and accessible Smart5 device with the chosen form factor installed according to site needs.
- Active cellular connectivity for the device (LTE Cat 1 with 2G fallback supported by Smart5) and a valid SIM configured with the carrier APN.
- Access to the official Ruptela configuration method or software required to change server, port, and transport settings.
- Knowledge of the device firmware version and any vendor-specific configuration procedures or credentials.
- A Plaspy account or administrative access to confirm the device appears in your fleet after setup.
- Basic tools to restart the device or cycle power if a reboot is needed to apply settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy, Smart5 sends its buffered location and telemetry to the shared Plaspy endpoint and port so the platform can ingest and display the data. Plaspy receives the messages, detects the tracker protocol automatically, and processes GNSS and vehicle telemetry for real time and historical reporting.

- Smart5 transmits GNSS fixes and position updates to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- CANbus and OBD frames captured by the device are forwarded to Plaspy for diagnostics and telemetry dashboards.
- Accelerometer events and sensor readings, including Bluetooth LE sensor data, are sent to Plaspy for event reporting.
- The device uses TCP or UDP transport as configured; Plaspy accepts either and auto detects the protocol.
- Local buffering in the Smart5 allows records to be uploaded to Plaspy after short connectivity interruptions.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for Smart5 (manufacturer web tool, desktop app, or SMS/configuration interface).
2. Enter d.plaspy.com as the server domain or alternatively enter the Plaspy server IP 54.85.159.138 if the tool requires an IP.
3. Set the server port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose the transport mode UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration in the manufacturer tool and confirm the changes were accepted.
6. Restart the device if the tool or device requires a reboot to activate the new server settings.
7. Validate that the Smart5 reports to Plaspy by checking device presence and incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The Smart5 configuration method depends on Ruptela tools and firmware. Because manufacturer tools vary, this page does not provide device-specific command syntax. When configuring the Smart5 you will typically enter the following public values in the chosen Ruptela configuration tool:

- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If you prefer command line or SMS configuration and that method is supported by your firmware, consult the official Ruptela Smart5 configuration reference for exact command formats and any placeholder replacement rules. Always preserve placeholders such as APN values when instructed by the manufacturer tool and verify commands against the official Ruptela documentation.

## Configuration Notes

- Firmware differences can change configuration menu locations, available transports, or command syntax; always confirm with the Ruptela Smart5 release notes for your firmware.
- Choose TCP when your installation needs reliable delivery ordering, or UDP when lower overhead and faster delivery are preferred and the network is stable; Plaspy accepts both.
- Ensure APN and cellular registration are correct so the device can reach d.plaspy.com or 54.85.159.138 from the mobile network.
- If you change server entries to use the IP address instead of the domain, ensure the carrier or device follows DNS or direct IP routing policy required by your deployment.
- Test device reporting immediately after configuration and review Plaspy for GNSS fixes, CAN/OBD telemetry, and sensor data to confirm end to end functionality.

## Why Use Plaspy with This Configuration

Using the Ruptela Smart5 with Plaspy gives fleets a practical path to combine accurate GNSS position data with vehicle diagnostics and sensor telemetry in a single platform. Pointing Smart5 to Plaspy's shared server endpoint and port lets organizations consolidate location, CANbus and OBD data, and sensor events so operations teams can monitor vehicles, respond to alerts, and generate actionable reports.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest Smart5 documentation and setup instructions at the official Ruptela website https://ruptela.com/.
