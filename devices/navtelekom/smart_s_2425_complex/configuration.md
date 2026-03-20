---
slug: /navtelekom/smart_s_2425_complex/configuration
id: smart_s_2425_complex-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2425 COMPLEX Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Navtelekom SMART S-2425 COMPLEX with Plaspy server settings and practical configuration steps
keywords:
  - Navtelekom SMART S-2425 COMPLEX configuration
  - Navtelekom SMART S-2425 COMPLEX setup
  - Navtelekom SMART S-2425 COMPLEX server configuration
  - SMART S-2425 COMPLEX Plaspy
  - Plaspy tracker configuration
  - Navtelekom GPS tracker configuration
  - SMART S-2425 GPS setup
  - vehicle tracking configuration Plaspy
  - fleet tracking Navtelekom
  - Navtelekom tracker configuration guide
---

# Navtelekom - SMART S-2425 COMPLEX Configuration

This page documents the public configuration context for using the Navtelekom SMART S-2425 COMPLEX with Plaspy. It focuses on the shared server settings and practical steps you will use when commissioning this Plaspy compatible 2G GPS/GLONASS tracker, while pointing to the manufacturer tools and documentation used for device-side configuration.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary with firmware version, hardware revision, installation type, and the vendor tools you use such as Navtelecom NTC Configurator, so always confirm device specific options before applying changes.

## Configuration Overview

This configuration prepares the SMART S-2425 COMPLEX to send GNSS positions and vehicle telemetry to Plaspy so the device appears in your Plaspy fleet and delivers live tracking and event reporting. The process centers on pointing the tracker to the Plaspy server endpoint and verifying end to end connectivity.

- Configure the device to report to the Plaspy server endpoint so telemetry reaches your account.
- Ensure transport settings and port match Plaspy expectations for automatic protocol handling.
- Validate cellular connectivity and SIM failover so the unit maintains telemetry over 2G.
- Use Navtelecom NTC Configurator or the device Bluetooth interface to apply settings and firmware updates.
- Confirm the tracker appears in Plaspy and is reporting expected position and event data.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SMART S-2425 COMPLEX:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All Plaspy devices use the same port and the platform will auto detect the protocol used by your tracker.

## Typical Requirements Before Setup

- A powered and wired tracker installed according to Navtelekom wiring guidelines with vehicle power applied.
- Active SIM cards with 2G cellular data service provisioned and inserted if using cellular reporting.
- Access to Navtelekom NTC Configurator or the approved manufacturer configuration method for this model.
- Up to date device firmware where possible and access to firmware update tools from the manufacturer.
- Login access to your Plaspy account or administrator console to confirm device registration and telemetry.
- A plan for testing connectivity and validating geolocation and input/output event reporting after configuration.

## How This Tracker Connects to Plaspy

When configured, the SMART S-2425 COMPLEX sends GNSS positions and vehicle telemetry over the cellular modem to the Plaspy server endpoint and port. Plaspy receives, interprets, and displays the data for live monitoring, history, and alerts.

- The tracker reports GNSS and telemetry data to d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP and will automatically detect the device protocol.
- Dual SIM support helps maintain an active data channel if a primary SIM loses coverage.
- Device I/O, serial inputs, and 1-Wire sensors provide vehicle telemetry that is forwarded to Plaspy once properly mapped.
- Successful configuration results in visible position updates, event notifications, and telemetry within the Plaspy platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as Navtelecom NTC Configurator or local Bluetooth commissioning tools.
2. Set the server address to d.plaspy.com or optionally the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the tracker configuration interface requires a transport selection.
5. Save or apply the configuration in the manufacturer tool and ensure the changes are written to the device.
6. Restart the tracker if the device or firmware requires a reboot to apply network changes.
7. Validate that the tracker reports to Plaspy by checking position updates and telemetry in your Plaspy account.

## Example Configuration Commands

The SMART S-2425 COMPLEX is commonly configured using Navtelecom NTC Configurator or the device Bluetooth interface. Exact commands and menus can vary by firmware and the manufacturer configuration tool. Because manufacturer tools and firmware versions change, follow Navtelekom documentation for the precise command syntax or UI steps for this model.

If you require command line or SMS based configuration examples, consult the Navtelekom documentation or the NTC Configurator help for the current syntax and recommended workflow.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices and will automatically detect the tracker protocol, so focus on correct server address and transport selection.
- Choose UDP or TCP based on your local network and installer preference; some networks or firewalls may favor one transport over the other.
- Dual SIM behavior and cellular failover depend on firmware settings and SIM provisioning. Verify SIM priorities and APN settings using NTC Configurator.
- Use Bluetooth local configuration for short range commissioning if available, and perform firmware updates through the official Navtelekom tools.
- After applying settings, always confirm the device is visible and reporting expected data in Plaspy before finalizing installation.

## Why Use Plaspy with This Configuration

Using the SMART S-2425 COMPLEX with Plaspy gives fleet operators reliable telemetry, position reporting, and event visibility that are essential for live tracking, operational monitoring, and anti-theft workflows. The combination of dual SIM cellular resilience, backup battery, and comprehensive I/O and serial interfaces lets you collect and forward rich vehicle data to Plaspy for analysis and action.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and Navtelekom configuration tools consult the official manufacturer site https://www.navtelecom.ru/. Manufacturer specifications and setup methods may change over time so verify current details before deploying at scale.
