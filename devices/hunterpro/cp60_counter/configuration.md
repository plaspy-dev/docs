---
slug: /hunterpro/cp60_counter/configuration
id: cp60_counter-configuration
sidebar_label: Configuration
title: HunterPro - CP60-COUNTER Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration notes for HunterPro CP60 COUNTER tracker integration with Plaspy using shared server settings and automatic protocol detection
keywords:
  - HunterPro CP60 COUNTER configuration
  - HunterPro CP60 COUNTER setup
  - HunterPro CP60 COUNTER Plaspy
  - CP60 COUNTER server configuration
  - CP60 COUNTER GPS tracker setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - passenger tracking device configuration
  - GPS tracker platform setup
  - fleet tracking CP60 COUNTER
---

# HunterPro - CP60-COUNTER Configuration

This page documents the public configuration context for using the HunterPro CP60-COUNTER with Plaspy. It focuses on the practical server settings and workflow you will apply so the CP60-COUNTER can send passenger count and location data to the Plaspy platform using its GPRS transmission capabilities.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare and validate connectivity, and consult HunterPro documentation for device specific menu names and firmware notes.

## Configuration Overview

The goal of this configuration process is to prepare the CP60-COUNTER to report real time location and passenger entry exit information to Plaspy. Configuration typically ensures the device has correct GPRS settings, points to the Plaspy server endpoint, and confirms the transport and port settings so the platform receives the data reliably.

- Set the device to report to the Plaspy server endpoint so location and passenger events arrive in the platform
- Configure GPRS APN and credentials so the tracker can establish mobile data connectivity
- Enter the Plaspy server domain or IP and the shared port used by all devices
- Select UDP or TCP transport if the device requires an explicit choice
- Save and apply settings then validate that the CP60-COUNTER appears in Plaspy
- Confirm firmware and manufacturer tool steps if any fields differ from this public guidance

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the HunterPro CP60-COUNTER. These values are the standard endpoint information Plaspy expects for supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol so devices can report without manual protocol selection in the platform

Note that Plaspy uses the same port for all supported devices and will detect the correct protocol automatically.

## Typical Requirements Before Setup

- Ensure the CP60-COUNTER has a valid SIM card with an active GPRS data plan
- Know the mobile network APN and any APN username or password required by the SIM carrier
- Have physical access to the device or access to the manufacturer configuration tool used for the CP60-COUNTER
- Confirm the device has power and is able to acquire GPS fix and mobile network registration
- Download or reference HunterPro configuration instructions for your firmware revision
- Have a short test window to verify the device registers and sends data to Plaspy

## How This Tracker Connects to Plaspy

The CP60-COUNTER sends location and passenger entry exit events over GPRS to the Plaspy server endpoint and port. Once configured, Plaspy receives the data and makes the device visible in the platform for real time monitoring and reporting.

- The tracker reports periodically and on event triggers to the shared Plaspy endpoint
- Data is transmitted using mobile data via GPRS to d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be UDP or TCP based on the device configuration option
- Plaspy automatically detects the tracker protocol and decodes incoming messages
- Successful connection enables live location and passenger count visibility in Plaspy

## Common Configuration Workflow

1. Access the official HunterPro CP60-COUNTER configuration method or software recommended by the manufacturer
2. Configure the GPRS APN and any SIM credentials so the device can connect to mobile data
3. Enter d.plaspy.com or the server IP 54.85.159.138 as the reporting server
4. Set the port to 8888 as Plaspy uses the same port for all devices
5. Choose UDP or TCP if the device requires a transport selection
6. Apply or save the configuration in the device tool or menu
7. Restart the device if required by the manufacturer or tool to apply changes
8. Validate that the device is reporting to Plaspy and visible in the platform

## Example Configuration Commands

The CP60-COUNTER is typically configured using HunterPro supplied tools or the device menu and the exact commands or SMS strings can vary by firmware and tool. Because manufacturer configuration syntax differs, consult the HunterPro configuration guide for exact command lines or SMS formats used to set server, port, APN, and transport options.

If you receive a list of public commands from HunterPro or your vendor, apply them in the order provided and verify each step with a connectivity test to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.

## Configuration Notes

- Firmware and configuration menu names vary between hardware revisions, so refer to the HunterPro manual for your specific CP60-COUNTER firmware
- Choose UDP or TCP based on installer preference and device support; Plaspy will accept either but the device must be set correctly
- Ensure the APN and any credentials are correct for the SIM card carrier before pointing the device at Plaspy
- Since Plaspy uses a single port across devices, use port 8888 in the device settings to simplify deployment
- If you configure using SMS or a configuration tool, confirm that settings are saved and the device is restarted if required

## Why Use Plaspy with This Configuration

Using the HunterPro CP60-COUNTER with Plaspy provides passenger transport operators with a straightforward way to collect location and passenger entry exit data centrally. Configuring the device to report to the shared Plaspy server endpoint ensures data arrives in the platform for monitoring, reporting, and operational oversight without per device server variation.

Learn more about how Plaspy receives and displays device data by visiting https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify setup information on the HunterPro website at http://hunterpro.com.tw/ before deploying changes to production devices.
