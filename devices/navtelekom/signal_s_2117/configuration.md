---
slug: /navtelekom/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Navtelekom СИГНАЛ S-2117 for Plaspy with server settings and practical setup guidance for reliable fleet tracking
keywords:
  - Navtelekom СИГНАЛ S-2117 configuration
  - Navtelekom setup for Plaspy
  - СИГНАЛ S-2117 server configuration
  - GPS tracker configuration Plaspy
  - GNSS tracker fleet tracking
  - vehicle telemetry integration
  - fuel sensor RS-485 setup
  - 1-Wire temperature tracker
  - Plaspy server setup
  - tracker protocol detection
---

# Navtelekom - СИГНАЛ S-2117 Configuration

This page documents the public configuration context for using the Navtelekom СИГНАЛ S-2117 with Plaspy. It focuses on the practical server settings and the setup workflow required to point the device at Plaspy so the tracker can stream location, telemetry, and event data into the platform. The guidance here uses publicly available Plaspy server values and high-level manufacturer context without reproducing proprietary manuals.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. For the discontinued but still usable S-2117 you should consult Navtelekom configuration tools or the official manual for device-side procedures; this page explains what to enter for Plaspy compatibility and the typical workflow to validate connectivity.

## Configuration Overview

Configuring the СИГНАЛ S-2117 for Plaspy prepares the tracker to send GNSS position and telemetry into a centralized fleet management environment. The practical configuration ensures the device points to Plaspy's server endpoint and uses the correct transport settings so Plaspy can ingest data and surface it in dashboards, alerts, and reports.

- Point the tracker to the Plaspy server address so messages are routed to your account.
- Set the device to use the shared Plaspy port so Plaspy can receive and process incoming data.
- Choose the transport mode (UDP or TCP) on the tracker if required by the device configuration utility.
- Save and apply settings in the manufacturer tool and restart the tracker if prompted.
- Validate the tracker appears in Plaspy and check telemetry such as location, alarms, and fuel or temperature sensors.

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered as the primary server endpoint for the device.
- Server IP 54.85.159.138 can be used instead of the domain if the manufacturer tool requires an IP address.
- Port 8888 is the shared port Plaspy uses for all supported trackers.
- Transport support for UDP or TCP is available; configure the device to use the transport you prefer or that the device requires.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol type in Plaspy itself.

## Typical Requirements Before Setup

- Ensure the S-2117 has a valid GSM SIM and active cellular service if the device communicates via GSM as described by the manufacturer.
- Power the device with a stable supply and confirm the unit boots and reports status LEDs per the manual.
- Obtain access to the official Navtelekom configuration method or software such as the vendor tool referenced in the product materials.
- Know the device IMEI or unique identifier so you can correlate the device in Plaspy once it reports.
- Have your Plaspy account ready to receive and verify the device; confirm account scope and permissions for adding trackers.
- If the tracker uses removable connectors or external sensors (for example RS-485 fuel sensors or 1-Wire probes), ensure those cabling and sensors are connected as required before validation.

## How This Tracker Connects to Plaspy

When configured to point at Plaspy, the СИГНАЛ S-2117 sends its GNSS position, telemetry streams, and event messages to the shared Plaspy server and port. Plaspy ingests these messages and maps them into location, alarm, and telemetry channels available in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port including d.plaspy.com or 54.85.159.138 and port 8888.
- Plaspy automatically detects the protocol used by the tracker and parses incoming messages for location and telemetry data.
- GPS/GLONASS positions, alarm events, tamper alerts, and sensor telemetry are forwarded into Plaspy for live monitoring.
- Fuel readings from RS-485 sensors and temperature or identification data from 1-Wire interfaces are passed through as telemetry fields visible in Plaspy.
- Remote control events and two-way voice or panic signals are represented as events or controls in the platform according to device message types.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software recommended by the manufacturer, for example the vendor configurator or device web/serial tool described in the product documents.
2. In the server or reporting settings, enter the Plaspy server as d.plaspy.com or optionally 54.85.159.138 if an IP is required by the tool.
3. Set the destination port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection during configuration; both transports are supported by Plaspy.
5. Apply or save the device configuration using the manufacturer tool and follow any prompts to write settings to device flash memory.
6. Restart the device if the manufacturer procedure or tool requires a reboot to activate new network settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the device IMEI or identifier and confirming position and telemetry messages arrive.

## Example Configuration Commands

The S-2117 uses manufacturer-supplied tools and configuration procedures that can vary by firmware and toolset. Exact command strings or SMS commands are not provided here because Navtelekom’s official utilities and firmware determine the method. Use the vendor configuration utility or the device manual to enter the server domain or IP and the port 8888, and select UDP or TCP where applicable.

If you have specific command examples from Navtelekom or a configuration script supplied by the vendor, include them in your local documentation and apply them in the exact order recommended by the manufacturer.

## Configuration Notes

- The S-2117 is a discontinued model; firmware versions and vendor tools may differ across devices and software archives. Verify the tool and firmware you use match the device revision.
- TCP and UDP choices can affect delivery behavior. If the device and network support both, choose the transport that aligns with your network reliability and firewall rules.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so once the device points to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will attempt protocol detection.
- Keep a copy of the manufacturer configuration file or export before making changes so you can restore previous settings if needed.
- Refer to vendor documentation for sensor calibration and mapping (for example RS-485 fuel sensors or 1-Wire temperature probes) so telemetry fields are interpreted correctly in Plaspy.

## Why Use Plaspy with This Configuration

Integrating the Navtelekom СИГНАЛ S-2117 with Plaspy gives fleet operators a straightforward path to add GNSS location, sensor telemetry, and alarm reporting into a centralized platform. For fleets that require fuel monitoring, temperature logging, and driver identification, configuring the tracker to report to Plaspy delivers consolidated visibility and event-driven workflows across distributed assets.

To learn more about Plaspy and the platform capabilities visit https://www.plaspy.com. Please verify the latest device-specific configuration methods, firmware behavior, and manufacturer details at https://www.navtelecom.ru/ as vendor procedures and firmware may change over time.
