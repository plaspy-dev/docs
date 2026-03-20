---
slug: /navtelekom/s_2114/configuration
id: s_2114-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2114 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Navtelekom СИГНАЛ S-2114 to Plaspy with required server settings and setup steps
keywords:
  - Navtelekom S-2114 configuration
  - СИГНАЛ S-2114 setup
  - S-2114 Plaspy configuration
  - Navtelekom GPS tracker setup
  - S-2114 server configuration
  - vehicle tracking S-2114
  - S-2114 GSM GPRS configuration
  - Plaspy tracker configuration
  - legacy tracker support
  - fuel sensor RS-232 configuration
---

# Navtelekom - СИГНАЛ S-2114 Configuration

This page covers the public configuration context for using the Navtelekom СИГНАЛ S-2114 tracker with the Plaspy platform. It summarizes the shared Plaspy server settings you need to point the tracker at, practical steps you will commonly follow, and what to check when integrating the S-2114 into an existing Plaspy deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. Use this guide to prepare the device for communication with Plaspy, and consult the official Navtelekom documentation for device specific details and firmware archives.

## Configuration Overview

The configuration process prepares the SIGNAL S-2114 to report GPS position, telemetry and alarm events to Plaspy over cellular GPRS. The goal is to configure network endpoint and transport, confirm cellular connectivity, and verify that the device appears and reports correctly in Plaspy.

- Configure the device to send data to the Plaspy server endpoint so position and telemetry are delivered to your account.
- Verify the S-2114 has an active cellular data connection and correct APN settings when required by the SIM operator.
- Attach and configure RS-232 fuel sensor inputs if fuel telemetry is required by your monitoring setup.
- Confirm alarm and SMS reporting behavior is enabled so events are logged and visible in Plaspy.
- Apply firmware or local updates as needed using USB or remote GPRS update methods supported by the device.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 for all devices supported by Plaspy  
- Transport support over UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol so devices can use the shared Plaspy endpoint and port

All Plaspy supported devices use the same port and the platform will detect the tracker protocol automatically when the tracker reports to the server.

## Typical Requirements Before Setup

- Device powered and accessible for configuration either locally via USB or remotely over GPRS  
- A working SIM card with an active data plan and SMS capability if SMS or remote reporting is required  
- Access to the official Navtelekom configuration tool or the device local configuration interface and USB cable when needed  
- Knowledge of the device IMEI or unique identifier to register or identify the unit in Plaspy if required by your workflow  
- RS-232 wiring completed for fuel sensor integration and any required sensor calibration data available  
- Plaspy account access and the ability to validate incoming device connections in the platform

## How This Tracker Connects to Plaspy

The S-2114 sends positional and telemetry data over cellular GPRS to the Plaspy server endpoint and port. Once configured with the Plaspy server settings, the device's reports are ingested by Plaspy, which interprets the tracker protocol automatically and presents position, fuel and event data in the platform.

- The tracker reports GPS position and periodic telemetry to d.plaspy.com or directly to IP 54.85.159.138 on port 8888.  
- Transport can be selected as UDP or TCP depending on the device configuration option and network conditions.  
- RS-232 sensor data such as fuel level is transmitted and grouped with the device telemetry for visibility in Plaspy.  
- Alarm events reported by the device via voice call or SMS can be logged and matched to the device timeline in Plaspy.  
- Remote firmware and configuration updates over GPRS are supported by the device and allow maintenance without physical access when the network permits.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software using the USB interface or the vendor provided configuration utility.  
2. Enter the Plaspy server endpoint using either d.plaspy.com or the IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 which is the standard port used by Plaspy for all devices.  
4. Choose UDP or TCP transport if the device requires explicit transport selection.  
5. Apply or save the configuration in the device tool and push changes to the tracker.  
6. Restart the device if the manufacturer instructions indicate a reboot is required for changes to take effect.  
7. Validate that the device reports to Plaspy by checking the device IMEI or identifier in your Plaspy account and confirming incoming telemetry and position updates.

## Example Configuration Commands

The SIGNAL S-2114 supports both local USB configuration and remote configuration over GPRS. Exact commands or SMS strings vary by firmware and manufacturer tool. The S-2114 common configuration is typically performed using the Navtelekom configuration utility or via the device's documented SMS command set when available in the official manual. Refer to the Navtelekom documentation for the exact command set and order required by your device firmware.

## Configuration Notes

- The S-2114 is an archived model and firmware behavior may differ between releases; verify the firmware version before applying configuration changes.  
- Choose UDP or TCP based on network reliability and the guidance of your cellular provider; UDP is common for low overhead and TCP can be more reliable over lossy links.  
- Ensure the SIM APN and operator settings are correctly configured on the device so GPRS data can reach Plaspy.  
- When integrating RS-232 fuel sensors confirm wiring and scaling so readings map correctly in Plaspy dashboards.  
- Use manufacturer provided tools and firmware from Navtelekom archives to maintain compatibility for legacy deployments.

## Why Use Plaspy with This Configuration

Using Plaspy with the Navtelekom СИГНАЛ S-2114 gives fleet operators a simple path to ingest GPS position, fuel telemetry and alarm events from legacy trackers into a single platform for monitoring and reporting. For maintenance or replacement support of existing installations, this configuration lets teams continue to leverage existing hardware while centralizing visibility and event management in Plaspy.

Learn more about Plaspy and how to manage connected devices at https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware releases, and manufacturer instructions on the official Navtelekom site https://www.navtelecom.ru/ since setup details and firmware behavior can change over time.
