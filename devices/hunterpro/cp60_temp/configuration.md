---
slug: /hunterpro/cp60_temp/configuration
id: cp60_temp-configuration
sidebar_label: Configuration
title: HunterPro - CP60-TEMP Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for HunterPro CP60-TEMP showing public Plaspy server settings and practical steps to integrate the tracker with Plaspy
keywords:
  - HunterPro CP60-TEMP configuration
  - HunterPro CP60-TEMP setup
  - CP60-TEMP Plaspy integration
  - HunterPro tracker configuration
  - CP60-TEMP server configuration
  - Plaspy GPS tracker setup
  - CP60-TEMP monitoring setup
  - GPS platform configuration Plaspy
  - refrigerated trailer temperature tracking
  - temperature sensor GPS tracker
---

# HunterPro - CP60-TEMP Configuration

This page covers the public configuration context for using the HunterPro CP60-TEMP tracker with Plaspy. It explains the shared server settings Plaspy requires and the practical steps most installers follow to prepare a CP60-TEMP for visibility in the Plaspy platform. Use this documentation to understand the required server values and the typical workflow; follow HunterPro official documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so the guidance below focuses on public settings and the practical process of applying them to the tracker for integration with Plaspy.

## Configuration Overview

This configuration process prepares the CP60-TEMP to report temperature and location data to Plaspy using the platform's shared server endpoint and port. The objective is to ensure the device is pointing at Plaspy, using the correct transport, and that the platform can automatically detect the tracker protocol and start ingesting telemetry.

- Point the device to the Plaspy server endpoint so data is routed to the platform.
- Confirm the device uses port 8888 as required by Plaspy for all devices.
- Choose UDP or TCP transport on the device if a transport selection is required.
- Apply and save the configuration on the HunterPro device using the official manufacturer method.
- Validate the device is visible in Plaspy and reporting temperature and location data.

## Plaspy Server Settings

Use these public Plaspy values when configuring the CP60-TEMP to communicate with Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888 (Plaspy uses the same port for all supported devices)
- Transport: UDP or TCP may be used; the device may be configured using either transport on port 8888
- Protocol handling: Plaspy automatically detects the tracker protocol so the platform can accept reports from compatible trackers

## Typical Requirements Before Setup

- Physical access to the CP60-TEMP for configuration, or access to the installer tool provided by HunterPro
- A stable power source and a properly installed device so configuration changes are retained
- The Plaspy server details listed above available to enter into the device interface
- Confirmation of compatible firmware or hardware revision from HunterPro before making changes
- Access to any manufacturer configuration software, mobile app, or SMS/command method as documented by HunterPro
- Administrative access to the Plaspy account or onboarding channel where the device will be monitored

## How This Tracker Connects to Plaspy

The CP60-TEMP is configured to report temperature and location data to the shared Plaspy server endpoint and port. Once configured, Plaspy automatically detects the tracker protocol and begins ingesting the device's telemetry for monitoring and alerts.

- The tracker sends periodic reports to d.plaspy.com or 54.85.159.138 on port 8888
- Reports can be sent using UDP or TCP depending on the device configuration and installer choice
- Plaspy identifies the tracker protocol automatically and maps incoming data into the platform
- Temperature and location data become visible in Plaspy for monitoring the cooling chain
- Device events and connectivity status are available in the platform once reporting is established

## Common Configuration Workflow

1. Access the official HunterPro configuration method or software for the CP60-TEMP (manufacturer web tool, desktop utility, mobile app, or command interface).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device endpoint field.
3. Set the device port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection; the device may be configured using either protocol on port 8888.
5. Apply or save the configuration using the HunterPro tool and confirm the save was successful.
6. Restart the device if the manufacturer instructions require a reboot for network changes to take effect.
7. Validate that the CP60-TEMP reports to Plaspy by checking the device status and incoming data in the Plaspy platform.

## Example Configuration Commands

The manufacturer determines the exact configuration commands or menu fields for the CP60-TEMP. Command syntax and tools can vary by firmware and vendor software. If you have manufacturer-provided command strings or a configuration file format from HunterPro, enter the Plaspy server settings shown above (d.plaspy.com or 54.85.159.138 and port 8888) using the device's supported method.

If HunterPro supplies specific SMS commands, serial commands, or configuration file examples for the CP60-TEMP, place the server domain or IP and port as shown in those commands and follow the order the manufacturer requires. Consult the HunterPro manual for exact command templates.

## Configuration Notes

- Firmware and hardware revisions can change menu layouts, command syntax, and supported transport options; always confirm the device firmware version before applying settings.
- Choosing UDP versus TCP may affect delivery guarantees and behavior on lossy networks; pick the transport best suited to your environment and test connectivity.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so the important values to set on the tracker are the server address and the port.
- Keep a record of any manufacturer commands used during setup and any device identifiers required by Plaspy to link the tracker to your account.
- When in doubt, follow HunterPro documentation and tools for configuration to avoid mismatched settings.

## Why Use Plaspy with This Configuration

Integrating the HunterPro CP60-TEMP with Plaspy gives organizations centralized visibility into both temperature and location for refrigerated assets. Using the shared Plaspy server settings simplifies deployment across fleets and lets the platform automatically interpret tracker data once the device is pointed at the Plaspy endpoint.

To learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance for the CP60-TEMP, verify current information at the HunterPro website http://hunterpro.com.tw/ as manufacturer specifications and configuration methods can change over time.
