---
slug: /navtelekom/signal_s_2114/configuration
id: signal_s_2114-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2114 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide to connect Navtelekom СИГНАЛ S-2114 to Plaspy using the shared server settings and recommended workflow
keywords:
 - Navtelekom СИГНАЛ S-2114 configuration
 - Navtelekom S-2114 setup
 - S-2114 Plaspy compatibility
 - S-2114 GPS tracker configuration
 - Navtelekom tracker server settings
 - vehicle tracking S-2114
 - legacy tracker configuration
 - Plaspy tracker setup
 - GPS platform setup S-2114
 - RS-232 fuel sensor configuration
---

# Navtelekom - СИГНАЛ S-2114 Configuration

This page documents the public configuration context for using the Navtelekom СИГНАЛ S-2114 with Plaspy. It focuses on the practical server settings and setup workflow needed to deliver GPS position, alarm events, and RS-232 fuel sensor telemetry into the Plaspy platform. The SIGNAL S-2114 is a Plaspy compatible automotive GSM GPS tracker designed for legacy vehicle installations and maintenance support.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary with firmware revision, hardware revision, installation type, and vendor tools. The S-2114 supports GSM/GPRS connectivity, RS-232 fuel sensor input, local USB configuration, remote updates over GPRS, and alarm reporting by voice call and SMS; use this guide alongside the official Navtelekom documentation for device-specific details.

## Configuration Overview

The objective of configuration is to prepare the S-2114 to communicate reliably with Plaspy so location, alarms, and fuel telemetry become visible in your fleet workspace. Configuration ties the device to the Plaspy server endpoint and verifies transport and reporting behavior so devices appear and remain online in the platform.

- Set the device server endpoint and transport so packets route to Plaspy.
- Confirm cellular GPRS connectivity so the tracker can send updates to the platform.
- Validate RS-232 fuel sensor wiring and telemetry mapping if fuel data is required in Plaspy.
- Save and apply configuration, then verify the device registers and reports to Plaspy.
- Document firmware version and configuration for future maintenance of legacy units.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the SIGNAL S-2114. Plaspy uses the same port for all supported devices and it automatically detects the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Configure either the domain name or the IP address in the device, set port 8888, and choose UDP or TCP if the device requires explicit transport selection.

## Typical Requirements Before Setup

- Ensure the S-2114 is powered and physically accessible for configuration or USB connection.
- Insert and activate a cellular SIM with data (GPRS) so the tracker can reach Plaspy over the mobile network.
- Have manufacturer configuration tools available such as local USB config software or documented SMS/command formats from Navtelekom.
- Confirm you have the device IMEI/identifier to match the tracker in Plaspy after it connects.
- If you plan to use fuel telemetry, verify RS-232 sensor compatibility and wiring before enabling telemetry.
- Obtain any archived firmware files or release notes if you need to match a specific firmware behavior for legacy units.

## How This Tracker Connects to Plaspy

The SIGNAL S-2114 sends positional data, alarm events, and sensor telemetry over cellular GPRS to the Plaspy server endpoint and port. Once the device is configured to target the shared Plaspy server (d.plaspy.com or 54.85.159.138 on port 8888), Plaspy will automatically detect the tracker protocol and begin ingesting reports.

- GPS position updates are transmitted over GPRS to d.plaspy.com or 54.85.159.138 using port 8888.
- Alarm events reported by voice call or SMS on the device are captured and can be logged in Plaspy workflows.
- RS-232 fuel sensor readings are sent as telemetry to the same Plaspy endpoint for fuel monitoring.
- The device may use either UDP or TCP transport to send packets to port 8888; Plaspy accepts both and detects protocol automatically.
- After configuration, validate that the device appears online and that telemetry updates are visible in Plaspy.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software for the СИГНАЛ S-2114 (local USB tool, SMS commands, or manufacturer utility).
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server/host field.
3. Set the device port to 8888, the shared Plaspy port used for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection; Plaspy supports both.
5. Configure any APN or data settings required for the device to establish a GPRS connection (follow Navtelekom guidance for APN).
6. Apply or save the configuration and perform a device restart if the tool or firmware requires it.
7. Validate that the tracker reports to Plaspy and that GPS, alarm, and RS-232 telemetry appear in your Plaspy account.

## Example Configuration Commands

The SIGNAL S-2114 supports local USB configuration and manufacturer tools; exact commands and SMS formats vary by firmware and the Navtelekom configuration utility. Because model-specific command formats are provided by the manufacturer and may differ across firmware releases, follow the Navtelekom documentation or the bundled configuration software for exact command syntax and examples. If you have official command strings from Navtelekom, apply them in the order recommended by the manufacturer and then verify connectivity to d.plaspy.com on port 8888.

## Configuration Notes

- Firmware differences can change command formats and available options; always record the firmware version before and after changes.
- Choose UDP or TCP based on installation requirements and the device firmware recommendations; both transports are accepted by Plaspy on port 8888.
- Legacy archived units may require specific historic firmware or the original configuration utility available from Navtelekom for proper operation.
- When enabling RS-232 fuel telemetry, verify sensor type and scaling in device settings so Plaspy receives meaningful fuel values.
- Keep a backup of working configuration files or documented SMS commands for maintenance of discontinued units.

## Why Use Plaspy with This Configuration

Using the Navtelekom СИГНАЛ S-2114 with Plaspy provides a straightforward path to collect location, alarm, and fuel telemetry from legacy vehicles into a centralized fleet management platform. For organizations maintaining older installations, this combination supports continuity: the S-2114’s GSM/GPRS connectivity and RS-232 sensor inputs map naturally into Plaspy’s ingestion and reporting workflows to support tracking, anti-theft alerting, and fuel monitoring.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. Please verify current device-specific configuration methods, firmware behavior, and manufacturer details at the official Navtelekom site https://www.navtelecom.ru/ as specifications and setup procedures can change over time.
