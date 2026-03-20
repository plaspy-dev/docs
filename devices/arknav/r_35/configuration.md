---
slug: /arknav/r_35/configuration
id: r_35-configuration
sidebar_label: Configuration
title: ArkNav - R-35 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the ArkNav R-35 GPS tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - ArkNav R-35 configuration
  - ArkNav R-35 setup for Plaspy
  - ArkNav GPS tracker configuration
  - R-35 server configuration
  - R-35 tracking software configuration
  - vehicle tracking R-35 setup
  - Plaspy tracker configuration
  - R-35 GPRS configuration
  - GPS tracker platform setup
  - R-35 integration guide
---

# ArkNav - R-35 Configuration

This page covers the public configuration context for using the ArkNav R-35 GPS tracker with Plaspy. It explains the shared Plaspy server values you will point the device at and describes the practical steps most installers use to prepare the tracker for platform connectivity. This is a technical companion document and not a replacement for manufacturer instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools, so always verify details with ArkNav documentation when available.

## Configuration Overview

The goal of this configuration process is to ensure the ArkNav R-35 can reliably send location and status data to the Plaspy platform using Plaspy's shared server endpoint and port. You will configure the device to use the Plaspy server, choose the correct transport, and then validate that the unit appears and reports correctly in Plaspy.

- Point the R-35 to the Plaspy server domain or IP so the device can deliver telemetry to Plaspy.
- Select the required transport method (UDP or TCP) on the tracker if the device requires it.
- Set the common Plaspy port so the platform receives messages consistently; Plaspy uses the same port for all supported devices.
- Apply and save the device configuration and, if necessary, restart the tracker to activate settings.
- Confirm connectivity and visibility of the device within Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note: All devices in Plaspy use the same port so you only need to set port 8888 on the device side.

## Typical Requirements Before Setup

- A charged and functioning ArkNav R-35 unit with accessible configuration interface.
- A working SIM card and mobile data plan if using GSM/GPRS communications as provided by the device capabilities.
- Access to the official ArkNav configuration method or software (PC tool, SMS commands, or web/phone utility as provided by the manufacturer).
- A Plaspy account or an administrator who can confirm device registration and visibility on the platform.
- Basic information about the installation such as power source, physical placement, and any installer notes relevant to concealment or mounting.
- Means to monitor device output during testing such as a serial log, SMS reply, or Plaspy device console.

## How This Tracker Connects to Plaspy

The ArkNav R-35 sends its location and status messages to the Plaspy server endpoint where Plaspy automatically identifies the protocol and ingests the data. Once configured, the device will periodically or event-driven report to the shared Plaspy endpoint so the platform can provide location, history, and alerts.

- Configure the R-35 to use d.plaspy.com or 54.85.159.138 as the server address.
- Set the device port to 8888 so Plaspy receives telemetry on its standard port.
- Choose UDP or TCP transport on the device if required by the configuration interface.
- The device transmits messages using its GSM/GPRS link to the Plaspy endpoint for processing.
- Plaspy performs protocol detection to interpret R-35 messages automatically and make the device visible in the platform.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software provided by the manufacturer (PC configuration tool, SMS command set, or vendor installer app).
2. In the server or remote host field enter d.plaspy.com or alternatively the server IP 54.85.159.138.
3. Set the port value to 8888 as required by Plaspy.
4. If the device requires a transport selection, choose UDP or TCP based on installer preference or device capability.
5. Apply or save the configuration on the device using the manufacturer tool.
6. Restart the device if the configuration tool or device documentation recommends a reboot to apply settings.
7. Validate that the R-35 reports to Plaspy by checking the Plaspy device console or device list for incoming data.

## Example Configuration Commands

The ArkNav R-35 configuration method may vary by firmware and the manufacturer's provided tools. Because manufacturer command sets and interfaces differ across software versions, the exact commands you use will depend on ArkNav's documentation or the vendor utility you have.

If you have ArkNav SMS or tool commands from official documentation, use those to set the server and port to d.plaspy.com or 54.85.159.138 and port 8888, and choose UDP or TCP as required. Always follow the order recommended in the ArkNav manual and preserve any placeholders the manufacturer uses for APN or credentials.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact steps or command syntax; confirm the syntax in ArkNav's official manual for your R-35 firmware version.
- When given the choice, UDP may be simpler for minimal configuration but TCP can provide connection persistence depending on device support and network conditions.
- If the device uses APN settings for GPRS, ensure those APN values are entered correctly in the ArkNav configuration tools before testing connectivity.
- The R-35 has internal antennas and a backup battery; account for these characteristics during installation and power testing.
- Keep a copy of any SMS command responses or configuration logs to help troubleshoot connectivity to d.plaspy.com on port 8888.

## Why Use Plaspy with This Configuration

Using the ArkNav R-35 with Plaspy gives organizations a straightforward way to bring small form factor trackers into a centralized fleet and asset visibility platform. Pointing the R-35 at Plaspy's shared server and port allows the device to report location and status with minimal per-device server setup, and Plaspy's automatic protocol detection reduces manual protocol mapping steps.

To learn more about Plaspy and supported tracker integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and configuration utilities for the ArkNav R-35, verify details with the official manufacturer resources at https://www.arknavgps.com.tw/ since setup methods and firmware behavior can change over time.
