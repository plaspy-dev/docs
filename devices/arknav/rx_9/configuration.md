---
slug: /arknav/rx_9/configuration
id: rx_9-configuration
sidebar_label: Configuration
title: ArkNav - RX-9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ArkNav RX-9 tracker integration with Plaspy using shared server settings and practical setup steps
keywords:
  - ArkNav RX-9 configuration
  - ArkNav RX-9 setup
  - RX-9 Plaspy compatibility
  - Plaspy server configuration
  - GPS tracker configuration guide
  - vehicle tracker setup
  - fleet tracking RX-9
  - RX-9 telemetry setup
  - Plaspy integration guide
  - GPS platform setup
---

# ArkNav - RX-9 Configuration

This page documents the public configuration context for using the ArkNav RX-9 tracker with Plaspy. It summarizes the shared server settings Plaspy requires, explains the typical setup workflow, and highlights the practical steps installers and technicians use to prepare an RX-9 for real time tracking and telemetry ingestion by Plaspy. Use this page as a reference for integrating RX-9 units into a Plaspy deployment while consulting ArkNav documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. The guidance below centers on the public Plaspy endpoint and port that all supported devices use and provides a practical configuration workflow to get an RX-9 reporting to Plaspy reliably.

## Configuration Overview

Configuring the RX-9 for Plaspy means preparing the device to send its GPS fixes and telemetry to the Plaspy ingestion endpoint and validating that messages arrive and are recognized by the Plaspy platform. The goal is to ensure the tracker uses the correct server settings, transport, and reporting profile so the unit appears and updates correctly in Plaspy.

- Enter the shared Plaspy server endpoint on the RX-9 so GPRS messages are forwarded to Plaspy.
- Select the required transport option and the uniform Plaspy port so messages are accepted.
- Set reporting intervals, heartbeats, and any event filters needed for your fleet workflows.
- Apply and save the configuration using ArkNav tools or supported configuration methods.
- Validate connectivity and confirm the RX-9 registers and reports to Plaspy for real time visibility.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the RX-9. These values are public and apply to all devices connecting to Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888 depending on the device configuration tool
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the RX-9 has an active SIM with data enabled and correct APN settings for GPRS connectivity.
- Confirm the device has sufficient battery or vehicle power and is installed or bench powered for initial configuration.
- Obtain access to the ArkNav configuration method required for your unit such as the vendor web tool, configuration software, or supported SMS/command interface documented by ArkNav.
- Know the intended reporting profile for the vehicle including heartbeat interval, movement reporting, and event thresholds.
- Record the device IMEI or unique identifier so you can match the physical unit with records in Plaspy once it begins reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the RX-9 sends GPS positions, sensor telemetry and event messages to the shared Plaspy ingestion endpoint and port. Plaspy ingests those messages and maps them to the matching device record so positions and telemetry appear on the platform in near real time.

- The RX-9 is set to report to the Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138
- All messages are sent to port 8888 which is used by Plaspy for every supported device
- Transport can be UDP or TCP depending on the device configuration; choose the transport the device supports and set it to use port 8888
- Plaspy automatically detects and parses the tracker protocol so messages are routed and interpreted without device specific server differences
- Once reporting, the device sends regular heartbeats and event reports to maintain visibility in Plaspy

## Common Configuration Workflow

1. Access the official ArkNav configuration method for the RX-9 such as the vendor configuration utility or documented command interface.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as instructed by the manufacturer tool.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP on the device if the configuration interface requires a transport selection.
5. Configure reporting intervals, heartbeat settings, and any event thresholds required by your operational policies.
6. Apply or save the configuration and perform any required device restart or reconnection step.
7. Validate the device reports to Plaspy by checking the device IMEI or identifier in your Plaspy account and confirming recent location and telemetry messages.

## Example Configuration Commands

The RX-9 can be configured using ArkNav provided tools or the manufacturer command set depending on firmware and the distribution channel. Exact commands and syntax vary by firmware and regional model, so follow ArkNav documentation or the supplied configuration utility for precise instructions. If you use a text command interface provided by ArkNav, enter the server domain or IP, set port 8888, choose UDP or TCP if required, then save and restart the device.

Note: Because manufacturer command syntax differs across firmware versions and toolsets, this page does not provide a single universal command string. Refer to ArkNav documentation or your reseller configuration guide for the exact command set for your unit.

## Configuration Notes

- Firmware differences can change available configuration options and the exact steps required to set the server and transport. Always verify the firmware version before applying instructions.
- Choosing UDP or TCP affects message delivery guarantees and network behavior. Select the transport the device supports and test connectivity with Plaspy.
- Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection, so server-level settings are consistent across installations.
- Use the device IMEI or unique ID to confirm the correct unit is appearing in Plaspy after initial configuration.
- For remote maintenance, leverage ArkNav OTA configuration and firmware update capabilities where available to keep deployed RX-9 units current.

## Why Use Plaspy with This Configuration

Connecting ArkNav RX-9 units to Plaspy provides a consistent and practical way to capture real time positions, vehicle telemetry, and event-driven alerts across a fleet. The shared Plaspy server settings simplify deployments because all devices use the same destination port and Plaspy automatically detects the tracker protocol, reducing per-device server configuration differences.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official ArkNav documentation please verify current information at https://www.arknavgps.com.tw/
