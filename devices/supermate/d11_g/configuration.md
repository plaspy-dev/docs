---
slug: /supermate/d11_g/configuration
id: d11_g-configuration
sidebar_label: Configuration
title: Supermate - D11-G Configuration
sidebar_class_name: menu_item_tracker
description: Configure Supermate D11 GPS tracker to report to Plaspy using shared server settings and practical setup guidance
keywords:
  - Supermate D11-G configuration
  - Supermate D11-G setup
  - Supermate D11-G server configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking configuration
  - tracking platform integration
  - GPS device server settings
  - asset tracking setup
  - Supermate GPS platform setup
---

# Supermate - D11-G Configuration

This page covers the public configuration context for using the Supermate D11 GPS tracker with Plaspy. It explains the shared server settings Plaspy requires and gives practical guidance for preparing the D11 so it can communicate with the Plaspy platform. Use this page to understand the main steps needed before adding the device to Plaspy and to learn what to check on the device side.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The Supermate D11 is a portable tracker with real time tracking, geo fencing, and SOS features, so confirm the D11 firmware and the manufacturer documentation when you perform configuration actions.

## Configuration Overview

This configuration process prepares the D11 to send location and status data to Plaspy and ensures the device is visible and manageable from the Plaspy platform. The goal is to point the tracker at the Plaspy server, verify transport settings, and confirm that data arrives in the platform.

- Configure the tracker to report to the Plaspy server endpoint so location and event data arrive in your Plaspy account.
- Verify transport and connectivity so messages are received reliably by Plaspy.
- Validate the device is reporting after configuration so it becomes visible in the Plaspy system.
- Apply and save settings on the D11 using the official Supermate configuration method.
- Test common events like periodic location updates and SOS to confirm reporting behavior.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Supermate D11. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged or powered D11 unit ready for configuration and testing.
- Access to the official Supermate configuration method or software from the manufacturer.
- An active SIM card with data enabled if the D11 will use GSM data to send reports; confirm APN is set when required.
- Basic network connectivity to allow the device to reach the Plaspy endpoint d.plaspy.com or 54.85.159.138.
- Access to the Plaspy account where you will register or monitor the device so you can verify the device appears after setup.
- Manufacturer documentation or release notes for the D11 firmware version to confirm available settings and commands.

## How This Tracker Connects to Plaspy

When configured, the D11 sends location and event data to the Plaspy server endpoint and port. Plaspy receives the inbound messages and matches the tracker protocol automatically so minimal protocol selection is required on the server side.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Data and event reports are forwarded from the device over the chosen transport UDP or TCP.
- Plaspy matches the incoming messages to the correct protocol automatically.
- Successful configuration makes the tracker visible and reportable inside Plaspy for live monitoring and history.
- After configuration, validate both periodic location updates and critical events such as SOS or geofence alerts.

## Common Configuration Workflow

1. Access the official Supermate configuration method or software as provided by the manufacturer.
2. Locate the server or tracking center settings in the device configuration interface.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP as the transport if the device requires an explicit selection.
6. Configure APN or SIM related settings if the D11 uses GSM data to send messages, using your carrier values.
7. Apply or save the configuration and restart the device if the tool or firmware requires a reboot.
8. Validate that the device reports to Plaspy by checking visibility and live updates in your Plaspy account.

## Example Configuration Commands

The exact command set and syntax for the Supermate D11 depends on the manufacturer tool or firmware version. Because Supermate publishes configuration tools and command formats separately, the method may vary; consult the official Supermate configuration guide for the precise commands or SMS strings used to set server, port, transport, and APN values. If you have a manufacturer command list, apply the same server settings shown above: d.plaspy.com or 54.85.159.138 and port 8888 with UDP or TCP.

## Configuration Notes

- Firmware differences can change available configuration options and command formats; always check the Supermate D11 firmware notes.
- Choose UDP or TCP based on device capability and network reliability; Plaspy accepts both but behavior may vary by network conditions.
- If the device uses SMS or SMS based setup commands, follow Supermate instructions and confirm the server and port values are set correctly.
- Test configuration in a controlled environment before a full deployment to confirm reporting cadence and event behavior.
- Keep a record of applied settings and device identifiers so you can diagnose connectivity issues with Plaspy or the device vendor.

## Why Use Plaspy with This Configuration

Using the Supermate D11 with Plaspy provides a straightforward way to get asset location and event reporting into a unified platform. Configuring the tracker to report to the shared Plaspy server endpoint makes device onboarding consistent and simplifies fleet or asset visibility across mixed hardware.

To learn more about Plaspy visit https://www.plaspy.com and confirm device specific details and any manufacturer updates at the Supermate website http://www.gps-summit.com/. Manufacturer specifications, setup methods, and device behavior can change over time so verify the latest information on the official Supermate resources.
