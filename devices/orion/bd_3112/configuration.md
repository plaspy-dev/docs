---
slug: /orion/bd_3112/configuration
id: bd_3112-configuration
sidebar_label: Configuration
title: Orion - BD-3112 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Orion BD-3112 for Plaspy with public server settings and practical setup guidance
keywords:
  - Orion BD-3112 configuration
  - Orion BD-3112 setup
  - Orion BD-3112 Plaspy
  - Orion GPS tracker configuration
  - BD-3112 server settings
  - Plaspy tracker setup
  - Orion tracker integration
  - fleet tracking Orion BD-3112
  - GPS tracker Plaspy configuration
  - vehicle tracking Orion BD-3112
---

# Orion - BD-3112 Configuration

This page documents the public configuration context for using the Orion BD-3112 GPS tracker with Plaspy. It summarizes the shared server settings Plaspy requires and explains the practical steps you will typically take to point a BD-3112 at the Plaspy platform so the device can report location, geofence events, and SOS alerts into Plaspy.

Plaspy uses a consolidated server endpoint and automatic protocol detection across supported devices, but the exact manufacturer side setup steps can vary by BD-3112 firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the device and to understand the shared Plaspy settings, and consult the manufacturer documentation for any device specific details.

## Configuration Overview

This overview explains the public configuration goal for the BD-3112 when integrating with Plaspy. The main objective is to ensure the tracker can reach the Plaspy server endpoint and to validate that location and event messages are received by the platform.

- Point the BD-3112 at the Plaspy server endpoint so it can forward GPS and event data.
- Choose a supported transport protocol and set the Plaspy port used for all devices.
- Confirm the device has functional cellular connectivity and is powered for testing.
- Verify geofence and SOS events are transmitted and visible inside Plaspy.
- Perform a connectivity and reporting test so the device appears in the Plaspy platform.

## Plaspy Server Settings

When configuring the BD-3112 for Plaspy, use the following public server settings as the target for device reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP as required by the device
- Plaspy performs automatic protocol detection for supported tracker protocols

All devices connecting to Plaspy use the same port and Plaspy will detect the tracker protocol automatically. Use the domain or the IP address above when configuring the BD-3112.

## Typical Requirements Before Setup

- A powered and functioning BD-3112 unit ready for configuration and testing.
- An active cellular SIM card with data enabled if the device requires mobile network connectivity; confirm signal at the installation location.
- Access to the official Orion configuration method or software provided by the vendor for the BD-3112.
- Credentials or permissions required by the manufacturer tool to change network or server settings.
- A Plaspy account and access to the platform to verify device reporting after setup.
- A controlled test environment to validate connectivity and reporting before final installation.

## How This Tracker Connects to Plaspy

The BD-3112 is configured to send its location, status, and event reports to the shared Plaspy server endpoint and port. Once the tracker is configured with Plaspy settings, the platform will display location updates and alert events for monitoring and operational use.

- The device transmits regular location messages and status updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is selected as UDP or TCP on the device; Plaspy accepts either and detects the tracker protocol.
- Geofence entries and exits configured on the device or in local tools are forwarded to Plaspy for notification.
- SOS button events are transmitted to the Plaspy endpoint so alerts are visible to operators.
- Successful configuration is confirmed by seeing the BD-3112 report into the Plaspy platform and by validating recent messages.

## Common Configuration Workflow

1. Access the official Orion BD-3112 configuration method or software provided by the manufacturer.
2. Locate the server or remote reporting settings section in the configuration tool.
3. Enter the Plaspy server target by using the domain d.plaspy.com or the IP address 54.85.159.138.
4. Set the port value to 8888 as required by Plaspy.
5. Choose UDP or TCP if the BD-3112 requires a transport selection for reporting.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart or power cycle the BD-3112 if the device requires a restart to apply network changes.
8. Validate that the device reports to Plaspy by checking the device presence and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and syntax for the BD-3112 vary by Orion firmware and the vendor configuration tool. Manufacturers often provide a Windows application, web interface, or SMS command set for initial setup. Because specific public commands for the BD-3112 are not provided here, follow the Orion documentation or the supplied configuration tool to set the server domain or IP and the port 8888, and to choose UDP or TCP.

If your Orion tool or documentation lists SMS or CLI commands, apply them in the order the manufacturer specifies and substitute any required placeholders such as APN or credentials with your provider values. If you need assistance interpreting manufacturer commands, consult Orion support documentation.

## Configuration Notes

- Firmware differences can change menu labels, command syntax, or available transport options for the BD-3112. Confirm firmware version before applying instructions.
- Choose TCP or UDP according to the device configuration interface; Plaspy accepts both and will detect the protocol automatically.
- All Plaspy devices use the same port 8888 which simplifies server setup across multiple tracker models.
- Test configuration in a safe environment and verify that geofence and SOS messages appear in Plaspy as expected.
- Always refer to official Orion documentation or vendor support for any device specific commands and for the most current configuration procedures.

## Why Use Plaspy with This Configuration

Using the Orion BD-3112 with Plaspy gives organizations a simple path to centralized visibility for location data, geofence events, and emergency SOS reporting. Pointing the tracker at the shared Plaspy endpoint and port lets operations teams receive consistent telemetry and integrate the BD-3112 into fleet monitoring and asset management workflows.

To learn more about the Plaspy platform and supported integrations visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer guidance verify the current information on the Orion website at http://www.oriontech.com.tw/
