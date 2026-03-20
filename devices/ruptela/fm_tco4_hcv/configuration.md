---
slug: /ruptela/fm_tco4_hcv/configuration
id: fm_tco4_hcv-configuration
sidebar_label: Configuration
title: Ruptela - FM-Tco4 HCV Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Ruptela FM Tco4 HCV tracker with Plaspy covering server settings and practical integration steps
keywords:
  - Ruptela FM Tco4 HCV configuration
  - Ruptela tracker setup
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle tracking setup
  - telematics integration guide
  - tachograph data configuration
  - CANbus data setup
  - fleet monitoring integration
  - GPS platform configuration
---

# Ruptela - FM-Tco4 HCV Configuration

This page covers the public configuration context for using the Ruptela FM-Tco4 HCV tracker with Plaspy. It presents the practical server settings and workflow needed to point the device at Plaspy so location and vehicle data are visible in the platform. Use this guide alongside Ruptela documentation and tools to complete the device-side steps.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol on connection. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools used by installers. Follow Ruptela configuration tools and the notes below when applying these shared Plaspy settings.

## Configuration Overview

The configuration process prepares the FM-Tco4 HCV to send location and vehicle telemetry to Plaspy and verifies connectivity so the device appears in your Plaspy account. Applying the shared Plaspy server endpoint and port is the main required change on the device side; the rest of the steps confirm communication and operational behavior.

- Configure the tracker to report to Plaspy using the server address and port.
- Verify transport selection and that the device can reach the Plaspy endpoint.
- Confirm device power, SIM and network readiness if using mobile data or SMS configuration.
- Validate that the FM-Tco4 HCV appears in Plaspy and is sending expected data.
- Document firmware and tool versions used during setup for future troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Confirm the FM-Tco4 HCV has stable power and is installed according to Ruptela guidelines.
- Ensure a working SIM card and mobile data or SMS capability if using cellular communication, since FM-Tco4 HCV supports SMS-based commands.
- Have access to Ruptela official configuration software or supported configuration method used by your reseller or installer.
- Verify the device firmware version and any release notes that affect connectivity or protocol behavior.
- Keep the device serial number and hardware revision handy for registration and troubleshooting.
- Prepare a brief test plan to validate GPS fix, CANbus or tachograph data channels, and server reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the FM-Tco4 HCV sends location and telematics data to the shared Plaspy server endpoint and port so fleet operators can monitor vehicles and events centrally. Plaspy’s automatic protocol detection simplifies integration because the platform identifies the tracker protocol once the device initiates a connection.

- The tracker establishes an outbound connection to d.plaspy.com or to the IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the tracker protocol and maps incoming data into the platform.
- Once connected, the device reports positional updates and supported vehicle data streams.
- Events and telemetry become visible in Plaspy for operational monitoring and reporting.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software supplied by the vendor or installer.
2. In the device server settings enter the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port across supported devices.
4. Select transport UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration changes in the Ruptela tool or device interface.
6. Restart the device if required by the firmware or configuration tool to activate the new settings.
7. Validate that the FM-Tco4 HCV reports to Plaspy and appears in the platform by checking incoming messages and device status.
8. Run a short field test to confirm GPS fixes, CANbus or tachograph channels, and any accessory sensors are reporting as expected.

## Example Configuration Commands

The FM-Tco4 HCV can be configured using Ruptela configuration tools and methods supplied by the manufacturer or by installers. Exact commands and the user interface depend on the Ruptela software version and device firmware. Because methods vary, consult the Ruptela configuration manual for command syntax and step by step instructions specific to your firmware and toolset.

If you use SMS-based configuration, follow Ruptela templates for composing server and APN commands. Preserve placeholders such as {{apn}}, {{apnu}}, or {{apnp}} where provided by Ruptela and replace them with your network operator values.

## Configuration Notes

- Firmware differences can change menu names and exact steps; always record the firmware version used during setup.
- Choose UDP or TCP based on network reliability and installer preference; Plaspy accepts both on port 8888.
- SMS-based configuration is an option with this device, but ensure the SIM has SMS enabled and that SMS commands are supported by the installed firmware.
- Because Plaspy uses a shared port and automatic protocol detection, the primary device-side task is pointing to d.plaspy.com or 54.85.159.138 and setting port 8888.
- Keep Ruptela configuration tools and local installer documentation available for advanced functions like CANbus mapping or tachograph downloads.

## Why Use Plaspy with This Configuration

Using the Ruptela FM-Tco4 HCV with Plaspy provides a streamlined way to collect vehicle location and rich telematics for trucks and transport equipment in a central platform. The combination of the FM-Tco4 HCV’s support for CANbus, tachograph data, accessory interfaces, and Plaspy’s protocol detection makes it practical to bring vehicle-level insights and fleet operational visibility into one system.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and installation guidance consult the manufacturer at https://ruptela.com/ since firmware behavior and setup methods can change over time and should be verified with Ruptela documentation.
