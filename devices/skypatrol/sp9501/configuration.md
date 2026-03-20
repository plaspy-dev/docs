---
slug: /skypatrol/sp9501/configuration
id: sp9501-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9501 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure SkyPatrol SP9501 with Plaspy server settings and practical setup steps for reliable asset tracking
keywords:
  - SkyPatrol SP9501 configuration
  - SkyPatrol SP9501 setup
  - SP9501 Plaspy configuration
  - SP9501 server configuration
  - SP9501 GPS tracker setup
  - asset tracker configuration guide
  - CDMA asset tracker setup
  - fleet tracking SP9501
  - Plaspy tracker configuration
  - tracking platform setup
---

# SkyPatrol - SP9501 Configuration

This page covers the public configuration context for using the SkyPatrol SP9501 tracker with Plaspy. It summarizes the shared Plaspy server settings you will point the SP9501 at and explains the practical steps needed to prepare the device for reporting into the Plaspy platform. The SP9501 is a CDMA asset tracker designed for long deployments, with wireless charging and long battery life, and this guide focuses on the public integration points relevant to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and any vendor configuration tools the installer uses. Use this page to apply the public Plaspy settings and to understand the typical workflow, and always verify device specific instructions with the SkyPatrol documentation.

## Configuration Overview

This configuration process prepares the SP9501 to communicate with the Plaspy backend so the device appears and reports reliably in the Plaspy platform. The focus is on pointing the tracker to the Plaspy server endpoint, selecting the appropriate transport if required, and confirming that the device reports successfully.

- Point the tracker to the Plaspy server endpoint so data is delivered to Plaspy.
- Select the transport protocol on the device if the SP9501 requires a choice between UDP and TCP.
- Save and apply settings on the unit or via the manufacturer tool to persist the server details.
- Restart the tracker if required by the device workflow to begin reporting.
- Validate that the device is visible and sending updates to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SP9501. These are the values to enter in the SkyPatrol configuration tool or device interface.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure UDP or TCP on port 8888 if the tracker requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Fully charged or otherwise powered SP9501 device and access to its configuration interface
- Cellular network coverage appropriate for CDMA devices in the deployment area
- Access to the official SkyPatrol configuration method or software used by your vendor or installer
- Device identifier information such as the unit serial number or IMEI to register or verify the device in Plaspy
- A Plaspy account or platform access to confirm the device appears and reports after configuration

## How This Tracker Connects to Plaspy

The SP9501 is configured to send its location and status reports to the shared Plaspy server endpoint and port. Plaspy receives those messages and associates them with the device record so location, movement, and event visibility become available in the platform.

- The tracker sends periodic location and status messages to d.plaspy.com or 54.85.159.138
- Messages are sent to port 8888 using the configured transport protocol
- Plaspy automatically detects the protocol used by the tracker so no protocol selection is required on the platform side
- Once reporting begins, Plaspy processes the incoming messages and makes device data available in the platform
- Monitoring and alerts can then be configured inside Plaspy based on the incoming telemetry

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software provided with the SP9501.
2. Locate the server settings or remote reporting section in the manufacturer tool.
3. Enter the Plaspy server as d.plaspy.com or as the server IP 54.85.159.138.
4. Set the port to 8888.
5. Choose UDP or TCP on port 8888 if the device interface requires you to select a transport protocol.
6. Apply or save the configuration to the tracker using the manufacturer tool or device interface.
7. Restart the device if the SP9501 workflow requires a reboot to activate new settings.
8. Validate in Plaspy that the device appears and is reporting as expected.

## Example Configuration Commands

The SP9501 may be configured using the official SkyPatrol configuration tool or vendor provided interface. Exact commands and formats depend on the manufacturer software and the device firmware, so the command set is not included here. If you use SMS or a command line style configuration method provided by SkyPatrol, follow the manufacturer documentation for the exact syntax and order.

## Configuration Notes

- Firmware and hardware revisions can change configuration menus and required command syntax; always verify the current SkyPatrol documentation for your SP9501 unit.
- If the device interface requires a choice between TCP and UDP, either option will work with Plaspy as long as the tracker sends to d.plaspy.com or 54.85.159.138 on port 8888; Plaspy auto detects the incoming protocol.
- Installer practices vary by vendor. Use the official SkyPatrol configuration tool or instructions from your supplier when performing setup.
- Confirm cellular coverage for CDMA networks at the installation site when planning long term deployments.
- Wireless charging and battery management features of the SP9501 can help maintain multi year deployments; ensure the device is charged and configured according to the manufacturer recommendations.

## Why Use Plaspy with This Configuration

Using the SkyPatrol SP9501 with Plaspy provides a straightforward way to get durable, long term asset tracking data into a single platform. For teams managing fleets, equipment, or high value assets, configuring the SP9501 to report to Plaspy gives centralized visibility and a consistent data flow for monitoring and operational decision making.

To learn more about Plaspy, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions on the SkyPatrol website https://www.skypatrol.com/ before performing a deployment.
