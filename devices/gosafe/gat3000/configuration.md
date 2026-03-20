---
slug: /gosafe/gat3000/configuration
id: gat3000-configuration
sidebar_label: Configuration
title: Gosafe - GAT3000 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Gosafe GAT3000 for use with Plaspy using public server settings and practical setup guidance
keywords:
  - Gosafe GAT3000 configuration
  - Gosafe GAT3000 setup
  - GAT3000 Plaspy configuration
  - GAT3000 server settings
  - Gosafe GPS tracker configuration
  - GAT3000 LTE Cat 1 setup
  - Gosafe asset tracker Plaspy
  - GAT3000 solar tracker setup
  - Gosafe tracker server configuration
  - GAT3000 fleet tracking setup
---

# Gosafe - GAT3000 Configuration

This page documents the public configuration context for using the Gosafe GAT3000 tracker with Plaspy. It collects the practical server settings and workflow guidance needed to point GAT3000 devices at Plaspy for location and telemetry reporting, drawing on the device capabilities described by the manufacturer. The goal is to help installers and integrators prepare the tracker for reliable communication with Plaspy while staying aligned with public manufacturer features.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this page as a practical configuration reference for GAT3000 deployments with Plaspy, and verify device-specific controls and menus against Gosafe documentation and tools.

## Configuration Overview

Configuring the GAT3000 for Plaspy means preparing the device to send GNSS positions and telemetry to Plaspy's shared endpoint and validating that the device is visible and reporting correctly in the platform. The public configuration process is focused on setting the correct server endpoint and port, selecting transport where required, and confirming network and power readiness for solar assisted long term operation.

- Point the device to Plaspy using the shared Plaspy server endpoint and port so reports arrive at the platform.
- Ensure the device has active cellular connectivity and correct APN settings for LTE Cat 1 or GSM fallback before testing.
- Choose the transport mode required by the device firmware (UDP or TCP) or use the device's automatic/over the air tool when available.
- Validate battery, solar charging, and physical installation for consistent reporting intervals.
- Confirm the device appears in Plaspy and is sending location and event data after applying configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: the GAT3000 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible GAT3000 with sufficient battery charge and solar panel connection for testing.
- Active cellular service on a compatible SIM with the correct APN settings for the chosen network operator.
- Access to the official Gosafe configuration method or software for the GAT3000 (web, desktop tool, OTAP, or SMS commands depending on device support).
- Basic device identifiers available such as IMEI and device ID to match the tracker in Plaspy.
- A Plaspy account and the ability to view incoming device reports or logs once the device is configured.
- Optional: test location visibility in an area with good GNSS reception to confirm fixes are transmitted.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GAT3000 sends GNSS positions and related telemetry to the shared Plaspy server endpoint and port so the platform can ingest location, event, and sensor data for monitoring and reporting.

- The device reports to d.plaspy.com (or 54.85.159.138) on port 8888 so Plaspy receives positional and event messages.
- Transport can be UDP or TCP depending on the firmware or configuration selected for the device.
- Plaspy automatically detects the tracker protocol so the server can accept messages from different tracker protocols on the same port.
- Events such as tamper alerts, accelerometer movement, and BLE sensor telemetry are transmitted to Plaspy for alerts and history.
- Once visible in Plaspy, the tracker provides live location updates, history playback, and platform alerts for asset management.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the GAT3000 as provided by the manufacturer or vendor.
2. In the device server settings enter the Plaspy endpoint using either d.plaspy.com or the server IP 54.85.159.138.
3. Set the device reporting port to 8888 which is the shared Plaspy port for all supported devices.
4. If the device requires transport selection choose UDP or TCP according to your firmware or network preference.
5. Configure SIM and APN settings if required by your cellular operator so the tracker has data connectivity.
6. Apply or save the configuration and perform any required device restart or reboot as specified by the Gosafe tool.
7. Validate that the device reports to Plaspy by checking incoming messages, device status, or location visibility in the Plaspy platform.

## Example Configuration Commands

The GAT3000 supports multiple configuration paths depending on firmware and vendor tools. Exact commands and message formats can vary between firmware revisions and provisioning methods, so use the official Gosafe configuration utility or documentation for the precise commands for your unit.

In many deployments the same practical steps are applied through a configuration tool or over the air update: set server to d.plaspy.com or 54.85.159.138, set port 8888, select UDP or TCP if required, save, and restart. If you are using SMS or an OEM command interface consult Gosafe documentation for the exact SMS templates or command strings for your firmware.

## Configuration Notes

- Firmware variations may change menu labels, available transports, or exact configuration command syntax. Always confirm commands against the device firmware notes.
- Choose TCP or UDP based on network reliability and device tool support. Plaspy supports both on port 8888 and performs automatic protocol detection.
- If you use SMS provisioning, confirm that the tracker accepts SMS configuration and that network SMS delivery is reliable at your installation site.
- Dual-SIM and roaming options are available on the GAT3000; ensure the active SIM has a valid data APN and that APN values are configured in the device.
- After configuration, allow time for the device to acquire GNSS fixes and transmit initial messages; solar panel orientation and charge state will affect reporting behavior.

## Why Use Plaspy with This Configuration

Using the GAT3000 with Plaspy provides a robust solution for long-term outdoor asset monitoring. The combination of solar assisted power, multi-constellation GNSS, LTE Cat 1 connectivity, and BLE sensor support makes the device suitable for trailers, containers, heavy equipment, and other remote assets while Plaspy ingests and presents that data for alerts, history, and operational reporting.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behaviour, and manufacturer details verify information on the official Gosafe website https://gosafesystem.com/.
