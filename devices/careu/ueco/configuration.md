---
slug: /careu/ueco/configuration
id: ueco-configuration
sidebar_label: Configuration
title: CAREU - Ueco Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the CAREU Ueco tracker with Plaspy using shared server settings and practical setup steps
keywords:
  - CAREU Ueco configuration
  - CAREU Ueco setup
  - CAREU Ueco server configuration
  - CAREU Ueco Plaspy
  - Ueco GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking platform setup
  - fleet management tracker configuration
  - Ueco remote configuration
  - GPS tracker protocol detection
---

# CAREU - Ueco Configuration

This page documents the public configuration context for using the CAREU Ueco tracker with the Plaspy platform. It explains the shared server settings Plaspy requires and outlines practical, manufacturer-agnostic steps to prepare the Ueco for connection and verification in Plaspy. Use this page as a configuration reference alongside manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools, so always confirm device behavior with the official CAREU documentation.

## Configuration Overview

The goal of this configuration is to prepare the CAREU Ueco to communicate reliably with the Plaspy platform so the device appears and reports correctly inside your Plaspy account. These public settings are the practical bridge between the device and Plaspy and are applied via the manufacturer configuration method for the Ueco.

- Configure the device to report to Plaspy using the shared Plaspy server endpoint and port.
- Choose transport (UDP or TCP) as required by the device configuration method; Plaspy will accept either and detect the protocol automatically.
- Ensure mobile data and SIM settings are valid so the Ueco can open a data session and send reports.
- Apply and save configuration through the official CAREU configuration tool or SMS/firmware method and restart the unit if required.
- Validate the tracker appears as an active device in Plaspy and is sending location and event messages.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once data is received
- Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the Ueco has a working SIM card with data enabled and sufficient credit or data plan for mobile reporting.
- Ensure the device has power connected and is fully functional according to manufacturer diagnostics.
- Have access to the official CAREU configuration method or software provided by the vendor for sending server and APN settings.
- Know any APN, username, and password values required by the cellular provider (preserve them as {{apn}}, {{apnu}}, {{apnp}} in tools that accept placeholders).
- Confirm firmware version and any vendor notes that affect remote configuration or transport selection.
- A method to restart or power cycle the tracker after applying settings, if required.

## How This Tracker Connects to Plaspy

When configured, the CAREU Ueco opens a data connection to the Plaspy endpoint and transmits periodic position and event data. Plaspy processes incoming telemetry and makes the device visible in the platform; the server and transport settings below are the public values you must apply on the device side.

- The Ueco is pointed at the shared Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Device transport can be set to UDP or TCP on port 8888 depending on the configuration tool; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol from the incoming connection, so you only need to set the correct endpoint and transport.
- Once the tracker sends valid messages, Plaspy will register telemetry and status updates for visibility and monitoring.
- Typical data reported includes position updates, geofence events, crash or harsh event notifications, and configured diagnostics according to Ueco capabilities.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the vendor, or use the documented SMS commands if supported by your device and firmware.
2. Enter the Plaspy server address as either d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the port to 8888 for the Plaspy connection.
4. Choose UDP or TCP if the device requires a transport selection; both are accepted by Plaspy.
5. Apply or save the configuration in the manufacturer tool and confirm the settings were written to the device.
6. Restart or power cycle the Ueco if the manufacturer instructions indicate a reboot is necessary to apply network settings.
7. Validate that the device reports to Plaspy by checking for incoming messages and telemetry in the platform once the unit is online.

## Example Configuration Commands

The CAREU Ueco can be configured using manufacturer tools, SMS command sets, or provisioning software depending on firmware. The exact command syntax and process varies by firmware and vendor tool, so confirm the correct commands with CAREU documentation. Because model specific commands and formats can change, consult the official CAREU configuration manual for exact SMS or serial command examples.

## Configuration Notes

- Firmware matters: different firmware or hardware revisions may change command syntax, supported transports, or remote configuration capabilities.
- Transport choice: TCP and UDP are both supported on port 8888; choose the transport that matches your provisioning method or local network conditions.
- APN placeholders: many tools use placeholders such as {{apn}}, {{apnu}}, and {{apnp}} for cellular settings; preserve these placeholders when required by the configuration interface.
- FOTA and updates: the Ueco supports FOTA via FTP per manufacturer documentation; ensure any FOTA process does not overwrite server settings unintentionally.
- Verify vendor documentation for SMS versus software configuration options and any optional features such as two way voice or additional GNSS systems.

## Why Use Plaspy with This Configuration

Using the CAREU Ueco with Plaspy gives organizations a practical path to centralized visibility and monitoring for vehicles and assets. With the shared Plaspy server endpoint and automatic protocol detection, integrating Ueco devices into Plaspy is focused on correctly applying the public server and transport settings so the devices can transmit telemetry and events reliably.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer guidance, verify details on the official CAREU site https://www.systech-iot.com/ as vendor documentation may change over time.
