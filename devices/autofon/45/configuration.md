---
slug: /autofon/45/configuration
id: 45-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon Маяк 4.5 showing how to prepare the device for use with Plaspy tracking servers
keywords:
  - AutoFon Маяк 4.5 configuration
  - AutoFon Маяк 4.5 setup
  - AutoFon tracker Plaspy compatibility
  - AutoFon server configuration
  - Маяк 4.5 GPS tracker setup
  - GPS tracker server settings
  - vehicle tracking configuration
  - asset tracking Plaspy
  - GPRS tracker configuration
  - SMS tracker integration
---

# AutoFon - Маяк 4.5 Configuration

This page covers the public configuration context for using the AutoFon Маяк 4.5 tracker with Plaspy. It explains the practical, manufacturer-facing steps and the shared Plaspy server settings you will apply on the device so the tracker sends position and telemetry to the Plaspy platform. Details here are based on the device description and common integration patterns for GPRS interval mode and SMS reporting.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps and menu names can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat this guide as a practical reference for the public settings and workflow required to connect the Mayak 4.5 to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the Mayak 4.5 to reliably report location and status to Plaspy via the device GPRS interval packets or via SMS where appropriate. You will point the tracker at Plaspy's monitoring endpoint, verify connectivity, and ensure the device behavior matches your tracking interval and alert needs.

- Configure the device to send interval GPRS packets to the Plaspy server endpoint d.plaspy.com on port 8888 so Plaspy can receive telemetry.
- Verify that the tracker can send SMS reports to authorized numbers if you plan to use SMS for alerts or fallback reporting.
- Validate network and SIM readiness so the Mayak 4.5 can establish GPRS sessions and deliver packets.
- Confirm device reporting by checking incoming data on Plaspy and observing map updates and event notifications.
- Save and apply settings on the device and restart if required to enable the new server parameters.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Mayak 4.5:

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as an alternate endpoint if device firmware requires an IP
- Port 8888 which is the shared port used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on the device menu; the Mayak 4.5 may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you only need to point the device at the Plaspy endpoint and choose the transport required by the tracker

Note that all devices in Plaspy use the same port and Plaspy will automatically detect and interpret the tracker protocol once packets arrive at the server.

## Typical Requirements Before Setup

- A powered and functional AutoFon Маяк 4.5 unit ready for configuration and with sufficient battery or external power.
- An active GSM SIM card with data enabled and a correct APN configured for GPRS packet sending.
- Access to the official AutoFon configuration method or software used to enter server, port and transport settings.
- Network coverage in the target installation area for GSM and GPRS connectivity.
- Knowledge of any device PIN or authorization settings required to accept remote commands or SMS configuration.
- A Plaspy account and access to the platform to verify incoming device reports and map markers after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Mayak 4.5 sends location and status data to the shared Plaspy monitoring endpoint so the platform can render positions, event alerts, and history. The device supports both packet mode reporting over GPRS and SMS-based alerts as a secondary path.

- The tracker is pointed to d.plaspy.com (or 54.85.159.138) and sends interval GPRS packets to port 8888.
- Plaspy receives packets and automatically detects the tracker protocol to decode position and telemetry.
- Motion, tamper, and power status events are transmitted to Plaspy so alerts and alarms can be generated.
- SMS messages can be used for immediate alerts or remote command responses to authorized numbers in addition to server packet reporting.
- Successful configuration results in live map updates and history traces visible in the Plaspy interface.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software as provided by the manufacturer or your installer.
2. Enter the Plaspy server as d.plaspy.com or, if required by firmware, enter 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Ensure the device APN and SIM data settings are correct for GPRS reporting if using packet mode.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to activate settings.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for incoming positions and events.

## Example Configuration Commands

The exact commands and syntax to configure the Mayak 4.5 depend on the manufacturer tool, SMS command set, or desktop configuration utility provided by AutoFon. Because model specific commands and SMS formats are provided by the manufacturer, the precise commands are not reproduced here. Refer to the official AutoFon configuration manual for the device for the SMS or console command formats needed to set the server, port, APN, and transport.

If your firmware supports SMS configuration, typical public patterns for similar trackers include sending SMS or using the vendor app to set server domain and port, then saving and rebooting the device. Always use the official AutoFon documentation for exact command syntax.

## Configuration Notes

- Firmware and hardware revisions can change menu labels and accepted command formats; confirm exact strings with AutoFon documentation for your device revision.
- Choose UDP or TCP based on device support and network reliability; UDP is common for low overhead interval reporting while TCP can provide session guarantees if supported.
- If using GPRS interval mode, ensure the SIM APN is configured correctly and that the data plan permits outbound connections.
- SMS can be a reliable fallback for critical alerts, but SMS formatting and authorized number management are controlled by the device firmware and manufacturer SMS command set.
- Applying settings and performing a device restart after configuration is a common requirement to ensure the new server parameters take effect.

## Why Use Plaspy with This Configuration

Using the AutoFon Маяк 4.5 with Plaspy provides a simple path to receive periodic location updates and event alerts from a compact, long-life tracker. For deployments that favor low maintenance and discreet installations, configuring the device to push GPRS interval packets to Plaspy enables centralized visibility, event monitoring, and history reporting without continuous on site management.

Learn more about Plaspy and how it handles tracker data at https://www.plaspy.com. For device specific commands, firmware notes, and the most current setup procedures for the AutoFon Маяк 4.5 consult the manufacturer at https://www.autofon.ru/ since firmware behavior and configuration methods can change over time.
