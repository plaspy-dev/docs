---
slug: /neomatica/adm333/configuration
id: adm333-configuration
sidebar_label: Configuration
title: Neomatica - ADM333 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Neomatica ADM333 setup with Plaspy including required server settings and practical workflow
keywords:
  - Neomatica ADM333 configuration
  - ADM333 setup
  - Neomatica GPS tracker Plaspy
  - ADM333 server configuration
  - ADM333 Plaspy setup
  - ADM333 GPS tracker configuration
  - Neomatica ADM333 guide
  - ADM333 fleet tracking setup
  - ADM333 telemetry configuration
  - ADM333 integration guide
---

# Neomatica - ADM333 Configuration

This page covers the public configuration context for using the Neomatica ADM333 tracker with Plaspy. It focuses on the practical server settings and the common steps required to register the device with Plaspy so the tracker can deliver real time location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and vendor tools. The ADM333 v2 supports GPRS uplink and an open protocol, BLE sensors, dual nanoSIM and multiple configuration methods (Windows and Android configurators, SMS, Bluetooth), so use this guide together with the manufacturer documentation for device specific instructions.

## Configuration Overview

The goal of configuration is to point the ADM333 at the Plaspy endpoint and ensure the device can reliably send GNSS position and telemetry over GPRS so it becomes visible and manageable in Plaspy. The process typically includes verifying connectivity, setting the server address and transport, and confirming data is received in the platform.

- Configure the device to send data to the Plaspy server endpoint and correct port.
- Select the transport method (UDP or TCP) if the tracker requires a choice.
- Validate GPRS connectivity and that the active SIM has an APN and data service.
- Save and apply configuration changes and restart the tracker if needed.
- Verify that telemetry and events appear in Plaspy so the device is visible for monitoring and reporting.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the ADM333 for direct reporting to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These settings are the public endpoint values Plaspy publishes for device integration and should be entered into the ADM333 configuration tool or SMS/remote configuration method you use.

## Typical Requirements Before Setup

- A powered ADM333 device with accessible configuration interface (Windows or Android configurator, Bluetooth, or SMS according to the manufacturer method).
- A working nanoSIM installed with an active data plan and correct APN for GPRS uplink.
- Access to the device firmware documentation or manufacturer configurator to set server, port, and transport.
- Basic GNSS reception for initial position fixes during testing.
- Administrative access to your Plaspy account or deployment so you can confirm device visibility after configuration.
- A method to restart or power cycle the device after applying configuration if required.

## How This Tracker Connects to Plaspy

The ADM333 transmits GNSS position and telemetry packets over GPRS using its open protocol; Plaspy ingests those packets at the shared Plaspy endpoint and stores or displays location and event data in the platform. The configuration points the device to the Plaspy server and selects the transport so Plaspy can process incoming messages and map them to a device record.

- The tracker sends GPRS telemetry to the Plaspy server endpoint on port 8888.
- You may enter either the server domain d.plaspy.com or the server IP 54.85.159.138 when configuring the device.
- The ADM333 can be set to use UDP or TCP transport on port 8888 depending on the configuration tool or firmware option.
- Plaspy automatically detects the device protocol once packets arrive, so no separate protocol selection is required in Plaspy.
- After successful configuration the tracker reports GNSS, sensor and event data to Plaspy for real time monitoring and historical route storage.

## Common Configuration Workflow

1. Access the official Neomatica configuration method for the ADM333 such as the Windows or Android configurator, Bluetooth configurator, or documented SMS commands.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the server/host field of the configurator.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport option UDP or TCP if the tracker requires that selection.
5. Ensure the SIM APN and mobile data settings are configured so the device can initiate a GPRS connection.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot to activate new settings.
7. Validate connectivity by confirming the device reports to Plaspy and that position and event updates are visible in the platform.

## Example Configuration Commands

The ADM333 supports multiple configuration methods and the exact commands or GUI steps vary by firmware and the Neomatica configurator version. Because manufacturer tools and SMS command sets can change, follow the official Neomatica configuration guide for exact command formats. Typical configuration methods include:

- Using the Windows or Android configurator application to enter server, port, transport and APN settings.
- Using Bluetooth setup from a mobile configurator to write server and transport details to the device.
- Using documented SMS commands where applicable to set server host, port and APN (refer to Neomatica documentation for current syntax).

If you need specific command examples, consult the Neomatica ADM333 manual or the configurator help to obtain the current SMS templates and command sequences for your firmware version.

## Configuration Notes

- Firmware variations and hardware revisions can change the available configuration options and command syntax; always confirm against the ADM333 manual for your unit.
- Choose UDP or TCP based on network conditions and any guidance from your connectivity provider; Plaspy accepts both on port 8888 and detects protocol automatically.
- Dual SIM behavior and SIM priority are managed by the device firmware; ensure the active SIM has a data plan and correct APN configured.
- BLE sensor and peripheral settings (BLE, RS-485, 1-wire) are configured separately and do not replace the server/transport settings required to reach Plaspy.
- If you use SMS-based configuration for remote sites, test changes locally first and confirm reporting in Plaspy after the device connects.

## Why Use Plaspy with This Configuration

Configuring the Neomatica ADM333 to report directly to Plaspy provides a straightforward path to real time location, event alerts, and historical route data for fleet management, anti-theft workflows and asset telemetry. The ADM333 v2’s open protocol, GPRS uplink and peripheral support (BLE sensors, RS-485, 1-wire) make it a practical choice for deployments that require flexible telemetry and reliable reporting to a single platform endpoint.

To learn more about Plaspy and how it supports device integrations like the ADM333, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance, verify the current documentation at https://neomatica.com/ as manufacturer procedures and firmware behavior can change over time.
