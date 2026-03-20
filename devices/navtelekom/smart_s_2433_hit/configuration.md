---
slug: /navtelekom/smart_s_2433_hit/configuration
id: smart_s_2433_hit-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2433 HIT Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Navtelekom SMART S-2433 HIT with Plaspy including server settings and setup workflow
keywords:
  - Navtelekom SMART S-2433 HIT configuration
  - SMART S-2433 HIT setup
  - Navtelekom tracker Plaspy
  - SMART S-2433 HIT server configuration
  - Navtelekom GPS tracker setup
  - SMART S-2433 HIT Plaspy integration
  - vehicle tracker configuration
  - fleet tracking SMART S-2433
  - Navtelekom configuration guide
  - 2G GPS tracker setup
---

# Navtelekom - SMART S-2433 HIT Configuration

This page describes the public configuration context for using the Navtelekom SMART S-2433 HIT with Plaspy. It focuses on the practical settings and workflow you need to point the device to Plaspy so that GNSS position, IO states and telemetry become available in your Plaspy account. The guidance is based on the SMART S-2433 HIT capabilities including its 2G modem, internal GNSS and GSM antennas, backup battery and I/O features.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type and vendor configuration tools, so use this page as a practical integration reference and confirm device-specific details with Navtelekom documentation and tools.

## Configuration Overview

This configuration process prepares the SMART S-2433 HIT to reliably send its telemetry and event data to Plaspy so the unit appears in the platform for live tracking, alerts and historical reporting.

- Configure the device network endpoint and transport so it reports to Plaspy
- Verify the device can register on the cellular network with a valid SIM and APN
- Validate live connectivity and that position, IO and event messages reach Plaspy
- Save and apply settings, then restart the tracker if required to activate the new server configuration
- Confirm visibility of the tracker in Plaspy and check event reporting such as ignition, alarm and telemetry

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured for either)
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- Access to the official Navtelekom configuration method or tool such as the NTC Configurator or the device local configuration interface
- A working single SIM card with an active 2G data plan and the correct APN configured for your carrier
- Device powered and mounted or accessible for initial configuration and testing, including a charged backup battery if available
- Up to date device firmware when possible and access to Navtelekom documentation for model specific fields and firmware notes
- A Plaspy account to verify that devices appear and report once configured

## How This Tracker Connects to Plaspy

The SMART S-2433 HIT sends its GNSS, IO and telemetry messages over the device 2G link to the shared Plaspy server endpoint and port. Plaspy ingests the data, automatically determines the tracker protocol and exposes position, alerts and telemetry in the platform.

- The device is configured to report to d.plaspy.com or to the Plaspy server IP 54.85.159.138
- Communications use port 8888, the same port Plaspy uses for all supported devices
- You can select UDP or TCP transport on the device if the configuration requires it
- Plaspy automatically detects the tracker protocol and parses incoming messages for display and event handling
- Once reporting, the tracker supplies location, IO state changes and telemetry that Plaspy uses for maps, alerts and history

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software (for example the NTC Configurator or local Bluetooth/serial interface).
2. In the server or remote reporting settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888.
4. Choose the transport type UDP or TCP if the device requires explicit transport selection.
5. Configure the APN and carrier settings for the device SIM if not already set, then save or apply the configuration.
6. Restart the device if required by the manufacturer instructions to apply network and server settings.
7. Validate that the device reports to Plaspy by checking for incoming messages and that the unit appears in your Plaspy account.

## Example Configuration Commands

The SMART S-2433 HIT manufacturer tools and firmware define the exact commands and configuration screens used to set server and network parameters. Methods vary between the Navtelekom NTC Configurator, Bluetooth local setup, or serial/USB configuration. Because commands differ by firmware and tool, consult the Navtelekom configuration tool or user manual for the precise command format and steps.

If you use the Navtelekom configuration software you will typically set server host and port fields directly in the GUI, or apply equivalent parameters via the device's local configuration interface. Keep the server as d.plaspy.com or 54.85.159.138 and the port as 8888 and select UDP or TCP as the transport.

## Configuration Notes

- Firmware and configuration GUI text may differ between Navtelekom releases; always confirm field names in the current manufacturer tool.
- Choose TCP or UDP based on your network and device behavior; Plaspy accepts both transports on port 8888 and detects the protocol automatically.
- Ensure APN and carrier settings on the SIM are correct for 2G connectivity in your region; lack of cellular registration will prevent reporting to Plaspy.
- Use the Navtelekom NTC Configurator or local Bluetooth/serial access for reliable configuration and to update firmware when needed.
- After applying server changes, a device restart or power cycle may be necessary to initiate a fresh connection to the Plaspy endpoint.

## Why Use Plaspy with This Configuration

Using the SMART S-2433 HIT with Plaspy gives organizations reliable 2G GNSS tracking combined with robust I/O and telemetry reporting. The device’s backup battery, electrical protection and flexible inputs make it a practical choice for vehicle and industrial deployments where continuous visibility and event-driven monitoring are important.

To learn more about how Plaspy supports fleet management and real-time tracking visit https://www.plaspy.com. For device specific configuration details, firmware notes and the latest manufacturer instructions verify information on the Navtelekom website https://www.navtelecom.ru/.
