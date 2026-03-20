---
slug: /cantrack/gf200ls/configuration
id: gf200ls-configuration
sidebar_label: Configuration
title: CanTrack - GF200LS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack GF200LS with Plaspy server settings and practical setup steps
keywords:
  - CanTrack GF200LS configuration
  - CanTrack GF200LS setup Plaspy
  - GF200LS server configuration
  - GF200LS GPS tracker setup
  - Plaspy tracker configuration
  - asset GPS tracker GF200LS
  - magnet mounted GPS tracker GF200LS
  - long standby GPS tracker setup
  - GF200LS APN configuration
  - GF200LS SMS configuration
---

# CanTrack - GF200LS Configuration

This page describes the public configuration context for using the CanTrack GF200LS with the Plaspy platform. It summarizes the practical server settings and the typical setup flow for sending location and event data from the GF200LS to Plaspy, using the device features described by the manufacturer such as long standby modes, magnet mounting, light sensor tamper alerts, and SMS/APN configuration options.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side configuration steps can vary by firmware revision, hardware batch, installation style, and vendor tools. Use the guidance here together with the GF200LS manufacturer documentation for the most reliable, device specific instructions.

## Configuration Overview

This configuration process prepares the GF200LS to report position and event data to Plaspy so assets become visible in Plaspy dashboards and mobile apps. The key action is telling the device to report to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) on port 8888 using either UDP or TCP so Plaspy can ingest data and automatically detect the device protocol.

- Set the device server to Plaspy using the shared Plaspy endpoint information.
- Configure network access such as APN or SIM settings so the GF200LS can reach Plaspy over GPRS or cellular IP.
- Choose an appropriate reporting mode to balance battery life and tracking needs, then save those settings to the device.
- Validate connectivity so the device appears in Plaspy and sends position and tamper events.
- Use SMS or the manufacturer configuration tool to update server, APN, and mode as needed.

## Plaspy Server Settings

- Server domain d.plaspy.com as the primary server host for Plaspy ingestion
- Server IP 54.85.159.138 as an alternate endpoint for direct IP configuration
- Port 8888 which is the common port Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol so the platform can accept reports without per device protocol registration

## Typical Requirements Before Setup

- A powered GF200LS with batteries installed and accessible for initial configuration
- A SIM card and active data plan or GSM connectivity appropriate for device cellular operation
- APN and, if required, APN username and password information from the mobile operator
- Access to the official CanTrack configuration method such as SMS commands or the vendor configuration tools
- Knowledge of the device admin password if SMS configuration requires it and the default is in the manufacturer documentation
- A secure mounting location and brief on-site testing to confirm GNSS fix and cellular connectivity

## How This Tracker Connects to Plaspy

The GF200LS sends its location and event reports to the Plaspy server endpoint and port so Plaspy can display live positions, historical tracks, and alerts. The device uses its cellular data link to open a TCP or UDP session toward the Plaspy server and then transmits position reports, tamper events, and status messages.

- Device reports are directed to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy receives position updates and maps them to the device record using automatic protocol detection
- Periodic or real time working modes control reporting frequency to balance battery life against update timeliness
- Tamper and status events such as light sensor alerts are sent as event messages to Plaspy
- After configuration and a working data link, Plaspy dashboards and notifications reflect device activity

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as SMS commands or vendor software as described in the GF200LS documentation.
2. Enter the Plaspy server host by setting d.plaspy.com or by entering the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 which is the shared Plaspy port used for all devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Configure the APN and any APN credentials required by your SIM so the device can open a GPRS/TCP IP link.
6. Apply or save the configuration and, if the device requires it, restart the device to apply network changes.
7. Validate connectivity by confirming the device appears in Plaspy and reports positions or status messages.

## Example Configuration Commands

The GF200LS supports SMS configuration commands and a default SMS admin password is documented by the manufacturer. Exact command syntax and available parameters vary by firmware and tool version. Because manufacturer command sets can change, consult the CanTrack GF200LS SMS command list or configuration manual for the precise messages to set server IP, domain, port, APN, and modes.

If you prefer using SMS for basic setup, the usual public steps are:
- Send the vendor documented SMS commands or use the vendor tool to set server host to d.plaspy.com or 54.85.159.138
- Set the port to 8888
- Configure APN settings
- Optionally restart the device or request a status report

Refer to the official GF200LS command guide from CanTrack for exact SMS syntax and placeholders such as APN, APN username, and APN password when needed.

## Configuration Notes

- Firmware and hardware revisions can change available command syntax and features; always check the GF200LS manual for firmware specific commands.
- Plaspy accepts both UDP and TCP on port 8888; choose TCP or UDP based on installer preference and device support.
- The Plaspy server settings use the same port for all devices and Plaspy auto-detects the tracker protocol to simplify onboarding.
- If using SMS based configuration, keep the device admin password from the manufacturer documentation available and confirm any default password values.
- Consider performing a short on-site test after installation to confirm GNSS fix, cellular registration, and that reports arrive in Plaspy.

## Why Use Plaspy with This Configuration

Using the GF200LS with Plaspy provides a practical solution for long term asset tracking where low maintenance and long standby life are priorities. Configuring the device to report to Plaspy gives fleet managers and asset custodians centralized visibility, event alerting for tamper conditions, and flexible reporting modes to match operational needs.

To learn more about Plaspy and how it handles device ingestion and fleet visibility, visit https://www.plaspy.com. For the latest GF200LS device specific commands, firmware notes, and detailed configuration instructions verify current information on the manufacturer site https://www.cantrackgps.com/. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so always confirm the latest guidance from CanTrack before wide deployment.
