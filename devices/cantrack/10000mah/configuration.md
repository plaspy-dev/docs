---
slug: /cantrack/10000mah/configuration
id: 10000mah-configuration
sidebar_label: Configuration
title: CanTrack - 10000mAh Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack 10000mAh integration with Plaspy using shared server settings and practical setup steps
keywords:
- CanTrack tracker configuration
- CanTrack 10000mAh setup
- CanTrack server configuration
- Plaspy device setup
- GPS tracker integration
- GF60 series configuration
- magnetic asset tracker setup
- fleet tracking configuration
- stolen vehicle recovery tracker
- GPS platform integration
---

# CanTrack - 10000mAh Configuration

This page documents the public configuration context for using the CanTrack 10000mAh magnetic asset tracker (GF60 series) with the Plaspy platform. It focuses on the shared server settings and the practical steps you will commonly apply when pointing the device to Plaspy so the tracker can report locations and alarms into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup procedures can vary by firmware version, hardware revision, installation type, and vendor configuration tools. This guide outlines the Plaspy-specific values you will enter on the device and describes a practical workflow for configuring and validating connectivity.

## Configuration Overview

This section explains the main purpose of configuring the CanTrack 10000mAh for use with Plaspy and what the process achieves in practical terms.

Configuring the tracker for Plaspy prepares the device to upload position and status messages to the platform so you can see real‑time location, alarms, and historical routes. The configuration typically involves setting the network APN and pointing the TCP/IP uploader to Plaspy’s shared server endpoint and port, then validating that messages arrive at the platform.

- Point the device to Plaspy server settings so telemetry is routed into the Plaspy platform
- Configure the device APN and any required GPRS/4G parameters for mobile data uploads
- Select transport (UDP or TCP) and set the device port to the shared Plaspy port
- Save and apply changes, then verify the device appears and reports in Plaspy
- Use SMS or manufacturer tools for field updates when network access or installer tools are limited

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the CanTrack 10000mAh. These are the shared values Plaspy requires for device uploads.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once uploads reach the server

Note: All devices in Plaspy use the same port and Plaspy will perform protocol detection automatically after the device starts sending data.

## Typical Requirements Before Setup

Before you begin configuration, confirm the following prerequisites to reduce setup time and ensure reliable connectivity.

- Device is powered and has sufficient battery for configuration and initial uploads
- A working mobile data connection and correct APN for the installed SIM card are available
- Access to the official CanTrack configuration method or software for the GF60 series
- A way to send SMS commands if using SMS configuration in the field
- Access to Plaspy credentials or account to verify device visibility after setup
- Basic knowledge of whether the device firmware requires selecting UDP or TCP transport

## How This Tracker Connects to Plaspy

The CanTrack GF60 series sends position and status data over cellular TCP/IP to the configured server. When pointed at the Plaspy endpoint, uploads are received by Plaspy and processed for display, playback, and alarm handling.

- Device uploads telemetry to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138
- The device uses port 8888 for uploads and can operate over UDP or TCP as required
- Plaspy automatically detects the tracker protocol from the incoming data stream
- Uploaded messages become visible in Plaspy as live location points, alarms, and status reports
- If network access is limited, SMS configuration can be used to set APN and server parameters

## Common Configuration Workflow

The following ordered steps reflect a typical public setup flow for integrating a CanTrack 10000mAh tracker with Plaspy.

1. Access the official manufacturer configuration method or software for the GF60 series (web tool, desktop app, or SMS command list provided by the vendor).
2. Configure the device APN to match the mobile operator used by the tracker so it can establish a data connection.
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP as the transport type if the device requires a transport selection; either is supported by Plaspy.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to activate new settings.
7. Validate that the device reports to Plaspy by checking device status and live points in the Plaspy platform.

## Example Configuration Commands

The CanTrack GF60 series supports SMS command configuration and manufacturer tools for APN and server settings, however exact SMS strings and desktop tool commands are manufacturer supplied and can vary by firmware. Because the specific command syntax is provided by CanTrack and may differ across firmware versions, consult the official CanTrack command list or configuration tool for precise commands.

If you prefer SMS configuration in the field, refer to CanTrack documentation for the exact SMS templates to set APN, server IP/domain, port, and transport. The steps above show where those values must be entered: server d.plaspy.com or 54.85.159.138 and port 8888, with UDP or TCP selected if required.

## Configuration Notes

- Firmware differences: command syntax and menu labels can vary between firmware revisions; always check the GF60 series documentation for your device revision.
- Transport choice: Plaspy accepts both UDP and TCP on port 8888; choose based on vendor recommendation or network stability considerations.
- APN configuration: use the mobile operator APN for the SIM in the device; some installers set this via SMS while others use the manufacturer tool.
- SMS vs software: SMS configuration is useful for field adjustments, while the manufacturer software often provides bulk or batch configuration options.
- Manufacturer reference: when in doubt, consult the CanTrack GF60 series manual and command list for authoritative, device‑specific instructions.

## Why Use Plaspy with This Configuration

Using the CanTrack 10000mAh tracker with Plaspy provides a practical way to gain real‑time visibility and historical tracking for assets that require rugged, magnetic mounting and long standby capability. Pointing the device to Plaspy with the shared server settings enables immediate integration of location updates, alarms, and telemetry into Plaspy workflows for fleet oversight, stolen vehicle recovery, and container monitoring.

To learn more about Plaspy and how the platform handles device data, visit https://www.plaspy.com. For device specific commands, firmware details, and the latest GF60 series documentation, verify current information on the manufacturer website https://www.cantrackgps.com/ as setup methods and firmware behavior can change over time.
