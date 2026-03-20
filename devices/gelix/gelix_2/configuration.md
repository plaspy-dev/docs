---
slug: /gelix/gelix_2/configuration
id: gelix_2-configuration
sidebar_label: Configuration
title: Gelix - Gelix 2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gelix 2 GPS tracker integration with Plaspy server and setup checklist
keywords:
  - Gelix Gelix 2 configuration
  - Gelix 2 setup
  - Gelix 2 Plaspy
  - Gelix tracker configuration
  - Gelix GPS setup
  - Gelix 2 server configuration
  - vehicle tracking Gelix
  - GPS tracker Plaspy compatibility
  - Gelix firmware configuration
  - tracking platform setup
---

# Gelix - Gelix 2 Configuration

This page covers the public configuration context for using the Gelix 2 GPS tracker with the Plaspy platform. It explains the shared server settings Plaspy expects and offers practical guidance for preparing a Gelix 2 device so it can report location, events, and alarms into Plaspy. The material here is intended to be an actionable reference for installers and administrators configuring Gelix 2 devices for visibility in a tracking platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The Gelix 2 supports active tracking, alarm and event messaging, voice/listening features, and multiple connectivity options including GSM, SMS, CSD, GPRS, and serial RS232; use this page to apply the Plaspy server settings to the device using the official Gelix configuration method provided by the vendor.

## Configuration Overview

Configuring a Gelix 2 for Plaspy is primarily about directing the device to the Plaspy server, confirming network and SIM connectivity where applicable, and validating that the device appears and reports correctly in Plaspy. The steps below outline the practical goals of the configuration process.

- Point the Gelix 2 to the Plaspy server endpoint so telemetry is sent to Plaspy.
- Choose the appropriate transport (UDP or TCP) and set the correct port used by Plaspy.
- Ensure the device has network connectivity and any required SIM or data settings are active.
- Save and apply the configuration then restart the device if the manufacturer procedure requires it.
- Verify the device is visible in Plaspy and that position and event messages are received.

## Plaspy Server Settings

When configuring Gelix 2 devices for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (configure whichever transport the device requires)
- Automatic protocol detection in Plaspy (Plaspy detects the tracker protocol automatically)

Note that Plaspy uses the same port for all supported devices and the platform will automatically detect the tracker protocol once the device sends data to the configured endpoint.

## Typical Requirements Before Setup

- Access to the official Gelix configuration method or software provided by the manufacturer or vendor.
- Device powered and connected to the vehicle or bench power system as recommended by Gelix.
- Valid SIM card and active mobile data service if using GSM/GPRS data channels for reporting.
- Knowledge of any APN values or credentials required by the mobile network if the device uses cellular data.
- Physical access to the device for initial setup, or remote management tools provided by Gelix if available.
- Administrative access to the Plaspy account or deployment to verify device visibility after configuration.

## How This Tracker Connects to Plaspy

The Gelix 2 sends location, event, and alarm messages to the configured Plaspy endpoint so the platform can display real-time telemetry and event history. Configure the device to report to the shared Plaspy server and port, then validate messages on the Plaspy side.

- The device is configured to report to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138).
- All Gelix 2 devices should use port 8888 when sending data to Plaspy.
- Transport can be UDP or TCP depending on the device's configuration options and installer preference.
- Plaspy automatically detects the tracker protocol when the device begins reporting to the server.
- Once reporting, Plaspy receives position updates, alarm messages, and event notifications for operational monitoring.

## Common Configuration Workflow

1. Access the official Gelix configuration method or software provided by the manufacturer or your vendor.
2. In the device network/server settings, enter d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. If the device requires selecting a transport, choose UDP or TCP per the device options.
5. Apply or save the configuration in the Gelix tool or device menu.
6. Restart the device if the manufacturer procedure requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy and appears in the platform, and confirm position and event messages are received.

## Example Configuration Commands

The Gelix 2 supports multiple configuration methods depending on firmware and vendor tools. Exact commands or SMS strings vary by model revision and the Gelix configuration utility. Use the official Gelix configuration software or documented SMS/serial commands provided by the manufacturer for concrete command syntax. If you need command examples, consult the Gelix product documentation or the vendor support channel for the firmware version in use.

## Configuration Notes

- Firmware and hardware revisions can change available configuration options; always confirm the firmware version when following manufacturer instructions.
- Some installers prefer TCP for reliable delivery while others use UDP for lower overhead; both transports are supported by Plaspy for port 8888.
- If using cellular data, ensure APN and network credentials are set according to the mobile operator and Gelix guidance.
- When available, use the manufacturer configuration tool rather than ad hoc SMS commands to reduce the risk of misconfiguration.
- Keep a record of device identifiers and IMEI values to match devices with Plaspy entries during verification.

## Why Use Plaspy with This Configuration

Using the Gelix 2 with Plaspy gives fleet managers and administrators centralized visibility into vehicle location, alarms, and event history. Pointing Gelix 2 devices to Plaspy's shared server and port allows the platform to automatically interpret incoming messages and present data for monitoring, reporting, and operational decision making.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details verify information on the official Gelix website http://www.gelix.com/ as vendor instructions and firmware behavior can change over time.
