---
slug: /ulbotech/t373a/configuration
id: t373a-configuration
sidebar_label: Configuration
title: Ulbotech - T373A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Ulbotech T373A OBD II tracker to Plaspy with required server settings and setup workflow
keywords:
  - Ulbotech T373A configuration
  - Ulbotech T373A setup
  - T373A Plaspy integration
  - T373A OBD II tracker
  - vehicle tracking T373A
  - fleet management T373A
  - Ulbotech GPS tracker configuration
  - Plaspy tracker setup
  - OBDII GPS tracker setup
  - T373A server configuration
---

# Ulbotech - T373A Configuration

This page documents the public configuration context for using the Ulbotech T373A plug and play OBD II tracker with the Plaspy platform. It focuses on the practical server settings and the common workflow required to point the device to Plaspy so the tracker can deliver real time location and vehicle telemetry to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for the T373A can vary by firmware version, hardware revision, installation environment, and vendor configuration tools. Use this guide to prepare and validate the device for Plaspy, and consult the manufacturer for firmware specific instructions when needed.

## Configuration Overview

The aim of the configuration process is to ensure the T373A reports location and OBD II telemetry reliably to the Plaspy server endpoint so data appears in the Plaspy platform for monitoring and analysis. This involves setting the tracker server address, transport, and port, verifying cellular connectivity and OBD II data, and confirming the device is visible in Plaspy.

- Point the T373A to the Plaspy server endpoint and port so telemetry is sent directly to Plaspy.
- Select the transport (UDP or TCP) if the device requires a transport type to be configured.
- Confirm cellular network connectivity and a valid SIM in the device during setup.
- Validate that OBD II telemetry and GNSS fixes are being reported to the platform.
- Save and apply configuration on the device and then test reporting to Plaspy.

## Plaspy Server Settings

Use these public server values when configuring the T373A for Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port for plug and play installation and power from the vehicle.
- A valid micro USIM with a data plan fitted to the T373A; the T373A supports multi band GSM WCDMA networks.
- Access to the official Ulbotech configuration method or software such as the vendor’s PC tool, micro USB debug interface, or approved SMS commands where provided.
- A Plaspy account or administrator access to validate that the tracker appears and reports in the platform.
- Basic diagnostic checks such as confirming GNSS lock and OBD II data fields (RPM, speed, coolant temperature) on the device before final deployment.

## How This Tracker Connects to Plaspy

The T373A streams GNSS position data and rich OBD II telemetry to the Plaspy endpoint so the platform can normalize and visualize vehicle state, faults, and events. The device communicates over the cellular network and is configured to report to the shared Plaspy server endpoint and port.

- The tracker is configured to send UDP or TCP packets to d.plaspy.com or 54.85.159.138 on port 8888.
- GNSS coordinates and motion events are transmitted to Plaspy for live mapping and alerts.
- OBD II parameters such as RPM, speed, fuel data, and diagnostic trouble codes are sent to Plaspy for reporting and analysis.
- Event reporting from the accelerometer and geofence triggers are forwarded to Plaspy for notifications.
- Plaspy automatically detects the incoming tracker protocol so no manual selection of protocol detection is required on the platform side.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T373A (vendor PC tool, micro USB interface, or approved configuration channel).
2. In the device server settings enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888 as Plaspy uses a uniform port for all devices.
4. If the device firmware requires a transport selection, choose UDP or TCP according to your installation preference.
5. Apply or save the configuration in the device tool and confirm settings were accepted by the tracker.
6. Restart or power cycle the T373A if the manufacturer instructions require a reboot for changes to take effect.
7. Validate that the tracker reports to Plaspy by checking device visibility and incoming telemetry in your Plaspy account.

## Example Configuration Commands

The T373A supports multiple configuration methods depending on firmware and vendor tools. Exact configuration commands vary by manufacturer software, firmware version, and regional device variants. Refer to the official Ulbotech configuration tool or documentation for command syntax and the proper method for your device.

If you use a vendor SMS or serial command method provided by Ulbotech, follow the manufacturer guide to format server, port, and transport parameters. Keep in mind Plaspy accepts connections sent to d.plaspy.com or 54.85.159.138 on port 8888 and will automatically detect the tracker protocol.

## Configuration Notes

- Firmware differences may change the exact configuration user interface or command syntax; always check the device firmware release notes before applying settings.
- For installations that require a specific transport, TCP can be chosen for reliable delivery while UDP is commonly used for lower overhead; choose based on network and operator characteristics.
- Device behavior such as auto APN detection and FOTA update availability depends on the installed firmware and SIM operator provisioning.
- Installer practices may vary by market and vehicle; test one device end to end with Plaspy before mass deployment.
- Consult Ulbotech documentation for any SMS based or micro USB configuration methods specific to the T373A.

## Why Use Plaspy with This Configuration

Configuring the T373A to report to Plaspy provides centralized visibility of vehicle location, OBD II telemetry, and driver behavior in a single fleet management platform. For fleets, rental operators, insurers, and roadside assistance providers, linking T373A data to Plaspy enables live maps, alerts, diagnostics, and analytics to support operational decisions and rapid response workflows.

To learn more about Plaspy and how the platform can work with compatible trackers such as the Ulbotech T373A visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and technical specifications on the official Ulbotech website http://www.ulbotech.com/ before final deployment.
