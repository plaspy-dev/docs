---
slug: /riti/690_idu_401/configuration
id: 690_idu_401-configuration
sidebar_label: Configuration
title: Riti - 690 (IDU-401) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Riti 690 IDU 401 with Plaspy server settings and practical setup steps
keywords:
  - Riti 690 configuration
  - Riti IDU 401 setup
  - Riti 690 Plaspy
  - 690 IDU 401 configuration
  - Plaspy tracker setup
  - vehicle tracker configuration
  - GPS tracker setup Riti
  - fleet tracking Plaspy
  - image capture tracking configuration
  - IDU 401 server configuration
---

# Riti - 690 (IDU-401) Configuration

This page provides public configuration context for using the Riti Locator 690 (IDU-401) with the Plaspy fleet platform. It focuses on the practical server and workflow details needed to point the device at Plaspy, explain how the device communicates telemetry and event images, and describe what to check before and after setup. Content is based on the tracker description and public Plaspy configuration information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare the device and apply the public Plaspy endpoint and port, then consult the official Riti documentation or configuration utility for device-specific menus or commands.

## Configuration Overview

Configuring the Locator 690 for Plaspy ensures the device reports GPS telemetry and event images to the Plaspy cloud using a common server endpoint and port. The steps below describe the practical purpose of the configuration and the high level goals to achieve reliable communication and visibility in Plaspy.

- Point the device to the Plaspy server endpoint so telemetry and images upload correctly.
- Select the transport protocol supported by the device and confirm Plaspy receives the data.
- Validate cellular connectivity, GNSS fix, and that the device has adequate power and buffering for offline conditions.
- Enable and test event-driven image capture and IO triggers so images are indexed with location and event metadata.
- Confirm the device appears and reports in Plaspy after applying settings.

## Plaspy Server Settings

Set the device to send data to the shared Plaspy server endpoint and port. Plaspy uses the same port for all supported devices and can automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the Locator 690 is powered and mounted according to installation guidelines.
- A working cellular SIM with data enabled and active coverage for the device to upload telemetry and images.
- Access to the official Riti configuration method or software for the Locator 690, or the authorized installer tool for the unit.
- Device identifiers such as IMEI or serial number available for platform registration and troubleshooting.
- A Plaspy account and the ability to validate that the device is visible in the platform after configuration.
- Verify firmware version and any vendor notes that may affect configuration steps or available features.

## How This Tracker Connects to Plaspy

The Locator 690 is configured to report location, telemetry, and event images to the shared Plaspy server endpoint and port. Image evidence captured by on-device AI or triggered by IO inputs is uploaded and indexed alongside GPS tracks so events can be reviewed in context.

- Sends GPS telemetry and status updates to d.plaspy.com on port 8888 using UDP or TCP.
- Uploads event images and related metadata to the same Plaspy endpoint for indexing and retrieval.
- Uses local buffering and forward-on-connect behavior to preserve data when cellular connectivity is interrupted.
- Supports IO-triggered captures and event-driven workflows so images are associated with event types in Plaspy.
- Plaspy automatically detects the device protocol when the tracker connects to the shared port.

## Common Configuration Workflow

1. Access the official Riti configuration method or software for the Locator 690 (device web UI, vendor tool, serial/USB utility, or authorized installer interface).
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138, depending on the configuration UI options.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP in the device transport settings if the device requires a transport selection.
5. Apply or save the configuration in the device interface and confirm there are no validation errors.
6. Restart or power cycle the device if the manufacturer instructions indicate a restart is required for changes to take effect.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for incoming telemetry and that event images are indexed.

## Example Configuration Commands

Exact configuration commands and the interface used to apply settings vary by Riti firmware and the vendor configuration tool. Because the Locator 690 supports multiple configuration methods, most installers will use the official Riti utility, a serial/USB interface, or the vendor web UI to enter the Plaspy server domain or IP and the port.

If you require textual or SMS command examples, consult the Riti configuration manual or your installer tool for the correct syntax and placeholders. Manufacturer tools will show where to enter d.plaspy.com or 54.85.159.138 and port 8888 and how to select UDP or TCP. Where placeholders are used by the vendor tools, keep them as provided by the manufacturer.

## Configuration Notes

- Firmware and tool differences can change menu names and the location of server settings; always check the installed firmware version and the vendor release notes.
- Choosing TCP or UDP depends on device firmware and network characteristics; test both if you encounter connectivity issues since Plaspy accepts either transport on the shared port.
- Local buffering and image storage behavior is device dependent; ensure device buffering capacity is adequate for your fleet usage and offline scenarios.
- IO triggers, live image retrieval, and event indexing may require additional configuration steps in the Riti utility beyond the server and port settings.
- Keep a record of the device IMEI or serial number to help Plaspy and Riti support teams identify and troubleshoot connection issues.

## Why Use Plaspy with This Configuration

Configuring the Locator 690 to report to Plaspy adds synchronized GPS telemetry and image-backed event evidence to your fleet management workflow. This combination improves incident investigation, reduces time to resolution, and gives operations teams immediate situational awareness through indexed pre, during, and post event photos alongside location tracks.

To learn more about Plaspy and how it handles device connections and data visualization visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and installer guidance verify details on the manufacturer website https://www.riti.com.tw/. Manufacturer specifications and setup procedures can change over time so always confirm the current instructions before applying configuration in production.
