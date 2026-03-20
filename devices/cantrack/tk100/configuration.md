---
slug: /cantrack/tk100/configuration
id: tk100-configuration
sidebar_label: Configuration
title: CanTrack - TK100 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for CanTrack TK100 tracker configuration and Plaspy compatibility with server settings and practical setup steps
keywords:
  - CanTrack TK100 configuration
  - CanTrack TK100 setup
  - CanTrack TK100 Plaspy
  - TK100 server configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracker configuration
  - TK100 GPRS setup
  - TK100 SMS configuration
  - Plaspy tracker integration
---

# CanTrack - TK100 Configuration

This page describes the public configuration context for using the CanTrack TK100 with the Plaspy fleet platform. It summarizes the shared server settings Plaspy expects, what to check before setup, and the practical steps commonly used to point a TK100 tracker at Plaspy for real time reporting and event visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware release, hardware revision, installation type, and vendor configuration tools. Use the guidance here for Plaspy-specific values and workflow; refer to the official CanTrack documentation for device specific commands and firmware details.

## Configuration Overview

Preparing a TK100 for Plaspy integration focuses on configuring the tracker to report to Plaspy’s shared server endpoint and validating that the device successfully sends location and event data. The goal is to make the tracker visible in Plaspy dashboards and ensure reliable telemetry and alert delivery.

- Configure the TK100 to send GPRS or SMS reports to the Plaspy server endpoint using the shared transport settings.
- Verify the device has a functional SIM with data and SMS if required for the chosen transport.
- Confirm server domain and port are applied and saved on the device so Plaspy can receive telemetry.
- Validate connection and reporting by checking device events arrive in Plaspy after applying configuration.
- Ensure any manufacturer or installer settings such as APN or SMS command formatting are correct for your carrier and firmware.

## Plaspy Server Settings

- Server domain d.plaspy.com must be set as the destination for device reporting when using domain mode.
- Server IP 54.85.159.138 can be used as an alternative endpoint when an IP is required by the configuration tool.
- Port 8888 is the Plaspy receiving port and must be configured on the tracker.
- Transport support for UDP or TCP is available; choose the transport required by your device if a selection is needed.
- Plaspy automatically detects the tracker protocol so devices using the same port can be ingested without extra protocol selection on the platform.
- Note that all devices in Plaspy use the same port so 8888 is consistent across supported tracker models.

## Typical Requirements Before Setup

- A working CanTrack TK100 physically installed or powered for configuration.
- A compatible SIM card with active data and SMS service if using GPRS or SMS reporting.
- Access to the official manufacturer configuration method whether SMS commands, USB/serial tool, or vendor configuration software.
- Knowledge of the carrier APN and any required APN credentials to enable GPRS on the device.
- GSM network coverage at the installation site and the ability to receive and send SMS for verification if needed.
- Access to your Plaspy account or fleet administrator workspace to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured, the TK100 sends position and event data to the Plaspy shared server endpoint and port so operators can view live location, events, and history in the platform. The tracker can use GPRS TCP/IP for continuous reporting and may use SMS for alerts or remote commands depending on your configuration.

- The TK100 is configured to report to d.plaspy.com or 54.85.159.138 and to use port 8888 for telemetry.
- GPRS TCP/IP is commonly used for continuous location updates while SMS can be used for alarm or fallback reporting.
- Events such as ignition status, overspeed, geo-fence triggers, SOS, and power-cut alerts are sent to Plaspy for notification and logging.
- Plaspy detects the tracker protocol automatically so once data reaches the shared server and port it is associated with the correct device type.
- Successful connection enables live map visibility, historical playback, and alert rules within Plaspy.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by the manufacturer or installer.
2. Ensure the TK100 has a working SIM with data enabled and that the APN is configured correctly for your carrier.
3. Enter the Plaspy server information using either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the destination port to 8888 which is used by all devices supported by Plaspy.
5. If the TK100 requires a transport selection choose UDP or TCP based on device options and network considerations.
6. Apply or save the configuration and, if applicable, reboot or power cycle the device to activate settings.
7. Validate that the device reports to Plaspy by checking for incoming data and events in your Plaspy fleet workspace.

## Example Configuration Commands

The CanTrack TK100 supports configuration via manufacturer tools and SMS commands; exact command syntax can vary by firmware and the official user manual. Plaspy requires the device be pointed to d.plaspy.com or 54.85.159.138 and use port 8888. Because manufacturer command sets are subject to firmware variations this page does not list device specific SMS strings; consult the official CanTrack manual or your vendor for the precise SMS command format if you intend to configure the device by SMS.

## Configuration Notes

- Firmware differences may change command syntax and available options. Confirm firmware version and consult the CanTrack manual for version specific commands.
- Choose TCP or UDP according to device support and network reliability. Plaspy accepts either but behavior such as session handling can vary by transport.
- Ensure carrier APN and credentials are correct before testing GPRS connectivity to Plaspy.
- SMS based configuration and reporting remain an option for alarm reporting or remote commands where GPRS is unreliable.
- Because Plaspy uses the same port for all devices and automatic protocol detection, consistent server and port configuration helps simplify fleet onboarding.

## Why Use Plaspy with This Configuration

Using the CanTrack TK100 with Plaspy provides centralized visibility for vehicle location, ignition state, alarms, and historical telemetry. For fleet operators and service providers, configuring the TK100 to report to Plaspy’s shared server endpoint quickly brings vehicles into an operational dashboard for dispatch, alerts, and analysis without complex per-device server management.

Learn more about Plaspy and how it integrates with trackers like the TK100 at https://www.plaspy.com. For the latest device specific setup instructions, SMS command lists, and firmware details consult the manufacturer documentation at https://www.cantrackgps.com/ to verify current configuration methods and command syntax.
