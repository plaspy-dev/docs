---
slug: /teltonika/fmc001/configuration
id: fmc001-configuration
sidebar_label: Configuration
title: Teltonika - FMC001 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMC001 showing Plaspy server settings and example commands for integration
keywords:
  - Teltonika FMC001 configuration
  - Teltonika FMC001 setup
  - FMC001 server configuration
  - Plaspy tracker integration
  - GPS tracker configuration guide
  - FMC001 tracking software configuration
  - Teltonika OBD tracker setup
  - fleet tracking platform setup
  - GPS device server configuration
  - Teltonika FMC001 Plaspy
---

# Teltonika - FMC001 Configuration

This page covers the public configuration context required to connect a Teltonika FMC001 tracker to the Plaspy platform. It collects the public Plaspy server settings you need, explains what to prepare before integration, and shows the example command that many Teltonika devices can accept to set APN and server endpoint values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps to apply these settings can vary with firmware version, hardware revision, installation type, and the Teltonika configuration tool you use, so follow the manufacturer tooling for device-side actions and verify any differences before deployment.

## Configuration Overview

The goal of this configuration is to prepare the FMC001 so it reliably reports location and OBD II and sensor data to the Plaspy platform. Using the public Plaspy endpoint and port ensures the tracker forwards telemetry to the same Plaspy collection service used by other supported devices.

- Configure the device APN credentials and server endpoint so the tracker can open a connection to Plaspy
- Select the transport type (UDP or TCP) if the device requires a transport choice
- Ensure the device reports to the shared Plaspy server endpoint and port used for all devices
- Validate connectivity and confirm the device appears in Plaspy monitoring and telemetry streams
- Use Teltonika configuration tools or SMS commands where supported to apply settings

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol upon connection

## Typical Requirements Before Setup

- A powered and installed FMC001 with access to the vehicle OBD port as required by the device model
- A valid cellular SIM with an active data plan and correct APN credentials for your mobile operator
- Access to the Teltonika configuration method you plan to use such as Teltonika Configurator, FMBT mobile app, or SMS commands
- The APN, APN username, and APN password for your SIM provider available to enter into the device
- Knowledge of whether you will use UDP or TCP transport for the device connection
- Ability to restart the device after applying configuration to ensure settings take effect

## How This Tracker Connects to Plaspy

When configured, the FMC001 opens a network connection to the Plaspy server endpoint and sends telemetry over the chosen transport. Plaspy uses automatic protocol detection and a single port so devices can be registered consistently across the platform.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888  
- Data is transmitted over UDP or TCP depending on the device transport selection  
- Location, OBD II parameters, accelerometer and BLE sensor events are forwarded to Plaspy for visibility and monitoring  
- Plaspy automatically detects the device protocol during initial communication so no additional protocol selection is required on the Plaspy side  
- Once reporting, devices appear in Plaspy for fleet visibility, event alerts, and telemetry inspection

## Common Configuration Workflow

1. Access the official Teltonika configuration method you plan to use such as Teltonika Configurator, FMBT app, or SMS configuration commands.  
2. Enter the Plaspy server endpoint as d.plaspy.com or, if required, the server IP 54.85.159.138.  
3. Set the device port to 8888 (Plaspy uses this same port for all supported devices).  
4. Choose the transport type UDP or TCP if the tracker requires an explicit transport selection.  
5. Enter APN credentials (APN, APN username, APN password) required by your mobile operator.  
6. Apply or save the configuration and restart the device if the tool or firmware requires it.  
7. Validate that the device reports to Plaspy by confirming the tracker is visible in the platform and that telemetry arrives.

## Example Configuration Commands

The FMC001 can be configured using a Teltonika-style SMS or batch command to set APN and server parameters. Preserve the placeholders and replace them with your operator values.

- Example command to set APN credentials and Plaspy server endpoint and port

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and parameters
  - {{apn}} = your mobile operator APN name  
  - {{apnu}} = your APN username if required by the operator (leave blank if not used)  
  - {{apnp}} = your APN password if required by the operator (leave blank if not used)  
  - 2004 sets the server domain to d.plaspy.com which points to Plaspy  
  - 2005 sets the port to 8888 used by Plaspy for all devices  
  - 2006:1 in this command example is a device parameter seen in Teltonika command sets; follow Teltonika documentation or your configurator for exact parameter meanings on your firmware

If you apply the command via SMS, send it from an authorized number as required by your device security settings. If you use Teltonika Configurator or FMBT, the same values should be entered into the server and APN fields there.

## Configuration Notes

- Different FMC001 firmware versions and hardware revisions can expose slightly different parameter IDs or configuration screens; always check the Teltonika Configurator and official release notes for your firmware.  
- Choose UDP or TCP based on your operational needs; both transports are supported for Plaspy on port 8888.  
- The provided example uses the domain d.plaspy.com; you may use the IP 54.85.159.138 if your environment requires it, but domain use is generally preferred for future server changes.  
- SMS command configuration is a common option with Teltonika devices; ensure SMS control is enabled and that you send commands from an authorized number.  
- Plaspy automatically detects the tracker protocol when the tracker connects to d.plaspy.com on port 8888 so no additional protocol selection is required in the platform.

## Why Use Plaspy with This Configuration

Using the FMC001 with Plaspy gives fleets and vehicle managers a straightforward path to collect GPS, OBD II, accelerometer, and Bluetooth sensor data in a single platform. The shared Plaspy server settings and automatic protocol detection reduce the platform-side configuration burden, so devices from different models can be consolidated quickly.

Learn more about Plaspy at https://www.plaspy.com and refer to the manufacturer for the latest device specific details at https://www.teltonika-gps.com/ to verify firmware behavior and exact configuration steps.
