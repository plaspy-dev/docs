---
slug: /coban/bn_401b/configuration
id: bn_401b-configuration
sidebar_label: Configuration
title: Coban - BN-401B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Coban BN-401B showing how to configure the tracker to report to Plaspy servers for tracking and alerts
keywords:
  - Coban BN-401B configuration
  - Coban BN-401B setup
  - Coban BN-401B Plaspy
  - BN-401B GPS tracker configuration
  - Coban tracker server settings
  - Plaspy device configuration
  - motorcycle GPS tracker setup
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - BN-401B installation guide
---

# Coban - BN-401B Configuration

This page documents the public configuration context for using the Coban BN-401B with Plaspy. It focuses on the practical steps and publicly available SMS commands used to point the device at Plaspy, and on the server settings you must apply so the BN-401B can report position and alarm data to the platform. Where helpful, this guide reproduces example SMS commands that are commonly used for initial setup and validation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices connect. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The BN-401B supports SMS and TCP/UDP configuration methods and includes a default device password in public commands, so follow manufacturer instructions and the examples below while confirming details for your specific unit.

## Configuration Overview

The goal of configuring a BN-401B for Plaspy is to prepare the tracker so it reliably reports location and alarm events to the Plaspy endpoint, enabling live tracking, alerts, and historical playback in the platform. Use the manufacturer methods you have available (SMS, Bluetooth, or vendor software) to apply the server and APN settings shown in this guide.

- Set the tracker to send GPRS data to Plaspy using the shared Plaspy server endpoint and port.
- Configure the mobile operator APN and any required APN credentials so the device has mobile data access.
- Choose the transport mode the device supports, UDP or TCP, depending on installer preference.
- Validate connectivity and reporting by using the device verification commands and observing the device appear in Plaspy.
- Optionally use factory reset and time zone commands when commissioning a new or refurbished unit.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port for server communications

## Typical Requirements Before Setup

- A powered BN-401B unit with accessible configuration method such as SMS or Bluetooth.
- An active SIM card with a mobile data plan and the correct APN information for the operator.
- Knowledge of the device default password where required for commands; the public example uses 123456.
- Access to the manufacturer manual or configuration app for your BN-401B firmware revision.
- A means to send SMS commands from an authorized phone number if you choose SMS-based setup.
- Confirmation that the installation location has cellular coverage for reliable 4G connectivity.

## How This Tracker Connects to Plaspy

The BN-401B can send location and alarm data to Plaspy over mobile data or via SMS depending on the configuration. When configured to use GPRS data, the device posts messages to the Plaspy server endpoint and port, and Plaspy consumes those messages to provide tracking, events, and playback.

- The tracker is configured to report to the shared Plaspy server endpoint and port listed above.
- Location updates, alarms, and state changes are transmitted to Plaspy for real time visibility.
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the server side.
- Events such as SOS, low battery, and external power cut are delivered to Plaspy and can trigger workflows.
- Remote immobilizer events and ignition state can be reported and acted on via Plaspy workflows.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the BN-401B, such as SMS commands, Bluetooth or vendor tools, depending on your unit and firmware.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection for GPRS mode.
5. Configure the operator APN and any APN credentials so data connectivity is available.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by using the device verification command and observing the device appear in the Plaspy platform.

## Example Configuration Commands

The BN-401B public configuration commands are commonly sent by SMS. The sample commands below use the public example device password 123456. Preserve placeholders when substituting your operator values.

- Default device password used in the examples
  ```
  123456
  ```

- Optional initial factory reset (use only when needed during initial commissioning)
  ```
  begin123456
  ```

- Set the time zone to UTC 0
  ```
  time zone123456 0
  ```

- Set the operator APN
  ```
  apn123456 {{apn}}
  ```
  Note: replace {{apn}} with your mobile operator APN name.

- Set the APN username and password
  ```
  up123456 {{apnu}} {{apnp}}
  ```
  Note: replace {{apnu}} with the APN username and {{apnp}} with the APN password if required by your operator. Use blank values if the operator does not require credentials.

- Set the GPRS server by IP and port pointing to Plaspy
  ```
  adminip123456 54.85.159.138 8888
  ```
  Alternatively, if you prefer to use the domain, enter d.plaspy.com where the device supports domain names.

- Set update interval example (device specific syntax)
  ```
  fix060s060s***n123456
  ```
  This command is an example interval command from public documentation; confirm interval syntax for your firmware.

- Switch the device to GPRS mode and select transport
  ```
  gprs123456,1,1
  ```
  or, depending on firmware:
  ```
  gprs123456
  ```
  The command form gprs123456,1,1 is a public example that may select GPRS and transport. Verify the correct format for your unit.

- Verify current settings
  ```
  check123456
  ```

- Enable extended protocol or sensor status reporting (example)
  ```
  protocol123456 18
  ```
  This command is used in public examples to enable additional status reporting for digital sensors and fuel sensor states.

## Configuration Notes

- SMS configuration is shown in the public commands above; you can also use Bluetooth or vendor tools for local setup depending on your unit and installer preferences.
- Firmware versions and regional variants can change command syntax and capabilities; always confirm the exact command formats for your BN-401B firmware.
- Choose UDP or TCP transport according to your network and reliability preferences; Plaspy accepts either and will detect protocol automatically.
- When using APN placeholders such as {{apn}}, {{apnu}}, and {{apnp}}, substitute values from your mobile operator. If credentials are not required, leave them blank as allowed by the operator.
- Use the factory reset command only when needed during initial setup or troubleshooting, and be aware this may clear previous settings.

## Why Use Plaspy with This Configuration

Configuring a BN-401B to report to Plaspy gives fleet managers and vehicle owners fast, centralized visibility across devices. With the shared Plaspy server settings and automatic protocol detection, the BN-401B can provide consistent live tracking, event alerts, and playback while minimizing per-device server configuration work.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance for the BN-401B, verify details on the official Coban website https://www.coban.net/ as manufacturer specifications and setup methods can change over time.
