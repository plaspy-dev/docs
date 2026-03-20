---
slug: /trackerking/ec33b/configuration
id: ec33b-configuration
sidebar_label: Configuration
title: TrackerKing - EC33B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TrackerKing EC33B showing Plaspy server settings and practical setup steps for platform integration
keywords:
  - TrackerKing EC33B configuration
  - TrackerKing EC33B setup
  - EC33B Plaspy configuration
  - EC33B server configuration
  - TrackerKing GPS tracker setup
  - EC33B tracking software configuration
  - EC33B platform setup
  - Plaspy tracker configuration
  - vehicle tracking EC33B
  - fleet tracking EC33B
---

# TrackerKing - EC33B Configuration

This page describes the public configuration context for using the TrackerKing EC33B with Plaspy. It summarizes the server settings Plaspy expects, outlines the typical setup workflow, and highlights the practical steps to prepare the EC33B for reliable communication with the Plaspy platform. The content is based on public device capabilities and the shared Plaspy server settings used across supported devices.

Plaspy uses shared server settings for all supported trackers and automatically detects the tracker protocol when messages arrive. Exact manufacturer side configuration steps can vary by firmware revision, hardware version, installation type, and the vendor's configuration tools, so follow the device documentation and vendor tools when performing configuration.

## Configuration Overview

Configuring the EC33B for Plaspy ensures the tracker reports telemetry, status and events to a single, shared Plaspy server endpoint so fleets and operators gain visibility in maps, reports and alerts. The steps below focus on preparing the tracker to establish a persistent data channel to Plaspy and validating that data arrives and is visible in the platform.

- Set the tracker to report to the Plaspy server endpoint so location and event messages reach the platform.
- Ensure the device uses the shared Plaspy port and a supported transport (UDP or TCP) so Plaspy can ingest the data.
- Validate APN and mobile connectivity so the EC33B can send data over the cellular network.
- Confirm device-specific settings such as protocol selection or USB configuration are correct for GT06 or compatible protocols.
- Test reporting and offline retransmission behavior to verify historical data is delivered after coverage interruptions.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the EC33B. Plaspy uses the same port for all supported devices and automatically detects the device protocol on incoming connections.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so explicit protocol selection on the platform side is not required

## Typical Requirements Before Setup

- Power the device with the required vehicle supply and confirm the EC33B is powered on and ready for configuration.
- Ensure the device has an active cellular SIM and a working data plan that supports the required APN for your network.
- Obtain the official TrackerKing configuration tool, USB interface, or vendor instructions required to change server, port and transport options.
- Know the device protocol (GT06 or other supported protocol) and confirm whether the device requires protocol selection during setup.
- Have access to the Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) to enter into the tracker configuration tool.
- Prepare to test device reporting and route playback in Plaspy after configuration to validate connectivity and offline retransmission.

## How This Tracker Connects to Plaspy

The EC33B is configured to send location, status, and alarm messages to the Plaspy server endpoint and port. Once configured to use the shared Plaspy endpoint, messages are received by Plaspy which detects the tracker protocol automatically and maps incoming telemetry to the appropriate device record in the platform.

- The EC33B reports GNSS location updates and telemetry to d.plaspy.com on port 8888 using either UDP or TCP.
- Event messages such as ACC, SOS, overspeed, and geofence alarms are transmitted to Plaspy and processed as alerts.
- Offline data cached by the EC33B is retransmitted to the Plaspy endpoint after coverage restoration so historical routes are preserved.
- Remote control and immobilizer commands issued from Plaspy are routed back to the device when the platform and tracker support remote command channels.
- Plaspy’s automatic protocol detection reduces the need to manually match protocol on the server side; the device simply must target the Plaspy endpoint and port.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or software (USB configuration tool or vendor-provided utility).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the EC33B requires explicit transport selection; select the transport best supported by your network and installer practice.
5. Configure APN and SIM settings as required so the device has mobile data connectivity.
6. Apply or save the configuration in the TrackerKing tool and perform any required device reboot or restart.
7. Validate that the EC33B is reporting to Plaspy by checking that recent location and event data appear in the platform.

## Example Configuration Commands

The exact configuration commands or SMS strings depend on tracker firmware and the TrackerKing configuration tool. Because manufacturer tools and firmware vary, exact commands are not included here. Use the official TrackerKing USB configuration software or vendor documentation to set:

- Server address to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP (if required)
- APN and mobile network credentials for your SIM

If your TrackerKing documentation or configuration UI provides command examples or SMS strings, follow those vendor-supplied commands and substitute the Plaspy server address and port as shown above.

## Configuration Notes

- Firmware differences can change command formats and configuration menus; confirm the EC33B firmware version before applying instructions.
- TCP vs UDP selection may affect delivery behavior over some networks; choose the transport based on network stability and your installer practice.
- Plaspy uses the same port for all devices which simplifies large scale deployments; only the server address and transport need to be set per device.
- APN, username, and password are SIM dependent; verify and enter correct APN values for the mobile operator used in the device.
- Always refer to the TrackerKing user guide for device-specific configuration steps, USB utility versions, and any model-specific precautions.

## Why Use Plaspy with This Configuration

Pairing the TrackerKing EC33B with Plaspy provides a practical route to unified fleet visibility, alerting and route history playback. The EC33B’s reliable telemetry stream, offline data caching, and vehicle-focused inputs combine with Plaspy’s ingestion and protocol detection to deliver an operational view useful to fleet managers, security teams and operations staff.

To learn more about Plaspy and how it can manage trackers like the EC33B, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes and manufacturer details, verify the official TrackerKing documentation at https://trackerking.cn/. Device setup methods and firmware behavior can change over time so confirming the current manufacturer information is recommended.
