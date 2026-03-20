---
slug: /gosafe/g2p/configuration
id: g2p-configuration
sidebar_label: Configuration
title: Gosafe - G2P Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Gosafe G2P personal tracker explaining how to point the device to Plaspy for platform visibility and tracking
keywords:
  - Gosafe G2P configuration
  - Gosafe G2P setup
  - Gosafe G2P server configuration
  - G2P GPS tracker configuration
  - Gosafe tracker Plaspy integration
  - G2P setup for Plaspy
  - Gosafe G2P SMS setup
  - personal tracker G2P configuration
  - tracking platform configuration G2P
  - G2P tracking software setup
---

# Gosafe - G2P Configuration

This page covers the public configuration context for using the Gosafe G2P personal tracker with Plaspy. It explains the practical server settings and workflow required to point a G2P device at the Plaspy platform so the device can report location and status. The guidance here is focused on the shared Plaspy endpoint and how the device is prepared for platform visibility rather than on proprietary manufacturer tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The G2P supports simple SMS commands and platform access, so common setup approaches include using the manufacturer configuration method or SMS-based commands to set the Plaspy server and port.

## Configuration Overview

The goal of configuration is to prepare the G2P so it reliably communicates with Plaspy for real time tracking and event reporting. This involves setting the correct Plaspy server endpoint and port, selecting the appropriate transport where required, and validating connectivity from the device to the platform.

- Configure the tracker to report to the Plaspy server endpoint so location packets reach the platform
- Set the common Plaspy port used by all supported devices to ensure consistent routing
- Choose the transport mode (UDP or TCP) if the device requires an explicit selection
- Validate the device reports by checking visibility in Plaspy once configuration is applied
- Use the manufacturer configuration method or SMS commands to apply settings depending on the device tools available

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: All devices in Plaspy use the same port, 8888, and the platform will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A powered and operational G2P device with sufficient battery charge
- A working SIM card in the device if SMS or mobile data is required for configuration and reporting
- Access to the official Gosafe configuration method or software for the G2P or the ability to send SMS setup commands
- The device IMEI or identifier ready for registration or lookup when validating connectivity
- Plaspy account access or the appropriate fleet details to confirm the device appears on the platform
- A brief test plan to confirm location reporting and event visibility after configuration

## How This Tracker Connects to Plaspy

The G2P is configured to send location and status packets to the Plaspy endpoint so the device becomes visible in the Plaspy platform. Once configured, Plaspy will receive the tracker messages on the shared server and port and will identify the device protocol automatically.

- The tracker reports location and status messages to the Plaspy server endpoint d.plaspy.com
- Messages are sent to Plaspy at 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device configuration choice
- Plaspy automatically detects the tracker protocol and processes incoming data
- After successful configuration the device will appear in Plaspy and report events and location updates for monitoring

## Common Configuration Workflow

1. Access the official Gosafe G2P configuration method or software, or prepare SMS commands if the device uses SMS configuration.
2. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138 in the device configuration fields.
3. Set the device port to 8888 as this is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP if the tracker requires selecting a transport protocol.
5. Apply or save the configuration in the manufacturer tool or send the SMS configuration command to the device.
6. Restart the device if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility and recent events in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands or SMS syntax for the Gosafe G2P vary by firmware and vendor tool and are provided by the manufacturer. Because commands and syntax can change, consult the official Gosafe configuration documentation or the device manual for the exact SMS phrases or software steps required to set the server and port.

If you are using SMS to configure the G2P, typical public flows involve a command to set the server address and a command to set the port and transport, followed by a save or reboot command. Use the Gosafe documentation as the authoritative reference for the exact command strings.

## Configuration Notes

- Firmware differences and hardware revisions can change configuration command syntax and available options; always verify against the current Gosafe documentation.
- Choose UDP or TCP according to the device requirement; Plaspy supports both and will accept data on port 8888.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol upon receiving device messages.
- If the G2P supports SMS-based setup, ensure the SIM can send and receive SMS and that any required APN or data settings are correct according to the manufacturer.
- Validate connectivity after configuration by checking for incoming messages and device presence in Plaspy.

## Why Use Plaspy with This Configuration

Using the Gosafe G2P with Plaspy gives organizations and caregivers practical visibility into device location and status through a single shared server configuration. Pointing the G2P to d.plaspy.com or 54.85.159.138 on port 8888 simplifies integration because Plaspy uses the same port across devices and automatically identifies the protocol, reducing per device configuration complexity.

To learn more about Plaspy and supported tracking workflows visit https://www.plaspy.com. For the latest device specific commands, firmware behaviors, and manufacturer setup instructions for the Gosafe G2P, please verify details at the official Gosafe website https://gosafesystem.com/ as manufacturer documentation is the authoritative source for device specific setup.
