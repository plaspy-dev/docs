---
slug: /skypatrol/sp3400c/configuration
id: sp3400c-configuration
sidebar_label: Configuration
title: SkyPatrol - SP3400C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the SkyPatrol SP3400C to Plaspy with practical server and setup details
keywords:
  - SkyPatrol SP3400C configuration
  - SkyPatrol SP3400C setup
  - SkyPatrol SP3400C Plaspy
  - SkyPatrol GPS tracker configuration
  - SP3400C server configuration
  - SP3400C tracking software setup
  - SP3400C GPS platform setup
  - Plaspy device configuration
  - vehicle tracking SP3400C
  - fleet management SP3400C
---

# SkyPatrol - SP3400C Configuration

This page documents the public configuration context for using the SkyPatrol SP3400C with Plaspy. It focuses on the practical server and workflow details needed to point the tracker at Plaspy so the device can report location and events. The content here is intended for installers, integrators, and technical operators who need clear, platform-specific setup guidance based on public information.

The SP3400C is a CDMA 1xRTT device with embedded TCP IP stack, UDP support, and SMS options plus over the air firmware capability. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide together with the official SkyPatrol documentation for device specific instructions.

## Configuration Overview

This configuration process prepares the SP3400C to communicate with Plaspy so the device becomes visible in the fleet platform and reports location and events reliably. The goal is to ensure the tracker is pointed to the Plaspy endpoint, uses the correct transport, and validates connectivity after applying configuration.

- Configure the SP3400C to send telemetry to the Plaspy server endpoint and port
- Select the transport method required by the device and firmware, typically UDP or TCP
- Save and apply settings and, if required, restart the device or push OTA updates
- Verify that the device appears in Plaspy and is reporting location and status
- Use manufacturer tools or SMS commands where applicable to perform the configuration

## Plaspy Server Settings

Use the following public Plaspy values when configuring the tracker server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and the platform will detect the tracker protocol automatically once the device sends data to the configured endpoint.

## Typical Requirements Before Setup

- Device powered and installed with good antenna placement for cellular and GPS reception
- Active CDMA network registration or carrier activation as required by the SP3400C
- Access to the SkyPatrol configuration tool, SMS command interface, or the installer documentation
- Current firmware level documented so you can follow the appropriate configuration steps
- Plaspy account or fleet registration workflow ready to accept the device identifier (IMEI or device ID)
- Tools to monitor device connectivity such as serial console, OTA logs, or SMS replies when available

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SP3400C sends its location and event data to the shared Plaspy server endpoint and port. Plaspy receives the incoming telemetry, detects the device protocol automatically, and maps the data into the platform so assets can be monitored in real time.

- The tracker is pointed to d.plaspy.com or 54.85.159.138 as the destination host
- The device sends messages to port 8888 which is the shared port used by Plaspy for all devices
- Transport is set to UDP or TCP depending on the device firmware and installer choice
- Plaspy performs automatic protocol detection on incoming connections and parses supported protocols
- Successful reporting enables location visibility and event monitoring inside the Plaspy platform

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software for the SP3400C as documented by the manufacturer.
2. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set the destination port to 8888. Remember that Plaspy uses the same port for all devices.
4. Choose the transport option UDP or TCP if the device firmware requires a transport selection.
5. Apply or save the configuration on the SP3400C via the manufacturer tool, SMS command, or OTA method.
6. Restart the device if the firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by confirming device visibility and recent data in the Plaspy platform.

## Example Configuration Commands

The SP3400C supports multiple configuration methods depending on firmware and installer tools. Exact command formats and SMS strings are manufacturer specific and can vary by firmware version and vendor tool. Because those commands are provided by SkyPatrol documentation or installer interfaces, consult the official SkyPatrol configuration guide for the exact SMS or serial commands needed to set server, port, and transport. When using a configuration tool, enter d.plaspy.com or 54.85.159.138 and port 8888 and select UDP or TCP as appropriate, then apply and reboot the device if required.

If your installation tool or firmware uses placeholders for APN or credentials you may see variables such as {{apn}} or {{apnu}} in manufacturer examples. Keep these placeholders intact and replace them with your operator values as instructed by SkyPatrol documentation.

## Configuration Notes

- Firmware differences can change the exact menu path or SMS command set required to set server and transport options; always confirm commands for your firmware build.
- Choose UDP or TCP based on environmental needs and manufacturer recommendations; UDP is commonly used for telemetry but TCP is supported where reliable delivery is required.
- The SP3400C supports SMS and software based setup depending on the installer tools provided by SkyPatrol; follow the official SMS syntax if using that method.
- All devices sending data to Plaspy should point to d.plaspy.com or 54.85.159.138 and use port 8888 to ensure consistent routing into the platform.
- After configuration, validate connectivity by confirming the device's first reports are received and parsed by Plaspy.

## Why Use Plaspy with This Configuration

Connecting the SkyPatrol SP3400C to Plaspy provides a straightforward way to bring CDMA vehicle trackers into a single fleet management platform. Using the shared Plaspy endpoint and port simplifies deployment because all supported devices use the same destination details and Plaspy automatically detects the protocol in use. This reduces per-device configuration complexity and helps ensure devices begin reporting without prolonged protocol negotiation.

To learn more about Plaspy and how it handles device onboarding and reporting, visit https://www.plaspy.com. For the latest SP3400C specific setup instructions, firmware behavior, and manufacturer command reference, verify details on the official SkyPatrol site https://www.skypatrol.com/ as manufacturer specifications and setup methods can change over time.
