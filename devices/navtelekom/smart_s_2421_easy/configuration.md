---
slug: /navtelekom/smart_s_2421_easy/configuration
id: smart_s_2421_easy-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2421 EASY+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Navtelekom SMART S-2421 EASY+ to Plaspy with server settings and practical setup steps
keywords:
  - Navtelekom SMART S-2421 EASY+ configuration
  - Navtelekom GPS tracker setup
  - SMART S-2421 EASY+ Plaspy
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker server configuration
  - fleet management tracker setup
  - NTC Configurator setup guidance
  - GNSS telemetry configuration
  - tracker to Plaspy connection
---

# Navtelekom - SMART S-2421 EASY+ Configuration

This page documents the public configuration context for using the Navtelekom SMART S-2421 EASY+ tracker with Plaspy. It focuses on the practical server settings, preparatory checks, and the typical workflow required to point the device at Plaspy so live location and telemetry are visible in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the service. Manufacturer steps can vary by firmware, hardware revision, installation type, and the vendor tools such as the NTC Configurator, so follow this guide together with the official Navtelekom resources.

## Configuration Overview

This configuration process prepares the SMART S-2421 EASY+ to communicate with Plaspy by setting the server endpoint, choosing the transport, and validating reporting so the device appears in the platform and sends location and telemetry data reliably.

- Point the tracker to the Plaspy server domain or IP so outbound packets reach the platform.
- Use the shared Plaspy port so the platform can accept messages from this and other supported devices.
- Choose UDP or TCP on the tracker when the device requires a transport selection.
- Save and apply settings with the manufacturer's NTC Configurator or approved configuration method.
- Validate visibility in Plaspy by confirming the device reports GNSS location and telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol when the device reports to the server  
- All devices in Plaspy use the same port so the tracker should be configured to use port 8888

## Typical Requirements Before Setup

- A SMART S-2421 EASY+ unit with power connected and ready for configuration.  
- A working 2G SIM card installed and enabled for data in the target region if required by the tracker modem.  
- Access to the manufacturer's configuration method such as the NTC Configurator utility or official configuration manual.  
- Basic wiring and power verification completed to ensure the device boots and registers to the mobile network.  
- Access to Plaspy account credentials and a management workflow to confirm the device appears in the fleet view after setup.  
- Manufacturer documentation and firmware notes available for compatibility checks and changelogs.

## How This Tracker Connects to Plaspy

When configured, the SMART S-2421 EASY+ sends GNSS location and telemetry to the Plaspy server endpoint. Plaspy ingests those messages, applies protocol detection, and makes the device data available for live tracking, history, alerts, and integrations.

- The tracker is pointed at d.plaspy.com or 54.85.159.138 on port 8888 for outbound reporting.  
- Transport settings on the device can be set to UDP or TCP depending on the device option; Plaspy accepts either.  
- Plaspy automatically detects the tracker protocol to parse incoming data correctly.  
- Location, accelerometer events, and sensor inputs are forwarded into Plaspy for visualization and rules.  
- Once the device reports, fleet managers can validate live positions and create alerts or reports in Plaspy.

## Common Configuration Workflow

1. Obtain the SMART S-2421 EASY+ and confirm it is powered and has network connectivity.  
2. Open the official manufacturer configuration tool such as NTC Configurator or use the documented configuration method.  
3. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138.  
4. Set the port to 8888, as Plaspy uses the same port for all supported devices.  
5. Choose the transport protocol UDP or TCP if the tracker requires an explicit selection.  
6. Apply or save the configuration using the manufacturer tool and, if required, restart the device to apply settings.  
7. Validate that the tracker reports to Plaspy by checking device connectivity and live location in the Plaspy platform.

## Example Configuration Commands

The SMART S-2421 EASY+ is typically configured using the manufacturer supplied NTC Configurator utility or an equivalent configuration method provided in the device Passport. Exact command strings and SMS configuration formats vary by firmware and the NTC utility version. Follow the NTC Configurator workflow to set the server domain or IP and port, then save and restart the device as required.

If you prefer command line or SMS based methods and you have manufacturer-provided commands from the Passport, apply those exact commands in the order documented by Navtelekom. Because SMS and command formats differ by firmware, consult the official device manual for exact syntax before sending commands.

## Configuration Notes

- Firmware differences may change available configuration fields and the exact workflow in NTC Configurator. Always verify firmware notes before making bulk changes.  
- TCP and UDP both work with Plaspy; choose the transport that matches your installation practices or network constraints.  
- Because Plaspy uses the same port for all devices, the device port setting must be 8888 to ensure successful arrival at d.plaspy.com or 54.85.159.138.  
- Use the manufacturer Passport and wiring example PDFs to confirm physical connections, I O usage, and battery behavior.  
- If you rely on SMS configuration, verify the SMS command set in the official manual as syntax and placeholders may vary.

## Why Use Plaspy with This Configuration

Configuring the SMART S-2421 EASY+ to report to Plaspy gives fleet operators a straightforward path to real-time location, route history, and telemetry-based alerts. Plaspy's automatic protocol detection reduces configuration complexity on the platform side, letting you focus on installing devices, verifying connectivity, and building operational rules.

To learn more about Plaspy and how it handles device telemetry, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, verify the official Navtelekom documentation at https://www.navtelecom.ru/
