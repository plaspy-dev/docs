---
slug: /falcom/steppiii_ux/configuration
id: steppiii_ux-configuration
sidebar_label: Configuration
title: Falcom - STEPPIII-UX Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Falcom STEPPIII UX and required Plaspy server settings for platform integration
keywords:
  - Falcom STEPPIII UX configuration
  - Falcom tracker setup
  - Plaspy compatibility guide
  - STEPPIII UX server configuration
  - GPS tracker integration Plaspy
  - vehicle tracking setup Falcom
  - Falcom configuration steps
  - tracking platform configuration
  - fleet management tracker setup
  - STEPPIII UX setup
---

# Falcom - STEPPIII-UX Configuration

This page documents the public configuration context for using the Falcom STEPPIII-UX tracker with the Plaspy platform. It explains the shared Plaspy server settings you must apply on the device or via Falcom configuration tools so the tracker can report to Plaspy for AVL, fleet management, vehicle security, and recovery use cases. The guidance here focuses on publicly available setup requirements and practical validation steps for integration with Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects to the Plaspy endpoint. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so always compare these public instructions with the latest Falcom documentation and your device firmware behavior.

## Configuration Overview

Preparing the STEPPIII-UX to work with Plaspy is primarily about directing the device to the Plaspy server, confirming transport settings, and validating that the device can reach and be recognized by the platform. The following bullets summarize the practical goals of the configuration process.

- Configure the device to send tracking and event data to the Plaspy server endpoint.
- Choose the appropriate transport protocol and port so data is accepted by Plaspy.
- Validate network connectivity and that the device appears in Plaspy after setup.
- Enable necessary reporting modes on the tracker so location and alerts are forwarded.
- Confirm any manufacturer specific settings such as APN or SMS commands if required.

## Plaspy Server Settings

When configuring the STEPPIII-UX for Plaspy, use the following public Plaspy server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and Plaspy will detect the protocol automatically, so apply these values consistently during device configuration.

## Typical Requirements Before Setup

- Ensure the tracker has a reliable power source and is powered on during configuration.
- Have device access to the official Falcom configuration method or software used by your vendor or installer.
- If the tracker uses cellular messaging to reach servers, ensure a valid SIM card and data or SMS service are active.
- Know the Plaspy server settings d.plaspy.com and 54.85.159.138 and the required port 8888 before starting.
- Confirm any required APN or credential values from your mobile operator or installer if the device requires them.
- Prepare for a device restart after configuration if the Falcom procedure requests it.

## How This Tracker Connects to Plaspy

The STEPPIII-UX can be configured to send its location and event data to a remote server. For Plaspy integration the device is pointed to the shared Plaspy endpoint and port so the platform receives telemetry and status updates. Plaspy will detect the tracker protocol automatically so most configurations only need the server address, port, and transport selection.

- The device sends tracking and event messages to the Plaspy server endpoint d.plaspy.com or directly to 54.85.159.138.
- Communications are sent on port 8888 using either UDP or TCP as configured on the tracker.
- Plaspy receives and parses incoming messages and maps them to the connected vehicle record.
- Once configured and online, the tracker becomes visible in Plaspy for monitoring, alerts, and historical logging.
- Device-originated alerts or status reports are forwarded to Plaspy where rules and notifications can be applied.

## Common Configuration Workflow

1. Access the official Falcom configuration method or software provided by the manufacturer or installer. This may be a PC tool, web interface, or SMS/config file method depending on the device and firmware.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the server host field.
3. Set the server port to 8888 as required by Plaspy.
4. If the device requires selection of transport, choose UDP or TCP depending on your preference or installer guidance.
5. Apply or save the configuration in the Falcom tool and follow any device specific prompts to upload settings.
6. Restart the tracker if the manufacturer instructions indicate a reboot is required to activate changes.
7. Validate that the device reports to Plaspy and appears online in the platform; confirm telemetry and event messages are received.

## Example Configuration Commands

The exact configuration commands and method vary by Falcom configuration software and device firmware. Falcom devices are commonly configured via a manufacturer tool or via SMS style commands, and the form of those commands is dependent on the device firmware. Because model specific commands are provided by Falcom and vendor tools, consult the official Falcom documentation or your installer for the precise command set for STEPPIII-UX.

If you use a Falcom tool that accepts command lines or SMS templates, the key public values you will provide are the Plaspy server host d.plaspy.com (or 54.85.159.138) and port 8888, and an explicit transport choice of UDP or TCP when required.

## Configuration Notes

- Firmware differences and hardware revisions may change the exact field names or menu locations in the Falcom tool. Refer to the firmware notes for your device serial.
- Choosing TCP or UDP can affect connection behavior under certain network conditions. Plaspy accepts both and automatically detects the incoming protocol.
- All Plaspy devices use the same port 8888; do not change the port when configuring the device for Plaspy.
- If your installer uses SMS commands for configuration, keep a copy of any placeholder fields such as APN or credentials and replace them with the correct values before sending.
- Always cross check the public settings here with the current Falcom configuration manual for STEPPIII-UX.

## Why Use Plaspy with This Configuration

Using the Falcom STEPPIII-UX with Plaspy provides a straightforward path to integrate a versatile tracking device into a single platform for visibility, monitoring, and operational oversight. By directing the device to Plaspy's shared server endpoint and port, organizations can centralize vehicle location, event alerts, and historical records for fleet management, security, and recovery workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and manufacturer instructions consult the official Falcom documentation at https://www.falcom.de. Manufacturer specifications and setup methods can change over time so verify current details with Falcom when preparing a production deployment.
