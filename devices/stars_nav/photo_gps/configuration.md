---
slug: /stars_nav/photo_gps/configuration
id: photo_gps-configuration
sidebar_label: Configuration
title: Stars Nav - Photo GPS Configuration
sidebar_class_name: menu_item_tracker
description: Configure Stars Nav Photo GPS for use with Plaspy using public server settings and practical setup guidance for file import or server reporting
keywords:
  - Stars Nav Photo GPS configuration
  - Stars Nav Photo GPS setup
  - Photo GPS Plaspy configuration
  - Stars Nav GPS tracker setup
  - Photo GPS server configuration
  - Plaspy device integration
  - GPS logger Photo GPS
  - Photo GPS geotagging setup
  - Stars Nav tracking software configuration
  - Photo GPS platform setup
---

# Stars Nav - Photo GPS Configuration

This page documents the public configuration context for using the Stars Nav Photo GPS with Plaspy. It focuses on practical information you can use to integrate the Photo GPS device with Plaspy either by importing logged data or by configuring vendor tools or firmware that can forward data to a server. Content here uses only public configuration facts and describes common workflows rather than private or hidden device internals.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the Photo GPS can vary depending on firmware, hardware revision, installation type, and the vendor tools you use. Because the Photo GPS is primarily a removable storage GPS logger that saves TEXT log files on micro SD, many integrations use file import workflows; if you have a firmware or tool that supports network reporting, the Plaspy server details are provided below.

## Configuration Overview

This configuration information helps you prepare the Photo GPS for use with Plaspy and explains the two common integration approaches: file import and server reporting where available. The goal is to make location data from the Photo GPS visible and usable inside Plaspy while using the platform's shared server endpoints and automatic protocol detection where applicable.

- Prepare the Photo GPS device and micro SD logs for import into Plaspy or a vendor upload tool.
- Configure any vendor software or device firmware that can send tracker data to Plaspy using the shared server endpoint.
- Validate that uploaded or reported data appears in Plaspy and that timestamps and coordinates match the logged TEXT files.
- Use Plaspy server settings to enable direct server reporting when the device or tools support network transmission over UDP or TCP.
- Confirm the workflow with manufacturer documentation and verify compatibility with your edition of the device firmware.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring vendor tools or firmware that can forward data from the Photo GPS to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the Photo GPS battery is charged and the device powers on correctly.
- Confirm a micro SD card with logged TEXT files is present and readable by your PC.
- Have access to the official Stars Nav configuration method or vendor software if using a manufacturer upload tool.
- A Plaspy account and access to your Plaspy project or organization so you can verify device data after import or reporting.
- A PC, card reader, or cable to access the logged files, and any manufacturer utilities needed for file conversion or upload.
- Basic knowledge of whether your workflow will use file import into Plaspy or network reporting via a vendor tool or firmware.

## How This Tracker Connects to Plaspy

The Stars Nav Photo GPS is designed as a removable storage GPS logger that records location history to a TEXT file on micro SD. Integration with Plaspy is typically achieved by importing those log files or by using manufacturer software that can forward the data. If a firmware or vendor tool supports direct reporting, it is configured to send data to the shared Plaspy server endpoint and port.

- Upload logged TEXT files from the micro SD into Plaspy or a supported import tool to make historical tracks available.
- Use Stars Nav vendor software or third party tools to convert log files into a format accepted by Plaspy when necessary.
- If network reporting is available through firmware or a gateway, configure the endpoint to d.plaspy.com or 54.85.159.138 and port 8888.
- Select UDP or TCP as required by the vendor tool or firmware; Plaspy will automatically detect the device protocol.
- Validate data visibility in Plaspy after the import or after the device reports to the shared server endpoint.

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or software supplied by the manufacturer for the Photo GPS.
2. If using a network reporting option in vendor software or firmware, enter d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 as the Plaspy platform uses the same port for all devices.
4. Choose UDP or TCP when the device or tool requires a transport selection.
5. Apply or save the configuration in the manufacturer utility or device firmware interface.
6. Restart the device or the vendor upload service if required by the device or software.
7. Validate that the device reports to Plaspy or that imported log files appear correctly in your Plaspy account.

## Example Configuration Commands

This model does not include public command strings for the Photo GPS because the device is primarily a removable storage data logger. Exact commands and configuration syntax depend on Stars Nav utilities, firmware versions, or third party uploader tools. If your vendor tool supports server forwarding, use the server settings shown above (d.plaspy.com or 54.85.159.138 and port 8888) when entering server information.

For devices or tools that do publish SMS or command line configuration formats, include those commands here if provided by your vendor or in the device manual. Preserve placeholders such as [apn], [apnu], or [apnp] from vendor commands if they are required by your firmware, and follow the vendor guidance for placeholder values.

## Configuration Notes

- The Stars Nav Photo GPS is primarily designed for offline logging to micro SD; many integrations use file import rather than live server reporting.
- Firmware versions and vendor utilities differ across hardware revisions; verify the exact configuration steps for your device revision.
- When a vendor tool supports network forwarding, choosing TCP or UDP is a device or tool-level option; Plaspy supports both and will detect the protocol automatically.
- Plaspy uses the same port for all supported devices which simplifies configuration, but always confirm the vendor tool uses port 8888 for Plaspy.
- Consult Stars Nav documentation for the latest instructions on any upload utilities or firmware updates that affect configuration.

## Why Use Plaspy with This Configuration

Using Plaspy with the Stars Nav Photo GPS provides a practical path to organize and analyze location data from a device that excels at straightforward, reliable logging. For users who collect geotagged photos and detailed TEXT logs, Plaspy offers a central platform to import logs, visualize tracks, and integrate location history into broader operational workflows.

To learn more about Plaspy and available features visit https://www.plaspy.com. Please verify the latest device specific setup methods, firmware behavior, and manufacturer details on the official Stars Nav site http://www.starsnav.com/ as product specifications and configuration methods can change over time.
