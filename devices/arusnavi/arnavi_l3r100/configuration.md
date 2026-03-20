---
slug: /arusnavi/arnavi_l3r100/configuration
id: arnavi_l3r100-configuration
sidebar_label: Configuration
title: Arusnavi - ARNAVI L3R100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the ARNAVI L3R100 tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - Arusnavi ARNAVI L3R100 configuration
  - ARNAVI L3R100 setup
  - Arusnavi tracker Plaspy
  - ARNAVI L3R100 server configuration
  - ARNAVI L3R100 GPS tracker setup
  - ARNAVI L3R100 telemetry configuration
  - Arusnavi vehicle tracker setup
  - ARNAVI L3R100 Plaspy integration
  - Arusnavi GPS platform setup
  - ARNAVI L3R100 RS485 BLE configuration
---

# Arusnavi - ARNAVI L3R100 Configuration

This page documents the public configuration context for using the Arusnavi ARNAVI L3R100 tracker with the Plaspy platform. It explains the shared Plaspy server settings that the L3R100 can report to, the typical prerequisites you should confirm before integrating the device, and the practical workflow engineers and installers commonly follow to make the device visible in Plaspy.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide as a practical reference and consult the manufacturer documentation for device-specific procedures.

## Configuration Overview

This section explains the purpose of configuring an ARNAVI L3R100 for Plaspy and the practical outcomes you should expect once configuration is complete.

- Prepare the L3R100 to send GNSS position and telemetry to Plaspy so locations appear in the platform.
- Ensure the device can reach the Plaspy server endpoint using the device's GPRS connection and correct APN if required.
- Select or confirm transport settings (UDP or TCP) and the shared Plaspy port so Plaspy can accept the device stream.
- Validate connectivity and telemetry reporting in Plaspy so live tracking, event reporting, and historical playback work as expected.
- Optionally confirm BLE and RS485 sensors are reporting correctly to the unit so their telemetry is forwarded to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the ARNAVI L3R100:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices sending data to Plaspy use the same port. Enter either the server domain or the server IP as supported by the device configuration interface, and choose UDP or TCP depending on device options or installer preference.

## Typical Requirements Before Setup

- Stable power to the unit and correct wiring according to installation documentation.
- Active 2G/GPRS SIM card with a data plan and a correctly configured APN if the device uses cellular connectivity.
- Access to the official manufacturer configuration method such as the L3R100 web interface, PC configuration tool via USB, or supported SMS/remote tools.
- The device identifier or serial (for example IMEI or manufacturer serial) available for registration or verification with Plaspy.
- A Plaspy account or organization where the device will be registered and monitored.
- Physical access to BLE or RS485 sensors if you intend to attach and validate external telemetry.

## How This Tracker Connects to Plaspy

The ARNAVI L3R100 forwards GNSS positions, sensor telemetry, and event messages to the Plaspy monitoring endpoint using a supported telemetry protocol. Configure the device to transmit to the shared Plaspy server endpoint and port so Plaspy can receive and classify incoming telemetry automatically.

- The device reports positions and telemetry to d.plaspy.com (or to 54.85.159.138) on port 8888.
- Choose UDP or TCP transport as the device requires; Plaspy accepts both and detects the used protocol.
- The L3R100 can transmit to two monitoring servers simultaneously, enabling redundancy and integration with Plaspy alongside another backend if needed.
- Telemetry from BLE sensors and wired RS485 sensors attached to the L3R100 is forwarded to Plaspy once the device sends its aggregated data stream.
- Event-driven messages such as ignition, door, or discrete input changes are sent to Plaspy to enable alerts and rule-based workflows.

## Common Configuration Workflow

A practical sequence installers and integrators follow to connect ARNAVI L3R100 units to Plaspy:

1. Access the official manufacturer configuration method (web interface, PC tool via USB Type-C, or supported remote configuration method).
2. Enter the Plaspy server address: use either d.plaspy.com or 54.85.159.138 depending on the device UI.
3. Set the destination port to 8888, since Plaspy uses the same port for all supported trackers.
4. Choose the transport protocol (UDP or TCP) if the device requires selecting a transport.
5. Enter any required APN or SIM connectivity details so the device can reach the public internet and the Plaspy server.
6. Save or apply the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate in Plaspy that the device reports successfully and that position and telemetry updates appear in the platform.

## Example Configuration Commands

The ARNAVI L3R100 supports web and PC-based configuration and may also accept SMS or remote configuration commands depending on firmware and vendor tools. Exact command formats and tools vary by manufacturer firmware and region, so confirm the syntax with Arusnavi documentation or with your vendor.

If you use a device configuration utility or SMS commands provided by the manufacturer, follow those official commands to set the server to d.plaspy.com or 54.85.159.138 and port 8888, and choose UDP or TCP as required. Because manufacturer command sets differ across firmware revisions, this guide does not invent a command list; consult the official Arusnavi configuration manual for precise command examples.

## Configuration Notes

- Firmware differences can change available menus, command syntax, and transport options; always check the device firmware version before applying steps.
- If you have a choice between UDP and TCP, note that both are supported by Plaspy and the choice may affect delivery guarantees or firewall traversal in your environment.
- For cellular connectivity, verify APN settings and SIM provisioning before attempting server connectivity tests.
- When using BLE or RS485 sensors, validate local telemetry on the device prior to end-to-end checks in Plaspy so you can isolate sensor versus network issues.
- Keep the manufacturer configuration tool and firmware up to date as recommended by Arusnavi to ensure compatibility and security.

## Why Use Plaspy with This Configuration

Using the ARNAVI L3R100 with Plaspy gives operators a compact tracker that forwards multi-constellation GNSS positions and mixed sensor telemetry to a single, shared Plaspy endpoint. This setup helps fleets and asset managers gain live visibility, event-driven notifications, and consolidated telemetry from both wired and BLE sensors without needing separate backend endpoints.

To learn more about Plaspy and how it supports devices like the ARNAVI L3R100, visit https://www.plaspy.com. For the latest, device specific setup steps, firmware notes, and manufacturer commands refer to the official Arusnavi documentation at https://www.arusnavi.ru.
