---
slug: /cantrack/g01/configuration
id: g01-configuration
sidebar_label: Configuration
title: CanTrack - G01 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for CanTrack G01 to connect with Plaspy using shared Plaspy server settings and practical configuration steps
keywords:
  - CanTrack G01 configuration
  - CanTrack G01 setup
  - G01 server configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - GPS tracker G01 GPRS setup
  - G01 SMS and GPRS configuration
  - vehicle tracking G01
  - personal tracker G01
  - G01 integration with Plaspy
---

# CanTrack - G01 Configuration

This page documents the public configuration context for using the CanTrack G01 GPS tracker with Plaspy. It focuses on the practical server settings and setup workflow needed to route GPRS location packets or SMS-based location replies to Plaspy so the device becomes visible in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer-side setup steps for the G01 can vary by firmware version, hardware revision, installation method, and vendor tools, so use this guide for the Plaspy-specific pieces and confirm device-specific commands with the official CanTrack documentation.

## Configuration Overview

The goal of this configuration process is to prepare the G01 so it can reliably send location and event data to Plaspy and appear in the platform for live tracking, history, and alerts. This includes configuring the device to use Plaspy's shared server endpoint and ensuring the device has the necessary connectivity and settings to communicate over GPRS or SMS.

- Configure the G01 to report to the Plaspy server endpoint so Plaspy can receive telemetry and location updates.
- Ensure the device has an active SIM with data and/or SMS capability for GPRS reporting or SMS fallback.
- Validate connectivity and that the tracker is sending periodic or event-driven packets to Plaspy.
- Confirm the device IMEI and any required provisioning or registration steps in Plaspy so the tracker appears in your account.
- Test reporting and alerts so overspeed and other events are visible in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the G01. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol when packets arrive

## Typical Requirements Before Setup

- Charged device battery and stable external power when installing permanently
- Active SIM card with a data plan and SMS capability if SMS fallback is needed
- Device IMEI available for identifying the tracker in Plaspy
- Access to CanTrack official configuration method such as SMS commands or manufacturer software
- A Plaspy account or provisioning workflow to add and verify devices in the platform
- Basic GSM/GPRS coverage at the installation location

## How This Tracker Connects to Plaspy

The G01 can deliver location and telemetry to Plaspy either over GPRS (pushing packets to a server) or by sending SMS messages with links for quick viewing. When configured for GPRS, the device sends periodic or event-driven UDP or TCP packets to the shared Plaspy server endpoint and port so Plaspy can map and record positions and events.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the equivalent server IP.
- All device traffic for Plaspy is sent to port 8888 so the platform can receive location packets consistently.
- Devices may use UDP or TCP transport; choose the transport the device supports and Plaspy will detect the protocol automatically.
- Plaspy processes incoming position packets and associates them with the device IMEI to display live position and history.
- Alerts and event flags from the device are forwarded to Plaspy as telemetry so rules and notifications can be applied.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software (SMS command set or manufacturer tool) recommended for the G01.
2. Enter the Plaspy server address by configuring either d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the device port to 8888 as the destination port for GPRS reporting.
4. Choose UDP or TCP transport if the device requires a transport selection; select the protocol supported by your G01 firmware.
5. Apply or save the configuration on the device using the manufacturer method (send SMS commands or save settings in the configuration tool).
6. Restart or power cycle the tracker if required by the device or after saving settings to ensure changes take effect.
7. Validate that the device reports to Plaspy by checking that the IMEI appears in your Plaspy account and that recent position telemetry is received.

## Example Configuration Commands

The exact configuration commands for the G01 vary by firmware and the CanTrack SMS/utility command set. Because manufacturer command syntax can change, verify and use the official CanTrack instructions or the SMS commands provided with your device. Plaspy requires the device to target d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP as supported.

If your G01 is configured via SMS commands by CanTrack syntax, those SMS commands will typically set server address, port, and transport. Preserve placeholders provided by CanTrack such as {{apn}} or other APN values if present in official commands and replace them with your SIM operator values.

Note: Consult the CanTrack G01 manual for the exact SMS command format or use the CanTrack configuration tool for firmware-specific guidance.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices, which simplifies device destination settings across varied tracker models.
- TCP versus UDP selection depends on the G01 firmware and your network; test both if behavior is unclear and rely on Plaspy automatic protocol detection.
- Firmware revisions and hardware variants can change SMS command syntax and configuration tools; always confirm commands with CanTrack documentation.
- If using SMS-based setup, be aware of SMS command confirmation replies from the device to validate changes.
- After configuration, allow several minutes for the device to register on the GPRS network and begin sending packets to Plaspy.

## Why Use Plaspy with This Configuration

Using the CanTrack G01 with Plaspy provides an efficient path to real-time location, basic telemetry, and event-driven alerts for personal safety and light asset tracking. The G01’s GPRS reporting and SMS fallback pair well with Plaspy’s ability to ingest telemetry, display live positions, and trigger rules and notifications for operational monitoring.

To learn more about Plaspy and supported tracking workflows visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details may change over time, so verify the latest setup instructions and command syntax on the official CanTrack website https://www.cantrackgps.com/ before final deployment.
