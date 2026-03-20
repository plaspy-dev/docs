---
slug: /careu/uwatch_wt1_lite/configuration
id: uwatch_wt1_lite-configuration
sidebar_label: Configuration
title: CAREU - uWatch WT1 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU uWatch WT1 Lite showing Plaspy server settings and practical setup steps for integration
keywords:
  - CAREU uWatch WT1 Lite configuration
  - uWatch WT1 Lite setup
  - Plaspy integration guide
  - wearable GPS tracker setup
  - caregiver tracking configuration
  - SOS alert setup
  - geofence configuration guide
  - health telemetry tracker setup
  - GPS platform setup
  - tracking software configuration
---

# CAREU - uWatch WT1 Lite Configuration

This page documents the public configuration context for using the CAREU uWatch WT1 Lite with the Plaspy monitoring platform. It focuses on the practical, publicly available server settings and the general steps required to point the tracker at Plaspy so that location and event data can be received and displayed in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and the vendor's configuration tools. Use the information here to prepare the device for Plaspy integration and consult the manufacturer for device specific details.

## Configuration Overview

This configuration process prepares the uWatch WT1 Lite to send location, event, and telemetry data to Plaspy so devices appear and report correctly in the platform. The primary task is to configure the tracker or the companion configuration tool to point at Plaspy's public server endpoint and to verify connectivity.

- Configure the watch or companion configuration tool to report to the Plaspy server endpoint.
- Ensure the device uses the Plaspy server port so the platform can accept incoming messages.
- Select UDP or TCP transport if the device requires a transport option and save the configuration.
- Validate the device appears in Plaspy and confirm it is reporting location and alert events.
- Adjust any manufacturer-side settings for SOS and geofence events so those events forward to Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the CAREU uWatch WT1 Lite or the manufacturer configuration tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to handle different tracker protocols.

## Typical Requirements Before Setup

- A charged and operational uWatch WT1 Lite with access to the manufacturer configuration method or companion app.
- Access to the official manufacturer configuration tool or mobile app used to set reporting servers and transport.
- A Plaspy account or access to the Plaspy deployment where the device will be monitored.
- A stable network path from the device to the public internet so it can reach d.plaspy.com or the IP address above.
- Basic device identifiers (for example device ID or IMEI) so you can confirm the device in Plaspy after setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the uWatch WT1 Lite reports location, event, and available telemetry to the shared Plaspy server endpoint so those messages can be processed and shown in the platform. The device is pointed to the public Plaspy endpoint and uses the common Plaspy port for all devices.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138.
- All messages are sent to port 8888 which Plaspy uses for incoming tracker data.
- The device can use either UDP or TCP if the manufacturer allows transport selection.
- Plaspy automatically detects the tracker protocol and processes messages accordingly.
- Events such as SOS button pushes and geofence breaches are forwarded to the platform once reporting is established.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the uWatch WT1 Lite, typically the companion app or a vendor configuration tool.
2. In the server settings, enter the Plaspy server as d.plaspy.com or use the direct server IP 54.85.159.138.
3. Set the server port to 8888 to match Plaspy's public receiving port.
4. Choose UDP or TCP if the device or tool requires a transport selection.
5. Apply or save the configuration in the manufacturer tool or app.
6. Restart the device if the manufacturer instructions recommend or require a restart to apply changes.
7. Validate that the device reports to Plaspy by locating the device in the platform and checking for recent position or event updates.

## Example Configuration Commands

The uWatch WT1 Lite configuration method varies by manufacturer tool and firmware. There are no public raw commands included here for this model. Use the official CAREU configuration app or vendor tool to set the Plaspy server values described above. If your vendor provides SMS or CLI commands for setup, apply the same values:

- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If you receive manufacturer-supplied commands or a configuration script from CAREU, follow the vendor instructions and substitute the Plaspy server and port values listed in this document.

## Configuration Notes

- Manufacturer firmware versions and configuration interfaces can differ; confirm exact menu labels and field names in CAREU documentation.
- Where the device offers a choice between UDP and TCP, test both transports if you encounter connectivity issues; Plaspy accepts either on the shared port.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol, reducing the need to select a protocol manually in many cases.
- If the manufacturer provides SMS based configuration or direct commands, retain any placeholders as provided by CAREU and replace them according to vendor guidance.
- Always verify device identifiers (for example IMEI or device ID) so you can match the physical device to the record in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the CAREU uWatch WT1 Lite with Plaspy centralizes location, alert, and health telemetry into a single monitoring platform. Organizations and caregivers gain visibility into real-time location, receive SOS and geofence notifications, and retain historical playback for incident review and continuous care workflows.

To learn more about Plaspy and how it handles device connections and monitoring, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer instructions, verify details with CAREU at https://www.systech-iot.com/ before proceeding with large scale deployments.
