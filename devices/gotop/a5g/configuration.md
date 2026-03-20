---
slug: /gotop/a5g/configuration
id: a5g-configuration
sidebar_label: Configuration
title: GOTOP - A5G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the GOTOP A5G GPS tracker to Plaspy using shared server settings and practical steps
keywords:
  - GOTOP A5G configuration
  - GOTOP A5G setup
  - GOTOP A5G server configuration
  - GOTOP A5G Plaspy
  - GOTOP tracker configuration
  - A5G GPS tracker setup
  - fleet GPS tracker configuration
  - vehicle tracker Plaspy setup
  - GOTOP A5G guide
  - GPS tracker configuration for Plaspy
---

# GOTOP - A5G Configuration

This page documents the public configuration context for using the GOTOP A5G tracker with the Plaspy platform. It focuses on the shared Plaspy server settings you need to enter on the A5G and the practical workflow to make the device report to Plaspy for real time tracking and telemetry. This guidance combines Plaspy server details with manufacturer configuration considerations based on the A5G description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this page to prepare the A5G for connection to Plaspy and then consult GOTOP documentation or your installer tool for device specific commands and menus.

## Configuration Overview

The goal of configuring the A5G for Plaspy is to point the device at the Plaspy server endpoint, confirm transport settings, and validate that location and alarm messages arrive in the Plaspy platform. Because Plaspy uses a single port and automatic protocol detection, the A5G needs only the correct server address, port, and transport selection where required.

- Enter the Plaspy server endpoint into the A5G using the official GOTOP configuration method.
- Set the server port to the Plaspy port used for all devices so traffic is routed correctly.
- Choose UDP or TCP on the A5G if the device requires a transport selection.
- Apply and save changes in the device configuration tool then restart the A5G if required.
- Validate that position and event messages are visible in Plaspy after configuration.
- Keep manufacturer firmware and APN settings correct to maintain cellular connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

These settings are the public Plaspy endpoint values you should use when configuring the A5G to ensure data is delivered to Plaspy.

## Typical Requirements Before Setup

- A powered A5G unit installed or accessible for configuration with battery or vehicle power present.
- A valid cellular SIM with a working data plan inserted and correct APN configured.
- Access to the official GOTOP configuration method or software for the A5G model, such as a Windows tool, web interface, or SMS command set as provided by GOTOP.
- Knowledge of whether the device requires selecting TCP or UDP for server transport.
- A Plaspy account or access to your Plaspy instance to verify the device appears after configuration.
- Firmware version and device revision documented so you can follow the right manufacturer instructions.

## How This Tracker Connects to Plaspy

When configured, the A5G sends periodic location updates, alarms, and telemetry to the shared Plaspy server endpoint and port so fleet operators can view device status and history in the Plaspy platform. Plaspy automatically determines the tracker protocol when the device opens a connection to the configured endpoint.

- The A5G reports GPS and GSM fallback positioning to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and event messages use either UDP or TCP transport depending on the device configuration.
- Alarm events such as SOS, door open, power cut, and geofence triggers are sent to the same Plaspy endpoint for immediate handling.
- Plaspy reads incoming traffic on the single shared port and maps it to the detected device protocol automatically.
- After successful connection, position updates and alerts become visible in Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the A5G as documented by the manufacturer.
2. In the device server settings enter the server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the device server port to 8888 which is the Plaspy listening port for all supported devices.
4. Choose UDP or TCP as the transport if the A5G requires an explicit selection for the server connection.
5. Configure any required APN and cellular parameters so the A5G can establish network connectivity.
6. Apply or save the configuration and restart the A5G if the tool or firmware requires a reboot to apply server changes.
7. Validate that the device reports to Plaspy by confirming the unit appears and updates in the Plaspy platform.

## Example Configuration Commands

No public raw command set was provided for the A5G in this document. The exact configuration commands and menus vary by GOTOP firmware and the configuration tool you use. Refer to your GOTOP A5G manual or configuration utility for the proper syntax or SMS command set to set server domain or IP, transport, and port. Typical manufacturer methods include GUI fields for server domain or IP address, numeric input for port, and a dropdown to select TCP or UDP.

If you have the GOTOP SMS or tool command list from your vendor include the server domain d.plaspy.com or server IP 54.85.159.138 and port 8888 in the command or GUI fields, then save and restart the device.

## Configuration Notes

- Different GOTOP firmware versions or hardware revisions may present settings in different menus or use different SMS command formats. Always match guidance to your device firmware.
- The A5G supports multiple cellular bands and requires a correct APN for data connectivity. Ensure APN settings are configured correctly before troubleshooting server connectivity.
- Choose UDP for lower overhead where supported, or TCP if your installation requires connection reliability. Plaspy accepts both transports on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you do not need to configure a device specific Plaspy port.
- Use OTA firmware updates provided by GOTOP where available to keep the device compatible with current configuration workflows.

## Why Use Plaspy with This Configuration

Pairing the GOTOP A5G with Plaspy gives fleets and operators centralized visibility of GPS position, alarms, and vehicle telemetry in a single platform. The A5G’s multi band cellular support, dual positioning modes, and extensive I O for cameras and sensors make it suitable for a wide range of fleet use cases when it is configured to report to Plaspy.

To learn more about Plaspy and how it supports trackers like the A5G visit https://www.plaspy.com. For the latest device specific configuration commands, firmware details, and installation instructions verify current information on the GOTOP official site https://www.gotop.cc/ since manufacturer methods and firmware behavior can change over time.
