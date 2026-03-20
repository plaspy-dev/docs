---
slug: /wp/spt_10/configuration
id: spt_10-configuration
sidebar_label: Configuration
title: WP - SPT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the WP SPT-10 GPS tracker for use with Plaspy using shared server settings and automatic protocol detection
keywords:
  - WP SPT-10 configuration
  - WP SPT-10 setup
  - WP SPT-10 Plaspy
  - SPT-10 GPS tracker configuration
  - SPT-10 server settings
  - WP GPS tracker setup
  - Plaspy device configuration
  - vehicle tracking SPT-10
  - portable GPS tracker configuration
  - SPT-10 GPRS SMS setup
---

# WP - SPT-10 Configuration

This page covers the public configuration context for using the WP SPT-10 tracker with Plaspy. It collects the practical server settings and workflow guidance required to point a compatible SPT-10 device at the Plaspy backend so the device can report location and events to your Plaspy account. The information below focuses on the shared, public-facing values Plaspy requires and the typical steps you will follow on the device or via the manufacturer tools.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol once the device connects. Exact manufacturer side setup steps can vary by SPT-10 firmware, hardware revision, installation type, and the vendor configuration tool you use. Use this guide as the Plaspy-specific reference and confirm any device-specific commands or menus with the official WP documentation.

## Configuration Overview

The goal of configuring an SPT-10 for Plaspy is to prepare the tracker so it can reliably send GPS and event data to the Plaspy platform for monitoring and reporting. Configuration focuses on server endpoint, transport selection if required, and confirming the device can communicate over the mobile network.

- Point the device to the Plaspy server endpoint so telemetry is delivered to your Plaspy account
- Select transport mode if the SPT-10 configuration requires choosing UDP or TCP
- Ensure the device has an active SIM and data or SMS capability as required by your installation
- Save and apply settings, then validate the device appears in Plaspy and reports location
- Use manufacturer tools or SMS commands where available to set server values and confirm device status

## Plaspy Server Settings

When configuring the SPT-10 for Plaspy, use these public Plaspy connection settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Note that Plaspy uses the same port for all supported devices and that protocol detection happens on connection so the device may be configured using either the domain or IP and using UDP or TCP transport.

## Typical Requirements Before Setup

- A charged and powered SPT-10 device with access to the manufacturer configuration method
- An active SIM card with data and SMS enabled if your configuration will use GPRS or SMS for setup and reporting
- Access to the official WP configuration tool, app, or SMS command list provided by the manufacturer
- Your Plaspy account credentials or access to the Plaspy account where the device will be registered
- The device IMEI or identifier available for verification in Plaspy after first connection
- Basic knowledge of whether your installation prefers UDP or TCP transport

## How This Tracker Connects to Plaspy

The SPT-10 sends location and event data to the Plaspy endpoint you configure on the device. Once the correct server and port are set and the device has network access, Plaspy will automatically detect the protocol and begin parsing incoming data so the device becomes visible in your Plaspy account.

- The device is configured to report to the shared Plaspy server endpoint and port
- Data can be sent over mobile data using the GPRS capability of the SPT-10
- SMS may be used for command configuration or fallback reporting depending on device firmware
- Plaspy receives the inbound connection on port 8888 and performs protocol detection
- After a successful connection the device will appear in Plaspy and report GPS fixes and events

## Common Configuration Workflow

1. Access the official WP SPT-10 configuration method or software provided by the manufacturer, such as the web tool, app, or SMS command set.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the server or host field.
3. Set the server port to 8888 in the device network settings.
4. Choose UDP or TCP if the SPT-10 configuration requires selecting a transport protocol.
5. Apply or save the configuration on the device or via the manufacturer tool.
6. Restart the SPT-10 if required by the configuration method to activate the new server settings.
7. Validate that the device reports to Plaspy by confirming the device appears in your Plaspy account and by checking for an initial location or status update.

## Example Configuration Commands

The SPT-10 supports configuration via manufacturer tools, SMS commands, and over the air updates depending on firmware. Public command strings are vendor specific and are not included here. When configuring, you will typically supply the Plaspy server domain or IP and the port 8888 using one of the device methods below:

- Use the WP configuration app or web portal to set server to d.plaspy.com or 54.85.159.138 and port to 8888
- If using SMS based setup consult the official WP SMS command list and send the equivalent server and port commands to the device
- For OTA configuration consult the device firmware guide to push settings remotely

Because SPT-10 firmware and manufacturer tools vary, check the WP documentation for the exact command syntax or field names required to enter the server domain or IP and port. Remember to select UDP or TCP when the device requires a transport choice.

## Configuration Notes

- Firmware versions and hardware revisions of the SPT-10 can change menu names, SMS commands, and behavior; always verify commands against the current WP manual.
- Choose UDP or TCP based on your network and server requirements; Plaspy accepts either and will auto detect the protocol on connection.
- The SPT-10 supports both SMS and GPRS communication so configuration can often be done by SMS commands or over GPRS using the manufacturer portal.
- Plaspy uses the same port 8888 for all supported devices so you do not need different ports for different tracker models.
- If a configuration or firmware update fails, consult WP support materials for troubleshooting steps before attempting further changes.

## Why Use Plaspy with This Configuration

Using the WP SPT-10 with Plaspy provides centralized visibility for real time location, event alerts, and historical tracks. Pointing an SPT-10 at the Plaspy server endpoint connects the device into a managed platform where fleet managers, caregivers, or asset supervisors can monitor movement, receive alerts, and review journey history from a single interface.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer guidance at the official WP site http://www.wondeproud.com/ as manufacturer specifications and firmware features can change over time.
