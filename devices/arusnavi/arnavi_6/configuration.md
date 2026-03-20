---
slug: /arusnavi/arnavi_6/configuration
id: arnavi_6-configuration
sidebar_label: Configuration
title: Arusnavi - ARNAVI 6 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the ARNAVI 6 tracker to Plaspy using shared server settings and common setup steps
keywords:
  - Arusnavi ARNAVI 6 configuration
  - ARNAVI 6 server configuration
  - Arusnavi setup for Plaspy
  - ARNAVI 6 tracking software configuration
  - ARNAVI 6 GPS platform setup
  - Plaspy tracker integration
  - vehicle tracking ARNAVI 6
  - fleet management tracker configuration
  - GPS tracker Plaspy guide
  - remote tracker configuration
---

# Arusnavi - ARNAVI 6 Configuration

This page provides public configuration context for using the Arusnavi ARNAVI 6 tracker with Plaspy. It summarizes the shared server settings Plaspy requires and explains the practical steps to point ARNAVI 6 devices to the Plaspy endpoint so they can deliver location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device communicates. Exact manufacturer side setup steps can vary by ARNAVI 6 firmware, hardware revision, installation type, and vendor configuration tools, so always confirm device specific actions in the official Arusnavi documentation.

## Configuration Overview

This configuration process prepares an ARNAVI 6 unit to send GPS and telemetry data to Plaspy so the device becomes visible and manageable in the platform. The focus is on pointing the device to Plaspy, selecting the transport, and validating that data reaches the shared Plaspy endpoint.

- Configure the device server address to the Plaspy endpoint so uplink data is delivered to the platform.
- Set the device port and transport mode so the tracker opens a session to Plaspy on the monitored port.
- Save and apply configuration via the ARNAVI 6 web configurator or supported manufacturer tool.
- Restart or cycle the device if required to start reporting to Plaspy.
- Validate device connectivity and telemetry in Plaspy after configuration.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices connect
- note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the ARNAVI 6 has power and any required backup battery or protected power wiring is present.
- Active cellular connectivity with working SIM(s) and a data plan if cellular is the primary data channel. ARNAVI 6 supports dual SIM operation.
- If using Wi Fi backup, ensure access to the local Wi Fi network and any credentials required for that channel.
- Access to the official Arusnavi configuration method such as the web configurator, USB or Bluetooth configuration tools, or the vendor provided software.
- Confirm device firmware version and record it in case vendor guidance varies by firmware.
- Antennas and wiring must be installed per the device installation guide so GNSS and cellular signals are available.

## How This Tracker Connects to Plaspy

ARNAVI 6 packages GNSS and telemetry data and sends it to the shared Plaspy server endpoint and port over the selected transport channel. Plaspy receives these messages, auto detects the tracker protocol, and makes the device visible in the platform for live tracking and event processing.

- The device sends position fixes and telemetry to d.plaspy.com on port 8888 using UDP or TCP.
- Plaspy automatically detects the protocol used by the device and parses incoming data.
- Telemetry from GNSS, CAN, serial sensors, BLE sensors, and digital inputs is included in uplink messages.
- When cellular is unavailable ARNAVI 6 can use Wi Fi as an optional backup channel if configured.
- Plaspy uses the common port to centralize incoming data from all supported devices for simplified routing and detection.

## Common Configuration Workflow

1. Access the official Arusnavi configuration method or software such as the ARNAVI 6 web configurator, USB utility, or Bluetooth provisioning tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the server IP 54.85.159.138 in the server field.
3. Set the device port to 8888 as the destination port for uplink messages.
4. Choose UDP or TCP for transport if the device requires explicit transport selection.
5. Apply or save the configuration changes in the manufacturer tool.
6. Restart or power cycle the ARNAVI 6 if required by the firmware to activate the new settings.
7. Validate that the device reports to Plaspy by confirming device presence and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and sequence vary by the ARNAVI 6 firmware and the Arusnavi configuration tools used. Manufacturer utilities may provide GUI fields, USB command modes, or Bluetooth configuration profiles to set the server domain, server IP, transport, and port. Use the official Arusnavi web configurator or PC utility to enter the following public Plaspy settings:

- Server domain: d.plaspy.com
- Server IP address: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Because manufacturer tools differ, consult the ARNAVI 6 configuration interface for the exact fields and command syntax required by your device firmware.

## Configuration Notes

- Firmware differences can change menu names and command syntax. Verify the firmware version before following instructions.
- Choose UDP or TCP according to installer preference or vendor guidance; Plaspy supports both and will detect the protocol automatically.
- If you use domain name configuration set d.plaspy.com so DNS resolution can provide the correct Plaspy endpoint.
- Use the ARNAVI 6 web configurator, USB tool, or Bluetooth provisioning as supported by your device and firmware for the most reliable setup.
- Record configuration changes and reboot the device after saving to ensure settings take effect.

## Why Use Plaspy with This Configuration

Connecting ARNAVI 6 to Plaspy provides a straightforward path to continuous location visibility and telemetry consolidation for fleet and asset monitoring. With the device sending GNSS, CAN, serial, and BLE sensor data to the shared Plaspy endpoint, organizations can centralize alerts, historical reporting, and real time tracking workflows across mixed fleets.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the most current device specific setup steps, firmware behavior, and manufacturer guidance always verify details on the official Arusnavi site https://www.arusnavi.ru.
