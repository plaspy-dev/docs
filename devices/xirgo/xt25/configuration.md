---
slug: /xirgo/xt25/configuration
id: xt25-configuration
sidebar_label: Configuration
title: Xirgo - XT25 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT25 tracker showing Plaspy server settings and example SMS commands for integration
keywords:
  - Xirgo XT25 configuration
  - Xirgo XT25 setup
  - XT25 Plaspy configuration
  - XT25 GPS tracker setup
  - Xirgo configuration guide
  - Plaspy tracker settings
  - vehicle tracker configuration
  - GPS tracker SMS commands
  - fleet tracking XT25
  - XT25 server setup
---

# Xirgo - XT25 Configuration

This page covers the public configuration context for using the Xirgo XT25 tracker with Plaspy. It collects the practical server settings and example SMS commands that are publicly available and explains how to apply them so the unit can report to Plaspy for live tracking and telemetry. Use this guide together with the device's manufacturer documentation and your installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The XT25 supports SMS and GPRS configuration methods in many deployments, and the example commands below reflect the publicly published SMS commands that integrators commonly use.

## Configuration Overview

The goal of configuration is to prepare the XT25 to communicate reliably with Plaspy, validate connectivity on the vehicle, and enable visibility in the Plaspy platform. The example commands below show how to set APN values and the Plaspy GPRS server so the device can send data to the shared Plaspy endpoint.

- Configure the device with the mobile operator APN so it can obtain GPRS data connectivity.
- Set the tracker to report to Plaspy's shared server endpoint and port so Plaspy can receive telemetry.
- Choose the transport protocol (UDP or TCP) if the device requires it and save the configuration.
- Validate the device on the vehicle and confirm the unit appears in Plaspy for live tracking and reporting.
- Use SMS-based configuration or the manufacturer configuration tool depending on site practices and firmware.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered XT25 installed or connected for initial configuration and testing.  
- An active cellular SIM with data enabled and operator APN details for the device to connect to mobile networks.  
- Access to an SMS-capable phone or manufacturer configuration tool if SMS setup is required.  
- The device must be reachable (power and antenna connections checked) and not in a locked or firmware-restricted state.  
- Manufacturer documentation or installation instructions from Xirgo to confirm command formats and firmware behavior.  

## How This Tracker Connects to Plaspy

The XT25 is configured to send location fixes and telemetry to Plaspy's shared server endpoint and port so the platform can ingest events, present live locations on a map, and produce alerts and reports. Once the XT25 is pointed at the Plaspy server and has data connectivity, Plaspy detects the incoming protocol and associates the device with your account or fleet.

- The tracker reports GNSS fixes and motion/accelerometer events to the Plaspy endpoint.  
- Telemetry such as OBD-derived ignition status and diagnostic signals can be forwarded to Plaspy when available.  
- The device is set to use the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888 for data uploads.  
- Transport can be either UDP or TCP depending on device selection; Plaspy accepts both and detects protocol.  
- Once reporting, the device becomes visible in Plaspy for live tracking, geofence alerts, and historical playback.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or software recommended by the manufacturer (SMS commands, web tool, or configuration utility).  
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device's GPRS/server settings.  
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Configure the operator APN and any APN credentials required by the SIM so GPRS data is available.  
6. Apply or save the configuration and, if required, restart the device to activate new settings.  
7. Validate that the device reports to Plaspy and appears in the platform with live location updates and telemetry.

## Example Configuration Commands

The XT25 supports SMS-based configuration. The following publicly available SMS commands are used to set the APN and GPRS server for Plaspy. Send each command as an SMS from an authorized phone number if SMS configuration is enabled on your device.

- Set the operator APN and optional credentials (replace placeholders with your operator values):
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explanation of placeholders:
- [apn] = APN name provided by your cellular operator.  
- [apnu] = APN username if required (leave blank or use placeholder if not required).  
- [apnp] = APN password if required (leave blank or use placeholder if not required).

- Set the GPRS server to Plaspy (port and server IP are shown and must match Plaspy settings):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
This command sets the tracker to use port 8888 and the Plaspy server IP 54.85.159.138. The numeric parameters after the IP reflect the device command format as published; consult Xirgo documentation for full command parameter definitions.

## Configuration Notes

- SMS-based configuration is supported by the public XT25 commands above; some installations prefer a wired configuration tool or manufacturer utility. Use the method that matches your firmware and installer procedures.  
- Firmware versions and hardware revisions can change command syntax or available options; verify the correct command format for your device firmware.  
- Choose UDP or TCP based on your integration and network requirements; Plaspy accepts both and will detect the protocol automatically.  
- All devices in Plaspy use the same port (8888) for incoming connections—this simplifies deployment across mixed device fleets.  
- Always cross-check public commands and parameters with Xirgo official documentation to confirm the exact behaviour for your unit.

## Why Use Plaspy with This Configuration

Configuring the Xirgo XT25 to report to Plaspy gives fleet operators a practical way to centralize vehicle locations, telemetry, and event reporting in a single platform. With the XT25's onboard sensors, OBD data where available, and optional Bluetooth or I/O expansion, Plaspy can present ignition-aware events, movement alerts, geofence notifications, and historical route playback for operational oversight and incident investigation.

Learn more about Plaspy on the main website https://www.plaspy.com and consult Xirgo for the latest XT25 device documentation at https://xirgo.com/ to verify device specific configuration methods, firmware behavior, and manufacturer-provided command details.
