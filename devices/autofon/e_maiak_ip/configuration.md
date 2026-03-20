---
slug: /autofon/e_maiak_ip/configuration
id: e_maiak_ip-configuration
sidebar_label: Configuration
title: AutoFon - E-Маяк IP Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the AutoFon E-Маяк IP tracker with Plaspy server settings and practical setup steps
keywords:
  - AutoFon E-Маяk IP configuration
  - AutoFon E-Маяk IP setup
  - E-Маяk IP Plaspy integration
  - AutoFon tracker configuration
  - vehicle tracking setup
  - GPS tracker Plaspy configuration
  - E-Mayaк IP server settings
  - fleet management tracker
  - asset tracking configuration
  - AutoFon configuration guide
---

# AutoFon - E-Маяк IP Configuration

This page documents the public configuration context for using the AutoFon E‑Маяк IP tracker with the Plaspy platform. It focuses on the practical server settings and workflow needed so the E‑Маяк IP can send location and alarm messages to Plaspy, either via SMS forwarding or via protocol messages when GPRS is enabled. Use this guide together with the device manufacturer documentation for device specific commands and firmware behavior.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol once the device reports to the Plaspy server. Exact manufacturer side steps for the E‑Маяк IP can vary by firmware version, hardware revision, installation type, and the configuration tool you use, so follow the vendor instructions when applying these public server values.

## Configuration Overview

This configuration prepares the E‑Маяк IP to communicate reliably with Plaspy so location updates, alarms and telemetry appear in the platform. The goal is to set the device to report to the Plaspy server endpoint and confirm the device is visible and reporting as expected.

- Configure the tracker to send protocol messages or forward SMS to the Plaspy endpoint.
- Enter the shared Plaspy server address and port used for all supported devices.
- Select UDP or TCP transport on the tracker if required by the device configuration UI.
- Save and apply parameters, then verify the device reports live data and alarms to Plaspy.
- Confirm heartbeat and alarm messages are received to validate liveness and battery telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com for tracker reporting and protocol connections
- Server IP 54.85.159.138 as an alternative endpoint for device configuration
- Port 8888 used by Plaspy for all supported devices
- Transport support: configure the device to use UDP or TCP on port 8888 if prompted
- Plaspy performs automatic protocol detection once a device reports to the server

## Typical Requirements Before Setup

- A charged and installed E‑Маяк IP with required battery or external power as per the manufacturer
- An active SIM card in the device with SMS and/or data service depending on your chosen reporting method
- Access to the official AutoFon configuration method such as SMS commands, vendor software, or installer tools
- Known authorized phone numbers and any PINs required by the device for remote configuration
- Reasonable GNSS and cellular coverage at the installation location for first time reporting
- A Plaspy account or registration process to add and identify the device once it reports to the server

## How This Tracker Connects to Plaspy

The E‑Маяк IP can deliver GPS coordinates, alarms and telemetry to Plaspy either by SMS forwarding or by sending protocol messages over a cellular data connection when GPRS is enabled. In either case, the device is configured to target the shared Plaspy server endpoint and port so Plaspy ingests messages automatically.

- The tracker sends SMS or protocol messages pointing to d.plaspy.com or 54.85.159.138
- Messages are received on port 8888 which is the standard Plaspy port for all devices
- Choose UDP or TCP on the device if prompted; Plaspy supports both transports
- Plaspy automatically detects the tracker protocol and parses position and alarm data
- Once reporting, Plaspy shows location, accelerometer alarms, SOS events and telemetry in the platform

## Common Configuration Workflow

1. Access the official AutoFon configuration method for the E‑Маяк IP (SMS commands, vendor software, or installer interface).
2. Enter the Plaspy server address either as d.plaspy.com or as the numeric endpoint 54.85.159.138 in the device server field.
3. Set the server port to 8888 which is used for all Plaspy compatible devices.
4. If the tracker configuration requires a transport selection, choose UDP or TCP and save that option.
5. Apply or save the configuration on the device and, if the device requires it, restart the tracker to activate the new settings.
6. Validate that the device reports to Plaspy by checking for initial location, heartbeat, or alarm messages in the Plaspy account or monitoring interface.

## Example Configuration Commands

The E‑Маяк IP supports configuration through manufacturer provided SMS commands or configuration software. Exact command syntax and available parameters depend on firmware and the vendor tool you are using. Because the device supports multiple configuration paths, consult the official AutoFon documentation for the exact SMS templates or software steps. When configuring, use the Plaspy server values: domain d.plaspy.com or IP 54.85.159.138 and port 8888, selecting UDP or TCP if the device requires a transport selection.

## Configuration Notes

- Firmware differences can change available SMS commands and protocol options; check the device firmware version before applying settings.
- The E‑Маяк IP can report via SMS or GPRS protocol messages; choose the method that fits your installation and data plan.
- When given an option between TCP and UDP, consider network reliability and vendor guidance; Plaspy accepts both and will auto detect protocol details.
- Keep track of authorized numbers and PINs required for SMS configuration to avoid lockouts during remote setup.
- Verify antenna placement and installation orientation to ensure reliable GPS fixes and cellular connectivity for initial reporting.

## Why Use Plaspy with This Configuration

Using the AutoFon E‑Маяк IP with Plaspy enables persistent, low maintenance tracking for vehicles, containers, and remote assets where long battery life and discreet installation matter. Plaspy ingests the E‑Маяк IP’s position and alarm messages and presents them on maps, dashboards and alert channels so operational teams can monitor movement, SOS events and accelerometer alarms.

To learn more about Plaspy and supported integration options visit https://www.plaspy.com. Device specific configuration methods, firmware behavior and manufacturer details can change over time, so verify the latest setup guidance and command lists on the manufacturer site https://www.autofon.ru/.
