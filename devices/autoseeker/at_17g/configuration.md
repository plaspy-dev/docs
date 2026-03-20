---
slug: /autoseeker/at_17g/configuration
id: at_17g-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Autoseeker AT-17G with Plaspy compatibility including server settings and practical setup guidance
keywords:
  - Autoseeker AT-17G configuration
  - Autoseeker tracker setup
  - AT-17G Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - vehicle tracking setup
  - asset tracker configuration
  - fleet management tracker
  - AT-17G server settings
  - Autoseeker GPS setup
---

# Autoseeker - AT-17G Configuration

This page covers the public configuration context for using the Autoseeker AT-17G 4G GPS Asset Tracker with Plaspy. It summarizes the shared server settings Plaspy requires, practical setup guidance, and the typical steps an installer or fleet administrator will take to bring AT-17G devices online in Plaspy. The information here is intended as a practical complement to the device manual and Plaspy server details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the AT-17G for communication with Plaspy and refer to Autoseeker documentation for device-specific configuration interfaces or firmware behavior.

## Configuration Overview

Configuring the AT-17G for Plaspy is primarily about directing the device to the Plaspy server endpoint and confirming that the device can successfully transmit location and event data. Because Plaspy uses the same port for all supported devices and automatic protocol detection, the server endpoint and transport selection are the main values most installers must apply on the device.

- Point the AT-17G to the Plaspy server endpoint so location and telemetry reach the platform.
- Choose the appropriate transport (UDP or TCP) on the device if a transport option is required.
- Set the device port to the Plaspy port so incoming packets are routed correctly by the platform.
- Validate connectivity and device reporting in Plaspy to confirm visibility and correct protocol detection.
- Save and apply settings on the AT-17G, then confirm the device appears in Plaspy mapping and history views.

## Plaspy Server Settings

When configuring the AT-17G for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and powered AT-17G with completed initial device activation and battery charge.
- A working 4G SIM card and active cellular service if cellular connectivity is required for your deployment.
- Access to the official Autoseeker configuration method or software for the AT-17G (manufacturer web tool, configuration app, or dealer tool).
- Basic knowledge of whether the device firmware requires UDP or TCP to be set manually.
- A Plaspy account and access to the platform for validation of device reporting after configuration.
- A safe test environment where the device can be powered and observed while making configuration changes.

## How This Tracker Connects to Plaspy

The AT-17G sends its position updates and event telemetry to the Plaspy server endpoint so fleet managers and security teams can view location, alerts, and history. The tracker is configured to report to the shared Plaspy server endpoint and port, and Plaspy will detect the tracker protocol automatically once data arrives.

- The device transmits GPS fixes and telemetry to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be either UDP or TCP depending on the device configuration; both are supported by Plaspy.
- Plaspy automatically detects the tracker protocol when the device begins sending data.
- Once reporting begins, location, movement alerts, and battery status become visible in Plaspy.
- Use Plaspy dashboards and history to confirm correct reporting and event handling for the AT-17G.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-17G as documented by the manufacturer.
2. Locate the server or APN/server settings section in the device configuration tool.
3. Enter d.plaspy.com or 54.85.159.138 as the server address according to your preference or tool requirements.
4. Set the device port to 8888 (Plaspy uses the same port for all devices).
5. If the device requires a transport selection, choose UDP or TCP depending on installation needs.
6. Apply or save the configuration on the AT-17G using the manufacturer tool.
7. Restart the device if required by the firmware or configuration tool to apply settings.
8. Validate that the device reports to Plaspy by checking device activity, location updates, and event logs in the platform.

## Example Configuration Commands

The exact configuration commands or SMS strings for AT-17G depend on the Autoseeker firmware and configuration interface. Because manufacturer tools and firmware versions vary, consult the Autoseeker configuration guide for any device-specific commands. If you use an SMS or terminal command method provided by Autoseeker, apply the server settings shown above (d.plaspy.com or 54.85.159.138 and port 8888) and preserve any placeholder values the manufacturer requires.

If manufacturer-provided command examples are available in your device documentation, follow them closely and use the Plaspy server details from this page when substituting server, IP, and port values.

## Configuration Notes

- Firmware and configuration tool differences can change the exact names of fields for server address, IP, transport, and port; always follow the AT-17G manual for field names.
- Choosing UDP or TCP can affect delivery characteristics; Plaspy supports both and will detect the protocol automatically once the device sends data.
- All devices in Plaspy use the same port, so be consistent and set port 8888 on every unit.
- For remote or covert installations, confirm the device has adequate cellular signal and battery charge before final mounting.
- Consult Autoseeker release notes when troubleshooting unexpected behavior after configuration changes.

## Why Use Plaspy with This Configuration

Using the AT-17G with Plaspy provides a straightforward path to centralized location visibility, event reporting, and history playback for fleets and high-value assets. The AT-17G’s long battery life and rugged mounting make it suitable for extended deployments, and directing telemetry to Plaspy enables automated alerts and operational oversight across your organization.

To learn more about Plaspy and how to integrate GPS trackers into a single management platform, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and official Autoseeker documentation, verify current information at https://autoseekergps.com/ .
