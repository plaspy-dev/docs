---
slug: /ulbotech/t373b/configuration
id: t373b-configuration
sidebar_label: Configuration
title: Ulbotech - T373B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ulbotech T373B tracker integration with Plaspy including server settings and setup workflow
keywords:
  - Ulbotech T373B configuration
  - Ulbotech T373B setup
  - Ulbotech T373B Plaspy
  - T373B configuration
  - OBD II GPS tracker configuration
  - GPS tracker setup Plaspy
  - fleet tracking T373B
  - Plaspy tracker configuration
  - T373B server settings
  - Ulbotech tracker setup
---

# Ulbotech - T373B Configuration

This page covers the public configuration context for using the Ulbotech T373B tracker with Plaspy. It summarizes the shared Plaspy server settings, the practical workflow to point the device at the platform, and the common prerequisites you should confirm before integrating the T373B into a fleet managed by Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps for the T373B can vary by firmware revision, hardware revision, installer preference, and the vendor tool you use. The T373B description above is the primary grounding for this guide and highlights the device capabilities you can expect to configure when preparing it for Plaspy integration.

## Configuration Overview

Configuring the T373B for Plaspy means preparing the OBD II device to reliably send location and vehicle telemetry to Plaspy's shared server endpoint and port. The goal is to establish cellular connectivity, verify GNSS fixes, and confirm that the tracker regularly reports to the Plaspy platform so vehicles are visible and monitored.

- Point the tracker to the Plaspy server endpoint and port used by all Plaspy devices.
- Ensure the device has an active SIM and cellular connectivity for uplink to Plaspy.
- Verify GNSS reception and OBD II telemetry so Plaspy can display positions and vehicle data.
- Save and apply configuration changes and, if required, restart the T373B to begin reporting.
- Validate the device appears on Plaspy and that telemetry such as location, DTCs, and ignition events are transmitted.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy connection settings to use when configuring the tracker on the manufacturer tool or via the device configuration interface.

## Typical Requirements Before Setup

- Vehicle with an accessible OBD II port for plug and play installation.
- Active micro SIM card and a data plan compatible with the device modem since the T373B uses a Telit cellular modem.
- Access to the manufacturer configuration method such as the Bluetooth LE mobile tool or micro USB configuration utility.
- Device powered via the OBD II port and with adequate battery backup if testing without ignition.
- Knowledge of the device firmware version and any vendor-specific configuration instructions.
- Access to Plaspy account credentials or onboarding information to verify the device becomes visible in the platform after setup.

## How This Tracker Connects to Plaspy

The T373B connects to Plaspy by sending GNSS positions and vehicle telemetry through its cellular modem to the Plaspy server endpoint. Once configured to the Plaspy server and port, the tracker transmits regular updates and event notifications for visibility and monitoring in Plaspy.

- The tracker reports GPS/GLONASS positions and movement updates to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry such as OBD II data, DTC alerts, and driving events are sent alongside position reports to the Plaspy platform.
- Transport selection can be UDP or TCP depending on the device configuration; the device may be set to either when pointing to port 8888.
- Plaspy automatically detects the tracker protocol so the server can accept and interpret incoming messages from the T373B.
- Regular reporting and event-driven messages enable fleet managers to monitor location, diagnostics, and immobilizer status in Plaspy.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method such as the BLE mobile tool, vendor software, or USB configuration utility supplied by Ulbotech or your reseller.  
2. Enter the Plaspy server address either as domain d.plaspy.com or as the server IP 54.85.159.138 in the server/host field.  
3. Set the device port to 8888 as required by Plaspy. All Plaspy devices use this same port.  
4. Choose UDP or TCP transport if the configuration interface requires you to pick a transport method. The T373B may be configured using UDP or TCP on port 8888.  
5. Apply or save the configuration changes in the device tool or SMS/command method and confirm success messages from the configuration utility.  
6. Restart the device if the manufacturer instructions require it to apply network and server settings.  
7. Validate the device reports to Plaspy by checking device activity in your Plaspy account and verifying position and telemetry updates.

## Example Configuration Commands

The modelConfiguration content for the T373B did not include publicly published command strings for configuration. Exact commands and the method for applying them may vary by Ulbotech firmware, mobile tool, or vendor configuration utility. Use the official Ulbotech tools (BLE app or USB utility) or vendor documentation to set the server to d.plaspy.com or 54.85.159.138, set port 8888, choose UDP or TCP if required, and save the settings.

If you obtain manufacturer commands or SMS strings from Ulbotech documentation, follow the exact order and placeholders provided by the vendor. Keep placeholders such as {{apn}} or similar if they appear in vendor examples and replace them with values from your SIM provider when instructed.

## Configuration Notes

- Firmware and tool differences: configuration menus and required fields can vary between firmware versions and manufacturer tools. Confirm the right procedure for your device firmware.
- Transport selection: if the tool requires choosing UDP or TCP, pick the transport that matches your deployment needs; either is supported by Plaspy on port 8888.
- Use the domain or IP: you can configure the tracker with d.plaspy.com or 54.85.159.138; both are valid Plaspy endpoints for the same service.
- Validation: after configuration, allow several minutes for the device to establish cellular and GNSS fixes and then verify reporting in Plaspy.
- Manufacturer documentation: always consult Ulbotech documentation for device-specific configuration options such as APN, BLE pairing steps, or USB utility instructions.

## Why Use Plaspy with This Configuration

Using the T373B with Plaspy gives fleet operators a straightforward path to plug-and-play vehicle tracking and rich telemetry reporting. The device's OBD II integration, GNSS performance, and support for remote features such as immobilizer control and FOTA updates make it practical to deploy quickly and manage centrally through Plaspy.

Plaspy's shared server settings make onboarding predictable: point the T373B at d.plaspy.com or 54.85.159.138 on port 8888, choose UDP or TCP if required, and rely on Plaspy's automatic protocol detection to accept the device. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information on the Ulbotech website http://www.ulbotech.com/.
