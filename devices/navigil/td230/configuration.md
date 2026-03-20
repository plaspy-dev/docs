---
slug: /navigil/td230/configuration
id: td230-configuration
sidebar_label: Configuration
title: Navigil - TD230 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the Navigil TD230 with Plaspy including server settings and setup workflow
keywords:
  - Navigil TD230 configuration
  - Navigil TD230 setup
  - TD230 server configuration
  - TD230 Plaspy setup
  - GPS tracker configuration
  - tracker server settings
  - GPS platform setup
  - vehicle tracking configuration
  - Plaspy tracker integration
  - Navigil TD230 firmware
---

# Navigil - TD230 Configuration

This page summarizes the public configuration context for using the Navigil TD230 tracker with the Plaspy platform. It focuses on the practical information needed to point a TD230 device at Plaspy for server reporting and visibility. Use this guide together with manufacturer documentation and the Plaspy onboarding information to complete a deployment.

Plaspy uses a shared set of server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps for the TD230 can vary by firmware version, hardware revision, installation type, and vendor supplied configuration tools. Review the device firmware notes and vendor instructions before applying changes.

## Configuration Overview

This section explains the high level purpose of configuring a TD230 for use with Plaspy and what you should achieve by the end of the process.

- Configure the device to report to the Plaspy endpoint so location and event messages reach the platform.
- Ensure the TD230 firmware and configuration files are compatible with remote reporting and any required transport settings.
- Validate connectivity and confirm the device appears in Plaspy after saving and restarting the device.
- Preserve device power management and reporting intervals consistent with operational requirements.
- Keep firmware and configuration up to date using the TD230 OTA capabilities where available.

## Plaspy Server Settings

When configuring the TD230 to report to Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port, so point the TD230 at port 8888 when entering server settings.

## Typical Requirements Before Setup

- Confirm the TD230 has sufficient battery or an external power source for configuration and testing.
- Access to the official Navigil configuration method or software provided for the TD230 model and firmware.
- Network connectivity from the device to the internet so it can reach the Plaspy server endpoint.
- The device firmware must support server reporting and the relevant transport protocols.
- Device identifiers such as IMEI or device ID available for registration and validation in Plaspy.
- A Plaspy account or onboarding information so the device can be associated and validated in the platform.

## How This Tracker Connects to Plaspy

The TD230 is configured to send periodic messages to a remote server and can be pointed to Plaspy for operational visibility. Once configured, the tracker will open outbound connections to the shared Plaspy endpoint and port where Plaspy handles protocol parsing and device association.

- The TD230 reports location and event data to the Plaspy server endpoint.
- Messages are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- You may select UDP or TCP transport on the device where the firmware prompts for a transport type.
- Plaspy automatically detects the tracker protocol and parses incoming messages for display.
- The device firmware features such as geofence or vehicle state monitoring can generate events that are forwarded to Plaspy.

## Common Configuration Workflow

Follow this practical workflow to configure a TD230 to work with Plaspy:

1. Access the official Navigil TD230 configuration method or software provided by the manufacturer or vendor.
2. In the server or reporting settings, enter d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the server port to 8888, which is the common port used by Plaspy for all devices.
4. Choose UDP or TCP transport if the device requires selecting a transport protocol.
5. Apply or save the configuration in the device tool or via the device interface.
6. Restart or power cycle the TD230 if the device requires a restart for changes to take effect.
7. Validate that the device reports to Plaspy by checking that the device appears in the platform and that recent messages are received.

## Example Configuration Commands

The TD230 configuration method and commands can vary based on the manufacturer tool, firmware, and vendor packaging. Navigil provides configuration via their official tools and firmware interfaces, so the exact commands or message formats will differ between installations. Refer to the Navigil TD230 configuration guide or vendor supplied documentation for device specific command syntax and examples.

## Configuration Notes

- Firmware differences can change where and how server settings are entered; confirm the TD230 firmware version before applying settings.
- Some installers use vendor tools or SMS based configuration where supported; follow the method recommended by the device supplier.
- Choose UDP or TCP based on device capability and your network environment; Plaspy will accept either on port 8888 and detect the protocol automatically.
- Use the TD230 OTA upgrade path to keep device firmware and configuration files up to date when available.
- Keep device identifiers and registration details ready to speed confirmation that the device is reporting correctly to Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the Navigil TD230 provides a straightforward way to centralize location reporting and event visibility for devices that support the standard TD230 firmware. Pointing devices to the shared Plaspy endpoint simplifies deployment because the platform handles protocol detection and normalizes incoming tracker messages for monitoring and operational use.

To learn more about Plaspy and how it integrates with trackers like the TD230, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify the Navigil documentation at http://www.navigil.com/
