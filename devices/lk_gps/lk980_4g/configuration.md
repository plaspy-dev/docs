---
slug: /lk_gps/lk980_4g/configuration
id: lk980_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK980-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure LK GPS LK980 4G for use with Plaspy including server settings transport options and setup workflow
keywords:
  - LK GPS LK980 4G configuration
  - LK GPS LK980 4G setup
  - LK GPS server configuration
  - LK980 4G Plaspy setup
  - Plaspy tracker configuration
  - Plaspy LK GPS integration
  - LK980 4G GPS tracker configuration
  - vehicle tracker setup LK GPS
  - LK980 4G SMS configuration
  - LK980 4G firmware considerations
---

# LK-GPS - LK980-4G Configuration

This page documents the public configuration context for using the LK-GPS LK980-4G tracker with the Plaspy platform. It focuses on the shared server settings Plaspy requires, the practical steps you will take on the manufacturer side, and what to validate so your device appears and reports correctly in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide as a practical reference and verify any device-specific steps with LK-GPS documentation or your installer tools.

## Configuration Overview

Configuring the LK980-4G for Plaspy prepares the tracker to send location, telemetry, and alarm events to the platform reliably. The goal is to point the device at Plaspy servers, select an appropriate transport, and confirm communication so the tracker becomes visible and manageable in Plaspy.

- Configure the device to report to the Plaspy server endpoint so location and events are forwarded to the platform.
- Choose the transport method supported by the device and match it to Plaspy settings on the tracker.
- Set and save the server host and port so the unit can establish a connection.
- Validate communication from the device to Plaspy and confirm the device appears in your Plaspy account or inventory.
- Test alarms and basic telemetry reporting to ensure events are received and interpreted correctly.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port 8888 for all supported devices and Plaspy automatically detects the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A powered and installed LK980-4G unit with vehicle wiring completed according to the manufacturer installation guide.
- Active cellular connectivity for the device including a compatible SIM card provisioned for data and SMS if SMS configuration is used.
- Access to the LK-GPS configuration method you intend to use such as the official mobile app, SMS command interface, or vendor configuration tool.
- The tracker IMEI or device identifier available to register and identify the unit in Plaspy.
- A Plaspy account or administrative access to the Plaspy platform to add and verify the device once it reports.
- Knowledge of any firmware version or vendor customization that may affect configuration commands or menu locations.

## How This Tracker Connects to Plaspy

The LK980-4G sends location updates, telemetry and alarm events over the cellular network to the Plaspy server endpoint and port. Once configured to report to Plaspy, the platform receives data for live mapping, event alerts, and historical playback.

- The tracker is configured to report to the shared Plaspy server endpoint and port so Plaspy ingests GPS coordinates and status events.
- Alerts such as SOS, vibration or tamper events are forwarded to Plaspy for notification and operator response.
- Telemetry and input/output events from the device become visible in Plaspy dashboards and logs.
- Plaspy automatically detects the tracker protocol when the device connects, reducing the need for manual protocol selection.
- The unit may be configured to use either UDP or TCP transport on port 8888 depending on the device settings and installer preference.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software you plan to use such as the vendor app, desktop tool, or SMS command interface.
2. Enter the Plaspy server host as d.plaspy.com or use the fallback server IP 54.85.159.138 if your configuration tool requires an IP.
3. Set the device port to 8888 so the tracker sends data to the Plaspy listening port.
4. If the device requires a transport selection, choose UDP or TCP according to your network preference and the tracker options.
5. Apply or save the configuration on the tracker and confirm the changes have been accepted by the device.
6. Restart the device if required by the manufacturer or configuration process to activate the new settings.
7. Validate that the tracker reports to Plaspy by confirming the device appears in the Plaspy platform and observing initial position or status messages.

## Example Configuration Commands

The exact commands and syntax used to configure the LK980-4G depend on LK-GPS firmware and the chosen configuration method (SMS, app, or vendor software). Because manufacturer command formats vary, provide commands only when you have the device manual or vendor guidance.

If you use SMS configuration, typical public workflows involve sending parameter commands to the device IMEI or phone number. If you use the LK-GPS app or vendor tool, set the server host to d.plaspy.com or 54.85.159.138 and set port 8888 in the network or server settings section. Plaspy will accept connections over UDP or TCP and will auto detect the protocol when the device connects.

## Configuration Notes

- Firmware differences and OEM customizations can change the exact menu names, SMS syntax, or tool behavior; always check the device firmware release notes.
- Some installers prefer UDP for lower overhead while others choose TCP for reliability; the LK980-4G can be configured for either transport and Plaspy supports both.
- Because Plaspy uses the same port for all supported devices, setting port 8888 is a consistent step across different tracker models.
- If you plan to use SMS commands for configuration, ensure the SIM supports SMS and you understand the SMS command format from LK-GPS documentation.
- Always save or apply changes in the manufacturer tool and follow any recommended device restart steps to ensure the new server settings take effect.

## Why Use Plaspy with This Configuration

Using the LK980-4G with Plaspy provides a straightforward path to centralized visibility and event management for fleets and vehicle operators. The tracker’s 4G LTE connectivity with 2G fallback combined with Plaspy’s automated protocol detection and shared server endpoint simplifies deployment across mixed fleets and reduces configuration variability.

To learn more about Plaspy and how the platform can centralize tracking and alerts for devices like the LK980-4G visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation instructions consult the LK-GPS manufacturer documentation at https://www.lk-gps.com to verify current procedures and behavior.
