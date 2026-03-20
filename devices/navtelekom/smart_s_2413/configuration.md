---
slug: /navtelekom/smart_s_2413/configuration
id: smart_s_2413-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2413 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S-2413 showing Plaspy server settings and practical setup steps for fleet tracking
keywords:
  - Navtelekom SMART S-2413 configuration
  - Navtelekom SMART S-2413 setup
  - SMART S-2413 Plaspy
  - Navtelekom tracker configuration
  - SMART S-2413 server configuration
  - Plaspy device setup
  - SMART S-2413 GPS tracker setup
  - Navtelekom GPS platform setup
  - SMART S-2413 installation guide
  - Plaspy tracker compatibility
---

# Navtelekom - SMART S-2413 Configuration

This page provides the public configuration context for using the Navtelekom SMART S-2413 with Plaspy. It summarizes the practical server settings and common workflow steps used to point SMART S-2413 units at Plaspy for real time tracking and telemetry ingestion. The guidance below is based on publicly available device characteristics and Plaspy server details and is intended to help fleets, integrators, and installers complete a standard setup.

The SMART S-2413 is Plaspy compatible out of the box and supports remote and local configuration through Navtelekom tools. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so always confirm device specific commands and workflows in the official Navtelekom documentation or with your installer tools.

## Configuration Overview

Preparing a SMART S-2413 for Plaspy involves configuring the device to report to the Plaspy server endpoint, ensuring reliable cellular connectivity, and validating that reported telemetry appears in the Plaspy platform. The goal is to establish stable reporting so Plaspy can provide live location, history, and event monitoring.

- Point the device to the Plaspy server endpoint and confirm transport settings.
- Ensure the device has a working SIM and cellular connectivity for telemetry uplink.
- Save and apply the configuration in the Navtelekom configuration tool or via remote management.
- Restart or cycle the device if required so it begins reporting to Plaspy.
- Verify the device is visible in Plaspy and that telemetry and events are being received.

## Plaspy Server Settings

Configure the SMART S-2413 to report to the Plaspy endpoint using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol so devices using these settings will be identified without manual protocol selection on the server side

Note: Plaspy uses the same port for all supported devices and handles protocol identification automatically.

## Typical Requirements Before Setup

- Device powered and accessible for configuration either locally or via the Navtelekom remote configuration service.
- Active SIM card installed in the SMART S-2413 and cellular coverage at the install location.
- Access to Navtelekom configuration tools such as NTC Configurator or the vendor remote configuration service for your unit.
- IMEI or device identifier available for any platform registration or verification steps.
- Basic knowledge of the operator APN and authentication if required for the SIM operator.
- Patience to apply firmware or configuration changes and to restart the unit when needed.

## How This Tracker Connects to Plaspy

The SMART S-2413 sends periodic position and telemetry packets over the cellular network to the Plaspy server endpoint. When configured to use the Plaspy server domain or IP and the shared port, the device’s telematics stream is ingested by Plaspy and made available for live monitoring, history, and event alerts.

- Device sends standard telematics streams over TCP or UDP to d.plaspy.com on port 8888.
- Plaspy receives and automatically detects the tracker protocol for correct parsing.
- Location, telemetry, and digital input events are forwarded into the Plaspy platform for live dashboards and reporting.
- Repeated reporting ensures visibility and allows Plaspy to track route history and trigger configured alerts.
- If remote configuration is used, Navtelekom tools can change the reporting endpoint to d.plaspy.com or the numeric IP as required.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software such as NTC Configurator or the vendor remote configuration service. This is the recommended entry point for changing network and server parameters.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 depending on the tool and preference.
3. Set the device port to 8888. Plaspy uses this same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Save or apply the configuration in the tool so the device writes the new server parameters.
6. Restart the SMART S-2413 if required by the firmware or configuration tool to initiate new network sessions.
7. Validate that the device reports to Plaspy by confirming the device appears in your Plaspy instance and that location and telemetry packets are received.

## Example Configuration Commands

The SMART S-2413 supports both local and remote configuration methods provided by Navtelekom. Exact command syntax and available parameters vary across firmware versions and manufacturer tools. Because manufacturer tools differ, there are no universal commands included here. Use the Navtelekom NTC Configurator or DRC remote service to apply the following public settings:

- Server address: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Consult the Navtelekom configuration utility for the exact command lines or SMS commands supported by your firmware revision. If you have manufacturer supplied command examples, apply them in the order the vendor documentation recommends and keep placeholders such as APN values consistent with your mobile operator.

## Configuration Notes

- Firmware variations and hardware revisions can change available parameters and exact menu labels in the configurator; always check the device firmware version before applying settings.
- Choose UDP or TCP according to the device options and local network conditions; Plaspy accepts either transport on port 8888 and detects the protocol automatically.
- Ensure the device APN and SIM authentication are correct for the cellular operator so the tracker can establish a data session.
- Use the Navtelekom NTC Configurator or DRC remote management for bulk or remote deployments to reduce manual on vehicle configuration.
- Record the device IMEI and configuration state after setup so troubleshooting is faster if telemetry is not received.

## Why Use Plaspy with This Configuration

Using the SMART S-2413 with Plaspy gives operators a straightforward path to integrate vehicle location and telemetry into a single fleet management platform. The device’s GLONASS/GPS reception, flexible I O channels, and remote configuration options make it practical for fleet tracking, sensor telemetry, and event driven alerts that Plaspy can consume for operational oversight.

Learn more about Plaspy and how it handles device ingestion, dashboards, and alerts at https://www.plaspy.com. Manufacturer configuration methods, firmware behavior, and device details can change over time, so verify the latest device specific instructions and firmware information on the official Navtelekom website https://www.navtelecom.ru/.
