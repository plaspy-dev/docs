---
slug: /navtelekom/smart_s_4513/configuration
id: smart_s_4513-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4513 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom СМАРТ S-4513 showing Plaspy server settings and practical setup steps for integration
keywords:
  - Navtelekom СМАРТ S-4513 configuration
  - Navtelekom GPS tracker setup
  - SMART S-4513 Plaspy configuration
  - Navtelekom tracker server configuration
  - Plaspy tracker setup guide
  - vehicle tracker Plaspy integration
  - fleet management tracker configuration
  - GPS tracker connectivity settings
  - SMART S-4513 telemetry setup
  - Navtelekom device configuration
---

# Navtelekom - СМАРТ S-4513 Configuration

This page documents the public configuration context for using the Navtelekom СМАРТ S-4513 tracker with Plaspy. It focuses on the practical, platform-facing settings and workflows you will use to point the device at Plaspy for real-time tracking and telemetry ingestion. Use this guide alongside the device manufacturer documentation to complete any manufacturer-side setup steps.

Plaspy accepts data from supported trackers using shared server settings and automatic protocol detection. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so verify device-specific options in Navtelekom configuration utilities before applying settings described here.

## Configuration Overview

The goal of configuring the СМАРТ S-4513 for Plaspy is to prepare the tracker to reliably send GNSS positions and telemetry to the Plaspy ingestion endpoint so the device becomes visible and usable in Plaspy dashboards, alerts, and reports.

- Point the tracker to the Plaspy server endpoint so data is routed to the platform.
- Choose the correct transport (UDP or TCP) on the device if required by the manufacturer tool.
- Ensure cellular connectivity and APN settings are correct so the tracker can reach the Plaspy server.
- Save and apply the device configuration and restart the tracker when required.
- Validate that the device reports to Plaspy and that location and sensor telemetry appear in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device transport selection  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for ingestion

Include these values when configuring the tracker to ensure it communicates with Plaspy.

## Typical Requirements Before Setup

- The СМАРТ S-4513 must be powered and installed per the manufacturer recommendations with reliable power and ground.
- Active cellular connectivity with a data enabled SIM (dual SIM redundancy is supported on this model) and correct APN settings for the mobile operator.
- Access to Navtelekom configuration tools or workflow used for the device such as DRC, NTC Configurator, or the vendor supplied configurator.
- A Plaspy account or project where devices are registered so you can verify the device appears after configuration.
- Physical or remote access to the unit to apply settings and reboot the device if required.
- Knowledge of device identifiers and telemetry mapping used by your Plaspy instance; confirm with your Plaspy administrator if needed.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the СМАРТ S-4513 transmits GNSS positions and device telemetry over its cellular link to the shared Plaspy ingestion endpoint. Plaspy receives device messages on the common port and uses automatic protocol detection to interpret the tracker data without needing a different port per model.

- The device is configured to send outgoing packets to d.plaspy.com or directly to 54.85.159.138.
- All Plaspy devices use port 8888 for ingestion so device-side port configuration should be set to 8888.
- Transport can be UDP or TCP; choose the transport option supported or preferred during configuration.
- Plaspy automatically detects the tracker protocol so the platform can parse supported tracker messages without custom port mapping.
- After successful configuration the tracker’s positions and telemetry become visible in Plaspy for live tracking and historical playback.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software for the СМАРТ S-4513 such as DRC, NTC Configurator, or the manufacturer tool provided with the device.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or as the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (note Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP in the device transport settings if the device requires a transport selection.
5. Apply or save the configuration in the manufacturer tool and confirm there are no configuration errors.
6. Restart the device if required by the configurator or after saving settings to ensure new network parameters take effect.
7. Validate that the device reports to Plaspy by checking device visibility and incoming telemetry in your Plaspy account.

## Example Configuration Commands

The model configuration content provided for this page does not include device-specific command strings. Navtelekom devices are commonly configured through manufacturer tools (DRC, NTC Configurator) or vendor utilities rather than a single public command set. Because exact commands and SMS or console syntax can vary by firmware and tool, consult the Navtelekom user guide and the configurator documentation for exact command formats.

When using a manufacturer tool, enter the server as d.plaspy.com or 54.85.159.138 and set port 8888, then save and restart the device. If your workflow uses SMS-based configuration or direct command strings, follow the official Navtelekom command reference to apply those values.

## Configuration Notes

- Firmware differences and hardware revisions can change configuration menus, available transports, and supported command syntax; always confirm the firmware version before following a workflow.
- For cellular connectivity verify the SIM card is active, data is enabled, and the APN is set correctly in the manufacturer tool if required.
- Choose UDP or TCP based on installer preference and device behavior; UDP is commonly used for low-overhead telemetry while TCP may be chosen for reliability depending on device and network.
- Dual SIM behavior and failover policies are configured on the device; validate how the S-4513 handles SIM switching in your installation.
- Keep a copy of the original device configuration and test changes in a controlled environment before rolling out to production vehicles.

## Why Use Plaspy with This Configuration

Using the Navtelekom СМАРТ S-4513 with Plaspy provides a practical path for fleets to ingest GNSS positions and rich telemetry into an operational platform. The tracker’s cellular redundancy, backup battery, and broad sensor and I/O support let integrators capture location, fuel, and sensor data and forward it to Plaspy for mapping, alerts, and reporting.

To learn more about Plaspy and how it ingests tracker data visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; please verify the latest setup instructions and technical notes on the Navtelekom website https://www.navtelecom.ru/ before applying configuration in a production environment.
