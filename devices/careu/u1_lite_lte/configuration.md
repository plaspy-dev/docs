---
slug: /careu/u1_lite_lte/configuration
id: u1_lite_lte-configuration
sidebar_label: Configuration
title: CAREU - U1 Lite+ LTE Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for configuring the CAREU U1 Lite+ LTE to work with Plaspy using shared Plaspy server settings and practical workflow steps
keywords:
  - CAREU U1 Lite+ LTE configuration
  - CAREU U1 Lite+ LTE setup
  - CAREU U1 Lite+ LTE server configuration
  - Plaspy device setup
  - Plaspy GPS tracker configuration
  - U1 Lite+ LTE setup guide
  - vehicle telematics configuration
  - OBD II CAN integration setup
  - fleet tracking configuration
  - video telematics setup
---

# CAREU - U1 Lite+ LTE Configuration

This page describes the public configuration context for using the CAREU U1 Lite+ LTE tracker with Plaspy. It focuses on the shared server settings and practical setup workflow operators typically use to point the device to Plaspy and enable telemetry, while leaving device-specific manufacturer details to the official CAREU documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use this page to prepare and validate the U1 Lite+ LTE for Plaspy and consult the CAREU documentation or vendor for model-specific configuration screens or commands.

## Configuration Overview

This configuration prepares the U1 Lite+ LTE to send GNSS, CAN/OBD and sensor data to Plaspy for live tracking and fleet management. The goal is to ensure the device is pointed at Plaspy's shared endpoint, is reachable over the cellular network, and is visible inside your Plaspy account.

- Configure the device to report to Plaspy's shared server endpoint and port.
- Ensure the device has required network access and an appropriate SIM/APN configuration for cellular connectivity.
- Validate transport selection (UDP or TCP) if required by the device configuration tool.
- Save and apply settings, then confirm the device is reporting location and telemetry to Plaspy.
- Use remote management features such as FOTA or FTP only after confirming compatibility with the Plaspy endpoint.

## Plaspy Server Settings

When configuring the CAREU U1 Lite+ LTE for Plaspy, use these public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol inside Plaspy

Note: All devices in Plaspy use the same port for tracker connections.

## Typical Requirements Before Setup

- A powered and installed U1 Lite+ LTE unit with access to the device configuration interface or official CAREU configuration tool.
- An active cellular SIM with appropriate data plan and an APN configured for data connectivity if required.
- Network coverage for LTE/3G/2G in the installation area and validation that the device can register on the network.
- Access to the CAREU user manual, configuration software, or vendor portal for the exact steps that apply to your hardware and firmware revision.
- A Plaspy account and a place within your Plaspy platform to validate the device once it begins reporting.
- Knowledge of whether your device requires explicit UDP or TCP selection during configuration.

## How This Tracker Connects to Plaspy

Once configured, the U1 Lite+ LTE reports position, OBD II/CAN telemetry and supported sensor inputs to Plaspy over the device cellular connection. The device is pointed at Plaspy's shared server endpoint and port so Plaspy can ingest the device messages and present them in live dashboards and reports.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration; both are accepted on port 8888.
- Plaspy automatically detects the tracker protocol so the platform interprets incoming messages without manual protocol mapping.
- Once messages arrive at Plaspy, location fixes and telemetry appear in the platform for monitoring, geofencing and reporting.
- Device events and diagnostics forwarded from the U1 Lite+ LTE become available to trigger alerts and automated workflows inside Plaspy.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software (device web UI, manufacturer tool, SMS commands, or vendor portal) for your U1 Lite+ LTE model and firmware.
2. In the device server or TCP/UDP settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the reporting port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires a transport selection; both are supported by Plaspy on port 8888.
5. Configure any required APN or SIM settings so the device has data connectivity, then apply or save the configuration.
6. Restart or power cycle the device if the manufacturer instructions require a reboot for settings to take effect.
7. Validate the device reports to Plaspy by checking your Plaspy account for the device's first messages and verifying location and telemetry are visible.

## Example Configuration Commands

The exact configuration method and commands for the CAREU U1 Lite+ LTE vary by firmware and the manufacturer tools you use. Some installers will use a handset app, web configuration utility, or SMS/AT-style commands provided by CAREU. Because manufacturer command sets and interfaces differ, consult the CAREU documentation or your vendor for the exact commands or GUI steps required to point the device at d.plaspy.com or 54.85.159.138 on port 8888.

If your vendor provides SMS or console commands, follow the vendor syntax to set:
- server domain or server IP to d.plaspy.com or 54.85.159.138
- reporting port to 8888
- transport to UDP or TCP when required
Preserve any APN placeholders the vendor uses and confirm values before saving.

## Configuration Notes

- Firmware differences can change menu names, command syntax or the availability of UDP versus TCP; always verify the correct method for your device firmware.
- If your installation uses APN credentials, configure them as required by your mobile operator; placeholders may be used in vendor commands and should be replaced with operator values.
- Plaspy accepts both UDP and TCP on port 8888 and automatically detects the tracker protocol, so the focus is pointing the device to d.plaspy.com or 54.85.159.138 and ensuring network connectivity.
- Remote configuration and FOTA via FTP are supported by the device family in general; confirm exact FOTA URLs and processes in CAREU documentation before initiating updates.
- When possible, perform an initial test install and validation in a controlled environment to confirm reporting, geofence behavior and OBD II/CAN telemetry mapping in Plaspy.

## Why Use Plaspy with This Configuration

Using the CAREU U1 Lite+ LTE configured to report to Plaspy gives fleet operators consistent visibility into location, engine diagnostics and sensor events with minimal integration effort. The shared Plaspy endpoint and automatic protocol detection streamline deployment so devices can be pointed to a single server address and begin reporting telemetry for monitoring, alerts and historical analysis.

To learn more about Plaspy and how it supports mixed fleets and telematics devices, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes and manufacturer instructions for the CAREU U1 Lite+ LTE, verify information at the official CAREU site https://www.systech-iot.com/ as device behavior and configuration methods may change over time.
