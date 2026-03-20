---
slug: /ulbotech/t361/configuration
id: t361-configuration
sidebar_label: Configuration
title: Ulbotech - T361 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Ulbotech T361 OBD II tracker to Plaspy using shared server settings
keywords:
  - Ulbotech T361 configuration
  - Ulbotech T361 setup
  - Ulbotech T361 server configuration
  - Ulbotech T361 Plaspy
  - Ulbotech T361 GPS tracker configuration
  - Plaspy tracker setup
  - OBD II tracker configuration
  - vehicle tracking Ulbotech T361
  - T361 GPS platform setup
  - Ulbotech T361 firmware update
---

# Ulbotech - T361 Configuration

This page covers the public configuration context for using the Ulbotech T361 with the Plaspy platform. It explains the shared server settings that Plaspy requires, practical setup considerations for OBD II deployments, and what to confirm on the device and during installation so the T361 can deliver location and vehicle telemetry into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at ingest, but exact manufacturer-side setup steps can vary with firmware revision, hardware revision, installation type, and vendor configuration tools. Use the guidance here together with Ulbotech documentation and the device configuration method provided by your vendor or firmware tool.

## Configuration Overview

Configuring the T361 for Plaspy prepares the device to report GPS fixes, OBD and CAN telemetry, and event data to the centralized Plaspy ingestion endpoint. The process ensures the tracker points to Plaspy, uses the correct transport, and is validated so devices appear in the Plaspy fleet and begin sending telemetry.

- Configure the tracker to point to the Plaspy server endpoint so location and OBD telemetry are routed to Plaspy.
- Select the correct transport type (UDP or TCP) on the device if required by the manufacturer tool.
- Set the device to use port 8888 which Plaspy uses for all supported devices.
- Verify mobile data and APN settings on the device so GPRS connectivity is available for real time reporting.
- Apply configuration and confirm the device shows as active in Plaspy to validate telemetry and event reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be set to either)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port for plug and play installation and to confirm power and ignition signals.
- An active SIM with a mobile data plan and correct APN settings so the T361 can use GPRS for reporting.
- Access to the official Ulbotech configuration method or vendor tool such as the device configuration software or micro USB interface described by Ulbotech.
- A clear understanding of the vehicle installation environment and any required permissions to connect to ECU data via OBD II or J1939.
- A test plan to validate that the device appears in Plaspy and reports location and OBD telemetry after configuration.

## How This Tracker Connects to Plaspy

When configured, the T361 sends its GPS and vehicle telemetry streams over GPRS to the Plaspy server endpoint. The device is pointed at d.plaspy.com (or the provided server IP) and port 8888; Plaspy listens on that shared port and automatically detects the device protocol so telemetry is parsed into the platform.

- The tracker establishes a GPRS data connection and opens a connection to d.plaspy.com or 54.85.159.138 on port 8888.
- Depending on device settings, transport may be UDP or TCP; Plaspy accepts both and detects the protocol automatically.
- Location updates, OBD II PIDs, and event messages are transmitted to Plaspy for real time dashboards and historical playback.
- The shared Plaspy port simplifies provisioning because the same port is used across supported devices.
- Plaspy’s automatic protocol detection allows the platform to interpret telemetry without manual protocol selection on the server side.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or vendor tool for the T361 (manufacturer software, micro USB interface, or approved configuration channel).
2. In the device server settings enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the destination host.
3. Set the device to use port 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; either is supported by Plaspy and will be auto detected.
5. Configure or confirm APN and mobile data parameters so the device can connect over GPRS.
6. Apply or save the configuration and follow any device prompts to commit settings.
7. Restart or power cycle the T361 if required by the manufacturer to activate the new network settings.
8. Validate that the device reports to Plaspy by checking device presence and telemetry ingestion in the Plaspy platform.

## Example Configuration Commands

The T361 may be configured using Ulbotech tools, a micro USB service interface, or the configuration channel provided by your installer. Exact command formats and the available parameters vary by firmware and vendor tool, so specific SMS or serial command examples are not provided here. When configuring, ensure the device is pointed to d.plaspy.com or 54.85.159.138 and set to port 8888 using UDP or TCP as required. Plaspy will automatically detect the tracker protocol when telemetry arrives.

If you have manufacturer provided commands or an installation guide from Ulbotech, follow those public commands and replace the destination host with d.plaspy.com or the IP 54.85.159.138 and use port 8888. If the manufacturer supplies placeholders such as [apn] keep them and provide the correct APN values from your mobile operator.

## Configuration Notes

- Firmware differences can change the available configuration options and the exact menu or command structure; always reference the firmware version you are configuring.
- Choose UDP or TCP based on your installation needs and any specific vendor guidance; Plaspy supports both and will detect the protocol automatically.
- Confirm APN and mobile operator settings before deployment to avoid connectivity gaps during rollouts.
- Use the manufacturer or vendor configuration tool to apply and save settings rather than attempting unsupported commands.
- When testing, validate both location fixes and OBD telemetry in Plaspy so you confirm the device sends the expected data streams.

## Why Use Plaspy with This Configuration

Using the Ulbotech T361 with Plaspy delivers a unified flow of GPS location and ECU-level telemetry into a single platform, which is useful for fleet operators, rental fleets, and service providers who need vehicle visibility and actionable alerts. The shared Plaspy server settings reduce provisioning complexity because all supported devices report on the same port and Plaspy automatically detects the incoming protocol.

To learn more about Plaspy and how this configuration supports fleet tracking and telematics, visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes and installation instructions verify information on the manufacturer site http://www.ulbotech.com/ since vendor procedures and firmware behavior can change over time.
