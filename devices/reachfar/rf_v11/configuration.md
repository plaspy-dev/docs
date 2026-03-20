---
slug: /reachfar/rf_v11/configuration
id: rf_v11-configuration
sidebar_label: Configuration
title: Reachfar - RF-V11 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Reachfar RF V11 for Plaspy centralized tracking and alarm forwarding using shared server settings and practical setup guidance
keywords:
  - Reachfar RF V11 configuration
  - Reachfar RF V11 setup
  - Reachfar RF V11 Plaspy
  - RF V11 server configuration
  - RF V11 GPS tracker setup
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - asset tracker setup
  - anti theft tracker configuration
  - small asset tracking
---

# Reachfar - RF-V11 Configuration

This page documents the public configuration context for using the Reachfar RF-V11 with the Plaspy platform. It explains the shared server settings Plaspy requires and practical setup guidance based on the RF-V11 product description, which highlights a compact battery powered GPS tracker with magnetic, vibration and sound sensors, SMS command support, and remote listening capability.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side configuration steps for the RF-V11 can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the public Plaspy settings and validate connectivity, then refer to Reachfar documentation for device specific command syntax and advanced features.

## Configuration Overview

Configuring an RF-V11 for Plaspy prepares the device to forward position reports and alarm events to a single Plaspy server endpoint so you can monitor small assets centrally. The goal is to point the tracker at Plaspy, confirm connectivity, and verify events appear in the Plaspy platform.

- Point the RF-V11 to Plaspy server d.plaspy.com or the equivalent server IP to deliver position and alarm data.
- Use port 8888 on the tracker configuration so data is routed to Plaspy on the same port used for all devices.
- Choose UDP or TCP transport on the device when the tracker requires a transport choice.
- Save and apply the device configuration and restart the tracker if required by the firmware.
- Validate the device reports appear in Plaspy and that alarm SMS or events are forwarded as expected.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: Configure UDP or TCP on the device if a transport selection is required
- Protocol detection: Plaspy automatically detects the tracker protocol
- Note: All devices in Plaspy use the same port so configure port 8888 for the RF-V11 to ensure consistent routing

## Typical Requirements Before Setup

- Charged device battery and basic device power management confirmed
- Active SIM card with mobile network coverage compatible with the RF-V11 quad band GSM radio
- Access to the Reachfar configuration method you will use such as the official software, web tool, or SMS command interface
- GPS reception for initial position fix when validating location reporting
- An active Plaspy account or access to your Plaspy platform environment to validate incoming device data
- Basic knowledge of the RF-V11 SMS command set or configuration tool if you will configure the device over SMS

## How This Tracker Connects to Plaspy

When configured for Plaspy, the RF-V11 is set to send position reports and alarm events to the shared Plaspy server endpoint and port. Plaspy ingests those reports and presents location and event information on a central dashboard for operators and administrators.

- The device is pointed to d.plaspy.com or the server IP 54.85.159.138 and uses port 8888 for forwarding
- Transport can be UDP or TCP depending on the RF-V11 configuration option and firmware support
- Plaspy automatically detects the tracker protocol so the platform can parse reports without per device protocol setup
- Position reports and alarm events are forwarded to Plaspy for mapping, event history, and notification handling
- SMS alerts and remote call features on the RF-V11 can complement the server reports and provide immediate local notifications

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software for the RF-V11, or prepare SMS command access if the device is configured via SMS.
2. In the device configuration, set the server address to d.plaspy.com or use the server IP 54.85.159.138 if you prefer IP entry.
3. Set the destination port to 8888 to match the Plaspy shared port for all devices.
4. If the device requires a transport selection, choose UDP or TCP according to installer preference or firmware recommendation.
5. Apply or save the configuration on the RF-V11 using the manufacturer tool or by sending the appropriate SMS command.
6. Restart the device if the firmware requires a reboot for network or server changes to take effect.
7. Validate that the RF-V11 reports to Plaspy by checking for the device in your Plaspy environment and confirming position or alarm events are received.

## Example Configuration Commands

The RF-V11 supports remote SMS commands and manufacturer configuration tools, but exact command formats can vary by firmware and vendor software. Because manufacturer command syntax differs across versions and vendors, follow the Reachfar user manual or official configuration tool for precise SMS command examples or configuration file formats. If you plan to use SMS commands, prepare to use the official command set from Reachfar for setting server, port, transport, and other device parameters.

## Configuration Notes

- Firmware differences: Reachfar firmware and hardware revisions can change command syntax, available fields, and restart behavior. Verify commands against the device manual for your firmware version.
- TCP versus UDP: Choose UDP when lower overhead and faster delivery are preferred, or TCP when you require connection reliability. The RF-V11 may allow either; configure whichever the device supports and your network prefers.
- SMS configuration: The RF-V11 supports remote SMS configuration in addition to software based setup. SMS commands are useful for headless installations but verify exact strings in the official manual.
- Shared port behavior: Plaspy uses the same port 8888 for all devices, simplifying configuration and network rules on firewalls.
- Validation: After applying settings, test both location reports and alarm events so you confirm both periodic updates and immediate alerts arrive at Plaspy.

## Why Use Plaspy with This Configuration

Using the Reachfar RF-V11 with Plaspy centralizes small asset tracking and alarm management in a single monitoring environment. For installers and operators protecting safes, doors, shutters, or portable valuables, the RF-V11's compact form factor and sensor suite combined with Plaspy visibility provide centralized event history, mapping, and alert consolidation.

To learn more about Plaspy and how the platform can manage RF-V11 devices across deployments visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details verify current documentation at the Reachfar website https://www.reachfargps.com/.
