---
slug: /cantrack/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: CanTrack - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the CanTrack TK103B to Plaspy with practical server settings and setup steps
keywords:
  - CanTrack TK103B configuration
  - CanTrack TK103B setup
  - TK103B Plaspy configuration
  - TK103B server configuration
  - GPS tracker configuration Plaspy
  - vehicle GPS tracker setup
  - TK103B tracking software configuration
  - CanTrack GPS platform setup
  - fleet tracking TK103B
  - TK103B TCP IP setup
---

# CanTrack - TK103B Configuration

This page covers the public configuration context for using the CanTrack TK103B with Plaspy. It gathers the practical, platform-focused steps and server settings you will need to point the TK103B to Plaspy so the device can report location, alarms and basic telemetry to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary depending on TK103B firmware version, hardware revision, installation type, and the configuration method (SMS commands, configuration software, or direct TCP/IP settings) provided by your vendor.

## Configuration Overview

Configuring the TK103B for Plaspy prepares the tracker to send its GPS position and event data to the Plaspy platform so devices become visible on live maps and in reporting workflows. The goal is to ensure reliable GPRS/TCP-IP reporting or fallback command paths so Plaspy ingests the device feed without manual protocol selection.

- Set the tracker to report to the Plaspy server endpoint and port so data arrives at your Plaspy account.
- Select the transport method supported by the device (UDP or TCP) if required by the tracker interface.
- Verify GPRS connectivity and SMS command access so initial configuration and diagnostics are possible.
- Apply and save manufacturer configuration, then confirm the tracker appears and reports correctly in Plaspy.
- Validate alarms and basic event reporting such as SOS, ignition, and geofence alerts within Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed TK103B with wiring and backup battery in place
- An active SIM provisioned for mobile data and SMS where GPRS/TCP-IP is used
- Access to the official CanTrack configuration method supplied by your vendor such as SMS command set or configuration software
- Basic knowledge of the tracker firmware version and any vendor customizations that affect commands or server fields
- A Plaspy account ready to receive the device feed and an assigned device ID or registration process if required by your organization

## How This Tracker Connects to Plaspy

The TK103B typically reports its position and event messages to a central server over GPRS using TCP/IP. When configured to point to Plaspy, the tracker sends periodic location updates, alarms, and status messages to the shared Plaspy endpoint so the platform can display live location and trigger notifications.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Device telemetry and alarm messages are transmitted over TCP or UDP depending on the chosen transport.
- Plaspy ingests location updates and event messages for map display, geofence processing, and alerting.
- SMS command support can be used for remote configuration or recovery when mobile data is unavailable.
- SD card logging on the TK103B provides local history that supplements Plaspy history when live data is interrupted.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by your vendor (SMS commands, USB/config tool, or web tool).
2. Enter the Plaspy server address as either d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 for server reporting.
4. Choose UDP or TCP if the device requires a transport selection; both are supported for Plaspy connections.
5. Apply or save the configuration using the device's recommended method (SMS save command or software save).
6. Restart the device if the tracker firmware or installation instructions require a reboot to apply server settings.
7. Validate that the device reports to Plaspy by confirming the tracker appears in the platform and sends sample location and alarm events.

## Example Configuration Commands

The exact command syntax and configuration commands can vary by firmware and vendor tool. Because manufacturer SMS command sets and configuration utilities differ across firmware revisions, follow the official CanTrack instructions provided with your device. Plaspy requires that the resulting server host and port are set to d.plaspy.com or 54.85.159.138 and port 8888, using UDP or TCP as supported by the tracker.

If you have a vendor-provided SMS command list or configuration file, use it to set the following fields in the tracker:
- Server host: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP (if required)

Consult the CanTrack documentation or your installer for exact command syntax for your TK103B firmware.

## Configuration Notes

- Firmware and vendor customizations can change command syntax and available configuration interfaces; always confirm the command set matches your TK103B firmware.
- Choose UDP or TCP based on installation needs and any vendor guidance; both transports are accepted by Plaspy on the same port.
- SMS-based configuration is commonly supported for TK103B and can be useful for initial setup or recovery when mobile data is unavailable.
- Ensure the SIM has GPRS enabled and that APN settings are correct for the mobile operator; APN placeholders such as [apn] may appear in vendor templates and should be replaced with your operator values.
- Keep a record of applied settings and test alarms and ignition events after configuration to confirm Plaspy receives the expected messages.

## Why Use Plaspy with This Configuration

Using the TK103B with Plaspy provides a practical way to centralize vehicle location, alarms, and basic telemetry into a single monitoring platform. The TK103B's support for GPRS/TCP-IP reporting, SMS command control, and SD card logging complements Plaspy's real-time mapping, alerting, and history playback so fleets can maintain visibility and respond to incidents effectively.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the CanTrack official website https://www.cantrackgps.com/.
