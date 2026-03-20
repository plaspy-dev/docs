---
slug: /falcom/fox3_4g_na/configuration
id: fox3_4g_na-configuration
sidebar_label: Configuration
title: Falcom - FOX3-4G-NA Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring Falcom FOX3-4G-NA with Plaspy server settings and practical integration steps
keywords:
  - Falcom FOX3-4G-NA configuration
  - FOX3-4G-NA setup
  - Falcom tracker Plaspy
  - FOX3 server settings
  - vehicle tracking configuration
  - GPS tracker setup guide
  - Plaspy server configuration
  - fleet management tracker
  - Falcom FOX3 integration
  - FOX3 GPS platform setup
---

# Falcom - FOX3-4G-NA Configuration

This page covers the public configuration context for using the Falcom FOX3-4G-NA tracker with Plaspy. It explains the practical server settings and workflow needed to point your device at the Plaspy endpoint so location and device data can be received by the platform. The information here focuses on Plaspy integration details that are public and commonly required for server‑side configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. Refer to Falcom documentation or your installer tool for the device specific menu names, SMS command formats, or configuration utilities that apply to your FOX3-4G-NA unit.

## Configuration Overview

The goal of this configuration is to prepare the FOX3-4G-NA to communicate reliably with the Plaspy platform so the device appears in the fleet and reports events and positions. Using the public Plaspy endpoint and port will enable the tracker to transmit its telemetry to Plaspy where you can monitor and manage the device.

- Point the device to the Plaspy server endpoint so data routes to the platform
- Configure the transport protocol and port consistent with Plaspy settings
- Validate cellular connectivity and GNSS reception to ensure reports are sent
- Save and apply settings on the Falcom device and confirm visible reports in Plaspy
- Use manufacturer configuration tools or SMS commands as provided by Falcom to implement the settings

## Plaspy Server Settings

Configure your FOX3-4G-NA to report to the following Plaspy server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using either UDP or TCP as required by your configuration method
- Plaspy automatically detects the tracker protocol so the device can use the shared server endpoint
- Note that all devices in Plaspy use the same port so setting port 8888 is consistent across supported trackers

## Typical Requirements Before Setup

- Device powered and accessible for configuration either via the Falcom configuration tool or installer interface
- Active cellular SIM with data enabled and coverage for the deployment region
- GNSS antenna or installation position that provides reliable satellite reception
- Access to Falcom configuration documentation or support tools for the FOX3-4G-NA
- A Plaspy account or provisioning workflow to confirm the device appears after configuration
- Firmware on the FOX3-4G-NA that supports remote server configuration and required protocols

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the FOX3-4G-NA will send periodic and event driven messages to the shared Plaspy endpoint so devices are visible and monitored on the platform. The device uses its cellular data connection to deliver telemetry to the server address and port listed above.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138
- Reports are sent to port 8888 which is the common port used by Plaspy for supported devices
- Transport can be UDP or TCP depending on the device configuration method and your preference
- Plaspy automatically detects the device protocol upon receiving a connection so manual protocol selection is generally not required on the server side
- Once reporting, the device will appear in Plaspy and transmit location updates and status information for platform monitoring

## Common Configuration Workflow

1. Access the official Falcom configuration method or software for the FOX3-4G-NA, such as the web interface, USB/serial tool, or installer utility provided by Falcom or your supplier.
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 in the device server/host field.
3. Set the device port to 8888 which is the shared Plaspy port for all supported devices.
4. Choose UDP or TCP for transport if the device requires you to select a transport protocol.
5. Apply or save the configuration in the Falcom tool and confirm that the settings were successfully written to the device.
6. Restart the FOX3-4G-NA if required by the firmware or configuration tool to start reporting to Plaspy.
7. Validate that the device is reporting to Plaspy by checking device visibility and recent telemetry in your Plaspy account or monitoring interface.

## Example Configuration Commands

The FOX3-4G-NA supports different configuration methods depending on firmware and the Falcom tools you use. Exact command syntax and available SMS or CLI commands vary by firmware and regional firmware builds, so consult Falcom documentation for device specific command formats. Plaspy accepts connections to d.plaspy.com or 54.85.159.138 on port 8888 via UDP or TCP and will automatically detect the tracker protocol.

## Configuration Notes

- Firmware differences can change menu names, command syntax, and available configuration options. Always confirm the exact steps for your firmware build.
- When choosing UDP versus TCP, consider network conditions and the configuration options exposed by your Falcom tool. Plaspy supports both transports.
- Use the domain d.plaspy.com when possible so DNS resolution handles any future backend IP changes, otherwise the provided IP 54.85.159.138 is an acceptable alternative.
- Some installers prefer to configure the server by IP when working in offline or restricted environments; others use the domain. Both are supported by Plaspy.
- Verify GNSS and cellular signal during setup so the device can successfully establish a data session and transmit initial telemetry after configuration.

## Why Use Plaspy with This Configuration

Using the FOX3-4G-NA with Plaspy provides a straightforward path to get device telemetry into a fleet management platform that supports automatic protocol detection and consistent server settings. Organizations gain reliable position reporting and device visibility by configuring the tracker to the shared Plaspy endpoint and port.

To learn more about Plaspy and the platform features available for fleet tracking, visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official Falcom guidance for the FOX3-4G-NA, verify information on the manufacturer site at https://www.falcom.de as device behavior and setup methods can change over time.
