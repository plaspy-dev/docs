---
slug: /gotop/g02/configuration
id: g02-configuration
sidebar_label: Configuration
title: GOTOP - G02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G02 tracking with Plaspy including server settings setup steps and integration notes
keywords:
  - GOTOP G02 configuration
  - GOTOP G02 setup
  - GOTOP G02 server configuration
  - GOTOP G02 Plaspy
  - GOTOP G02 GPS tracker setup
  - GOTOP tracker configuration
  - GOTOP G02 4G tracker
  - GOTOP G02 IP67 tracker configuration
  - Plaspy GPS tracker configuration
  - vehicle tracking GOTOP G02
---

# GOTOP - G02 Configuration

This page covers the public configuration context for using the GOTOP G02 (G02-4G) tracker with Plaspy. It explains the shared server settings you will point the device at and gives practical, vendor-agnostic guidance for preparing the unit to communicate with Plaspy. The G02-4G is a compact IP67 4G tracker for motorcycles, e-bikes, and cars that supports SMS or 4G reporting, ACC detection, and multiple alarm types; this document focuses on the publicly available steps needed to connect it to Plaspy.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol on incoming connections. Exact manufacturer-side setup steps vary by firmware, hardware revision, installation type, and vendor tools, so use this guide to understand the Plaspy-side requirements and combine it with the official GOTOP configuration tool or SMS command set for device-specific actions.

## Configuration Overview

Configuring the GOTOP G02 for Plaspy means preparing the tracker to reliably send position and event data to the Plaspy server endpoint. The steps below are practical goals for the setup process and help ensure the device appears and reports correctly in the Plaspy platform.

- Point the device to the Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 so outbound reports reach Plaspy.
- Set the device to use port 8888, which Plaspy uses for all supported trackers.
- Select UDP or TCP transport on the tracker if required by the device interface.
- Apply and save the configuration in the GOTOP tool or via the tracker SMS commands and restart the device if needed.
- Verify the tracker’s IMEI or device ID and confirm the unit is reporting to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol on incoming connections

## Typical Requirements Before Setup

- A powered GOTOP G02 device mounted or connected with stable vehicle power or the backup battery charged.
- An active SIM card with data or SMS capability as required by your chosen configuration method.
- Access to the official GOTOP configuration method such as the vendor web tool, PC software, or SMS command set.
- The device IMEI or unique tracker ID available for registering or identifying the unit in Plaspy.
- A place to test connectivity where cellular coverage is available for 4G reporting.
- Knowledge of the device firmware version and vendor tool version, since command syntax and menu layouts can differ.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the GOTOP G02 sends its location and status messages to the shared Plaspy server endpoint and port so the platform can ingest and display tracking data. Plaspy receives the device connection on port 8888 and matches the incoming protocol automatically, so you only need to ensure the server address and transport match what the device supports.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Location updates and event reports are sent over the selected transport (UDP or TCP).
- Plaspy detects the tracker protocol automatically and parses the incoming messages.
- Once the device reports successfully the unit will become visible in Plaspy and begin reporting location and alarms.
- Regular verification checks ensure the tracker is online and that alarms such as geo-fence or power cut are delivered to the platform.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software provided by the manufacturer, or prepare to use SMS commands if applicable.
2. In the device settings, enter the Plaspy server address by using the domain d.plaspy.com or the server IP 54.85.159.138 as an alternative.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. If the device requires a transport selection, choose UDP or TCP according to your network preference or device capability.
5. Apply or save the configuration in the GOTOP tool or send the applicable SMS commands to store the settings on the device.
6. Restart the tracker if the manufacturer instructions require a reboot to apply network changes.
7. Validate that the device reports to Plaspy by checking device visibility and recent position updates in the Plaspy platform.

## Example Configuration Commands

The GOTOP G02 can be configured using the manufacturer’s configuration utility or SMS command set. Exact commands and syntax vary by firmware and vendor tool, so there are no universal commands supplied here. In practice you will:

- Use the GOTOP PC or mobile tool to set the server address (d.plaspy.com or 54.85.159.138) and port 8888 and select UDP or TCP if required.
- Or use the GOTOP SMS command format provided by the manufacturer to send the server and port settings to the device, then save and reboot the tracker.

Because manufacturer command sets change across firmware revisions, consult GOTOP documentation or the configuration utility for the exact command strings and steps to enter the Plaspy server settings.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported trackers and automatically detects the incoming protocol, so you do not need a device-specific Plaspy port.
- The G02 supports SMS or 4G reporting; if you configure via SMS you will use the device SMS command set, while web or PC tools may offer a GUI for server and transport selection.
- Ensure the SIM APN and mobile data settings are correct on the device if using 4G reporting; APN values are provided by the mobile operator and must be entered in the manufacturer tool if required.
- Firmware and hardware revisions can change command names and menu locations; record the device firmware version before making configuration changes.
- Choosing UDP or TCP can affect message reliability and network behavior; select the transport that best matches your deployment and carrier network characteristics.

## Why Use Plaspy with This Configuration

Using the GOTOP G02 with Plaspy gives operators a straightforward way to centralize vehicle location, alarms, and operational status in a single tracking platform. The G02’s compact IP67 design, ACC detection, and multiple alarm types make it suitable for a range of vehicles, and pointing the device at Plaspy provides consistent ingestion and visibility of those events.

To learn more about Plaspy and how it integrates with trackers like the GOTOP G02, visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and manufacturer guidance, always verify current details on the official GOTOP website https://www.gotop.cc/.
