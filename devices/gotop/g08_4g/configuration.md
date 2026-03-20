---
slug: /gotop/g08_4g/configuration
id: g08_4g-configuration
sidebar_label: Configuration
title: GOTOP - G08-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G08-4G setup with Plaspy including required server settings and practical integration workflow
keywords:
  - GOTOP G08-4G configuration
  - GOTOP G08-4G setup
  - GOTOP G08-4G server configuration
  - GOTOP G08-4G Plaspy
  - GOTOP G08-4G GPS tracker
  - GOTOP OBD tracker setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - vehicle tracking configuration
  - fleet tracking setup
---

# GOTOP - G08-4G Configuration

This page documents the public configuration context for using the GOTOP G08-4G OBD tracker with Plaspy. It focuses on the practical server settings and workflow required to register the device to Plaspy for real time tracking, alarms, and route history. Use this guidance together with the device manufacturer documentation for device specific menus and commands.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The content below emphasizes the Plaspy endpoint and common setup actions you will perform when preparing the G08-4G for live reporting to Plaspy.

## Configuration Overview

This configuration prepares the G08-4G OBD tracker to send location, status, and alarm messages to the Plaspy platform so devices become visible and manageable in your Plaspy account. The focus is on configuring the device to point at the Plaspy server, choosing an appropriate transport, and validating that reports arrive correctly.

- Point the device to the Plaspy endpoint so GPS and alarm data flow to the platform.
- Ensure the device has an active cellular data path or SMS capability for fallback reporting.
- Select UDP or TCP transport if the device requires a transport choice and set the Plaspy port.
- Save or apply configuration and restart the device when required by the manufacturer tool.
- Confirm the device appears in Plaspy and verify location and alarm messages are received.
- Keep manufacturer documentation at hand for model specific commands or GUI actions.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port to install the G08-4G and confirm power
- An active SIM card with data enabled or SMS capability if the device will use SMS fallback
- Access to the official GOTOP configuration method such as the manufacturer app, web portal, or SMS command list
- A Plaspy account and the ability to verify the device shows as active in the Plaspy dashboard
- A brief on-site connectivity test plan to confirm GNSS lock and server reporting after configuration
- Ability to restart the device after applying settings if the manufacturer procedure requires it

## How This Tracker Connects to Plaspy

The G08-4G sends location, status, and alarm data to the shared Plaspy server endpoint and port so the device becomes visible in Plaspy dashboards and reporting tools. Plaspy receives and parses the tracker protocol automatically, allowing real time tracking and event notifications without per device port changes.

- The tracker transmits position and telemetry over 4G data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- If configured for SMS fallback, alarms or critical updates can also be delivered to the platform per the manufacturer method
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record
- Use UDP or TCP on port 8888 depending on device preferences; Plaspy supports both transports
- Once reporting begins, Plaspy records trip history, events, and alarm notifications for operational monitoring

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the G08-4G (manufacturer app, web tool, or SMS command set).
2. In the device server or APN settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the device server port to 8888 (Plaspy uses the same port for all supported devices).
4. If the device requires a transport selection choose UDP or TCP as supported and appropriate.
5. Apply or save the configuration in the manufacturer tool or send the configuration SMS commands as documented by GOTOP.
6. Restart the G08-4G if the manufacturer instructions require a reboot to activate the new settings.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for a live update and confirming location and alarm messages.

## Example Configuration Commands

The exact configuration commands and their syntax depend on GOTOP firmware and the configuration channel you use (manufacturer app, web portal, or SMS). Because commands vary by region and firmware, include this manufacturer documentation step in your workflow and follow the GOTOP command reference for precise syntax.

Common manufacturer configuration approaches you may encounter:
- App or web UI where you enter server address and port fields directly
- SMS commands that update server, port, and APN values using the device command set
- Local USB or serial tools provided by the vendor for advanced configuration

If you plan to use SMS commands, consult the GOTOP command list for exact phrases. Placeholders you may see in command examples are typically used for APN values such as [apn], [apnu], or [apnp] and should be replaced with your SIM provider values when instructed by the manufacturer guide.

## Configuration Notes

- Manufacturer firmware versions and tool interfaces may change how server and transport settings are entered; always check the GOTOP user guide for the G08-4G.
- Choosing TCP or UDP depends on the device option set; Plaspy supports both and performs automatic protocol detection on incoming connections.
- All devices in Plaspy use the same port 8888 which simplifies configuration when deploying many units.
- Test reporting after configuration by confirming GNSS position updates and at least one alarm or status message in Plaspy.
- If you must use SMS for initial configuration or fallback, keep your SIM provider APN and credentials ready for insertion where required.

## Why Use Plaspy with This Configuration

Using the GOTOP G08-4G with Plaspy gives fleet operators and vehicle owners straightforward real time tracking and alarm visibility without complex wiring. The plug and play OBD form factor combined with Plaspy server configuration lets deployment teams configure many vehicles consistently using the shared server endpoint and port.

To learn more about Plaspy and how it integrates with GPS trackers like the G08-4G visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions on the official GOTOP website https://www.gotop.cc/.
