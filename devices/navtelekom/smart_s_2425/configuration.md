---
slug: /navtelekom/smart_s_2425/configuration
id: smart_s_2425-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2425 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Navtelekom SMART S 2425 to Plaspy with required server settings and practical setup steps
keywords:
  - Navtelekom SMART S-2425 configuration
  - Navtelekom SMART S-2425 setup
  - SMART S-2425 Plaspy
  - Navtelekom tracker configuration
  - Plaspy tracker setup
  - vehicle tracker configuration
  - GPS tracker Plaspy setup
  - fleet tracker SMART S-2425
  - SMART S-2425 server configuration
  - SMART S-2425 integration
---

# Navtelekom - SMART S-2425 Configuration

This page summarizes the public configuration context for using the Navtelekom SMART S-2425 with the Plaspy platform. It focuses on the practical server settings and workflow you will use to point the tracker to Plaspy so the device can deliver GNSS positions, telemetry and events to the platform.

Plaspy uses shared server settings across supported devices and will automatically detect the tracker protocol. Manufacturer-side setup steps for the SMART S-2425 can vary by firmware version, hardware revision, installation type and the vendor configuration tools such as NTC Configurator or local Bluetooth configuration, so review both this guidance and the official Navtelekom documentation before deployment.

## Configuration Overview

The goal of this configuration is to prepare the SMART S-2425 to send position and telemetry data reliably to Plaspy and to validate connectivity so the device appears and reports correctly in the Plaspy dashboard.

- Point the SMART S-2425 to Plaspy using the public server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Choose the transport mode the device supports (UDP or TCP) when the device requires a transport selection.
- Ensure the tracker has an active cellular SIM and correct APN so the 2G modem can reach the Plaspy server.
- Save and apply configuration with the manufacturer tool or local Bluetooth method, then validate reporting in Plaspy.
- Confirm the device delivers GNSS, I/O events and telemetry so Plaspy can record trips, alarms and reports.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm device power and wiring are installed and stable for initial configuration.
- Active SIM card(s) with data enabled installed in the SMART S-2425 dual SIM slots as required.
- Access to the official Navtelekom configuration method such as NTC Configurator or local Bluetooth 4.0 provisioning tools.
- Knowledge of the device identifier and registration details required by your Plaspy account or fleet.
- Stable cellular coverage in the installation area for 2G connectivity during initial tests.
- Access to the Navtelekom technical documentation for any device specific parameters or firmware notes.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SMART S-2425 transmits GNSS positions, I/O states and telemetry via its 2G modem to the shared Plaspy server endpoint and port. Plaspy ingests these messages to present live location, alarms and telemetry on the platform.

- The tracker is configured to report to d.plaspy.com (or 54.85.159.138) on port 8888.
- Choose UDP or TCP transport on the device if transport selection is required; Plaspy will accept either on port 8888.
- Plaspy automatically detects the tracker protocol, so the platform will interpret incoming data from the SMART S-2425 without per device protocol selection on the server.
- Location updates, I/O events and telemetry forwarded by the device appear in Plaspy as map positions, alerts and data channels for reporting.
- Regular validation of reporting ensures trips, alarms and sensor data are visible to operators.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software (for example NTC Configurator or the device Bluetooth provisioning tool).
2. In the device server settings enter the Plaspy server domain d.plaspy.com or use the server IP 54.85.159.138 as an alternative.
3. Set the device server port to 8888.
4. If the device requires a transport choice, select UDP or TCP for the connection to Plaspy.
5. Save or apply the configuration using the manufacturer tool and confirm the changes are written to the device.
6. Restart the device if the manufacturer instructions indicate a reboot is required after applying network settings.
7. Validate that the device reports to Plaspy by checking that the tracker appears and sends position or telemetry updates in the Plaspy dashboard.

## Example Configuration Commands

The SMART S-2425 may be configured using Navtelekom tools or Bluetooth provisioning rather than direct text commands; exact command syntax and options vary by firmware and the manufacturer configuration utility. For Plaspy integration you will typically enter the server domain d.plaspy.com (or the IP 54.85.159.138) and set port 8888, then choose UDP or TCP if the device UI requires a transport selection.

If you are using Navtelekom configuration utilities consult the official NTC Configurator guide for the exact menu path or command syntax used by your firmware version.

## Configuration Notes

- Firmware differences across hardware revisions may change menu names or parameter locations in the NTC Configurator or Bluetooth provisioning flow.
- Choose UDP or TCP based on network conditions and firewall policies; Plaspy accepts both on port 8888 but transport choice can affect latency and delivery behavior.
- Ensure SIM APN settings are correct for the installed mobile operator so the device can establish a data session before attempting to reach the Plaspy server.
- The SMART S-2425 supports local Bluetooth configuration which can simplify field provisioning for some installers.
- Always cross reference configuration steps with the official Navtelekom documentation for device specific examples and firmware release notes.

## Why Use Plaspy with This Configuration

Using the SMART S-2425 with Plaspy gives fleet operators continuous visibility of positions, I/O events and telemetry through a unified platform. The device’s GLONASS/GPS reception, dual SIM 2G modem and flexible I/O set make it suitable for vehicle tracking, alarm monitoring and telemetry collection that Plaspy can present as live maps, alerts and historical reports.

Learn more about connecting devices and configuring fleet tracking on the Plaspy website at https://www.plaspy.com. For device specific configuration methods, firmware behavior and the latest technical details, verify current information on the manufacturer site https://www.navtelecom.ru/.
