---
slug: /arusnavi/arnavi_l2_cigarette_lighter_version_with_panic_button/configuration
id: arnavi_l2_cigarette_lighter_version_with_panic_button-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Arnavi L2 setup with Plaspy using shared server settings and practical steps
keywords:
  - Arusnavi Arnavi L2 configuration
  - Arnavi L2 Plaspy setup
  - Arnavi L2 server configuration
  - Arnavi L2 GPS tracker setup
  - Arusnavi GPS tracker Plaspy
  - Arnavi L2 cigarette lighter tracker configuration
  - panic button tracker setup
  - fleet tracking Arnavi L2
  - Arnavi L2 BLE sensor integration
  - Arnavi L2 telemetry configuration
---

# Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Configuration

This page provides public configuration guidance for using the Arusnavi Arnavi L2 (cigarette lighter version with panic button) with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, practical setup considerations, and the high-level workflow operators commonly follow to bring the device online in Plaspy. The content here is intended to be practical and vendor neutral while remaining aligned with the Arnavi L2 capabilities described by the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the device protocol once data reaches the platform. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation approach and the vendor configuration tools you use (USB, Bluetooth, or the vendor web interface). Use this page to understand the required server values and general workflow before performing any device configuration or installation.

## Configuration Overview

The goal of this configuration is to prepare the Arnavi L2 for reliable communication with Plaspy so position, telemetry and events are received in your account. This involves pointing the device to the Plaspy server, selecting the transport if required, and validating that the device is reporting as expected.

- Configure the device to report to the Plaspy server endpoint and port so location and event data are delivered.
- Confirm transport settings (UDP or TCP) and ensure the device is set to use the same port Plaspy expects.
- Validate connectivity from the device to Plaspy and verify correct protocol detection in the platform.
- Enable key event reporting such as panic button, accelerometer events, BLE sensor data and ignition state so they appear in Plaspy.
- Confirm offline logging uploads properly after coverage is restored so trip history is continuous in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Arnavi L2:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once device data arrives

Note that all devices in Plaspy use the same port. Pointing the tracker to either the domain or the IP with port 8888 is the standard approach.

## Typical Requirements Before Setup

- Ensure the Arnavi L2 is powered using the cigarette lighter harness and has a stable vehicle power connection during configuration.
- Confirm a valid 2G GPRS capable SIM is installed and the mobile network is available for data; the device uses GSM GPRS for telemetry.
- Have access to the manufacturer configuration method you will use such as USB configuration tool, BLE/mobile setup, or the Arnavi web/PC utility.
- A Plaspy account with access to add and view devices so you can validate data arrival and device visibility in the platform.
- Confirm firmware version and any manufacturer release notes that affect server or protocol settings.
- If applicable, prepare any placeholders such as APN credentials for the SIM if required by the device configuration method.

## How This Tracker Connects to Plaspy

Once configured, the Arnavi L2 sends GNSS position, telemetry and event data to the Plaspy server endpoint and port you specified. Plaspy receives those packets, automatically detects the device protocol and maps incoming data to the correct device record in the platform.

- The device reports GNSS positions and telemetry over the 2G GPRS modem to d.plaspy.com or 54.85.159.138 on port 8888.
- Panic button presses and accelerometer triggered events (tow, harsh driving, alarms) are forwarded to Plaspy as immediate alerts.
- BLE sensor data and discrete I/O events are included in telemetry packets and appear as sensor feeds in Plaspy.
- Offline black-box logs are uploaded when connectivity is restored so historical data is preserved in Plaspy.
- Plaspy automatically detects the tracker protocol and associates incoming messages with the device without manual protocol selection in the platform.

## Common Configuration Workflow

1. Access the official Arnavi configuration method or software appropriate for your device and firmware (USB PC tool, BLE/mobile app, or vendor utility).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the communication port to 8888.
4. Choose the transport type UDP or TCP if the device requires you to select one.
5. Enter any required APN or SIM related settings using the device tool if the SIM requires custom credentials.
6. Apply or save the configuration in the manufacturer tool and, if prompted, upload or write settings to the device.
7. Restart the device if the manufacturer instructions require a reboot after changing server settings.
8. Validate in Plaspy that the device appears online and is reporting location, telemetry and events as expected.

## Example Configuration Commands

The Arnavi L2 configuration method may be provided by the manufacturer via a PC tool, USB interface, or a mobile BLE utility. Exact command formats and syntax vary by the Arnavi configuration utility and firmware, so there are no universal public commands to include here. Use the official Arnavi configuration tool to input the Plaspy server values listed above and follow the vendor tool prompts to save and apply settings.

If you have manufacturer-provided command examples or SMS configuration templates from Arnavi, keep placeholders such as APN, APN user or APN password as provided by your SIM operator and enter them into the manufacturer tool as instructed.

## Configuration Notes

- Firmware differences can change available menu items, field names and the exact location where server and port are entered; always verify the firmware version before following a workflow.
- Choose UDP or TCP according to the manufacturer tool requirements; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- When using APN based setup, preserve placeholders provided by vendor tools such as [apn], [apnu] or [apnp] and replace them with your SIM operator values.
- If you use USB or BLE configuration, ensure device drivers and mobile app versions match the manufacturer recommendations to avoid incomplete writes.
- Confirm that the SIM plan supports GPRS data and that network coverage is sufficient for real-time reporting and log uploads.

## Why Use Plaspy with This Configuration

Using the Arnavi L2 with Plaspy provides a quick deployment path for vehicles that need rapid installation and temporary or portable tracking. The cigarette lighter harness design minimizes installation time while the panic button, accelerometer events and BLE sensor support give fleet managers and operators the telemetry and safety signals needed for operational oversight. Offline logging ensures trip history continuity even when coverage is intermittent, and remote configuration capabilities reduce onsite maintenance.

To learn more about Plaspy and how the platform can integrate your Arnavi L2 devices visit https://www.plaspy.com. For device specific firmware behavior, configuration tools and the latest manufacturer instructions verify details on the official Arnavi website https://www.arusnavi.ru. Manufacturer specifications and setup steps can change over time, so always confirm the current device documentation before finalizing a deployment.
