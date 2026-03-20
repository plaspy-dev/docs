---
slug: /navtelekom/s_4513/configuration
id: s_4513-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4513 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Navtelekom СМАРТ S-4513 integration with Plaspy including required server settings and practical configuration steps
keywords:
  - Navtelekom S-4513 configuration
  - СМАРТ S-4513 setup
  - Navtelekom tracker Plaspy
  - S-4513 server configuration
  - S-4513 fleet management
  - GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking setup
  - Navtelekom GPS configuration
  - S-4513 telemetry setup
---

# Navtelekom - СМАРТ S-4513 Configuration

This page documents the public configuration context for using the Navtelekom СМАРТ S-4513 tracker with Plaspy. It focuses on the shared server settings, the practical workflow to point the device to Plaspy, and the typical prerequisites you should confirm before integration. The guidance below is intended for installers and fleet integrators preparing the S-4513 for production use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and the configuration tool you use. The S-4513 is Plaspy compatible out of the box and uses its 4G modem, dual SIM redundancy, built‑in GNSS, and flexible I/O to stream locations and telemetry to Plaspy once server settings are applied.

## Configuration Overview

This configuration process prepares the S-4513 to communicate reliably with Plaspy so the tracker appears in the platform and sends position and sensor telemetry for monitoring, alerts, and reporting.

- Point the device to the Plaspy ingestion endpoint so GNSS and sensor data are forwarded to Plaspy.
- Select the appropriate transport (UDP or TCP) if the device requires a transport choice.
- Configure the device to use the shared Plaspy port so the platform can accept messages.
- Validate connectivity from the tracker to Plaspy and confirm the device appears in the platform.
- Save or apply settings and, if required, restart the tracker to activate the new server configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use one of the server endpoints above in the manufacturer configuration tool or device interface when registering the S-4513 to Plaspy. Plaspy’s automatic protocol detection means you only need to supply the correct server host and the shared port.

## Typical Requirements Before Setup

- A powered and accessible S-4513 unit with any required vehicle wiring completed.
- An active data SIM installed and registered if cellular data is used; confirm dual SIM settings if you plan to use redundancy.
- Access to the manufacturer configuration method such as NTC Configurator, DRC remote management, or the vendor-supplied setup tool.
- A Plaspy account and permission to register or view devices in the Plaspy platform.
- Knowledge of the device firmware version and any vendor notes that affect configuration flow or command format.
- Basic ability to restart the device or cycle power after applying configuration changes.

## How This Tracker Connects to Plaspy

The S-4513 transmits GNSS positions and sensor telemetry over its cellular link to the shared Plaspy ingestion endpoint. Once server settings are applied, Plaspy ingests position and telemetry packets and displays them on the platform for live tracking, history, and alerts.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data is sent from the device over the chosen transport (UDP or TCP) to Plaspy for ingestion and protocol detection.
- Position, timestamp, and sensor telemetry are forwarded to Plaspy to enable live maps, event rules, and reporting.
- Inputs, analog sensors, MODBUS or Bluetooth sensor values configured on the S-4513 are included in telemetry forwarded to Plaspy.
- Control outputs can be triggered based on rules in Plaspy once telemetry and event reporting are active.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for example NTC Configurator or the vendor device manager).
2. Locate the server or reporting settings section for the device profile you are configuring.
3. Enter the server as d.plaspy.com or alternatively use the IP 54.85.159.138 if your tool requires an IP address.
4. Set the port to 8888 (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP if the device requires a transport selection; either transport is supported by Plaspy.
6. Apply or save the configuration and follow any vendor prompts to push changes to the device.
7. Restart the device if required by the manufacturer tool or firmware to activate the new settings.
8. Validate that the device reports to Plaspy by checking the Plaspy platform for a new device connection or recent telemetry.

## Example Configuration Commands

This model configuration file does not include vendor SMS or command-line strings. Exact commands and their syntax vary by manufacturer firmware and by the configuration method you use (NTC Configurator, DRC, or vendor SMS commands). Use the official Navtelekom tools and documentation for command format. Commonly, vendor tools will offer GUI fields to enter the host (d.plaspy.com or 54.85.159.138), port 8888, and transport selection and will then send the appropriate commands to the device.

If you receive or use vendor-supplied command strings that contain placeholders (for example [apn], [apnu], or [apnp]), keep the placeholders and replace them with your SIM operator’s APN settings as instructed by the manufacturer.

## Configuration Notes

- Firmware differences can change the exact menu locations or command syntax required; always confirm your device firmware version before applying steps.
- Choosing TCP versus UDP is generally a device configuration option; Plaspy accepts either and automatically handles the tracker protocol once packets reach the server.
- Dual SIM redundancy on the S-4513 improves uptime but ensure SIM APN and data settings are correct for each SIM slot if using carrier fallover.
- Some installations require a device restart or power cycle for changes to take effect; follow vendor guidance for safe restarts.
- Use manufacturer remote management tools (DRC, NTC Configurator) for bulk or remote updates when available to reduce manual configuration effort.

## Why Use Plaspy with This Configuration

Using the Navtelekom СМАРТ S-4513 with Plaspy provides organizations a straightforward path to real-time location, telemetry, and event monitoring. The S-4513’s telemetry and I/O options allow fleet managers to collect fuel, ignition, and sensor data and feed it into Plaspy for dashboards, alerts, and historical reports that support operational decisions.

To learn more about Plaspy and how it ingests and presents tracked data visit https://www.plaspy.com. Please verify the latest device-specific configuration methods, firmware behavior, and manufacturer details on the official Navtelekom site https://www.navtelecom.ru/ as vendor documentation and firmware can change over time.
