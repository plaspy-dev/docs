---
slug: /cantrack/c32/configuration
id: c32-configuration
sidebar_label: Configuration
title: CanTrack - C32 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring CanTrack C32 with Plaspy server settings and practical setup steps for real time tracking
keywords:
  - CanTrack C32 configuration
  - CanTrack C32 setup
  - CanTrack C32 Plaspy
  - C32 GPS tracker configuration
  - CanTrack vehicle tracker setup
  - Plaspy server configuration
  - GPS tracker server settings
  - vehicle tracking platform setup
  - C32 tracking software configuration
  - CanTrack GPS platform setup
---

# CanTrack - C32 Configuration

This page covers the public configuration context for using the CanTrack C32 tracker with Plaspy. It explains the practical server settings and the typical manufacturer-side steps you will follow to point a C32 at the Plaspy platform, and it uses the C32 product description as the basis for configuration guidance.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat this page as a practical integration guide rather than a replacement for CanTrack documentation.

## Configuration Overview

Configuring the CanTrack C32 for Plaspy prepares the device to send location and status data to Plaspy so the device becomes visible and manageable in the platform. The goal is to ensure the tracker is powered, reachable by the chosen connectivity method, and has the correct Plaspy server address and port so data arrives reliably.

- Point the device to the Plaspy server endpoint so telemetry and events are routed to Plaspy.
- Select the transport type (UDP or TCP) if the device requires a transport selection.
- Set the shared Plaspy port so the device and platform communicate on the expected channel.
- Save and apply the configuration on the C32 using the manufacturer tool or SMS method.
- Verify connectivity and that real time location and events appear in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: The C32 may be configured to use UDP or TCP on port 8888
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- The CanTrack C32 is powered and accessible for configuration (installed or temporarily powered on a bench)
- Access to the official CanTrack configuration method such as the vendor's software, web tool, or SMS command set
- The device IMEI or identifier recorded for linking the device in the platform if required by your workflow
- Network connectivity appropriate for the installed tracker (ensure the installation environment allows the device to reach the Plaspy server)
- Access to Plaspy account credentials or support information to confirm device registration and visibility

## How This Tracker Connects to Plaspy

When configured for Plaspy, the C32 reports position and status to the shared Plaspy server endpoint and port so fleet managers and operators can monitor devices in the platform. Plaspy accepts the incoming protocol and automatically handles protocol detection so devices appear in the correct format in the platform.

- The tracker sends periodic location updates to d.plaspy.com on port 8888
- Event and alarm messages are delivered to the same Plaspy endpoint for central processing
- The device can report state information such as ignition, power, and other status fields defined by the C32
- Platform side processing automatically detects the tracker protocol once packets reach d.plaspy.com
- Use UDP or TCP as required by the device or installation; Plaspy supports both transports

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the C32 (manufacturer app, configuration tool, or documented command set).
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the server IP 54.85.159.138 according to the available input field.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device's configuration requires selecting a transport type.
5. Apply or save the configuration on the tracker using the manufacturer tool or command process.
6. Restart the device if required by the manufacturer to activate the new server settings.
7. Validate that the device reports to Plaspy by checking device visibility and live updates on the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on CanTrack firmware and the configuration channel provided by the manufacturer. Some installers use a Windows configuration tool, others use SMS commands, and some use an over the air provisioning method. Because methods vary, consult CanTrack documentation for the precise command syntax and sequence for the C32.

If you have access to a specific CanTrack command set from the manufacturer, use their published commands to set:
- server address to d.plaspy.com or 54.85.159.138
- server port to 8888
- transport to UDP or TCP (if needed)
- apply/save and reboot the device

Preserve any placeholders from manufacturer commands (for example placeholders for APN, username, or password) exactly as provided by CanTrack.

## Configuration Notes

- Firmware differences can change the exact command syntax and menu locations in CanTrack tools; always confirm the correct commands for your firmware revision.
- Choosing UDP or TCP is a device-side option; both are supported by Plaspy and Plaspy will detect the protocol automatically.
- Because Plaspy uses a single port for all devices, setting port 8888 is a universal step for compatibility with the platform.
- OTA features and remote upgrade capability are model features but may require additional manufacturer-side steps to enable.
- Keep a copy of the original device settings before making changes so you can revert if needed.

## Why Use Plaspy with This Configuration

Using the CanTrack C32 with Plaspy gives organizations a practical way to centralize vehicle, motorcycle, and E-bike tracking data in a single platform. Pointing the C32 to Plaspy using the shared server settings lets operators receive location updates, monitor events, and manage devices without per-device port configuration on the server side.

Learn more about Plaspy and how it can host devices like the CanTrack C32 at https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and command syntax for the C32, verify the manufacturer documentation at https://www.cantrackgps.com/ as methods and firmware versions may change over time.
