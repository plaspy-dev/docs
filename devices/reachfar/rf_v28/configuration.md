---
slug: /reachfar/rf_v28/configuration
id: rf_v28-configuration
sidebar_label: Configuration
title: Reachfar - RF-V28 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Reachfar RF-V28 tracker setup with Plaspy server settings and practical setup steps
keywords:
  - Reachfar RF-V28 configuration
  - Reachfar RF-V28 setup
  - Reachfar RF-V28 Plaspy
  - Plaspy GPS tracker setup
  - personal GPS pendant configuration
  - RF-V28 server configuration
  - RF-V28 SMS commands
  - RF-V28 Wi-Fi fence
  - RF-V28 fall detection configuration
  - Plaspy device integration
---

# Reachfar - RF-V28 Configuration

This page documents the public configuration context for using the Reachfar RF-V28 personal GPS tracking pendant with the Plaspy platform. It focuses on the practical server settings and workflow needed to direct RF-V28 telemetry and events into Plaspy so devices become visible and manageable on the platform.

Plaspy uses a shared server endpoint and a single port across supported devices and automatically detects the tracker protocol used by the RF-V28. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; follow the device manual for exact instructions when performing configuration or troubleshooting.

## Configuration Overview

The aim of this configuration process is to prepare the RF-V28 to send location and event data to Plaspy reliably and to verify that the device appears in the platform for monitoring and alerting.

- Point the device to Plaspy's server endpoint so the RF-V28 can deliver GPS Wi‑Fi and LBS positions to the platform.
- Confirm transport settings (UDP or TCP) and port are set to Plaspy values so connections are accepted.
- Validate that SOS, fall detection, and Wi‑Fi fence events are enabled and transmitted to Plaspy.
- Save and apply device-side settings then verify the RF-V28 reports successfully to Plaspy.
- Use the manufacturer app or SMS configuration methods where available to complete setup and adjustments.

## Plaspy Server Settings

- Server domain d.plaspy.com as the primary host for device reporting.
- Server IP 54.85.159.138 can be used where a numeric endpoint is required.
- Port 8888 is the single port Plaspy uses for device connections.
- Transport support for UDP or TCP is available; configure the RF-V28 to use UDP or TCP depending on the device option.
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming RF-V28 messages without per-device protocol selection.

## Typical Requirements Before Setup

- A charged and operational RF-V28 pendant with access to its configuration interface (manufacturer app or SMS commands).
- An active cellular SIM installed and configured if the device uses cellular connectivity for position and event reporting.
- Access to the Reachfar user manual or vendor configuration tool for RF-V28-specific commands and firmware update procedures.
- A Plaspy account or administrator access so you can register and view the device once it reports to the platform.
- Basic network information such as the Plaspy server domain d.plaspy.com or IP 54.85.159.138 and port 8888 to enter into the device settings.

## How This Tracker Connects to Plaspy

The RF-V28 is configured to report location and event data to the shared Plaspy server endpoint and port so Plaspy can display live positions, raise alerts for SOS or geofence events, and archive historical routes.

- The RF-V28 sends position updates (GPS A‑GPS Wi‑Fi and LBS) to d.plaspy.com or 54.85.159.138 on port 8888.
- Device events such as SOS button presses and fall-detection alarms are transmitted to Plaspy for immediate notification.
- Wi‑Fi fence and geofence enter/exit events are reported to the Plaspy platform for alerting and rule processing.
- Plaspy’s automatic protocol detection interprets RF-V28 messages so the device is usable without custom protocol configuration in the platform.
- Once reporting is confirmed the device becomes visible on Plaspy maps and route history is available for review.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software (mobile app vendor web tool or SMS command interface) as described in the RF-V28 manual.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device network/server settings.
3. Set the device port to 8888 to match Plaspy’s shared port for all supported devices.
4. Choose UDP or TCP in the device transport options if the RF-V28 requires a transport selection.
5. Apply or save the configuration within the manufacturer tool or via SMS and follow any device-specific prompts to confirm settings.
6. Restart the RF-V28 if required by the firmware or configuration method to ensure settings take effect.
7. Validate that the device reports to Plaspy by checking for incoming location updates and event notifications in the Plaspy platform.

## Example Configuration Commands

The RF-V28 supports configuration via the manufacturer app and SMS commands; exact command syntax varies by firmware and vendor release. Because command formats are manufacturer specific and may change, consult the Reachfar user manual for the precise SMS or tool commands to set server and transport values.

Example guidance you may see in manufacturer documentation (do not treat as literal commands without verifying in the RF-V28 manual):
- Set server by specifying d.plaspy.com or 54.85.159.138 and port 8888.
- Select transport type UDP or TCP if required by the device.
- Use the vendor SMS syntax or app controls to save and reboot the device.

If you need explicit SMS command examples for RF-V28, refer to the Reachfar manual or vendor support; do not rely on generic command examples without verification.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices which simplifies device-side configuration.
- Choosing UDP or TCP affects delivery behavior; UDP is commonly used for lower overhead telemetry while TCP can improve delivery confirmation depending on device firmware.
- Firmware and hardware revisions may change available configuration options or SMS command syntax; always confirm commands with the manufacturer documentation.
- If the RF-V28 supports SMS configuration that method can be a convenient alternative when app or OTA tools are not available.
- Enable and test SOS fall-detection and Wi‑Fi fence reporting after server settings are applied to confirm event transmission to Plaspy.

## Why Use Plaspy with This Configuration

Using the RF-V28 with Plaspy provides a straightforward way to centralize personal-safety tracking, emergency alerts, and route history in a single monitoring platform. Organizations and caregivers gain real-time visibility of pendant wearers, receive immediate SOS and fall alerts, and can audit historical movements for incident review.

Learn more about Plaspy and how it supports devices like the Reachfar RF-V28 at https://www.plaspy.com. For the latest device-specific configuration methods firmware behavior and manufacturer details verify current information at the Reachfar website https://www.reachfargps.com/
