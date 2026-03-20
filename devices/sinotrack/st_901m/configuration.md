---
slug: /sinotrack/st_901m/configuration
id: st_901m-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SinoTrack ST 901M with Plaspy using SMS and GPRS server settings
keywords:
  - SinoTrack ST-901M configuration
  - SinoTrack ST-901M setup
  - ST-901M server configuration
  - ST-901M GPS setup
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker SMS commands
  - GPRS server configuration
  - fleet tracking configuration
  - SinoTrack Plaspy integration
---

# SinoTrack - ST-901M Configuration

This page documents the public configuration context for using the SinoTrack ST-901M with Plaspy. It summarizes the practical steps and public SMS commands used to point an ST-901M at the Plaspy monitoring endpoint, plus guidance on prerequisites and validation. Use this guide to prepare the tracker for integration with Plaspy and to understand how the device reports telemetry that Plaspy can ingest.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. The ST-901M supports SMS based configuration and GPRS reporting, so the commands and workflow below reflect the public SMS commands commonly used to configure the tracker for use with Plaspy.

## Configuration Overview

The goal of the configuration process is to set the ST-901M to forward its GPRS reports to the Plaspy server, ensure the device has valid cellular connectivity, and verify that Plaspy receives position and event messages. For the ST-901M this is commonly done via SMS commands that set the APN, GPRS server, reporting intervals, and GPRS mode.

- Configure the device APN and GPRS server so the tracker can establish a data session with the mobile operator and Plaspy.
- Point the tracker at the Plaspy server endpoint so location and event data are forwarded in real time.
- Validate connectivity and telemetry using the RCONF verification command and by checking the device in Plaspy.
- Set appropriate reporting intervals for moving and stopped states to balance timeliness and data usage.
- Use the device ignition and alarm inputs to enable event reporting that Plaspy will display for monitoring and alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A functional SIM card with an active data plan and the correct APN details for your mobile operator.
- Access to the tracker for SMS based configuration or access to the vendor configuration tool that issues the same commands.
- Power and a hardwired installation as appropriate for vehicle use so the device can register on the network.
- The device IMEI and access to any installer or admin credentials required by the vendor to send SMS configuration commands.
- Confirmation of the APN, APN user, and APN password values for your operator to populate the [apn], [apnu], and [apnp] placeholders.
- Access to the official SinoTrack documentation or vendor support for firmware specific instructions if behavior differs from this guide.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the ST-901M uses the configured APN to establish a GPRS data connection and forwards GNSS position and event messages to the Plaspy server endpoint and port. Plaspy receives those messages and automatically detects the tracker protocol so devices appear in the platform without per device port changes.

- The tracker sends GNSS coordinates and timestamped telemetry to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- GPRS is the primary transport and SMS serves as a fallback or configuration channel.
- Device events such as ignition on off, overspeed alarms, and authorized number alerts are sent to Plaspy as event messages.
- Plaspy displays live position updates and event history for operational monitoring and reporting.
- Plaspy auto detects the tracker protocol so the same port is used for all supported devices.

## Common Configuration Workflow

1. Access the official SinoTrack configuration method, typically SMS commands or the vendor tool, and confirm the device IMEI and current firmware behavior.
2. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138 depending on the device command format.
3. Set the server port to 8888 as the device GPRS server port.
4. Choose UDP or TCP transport if the device requires a transport selection during configuration.
5. Send the necessary SMS commands to set APN, server IP or domain, and reporting intervals, then apply or save the configuration.
6. Restart or reboot the device if required by the manufacturer to apply network settings.
7. Validate that the device reports to Plaspy by using the RCONF verification command and confirming the device is visible in the platform.

## Example Configuration Commands

The ST-901M can be configured by SMS commands. The following public commands are provided in the manufacturer configuration content and are typically sent as separate SMS messages to the device IMEI number. Preserve the placeholders when you replace them with your operator values.

- Optional initial factory restore
  ```
  RESET
  ```
  Note: Use RESET only when you want to restore factory defaults or if instructed during initial provisioning.

- Set the time zone to UTC 0
  ```
  8960000E00
  ```

- Set the APN for the mobile operator
  ```
  8030000 [apn] [apnu] [apnp]
  ```
  Where:
  - [apn] is the operator APN string
  - [apnu] is the APN username if required by the operator (leave blank if not used)
  - [apnp] is the APN password if required by the operator (leave blank if not used)

- Configure the GPRS server to Plaspy using the Plaspy server IP and port
  ```
  8040000 54.85.159.138 8888
  ```
  This command points the tracker at Plaspy. You may use d.plaspy.com instead of the IP if your device accepts domain names.

- Set reporting interval when moving
  ```
  8050000 60
  ```
  (Example sets a 60 second update interval while moving)

- Set reporting interval when stopped
  ```
  8090000 60
  ```
  (Example sets a 60 second update interval while stopped)

- Switch the device to GPRS mode
  ```
  7100000
  ```

- Verify current settings
  ```
  RCONF
  ```
  The RCONF command returns the device configuration including the ID used by Plaspy for device identification.

## Configuration Notes

- The SMS command set and exact command syntax can vary with firmware version and vendor tool, so verify commands with the device documentation before wide deployment.
- Use the APN placeholders [apn], [apnu], and [apnp] to insert your operator values; leave username or password blank if the operator does not require them.
- The device supports configuring the server by IP or domain. If your firmware accepts domains you can use d.plaspy.com instead of the IP address.
- Choose UDP or TCP based on installer preference or firmware support; Plaspy accepts either on port 8888 and automatically detects the tracker protocol.
- SMS based configuration is useful when the device is installed in the field and there is no immediate console access, but ensure that the SIM has SMS ability and sufficient signal.

## Why Use Plaspy with This Configuration

Using the SinoTrack ST-901M with Plaspy gives fleet managers and vehicle owners a straightforward path to ingest live GPS positions and event telemetry into a single monitoring platform. The ST-901M’s SMS command based configuration and GPRS data reporting let you point devices at the shared Plaspy endpoint and port so devices begin reporting with minimal intermediary setup.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and official instructions on the manufacturer's site https://www.sinotrackgps.com/ . Manufacturer specifications and configuration methods can change over time so confirm the latest guidance before large scale deployments.
