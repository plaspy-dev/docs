---
slug: /cantrack/g183/configuration
id: g183-configuration
sidebar_label: Configuration
title: CanTrack - G183 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for CanTrack G183 connectivity with Plaspy including server settings and setup workflow
keywords:
  - CanTrack G183 configuration
  - CanTrack G183 setup
  - G183 server configuration
  - G183 Plaspy configuration
  - CanTrack GPS tracker configuration
  - G183 GPS tracker setup
  - vehicle diagnostics tracker configuration
  - JOBD tracker setup
  - fleet tracking configuration
  - Plaspy tracker integration
---

# CanTrack - G183 Configuration

This page provides the public configuration context for using the CanTrack G183 JOBD GPS tracker with Plaspy. It explains the shared Plaspy server settings and practical setup guidance needed to point the G183 at Plaspy for real time tracking, telematics, and diagnostic uploads. Use this page as a practical reference alongside the device manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The G183 supports TCP and SMS reporting and delivers GNSS position, vehicle diagnostics, and alarms to Plaspy when configured with the server values below.

## Configuration Overview

This configuration process prepares the G183 to communicate with Plaspy so vehicle position, diagnostics and alarm data appear in the Plaspy platform. The goal is to point the tracker to the Plaspy endpoint, confirm transport settings, and validate that telemetry arrives in the platform.

- Configure the tracker to use the Plaspy server endpoint so TCP or SMS reporting reaches Plaspy.
- Set the device port and transport mode to the Plaspy shared port and verify the transport selection if required by the device.
- Confirm cellular connectivity and SIM readiness for TCP reporting or enable SMS reporting as a fallback.
- Validate the tracker is reporting GNSS position, OBD diagnostics and alarm events into Plaspy.
- Save and, if required, restart the device to apply the configuration and begin data upload.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices
- All devices in Plaspy use the same port for device data

## Typical Requirements Before Setup

- A powered and functional G183 device installed or connected to the vehicle OBD interface.
- A valid SIM card and active cellular data plan where TCP reporting is used, or SMS capability enabled for SMS reporting.
- Access to the official CanTrack configuration method such as the manufacturer software, micro USB configuration port, or SMS command interface.
- Knowledge of the device firmware version and any vendor tools required to update or change server settings.
- A reliable test vehicle or environment to validate GNSS reception and data upload to Plaspy.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G183 sends location, OBD diagnostics and alarm events to the shared Plaspy server endpoint and port so the platform can ingest the data for visualization and alerting. Plaspy accepts device data using the shared port and detects the correct protocol automatically for supported trackers.

- The tracker uploads GNSS position reports to the Plaspy server endpoint d.plaspy.com using TCP or an alternative transport.
- OBD diagnostic data and DTCs are transmitted to Plaspy for vehicle health monitoring and reporting.
- Alarm events such as SOS, collision, towing, and plug/unplug are sent to Plaspy so alerts and workflows can be triggered.
- If TCP is unavailable, SMS reporting can be used by the tracker as an alternative channel for Plaspy ingestion where supported.
- Plaspy monitors the shared port and automatically detects the tracker protocol so manual protocol selection is typically not required on the platform side.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G183 (USB tool, vendor web utility, or SMS command interface).
2. Enter the Plaspy server endpoint as d.plaspy.com or use the server IP 54.85.159.138 in the device server field.
3. Set the reporting port to 8888 as the device server port.
4. Choose UDP or TCP on port 8888 if the device requires a transport selection.
5. Apply or save the configuration in the device tool or via the SMS command interface.
6. Restart the G183 if the manufacturer instructions require a reboot to apply network or server changes.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for incoming position, diagnostic, or alarm messages.

## Example Configuration Commands

The exact configuration commands for the G183 vary by firmware and by whether you are using the micro USB configuration tool, a vendor desktop application, or SMS commands. Follow CanTrack manufacturer documentation for the precise command format. When using configuration commands or SMS, be sure to set the server to d.plaspy.com or the IP 54.85.159.138 and the port to 8888, and select UDP or TCP if the tracker requires a transport parameter.

## Configuration Notes

- Firmware differences can change the command syntax or the configuration GUI; always check the G183 firmware release notes before configuring.
- Some installations use SMS for initial configuration or fallback reporting; SMS commands and syntax depend on the manufacturer SMS command set.
- Choose TCP for persistent connections when stable data throughput is required and select UDP where lower overhead or device compatibility recommends it.
- Confirm the device firmware version and cellular module variant, as regional hardware options may alter the configuration workflow.
- Keep a reference to the official CanTrack configuration guide during setup to ensure any device-specific steps are followed.

## Why Use Plaspy with This Configuration

Using the CanTrack G183 with Plaspy provides a practical path to combine real time tracking, vehicle diagnostics, and alarm reporting in a single platform. Organizations can receive GNSS position, OBD DTCs, mileage and telemetry from the G183 in Plaspy dashboards to support fleet monitoring, preventive maintenance and incident response workflows.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware details on the manufacturer site https://www.cantrackgps.com/ since manufacturer specifications and setup steps can change over time.
