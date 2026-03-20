---
slug: /gotop/g23/configuration
id: g23-configuration
sidebar_label: Configuration
title: GOTOP - G23 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the GOTOP G23 tracker to work with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP G23 configuration
  - GOTOP G23 setup
  - GOTOP G23 Plaspy
  - GOTOP G23 GPS tracker
  - GOTOP G23 server configuration
  - GOTOP tracker configuration
  - G23 GPS setup
  - fleet tracker configuration
  - Plaspy server configuration
  - vehicle tracking setup
---

# GOTOP - G23 Configuration

This page documents the public configuration context for using the GOTOP G23 mini wire GPS tracker with Plaspy. It summarizes the Plaspy server settings used by the platform, explains the practical steps to prepare the G23 for reporting, and provides workflow guidance so installers and integrators can validate connectivity and basic operation with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use this page as a practical integration reference and verify device-specific details with the manufacturer documentation when required.

## Configuration Overview

The purpose of configuring a GOTOP G23 for Plaspy is to point the device at Plaspy’s shared server endpoint and port, ensure the device has network connectivity, and verify the tracker reports GNSS and event telemetry so the device becomes visible in Plaspy dashboards and alerts.

- Point the G23 to the Plaspy server endpoint (domain or IP) using the device's configuration interface.
- Select the transport type (UDP or TCP) and set the port to the Plaspy standard port so the device can send data.
- Confirm the device has an active GSM connection and valid SIM if used, and that the G23 is powered and registered on the network.
- Validate that GNSS positions and event messages (ACC, power off, overspeed, etc.) are received by Plaspy.
- Restart or reboot the device after applying settings if the manufacturer workflow requires it to start reporting.

## Plaspy Server Settings

Use these public Plaspy server values when configuring the GOTOP G23:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Include either the server domain or IP in the device configuration depending on the G23 configuration tool and your installer preference.

## Typical Requirements Before Setup

- A powered and accessible G23 unit with access to the device’s manufacturer configuration method (UART-TTL serial or software tool as provided by GOTOP).
- A valid micro SIM installed and active on a 2G network where the device is intended to operate.
- Knowledge of the device IMEI or device identifier so you can match the tracker to the Plaspy account record.
- Access to Plaspy account or onboarding process to register the device once it begins reporting to the server.
- Basic tools for installation and verification, such as a multimeter for power checks and a serial adapter if using the UART-TTL interface.

## How This Tracker Connects to Plaspy

When configured, the GOTOP G23 sends GNSS positions and event telemetry over its GSM link to the shared Plaspy server endpoint and port so the device becomes visible in the platform for live maps, alerts, and history.

- The G23 reports GNSS and LBS positions to the Plaspy server at d.plaspy.com (or 54.85.159.138) on port 8888.
- The device can use UDP or TCP transport to transmit position and alarm packets to Plaspy.
- Event telemetry such as ACC detection, power off alarm, overspeed and vibration is forwarded to Plaspy for rule evaluation and notifications.
- Plaspy maps incoming tracker protocol data to platform dashboards, geofence rules, and reporting workflows.
- Because Plaspy automatically detects the tracker protocol, the same port and endpoint work across supported devices without per-device custom ports.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GOTOP G23 (for example the UART-TTL serial interface and the vendor’s configuration tool or SMS/serial commands if provided).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server address field according to the device tool.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP as the transport if the device requires explicit transport selection.
5. Apply or save the configuration using the device tool or command set.
6. Restart the G23 if required by the manufacturer procedure so new settings take effect.
7. Validate that the device reports to Plaspy by checking device connectivity and that GNSS positions and events appear in your Plaspy device list or onboarding view.

## Example Configuration Commands

The G23 model configuration is typically performed through the manufacturer’s serial configuration utility or vendor command set. Exact command syntax can vary by firmware and vendor tool, so there are no universal public commands provided here. Use the GOTOP configuration instructions or serial protocol document supplied with the device to update the server domain or IP, set port 8888, and choose UDP or TCP.

If you have the device command list from the vendor, follow the order required by that documentation: set server address, set server port to 8888, set transport to UDP or TCP, save settings, and reboot. Preserve any placeholders shown in vendor commands such as {{apn}} if present and replace them with your network APN values.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options; always check the GOTOP documentation for the G23 firmware version you are running.
- Choosing UDP or TCP affects reliability and packet behavior; pick the transport that matches your installation needs and the vendor recommendations.
- Plaspy uses the same port across devices and performs automatic protocol detection, so you do not need per-device port mapping in the platform.
- If you configure by serial UART-TTL, ensure correct voltage levels and a reliable serial adapter to avoid configuration errors.
- Keep a record of the device IMEI and the configured server address so you can quickly troubleshoot registration issues with Plaspy.

## Why Use Plaspy with This Configuration

Using the GOTOP G23 with Plaspy provides centralized visibility of real-time GNSS positions and device events for fleet management, anti-theft monitoring, and operational reporting. The G23’s compact form factor, ACC and power alarm inputs, and backup battery support practical installations, while Plaspy receives and processes the tracker’s telemetry into maps, alerts, and historical playback.

To learn more about Plaspy and how it handles device reporting and fleet workflows visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer integration details verify documentation at the GOTOP website https://www.gotop.cc/ as hardware and software behavior can change over time.
