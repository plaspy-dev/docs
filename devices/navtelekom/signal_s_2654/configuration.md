---
slug: /navtelekom/signal_s_2654/configuration
id: signal_s_2654-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2654 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Navtelekom СИГНАЛ S-2654 tracker to Plaspy using shared server settings and manufacturer tools
keywords:
  - Navtelekom СИГНАЛ S-2654 configuration
  - Navtelekom S-2654 Plaspy setup
  - S-2654 tracker configuration
  - GLONASS vehicle tracker configuration
  - NTC Configurator S-2654
  - DRC remote management Navtelekom
  - fleet tracking S-2654
  - vehicle telemetry S-2654
  - Plaspy tracker configuration
  - Plaspy fleet integration
---

# Navtelekom - СИГНАЛ S-2654 Configuration

This page provides public configuration context for using the Navtelekom СИГНАЛ S-2654 vehicle tracker with Plaspy. It focuses on the practical, public-facing steps and settings needed to point the device at Plaspy so the tracker can report GNSS fixes and telemetry into the Plaspy platform.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use such as the NTC Configurator or DRC. Review the manufacturer's documentation for device specific details before applying settings.

## Configuration Overview

Configuring the S-2654 for Plaspy prepares the device to forward real time location and telemetry to Plaspy's ingestion endpoint and to appear in your Plaspy console for live monitoring and reporting.

- Point the device to Plaspy using the shared Plaspy server endpoint and port.
- Confirm the 3G modem and dual SIMs (where used) provide an active cellular connection.
- Use manufacturer tools such as NTC Configurator or DRC to write and save server and transport settings.
- Verify the device successfully reports to Plaspy and that location and input telemetry appear in the platform.
- Optionally enable local logging on microSD to preserve records during temporary connectivity loss.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the S-2654 physical device and any manufacturer configuration tools such as NTC Configurator or the DRC remote management system.
- Active SIM card(s) installed and cellular connectivity verified for the built-in 3G modem.
- External GNSS and GSM antennas connected if required by your installation for reliable reception.
- Power supply and optional internal battery charged so the device can boot and apply settings.
- microSD card inserted if you plan to use local logging for reconciliation of offline data.
- Manufacturer documentation or release notes for the specific firmware version installed on your device.

## How This Tracker Connects to Plaspy

When configured for Plaspy the S-2654 sends GNSS fixes and telemetry over its cellular link to the Plaspy ingestion endpoint and becomes visible in Plaspy for tracking, alerts, and reports.

- The tracker is configured to report to the shared Plaspy server endpoint and port listed above.
- Device telemetry and event reports are forwarded to Plaspy where they are parsed and presented in dashboards and reports.
- Inputs such as ignition, digital inputs, and serial/CAN telemetry are relayed to Plaspy as configured by the device firmware and manufacturer protocol.
- Local microSD logging provides a buffered data stream that can be reconciled with Plaspy records after connectivity restores.
- Plaspy’s automatic protocol detection helps accept data from the S-2654 without manual protocol selection on the platform side.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as NTC Configurator or the DRC remote management tool.
2. Locate the TCP UDP server or GPRS server settings in the configurator and enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the remote server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP in the device transport settings if the device requires a transport selection.
5. Save or apply the configuration in the manufacturer tool and write the settings to the device.
6. Restart the device if the tool or firmware requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy by checking for the tracker in the Plaspy console and confirming recent location and telemetry updates.

## Example Configuration Commands

The S-2654 is typically configured using the manufacturer's GUI tools or remote management system. Exact command strings or SMS commands vary by firmware and the vendor toolset, so follow the NTC Configurator or DRC instructions for your firmware release. Because command formats are manufacturer specific and can change between firmware versions, consult Navtelekom documentation or the device configurator for exact syntax and examples.

## Configuration Notes

- The S-2654 is listed as archived by the manufacturer; firmware availability and tool versions may differ from current models so verify compatibility before deployment.
- Some installations require use of the NTC Configurator or the DRC remote management system to apply server and transport settings; follow the tool specific workflow.
- Choose UDP or TCP based on installation requirements; Plaspy accepts either but the device may default to one and require manual selection.
- Use microSD logging as a buffer for coverage gaps and validate local logs when reconciling missing records in Plaspy.
- Differences in firmware versions can alter available menu names and configuration flows. Always cross check settings with manufacturer release notes.

## Why Use Plaspy with This Configuration

Using the Navtelekom СИГНАЛ S-2654 with Plaspy gives organizations access to near real time GNSS positioning and telemetry within a unified fleet management environment. The S-2654's industrial I O and serial/CAN options make it suitable for telemetry rich use cases where Plaspy can centralize maps, alerts, and historical playback for operations, service fleets, and asset monitoring.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and configuration tools consult the manufacturer site https://www.navtelecom.ru/ since manufacturer configuration methods and firmware behavior can change over time.
