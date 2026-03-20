---
slug: /parallel_track/trackbox/configuration
id: trackbox-configuration
sidebar_label: Configuration
title: Parallel track - Trackbox Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Parallel Track Trackbox including Plaspy server settings and practical setup checks for reliable reporting
keywords:
  - Parallel track Trackbox configuration
  - Parallel Track Trackbox setup
  - Trackbox server configuration
  - Trackbox setup for Plaspy
  - Trackbox GPS platform setup
  - Parallel Track Trackbox integration
  - Trackbox tracking software configuration
  - Trackbox fleet management setup
  - Trackbox device configuration guide
  - Plaspy tracker setup
---

# Parallel track - Trackbox Configuration

This page covers the public configuration context for using the Parallel Track Trackbox with the Plaspy platform. It explains the shared server settings Plaspy expects, the general process to point the Trackbox at the Plaspy endpoint, and practical checks to validate that the device can report location data to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps for the Trackbox can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the guidance below as the practical public setup context for integrating a Trackbox with Plaspy.

## Configuration Overview

Configuring a Trackbox for Plaspy involves directing the device to the Plaspy server endpoint and confirming reliable delivery of periodic position updates. The goal is to ensure the Trackbox reports to the shared Plaspy endpoint so Plaspy can parse the incoming protocol automatically and display device location in the platform.

- Set the Trackbox outbound server to the Plaspy endpoint and port so the device forwards its POST or packet reports to Plaspy.
- Choose the transport method supported by the device, UDP or TCP, and set it to use the Plaspy port.
- Save and apply the configuration in the official Parallel configuration tool or via the manufacturer method.
- Reboot the Trackbox if the device requires a restart to apply network or server changes.
- Verify that the device appears in Plaspy and that location updates arrive at expected intervals.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the Trackbox server connection:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

Note that Plaspy uses the same port for all supported devices so you should set port 8888 regardless of device model or protocol selection.

## Typical Requirements Before Setup

- Ensure the Trackbox has a stable power source and is powered on during configuration.
- Confirm the device has a working mobile network connection if cellular reporting is used.
- Have the Parallel Track manufacturer configuration method available (software, web interface, or SMS commands) to change server and transport settings.
- Know your SIM and cellular data details (APN) if the Trackbox requires them for mobile data.
- Access to the Trackbox documentation or vendor support to follow device-specific steps for saving and applying configuration.
- A Plaspy account or administrator access to verify the device appears and reports in the platform.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Trackbox sends its periodic location reports to the shared Plaspy endpoint and port. Plaspy receives the device connection and attempts to identify the tracker protocol automatically so manual protocol selection on Plaspy is not required.

- The Trackbox is pointed at d.plaspy.com or 54.85.159.138 using port 8888.
- The device uses either UDP or TCP transport to send reports as configured.
- Plaspy listens on the shared port and performs automatic protocol detection for incoming device connections.
- Successful delivery of packets or POST data makes the device visible in Plaspy for mapping and monitoring.
- After configuration and a restart if required, periodic updates should appear in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Parallel Track Trackbox configuration method or software provided by the manufacturer.
2. In the device server settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP if the Trackbox configuration requires a transport selection.
5. Apply or save the configuration changes in the Trackbox setup tool.
6. Restart the device if the manufacturer instructions require a reboot to apply changes.
7. Validate that the Trackbox is reporting to Plaspy by checking for the device and recent location updates in the Plaspy platform.

## Example Configuration Commands

The Trackbox manufacturer supports multiple configuration methods and firmware variants, so exact commands or UI steps will vary. Use the official Parallel Track configuration tool or the device SMS/API method provided by the manufacturer to set the Plaspy endpoint and transport. When using a command-line or SMS approach, follow the order required by the device: set server, set port, set transport, save, then restart.

If you have specific public command strings from the Parallel Track documentation, apply them in the sequence the manufacturer specifies and verify the device connects to d.plaspy.com on port 8888.

## Configuration Notes

- Firmware differences can change configuration menus, command syntax, and where to save server settings; consult the Trackbox documentation for version specific steps.
- Choose UDP or TCP based on the device option; both are supported by Plaspy on port 8888 and Plaspy will auto detect the protocol used.
- If using cellular data, confirm APN and SIM details are present and correct so the Trackbox can reach the Plaspy server over the mobile network.
- SMS based configuration may be available on some Trackbox models for field changes; follow the manufacturer SMS command guide if that method is used.
- Always apply and save settings per the device workflow, and reboot when directed to ensure network and server settings take effect.

## Why Use Plaspy with This Configuration

Configuring the Parallel Track Trackbox to report to Plaspy provides a consistent server endpoint and parsing logic so organizations can centralize location reporting and operational monitoring. Using Plaspy's shared endpoint and automatic protocol detection removes the need to manage multiple server addresses per device model and simplifies large scale deployments.

Learn more about Plaspy and how it can manage Trackbox devices at https://www.plaspy.com. For the latest device specific instructions, firmware details, and manufacturer tools verify configuration steps on the Parallel Track official website http://www.paralleltrack.co.uk as methods and firmware behavior may change over time.
