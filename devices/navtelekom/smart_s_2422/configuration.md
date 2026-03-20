---
slug: /navtelekom/smart_s_2422/configuration
id: smart_s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Navtelekom СМАРТ S-2422 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - Navtelekom СМАРТ S-2422
  - Navtelekom SMART S-2422 configuration
  - SMART S-2422 setup
  - Plaspy tracker configuration
  - vehicle GPS tracker Plaspy
  - Navtelekom tracker setup
  - GPS platform setup
  - fleet tracking configuration
  - S-2422 server settings
  - GPS telematics configuration
---

# Navtelekom - СМАРТ S-2422 Configuration

This page covers the public configuration context for using the Navtelekom СМАРТ S-2422 tracker with Plaspy. It explains the shared Plaspy connection settings and describes the practical steps you will typically use to prepare the device so it reports location and telemetry to the Plaspy platform. The guidance here is focused on the public, manufacturer provided features and the Plaspy server parameters required to connect.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page as a practical reference for applying Plaspy connection values to the S-2422, and consult the Navtelekom documentation for device specific commands and advanced firmware details.

## Configuration Overview

The goal of the configuration process is to prepare the S-2422 for reliable communication with Plaspy so that location, digital input events, and external sensor telemetry are sent into the Plaspy dashboards and reports. This involves setting the Plaspy server endpoint on the device, confirming network connectivity, and validating that Plaspy receives and parses the tracker protocol automatically.

- Enter Plaspy server settings on the device using the manufacturer tool or SMS interface where applicable
- Configure transport and port so the S-2422 transmits to the Plaspy endpoint
- Verify cellular connectivity and that the SIM has a working 2G data plan if required by the installation
- Confirm telemetry from GNSS, digital inputs, RS-485, and 1-Wire sensors arrives in Plaspy
- Validate remote control outputs and accessory behavior when required for operational workflows

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the Navtelekom СМАРТ S-2422:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all devices supported by the platform and that protocol detection is handled on the platform side after the device starts sending data.

## Typical Requirements Before Setup

- Vehicle power applied and stable wiring since the S-2422 is designed for permanently wired installations with no internal battery
- A working 2G GSM SIM card installed and provisioned for data where the local network supports 2G
- Physical access to the device and antennas to confirm GNSS and GSM signal quality
- Access to the official manufacturer configuration method such as the NTC Configurator or the vendor supplied configuration steps
- Device IMEI and any required installer credentials for the manufacturer tool or SMS configuration
- A Plaspy account or administrator access to the target Plaspy organization for final validation

## How This Tracker Connects to Plaspy

When configured, the СМАРТ S-2422 sends GNSS coordinates and telemetry over the cellular link to the Plaspy server endpoint and port so the platform can visualize, log, and act on events. Plaspy receives the incoming device stream and automatically detects the tracker protocol to parse position and sensor data.

- The device reports GNSS location updates to d.plaspy.com on port 8888 using UDP or TCP
- Digital input events and control output states are included in telemetry sent to Plaspy
- External sensors via RS-485 and 1-Wire are transmitted as part of the device telemetry stream
- Plaspy processes incoming data and makes it available in dashboards, rules, and reports
- Automatic protocol detection in Plaspy removes the need to manually select a protocol on the platform side

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the NTC Configurator or follow vendor supplied SMS/CLI procedures.
2. Enter the Plaspy server address by name or IP using either d.plaspy.com or 54.85.159.138 in the server field.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
5. Apply or save the configuration in the manufacturer tool and push settings to the device.
6. Restart or power cycle the device if required by the firmware to activate the new network parameters.
7. Validate that the device appears and reports in Plaspy and confirm telemetry from GNSS, digital inputs, and external sensors is visible.

## Example Configuration Commands

The exact command syntax and configuration method for the СМАРТ S-2422 depends on the manufacturer tool and firmware version. Navtelekom devices are commonly configured with NTC Configurator or via documented SMS commands provided by the vendor. Because manufacturer commands and formats can vary by firmware, refer to the official Navtelekom documentation or the NTC Configurator help for exact syntax and any placeholders required by your installation.

## Configuration Notes

- Firmware variations can change the available configuration options and the exact command or menu paths in the NTC Configurator.
- Choose UDP or TCP based on your network environment and any guidance from your connectivity provider; Plaspy will accept either on port 8888.
- Verify 2G network availability in your operating area since the S-2422 uses a 2G GSM modem and a single SIM slot.
- Bluetooth 4.0 can be used for local configuration or accessory pairing where supported by the device firmware, but primary server settings must be set through the official configuration method.
- Use the DRC remote management mechanism if available to keep firmware aligned with Plaspy compatibility recommendations.

## Why Use Plaspy with This Configuration

Configuring the Navtelekom СМАРТ S-2422 to report to Plaspy delivers persistent vehicle visibility and combines GNSS position, digital I/O events, and external sensor telemetry into a single telematics platform. This setup supports common fleet workflows such as real time tracking, fuel monitoring, and remote control actions, enabling dispatchers and fleet managers to act on accurate location and sensor data.

Learn more about Plaspy and how it can visualize and manage telemetry from compatible devices at https://www.plaspy.com. For the latest device specific setup commands, firmware notes, and hardware details consult the manufacturer at https://www.navtelecom.ru/ because device configuration methods and firmware behavior can change over time.
