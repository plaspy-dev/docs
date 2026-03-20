---
slug: /gotop/c790_y/configuration
id: c790_y-configuration
sidebar_label: Configuration
title: GOTOP - C790-Y Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP C790 Y tracker integration with Plaspy covering server settings and practical setup steps
keywords:
  - GOTOP C790 Y configuration
  - GOTOP C790 Y setup
  - GOTOP C790 Y server configuration
  - C790 Y Plaspy
  - GOTOP tracker Plaspy
  - GPS tracker configuration
  - vehicle tracker setup
  - fleet tracking configuration
  - GPS platform setup
  - GPRS tracker configuration
---

# GOTOP - C790-Y Configuration

This page covers the public configuration context for using the GOTOP C790-Y tracker with Plaspy. It summarizes the practical server settings and the typical setup flow needed to point the C790-Y at Plaspy for real time tracking, event reporting, and historical route playback. Use this guide together with the device documentation from the manufacturer for device specific steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to supply a protocol type to the platform. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor configuration tools, so confirm details with GOTOP documentation when required.

## Configuration Overview

Configuring the C790-Y for Plaspy prepares the device to transmit GNSS position and vehicle telemetry over GPRS to a central Plaspy server so the platform can display live location, replay history, and surface alarms. The steps focus on setting the server endpoint, verifying the transport method, and confirming the device is visible in Plaspy.

- Set the device to report to Plaspy using the shared server endpoint and port so it is recognized by the platform.
- Verify the device has a working GPRS connection and the correct APN if required by the carrier.
- Choose UDP or TCP on the device if a transport option is required and save the setting.
- Apply and, if needed, restart the tracker to begin reporting to Plaspy.
- Confirm the device appears and reports data inside Plaspy once configuration is complete.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and installed GOTOP C790-Y with vehicle power available for configuration and testing.
- An active SIM card with a data plan that supports GPRS if the tracker uses cellular data for reporting.
- Access to the official GOTOP configuration method or software provided by the manufacturer or vendor.
- Knowledge of the carrier APN settings if required for data connectivity.
- Ability to apply and save device settings and to restart the device if the configuration process requires it.

## How This Tracker Connects to Plaspy

The C790-Y sends GNSS position and vehicle telemetry over GPRS to the Plaspy server endpoint so the platform can ingest location updates and alarm events in real time. Configure the device to report to the shared Plaspy endpoint and port so Plaspy can automatically detect and parse the tracker protocol.

- The tracker transmits position fixes and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP on the device if a transport selection is required.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection.
- Event reports such as SOS, geofence entry or exit, and ACC state are forwarded to Plaspy for alerts and workflows.
- Once reporting starts the device becomes visible in Plaspy for live tracking and historical playback.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software as provided by your vendor or in the manufacturer documentation.
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
3. Set the device server port to 8888 as the destination port for telemetry.
4. Choose UDP or TCP on the device if a transport option is required by the configuration interface.
5. Apply or save the configuration changes in the device tool or interface.
6. Restart the C790-Y if the manufacturer instructions require a reboot to activate the new server settings.
7. Validate that the device is reporting to Plaspy by checking device visibility and recent data in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on the manufacturer tool, the device firmware, and the vendor workflow. GOTOP devices are commonly configured with the manufacturer software, a USB or serial tool, or SMS commands when supported by firmware. Because manufacturer commands vary by model and firmware, refer to GOTOP documentation for the precise command syntax used to set server and APN values.

If you use a vendor or GOTOP tool, follow its instructions to enter:
- Server domain d.plaspy.com or server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP

Always preserve any required placeholders in vendor tools and confirm the commands before sending them to the device.

## Configuration Notes

- Firmware and configuration menus may vary across hardware revisions and regional models. Verify which firmware your device uses before following instructions.
- If the device requires an APN for GPRS, obtain the correct APN, username, and password from the mobile carrier and enter them using the official GOTOP tool.
- Choose TCP or UDP according to the device configuration option; Plaspy accepts either and will auto detect the protocol once the device connects.
- Plaspy uses the same port for all supported devices which simplifies multi device deployments and makes central server settings consistent.
- If you rely on SMS based setup commands, confirm with GOTOP documentation which SMS commands are supported by your firmware version.

## Why Use Plaspy with This Configuration

Using the GOTOP C790-Y with Plaspy provides a straightforward way to bring GNSS position and vehicle telemetry into a centralized monitoring platform. The combination of the C790-Y feature set and Plaspy server configuration allows organizations to get live location, event alerts, and historical routes into the same platform for operational insight and faster response.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and manufacturer guidance verify information on the GOTOP site at https://www.gotop.cc/ as setup commands and firmware behavior can change over time.
