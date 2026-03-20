---
slug: /navtelekom/smart_s_2423/configuration
id: smart_s_2423-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S-2423 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - Navtelekom SMART S-2423 configuration
  - Navtelekom SMART S-2423 setup
  - SMART S-2423 Plaspy integration
  - Plaspy tracker configuration
  - vehicle tracker configuration Navtelekom
  - GLONASS GPS tracker setup
  - NTC Configurator setup
  - DRC firmware management
  - 2G tracker configuration
  - RS-485 1-Wire Bluetooth tracker
---

# Navtelekom - SMART S-2423 Configuration

This page covers the public configuration context for using the Navtelekom SMART S-2423 tracker with Plaspy. It collects the practical, platform-focused settings and workflow steps you will need to point the device at Plaspy and validate that position and telemetry data appear in the platform. Use this guide as a companion to the official Navtelekom documentation and device tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary depending on firmware revision, hardware revision, installation type, and the vendor tools you use such as NTC Configurator or DRC remote management. This guide emphasizes the common, public settings required to integrate the SMART S-2423 with Plaspy.

## Configuration Overview

Configuring the SMART S-2423 for Plaspy is primarily about directing the tracker to the correct Plaspy server endpoint, confirming transport settings, and validating that the tracker reports location and telemetry. The process typically uses Navtelekom configuration tools and may involve a one-time device restart or firmware confirmation.

- Point the tracker to the Plaspy server endpoint so telemetry and GNSS fixes are delivered to the platform.
- Select the transport protocol (UDP or TCP) if the device requires a choice, using the shared Plaspy port.
- Save or apply the configuration in the manufacturer tool such as NTC Configurator or via remote DRC management.
- Validate connectivity and live reporting to Plaspy after restart and power up.
- Confirm inputs and outputs, RS-485 and 1‑Wire sensors, and Bluetooth peripherals are reporting as expected in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Ensure the SMART S-2423 has power and a charged internal backup battery if available.
- A single active SIM provisioned for 2G cellular service since the device uses a 2G GSM modem.
- Physical access to the device or remote access via Navtelekom tools such as NTC Configurator or DRC to change network settings.
- Know the tracker IMEI or device identifier used by your fleet for device registration and validation.
- A stable cellular signal at the installation site and confirmation that the local carrier still supports the tracker bands.
- Up to date firmware where possible; record firmware version for troubleshooting.

## How This Tracker Connects to Plaspy

When configured, the SMART S-2423 sends its GNSS position and associated telemetry to the shared Plaspy server endpoint and port. Plaspy ingests location fixes and telemetry and will automatically detect the tracker protocol so no special protocol selection on the platform side is required.

- The device reports GLONASS/GPS fixes and movement data to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be sent over UDP or TCP based on device settings; choose the transport required by your deployment.
- Telemetry from RS-485, 1‑Wire and Bluetooth peripherals is forwarded alongside location data when configured.
- Universal inputs and configurable outputs are reported as events to Plaspy and can trigger alerts and rules in the platform.
- Plaspy matches incoming data to a device record by IMEI or other identifier and displays live position, status, and historical routes.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as NTC Configurator or DRC remote management for the SMART S-2423.
2. Locate the server or remote reporting settings in the tool and enter the Plaspy endpoint as d.plaspy.com or alternatively use the server IP 54.85.159.138.
3. Set the reporting port to 8888.
4. If the device asks for transport selection, choose UDP or TCP based on your deployment needs.
5. Apply or save the configuration in the manufacturer tool and push changes to the device.
6. Restart the device if required by the tool or firmware to activate the new server settings.
7. Validate that the device reports to Plaspy by checking live position and telemetry within the platform and confirming receiving messages.

## Example Configuration Commands

The SMART S-2423 is typically configured using Navtelekom tools such as NTC Configurator or remotely via the DRC management service. Exact command syntax and methods vary by firmware and manufacturer tool, so there are no universal raw commands included here. Use the manufacturer software to set the server to d.plaspy.com or 54.85.159.138 and port 8888, choose UDP or TCP as required, then save and restart the device.

If you prefer or require SMS or serial command methods, consult the official Navtelekom documentation or NTC Configurator help for the exact command strings applicable to your firmware version.

## Configuration Notes

- Firmware and hardware revisions can change available settings and the configuration UI; always confirm the correct method for your device firmware.
- Choosing TCP versus UDP depends on your reliability and latency needs; Plaspy accepts both on port 8888 and auto detects the protocol.
- Use NTC Configurator for local or cable configuration and DRC when performing remote configuration or firmware updates across a fleet.
- Confirm 2G network availability with your mobile operator since SMART S-2423 uses a 2G GSM modem and single SIM.
- Record device identifiers such as IMEI before changing server settings to help match the device to its Plaspy record.

## Why Use Plaspy with This Configuration

Configuring the Navtelekom SMART S-2423 to send data to Plaspy gives fleet managers reliable visibility into vehicle location, status, and telemetry using the tracker’s GLONASS/GPS receiver and multiple I/O options. Plaspy’s automatic protocol detection and consistent server settings simplify integration and reduce the configuration steps required per device in mixed deployments.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and manufacturer instructions verify information with Navtelekom at https://www.navtelecom.ru/
