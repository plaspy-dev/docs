---
slug: /arknav/at_5000/configuration
id: at_5000-configuration
sidebar_label: Configuration
title: ArkNav - AT-5000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ArkNav AT-5000 showing Plaspy server settings, setup workflow, and practical integration notes
keywords:
  - ArkNav AT-5000 configuration
  - AT-5000 Plaspy setup
  - ArkNav tracker configuration
  - AT-5000 GPS setup
  - Plaspy device configuration
  - vehicle tracking setup ArkNav
  - AT-5000 server configuration
  - GPS tracker Plaspy compatibility
  - asset tracking ArkNav AT-5000
  - AT-5000 installation guide
---

# ArkNav - AT-5000 Configuration

This page describes the public configuration context for using the ArkNav AT-5000 tracker with Plaspy. It summarizes the server settings, typical prerequisites, and a practical workflow to prepare an AT-5000 so it reports to the Plaspy platform. The guidance here aims to help technical integrators and installers apply the shared Plaspy settings while relying on ArkNav documentation for device-specific controls.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the tracker connects. Manufacturer-side setup steps for the AT-5000 can vary by firmware version, hardware revision, installation type, and the vendor configuration tool you use; this page focuses on the public Plaspy values and a safe, repeatable workflow to point the tracker at Plaspy.

## Configuration Overview

Configuring the AT-5000 for Plaspy is primarily about directing the device to the Plaspy server endpoint and confirming that it successfully reports position and status. The objective is to ensure the tracker can reach Plaspy over the cellular network, be recognized by the platform, and begin delivering events and location updates.

- Set the tracker to report to the Plaspy server endpoint so location packets reach the platform.
- Confirm network connectivity and any carrier APN settings required by the device.
- Choose the appropriate transport option on the device if required by firmware (UDP or TCP).
- Save and apply settings, restart the tracker if the device requires it, and validate the first heartbeat.
- Verify the tracker appears in Plaspy and is reporting as expected.

## Plaspy Server Settings

When configuring the AT-5000 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- A powered AT-5000 with sufficient battery charge or connected to its power source.
- An active cellular SIM and data plan compatible with the tracker, if the device uses GSM for data reporting.
- Access to the ArkNav configuration method or vendor tool required to edit server, port, and transport settings.
- Knowledge of any carrier APN settings that the tracker needs to reach internet services.
- Physical access to the device for initial configuration and for any required restarts.
- A Plaspy account or administrator access so you can verify the tracker appears and reports correctly in the platform.

## How This Tracker Connects to Plaspy

The AT-5000 sends its position and status to the configured server endpoint over the cellular network. Once the device is pointed at the Plaspy endpoint and allowed to connect, Plaspy will detect the incoming protocol and begin ingesting telemetry for visualization and monitoring.

- The device is configured to report to the shared Plaspy server endpoint and port.
- Location and event packets are sent over cellular data to d.plaspy.com or 54.85.159.138 using port 8888.
- Plaspy uses automatic protocol detection so the platform recognizes the tracker protocol without manual selection on the server side.
- The tracker’s reporting enables visibility of position and runtime status inside Plaspy.
- Periodic or event driven reports from the device are processed by Plaspy for alerts, history, and live monitoring.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software for the AT-5000 provided by the manufacturer or vendor.
2. In the server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888.
4. If the device requires a transport selection, choose UDP or TCP depending on your installation preference and device support.
5. Apply or save the configuration changes in the device tool.
6. Restart the AT-5000 if required by the device or firmware to activate the new settings.
7. Validate that the device reports to Plaspy by checking for a connection or heartbeat in your Plaspy account and confirming data arrival.

## Example Configuration Commands

The AT-5000 configuration method varies by ArkNav firmware and the vendor configuration tool in use. Because ArkNav provides multiple setup interfaces, and this public guide does not include device-only commands, follow the ArkNav tool or SMS command reference supplied with the device to set server, port, and transport.

When you edit server fields in the ArkNav tool, use either:
- Server domain: d.plaspy.com
- Or server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If your vendor tool supports direct command strings or SMS configuration, refer to ArkNav documentation for the exact syntax and preserve placeholders such as APN values that your carrier requires.

## Configuration Notes

- Firmware and tool differences: ArkNav configuration interfaces and command syntax can change between firmware versions and vendor tools; always check ArkNav documentation for the exact procedure.
- TCP versus UDP: Choose UDP or TCP as required by your network and installer preference; Plaspy accepts both transports on port 8888 and auto-detects the protocol on the server side.
- APN and carrier settings: Ensure the tracker’s APN and carrier credentials are correct so the device can establish a data connection before attempting to reach d.plaspy.com.
- Shared port behavior: Plaspy uses the same port for all devices, simplifying configuration and avoiding device-specific port assignments.
- Validation: After applying settings and restarting the device if needed, confirm the tracker is visible and reporting in Plaspy before concluding the installation.

## Why Use Plaspy with This Configuration

Using the ArkNav AT-5000 with Plaspy provides a straightforward way to bring durable, long-life tracking hardware into a modern fleet and asset visibility platform. The AT-5000’s long battery life and rugged design make it suitable for long deployments, while directing the device to Plaspy gives you centralized access to location feeds, history, and operational monitoring.

Learn more about Plaspy and how it works with devices like the AT-5000 at https://www.plaspy.com. For the most current device specific configuration methods, firmware details, and command syntax refer to the manufacturer site https://www.arknavgps.com.tw/ to verify the latest instructions and compatibility notes.
