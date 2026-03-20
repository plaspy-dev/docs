---
slug: /orion/et_100/configuration
id: et_100-configuration
sidebar_label: Configuration
title: Orion - ET-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Orion ET-100 to connect with Plaspy using shared server settings and automatic protocol detection
keywords:
  - Orion ET-100 configuration
  - Orion ET-100 setup
  - Orion ET-100 server configuration
  - Plaspy tracker setup
  - Plaspy device configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - asset tracker configuration
  - Orion tracker Plaspy
  - ET-100 GPS platform setup
---

# Orion - ET-100 Configuration

This page covers the public configuration context for using the Orion ET-100 GPS tracker with Plaspy. It focuses on the practical server settings and workflow required to point the device at Plaspy so the tracker can report location and event data to the platform. Use this page as a practical reference for applying the shared Plaspy settings to the ET-100; it does not replace the official manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, simplifying server-side requirements. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so confirm the exact configuration method provided by Orion or your device vendor before making changes.

## Configuration Overview

The objective of configuring an ET-100 for Plaspy is to prepare the tracker to send its location and status updates to Plaspy and to confirm visibility on the platform. The process centers on pointing the device at Plaspy's shared endpoint and verifying that the tracker reaches the platform.

- Configure the ET-100 to report to the Plaspy server endpoint so data flows into the platform.
- Choose the transport method the device supports (UDP or TCP) and set it accordingly.
- Apply the server host and port values used by Plaspy so the tracker knows where to send messages.
- Save and, if required by the device, restart the tracker to apply new settings.
- Validate connectivity by confirming the device appears and reports in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the ET-100:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the ET-100 may be configured with either)
- Plaspy automatically detects the tracker protocol so the same port is used for all devices

These values are the central target for the ET-100 so that location and event data are delivered to Plaspy.

## Typical Requirements Before Setup

- The ET-100 must be powered and accessible for configuration or have the installer present.
- Access to the official Orion configuration method or software is required to change server and transport settings.
- A Plaspy account or access to the Plaspy instance where devices will be registered is recommended for validation.
- A reliable network connection for the device so it can reach d.plaspy.com or 54.85.159.138.
- Note the device firmware version and any vendor-specific instructions before making changes.
- Basic knowledge of whether the device requires UDP or TCP selection during configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the ET-100 sends its location and event messages to the platform using the shared Plaspy endpoint and port. Plaspy then processes the incoming messages and makes the tracker visible in the platform interface for monitoring and operational use.

- The tracker is pointed at the Plaspy server domain or IP address (d.plaspy.com or 54.85.159.138).
- Messages are sent to port 8888 as configured on the device.
- Transport is chosen as UDP or TCP depending on device requirements; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol on receipt so the same port works for all supported models.
- After successful connection, location updates, geofence events, and SOS signals become visible in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Orion ET-100 configuration method or manufacturer software as described by Orion or your vendor.
2. Locate the server or host setting and enter d.plaspy.com or, where a numeric host is required, use 54.85.159.138.
3. Set the server port to 8888, which is the port used by all devices in Plaspy.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration changes in the device interface or configuration tool.
6. Restart the ET-100 if required by the device firmware to apply the new settings.
7. Validate that the tracker reports to Plaspy by checking device presence and recent messages in the platform.

## Example Configuration Commands

The ET-100 manufacturer tools and firmware determine the exact command syntax for configuration. Because commands and procedures vary by firmware and vendor utility, consult the Orion documentation or the device configuration utility for exact steps. When a device requires textual command input, use the Plaspy server domain or IP and port values shown above (d.plaspy.com or 54.85.159.138 and port 8888), and select UDP or TCP as appropriate.

If you receive or locate manufacturer-provided example commands for the ET-100, preserve placeholders exactly as provided (for example [apn] or similar) and follow Orion guidance when substituting values.

## Configuration Notes

- Firmware and configuration utilities differ across hardware revisions; always check the ET-100 firmware version before applying changes.
- Choose TCP when a reliable, connection-oriented transport is required by your installation; choose UDP for lower overhead when supported. Plaspy accepts both on the same port.
- Plaspy uses the same port for all supported devices and automatically detects the incoming tracker protocol, so server port consistency is important.
- Always save or apply settings in the manufacturer tool and, if required, perform a device restart to ensure values are used.
- Refer to Orion documentation for device-specific commands or GUI steps when available.

## Why Use Plaspy with This Configuration

Using the Orion ET-100 with Plaspy provides a straightforward way to bring ET-100 location and event data into a single monitoring platform. Pointing the tracker at Plaspy's shared server endpoint simplifies onboarding and lets organizations centralize visibility for asset management, fleet oversight, or personal security monitoring.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most up-to-date device-specific configuration methods, firmware behavior, and manufacturer details, verify information on the official Orion website at http://www.oriontech.com.tw/ as vendor instructions and firmware can change over time.
