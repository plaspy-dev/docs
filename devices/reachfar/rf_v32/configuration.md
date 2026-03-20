---
slug: /reachfar/rf_v32/configuration
id: rf_v32-configuration
sidebar_label: Configuration
title: Reachfar - RF-V32 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Reachfar RF-V32 for Plaspy with practical server settings and setup guidance for animal tracking
keywords:
  - Reachfar RF-V32 configuration
  - Reachfar RF-V32 setup
  - Reachfar GPS tracker configuration
  - Plaspy integration
  - pet tracker setup
  - livestock tracker configuration
  - GPRS TCP tracker setup
  - RF V32 Plaspy compatibility
  - animal GPS tracker setup
  - GPS tracker server configuration
---

# Reachfar - RF-V32 Configuration

This page documents the public configuration context for using the Reachfar RF-V32 with Plaspy. It summarizes the practical server settings and setup steps commonly used to integrate this pet and livestock GPS tracker so it can report location and alarms to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side configuration steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide as the practical Plaspy-focused reference and consult the Reachfar documentation for device-specific procedures.

## Configuration Overview

The goal of this configuration is to point the RF-V32 at Plaspy so the device can upload location and alarm data reliably over GPRS TCP/IP. Plaspy uses a single shared server endpoint and port for all supported trackers and will detect the tracker protocol automatically, so setup focuses on entering the correct server and transport settings and validating connectivity.

- Configure the RF-V32 to report to Plaspy by entering the Plaspy server address and transport settings.
- Ensure the device has a working SIM and GPRS connectivity so it can open a data session to Plaspy.
- Validate that location fixes and alarms are arriving in Plaspy after configuration.
- Save and, if required, restart the RF-V32 so new settings take effect.
- Confirm geofence, low battery, and SIM-change alerts are forwarded to Plaspy as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint information used to receive data from the RF-V32. Plaspy uses the same port for all supported devices and will detect the device protocol automatically once the device is pointed to the server.

## Typical Requirements Before Setup

- A charged RF-V32 with working battery and physical access to the unit for configuration.
- A valid SIM card with mobile data enabled and GPRS allowed for TCP/IP reporting.
- Access to the Reachfar configuration method used by the device (manufacturer app, SMS commands, or PC tool).
- A Plaspy account and knowledge of how to view incoming devices in the platform for validation.
- A clear location or temporary outdoor placement to obtain initial GPS fixes while testing.
- Basic knowledge of choosing UDP or TCP transport depending on the device configuration interface.

## How This Tracker Connects to Plaspy

The RF-V32 sends location and alarm data to Plaspy over GPRS using TCP/IP reporting, or via SMS depending on configuration. When configured for Plaspy, the device is directed to the shared Plaspy endpoint so incoming telemetry and events appear in the Plaspy dashboard for real-time monitoring and historical playback.

- The device opens a GPRS TCP/IP session to d.plaspy.com on port 8888 and transmits position and alarm payloads.
- Plaspy automatically recognizes the tracker protocol and parses the incoming data for map visualization.
- Alarms such as geofence breach, low battery, and SIM-change are forwarded to the Plaspy platform as configured by the tracker.
- Historical trace data uploaded by the RF-V32 is available in Plaspy for playback and analysis.
- Transport can be configured as UDP or TCP on the device if required; Plaspy accepts both.

## Common Configuration Workflow

1. Access the official Reachfar configuration method for the RF-V32 (manufacturer app, SMS command set, or PC configuration tool).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 as the data reporting port.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration using the Reachfar tool or command method.
6. Restart the RF-V32 if the device or instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for the device's first location or an initial status message.

## Example Configuration Commands

The RF-V32 may be configured using Reachfar's published SMS commands, mobile app, or PC configuration tools depending on firmware and vendor distribution. Exact command syntax and available parameters depend on the device's firmware version and the vendor's command set. When using a Reachfar SMS command or configuration tool, the public actions are typically to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, then choose UDP or TCP if required and save the settings.

If you have a Reachfar command reference from your vendor, use it to enter the following public values:
- server: d.plaspy.com (or 54.85.159.138)
- port: 8888
- transport: UDP or TCP

Refer to the Reachfar user manual or vendor instructions for the exact SMS commands or configuration file syntax for your RF-V32 firmware version.

## Configuration Notes

- Firmware and hardware revisions may change available commands and menu paths; confirm the correct procedure for your unit before applying settings.
- Choose TCP when persistent connections and delivery acknowledgment are preferred, or UDP if the device and network conditions favor lower overhead; both transports are accepted by Plaspy.
- Plaspy uses the same port for all supported devices, which simplifies multi-device deployment and reduces configuration errors.
- If the RF-V32 supports SMS-based configuration, use it for initial setup or when data connectivity is not yet available, then switch to GPRS reporting to connect to d.plaspy.com port 8888.
- Because the RF-V32 is focused on pet and livestock tracking, confirm expected alarm types and reporting intervals in the Reachfar documentation.

## Why Use Plaspy with This Configuration

Using the RF-V32 with Plaspy provides a practical way to gain near real-time visibility of pets and livestock through a single, unified platform. Pointing the RF-V32 at Plaspy lets organizations and owners receive location updates, geofence alerts, and historical trace playback so they can respond quickly to escapes, monitor grazing patterns, and track animal movements over time.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and manufacturer support for the RF-V32, verify current details on the Reachfar website https://www.reachfargps.com/.
