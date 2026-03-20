---
slug: /ruptela/fm_tco4_lcv/configuration
id: fm_tco4_lcv-configuration
sidebar_label: Configuration
title: Ruptela - FM-Tco4 LCV Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela FM-Tco4 LCV tracking with Plaspy server settings and practical setup steps
keywords:
  - Ruptela FM-Tco4 LCV configuration
  - Ruptela FM-Tco4 LCV setup
  - Ruptela tracker configuration
  - FM-Tco4 LCV server configuration
  - FM-Tco4 LCV Plaspy setup
  - GPS tracker configuration Plaspy
  - vehicle tracking setup Ruptela
  - fleet management tracker configuration
  - LCV CANbus tracker setup
  - OBD II tracker integration
---

# Ruptela - FM-Tco4 LCV Configuration

This page provides public, practical configuration context for using the Ruptela FM-Tco4 LCV with Plaspy. It focuses on the shared server settings and the typical steps you should follow so the tracker can deliver position and vehicle data to Plaspy for fleet visibility and monitoring.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the FM-Tco4 LCV for Plaspy and consult Ruptela documentation or your installer for device-specific instructions.

## Configuration Overview

The goal of configuring the FM-Tco4 LCV for Plaspy is to prepare the device to communicate reliably with the Plaspy server so location, CANbus and OBD II data are visible in your Plaspy account. The configuration process centers on pointing the tracker to Plaspy, selecting the correct transport, and verifying reporting.

- Point the device to the Plaspy server endpoint so it can send location and vehicle telemetry.
- Select the correct transport (UDP or TCP) and ensure port 8888 is set.
- Validate connectivity from the tracker to Plaspy using network or manufacturer tools.
- Confirm the device is reporting and visible in Plaspy after applying settings.
- If using SMS or manufacturer software, apply configuration changes per Ruptela guidance.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the tracker on the manufacturer side:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept the device without manual protocol selection

Note that all devices in Plaspy use the same port and Plaspy will auto-detect the tracker protocol during initial communication.

## Typical Requirements Before Setup

- The FM-Tco4 LCV must be powered and properly installed in the vehicle by a qualified installer.
- Access to Ruptela official configuration tools or the installer interface required to change server and transport settings.
- If you intend to use SMS configuration or cellular reporting, an active SIM with appropriate data or SMS capability may be needed.
- Credentials or account access for your Plaspy instance so you can verify device provisioning and visibility.
- Confirmation of vehicle wiring or CANbus access if you plan to enable CANbus and OBD II telemetry collection.
- A plan for testing connectivity and reporting once settings are applied.

## How This Tracker Connects to Plaspy

When configured, the FM-Tco4 LCV sends its position and vehicle data to the shared Plaspy server endpoint and port so the platform can display tracking, CANbus readings, and OBD II events. Plaspy receives the device transmissions, automatically recognizes the protocol, and presents telemetry in the fleet dashboard.

- Device sends periodic position reports to d.plaspy.com or to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on how the tracker was configured
- Plaspy auto-detects the tracker protocol to accept the incoming data stream
- Vehicle telemetry such as CANbus and OBD II readings are forwarded to Plaspy when enabled on the device
- Events and status updates become visible in Plaspy for monitoring and reporting

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software recommended for FM-Tco4 LCV devices (web tool, desktop app, or SMS commands).
2. In the device server settings enter d.plaspy.com or the server IP 54.85.159.138 as the server address.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the tracker requires a transport selection.
5. Apply or save the configuration within the Ruptela tool or send the SMS configuration if using SMS method.
6. Restart the device if the manufacturer tool or procedure requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking device status and incoming messages in your Plaspy account.

## Example Configuration Commands

The FM-Tco4 LCV supports multiple configuration methods depending on firmware and installer tools. Because no specific manufacturer commands are provided here, follow Ruptela's official configuration interface or SMS command reference for exact syntax. Typical manufacturer tooling will allow you to set server address, port, and transport to the Plaspy values shown above.

If you prefer SMS-based setup and Ruptela documentation provides SMS commands, use those commands to set:
- server address to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP

Always verify commands and placeholders with Ruptela documentation before sending.

## Configuration Notes

- Firmware differences can change exact menu names, command syntax, and available features. Confirm firmware-specific steps with Ruptela.
- SMS configuration is supported by the device for certain features, but using the official Ruptela tool or a professional installer is recommended for CANbus and OBD II setup.
- Choosing TCP versus UDP can affect delivery guarantees and how sessions are maintained; select the transport required by your network and Ruptela instructions.
- Plaspy uses the same port for all devices and performs automatic protocol detection, so the critical values to set are the server and port.
- Keep a record of any device identifiers you enter in Plaspy so you can correlate an incoming device with the configured tracker.

## Why Use Plaspy with This Configuration

Configuring the Ruptela FM-Tco4 LCV to report to Plaspy gives organizations centralized visibility of vehicle location, route history, and vehicle telemetry including CANbus and OBD II data when enabled. This integration supports fuel monitoring, driver accountability, and operational oversight for light commercial vehicle fleets.

To learn more about Plaspy and how the platform works with compatible trackers visit https://www.plaspy.com. For device specific instructions, firmware notes, and the latest Ruptela setup details verify information on the Ruptela website https://ruptela.com/ since manufacturer configuration methods and device behavior can change over time.
