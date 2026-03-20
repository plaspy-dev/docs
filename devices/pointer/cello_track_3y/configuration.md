---
slug: /pointer/cello_track_3y/configuration
id: cello_track_3y-configuration
sidebar_label: Configuration
title: Pointer - Cello Track 3Y Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the Pointer Cello Track 3Y for use with Plaspy including required server settings and practical setup steps
keywords:
  - Pointer Cello Track 3Y configuration
  - Pointer Cello Track 3Y setup
  - Cello Track 3Y server configuration
  - Plaspy tracker configuration
  - Pointer GPS tracker setup
  - Cello Track 3Y Plaspy integration
  - asset tracking configuration guide
  - vehicle tracking setup Pointer
  - GPS tracker platform setup
  - Pointer device configuration
---

# Pointer - Cello Track 3Y Configuration

This page describes the public configuration context for using the Pointer Cello Track 3Y family with the Plaspy platform. It summarizes the shared Plaspy server settings and offers practical setup guidance so installers and administrators can prepare the device for reporting into Plaspy. The content here focuses on the public, nonproprietary steps needed to point the tracker at Plaspy and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on receipt of device traffic. Exact manufacturer-side setup steps for the Cello Track 3Y can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this guidance together with the official Pointer configuration method for your device model.

## Configuration Overview

The goal of this configuration process is to prepare the Cello Track 3Y to communicate reliably with the Plaspy platform and to confirm that the tracker appears in your Plaspy account. The steps below cover the practical tasks that are typically required to make the device visible and operational in Plaspy.

- Point the tracker to the Plaspy server endpoint so it can deliver position and status messages.
- Use the shared Plaspy port so devices are accepted and processed by the platform.
- Choose the appropriate transport mode if the device requires a UDP or TCP selection.
- Save and apply manufacturer configuration settings and reboot the device when required.
- Verify that Plaspy automatically detects the device protocol and begins showing data.

## Plaspy Server Settings

When configuring the Pointer Cello Track 3Y for Plaspy, use these public server values:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888
- Plaspy automatically detects the tracker protocol on incoming connections

Note that all devices in Plaspy use the same port, and Plaspy will handle protocol detection so you do not need to select a tracker protocol in the platform.

## Typical Requirements Before Setup

- Access to the official Pointer configuration tool or method recommended for the Cello Track 3Y family.
- Device powered and reachable using the manufacturer procedure for configuration and testing.
- Network connectivity at the location used for configuration so device messages can reach Plaspy.
- A Plaspy account or the necessary platform access to confirm the device appears after configuration.
- Basic information about the device such as serial number or device ID used by Pointer tools.
- Knowledge of whether the device requires selecting UDP or TCP on the manufacturer side.

## How This Tracker Connects to Plaspy

The Cello Track 3Y family is configured to report location and device messages to the shared Plaspy server endpoint and port so Plaspy can ingest and display the data. Plaspy receives device traffic on a single port and uses automatic protocol detection to process messages from many tracker models.

- The device sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker may also send event or status messages that Plaspy will associate with the device record.
- Plaspy inspects incoming traffic and automatically detects the tracker protocol for correct parsing.
- Successful connectivity results in the device appearing and reporting on Plaspy without additional platform-side protocol selection.
- If UDP or TCP transport is required by the device, configure the transport on the device to match the chosen option.

## Common Configuration Workflow

1. Access the official Pointer configuration method or software for the Cello Track 3Y family.
2. Locate the server or reporting settings section in the manufacturer tool.
3. Enter d.plaspy.com or 54.85.159.138 as the server address per your preference.
4. Set the port to 8888, noting that Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires you to select a transport option.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart or power-cycle the device if the tool or device firmware requires it.
8. Validate that the device reports to Plaspy by checking your Plaspy account for device visibility and incoming data.

## Example Configuration Commands

The exact commands or SMS strings used to configure Pointer devices vary across firmware and regional device variants. Because the available public configuration commands for the Cello Track 3Y family are provided by Pointer and may be delivered via a configuration tool or SMS interface, consult the official Pointer documentation or vendor instructions for the precise commands.

If your device vendor provides command examples, place them in the manufacturer tool or send them following the vendor instructions. Typical manufacturer-provided commands will instruct the tracker to set server address, set port 8888, and select UDP or TCP transport. Preserve placeholders such as {{apn}} or similar if they appear in vendor-provided commands and follow the vendor guidance to replace them.

## Configuration Notes

- Firmware differences can change the exact configuration interface and command syntax; always confirm the commands for your firmware version.
- Installer practices vary by region and vendor. Use Pointer tools or vendor-provided software for authoritative configuration flows.
- TCP and UDP are both supported to reach port 8888; choose the transport required by your device or left available by the vendor instructions.
- Plaspy will automatically detect the tracker protocol on incoming connections, so the platform side does not require manual protocol selection.
- Keep manufacturer documentation to hand when performing configuration and verification steps.

## Why Use Plaspy with This Configuration

Using Plaspy with the Pointer Cello Track 3Y family provides a straightforward way to centralize location and device status reporting in a single platform. The shared server settings and Plaspy protocol detection simplify onboarding so installers can focus on correct device-side configuration and validation rather than platform protocol details.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For device specific configuration steps, firmware notes, and the latest manufacturer guidance verify details with Pointer at http://www.pointer.com.
