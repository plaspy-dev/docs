---
slug: /autoseeker/at_18/configuration
id: at_18-configuration
sidebar_label: Configuration
title: Autoseeker - AT-18 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Autoseeker AT 18 tracker to report to Plaspy using the shared server settings and automatic protocol detection
keywords:
  - Autoseeker AT-18 configuration
  - Autoseeker AT-18 setup
  - AT-18 Plaspy configuration
  - Autoseeker GPS tracker setup
  - AT-18 server configuration
  - GPS tracker Plaspy integration
  - vehicle tracking AT-18
  - AT-18 SMS fallback configuration
  - fleet tracking Autoseeker AT-18
  - Plaspy tracker setup
---

# Autoseeker - AT-18 Configuration

This page documents the public configuration context for using the Autoseeker AT-18 with Plaspy. It focuses on the practical, platform-level settings required for the AT-18 to send position and status packets to Plaspy servers and explains what to check on the device and on the installer side before validating connectivity. Use this guide to align manufacturer-side configuration with Plaspy server information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT-18 is Plaspy compatible out of the box and supports GPRS TCP reporting with SMS fallback along with ignition, geofence, overspeed, and low battery alarms, which you should verify against the device manual during setup.

## Configuration Overview

This configuration process prepares the Autoseeker AT-18 to communicate reliably with Plaspy and to appear as an active device in the platform. The main goal is to point the tracker at the Plaspy server, ensure the device has valid mobile connectivity and power, and confirm that packets are received and interpreted by Plaspy.

- Configure the tracker to send its GPRS TCP reports to the Plaspy server endpoint.
- Validate the device has a working SIM and APN so GPRS TCP reporting functions.
- Enable or confirm SMS fallback behavior so alerts persist when packet data is unavailable.
- Save and apply the manufacturer configuration, then restart the device if required.
- Confirm the device appears in Plaspy and reports expected position and event messages.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy
- note that all devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- The AT-18 must be powered and installed according to the manufacturer wiring instructions.
- A SIM card with an active mobile data plan and the correct APN configured on the device.
- Access to the official Autoseeker configuration method or dealer tool to change server, port, and APN settings.
- The device should support GPRS TCP reporting and optionally SMS fallback as noted in the product description.
- A Plaspy account or administrator access to the Plaspy platform to verify the device becomes visible and starts reporting.

## How This Tracker Connects to Plaspy

When configured, the AT-18 sends periodic GPRS TCP packets to the Plaspy server endpoint where Plaspy automatically detects the tracker protocol and processes position and alarm information. SMS reports act as a fallback channel for critical alerts when packet data is unavailable.

- Device sends location and telemetry over GPRS TCP to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy performs automatic protocol detection and maps incoming packets to the AT-18 device feed.
- Status events such as ACC on/off, overspeed, geofence breach, and low battery are forwarded to Plaspy for alerts and logging.
- SMS fallback can be used for immediate alerts when GPRS packets are not delivered.
- Plaspy aggregates the feed for map visualization, notifications, and historical reporting.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software provided by the manufacturer or installer.
2. In the tracker server settings, enter d.plaspy.com or use the server IP 54.85.159.138 as provided by Plaspy.
3. Set the device reporting port to 8888 to align with Plaspy server configuration.
4. Choose UDP or TCP if the tracker requires explicit transport selection; for AT-18 GPRS TCP is typically used while UDP is also supported where applicable.
5. Configure the device APN and data settings so GPRS reporting can establish a mobile connection.
6. Apply or save the configuration and restart the device if the manufacturer tool requires a reboot.
7. Validate that the device reports to Plaspy and that position and alarm messages appear in the platform.

## Example Configuration Commands

The exact commands and format depend on Autoseeker firmware and the configuration tool you use. Some installations use SMS based commands, while others use a PC or mobile app provided by the manufacturer. Because manufacturer command syntax varies by firmware version and tool, follow the Autoseeker documentation or the installer tool prompts to set the server, IP, port, APN, and transport. There are no device commands included here since those are specific to the Autoseeker configuration interface.

## Configuration Notes

- Firmware differences can change command syntax and available options; always check the device firmware revision before applying commands.
- The AT-18 uses GPRS TCP as primary reporting with SMS fallback; prefer TCP where specified by the installer and validate SMS formats if using fallback alerts.
- If the manufacturer tool allows either domain or IP for the server, use d.plaspy.com for easier future maintenance or 54.85.159.138 when DNS is restricted.
- Confirm and enter the correct APN for the installed SIM to ensure packet data sessions establish reliably.
- When selecting transport, choose TCP for GPRS TCP reporting as typically supported by the AT-18, but UDP remains an option in some setups.

## Why Use Plaspy with This Configuration

Configuring the Autoseeker AT-18 to report to Plaspy gives organizations a straightforward way to centralize location, ignition status, and alarm reporting for fleets and mobile assets. With Plaspy handling automatic protocol detection and shared server settings, installers and managers can focus on reliable device installation and SIM configuration rather than platform-level endpoint discovery.

Learn more about Plaspy and how it can display and manage AT-18 device feeds at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer commands consult the official Autoseeker documentation at https://autoseekergps.com/ since manufacturer specifications and setup methods can change over time.
