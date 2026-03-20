---
slug: /flextrack/lommy_power/configuration
id: lommy_power-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Power Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Flextrack Lommy Power GPS tracker configuration with Plaspy including server settings and practical integration steps
keywords:
  - Flextrack Lommy Power configuration
  - Flextrack Lommy Power setup
  - Lommy Power Plaspy integration
  - Lommy Power server configuration
  - Flextrack GPS tracker configuration
  - Lommy Power GPS setup
  - Plaspy tracker configuration
  - fleet tracking Lommy Power
  - equipment tracking Lommy Power
  - Lommy Power installation guide
---

# Flextrack - Lommy Power Configuration

This page documents the public configuration context for using the Flextrack Lommy Power GPS tracker with Plaspy. It describes the shared Plaspy server settings you must apply on the device or via the manufacturer tool, and explains the practical steps to bring Lommy Power online in Plaspy for real time location and telemetry. Use this guide alongside the official Lommy Power documentation to ensure device specific steps match your firmware and installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so configuration focuses mainly on pointing Lommy Power at the correct Plaspy endpoint and transport. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and Flextrack configuration tools, so always confirm device specific commands and procedures with Flextrack documentation.

## Configuration Overview

This configuration process prepares Lommy Power to send GNSS position and telemetry to Plaspy so the device becomes visible in the platform and delivers operational data for tracking, alerts, and reporting.

- Point the device to the Plaspy ingestion endpoint so telemetry flows to your Plaspy account.
- Select a compatible transport and confirm the device uses Plaspy port 8888.
- Verify cellular connectivity and that the SIM has an active data plan if using LTE or 2G.
- Apply or save the manufacturer configuration and restart the unit if required to activate changes.
- Confirm successful reporting to Plaspy so location, ignition, motion, and operating hours appear in the platform.

## Plaspy Server Settings

When configuring Lommy Power for Plaspy, use these public Plaspy server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the Lommy Power unit is installed and receiving continuous power within the supported 5 to 40 V range.
- Have a SIM card with an active data plan if using LTE or 2G cellular connectivity, and confirm the network coverage at the installation site.
- Access to Flextrack official configuration method or software used for Lommy Power such as the manufacturer's provisioning tool or SMS command list.
- A Plaspy account or a method to confirm device visibility in your Plaspy platform once the device reports.
- Confirm the device firmware version and any vendor notes that affect configuration fields or command syntax.

## How This Tracker Connects to Plaspy

Lommy Power sends GNSS and telemetry packets over cellular (LTE/2G) to Plaspy's ingestion endpoint so the platform can present live maps, events, and historical reports. The tracker can be configured to use UDP or TCP transport and must be directed to the shared Plaspy server and port for automatic protocol handling.

- The device reports GNSS positions and telemetry to d.plaspy.com on port 8888.
- Plaspy aggregates ignition, motion, and operating-hour data along with location for visualization and rules processing.
- Packet transport may be UDP or TCP depending on the device configuration; Plaspy will detect the protocol used.
- After correct configuration the device becomes visible in Plaspy and begins reporting according to its reporting logic.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software for Lommy Power as provided by the manufacturer.
2. Confirm power and cellular readiness, then enter the Plaspy endpoint by specifying either d.plaspy.com or 54.85.159.138.
3. Set the destination port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Apply or save the configuration in the manufacturer tool or via SMS commands as appropriate.
6. Restart the Lommy Power device if the manufacturer instructions indicate a reboot is required to apply the settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for initial position and telemetry messages.

## Example Configuration Commands

The exact commands and syntax to configure Lommy Power depend on Flextrack firmware and the provisioning tool they provide. Lommy Power commonly supports configuration through the manufacturer software or SMS command strings; check Flextrack documentation for the precise command set for your firmware. If your installer uses SMS commands, you will typically send configuration strings from an authorised phone number and then verify via the device response.

If you have specific command strings from Flextrack, use the manufacturer instructions to apply them in the order recommended and retain any placeholders such as {{apn}} or {{apnu}} exactly as provided. Placeholders represent values you must replace with your cellular operator settings or credentials.

## Configuration Notes

- Firmware differences can change command syntax and available configuration fields; always confirm firmware release notes before applying commands.
- SMS based configuration may be available as an alternative to manufacturer PC tools; use SMS only when documented for your firmware.
- Choose UDP for lower overhead when supported by your network, or TCP when a reliable connection handshake is required by your deployment; Plaspy will detect either protocol.
- Installer best practice is to validate reporting on Plaspy after configuration and to retain a record of any commands used for future troubleshooting.
- Market variants or hardware revisions may alter supported bands or default behaviors; verify hardware markings and Flextrack release information.

## Why Use Plaspy with This Configuration

Using Lommy Power with Plaspy provides a practical solution for continuous equipment and heavy machinery tracking where wired power, rugged hardware, and multi-constellation GNSS are required. Pointing the device to the shared Plaspy endpoint and port simplifies integration, while Plaspy handles protocol detection and data normalization so telemetry is ready for maps, alerts, geofencing, and utilization reports.

To learn more about Plaspy and how it works with devices like Lommy Power visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer setup guidance verify details on the official Flextrack site https://flextrack.dk. Manufacturer specifications and setup methods can change over time so always confirm current instructions with Flextrack documentation.
