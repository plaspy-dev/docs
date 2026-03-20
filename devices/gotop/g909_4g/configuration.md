---
slug: /gotop/g909_4g/configuration
id: g909_4g-configuration
sidebar_label: Configuration
title: GOTOP - G909-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G909-4G integration with Plaspy including server settings and practical setup steps
keywords:
  - GOTOP G909-4G configuration
  - GOTOP G909-4G setup
  - GOTOP G909-4G Plaspy
  - GOTOP tracker configuration
  - G909-4G server configuration
  - G909-4G Plaspy setup
  - GOTOP GPS tracker configuration
  - vehicle tracker setup Plaspy
  - fleet tracking G909-4G
  - asset tracker configuration
---

# GOTOP - G909-4G Configuration

This page documents the public configuration context for using the GOTOP G909-4G Mini Asset GPS Tracker with Plaspy. It summarizes the shared server settings Plaspy requires, the typical prerequisites you should confirm before configuration, and a practical workflow for applying the necessary server values so the G909-4G can communicate reliably with the Plaspy platform.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer-side setup steps and tools for the G909-4G can vary by firmware version, hardware revision, installation type, and vendor configuration utilities, so this guide focuses on the public, platform-level settings and common actions you should perform before and during integration.

## Configuration Overview

The goal of configuration is to prepare the G909-4G to send location, event, and telemetry data to Plaspy so devices become visible and manageable within the platform. That involves setting the tracker to report to Plaspy’s server endpoint and confirming the device can reach the network and upload cached data after reconnection.

- Configure the device to use the Plaspy server domain or IP and the shared Plaspy port so uploads are accepted and processed.
- Select the transport protocol (UDP or TCP) if the tracker requires an explicit choice, matching Plaspy’s supported transports.
- Validate cellular connectivity and that the tracker can perform an initial data push to Plaspy.
- Confirm data reporting by checking the device appears in Plaspy after configuration and that recent positions or event logs are visible.
- Save and apply settings on the device, reboot if required, and verify the device resumes reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

These values are the public server settings Plaspy uses; all supported devices report to the same port and Plaspy will identify the device protocol automatically.

## Typical Requirements Before Setup

- A powered and accessible G909-4G unit with the ability to accept configuration changes via the official manufacturer method.
- An active 4G capable SIM card and data plan installed in the device as required by the hardware and local operators.
- Reliable cellular coverage at the installation site to allow the device to connect and push data to the Plaspy server.
- Access to the GOTOP configuration tool, SMS commands, or other manufacturer-supplied configuration interface to enter server settings.
- A Plaspy account or access arranged by your system administrator to verify the device appears after configuration.
- Knowledge of the device firmware version and release notes where available, since commands and menus can differ.

## How This Tracker Connects to Plaspy

When configured, the G909-4G pushes GNSS positions, sensor events, and telemetry over cellular data to Plaspy’s shared server endpoint and port. Plaspy ingests those packets, detects the tracker protocol automatically, and makes the device visible in platform maps, alerts, and history views.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- Transport can be UDP or TCP depending on the tracker's configuration options and installer preference.
- GNSS position fixes, acceleration events, and alarm messages are uploaded to Plaspy for live monitoring and historical playback.
- Built-in offline storage on the G909-4G caches data during signal loss and automatically uploads cached records to the Plaspy server when connectivity is restored.
- Plaspy receives incoming packets, detects the tracker protocol automatically, and assigns the device to the correct parser and vehicle record.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the G909-4G (manufacturer tool, SMS command set, or web/USB configuration utility).
2. Locate the server or primary reporting settings section in the device configuration interface.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the device destination.
4. Set the server port to 8888 as required by Plaspy.
5. Choose UDP or TCP if the G909-4G requires a transport selection; either is supported by Plaspy.
6. Apply or save the configuration changes in the device tool and upload them to the tracker.
7. Restart the device if the manufacturer recommends a reboot after configuration.
8. Validate that the device reports to Plaspy by checking for recent position or event data in your Plaspy account.

## Example Configuration Commands

The exact commands and syntax for the G909-4G depend on the GOTOP configuration tool or SMS command set and the device firmware. Methods may include a GUI configuration utility, USB or serial configuration, or SMS commands. Because the manufacturer defines the concrete commands, follow GOTOP documentation for precise command strings.

Common public actions you will perform when applying commands or settings are:
- Set server domain or IP to d.plaspy.com or 54.85.159.138
- Set the reporting port to 8888
- Select transport as UDP or TCP if required
- Save and reboot the device to apply changes

If you have the GOTOP SMS or CLI command list from the manufacturer, use the provided syntax and replace server and port values with the Plaspy settings above. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} if present in manufacturer examples and fill them with your SIM operator APN credentials.

## Configuration Notes

- Firmware differences can change command syntax and available menu items. Verify commands against the GOTOP documentation for your device firmware.
- Choose UDP or TCP based on your network and installation needs; Plaspy supports both and will accept data on port 8888 for all devices.
- Because Plaspy uses the same port for all supported devices and auto detects protocol, consistent use of d.plaspy.com or the provided IP address and port 8888 simplifies multi-device deployments.
- Confirm APN and SIM operator settings when configuring cellular connectivity; missing or incorrect APN is a common cause of connectivity failures.
- If you use SMS-based configuration, keep in mind that messages can be delayed or blocked by the mobile operator during provisioning.

## Why Use Plaspy with This Configuration

Integrating the GOTOP G909-4G with Plaspy provides a straightforward path to real-time location, event reporting, and remote device management for fleet and asset monitoring. Plaspy’s shared server approach and automatic protocol detection reduce per-device parser configuration, letting administrators focus on deployment scale and operational use cases rather than per-model network routing.

To learn more about Plaspy and the platform capabilities, visit https://www.plaspy.com. For the latest GOTOP device specific commands, firmware notes, and hardware details verify current manufacturer documentation at https://www.gotop.cc/ as methods and firmware behavior can change over time.
