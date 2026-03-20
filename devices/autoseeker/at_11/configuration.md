---
slug: /autoseeker/at_11/configuration
id: at_11-configuration
sidebar_label: Configuration
title: Autoseeker - AT-11 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Autoseeker AT-11 GPS tracker for use with Plaspy servers and platform visibility
keywords:
  - Autoseeker AT-11 configuration
  - Autoseeker AT-11 setup
  - Autoseeker AT-11 Plaspy
  - AT-11 GPS tracker configuration
  - AT-11 server settings
  - AT-11 fleet tracking setup
  - Plaspy tracker configuration
  - Plaspy server compatibility
  - vehicle tracker AT-11 configuration
  - GPS tracker platform setup
---

# Autoseeker - AT-11 Configuration

This page provides the public configuration context for using the Autoseeker AT-11 4G Car Charger GPS Tracker with Plaspy. It focuses on the shared server settings and practical steps required to point the AT-11 at Plaspy so the device can report location, alarms, and telemetry into the platform. Use this guide alongside the vendor documentation to complete your setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The AT-11 is a compact plug-and-play cigarette-lighter tracker with GPS plus Beidou positioning, global 4G connectivity, an internal backup battery, and an integrated mobile phone charger, and this document shows how to apply the public Plaspy endpoint and port to enable visibility in Plaspy.

## Configuration Overview

The goal of configuring the AT-11 for Plaspy is to direct the device to the Plaspy server endpoint and ensure ongoing connectivity so location and event data are visible in the platform. Setup prepares the tracker to send real-time GNSS positions and alarms to Plaspy and validates that reporting and alerts appear as expected.

- Point the AT-11 at the Plaspy server endpoint and confirm transport settings.
- Ensure the device has power, an active SIM and network access for real-time reporting.
- Save and apply the configuration on the device using the manufacturer method.
- Validate that location, alarm, and device status updates arrive in Plaspy.
- Use Plaspy dashboards to confirm geo-fence, overspeed, unplug, and other alarms are received.

## Plaspy Server Settings

When configuring the AT-11 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint and port to which the AT-11 should report. Use either the domain or the IP when entering server information in the device configuration tool. Remember that all devices in Plaspy use the same port and that protocol detection is automatic on the Plaspy side.

## Typical Requirements Before Setup

- Ensure the AT-11 is powered and inserted into the vehicle cigarette-lighter socket or otherwise powered according to the manufacturer instructions.
- Verify a valid Nano SIM with an active data plan is installed and the device has cellular network connectivity.
- Have access to the official manufacturer configuration method or software used to set server and transport settings.
- Confirm firmware and hardware revision information if available, as configuration menus and commands can vary by version.
- Prepare device identifiers such as IMEI or serial number so you can locate and verify the device in Plaspy after setup.

## How This Tracker Connects to Plaspy

The AT-11 transmits GNSS positions and event telemetry to the Plaspy server endpoint so that the device appears on live maps and generates alarms and history in the Plaspy platform. Configuration ensures the device forwards location, status, and alarm events to the shared Plaspy server and port.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- Data is sent to port 8888 which Plaspy uses for all supported devices.
- Transport may be set to UDP or TCP depending on the device configuration options; Plaspy performs automatic protocol detection.
- Reported data includes position updates, alarm events such as unplug or overspeed, and device status needed for monitoring.
- Once configured and online, the device becomes visible in Plaspy for live tracking and historical playback.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AT-11 as provided by the vendor.
2. Ensure the device is powered and has an active Nano SIM and network connectivity.
3. Enter the Plaspy server address by using either d.plaspy.com or 54.85.159.138 in the server field.
4. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
5. Choose the transport type UDP or TCP if the device requires explicit transport selection.
6. Apply or save the configuration according to the manufacturer tool and confirm the settings were written to the device.
7. Restart or power cycle the AT-11 if required by the vendor instructions to activate the new configuration.
8. Validate that the device reports to Plaspy and that location and event data appear in the platform.

## Example Configuration Commands

The AT-11 is typically configured using the vendor web platform or the manufacturer configuration tool provided with the device. Exact commands or SMS formats can vary by firmware and tool. Because manufacturer methods differ, consult the official Autoseeker configuration guide or the vendor tool for the precise command set required to set the server and port.

If your vendor tool accepts direct server entries, use the Plaspy values shown in the Plaspy Server Settings section and follow the vendor tool steps to save and apply.

## Configuration Notes

- Configuration menus, command syntaxes, and remote methods vary by firmware and hardware revision; always check the device firmware version before making changes.
- Choose UDP or TCP according to the device option; Plaspy will automatically detect the protocol when data arrives on port 8888.
- The AT-11 supports plug-and-play installation but may require a restart or reconnection after server settings are applied.
- Unplug and power-failure alarms are reported by the AT-11 and will appear in Plaspy once the server and port are correct and the device is online.
- Always follow the manufacturer guidance for SIM provisioning and APN settings when setting up cellular connectivity if that information is required by the vendor tool.

## Why Use Plaspy with This Configuration

Using the AT-11 with Plaspy gives organizations and vehicle owners a straightforward path to real-time position tracking, alarm handling, and historical reporting without complex per-device server management. Pointing the AT-11 at the shared Plaspy server endpoint and port enables quick integration so location, overspeed, geo-fence, and unplug alerts are available in the Plaspy platform for monitoring and operational workflows.

To learn more about Plaspy and its fleet management capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer instructions verify details on the official Autoseeker website https://autoseekergps.com/ as manufacturer procedures and firmware behavior can change over time.
