---
slug: /cantrack/g500l/configuration
id: g500l-configuration
sidebar_label: Configuration
title: CanTrack - G500L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack G500L showing Plaspy server settings and practical setup steps
keywords:
  - CanTrack G500L configuration
  - CanTrack G500L setup
  - CanTrack G500L server configuration
  - CanTrack GPS tracker configuration
  - G500L Plaspy setup
  - Plaspy tracker configuration
  - OBDII GPS tracker setup
  - vehicle tracking configuration
  - fleet GPS tracker setup
  - GPS tracker server settings
---

# CanTrack - G500L Configuration

This page covers the public configuration context for using the CanTrack G500L with Plaspy. It explains the shared server settings Plaspy expects, the practical steps to point a G500L to the Plaspy endpoint, and what you should confirm on the device and with your installer before attempting integration. The G500L is designed for fast plug and play OBD-II installation and is listed as Plaspy compatible out of the box.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. All devices in Plaspy use the same port, and the G500L may be configured to use either UDP or TCP on that port depending on the device configuration method or firmware option.

## Configuration Overview

The configuration process prepares the G500L to transmit location and OBD telemetry to Plaspy and to become visible in your Plaspy fleet dashboard. The goal is to point the device at the shared Plaspy endpoint, confirm transport and connectivity, and verify data ingestion in Plaspy.

- Configure the G500L to report to the Plaspy server endpoint so location and OBD telemetry flow to your account.
- Validate the device has an active cellular data connection and correct APN settings if required by the installer.
- Select the transport mode the device firmware supports, UDP or TCP, and set the Plaspy port.
- Save and apply configuration changes, then confirm the device appears and reports in Plaspy.
- Troubleshoot any connectivity or telemetry gaps by checking IMEI, firmware version, and vehicle power.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the G500L to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port for device installation and verification.
- An active SIM with a data plan installed in the device and correct APN configured if the tracker requires it.
- Access to the official CanTrack configuration method or software used to program the device (manufacturer app, SMS commands, or configuration tool).
- Device IMEI and serial number recorded for provisioning and verification in Plaspy.
- Power applied to the OBD port and a vehicle state that allows the tracker to initialize GNSS and cellular stacks.
- A Plaspy account and organizational access to view newly connected devices in your dashboard.

## How This Tracker Connects to Plaspy

When configured, the G500L transmits GNSS position and OBD telemetry over its cellular link to the shared Plaspy server endpoint and port. Plaspy ingests those packets and displays location, telemetry, and alerts in your fleet dashboard, while automatically handling protocol detection.

- The device is set to send packets to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device configuration; Plaspy accepts either on the shared port.
- Plaspy automatically detects the tracker protocol so no separate protocol selection in Plaspy is required.
- Position, OBD PIDs, DTCs, and event flags are forwarded to Plaspy for mapping, reporting, and alerting.
- The shared port approach simplifies provisioning because all supported devices use the same port and Plaspy handles protocol differences.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by the manufacturer or vendor.
2. Locate the server or reporting settings in the device configuration interface.
3. Enter d.plaspy.com or the IP 54.85.159.138 as the server address.
4. Set the port to 8888.
5. Choose UDP or TCP if the device requires a transport selection; the device may be configured using UDP or TCP on port 8888.
6. Apply or save the configuration and follow any on screen prompts to commit settings.
7. Restart or power cycle the device if required by the manufacturer to activate new server settings.
8. Validate that the device reports to Plaspy by checking device connectivity and telemetry in your Plaspy account.

## Example Configuration Commands

The exact command set or configuration tool for the G500L depends on the CanTrack firmware and vendor toolset. Manufacturers commonly provide one or more methods such as a configuration app, SMS command strings, or a desktop tool. Because model specific commands are provided by the manufacturer and may change with firmware, refer to CanTrack documentation or your vendor for the exact commands and syntax required to point the device to d.plaspy.com or 54.85.159.138 on port 8888.

If you have a set of SMS commands or a vendor tool from CanTrack, use those official commands to set the server and port and preserve any placeholders the manufacturer uses for APN, username, or password.

## Configuration Notes

- Firmware differences can change where server fields appear and whether transport must be selected; always confirm the firmware version before applying instructions.
- If the G500L supports SMS configuration, bring the device online briefly to verify settings because SMS-based changes may require a restart to take effect.
- Choosing UDP or TCP typically affects delivery semantics and retransmission behavior; select the transport recommended by your installer or CanTrack support.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, which simplifies server configuration on the device side.
- Verify APN and cellular provisioning before troubleshooting server connectivity to avoid false negatives when testing Plaspy reporting.

## Why Use Plaspy with This Configuration

Using the CanTrack G500L with Plaspy provides immediate vehicle visibility, OBD-level telemetry, and event reporting in a single platform. The plug and play nature of the G500L reduces installation time while Plaspy centralizes location, diagnostic codes, and alerts so fleet and operations teams can monitor vehicles, respond to faults, and analyze usage patterns.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer documentation verify details at the official CanTrack site https://www.cantrackgps.com/ since device setup methods and firmware behavior can change over time.
