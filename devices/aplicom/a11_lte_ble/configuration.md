---
slug: /aplicom/a11_lte_ble/configuration
id: a11_lte_ble-configuration
sidebar_label: Configuration
title: Aplicom - A11 LTE BLE Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Aplicom A11 LTE BLE to report to Plaspy with server settings and practical setup steps
keywords:
  - Aplicom A11 LTE BLE configuration
  - Aplicom A11 setup for Plaspy
  - A11 LTE BLE server configuration
  - Aplicom GPS tracker configuration
  - fleet tracking Aplicom A11
  - A11 LTE BLE GPS platform setup
  - Aplicom tracker Plaspy integration
  - Aplicom A11 BLE configuration guide
  - A11 LTE BLE OTA setup
  - Aplicom GPS tracker setup
---

# Aplicom - A11 LTE BLE Configuration

This page covers the public configuration context for using the Aplicom A11 LTE BLE tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device at, the practical steps commonly used to prepare a device for reporting, and the verification checks to confirm visibility on Plaspy. The guidance here is intended for technical users preparing the device for integration and operation with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. The Aplicom A11 LTE BLE supports global mobile connectivity, Bluetooth LE device pairing, and OTA updates, so use this guide together with Aplicom documentation and the vendor tools appropriate for your installation.

## Configuration Overview

The goal of this configuration process is to prepare the A11 LTE BLE to communicate reliably with Plaspy so the device becomes visible and reportable in the platform. This includes pointing the unit to the Plaspy server, selecting a transport method if required, confirming connectivity over the mobile network, and validating the device appears in Plaspy.

- Set the device server address and transport so it can reach the Plaspy endpoint.
- Configure port and transport options so the unit uses Plaspy standard port 8888.
- Validate mobile network connectivity and any required APN or SIM settings to allow data transmission.
- Pair Bluetooth LE beacons or sensors if your installation requires BLE telemetry or identification.
- Confirm the device is reporting and visible in Plaspy after configuration and any required reboot.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy notes: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Device is powered and accessible for configuration or has OTA management enabled for remote configuration.  
- A valid SIM card and data plan suitable for your region and roaming needs if the device will use cellular 4G LTE connectivity.  
- Access to Aplicom configuration tools or the vendor interface used to set server and transport values.  
- Knowledge of the current device firmware version and any vendor specific configuration procedures.  
- Physical access or console access to confirm BLE pairing when using Bluetooth LE beacons or sensors.  
- Credentials and permissions required to apply configuration changes and restart the device if needed.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the A11 LTE BLE sends its telemetry and status to the shared Plaspy server endpoint and port so Plaspy can present location and device data in the platform. Plaspy automatically detects the device protocol on connection, and the platform uses the same port across supported devices to simplify server-side configuration.

- The tracker is pointed to d.plaspy.com or the equivalent IP 54.85.159.138 as the reporting endpoint.  
- Data is sent to port 8888 which is the standard port used by Plaspy for all supported devices.  
- The device may use either UDP or TCP depending on the tracker configuration and installer choice.  
- Plaspy automatically detects the tracker protocol after the device connects to the server.  
- Once reporting starts, Plaspy receives telemetry and event reports for visibility and monitoring.

## Common Configuration Workflow

1. Access the official Aplicom configuration method or software provided by the manufacturer or vendor.  
2. In the device server settings, enter d.plaspy.com or 54.85.159.138 as the reporting endpoint.  
3. Set the device port to 8888 to match the Plaspy server port.  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Save or apply the configuration using the vendor tool or OTA management method.  
6. Restart the device if required by the firmware or configuration tool to activate the new settings.  
7. Validate that the device reports to Plaspy and appears in the platform, confirming connectivity and protocol detection.

## Example Configuration Commands

The exact commands or SMS strings used to configure an Aplicom A11 LTE BLE vary by firmware and vendor tool. Aplicom devices are typically configured with manufacturer software, OTA provisioning, or vendor provisioning tools rather than a single universal command set. Use the Aplicom configuration utility or the provisioning method recommended by your supplier to set the server to d.plaspy.com or 54.85.159.138, port 8888, and the preferred transport (UDP or TCP).

If you have specific public commands provided by your supplier or firmware release, place them here in the same order they must be applied and include placeholders for values such as APN if needed. Always preserve the command order when performing configuration changes.

## Configuration Notes

- Firmware differences can change the exact configuration steps; always reference your device firmware release notes before applying changes.  
- Choosing UDP versus TCP depends on network conditions and installer preference; both are supported by Plaspy on port 8888.  
- If you plan to use BLE beacons or sensors, pair and test them locally before relying on remote monitoring.  
- OTA configuration and firmware updates are commonly supported by the A11 LTE BLE, but availability depends on device provisioning and vendor systems.  
- Verify APN and mobile network settings as required for global roaming and 4G LTE connectivity in your deployment region.

## Why Use Plaspy with This Configuration

Using the Aplicom A11 LTE BLE with Plaspy provides a straightforward path to bring location, status, and event visibility into a single monitoring platform. The A11 LTE BLE's global mobile connectivity and BLE support make it a flexible unit for fleet and asset scenarios, and pointing the device at Plaspy simplifies reporting by using a shared server endpoint and port.

Learn more about Plaspy and how the platform handles device connections and data on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details please verify information on the Aplicom website https://www.aplicom.com/ before applying changes.
