---
slug: /falcom/fox_en/configuration
id: fox_en-configuration
sidebar_label: Configuration
title: Falcom - FOX-EN Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Falcom FOX-EN tracker to report to Plaspy using shared server settings and practical workflow
keywords:
  - Falcom FOX-EN configuration
  - FOX-EN setup for Plaspy
  - Falcom tracker configuration
  - FOX-EN server configuration
  - Falcom GPS tracker setup
  - vehicle tracking Falcom
  - FOX-EN integration Plaspy
  - tracker configuration Plaspy
  - Falcom FOX EN guide
  - GPS tracker FOX-EN
---

# Falcom - FOX-EN Configuration

This page covers the public configuration context for using the Falcom FOX-EN tracker with Plaspy. It collects the practical settings and workflow you will need to point a FOX-EN device at the Plaspy platform so the device can send status messages, alerts, and location reports to the Plaspy server endpoint. Use this guidance together with the FOX-EN product documentation and any vendor tools you have for the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for all compatible trackers. Exact manufacturer-side setup steps for the FOX-EN can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always confirm specific commands and menus with Falcom documentation or your reseller when needed.

## Configuration Overview

This configuration process prepares the FOX-EN to communicate reliably with Plaspy by setting the correct server endpoint, transport, and saving the device settings so the tracker reports to the platform for visibility and monitoring.

- Point the FOX-EN to the Plaspy server domain or IP and the shared port used by Plaspy
- Choose the transport mode required by the device (UDP or TCP) and save the selection
- Apply and persist configuration so the device will start reporting automatically
- Verify the device identity and confirm it is visible in Plaspy after reporting starts
- Use manufacturer tools or SMS commands as available to perform the configuration

## Plaspy Server Settings

Set the FOX-EN to report to the Plaspy server using the following public values:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Confirm the FOX-EN has power and is installed or connected according to the device installation guide
- Have the device identity available such as the IMEI or serial number for any platform registration or verification
- Ensure the device has a working SIM card capable of data or SMS if you will use TCP reporting or SMS configuration options
- Obtain access to the official Falcom configuration method such as a web tool, desktop software, or SMS command list
- Verify network coverage at the installation site so the device can reach the Plaspy server endpoint

## How This Tracker Connects to Plaspy

When configured, the FOX-EN sends location, status, and event reports to the shared Plaspy server endpoint and port so the device becomes visible and manageable within the Plaspy platform.

- Device reports are addressed to d.plaspy.com or directly to 54.85.159.138
- All reporting uses port 8888 as the Plaspy shared port
- The FOX-EN can use UDP or TCP transport depending on configuration choice
- Plaspy automatically detects the tracker protocol so the platform interprets the device messages correctly
- Once reporting begins the device appears in Plaspy for operational monitoring and event handling

## Common Configuration Workflow

1. Access the official Falcom configuration method or software provided for the FOX-EN (web interface, desktop tool, or SMS command set).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device to use port 8888, which is the port Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device requires an explicit selection.
5. Apply or save the configuration to persist the settings on the FOX-EN.
6. Restart the device if the manufacturer instructions require a reboot to apply network changes.
7. Validate that the device reports to Plaspy and appears in the platform; check for initial position or status messages.

## Example Configuration Commands

The exact commands and syntax for configuring the FOX-EN depend on the manufacturer's configuration interface and firmware. Some installations use SMS commands, others use Falcom configuration software or a serial/USB tool. Because methods vary by firmware and tool, consult the FOX-EN manual or Falcom support for the precise command set you should use.

If you have a vendor-provided command list or SMS command format, perform the configuration steps described in the previous workflow and use those platform-appropriate commands to set the server to d.plaspy.com (or 54.85.159.138) and port 8888, and to select UDP or TCP as required.

## Configuration Notes

- Firmware differences can change menu names, command syntax, and available settings; always check the FOX-EN firmware version and release notes before applying changes.
- Some installers prefer SMS-based setup for remote devices while others use local USB or network tools; use the method that matches your workflow and device capabilities.
- Choosing TCP versus UDP may affect delivery guarantees and behavior; select the transport mode that matches your operational requirements and device firmware recommendations.
- Because Plaspy automatically detects tracker protocols and uses the same port for all devices, focus on entering the correct server address and port on the FOX-EN.
- Keep a record of the device IMEI and the server settings applied for troubleshooting and ongoing maintenance.

## Why Use Plaspy with This Configuration

Configuring the Falcom FOX-EN to report to Plaspy gives organizations a consistent endpoint for collecting location, alert, and status data from their fleet. The shared server settings simplify deployment across multiple devices and help administrators validate connectivity quickly during installation and commissioning.

To learn more about Plaspy and how it handles device connectivity and fleet visibility visit https://www.plaspy.com. For the latest FOX-EN specific instructions, firmware information, and manufacturer tools verify details on the Falcom website https://www.falcom.de as manufacturer methods and firmware behavior can change over time.
