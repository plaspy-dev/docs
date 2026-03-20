---
slug: /aquila/ts101_advanced/configuration
id: ts101_advanced-configuration
sidebar_label: Configuration
title: Aquila - TS101 Advanced Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Aquila TS101 Advanced for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Aquila TS101 Advanced configuration
  - Aquila TS101 Advanced setup
  - Aquila TS101 Advanced server configuration
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - fleet management configuration
  - TS101 Advanced integration
  - Plaspy server settings
  - tracker protocol detection
---

# Aquila - TS101 Advanced Configuration

This page documents the public configuration context for using the Aquila TS101 Advanced tracker with Plaspy. It covers the practical server settings and workflow you will need to point the device at Plaspy, and explains how the tracker is prepared for visibility and event reporting in the platform. Use this guide together with the device manufacturer documentation for complete device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the TS101 Advanced. Exact manufacturer side setup steps can vary depending on device firmware, hardware revision, installation type, and the configuration tools provided by the vendor, so always confirm device-specific commands and procedures with Aquila documentation.

## Configuration Overview

Preparing the TS101 Advanced for Plaspy primarily means configuring the device to report its location and status to Plaspy's shared server endpoint and confirming the device appears in the platform. The process focuses on setting the server endpoint and port, selecting the correct transport, and validating connectivity and reporting.

- Configure the tracker to use Plaspy as its server endpoint so location and event data are sent to the platform
- Select the transport protocol if required by the device and set the shared Plaspy port
- Save and apply device settings, and reboot the device if the manufacturer requires it
- Validate that the tracker is visible and actively reporting on Plaspy after configuration
- Keep a record of firmware version and configuration steps for future troubleshooting

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming device data

## Typical Requirements Before Setup

- Physical access to the TS101 Advanced for configuration and verification
- Device powered and battery charged or connected to vehicle power
- Access to the official manufacturer configuration method or software for TS101 Advanced
- A Plaspy account or integration prepared to receive and display the tracker data
- Stable network connectivity for the device to reach the Plaspy server endpoint
- Knowledge of any device credentials or configuration passwords required by the manufacturer tool

## How This Tracker Connects to Plaspy

The TS101 Advanced is configured to send location updates and event data to Plaspy's shared server endpoint and port. Once the device is pointed at the Plaspy endpoint and the configuration is applied, Plaspy automatically identifies the protocol and begins decoding the device messages for display and reporting.

- The tracker reports periodic location updates to d.plaspy.com at port 8888
- Transport can be configured as UDP or TCP on the device, depending on firmware options
- Plaspy uses automatic protocol detection to interpret incoming messages from the TS101 Advanced
- Events such as motion, impact, or I/O changes appear in Plaspy once the device is actively reporting
- Successful reports make the device visible for monitoring, history, and alerts in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TS101 Advanced (manufacturer tool, web portal, or installer app).
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888, which is the shared port used by Plaspy for all supported trackers.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration in the device tool and confirm the settings were written successfully.
6. Restart or power cycle the device if the manufacturer recommends a reboot after configuration.
7. Validate that the TS101 Advanced reports to Plaspy and appears as active in the platform.

## Example Configuration Commands

The exact configuration commands and methods vary by the manufacturer tool, firmware, and regional product variant. For the TS101 Advanced you will typically use Aquila provided configuration software, a serial/USB interface, or vendor instructions to set the server endpoint and port. Follow the device documentation and onboard configuration interface to enter:

- Server domain or server IP: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP

If your provider supplies SMS or console commands, use the official command syntax provided by Aquila in the device manual. Because the TS101 Advanced has multiple firmware revisions and configuration paths, rely on the manufacturer tool for exact command syntax.

## Configuration Notes

- Firmware differences can change configuration menus, command syntax, and feature availability. Record the device firmware version before and after setup.
- Choosing UDP or TCP can affect delivery behavior; test which transport provides the best reliability for your installation.
- Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection so you generally only need to set the endpoint and port.
- Installer best practice is to test one device end to end before bulk deploying a fleet.
- Always consult Aquila documentation for the precise steps and any SMS or console sequences that may be used for alternative configuration workflows.

## Why Use Plaspy with This Configuration

Using the Aquila TS101 Advanced with Plaspy enables organizations to centralize vehicle and asset visibility, monitor real time position updates, and receive event driven alerts in a single platform. The TS101 Advanced features like durable IP67 housing, onboard storage for historical records, and I O interfaces for immobilizer or sensor inputs make it suitable for fleet and asset applications where reliable reporting is required.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup steps, firmware releases, and detailed configuration commands consult the manufacturer documentation at https://www.itriangle.in/ to ensure your configuration matches the current device behavior.
