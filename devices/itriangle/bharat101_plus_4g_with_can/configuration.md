---
slug: /itriangle/bharat101_plus_4g_with_can/configuration
id: bharat101_plus_4g_with_can-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Plus 4G with CAN Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for iTriangle Bharat101 Plus 4G with CAN to connect the tracker to Plaspy fleet servers
keywords:
  - iTriangle Bharat101 Plus 4G with CAN configuration
  - Bharat101 Plus 4G with CAN setup
  - Bharat101 Plus Plaspy configuration
  - iTriangle GPS tracker configuration
  - AIS-140 tracker configuration
  - Bharat101 CAN bus integration
  - Bharat101 4G tracker server settings
  - fleet management tracker Plaspy
  - vehicle telemetry CAN configuration
  - Bharat101 OTA configuration
---

# iTriangle - Bharat101 Plus 4G with CAN Configuration

This page covers the public configuration context for using the iTriangle Bharat101 Plus 4G with CAN tracker with the Plaspy platform. It explains the shared server settings Plaspy expects and describes practical setup steps to prepare the device for reporting location and CAN bus telemetry to Plaspy. The guidance here is based on the device description and Plaspy public server information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps for the Bharat101 Plus 4G with CAN can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use, so follow the manufacturer documentation where needed.

## Configuration Overview

This configuration prepares the Bharat101 Plus 4G with CAN to communicate reliably with Plaspy so that location, CAN diagnostics, and sensor events become visible in the platform. The procedure focuses on entering Plaspy server details, selecting the transport, applying device settings, and verifying connectivity.

- Point the tracker to the Plaspy server endpoint so the device can stream telemetry and GNSS fixes.
- Select the transport mode supported by the device and supported by Plaspy, UDP or TCP.
- Ensure the device power, SIM eSIM provisioning, and communication interfaces are ready for a live connection.
- Save or apply configuration and, if required, restart the device so changes take effect.
- Validate that the device appears in Plaspy and is reporting expected position and CAN telemetry.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring this tracker. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on incoming connections.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered Bharat101 Plus 4G with CAN unit installed or accessible for configuration using the manufacturer method.
- Provisioned cellular connectivity such as the device eSIM or a compatible cellular subscription active and registered on the network.
- Access to the iTriangle configuration method you intend to use such as USB configuration tool, BLE setup, SMS commands, or the vendor software.
- Knowledge of the Plaspy server domain or IP and the port to be used for reporting.
- An installation environment for testing where the device can report GNSS and CAN data to validate successful integration.
- Administrative access to Plaspy account or platform to confirm the device appears and is sending telemetry.

## How This Tracker Connects to Plaspy

When configured, the Bharat101 Plus 4G with CAN sends GNSS position fixes, CAN bus derived telemetry, and event reports to the shared Plaspy server endpoint on port 8888. Plaspy receives the TCP or UDP packets, detects the tracker protocol automatically, and maps device messages into the platform for real time tracking and reporting.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Choose UDP or TCP on the device if required by firmware, and the tracker will send telemetry using that transport.
- Plaspy automatically detects the protocol and handles parsing so device messages appear in the platform.
- CAN bus values and on board sensor events are sent in the same device reporting stream so Plaspy can use them for diagnostics and alerts.
- After successful configuration, expect position updates and CAN-derived telemetry to appear in Plaspy dashboards and reports.

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for the Bharat101 Plus 4G with CAN using USB, BLE, SMS, or vendor tool.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the reporting port to 8888 exactly as used by Plaspy.
4. If the device requires a transport selection, choose UDP or TCP depending on your network preferences and device firmware capabilities.
5. Apply or save the configuration changes using the manufacturer tool or command method.
6. Restart the device if required by the firmware to apply network and server settings.
7. Validate that the device reports to Plaspy by checking connectivity and telemetry in the Plaspy platform and confirming position and CAN data flow.

## Example Configuration Commands

The Bharat101 Plus 4G with CAN may be configured via multiple manufacturer methods including USB, BLE, SMS, or vendor software. Exact command syntax and configuration commands are determined by the iTriangle firmware and configuration tool, and they vary across releases. Because command sets differ by firmware and vendor tool, consult the iTriangle configuration manual or the vendor software for exact commands and example sequences.

If you are using the iTriangle SMS or serial command set, follow the official command reference from iTriangle and replace any APN or placeholder values with your network details. Preserve placeholders such as {{apn}} or {{apnu}} if shown by the manufacturer command examples and consult the device manual for correct substitution.

## Configuration Notes

- Firmware versions may change available options and command syntax; confirm the firmware level before applying commands.
- Selecting UDP typically reduces overhead while TCP provides connection reliability; choose based on your network and the device firmware recommendation.
- Plaspy uses a shared port 8888 for all devices and automatically detects the incoming protocol, so consistent port configuration is important across fleet devices.
- Use manufacturer configuration tools for sensitive settings such as immobilizer control or I/O mapping and document any changes for maintenance.
- If you plan to use SMS or BLE configuration, ensure local network access and security controls are in place during setup.

## Why Use Plaspy with This Configuration

Using the Bharat101 Plus 4G with CAN configured to report to Plaspy gives fleet managers a single, consistent endpoint for location, CAN diagnostics, and event-driven telemetry. The device hardware is well suited to heavy vehicles and public transport and, when pointed at the Plaspy server, provides the real time visibility and CAN sourced metrics that support operational oversight and compliance reporting.

To learn more about Plaspy and how it manages device connections and fleet data, visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior notes, and manufacturer instructions verify current information on the iTriangle website at https://www.itriangle.net/ as device setup methods and firmware can change over time.
