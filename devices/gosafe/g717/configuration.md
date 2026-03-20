---
slug: /gosafe/g717/configuration
id: g717-configuration
sidebar_label: Configuration
title: Gosafe - G717 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the Gosafe G717 tracker with Plaspy using shared server settings and automatic protocol detection
keywords:
  - Gosafe G717 configuration
  - Gosafe G717 setup
  - Gosafe G717 Plaspy
  - G717 server configuration
  - G717 GPS tracker setup
  - Gosafe tracker configuration
  - Plaspy tracker integration
  - vehicle tracking configuration
  - GPS platform setup
  - G717 tracking software
---

# Gosafe - G717 Configuration

This page covers the public configuration context for using the Gosafe G717 tracker with Plaspy. It explains the shared server settings and practical steps you can use to point a G717 at Plaspy so the device reports location and event data to the platform. The guidance here is focused on the public connectivity and server information required for integration and assumes use of the G717 as described by the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, or vendor configuration tools. The G717 is a plug and play cigarette lighter GPS tracker that supports 2G 3G and LTE networks, TCP and SMS communication, and can be configured by IP or domain, so your specific configuration method may depend on the firmware and the manufacturer tool you use.

## Configuration Overview

Configuring a Gosafe G717 for Plaspy is primarily about making sure the tracker sends its telemetry to Plaspy's shared endpoint and port so the platform can receive and display location, events, and alerts. Use the G717 configuration method provided by Gosafe or your installer to set the server domain or IP and the transport type, then validate the device reports successfully to Plaspy.

- Point the device to the Plaspy server endpoint so telemetry goes to the platform
- Configure the device transport to TCP or UDP as required and set the port used by Plaspy
- Ensure the device has active mobile network connectivity and appropriate provisioning for data or SMS setup
- Save the configuration and restart the tracker if the manufacturer tool requires a reboot
- Verify the device appears in Plaspy and is sending location updates and events

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and functioning Gosafe G717 installed in the vehicle power outlet
- An active SIM with data or SMS capability as required by the device and network availability
- Access to the official Gosafe configuration method or vendor tool for the G717
- Knowledge of whether your installer tool requires IP or domain configuration and transport selection
- Confirmation of the device firmware level if installer support or specific commands are required
- A test plan to validate that the device reports to d.plaspy.com or 54.85.159.138 on port 8888

## How This Tracker Connects to Plaspy

The G717 is configured to send location and event data to the shared Plaspy server endpoint and port so that Plaspy can ingest, parse, and display the device telemetry. Plaspy will accept connection from the tracker on port 8888 and will automatically determine the tracker protocol so minimal per-device protocol selection is usually needed on the platform side.

- Device telemetry is sent to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device configuration and network behavior
- Plaspy automatically detects the tracker protocol when the device connects
- Event messages and location reports are forwarded to the Plaspy platform for visibility
- Validation in Plaspy confirms the device is online and reporting as expected

## Common Configuration Workflow

1. Access the official Gosafe configuration method or vendor software for the G717 (SMS commands, web tool, or USB/serial tool depending on your installer tool).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server or APN configuration screen.
3. Set the destination port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the G717 configuration tool requires a transport selection.
5. Apply or save the configuration in the Gosafe tool to commit the settings to the device.
6. Restart the G717 if the manufacturer instructions indicate reboot is required to activate new settings.
7. Validate that the device reports to Plaspy by checking device online status and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and syntax for the G717 vary by firmware and the manufacturer configuration method. Depending on your installer tool you may configure the server by SMS, by a PC configuration utility, or directly in a vendor portal. When you set the server address or IP, use d.plaspy.com or 54.85.159.138 and set the port to 8888, choosing UDP or TCP if the device requires a transport choice. Plaspy will automatically detect the tracker protocol when the device connects.

If you need specific SMS or command examples for the G717, consult the official Gosafe configuration guide provided with the device or the vendor tool documentation for the exact command syntax.

## Configuration Notes

- Firmware differences can change the exact commands or configuration menu names; verify the device firmware before applying instructions.
- Choosing TCP versus UDP may affect delivery behavior on some mobile networks; test both if you encounter connectivity issues.
- The G717 supports configuration by IP or domain, so you can use either d.plaspy.com or 54.85.159.138 based on your configuration tool preferences.
- Plaspy uses the same port 8888 for all supported devices and will automatically detect the tracker protocol on connection.
- If your installer uses SMS based configuration, confirm that the SIM supports text messaging and that SMS commands are enabled in device firmware.

## Why Use Plaspy with This Configuration

Using the Gosafe G717 with Plaspy provides a straightforward path to vehicle visibility and event monitoring. The G717's plug and play form factor, combined with its mobile network support and event reporting, make it practical for fleet and private vehicle tracking. Pointing the device at Plaspy using the shared server settings gives centralized access to location, alerts, and operational telemetry in the platform.

To learn more about Plaspy and how it collects and displays device telemetry visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions consult the official Gosafe website https://gosafesystem.com/ to verify that commands and configuration methods match your device revision.
