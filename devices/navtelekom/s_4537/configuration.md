---
slug: /navtelekom/s_4537/configuration
id: s_4537-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4537 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Navtelekom СМАРТ S-4537 integration with Plaspy server settings and practical setup steps
keywords:
  - Navtelekom S-4537 configuration
  - Navtelekom S-4537 setup
  - S-4537 Plaspy
  - Navtelekom GPS tracker configuration
  - SMART S-4537 setup
  - Plaspy server configuration
  - vehicle tracker configuration
  - fleet tracking setup
  - CAN bus tracker configuration
  - GPS platform setup
---

# Navtelekom - СМАРТ S-4537 Configuration

This page provides public configuration guidance for using the Navtelekom СМАРТ S-4537 tracker with Plaspy. It covers the shared Plaspy server settings you will apply to the tracker and explains the practical steps installers and integrators commonly follow to enable visibility and telemetry streaming into Plaspy.

Plaspy uses a single, shared server endpoint and port for supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps for the S-4537 can vary by firmware version, hardware revision, installation type, and vendor tools such as the device configurator or remote management system, so treat the steps below as a practical, public guide rather than a device specific warranty.

## Configuration Overview

This configuration process prepares the SMART S-4537 to send GNSS positions, CAN bus telemetry, and peripheral sensor data to Plaspy using the platform shared server endpoint and port. The goal is to configure the device to reliably report location and events to Plaspy and to validate connectivity after installation.

- Point the tracker to the Plaspy server domain or IP and set the correct port for outbound telemetry.
- Choose the transport protocol supported by the device firmware and Plaspy either UDP or TCP.
- Configure reporting intervals, event logic, and CAN mapping using the manufacturer configuration tool to capture the required telemetry.
- Validate cellular connectivity and SIM configuration to ensure continuous 4G data streaming.
- Confirm the tracker appears online in Plaspy and that telemetry values are populating expected dashboards.

## Plaspy Server Settings

Use the following public server settings when configuring the S-4537 for Plaspy:

- Server domain d.plaspy.com as the primary server host for device connections
- Server IP 54.85.159.138 as an alternative host address where required
- Port 8888 which Plaspy uses for device connections
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol on connection and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the S-4537 has reliable power and the internal backup battery is functional for power event continuity
- One or more active SIM cards installed and configured for cellular data since the device uses the integrated 4G modem and dual SIM capability
- Access to the official manufacturer configuration method such as NTC Configurator or the vendor remote configuration tool
- A laptop or technician interface as required by the installer to run the manufacturer configuration utility
- Knowledge of the vehicle CAN bus mapping and which CAN bus channels to capture for telemetry where applicable
- Recent firmware that matches the manufacturer documentation for the features you plan to enable

## How This Tracker Connects to Plaspy

The SMART S-4537 uses its integrated cellular modem to open a data connection and send GNSS and telemetry reports to the Plaspy server endpoint and port. Once the device is configured to target Plaspy, the platform receives location updates, CAN derived parameters, and sensor events for real time monitoring and historical reporting.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138
- All device connections are directed to port 8888 which Plaspy uses for incoming tracker data
- Transport can be UDP or TCP depending on device firmware options and installer preference
- Plaspy automatically detects the tracker protocol to interpret telemetry without manual protocol selection in the platform
- Telemetry types typically include GNSS position, CAN bus parameters, digital input states, and RS-485 or 1-Wire sensor readings when configured

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as NTC Configurator or vendor provided utility.
2. In the device network or server settings, enter d.plaspy.com or alternatively 54.85.159.138 as the server host.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. If the device requires a transport selection, choose UDP or TCP according to installer preference and firmware support.
5. Configure reporting intervals, event rules, and CAN bus mappings in the manufacturer tool as needed for your deployment.
6. Apply or save the configuration and, if required by the device, restart the tracker to apply settings.
7. Validate that the device reports to Plaspy by confirming the device is visible and sending telemetry to the platform

## Example Configuration Commands

The public configuration commands for the SMART S-4537 are managed through manufacturer tools such as NTC Configurator or the DRC remote management system. Exact SMS or command line strings, if provided by Navtelekom for specific firmware versions, should be used from official Navtelekom documentation or the device configurator.

If you have a firmware or vendor document that includes explicit SMS or console commands for setting server and port, use those commands in the order recommended by the manufacturer and preserve placeholders such as APN values exactly as provided. For other installers, the graphical configuration flow in NTC Configurator will present fields for server host, server IP, port, and transport protocol which correspond directly to the Plaspy values listed above.

## Configuration Notes

- Firmware differences may change the names or locations of server fields in the manufacturer tool; always confirm with the device GUI or release notes.
- Use UDP or TCP consistently with your testing and production plan; behavior and reliability can vary by network and firmware.
- Because Plaspy uses the same port for all devices, ensure port 8888 is reachable from the tracker network environment and not blocked by local routing rules.
- Dual SIM support provides redundancy for cellular connectivity but verify APN and data plan settings in the manufacturer tool if required.
- When configuring CAN data capture, double check the bus selection and parameter mapping to avoid incorrect telemetry mapping in Plaspy.

## Why Use Plaspy with This Configuration

Using the Navtelekom СМАРТ S-4537 with Plaspy gives fleet operators and integrators a direct path to deliver rich vehicle telemetry and real time location into a single platform. The combination of dual CAN integration, integrated 4G modem with dual SIM, and peripheral interfaces makes the S-4537 suitable for installations where both position and vehicle bus data are required for monitoring, alerting, and reporting.

To learn more about Plaspy and how the platform handles device connections and telemetry, visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer tools referenced on this page consult the official Navtelekom website https://www.navtelecom.ru/ for up to date instructions and downloads.
