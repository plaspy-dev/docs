---
slug: /skypatrol/spl1204/configuration
id: spl1204-configuration
sidebar_label: Configuration
title: SkyPatrol - SPL1204 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the SkyPatrol SPL1204 lock tracker for use with Plaspy using shared server settings and practical setup guidance
keywords:
  - SkyPatrol SPL1204
  - SPL1204 configuration
  - SkyPatrol tracker setup
  - Plaspy configuration
  - GPS tracker setup
  - asset tracker configuration
  - cargo lock tracker
  - fleet tracking setup
  - tamper alert tracker
  - RFID lock tracker
---

# SkyPatrol - SPL1204 Configuration

This page covers the public configuration context for using the SkyPatrol SPL1204 lock tracker with Plaspy. It explains the practical server settings and the typical setup workflow you will use to connect the SPL1204 so its GPS positions, tamper alerts, RFID unlock events, and battery telemetry are delivered into Plaspy for monitoring and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide as a practical starting point and verify device specific instructions with the official SkyPatrol documentation.

## Configuration Overview

The goal of configuration is to prepare the SPL1204 so it reliably communicates location and event data to the Plaspy platform. This involves pointing the device at the Plaspy server endpoint, ensuring the device has reliable cellular connectivity, and validating that data arrives in Plaspy.

- Configure the device to use Plaspy server settings so GPS, tamper, and RFID events are forwarded to Plaspy.
- Verify the device has an active cellular data connection and sufficient battery for reporting.
- Choose the transport option (UDP or TCP) if the device requires a selection and set the shared Plaspy port.
- Apply and save the manufacturer configuration then restart the tracker if required.
- Validate incoming messages in Plaspy so the tracker becomes visible and event reporting begins.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SPL1204. Plaspy uses the same port for all supported devices and detects the tracker protocol automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages

## Typical Requirements Before Setup

- Confirm the SPL1204 battery is charged and the device is powered for configuration and testing.
- Ensure the device has an active cellular SIM and a data plan compatible with the device carrier and regional networks.
- Have the device IMEI or serial number available for registration and identification in Plaspy.
- Obtain access to the official SkyPatrol configuration method or software supplied by the vendor.
- Ensure you have Plaspy account access and the ability to view new devices or incoming telemetry in your Plaspy project.

## How This Tracker Connects to Plaspy

When configured, the SPL1204 sends its location and event telemetry over the cellular network to the Plaspy server endpoint and port. Plaspy ingests those messages, applies automatic protocol detection, and surfaces position and event data in the platform so operators can monitor assets and respond to alerts.

- GPS position updates are sent to the Plaspy server endpoint at d.plaspy.com and port 8888.
- Tamper alerts and RFID unlock events are reported and logged in Plaspy for audit and alarm workflows.
- Battery level and power state are transmitted so maintenance can be scheduled before power loss.
- Message transport may use UDP or TCP depending on the device configuration choice; Plaspy accepts both on port 8888.
- Plaspy automatically detects the incoming tracker protocol to parse messages without per device port variance.

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software as provided by the manufacturer or vendor.
2. Locate the server or remote reporting settings in the device configuration interface.
3. Enter d.plaspy.com or the server IP 54.85.159.138 as the destination for device reporting.
4. Set the port to 8888 and confirm the device will use that port for outbound telemetry.
5. Choose UDP or TCP if the device requires selecting a transport protocol.
6. Apply or save the configuration and restart the device if the manufacturer instructions indicate a restart is required.
7. Validate that the SPL1204 reports to Plaspy by checking device visibility and incoming events in the Plaspy platform.

## Example Configuration Commands

The SPL1204 configuration method depends on the manufacturer tool, firmware, or vendor provisioning process and may be performed via a web UI, desktop software, or provisioning utility. Because manufacturer methods vary, exact command syntax is not included here. When you use the SkyPatrol configuration tool, enter the Plaspy server settings exactly as shown: d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP as applicable. After applying settings with the official SkyPatrol tool, restart the device if required and verify connectivity to Plaspy.

## Configuration Notes

- Firmware and menu layouts vary between SkyPatrol firmware versions and hardware revisions; follow the instructions for your device firmware.
- If the tracker requires a transport choice, evaluate UDP versus TCP for your network conditions; Plaspy accepts either on the shared port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, reducing per device parsing configuration.
- Installer and vendor tools may provide batch provisioning options for multiple SPL1204 units; consult SkyPatrol resources for bulk setup practices.
- Always confirm SIM activation, APN settings, and carrier compatibility via the official SkyPatrol setup guides when using cellular data.

## Why Use Plaspy with This Configuration

Configuring the SkyPatrol SPL1204 to report to Plaspy provides a unified way to capture lock level telemetry alongside fleet location and status. For logistics operators and security teams, integrating tamper alerts, RFID unlock events, and battery state into a single platform simplifies monitoring, helps maintain chain of custody, and improves response to potential theft or unauthorized access.

To learn more about Plaspy and how it consolidates telemetry from devices such as the SPL1204, visit https://www.plaspy.com. For the latest SkyPatrol device specific instructions, firmware notices, and support materials verify current information on the manufacturer website https://www.skypatrol.com/
