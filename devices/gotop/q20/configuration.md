---
slug: /gotop/q20/configuration
id: q20-configuration
sidebar_label: Configuration
title: GOTOP - Q20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP Q20 tracker showing Plaspy server settings and practical setup steps for integration
keywords:
  - GOTOP Q20 configuration
  - GOTOP Q20 setup
  - GOTOP Q20 Plaspy
  - GOTOP Q20 server configuration
  - GOTOP Q20 GPS tracker setup
  - GOTOP Q20 tracking software configuration
  - GOTOP Q20 platform setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker Q20 setup
---

# GOTOP - Q20 Configuration

This page provides the public configuration context for using the GOTOP Q20 4G SOS GPS Tracker with Plaspy. It describes the practical server settings and workflow needed to point the device at Plaspy for real-time tracking, alarm delivery, and telemetry ingestion. The guidance below focuses on publicly available integration facts and the common steps installers and administrators will follow to enable visibility in Plaspy.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page to prepare the Q20 for Plaspy, and consult the official GOTOP documentation for device specific interfaces and the most current commands or firmware notes.

## Configuration Overview

Configuring the Q20 for Plaspy ensures the tracker sends its location and safety telemetry to the Plaspy platform so you can monitor devices, receive alarms, and review history. The process is primarily about pointing the tracker to the Plaspy endpoint, choosing the transport method if required, and validating that the device reports correctly.

- Enter the Plaspy server endpoint on the device or via the manufacturer tool so GPRS reports and SMS alarm strings are delivered to Plaspy.
- Select the transport type (UDP or TCP) when the device requires a choice; Plaspy accepts either on the shared port.
- Set the device reporting port to the Plaspy port so messages reach the platform.
- Save and apply the tracker settings and, if necessary, restart the device to apply network changes.
- Validate connectivity so the tracker appears in Plaspy and sends location and alarm data successfully.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the Q20 for integration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport required by your device or configuration method
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and powered Q20 device with access to the manufacturer configuration method or tool
- An active cellular data plan on the device SIM so GPRS reporting can reach Plaspy
- Knowledge of the device configuration interface used by GOTOP for your region or firmware (SMS commands, manufacturer app, or web tool)
- Access to any required credentials or configuration PINs provided by the device vendor
- A test plan to confirm the device appears in Plaspy and that alarms such as SOS or fall detection are transmitted

## How This Tracker Connects to Plaspy

The Q20 sends position updates and safety telemetry to Plaspy over the cellular network using its GPRS reporting channels and configured alarm strings. The device is pointed to the shared Plaspy endpoint and port, and Plaspy determines the protocol so manual protocol mapping is not required.

- The tracker is configured to report to the shared Plaspy endpoint d.plaspy.com or the IP 54.85.159.138
- Reports and alarms are sent to port 8888 which is used by Plaspy for all supported devices
- The device may use UDP or TCP transport depending on the configuration; Plaspy accepts either
- Plaspy automatically detects the tracker protocol when data arrives, simplifying multi-model deployments
- Once connected, location, SOS alerts, fall detection, and other configured events are visible in Plaspy for monitoring and history playback

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software appropriate for your device and region (SMS commands, vendor app, or configuration tool).
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the server or IP field.
3. Set the reporting port to 8888, noting that Plaspy uses the same port across devices.
4. If the device requires a transport selection, choose UDP or TCP based on your installation preference.
5. Save or apply the configuration using the manufacturer tool or by sending the appropriate SMS commands.
6. Restart the device if the manufacturer instructions indicate a reboot is required to apply network settings.
7. Validate that the device reports to Plaspy by checking device visibility and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The Q20 may be configured using manufacturer-provided methods such as SMS command strings, a vendor app, or a desktop configuration tool. Exact commands and syntax vary by firmware and regional firmware variants, so follow GOTOP official documentation or the configuration utility provided by your vendor.

When configuring via a manufacturer command interface, you will typically set:
- The server hostname d.plaspy.com or server IP 54.85.159.138
- The reporting port 8888
- The transport type UDP or TCP if required by the device

Because commands differ by firmware and tool, refer to GOTOP materials for the exact SMS strings or tool workflows required to apply these values.

## Configuration Notes

- Firmware variations and regional device versions can change command syntax and available configuration fields; always check the device firmware notes.
- Choosing UDP or TCP may affect how the tracker handles retransmission and connection state; select the transport best suited for your network environment.
- SMS based configuration is common on many GOTOP devices; if you use SMS commands, ensure the SIM can send and receive SMS and that you preserve placeholders used in manufacturer documentation.
- The shared Plaspy port simplifies deployments because all devices report to port 8888 and Plaspy detects the protocol automatically.
- Keep a record of applied settings and a device test checklist to validate telemetry and alarm behavior after configuration.

## Why Use Plaspy with This Configuration

Using the GOTOP Q20 with Plaspy gives organizations centralized visibility into location, SOS alarms, and safety telemetry delivered by the Q20’s hybrid positioning and safety sensors. Pointing the device to the Plaspy endpoint and port enables real-time monitoring, historical route playback, and alarm workflows that help teams respond faster and manage personnel or assets more effectively.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer setup instructions verify details on the GOTOP website https://www.gotop.cc/ as device configuration methods and firmware behavior can change over time.
