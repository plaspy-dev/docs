---
slug: /supermate/k20/configuration
id: k20-configuration
sidebar_label: Configuration
title: Supermate - K20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Supermate K20 showing Plaspy server settings and practical setup steps
keywords:
  - Supermate K20 configuration
  - Supermate K20 setup
  - Supermate K20 server configuration
  - Supermate K20 tracking setup
  - Supermate K20 GPS platform setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - K20 integration guide
  - GPS tracker configuration guide
  - vehicle tracking configuration
---

# Supermate - K20 Configuration

This page covers the public configuration context for using the Supermate K20 GPS tracker with Plaspy. It summarizes the practical server settings and workflow you will use to point a K20 at the Plaspy platform so the device can report location and events for monitoring inside Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the guidance below to prepare the K20 for Plaspy and verify behavior, and consult the official Supermate materials for device specific instructions.

## Configuration Overview

The goal of this configuration process is to prepare the K20 so it can communicate reliably with Plaspy and appear as an active device in your Plaspy account. That includes setting the Plaspy server endpoint, confirming the transport type as required by the device, and validating that the tracker sends regular position and event messages.

- Point the K20 to the Plaspy server endpoint so telemetry is delivered to the platform.
- Select the appropriate transport method (UDP or TCP) on the K20 if required by the device interface.
- Set and save the port used by Plaspy so messages are routed correctly to the platform.
- Validate connectivity and reporting so the device becomes visible and usable in Plaspy.
- Confirm device events such as SOS or geo-fence alerts are delivered to Plaspy if used.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port 8888

Use these values when configuring the K20 server or host settings. Plaspy accepts tracker connections on either UDP or TCP to the same server and port and will determine the correct protocol automatically.

## Typical Requirements Before Setup

- A powered and functional Supermate K20 unit with battery charged or connected.
- Access to the official Supermate configuration method or software for the K20.
- A valid cellular connection and any network settings required by the device provider or installer.
- A way to save and apply settings on the tracker and optionally restart the device after configuration.
- Access to a Plaspy account or administrator interface to confirm and view device reporting once configured.

## How This Tracker Connects to Plaspy

The K20 is configured to send its location and event data to the shared Plaspy server endpoint and port so Plaspy can display live tracking, events, and status for your assets.

- The tracker reports position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the device configuration; Plaspy accepts either.
- Plaspy automatically detects the tracker protocol and processes incoming messages.
- Event reporting such as SOS or geo-fence alerts will be sent to the same Plaspy endpoint when configured.
- Once messages reach Plaspy the device becomes visible in the platform for monitoring and reporting.

## Common Configuration Workflow

1. Access the official Supermate configuration method or software for the K20 (manufacturer tool, web interface, or vendor utility).
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device host settings.
3. Set the destination port to 8888 as the tracker server port.
4. Choose UDP or TCP if the device requires selection of transport protocol.
5. Apply or save the configuration in the device tool and confirm settings are written to the tracker.
6. Restart the device if the manufacturer instructions require a reboot to activate new settings.
7. Validate that the K20 reports to Plaspy by checking device visibility and incoming data in your Plaspy account or console.

## Example Configuration Commands

The exact configuration commands and methods vary by manufacturer tool and firmware. Supermate devices may be configured using proprietary configuration software, an over the air method provided by the vendor, or via a device menu. Because methods differ across firmware builds and tools, follow the Supermate K20 documentation or vendor instructions for the specific command syntax or utility to change server, port, and transport settings.

## Configuration Notes

- Firmware and hardware revisions can change available settings and the exact configuration workflow; verify the K20 firmware version before applying instructions.
- Some configuration tools present the server as a domain name field while others accept an IP address; Plaspy supports d.plaspy.com or 54.85.159.138.
- If the device requires choosing between UDP and TCP, select the transport required by your installation; Plaspy will accept either on port 8888 and auto-detect protocol behavior.
- Installer practices and regional device versions can vary; confirm the correct configuration method with the vendor or installer.
- Keep a record of prior settings before making changes so you can revert if necessary.

## Why Use Plaspy with This Configuration

Using the Supermate K20 with Plaspy provides a straightforward way to centralize real-time tracking and event monitoring for assets and vehicles. Configuring the K20 to send data to Plaspy gives organizations continuous visibility, alerting, and operational oversight without needing device specific endpoints for each tracker.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware behavior, and manufacturer details for the Supermate K20, please verify information at the official Supermate site http://www.gps-summit.com/ as methods and options can change over time.
