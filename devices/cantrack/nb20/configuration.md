---
slug: /cantrack/nb20/configuration
id: nb20-configuration
sidebar_label: Configuration
title: CanTrack - NB20 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure CanTrack NB20 for use with Plaspy using shared server settings and practical setup steps
keywords:
  - CanTrack NB20 configuration
  - CanTrack NB20 setup
  - NB20 Plaspy configuration
  - NB20 GPS tracker setup
  - Plaspy tracker configuration
  - pet tracker configuration
  - CanTrack NB20 server setup
  - NB20 platform integration
  - GPS tracker Plaspy setup
  - CanTrack NB20 guide
---

# CanTrack - NB20 Configuration

This page summarizes the public configuration context for using the CanTrack NB20 tracker with the Plaspy platform. It explains the shared Plaspy server settings you will use when pointing an NB20 to Plaspy and outlines the practical steps installers and integrators typically follow to enable real time location, geofence alerts, and history playback for pet tracking use cases.

Plaspy uses a common server endpoint and port across supported devices and automatically detects the correct tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to align the NB20 with Plaspy server settings and workflows, then confirm device specific commands and menus with CanTrack documentation or their configuration tool.

## Configuration Overview

The goal of configuring the NB20 for Plaspy is to ensure the device can reliably send its hybrid positioning and status data to Plaspy so the device becomes visible in the platform for live maps, alerts, and history. Configuration focuses on setting the correct server endpoint, transport, and any carrier related parameters so the NB20 can uplink its telemetry over its cellular connection.

- Point the NB20 to the Plaspy server domain or IP so it knows where to send data
- Use port 8888 which is the common port Plaspy uses for all supported devices
- Select UDP or TCP transport on the device if the NB20 requires a transport choice
- Verify the device has an active Nano SIM or eSIM and sufficient cellular coverage
- Confirm the device is visible in your Plaspy account after configuration and test reporting

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port and Plaspy will automatically detect the protocol presented by the tracker once the device begins sending data to the listed endpoint.

## Typical Requirements Before Setup

- NB20 powered and charged with a functioning Nano SIM or eSIM provisioned for data
- Access to the official CanTrack configuration method such as their app, web portal, or SMS commands
- Cellular coverage for the chosen network and an active data plan for the device
- A Plaspy account or access to the Plaspy platform to validate that the device appears and reports
- Basic site readiness such as knowledge of device identifiers like IMEI to match the device in Plaspy
- A test plan to validate live location, geofence alerts, and low battery notifications

## How This Tracker Connects to Plaspy

When configured, the NB20 sends its location and status uplinks to the shared Plaspy server endpoint and port so the platform can present live telemetry, alerts, and history. Plaspy receives the data stream and identifies the tracker protocol automatically, allowing the NB20 to appear in maps and reporting without device specific server changes.

- The NB20 is configured to report to d.plaspy.com or directly to 54.85.159.138
- Data uplinks are sent to port 8888 which Plaspy uses for all devices
- Transport can be UDP or TCP depending on the NB20 configuration choice
- Plaspy automatically detects the tracker protocol and parses location and status messages
- Once data is received, Plaspy provides live location, geofence events, and history playback

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the NB20 such as the manufacturer app, web tool, or documented SMS command set.
2. Enter the Plaspy server as d.plaspy.com or as the server IP 54.85.159.138 in the server or host field.
3. Set the port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires selection of the transport protocol.
5. Apply or save the configuration using the CanTrack tool or command method.
6. Restart the NB20 if required by the manufacturer tool or firmware for network settings to take effect.
7. Validate that the device reports to Plaspy by checking your Plaspy account for live location, geofence notifications, or a recent uplink.

## Example Configuration Commands

The NB20 model configuration may be performed using CanTrack tools, their mobile app, or SMS and cloud commands depending on firmware and vendor tools. Exact commands and menu names can vary by firmware and regional device variant. Consult CanTrack documentation for the manufacturer specific command syntax and examples.

If you are using a command line or SMS based configuration method provided by CanTrack, follow the order recommended by the manufacturer, supplying the Plaspy server domain d.plaspy.com or IP 54.85.159.138 and port 8888. If placeholders such as {{apn}}, {{apnu}}, or {{apnp}} are required by the device command set, keep them as placeholders and replace them with your carrier APN values according to your mobile operator.

## Configuration Notes

- Firmware variations can change menus, command formats, and exact workflow. Verify commands against the device firmware version.
- Choose UDP or TCP based on the NB20 firmware options and any guidance from CanTrack; both transports are supported by Plaspy.
- For devices using eSIMs follow vendor and carrier instructions for profile activation before attempting server configuration.
- Remember that all devices in Plaspy use the same port and that Plaspy automatically detects the device protocol once uplinks arrive at the server.
- Keep a record of the device IMEI and any configuration changes to speed troubleshooting with the manufacturer or Plaspy support.

## Why Use Plaspy with This Configuration

Configuring the CanTrack NB20 to point at Plaspy provides a straightforward path to real time visibility, geofence alerts, and historical traces for pet tracking. Plaspy accepts uplinks on a shared server endpoint and port and performs automatic protocol detection, so once the NB20 is set to the Plaspy server and port the device typically appears and begins reporting without additional per device server changes.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and technical documents verify details at the manufacturer site https://www.cantrackgps.com/ because manufacturer setup methods and firmware behavior can change over time.
