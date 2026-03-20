---
slug: /navtelekom/smart_s_2413/configuration
id: smart_s_2413-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2413 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S-2413 with Plaspy compatibility and required server settings for integration
keywords:
  - Navtelekom SMART S-2413 configuration
  - Navtelekom SMART S-2413 server configuration
  - SMART S-2413 Plaspy setup
  - Navtelekom GPS tracker setup
  - SMART S-2413 tracking software configuration
  - Navtelekom SMART S-2413 manual
  - SMART S-2413 fleet tracking
  - Navtelekom GPS platform setup
  - SMART S-2413 configuration guide
  - Plaspy tracker configuration
---

# Navtelekom - SMART S-2413 Configuration

This page documents the public configuration context for using the Navtelekom SMART S-2413 with Plaspy. It focuses on the practical server settings and workflow you need to point the device at Plaspy and validate connectivity. The content here uses the publicly available Plaspy connection details and the SMART S-2413 feature summary as the basis for configuration guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use (for example Navtelekom DRC or the local NTC Configurator), so follow the manufacturer tools for device-specific menus and firmware behavior.

## Configuration Overview

The goal of this configuration is to prepare the SMART S-2413 to communicate reliably with Plaspy so location and telemetry appear in the platform. This includes entering Plaspy's server endpoint, selecting the transport if required, saving the configuration on the tracker, and confirming successful reporting in the Plaspy system.

- Configure the SMART S-2413 to report to the Plaspy server endpoint and port.
- Ensure the device has a valid SIM and cellular connectivity so telemetry can be sent over GSM.
- Confirm device inputs, outputs, RS-485 peripherals, and Bluetooth sensors are enabled as needed so telemetry streams include expected sensors.
- Save and apply manufacturer configuration, then verify device check-in on the Plaspy platform.
- Use Navtelekom tools (DRC or NTC Configurator) for firmware and remote configuration when applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered SMART S-2413 unit with the manufacturer documentation or access to NTC Configurator or Navtelekom DRC for configuration.
- An active SIM card inserted and cellular connectivity verified on the device.
- Access to the vehicle or installation location to perform initial power and connectivity checks.
- Knowledge of which inputs, outputs, RS-485 peripherals, and Bluetooth sensors you need to enable for your use case.
- Confirmation of the device firmware version if you rely on specific firmware behavior or remote configuration features.
- A method to view device logs or status (manufacturer tool or platform feedback) to validate successful reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SMART S-2413 streams position and telemetry over the cellular network to the Plaspy server endpoint and port. Plaspy ingests the incoming telematics and maps it to dashboards, alerts, and reporting features.

- The device is set to send regular position updates and event reports to d.plaspy.com (54.85.159.138) on port 8888.
- You can select UDP or TCP transport on the device if required; both transports are accepted on port 8888.
- Plaspy automatically detects the tracker protocol upon connection so the platform can parse the incoming telematics stream.
- Device digital inputs, the configurable analog channel, RS-485 serial data, and Bluetooth sensor data are forwarded by the device and become telemetry streams in Plaspy.
- Once reporting is active, Plaspy provides live tracking, route history, and event-driven alerts based on the device data.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software such as the NTC Configurator or Navtelekom DRC.
2. Ensure the SMART S-2413 is powered and the SIM is inserted and registered on the cellular network.
3. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888.
5. Choose the transport protocol (UDP or TCP) if the device firmware requires a transport selection.
6. Apply or save the configuration and push changes to the device.
7. Restart the device if the manufacturer tool or firmware requires a restart to apply network settings.
8. Validate that the device reports to Plaspy and appears in the platform; check telemetry, position updates, and event reports.

## Example Configuration Commands

The SMART S-2413 supports both local and remote configuration methods through Navtelekom tools. Exact command syntax and steps vary by firmware and the configuration tool you use. Use the official NTC Configurator or Navtelekom DRC for device-specific commands and menu flows. If you use SMS-based configuration or a serial/USB tool provided by Navtelekom, refer to the manufacturer documentation for the precise command formats and required placeholders.

## Configuration Notes

- Firmware differences can change menu locations, command syntax, and available transports; always confirm the firmware version before following a procedural guide.
- If the device requires choosing between UDP and TCP, either transport may be used; Plaspy accepts both on port 8888 and auto-detects the incoming protocol.
- Use the manufacturer tools (NTC Configurator or DRC) for complex setups such as RS-485 peripheral mapping, Bluetooth sensor pairing, or custom telemetry channels.
- Verify the SIM has sufficient data and that APN settings are correct via the Navtelekom configuration tool when required.
- Keep a record of the device IMEI and registration details to help identify the unit in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the SMART S-2413 with Plaspy gives fleet managers and integrators a straightforward path to real-time tracking, event monitoring, and consolidated telemetry. The device’s flexible I/O, RS-485 support, and Bluetooth sensor capability let you bring multiple sensor types into a single platform, while Plaspy ingests the standard telematics stream to provide live location, historical routes, and event alerts.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device-specific configuration steps, firmware behavior, and full technical documentation consult the manufacturer at https://www.navtelecom.ru/ to verify current information.
