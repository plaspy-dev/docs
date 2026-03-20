---
slug: /lk_gps/lk770/configuration
id: lk770-configuration
sidebar_label: Configuration
title: LK-GPS - LK770 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for LK-GPS LK770 compatibility with Plaspy including server settings and practical setup steps
keywords:
  - LK-GPS LK770 configuration
  - LK-GPS LK770 setup
  - LK770 server configuration
  - LK770 Plaspy setup
  - LK-GPS tracker configuration
  - vehicle tracker LK770
  - LK770 GPS setup
  - LK770 tracking platform
  - Plaspy tracker configuration
  - GPS tracker LK770
---

# LK-GPS - LK770 Configuration

This page documents the public configuration context for using the LK-GPS LK770 tracker with the Plaspy platform. It summarizes the Plaspy server settings you will use, what to prepare before configuration, and a practical workflow to get the tracker reporting to Plaspy. Use this guidance alongside the device manual and any vendor tools you have for the LK770.

The LK770 is a wired car tracker with built-in GPS and GSM antennas and a range of vehicle security features such as SOS alarm, vibration alarm, and remote fuel or electricity cutoff. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol; however, exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools.

## Configuration Overview

This configuration prepares the LK770 to send location and event data to Plaspy so vehicles and assets appear in the Plaspy platform. The process focuses on pointing the device to Plaspy's shared endpoint, choosing the correct transport, and validating that the device reports successfully.

- Configure the device to send data to the Plaspy server endpoint and port.
- Select the transport mode (UDP or TCP) if required by the device interface.
- Save the configuration and restart the unit where necessary to apply changes.
- Validate connectivity and reporting so the tracker is visible in Plaspy for subsequent monitoring.
- Verify that event reporting such as SOS, vibration alarm, and power or fuel cut notifications reach Plaspy as expected.

## Plaspy Server Settings

Set the LK770 to report to the Plaspy server using the following public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port 8888 for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- A powered and installed LK770 tracker with access to its manufacturer configuration interface or SMS command set.
- A working SIM card and cellular connectivity compatible with the device network capabilities as described by the manufacturer.
- Access to the LK770 user manual or vendor configuration software to enter server and transport settings.
- Basic knowledge of whether your installation prefers UDP or TCP transport for telemetry.
- A method to restart or power cycle the device after applying configuration changes.
- Access to the Plaspy account or onboarding instructions (if you need to confirm device presence in your Plaspy instance).

## How This Tracker Connects to Plaspy

The LK770 sends GPS position and device event data to the shared Plaspy server endpoint and port so vehicles can be monitored within the Plaspy platform. Once pointed to Plaspy, the platform will detect the tracker protocol automatically and begin ingesting telemetry.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 at port 8888.
- You may choose UDP or TCP as the transport when the device requires it; Plaspy accepts both.
- Location updates and event notifications such as SOS signals and vibration alarms are transmitted to Plaspy for visibility and alerts.
- Remote events such as fuel or electricity cut commands (reported as device state changes) are visible to Plaspy when the tracker sends status updates.
- Plaspy automatically detects the device protocol so manual protocol selection in Plaspy is not required.

## Common Configuration Workflow

Follow these practical steps to configure an LK770 for use with Plaspy:

1. Access the official LK770 configuration method provided by the manufacturer or vendor (manufacturer app, web tool, desktop software, or SMS command set).
2. In the device server settings, enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport protocol (UDP or TCP) if the device requires a transport selection.
5. Apply or save the configuration changes in the manufacturer tool or via SMS commands.
6. Restart or power cycle the LK770 if the device or instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or device list.

## Example Configuration Commands

The LK770 supports SMS parameter settings and query functions according to the device description. Exact commands and formats vary by firmware and vendor tool, so follow the manufacturer documentation or vendor-provided command list for the LK770. Plaspy requires the target server and port listed above (d.plaspy.com or 54.85.159.138 and port 8888), and selecting UDP or TCP where applicable.

If you use SMS-based configuration with LK770, typical public steps are to send configuration strings via SMS from an authorized phone number to the device. Because manufacturer command syntax varies, consult the LK770 manual or vendor support to obtain the exact SMS templates or the configuration utility commands before applying them to production devices.

## Configuration Notes

- Firmware differences and hardware revisions can change command syntax and configuration menus; always confirm commands with the LK770 manual or vendor.
- Choose UDP or TCP based on your network and installation requirements; both transports are accepted by Plaspy on port 8888.
- SMS-based configuration is often available as an alternative to software tools for the LK770; when using SMS, verify the authorized phone numbers and command format.
- Ensure the device has stable power during configuration and restart sequences to avoid incomplete setting application.
- Because Plaspy automatically detects the protocol and uses a single port for all devices, focus changes are primarily on the server address and transport selection on the device side.

## Why Use Plaspy with This Configuration

Using the LK770 with Plaspy provides a straightforward way to bring vehicle location and security events into a single fleet management platform. Pointing the tracker to Plaspy's shared endpoint enables real-time visibility, event monitoring, and centralized oversight without needing per-device server changes in Plaspy.

To learn more about Plaspy and how it handles device ingestion and fleet visibility, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware details, and command references for the LK770, verify current information on the manufacturer's website https://www.lk-gps.com.
