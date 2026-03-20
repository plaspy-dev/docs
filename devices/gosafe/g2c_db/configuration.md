---
slug: /gosafe/g2c_db/configuration
id: g2c_db-configuration
sidebar_label: Configuration
title: Gosafe - G2C-DB Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G2C-DB tracker integration with Plaspy including server and transport details
keywords:
  - Gosafe G2C-DB configuration
  - Gosafe G2C-DB setup
  - G2C-DB Plaspy
  - Gosafe tracker configuration
  - Gosafe GPS setup
  - G2C-DB server configuration
  - Gosafe asset tracker Plaspy
  - G2C-DB GPS platform setup
  - Gosafe telemetry configuration
  - Gosafe fleet tracking configuration
---

# Gosafe - G2C-DB Configuration

This page documents the public configuration context for using the Gosafe G2C-DB tracker with Plaspy. It covers the shared server settings and the practical steps commonly required to point a compatible G2C-DB device at Plaspy so location, motion telemetry, and device health are visible in the platform. The G2C-DB is a rugged, long-life GPS tracker intended for trailers, containers and remote equipment and it pairs multi-constellation positioning with optimized power management and store-and-forward memory for reliable delivery into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the device, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The G2C-DB supports GSM/GPRS and LTE Cat-1 variants, SMS and TCP reporting, configurable reporting modes (periodic, movement-based and active tracking), FOTA updates, an internal nano SIM slot, a replaceable 9000 mAh battery pack and store-and-forward memory, all of which affect how you configure and validate the device before it appears in Plaspy.

## Configuration Overview

This configuration process prepares the G2C-DB to communicate reliably with Plaspy and ensures location and telemetry are delivered to the shared Plaspy server endpoint and port for processing. You will configure the device to report to Plaspy, choose the transport method supported by the device and confirm that updates reach the platform.

- Point the G2C-DB to the Plaspy server endpoint so GPS fixes and telemetry are sent to Plaspy.
- Configure the device port and transport (UDP or TCP) consistent with Plaspy settings.
- Validate cellular connectivity, battery and device health so store-and-forward works when coverage is intermittent.
- Save and apply the configuration, then confirm the device appears and reports in Plaspy.
- Tune reporting modes on the device and in Plaspy to balance update frequency and battery longevity.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and ingestion.
- Server IP 54.85.159.138 as an alternate address for direct device entries when required.
- Port 8888 which is the single port used by Plaspy for all supported devices.
- Transport support for UDP or TCP; configure the device transport option to UDP or TCP as required by the device interface.
- Plaspy automatically detects the tracker protocol so devices reporting to d.plaspy.com on port 8888 are recognized and parsed.

## Typical Requirements Before Setup

- A charged or installed 9000 mAh battery pack and the device powered on and accessible for configuration.
- Active cellular service and a valid nano SIM inserted if the unit requires a SIM for GSM or LTE reporting.
- Access to the official Gosafe manufacturer configuration method or software used for the G2C-DB model and firmware revision.
- Knowledge of whether the device will use TCP or UDP reporting and access to switch that transport if the device supports it.
- A Plaspy account or administrator access to verify the device appears and to adjust platform reporting and device labels.
- Basic signal coverage verification at installation location to ensure first reports can be transmitted.

## How This Tracker Connects to Plaspy

The G2C-DB is configured to send position fixes, motion events and device state to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry for fleet and asset workflows. Depending on configuration, the device can use periodic or movement-based reports and will rely on its store-and-forward memory for transient coverage gaps.

- The tracker reports GPS coordinates, timestamps and accelerometer motion events to d.plaspy.com on port 8888.
- Data is sent over TCP or UDP depending on the transport selected during device setup.
- Store-and-forward memory ensures records are buffered locally and transmitted to Plaspy when connectivity returns.
- Device status such as battery state and connectivity health is reported to Plaspy for operational monitoring.
- Plaspy automatically detects the protocol used by the tracker when it connects to the shared server and port.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the G2C-DB model and installed firmware.
2. In the device server settings enter d.plaspy.com or, where explicit IP is required, 54.85.159.138.
3. Set the reporting port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP as the transport if the device requires transport selection and your deployment prefers one protocol.
5. Save or apply the configuration changes in the manufacturer tool.
6. Restart the device if the configuration method or firmware requires a reboot to apply new server settings.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for the first incoming telemetry and confirming location and device status appear.

## Example Configuration Commands

The exact configuration commands and strings depend on the Gosafe configuration tool, firmware version and whether you use SMS, a USB configuration cable, a manufacturer web interface, or remote FOTA tools. Because manufacturers provide multiple configuration paths, adapt these general instructions to the method you have from Gosafe.

- When entering server information in the device tool, use:
  - Server domain: d.plaspy.com
  - Alternate server IP: 54.85.159.138
  - Port: 8888
  - Transport: UDP or TCP

If you use a manufacturer SMS command interface or a text command file, follow the exact command syntax supplied by Gosafe for your firmware. The placeholders {{apn}}, {{apnu}}, and {{apnp}} are commonly used by some manufacturers for APN settings; if present in your Gosafe documentation preserve them and replace with the carrier APN values when required.

## Configuration Notes

- Firmware differences and hardware revisions can change available configuration fields and command syntax; always check the G2C-DB firmware notes.
- For deployments with intermittent coverage use the G2C-DB store-and-forward capability to preserve events until connectivity is available.
- Choose UDP for lower overhead and TCP when reliability and ordered delivery are preferred, remembering Plaspy accepts both on the shared port.
- SMS reporting may be supported as an alternate path for configuration or fallback reporting as indicated by Gosafe documentation.
- Installer practices and regional device variants (GSM/GPRS versus LTE Cat-1) may require different APN or carrier settings; consult official Gosafe guidance.

## Why Use Plaspy with This Configuration

Using the Gosafe G2C-DB with Plaspy gives operations teams centralized visibility of long-life asset trackers that are optimized for low maintenance. The combination of multi-constellation GNSS, accelerometer event reporting, store-and-forward memory, and rugged environmental tolerance makes the G2C-DB well suited for trailers, containers and remote equipment while Plaspy provides the ingestion, mapping and alerting needed for fleet management and anti-theft monitoring.

To learn more about Plaspy and how it integrates with compatible trackers visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior and manufacturer details verify information on the official Gosafe website https://gosafesystem.com/.
