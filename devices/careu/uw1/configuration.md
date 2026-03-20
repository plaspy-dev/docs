---
slug: /careu/uw1/configuration
id: uw1-configuration
sidebar_label: Configuration
title: CAREU - UW1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU UW1 GPS tracker setup and Plaspy compatibility using shared Plaspy server settings
keywords:
  - CAREU UW1 configuration
  - CAREU UW1 setup
  - UW1 Plaspy configuration
  - UW1 GPS tracker setup
  - CAREU tracker server settings
  - UW1 fleet tracking
  - Plaspy device configuration
  - CAREU UW1 integration
  - UW1 telemetry configuration
  - vehicle tracking UW1
---

# CAREU - UW1 Configuration

This page documents the public configuration context for using the CAREU UW1 GPS tracker with Plaspy. It focuses on the practical server settings and workflow required to report UW1 location and telemetry into the Plaspy platform, using the shared Plaspy endpoint and transport options that Plaspy supports.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side configuration steps for the UW1 can vary with firmware version, hardware revision, install type, and the vendor tools you use, so treat the process below as practical guidance rather than an exhaustive device manual.

## Configuration Overview

This configuration prepares the CAREU UW1 to communicate with Plaspy so the device appears in live maps, sends telemetry and alarm events, and uploads stored logs after network recovery.

- Set the device to report to the Plaspy server endpoint and confirm transport selection.
- Ensure the UW1 has an active cellular data connection and any required SIM provisioning.
- Save and apply manufacturer configuration changes and restart the device if necessary.
- Validate that the UW1 is reporting to Plaspy and that position, alarm, and sensor data appear in the platform.
- Verify log upload behavior following network interruptions to confirm offline logging replay.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the UW1 to integrate with Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration requirements
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically once the device reaches the shared endpoint.

## Typical Requirements Before Setup

- Physical access to the UW1 or remote access to the manufacturer configuration tool or interface
- Active cellular SIM provisioned for data on the device if using LTE or fallback 3G 2G networks
- A Plaspy account or administrator access to the Plaspy instance that will receive device data
- Up to date device firmware where possible and the manufacturer configuration method or software
- Power to the device and any required wiring or peripherals connected for telemetry reporting
- Basic knowledge of choosing UDP versus TCP if the device requires explicit transport selection

## How This Tracker Connects to Plaspy

The CAREU UW1 sends its position, telemetry, and alarm events to the Plaspy cloud platform at the shared Plaspy endpoint and port. Plaspy ingests those messages, automatically identifies the tracker protocol, and surfaces location and telemetry in the platform UI and reports.

- Real time location and telemetry updates over Cat 1 LTE with fallback to 3G and 2G
- Alarm and event reports such as harsh driving or impact detected by the accelerometer
- Sensor data such as temperature and driver ID from 1 Wire sensors when enabled
- Peripheral and telemetry data relayed over RS 232 or optional CAN bus where configured
- Stored position logs uploaded to Plaspy when network connectivity is restored

## Common Configuration Workflow

1. Access the official CAREU UW1 configuration method or manufacturer software, using the vendor provided tool, SMS commands, USB interface, or OTA configuration as supported.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the reporting port to 8888 which is the shared Plaspy port used for all devices.
4. Choose UDP or TCP transport if the UW1 requires you to select a transport protocol.
5. Apply or save the configuration changes in the manufacturer tool or send the SMS commands if using SMS setup.
6. Restart the device if required by the manufacturer or tool to make the new server settings take effect.
7. Validate that the device reports to Plaspy by checking device connectivity and position updates in the Plaspy platform.

## Example Configuration Commands

The UW1 supports several manufacturer methods for configuration including vendor software, SMS commands, USB configuration, and OTA updates. Exact commands and the method you use will depend on the UW1 firmware revision and the vendor tooling you have.

If you are using the manufacturer SMS or command interface consult the official CAREU command reference for the exact syntax for setting server domain, server IP, port, and transport selection. Because commands and syntax vary by firmware, this guide does not invent specific command strings. Use the manufacturer tool or SMS command set to enter d.plaspy.com or 54.85.159.138 and set port 8888, then choose UDP or TCP if required.

## Configuration Notes

- Firmware differences may change available configuration methods and exact command syntax; always check the CAREU documentation for your device firmware.
- Choosing TCP versus UDP can affect delivery behavior and retransmission characteristics; select the transport option recommended for your deployment by testing both if needed.
- Plaspy uses the same port 8888 for all devices and will automatically detect the device protocol on connect, so focus on correct server address and transport.
- If using SMS based configuration or USB tools, ensure commands are applied in the order the manufacturer recommends and that the device is restarted if required.
- For OTA and FTP based remote management, confirm network availability and that firmware updates are compatible with your Plaspy integration.

## Why Use Plaspy with This Configuration

Pairing the CAREU UW1 with Plaspy provides organizations with resilient real time tracking, telemetry reporting, and historical logging visibility on a shared platform. The UW1’s rugged design, cellular fallback, and large offline log capacity complement Plaspy’s automatic protocol detection and centralized data ingestion to keep assets visible in challenging environments.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific documentation and firmware information verify details with the manufacturer at https://www.systech-iot.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so please confirm the current configuration instructions on the official CAREU resources.
