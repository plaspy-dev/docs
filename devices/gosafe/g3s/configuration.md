---
slug: /gosafe/g3s/configuration
id: g3s-configuration
sidebar_label: Configuration
title: Gosafe - G3S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G3S showing Plaspy server settings and practical setup steps to connect your tracker to Plaspy
keywords:
- Gosafe G3S configuration
- Gosafe G3S setup
- G3S Plaspy configuration
- Gosafe GPS tracker configuration
- G3S server configuration
- Gosafe tracking setup
- G3S GPS platform setup
- Plaspy tracker configuration
- vehicle tracking G3S
- fleet tracking Gosafe G3S
---

# Gosafe - G3S Configuration

This page covers the public configuration context for using the Gosafe G3S tracker with Plaspy. It explains the shared Plaspy server settings you need to enter on the device and the practical steps to prepare a G3S tracker so it can report location and status to Plaspy. The content focuses on public, manufacturer-agnostic configuration details and the Plaspy endpoint information required for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker sends data to the platform. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide for general setup and verify device-specific instructions with the manufacturer documentation when needed.

## Configuration Overview

Preparing a Gosafe G3S to work with Plaspy is primarily about ensuring the tracker can reach the Plaspy server endpoint over GSM/GPRS and is set to use the platform's shared port and transport. The configuration process typically verifies connectivity, assigns the server endpoint and port on the device, and confirms that the device becomes visible in Plaspy after restart.

- Enter the Plaspy server address and port on the G3S using the official Gosafe configuration method.
- Ensure the device has power, an active data SIM, and correct APN settings for network access.
- Select the transport (UDP or TCP) if the device requires a transport choice.
- Save the configuration and restart the G3S so it begins sending data to Plaspy.
- Validate that the tracker reports successfully and appears in Plaspy for monitoring.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the Gosafe G3S:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Physical access to the G3S or access to the vendor tool required to change its server settings.
- Device powered and installed according to manufacturer guidance.
- Active GSM/GPRS SIM card with data service and correct APN configured for the carrier.
- Access to the official Gosafe configuration method, software, or installer tool.
- A Plaspy account or platform access for validation after configuration.
- Network coverage at the installation location to allow the device to reach the Plaspy server.

## How This Tracker Connects to Plaspy

The Gosafe G3S sends its location and operational data over GSM/GPRS to the Plaspy server endpoint and port configured on the device. Once the device reports to d.plaspy.com or the Plaspy IP on port 8888, Plaspy will automatically detect the tracker protocol and begin processing incoming data for display and alerts.

- The tracker transmits position updates and device status messages to the Plaspy endpoint.
- Plaspy receives incoming connections on port 8888 and determines the tracker protocol automatically.
- The device can be configured to use either UDP or TCP transport when required by the device firmware.
- After successful configuration and restart, the G3S should appear in Plaspy for monitoring and reporting.
- Platform visibility enables operational monitoring and integration with fleet workflows.

## Common Configuration Workflow

1. Access the official Gosafe configuration method, software, or installer tool provided by the vendor.
2. Locate the server or host setting and enter d.plaspy.com or the IP 54.85.159.138 as the server endpoint.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. If applicable, verify or configure the SIM APN so the device has data connectivity.
6. Apply or save the configuration and follow any device prompts to confirm changes.
7. Restart the device if required by the Gosafe tool or firmware to apply settings.
8. Validate that the device reports to Plaspy and is visible for tracking and monitoring.

## Example Configuration Commands

The Gosafe G3S configuration method can vary by vendor tool, firmware, and regional firmware variants. Because manufacturer tools differ, there are no universal public command strings provided here. Use the official Gosafe configuration interface or installer utility to enter the Plaspy server domain or IP and port as described above.

If your installation uses SMS or text command configuration and the manufacturer provides public command syntax, follow the official Gosafe documentation for accurate command formats. For most installations, the recommended approach is to use the vendor software or configuration application.

## Configuration Notes

- Firmware differences across Gosafe G3S units can change menu layout and the exact field names for server, port, and transport selection.
- Choosing between UDP and TCP depends on device firmware options; consult the Gosafe configuration tool for transport selection and test connectivity in Plaspy after saving.
- Because Plaspy uses the same port for all devices and automatically detects the protocol, enter the server and port exactly as provided to avoid connection issues.
- Verify APN and SIM data plan settings before final validation, since GPRS connectivity is required for the device to reach d.plaspy.com.
- Always cross-check manufacturer instructions for any optional reset or restart step; perform a reset only when recommended by Gosafe or an authorized installer.

## Why Use Plaspy with This Configuration

Using the Gosafe G3S with Plaspy gives organizations a straightforward way to collect real-time location data and device status on a single platform. By configuring the G3S to report to Plaspy's shared server endpoint and port, fleets and integrators can centralize tracking, improve dispatch decisions, and maintain operational oversight without complex per-device server settings.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest Gosafe device-specific setup details, firmware notes, and official configuration instructions verify information on the manufacturer website https://gosafesystem.com/. Manufacturer specifications and setup methods can change over time, so always confirm current procedures with Gosafe documentation.
