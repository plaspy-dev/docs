---
slug: /navtelekom/signal_s_2613/configuration
id: signal_s_2613-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2613 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for Navtelekom СИГНАЛ S-2613 showing Plaspy server settings and setup workflow for platform integration
keywords:
  - Navtelekom СИГНАЛ S-2613 configuration
  - Navtelekom S-2613 setup
  - SIGNAL S-2613 Plaspy
  - S-2613 server configuration
  - Plaspy server settings
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking S-2613
  - Navtelekom GPS tracker
  - S-2613 integration guide
---

# Navtelekom - СИГНАЛ S-2613 Configuration

This page documents the public configuration context for using the Navtelekom СИГНАЛ S-2613 tracker with Plaspy. It focuses on the practical server settings and workflow needed to point the device at Plaspy so location and telemetry appear in the Plaspy platform. The content here is intended for installers, fleet administrators, and integrators who need clear, actionable guidance based on public information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side steps can vary depending on the device firmware version, hardware revision, installation type, and the configuration tools provided by Navtelekom such as NTC Configurator or DRC. Use the steps below as a public, platform-focused reference and verify device-specific procedures with Navtelekom documentation.

## Configuration Overview

This configuration process prepares the SIGNAL S-2613 to report GNSS location and device telemetry to Plaspy so the unit becomes visible and manageable in the platform. The primary goal is to ensure the tracker is pointed to the Plaspy endpoint, uses the correct transport and port, and that connectivity and device settings (SIM/APN, I/O mapping, backup battery behavior) are validated for reliable reporting.

- Point the device to the Plaspy server endpoint so location and status messages are sent to Plaspy.
- Select the transport method (UDP or TCP) and confirm the device is configured to use the Plaspy port.
- Validate SIM, cellular registration, and APN settings so the 2G modem can reach Plaspy.
- Save and apply changes using the Navtelekom configuration tool then restart the device if required.
- Confirm the device is visible in Plaspy and that telemetry such as digital inputs and analog channels is reporting correctly.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Protocol detection: Plaspy automatically detects the tracker protocol when the device connects
- Note: Plaspy uses the same port for all supported devices so you should set port 8888 for any tracker you add to Plaspy

## Typical Requirements Before Setup

- A powered and installed SIGNAL S-2613 with external GNSS and GSM antennas connected as required by the installation.
- An active 2G SIM in the device and correct APN credentials configured so the tracker can access the mobile network.
- Access to Navtelekom configuration tools or methods such as NTC Configurator or the device remote management console DRC.
- Credentials or physical access required to change device server settings and to save/apply configuration.
- Basic understanding of whether UDP or TCP is preferred for your deployment (network reliability vs session handling).
- A Plaspy account or contact at your Plaspy administrator to confirm device activation and visibility after configuration.

## How This Tracker Connects to Plaspy

When configured, the SIGNAL S-2613 sends GNSS coordinates, timestamps, and available telemetry to the shared Plaspy server endpoint and port so the device is tracked in real time in Plaspy dashboards. Plaspy ingests location, event inputs, and device telemetry and maps those data points into fleet views, alerts, and history.

- The tracker is pointed to d.plaspy.com (or 54.85.159.138) and sends messages to port 8888.
- Transport is set to either UDP or TCP depending on device options and installer preference.
- Plaspy automatically detects the tracker protocol so explicit protocol selection in the platform is not required.
- Reported events (digital inputs, analog values, RS-485 telemetry when enabled) become visible in Plaspy for alerting and reporting.
- The shared port approach simplifies adding multiple devices because all devices use port 8888 to reach Plaspy.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method such as NTC Configurator or the DRC remote management tool.
2. In the device server settings, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the device server port to 8888 as Plaspy uses the same port for all devices.
4. If the device requires a transport choice, select UDP or TCP based on your network and operational needs.
5. Configure SIM and APN settings for the 2G modem so the device can establish a data connection.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking device presence and initial telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands and configuration fields are provided by Navtelekom tools and may vary by firmware version or configuration interface. For the SIGNAL S-2613 you will typically use NTC Configurator or DRC to set the server address and port rather than sending raw text commands. Because manufacturer configuration methods differ, consult Navtelekom documentation or the device configuration tool for the precise fields where you enter d.plaspy.com or 54.85.159.138 and port 8888. Plaspy will accept device traffic on UDP or TCP to port 8888 and automatically detect the device protocol.

## Configuration Notes

- Firmware differences can change menu names and configuration field locations in NTC Configurator or DRC; always match the latest Navtelekom instructions for your firmware.
- The SIGNAL S-2613 uses a 2G GSM modem and single SIM slot; confirm cellular coverage for your operational region and validate APN and authentication credentials.
- Choose UDP for lower overhead and simpler packet delivery, or TCP when session reliability and ordered delivery are required; Plaspy accepts either.
- After applying settings, a device reboot is often required for the network session to reestablish and for messages to start reaching d.plaspy.com on port 8888.
- Verify antenna connections and the backup battery behavior to ensure consistent reporting during power events and vehicle electrical transients.

## Why Use Plaspy with This Configuration

Configuring the Navtelekom СИГНАЛ S-2613 to report to Plaspy provides a straightforward path to real-time location, telemetry, and event monitoring within a managed telematics platform. For fleets and asset operators, integrating S-2613 units with Plaspy enables centralized visualization, rule-based alerts, and historical reporting that improve operational oversight and response times.

To learn more about how Plaspy supports tracker integration and fleet management, visit https://www.plaspy.com. For device specific configuration details, firmware updates, and the latest manufacturer guidance, verify current information on the official Navtelekom website https://www.navtelecom.ru/ as setup fields and firmware behavior can change over time.
