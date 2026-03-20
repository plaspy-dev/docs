---
slug: /gotop/l16/configuration
id: l16-configuration
sidebar_label: Configuration
title: GOTOP - L16 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP L16 GPS Smart Watch setup and server settings for use with Plaspy
keywords:
  - GOTOP L16 configuration
  - GOTOP L16 setup
  - GOTOP L16 server configuration
  - GOTOP L16 Plaspy
  - wearable GPS tracker setup
  - L16 GPS watch configuration
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker integration
  - personal tracking setup
---

# GOTOP - L16 Configuration

This page provides the public configuration context for using the GOTOP L16 GPS Smart Watch with Plaspy. It focuses on the practical server settings and the general setup workflow required to allow the L16 to report location, health telemetry, SOS events, and call notifications to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the device for Plaspy and then follow the official GOTOP configuration tools or documentation for device-specific commands and firmware notes.

## Configuration Overview

The goal of configuring the L16 for Plaspy is to point the device at Plaspy's shared server endpoint, verify transport settings, and confirm the device is visible in the Plaspy platform. The L16 is a wearable tracker that streams multi-mode positioning and health telemetry into Plaspy for real-time monitoring and alerts.

- Provide the L16 with the Plaspy server endpoint and port so it can send location and telemetry.
- Choose UDP or TCP transport on port 8888 if the device requires a transport selection.
- Confirm cellular connectivity and SIM or eSIM readiness so data can be transmitted.
- Validate the device is reporting to Plaspy and appearing in the platform dashboards.
- Optionally configure SOS and event reporting settings on the device so alerts are forwarded to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- Fully charged device or external power and a working battery to complete configuration steps.
- Active cellular service for the L16 via Nano SIM or eSIM and confirmation of data capability.
- Access to the official GOTOP configuration method or software for the L16 (web tool, mobile app, or SMS/AT command interface as provided by GOTOP).
- Basic device information such as IMEI or device ID to register or locate the unit in Plaspy.
- A typical installation environment where GNSS fixes and cellular coverage are available for initial verification.
- Access to the Plaspy account or administrative view where the device will be verified after configuration.

## How This Tracker Connects to Plaspy

When configured, the L16 sends its location, telemetry, and event messages directly to the shared Plaspy server endpoint and port. Plaspy receives those messages, automatically identifies the tracker protocol, and displays the device on dashboards for real-time monitoring and historical playback.

- The device reports GNSS and assisted positions to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device support and installer preference.
- SOS alarms and two-way call events are forwarded to Plaspy for notifications and incident handling.
- Health telemetry and sensor data stream to Plaspy so dashboards can show heart rate, SpO2, and other metrics.
- Plaspy stores incoming data and provides visibility for alerts, geofence events, and history playback.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the L16 (manufacturer app, web portal, or supported SMS/command interface).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the tracking server.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP as the transport method if the device requires explicit transport selection.
5. Apply or save the new server and transport settings in the device configuration tool.
6. Restart the L16 if required by the manufacturer or the configuration tool to activate the new settings.
7. Validate that the device reports to Plaspy by confirming the unit appears in the Plaspy platform and sends expected location and telemetry updates.

## Example Configuration Commands

The exact configuration commands or SMS syntax for the L16 vary by firmware and the manufacturer tools that GOTOP provides. Because vendor methods differ, consult the official GOTOP configuration guide for the precise command set or interface. Typical vendor tools may offer an app or web portal that hides low-level commands, while some installers may use SMS or serial command sets.

If you have GOTOP commands from the device manual, apply them through the official GOTOP tool and ensure the following values are used when configuring the tracking target:
- Server domain or IP: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP

Always preserve placeholders from GOTOP instructions such as APN values or credentials exactly as shown in manufacturer guidance.

## Configuration Notes

- Firmware variations can change the exact menu labels, SMS command syntax, or configuration flow; always verify against the device firmware version.
- Choose UDP for lower overhead and potentially faster delivery, or TCP if you need connection reliability; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- If the L16 supports SMS-based configuration, SMS commands may be used to set server and port values when an app or web tool is not available.
- BLE features and local pairing do not replace server reporting; they are complementary for proximity-based features and local sensor integration.
- Keep a record of the device IMEI or identifier to match the physical watch to the Plaspy entry during verification.

## Why Use Plaspy with This Configuration

Using the GOTOP L16 with Plaspy lets caregivers, fleet managers, and monitoring teams consolidate location, health telemetry, and emergency events into a single monitoring platform. The shared Plaspy server settings simplify deployment because all supported devices use the same port and Plaspy automatically detects device protocols, allowing faster onboarding and consistent reporting.

To learn more about Plaspy and capabilities for device monitoring and alerts visit https://www.plaspy.com. Device specific setup methods, firmware behavior, and manufacturer details can change over time, so verify the latest configuration instructions and firmware notes with GOTOP at https://www.gotop.cc/.
