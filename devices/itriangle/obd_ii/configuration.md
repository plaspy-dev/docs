---
slug: /itriangle/obd_ii/configuration
id: obd_ii-configuration
sidebar_label: Configuration
title: iTriangle - OBD II Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iTriangle OBD II tracker showing Plaspy server configuration and practical steps
keywords:
  - iTriangle OBD II configuration
  - iTriangle OBD II setup
  - iTriangle OBD II server configuration
  - Plaspy tracker configuration
  - OBD II GPS tracker setup
  - vehicle tracker configuration
  - fleet tracking configuration
  - OBD II telemetry setup
  - GNSS OBD configuration
  - CAN bus OBD configuration
---

# iTriangle - OBD II Configuration

This page covers the public configuration context for using the iTriangle OBD II tracker with Plaspy. It explains the practical server and workflow details required to point the device at Plaspy so the tracker can deliver live GNSS location, OBD/CAN telemetry, and sensor events into your Plaspy fleet environment. The information here focuses on the public Plaspy endpoint and the general steps installers and administrators use to enable reporting for this plug and play OBD II device.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when the device connects. The exact manufacturer-side steps you use to set those values can vary by firmware, hardware revision, installation type, and the vendor configuration tools you have available (SMS, TCP/IP configuration tool, Bluetooth setup, or the manufacturer's companion app). Treat this page as practical guidance that centers on the public Plaspy values and the common setup workflow.

## Configuration Overview

This configuration process gets the OBD II tracker reporting to Plaspy so location, OBD/CAN diagnostics, and events are visible in the platform. The goal is to update the device's reporting endpoint and transport, confirm network connectivity, and validate incoming messages in Plaspy.

- Set the device reporting endpoint to the Plaspy server and confirm the transport protocol if required.
- Ensure the device has cellular connectivity and any required SIM provisioning for outgoing data.
- Validate that the tracker sends GNSS fixes and OBD/CAN telemetry to Plaspy after configuration.
- Save and apply settings on the device and perform a restart if the device or firmware requires it.
- Verify the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

- Use the Plaspy server domain d.plaspy.com when configuring the tracker reporting endpoint.
- The Plaspy server IP address is 54.85.159.138 if your configuration requires an IP entry.
- All Plaspy devices use the same port number 8888 for reporting.
- The tracker may be configured to use UDP or TCP on port 8888 depending on device firmware and installer preference.
- Plaspy automatically detects the tracker protocol when the device connects to the shared server endpoint.

## Typical Requirements Before Setup

- Access to the iTriangle manufacturer configuration method or software such as SMS commands, TCP/IP configuration tools, or Bluetooth provisioning where supported.
- A powered vehicle OBD-II port and that the device is correctly seated for power and CAN access.
- Active cellular connectivity on the device and any required SIM provisioning if the tracker requires a SIM to send data.
- Knowledge of whether the device firmware requires TCP or UDP selection during setup.
- A plan to validate reporting in Plaspy after configuration, including account access to view the device.
- If required by firmware, an installer tool or Bluetooth access to change server and port settings.

## How This Tracker Connects to Plaspy

When configured, the iTriangle OBD II sends GNSS fixes, OBD/CAN telemetry, and event notifications to Plaspy so fleet operators can monitor assets in real time. The device is pointed at the shared Plaspy endpoint and port so incoming messages arrive in Plaspy for mapping, diagnostics, and alerts.

- The tracker reports GNSS location data to the Plaspy server endpoint d.plaspy.com on port 8888.
- OBD-II and CAN telemetry such as DTCs, RPM, and engine status are forwarded to Plaspy for diagnostics and reporting.
- Device events like tamper alerts, power loss, and accelerometer events are sent to Plaspy for alerting and workflows.
- BLE sensor data paired to the device is transmitted alongside other telemetry to Plaspy when supported by firmware.
- Plaspy automatically detects the incoming tracker protocol and maps the device stream to the correct parser for visibility in the platform.

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for the OBD II tracker (SMS commands, Bluetooth tool, or TCP/IP configuration tool as provided by the manufacturer).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the reporting port to 8888 as required by Plaspy.
4. If the device requires transport selection, choose UDP or TCP depending on your deployment and firmware support.
5. Apply or save the configuration in the device tool or via SMS command and confirm the device accepted the settings.
6. Restart the tracker if the firmware requires a reboot to apply network changes.
7. Validate in Plaspy that the device is reporting and that GNSS fixes and OBD/CAN telemetry appear as expected.

## Example Configuration Commands

The exact configuration commands for the iTriangle OBD II depend on the manufacturer's firmware version and the configuration channel you use (SMS, Bluetooth, or the TCP/IP tool). Because model firmware and vendor tools vary, there are no universal public commands included here. Refer to the official iTriangle configuration guide or the vendor tool to apply the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888, and follow the tool's instructions for selecting UDP or TCP.

## Configuration Notes

- Firmware variations may require different command syntax or provisioning steps; always confirm the correct command set for your device firmware version.
- Installer practice: prefer performing an initial offline configuration and a live verification step once the vehicle is operational to confirm cellular reporting.
- TCP versus UDP: choose based on device firmware support and your operational needs; Plaspy accepts both transports on port 8888.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the incoming tracker protocol for parsing.
- Consult iTriangle documentation for SMS or Bluetooth command templates if you will configure devices remotely or in bulk.

## Why Use Plaspy with This Configuration

Using the iTriangle OBD II with Plaspy provides a straightforward path to combine plug-and-play OBD-II installation with cloud-based fleet visibility. Organizations gain live location, vehicle diagnostics, and event monitoring in a single platform, simplifying maintenance workflows, anti-theft monitoring, and operational reporting.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with iTriangle at https://www.itriangle.net/ as vendor instructions and firmware can change over time.
