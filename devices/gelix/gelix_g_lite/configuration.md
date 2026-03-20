---
slug: /gelix/gelix_g_lite/configuration
id: gelix_g_lite-configuration
sidebar_label: Configuration
title: Gelix - Gelix G Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Gelix G Lite for Plaspy including server settings transport options and setup workflow
keywords:
  - Gelix G Lite configuration
  - Gelix G Lite setup
  - Gelix tracker Plaspy
  - Gelix server configuration
  - Gelix GPS platform setup
  - Gelix tracking software configuration
  - Gelix vehicle tracking
  - Plaspy tracker compatibility
  - Plaspy server settings
  - fleet tracking Gelix
---

# Gelix - Gelix G Lite Configuration

This page describes the public configuration context for using the Gelix G Lite tracker with Plaspy. It focuses on the practical server settings and workflow needed to point a Gelix G Lite device to Plaspy so the device can be discovered and managed by the platform. Details here are intended for installers and technical users preparing a device for operation with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and the Gelix configuration tools or vendor procedures you use. Always verify device-specific procedure steps with Gelix documentation as needed.

## Configuration Overview

The goal of this configuration process is to prepare the Gelix G Lite to send its location and status data to Plaspy so that the device becomes visible and usable in the Plaspy platform. The process centers on setting the network endpoint and transport, validating mobile connectivity, and confirming the device reports successfully.

- Point the device to the Plaspy server domain or IP and set the shared Plaspy port so the tracker can initiate a connection.
- Select the transport protocol (UDP or TCP) if the device firmware requires a transport choice.
- Verify mobile data connectivity and any required APN settings so GPRS data can reach Plaspy.
- Apply or save the configuration and restart the tracker if the manufacturer recommends a reboot for changes to take effect.
- Confirm the Gelix G Lite is reporting to Plaspy and visible in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A powered Gelix G Lite device with the required cables and access for configuration.
- Access to the official Gelix configuration method or software provided by the manufacturer or vendor.
- A working cellular SIM with data enabled and the correct APN settings for the mobile network being used.
- Knowledge of the device firmware version and any vendor-specific instructions that affect configuration.
- A way to apply and, if needed, restart the device after changes (physical access or remote management tool).
- Credentials or access rights required by the manufacturer's configuration tool.

## How This Tracker Connects to Plaspy

The Gelix G Lite sends position and device telemetry to the shared Plaspy server endpoint and port so the device can be monitored within the Plaspy platform. Plaspy receives incoming connections on the common endpoint, identifies the device protocol automatically, and begins processing the tracker data.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport is selected as UDP or TCP on the device if required by firmware.
- When the device connects to the Plaspy endpoint, Plaspy automatically detects the protocol and interprets messages.
- Successful reporting enables location visibility, event reporting, and operational monitoring in Plaspy.
- After configuration, verify that periodic reports or startup messages appear in the platform.

## Common Configuration Workflow

1. Access the official Gelix configuration method or software supplied by Gelix or your vendor.  
2. Enter the Plaspy server address as d.plaspy.com or, if required, use 54.85.159.138.  
3. Set the device port to 8888 (this is the common Plaspy port used for all devices).  
4. Choose UDP or TCP if the device configuration requires you to select a transport protocol.  
5. Apply or save the configuration in the device tool and follow any vendor prompts to commit changes.  
6. Restart the Gelix G Lite if required by the manufacturer to activate the new network settings.  
7. Validate that the device reports to Plaspy by checking for the device connection and initial location messages in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and the interface used can vary by Gelix firmware and the manufacturer configuration tools. Gelix devices are typically configured via the official configuration utility or provisioning tools provided by the vendor. Because command formats and steps differ across firmware revisions and tools, follow the Gelix instructions provided with your device for the exact syntax and sequence.

If you have a manufacturer-supplied command reference or configuration file, use the domain d.plaspy.com or the IP 54.85.159.138 and port 8888 as the target values, and set the transport to UDP or TCP as required by your device.

## Configuration Notes

- Firmware and hardware revisions can change the configuration interface and command syntax; always confirm the correct steps for your device version.
- Choosing UDP versus TCP can depend on network characteristics and manufacturer recommendations; test both if the device supports both transports.
- Plaspy uses the same port for all supported devices and handles protocol detection automatically, so focus on ensuring the endpoint and transport are set correctly on the tracker.
- Verify APN and cellular data settings before attempting to connect to Plaspy to avoid connectivity failures.
- Keep a record of the configuration applied and any device identifiers so you can match the device to the entry in Plaspy after it reports.

## Why Use Plaspy with This Configuration

Using the Gelix G Lite with Plaspy gives fleets and asset managers a straightforward path to visibility and operational oversight without per-device server configuration complexity. Pointing the tracker to the shared Plaspy endpoint and the common port allows Plaspy to automatically interpret the device protocol and start ingesting location and status messages, enabling monitoring, alerts, and historical tracking.

To learn more about Plaspy and how it supports trackers like the Gelix G Lite visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup tools can change over time, so verify the latest device-specific configuration details and commands on the Gelix website at http://www.gelix.com/.
