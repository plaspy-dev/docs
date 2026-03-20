---
slug: /teltonika/fmb204/configuration
id: fmb204-configuration
sidebar_label: Configuration
title: Teltonika - FMB204 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Teltonika FMB204 for use with Plaspy including server settings SMS command and APN placeholders
keywords:
  - Teltonika FMB204 configuration
  - Teltonika FMB204 setup
  - FMB204 Plaspy configuration
  - Teltonika tracker setup
  - GPS tracker configuration guide
  - Plaspy server settings
  - fleet tracking configuration
  - FMB204 SMS configuration
  - Teltonika device configuration
  - GPS platform integration
---

# Teltonika - FMB204 Configuration

This page documents the public configuration context for using the Teltonika FMB204 with Plaspy. It gathers the practical server settings and an example SMS command that Plaspy customers commonly use to point Teltonika devices to the Plaspy platform. Use this guide to understand what is required before integrating the FMB204 with Plaspy and where to place the shared server values.

Plaspy uses a single set of shared server settings for all supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware revision, hardware variant, installation type and the configuration tool you use. Always confirm device specific steps with the official Teltonika documentation or support resources where needed.

## Configuration Overview

The goal of the configuration process is to prepare the FMB204 so it can reliably send location and sensor telemetry to Plaspy. In practical terms this means supplying the device with correct APN credentials, assigning the Plaspy server endpoint and transport, and validating that telemetry reaches the platform.

- Provide the device with a working SIM and APN so it can use cellular data to reach Plaspy.
- Configure the device to report to the Plaspy server endpoint and port so location updates arrive in Plaspy.
- Choose the transport protocol the device requires and confirm connectivity using tools such as SMS or Teltonika configurator.
- Validate that the device appears in Plaspy and is reporting GPS and sensor telemetry for mapping and alerts.
- Use the example SMS command below to quickly set common parameters including APN placeholders and the Plaspy server address.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A charged and installed SIM card with a data plan and the correct APN credentials
- Access to Teltonika configuration methods such as SMS commands or Teltonika Configurator
- Power applied to the FMB204 and any required external wiring completed
- Knowledge of the APN, APN username, and APN password for the SIM provider
- Confirmation of device firmware version and any vendor specific installation notes
- Basic access to Plaspy account or support contact to verify the device appears after configuration

## How This Tracker Connects to Plaspy

Once configured, the FMB204 uses its cellular connection to send position and sensor telemetry to the Plaspy server endpoint and port. Plaspy receives these packets, automatically detects the device protocol, and normalizes the data for visibility and alerts.

- The device forwards GPS position reports to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be configured to UDP or TCP depending on the device requirement and network conditions
- BLE sensor data and device state are included with telemetry if the device is configured to forward those records
- Plaspy detects the protocol automatically so the server accepts compatible packets without per device port changes
- Once reporting, Plaspy provides real time mapping, event alerts and historical telemetry storage

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as Teltonika Configurator or SMS command interface.
2. Ensure the device has a working SIM and enter the APN credentials for your mobile operator.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server address.
4. Set the server port to 8888 as Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer tool or firmware.
7. Validate that the device reports to Plaspy and that location and sensor data appear in the platform.

## Example Configuration Commands

To configure basic parameters on Teltonika devices via SMS, the following public command format is commonly used. Replace the APN placeholders with your operator values before sending.

- Explanation of placeholders
  - [apn] is the APN name provided by your mobile operator
  - [apnu] is the APN username if required by the operator
  - [apnp] is the APN password if required by the operator

FMB204 example SMS command:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- 2001  APN placeholder
- 2002  APN username placeholder
- 2003  APN password placeholder
- 2004  Server domain set to d.plaspy.com
- 2005  Server port set to 8888
- 2006  Transport flag or profile index as used by the device firmware

Send this SMS from an authorized phone number or use Teltonika Configurator to apply equivalent settings. Replace placeholders with real values before sending.

## Configuration Notes

- Teltonika firmware versions and configurator tools can differ in parameter IDs or transport flag behavior; confirm parameter documentation for your firmware version.
- Using UDP can reduce latency but TCP offers delivery guarantees; choose per your network environment and Teltonika recommendations.
- Plaspy automatically detects the tracker protocol so you only need to point the device to d.plaspy.com or 54.85.159.138 on port 8888.
- The SMS setparam method is convenient for remote devices but ensure the originating phone number is permitted by the device access lists.
- Always test a single device first to verify APN, server, and transport settings before mass deployment.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMB204 to report to Plaspy gives organizations a practical way to combine rugged asset tracking with centralized monitoring. The shared Plaspy server settings simplify deployment across many devices and let Plaspy automatically detect supported protocols so you can focus on telemetry and alerts rather than per device endpoint management.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration options, firmware notes and parameter references consult the official Teltonika documentation at https://www.teltonika-gps.com/ to ensure settings match your device firmware and installation requirements.
