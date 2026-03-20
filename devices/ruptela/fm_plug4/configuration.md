---
slug: /ruptela/fm_plug4/configuration
id: fm_plug4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Plug4 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela FM Plug4 with Plaspy including required server settings and setup workflow
keywords:
  - Ruptela FM Pl

  - Ruptela FM Plu

  - Ruptela FM Plug4 configuration

  - Ruptela FM Plug4 setup

  - Ruptela FM Plug4 server configuration

  - FM Plug4 Plaspy setup

  - Plaspy tracker configuration

  - FM Plug4 GPS tracker setup

  - fleet tracking FM Plug4

  - Ruptela FM Plug4 integration
---

# Ruptela - FM-Plug4 Configuration

This page covers the public configuration context for using the Ruptela FM-Plug4 tracker with Plaspy. It explains the shared Plaspy server settings and practical setup guidance to prepare the FM-Plug4 or FM-Plug4+ for reporting to the Plaspy platform. Use this guide to understand what settings Plaspy requires and which steps you will typically perform with Ruptela configuration tools or SMS commands.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Refer to Ruptela documentation for device specific commands and the full FM-Plug4 user manual when you need precise step by step instructions for a particular firmware version or deployment scenario.

## Configuration Overview

This configuration process is intended to prepare the FM-Plug4 to send location and event data to Plaspy and to validate that the device is visible in the Plaspy platform. The steps are focused on applying the shared Plaspy endpoint settings, selecting transport if required, and verifying connectivity.

- Set the device to report to the Plaspy server endpoint so data reaches the Plaspy platform
- Choose the transport method supported by the tracker, UDP or TCP, on the Plaspy port
- Ensure the tracker has the required power and any SMS or software configuration access
- Validate connectivity so the tracker appears and reports correctly inside Plaspy
- Confirm device behavior such as theft alerts, OBD error reporting, and movement detection after setup

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the device or when entering server details in the Ruptela configuration tool:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device option  
- Plaspy automatically detects the tracker protocol once the device reports to the endpoint

Note that Plaspy uses the same port 8888 for all devices supported on the platform.

## Typical Requirements Before Setup

- Ensure the FM-Plug4 or FM-Plug4+ is correctly plugged into the vehicle OBD port and has power from the vehicle or internal battery if present
- If using SMS based configuration, have a working SIM card with SMS enabled installed in the device
- Access to Ruptela configuration methods such as official configuration software, web tools, or documented SMS commands from Ruptela
- A Plaspy account or the platform onboarding details so you can validate the device after it reports
- Basic information about the target vehicle such as VIN or fleet identifier for naming the device in your tracking platform

## How This Tracker Connects to Plaspy

When configured for Plaspy, the FM-Plug4 sends its location and event data to the shared Plaspy server endpoint and port so that Plaspy can display and process the device data. Plaspy will determine the protocol automatically once the device begins reporting.

- The tracker is pointed to d.plaspy.com or the IP 54.85.159.138 as the destination server
- Data is sent to port 8888 which is the common Plaspy port for all supported devices
- Transport is set to UDP or TCP depending on the device configuration option or installer preference
- Plaspy receives the data and automatically detects the protocol for correct decoding and display
- Once reporting, the device becomes visible in Plaspy for location, alerts, and operational monitoring

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for the FM-Plug4 such as the documented Ruptela tool or supported SMS commands.  
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 in the server address field.  
3. Set the destination port to 8888 which Plaspy uses for all devices.  
4. Choose UDP or TCP if the tracker requires a transport selection during configuration.  
5. Apply or save the configuration through the Ruptela tool, SMS command confirmation, or device UI.  
6. Restart the device if the manufacturer instructions require it to apply network settings.  
7. Validate that the FM-Plug4 reports to Plaspy by checking device visibility and recent position updates in the Plaspy platform.  
8. Confirm event reporting such as theft alerts or OBD error message visibility if applicable.

## Example Configuration Commands

The exact commands and syntax for the FM-Plug4 configuration depend on the Ruptela firmware version and the configuration method you choose. Ruptela typically provides either a configuration utility or SMS command set for public use. Because commands vary by firmware and tool, consult the Ruptela user documentation for the precise SMS strings or configuration utility steps to set the server to d.plaspy.com or 54.85.159.138 on port 8888 and to select UDP or TCP.

If you prefer SMS based configuration and have access to Ruptela SMS command documentation, use the Ruptela SMS commands to specify the server domain or IP and the port, then save and reboot the device. Preserve any placeholders from manufacturer commands (for example APN placeholders) exactly as provided by Ruptela when issuing SMS commands.

## Configuration Notes

- FM-Plug4 and FM-Plug4+ may have different feature sets such as internal battery and OBD-II error reading; verify which model you have before applying configuration steps.  
- Firmware versions can change command syntax and menu locations in configuration tools. Check Ruptela documentation for firmware specific instructions.  
- When both TCP and UDP are available, choose the transport that matches your installation policy or network conditions; Plaspy accepts either on port 8888.  
- SMS based configuration is possible according to the device feature list; ensure the SIM supports SMS and follow Ruptela SMS command formatting.  
- Always confirm final connectivity by verifying the device appears and reports correctly in Plaspy after saving settings and performing any required reboot.

## Why Use Plaspy with This Configuration

Using the Ruptela FM-Plug4 with Plaspy gives fleet operators a straightforward path to integrate a plug and play OBD tracker into a modern tracking platform. Configuring the device to report to the shared Plaspy endpoint allows centralized visibility, event alerts, and operational oversight without per device server complexity.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and feature details always verify the latest information at the official manufacturer website https://ruptela.com/
