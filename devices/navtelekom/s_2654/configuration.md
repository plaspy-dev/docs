---
slug: /navtelekom/s_2654/configuration
id: s_2654-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2654 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom СИГНАЛ S-2654 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - Navtelekom СИГНАЛ S-2654 configuration
  - Navtelekom S-2654 setup Plaspy
  - СИГНАЛ S-2654 server configuration
  - S-2654 GPS tracker setup
  - Plaspy tracker configuration
  - GLONASS vehicle tracker configuration
  - fleet tracking S-2654
  - NTC Configurator S-2654
  - DRC remote management S-2654
  - industrial telematics configuration
---

# Navtelekom - СИГНАЛ S-2654 Configuration

This page covers the public configuration context for using the Navtelekom СИГНАЛ S-2654 tracker with Plaspy. It describes the shared server settings Plaspy expects, the typical preconditions for installation, and a practical workflow for applying manufacturer configuration tools to direct the device to Plaspy for real time tracking and telemetry ingestion.

The S-2654 is a GLONASS vehicle tracker with a built in 3G modem and dual SIM redundancy designed for fleet and industrial telemetry. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary depending on firmware, hardware revision, installation type, and the tooling you use such as NTC Configurator or the DRC remote management system.

## Configuration Overview

The goal of this configuration is to prepare the S-2654 to communicate reliably with Plaspy so vehicle location, inputs and telemetry are visible in the platform. Configuration focuses on setting the device to report to Plaspy's shared server endpoint and ensuring cellular connectivity and device settings match your deployment needs.

- Point the tracker to Plaspy server settings so data is routed to the platform for real time maps and reporting.
- Confirm cellular connectivity and SIM readiness so GNSS fixes can be sent via the built in 3G modem.
- Validate transport and port settings so the device can establish a session with Plaspy.
- Enable or confirm any required telemetry interfaces or logging options that you plan to forward to Plaspy.
- Test device reporting and verify the device appears in Plaspy and sends periodic updates.

## Plaspy Server Settings

When configuring the СИГНАЛ S-2654 for Plaspy, use the following public server settings exactly as listed:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol, so the server address and port are the central routing values you must apply.

## Typical Requirements Before Setup

- A powered S-2654 with appropriate external GNSS and GSM antennas connected if required by your installation.
- Active cellular service on at least one SIM with data enabled for the 3G modem and SIM slot configured according to the device documentation.
- Access to the official manufacturer configuration method such as NTC Configurator or the DRC remote management system and any required cables or USB adapters.
- Knowledge of the device firmware version and available configuration profiles to ensure you follow the correct steps for that firmware.
- Optionally a formatted microSD card if you plan to use local logging as a buffer during connectivity gaps.
- Administrative access to Plaspy to validate the device after configuration and to see live telemetry once reporting begins.

## How This Tracker Connects to Plaspy

The S-2654 sends GNSS fixes and telemetry via its built in 3G modem to Plaspy. Once configured to the shared Plaspy server endpoint and port, the device will transmit position data and event reports so Plaspy can provide live tracking, alerts, and history.

- The device is configured to report to the shared Plaspy server endpoint and port so data is ingested into the Plaspy platform.
- GNSS fixes are transmitted over 3G to the Plaspy server for real time mapping and route playback.
- Input events and telemetry from I O and serial interfaces are forwarded to Plaspy for alerts and analytics.
- Local SD logging can buffer records while cellular connectivity is unavailable and later reconcile with Plaspy.
- Dual SIM redundancy helps keep reporting persistent when one carrier has reduced coverage.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as NTC Configurator or the DRC remote management system.
2. In the device server or APN settings, enter d.plaspy.com or 54.85.159.138 for the server address.
3. Set port 8888 as the destination port used by Plaspy for all devices.
4. Choose UDP or TCP if the device requires a transport selection for server connections.
5. Apply or save the configuration profile to the S-2654 and ensure any APN or SIM parameters are correct.
6. Restart the device if required by the configuration tool or firmware to apply network changes.
7. Validate that the device reports to Plaspy by checking device status and incoming telemetry in the Plaspy console.

## Example Configuration Commands

The S-2654 is commonly configured using manufacturer tools rather than a single command line. Exact configuration commands and sequences can vary by firmware and the version of NTC Configurator or DRC you use. Because manufacturer tools and firmware revisions differ, follow the official Navtelekom documentation and use the GUI or remote management options provided to enter the Plaspy server settings (d.plaspy.com or 54.85.159.138) and port 8888, select UDP or TCP if required, then save and reboot the device.

If you have exported or received specific SMS or command line strings from Navtelekom documentation for your firmware, apply those using the official tools and preserve any placeholders as instructed by the manufacturer.

## Configuration Notes

- Firmware differences can change the configuration steps or the exact placement of server fields in the NTC Configurator UI; always verify which firmware branch your device uses.
- Choose UDP or TCP based on the device interface options and any guidance from Navtelekom; Plaspy supports both transports and will detect the device protocol automatically.
- Because the S-2654 model is archived, confirm you are using the correct version of NTC Configurator and check the DRC history for known firmware behaviors before wide deployment.
- Use the microSD logging capability to reduce data loss during temporary coverage gaps and reconcile logs with Plaspy after connectivity is restored.
- Maintain updated APN and SIM settings in the manufacturer tool to ensure the 3G modem can establish a data session before attempting to register with Plaspy.

## Why Use Plaspy with This Configuration

Integrating the Navtelekom СИГНАЛ S-2654 with Plaspy gives organizations a practical way to bring GLONASS positioning, industrial I O and serial telemetry into a single tracking and reporting platform. Plaspy ingests the device reports to provide live visibility, event alerts and historical playback that help fleets manage routes, monitor sensors and implement anti theft workflows.

To learn more about Plaspy visit https://www.plaspy.com and review current manufacturer documentation and tools at https://www.navtelecom.ru/ for the latest device specific setup details, firmware notes and configuration instructions. Manufacturer specifications and configuration methods can change over time so verifying current information on the official Navtelekom resources is recommended.
