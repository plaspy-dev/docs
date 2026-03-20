---
slug: /bce/fm_500_light/configuration
id: fm_500_light-configuration
sidebar_label: Configuration
title: BCE - FM-500 Light+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the BCE FM-500 Light+ to the Plaspy tracking server and validating device visibility
keywords:
  - BCE FM-500 Light+ configuration
  - FM-500 Light+ setup
  - BCE GPS tracker configuration
  - FM-500 Light+ Plaspy setup
  - GPS tracker server configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - object tracking device setup
  - BCE tracker integration
  - Plaspy device configuration
---

# BCE - FM-500 Light+ Configuration

This page documents the public configuration context for using the BCE FM-500 Light+ GPS tracker with the Plaspy platform. It focuses on the practical server settings and workflow required to point the device at Plaspy so the tracker can communicate its location and status to the platform. The guidance here is framed around Plaspy's public server values and general setup steps; it is not a replacement for the manufacturer's detailed manual.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page to understand the Plaspy-side requirements and the common configuration flow; consult the BCE documentation or dealer tools for device-specific configuration screens and commands.

## Configuration Overview

This configuration process prepares the FM-500 Light+ to send its tracked data (location, movement, and input/output events) to Plaspy using the public Plaspy server endpoint and port. The goal is to configure the tracker so Plaspy can automatically detect its protocol and present the device in the platform for monitoring and reporting.

- Point the FM-500 Light+ to the Plaspy server endpoint so data is routed to your Plaspy account.
- Use the shared Plaspy port so the platform can accept and auto-detect the device protocol.
- Validate GSM connectivity and APN settings so the tracker can transmit over the mobile network.
- Save and apply the configuration through the BCE configuration tool or supported setup method.
- Restart the device when required and verify the device becomes visible in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Plaspy automatically detects the device tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered FM-500 Light+ with working GPS and GSM antennas connected where applicable.
- An active SIM card with data enabled and APN settings configured for the mobile network.
- Access to the BCE manufacturer configuration method or dealer software to change server and port settings.
- Knowledge of the device firmware version and any vendor-specific configuration options.
- A reliable network connection to validate that the tracker can reach d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the FM-500 Light+ uses its GSM connection to send positioning and device state information to the shared Plaspy server endpoint and port. Plaspy receives the incoming data stream and uses automatic protocol detection to interpret messages from supported tracker models.

- The tracker sends GPS/GLONASS position data and movement attributes to d.plaspy.com (54.85.159.138) on port 8888.
- Data may be transmitted over either UDP or TCP depending on the transport selected in the device configuration.
- Inputs, outputs, and other supported sensor states are included in the device reports that Plaspy parses.
- Plaspy uses the same port for all supported devices and will automatically detect the device protocol when data arrives.
- After successful configuration and a successful first packet, the device should appear in Plaspy for monitoring and alerting.

## Common Configuration Workflow

1. Access the official BCE FM-500 Light+ configuration method or vendor software provided by the manufacturer or dealer.
2. Locate the server or GPRS/connection settings section in the configuration tool.
3. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration changes within the BCE tool.
7. Restart the device if the tool or device requires a reboot to apply new network settings.
8. Validate that the device reports to Plaspy by checking for the device in the Plaspy platform and confirming incoming data.

## Example Configuration Commands

The FM-500 Light+ supports flexible configuration through manufacturer tools and vendor interfaces. Exact command syntax and configuration methods vary by firmware release and the BCE configuration utility you use. Because BCE provides several configuration interfaces, follow the official BCE documentation or the dealer tool to enter the Plaspy settings (d.plaspy.com or 54.85.159.138, port 8888, UDP/TCP). Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device sends data to the server.

## Configuration Notes

- Firmware versions and vendor tools can change available fields and command syntax; always confirm the appropriate fields for server, port, and transport in the BCE tool you are using.
- Choosing UDP vs TCP depends on installer preference and network conditions; both are accepted by Plaspy on port 8888 and Plaspy will auto-detect the protocol.
- Verify APN and SIM data connectivity before attempting to register the device with Plaspy to avoid false negatives during validation.
- After configuration, allow a few minutes for the first packets to reach d.plaspy.com and for Plaspy to detect and register the device.
- Keep a copy of the original device configuration and note any changes so you can revert if required.

## Why Use Plaspy with This Configuration

Using the BCE FM-500 Light+ with Plaspy provides a straightforward path to move device telemetry into a unified tracking platform. Organizations that need visibility into asset location, movement, and input/output states can benefit from configuring the tracker to report to Plaspy's shared server endpoint and port, enabling centralized monitoring, reporting, and event management.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup steps and technical references with BCE at http://www.bce.en/ before performing installations.
