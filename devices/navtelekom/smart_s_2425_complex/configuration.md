---
slug: /navtelekom/smart_s_2425_complex/configuration
id: smart_s_2425_complex-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2425 COMPLEX Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Navtelekom SMART S-2425 COMPLEX for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Navtelekom SMART S-2425 COMPLEX
  - SMART S-2425 COMPLEX configuration
  - Navtelekom GPS tracker setup
  - Plaspy tracker configuration
  - Plaspy compatible tracker
  - vehicle tracking setup
  - fleet management tracker configuration
  - GNSS GLONASS tracker setup
  - dual SIM GPS tracker configuration
  - NTC Configurator setup
---

# Navtelekom - SMART S-2425 COMPLEX Configuration

This page covers the public configuration context for using the Navtelekom SMART S-2425 COMPLEX with Plaspy. It summarizes the practical server settings and the typical steps integrators use to commission this tracker so it reports position and telemetry to the Plaspy platform. The content below is based on public device characteristics and the shared Plaspy server settings required for platform connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects, while manufacturer side setup steps can vary by firmware, hardware revision, installation type, and the vendor configuration tools you use. The SMART S-2425 COMPLEX supports GNSS plus GLONASS positioning, 2G cellular with dual SIM, Bluetooth local configuration, and Navtelekom NTC Configurator tools for firmware and configuration management, which are commonly used during commissioning.

## Configuration Overview

This configuration process prepares the SMART S-2425 COMPLEX to send GNSS positions and vehicle telemetry to Plaspy by pointing the device to the Plaspy server endpoint and confirming reliable cellular connectivity. The goal is to ensure the tracker is reachable, reporting expected events, and visible in the Plaspy platform.

- Point the tracker to the Plaspy server endpoint so data packets are routed to Plaspy.
- Select the transport mode the device supports and save the server and port settings.
- Verify cellular connectivity and dual SIM behavior to maintain uptime during coverage changes.
- Validate live reporting in Plaspy and confirm the device appears in the platform.
- Use Navtelekom NTC Configurator or local Bluetooth tools for firmware updates and to apply device-specific settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically, so consistent server and port configuration is the primary requirement on the device side.

## Typical Requirements Before Setup

- Ensure the tracker has a reliable vehicle power connection and is charged or has its backup battery available for commissioning.
- Install active SIM cards with an appropriate data plan and confirm 2G GSM coverage at the installation site since the device uses a 2G modem.
- Access to Navtelekom configuration tools such as the NTC Configurator or Bluetooth commissioning utility for local setup and firmware management.
- Device wiring and sensor connections completed for inputs, outputs, serial ports, or 1-Wire sensors that will be used with Plaspy telemetry.
- A Plaspy account or administrator access to your Plaspy instance to verify device visibility after configuration.
- Basic knowledge of whether the installation requires UDP or TCP transport selection, and any transport-related preferences for your network.

## How This Tracker Connects to Plaspy

When configured, the SMART S-2425 COMPLEX sends GNSS positions and telemetry over the cellular network to the shared Plaspy endpoint and port. Plaspy receives the device packets on port 8888 and determines the correct protocol automatically so the device is processed and presented in the platform.

- The device is configured to send data to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP; choose the option required by the device or network environment.
- Dual SIM support helps keep a data channel active when the primary network is not available.
- Telemetry from inputs, serial ports, and 1-Wire sensors is transmitted alongside GNSS positions to Plaspy.
- Plaspy performs protocol detection and begins accepting and parsing data once the device connects to the shared server endpoint.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method such as the NTC Configurator software or the device's Bluetooth commissioning interface.
2. In the device server settings enter d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP for transport if the device requires an explicit choice.
5. Save or apply the configuration in the manufacturer tool and confirm settings were written to the device.
6. Restart or power cycle the device if the device or firmware requires a reboot for settings to take effect.
7. Validate the tracker reports to Plaspy by checking device status and recent position/telemetry in your Plaspy account or dashboard.

## Example Configuration Commands

The SMART S-2425 COMPLEX is commonly configured with Navtelekom tools or via Bluetooth commissioning applications provided by Navtelekom. Exact command syntax and methods vary by firmware and vendor tool. Because model configuration commands are provided by Navtelekom and can change with firmware, follow the NTC Configurator instructions for command-based configuration.

When performing direct server configuration in a manufacturer tool, use the Plaspy values shown here:
- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Select UDP or TCP as required by the device

Refer to Navtelekom configuration guides or NTC Configurator documentation for exact command line or SMS formats if you require command-level configuration examples.

## Configuration Notes

- Firmware differences can change the exact menu names, command formats, or available transport options; always check the tracker firmware version before following a procedure.
- Navtelekom NTC Configurator and Bluetooth local configuration are the primary public tools for commissioning the SMART S-2425 COMPLEX; use these tools for firmware updates and reliable configuration.
- TCP and UDP behave differently on mobile networks; choose UDP for lower overhead where supported, or TCP where persistent connection behavior is preferred.
- Dual SIM behavior can affect which SIM is used for data; verify SIM slot priority and roaming or APN settings as part of commissioning.
- Confirm that wiring for inputs, outputs, serial ports, and 1-Wire sensors is complete before final verification in Plaspy.

## Why Use Plaspy with This Configuration

Using the SMART S-2425 COMPLEX with Plaspy provides a straightforward path for fleet operators and integrators to collect GNSS positions and detailed vehicle telemetry in a central platform. Plaspy's shared server endpoint and automatic protocol detection reduce the complexity of onboarding devices, while the tracker hardware features like dual SIM, backup battery, and rich I/O support robust operational monitoring and anti-theft workflows.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and official configuration tools consult Navtelekom documentation at https://www.navtelecom.ru/ to verify the current manufacturer guidance.
