---
slug: /teltonika/ftc305/configuration
id: ftc305-configuration
sidebar_label: Configuration
title: Teltonika - FTC305 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guidance to connect Teltonika FTC305 trackers to Plaspy using shared server settings and an example command
keywords:
  - Teltonika FTC305 configuration
  - FTC305 setup
  - FTC305 Plaspy
  - Teltonika tracker configuration
  - FTC305 server configuration
  - GPS tracker Plaspy setup
  - FTC305 GPS platform setup
  - Teltonika CAN bus telemetry
  - Fleet tracker configuration
  - Plaspy device setup
---

# Teltonika - FTC305 Configuration

This page documents the public configuration context for using the Teltonika FTC305 tracker with Plaspy. It focuses on the shared server details Plaspy requires and the practical steps you can follow to point an FTC305 at the Plaspy endpoint so the device can report GNSS and telemetry data into your Plaspy instance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side steps can vary by firmware, hardware revision, installation type, and the vendor tools used for configuration. The FTC305 is Plaspy compatible out of the box and the manufacturer command example below shows how to set APN and server values; adjust exact commands and transport choices according to your device firmware and installer tools.

## Configuration Overview

This configuration process prepares the FTC305 to communicate with Plaspy by assigning the Plaspy server endpoint and transport parameters, ensuring the device can open a session and deliver position and telemetry data to the platform. The model configuration example included below demonstrates a concise parameter update that sets APN values and the Plaspy server address and port.

- Set the device APN and credentials so the cellular radio can establish data connectivity.
- Point the FTC305 to the Plaspy server domain or IP so reports are sent to Plaspy.
- Choose UDP or TCP transport if the device requires a transport selection.
- Apply and save the configuration, then restart the tracker if needed to begin reporting.
- Validate that the device appears in Plaspy and that location and telemetry are visible.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy settings to use when configuring the FTC305 to report to Plaspy. Use either the domain d.plaspy.com or the IP 54.85.159.138 with port 8888 and select UDP or TCP as required by your tracker configuration tool.

## Typical Requirements Before Setup

- A powered and accessible FTC305 device installed or on a bench for initial configuration.  
- A valid cellular SIM card with a data plan and the correct APN information for the operator.  
- Access to the manufacturer configuration method such as SMS commands or the vendor configuration tool supported by the device.  
- Knowledge of firmware version and hardware variant so you can follow the correct vendor procedure.  
- Basic tools to confirm connectivity such as a serial console, SMS terminal, or mobile phone to send configuration SMS if supported.  

## How This Tracker Connects to Plaspy

The FTC305 is configured to report GNSS position and available telemetry to the shared Plaspy endpoint and port so Plaspy can ingest and display data for mapping, alerts, and telemetry dashboards. Once pointed to Plaspy, the device creates outbound connections to the Plaspy server and sends periodic reports and event-driven messages.

- The tracker uses the configured APN to gain IP connectivity before opening a session to d.plaspy.com or 54.85.159.138.  
- Data packets are sent to port 8888 using either UDP or TCP as selected in device configuration.  
- Plaspy automatically detects the tracker protocol on receipt so the tracker can use the supported protocol without additional per-device protocol selection in Plaspy.  
- Position fixes and CAN bus telemetry are delivered to Plaspy for live maps, alerts, and historical reports once the device is connected.  
- Platform visibility enables operational monitoring and geofence or movement alerts based on the received messages.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the FTC305 (for example SMS commands or the vendor configuration tool).  
2. Configure the device APN and credentials using the placeholders provided by your mobile operator.  
3. Enter the Plaspy server address using d.plaspy.com or 54.85.159.138.  
4. Set the server port to 8888.  
5. Choose UDP or TCP if the device requires a transport selection.  
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.  
7. Validate that the device reports to Plaspy by checking device activity in Plaspy and confirming position and telemetry data are visible.

## Example Configuration Commands

The manufacturer provided a compact command that updates APN and server parameters in one step. Preserve the APN placeholders when you replace them with your operator values.

- Example single command to set APN and Plaspy server parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on this command and placeholders
- [apn] is the cellular operator APN name required for data connection.  
- [apnu] is the APN username if your operator requires one; leave blank or omit if not used.  
- [apnp] is the APN password if required by the operator.  
- The command sets the server domain to d.plaspy.com and the port to 8888 as required by Plaspy.  
- Send this command using the manufacturer supported method such as SMS or the vendor configuration tool per your device documentation.  
- Do not change the domain or port values unless instructed by Plaspy or your integrator; Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Configuration Notes

- Firmware and hardware revisions can change parameter names and command syntax; always verify commands against the device firmware release notes.  
- Some installers prefer SMS based configuration while others use a desktop or web configuration tool. Use the manufacturer method that matches your device SKU and firmware.  
- Choosing UDP or TCP can affect message reliability and network behavior; select the transport that fits your connectivity environment and any carrier constraints.  
- If you need to use the server IP instead of the domain, specify 54.85.159.138 with port 8888 as an alternative to d.plaspy.com.  
- Retain a record of the APN and server settings applied to each device for troubleshooting and fleet inventory management.

## Why Use Plaspy with This Configuration

Using the FTC305 with Plaspy gives fleet managers and operators a straightforward path to ingest GNSS positions and available CAN bus telemetry into a single platform for tracking, alerts, and reporting. The FTC305’s rugged design, wide power input and telemetry capabilities combined with Plaspy server settings make it suitable for e-mobility and specialized vehicle fleets that need continuous visibility and operational analytics.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration guidance, firmware notes, and manufacturer details on the official Teltonika site https://www.teltonika-gps.com/ since manufacturer setup methods and firmware behavior can change over time.
