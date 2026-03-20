---
slug: /skypatrol/sp3801/configuration
id: sp3801-configuration
sidebar_label: Configuration
title: SkyPatrol - SP3801 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the SkyPatrol SP3801 to Plaspy with practical server settings and workflow
keywords:
  - SkyPatrol SP3801 configuration
  - SkyPatrol SP3801 setup
  - SP3801 server configuration
  - SP3801 GPS tracker setup
  - SkyPatrol tracker Plaspy
  - SP3801 fleet tracking
  - SkyPatrol OBDII installation
  - Plaspy tracker configuration
  - vehicle tracking SP3801
  - GPS tracker setup guide
---

# SkyPatrol - SP3801 Configuration

This page describes the public configuration context for using the SkyPatrol SP3801 with Plaspy. It focuses on the practical server settings and the general setup workflow you will use to point an SP3801 device at Plaspy so the device can report location and status to the platform. Use this as a technical reference for the shared settings required by Plaspy and as a starting point for manufacturer-specific configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. The SkyPatrol SP3801 is an ultra-compact vehicle tracker with an optional OBDII quick connect cable for fast installation; follow the manufacturer's configuration method and then apply the shared Plaspy server settings described below.

## Configuration Overview

The goal of this configuration is to prepare the SP3801 so it can reliably communicate with Plaspy and appear in your account. This includes pointing the tracker at the Plaspy server, choosing the correct transport, saving the configuration, and validating connectivity.

- Point the SP3801 to the Plaspy server endpoint and port so telemetry is delivered into Plaspy.
- Select the device transport (UDP or TCP) if the SP3801 configuration requires a choice.
- Save and apply settings using SkyPatrol configuration tools or procedures.
- Verify the device is online and reporting so it becomes visible in the Plaspy platform.
- Use the optional OBDII quick connect cable if available to simplify power and installation.

## Plaspy Server Settings

Use the following public settings when configuring the SkyPatrol SP3801 for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for devices that report to this endpoint

These values are the shared Plaspy endpoint settings used by all devices supported by Plaspy.

## Typical Requirements Before Setup

- Physical access to the SP3801 and any required installation accessories such as the optional OBDII quick connect cable.
- A stable power source or vehicle connection to power the device during configuration.
- Access to the SkyPatrol configuration method or software recommended by the manufacturer.
- The Plaspy server settings (d.plaspy.com and port 8888) available to enter into the device interface.
- Ability to restart the tracker after applying configuration if the device requires a reboot to activate new settings.
- A way to validate that the tracker is reporting, such as viewing device status in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SP3801 sends its location and device status to the shared Plaspy server endpoint so the device is visible in the Plaspy fleet view. The tracker uses the selected transport and the standardized Plaspy port to deliver telemetry.

- The tracker is configured to report to the shared Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- All devices report to the same Plaspy port, which is port 8888.
- You can choose UDP or TCP transport if the device configuration requires a transport selection.
- Plaspy automatically detects and interprets the tracker protocol when data arrives on the shared endpoint.
- Once reporting, Plaspy provides visibility, event logs, and location updates for operational monitoring.

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software for the SP3801 (manufacturer tool, mobile app, or SMS interface as provided by SkyPatrol).
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the server field.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the SP3801 requires you to select a transport option.
5. Apply or save the configuration according to SkyPatrol instructions.
6. Restart the device if required by the device or firmware to activate the new settings.
7. Validate that the device reports to Plaspy by checking device status and recent messages in your Plaspy account.

## Example Configuration Commands

The SP3801 configuration commands and procedures are provided by SkyPatrol and can vary by firmware and the vendor's configuration tool. There are no public SP3801-specific commands included here. Use the SkyPatrol configuration interface to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, and select UDP or TCP if required. If your installer tool supplies command strings or SMS templates, follow the manufacturer's syntax and then confirm reporting in Plaspy.

## Configuration Notes

- Firmware variations and hardware revisions can change the exact configuration steps or supported command syntax; always check the device firmware release notes.
- If you must choose between UDP and TCP, select the transport that matches your installation requirements; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- Installer practices vary by market and vendor; use the SkyPatrol recommended tools for the SP3801 whenever possible.
- Save and document the configuration applied to each device for future troubleshooting and audits.
- Consult SkyPatrol documentation for device-specific behaviors such as sleep modes, power management, or diagnostic reporting.

## Why Use Plaspy with This Configuration

Configuring the SkyPatrol SP3801 to report to Plaspy gives organizations consistent visibility into vehicle locations and operational status using a single shared server endpoint. The SP3801's compact form factor and optional OBDII quick connect make it a practical choice for installations where discreet or rapid fitting is desirable, while Plaspy centralizes telemetry and event reporting from many devices.

Learn more about Plaspy and how it supports fleet visibility by visiting https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer guidance, verify details on the SkyPatrol website https://www.skypatrol.com/.
