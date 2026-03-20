---
slug: /cantrack/gf10/configuration
id: gf10-configuration
sidebar_label: Configuration
title: CanTrack - GF10 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring CanTrack GF10 with Plaspy using shared server settings and practical configuration steps
keywords:
  - CanTrack GF10 configuration
  - GF10 setup Plaspy
  - CanTrack GF10 server configuration
  - GF10 GPS tracker configuration
  - Plaspy tracker integration
  - tracker platform setup
  - GPS tracker configuration guide
  - CanTrack tracker setup
  - vehicle tracking configuration
  - GF10 tracking software setup
---

# CanTrack - GF10 Configuration

This page describes the public configuration context for using the CanTrack GF10 finger tracker with Plaspy. It covers the practical server settings Plaspy requires and the common steps to prepare a GF10 so it can report location and event data to the Plaspy platform. Use this guide to verify you have the right values and workflow before performing device-side changes.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device sends data to the service. Manufacturer-side setup steps for the GF10 can vary by firmware, hardware revision, installation type, and the configuration tools the vendor provides, so always compare these public settings with the latest manufacturer documentation and your device's available configuration interface.

## Configuration Overview

This configuration process prepares the GF10 to send its reported positions, alerts, and status events to Plaspy so the device appears and updates correctly in the platform. The goal is to set the device to report to Plaspy's shared endpoint and validate that messages arrive and are interpreted by Plaspy's automatic protocol detection.

- Configure the GF10 so it reports to the Plaspy server endpoint and port.
- Choose UDP or TCP transport if the device configuration requires a transport type.
- Apply and save the device settings using the manufacturer tool, SMS commands, or mobile app.
- Restart or power-cycle the GF10 if required to activate the new server settings.
- Verify the device reports location, geofence events, and battery alerts in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP can be used on port 8888 depending on device options
- Plaspy behavior: the platform automatically detects the tracker protocol so the same port is used for all devices

These values are the public Plaspy settings that should be entered into the GF10 where the device accepts server configuration.

## Typical Requirements Before Setup

- Physical access to the GF10 or the ability to send configuration via the manufacturer app or SMS commands.
- A charged device and any required SIM card installed with active data and SMS capability if the device uses GSM for reporting.
- Access to the CanTrack GF10 configuration method provided by the vendor such as an app, SMS command set, or desktop tool.
- The device IMEI or unique identifier handy for adding the device to your Plaspy account or for troubleshooting.
- A Plaspy account or contact with your Plaspy administrator to confirm device activation and visibility in the platform.
- Basic verification tools such as the ability to monitor inbound packets or a device log if available.

## How This Tracker Connects to Plaspy

When configured, the GF10 reports position updates and device events to the shared Plaspy endpoint and port so Plaspy can process and display the data. Plaspy's automatic protocol detection inspects incoming messages and maps them to the correct protocol handler.

- The GF10 sends periodic position reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the device configuration option selected.
- Alerts such as geo-fence entry/exit, low battery, and tamper/vibration events are sent to the same Plaspy endpoint.
- Plaspy receives the messages and automatically detects the tracker protocol to parse data.
- Once parsed, the device becomes visible in Plaspy for monitoring, history playback, and alerting.

## Common Configuration Workflow

1. Access the official CanTrack GF10 configuration method provided by the manufacturer (app, SMS commands, or vendor tool).
2. Locate the server or platform settings section in the device configuration interface.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the target server.
4. Set the port to 8888 for the device to send data to Plaspy.
5. If the device requires a transport selection, choose UDP or TCP according to your environment or preference.
6. Apply or save the configuration and follow any on-screen or SMS-based confirmation steps.
7. Restart or power-cycle the GF10 if required by the manufacturer to activate the new settings.
8. Validate that the device reports to Plaspy and that location and event messages appear in the platform.

## Example Configuration Commands

The CanTrack GF10 supports configuration via manufacturer tools, mobile applications, and SMS commands depending on firmware and regional variants. Exact command sets are vendor specific and can change with firmware, so refer to the official CanTrack documentation for the precise SMS syntax and app workflow.

If your GF10 supports SMS configuration you will typically:
- Use the device's admin SMS password and a documented SMS command format to set server domain or IP.
- Send a confirmation or query command to verify the current server settings.

Because command formats and placeholders vary by firmware, consult the CanTrack GF10 manual for concrete examples of SMS strings and any required placeholders such as APN values.

## Configuration Notes

- Firmware differences and regional hardware variants can change the exact configuration steps or available options for the GF10.
- Choose UDP or TCP based on network reliability and the device's specific transport implementation; Plaspy accepts either on port 8888.
- Plaspy uses the same port across supported devices and relies on automatic protocol detection, so use the shared settings above unless instructed otherwise by CanTrack.
- Keep manufacturer documentation available during setup because SMS command formats, admin passwords, and app workflows may differ by firmware release.
- If you enter both a domain and an IP in device settings, the domain d.plaspy.com is the recommended value; use the IP 54.85.159.138 if DNS is not available.

## Why Use Plaspy with This Configuration

Configuring the CanTrack GF10 to report to Plaspy provides a straightforward path to real-time visibility and centralized monitoring. Organizations and users who need discreet, portable tracking with alerts such as geo-fence and low battery can benefit from routing GF10 reports into Plaspy where tracking, history, and notifications are consolidated.

To learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. For the latest device-specific instructions, firmware notes, and official command references for the CanTrack GF10, verify details on the manufacturer site https://www.cantrackgps.com/ as vendor documentation may change over time.
