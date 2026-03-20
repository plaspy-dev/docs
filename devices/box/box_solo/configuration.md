---
slug: /box/box_solo/configuration
id: box_solo-configuration
sidebar_label: Configuration
title: Box - Box Solo Configuration
sidebar_class_name: menu_item_tracker
description: Configure Box Solo tracker for Plaspy using shared server settings and practical setup guidance for trailer tracking integration
keywords:
  - Box Solo configuration
  - Box Solo setup Plaspy
  - Box Solo server configuration
  - Box trailer tracker setup
  - Box telemetry integration
  - Plaspy tracker configuration
  - GPS tracker platform setup
  - trailer tracking configuration
  - fleet tracking Box Solo
  - Box Solo GPRS configuration
---

# Box - Box Solo Configuration

This page documents the public configuration context for using the BOX Solo trailer tracker with the Plaspy platform. It summarizes the shared server settings Plaspy expects and explains the practical steps you will typically take on the device or with the manufacturer's configuration tool so the BOX Solo can report position and status to Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps for the BOX Solo can vary depending on firmware revision, hardware revision, installation type, and the specific vendor tools used to program the device. Use this page as a practical guide and consult the BOX manufacturer documentation for device specific details.

## Configuration Overview

The goal of this configuration process is to prepare the BOX Solo to send its GPS and telemetry data to Plaspy so the device appears in the platform and provides ongoing position updates. This involves setting the Plaspy server endpoint on the tracker, confirming transport settings, and validating connectivity once the device is installed.

- Point the BOX Solo to the Plaspy server endpoint and use the shared Plaspy port for all devices
- Select UDP or TCP transport if the device requires a transport selection
- Ensure the device has active GPRS connectivity so it can reach the Plaspy endpoint
- Save and apply the configuration then restart or reinitialize the tracker if required
- Validate that Plaspy receives the first location and that the device is visible in the platform

## Plaspy Server Settings

When configuring the BOX Solo for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and that protocol detection is automatic on the server side.

## Typical Requirements Before Setup

- Confirm the BOX Solo has been powered and wired correctly following the manufacturer installation guide
- Ensure the device has a valid SIM with an active data plan and GPRS enabled for packet data
- Obtain access to the BOX configuration method or software supplied by the manufacturer or vendor
- Have the Plaspy server settings available to enter d.plaspy.com or 54.85.159.138 and port 8888
- A basic test location fix and GSM signal at the installation site to validate connectivity

## How This Tracker Connects to Plaspy

The BOX Solo reports GPS positions and device status over GPRS to the Plaspy server endpoint and port so the device is visible and trackable in the Plaspy platform. Plaspy uses automatic protocol detection so you generally only need to point the tracker at the correct host and port.

- The tracker is configured to send data to d.plaspy.com or directly to 54.85.159.138
- Communications use the shared Plaspy port 8888 with either UDP or TCP transport
- Plaspy automatically detects the tracker protocol when the device establishes a session
- Once configured, the device transmits positions and events so the asset appears in Plaspy
- The platform collects and presents location, status, and event data for operational monitoring

## Common Configuration Workflow

1. Access the official BOX manufacturer configuration method or software supplied with the BOX Solo
2. In the device server settings enter either the domain d.plaspy.com or the IP address 54.85.159.138
3. Set the server port to 8888 which Plaspy uses for all devices
4. Choose UDP or TCP transport if the BOX configuration requires you to select a transport protocol
5. Save or apply the configuration changes in the manufacturer tool
6. Restart or power cycle the BOX Solo if the configuration tool or device instructions require it
7. Validate the device is reporting to Plaspy and that the first GPS fix and telemetry appear in the platform

## Example Configuration Commands

The BOX Solo configuration method varies by manufacturer tool, firmware, and regional firmware variants. Because the BOX Solo is typically configured using the official BOX configuration software, web portal, or an installer tool, exact command strings are not provided here. Use the manufacturer tool to enter the Plaspy server domain or IP and set port 8888 with UDP or TCP as required.

If your vendor provides an SMS or text command interface for initial setup, the same endpoint and port values should be used in those commands where the tool requires server, IP, and port inputs. Consult the BOX Solo documentation or vendor support for the exact command syntax used in your device firmware.

## Configuration Notes

- BOX Solo supports GSM and GPRS communications and can be configured to use TCP or UDP transport for reporting
- Firmware revisions and vendor programming tools vary by market and installer; confirm the exact configuration method with your supplier
- Choosing TCP versus UDP may affect delivery behavior depending on firmware and network conditions; either transport is supported by Plaspy on port 8888
- Plaspy uses the same port for all devices and performs automatic protocol detection so you normally only need to set host and port
- Keep a copy of original device settings before changing configuration so you can revert if needed

## Why Use Plaspy with This Configuration

Using the BOX Solo with Plaspy gives trailer operators and fleet managers a straightforward path to continuous position reporting and operational visibility. By configuring the device to point at the shared Plaspy server and port, the BOX Solo can send location and event data to a central platform that supports monitoring, history, and alerts.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup instructions and firmware details with the manufacturer at http://www.boxtelematics.com/ as product capabilities and configuration methods can change over time.
