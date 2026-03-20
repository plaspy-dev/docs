---
slug: /teltonika/fmu125/configuration
id: fmu125-configuration
sidebar_label: Configuration
title: Teltonika - FMU125 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Teltonika FMU125 tracker to Plaspy with practical server and command examples
keywords:
  - Teltonika FMU125 configuration
  - FMU125 setup Plaspy
  - Teltonika tracker server configuration
  - FMU125 GPS platform setup
  - vehicle tracking FMU125
  - Teltonika FMU125 APN setup
  - Plaspy tracker integration
  - FMU125 configurator commands
  - fleet tracking FMU125
  - FMU125 telemetry configuration
---

# Teltonika - FMU125 Configuration

This page describes the public configuration context for using the Teltonika FMU125 tracker with Plaspy. It collects the practical, public-facing server settings and an example command that can be used with Teltonika configuration tools or SMS based setup. Use this information to prepare the device for communication with the Plaspy platform while following the official device manuals for detailed parameter mapping.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps vary by firmware version, hardware revision, installation type, and the Teltonika tools you choose to use. The FMU125 supports GNSS and 3G GSM connectivity, internal antennas, an accelerometer, RS232 RS485 interfaces, and multiple configuration methods such as Teltonika Configurator, SMS commands, and FOTA tools.

## Configuration Overview

The goal of FMU125 configuration for Plaspy is to point the tracker to Plaspy servers, provide valid cellular APN credentials if required, and verify that the device is seen and reporting correctly in Plaspy. Configuration prepares the tracker to send location and event data to the platform reliably.

- Set the device APN credentials and network parameters so the tracker can access cellular data if required.
- Configure the server endpoint to d.plaspy.com or the provided Plaspy server IP so the device sends telemetry to Plaspy.
- Set the common Plaspy port value to 8888 which is used by all devices in Plaspy.
- Choose the transport protocol (UDP or TCP) on the device if the firmware requires an explicit selection.
- Apply and save the configuration, then confirm the device appears and reports live data within Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects
- All devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A powered FMU125 unit that is functional and reachable during configuration.
- A cellular SIM with data enabled and the correct APN details if using cellular data over 3G GSM.
- Access to the manufacturer configuration method you prefer such as Teltonika Configurator USB Bluetooth, SMS command capability, or FOTA tools.
- Knowledge of APN settings including APN name, username, and password for insertion into configuration placeholders.
- The Plaspy server settings listed above ready to enter into the device configuration.
- A way to validate device status after configuration such as a console, SMS replies, or observing device connection in Plaspy.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the FMU125 sends GNSS based location updates and supported sensor or event data to the shared Plaspy server endpoint and port. Plaspy receives the connection and automatically identifies the tracker protocol so the data is decoded and displayed within the platform.

- The tracker is pointed at d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device firmware or installer preference.
- The device delivers location and event messages which Plaspy processes for monitoring and reporting.
- Plaspy automatically detects the device protocol to decode incoming data without separate per device port assignments.
- After successful configuration and network connectivity, the tracker becomes visible and reportable in Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method you will use such as Teltonika Configurator, SMS commands, or FOTA web tools.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server or primary host parameter on the device.
3. Set the device port to 8888 which is the common port used by Plaspy for all supported devices.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Provide APN credentials using placeholders such as [apn] [apnu] and [apnp] where needed for cellular data.
6. Apply or save the configuration in the Teltonika tool and restart the tracker if the tool or device requires a reboot.
7. Validate that the device successfully reports to Plaspy by checking device status in the platform or by monitoring the device reply method available.

## Example Configuration Commands

The following public batch command is commonly used to set basic network and server parameters on Teltonika devices. It uses placeholders for APN credentials which you should replace with your carrier values.

- Batch command example

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- What the placeholders mean
  - [apn] Replace with your SIM data APN name.
  - [apnu] Replace with the APN username if your carrier requires one; leave blank if not used.
  - [apnp] Replace with the APN password if required; leave blank if not used.

Note: This command sets APN placeholders and the Plaspy server domain d.plaspy.com with port 8888 in a single batch command. Parameter numbers map to Teltonika device parameters; consult Teltonika documentation for the exact parameter map and for meaning of parameter 2006 before applying.

## Configuration Notes

- Firmware and configurator versions change parameter mappings and available options; confirm parameter numbers and syntax against the device firmware notes.
- TCP and UDP behaviors differ by network and server handling; choose the transport that best fits your connectivity and firewall environment.
- Teltonika devices can be configured via multiple methods including USB Bluetooth configurator, SMS commands, and FOTA tools. Use the method appropriate for your installation.
- Plaspy uses a single port across supported devices and will automatically detect the tracker protocol when the device connects to the server.
- Always verify APN values and ensure the SIM has data enabled before testing live reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the FMU125 with Plaspy provides a straightforward way to add a professional Teltonika tracker to an operational monitoring platform that centralizes location, event, and operational visibility. Pointing the device to Plaspy using the shared server settings simplifies deployment because the same port and automatic protocol detection reduce per device configuration complexity.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official parameter maps consult the manufacturer documentation at https://www.teltonika-gps.com/ which provides comprehensive guidance for Teltonika devices.
