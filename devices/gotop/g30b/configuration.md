---
slug: /gotop/g30b/configuration
id: g30b-configuration
sidebar_label: Configuration
title: GOTOP - G30B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G30B with Plaspy server settings and setup workflow for reliable tracking
keywords:
  - GOTOP G30B configuration
  - GOTOP G30B setup
  - G30B Plaspy configuration
  - GPS tracker server settings
  - vehicle tracking setup
  - asset tracking configuration
  - magnet mounted tracker setup
  - long standby GPS tracker
  - Plaspy server configuration
  - tracker protocol detection
---

# GOTOP - G30B Configuration

This page covers the public configuration context for using the Longtime GOTOP G30B tracker with Plaspy. It focuses on the practical server settings and the general steps required to point the device at Plaspy so the tracker can deliver location and event data to the platform for real time monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform level. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide together with the device manual and the official GOTOP resources.

## Configuration Overview

The goal of configuring the G30B for Plaspy is to prepare the tracker to communicate reliably with the Plaspy ingestion endpoint, validate connectivity, and enable visibility in the Plaspy platform. The process is typically straightforward: set the server address, confirm transport settings, save the device configuration, and verify that telemetry appears in Plaspy.

- Point the G30B to the Plaspy server endpoint so location and status packets are sent to the platform.
- Select the required transport (UDP or TCP) if the device configuration requires a choice.
- Set the device to use the shared Plaspy port so Plaspy receives all device traffic consistently.
- Save and apply the configuration on the device using the official manufacturer method.
- Validate successful reporting by confirming the tracker appears in Plaspy and sends expected position and alarm updates.

## Plaspy Server Settings

Set the device to report to the Plaspy server using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol so the platform can parse telemetry regardless of the device protocol variant

Note that Plaspy uses the same port for all supported devices which simplifies device configuration and makes it easier to standardize deployments.

## Typical Requirements Before Setup

- A G30B unit with sufficient battery charge for configuration and initial reporting.
- A working Micro SIM with an active data plan and network coverage appropriate for your deployment region.
- Access to the official GOTOP configuration method or software such as the device UART interface, manufacturer tool, or approved setup utility.
- Access to the device firmware documentation or user manual to locate the server and transport settings.
- A means to restart or power cycle the device after applying configuration changes.
- Network access for verification, for example a device that can reach the public internet so it can connect to d.plaspy.com

## How This Tracker Connects to Plaspy

Once configured, the G30B reports location and status to the Plaspy ingestion endpoint so the platform can display positions, trigger alerts, and record history. The tracker sends periodic telemetry packets to the shared server and port configured in the device settings.

- The device is configured to report to the shared Plaspy server endpoint and port listed above.
- Location updates and hybrid GNSS plus LBS position fixes are transmitted to Plaspy for map display and historical playback.
- Security events such as tamper or dismantle alarms are forwarded to Plaspy as event notifications.
- Battery level and device state information are included in telemetry so Plaspy can support maintenance planning and alerting.
- Plaspy receives telemetry over UDP or TCP and automatically detects the device protocol to decode packets.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software recommended by the manufacturer, for example the UART configuration interface or the vendor setup utility.
2. Locate the server settings section and enter either the domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the device port to 8888 which is the shared port used by all Plaspy devices.
4. Choose UDP or TCP if the device requires a transport selection based on your network preference.
5. Apply or save the configuration changes in the device tool or via the device interface.
6. Restart or power cycle the device if the manufacturer instructions indicate a reboot is required for changes to take effect.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and the device presence in the Plaspy platform.

## Example Configuration Commands

The G30B supports configuration via the manufacturer provided methods and tools. Exact configuration commands or SMS strings vary by firmware and vendor tool and are not included here as generic commands. Use the official GOTOP configuration utility or the device manual to apply the server domain or IP, set port 8888, and select UDP or TCP as required. If your unit supports serial or UART configuration, follow the vendor instructions for sending the server and transport settings through that interface.

If you have vendor supplied SMS or AT style commands from GOTOP, apply them in the order the manufacturer documents and preserve any placeholders such as APN values when required.

## Configuration Notes

- Firmware and hardware revisions can change available configuration options; verify the exact parameter names in your device manual.
- Choose UDP or TCP according to network reliability and carrier performance in your deployment area; Plaspy will accept either and detect the protocol automatically.
- Because Plaspy uses the same port for all devices, standardizing the port simplifies large scale deployments and troubleshooting.
- If configuring via UART, ensure you follow the manufacturer timing and serial settings documented by GOTOP.
- After configuration, confirm the device sends regular position updates and expected alarms to Plaspy before final installation.

## Why Use Plaspy with This Configuration

Using the G30B with Plaspy gives organizations a simple way to combine long standby, discreet magnet-mounted tracking hardware with a centralized platform for visibility and event management. The shared server settings and automatic protocol detection in Plaspy reduce configuration complexity and speed up deployments across a fleet of devices.

Learn more about Plaspy and how it manages device telemetry at https://www.plaspy.com. For the most current device specific setup commands, firmware behavior, and manufacturer instructions, verify details with GOTOP at https://www.gotop.cc/ as manufacturer specifications and setup methods can change over time.
