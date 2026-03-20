---
slug: /cantrack/g500m/configuration
id: g500m-configuration
sidebar_label: Configuration
title: CanTrack - G500M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack G500M setup with Plaspy using shared server settings and practical setup steps
keywords:
  - CanTrack G500M configuration
  - CanTrack G500M setup
  - CanTrack G500M Plaspy
  - G500M OBD II setup
  - Plaspy server configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - G500M GSM GPRS configuration
  - real time tracking Plaspy
  - fleet management tracker
---

# CanTrack - G500M Configuration

This page documents the public configuration context for using the CanTrack G500M Mini GPS Tracker with Plaspy. It focuses on the practical server settings and setup workflow that enable the G500M to report position and telemetry to Plaspy for real time tracking, historical playback, and alerting. Use this guide to understand what Plaspy expects and how the tracker is typically prepared for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware revision, hardware revision, installation type, and vendor configuration tools. Always verify device-specific steps in the official CanTrack documentation where needed.

## Configuration Overview

The goal of configuration is to point the G500M to the Plaspy backend and verify it can deliver location and event data reliably. With the G500M plugged into the vehicle OBD II port and a working GSM/GPRS link, the device reports telemetry over TCP/IP to the configured server and port. Plaspy ingests that data and maps it to your account automatically once the device is visible on the platform.

- Configure the device to report to the Plaspy server endpoint and port
- Ensure the tracker has a valid data connection and power from the OBD II port
- Validate device visibility and live position updates in Plaspy
- Confirm ACC ignition and motion events are appearing as expected
- Test recovery of stored positions after connectivity interruptions

## Plaspy Server Settings

Use the following public server settings when configuring the G500M for Plaspy. These are the values Plaspy requires for devices to reach the platform.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if a transport selection is required
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices, so port 8888 is the common port across integrations.

## Typical Requirements Before Setup

- Vehicle with an accessible 16 pin OBD II port for plug and play installation
- Active SIM card with a mobile data plan compatible with GSM GPRS for TCP/IP reporting
- Access to the CanTrack official configuration tool, SMS commands, or vendor setup software
- Device powered and functional, with recent firmware recommended where possible
- A Plaspy account and knowledge of how you will identify the device within the platform (IMEI or device ID)
- Basic testing environment to validate live position, ACC status, and event reporting

## How This Tracker Connects to Plaspy

When configured, the G500M sends location and event telemetry over GSM/GPRS using TCP/IP to the shared Plaspy endpoint and port. Plaspy receives the connection and detects the tracker protocol automatically, making the device visible in the platform without additional protocol selection on the server side.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Data transport may use TCP or UDP depending on device settings and network conditions
- Plaspy automatically detects the tracker protocol and maps incoming telemetry to the account
- Real time positions, ACC state, and motion events are forwarded to Plaspy for live maps and alerts
- Onboard memory is re-uploaded to Plaspy after coverage gaps to ensure historical completeness

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G500M (manufacturer web tool, mobile app, or SMS commands as provided by CanTrack or your vendor).
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the configuration interface.
3. Set the device port to 8888. Remember that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device configuration requires selecting a transport protocol.
5. Apply or save the configuration in the device tool or by sending the required commands.
6. Restart the device if required by the manufacturer instructions to apply network settings.
7. Validate that the device reports to Plaspy by confirming the unit appears in your Plaspy account and that live positions and events are visible.

## Example Configuration Commands

The G500M may be configured using manufacturer tools, SMS command sets, or vendor-provided software. Exact commands and syntax vary by firmware and the vendor utility. Because modelConfiguration content is not provided here, the precise command strings cannot be listed generically.

If you have manufacturer SMS command documentation or a vendor tool, use it to set server d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP as needed. Preserve placeholders from the manufacturer documentation such as {{apn}}, {{apnu}} or {{apnp}} if they appear, and replace them with your SIM APN credentials when required.

## Configuration Notes

- Firmware differences can change command syntax and available configuration options; check CanTrack documentation for firmware specific instructions.
- TCP may provide a persistent connection while UDP can be more tolerant to intermittent connectivity; choose based on recommended vendor guidance and network behavior.
- The G500M stores positions locally during blind areas and will re-upload stored positions to Plaspy when connectivity returns.
- Use the device IMEI or provided device ID to identify the unit in Plaspy after the first successful connection.
- If using SMS commands for setup, confirm that the SIM accepts SMS and that SMS-based configuration is supported by your firmware.

## Why Use Plaspy with This Configuration

Using the CanTrack G500M with Plaspy provides a straightforward path to centralized visibility for vehicles with minimal installation effort. The G500M OBD II plug and play form factor, combined with Plaspy's shared server endpoint and automatic protocol detection, helps fleet managers and vehicle owners achieve reliable live tracking, trip logging, and event alerts without complex server-side configuration.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and official technical documentation for the G500M, verify details at the manufacturer site https://www.cantrackgps.com/ as hardware revisions and configuration methods can change over time.
