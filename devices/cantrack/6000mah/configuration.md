---
slug: /cantrack/6000mah/configuration
id: 6000mah-configuration
sidebar_label: Configuration
title: CanTrack - 6000mAh Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack 6000mAh GPS tracker with Plaspy server settings and practical setup steps
keywords:
  - CanTrack 6000mAh configuration
  - CanTrack 6000mAh setup
  - CanTrack 6000mAh server configuration
  - CanTrack GF50 configuration
  - Plaspy tracker setup
  - Plaspy device configuration
  - GPS tracker configuration
  - magnetic asset tracker setup
  - asset GPS tracker configuration
  - fleet tracking configuration
---

# CanTrack - 6000mAh Configuration

This page documents the public configuration context for the CanTrack 6000mAh magnetic asset GPS tracker (GF50) when used with the Plaspy platform. It focuses on the shared server settings and practical setup steps that prepare the tracker to communicate with Plaspy for real-time tracking, alerts, and historical playback. Use this material to understand what to set on the device or via the manufacturer tools before onboarding into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools your vendor provides. The GF50 supports remote configuration via SMS commands and server settings such as APN and IP/port, so follow manufacturer guidance for device-specific command formats and any firmware notes.

## Configuration Overview

The configuration process ensures the GF50 reports location and event telemetry to Plaspy reliably. You will configure the device to point to the Plaspy server, confirm connectivity, and validate that the platform receives position updates and alarms.

- Set the device server endpoint and transport to point at Plaspy so telemetry is forwarded to the platform.
- Configure APN and cellular parameters when required so the tracker can establish a data connection.
- Validate device IMEI or identifier and confirm the device becomes visible in Plaspy after initial reporting.
- Test common events such as location updates, tamper or vibration alarms, and a low battery notification to ensure alerts flow into Plaspy.
- Save and, if required, restart the tracker or apply a factory reset only when instructed by the manufacturer documentation.

## Plaspy Server Settings

- Server domain d.plaspy.com as the canonical endpoint for device reporting
- Server IP 54.85.159.138 available as an alternate endpoint if a numeric host is required
- Port 8888 must be used for all devices connecting to Plaspy
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol so the platform will parse incoming telemetry without per device protocol selection

Note that Plaspy uses the same port for all supported devices and that either the domain d.plaspy.com or the server IP 54.85.159.138 with port 8888 may be required by different manufacturer tools.

## Typical Requirements Before Setup

- A charged and powered CanTrack GF50 unit with access to its IMEI or serial for registration
- An active cellular SIM card provisioned with a working data APN when using cellular telemetry
- Manufacturer configuration method such as SMS commands, desktop or mobile configuration tools, or an installer interface
- Access to Plaspy platform credentials or account to verify device visibility and reporting after configuration
- A basic test plan for validating location fix, alarms, and battery reporting after configuration
- Optional: knowledge of the device firmware version to reference manufacturer command differences

## How This Tracker Connects to Plaspy

In typical deployments the GF50 transmits GPS fixes, status updates and alarm events to the Plaspy server endpoint and port. Plaspy ingests these incoming messages, applies automatic protocol detection, and exposes the data via dashboards, alerts, and history playback.

- The tracker is configured to send telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be set to UDP or TCP depending on device options and network considerations
- Plaspy automatically detects the tracker protocol and decodes position and event messages
- Reported events such as anti-tamper alerts, geo-fence breaches, vibration alarms, and low-battery warnings appear in Plaspy with timestamp and location context
- Successful configuration results in immediate visibility of the device in the Plaspy platform for monitoring and historical analysis

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GF50, such as the SMS command set or the configuration tool provided by CanTrack or your supplier.
2. Enter the Plaspy server endpoint by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; pick the transport that matches your network and installer guidance.
5. Configure APN and any required cellular parameters so the tracker can create a data session when using cellular telemetry.
6. Apply or save the configuration in the manufacturer tool or send the required SMS command sequence to the tracker.
7. Restart the device if required by the manufacturer or configuration tool to ensure new server settings take effect.
8. Validate that the device reports to Plaspy by checking for the first position update and any test alarm events in your Plaspy account.

## Example Configuration Commands

The exact command format and syntax depend on the GF50 firmware and the manufacturer documentation. Many installers use SMS-based commands or the vendor configuration tool to set APN, server IP or domain, and the port. Because command sets vary across firmware releases and regional variants, consult the CanTrack GF50 manual for the precise SMS strings or tool actions.

Typical configuration tasks you will perform with commands or the manufacturer tool include:
- Setting the data APN
- Pointing the tracker to d.plaspy.com or 54.85.159.138
- Setting port 8888
- Selecting UDP or TCP if required
- Saving the settings and optionally restarting the device

If you need command examples, refer to the official CanTrack GF50 command list from the manufacturer documentation or your supplier. Those documents provide the exact SMS syntax and any placeholders used for APN values.

## Configuration Notes

- Firmware versions and hardware revisions may change the exact SMS command formats and tool menus; always confirm commands against the GF50 manual for your unit.
- SMS configuration is commonly supported but exact SMS syntax, response format, and available commands vary by region and firmware build.
- Choose UDP or TCP based on network reliability and installer guidance; UDP is often used for lower overhead while TCP may be preferred where delivery confirmation is important.
- Always verify APN settings with your SIM operator and preserve placeholders such as the APN, username and password if your configuration tool uses them.
- Avoid performing factory resets unless directed by CanTrack support or when troubleshooting a non responsive device

## Why Use Plaspy with This Configuration

Using the CanTrack 6000mAh GF50 with Plaspy provides a practical combination for long term asset protection, covert mounting, and remote monitoring. The shared Plaspy server settings simplify onboarding because the platform accepts device telemetry on a single well-known endpoint and port while automatically detecting the incoming protocol for decoding and processing.

To learn more about how Plaspy can ingest and display GF50 telemetry visit https://www.plaspy.com. For the most current device specific commands, firmware notes and technical manuals, verify setup details with the manufacturer at https://www.cantrackgps.com/ as specifications and configuration methods may change over time.
