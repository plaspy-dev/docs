---
slug: /gotop/d08_4g/configuration
id: d08_4g-configuration
sidebar_label: Configuration
title: GOTOP - D08-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP D08 4G tracker setup and Plaspy compatibility using shared server settings
keywords:
  - GOTOP D08 4G configuration
  - GOTOP D08 4G setup
  - GOTOP D08 4G Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - OBD GPS tracker
  - 4G GPS tracker setup
  - tracker server configuration
  - tracking platform setup
---

# GOTOP - D08-4G Configuration

This page documents the public configuration context for using the GOTOP D08-4G tracker with Plaspy. It summarizes the practical server settings and the standard steps you will follow to point a D08-4G device at the Plaspy platform. The content is focused on the public integration details required to get position and event data flowing into Plaspy for live tracking and historical playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The D08-4G is an OBD mounted 4G tracker with 2G fallback and multi mode positioning, and this page explains how to configure it to report to the Plaspy endpoint using the common settings Plaspy requires.

## Configuration Overview

Preparing the D08-4G for Plaspy means configuring the device so it can reliably send location and alarm events to the Plaspy server and appear in your Plaspy account. The process centers on setting the tracker to use Plaspy's shared server endpoint and validating connectivity after installation.

- Configure the device to send telemetry to the Plaspy server endpoint.
- Verify cellular connectivity and an active SIM data plan for the tracker.
- Set the transport and port so packets reach the Plaspy platform.
- Confirm the device reports position and alarm events to Plaspy.
- Validate visibility in Plaspy and test typical alarm workflows like geofence and power loss.

## Plaspy Server Settings

Use the following public Plaspy server settings when you configure the device. Plaspy requires the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 for direct IP configuration if needed
- Port 8888 which Plaspy uses for all devices
- Transport support for UDP or TCP depending on the device option
- Plaspy automatically detects the tracker protocol so you can use the shared endpoint without manually selecting a protocol in the platform

## Typical Requirements Before Setup

- A D08-4G unit installed on the vehicle OBD port or prepared according to the installer guide
- An active SIM card with a data plan compatible with LTE and 2G fallback as required by local networks
- Access to the official GOTOP configuration method or software provided by the vendor
- Power to the tracker and, if applicable, a charged internal backup battery
- Firmware that is current enough to support remote reporting to custom server endpoints
- Access to your Plaspy account to verify device visibility after configuration

## How This Tracker Connects to Plaspy

The D08-4G transmits position updates and alarm events over cellular data to the Plaspy server endpoint and port. Once pointed at Plaspy, the device will stream telemetry for real time tracking and event driven alerts in the Plaspy platform.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the direct IP 54.85.159.138
- Data is sent to port 8888 which Plaspy uses consistently for all devices
- Transport may be UDP or TCP depending on device settings and network conditions
- Plaspy automatically detects and handles the tracker protocol so reported packets are parsed and displayed
- Position fixes and alarm events such as geofence or power failure are delivered to Plaspy for visualization and alerting

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software as provided by the manufacturer or vendor.
2. Locate the server or APN reporting settings in the device tool or SMS command list.
3. Enter the server domain d.plaspy.com or the direct IP 54.85.159.138 in the server field.
4. Set the port to 8888 which is used by Plaspy for all devices.
5. Choose UDP or TCP if the D08-4G requires a transport selection during configuration.
6. Apply or save the configuration and send any required commit command from the vendor tool.
7. Restart or power cycle the device if required by the manufacturer to activate the new settings.
8. Validate that the device reports to Plaspy by checking device status and recent position updates in your Plaspy account.

## Example Configuration Commands

The exact commands and configuration interface for the D08-4G depend on the manufacturer toolset and firmware version. GOTOP devices are commonly configured via the vendor web tool, desktop configuration utility, or SMS command set provided by the manufacturer. Use the vendor documentation or configuration utility to enter the Plaspy server domain or IP and port as shown in the Plaspy Server Settings section. If your vendor provides SMS commands for setting the server, follow that official command list rather than ad hoc commands.

## Configuration Notes

- Firmware versions and vendor tools vary by production batch and firmware release; always consult the GOTOP configuration guide for device specific instructions.
- Choose UDP or TCP based on network reliability and vendor recommendations; Plaspy accepts either transport on port 8888.
- Ensure the SIM has an active data plan and that the device can connect to LTE networks with 2G fallback as needed.
- Because Plaspy uses the same port for all devices, setting port 8888 is a required step for Plaspy compatibility.
- If you rely on SMS based configuration from the vendor, verify the exact SMS command format in GOTOP documentation before sending commands.

## Why Use Plaspy with This Configuration

Connecting the GOTOP D08-4G to Plaspy provides centralized visibility for fleet and vehicle tracking, combining the device's multi mode positioning and alarm capabilities with Plaspy's real time maps, event logging, and historical playback. This setup is helpful for operations that need consistent location reporting, geofence and alarm monitoring, and straightforward deployment across many vehicles using a common OBD form factor.

To learn more about Plaspy and how this integration can support your fleet visibility needs visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details check the official GOTOP documentation at https://www.gotop.cc/ as vendor instructions may change over time.
