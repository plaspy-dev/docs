---
slug: /castel/pt_720/configuration
id: pt_720-configuration
sidebar_label: Configuration
title: Castel - PT-720 Configuration
sidebar_class_name: menu_item_tracker
description: How to configure Castel PT-720 GPS watch to report to Plaspy using public server settings
keywords:
  - Castel PT-720
  - PT-720 configuration
  - Castel GPS tracker setup
  - PT-720 Plaspy setup
  - Plaspy tracker configuration
  - Castel device configuration
  - GPS watch setup
  - PT-720 server configuration
  - tracking platform setup
  - child GPS tracker setup
---

# Castel - PT-720 Configuration

This page describes the public configuration context for using the Castel PT-720 kids GPS tracker watch with the Plaspy platform. It consolidates the practical server settings and SMS-based commands that are publicly available for configuring the device to report location and status to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The PT-720 supports SMS configuration as shown in the public commands below and uses a nano SIM for cellular positioning and alerts.

## Configuration Overview

The configuration process prepares the PT-720 to communicate with Plaspy by setting the device GPRS/APN and server endpoint and then validating connectivity. For this model, the manufacturer provides SMS-based commands to set APN and the Plaspy server IP and port. Use the device ID derived secret key when sending SMS instructions.

- Set the device APN and GPRS credentials so the tracker can connect over cellular data
- Point the device to the Plaspy server endpoint so the platform receives telemetry
- Choose UDP or TCP transport on port 8888 if the device requires a transport choice
- Verify settings and connectivity so the device appears in Plaspy and reports location and alerts

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the PT-720:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 (Plaspy uses the same port for all supported devices)
- Transport support: UDP or TCP (configure the transport if the device requires a selection)
- Plaspy automatically detects the tracker protocol for incoming device connections

## Typical Requirements Before Setup

- A charged PT-720 device with a working nano SIM card that has data enabled
- Ability to send and receive SMS messages to the device phone number for SMS based configuration
- The device ID so you can derive the device SMS secret key (manufacturer uses the last 6 ASCII characters of the device ID as the default secret)
- Known APN settings for the SIM operator (APN, username, password) to configure GPRS
- Access to the official Castel configuration method or user guide for the PT-720 in case manufacturer tools or firmware variants differ
- A Plaspy account or platform access to validate that the device appears and reports after configuration

## How This Tracker Connects to Plaspy

When configured, the PT-720 reports location and events to the shared Plaspy server endpoint and port. Plaspy receives those inbound reports and associates them with a device record so location and alerts are available in the platform.

- The device is configured to send GPRS data to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- All devices send to port 8888 on Plaspy, simplifying server-side configuration
- Plaspy accepts UDP or TCP transport and will automatically detect the tracker protocol
- Event alerts such as SOS or movement are forwarded to Plaspy when the device sends telemetry
- After successful configuration the device should appear and update its position in the Plaspy platform

## Common Configuration Workflow

1. Access the official Castel PT-720 configuration method or documentation to confirm the SMS command format for your firmware.
2. Identify the device ID and derive the default SMS secret key (the last 6 ASCII characters of the device ID) for sending commands.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration.
4. Set the port to 8888, which Plaspy uses for all supported devices.
5. Choose UDP or TCP transport if the tracker requires an explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and that location and alerts are visible in the platform.

## Example Configuration Commands

The PT-720 supports SMS-based configuration using a secret key. The manufacturer public commands show how to set the APN and server IP and how to check the GPRS settings. The default secret key for SMS instructions is the last 6 ASCII characters of the device ID.

- Set APN settings and Plaspy server IP and port
- Check current GPRS settings

Use these SMS command templates, replacing placeholders as described below:

- APN and server set command
```text
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Verify current GPRS settings
```text
*{{SecretKey}}#get gprs#*
```

Placeholders explained:
- {{SecretKey}} — the device SMS password, by default the last 6 ASCII characters of the device ID
- [apn] — the cellular operator APN string
- [apnu] — the APN username if required by the operator
- [apnp] — the APN password if required by the operator

Send these SMS messages to the PT-720 device phone number. If your device or firmware requires selecting UDP or TCP explicitly, use the manufacturer method to set transport in addition to the server and port parameters.

## Configuration Notes

- The PT-720 supports SMS based configuration in the public commands shown; keep the SMS secret key secure and change it if firmware allows.
- APN values vary by cellular operator and market; verify exact APN, username, and password with your SIM provider before sending commands.
- Some firmware versions or hardware revisions can change SMS command syntax or behavior; always check the official Castel documentation for your device batch.
- Choose UDP or TCP according to the device options and network reliability; Plaspy accepts both and will automatically detect the tracker protocol on our inbound port.
- Remember that Plaspy uses the same port 8888 for all supported devices to simplify server configuration.

## Why Use Plaspy with This Configuration

Using the PT-720 with Plaspy gives organizations and families a consistent platform for visibility and operational monitoring. By pointing the PT-720 to Plaspy's shared server endpoint and port, devices can report location and alerts into the same platform where tracking, geofencing, and historical route features are available.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest PT-720 setup information on the Castel website at http://www.castelecom.com/ before deploying devices.
