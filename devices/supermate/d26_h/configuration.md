---
slug: /supermate/d26_h/configuration
id: d26_h-configuration
sidebar_label: Configuration
title: Supermate - D26-H Configuration
sidebar_class_name: menu_item_tracker
description: Configure Supermate D26 H for use with Plaspy with practical server settings and step by step setup guidance
keywords:
  - Supermate D26-H configuration
  - Supermate D26-H setup
  - Supermate D26-H Plaspy
  - Supermate GPS tracker configuration
  - D26-H server settings
  - D26-H setup guide
  - Plaspy tracker configuration
  - vehicle tracking D26-H
  - asset tracking D26-H
  - Supermate tracker setup
---

# Supermate - D26-H Configuration

This page documents the public configuration context for using the Supermate D26 H tracker with Plaspy. It explains the shared Plaspy server endpoint, the port and transport options supported by Plaspy, and the practical steps you should follow to prepare the D26 H for reliable reporting to the platform. The information here focuses on the public settings Plaspy requires and how to apply them using the official manufacturer configuration methods.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page as a practical guide and verify any device specific behavior with the official Supermate documentation.

## Configuration Overview

The aim of this configuration process is to prepare the Supermate D26 H to communicate reliably with the Plaspy platform so location and device events appear in your Plaspy account. Configure the network endpoint and transport on the device, save the changes, and validate that the device connects to Plaspy.

- Enter the Plaspy server endpoint so the D26 H sends its packets to Plaspy for processing.
- Configure the device port and transport option so packets arrive on the Plaspy listening port.
- Save or apply the manufacturer configuration and restart the device when required to activate settings.
- Validate connectivity and device visibility in Plaspy by confirming the device reports successfully.
- Keep manufacturer firmware notes and revision details handy to troubleshoot differences in behavior.

## Plaspy Server Settings

Configure the Supermate D26 H to report to the Plaspy server using these public settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port, port 8888, and Plaspy will detect the tracker protocol automatically when the device connects.

## Typical Requirements Before Setup

- A powered and reachable Supermate D26 H device with access to the manufacturer configuration method.
- Access to the official Supermate configuration tool or instructions from the device vendor.
- A Plaspy account or access to the Plaspy platform to confirm the device appears online after configuration.
- Device identifier information such as the IMEI or device ID to register or locate the tracker in Plaspy.
- A stable network path from the device to the Plaspy server endpoint so outgoing packets can reach d.plaspy.com or 54.85.159.138.
- Basic administrative access to apply configuration changes and restart the device when required.

## How This Tracker Connects to Plaspy

When configured, the Supermate D26 H sends location and status packets to the Plaspy server endpoint and port. Plaspy receives these packets, automatically detects the protocol, and maps the device to your account so live tracking and alerts are available in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint at d.plaspy.com or the equivalent IP 54.85.159.138.
- Packets are sent to Plaspy on port 8888.
- Choose UDP or TCP for the transport if the device requires an explicit selection.
- Plaspy automatically detects the tracker protocol and interprets incoming messages for display and processing.
- Once reporting, the device provides visibility and event updates inside the Plaspy platform.

## Common Configuration Workflow

1. Access the official Supermate configuration method or software provided by the manufacturer.
2. Locate the reporting or server settings section for remote server configuration.
3. Enter the server address as d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888.
5. Choose the transport protocol UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration and restart the device if the manufacturer instructions require it.
7. Validate that the device appears and reports correctly in Plaspy by checking device online status and recent location updates.

## Example Configuration Commands

The exact commands or configuration screens vary by Supermate firmware and the vendor tool you are using. Supermate devices may use a PC configuration utility, a web interface, or SMS based commands depending on the specific model and regional firmware. Consult the official Supermate documentation or configuration tool for exact command syntax and user interface steps. Where applicable, follow the manufacturer provided command format and replace placeholders in commands with your specific values.

## Configuration Notes

- Firmware and tool differences can change the exact menu names and command formats used to set the server address and port.
- If your device requires choosing TCP or UDP explicitly, select the one that matches your installation needs; Plaspy will detect the protocol automatically when packets arrive.
- All devices in Plaspy report to port 8888, so ensure that any intermediate network equipment does not block outbound traffic to that port.
- Keep the device identifier such as IMEI available to locate and confirm the tracker in your Plaspy account after configuration.
- Always verify settings against the official Supermate documentation for your device firmware version.

## Why Use Plaspy with This Configuration

Using the Supermate D26 H with Plaspy gives organizations and individuals a straightforward path to real time visibility and operational monitoring. The D26 H's compact design and feature set combined with Plaspy's shared server settings make integration practical for asset tracking, fleet oversight, and location based alerting without needing per device server customization.

To learn more about Plaspy and how the platform manages device connectivity and tracking, visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer support resources verify details on the Supermate website http://www.gps-summit.com/ since manufacturer specifications and setup methods may change over time.
