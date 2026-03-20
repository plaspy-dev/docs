---
slug: /minifinder/atto_pro/configuration
id: atto_pro-configuration
sidebar_label: Configuration
title: MiniFinder - Atto Pro Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the MiniFinder Atto Pro showing Plaspy server settings and practical setup steps for real time tracking
keywords:
- MiniFinder Atto Pro configuration
- MiniFinder Atto Pro setup
- Atto Pro Plaspy configuration
- Plaspy GPS tracker setup
- Atto Pro server settings
- MiniFinder GPS tracker configuration
- Plaspy compatible devices
- Atto Pro SMS configuration
- GPS tracker platform setup
- animal tracker Plaspy integration
---

# MiniFinder - Atto Pro Configuration

This page provides the public configuration context for using the MiniFinder Atto Pro with the Plaspy platform. It focuses on the practical server settings and the manufacturer-visible steps required to point the Atto Pro at Plaspy so the device can send position and telemetry data for real time tracking, alerts and history in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available, this guide presents public SMS commands and workflow guidance you can use as a starting point; always verify exact command formats and firmware behavior against the official MiniFinder documentation.

## Configuration Overview

Configuring the Atto Pro for Plaspy prepares the device to communicate with Plaspy's central server and enables visibility of location and alerting in the platform. The public configuration process commonly includes setting the device timezone, configuring the cellular APN, and pointing the device's GPRS server to Plaspy.

- Set the device time zone so timestamps align with Plaspy reports.
- Configure the SIM operator APN so the tracker can establish a data connection.
- Point the device GPRS server to Plaspy using the shared server endpoint and port.
- Choose the transport mode (UDP or TCP) if the device requires an explicit selection.
- Validate connectivity by confirming the device is reporting into Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol when devices connect

## Typical Requirements Before Setup

- A powered Atto Pro with an active, inserted SIM card that supports GPRS data and SMS if you plan SMS configuration.  
- The mobile network must provide coverage at the device location for registration and GPRS.  
- The correct APN settings for the SIM operator (APN, optional username and password).  
- Access to the official MiniFinder configuration method such as SMS commands or vendor tools to make changes.  
- An active Plaspy account or administrator access so you can verify the device appears and reports in the platform.  
- Basic knowledge of whether your deployment should use UDP or TCP transport.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Atto Pro establishes a cellular data connection and sends GNSS positions and status updates to Plaspy's shared server endpoint and port. Plaspy then interprets the incoming protocol and makes device location, alerts and history available to users in the platform.

- The tracker sends position and telemetry packets to d.plaspy.com or to the IP address 54.85.159.138 on port 8888.  
- The device can use either UDP or TCP transport depending on how it is configured.  
- Plaspy automatically detects the tracker protocol and processes the incoming messages.  
- Reports and alerts from the Atto Pro become visible in Plaspy for monitoring, geofence handling and history review.

## Common Configuration Workflow

1. Access the official MiniFinder configuration method or software recommended for the Atto Pro, such as SMS command setup or a vendor configuration tool.  
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 as the device's GPRS server.  
3. Set the device port to 8888, remembering that Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP transport on the device if a transport selection is required.  
5. Apply or save the configuration and, if required by the device, restart or power cycle the Atto Pro.  
6. Validate that the device reports to Plaspy by checking your Plaspy account for incoming position updates and status messages.

## Example Configuration Commands

The Atto Pro can be configured by SMS. The following public SMS commands are provided in the manufacturer guidance and should be sent to the device in the order shown.

1. Set the time zone to UTC 0
```
tz+00
```

2. Set the operator APN
```
S1,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the optional APN username if required by the operator.
- {{apnp}} is the optional APN password if required by the operator.
- If your operator does not require username or password, send only S1,{{apn}}.

3. Set the GPRS server to Plaspy (IP and port)
```
IP1,54.85.159.138,8888
```
- This command sets the device to report to the Plaspy server IP and port shown above. If your configuration method accepts the domain instead of the IP, use d.plaspy.com where supported by the device interface.

Note: These commands are the public examples included in the device guidance. Exact SMS syntax and required parameters can vary by firmware revision. Some installers prefer vendor tools or a configuration portal rather than SMS.

## Configuration Notes

- Firmware variations: Command names and formats can change between firmware versions or hardware revisions; confirm exact syntax with MiniFinder documentation.  
- SMS versus tool: The Atto Pro supports SMS based configuration examples; some installers use a dedicated configuration application or vendor portal for bulk deployment.  
- APN placeholders: Keep {{apn}}, {{apnu}} and {{apnp}} as placeholders when preparing SMS commands; replace them with your operator values.  
- Transport choice: If your deployment requires UDP or TCP, select the appropriate transport on the device; Plaspy accepts either and automatically handles protocol detection.  
- Single port policy: Plaspy uses the same port 8888 for all supported devices, simplifying server configuration across models.

## Why Use Plaspy with This Configuration

Using the MiniFinder Atto Pro with Plaspy gives organizations and pet owners a straightforward way to centralize location, alerts and history in a single platform. The shared Plaspy server settings reduce per-device variability and Plaspy's automatic protocol detection helps when deploying multiple device types across a fleet or group of animals.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device specific commands, firmware notes and manufacturer installation guidance, verify your setup details on the MiniFinder website https://minifinder.se/.
