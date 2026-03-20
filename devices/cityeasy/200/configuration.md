---
slug: /cityeasy/200/configuration
id: 200-configuration
sidebar_label: Configuration
title: Cityeasy - 200 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Cityeasy 200 to report to Plaspy using shared server settings and practical setup guidance
keywords:
  - Cityeasy 200 configuration
  - Cityeasy 200 setup
  - Cityeasy 200 Plaspy
  - Cityeasy 200 server configuration
  - Cityeasy GPS tracker setup
  - Cityeasy tracker configuration guide
  - vehicle tracking configuration
  - fleet GPS setup
  - Plaspy device configuration
  - GPS tracker integration
---

# Cityeasy - 200 Configuration

This page documents the public configuration context for using the Cityeasy 200 GPS tracker with the Plaspy platform. It focuses on the shared server settings and the practical steps you will follow when pointing a Cityeasy 200 device to Plaspy for real time visibility and reporting. Use this guide together with the device manual and the manufacturer's tools.

Plaspy uses a common server endpoint and port across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor software. Follow the high level workflow below and confirm any device-specific commands or menus with Cityeasy documentation.

## Configuration Overview

This configuration prepares the Cityeasy 200 to send position and event data to Plaspy so the device appears and reports correctly in the platform. The process is primarily about telling the tracker where to send data, selecting the transport if required, saving the settings, and validating visibility in Plaspy.

- Point the tracker to the Plaspy server endpoint so position and alerts arrive at Plaspy.
- Configure the device transport option to UDP or TCP if the device requires explicit selection.
- Set the shared Plaspy port so the tracker connects on the same port used by all Plaspy devices.
- Save and apply settings through the Cityeasy configuration tool or SMS interface as provided by the manufacturer.
- Confirm data arrives in Plaspy and that movement, geofence, and alert events are visible.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Cityeasy 200. These values are used across all devices supported by Plaspy and are required for correct routing.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured to use UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices which simplifies device-side configuration.

## Typical Requirements Before Setup

- Device powered and installed according to the Cityeasy 200 installation guide.
- Access to the Cityeasy configuration method provided by the vendor such as a web tool, desktop software, or SMS command list.
- A working SIM or cellular connectivity if the tracker depends on mobile network services as described in the Cityeasy documentation.
- Knowledge of any APN or connectivity placeholders required by your provider if applicable.
- A Plaspy account or platform access to verify the device appears and reports after configuration.
- A test environment or controlled vehicle for validating initial connectivity and alerts.

## How This Tracker Connects to Plaspy

When configured, the Cityeasy 200 sends position updates and event alerts to the Plaspy endpoint so the device can be monitored in the platform. The key is directing the tracker to the shared Plaspy server and port so Plaspy receives it and applies automatic protocol handling.

- The tracker reports location and status to d.plaspy.com or 54.85.159.138.
- Data is sent to port 8888 which is used for all Plaspy devices.
- Choose UDP or TCP on the device if a transport selection is required.
- Plaspy inspects incoming connections and automatically detects the tracker protocol.
- Once reporting is validated, geofence, vibration, displacement, and route history events are visible in Plaspy.

## Common Configuration Workflow

1. Access the official Cityeasy 200 configuration method provided by the manufacturer, such as the vendor software, configuration portal, or documented SMS commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the port to 8888 in the server configuration.
4. Choose UDP or TCP on the device if a transport selection is required by the configuration interface.
5. Apply or save the configuration according to the manufacturer tool or command response.
6. Restart the device if the manufacturer instructions indicate a reboot is required for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device list and live data in the Plaspy platform.

## Example Configuration Commands

The Cityeasy 200 may be configured using the manufacturer tools or SMS commands supplied by Cityeasy. Exact commands and syntax vary by firmware and vendor tool. Because manufacturer command sets are not included here, consult the Cityeasy manual for precise command formats and use the general server settings from the Plaspy section above when composing commands.

If you have a Cityeasy command list from the manufacturer, apply the server domain or IP and port as shown in the workflow. Preserve placeholders provided by the vendor such as [apn] or similar when present and replace them with operator specific values.

## Configuration Notes

- Firmware and hardware revisions can change available menu fields and SMS command syntax; always verify against the device manual.
- If the device supports both UDP and TCP transports, test both if you experience delivery issues. Plaspy supports either transport on port 8888 and will detect the protocol automatically.
- Use a controlled test before mass deployment to confirm geofence, vibration, and displacement alerts arrive and are interpreted by Plaspy as expected.
- Keep manufacturer tools and device firmware up to date when recommended by Cityeasy, and record the settings used for each device installation.

## Why Use Plaspy with This Configuration

Using the Cityeasy 200 with Plaspy provides a straightforward way to collect position data and essential vehicle alerts in a single platform. Pointing the tracker to the shared Plaspy endpoint ensures consistent handling of telemetry so fleet managers and vehicle owners can monitor real time locations, review historical routes, and receive movement or geofence alerts in one place.

To learn more about Plaspy and how it manages incoming device data visit https://www.plaspy.com. Please verify the latest device specific setup details and any firmware instructions with the manufacturer at the official Cityeasy documentation or support channels as vendor information can change over time.
