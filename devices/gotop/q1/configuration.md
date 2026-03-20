---
slug: /gotop/q1/configuration
id: q1-configuration
sidebar_label: Configuration
title: GOTOP - Q1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP Q1 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP Q1 configuration
  - GOTOP Q1 setup
  - GOTOP Q1 Plaspy
  - GOTOP Q1 server configuration
  - GOTOP GPS tracker configuration
  - GOTOP Q1 tracking setup
  - GOTOP Q1 GPS platform setup
  - Plaspy tracker configuration
  - vehicle tracking Q1
  - asset tracking GOTOP Q1
---

# GOTOP - Q1 Configuration

This page covers the public configuration context for using the GOTOP Q1 Mini GPS Tracker with the Plaspy platform. It collects the practical, platform-facing settings and workflow guidance you will need to point a Q1 tracker at Plaspy for real time visibility, while summarizing the device capabilities described by the manufacturer such as waterproof IPX7 protection, motion alert, GPS and LBS positioning, SMS location, and power management.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols at the platform side. Manufacturer-side setup steps for the Q1 can differ by firmware, hardware revision, installer tools, and local vendor procedures, so this page focuses on the public Plaspy configuration values and the practical process to apply them on the device.

## Configuration Overview

The goal of configuration is to prepare the Q1 so it reliably communicates with Plaspy, validate connectivity, and enable device visibility in the platform. For the Q1 this typically means configuring the device to send location and event reports to Plaspy's shared server endpoint and confirming that those reports arrive in your Plaspy account.

- Configure the device server address to point to Plaspy using the public server settings.
- Select the transport protocol required by the Q1 firmware, UDP or TCP, and set the shared port.
- Save and apply the configuration through the GOTOP configuration tool or SMS method supported by your device.
- Verify the device registers and sends periodic position updates and motion alerts to Plaspy.
- Confirm low battery and motion alert behavior matches operational expectations.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the Q1:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged Q1 device with battery installed and powered on.
- An active SIM card and mobile connectivity compatible with the Q1 GSM and GPRS bands.
- Access to the official GOTOP configuration method for your unit such as the manufacturer tool, SMS commands, or vendor software.
- Device identifiers available such as IMEI so you can register the device inside Plaspy if required by your account.
- A quiet test environment to validate GPS lock and initial communications with Plaspy.
- Basic familiarity with choosing UDP or TCP transport if the device configuration requires that choice.

## How This Tracker Connects to Plaspy

When configured, the GOTOP Q1 sends location and status data to the Plaspy server endpoint and port, where the platform automatically detects and interprets the tracker protocol. This enables Plaspy to display position updates, motion alerts, and other events from the device.

- Device sends periodic GPS or LBS position reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is either UDP or TCP depending on the Q1 firmware setting.
- Plaspy automatically detects the incoming tracker protocol so no protocol selection is required in the platform.
- Motion alerts and other event messages are forwarded to the Plaspy platform for real time monitoring.
- Successful configuration makes the device visible in Plaspy for operational tracking and reporting.

## Common Configuration Workflow

1. Access the official GOTOP configuration method for your Q1 unit using the manufacturer tool, SMS commands, or vendor software.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server address field.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the Q1 requires selecting a transport option during configuration.
5. Apply or save the configuration on the device according to the manufacturer procedure.
6. Restart the device if required by the device firmware or after applying settings.
7. Validate that the Q1 reports to Plaspy by checking device status and recent position updates in your Plaspy account.

## Example Configuration Commands

The exact configuration commands and their syntax depend on GOTOP firmware and the manufacturer configuration method. Because commands vary by firmware and vendor tool, this document does not list device-specific command strings. Common manufacturer methods include configuration via a desktop tool, mobile application, or SMS command set. Refer to GOTOP documentation for the precise commands or payload format used with your Q1 firmware.

## Configuration Notes

- Firmware differences across Q1 production batches can change available settings and command formats; always confirm with the device you have on hand.
- When the device permits choosing UDP or TCP, test both transports if connectivity issues occur; Plaspy accepts either on port 8888 and performs automatic protocol detection.
- SMS based setup may be supported by some Q1 firmware versions; use the official command set from GOTOP when configuring via SMS.
- After configuration, allow time for a GPS fix and initial data upload to ensure positioning and motion alerts appear in Plaspy.
- Keep a record of device IMEI and configuration parameters for future troubleshooting and for registering devices in Plaspy if required.

## Why Use Plaspy with This Configuration

Using the GOTOP Q1 with Plaspy provides a straightforward path to asset visibility, real time tracking, and motion alert monitoring. With the Q1's compact form factor, waterproof rating, and motion detection combined with Plaspy's shared server model and automatic protocol detection, organizations can deploy trackers and centralize monitoring without managing per-device server endpoints.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and user manuals verify the current information on the manufacturer website https://www.gotop.cc/. Manufacturer specifications, setup methods, and firmware behavior can change over time so always confirm details with GOTOP documentation before large scale deployments.
