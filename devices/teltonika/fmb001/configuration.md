---
slug: /teltonika/fmb001/configuration
id: fmb001-configuration
sidebar_label: Configuration
title: Teltonika - FMB001 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB001 with Plaspy including required server settings and example commands
keywords:
  - Teltonika FMB001 configuration
  - FMB001 setup
  - Plaspy tracker configuration
  - Teltonika Configurator
  - Teltonika FOTA WEB
  - OBD II tracker setup
  - vehicle tracking configuration
  - GPS tracker server settings
  - fleet tracking Plaspy
  - FMB001 Plaspy setup
---

# Teltonika - FMB001 Configuration

This page covers the public configuration context for using the Teltonika FMB001 tracker with Plaspy. It collects the practical server settings and example commands that are commonly used to prepare the FMB001 for communication with the Plaspy fleet management platform while keeping manufacturer tooling and workflow in mind.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration method you choose such as Teltonika Configurator, FOTA WEB, or SMS based commands. Use this guide as a practical reference and verify device specific details with Teltonika documentation when needed.

## Configuration Overview

Configuring the FMB001 for Plaspy assigns the device to the Plaspy endpoint, ensures transport parameters are set, and verifies that the device is reporting its OBD and BLE telemetry to the platform. The goal is reliable, continuous reporting of location and vehicle telemetry for visibility and operational monitoring.

- Set the tracker server to Plaspy server values so the FMB001 forwards data to the correct endpoint.
- Configure APN and cellular credentials so the device has internet connectivity over its 2G GSM connection.
- Choose and confirm transport protocol (UDP or TCP) if the device requires a transport selection.
- Validate that the device appears in Plaspy and is sending location plus OBD and BLE telemetry.
- Use Teltonika Configurator or SMS commands for batch provisioning or single unit setup when appropriate.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices

These exact values are the public Plaspy settings used for FMB001 configuration and must be applied when pointing the device to the platform.

## Typical Requirements Before Setup

- A vehicle with a working OBD II port to power and interface the FMB001
- An active cellular SIM with data enabled and the correct APN credentials
- Access to Teltonika Configurator, Teltonika FOTA WEB, or the ability to send SMS commands to the device for configuration
- The device IMEI or identifier for registration and verification in Plaspy
- Knowledge of the device firmware version and any vendor tooling required for provisioning
- A clear plan for transport selection (UDP or TCP) depending on network and installer preference

## How This Tracker Connects to Plaspy

The FMB001 is configured to report its GNSS location and OBD derived telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to your account for live tracking, alerts, and reporting.

- The device sends periodic messages to d.plaspy.com on port 8888
- Plaspy accepts connections over UDP or TCP and automatically detects the tracker protocol
- OBD telemetry such as true odometer, fuel level, mileage and engine RPM is forwarded to Plaspy alongside location
- Bluetooth LE sensor data is included in the same device stream where supported, enabling environmental and movement monitoring
- Once reporting is active the device becomes visible in Plaspy for live tracking and historical analysis

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as Teltonika Configurator or Teltonika FOTA WEB, or prepare to use SMS commands for single device setup.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the server IP 54.85.159.138 depending on the tool.
3. Set the destination port to 8888 for the tracker data stream.
4. Choose UDP or TCP transport if the device configuration requires you to pick one.
5. Configure or confirm APN, APN username, and APN password so the tracker has cellular internet access.
6. Apply or save the configuration to the device and restart the tracker if the tool or firmware requires a reboot.
7. Validate that the device reports to Plaspy by checking device status and recent messages in the Plaspy platform.

## Example Configuration Commands

The FMB001 supports SMS style parameter setting in common Teltonika command formats. A public batch command example provided for basic parameters is shown below. Preserve the placeholders and replace them with your carrier APN details where required.

- Single SMS batch command to set APN credentials and Plaspy server

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields
- {{apn}} = your cellular carrier APN name
- {{apnu}} = APN username if required by your carrier, otherwise leave blank or omit if supported
- {{apnp}} = APN password if required by your carrier, otherwise leave blank or omit if supported
- 2004 sets the server domain to d.plaspy.com
- 2005 sets the server port to 8888
- 2006 typically controls transport or an index value in Teltonika parameter sets; confirm the meaning in your Teltonika documentation or Configurator view

Note: This example is the public SMS style command from the manufacturer configuration example. If you use Teltonika Configurator or FOTA WEB, enter the same values in the corresponding server and APN fields rather than sending SMS. The Plaspy server IP 54.85.159.138 can also be used in tools that require an IP instead of a domain.

## Configuration Notes

- Firmware differences and regional device variants can change parameter IDs and available configuration options; verify parameter numbers in the Teltonika Configurator for your firmware version.
- SMS based configuration is supported by the example command above, but provisioning at scale is typically easier with Teltonika Configurator or FOTA WEB.
- Choose UDP or TCP based on network reliability and your operational preference; Plaspy accepts both and will auto detect the protocol.
- Keep APN placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown and substitute real carrier values when applying the command.
- The FMB001 has EOL information noted by the manufacturer; confirm current availability and recommended replacements with Teltonika before large deployments.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMB001 to report to Plaspy gives organizations unified visibility over vehicle location, OBD telemetry, and Bluetooth sensor data in a single platform. This integration supports operational monitoring, maintenance scheduling using odometer and RPM data, and extended use cases such as cargo condition monitoring with BLE sensors.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration methods, parameter documentation, and firmware information verify details on the manufacturer site https://www.teltonika-gps.com/
