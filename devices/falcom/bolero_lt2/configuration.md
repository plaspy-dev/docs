---
slug: /falcom/bolero_lt2/configuration
id: bolero_lt2-configuration
sidebar_label: Configuration
title: Falcom - BOLERO-LT2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Falcom BOLERO LT2 tracker and practical steps to connect it to Plaspy tracking servers
keywords:
  - Falcom BOLERO LT2 configuration
  - Falcom BOLERO LT2 setup
  - Falcom GPS tracker Plaspy
  - BOLERO LT2 server configuration
  - BOLERO LT2 Plaspy integration
  - Falcom tracker configuration guide
  - vehicle tracking BOLERO LT2
  - fleet tracking Falcom Plaspy
  - GPS tracker setup Plaspy
  - AVL configuration Falcom
---

# Falcom - BOLERO-LT2 Configuration

This page documents the public configuration context for using the Falcom BOLERO-LT2 GPS tracker with Plaspy. It consolidates the practical server settings and workflow information you will need to prepare the device to communicate with Plaspy, while relying on publicly available facts about the tracker and the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform level. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so use this guide as a practical integration reference and verify device-specific procedures with Falcom documentation.

## Configuration Overview

The goal of the configuration process is to point the BOLERO-LT2 to Plaspy's server endpoint, ensure the tracker can establish a mobile data link, and validate that position and status updates are visible inside Plaspy. This typically involves using the Falcom configuration method or tool to set server parameters, transport, and any required carrier settings.

- Configure the device server endpoint so the tracker reports to Plaspy
- Choose the appropriate transport mode (UDP or TCP) if required by the device
- Supply carrier APN and SIM readiness to enable GSM GPRS connectivity
- Save and apply the settings and restart the unit if the device requires it
- Verify the tracker appears and reports correctly inside the Plaspy platform

## Plaspy Server Settings

Use the following public server settings when configuring the BOLERO-LT2 to connect to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when it receives connections

All devices in Plaspy use the same port, so set port 8888 when pointing the BOLERO-LT2 at the Plaspy endpoint.

## Typical Requirements Before Setup

- Confirm the BOLERO-LT2 is powered and accessible for configuration
- A working SIM card with mobile data enabled and the carrier APN available
- Access to the official Falcom configuration method or software for the BOLERO-LT2
- Device identification details such as IMEI or device ID to match the unit in Plaspy
- Network coverage at the installation site to allow GSM GPRS communication
- A Plaspy account or project where the device will be registered and validated

## How This Tracker Connects to Plaspy

When configured, the BOLERO-LT2 sends GPS location and device status data over the mobile network to the Plaspy server endpoint and port. Plaspy listens on the shared endpoint and port and automatically interprets the incoming tracker protocol to display the device on the platform.

- The tracker transmits position data to d.plaspy.com or the IP 54.85.159.138
- Data is sent to Plaspy on port 8888
- Transport is selected as UDP or TCP depending on the device settings
- Plaspy identifies the protocol automatically and parses incoming messages
- Once messages are received, location and status become visible in Plaspy for monitoring and reporting

## Common Configuration Workflow

1. Access the official Falcom configuration method or software for the BOLERO-LT2 (manufacturer tool, web interface, or SMS commands as provided by Falcom).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the tracker server setting.
3. Set the server port to 8888.
4. Choose UDP or TCP for the transport if the device requires a transport selection.
5. Configure any carrier APN or SIM related settings required for GSM GPRS data connectivity and save the settings.
6. Apply or save the configuration and restart the device if the manufacturer recommends or requires a reboot.
7. Validate that the device is reporting to Plaspy by confirming incoming data and visible location updates on the Plaspy platform.

## Example Configuration Commands

The BOLERO-LT2 may be configured using Falcom configuration tools, cloud provisioning, or manufacturer SMS/command interfaces. Exact commands vary by firmware and vendor tools, so consult Falcom documentation for command syntax. Because commands differ across firmware releases and provisioning methods, this section does not present vendor-specific commands. Use the Falcom configuration utility or official command reference to send the following logical configuration actions:

- Set server to d.plaspy.com or 54.85.159.138
- Set server port to 8888
- Select transport UDP or TCP if required
- Configure carrier APN and save
- Restart device if required and verify reporting

If you have Falcom-provided SMS or console commands from official documentation, apply them in the order Falcom recommends and then validate connectivity to d.plaspy.com on port 8888.

## Configuration Notes

- Firmware differences can change the exact configuration menu names, available transports, and required command syntax; verify the commands for your device firmware.
- Choose UDP or TCP based on device support and network reliability; both transports are accepted by Plaspy on port 8888.
- The BOLERO-LT2 uses GSM GPRS for data transmission, so ensure the SIM carrier APN is configured and the SIM has data allowance.
- Installer practices may vary between fixed indoor installations and field setups; follow Falcom installation guidance for antenna and power wiring.
- Always confirm the device IMEI or identifier to match the unit inside Plaspy after setup.

## Why Use Plaspy with This Configuration

Integrating the Falcom BOLERO-LT2 with Plaspy gives organizations a practical way to collect vehicle location and status data from a reliable tracker and surface that information in a single fleet management platform. Using the shared Plaspy server settings keeps setup consistent across devices and reduces work when managing multiple tracker models.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and official commands for the Falcom BOLERO-LT2, verify details on the manufacturer site https://www.falcom.de. Manufacturer specifications and setup methods can change over time, so always check Falcom documentation for the most current procedures.
